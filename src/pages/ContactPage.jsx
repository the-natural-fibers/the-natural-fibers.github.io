import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  Droplets,
  Mountain,
  Leaf
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Botanical Research',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* 1. Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8ded1] text-[#14365d] text-xs font-bold uppercase tracking-widest">
          <Mail className="w-3.5 h-3.5" />
          <span>Inquiries & Research Collab</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0c2340] leading-tight">
          Connect with The Natural Fibers
        </h1>
        <p className="text-base text-[#4a5568] leading-relaxed">
          Have an inquiry regarding botanical fiber properties, specimen verification, or editorial collaboration? Reach out to our research collective below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 2. Contact Form Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e8ded1] p-8 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#edf7f2] text-[#2a5a46] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0c2340]">
                Message Received
              </h3>
              <p className="text-sm text-[#4a5568] max-w-md mx-auto leading-relaxed">
                Thank you for contacting <strong>The Natural Fibers</strong>. A member of our botanical curation desk will review your inquiry and respond within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', topic: 'Botanical Research', message: '' });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#14365d] hover:underline pt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8ded1] bg-[#faf8f5] text-sm text-[#0c2340] focus:outline-hidden focus:ring-2 focus:ring-[#2a5a46] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8ded1] bg-[#faf8f5] text-sm text-[#0c2340] focus:outline-hidden focus:ring-2 focus:ring-[#2a5a46] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-2">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8ded1] bg-[#faf8f5] text-sm text-[#0c2340] focus:outline-hidden focus:ring-2 focus:ring-[#2a5a46] transition-all"
                >
                  <option value="Botanical Research">Botanical Material Science</option>
                  <option value="Material Verification">Material Identification / Specimen Advice</option>
                  <option value="Editorial Contribution">Editorial & Article Suggestion</option>
                  <option value="Press & Media">Educational & Press Media</option>
                  <option value="Other">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Detail your question or research inquiry regarding natural fibers..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8ded1] bg-[#faf8f5] text-sm text-[#0c2340] focus:outline-hidden focus:ring-2 focus:ring-[#2a5a46] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#14365d] to-[#2a5a46] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* 3. Info Sidebar Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#faf8f5] rounded-3xl border border-[#e8ded1] p-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0c2340]">
              Botanical Research Desk
            </h3>
            <p className="text-xs text-[#4a5568] leading-relaxed">
              We welcome dialogue with material engineers, biophilic architects, botanical historians, and sustainable designers worldwide.
            </p>

            <div className="space-y-4 pt-2 text-xs text-[#2d3748]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#7c482b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#0c2340]">Response Window</span>
                  <span>Monday to Friday, within 24 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2a5a46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#0c2340]">Repository Domain</span>
                  <span>the-natural-fibers.github.io</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#14365d] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#0c2340]">Ethics Commitment</span>
                  <span>Zero sponsorship bias, zero data marketing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Link */}
          <div className="bg-white rounded-3xl border border-[#e8ded1] p-6 space-y-3 shadow-xs">
            <h4 className="font-serif text-lg font-bold text-[#0c2340] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#7c482b]" />
              <span>Looking for Quick Answers?</span>
            </h4>
            <p className="text-xs text-[#718096] leading-relaxed">
              Before submitting an inquiry, check our extensive FAQs on fiber differences, mold removal, and moisture resistance.
            </p>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14365d] hover:text-[#2a5a46] transition-colors"
            >
              <span>Browse Knowledge Base FAQs</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

