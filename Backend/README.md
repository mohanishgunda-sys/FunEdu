# FunEdu Backend

Backend server for the FunEdu educational platform.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update the environment variables:
     ```
     MONGO_URI=mongodb://localhost:27017/funedu
     SESSION_SECRET=your-super-secret-session-key
     CLIENT_ORIGIN=http://localhost:5173
     PORT=5000
     NODE_ENV=development
     ```

3. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community

   # On Ubuntu/Debian
   sudo systemctl start mongod

   # On Windows
   net start MongoDB
   ```

4. **Run the Server**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info
- `GET /api/auth/profile` - Get user profile

### Other Routes

- `GET /api/health` - Health check
- `GET /api/protected` - Protected route example

## Database Schema

### User Model
```javascript
{
  username: String (unique, required),
  name: String (required),
  className: String (optional),
  contact: String (optional),
  organisation: String (optional),
  email: String (unique, required),
  password: String (hashed with Argon2),
  createdAt: Date (default: now)
}
```

## Security Features

- Password hashing with Argon2
- Session-based authentication with Passport.js
- CORS protection
- Input validation with express-validator
- Session storage in MongoDB
- Secure cookie configuration

## Development

The server uses:
- Express.js for the web framework
- MongoDB with Mongoose for database
- Passport.js for authentication
- Argon2 for password hashing
- Express-validator for input validation
- Morgan for logging