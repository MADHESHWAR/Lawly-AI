import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Sparkles, HelpCircle, MapPin, Calendar, IndianRupee, 
  UploadCloud, ChevronDown, ChevronUp, AlertCircle, FileText, Check 
} from 'lucide-react';
import { 
  INDIAN_STATES, HIGH_RISK_KEYWORDS, CLARIFICATION_QUESTIONS_MAP, MOCK_ANALYSES 
} from '../data/mockLegalData';
import { ClarificationWizard } from '../components/analysis/ClarificationWizard';
import { LoadingAnalysis } from '../components/analysis/LoadingAnalysis';
import { EmergencyAlert } from '../components/common/EmergencyAlert';
import { useHistory } from '../context/HistoryContext';

export const AnalyzePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addAnalysis } = useHistory();

  // Form State
  const [issueDescription, setIssueDescription] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [incidentDate, setIncidentDate] = useState('');
  const [cityLocation, setCityLocation] = useState('');
  const [approxAmount, setApproxAmount] = useState('');
  const [mockUploadedFile, setMockUploadedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Flow State: 'input' | 'emergency' | 'clarification' | 'loading'
  const [stage, setStage] = useState('input');
  const [detectedRiskTerm, setDetectedRiskTerm] = useState('');
  const [activeClarificationQuestions, setActiveClarificationQuestions] = useState([]);
  const [gatheredAnswers, setGatheredAnswers] = useState({});

  // Check if routed with preset data
  useEffect(() => {
    if (location.state?.prefill) {
      setIssueDescription(location.state.prefill);
    }
    if (location.state?.state) {
      setSelectedState(location.state.state);
    }
  }, [location.state]);

  // Quick preset helper for testers
  const fillSample = (type) => {
    if (type === 'rental') {
      setIssueDescription("My landlord is refusing to return my security deposit of ₹60,000 after I moved out with proper notice. He claims repainting costs without showing any invoices.");
      setSelectedState("Tamil Nadu");
      setApproxAmount("60000");
    } else if (type === 'consumer') {
      setIssueDescription("Ordered an electronic laptop online for ₹54,000. It arrived non-functional (dead on arrival). The seller denied return saying I must contact manufacturer.");
      setSelectedState("Maharashtra");
      setApproxAmount("54000");
    } else if (type === 'salary') {
      setIssueDescription("My employer has withheld 2 months salary (₹1,80,000) and refused to give me my relieving letter even after I served full 60-day notice period.");
      setSelectedState("Karnataka");
      setApproxAmount("180000");
    } else if (type === 'cyber') {
      setIssueDescription("I received a message about an unpaid power bill and clicked a link. Money was debited from my account via unauthorized UPI transfer.");
      setSelectedState("Delhi (NCT)");
      setApproxAmount("25000");
    }
    setErrorMsg('');
  };

  // High-risk keyword scanner
  const checkHighRisk = (text) => {
    const lower = text.toLowerCase();
    for (const kw of HIGH_RISK_KEYWORDS) {
      if (lower.includes(kw)) {
        return kw;
      }
    }
    return null;
  };

  // Determine legal category for clarification questions
  const detectCategory = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('rent') || lower.includes('landlord') || lower.includes('tenant') || lower.includes('deposit') || lower.includes('flat') || lower.includes('apartment')) {
      return "Rental / Tenancy";
    }
    if (lower.includes('order') || lower.includes('refund') || lower.includes('defect') || lower.includes('seller') || lower.includes('warranty') || lower.includes('product') || lower.includes('e-commerce') || lower.includes('bought')) {
      return "Consumer Rights";
    }
    if (lower.includes('salary') || lower.includes('employer') || lower.includes('job') || lower.includes('notice period') || lower.includes('relieving letter') || lower.includes('wages') || lower.includes('company')) {
      return "Employment & Labour";
    }
    return "General";
  };

  const handleStartAnalysis = (e) => {
    e?.preventDefault();
    if (!issueDescription.trim() || issueDescription.trim().length < 15) {
      setErrorMsg("Please provide a little more detail about what happened (at least 15 characters).");
      return;
    }

    // Step 1: High risk check
    const riskTerm = checkHighRisk(issueDescription);
    if (riskTerm) {
      setDetectedRiskTerm(riskTerm);
      setStage('emergency');
      return;
    }

    proceedToClarification();
  };

  const proceedToClarification = () => {
    const cat = detectCategory(issueDescription);
    const questions = CLARIFICATION_QUESTIONS_MAP[cat] || CLARIFICATION_QUESTIONS_MAP["General"];
    setActiveClarificationQuestions(questions);
    setStage('clarification');
  };

  const handleClarificationComplete = (answers) => {
    setGatheredAnswers(answers);
    setStage('loading');
  };

  const handleLoadingComplete = () => {
    // Generate or match analysis result
    const cat = detectCategory(issueDescription);
    let matchedMock = MOCK_ANALYSES.find(m => m.category === cat);
    if (!matchedMock) {
      matchedMock = MOCK_ANALYSES[0];
    }

    const newAnalysisId = `case-${Date.now()}`;
    const newAnalysis = {
      ...matchedMock,
      id: newAnalysisId,
      date: new Date().toISOString().split('T')[0],
      state: selectedState || 'All India',
      jurisdiction: `${selectedState || 'All India'}, India`,
      userFacts: issueDescription,
      clarificationAnswers: gatheredAnswers,
      approxAmount: approxAmount ? `₹${approxAmount}` : undefined,
      cityLocation: cityLocation || undefined
    };

    addAnalysis(newAnalysis);
    navigate(`/analysis/${newAnalysisId}`);
  };

  return (
    <div className="analyze-page-root animate-fade-in">
      <div className="container container-narrow">

        {/* STAGE 1: ISSUE INPUT FORM */}
        {stage === 'input' && (
          <div className="analyze-card card">
            <div className="analyze-card-header">
              <span className="badge badge-primary">Issue Navigation</span>
              <h1 className="analyze-page-title">Tell us what happened</h1>
              <p className="analyze-page-subtitle">
                Describe your situation in simple words. Lawly will identify potential legal categories, ask clarifying questions, and find relevant verified Indian statutes.
              </p>
            </div>

            {/* Quick Test Fillers for Demo */}
            <div className="quick-fill-container">
              <span className="quick-fill-label">Quick sample scenarios:</span>
              <div className="quick-fill-buttons">
                <button type="button" className="quick-fill-btn" onClick={() => fillSample('rental')}>
                  🏠 Tenancy Deposit
                </button>
                <button type="button" className="quick-fill-btn" onClick={() => fillSample('consumer')}>
                  🛒 Defective Product
                </button>
                <button type="button" className="quick-fill-btn" onClick={() => fillSample('salary')}>
                  💼 Unpaid Salary
                </button>
                <button type="button" className="quick-fill-btn" onClick={() => fillSample('cyber')}>
                  💳 Cyber Fraud
                </button>
              </div>
            </div>

            <form onSubmit={handleStartAnalysis} className="analyze-form">
              {/* Main Issue Description */}
              <div className="form-group">
                <label htmlFor="issue-description" className="form-label">
                  Describe what happened <span className="text-danger">*</span>
                </label>
                <textarea
                  id="issue-description"
                  className="form-control analyze-textarea"
                  rows={6}
                  placeholder="Example: My landlord is refusing to return my security deposit after I moved out with agreed notice..."
                  value={issueDescription}
                  onChange={(e) => {
                    setIssueDescription(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  required
                />
                <div className="form-help">
                  Write freely in plain language. Do not worry about legal sections or technical terms.
                </div>
              </div>

              {/* State Dropdown */}
              <div className="form-group">
                <label htmlFor="state-select" className="form-label">
                  <MapPin size={16} className="inline-icon" /> Select your state or Union Territory
                </label>
                <select
                  id="state-select"
                  className="form-control"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select State or Union Territory</option>
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
                <div className="form-help">
                  Indian states have different local tenancy, shops, and municipal regulations.
                </div>
              </div>

              {/* Progressive Disclosure: Optional Details */}
              <div className="optional-details-wrapper">
                <button
                  type="button"
                  className="optional-toggle-btn"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                >
                  <span>{showOptionalFields ? "Hide optional details" : "Add optional details (date, amount, document)"}</span>
                  {showOptionalFields ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {showOptionalFields && (
                  <div className="optional-fields-grid animate-fade-in">
                    <div className="form-group">
                      <label htmlFor="incident-date" className="form-label">
                        <Calendar size={14} className="inline-icon" /> Date of Incident / Notice
                      </label>
                      <input
                        id="incident-date"
                        type="date"
                        className="form-control"
                        value={incidentDate}
                        onChange={(e) => setIncidentDate(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="approx-amount" className="form-label">
                        <IndianRupee size={14} className="inline-icon" /> Approximate Amount Involved (₹)
                      </label>
                      <input
                        id="approx-amount"
                        type="number"
                        className="form-control"
                        placeholder="e.g. 50000"
                        value={approxAmount}
                        onChange={(e) => setApproxAmount(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="city-location" className="form-label">
                        City / District
                      </label>
                      <input
                        id="city-location"
                        type="text"
                        className="form-control"
                        placeholder="e.g. Chennai, Mumbai, Bengaluru"
                        value={cityLocation}
                        onChange={(e) => setCityLocation(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <UploadCloud size={14} className="inline-icon" /> Relevant Document (Optional)
                      </label>
                      <div className="mock-upload-box">
                        <input
                          type="file"
                          id="file-upload"
                          className="file-input-hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setMockUploadedFile(e.target.files[0].name);
                            }
                          }}
                        />
                        <label htmlFor="file-upload" className="mock-upload-label">
                          <UploadCloud size={20} />
                          <span>{mockUploadedFile ? `Attached: ${mockUploadedFile}` : "Upload agreement, bill, or notice"}</span>
                          <small>(PDF, PNG, JPG up to 10MB)</small>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {errorMsg && (
                <div className="form-error-banner">
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Primary CTA */}
              <div className="analyze-submit-row">
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  <Sparkles size={18} />
                  <span>Analyze Issue</span>
                </button>
              </div>

              <div className="disclaimer-mini-note">
                <p>
                  Lawly provides general legal information for informational purposes. It does not provide legal advice or replace a qualified lawyer.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* STAGE 2: EMERGENCY DETECTION TRIGGER */}
        {stage === 'emergency' && (
          <EmergencyAlert
            detectedTerm={detectedRiskTerm}
            onProceedAnyway={() => {
              setStage('input');
              proceedToClarification();
            }}
          />
        )}

        {/* STAGE 3: AI CLARIFICATION WIZARD */}
        {stage === 'clarification' && (
          <ClarificationWizard
            questions={activeClarificationQuestions}
            initialFacts={issueDescription}
            onComplete={handleClarificationComplete}
            onCancel={() => setStage('input')}
          />
        )}

        {/* STAGE 4: LOADING EXPERIENCE */}
        {stage === 'loading' && (
          <LoadingAnalysis onComplete={handleLoadingComplete} />
        )}

      </div>
    </div>
  );
};
