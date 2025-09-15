import React, { useState } from "react";
import "./styles.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    contact: "",
    organisation: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", formData);
    // Call backend API here
  };

  return (
    <div className="login-container">
      {/* Floating students */}
      <div className="student">🎓</div>
      <div className="student">👩‍🎓</div>
      <div className="student">👨‍🎓</div>
      <div className="student">📚</div>
      <div className="student">📝</div>
      <div className="student">🎒</div>

      {/* Register card */}
      <div className="login-card">
        <h2 className="login-title">Create Account ✨</h2>
        <p className="login-subtitle">
          Fill in the details to start your learning journey
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Class</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              placeholder="Enter your class"
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
            />
          </div>

          <div className="form-group">
            <label>Organisation / School</label>
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              required
              placeholder="Enter your school/organisation"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-login">
            Register
          </button>
        </form>

        <p className="login-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
