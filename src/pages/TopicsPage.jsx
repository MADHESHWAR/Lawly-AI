import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, Search, ChevronRight, BookOpen, 
  Home, Briefcase, ShoppingCart, Car, Users, ShieldAlert, 
  Landmark, Shield, FileCheck, Building2, GraduationCap 
} from 'lucide-react';
import { LEGAL_TOPICS } from '../data/mockLegalData';

// Map string icon names to Lucide icon components
const ICON_MAP = {
  Home, Briefcase, ShoppingCart, Car, Users, ShieldAlert,
  Landmark, Shield, FileCheck, Building2, GraduationCap, Scale
};

export const TopicsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredTopics = LEGAL_TOPICS.filter((topic) => {
    const matchesSearch = 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.popularQuestions.some(q => q.toLowerCase().includes(searchQuery.toLowerCase())) ||
      topic.primaryActs.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  return (
    <div className="topics-page-root animate-fade-in">
      <div className="container">
        {/* Header */}
        <div className="page-header text-center">
          <span className="badge badge-primary">Statutory Taxonomy</span>
          <h1 className="page-title mt-2">Explore Indian Legal Topics</h1>
          <p className="page-subtitle">
            Browse structured statutory categories affecting Indian citizens, businesses, consumers, and employees.
          </p>

          {/* Search Within Topics */}
          <div className="topics-search-bar-wrap">
            <div className="search-input-box">
              <Search size={18} className="search-icon-inside" />
              <input
                type="text"
                className="form-control topics-search-input"
                placeholder="Search legal topics, questions, or specific Acts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="topics-main-grid">
          {filteredTopics.map((topic) => {
            const IconComponent = ICON_MAP[topic.icon] || Scale;
            return (
              <div key={topic.id} className="topic-card-large card card-interactive">
                <div className="topic-card-large-header">
                  <div className="topic-icon-badge">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="topic-title">{topic.title}</h3>
                </div>

                <p className="topic-description">{topic.description}</p>

                {/* Popular Questions Sample */}
                <div className="topic-questions-preview">
                  <span className="topic-questions-title">Common Situations:</span>
                  <ul className="topic-questions-list">
                    {topic.popularQuestions.slice(0, 3).map((q, idx) => (
                      <li key={idx}>
                        <Link 
                          to="/analyze" 
                          state={{ prefill: q }}
                          className="topic-question-link"
                        >
                          <span>• {q}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Acts Preview */}
                <div className="topic-acts-strip">
                  <span className="acts-strip-label">Key Enactments:</span>
                  <div className="acts-tags-wrap">
                    {topic.primaryActs.map((act, i) => (
                      <span key={i} className="badge badge-neutral">{act}</span>
                    ))}
                  </div>
                </div>

                <div className="topic-card-bottom">
                  <Link to={`/topics/${topic.slug}`} className="btn btn-outline btn-block btn-sm">
                    <span>View Topic Guide</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="empty-search-state text-center py-5">
            <BookOpen size={48} className="text-muted mx-auto mb-2" />
            <h3>No legal topics match "{searchQuery}"</h3>
            <p className="text-muted">Try broader terms like "rent", "police", "consumer", or "agreement".</p>
            <button 
              type="button" 
              className="btn btn-outline btn-sm mt-3"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
