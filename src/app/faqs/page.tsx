import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { faqsData } from '@/data/faqs';
import { HelpCircle, Phone, MessageSquare, ArrowRight, Home } from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Construction & Valuation Bangalore | My Space',
  description: 'Find answers to common questions about house construction costs, 3D elevation design, property valuation reports, and civil engineering in Bengaluru.',
  openGraph: {
    title: 'FAQs | My Space Engineering, Construction & Valuers',
    description: 'Frequently asked questions for Bangalore property owners.',
  },
};

export default function FaqsPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'FAQs', href: '/faqs' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Everything you want to know before building.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Clear, honest answers about construction costs per sq.ft, BBMP building permissions, material quality, and bank valuation reports in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Main Section with Search & Filter */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FaqAccordion
          faqs={faqsData}
          showCategoryFilter={true}
          showSearch={true}
          title=""
          subtitle=""
        />

        {/* Can't find question callout */}
        <div className="mt-12 p-8 rounded-3xl bg-navy-950 text-white border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Have a question not answered here?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our engineering team for instant clarification on your Bengaluru project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hi My Space, I have a specific question about my construction project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-green-success text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Lead Form CTA */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <EnquiryForm
            title="Have a Specific Question About Your Plot?"
            subtitle="Ask us anything about costs, setbacks, or timelines. We will get back to you with clear advice."
          />
        </div>
      </section>
    </div>
  );
}
