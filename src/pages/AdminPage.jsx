import React, { useState } from 'react';
import { 
  ShieldCheck, Plus, Search, Edit3, Trash2, CheckCircle, 
  AlertCircle, ExternalLink, MessageSquare, Filter, X 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useKnowledge } from '../context/KnowledgeContext';
import { INDIAN_STATES } from '../data/mockLegalData';

export const AdminPage = () => {
  const { user, isAdmin, loginAsDemoAdmin } = useAuth();
  const { 
    documents, feedback, addDocument, updateDocument, 
    deleteDocument, toggleVerification, updateFeedbackStatus 
  } = useKnowledge();

  const [activeTab, setActiveTab] = useState('documents'); // 'documents' | 'feedback'
  const [searchDoc, setSearchDoc] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDoc, setEditingDoc] = useState(null);

  // Form State for Adding / Editing Document
  const [formData, setFormData] = useState({
    act: '',
    actNumber: '',
    section: '',
    sectionTitle: '',
    category: 'Contracts & Agreements',
    summary: '',
    jurisdiction: 'Union of India (Central)',
    officialUrl: 'https://www.indiacode.nic.in',
    status: 'Verified',
    verifiedBy: 'Legal Knowledge Admin'
  });

  const categories = [
    "Contracts & Agreements",
    "Consumer Rights",
    "Property & Rent",
    "Employment & Labour",
    "Cybercrime & Digital",
    "Police & Criminal Procedure",
    "Traffic & Vehicles",
    "Banking & Finance"
  ];

  const handleOpenAdd = () => {
    setEditingDoc(null);
    setFormData({
      act: '',
      actNumber: '',
      section: '',
      sectionTitle: '',
      category: 'Contracts & Agreements',
      summary: '',
      jurisdiction: 'Union of India (Central)',
      officialUrl: 'https://www.indiacode.nic.in',
      status: 'Verified',
      verifiedBy: user?.name || 'Knowledge Admin'
    });
    setShowAddModal(true);
  };

  const handleOpenEdit = (doc) => {
    setEditingDoc(doc);
    setFormData({
      act: doc.act,
      actNumber: doc.actNumber || '',
      section: doc.section,
      sectionTitle: doc.sectionTitle,
      category: doc.category,
      summary: doc.summary,
      jurisdiction: doc.jurisdiction,
      officialUrl: doc.officialUrl,
      status: doc.status,
      verifiedBy: doc.verifiedBy || 'Knowledge Admin'
    });
    setShowAddModal(true);
  };

  const handleSaveDocument = (e) => {
    e.preventDefault();
    if (!formData.act || !formData.section || !formData.summary) {
      alert("Please fill Act, Section, and Plain Summary fields.");
      return;
    }

    if (editingDoc) {
      updateDocument(editingDoc.id, formData);
    } else {
      addDocument(formData);
    }
    setShowAddModal(false);
    setEditingDoc(null);
  };

  const filteredDocuments = documents.filter((doc) => {
    const q = searchDoc.toLowerCase();
    return (
      doc.act.toLowerCase().includes(q) ||
      doc.section.toLowerCase().includes(q) ||
      doc.sectionTitle.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q)
    );
  });

  // If not logged in as Admin, show clean authorization gate with 1-click evaluation switch
  if (!isAdmin) {
    return (
      <div className="container container-narrow py-5 animate-fade-in">
        <div className="admin-gate-card card text-center py-5 my-4">
          <ShieldCheck size={48} className="text-primary mx-auto mb-3" />
          <h2>Admin Knowledge Base Access</h2>
          <p className="text-muted mt-2">
            The legal knowledge base curation dashboard is restricted to authorized legal editors and administrators to prevent unverified modification of statutory citations.
          </p>
          <div className="mt-4">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={loginAsDemoAdmin}
            >
              <ShieldCheck size={16} /> Switch to Demo Admin Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page-root animate-fade-in">
      <div className="container">
        
        {/* Admin Header */}
        <div className="admin-header-row">
          <div>
            <div className="admin-badge-strip">
              <span className="badge badge-primary">
                <ShieldCheck size={13} /> Admin Console
              </span>
              <span className="admin-curator-name">Curator: {user.name}</span>
            </div>
            <h1 className="page-title mt-1">Legal Knowledge Base Administration</h1>
            <p className="page-subtitle">
              Maintain verified Indian Acts, Sections, jurisdictions, and official India Code citations.
            </p>
          </div>

          <div className="admin-header-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={handleOpenAdd}
            >
              <Plus size={16} /> Add Legal Document
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs-strip">
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Verified Statutes ({documents.length})
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            User Feedback & Reports ({feedback.length})
          </button>
        </div>

        {/* TAB 1: DOCUMENTS */}
        {activeTab === 'documents' && (
          <div className="admin-tab-content animate-fade-in">
            {/* Search & Stats */}
            <div className="admin-search-bar card mb-4">
              <div className="search-input-box">
                <Search size={18} className="search-icon-inside" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter by Act name, Section, or category..."
                  value={searchDoc}
                  onChange={(e) => setSearchDoc(e.target.value)}
                />
              </div>
            </div>

            {/* Documents Table / Card List */}
            <div className="admin-docs-list">
              {filteredDocuments.map((doc) => (
                <div key={doc.id} className="admin-doc-card card">
                  <div className="admin-doc-header">
                    <div className="admin-doc-title-group">
                      <span className="law-section-badge">{doc.section}</span>
                      <h3 className="admin-doc-act">{doc.act}</h3>
                      {doc.actNumber && <span className="doc-act-number">({doc.actNumber})</span>}
                    </div>

                    <div className="admin-doc-status-group">
                      <button
                        type="button"
                        className={`badge ${doc.status === 'Verified' ? 'badge-success' : 'badge-warning'} clickable-badge`}
                        onClick={() => toggleVerification(doc.id)}
                        title="Click to toggle verified status"
                      >
                        {doc.status === 'Verified' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                        {doc.status}
                      </button>

                      <div className="admin-doc-actions">
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm"
                          onClick={() => handleOpenEdit(doc)}
                          title="Edit Document"
                        >
                          <Edit3 size={15} />
                        </button>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm text-danger"
                          onClick={() => {
                            if (window.confirm(`Delete ${doc.act} (${doc.section})?`)) {
                              deleteDocument(doc.id);
                            }
                          }}
                          title="Delete Document"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <h4 className="admin-doc-section-title">{doc.sectionTitle}</h4>
                  <p className="admin-doc-summary">{doc.summary}</p>

                  <div className="admin-doc-footer">
                    <div className="admin-doc-meta-tags">
                      <span className="badge badge-neutral">{doc.jurisdiction}</span>
                      <span className="badge badge-primary">{doc.category}</span>
                      <span className="doc-meta-item">Verified: {doc.lastVerifiedDate}</span>
                    </div>

                    {doc.officialUrl && (
                      <a
                        href={doc.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doc-url-link"
                      >
                        India Code ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {filteredDocuments.length === 0 && (
                <div className="text-center py-5 card">
                  <p className="text-muted">No statutory documents match "{searchDoc}".</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: USER FEEDBACK & REPORTED ISSUES */}
        {activeTab === 'feedback' && (
          <div className="admin-tab-content animate-fade-in">
            <div className="feedback-cards-list">
              {feedback.map((item) => (
                <div key={item.id} className="feedback-report-card card">
                  <div className="feedback-card-header">
                    <div>
                      <span className={`badge ${item.status === 'Resolved' ? 'badge-success' : 'badge-warning'}`}>
                        {item.status}
                      </span>
                      <span className="feedback-query-id">Query Ref: {item.userQueryId}</span>
                    </div>
                    <span className="feedback-time-text">{item.reportedAt}</span>
                  </div>

                  <div className="feedback-user-quote">
                    <MessageSquare size={16} className="inline-icon" />
                    <strong>User Report / Suggestion:</strong>
                    <p className="mt-1">"{item.userComment}"</p>
                  </div>

                  {item.reviewerNotes && (
                    <div className="reviewer-notes-box">
                      <strong>Admin Notes:</strong> {item.reviewerNotes}
                    </div>
                  )}

                  <div className="feedback-card-actions mt-3">
                    {item.status !== 'Resolved' ? (
                      <button
                        type="button"
                        className="btn btn-outline btn-sm text-success"
                        onClick={() => updateFeedbackStatus(item.id, 'Resolved', 'Verified by Knowledge Admin and statutory update logged.')}
                      >
                        <CheckCircle size={14} /> Mark as Verified & Resolved
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={() => updateFeedbackStatus(item.id, 'Under Review')}
                      >
                        Reopen Review
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {feedback.length === 0 && (
                <div className="text-center py-5 card">
                  <CheckCircle size={40} className="text-success mx-auto mb-2" />
                  <h4>No pending user feedback reports</h4>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Add / Edit Modal */}
      {showAddModal && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowAddModal(false)}>
          <div className="modal-dialog card modal-dialog-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {editingDoc ? 'Edit Legal Provision' : 'Add New Legal Document to Knowledge Base'}
              </h3>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowAddModal(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveDocument} className="modal-body admin-form-grid">
              <div className="form-group">
                <label className="form-label">Act Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Indian Contract Act, 1872"
                  value={formData.act}
                  onChange={(e) => setFormData({ ...formData, act: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Act / Enactment Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Act No. 9 of 1872"
                  value={formData.actNumber}
                  onChange={(e) => setFormData({ ...formData, actNumber: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Section Number <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Section 73"
                  value={formData.section}
                  onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Section Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Compensation for loss caused by breach of contract"
                  value={formData.sectionTitle}
                  onChange={(e) => setFormData({ ...formData, sectionTitle: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-control"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Jurisdiction</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Union of India (Central) or Tamil Nadu State"
                  value={formData.jurisdiction}
                  onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Official Source URL (India Code)</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://www.indiacode.nic.in/handle/..."
                  value={formData.officialUrl}
                  onChange={(e) => setFormData({ ...formData, officialUrl: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Verification Status</label>
                <select
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Verified">Verified (Official Source Checked)</option>
                  <option value="Unverified">Unverified (Pending Review)</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Plain Language Statutory Summary <span className="text-danger">*</span></label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Summarize the core legal rule in clear, plain English without unnecessary legal jargon..."
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  required
                />
              </div>

              <div className="modal-actions full-width mt-3">
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingDoc ? 'Save Updates' : 'Add to Knowledge Base'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
