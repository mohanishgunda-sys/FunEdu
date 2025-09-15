import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './auth.css';

interface RegisterFormData {
  name: string;
  className: string;
  contact: string;
  organisation: string;
  email: string;
  password: string;
  confirmPassword: string;
  username?: string;
}

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    className: '',
    contact: '',
    organisation: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const validateStep1 = (): boolean => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const validateStep2 = (): boolean => {
    if (!formData.name || !formData.className || !formData.contact || !formData.organisation) {
      setError('Please fill in all fields');
      return false;
    }
    
    return true;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validateStep2()) {
      return;
    }

    setLoading(true);

    try {
      // Prepare data for backend
      const registrationData = {
        name: formData.name,
        className: formData.className,
        contact: formData.contact,
        organisation: formData.organisation,
        email: formData.email,
        password: formData.password,
        username: formData.username || undefined // Let backend generate if empty
      };

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for session cookies
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          throw new Error(data.errors[0].msg);
        }
        throw new Error(data.error || 'Registration failed');
      }

      // Auto-login after successful registration
      login(data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const goBackToStep1 = () => {
    setCurrentStep(1);
    setError(null);
  };

  return (
    <div className="login-container">
      {/* Floating Student Icons */}
      <div className="student">👨‍🎓</div>
      <div className="student">👩‍🎓</div>
      <div className="student">📚</div>
      <div className="student">🎓</div>
      <div className="student">✏️</div>
      <div className="student">🏆</div>

      <div className="login-card">
        <h2 className="login-title">Join FunEdu!</h2>
        <p className="login-subtitle">
          {currentStep === 1 ? 'Create your account - Step 1 of 2' : 'Complete your profile - Step 2 of 2'}
        </p>

        {error && (
          <div className="alert alert-danger" style={{
            background: '#fee',
            border: '1px solid #fcc',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '20px',
            color: '#c33',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        {currentStep === 1 ? (
          <form className="login-form" onSubmit={handleStep1Submit}>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username (Optional)</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose a username (leave blank to auto-generate)"
                value={formData.username}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password (min 6 characters)"
                value={formData.password}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className="btn-login" disabled={loading}>
              Next Step
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleStep2Submit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="className">Class *</label>
              <input
                type="text"
                id="className"
                name="className"
                placeholder="Enter your class"
                value={formData.className}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number *</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="organisation">Organization *</label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                placeholder="Enter your organization"
                value={formData.organisation}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" className="btn-back" onClick={goBackToStep1} disabled={loading}>
                Back
              </button>
              <button type="submit" className="btn-login" style={{ flex: 1 }} disabled={loading}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>
        )}

        <div className="login-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;