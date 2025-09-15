const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../Models/user');
const argon2 = require('argon2');
const passport = require('passport');

// Registration endpoint
router.post(
  '/register',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be between 2 and 50 characters'),
    
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    
    body('contact')
      .optional()
      .isMobilePhone('any')
      .withMessage('Invalid phone number format'),
    
    body('className')
      .optional()
      .trim()
      .isLength({ max: 50 })
      .withMessage('Class name must be less than 50 characters'),
    
    body('organisation')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('Organisation name must be less than 100 characters'),
    
    body('username')
      .optional()
      .trim()
      .isLength({ min: 3, max: 30 })
      .withMessage('Username must be between 3 and 30 characters')
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage('Username can only contain letters, numbers, and underscores')
  ],
  async (req, res) => {
    try {
      // Check validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          error: 'Validation failed',
          errors: errors.array() 
        });
      }

      const { name, className, contact, organisation, email, password, username } = req.body;

      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      // Handle username generation or validation
      let finalUsername = username && username.trim();
      if (!finalUsername) {
        // Auto-generate username from email
        const base = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
        let candidate = base || 'user';
        let suffix = 0;
        
        while (await User.findOne({ username: candidate })) {
          suffix += 1;
          candidate = `${base || 'user'}${suffix}`;
        }
        finalUsername = candidate;
      } else {
        // Check if provided username is available
        const existingUsername = await User.findOne({ username: finalUsername });
        if (existingUsername) {
          return res.status(400).json({ error: 'Username already taken' });
        }
      }

      // Hash password
      const hashedPassword = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16, // 64 MB
        timeCost: 3,
        parallelism: 1,
      });

      // Create new user
      const newUser = new User({
        username: finalUsername,
        name: name.trim(),
        className: className ? className.trim() : undefined,
        contact: contact ? contact.trim() : undefined,
        organisation: organisation ? organisation.trim() : undefined,
        email: email.toLowerCase(),
        password: hashedPassword,
      });

      await newUser.save();
      console.log('✅ New user registered:', { username: finalUsername, email });

      // Auto-login after registration
      req.login(newUser, (err) => {
        if (err) {
          console.error('Auto-login error:', err);
          return res.status(500).json({ error: 'Registration successful but login failed' });
        }
        
        const safeUser = {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          name: newUser.name,
          className: newUser.className,
          contact: newUser.contact,
          organisation: newUser.organisation
        };
        
        return res.status(201).json({ 
          success: true, 
          message: 'Registration successful',
          user: safeUser 
        });
      });
    } catch (err) {
      console.error('Registration error:', err);
      return res.status(500).json({ error: 'Server error during registration' });
    }
  }
);

// Login endpoint
router.post('/login', (req, res, next) => {
  // Validate input
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Login authentication error:', err);
      return res.status(500).json({ error: 'Server error during login' });
    }
    
    if (!user) {
      console.log('Login failed:', info?.message || 'Invalid credentials');
      return res.status(401).json({ error: info?.message || 'Invalid credentials' });
    }
    
    req.logIn(user, (err) => {
      if (err) {
        console.error('Login session error:', err);
        return res.status(500).json({ error: 'Login successful but session creation failed' });
      }
      
      console.log('✅ User logged in:', { username: user.username, email: user.email });
      
      const safeUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        className: user.className,
        contact: user.contact,
        organisation: user.organisation
      };
      
      return res.json({ 
        success: true, 
        message: 'Login successful',
        user: safeUser 
      });
    });
  })(req, res, next);
});

// Logout endpoint
router.post('/logout', (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: true, message: 'Already logged out' });
  }

  const username = req.user?.username;
  
  req.logout(function (err) {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }
    
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destroy error:', err);
        // Don't fail the logout if session destroy fails
      }
      
      res.clearCookie('funedu.sid'); // clear session cookie
      console.log('✅ User logged out:', username);
      return res.json({ success: true, message: 'Logout successful' });
    });
  });
});

// Get current user endpoint
router.get('/me', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const safeUser = {
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    name: req.user.name,
    className: req.user.className,
    contact: req.user.contact,
    organisation: req.user.organisation
  };

  return res.json({ user: safeUser });
});

// Get user profile endpoint (protected)
router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const userProfile = {
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    name: req.user.name,
    className: req.user.className,
    contact: req.user.contact,
    organisation: req.user.organisation,
    createdAt: req.user.createdAt
  };

  return res.json({ profile: userProfile });
});

module.exports = router;