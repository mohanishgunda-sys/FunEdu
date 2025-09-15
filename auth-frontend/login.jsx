// src/components/auth/Login.jsx
import React, { useState } from "react";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Login failed. Check your credentials.");
      } else {
        setMessage("Login successful!");
        console.log("Logged in user:", data.user);

        // Optional: redirect to dashboard or homepage
        // window.location.href = "/dashboard";
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

      {/* Login card */}
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Log in to continue your learning journey</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Username or Email</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter username or email"
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
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p className="login-footer" style={{ marginTop: "1rem" }}>
              {message}
            </p>
          )}
        </form>

        <p className="login-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
