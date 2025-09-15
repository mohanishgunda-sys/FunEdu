// src/components/auth/Register.jsx
import React, { useState } from "react";
import "./login.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    contact: "",
    organisation: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || data.errors?.[0]?.msg || "Registration failed");
      } else {
        setMessage("Registered successfully! You can now log in.");
        // optionally redirect to login page
        // window.location.href = "/login";
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
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
        <p className="login-subtitle">Sign up to start your learning journey</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Class Name</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              placeholder="Enter class (optional)"
            />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group">
            <label>Organisation</label>
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Enter organisation"
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
              placeholder="Enter email"
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

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {message && <p className="login-footer" style={{ marginTop: "1rem" }}>{message}</p>}
        </form>

        <p className="login-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
