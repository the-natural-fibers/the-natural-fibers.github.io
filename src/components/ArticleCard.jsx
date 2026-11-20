import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

export default function ArticleCard({ article }) {
  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'Material Science':
        return 'bg-[#14365d]/90 text-white border-white/20';
      case 'Comparative Study':
        return 'bg-[#7c482b]/90 text-white border-white/20';
      case 'Botanical Profile':
      default:
        return 'bg-[#2a5a46]/90 text-white border-white/20';
    }
  };

  const badgeClass = getCategoryBadgeStyle(article.category);

  return (
    <article className="group bg-white/95 rounded-2xl border border-[#e8ded1] overflow-hidden hover:shadow-xl hover:border-[#2a5a46]/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-xs">
      <div>
        {/* 1. Card Thumbnail Image */}
        <Link to={`/blog/${article.slug}`} className="block relative aspect-16/10 w-full overflow-hidden bg-[#e8ded1]/50">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#14365d]/10 via-[#7c482b]/10 to-[#2a5a46]/10 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-[#2a5a46]/40" />
            </div>
          )}

          {/* Vignette Overlay for Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-70 group-hover:opacity-60 transition-opacity" />

          {/* Badges Over Image */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-xs ${badgeClass}`}>
              {article.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 border border-white/10 backdrop-blur-md shadow-xs">
              {article.fiberFamily || article.badge}
            </span>
          </div>
        </Link>

        {/* 2. Text Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-[#0c2340] group-hover:text-[#2a5a46] transition-colors leading-snug mb-3">
            <Link to={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#4a5568] leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      {/* 3. Card Footer */}
      <div className="px-6 py-4 bg-[#faf8f5]/80 border-t border-[#e8ded1] flex items-center justify-between text-xs text-[#718096]">
        <div className="flex items-center gap-2">
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.publishedDate}</span>
        </div>

        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-[#14365d] group-hover:text-[#2a5a46] group-hover:translate-x-1 transition-all"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
