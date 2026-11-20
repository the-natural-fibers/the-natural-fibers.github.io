import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Leaf, 
  Droplets, 
  Mountain, 
  Menu, 
  X, 
  BookOpen, 
  HelpCircle, 
  Compass, 
  Mail, 
  Info,
  Layers,
  Scale
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles & Guides', path: '/blog' },
    { name: 'How to Use', path: '/how-to-use' },
    { name: 'About', path: '/about' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8ded1] transition-all">
      {/* Top Banner Notice */}
      <div className="bg-[#0c2340] text-slate-200 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>Renewable Materials</span>
        <span className="opacity-40">•</span>
        <span>Material Science</span>
        <span className="opacity-40">•</span>
        <span>Traditional Craft</span>
        <span className="hidden md:inline opacity-70 ml-2 border-l border-white/20 pl-3">
          Independent Botanical Material Encyclopedia
        </span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#0c2340] via-[#2a5a46] to-[#7c482b] p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#faf8f5] rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="/Logo.jpg" 
                  alt="The Natural Fibers Botanical Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0c2340] group-hover:text-[#2a5a46] transition-colors">
                The Natural Fibers
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-widest text-[#7c482b]">
                Botanical Materials & Craft
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-[#edf7f2] text-[#1b3d2f] font-semibold border border-[#2a5a46]/20'
                      : 'text-[#334155] hover:text-[#0c2340] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#14365d] to-[#2a5a46] hover:from-[#0c2340] hover:to-[#1b3d2f] shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <span>Explore Articles</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-[#0c2340] hover:bg-black/5 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#e8ded1] bg-[#faf8f5] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                  active
                    ? 'bg-[#edf7f2] text-[#1b3d2f] font-semibold border border-[#2a5a46]/20'
                    : 'text-[#334155] hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#e8ded1]">
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#14365d] to-[#2a5a46]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Research Articles</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

