import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Droplets, 
  Mountain, 
  ArrowUpRight, 
  ShieldCheck, 
  Mail,
  BookOpen,
  Scale,
  Layers
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c2340] text-[#e2e8f0] pt-16 pb-12 border-t-4 border-[#2a5a46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Research Domains Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#14365d]/80 border border-white/10 mb-14 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold !text-white text-white mb-1">Renewable Materials</h4>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Detailed guides on bamboo, rattan, jute, seagrass, hemp, and abaca, all 100% plant-based with zero synthetic plastics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-950/60 text-sky-400 border border-sky-500/20">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold !text-white text-white mb-1">Material Comparisons</h4>
              <p className="text-xs text-sky-100/70 leading-relaxed">
                Helpful comparisons covering strength, water resistance, and everyday differences between popular natural materials.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold !text-white text-white mb-1">Woven Craft & Care</h4>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Practical guides exploring handweaving patterns, home furniture care, and simple maintenance for long-lasting durability.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a5a46] via-emerald-500 to-[#7c482b] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#faf8f5] flex items-center justify-center">
                  <img 
                    src="/Logo.jpg" 
                    alt="The Natural Fibers Botanical Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold !text-white text-white block leading-tight">The Natural Fibers</span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-emerald-400/90 block">Botanical Materials & Craft</span>
              </div>
            </div>
            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
              An independent educational guide dedicated to natural plant fibers, exploring their durability, traditional craftsmanship, and modern sustainable design.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent science • Zero synthetic sponsorship</span>
            </div>
          </div>

          {/* Col 3: Material Guides */}
          <div>
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300 mb-4">
              Material Guides
            </h5>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/blog/what-is-rattan" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Rattan Cane</span>
                  <span className="text-[11px] text-slate-500">Climbing Vine</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/what-is-bamboo" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Giant Bamboo</span>
                  <span className="text-[11px] text-slate-500">Woody Grass</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/what-is-jute" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Golden Jute</span>
                  <span className="text-[11px] text-slate-500">Bast Fiber</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/seagrass-vs-jute" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Coastal Seagrass</span>
                  <span className="text-[11px] text-slate-500">Marine Grass</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/what-is-hemp-rope" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Industrial Hemp</span>
                  <span className="text-[11px] text-slate-500">Bast Cordage</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/what-is-abaca" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Abaca (Manila)</span>
                  <span className="text-[11px] text-slate-500">Leaf Fiber</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Explore & About */}
          <div>
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-sky-300 mb-4">
              Explore & About
            </h5>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-sky-300 transition-colors">
                  About Our Research
                </Link>
              </li>
              <li>
                <Link to="/how-to-use" className="hover:text-sky-300 transition-colors">
                  How to Use & Care Guide
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-sky-300 transition-colors">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-sky-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-300 transition-colors">
                  Contact the Botanical Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Transparency & Navigation */}
          <div>
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Transparency
            </h5>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-emerald-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li className="pt-3">
                <button
                  onClick={scrollToTop}
                  className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                >
                  <span>Back to Top</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} The Natural Fibers (the-natural-fibers.github.io). All rights reserved.</p>
          <p className="text-center md:text-right text-slate-400/80">
            Dedicated to open botanical research, renewable plant resources, and zero plastic waste.
          </p>
        </div>
      </div>
    </footer>
  );
}
