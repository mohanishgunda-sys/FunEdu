const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/user');
const argon2 = require('argon2');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'username', passwordField: 'password' }, // frontend sends `username` and `password`
      async (username, password, done) => {
        try {
          const user = await User.findOne({ $or: [{ username }, { email: username }] });
          if (!user) return done(null, false, { message: 'Incorrect username or email.' });

          const valid = await argon2.verify(user.password, password);
          if (!valid) return done(null, false, { message: 'Incorrect password.' });

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id).select('-password');
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
