import React, { useState } from 'react';
import { HelpCircle, ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { INDIAN_STATES } from '../../data/mockLegalData';

export const ClarificationWizard = ({ questions, initialFacts, onComplete, onCancel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [customText, setCustomText] = useState('');

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (option) => {
    const updatedAnswers = {
      ...answers,
      [currentQ.id]: { question: currentQ.question, answer: option }
    };
    setAnswers(updatedAnswers);
    moveToNext(updatedAnswers);
  };

  const handleCustomSubmit = (e) => {
    e?.preventDefault();
    if (!customText.trim()) return;
    const updatedAnswers = {
      ...answers,
      [currentQ.id]: { question: currentQ.question, answer: customText.trim() }
    };
    setAnswers(updatedAnswers);
    setCustomText('');
    moveToNext(updatedAnswers);
  };

  const handleSkip = () => {
    const updatedAnswers = {
      ...answers,
      [currentQ.id]: { question: currentQ.question, answer: "Not specified / Skipped by user" }
    };
    setAnswers(updatedAnswers);
    moveToNext(updatedAnswers);
  };

  const moveToNext = (currentAnswers) => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(currentAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onCancel();
    }
  };

  return (
    <div className="clarification-wizard-card animate-fade-in">
      {/* Header and Progress Bar */}
      <div className="wizard-header">
        <div className="wizard-progress-meta">
          <button 
            type="button" 
            className="wizard-back-btn" 
            onClick={handlePrevious}
            aria-label="Previous question"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="wizard-step-badge">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <button 
            type="button" 
            className="wizard-skip-btn" 
            onClick={handleSkip}
          >
            Skip question
          </button>
        </div>

        {/* Visual Progress Bar */}
        <div className="wizard-progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
          <div className="wizard-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* AI Assistant Context Banner */}
      <div className="wizard-ai-prompt">
        <HelpCircle size={20} className="wizard-ai-icon" />
        <div>
          <h3 className="wizard-ai-title">I need a few details to understand your situation better.</h3>
          <p className="wizard-ai-subtitle">
            Answering these clarifies state jurisdiction and legal thresholds before retrieving relevant statutes.
          </p>
        </div>
      </div>

      {/* Current Question */}
      <div className="wizard-question-box">
        <h4 className="wizard-question-text">{currentQ.question}</h4>
        {currentQ.helpText && (
          <p className="wizard-question-help">{currentQ.helpText}</p>
        )}

        {/* Input Type 1: State Selection */}
        {currentQ.type === 'state_select' && (
          <div className="wizard-state-container">
            <select 
              className="form-control wizard-state-select"
              defaultValue=""
              onChange={(e) => {
                if (e.target.value) handleSelectOption(e.target.value);
              }}
            >
              <option value="" disabled>Select State / Union Territory</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        )}

        {/* Input Type 2: Choice Options */}
        {currentQ.type === 'choice' && currentQ.options && (
          <div className="wizard-options-list">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                type="button"
                className="wizard-option-btn"
                onClick={() => handleSelectOption(option)}
              >
                <span className="option-bullet">{String.fromCharCode(65 + idx)}</span>
                <span className="option-text">{option}</span>
                <ChevronRight size={18} className="option-arrow" />
              </button>
            ))}
          </div>
        )}

        {/* Input Type 3: Custom Text Input */}
        <div className="wizard-custom-input-box">
          <form onSubmit={handleCustomSubmit} className="wizard-custom-form">
            <label htmlFor="custom-clarification-input" className="form-label-hint">
              Or describe this detail in your own words:
            </label>
            <div className="wizard-input-inline">
              <input
                id="custom-clarification-input"
                type="text"
                className="form-control"
                placeholder="Type your answer here..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={!customText.trim()}
              >
                Submit <ChevronRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
