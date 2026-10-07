import React from 'react';
import { ExternalLink, CheckCircle, AlertCircle, BookOpen, MapPin, Calendar } from 'lucide-react';

export const LawCard = ({ law }) => {
  const {
    actName,
    section,
    sectionTitle,
    plainExplanation,
    jurisdiction,
    officialSource,
    sourceUrl,
    lastVerifiedDate,
    isVerified
  } = law;

  return (
    <div className="law-card">
      <div className="law-card-top">
        <div className="law-card-act-info">
          <span className="law-section-badge">{section}</span>
          <h3 className="law-act-name">{actName}</h3>
        </div>

        <div className="law-card-status">
          {isVerified ? (
            <span className="badge badge-success" title="Verified against India Code or Official Gazette">
              <CheckCircle size={12} /> Verified Law
            </span>
          ) : (
            <span className="badge badge-warning" title="Source verification pending">
              <AlertCircle size={12} /> Source Unverified
            </span>
          )}
        </div>
      </div>

      {sectionTitle && (
        <h4 className="law-section-title">
          <BookOpen size={16} className="inline-icon" /> {sectionTitle}
        </h4>
      )}

      {/* Potential Relevance Explanation */}
      <div className="law-relevance-box">
        <span className="law-relevance-label">Potential Relevance:</span>
        <p className="law-relevance-text">{plainExplanation}</p>
      </div>

      {/* Unverified Warning if applicable */}
      {!isVerified && (
        <div className="unverified-warning-banner">
          <AlertCircle size={16} />
          <span>
            Source verification unavailable. This information should not be relied upon as a verified legal citation.
          </span>
        </div>
      )}

      {/* Metadata & Source Links */}
      <div className="law-card-meta-footer">
        <div className="law-meta-items">
          <span className="law-meta-item">
            <MapPin size={13} /> {jurisdiction || 'All India'}
          </span>
          <span className="law-meta-item">
            <Calendar size={13} /> Verified: {lastVerifiedDate || 'Recent'}
          </span>
        </div>

        {sourceUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm law-source-btn"
            title={`View official statute in ${officialSource || 'Official Repository'}`}
          >
            <span>View Source</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <span className="law-source-unavailable">No direct link</span>
        )}
      </div>
    </div>
  );
};
