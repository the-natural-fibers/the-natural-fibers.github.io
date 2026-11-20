import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ReadingProgressBar from './components/ReadingProgressBar';
import NatureBackdrop from './components/NatureBackdrop';
import BotanicalSoundscape from './components/BotanicalSoundscape';

// Pages
import HomePage from './pages/HomePage';
import BlogListingPage from './pages/BlogListingPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import HowToUsePage from './pages/HowToUsePage';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ReadingProgressBar />
      
      <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#2a5a46] selection:text-white">
        {/* Layer 1: Ambient Misty Mountain & Forest Canopy Backdrop + Paper Noise */}
        <NatureBackdrop />

        {/* Layer 1.5: Interactive Botanical Forest Soundscape & Acoustic Audio Player */}
        <BotanicalSoundscape />

        {/* Layer 2: Main Website Application Structure */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* Blog & Monographs Directory */}
              <Route path="/blog" element={<BlogListingPage />} />
              <Route path="/articles" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Information & Guide Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-to-use" element={<HowToUsePage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Trust & Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />

              {/* 404 Catch All */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
