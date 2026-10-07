import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, FileText, Bookmark, Clock, ArrowRight, 
  MapPin, Scale, ShieldCheck, Trash2, ExternalLink, BookmarkCheck, ChevronRight 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '../context/HistoryContext';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { history, bookmarks, deleteAnalysis, toggleBookmark, isBookmarked } = useHistory();
  const navigate = useNavigate();

  const [filterView, setFilterView] = useState('all'); // 'all' | 'saved'

  const displayedAnalyses = filterView === 'saved'
    ? history.filter(item => bookmarks.includes(item.id))
    : history.slice(0, 5);

  return (
    <div className="dashboard-page-root animate-fade-in">
      <div className="container">
        
        {/* Welcome Header Hero */}
        <header className="dashboard-header card">
          <div className="dashboard-header-text">
            <div className="dashboard-badge-row">
              <span className="badge badge-primary">Citizen Legal Portal</span>
              <span className="dashboard-state-badge">
                <MapPin size={12} /> {user?.state || 'All India Jurisdiction'}
              </span>
            </div>
            <h1 className="dashboard-greeting">
              Welcome back, {user ? user.name : 'Citizen'}
            </h1>
            <p className="dashboard-subtext">
              Review your analyzed legal matters, track relevant Indian enactments, and access verified statutory references.
            </p>
          </div>

          <div className="dashboard-header-cta">
            <Link to="/analyze" className="btn btn-primary btn-lg dashboard-ask-btn">
              <Sparkles size={18} />
              <span>Ask a New Question</span>
            </Link>
          </div>
        </header>

        {/* 4-Metric Stats Grid */}
        <section className="dashboard-stats-grid" aria-label="Dashboard Statistics">
          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-blue">
              <FileText size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{history.length}</span>
              <span className="stat-label">Questions Analyzed</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-green">
              <Bookmark size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{bookmarks.length}</span>
              <span className="stat-label">Saved Cases</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-purple">
              <ShieldCheck size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-value">100%</span>
              <span className="stat-label">India Code Grounding</span>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrap stat-icon-amber">
              <MapPin size={22} />
            </div>
            <div className="stat-info">
              <span className="stat-value stat-value-text">{user?.state?.split(' ')[0] || 'National'}</span>
              <span className="stat-label">Active Jurisdiction</span>
            </div>
          </div>
        </section>

        {/* Recent Questions Section */}
        <section className="dashboard-main-section">
          <div className="dashboard-section-header">
            <div>
              <h2 className="dashboard-section-title">Recent Questions</h2>
              <p className="dashboard-section-subtitle">
                Your analyzed situations and statutory summaries:
              </p>
            </div>

            <div className="dashboard-header-right-actions">
              {/* Tab toggles */}
              <div className="dashboard-filter-tabs">
                <button
                  type="button"
                  className={`dashboard-tab-btn ${filterView === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterView('all')}
                >
                  All ({history.length})
                </button>
                <button
                  type="button"
                  className={`dashboard-tab-btn ${filterView === 'saved' ? 'active' : ''}`}
                  onClick={() => setFilterView('saved')}
                >
                  Saved ({bookmarks.length})
                </button>
              </div>

              {history.length > 5 && filterView === 'all' && (
                <Link to="/history" className="btn btn-outline btn-sm dashboard-view-all-btn">
                  View Full History <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>

          {displayedAnalyses.length > 0 ? (
            <div className="dashboard-cases-list">
              {displayedAnalyses.map((item) => {
                const bookmarked = isBookmarked(item.id);
                return (
                  <article key={item.id} className="case-row-card card card-interactive">
                    
                    {/* Main Content Info */}
                    <div className="case-row-main" onClick={() => navigate(`/analysis/${item.id}`)}>
                      <div className="case-row-tags">
                        <span className="badge badge-primary">{item.category}</span>
                        <span className="case-meta-tag">
                          <MapPin size={11} /> {item.state || 'All India'}
                        </span>
                        <span className="case-meta-tag">
                          <Clock size={11} /> {item.date}
                        </span>
                        {bookmarked && (
                          <span className="badge badge-neutral saved-badge">
                            <BookmarkCheck size={11} /> Saved
                          </span>
                        )}
                      </div>

                      <h3 className="case-row-title">{item.title}</h3>
                      <p className="case-row-snippet">"{item.userFacts}"</p>

                      <div className="case-statutes-preview">
                        <span className="statutes-preview-label">Relevant Acts:</span>
                        <div className="statute-pills-wrap">
                          {item.potentiallyRelevantLaws?.map((l, i) => (
                            <span key={i} className="statute-pill-sm">
                              {l.actName} ({l.section})
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions Column */}
                    <div className="case-row-actions">
                      <button
                        type="button"
                        className={`btn btn-ghost btn-sm case-bookmark-btn ${bookmarked ? 'is-active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(item.id);
                        }}
                        title={bookmarked ? "Remove bookmark" : "Bookmark this case"}
                        aria-label="Bookmark case"
                      >
                        {bookmarked ? <BookmarkCheck size={18} className="text-primary" /> : <Bookmark size={18} />}
                      </button>

                      <Link 
                        to={`/analysis/${item.id}`} 
                        className="btn btn-outline btn-sm case-view-btn"
                      >
                        <span>View Analysis</span>
                        <ChevronRight size={14} />
                      </Link>

                      <button 
                        type="button" 
                        className="btn btn-ghost btn-sm case-delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm(`Delete "${item.title}" from your history?`)) {
                            deleteAnalysis(item.id);
                          }
                        }}
                        title="Delete from history"
                        aria-label="Delete analysis"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-dashboard-card card text-center py-5">
              <Scale size={44} className="text-muted mx-auto mb-3" />
              <h3>{filterView === 'saved' ? "No saved cases yet" : "No previous questions yet"}</h3>
              <p className="text-muted mt-1">
                {filterView === 'saved'
                  ? "Click the bookmark icon on any analysis to save it here for fast access."
                  : "Describe an everyday legal issue (e.g., rental deposit, defective product, or salary delay) to get started."}
              </p>
              <div className="mt-4">
                <Link to="/analyze" className="btn btn-primary">
                  <Sparkles size={16} /> Analyze a Legal Issue
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Quick Discovery Cards */}
        <section className="dashboard-shortcuts-grid mt-4" aria-label="Legal Discovery Shortcuts">
          <Link to="/topics" className="shortcut-card card card-interactive">
            <div className="shortcut-card-content">
              <div className="shortcut-icon-frame">
                <Scale size={20} />
              </div>
              <div className="shortcut-text-wrap">
                <h3 className="shortcut-title">Explore 12 Legal Topics</h3>
                <p className="shortcut-desc">
                  Browse consumer rights, tenancy laws, labour disputes, cyber fraud, and motor vehicle rules.
                </p>
              </div>
            </div>
            <div className="shortcut-footer">
              <span className="shortcut-link">Browse Topics</span>
              <ChevronRight size={16} />
            </div>
          </Link>

          <Link to="/search" className="shortcut-card card card-interactive">
            <div className="shortcut-card-content">
              <div className="shortcut-icon-frame">
                <FileText size={20} />
              </div>
              <div className="shortcut-text-wrap">
                <h3 className="shortcut-title">Search India Code Acts</h3>
                <p className="shortcut-desc">
                  Directly lookup statutory sections from official Central Acts and State Government Gazettes.
                </p>
              </div>
            </div>
            <div className="shortcut-footer">
              <span className="shortcut-link">Search Repository</span>
              <ChevronRight size={16} />
            </div>
          </Link>
        </section>

      </div>
    </div>
  );
};
