import React, { useState, useEffect } from 'react';
import { Scale, CheckCircle2, Loader2, Sparkles, Database, FileText } from 'lucide-react';

const STEPS = [
  { text: "Understanding your issue and identifying key facts...", icon: Sparkles },
  { text: "Finding relevant legal information and Indian statutes...", icon: Scale },
  { text: "Checking available official repositories and sources...", icon: Database },
  { text: "Preparing a simple explanation and possible next steps...", icon: FileText }
];

export const LoadingAnalysis = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete && onComplete();
          }, 800);
          return prev;
        }
      });
    }, 1100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-analysis-container animate-fade-in" role="status" aria-live="polite">
      <div className="loading-card">
        <div className="loading-header-pulse">
          <div className="loading-pulse-ring">
            <Scale size={32} className="loading-scale-icon" />
          </div>
          <h3 className="loading-title">Analyzing Your Legal Issue</h3>
          <p className="loading-subtitle">Cross-referencing verified Indian acts and official gazette repositories...</p>
        </div>

        <div className="loading-steps-list">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            const isUpcoming = idx > currentStep;
            const StepIcon = step.icon;

            return (
              <div 
                key={idx} 
                className={`loading-step-item ${isCompleted ? 'step-completed' : ''} ${isCurrent ? 'step-active' : ''} ${isUpcoming ? 'step-upcoming' : ''}`}
              >
                <div className="step-indicator">
                  {isCompleted ? (
                    <CheckCircle2 size={20} className="step-icon-success" />
                  ) : isCurrent ? (
                    <Loader2 size={20} className="step-icon-spinning" />
                  ) : (
                    <div className="step-dot" />
                  )}
                </div>

                <div className="step-content">
                  <span className="step-text">{step.text}</span>
                  {isCurrent && (
                    <span className="step-status-tag">Processing...</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="loading-disclaimer-note">
          <p>
            Lawly grounds information in official Indian statutes (India Code, e-Courts, Central Acts). Responses are educational and not legal advice.
          </p>
        </div>
      </div>
    </div>
  );
};
