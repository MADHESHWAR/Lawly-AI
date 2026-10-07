import React from 'react';
import { ShieldCheck, ExternalLink, Calendar, Landmark } from 'lucide-react';

export const SourceCard = ({ source }) => {
  const {
    title,
    authority,
    url,
    citation,
    verified,
    verificationDate
  } = source;

  return (
    <div className="source-transparency-card">
      <div className="source-card-main">
        <div className="source-icon-wrap">
          <Landmark size={20} className="source-repo-icon" />
        </div>
        <div className="source-details">
          <h4 className="source-title">{title}</h4>
          <p className="source-authority">
            <strong>Publishing Authority:</strong> {authority}
          </p>
          <div className="source-citation-row">
            <span className="source-citation-badge">{citation}</span>
            {verified && (
              <span className="source-verified-badge">
                <ShieldCheck size={12} /> Official India Code Repo
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="source-card-actions">
        <div className="source-verification-date">
          <Calendar size={12} />
          <span>Last verified: {verificationDate || 'Recently checked'}</span>
        </div>

        {url && (
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm source-external-link"
          >
            <span>Open Repository</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
};
