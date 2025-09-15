require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');

// init
const app = express();
const PORT = process.env.PORT || 5000;

// mongodb
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    credentials: true, // allow session cookie from browser
  })
);

// session (stored in MongoDB)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // set true in production (requires https)
    },
  })
);

// passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/api/auth', authRoutes);

// test protected route example
app.get('/api/protected', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ error: 'Unauthorized' });
  res.json({ message: 'You are authenticated', user: req.user });
});

// error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Server error' });
});

// start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
