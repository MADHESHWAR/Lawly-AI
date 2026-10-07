import React, { useState } from 'react';
import { Search, Filter, CheckCircle, ExternalLink, BookOpen, Scale, X, MapPin } from 'lucide-react';
import { useKnowledge } from '../context/KnowledgeContext';
import { LEGAL_TOPICS } from '../data/mockLegalData';

export const SearchPage = () => {
  const { documents } = useKnowledge();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const quickPills = [
    "Section 73 Contract Act",
    "Section 2(47) Unfair Trade Practice",
    "Section 108 Property Act",
    "Section 66D IT Act",
    "Zero FIR BNSS",
    "Section 5 Wages Act"
  ];

  const filteredDocs = documents.filter((doc) => {
    const qLower = query.toLowerCase().trim();
    const matchesQuery = !qLower || (
      doc.act.toLowerCase().includes(qLower) ||
      doc.section.toLowerCase().includes(qLower) ||
      doc.sectionTitle.toLowerCase().includes(qLower) ||
      doc.summary.toLowerCase().includes(qLower) ||
      doc.category.toLowerCase().includes(qLower)
    );

    const matchesCategory = selectedCategory === 'All' || doc.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesVerified = !verifiedOnly || doc.status === 'Verified';

    return matchesQuery && matchesCategory && matchesVerified;
  });

  return (
    <div className="search-page-root animate-fade-in">
      <div className="container">
        {/* Header */}
        <div className="search-header text-center">
          <span className="badge badge-primary">Statutory Repository</span>
          <h1 className="page-title mt-2">Search Indian Legal Information</h1>
          <p className="page-subtitle">
            Search verified Acts, Sections, legal doctrines, and statutory provisions across Indian jurisdictions.
          </p>

          {/* Search Box */}
          <div className="main-search-input-wrap">
            <Search size={20} className="search-input-icon" />
            <input
              type="text"
              className="form-control search-main-input"
              placeholder="Search by Act name (e.g. Contract Act), Section (e.g. Section 73), or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button 
                type="button" 
                className="search-clear-btn"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick Suggestions */}
          <div className="quick-suggestions-wrap">
            <span className="quick-suggestions-label">Popular Searches:</span>
            <div className="quick-suggestions-chips">
              {quickPills.map((pill, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="quick-chip"
                  onClick={() => setQuery(pill)}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="search-filter-bar">
          <div className="filter-group-left">
            <span className="filter-label"><Filter size={14} className="inline-icon" /> Category:</span>
            <select
              className="form-control form-control-sm search-category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Contracts">Contracts & Agreements</option>
              <option value="Consumer">Consumer Rights</option>
              <option value="Property">Property & Rent</option>
              <option value="Cybercrime">Cybercrime & Digital</option>
              <option value="Employment">Employment & Labour</option>
              <option value="Police">Police & Procedure</option>
              <option value="Traffic">Traffic & Vehicles</option>
            </select>
          </div>

          <label className="checkbox-filter-label">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
            />
            <span>Show verified sources only</span>
          </label>
        </div>

        {/* Results Counter */}
        <div className="search-results-meta">
          <span className="results-count-text">
            Found <strong>{filteredDocs.length}</strong> statutory provision{filteredDocs.length === 1 ? '' : 's'}
          </span>
        </div>

        {/* Results List */}
        <div className="search-results-list">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="search-result-card card">
              <div className="search-result-top">
                <div className="result-act-group">
                  <span className="law-section-badge">{doc.section}</span>
                  <h3 className="result-act-title">{doc.act}</h3>
                </div>

                <div className="result-status-badge">
                  {doc.status === 'Verified' ? (
                    <span className="badge badge-success">
                      <CheckCircle size={12} /> Verified Source
                    </span>
                  ) : (
                    <span className="badge badge-warning">Unverified</span>
                  )}
                </div>
              </div>

              <h4 className="result-section-title">{doc.sectionTitle}</h4>

              <p className="result-summary-text">{doc.summary}</p>

              <div className="result-card-footer">
                <div className="result-meta-tags">
                  <span className="badge badge-neutral">
                    <MapPin size={11} /> {doc.jurisdiction}
                  </span>
                  <span className="badge badge-primary">{doc.category}</span>
                  <span className="result-verified-date">Verified: {doc.lastVerifiedDate}</span>
                </div>

                {doc.officialUrl && (
                  <a
                    href={doc.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm result-view-source"
                  >
                    <span>India Code ↗</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div className="no-search-results text-center py-5 card">
              <Scale size={48} className="text-muted mx-auto mb-3" />
              <h3>No matching statutory provisions found</h3>
              <p className="text-muted mt-1">
                Try searching for broader terms or resetting your category filter.
              </p>
              <div className="mt-3">
                <button 
                  type="button" 
                  className="btn btn-outline btn-sm"
                  onClick={() => { setQuery(''); setSelectedCategory('All'); setVerifiedOnly(false); }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
