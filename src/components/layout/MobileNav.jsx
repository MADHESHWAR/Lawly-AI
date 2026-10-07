import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sparkles, BookOpen, Search, User } from 'lucide-react';

export const MobileNav = () => {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <NavLink 
        to="/" 
        end 
        className={({ isActive }) => `mobile-bottom-item ${isActive ? 'active' : ''}`}
      >
        <Home size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">Home</span>
      </NavLink>

      <NavLink 
        to="/topics" 
        className={({ isActive }) => `mobile-bottom-item ${isActive ? 'active' : ''}`}
      >
        <BookOpen size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">Topics</span>
      </NavLink>

      {/* Featured Central Action */}
      <NavLink 
        to="/analyze" 
        className={({ isActive }) => `mobile-bottom-item mobile-bottom-featured ${isActive ? 'active' : ''}`}
      >
        <div className="bottom-featured-circle">
          <Sparkles size={22} />
        </div>
        <span className="bottom-nav-label">Analyze</span>
      </NavLink>

      <NavLink 
        to="/search" 
        className={({ isActive }) => `mobile-bottom-item ${isActive ? 'active' : ''}`}
      >
        <Search size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">Search</span>
      </NavLink>

      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => `mobile-bottom-item ${isActive ? 'active' : ''}`}
      >
        <User size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">My Cases</span>
      </NavLink>
    </nav>
  );
};
