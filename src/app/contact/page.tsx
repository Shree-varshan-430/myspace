import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us | Construction & Valuation Consultations Bangalore | My Space',
  description: 'Connect with My Space Engineering, Construction & Valuers in Bengaluru. Direct phone, WhatsApp, and project enquiry consultation.',
  openGraph: {
    title: 'Contact My Space Bangalore | Construction & Valuation Enquiries',
    description: 'Tell us what you are planning. Start a project conversation with our engineering team.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-16 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Contact', href: '/contact' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Contact Construction & Valuation Experts
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Planning house construction, commercial execution, or need an accredited property valuation report? Connect directly with our engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EnquiryForm
          title="Free Construction & Valuation Consultation"
          subtitle="Fill out the quick form below. Our civil engineers will review your plot dimensions or requirements and provide an itemized BOQ."
        />
      </section>
    </div>
  );
}
