'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { constructionProcessStages, valuationProcessStages } from '@/data/process';
import {
  ShieldCheck,
  Building2,
  HardHat,
  Landmark,
  CheckCircle2,
  MapPin,
  Check,
  ArrowRight,
  Home,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  const [activeProcess, setActiveProcess] = useState<'construction' | 'valuation'>('construction');

  const currentStages = activeProcess === 'construction' ? constructionProcessStages : valuationProcessStages;

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'About & Execution Process', href: '/about' }]}
            theme="dark"
            className="mb-5"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light text-xs font-bold uppercase tracking-widest">
              <Home className="w-3.5 h-3.5" />
              <span>ABOUT MY SPACE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Engineering-Led Construction & Chartered Valuation in Bangalore
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
              Turnkey residential construction, architectural planning, and certified property valuation with senior engineering supervision and zero surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Engineering Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Why Choose My Space for Turnkey Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In conventional construction, clients juggle disconnected parties: architects without site supervision, contractors with hidden line-item charges, and unclear valuation estimates.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              My Space unifies architectural planning, structural execution, and chartered valuation under one roof with transparent BOQs, digital progress logs, and strict quality control.
            </p>

            <div className="p-4 rounded-xl bg-surface-mist border border-blue-100 text-xs text-navy-950 font-medium">
              <strong>Our Promise:</strong> Predictable timelines, fixed-scope BOQ, and certified IS-standard structural engineering.
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

        {/* Dual Process Section: Construction & Valuation */}
        <div id="how-it-works" className="scroll-mt-28 space-y-8 pt-6 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Milestone Execution Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              5-Stage Construction & Valuation Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Select below to view our milestone stages for turnkey construction or certified property valuation:
            </p>
          </div>

          {/* Process Switcher Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm gap-2">
              <button
                type="button"
                onClick={() => setActiveProcess('construction')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeProcess === 'construction'
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                <HardHat className="w-4 h-4 text-brand-gold" />
                <span>Construction Process</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveProcess('valuation')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeProcess === 'valuation'
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                <Landmark className="w-4 h-4 text-brand-blue" />
                <span>Valuation Process</span>
              </button>
            </div>
          </div>

          {/* Concise 5-Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {currentStages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center font-mono font-bold text-xs">
                      {stage.number}
                    </span>
                    <span className="text-[10px] font-mono text-brand-blue font-bold uppercase">
                      Stage {stage.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-navy-950 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <Check className="w-3 h-3 shrink-0" />
                    <span className="truncate">{stage.keyOutputs[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-navy-950 transition-colors"
            >
              <span>Explore Detailed Process & Checklist Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars of Governance */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Quality Assurance
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
              Structural Standards & Quality Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-sm text-navy-950">IS Structural Standards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                RCC framing designed strictly to IS 456 & IS 1893 seismic compliance.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-sm text-navy-950">Batch Quality Sampling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                On-site slump tests and certified 7/28-day concrete cube strength audits.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-sm text-navy-950">Multi-Stage Waterproofing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elastomeric membrane application and 72-hour pond testing for terraces.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-sm text-navy-950">Certified Material Brands</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tata Tiscon/JSW 550D rebar, UltraTech 53G cement, and Century BWP ply.
              </p>
            </div>
          </div>
        </div>

        {/* Real Project Execution Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                Completed Portfolio
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                Completed Projects Across Bengaluru
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
            >
              <span>View Full Gallery & Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
                Commercial Complex
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
                Civil Superstructure
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
        <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 border border-navy-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="lg:col-span-7 space-y-3 relative z-10">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Bangalore Building Expertise
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Bangalore Approvals & Engineering Expertise
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From soil conditions in Sarjapur and Thanisandra to BBMP building bylaws, setback rules, and utility connections, our team navigates local realities with confidence.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-gold-light font-mono">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>Office: {siteConfig.address.street}, {siteConfig.address.city}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10 bg-navy-900 border border-navy-700 p-5 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-white">Consult Our Civil Engineers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedule a visit to our office or request an initial site inspection in Bengaluru.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
            >
              <span>Call: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Lead Form CTA */}
        <section className="pt-8 border-t border-slate-200">
          <EnquiryForm
            title="Free Construction Consultation & Valuation Assessment"
            subtitle="Share what you are planning in Bengaluru, and our civil engineering team will provide an estimate."
          />
        </section>
      </section>
    </div>
  );
}
