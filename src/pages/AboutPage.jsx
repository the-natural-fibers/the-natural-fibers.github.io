import React from 'react';
import { 
  Leaf, 
  Droplets, 
  Mountain, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Layers, 
  RefreshCw,
  HeartHandshake,
  Scale
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* 1. Hero / Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-center mb-1">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0c2340] via-[#2a5a46] to-[#7c482b] p-1 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#faf8f5] rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/Logo.jpg" 
                alt="The Natural Fibers Official Botanical Mark" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8ded1] text-[#7c482b] text-xs font-bold uppercase tracking-widest">
          About The Natural Fibers
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0c2340] leading-tight">
          From Earth's Plants to Handwoven Fibers.
        </h1>
        <p className="text-base sm:text-lg text-[#4a5568] leading-relaxed">
          The Natural Fibers is an independent educational website dedicated to plant-based materials. We share practical knowledge on the durability, traditional craft, and sustainable everyday use of natural fibers.
        </p>
      </div>

      {/* 2. Research Scope & Editorial Focus */}
      <div className="bg-white rounded-3xl border border-[#e8ded1] p-8 sm:p-12 shadow-sm space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2a5a46]">Core Focus</span>
          <h2 className="font-serif text-3xl font-bold text-[#0c2340] mt-1 mb-3">
            Three Pillars of Natural Knowledge
          </h2>
          <p className="text-sm text-[#4a5568] leading-relaxed">
            Our content is organized around three primary areas of practical knowledge:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#edf7f2] border border-[#2a5a46]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2a5a46] text-white flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0c2340]">Renewable Materials</h3>
            <p className="text-xs text-[#2d3748] leading-relaxed">
              Clear guides on bamboo, rattan, jute, seagrass, hemp, and abaca. We highlight fast-growing plants that provide renewable alternatives to synthetic plastics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#eaf2f9] border border-[#14365d]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#14365d] text-white flex items-center justify-center">
              <Scale className="w-5 h-5 text-sky-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0c2340]">Material Comparisons</h3>
            <p className="text-xs text-[#2d3748] leading-relaxed">
              Practical comparisons covering tensile strength, moisture resistance, and flexibility to help you choose the right material for your project.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f7ede4] border border-[#7c482b]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#7c482b] text-white flex items-center justify-center">
              <Layers className="w-5 h-5 text-amber-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0c2340]">Woven Craft & Care</h3>
            <p className="text-xs text-[#2d3748] leading-relaxed">
              Helpful guides exploring traditional weaving patterns, furniture care, and simple maintenance routines for long-lasting home furnishings.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Our Four Core Commitments */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#0c2340]">Our Four Guiding Pillars</h2>
          <p className="text-sm text-[#4a5568] mt-2">
            Every article, comparison matrix, and technical guideline we publish adheres to strict criteria:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#e8ded1] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#faf8f5] text-[#2a5a46] border border-[#e8ded1]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#0c2340] mb-1">Independent Botanical Truth</h4>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                We maintain complete editorial independence. We do not accept paid product placements, corporate advertorials, or artificial commercial ranking bias.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e8ded1] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#faf8f5] text-[#7c482b] border border-[#e8ded1]">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#0c2340] mb-1">Cradle-to-Cradle Life Cycles</h4>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                We believe true sustainability requires materials to return seamlessly into the earth. If a material leaves microplastics or toxic leachate, it does not belong in our catalog.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e8ded1] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#faf8f5] text-[#14365d] border border-[#e8ded1]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#0c2340] mb-1">Clear Facts & Practical Guidance</h4>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                We provide clear facts on strength, flexibility, and moisture tolerance, giving you honest information you can trust.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e8ded1] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#faf8f5] text-[#2a5a46] border border-[#e8ded1]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#0c2340] mb-1">Respect for Traditional Craft</h4>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                Natural fibers are deeply tied to cultural heritage. We celebrate the generations of artisans and weavers who perfected these timeless craft techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Independent Research Commitment */}
      <div className="p-8 rounded-3xl bg-[#0c2340] text-white text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold !text-white text-white">An Independent Educational Guide</h3>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The Natural Fibers is an independent open guide hosted via GitHub Pages (the-natural-fibers.github.io). We are dedicated to sharing reliable knowledge about natural materials, home care, and sustainable craft.
        </p>
      </div>
    </div>
  );
}

