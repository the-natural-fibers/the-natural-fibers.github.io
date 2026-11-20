import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Bookmark, 
  Compass,
  Droplets,
  Mountain,
  Leaf,
  Scale,
  BookOpen
} from 'lucide-react';
import { articlesData } from '../data/articlesData';
import ArticleCard from '../components/ArticleCard';

export default function BlogPostPage() {
  const { slug } = useParams();
  const article = articlesData.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Active section state for dynamic TOC Scrollspy
  const [activeId, setActiveId] = useState(article.tableOfContents?.[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      if (!article.tableOfContents) return;

      for (let i = article.tableOfContents.length - 1; i >= 0; i--) {
        const item = article.tableOfContents[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Related articles (same category or next ones)
  const relatedArticles = articlesData
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Material Science':
        return {
          bg: 'bg-[#eaf2f9] text-[#14365d] border-[#14365d]/20',
          icon: <BookOpen className="w-4 h-4 text-[#14365d]" />
        };
      case 'Comparative Study':
        return {
          bg: 'bg-[#f7ede4] text-[#7c482b] border-[#7c482b]/20',
          icon: <Scale className="w-4 h-4 text-[#7c482b]" />
        };
      case 'Botanical Profile':
      default:
        return {
          bg: 'bg-[#edf7f2] text-[#1b3d2f] border-[#2a5a46]/20',
          icon: <Leaf className="w-4 h-4 text-[#2a5a46]" />
        };
    }
  };

  const badgeStyle = getCategoryBadge(article.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-[#718096]">
        <Link to="/" className="hover:text-[#0c2340] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-[#0c2340] transition-colors">Articles</Link>
        <span>/</span>
        <span className="text-[#0c2340] font-medium truncate max-w-xs sm:max-w-md">{article.title}</span>
      </nav>

      {/* 2. Article Header */}
      <header className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeStyle.bg}`}>
            {badgeStyle.icon}
            <span>{article.category}</span>
          </span>
          {article.fiberFamily && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#faf8f5] border border-[#e8ded1] text-[#0c2340] shadow-2xs">
              {article.fiberFamily}
            </span>
          )}
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-[#e8ded1] text-[#7c482b] shadow-2xs">
            Botanical Guide
          </span>
          <span className="text-xs text-[#718096]">
            {article.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0c2340] leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-[#4a5568] leading-relaxed">
          {article.summary}
        </p>

        <div className="pt-4 border-t border-[#e8ded1] flex items-center justify-between text-xs text-[#718096]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#14365d] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
              NF
            </div>
            <div>
              <span className="block font-semibold text-[#0c2340]">{article.author}</span>
              <span>Published on {article.publishedDate}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-slate-500">Archived in Botanical Research Repository</span>
          </div>
        </div>
      </header>

      {/* Featured Header Hero Image */}
      {article.imageUrl && (
        <div className="relative aspect-21/9 max-h-[440px] w-full rounded-3xl overflow-hidden border border-[#e8ded1] shadow-md bg-[#e8ded1]/50">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* 3. Main Content with Sidebar TOC */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        {/* Left / Main Column */}
        <main className="lg:col-span-8 space-y-8">
          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#edf7f2] to-[#faf8f5] border-2 border-[#2a5a46]/30 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#1b3d2f] flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#2a5a46]" />
                <span>Executive Botanical Summary</span>
              </h3>
              <ul className="space-y-2 text-sm text-[#2d3748]">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2a5a46] mt-2 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Full HTML Content with smooth scroll styling */}
          <div 
            className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#0c2340] prose-a:text-[#14365d] prose-strong:text-[#0c2340] scroll-mt-24"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Editorial Independence Notice */}
          <div className="p-6 rounded-2xl bg-[#faf8f5]/90 border border-[#e8ded1] flex items-start gap-4 text-xs text-[#4a5568] backdrop-blur-xs">
            <ShieldCheck className="w-6 h-6 text-[#2a5a46] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-[#0c2340] mb-1">Editorial Research Standards</h5>
              <p className="leading-relaxed">
                The Natural Fibers produces 100% independent material analyses based on peer-reviewed botanical science, ISO testing criteria, and sustainable agriculture metrics. We accept no brand endorsements or paid promotional placement.
              </p>
            </div>
          </div>
        </main>

        {/* Right Sticky Sidebar with Dynamic Scrollspy TOC */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            {/* Table of Contents Card with Scrollspy Indicator */}
            {article.tableOfContents && (
              <div className="p-6 rounded-2xl bg-white/95 border border-[#e8ded1] shadow-xs backdrop-blur-xs">
                <h4 className="font-serif text-base font-bold text-[#0c2340] flex items-center gap-2 mb-4">
                  <Bookmark className="w-4 h-4 text-[#7c482b]" />
                  <span>Table of Contents</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4a5568]">
                  {article.tableOfContents.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`text-left w-full py-1.5 px-2.5 rounded-lg transition-all text-xs cursor-pointer ${
                            isActive
                              ? 'bg-[#edf7f2] text-[#1b3d2f] font-bold border-l-3 border-[#2a5a46] shadow-2xs'
                              : 'text-[#4a5568] hover:text-[#0c2340] hover:bg-black/5'
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Quick Action Box */}
            <div className="p-6 rounded-2xl bg-[#0c2340] text-white shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Architectural Resource
              </span>
              <h4 className="font-serif text-lg font-bold !text-white text-white">Need Fiber Care Guidelines?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review our comprehensive environmental resistance matrix and cleaning protocols.
              </p>
              <Link
                to="/how-to-use"
                className="water-ripple inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#2a5a46] hover:bg-[#1b3d2f] px-3.5 py-2.5 rounded-lg transition-all w-full justify-center active:scale-95 shadow-sm"
              >
                <span>Open How-To Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* 4. Related Articles */}
      <div className="pt-12 border-t border-[#e8ded1] space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-[#0c2340]">Related Articles & Guides</h3>
          <Link to="/blog" className="text-sm font-semibold text-[#14365d] hover:text-[#2a5a46] flex items-center gap-1">
            <span>View All Topics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <div key={rel.slug} className="card-tilt-hover">
              <ArticleCard article={rel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
