import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service | My Space Bangalore',
  description: 'Terms of Service and professional disclaimers for My Space Engineering, Construction & Valuers.',
};

export default function TermsPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Terms of Service', href: '/terms' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Terms & Professional Disclaimers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Terms of Service & Disclaimers
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Last Updated: January 2025 • My Space Engineering, Construction & Valuers
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle space-y-8 text-sm text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              1. Educational Website Content
            </h2>
            <p>
              The articles, guides, cost estimates, and 3D architectural renders published on this website are provided for educational and informational purposes. They do not constitute a binding legal contract or a fixed price quotation until formal structural designs, site soil tests, and an itemized Bill of Quantities (BOQ) are executed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              2. Construction Contracts & Change Management
            </h2>
            <p>
              Physical construction, turnkey house contracts, and civil execution are governed strictly by the formal written agreement, stage-payment schedules, and technical specifications signed between the client and My Space Engineering, Construction & Valuers. Any on-site scope modifications follow documented variation notes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              3. Property Valuation Disclaimer
            </h2>
            <p className="font-medium text-navy-950">
              A property valuation report provides an independent technical and market assessment of the property asset based on supplied documents and physical inspection. A valuation report does NOT guarantee bank loan approval or credit sanction. Credit appraisal and loan sanction remain under the exclusive jurisdiction of the respective financial institution or bank.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              4. 3D Visualization & Architectural Renders
            </h2>
            <p>
              3D elevation renders and 3D floor plan visualizations communicate design intent, spatial proportions, and material harmony. Final execution details are governed by 2D working drawings, structural engineering load checks, and applicable municipal building setbacks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
