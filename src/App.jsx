import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HistoryProvider } from './context/HistoryContext';
import { KnowledgeProvider } from './context/KnowledgeContext';

import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';

import { HomePage } from './pages/HomePage';
import { AnalyzePage } from './pages/AnalyzePage';
import { AnalysisResultPage } from './pages/AnalysisResultPage';
import { TopicsPage } from './pages/TopicsPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { SearchPage } from './pages/SearchPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { HistoryPage } from './pages/HistoryPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { AdminPage } from './pages/AdminPage';

import './App.css';

// Scroll to top upon navigating to a new route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <KnowledgeProvider>
          <HistoryProvider>
            <ScrollToTop />
            <div className="app-layout">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/analyze" element={<AnalyzePage />} />
                  <Route path="/analysis/:id" element={<AnalysisResultPage />} />
                  <Route path="/topics" element={<TopicsPage />} />
                  <Route path="/topics/:slug" element={<TopicDetailPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/history" element={<HistoryPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/disclaimer" element={<DisclaimerPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                </Routes>
              </main>
              <Footer />
              <MobileNav />
            </div>
          </HistoryProvider>
        </KnowledgeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
