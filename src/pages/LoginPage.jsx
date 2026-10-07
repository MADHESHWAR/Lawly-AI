import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Lock, Mail, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loginAsDemoCitizen, loginAsDemoAdmin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    login(email, password);
    navigate('/dashboard');
  };

  const handleDemoCitizen = () => {
    loginAsDemoCitizen();
    navigate('/dashboard');
  };

  const handleDemoAdmin = () => {
    loginAsDemoAdmin();
    navigate('/admin');
  };

  return (
    <div className="auth-page-root animate-fade-in">
      <div className="container container-narrow">
        <div className="auth-card card">
          <div className="auth-header text-center">
            <div className="auth-icon-wrap mx-auto">
              <Scale size={32} className="auth-logo-icon" />
            </div>
            <h1 className="auth-title">Welcome to Lawly</h1>
            <p className="auth-subtitle">
              Sign in to access your previous legal analyses and saved statutory provisions.
            </p>
          </div>

          {/* Quick Demo Logins for Recruiters & Reviewers */}
          <div className="demo-accounts-box">
            <span className="demo-box-label">Quick 1-Click Evaluation Logins:</span>
            <div className="demo-buttons-grid">
              <button 
                type="button" 
                className="btn btn-outline btn-sm demo-btn"
                onClick={handleDemoCitizen}
              >
                <User size={14} /> Log in as Demo Citizen
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm demo-btn"
                onClick={handleDemoAdmin}
              >
                <ShieldCheck size={14} /> Log in as Knowledge Admin
              </button>
            </div>
          </div>

          {error && (
            <div className="form-error-banner">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-with-icon">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="name@example.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-with-link">
                <label htmlFor="password" className="form-label">Password</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("In demo mode: Use 1-Click buttons above or any sample password."); }} className="forgot-link">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">
              <span>Sign In</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="auth-footer text-center mt-4">
            <p className="auth-switch-text">
              Don't have an account? <Link to="/register" className="auth-switch-link">Create one for free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
