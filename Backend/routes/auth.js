
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../Models/user');
const argon2 = require('argon2');
const passport = require('passport');





router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password minimum 6 chars'),
    body('contact').optional().isMobilePhone('any').withMessage('Invalid phone number'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, className, contact, organisation, email, password, username } = req.body;

    try {
  
      if (await User.findOne({ email })) {
        return res.status(400).json({ error: 'Email already in use' });
      }

      let finalUsername = username && username.trim();
      if (!finalUsername) {
        const base = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
        let candidate = base || 'user';
        let suffix = 0;
        while (await User.findOne({ username: candidate })) {
          suffix += 1;
          candidate = `${base || 'user'}${suffix}`;
        }
        finalUsername = candidate;
      } else {
        if (await User.findOne({ username: finalUsername })) {
          return res.status(400).json({ error: 'Username already taken' });
        }
      }

      const hashedPassword = await argon2.hash(password);

      const newUser = new User({
        username: finalUsername,
        name,
        className,
        contact,
        organisation,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      
      req.login(newUser, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Could not log in after registration' });
        }
        const safeUser = { id: newUser._id, username: newUser.username, email: newUser.email, name: newUser.name };
        return res.json({ success: true, user: safeUser });
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  }
);


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ error: info?.message || 'Invalid credentials' });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      const safeUser = { id: user._id, username: user.username, email: user.email, name: user.name };
      return res.json({ success: true, user: safeUser });
    });
  })(req, res, next);
});


router.post('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    req.session.destroy((err) => {
      if (err) console.error('session destroy error:', err);
      res.clearCookie('connect.sid'); // clear session cookie
      return res.json({ success: true });
    });
  });
});


router.get('/me', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ error: 'Not authenticated' });

  return res.json({ user: req.user });
});

module.exports = router;
