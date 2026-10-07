import React from 'react';
import { ShieldAlert, AlertTriangle, Scale, ArrowLeft, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DisclaimerPage = () => {
  return (
    <div className="policy-page-root animate-fade-in">
      <div className="container container-narrow">
        <div className="policy-top-nav">
          <Link to="/" className="btn btn-ghost btn-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        <div className="policy-header text-center my-4">
          <span className="badge badge-warning">Statutory Notice</span>
          <h1 className="page-title mt-2">Legal Disclaimer & Terms of Use</h1>
          <p className="page-subtitle">
            Essential clarity on the scope, limitations, and informational nature of the Lawly platform.
          </p>
        </div>

        {/* Primary Statutory Box */}
        <div className="disclaimer-callout-card card mb-4">
          <div className="disclaimer-callout-header">
            <ShieldAlert size={28} className="text-warning" />
            <h2 className="disclaimer-callout-title">Official Informational Notice</h2>
          </div>
          <blockquote className="disclaimer-primary-quote mt-3">
            "Important: Lawly provides general legal information for educational and informational purposes. It does not provide legal advice, create an advocate-client relationship, or replace a qualified lawyer. Laws may change and their application depends on the specific facts and jurisdiction. Verify important information with an appropriate legal professional or official source."
          </blockquote>
        </div>

        <div className="policy-card card mb-4">
          <h3 className="policy-section-title">1. No Advocate-Client Relationship</h3>
          <p>
            Using Lawly, submitting factual scenarios, or reviewing retrieved legal provisions does not establish an advocate-client relationship or confidentiality privilege under the Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam, 2023. Lawly is not a law firm, does not practice before any Indian court, and does not accept legal briefs.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h3 className="policy-section-title">2. No Guarantee of Legal Outcomes</h3>
          <p>
            Law is nuanced and dynamic. Judicial interpretation of statutory sections depends upon specific evidentiary facts, judicial precedents in the relevant High Court or Supreme Court of India, and procedural limitation periods under the Limitation Act, 1963. Lawly does not guarantee any outcome in arbitration, police inquiries, or litigation.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h3 className="policy-section-title">3. Jurisdiction & State Amendments</h3>
          <p>
            While central acts apply across India, subjects such as tenancy, land revenue, police regulations, and shops & establishments contain substantial state-level legislative variations and local municipal by-laws. Always verify state applicability with local counsel.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h3 className="policy-section-title">4. Emergency Situations</h3>
          <p>
            Lawly is not equipped to handle life-threatening situations, active physical assault, domestic violence in progress, suicide risk, or emergency arrests. In any such situation, immediately contact <strong>112 (National Emergency)</strong>, <strong>181 (Women Helpline)</strong>, or <strong>15100 (NALSA Free Legal Aid)</strong>.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h3 className="policy-section-title">5. Authoritative Primary Sources</h3>
          <p>
            Whenever possible, verify legal provisions through primary government repositories:
          </p>
          <ul className="policy-list mt-2">
            <li><a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer">India Code Repository (Ministry of Law and Justice) ↗</a></li>
            <li><a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer">e-Courts Services (Supreme Court of India) ↗</a></li>
            <li><a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer">National Legal Services Authority (NALSA) ↗</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};
