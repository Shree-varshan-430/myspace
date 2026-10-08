import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import {
  Building2,
  Compass,
  FileSearch,
  ArrowRight,
  ShieldCheck,
  Home,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Engineering, Construction, Design & Valuation Services in Bangalore',
  description: 'Explore comprehensive property services in Bengaluru: residential house construction, commercial buildings, civil contracting, interior design, 3D elevations, and property valuation enquiries.',
  openGraph: {
    title: 'Services | My Space Engineering, Construction & Valuers Bangalore',
    description: 'Explore our integrated engineering, construction, 3D visualization, and property valuation services in Bengaluru.',
  },
};

export default function ServicesPage() {
  const buildServices = servicesData.filter((s) => s.category === 'Build');
  const designServices = servicesData.filter((s) => s.category === 'Design');

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Top Hero Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-16 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Services', href: '/services' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Construction, Design & Valuation Services in Bangalore
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              From turnkey residential building and bespoke interiors to accredited property valuation reports — our engineering team delivers end-to-end excellence across Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        {/* Category 1: Build */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                1. Residential, Commercial & Civil Construction
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Turnkey house construction, luxury villas, commercial office complexes, and industrial sheds.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buildServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-950/80 backdrop-blur-sm text-white text-xs font-semibold">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-2.5">
                    <h3 className="text-xl font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-sans">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-steel transition-colors"
                  >
                    <span>View Service & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2: Design & Visualize */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <div className="p-2 rounded-lg bg-brand-gold/15 text-brand-gold">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                2. Interior Design, 2D Floor Plans & 3D Elevations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Photorealistic 3D architectural rendering, Vastu floor plans, and bespoke modular interiors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designServices.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-gold hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-950/80 backdrop-blur-sm text-white text-xs font-semibold">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-2.5">
                    <h3 className="text-xl font-bold text-navy-950 group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-sans">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold group-hover:text-brand-gold transition-colors"
                  >
                    <span>View Service & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category 3: Assess & Value (Consolidated) */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
              <FileSearch className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                3. Government Approved Property Valuation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Certified valuation reports accepted across SBI, HDFC, ICICI, nationalized banks, visa consulates, and tax authorities.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
                Single Unified Page
              </div>
              <h3 className="text-2xl font-bold text-navy-950">
                Complete Property & Asset Valuation in Bangalore
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Residential houses, vacant plots, commercial buildings, and industrial asset valuation conducted with physical site inspection and CPWD depreciation schedules.
              </p>
            </div>

            <Link
              href="/services/property-valuation-bangalore"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-950 transition-all shadow-md shrink-0"
            >
              <span>Explore Property Valuation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Clean Direct Contact Section */}
        <section className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                Direct Engineering Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Discuss Your Construction, Design or Valuation Requirements
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Connect directly with practicing civil engineers and accredited valuers to receive an itemized BOQ estimate.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-bold hover:bg-sky-500 transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3.5 text-xs text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Office Location:</strong>
                  <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.postalCode}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <strong className="text-white block font-sans">Working Hours:</strong>
                  <span>Mon - Sat: 9:30 AM – 7:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <strong className="text-white block font-sans">Email:</strong>
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
