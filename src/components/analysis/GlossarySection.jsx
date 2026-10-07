import React from 'react';
import { BookA, ArrowRight } from 'lucide-react';

export const GlossarySection = ({ glossary }) => {
  if (!glossary || glossary.length === 0) return null;

  return (
    <div className="glossary-section-card">
      <div className="glossary-header">
        <BookA size={20} className="glossary-header-icon" />
        <div>
          <h3 className="glossary-title">Legal Terms → Simple Meanings</h3>
          <p className="glossary-subtitle">Key terms explained in plain English to avoid unnecessary legal jargon.</p>
        </div>
      </div>

      <div className="glossary-grid">
        {glossary.map((item, idx) => (
          <div key={idx} className="glossary-item-card">
            <div className="glossary-item-top">
              <span className="glossary-term">{item.term}</span>
              <ArrowRight size={14} className="glossary-arrow" />
            </div>
            <p className="glossary-meaning">{item.simpleMeaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
