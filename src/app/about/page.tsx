'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
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
  Eye,
  Target,
  HeartHandshake,
  Award
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');
  const [activeProcess, setActiveProcess] = useState<'construction' | 'valuation'>('construction');

  const currentStages = activeProcess === 'construction' ? constructionProcessStages : valuationProcessStages;

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Page Header / Hero Banner */}
      <section className="bg-navy-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              About Us
            </h1>
            <Breadcrumbs
              items={[{ name: 'About Us', href: '/about' }]}
              theme="dark"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
        {/* ============================================================
            SECTION 1: ABOUT US (First Section)
        ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
              Engineering-Led Construction & Valuation in Bengaluru
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded and led by <strong>Er. Saravanan</strong>, <strong>MY SPACE Civil Engineers & Valuers</strong> is a premier property engineering consultancy based in Bengaluru. We specialize in residential turnkey construction, commercial buildings, architectural 2D/3D design, bespoke interiors, and government-approved property valuation.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate the stress and ambiguity often associated with contractors by offering single-point accountability, transparent itemized BOQs, and strict compliance with Indian Standards (IS codes).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black text-brand-blue font-mono">15+</span>
                <p className="text-xs text-slate-600 font-medium mt-1">Years of Civil Mastery</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black text-brand-blue font-mono">100%</span>
                <p className="text-xs text-slate-600 font-medium mt-1">IS-Standard Compliance</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                <span className="text-2xl font-black text-brand-blue font-mono">4.9 ★</span>
                <p className="text-xs text-slate-600 font-medium mt-1">Google Client Rating</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-slate-200 aspect-[4/3] group">
              <img
                src="/images/company/showroom-1.jpeg"
                alt="MY SPACE Civil Engineers Bangalore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-950/90 backdrop-blur-md rounded-2xl text-white text-xs">
                <strong className="block text-sm font-bold text-white mb-0.5">MY SPACE Civil Engineers & Valuers</strong>
                <span>AECS B Block, Singasandra, Bengaluru</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: OUR VISION • OUR MISSION • OUR VALUES (Screenshot 4 Reference)
        ============================================================ */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          {/* Tab Navigation matching Screenshot 4 */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl font-bold flex-wrap border-b border-slate-100 pb-6">
            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'vision'
                  ? 'text-orange-600 font-bold border-b-2 border-orange-600 pb-1'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Our Vision
            </button>
            <span className="text-slate-400 select-none">•</span>
            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'mission'
                  ? 'text-orange-600 font-bold border-b-2 border-orange-600 pb-1'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Our Mission
            </button>
            <span className="text-slate-400 select-none">•</span>
            <button
              type="button"
              onClick={() => setActiveTab('values')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'values'
                  ? 'text-orange-600 font-bold border-b-2 border-orange-600 pb-1'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Our Values
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'vision' && (
              <div className="text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Our Vision</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  To be Bengaluru's most trusted engineering, construction, and valuation firm, transforming our clients' aspirations into structurally resilient, aesthetically inspiring, and cost-effective living spaces.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mx-auto mb-2">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Our Mission</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  To deliver turnkey building solutions with absolute budget transparency, uncompromised structural integrity, innovative 3D visualization, and punctual milestone delivery under single-point engineering ownership.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="text-center space-y-2 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mx-auto mb-2">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">Our Core Values</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">1. Integrity & Transparency</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fixed itemized BOQ contracts with locked per-sq.ft rates and zero hidden charges.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">2. Engineering Excellence</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      IS-standard rebar reinforcement, batch-tested concrete, and 21-day curing cycles.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">3. Client-Centric Approach</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Patiently listening to family and business needs to craft tailored spatial solutions.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">4. Single Accountability</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      One dedicated engineering team coordinating architecture, civil execution, and handover.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 3: 5-STAGE WORKFLOW
        ============================================================ */}
        <section id="how-it-works" className="scroll-mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
              Systematic Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              5-Stage Engineering Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Structured milestone stages for turnkey construction and certified property valuation:
            </p>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {currentStages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
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

                <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-medium flex items-center gap-1.5">
                  <Check className="w-3 h-3 shrink-0" />
                  <span className="truncate">{stage.keyOutputs[0]}</span>
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
        </section>

        {/* ============================================================
            SECTION 4: CLIENT TESTIMONIALS (Google Reviews)
        ============================================================ */}
        <TestimonialsCarousel />

        {/* ============================================================
            SECTION 5: ENQUIRY CONSULTATION FORM
        ============================================================ */}
        <section id="enquiry" className="max-w-7xl mx-auto pt-6">
          <EnquiryForm
            title="Start Your Project with My Space"
            subtitle="Tell us about your plot location or requirements. Our engineers will get back to you with structured advice."
          />
        </section>
      </div>
    </div>
  );
}
