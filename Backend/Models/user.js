const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  className: { type: String, trim: true },
  contact: { type: String, trim: true },
  organisation: { type: String, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true }, // hashed password (argon2)
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
