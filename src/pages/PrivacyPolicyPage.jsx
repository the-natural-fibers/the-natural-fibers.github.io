import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#2a5a46]">
          Legal & Privacy
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c2340]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#718096]">
          Effective Date: October 2026 • Last Reviewed: November 2026
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#e8ded1] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#4a5568] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">1. Introduction</h2>
          <p>
            Welcome to <strong>The Natural Fibers</strong> (accessible via <code>https://the-natural-fibers.github.io/</code>). We are an independent open-access educational repository and botanical materials encyclopedia. We respect your privacy and are committed to transparency in our data processing activities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">2. Information We Do Not Collect</h2>
          <p>
            We do not operate e-commerce storefronts, do not process financial transactions, do not build personal marketing profiles, and do not sell or monetize personal visitor data under any circumstance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">3. Information You Voluntarily Provide</h2>
          <p>
            When you contact our botanical desk via our Contact form, you provide your name, email address, and inquiry details. This information is utilized solely to respond to your specific query and is never shared with third-party advertising networks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">4. Hosting & Log Analytics</h2>
          <p>
            This website is hosted via GitHub Pages (GitHub, Inc.). When you browse our static resources, GitHub's servers may temporarily log standard web request information (such as IP addresses, browser types, and timestamp headers) to ensure system security and prevent denial-of-service abuse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">5. External Links</h2>
          <p>
            Our articles may reference academic botanical research, international standardization papers (ISO/ASTM), and botanical conservation authorities. We are not responsible for the privacy policies of external third-party domains.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0c2340]">6. Contact Regarding Privacy</h2>
          <p>
            For privacy inquiries or data removal requests, contact us through our online <a href="#/contact" className="text-[#14365d] underline font-semibold">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

