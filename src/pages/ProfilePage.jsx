import React, { useState } from 'react';
import { 
  User, Shield, Lock, Trash2, Download, CheckCircle, 
  MapPin, Mail, HardDrive, AlertCircle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '../context/HistoryContext';
import { INDIAN_STATES } from '../data/mockLegalData';

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { history, clearAllHistory } = useHistory();

  const [userName, setUserName] = useState(user?.name || 'Citizen User');
  const [userState, setUserState] = useState(user?.state || 'Maharashtra');
  const [dataRetentionDays, setDataRetentionDays] = useState('30');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleExportData = () => {
    const exportPayload = {
      user: { name: userName, state: userState, email: user?.email },
      history: history,
      exportDate: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `lawly-data-export-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="profile-page-root animate-fade-in">
      <div className="container container-narrow">
        
        {/* Header */}
        <div className="profile-header text-center mb-4">
          <div className="profile-avatar-large mx-auto">
            {userName.charAt(0).toUpperCase()}
          </div>
          <h1 className="profile-name-title mt-2">{userName}</h1>
          <p className="profile-role-subtitle">
            {user?.role === 'admin' ? 'Knowledge Base Administrator' : 'Citizen Member'} • {user?.email}
          </p>
        </div>

        {savedSuccess && (
          <div className="alert-success-banner card mb-4">
            <CheckCircle size={18} className="text-success inline-icon" />
            <span>Profile and privacy preferences updated successfully.</span>
          </div>
        )}

        {/* Profile Settings Card */}
        <div className="profile-settings-card card mb-4">
          <h2 className="section-block-title">Account & Jurisdiction</h2>
          <p className="section-block-desc">
            Your primary state setting determines default local enactments (e.g., State Rent Control, Shops & Commercial Acts).
          </p>

          <form onSubmit={handleSaveProfile} className="mt-4">
            <div className="form-group">
              <label htmlFor="user-name" className="form-label">Full Name</label>
              <input
                id="user-name"
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="user-state" className="form-label">
                <MapPin size={14} className="inline-icon" /> Default State / UT
              </label>
              <select
                id="user-state"
                className="form-control"
                value={userState}
                onChange={(e) => setUserState(e.target.value)}
              >
                {INDIAN_STATES.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Save Changes
            </button>
          </form>
        </div>

        {/* Privacy & Data Retention Card (Section 17) */}
        <div className="privacy-card card mb-4">
          <div className="privacy-card-header">
            <Shield size={22} className="text-primary" />
            <div>
              <h2 className="section-block-title">Citizen Data Privacy & Transparency</h2>
              <p className="section-block-desc">
                Lawly practices strict data minimization. Here is how your legal information is treated:
              </p>
            </div>
          </div>

          <div className="privacy-breakdown-list mt-3">
            <div className="privacy-item">
              <h4 className="privacy-item-title">1. What information is stored?</h4>
              <p className="privacy-item-desc">
                Only the situational descriptions you provide and their matched statutory provisions. We do not store biometric data, government IDs (Aadhaar/PAN), or financial credentials.
              </p>
            </div>

            <div className="privacy-item">
              <h4 className="privacy-item-title">2. Why is it stored?</h4>
              <p className="privacy-item-desc">
                Strictly to permit you to review your past inquiries in your personal dashboard without having to re-type long legal narratives.
              </p>
            </div>

            <div className="privacy-item">
              <h4 className="privacy-item-title">3. How long is it retained?</h4>
              <p className="privacy-item-desc">
                Data is stored in your private browser sandbox. You can export or wipe your entire query history at any time.
              </p>
            </div>

            <div className="privacy-item">
              <h4 className="privacy-item-title">4. Zero Data Selling</h4>
              <p className="privacy-item-desc">
                Lawly does not sell or lease user legal disputes or queries to third-party ad networks, litigation finance firms, or insurance brokers.
              </p>
            </div>
          </div>

          <div className="privacy-actions-row mt-4">
            <button 
              type="button" 
              className="btn btn-outline btn-sm"
              onClick={handleExportData}
            >
              <Download size={14} /> Export My Legal Data (JSON)
            </button>

            <button 
              type="button" 
              className="btn btn-outline btn-sm text-danger"
              onClick={() => {
                if (window.confirm("Are you sure you want to erase all your saved queries from this device?")) {
                  clearAllHistory();
                  alert("All legal query history erased.");
                }
              }}
            >
              <Trash2 size={14} /> Erase All Query Data
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
