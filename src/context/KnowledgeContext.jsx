import React, { createContext, useContext, useState, useEffect } from 'react';
import { VERIFIED_KNOWLEDGE_BASE, MOCK_ADMIN_FEEDBACK } from '../data/mockLegalData';

const KnowledgeContext = createContext(null);

export const KnowledgeProvider = ({ children }) => {
  const [documents, setDocuments] = useState(() => {
    try {
      const stored = localStorage.getItem('lawly_kb_documents');
      return stored ? JSON.parse(stored) : VERIFIED_KNOWLEDGE_BASE;
    } catch {
      return VERIFIED_KNOWLEDGE_BASE;
    }
  });

  const [feedback, setFeedback] = useState(() => {
    try {
      const stored = localStorage.getItem('lawly_kb_feedback');
      return stored ? JSON.parse(stored) : MOCK_ADMIN_FEEDBACK;
    } catch {
      return MOCK_ADMIN_FEEDBACK;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lawly_kb_documents', JSON.stringify(documents));
    } catch (e) {
      console.error(e);
    }
  }, [documents]);

  useEffect(() => {
    try {
      localStorage.setItem('lawly_kb_feedback', JSON.stringify(feedback));
    } catch (e) {
      console.error(e);
    }
  }, [feedback]);

  const addDocument = (doc) => {
    const newDoc = {
      ...doc,
      id: `kb-${Date.now()}`,
      lastVerifiedDate: new Date().toISOString().split('T')[0],
      status: doc.status || 'Verified'
    };
    setDocuments(prev => [newDoc, ...prev]);
    return newDoc;
  };

  const updateDocument = (id, updatedFields) => {
    setDocuments(prev => prev.map(item => item.id === id ? { ...item, ...updatedFields } : item));
  };

  const deleteDocument = (id) => {
    setDocuments(prev => prev.filter(item => item.id !== id));
  };

  const toggleVerification = (id) => {
    setDocuments(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'Verified' ? 'Unverified' : 'Verified';
        return { ...item, status: nextStatus, lastVerifiedDate: new Date().toISOString().split('T')[0] };
      }
      return item;
    }));
  };

  const updateFeedbackStatus = (id, newStatus, reviewerNotes = '') => {
    setFeedback(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: newStatus,
          reviewerNotes: reviewerNotes || item.reviewerNotes
        };
      }
      return item;
    }));
  };

  const submitFeedback = (userQueryId, userComment) => {
    const newReport = {
      id: `fb-${Date.now()}`,
      userQueryId,
      reportedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      userComment,
      status: 'Under Review',
      reviewerNotes: 'Submitted by user, pending editorial review.'
    };
    setFeedback(prev => [newReport, ...prev]);
    return newReport;
  };

  return (
    <KnowledgeContext.Provider value={{
      documents,
      feedback,
      addDocument,
      updateDocument,
      deleteDocument,
      toggleVerification,
      updateFeedbackStatus,
      submitFeedback
    }}>
      {children}
    </KnowledgeContext.Provider>
  );
};

export const useKnowledge = () => useContext(KnowledgeContext);
