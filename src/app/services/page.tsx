import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { Building2, Compass, FileSearch, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Engineering, Construction, Design & Valuation Services in Bangalore',
  description: 'Explore comprehensive property services in Bengaluru: residential house construction, commercial buildings, civil contracting, interior design, 3D elevations, 3D floor plans, and property valuation enquiries.',
  openGraph: {
    title: 'Services | My Space Engineering, Construction & Valuers Bangalore',
    description: 'Explore our integrated engineering, construction, 3D visualization, and property valuation services in Bengaluru.',
  },
};

export default function ServicesPage() {
  const buildServices = servicesData.filter((s) => s.category === 'Build');
  const designServices = servicesData.filter((s) => s.category === 'Design');
  const assessServices = servicesData.filter((s) => s.category === 'Assess');

  return (
    <div className="pt-24 pb-16 bg-surface-ice">
      {/* Top Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Services', href: '/services' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
              <Home className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              All your construction, design & valuation needs in one place.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Whether you want to build a new home, design modern interiors, get 3D elevations, or obtain an accredited property valuation — our specialized teams have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Category 1: Build */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
                1. Home & Commercial Construction
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Turnkey house construction, commercial spaces, and solid civil foundation engineering.
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
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
                2. 3D Elevation & Interior Fit-Outs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Photorealistic 3D exterior views, architectural floor plans, and custom modular woodwork.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designServices.map((service) => (
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
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-light group-hover:text-brand-gold transition-colors"
                  >
                    <span>View Service & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category 3: Assess & Value */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
              <FileSearch className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
                3. Property Valuation & Legal Scrutiny
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Accredited property valuation reports for bank loans, visa applications, and title verification.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
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
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-steel transition-colors"
                  >
                    <span>View Valuation Process & Documents</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Enquiry Section */}
        <section className="pt-12 border-t border-slate-200">
          <EnquiryForm
            title="Not Sure Which Service Fits Your Project?"
            subtitle="Tell us what you are planning, and our team will recommend the right engineering and design approach."
          />
        </section>
      </div>
    </div>
  );
}
