import React from 'react';
import { ShieldCheck, Lock, HardDrive, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage = () => {
  return (
    <div className="policy-page-root animate-fade-in">
      <div className="container container-narrow">
        <div className="policy-top-nav">
          <Link to="/" className="btn btn-ghost btn-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        <div className="policy-header text-center my-4">
          <span className="badge badge-primary">Data Protection & Rights</span>
          <h1 className="page-title mt-2">Lawly Privacy Policy</h1>
          <p className="page-subtitle">
            How we protect user confidentiality in alignment with the Digital Personal Data Protection (DPDP) Act, 2023.
          </p>
          <small className="text-muted">Last updated: February 2026</small>
        </div>

        <div className="policy-card card mb-4">
          <h2 className="policy-section-title">1. Introduction</h2>
          <p>
            Lawly ("we", "us", or "our") respects your fundamental right to privacy under Article 21 of the Constitution of India and statutory data protection principles. Because legal issues often involve sensitive personal or financial circumstances, our platform is engineered around the principle of <strong>Data Minimization</strong>.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h2 className="policy-section-title">2. Information We Collect</h2>
          <p>We only collect information voluntarily provided by you to perform legal information navigation:</p>
          <ul className="policy-list mt-2">
            <li><strong>Factual Scenario Description:</strong> The text narrative you enter describing the dispute or grievance.</li>
            <li><strong>Jurisdiction:</strong> The selected Indian State or Union Territory, used exclusively to match state-level enactments.</li>
            <li><strong>Clarification Answers:</strong> Optional answers provided during the clarification wizard.</li>
            <li><strong>Basic Account Details:</strong> Name and email address if you choose to register an account.</li>
          </ul>
          <p className="mt-2">
            <strong>What we DO NOT collect:</strong> We never require or store Aadhaar numbers, PAN numbers, bank passwords, debit/credit card PINs, or biometric identifiers.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h2 className="policy-section-title">3. How Information Is Processed</h2>
          <p>Your inputs are processed strictly to:</p>
          <ul className="policy-list mt-2">
            <li>Classify the legal subject matter (e.g. Tenancy, Consumer Protection, Labour).</li>
            <li>Cross-reference against verified central and state enactments in India Code.</li>
            <li>Generate plain-language explanations of statutory provisions and possible procedural next steps.</li>
          </ul>
          <p className="mt-2">
            Your factual submissions are never sold, traded, or shared with third-party advertisers, debt collectors, or litigation funders.
          </p>
        </div>

        <div className="policy-card card mb-4">
          <h2 className="policy-section-title">4. Data Retention & User Erasure Rights</h2>
          <p>
            You retain absolute ownership and control over your submitted inquiries. In accordance with Section 12 of the DPDP Act, 2023 (Right to Correction and Erasure):
          </p>
          <ul className="policy-list mt-2">
            <li>You can delete individual questions from your <Link to="/history">Question History</Link> at any time.</li>
            <li>You can execute a 1-click total memory wipe from your <Link to="/profile">Profile Privacy</Link> tab.</li>
          </ul>
        </div>

        <div className="policy-card card mb-4">
          <h2 className="policy-section-title">5. Contact Our Privacy Grievance Officer</h2>
          <p>
            Under Rule 5(9) of the Information Technology Rules and the DPDP Act, 2023, you may contact our Grievance Redressal mechanism at:
          </p>
          <div className="grievance-contact-box mt-3 p-3 card">
            <p><strong>Grievance Officer:</strong> Lawly Privacy & Compliance Desk</p>
            <p><strong>Email:</strong> privacy@lawly.in</p>
            <p><strong>Response Turnaround:</strong> Within 48 business hours</p>
          </div>
        </div>

      </div>
    </div>
  );
};
