import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Scale, Search, ChevronRight, BookOpen, Sparkles, X, 
  Home, Briefcase, ShoppingCart, Car, Users, ShieldAlert, 
  Landmark, Shield, FileCheck, Building2, GraduationCap, ArrowUpRight 
} from 'lucide-react';
import { LEGAL_TOPICS } from '../data/mockLegalData';

// Map string icon names to Lucide icon components
const ICON_MAP = {
  Home, Briefcase, ShoppingCart, Car, Users, ShieldAlert,
  Landmark, Shield, FileCheck, Building2, GraduationCap, Scale
};

// Categorization helper for filter tabs
const TOPIC_GROUPS = {
  All: () => true,
  "Civil & Property": (id) => ['property-rent', 'family-matrimonial', 'civil-matters'].includes(id),
  "Consumer & Digital": (id) => ['consumer-rights', 'cybercrime-digital', 'banking-finance'].includes(id),
  "Work & Business": (id) => ['employment-labour', 'contracts-commercial', 'business-corporate'].includes(id),
  "Public & Rights": (id) => ['police-criminal', 'traffic-vehicles', 'education-student'].includes(id)
};

export const TopicsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const filterPredicate = TOPIC_GROUPS[activeTab] || TOPIC_GROUPS.All;

  const filteredTopics = LEGAL_TOPICS.filter((topic) => {
    const matchesGroup = filterPredicate(topic.id);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      topic.title.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q) ||
      topic.popularQuestions.some(item => item.toLowerCase().includes(q)) ||
      topic.primaryActs.some(item => item.toLowerCase().includes(q))
    );

    return matchesGroup && matchesSearch;
  });

  return (
    <div className="topics-page-root animate-fade-in">
      <div className="container">
        
        {/* Header Hero */}
        <div className="topics-header-hero">
          <div className="topics-header-content">
            <span className="badge badge-primary">Statutory Taxonomy</span>
            <h1 className="topics-hero-title">Explore Indian Legal Topics</h1>
            <p className="topics-hero-subtitle">
              Browse structured legal categories covering everyday citizen issues, consumer protections, employment rules, and criminal procedures in India.
            </p>
          </div>

          {/* Search Bar */}
          <div className="topics-search-container">
            <div className="topics-search-box">
              <Search size={18} className="topics-search-icon" />
              <input
                type="text"
                className="form-control topics-search-input"
                placeholder="Search topics, questions, or specific Acts (e.g. Tenancy, RERA, Contract)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="topics-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="topics-filter-pills">
            {Object.keys(TOPIC_GROUPS).map((tab) => (
              <button
                key={tab}
                type="button"
                className={`topic-filter-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === 'All' && ` (${LEGAL_TOPICS.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="topics-results-bar">
          <span className="topics-count-text">
            Showing <strong>{filteredTopics.length}</strong> of {LEGAL_TOPICS.length} legal categories
          </span>
          {searchQuery && (
            <span className="topics-query-tag">Filtered by: "{searchQuery}"</span>
          )}
        </div>

        {/* Topics Professional Grid */}
        <div className="topics-executive-grid">
          {filteredTopics.map((topic) => {
            const IconComponent = ICON_MAP[topic.icon] || Scale;
            return (
              <article key={topic.id} className="topic-executive-card card card-interactive">
                
                {/* Card Top: Icon, Title, and Action Link */}
                <div className="topic-card-topbar">
                  <div className="topic-icon-frame">
                    <IconComponent size={22} className="topic-svg-icon" />
                  </div>
                  <div className="topic-heading-wrap">
                    <h2 className="topic-card-name">
                      <Link to={`/topics/${topic.slug}`} className="topic-title-link">
                        {topic.title}
                      </Link>
                    </h2>
                    <span className="topic-acts-tally">
                      {topic.primaryActs.length} Primary Acts
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="topic-card-summary">
                  {topic.description}
                </p>

                {/* Common Scenarios Box */}
                <div className="topic-scenarios-section">
                  <span className="topic-scenarios-header">Common Situations:</span>
                  <div className="topic-scenarios-chips">
                    {topic.popularQuestions.slice(0, 3).map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="scenario-chip-btn"
                        onClick={() => navigate('/analyze', { state: { prefill: q } })}
                        title={`Analyze: ${q}`}
                      >
                        <span className="scenario-chip-text">{q}</span>
                        <ArrowUpRight size={13} className="scenario-chip-icon" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Acts Tags */}
                <div className="topic-statutes-box">
                  <span className="topic-statutes-header">Governing Enactments:</span>
                  <div className="topic-statutes-tags">
                    {topic.primaryActs.map((act, i) => (
                      <span key={i} className="statute-badge-item">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Actions (Pinned to Bottom) */}
                <div className="topic-card-action-footer">
                  <Link 
                    to={`/topics/${topic.slug}`} 
                    className="btn btn-outline btn-sm topic-footer-guide-btn"
                  >
                    <span>View Guide</span>
                    <ChevronRight size={14} />
                  </Link>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm topic-footer-analyze-btn"
                    onClick={() => navigate('/analyze', { state: { prefill: topic.popularQuestions[0] } })}
                  >
                    <Sparkles size={14} />
                    <span>Analyze Issue</span>
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredTopics.length === 0 && (
          <div className="topics-empty-state card text-center py-5">
            <BookOpen size={44} className="text-muted mx-auto mb-3" />
            <h3 className="empty-title">No legal topics found</h3>
            <p className="empty-subtitle">
              No categories match your search "{searchQuery}" in "{activeTab}".
            </p>
            <div className="mt-3">
              <button 
                type="button" 
                className="btn btn-outline btn-sm"
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
              >
                Reset Search & Filters
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
