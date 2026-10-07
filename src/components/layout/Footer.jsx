import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-root">
      {/* Official Disclaimer Banner in Footer */}
      <div className="footer-disclaimer-strip">
        <div className="container">
          <div className="footer-disclaimer-content">
            <ShieldCheck size={20} className="footer-disclaimer-icon" />
            <p>
              <strong>Important Statutory Notice:</strong> Lawly provides general legal information for educational and informational purposes. It does not provide legal advice, create an advocate-client relationship, or replace an enrolled advocate under the Advocates Act, 1961. Always consult a qualified legal professional for personal legal advice.
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <Scale size={24} className="footer-logo-icon" />
              <span className="footer-brand-title">Lawly</span>
            </div>
            <p className="footer-tagline">
              Understand your rights. Know your options.
            </p>
            <p className="footer-subtext">
              An AI-assisted Indian legal information navigation system grounded in verified statutory codes from the Legislative Department, Government of India.
            </p>
            <div className="footer-safety-badge">
              <span className="badge badge-success">
                <HeartHandshake size={14} /> 100% Free Public Legal Info
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/analyze">Analyze My Issue</Link></li>
              <li><Link to="/topics">Legal Topics Explorer</Link></li>
              <li><Link to="/search">Search Indian Acts</Link></li>
              <li><Link to="/about">About Lawly & Ethics</Link></li>
              <li><Link to="/dashboard">User Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Privacy */}
          <div className="footer-col">
            <h4 className="footer-col-title">Legal Transparency</h4>
            <ul className="footer-links">
              <li><Link to="/disclaimer">Full Legal Disclaimer</Link></li>
              <li><Link to="/privacy">Privacy & Data Retention</Link></li>
              <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer">India Code Repository ↗</a></li>
              <li><a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer">NALSA Legal Aid ↗</a></li>
              <li><a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer">e-Daakhil Consumer Portal ↗</a></li>
            </ul>
          </div>

          {/* Column 4: Emergency Contacts */}
          <div className="footer-col" id="emergency-section">
            <h4 className="footer-col-title emergency-col-title">
              <PhoneCall size={16} /> Indian Helplines
            </h4>
            <ul className="footer-emergency-list">
              <li>
                <span className="helpline-num">112</span>
                <span className="helpline-label">National Emergency (Police/Fire/Ambulance)</span>
              </li>
              <li>
                <span className="helpline-num">181</span>
                <span className="helpline-label">Women in Distress Helpline</span>
              </li>
              <li>
                <span className="helpline-num">15100</span>
                <span className="helpline-label">NALSA Free Legal Aid (Toll Free)</span>
              </li>
              <li>
                <span className="helpline-num">1930</span>
                <span className="helpline-label">Cyber Financial Fraud Help</span>
              </li>
              <li>
                <span className="helpline-num">1915</span>
                <span className="helpline-label">National Consumer Helpline (NCH)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-strip">
          <p>© {new Date().getFullYear()} Lawly. Developed for public legal empowerment across India.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <span>•</span>
            <Link to="/disclaimer">Disclaimer</Link>
            <span>•</span>
            <Link to="/about">Methodology</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
