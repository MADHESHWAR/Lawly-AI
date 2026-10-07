import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, HeartHandshake, BookOpen, Sparkles, Landmark, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="about-page-root animate-fade-in">
      <div className="container container-narrow">
        
        {/* Header */}
        <div className="about-header text-center my-4">
          <span className="badge badge-primary">Our Mission</span>
          <h1 className="page-title mt-2">Empowering Indian Citizens with Clear Legal Information</h1>
          <p className="page-subtitle">
            Lawly is an AI-assisted legal navigation system designed to make Indian statutes transparent, understandable, and accessible to everyone.
          </p>
        </div>

        {/* Core Philosophy Card */}
        <div className="about-card card mb-4">
          <h2 className="section-block-title">Why Lawly Was Created</h2>
          <p className="mt-2">
            In India, ordinary citizens encounter everyday legal questions: an e-commerce platform refusing to refund a defective product, a landlord holding back a rental security deposit, an employer delaying full and final settlement, or an unexplained traffic challan.
          </p>
          <p className="mt-2">
            Most citizens feel intimidated by dense legal jargon, archaic Latin phrases, and the fear of expensive court litigation. At the same time, standard generic AI chatbots often hallucinate non-existent sections, mix American laws with Indian codes, or invent fake case precedents.
          </p>
          <p className="mt-2">
            <strong>Lawly was built to solve this exact problem:</strong> a legal information navigation system that is strictly grounded in verified Indian statutes, distinguishes facts from interpretations, and explains everything in plain English.
          </p>
        </div>

        {/* 4 Pillars of Responsible Legal AI */}
        <div className="about-card card mb-4">
          <h2 className="section-block-title">The Four Pillars of Lawly</h2>
          
          <div className="pillars-grid mt-3">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Landmark size={20} />
              </div>
              <div>
                <h4 className="pillar-title">1. Grounding in India Code</h4>
                <p className="pillar-desc">
                  Every legal provision is referenced directly against verified enactments maintained by the Legislative Department, Ministry of Law & Justice.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="pillar-title">2. Information, Not Advice</h4>
                <p className="pillar-desc">
                  We empower citizens to understand statutory rights and hold informed dialogues with advocates. We never promise guaranteed legal outcomes.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="pillar-title">3. Plain English Translation</h4>
                <p className="pillar-desc">
                  We convert complex legal phrasing into everyday terms with interactive glossaries so you never need a dictionary to understand your rights.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="pillar-title">4. Immediate Safety Protocols</h4>
                <p className="pillar-desc">
                  Queries indicating urgent physical danger, domestic violence, or custody emergencies are redirected to official national emergency helplines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance with Advocates Act */}
        <div className="about-card card mb-4">
          <h2 className="section-block-title">Compliance with the Advocates Act, 1961</h2>
          <p className="mt-2">
            Under Section 29 and Section 30 of the Advocates Act, 1961, only advocates enrolled with a State Bar Council are entitled to practice law and provide formal legal representation or legal advice before Indian courts.
          </p>
          <p className="mt-2">
            Lawly is an educational and technological navigation tool. It does not solicit clients, provide formal legal advice, or establish an advocate-client relationship. If your situation requires formal dispute resolution or court representation, we encourage engaging an enrolled advocate or applying for free government representation through the National Legal Services Authority (NALSA).
          </p>
        </div>

        {/* Ready to try CTA */}
        <div className="text-center py-4">
          <Link to="/analyze" className="btn btn-primary btn-lg">
            <Sparkles size={18} /> Analyze a Legal Issue Now
          </Link>
        </div>

      </div>
    </div>
  );
};
