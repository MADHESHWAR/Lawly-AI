import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, FileText, Bookmark, Clock, ArrowRight, 
  MapPin, Scale, ShieldCheck, Trash2, ExternalLink 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '../context/HistoryContext';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { history, bookmarks, deleteAnalysis } = useHistory();
  const navigate = useNavigate();

  const recentAnalyses = history.slice(0, 5);

  return (
    <div className="dashboard-page-root animate-fade-in">
      <div className="container">
        {/* Welcome Header */}
        <div className="dashboard-header card">
          <div className="dashboard-header-text">
            <span className="badge badge-primary">Citizen Portal</span>
            <h1 className="dashboard-greeting">
              Welcome back, {user ? user.name : 'Citizen'}
            </h1>
            <p className="dashboard-subtext">
              Review your previous legal issue analyses, track relevant Indian enactments, and access verified statutory references.
            </p>
          </div>

          <div className="dashboard-header-cta">
            <Link to="/analyze" className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Ask a New Question</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-stats-grid">
          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-blue">
              <FileText size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{history.length}</span>
              <span className="stat-label">Total Questions Analyzed</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-green">
              <Bookmark size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{bookmarks.length}</span>
              <span className="stat-label">Saved Cases</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-purple">
              <ShieldCheck size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-value">100%</span>
              <span className="stat-label">India Code Grounding</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-amber">
              <MapPin size={20} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{user?.state || 'India'}</span>
              <span className="stat-label">Default Jurisdiction</span>
            </div>
          </div>
        </div>

        {/* Recent Questions Section */}
        <div className="dashboard-main-section">
          <div className="section-header-flex">
            <div>
              <h2 className="section-title">Recent Questions</h2>
              <p className="section-subtitle">Your analyzed situations and statutory summaries:</p>
            </div>
            {history.length > 0 && (
              <Link to="/history" className="btn btn-outline btn-sm">
                View All ({history.length}) <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {recentAnalyses.length > 0 ? (
            <div className="dashboard-cases-list">
              {recentAnalyses.map((item) => (
                <div key={item.id} className="case-row-card card card-interactive">
                  <div className="case-row-main" onClick={() => navigate(`/analysis/${item.id}`)}>
                    <div className="case-row-tags">
                      <span className="badge badge-primary">{item.category}</span>
                      <span className="case-jurisdiction-tag">
                        <MapPin size={11} /> {item.state || 'All India'}
                      </span>
                      <span className="case-date-tag">
                        <Clock size={11} /> {item.date}
                      </span>
                    </div>

                    <h3 className="case-row-title">{item.title}</h3>
                    <p className="case-row-snippet">"{item.userFacts.substring(0, 140)}..."</p>

                    <div className="case-statutes-preview">
                      <span className="statutes-preview-label">Relevant Acts:</span>
                      {item.potentiallyRelevantLaws?.map((l, i) => (
                        <span key={i} className="statute-pill-sm">{l.actName} ({l.section})</span>
                      ))}
                    </div>
                  </div>

                  <div className="case-row-actions">
                    <Link to={`/analysis/${item.id}`} className="btn btn-outline btn-sm">
                      View Analysis <ArrowRight size={14} />
                    </Link>
                    <button 
                      type="button" 
                      className="btn btn-ghost btn-sm text-danger"
                      onClick={() => deleteAnalysis(item.id)}
                      title="Delete from history"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-dashboard-card card text-center py-5">
              <Scale size={48} className="text-muted mx-auto mb-3" />
              <h3>No previous questions yet</h3>
              <p className="text-muted mt-1">
                Describe an everyday legal issue (e.g., rental deposit, defective product, or salary delay) to get started.
              </p>
              <div className="mt-4">
                <Link to="/analyze" className="btn btn-primary">
                  <Sparkles size={16} /> Analyze My First Issue
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Quick Discovery Cards */}
        <div className="dashboard-shortcuts-grid mt-4">
          <Link to="/topics" className="shortcut-card card card-interactive">
            <h4 className="shortcut-title">Explore 12 Legal Topics</h4>
            <p className="shortcut-desc">Browse consumer rights, tenancy laws, labour disputes, and cyber fraud codes.</p>
            <span className="shortcut-link">Browse Topics <ArrowRight size={14} /></span>
          </Link>

          <Link to="/search" className="shortcut-card card card-interactive">
            <h4 className="shortcut-title">Search India Code Acts</h4>
            <p className="shortcut-desc">Directly lookup statutory sections from official central and state repositories.</p>
            <span className="shortcut-link">Search Repository <ArrowRight size={14} /></span>
          </Link>
        </div>

      </div>
    </div>
  );
};
