import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Droplets, 
  Sun, 
  Wind, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function HowToUsePage() {
  const [selectedSpace, setSelectedSpace] = useState('dining');

  const spaces = [
    {
      id: 'dining',
      label: 'Dining & Kitchen Zone',
      fiber: 'Coastal Seagrass',
      reason: 'Waxy non-porous cuticle prevents liquid and food stains from soaking in. Chair legs slide easily without fraying weave.',
      avoid: 'Raw Jute (absorbs spilled sauces/wine instantly).'
    },
    {
      id: 'bedroom',
      label: 'Bedroom & Barefoot Lounge',
      fiber: 'Golden Jute or Cotton-Jute Blend',
      reason: 'Softest natural floor fiber underfoot with gentle springiness and natural sound-dampening acoustic qualities.',
      avoid: 'Sisal (too stiff and prickly for bare skin).'
    },
    {
      id: 'patio',
      label: 'Covered Veranda / Sunroom',
      fiber: 'Treated Bamboo or Marine Abaca',
      reason: 'High silica content and saltwater resilience tolerate ambient humidity and indirect natural breezes.',
      avoid: 'Indoor Rattan Cane (vulnerable to tropical downpours and mold in open air).'
    },
    {
      id: 'lighting',
      label: 'Pendant & Chandelier Shades',
      fiber: 'Split Bamboo, Rattan Core, or Abaca Cord',
      reason: 'Pliable, lightweight, and diffuses harsh 5000K bulb glare into warm 2200K biophilic ambient rays.',
      avoid: 'Unvented heavy grasses near high-wattage incandescent bulbs.'
    }
  ];

  const currentSpace = spaces.find(s => s.id === selectedSpace);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* 1. Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8ded1] text-[#2a5a46] text-xs font-bold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" />
          <span>Curator's Field Manual</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0c2340] leading-tight">
          How to Select, Specify & Care for Botanical Fibers
        </h1>
        <p className="text-base sm:text-lg text-[#4a5568] leading-relaxed">
          Because natural plant materials are living, hygroscopic cellular structures, they breathe and respond dynamically to room humidity, airflow, and direct solar exposure. Follow our definitive curator protocols.
        </p>
      </div>

      {/* 2. Interactive Space Selector */}
      <div className="bg-white rounded-3xl border border-[#e8ded1] p-8 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#7c482b]">Interactive Tool</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mt-1 mb-2">
            Match the Right Botanical Fiber to Your Space
          </h2>
          <p className="text-sm text-[#4a5568]">
            Select your architectural zone below to discover our lab-tested botanical recommendation:
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {spaces.map((sp) => (
            <button
              key={sp.id}
              onClick={() => setSelectedSpace(sp.id)}
              className={`p-3.5 rounded-xl text-xs font-bold transition-all text-left border cursor-pointer active:scale-98 ${
                selectedSpace === sp.id
                  ? 'bg-[#0c2340] text-white border-[#0c2340] shadow-md scale-[1.02]'
                  : 'bg-[#faf8f5] text-[#4a5568] border-[#e8ded1] hover:bg-white hover:border-[#0c2340]/25'
              }`}
            >
              {sp.label}
            </button>
          ))}
        </div>

        {/* Display Card with Smooth Cross-Fade Animation */}
        {currentSpace && (
          <div key={currentSpace.id} className="animate-tab-fade p-6 rounded-2xl bg-[#faf8f5] border border-[#e8ded1] grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-2xs">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2a5a46]">
                Recommended Botanical Solution
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0c2340]">
                {currentSpace.fiber}
              </h3>
              <p className="text-sm text-[#2d3748] leading-relaxed">
                {currentSpace.reason}
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-white border border-[#e8ded1] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Materials to Avoid in This Zone:</span>
              </div>
              <p className="text-xs text-[#718096] leading-relaxed">
                {currentSpace.avoid}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 3. The 4 Golden Rules of Maintenance */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#14365d]">Long-Term Preservation</span>
          <h2 className="font-serif text-3xl font-bold text-[#0c2340] mt-1">
            The 4 Golden Rules of Fiber Longevity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-tilt-hover p-6 rounded-2xl bg-white border border-[#e8ded1] hover:border-[#14365d]/40 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#eaf2f9] text-[#14365d] flex items-center justify-center font-serif font-bold">
              1
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0c2340]">Regular Micro-Dusting & Gentle Suction</h4>
            <p className="text-xs text-[#4a5568] leading-relaxed">
              Ambient airborne dust contains microscopic abrasive quartz crystals that settle between woven plant strands. Use a soft upholstery brush attachment on low suction along the direction of the weave once every fortnight.
            </p>
          </div>

          <div className="card-tilt-hover p-6 rounded-2xl bg-white border border-[#e8ded1] hover:border-[#7c482b]/40 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#f7ede4] text-[#7c482b] flex items-center justify-center font-serif font-bold">
              2
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0c2340]">Strict Blotting Protocol (Never Rub Spills)</h4>
            <p className="text-xs text-[#4a5568] leading-relaxed">
              When a spill occurs, press a dry, uncolored cotton or linen cloth firmly against the spot to absorb liquid through capillary action. Rubbing forces stain molecules deep inside the cellulose pores and damages delicate surface fibers.
            </p>
          </div>

          <div className="card-tilt-hover p-6 rounded-2xl bg-white border border-[#e8ded1] hover:border-[#2a5a46]/40 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#edf7f2] text-[#2a5a46] flex items-center justify-center font-serif font-bold">
              3
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0c2340]">Maintain Balanced Indoor Humidity (40% to 60%)</h4>
            <p className="text-xs text-[#4a5568] leading-relaxed">
              Extreme winter heating dries out natural cane, causing structural brittleness and splitting. Extreme stagnant summer humidity promotes surface mildew. Aim for 40% to 60% relative humidity, utilizing ceiling fans to keep air gently circulating.
            </p>
          </div>

          <div className="card-tilt-hover p-6 rounded-2xl bg-white border border-[#e8ded1] hover:border-[#0c2340]/40 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#faf8f5] text-[#0c2340] flex items-center justify-center font-serif font-bold">
              4
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0c2340]">Seasonal Conditioning with Plant Oils</h4>
            <p className="text-xs text-[#4a5568] leading-relaxed">
              Once per year, wipe solid rattan frames and dense bamboo cane with a rag barely dampened with boiled linseed oil or pure beeswax polish. This replenishes lost biological lipids, preventing cracking and restoring rich natural luster.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Complete Resistance Matrix */}
      <div className="bg-white rounded-3xl border border-[#e8ded1] p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="font-serif text-2xl font-bold text-[#0c2340]">
          Comprehensive Botanical Resistance Matrix
        </h3>
        <div className="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="bg-[#0c2340] text-white">
                <th class="p-3">Species</th>
                <th class="p-3">Moisture Tolerance</th>
                <th class="p-3">Abrasion / Friction</th>
                <th class="p-3">Direct UV Sunlight</th>
                <th class="p-3">Ideal Placement</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e8ded1]">
              <tr>
                <td class="p-3 font-bold text-[#0c2340]">Rattan Cane</td>
                <td class="p-3 text-amber-700 font-medium">Low (Avoid rain)</td>
                <td class="p-3 text-emerald-700 font-medium">High</td>
                <td class="p-3 text-amber-700 font-medium">Moderate (Shade preferred)</td>
                <td class="p-3">Living rooms, bedrooms, interior lounges</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-[#0c2340]">Giant Bamboo</td>
                <td class="p-3 text-emerald-700 font-medium">High (if treated)</td>
                <td class="p-3 text-emerald-700 font-medium">Very High</td>
                <td class="p-3 text-emerald-700 font-medium">High</td>
                <td class="p-3">Ceiling rafters, screens, flooring, pendants</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-[#0c2340]">Golden Jute</td>
                <td class="p-3 text-red-600 font-medium">Very Low (Keep dry)</td>
                <td class="p-3 text-amber-700 font-medium">Moderate</td>
                <td class="p-3 text-amber-700 font-medium">Moderate</td>
                <td class="p-3">Barefoot rugs, wall tapestries, cushions</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-[#0c2340]">Marine Seagrass</td>
                <td class="p-3 text-emerald-700 font-medium">High (Saline-resistant)</td>
                <td class="p-3 text-emerald-700 font-medium">Exceptional</td>
                <td class="p-3 text-emerald-700 font-medium">High</td>
                <td class="p-3">Kitchen dining areas, entryways, baskets</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-[#0c2340]">Industrial Hemp</td>
                <td class="p-3 text-emerald-700 font-medium">High (Naturally antimicrobial)</td>
                <td class="p-3 text-emerald-700 font-medium">Exceptional</td>
                <td class="p-3 text-emerald-700 font-medium">High</td>
                <td class="p-3">Heavy cordage, balustrades, upholstery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Navigation CTA */}
      <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#e8ded1] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-serif text-xl font-bold text-[#0c2340]">Need deeper botanical insight?</h4>
          <p className="text-xs text-[#718096] mt-1">Read our technical breakdown comparing Rattan vs Wicker and Seagrass vs Jute.</p>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0c2340] hover:bg-[#14365d] transition-colors shrink-0 text-xs"
        >
          <span>Explore Articles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

