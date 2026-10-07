import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Scale, PhoneCall, User, ShieldCheck, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="navbar-root">
      <div className="navbar-container">
        {/* Brand */}
        <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-wrapper">
            <Scale className="brand-icon" size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Lawly</span>
            <span className="brand-tagline">Indian Legal Information</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/analyze" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Analyze Issue
          </NavLink>
          <NavLink to="/topics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Legal Topics
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Search Laws
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          {isAdmin && (
            <NavLink to="/admin" className={({ isActive }) => `nav-link nav-link-admin ${isActive ? 'active' : ''}`}>
              <ShieldCheck size={16} /> Admin KB
            </NavLink>
          )}
        </nav>

        {/* Actions & Profile */}
        <div className="navbar-actions">
          {/* Emergency Helpline Quick Badge */}
          <a href="#emergency" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('emergency-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else navigate('/#emergency-section');
          }} className="emergency-quick-btn" title="Emergency Legal & Police Helplines">
            <PhoneCall size={16} className="emergency-icon-pulse" />
            <span className="emergency-btn-text">112 Helpline</span>
          </a>

          {/* User Account / Auth */}
          {isAuthenticated ? (
            <div className="user-dropdown-container">
              <button 
                type="button" 
                className="user-profile-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                aria-expanded={userDropdownOpen}
                aria-label="User account menu"
              >
                <div className="user-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="user-name-display">{user.name.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu animate-fade-in">
                  <div className="dropdown-user-header">
                    <p className="user-header-name">{user.name}</p>
                    <p className="user-header-email">{user.email}</p>
                    <span className={`badge ${user.role === 'admin' ? 'badge-primary' : 'badge-neutral'} mt-1`}>
                      {user.role === 'admin' ? 'Knowledge Admin' : 'Citizen Account'}
                    </span>
                  </div>
                  <div className="dropdown-divider" />
                  <Link to="/dashboard" className="dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                    User Dashboard
                  </Link>
                  <Link to="/history" className="dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                    My Legal Queries
                  </Link>
                  <Link to="/profile" className="dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                    Privacy & Profile
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="dropdown-item admin-item" onClick={() => setUserDropdownOpen(false)}>
                      Admin Knowledge Base
                    </Link>
                  )}
                  <div className="dropdown-divider" />
                  <button type="button" className="dropdown-item dropdown-logout-btn" onClick={handleLogout}>
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons-group">
              <Link to="/login" className="btn btn-outline btn-sm">Log in</Link>
              <Link to="/analyze" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}

          {/* Mobile Menu Hamburger Toggle */}
          <button 
            type="button" 
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-links">
            <NavLink to="/" end className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/analyze" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
              Analyze My Issue
            </NavLink>
            <NavLink to="/topics" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
              Explore Legal Topics
            </NavLink>
            <NavLink to="/search" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
              Search Indian Laws & Acts
            </NavLink>
            <NavLink to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
              About Lawly & Safety
            </NavLink>
            {isAdmin && (
              <NavLink to="/admin" className="mobile-link mobile-admin-link" onClick={() => setMobileMenuOpen(false)}>
                Admin Knowledge Base
              </NavLink>
            )}

            <div className="mobile-drawer-divider" />

            {isAuthenticated ? (
              <div className="mobile-user-section">
                <p className="mobile-user-greeting">Signed in as <strong>{user.name}</strong></p>
                <div className="mobile-user-links">
                  <Link to="/dashboard" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Link to="/history" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Saved Questions
                  </Link>
                  <Link to="/profile" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Privacy & Profile
                  </Link>
                  <button type="button" className="btn btn-outline btn-block mt-2" onClick={handleLogout}>
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="mobile-auth-cta">
                <Link to="/login" className="btn btn-outline btn-block" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
                <Link to="/analyze" className="btn btn-primary btn-block mt-2" onClick={() => setMobileMenuOpen(false)}>
                  Analyze Legal Issue
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
