import React from 'react';
import { ListChecks, AlertCircle, ArrowUpRight } from 'lucide-react';

export const NextStepsCard = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="next-steps-card">
      <div className="next-steps-header">
        <div className="next-steps-icon-wrap">
          <ListChecks size={22} className="next-steps-icon" />
        </div>
        <div>
          <h3 className="next-steps-title">What you can consider doing</h3>
          <p className="next-steps-subtitle">
            Practical procedural steps and considerations based on common Indian dispute processes.
          </p>
        </div>
      </div>

      <div className="next-steps-list">
        {steps.map((step, idx) => (
          <div key={idx} className="next-step-row">
            <div className="next-step-number">{idx + 1}</div>
            <div className="next-step-body">
              <p className="next-step-text">{step}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="next-steps-caveat">
        <AlertCircle size={15} />
        <span>
          These suggestions are procedural considerations for your information. An enrolled advocate or legal-aid service can help determine the exact legal remedy tailored to your facts.
        </span>
      </div>
    </div>
  );
};
