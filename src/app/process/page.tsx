import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { processStages, consultationChecklist } from '@/data/process';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  Compass,
  CheckCircle2,
  Check,
  Clock,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  MapPin,
  Home,
  Calendar,
  Layers,
  FileCheck2,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'How It Works | 5-Stage Construction Process Bangalore | My Space',
  description: 'Understand the 5-stage construction and design journey with My Space: Understand, Plan, Visualize, Build, and Handover. Clear milestones, transparent BOQ, and quality governance in Bengaluru.',
  openGraph: {
    title: 'How It Works | My Space Engineering & Construction Process',
    description: 'A transparent, predictable process from first consultation to final handover in Bengaluru.',
  },
};

export default function ProcessPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Hero Banner with Universal Transparent Architectural Image */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'How It Works', href: '/process' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold uppercase tracking-widest">
              <Home className="w-3.5 h-3.5" />
              <span>How We Work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              A clear, step-by-step roadmap for your building journey.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              From our first conversation to handing over your keys, here is how we make your construction experience transparent, predictable, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-20">
        {/* Stage Overview Progression Ribbon */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-subtle">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">
            5-Stage Execution Framework
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {processStages.map((stage, idx) => (
              <a
                key={stage.number}
                href={`#stage-${stage.number}`}
                className="group flex flex-col p-3.5 rounded-xl bg-slate-50 hover:bg-navy-950 hover:text-white border border-slate-200/70 hover:border-navy-950 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-blue group-hover:text-brand-gold transition-colors">
                    Stage {stage.number}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-white" />
                </div>
                <span className="font-bold text-sm text-navy-950 group-hover:text-white transition-colors mt-2">
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
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
            Detailed Milestone Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            What Happens at Each Stage of Construction?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every stage has defined deliverables, fixed material grades, and formal sign-offs so you are always in complete control.
          </p>
        </div>

        {/* 5-Stage Editorial Timeline */}
        <div className="space-y-16">
          {processStages.map((stage, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={stage.number}
                id={`stage-${stage.number}`}
                className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Stage Text Content */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-xl bg-navy-950 text-white flex items-center justify-center font-mono font-bold text-base shadow-sm">
                          {stage.number}
                        </span>
                        <div>
                          <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block">
                            Phase 0{idx + 1}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            Milestone Stage {stage.number} of 05
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                        {stage.title}: {stage.tagline}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Inputs vs Outputs Split View */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Client Inputs */}
                      <div className="p-4 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-2.5">
                        <span className="font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                          What We Need From You:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {stage.keyInputs.map((input, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                              <span>{input}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Verified Deliverables */}
                      <div className="p-4 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-2.5">
                        <span className="font-mono text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                          Verified Deliverables:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {stage.keyOutputs.map((output, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="font-medium text-slate-800">{output}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Roles Breakdown */}
                    <div className="p-4 rounded-2xl bg-surface-mist/40 border border-blue-100 text-xs space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <span className="font-bold text-navy-950 uppercase text-[11px] tracking-wider shrink-0">
                          Your Role:
                        </span>
                        <span className="text-slate-600">{stage.clientRole}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 pt-1 border-t border-blue-100/60">
                        <span className="font-bold text-brand-blue uppercase text-[11px] tracking-wider shrink-0">
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
                      <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-navy-950/90 backdrop-blur-md rounded-xl text-white text-xs space-y-0.5 border border-white/10">
                        <div className="flex items-center gap-1.5 text-brand-gold font-semibold text-[11px] uppercase tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Milestone Governance Gate</span>
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
        <section className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-navy-800 relative overflow-hidden shadow-xl">
          <InnerPageHeroBackground />
          <div className="relative z-10 max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Preparation Guide</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What to Prepare Before Your Consultation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                You don't need architectural drawings to get started. Having these basic details ready will help us provide immediate clarity during our first discussion:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultationChecklist.map((cat, idx) => {
                const icons = [
                  <MapPin key="map" className="w-4 h-4 text-brand-gold-light" />,
                  <Home key="home" className="w-4 h-4 text-brand-gold-light" />,
                  <Calendar key="cal" className="w-4 h-4 text-brand-gold-light" />
                ];

                return (
                  <div
                    key={idx}
                    className="bg-navy-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4 hover:border-brand-gold/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                      {icons[idx]}
                      <h3 className="font-bold text-sm text-white tracking-wide">
                        {cat.category}
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-slate-300">
              <p>
                <strong>Tip:</strong> If you have survey sketches, site photographs, or reference homes you admire, bring them along for our first conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Change Management & Scope Variation Policy */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              The Zero-Surprise Policy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              What If You Want to Make Changes During Construction?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design ideas evolve during the build. We ensure any requested modifications are documented, priced transparently upfront, and approved by you before on-site work starts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-navy-950">
                Written Variation Note
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before any modification is touched on site, we document the requested change and evaluate its structural feasibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-navy-950">
                Transparent Cost & Timeline Impact
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We calculate the exact unit rate difference (addition or deduction) and timeline impact for your written review.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-navy-950">
                Formal Mutual Sign-Off
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work proceeds only after mutual written approval, ensuring zero billing disputes or surprise charges during handover.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <section className="pt-6 border-t border-slate-200">
          <EnquiryForm
            title="Ready to Start Your Project?"
            subtitle="Tell us where you are in your journey. We will review your site details and guide you through the first steps."
          />
        </section>
      </section>
    </div>
  );
}
