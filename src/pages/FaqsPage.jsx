import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageSquare, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function FaqsPage() {
  const [openItems, setOpenItems] = useState({ '0-0': true });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqsData.map((category, catIdx) => {
    const filteredItems = category.items.filter(item => {
      const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'All' || category.category === activeCategory;
      return matchesSearch && matchesCat;
    });

    return {
      ...category,
      catIdx,
      items: filteredItems
    };
  }).filter(cat => cat.items.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* 1. Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8ded1] text-[#7c482b] text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Answers</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0c2340] leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
          Common queries concerning fiber classification, tensile engineering, mold prevention, cleaning protocols, and biological circularity.
        </p>

        {/* Search Input */}
        <div className="max-w-lg mx-auto pt-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter questions (e.g., mold, cleaning, bamboo, outdoor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-[#e8ded1] text-[#0c2340] placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2a5a46] shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeCategory === 'All'
              ? 'bg-[#0c2340] text-white shadow-xs'
              : 'bg-white border border-[#e8ded1] text-[#4a5568] hover:bg-[#faf8f5]'
          }`}
        >
          All Topics
        </button>
        {faqsData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat.category
                ? 'bg-[#0c2340] text-white shadow-xs'
                : 'bg-white border border-[#e8ded1] text-[#4a5568] hover:bg-[#faf8f5]'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* 3. Accordion List */}
      <div className="space-y-8">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div key={cat.category} className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#7c482b] border-b border-[#e8ded1] pb-2">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const isOpen = openItems[`${cat.catIdx}-${itemIdx}`];
                  return (
                    <div
                      key={itemIdx}
                      className="bg-white rounded-2xl border border-[#e8ded1] overflow-hidden transition-all shadow-xs"
                    >
                      <button
                        onClick={() => toggleItem(cat.catIdx, itemIdx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#faf8f5]/60 transition-colors"
                      >
                        <span className="font-serif font-bold text-[#0c2340] text-base leading-snug">
                          {item.q}
                        </span>
                        <div className={`p-1.5 rounded-lg shrink-0 transition-transform ${
                          isOpen ? 'bg-[#edf7f2] text-[#2a5a46]' : 'text-slate-400'
                        }`}>
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-[#4a5568] leading-relaxed border-t border-[#e8ded1]/50 bg-[#faf8f5]/30">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#e8ded1] space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm text-[#718096]">No questions matched your search query.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-xs font-bold text-[#14365d] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Still Need Help Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#14365d] to-[#0c2340] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif text-xl font-bold !text-white text-white">Have an unlisted botanical question?</h4>
          <p className="text-xs text-slate-300">
            Send an inquiry to our research collective for material identification or testing advice.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0c2340] bg-white hover:bg-slate-100 transition-colors text-xs shrink-0 shadow-sm"
        >
          <Mail className="w-4 h-4 text-[#7c482b]" />
          <span>Contact the Lab</span>
        </Link>
      </div>
    </div>
  );
}

