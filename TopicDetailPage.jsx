import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Scale, BookOpen, Sparkles, ChevronRight, 
  ExternalLink, HelpCircle, CheckCircle2, FileText, Landmark, ArrowUpRight 
} from 'lucide-react';
import { LEGAL_TOPICS, VERIFIED_KNOWLEDGE_BASE } from '../data/mockLegalData';

export const TopicDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const topic = LEGAL_TOPICS.find((t) => t.slug === slug) || LEGAL_TOPICS[0];

  const relevantKbItems = VERIFIED_KNOWLEDGE_BASE.filter(
    (item) => item.category.toLowerCase().includes(topic.title.toLowerCase().split(' ')[0])
  );

  return (
    <div className="topic-detail-page animate-fade-in">
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/topics" className="breadcrumb-link">Legal Topics</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{topic.title}</span>
        </nav>

        {/* Hero Card */}
        <div className="topic-detail-hero card">
          <div className="topic-detail-header-flex">
            <div className="topic-detail-header-left">
              <span className="badge badge-primary">Legal Category Guide</span>
              <h1 className="topic-detail-title">{topic.title}</h1>
              <p className="topic-detail-desc">{topic.description}</p>
            </div>

            <div className="topic-detail-header-right">
              <button 
                type="button"
                className="btn btn-primary btn-lg detail-analyze-cta"
                onClick={() => navigate('/analyze', { state: { prefill: topic.popularQuestions[0] } })}
              >
                <Sparkles size={18} />
                <span>Analyze a {topic.title} Issue</span>
              </button>
            </div>
          </div>
        </div>

        {/* Responsive 2-Column Section on Desktop / Stacked on Mobile */}
        <div className="topic-detail-columns-grid">
          
          {/* Column 1: Common Citizen Scenarios */}
          <div className="topic-detail-col">
            <div className="detail-section-header">
              <HelpCircle size={20} className="detail-header-icon" />
              <div>
                <h2 className="section-block-title">Common Situations in {topic.title}</h2>
                <p className="section-block-desc">
                  Select any common dispute to launch an instant statutory analysis:
                </p>
              </div>
            </div>

            <div className="scenarios-vertical-list">
              {topic.popularQuestions.map((q, idx) => (
                <div 
                  key={idx}
                  className="scenario-detail-card card card-interactive"
                  onClick={() => navigate('/analyze', { state: { prefill: q } })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/analyze', { state: { prefill: q } })}
                >
                  <div className="scenario-detail-content">
                    <span className="scenario-idx-pill">{idx + 1}</span>
                    <span className="scenario-detail-text">{q}</span>
                  </div>
                  <div className="scenario-detail-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Governing Indian Statutes */}
          <div className="topic-detail-col">
            <div className="detail-section-header">
              <Landmark size={20} className="detail-header-icon" />
              <div>
                <h2 className="section-block-title">Primary Governing Enactments</h2>
                <p className="section-block-desc">
                  Statutory codes enacted by the Indian Parliament & State Assemblies:
                </p>
              </div>
            </div>

            <div className="acts-vertical-list">
              {topic.primaryActs.map((act, idx) => (
                <div key={idx} className="act-detail-card card">
                  <div className="act-detail-top">
                    <span className="badge badge-success">Official Statute</span>
                    <a 
                      href="https://www.indiacode.nic.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="act-external-repo-link"
                    >
                      <span>India Code ↗</span>
                    </a>
                  </div>
                  <h3 className="act-detail-title">{act}</h3>
                  <p className="act-detail-description">
                    Statutory framework establishing rights, covenants, liabilities, and legal remedies.
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section: Verified Knowledge Base Provisions on File */}
        {relevantKbItems.length > 0 && (
          <div className="topic-kb-section">
            <div className="detail-section-header">
              <BookOpen size={20} className="detail-header-icon" />
              <div>
                <h2 className="section-block-title">Verified Provisions on File</h2>
                <p className="section-block-desc">
                  Statutory sections from our verified legal database matching {topic.title}:
                </p>
              </div>
            </div>

            <div className="kb-provisions-grid">
              {relevantKbItems.map((item) => (
                <div key={item.id} className="kb-item-card card">
                  <div className="kb-item-header">
                    <span className="law-section-badge">{item.section}</span>
                    <h3 className="kb-item-act">{item.act}</h3>
                  </div>
                  <h4 className="kb-item-title">{item.sectionTitle}</h4>
                  <p className="kb-item-summary">{item.summary}</p>
                  <div className="kb-item-footer">
                    <span className="badge badge-neutral">{item.jurisdiction}</span>
                    {item.officialUrl && (
                      <a 
                        href={item.officialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline btn-sm"
                      >
                        India Code <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
