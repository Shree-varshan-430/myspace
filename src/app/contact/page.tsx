import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Home
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us | Construction & Valuation Consultations Bangalore | My Space',
  description: 'Connect with My Space Engineering, Construction & Valuers in Bengaluru. Office in HSR Layout. Direct phone, WhatsApp, and progressive project enquiry consultation.',
  openGraph: {
    title: 'Contact My Space Bangalore | Construction & Valuation Enquiries',
    description: 'Tell us what you are planning. Start a project conversation with our engineering team.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Contact', href: '/contact' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold uppercase tracking-widest">
              <Home className="w-3.5 h-3.5" />
              <span>BANGALORE CONSULTATIONS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Contact Construction & Valuation Experts in Bangalore
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Planning house construction, turnkey renovations, or need an accredited property valuation report? Contact our senior engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Connect & Office Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                Direct Consultation Channels
              </h2>

              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-ice border border-slate-200 hover:border-brand-blue transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Phone Consultation</span>
                    <span className="text-base font-bold text-navy-950">{siteConfig.contact.phoneDisplay}</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello My Space, I would like to enquire about a construction project in Bangalore.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-green-success text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-medium block">WhatsApp Quick Chat</span>
                    <span className="text-base font-bold text-emerald-950">Message Our Engineering Desk</span>
                    <span className="text-[11px] text-emerald-700 block mt-0.5">Instant response for site photos & queries</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-ice border border-slate-200 hover:border-brand-blue transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-navy-950/10 text-navy-950 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email Enquiries</span>
                    <span className="text-sm font-bold text-navy-950">{siteConfig.contact.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-elevated space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Office & Practice</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  My Space Engineering, Construction & Valuers
                </h3>
                <div className="text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>
                      {siteConfig.address.street}, {siteConfig.address.city}, Karnataka {siteConfig.address.postalCode}, India
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{siteConfig.contact.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-800">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Service Areas in Bengaluru:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    HSR Layout, Koramangala, Indiranagar, Whitefield, Sarjapur Road, Electronic City, JP Nagar, Jayanagar, Hebbal, Thanisandra & Kanakapura Road.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Progressive Lead Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Free Construction & Valuation Consultation"
              subtitle="Fill out the quick form below. Our senior civil engineers will review your plot dimensions or requirements and provide an itemized BOQ."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
