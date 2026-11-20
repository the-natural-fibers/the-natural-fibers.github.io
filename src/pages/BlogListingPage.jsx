import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Droplets,
  Mountain,
  Leaf
} from 'lucide-react';
import { articlesData } from '../data/articlesData';
import ArticleCard from '../components/ArticleCard';

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFiberFamily, setSelectedFiberFamily] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All'];
    articlesData.forEach(art => {
      if (!cats.includes(art.category)) cats.push(art.category);
    });
    return cats;
  }, []);

  const fiberFamilies = useMemo(() => {
    const fams = ['All'];
    articlesData.forEach(art => {
      if (art.fiberFamily && !fams.includes(art.fiberFamily)) {
        fams.push(art.fiberFamily);
      }
    });
    return fams;
  }, []);

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.mainKeyword.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesFam = selectedFiberFamily === 'All' || article.fiberFamily === selectedFiberFamily;

      return matchesSearch && matchesCat && matchesFam;
    });
  }, [searchQuery, selectedCategory, selectedFiberFamily]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0c2340] via-[#14365d] to-[#2a5a46] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <span>Articles & Practical Guides</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight !text-white text-white">
            Articles and Material Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            Browse our articles and comparison guides covering bamboo, solid-core rattan, golden jute, coastal seagrass, hemp, and durable abaca.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-xl">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search guides and materials (e.g., rattan, bamboo, jute, abaca)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-[#0c2340] placeholder-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-400 shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-[#e8ded1]">
        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#718096] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0c2340] text-white shadow-xs'
                  : 'bg-white border border-[#e8ded1] text-[#4a5568] hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fiber Family Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-[#718096] mr-1">Origin:</span>
          {fiberFamilies.map((fam) => (
            <button
              key={fam}
              onClick={() => setSelectedFiberFamily(fam)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                selectedFiberFamily === fam
                  ? 'bg-[#0c2340] text-white shadow-xs'
                  : 'bg-white border border-[#e8ded1] text-slate-600 hover:bg-black/5'
              }`}
            >
              {fam}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-[#718096]">
        <span>Showing <strong>{filteredArticles.length}</strong> of {articlesData.length} articles</span>
        {(searchQuery || selectedCategory !== 'All' || selectedFiberFamily !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedFiberFamily('All');
            }}
            className="text-[#7c482b] hover:underline font-semibold"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* 4. Articles Grid with 3D Hover Lift */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.slug} className="card-tilt-hover">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#e8ded1] p-12 text-center max-w-md mx-auto space-y-4">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-[#0c2340]">No articles matched your criteria</h3>
          <p className="text-xs text-[#718096]">
            Try clearing your search terms or selecting another category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedFiberFamily('All');
            }}
            className="px-4 py-2 rounded-lg bg-[#0c2340] text-white text-xs font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 5. Library Notice */}
      <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8ded1] flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif font-bold text-[#0c2340] text-sm">
            Independent Plant Fiber Guide
          </h4>
          <p className="text-xs text-[#718096] mt-0.5">
            A practical knowledge base exploring natural strength, traditional craft, and sustainable everyday design.
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#edf7f2] text-[#2a5a46] border border-[#2a5a46]/20 shrink-0">
          {articlesData.length} Published Articles
        </span>
      </div>
    </div>
  );
}
