import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, Search, Trash2, ArrowRight, Clock, 
  MapPin, AlertTriangle, ShieldCheck, Bookmark, BookmarkCheck 
} from 'lucide-react';
import { useHistory } from '../context/HistoryContext';

export const HistoryPage = () => {
  const { history, deleteAnalysis, clearAllHistory, toggleBookmark, isBookmarked } = useHistory();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const filteredHistory = history.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.userFacts.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(history.map(item => item.category))];

  const handleClearAll = () => {
    clearAllHistory();
    setShowClearConfirm(false);
  };

  return (
    <div className="history-page-root animate-fade-in">
      <div className="container">
        
        {/* Header */}
        <div className="history-header-row">
          <div>
            <span className="badge badge-primary">Private User Archive</span>
            <h1 className="page-title mt-1">My Cases & Questions</h1>
            <p className="page-subtitle">
              Your analyzed legal queries stored locally for your reference. You can delete individual items or clear everything at any time.
            </p>
          </div>

          {history.length > 0 && (
            <div className="history-header-actions">
              <button 
                type="button" 
                className="btn btn-outline btn-sm text-danger"
                onClick={() => setShowClearConfirm(true)}
              >
                <Trash2 size={15} /> Clear All History
              </button>
            </div>
          )}
        </div>

        {/* Search & Filter Bar */}
        <div className="history-controls-card card my-4">
          <div className="history-search-input-box">
            <Search size={18} className="search-icon-inside" />
            <input
              type="text"
              className="form-control"
              placeholder="Search through your analyzed questions or facts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="history-category-filter">
            <label className="filter-label">Category:</label>
            <select 
              className="form-control form-control-sm"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* History List */}
        <div className="history-items-list">
          {filteredHistory.map((item) => {
            const bookmarked = isBookmarked(item.id);
            return (
              <div key={item.id} className="history-item-card card">
                <div className="history-card-header">
                  <div className="history-badges">
                    <span className="badge badge-primary">{item.category}</span>
                    <span className="history-meta-tag">
                      <MapPin size={12} /> {item.state || 'All India'}
                    </span>
                    <span className="history-meta-tag">
                      <Clock size={12} /> {item.date}
                    </span>
                  </div>

                  <div className="history-card-actions-top">
                    <button 
                      type="button" 
                      className="btn btn-ghost btn-sm"
                      onClick={() => toggleBookmark(item.id)}
                      title={bookmarked ? "Remove Bookmark" : "Bookmark Case"}
                    >
                      {bookmarked ? <BookmarkCheck size={16} className="text-primary" /> : <Bookmark size={16} />}
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-ghost btn-sm text-danger"
                      onClick={() => deleteAnalysis(item.id)}
                      title="Delete this query from history"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <h3 className="history-card-title">{item.title}</h3>
                <p className="history-card-facts">"{item.userFacts}"</p>

                <div className="history-card-laws">
                  <span className="history-laws-label">Identified Statutes:</span>
                  <div className="history-laws-tags">
                    {item.potentiallyRelevantLaws?.map((law, idx) => (
                      <span key={idx} className="statute-pill-sm">
                        {law.actName} ({law.section})
                      </span>
                    ))}
                  </div>
                </div>

                <div className="history-card-footer">
                  <Link to={`/analysis/${item.id}`} className="btn btn-outline btn-sm">
                    <span>View Full Legal Analysis</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}

          {filteredHistory.length === 0 && (
            <div className="empty-history-box text-center py-5 card">
              <FileText size={48} className="text-muted mx-auto mb-2" />
              <h3>No queries found</h3>
              <p className="text-muted">
                {history.length === 0 
                  ? "You have not analyzed any legal questions yet."
                  : `No analyses match your search "${searchTerm}".`}
              </p>
              <div className="mt-4">
                <Link to="/analyze" className="btn btn-primary">
                  Analyze an Issue
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Confirmation Modal for Clearing History */}
      {showClearConfirm && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowClearConfirm(false)}>
          <div className="modal-dialog card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title text-danger">
                <AlertTriangle size={18} className="inline-icon" /> Clear Entire History?
              </h3>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowClearConfirm(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>
                This will permanently delete all {history.length} saved query analyses from your device. This action cannot be undone.
              </p>
              <div className="modal-actions mt-4">
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => setShowClearConfirm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={handleClearAll}
                >
                  Yes, Delete All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
