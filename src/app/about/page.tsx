import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  ShieldCheck,
  Building2,
  Compass,
  FileSearch,
  CheckCircle2,
  Award,
  Users,
  MapPin,
  Check,
  ArrowRight,
  Home
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Us | My Space Engineering, Construction & Valuers Bangalore',
  description: 'Learn about My Space Engineering, Construction & Valuers. Our engineering-led philosophy, quality control protocols, and local Bangalore construction expertise.',
  openGraph: {
    title: 'About My Space | Engineering, Construction & Valuers Bangalore',
    description: 'An engineering-led partner for the spaces you are planning in Bengaluru.',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'About', href: '/about' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
              <Home className="w-3.5 h-3.5" />
              <span>ABOUT MY SPACE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              We make building your dream space simple and transparent.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              No confusing contracts or disconnected contractors. We combine architectural design, quality civil construction, and accredited property valuation under one friendly, dependable team.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Why We Started My Space
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In most construction projects, property owners face a disconnected process: architects who don't supervise site execution, contractors who change specifications on the fly, and valuation reports shrouded in confusing paperwork.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              My Space was founded to unify these disciplines under one roof. We treat every home, commercial building, or valuation enquiry with technical precision, fixed transparent pricing, and clear weekly updates.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-surface-mist border border-blue-100 text-xs text-navy-950 font-medium">
                <strong>Brand Promise:</strong> Build Your Own Space — tailored to your lifestyle, verified by engineering, and free from hidden surprises.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 aspect-[4/3]">
              <img
                src="/images/company/showroom-1.jpeg"
                alt="Contemporary architecture in Bangalore"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-navy-950/90 backdrop-blur-md rounded-xl text-white text-xs">
                Bengaluru-Rooted Engineering & Contemporary Architectural Practice
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Governance */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Construction Quality
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
              How We Protect Your Investment at Every Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-sm text-navy-950">IS Structural Standards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All RCC columns, beams, and foundations strictly conform to IS 456 and IS 1893 seismic guidelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-sm text-navy-950">Batch Quality Sampling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Slump tests on-site for every concrete batch and 7/28-day cube strength testing by certified laboratories.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-sm text-navy-950">Multi-Stage Waterproofing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integral crystalline additives for sumps, elastomeric membrane for terraces, and 72-hour pond testing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-sm text-navy-950">Certified Material Brands</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tata Tiscon / JSW 550D TMT steel, UltraTech 53-grade cement, Ashirvad CPVC, and Century BWP marine ply.
              </p>
            </div>
          </div>
        </div>

        {/* Real Project Execution Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                Our Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
                Real Homes & Spaces Built Across Bengaluru
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              A quick look at our turnkey residential houses, commercial complexes, civil structures, and bespoke interiors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/showroom-1.jpeg"
                alt="Commercial Showroom Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Showroom Complex
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-83.jpeg"
                alt="Multi-Storey Villa Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Villa Architecture
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-54.jpeg"
                alt="Modular Kitchen Execution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Modular Kitchen
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/showroom-3.jpeg"
                alt="Commercial Facade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Commercial Facade
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-18.jpeg"
                alt="RCC Structural Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Civil RCC Superstructure
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-69.jpeg"
                alt="Turnkey Living Space"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Living Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Local Bangalore Context & Office */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="lg:col-span-7 space-y-4 relative z-10">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Local Bangalore Know-How
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Decades of On-Ground Experience in Bengaluru Neighborhoods
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From soil conditions in Sarjapur and Thanisandra to BBMP building bylaws, setback rules, BWSSB sanitary connections, and BESCOM electrical metering, our team navigates local realities with confidence.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-gold-light font-mono">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>Office: {siteConfig.address.street}, {siteConfig.address.city}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10 bg-navy-900 border border-navy-700 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Speak With Our Engineers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedule a visit to our office or request an initial site inspection in Bengaluru.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
            >
              <span>Call: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Lead Form CTA */}
        <section className="pt-10 border-t border-slate-200">
          <EnquiryForm
            title="Tell Us About Your Plot or Project"
            subtitle="Share what you are planning in Bengaluru, and our team will get in touch with clear guidance."
          />
        </section>
      </section>
    </div>
  );
}
