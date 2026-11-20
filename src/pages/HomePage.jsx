import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Droplets, 
  Mountain, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Layers, 
  Scale, 
  Wrench,
  ChevronRight
} from 'lucide-react';
import { materialsData } from '../data/materialsData';
import { articlesData } from '../data/articlesData';
import ArticleCard from '../components/ArticleCard';
import SpeciesDirectoryCard from '../components/SpeciesDirectoryCard';

// Reusable individual card scroll-bounce observer (Pure translateY + 0.8s duration + 0.4s half-flight stagger)
function ScrollBounceItem({ children, index = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `smoothBounceUp 0.8s cubic-bezier(0.25, 1, 0.4, 1) ${(index % 3) * 0.4}s both`
          : 'none',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSpeciesId, setHoveredSpeciesId] = useState(null);
  const [hoveredScopeIdx, setHoveredScopeIdx] = useState(null);
  const [topicsVisible, setTopicsVisible] = useState(false);
  const topicsRef = useRef(null);

  useEffect(() => {
    const el = topicsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTopicsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const topicCards = [
    {
      number: "1",
      title: "Renewable Materials",
      icon: <Leaf className="w-6 h-6" />,
      iconBox: "bg-[#edf7f2] text-[#2a5a46]",
      borderColor: "border-[#2a5a46]/20 hover:border-[#2a5a46]/40",
      accentText: "text-[#2a5a46]",
      desc: "Detailed guides covering fast-growing natural plants, including bamboo, rattan cane, jute, hemp, and abaca. These biodegradable materials offer durable, eco-friendly alternatives to synthetic plastics.",
      focus: "Highlights: Plant origins, natural growth cycles, and sustainability"
    },
    {
      number: "2",
      title: "Material Comparisons",
      icon: <Scale className="w-6 h-6" />,
      iconBox: "bg-[#eaf2f9] text-[#14365d]",
      borderColor: "border-[#14365d]/20 hover:border-[#14365d]/40",
      accentText: "text-[#14365d]",
      desc: "Clear side-by-side guides comparing strength, flexibility, and moisture resistance. We answer everyday questions like the difference between rattan and bamboo, wicker styles, and rug choices.",
      focus: "Highlights: Strength comparisons, wicker types, and rug selection"
    },
    {
      number: "3",
      title: "Woven Craft & Care",
      icon: <Layers className="w-6 h-6" />,
      iconBox: "bg-[#f7ede4] text-[#7c482b]",
      borderColor: "border-[#7c482b]/20 hover:border-[#7c482b]/40",
      accentText: "text-[#7c482b]",
      desc: "Practical advice on handwoven craftsmanship, everyday furniture use, and simple care routines to keep natural plant furnishings looking great for decades.",
      focus: "Highlights: Weaving methods, cleaning tips, and long-term care"
    }
  ];

  const scopeCards = [
    {
      icon: <BookOpen className="w-4 h-4" />,
      iconBg: "bg-[#eaf2f9]",
      iconColor: "text-[#14365d]",
      title: "Illustrated Field Guides",
      desc: "Clear articles detailing plant origins, harvesting cycles, and home uses."
    },
    {
      icon: <Layers className="w-4 h-4" />,
      iconBg: "bg-[#f7ede4]",
      iconColor: "text-[#7c482b]",
      title: "6 Core Plant Fibers",
      desc: "Profiles on bamboo, rattan cane, golden jute, seagrass, hemp, and abaca."
    },
    {
      icon: <Scale className="w-4 h-4" />,
      iconBg: "bg-[#edf7f2]",
      iconColor: "text-[#2a5a46]",
      title: "Side-by-Side Guides",
      desc: "Practical comparisons of strength, flexibility, and moisture tolerance."
    },
    {
      icon: <Wrench className="w-4 h-4" />,
      iconBg: "bg-[#faf8f5]",
      iconColor: "text-[#0c2340]",
      title: "Care and Maintenance",
      desc: "Everyday tips for cleaning, humidity balance, and keeping woven fibers durable."
    }
  ];

  const categories = ['All', 'Bast Fiber', 'Giant Woody Grass', 'Climbing Vine / Palm', 'Coastal Grass', 'Hard Leaf Fiber'];

  const filteredMaterials = selectedCategory === 'All'
    ? materialsData
    : materialsData.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#e8ded1]/80">
        {/* Subtle Organic Floating Ambient Glows */}
        <div className="absolute top-6 right-1/4 w-96 h-96 bg-gradient-to-br from-[#2a5a46]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-8 left-10 w-96 h-96 bg-gradient-to-tr from-[#7c482b]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-float-reverse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#14365d]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="animate-fog-dissolve inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#e8ded1] text-[#7c482b] text-xs font-bold tracking-widest uppercase mb-8 shadow-xs backdrop-blur-xs">
            <img src="/Logo.jpg" alt="" className="w-4 h-4 rounded-full object-cover" />
            Independent Botanical Guide
          </div>

          {/* Heading with Soft Fog Dissolve Entrance */}
          <h1 className="animate-fog-dissolve-delay-1 font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0c2340] leading-[1.1] mb-8">
            From{' '}
            <span className="relative inline-block text-[#2a5a46]">
              Earth's Plants
              <span className="hero-wavy-line hero-wavy-green" />
            </span>{' '}
            to{' '}
            <span className="relative inline-block text-[#7c482b]">
              Handwoven Fibers
              <span className="hero-wavy-line hero-wavy-brown" />
            </span>.
          </h1>

          {/* Subtitle with Entrance */}
          <p className="animate-fog-dissolve-delay-2 text-lg sm:text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed mb-10">
            Welcome to <strong>The Natural Fibers</strong>. We explore the natural strength, craft traditions, and everyday sustainable uses of earth-grown plant fibers, offering natural alternatives to synthetic plastics.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fog-dissolve-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blog"
              className="water-ripple w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#14365d] via-[#2a5a46] to-[#7c482b] hover:opacity-95 shadow-md hover:shadow-xl transition-all active:scale-95"
            >
              <span>Explore Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/how-to-use"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#0c2340] bg-white/95 border border-[#e8ded1] hover:bg-[#f5ede2] shadow-xs hover:shadow-md transition-all active:scale-95 backdrop-blur-xs"
            >
              <span>Care & Use Guide</span>
            </Link>
          </div>

          {/* Editorial Library Scope (4 Cards with Squeeze Hover Effect: Zoom x1.2, Others Compress) */}
          <div 
            onMouseLeave={() => setHoveredScopeIdx(null)}
            className="mt-16 pt-10 pb-4 border-t border-[#e8ded1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left overflow-visible"
          >
            {scopeCards.map((card, idx) => {
              const isHovered = hoveredScopeIdx === idx;
              const isOtherHovered = hoveredScopeIdx !== null && !isHovered;

              return (
                <div
                  key={card.title}
                  onMouseEnter={() => setHoveredScopeIdx(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 ease-out cursor-default backdrop-blur-xs select-none ${
                    isHovered
                      ? 'scale-[1.20] z-30 shadow-2xl bg-white border-[#2a5a46]/40 ring-1 ring-[#2a5a46]/20'
                      : isOtherHovered
                      ? 'scale-[0.93] z-10 bg-white/95 border-[#e8ded1] shadow-2xs'
                      : 'scale-100 z-10 bg-white/90 border-[#e8ded1] shadow-xs'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-3 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                    {card.icon}
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0c2340] mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#5a6a7e] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. THE THREE CORE EDITORIAL TOPICS (Staggered Float-Up on Scroll) */}
      <section ref={topicsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-out ${
          topicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs font-bold uppercase tracking-widest text-[#2a5a46]">
            Editorial Research Scope
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c2340] mt-2 mb-4">
            Key Topics in Natural Plant Fibers
          </h2>
          <p className="text-sm sm:text-base text-[#4a5568]">
            Our independent research is organized across three practical domains: botanical plant species, objective comparative studies, and traditional handwoven craft & preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topicCards.map((topic, idx) => (
            <div
              key={topic.title}
              className={`transition-all duration-700 ease-out transform ${
                topicsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-14 pointer-events-none'
              }`}
              style={{
                transitionDelay: `${idx * 180 + 120}ms`
              }}
            >
              <div className={`card-tilt-hover bg-white/95 rounded-2xl border-2 ${topic.borderColor} p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group backdrop-blur-xs h-full flex flex-col justify-between`}>
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${topic.iconBox} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    {topic.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0c2340] mb-3">
                    {topic.number}. {topic.title}
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed mb-6">
                    {topic.desc}
                  </p>
                </div>
                <div className={`pt-4 border-t border-[#e8ded1] text-xs font-semibold ${topic.accentText} flex items-center gap-1.5`}>
                  <span>{topic.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE MATERIAL EXPLORER (Seamless background, no outer box border) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2a5a46]">
              Botanical Taxonomy
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0c2340] mt-1">
              The Botanical Species Directory
            </h2>
            <p className="text-sm text-[#4a5568] mt-1">
              Filter and inspect the physical specifications of primary botanical fibers.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0c2340] text-white shadow-xs scale-105'
                    : 'bg-white/95 border border-[#e8ded1] text-[#4a5568] hover:bg-black/5 hover:border-[#0c2340]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid with Dynamic Zoom, Animated Counter, Focus Spotlight & Smooth 0.8s Bounce Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible relative py-4">
          {filteredMaterials.map((mat, idx) => {
            const isHovered = hoveredSpeciesId === mat.id;
            const isDimmed = hoveredSpeciesId !== null && !isHovered;

            return (
              <ScrollBounceItem
                key={`${selectedCategory}-${mat.id}`}
                index={idx}
              >
                <SpeciesDirectoryCard
                  material={mat}
                  isHovered={isHovered}
                  isDimmed={isDimmed}
                  onHover={() => setHoveredSpeciesId(mat.id)}
                  onLeave={() => setHoveredSpeciesId(null)}
                />
              </ScrollBounceItem>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED ARTICLES (Smooth 0.8s Bounce Entrance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#14365d]">
              Curated Articles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c2340] mt-1">
              Featured Research & Guides
            </h2>
            <p className="text-sm text-[#4a5568] mt-2 max-w-2xl">
              Explore our comprehensive articles on material strength, plant origins, and practical care.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-bold text-[#14365d] hover:text-[#2a5a46] transition-colors text-sm"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Grid Previews with Smooth 0.8s Bounce Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.slice(0, 6).map((art, idx) => (
            <ScrollBounceItem
              key={art.slug}
              index={idx}
              className="card-tilt-hover"
            >
              <ArticleCard article={art} />
            </ScrollBounceItem>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="water-ripple inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#0c2340] hover:bg-[#14365d] shadow-sm hover:shadow-lg transition-all active:scale-95"
          >
            <span>Browse Complete Article Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. FIELD GUIDE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0c2340] via-[#14365d] to-[#1b3d2f] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
              Home Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight !text-white text-white">
              Wondering Which Fiber Matches Your Living Space?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Read our practical <strong>Care and Use Guide</strong> to learn about moisture tolerance, high-traffic durability, and simple maintenance routines for woven furnishings.
            </p>
            <div className="pt-2">
              <Link
                to="/how-to-use"
                className="water-ripple inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0c2340] bg-white hover:bg-emerald-50 transition-all shadow-md active:scale-95"
              >
                <span>Open Specification Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
