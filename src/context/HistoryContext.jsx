import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_ANALYSES } from '../data/mockLegalData';

const HistoryContext = createContext(null);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem('lawly_history');
      return stored ? JSON.parse(stored) : MOCK_ANALYSES;
    } catch {
      return MOCK_ANALYSES;
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem('lawly_bookmarks');
      return stored ? JSON.parse(stored) : ['case-rental-101'];
    } catch {
      return ['case-rental-101'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lawly_history', JSON.stringify(history));
    } catch (err) {
      console.error('Failed to persist history', err);
    }
  }, [history]);

  useEffect(() => {
    try {
      localStorage.setItem('lawly_bookmarks', JSON.stringify(bookmarks));
    } catch (err) {
      console.error('Failed to persist bookmarks', err);
    }
  }, [bookmarks]);

  const addAnalysis = (newAnalysis) => {
    setHistory(prev => [newAnalysis, ...prev.filter(item => item.id !== newAnalysis.id)]);
    return newAnalysis.id;
  };

  const getAnalysisById = (id) => {
    return history.find(item => item.id === id) || null;
  };

  const deleteAnalysis = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
    setBookmarks(prev => prev.filter(bId => bId !== id));
  };

  const clearAllHistory = () => {
    setHistory([]);
    setBookmarks([]);
  };

  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id) => bookmarks.includes(id);

  return (
    <HistoryContext.Provider value={{
      history,
      bookmarks,
      addAnalysis,
      getAnalysisById,
      deleteAnalysis,
      clearAllHistory,
      toggleBookmark,
      isBookmarked
    }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
