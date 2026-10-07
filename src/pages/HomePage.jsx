import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Scale, ShieldCheck, Sparkles, BookOpen, ArrowRight, CheckCircle2, 
  HelpCircle, ChevronRight, PhoneCall, FileText, Search, Landmark, ShieldAlert 
} from 'lucide-react';
import { LEGAL_TOPICS, EMERGENCY_HELPLINES } from '../data/mockLegalData';

export const HomePage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const sampleScenarios = [
    {
      title: "Rental Deposit Withheld",
      category: "Property & Rent",
      text: "My landlord is refusing to refund my ₹60,000 security deposit after I vacated the apartment with proper 1-month notice.",
      state: "Tamil Nadu"
    },
    {
      title: "Defective E-Commerce Product",
      category: "Consumer Rights",
      text: "Ordered a laptop online for ₹54,000 that arrived dead on arrival. The seller and platform rejected the return.",
      state: "Maharashtra"
    },
    {
      title: "Withheld Salary After Resignation",
      category: "Employment & Labour",
      text: "Employer is withholding 2 months salary and denying relieving letter after I completed my full contractual notice period.",
      state: "Karnataka"
    },
    {
      title: "Fraudulent UPI Debit",
      category: "Cybercrime & Digital",
      text: "Received a fake electricity disconnection SMS, clicked a payment link, and ₹25,000 was debited from my bank account.",
      state: "Delhi (NCT)"
    }
  ];

  const faqs = [
    {
      q: "Does Lawly provide legal advice or act as my lawyer?",
      a: "No. Lawly strictly provides general legal information and education. It does not provide legal advice, create an advocate-client relationship under the Advocates Act, 1961, or represent you before any court. For advice tailored to your personal legal matter, consult an enrolled advocate or NALSA legal aid."
    },
    {
      q: "Where does Lawly get its legal information?",
      a: "Lawly sources and grounds its legal provisions directly from official government repositories including India Code (Ministry of Law and Justice), Central & State Gazettes, and statutory regulatory bodies (RBI, NCDRC, RERA). Every legal citation is referenced with official sources."
    },
    {
      q: "Can I use Lawly on my mobile phone in simple English?",
      a: "Yes. Lawly is designed mobile-first specifically for Indian citizens, students, and working professionals without requiring any knowledge of legal terminology or Latin maxims."
    },
    {
      q: "What should I do if I am facing immediate physical danger or domestic violence?",
      a: "Lawly immediately flags emergency situations and advises calling 112 (National Emergency), 181 (Women in Distress), 1098 (Childline), or 15100 (NALSA Free Legal Aid). Automated informational tools should never replace urgent emergency response."
    }
  ];

  const handlePresetSelect = (scenario) => {
    navigate('/analyze', { state: { prefill: scenario.text, state: scenario.state } });
  };

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-trust-pill">
              <ShieldCheck size={16} className="trust-pill-icon" />
              <span>Grounded in Official Indian Statutes & Gazettes</span>
            </div>

            <h1 className="hero-title">
              Facing a legal problem? <br />
              <span className="hero-title-accent">Start here.</span>
            </h1>

            <p className="hero-subtitle">
              Describe your situation in simple words and Lawly will help you understand potentially relevant Indian laws, legal information, and possible next steps.
            </p>

            <div className="hero-cta-group">
              <Link to="/analyze" className="btn btn-primary btn-lg hero-primary-btn">
                <Sparkles size={18} />
                <span>Analyze My Issue</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/topics" className="btn btn-outline btn-lg hero-secondary-btn">
                <BookOpen size={18} />
                <span>Explore Legal Topics</span>
              </Link>
            </div>

            <div className="hero-micro-disclaimer">
              <CheckCircle2 size={14} className="text-success" />
              <span>Free public legal information • General legal info, not legal advice</span>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual-col">
            <div className="hero-preview-card">
              <div className="preview-card-header">
                <div className="preview-header-left">
                  <div className="preview-indicator-dot" />
                  <span className="preview-card-label">Interactive Legal Navigation</span>
                </div>
                <span className="badge badge-success">Verified Codes</span>
              </div>

              <div className="preview-query-box">
                <span className="preview-query-title">Sample Citizen Query:</span>
                <p className="preview-query-text">
                  "My landlord refused to refund my ₹60,000 security deposit after I vacated the flat on 31st August with proper notice."
                </p>
              </div>

              <div className="preview-statute-match">
                <div className="preview-statute-pill">
                  <Landmark size={14} />
                  <span>Indian Contract Act, 1872 • Section 73</span>
                </div>
                <div className="preview-statute-pill">
                  <Landmark size={14} />
                  <span>State Tenancy Enactments • Security Deposit Reg.</span>
                </div>
              </div>

              <div className="preview-card-footer">
                <div className="preview-meta">
                  <span className="preview-confidence">Classification: <strong>Rental / Tenancy</strong></span>
                </div>
                <Link to="/analysis/case-rental-101" className="preview-view-link">
                  View Full Sample Analysis <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Try Presets */}
      <section className="presets-section">
        <div className="container">
          <div className="presets-header">
            <h2 className="section-title">Common Situations in India</h2>
            <p className="section-subtitle">
              Tap any example below to see how Lawly identifies relevant statutes and procedural steps:
            </p>
          </div>

          <div className="presets-grid">
            {sampleScenarios.map((sc, idx) => (
              <div 
                key={idx} 
                className="preset-card card card-interactive"
                onClick={() => handlePresetSelect(sc)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handlePresetSelect(sc)}
              >
                <div className="preset-card-top">
                  <span className="badge badge-primary">{sc.category}</span>
                  <span className="preset-state-tag">{sc.state}</span>
                </div>
                <h3 className="preset-card-title">{sc.title}</h3>
                <p className="preset-card-text">"{sc.text}"</p>
                <div className="preset-card-cta">
                  <span>Analyze this scenario</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Helpline Banner */}
      <section className="emergency-highlight-section" id="emergency-section">
        <div className="container">
          <div className="emergency-highlight-box">
            <div className="emergency-highlight-info">
              <div className="emergency-pulse-badge">
                <PhoneCall size={18} />
                <span>Immediate Safety First</span>
              </div>
              <h2 className="emergency-highlight-title">In an urgent crisis or physical danger?</h2>
              <p className="emergency-highlight-desc">
                If you face physical violence, threats, detention, or urgent distress, do not wait for online analysis. Reach out directly to national Indian emergency and legal services.
              </p>
            </div>

            <div className="emergency-quick-chips">
              {EMERGENCY_HELPLINES.slice(0, 4).map((h, i) => (
                <a key={i} href={`tel:${h.number}`} className="emergency-chip">
                  <span className="chip-number">{h.number}</span>
                  <span className="chip-name">{h.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Flow / How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="text-center section-header">
            <span className="badge badge-neutral">Information Navigation System</span>
            <h2 className="section-title mt-2">How Lawly Works</h2>
            <p className="section-subtitle">
              A structured 4-step path to bring clarity to complex legal situations:
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-badge-number">1</div>
              <h3 className="step-card-title">Describe Your Issue</h3>
              <p className="step-card-desc">
                Type your issue in plain language. Select your Indian state so jurisdictional rules can be identified.
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge-number">2</div>
              <h3 className="step-card-title">Answer Clarifications</h3>
              <p className="step-card-desc">
                Lawly asks 2-3 focused questions to establish agreements, timelines, and facts before drawing conclusions.
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge-number">3</div>
              <h3 className="step-card-title">Ground in Verified Acts</h3>
              <p className="step-card-desc">
                Provisions are matched to verified central and state enactments in the official India Code repository.
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge-number">4</div>
              <h3 className="step-card-title">Understand Options</h3>
              <p className="step-card-desc">
                Receive plain-English meanings, procedural next steps, and official source links with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Topic Explorer Preview */}
      <section className="topics-preview-section">
        <div className="container">
          <div className="topics-preview-header">
            <div>
              <h2 className="section-title">Explore Indian Legal Topics</h2>
              <p className="section-subtitle">
                Browse common categories of law affecting everyday citizens and professionals:
              </p>
            </div>
            <Link to="/topics" className="btn btn-outline btn-sm">
              View All 12 Topics <ArrowRight size={14} />
            </Link>
          </div>

          <div className="topics-grid">
            {LEGAL_TOPICS.slice(0, 6).map((topic) => (
              <Link key={topic.id} to={`/topics/${topic.slug}`} className="topic-card card card-interactive">
                <div className="topic-card-icon-wrap">
                  <Scale size={22} className="topic-icon" />
                </div>
                <h3 className="topic-card-title">{topic.title}</h3>
                <p className="topic-card-desc">{topic.description}</p>
                <div className="topic-card-footer">
                  <span className="topic-acts-count">{topic.primaryActs.length} Key Enactments</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Grounding Principles */}
      <section className="principles-section">
        <div className="container">
          <div className="principles-card">
            <div className="principles-header">
              <ShieldAlert size={28} className="principles-icon" />
              <div>
                <h2 className="principles-title">Built on Responsible Legal Principles</h2>
                <p className="principles-subtitle">
                  We believe automated legal tools must adhere to strict ethical and accuracy standards:
                </p>
              </div>
            </div>

            <div className="principles-grid">
              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-check" />
                <div>
                  <h4 className="principle-item-title">Zero Fabricated Statutes</h4>
                  <p className="principle-item-text">
                    Lawly never hallucinates section numbers, case titles, or fake URLs. Every provision is verified against India Code.
                  </p>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-check" />
                <div>
                  <h4 className="principle-item-title">Clear Separation of Facts & Laws</h4>
                  <p className="principle-item-text">
                    Answers clearly distinguish between user-supplied facts, statutory text, and potential next steps.
                  </p>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-check" />
                <div>
                  <h4 className="principle-item-title">Careful Confidence Language</h4>
                  <p className="principle-item-text">
                    No misleading precision like "98% legally sound". We use honest language: "Potentially relevant".
                  </p>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-check" />
                <div>
                  <h4 className="principle-item-title">Advocates Act Compliant</h4>
                  <p className="principle-item-text">
                    General legal information for education only. We empower citizens to hold informed conversations with lawyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container container-narrow">
          <div className="text-center section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common queries about using Lawly for legal information:</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="faq-item card">
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <ChevronRight size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-box animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta-section">
        <div className="container">
          <div className="bottom-cta-card">
            <h2 className="bottom-cta-title">Ready to understand your legal situation?</h2>
            <p className="bottom-cta-subtitle">
              Describe what happened in your own words. No legal terminology required.
            </p>
            <Link to="/analyze" className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Start Issue Analysis</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
