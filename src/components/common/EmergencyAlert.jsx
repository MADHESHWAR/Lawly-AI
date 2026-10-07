import React from 'react';
import { AlertTriangle, Phone, ShieldAlert, ArrowRight } from 'lucide-react';
import { EMERGENCY_HELPLINES } from '../../data/mockLegalData';

export const EmergencyAlert = ({ detectedTerm, onProceedAnyway }) => {
  return (
    <div className="emergency-alert-container animate-fade-in" role="alert">
      <div className="emergency-alert-header">
        <div className="emergency-alert-icon-wrap">
          <AlertTriangle size={28} className="emergency-header-icon" />
        </div>
        <div>
          <h2 className="emergency-alert-title">This may require immediate professional help</h2>
          <p className="emergency-alert-subtitle">
            Your query mentions terms that may indicate an urgent risk or emergency situation
            {detectedTerm ? ` ("${detectedTerm}")` : ''}. Lawly cannot provide emergency intervention or immediate legal representation.
          </p>
        </div>
      </div>

      <div className="emergency-helplines-grid">
        {EMERGENCY_HELPLINES.map((helpline, idx) => (
          <div key={idx} className="emergency-card">
            <div className="emergency-card-top">
              <span className="emergency-badge">{helpline.badge}</span>
              <a href={`tel:${helpline.number}`} className="emergency-call-btn">
                <Phone size={14} /> Call {helpline.number}
              </a>
            </div>
            <h4 className="emergency-agency-name">{helpline.name}</h4>
            <p className="emergency-agency-desc">{helpline.description}</p>
          </div>
        ))}
      </div>

      <div className="emergency-guidance-box">
        <ShieldAlert size={20} className="emergency-guidance-icon" />
        <div>
          <strong>What to do right now:</strong>
          <ul className="emergency-guidance-list">
            <li>If you or someone else is in immediate physical danger, dial <strong>112</strong> immediately.</li>
            <li>For legal aid without financial cost, contact NALSA at <strong>15100</strong> or your District Legal Services Authority (DLSA).</li>
            <li>Do not rely on online automated tools for pending criminal bail hearings, immediate arrests, or active physical threats.</li>
          </ul>
        </div>
      </div>

      {onProceedAnyway && (
        <div className="emergency-override-footer">
          <p className="emergency-override-text">
            If you are safe and looking only for general statutory information:
          </p>
          <button 
            type="button" 
            className="btn btn-outline btn-sm"
            onClick={onProceedAnyway}
          >
            Continue viewing general information <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};
