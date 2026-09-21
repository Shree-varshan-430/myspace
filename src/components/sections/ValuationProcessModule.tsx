'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Home,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ValuationStageData {
  step: string;
  tabLabel: string;
  tag: string;
  title: string;
  turnaround: string;
  summary: string;
  checklist: string[];
  deliverable: string;
  methodology: string;
}

const valuationPipeline: ValuationStageData[] = [
  {
    step: '01',
    tabLabel: 'Purpose & Scoping',
    tag: 'Stage 01 • Institutional Scoping',
    title: 'Define Legal Framework & Valuation Purpose',
    turnaround: 'Day 1 • Instant Scoping',
    summary: 'Clarify whether the valuation dossier is required for bank mortgage collateral, capital gains tax computation (Sec 54/54EC), property transaction due diligence, or visa asset verification.',
    checklist: [
      'Mortgage collateral for nationalized & private banking institutions',
      'Capital gains tax indexation with CPWD depreciated structural values',
      'Civil litigation, partition deeds & asset division records',
      'Embassy visa net worth certification with CA cross-verification'
    ],
    deliverable: 'Scope Matrix & Document Prerequisite Checklist',
    methodology: 'Statutory Purpose Mapping'
  },
  {
    step: '02',
    tabLabel: 'Document Verification',
    tag: 'Stage 02 • Revenue & Title Audit',
    title: 'Verify Revenue Records & Approved Sanction Plans',
    turnaround: 'Day 1–2 • Revenue Audit',
    summary: 'Detailed verification of registered title deeds, BBMP/BDA sanctioned building plans, Form 15 Encumbrance Certificates, and e-Khata to verify ownership and statutory deviations prior to inspection.',
    checklist: [
      'Registered Sale Deed & mother deed chain verification',
      'BBMP e-Khata extract and latest Property Tax paid receipt',
      'Approved building sanction plan & FAR setback deviation check',
      'Nil-Encumbrance Certificate (EC) audit for 15–30 continuous years'
    ],
    deliverable: 'Title Legitimacy & Sanction Compliance Summary',
    methodology: 'Revenue Title Verification'
  },
  {
    step: '03',
    tabLabel: 'On-Site Inspection',
    tag: 'Stage 03 • Site Engineering Survey',
    title: 'Physical Site Measurements & Structural Survey',
    turnaround: 'Day 2–3 • Field Survey',
    summary: 'Field inspection conducted by certified civil engineers using laser distance meters. We measure actual plot boundaries, approach road width, building age, RCC soundness, and neighborhood infrastructure.',
    checklist: [
      'Laser measurement of carpet, plinth, and super built-up areas',
      'Approach road width verification (mandatory for bank loan approval)',
      'Structural health audit: RCC frame, settlement, and dampness checks',
      'Neighborhood civic infrastructure & commercial frontage rating'
    ],
    deliverable: 'Field Measurement Sheet & Geo-Tagged Photographic Evidence',
    methodology: 'Laser Distance Meter (LDM) Survey'
  },
  {
    step: '04',
    tabLabel: 'CPWD Calculations',
    tag: 'Stage 04 • Technical Computation',
    title: 'Guideline Benchmark & Depreciated Replacement Cost',
    turnaround: 'Day 3–4 • Engineering Computation',
    summary: 'Dual valuation methodology: Guideline value benchmarking from the Department of Stamps & Registration, combined with CPWD plinth area replacement cost depreciated according to structure age and condition.',
    checklist: [
      'Department of Stamps & Registration guideline rate benchmark',
      'Prevailing real-market micro-market transaction rate analysis',
      'CPWD structural replacement cost & age depreciation computation',
      'Distress sale value & bank realizable value calculation'
    ],
    deliverable: 'Itemized Valuation Computation Ledger',
    methodology: 'CPWD Plinth Depreciation & Guideline Norms'
  },
  {
    step: '05',
    tabLabel: 'Certified Report',
    tag: 'Stage 05 • Stamped Dossier',
    title: 'Comprehensive Government-Registered Valuation Dossier',
    turnaround: 'Day 3–5 • Final Dossier',
    summary: 'Issuance of formal, signed, and stamped valuation report by an approved Government-Registered Valuer (Wealth Tax Act / IBBI), formatted to compliance standards accepted across all financial institutions.',
    checklist: [
      'Form A / IBBI compliant official valuation reporting format',
      'Signed & stamped by Government Registered Valuer',
      'High-resolution on-site photographs and boundary sketch overlays',
      'Accepted by SBI, HDFC, ICICI, Canara Bank, and all major NBFCs'
    ],
    deliverable: 'Certified, Signed & Stamped Valuation Dossier',
    methodology: 'IBBI / Wealth Tax Act Form A Standards'
  }
];

export default function ValuationProcessModule() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = valuationPipeline[activeStageIndex];

  return (
    <section className="py-16 lg:py-24 bg-surface-ice border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Home className="w-4 h-4 text-brand-blue" />
            <span>Property Valuation & Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
            Official Property Valuation in 5 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Government-registered valuation reports with on-site measurements and guideline rate calculations delivered within 3–5 days.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>3–5 Days Turnaround</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bank Accepted & IBBI Registered</span>
            </span>
          </div>
        </ScrollReveal>

        {/* Clean, Simple 5-Step Process Component */}
        <div className="space-y-4">
          {/* Step Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {valuationPipeline.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-navy-950 text-white shadow-md'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isActive
                        ? 'bg-brand-blue text-white'
                        : 'bg-slate-100 text-navy-950'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`text-[10px] font-mono block uppercase tracking-wider ${
                        isActive ? 'text-sky-300' : 'text-slate-400'
                      }`}
                    >
                      Stage 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold truncate block">
                      {stage.tabLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Content Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block mb-1">
                  {activeStage.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  {activeStage.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 self-start sm:self-auto shrink-0">
                <Clock className="w-3.5 h-3.5 text-brand-blue" />
                <span>{activeStage.turnaround}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
              {activeStage.summary}
            </p>

            {/* Checklist Grid */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                Key Scope & Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
                {activeStage.checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 py-1"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Methodology, Navigation & CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-mono text-center sm:text-left">
                Methodology: <strong className="text-navy-950">{activeStage.methodology}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-navy-950 transition-colors"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs font-bold text-slate-600 px-2">
                    0{activeStageIndex + 1} / 05
                  </span>
                  <button
                    type="button"
                    disabled={activeStageIndex === valuationPipeline.length - 1}
                    onClick={() => setActiveStageIndex((prev) => Math.min(valuationPipeline.length - 1, prev + 1))}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-navy-950 transition-colors"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <Link
                  href="/services/property-valuation-bangalore"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-navy-950 transition-colors shadow-sm"
                >
                  <span>Request Valuation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
