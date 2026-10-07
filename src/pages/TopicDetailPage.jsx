import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Scale, BookOpen, Sparkles, ChevronRight, 
  ExternalLink, HelpCircle, CheckCircle2, FileText, Landmark 
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
      <div className="container container-narrow">
        
        {/* Navigation */}
        <div className="detail-top-nav">
          <Link to="/topics" className="btn btn-ghost btn-sm">
            <ArrowLeft size={16} /> Back to All Topics
          </Link>
        </div>

        {/* Hero Card */}
        <div className="topic-detail-hero card">
          <div className="topic-detail-header">
            <span className="badge badge-primary">Legal Category Guide</span>
            <h1 className="topic-detail-title">{topic.title}</h1>
            <p className="topic-detail-desc">{topic.description}</p>
          </div>

          <div className="topic-hero-cta-strip">
            <Link 
              to="/analyze" 
              className="btn btn-primary"
            >
              <Sparkles size={16} /> Analyze a {topic.title} Issue
            </Link>
          </div>
        </div>

        {/* Common Citizen Scenarios */}
        <div className="topic-detail-section">
          <h2 className="section-block-title">Common Situations in {topic.title}</h2>
          <p className="section-block-desc">
            Click any common situation to start an analysis with pre-filled context:
          </p>

          <div className="scenarios-grid">
            {topic.popularQuestions.map((q, idx) => (
              <div 
                key={idx}
                className="scenario-item-card card card-interactive"
                onClick={() => navigate('/analyze', { state: { prefill: q } })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/analyze', { state: { prefill: q } })}
              >
                <div className="scenario-item-content">
                  <HelpCircle size={18} className="scenario-item-icon" />
                  <span className="scenario-item-text">{q}</span>
                </div>
                <ChevronRight size={16} className="scenario-arrow" />
              </div>
            ))}
          </div>
        </div>

        {/* Primary Governing Acts */}
        <div className="topic-detail-section">
          <h2 className="section-block-title">Primary Governing Indian Statutes</h2>
          <p className="section-block-desc">
            Central and State legislative frameworks governing disputes in this domain:
          </p>

          <div className="acts-list">
            {topic.primaryActs.map((act, idx) => (
              <div key={idx} className="act-info-card card">
                <div className="act-info-header">
                  <Landmark size={20} className="act-landmark-icon" />
                  <div>
                    <h3 className="act-title">{act}</h3>
                    <span className="badge badge-success mt-1">Official Central/State Act</span>
                  </div>
                </div>
                <p className="act-description-text">
                  Enacted by Parliament of India or State Legislatures. Governs contractual obligations, regulatory compliance, and statutory remedies.
                </p>
                <div className="act-links-footer">
                  <a 
                    href="https://www.indiacode.nic.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="act-external-link"
                  >
                    <span>Read Full Act on India Code</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Knowledge Base Provisions */}
        {relevantKbItems.length > 0 && (
          <div className="topic-detail-section">
            <h2 className="section-block-title">Verified Provisions on File</h2>
            <div className="kb-provisions-list">
              {relevantKbItems.map((item) => (
                <div key={item.id} className="kb-provision-card card">
                  <div className="kb-prov-top">
                    <span className="law-section-badge">{item.section}</span>
                    <h4 className="kb-prov-act">{item.act}</h4>
                  </div>
                  <h5 className="kb-prov-title">{item.sectionTitle}</h5>
                  <p className="kb-prov-summary">{item.summary}</p>
                  <div className="kb-prov-footer">
                    <span className="badge badge-neutral">{item.jurisdiction}</span>
                    <a 
                      href={item.officialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline btn-sm"
                    >
                      Official Source <ExternalLink size={12} />
                    </a>
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
