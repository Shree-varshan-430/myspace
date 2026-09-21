import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | My Space Bangalore',
  description: 'Privacy Policy for My Space Engineering, Construction & Valuers. Data protection, enquiry handling, and consent practices in accordance with Indian IT and DPDP regulations.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Privacy Policy', href: '/privacy' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Protection & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Privacy Policy
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
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry on the My Space website, we collect your name, phone number, email address (if provided), project location, and brief details about your construction or valuation requirement. We do not require you to upload sensitive financial or personal title documents on public forms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              The information you provide is used solely to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Review your construction, design, or valuation project feasibility.</li>
              <li>Contact you via Phone, WhatsApp, or Email to discuss your requirement.</li>
              <li>Coordinate site inspections and consultation meetings in Bengaluru.</li>
            </ul>
            <p className="mt-2 font-medium text-navy-950">
              We never sell, rent, or trade your personal contact details to third-party telemarketers or external advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              3. Property Documents for Valuation Enquiries
            </h2>
            <p>
              For property valuation consultations, title documents (e.g. Sale Deed, Khata, tax receipts) are handled under strict professional confidentiality. Such documents are shared through direct encrypted channels and are retained only for the purpose of completing the assigned valuation scope.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              4. Contact for Privacy Inquiries
            </h2>
            <p>
              If you wish to update, modify, or delete your contact details from our consultation records, please email us at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-blue font-semibold">
                {siteConfig.contact.email}
              </a>{' '}
              or visit our office at {siteConfig.address.street}, {siteConfig.address.city}, Bengaluru.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
