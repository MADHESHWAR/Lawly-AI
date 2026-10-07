import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DisclaimerBanner = ({ variant = 'inline' }) => {
  if (variant === 'compact') {
    return (
      <div className="disclaimer-compact">
        <Info size={14} className="disclaimer-compact-icon" />
        <span>For information only — not legal advice.</span>
        <Link to="/disclaimer" className="disclaimer-compact-link">Read full disclaimer</Link>
      </div>
    );
  }

  return (
    <div className="disclaimer-box">
      <div className="disclaimer-box-header">
        <ShieldAlert size={18} className="disclaimer-box-icon" />
        <span className="disclaimer-box-title">Important Legal Information Notice</span>
      </div>
      <p className="disclaimer-box-text">
        Lawly provides general legal information for educational and informational purposes. It does not provide legal advice, create an advocate-client relationship, or replace a qualified lawyer. Laws may change and their application depends on the specific facts and jurisdiction. Verify important information with an appropriate legal professional or official source.
      </p>
    </div>
  );
};
