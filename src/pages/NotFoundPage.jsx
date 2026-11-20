import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, BookOpen, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#f7ede4] text-[#7c482b] flex items-center justify-center mx-auto">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#7c482b]">
        Error 404 • Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0c2340]">
        Page Not Located
      </h1>
      <p className="text-sm text-[#4a5568] max-w-md mx-auto leading-relaxed">
        The page or article you requested does not exist or may have been moved within our catalog.
      </p>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0c2340] hover:bg-[#14365d] transition-all text-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0c2340] bg-white border border-[#e8ded1] hover:bg-[#faf8f5] transition-all text-xs"
        >
          <BookOpen className="w-4 h-4" />
          <span>Browse Research Articles</span>
        </Link>
      </div>
    </div>
  );
}

