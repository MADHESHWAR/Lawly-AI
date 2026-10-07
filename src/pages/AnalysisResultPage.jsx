import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Bookmark, BookmarkCheck, Share2, Printer, Flag, 
  MapPin, CheckCircle, Scale, Shield, AlertTriangle, MessageSquare, Check 
} from 'lucide-react';
import { useHistory } from '../context/HistoryContext';
import { useKnowledge } from '../context/KnowledgeContext';
import { LawCard } from '../components/analysis/LawCard';
import { GlossarySection } from '../components/analysis/GlossarySection';
import { NextStepsCard } from '../components/analysis/NextStepsCard';
import { SourceCard } from '../components/analysis/SourceCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const AnalysisResultPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAnalysisById, toggleBookmark, isBookmarked } = useHistory();
  const { submitFeedback } = useKnowledge();

  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const analysis = getAnalysisById(id);

  if (!analysis) {
    return (
      <div className="container container-narrow text-center py-5">
        <div className="card my-5 p-5">
          <AlertTriangle size={48} className="text-warning mx-auto mb-3" />
          <h2>Analysis Not Found</h2>
          <p className="mt-2 text-muted">
            The legal issue analysis you are looking for may have been deleted or the link is incorrect.
          </p>
          <div className="mt-4">
            <Link to="/analyze" className="btn btn-primary">
              Analyze a New Issue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const bookmarked = isBookmarked(analysis.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    submitFeedback(analysis.id, feedbackText.trim());
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackOpen(false);
      setFeedbackText('');
    }, 2000);
  };

  return (
    <div className="analysis-result-page animate-fade-in">
      <div className="container container-narrow">

        {/* Back and Actions Navigation */}
        <div className="result-nav-bar no-print">
          <button 
            type="button" 
            className="btn btn-ghost btn-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="result-action-buttons">
            <button 
              type="button" 
              className={`btn btn-outline btn-sm ${bookmarked ? 'btn-bookmarked' : ''}`}
              onClick={() => toggleBookmark(analysis.id)}
              title="Save to My Cases"
            >
              {bookmarked ? <BookmarkCheck size={16} className="text-primary" /> : <Bookmark size={16} />}
              <span className="btn-label-responsive">{bookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <button 
              type="button" 
              className="btn btn-outline btn-sm"
              onClick={handleShare}
              title="Copy shareable link"
            >
              {copiedLink ? <Check size={16} className="text-success" /> : <Share2 size={16} />}
              <span className="btn-label-responsive">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <button 
              type="button" 
              className="btn btn-outline btn-sm"
              onClick={handlePrint}
              title="Print or Save PDF"
            >
              <Printer size={16} />
              <span className="btn-label-responsive">Print</span>
            </button>

            <button 
              type="button" 
              className="btn btn-ghost btn-sm"
              onClick={() => setFeedbackOpen(true)}
              title="Report inaccurate citation or feedback"
            >
              <Flag size={16} />
              <span className="btn-label-responsive">Feedback</span>
            </button>
          </div>
        </div>

        {/* Main Result Card Header */}
        <div className="result-main-card card">
          <div className="result-header-meta">
            <div className="result-badge-group">
              <span className="badge badge-primary">{analysis.category}</span>
              <span className="badge badge-neutral">
                <MapPin size={12} /> {analysis.jurisdiction}
              </span>
              <span className="badge badge-success">
                Confidence: {analysis.confidence || "Potentially relevant"}
              </span>
            </div>
            <span className="result-date-text">Analyzed: {analysis.date}</span>
          </div>

          <h1 className="result-title">{analysis.title}</h1>

          {/* User Provided Facts Box */}
          <div className="user-facts-box">
            <div className="facts-box-header">
              <MessageSquare size={16} className="facts-icon" />
              <span className="facts-title">User-Provided Facts</span>
            </div>
            <p className="facts-text">"{analysis.userFacts}"</p>
            {analysis.clarificationAnswers && Object.keys(analysis.clarificationAnswers).length > 0 && (
              <div className="clarification-recap">
                <span className="clarification-recap-title">Clarifications Provided:</span>
                <ul className="clarification-recap-list">
                  {Object.entries(analysis.clarificationAnswers).map(([k, v]) => (
                    <li key={k}>
                      <strong>{v.question}:</strong> {v.answer}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* AI Situation Summary */}
          <div className="situation-summary-section">
            <h3 className="section-subheading">Situation Summary</h3>
            <p className="summary-paragraph">{analysis.summary}</p>
          </div>
        </div>

        {/* Section: Potentially Relevant Laws */}
        <div className="result-section">
          <div className="section-heading-row">
            <div>
              <h2 className="section-block-title">Potentially Relevant Laws</h2>
              <p className="section-block-desc">
                Statutory provisions from verified Indian central and state enactments that may apply to these facts:
              </p>
            </div>
          </div>

          <div className="laws-cards-list">
            {analysis.potentiallyRelevantLaws?.map((law, idx) => (
              <LawCard key={law.id || idx} law={law} />
            ))}
          </div>
        </div>

        {/* Section: Simple Explanation */}
        <div className="result-section">
          <div className="plain-explanation-card card">
            <h2 className="section-block-title">What this may mean in simple terms</h2>
            <p className="plain-explanation-text">{analysis.explanation}</p>
          </div>

          {/* Glossary */}
          <GlossarySection glossary={analysis.glossary} />
        </div>

        {/* Section: Possible Next Steps */}
        <div className="result-section">
          <NextStepsCard steps={analysis.possibleNextSteps} />
        </div>

        {/* Section: Verified Sources Transparency */}
        <div className="result-section">
          <div className="section-heading-row">
            <div>
              <h2 className="section-block-title">Verified Official Sources</h2>
              <p className="section-block-desc">
                Citations grounded in official Indian legislative repositories and gazettes. No unverified third-party blogs:
              </p>
            </div>
          </div>

          <div className="sources-list">
            {analysis.sources?.map((source, idx) => (
              <SourceCard key={idx} source={source} />
            ))}
          </div>
        </div>

        {/* Full Legal Disclaimer Banner */}
        <div className="result-section">
          <DisclaimerBanner />
        </div>

      </div>

      {/* Feedback / Report Modal */}
      {feedbackOpen && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setFeedbackOpen(false)}>
          <div className="modal-dialog card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <Flag size={18} className="text-warning inline-icon" /> Report Information or Suggest Correction
              </h3>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setFeedbackOpen(false)}
              >
                ✕
              </button>
            </div>

            {feedbackSubmitted ? (
              <div className="feedback-success-state py-4 text-center">
                <CheckCircle size={36} className="text-success mx-auto mb-2" />
                <h4>Thank you for your feedback!</h4>
                <p className="text-muted mt-1">
                  Your note has been submitted to the Lawly Knowledge Base administration team for verification against India Code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="modal-body">
                <p className="modal-desc">
                  Notice an outdated state amendment, inaccurate section title, or broken India Code link? Let our legal editorial team know:
                </p>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Describe the legal discrepancy or suggestion..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    required
                  />
                </div>
                <div className="modal-actions mt-3">
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={() => setFeedbackOpen(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={!feedbackText.trim()}
                  >
                    Submit to Legal Admin
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
