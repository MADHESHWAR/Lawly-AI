import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { INDIAN_STATES } from '../data/mockLegalData';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('Maharashtra');
  const [termsAgreed, setTermsAgreed] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill all required fields.');
      return;
    }
    if (!termsAgreed) {
      setError('Please acknowledge the informational terms.');
      return;
    }
    register(name, email, password, state);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page-root animate-fade-in">
      <div className="container container-narrow">
        <div className="auth-card card">
          <div className="auth-header text-center">
            <div className="auth-icon-wrap mx-auto">
              <Scale size={32} className="auth-logo-icon" />
            </div>
            <h1 className="auth-title">Create your Lawly Account</h1>
            <p className="auth-subtitle">
              Save your legal analyses, track statutory updates, and access your dispute history securely.
            </p>
          </div>

          {error && (
            <div className="form-error-banner">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="reg-name" className="form-label">Full Name</label>
              <input
                id="reg-name"
                type="text"
                className="form-control"
                placeholder="e.g. Priya Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg-email" className="form-label">Email Address</label>
              <input
                id="reg-email"
                type="email"
                className="form-control"
                placeholder="priya@example.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg-state" className="form-label">Primary Indian State / UT</label>
              <select
                id="reg-state"
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {INDIAN_STATES.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="reg-pass" className="form-label">Password</label>
              <input
                id="reg-pass"
                type="password"
                className="form-control"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="terms-checkbox-group">
              <label className="checkbox-custom-label">
                <input
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                />
                <span>
                  I understand that Lawly provides general legal information and education, not legal advice or representation.
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">
              <span>Create Free Account</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="auth-footer text-center mt-4">
            <p className="auth-switch-text">
              Already have an account? <Link to="/login" className="auth-switch-link">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
