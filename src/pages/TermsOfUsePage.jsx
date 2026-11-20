import React from 'react';
import { FileText, AlertCircle, ShieldCheck } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#7c482b]">
          Legal & Conditions
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c2340]">
          Terms of Use & Editorial Disclaimer
        </h1>
        <p className="text-xs text-[#718096]">
          Effective Date: October 2026 • Last Reviewed: November 2026
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#e8ded1] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#4a5568] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">1. Acceptance of Terms</h2>
          <p>
            By accessing and utilizing <strong>The Natural Fibers</strong> (<code>https://the-natural-fibers.github.io/</code>), you agree to comply with and be bound by these Terms of Use. If you do not accept these terms, please discontinue use of this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">2. Educational & Research Purpose Only</h2>
          <p>
            All content published on this website, including articles, identification guides, strength charts, and care recommendations, is provided solely for general educational and material science research.
          </p>
          <div className="p-4 rounded-xl bg-[#faf8f5] border-l-4 border-[#7c482b] text-xs">
            <strong>Disclaimer:</strong> Structural engineering specifications for building loads, marine mooring, or commercial installations should be independently certified by licensed structural engineers or naval architects.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">3. Intellectual Property & Citation</h2>
          <p>
            Original text, infographics, and curation published on The Natural Fibers are protected under international copyright. Non-commercial educational citation is permitted provided clear attribution and direct link back to <code>the-natural-fibers.github.io</code> are maintained.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">4. Independent Operation</h2>
          <p>
            The Natural Fibers operates as a standalone research site without commercial ownership ties or brand endorsements from third-party manufacturers.
          </p>
        </section>
      </div>
    </div>
  );
}

