'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { constructionProcessStages, valuationProcessStages, consultationChecklist } from '@/data/process';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  HardHat,
  Landmark,
  CheckCircle2,
  Check,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  MapPin,
  Home,
  FileCheck2,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function ProcessPage() {
  const [activeProcess, setActiveProcess] = useState<'construction' | 'valuation'>('construction');

  const currentStages = activeProcess === 'construction' ? constructionProcessStages : valuationProcessStages;

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'How It Works & Process', href: '/process' }]}
            theme="dark"
            className="mb-5"
          />

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Our Construction & Valuation Process
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
              Milestone-driven workflows with clear deliverables, transparent timelines, and engineering supervision.
            </p>
          </div>

          {/* Process Switcher Tabs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveProcess('construction')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeProcess === 'construction'
                  ? 'bg-white text-navy-950 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <HardHat className="w-4 h-4 text-brand-gold" />
              <span>Turnkey Construction Process (5 Stages)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveProcess('valuation')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeProcess === 'valuation'
                  ? 'bg-white text-navy-950 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Landmark className="w-4 h-4 text-brand-blue" />
              <span>Property & Land Valuation Process (5 Stages)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Process Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        {/* Stage Overview Ribbon */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-subtle">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              {activeProcess === 'construction' ? 'Construction Milestones' : 'Valuation Milestones'}
            </span>
            <span className="text-xs font-semibold text-brand-blue font-mono">
              5 Defined Stages
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {currentStages.map((stage) => (
              <a
                key={stage.number}
                href={`#stage-${stage.number}`}
                className="group flex flex-col p-3 rounded-xl bg-slate-50 hover:bg-navy-950 hover:text-white border border-slate-200/70 hover:border-navy-950 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-blue group-hover:text-brand-gold transition-colors">
                    Stage {stage.number}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-white" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-navy-950 group-hover:text-white transition-colors mt-1.5">
                  {stage.title}
                </span>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-300 truncate mt-0.5">
                  {stage.tagline}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
            {activeProcess === 'construction' ? 'Turnkey Execution Flow' : 'Chartered Valuation Flow'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            {activeProcess === 'construction'
              ? 'Stage-by-Stage Construction Execution'
              : 'Certified Property & Land Valuation Workflow'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeProcess === 'construction'
              ? 'Defined inputs, engineering quality audits, and clear deliverables at each building milestone.'
              : 'Document audit, physical site inspection, guideline rate matching, and certified valuation report delivery.'}
          </p>
        </div>

        {/* 5-Stage Editorial Cards */}
        <div className="space-y-10">
          {currentStages.map((stage, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={stage.number}
                id={`stage-${stage.number}`}
                className="scroll-mt-28 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Stage Text Content */}
                  <div className={`space-y-4 ${isEven ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                          {stage.number}
                        </span>
                        <div>
                          <span className="text-[11px] font-mono font-bold text-brand-blue uppercase tracking-wider block">
                            Stage {stage.number} of 05
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
                        {stage.title}: {stage.tagline}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {stage.description}
                    </p>

                    {/* Inputs vs Outputs Split View */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {/* Client Inputs */}
                      <div className="p-3.5 rounded-xl bg-surface-ice border border-slate-200/80 space-y-2">
                        <span className="font-mono text-[10px] font-bold text-slate-700 uppercase tracking-wider block">
                          Key Inputs:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {stage.keyInputs.map((input, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                              <span className="leading-snug">{input}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Verified Deliverables */}
                      <div className="p-3.5 rounded-xl bg-surface-ice border border-slate-200/80 space-y-2">
                        <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                          Verified Deliverables:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {stage.keyOutputs.map((output, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="font-medium text-slate-800 leading-snug">{output}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Roles Breakdown */}
                    <div className="p-3 rounded-xl bg-surface-mist/40 border border-blue-100 text-xs space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <span className="font-bold text-navy-950 uppercase text-[10px] tracking-wider shrink-0">
                          Your Role:
                        </span>
                        <span className="text-slate-600">{stage.clientRole}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 pt-1 border-t border-blue-100/60">
                        <span className="font-bold text-brand-blue uppercase text-[10px] tracking-wider shrink-0">
                          My Space Role:
                        </span>
                        <span className="text-slate-600">{stage.mySpaceRole}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stage Visual Card */}
                  <div className={`space-y-3 ${isEven ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-md group">
                      <img
                        src={stage.image}
                        alt={`${stage.title} stage execution`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 p-3 bg-navy-950/90 backdrop-blur-md rounded-xl text-white text-xs space-y-0.5 border border-white/10">
                        <div className="flex items-center gap-1.5 text-brand-gold font-semibold text-[10px] uppercase tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Milestone Governance</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Stage {stage.number} verified with mutual sign-off before proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preparation Guide Checklist */}
        <section className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-navy-800 relative overflow-hidden shadow-xl">
          <InnerPageHeroBackground />
          <div className="relative z-10 max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Preparation Checklist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                What to Prepare Before Your Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Having these basic items ready helps us give immediate clarity on cost, structural layout, or valuation:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {consultationChecklist.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-navy-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-5 space-y-3 hover:border-brand-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    <h3 className="font-bold text-xs sm:text-sm text-white tracking-wide">
                      {cat.category}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Change Management & Scope Variation Policy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Transparent Execution Policy
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
              Zero-Surprise Change Management Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Modifications during execution are priced transparently and approved in writing prior to on-site implementation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold">
                01
              </div>
              <h3 className="font-bold text-sm text-navy-950">
                Written Variation Note
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Changes are evaluated for structural feasibility and documented in detail before any on-site work.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold">
                02
              </div>
              <h3 className="font-bold text-sm text-navy-950">
                Transparent Line-Item Costing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exact unit rate additions or deductions and timeline adjustments are calculated for client review.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold">
                03
              </div>
              <h3 className="font-bold text-sm text-navy-950">
                Mutual Approval Before Work
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work proceeds only after mutual written sign-off, eliminating surprise billing at final handover.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <section className="pt-6 border-t border-slate-200">
          <EnquiryForm
            title="Discuss Your Construction or Valuation Project"
            subtitle="Share your plot location, space requirements, or appraisal purpose. Our engineers will guide you with a clear roadmap."
          />
        </section>
      </section>
    </div>
  );
}
