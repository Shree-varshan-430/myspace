'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileSearch,
  FileCheck,
  Building,
  Calculator,
  FileText,
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
        <ScrollReveal direction="up" className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Home className="w-4 h-4 text-brand-blue" />
            <span>Property Valuation & Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
            Need an official valuation for a bank loan, <br className="hidden sm:inline" />
            property sale, or visa record?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed max-w-3xl">
            Government-registered valuation reports with physical on-site measurements and guideline rate calculations delivered within 3–5 days.
          </p>

          {/* Quick Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>3–5 Days Turnaround</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Nationalized & Private Bank Accepted</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
              <span>CPWD Depreciated Structural Norms</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Bespoke Interactive Valuation Inspection Terminal (Distinctive Non-Normal Design) */}
        <div className="mb-14 space-y-6">
          {/* 5-Stage Interactive Pipeline Control Rail */}
          <div className="bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-200/90 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
              {valuationPipeline.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className={`flex items-center gap-2.5 px-3 sm:px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-navy-950 text-white shadow-md'
                        : 'bg-surface-ice/60 hover:bg-surface-ice text-slate-600 hover:text-navy-950 border border-transparent hover:border-slate-200'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isActive
                        ? 'bg-brand-blue text-white'
                        : 'bg-white text-navy-950 border border-slate-200'
                    }`}>
                      {stage.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className={`text-[10px] font-mono block uppercase tracking-wider truncate ${
                        isActive ? 'text-sky-300' : 'text-slate-400'
                      }`}>
                        Stage 0{idx + 1}
                      </span>
                      <span className={`text-xs font-bold font-sans block truncate ${
                        isActive ? 'text-white' : 'text-navy-950'
                      }`}>
                        {stage.tabLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Engineering Inspection Console (Split Workbench) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Workbench: Protocol & Checklist */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[11px] font-bold text-brand-blue uppercase tracking-widest px-3 py-1 rounded-md bg-blue-50 border border-blue-100">
                      {activeStage.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{activeStage.turnaround}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                    {activeStage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {activeStage.summary}
                  </p>
                </div>

                {/* Live Engineering Checklist */}
                <div className="space-y-2.5 pt-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Mandatory Valuation Audit Checklist:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.checklist.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-xl bg-surface-ice/70 border border-slate-200/70 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-700 leading-snug font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Navigator Footnote */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-mono">
                    <span>Methodology: </span>
                    <strong className="text-navy-950">{activeStage.methodology}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={activeStageIndex === 0}
                      onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                      className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-navy-950 transition-colors"
                      aria-label="Previous Stage"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-xs font-bold text-slate-600 px-1">
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
                </div>
              </div>

              {/* Right Workbench: Technical Deliverable Dossier */}
              <div className="lg:col-span-5 bg-[#0B1E3B] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-navy-800 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
                    <span className="text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Official Assessment Protocol
                    </span>
                    <span className="text-slate-400">Bengaluru Jurisdiction</span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                      Stage Milestone Deliverable:
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {activeStage.deliverable}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                      Formatted strictly to institutional norms required by credit sanction authorities and legal title examiners.
                    </p>
                  </div>

                  {/* Institutional Acceptance Grid */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] text-sky-400 font-semibold uppercase tracking-widest block">
                      Bank Compliant Reporting:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Canara Bank', 'Bank of Baroda', 'Axis Bank'].map((bank) => (
                        <span
                          key={bank}
                          className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[11px] font-mono text-slate-200"
                        >
                          {bank}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 space-y-3">
                  <Link
                    href="/services/property-valuation-bangalore"
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-brand-blue text-white font-sans font-bold text-xs hover:bg-sky-500 transition-all shadow-md group"
                  >
                    <span>Request Valuation for Your Property</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-[11px] text-center text-slate-400 font-mono">
                    Council-Registered Valuers • 3–5 Days Report Turnaround
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Integrated Technical Audit & Consultation Module */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column (8 cols): Document Matrix & Purpose Ledger */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest block">
                    Accredited Valuation Process
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-tight">
                    Fast document checks. <br className="hidden sm:inline" />
                    Zero unnecessary delays.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                    We guide property owners across Bengaluru on exact documentation needs—including BBMP e-Khata, tax receipts, and sanctioned building plans.
                  </p>
                </div>

                {/* 4-Item Structured Architectural Ledger (No Generic Pills) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-surface-ice/70 border border-slate-200/70 hover:border-slate-300 transition-colors">
                    <span className="font-mono text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                      01 • Collateral
                    </span>
                    <h4 className="font-sans font-bold text-sm text-navy-950">Bank Mortgage Valuation</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Formal valuation reports formatted for nationalized and private banking institutions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-ice/70 border border-slate-200/70 hover:border-slate-300 transition-colors">
                    <span className="font-mono text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                      02 • Transaction
                    </span>
                    <h4 className="font-sans font-bold text-sm text-navy-950">Purchase & Sale Due Diligence</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Fair market benchmark against prevailing guidance rates before transaction signing.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-ice/70 border border-slate-200/70 hover:border-slate-300 transition-colors">
                    <span className="font-mono text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                      03 • Taxation
                    </span>
                    <h4 className="font-sans font-bold text-sm text-navy-950">Capital Gains Tax Indexation</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Section 54/54EC computation based on CPWD depreciated structural replacement cost.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-ice/70 border border-slate-200/70 hover:border-slate-300 transition-colors">
                    <span className="font-mono text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                      04 • Settlement
                    </span>
                    <h4 className="font-sans font-bold text-sm text-navy-950">Partition & Asset Records</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Definitive asset verification dossiers for family partition and institutional records.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Architectural Image with Overlay Action Card */}
              <div className="lg:col-span-5 relative overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 group">
                {/* Background Project Image */}
                <img
                  src="/images/company/real-project-75.jpeg"
                  alt="Property inspection and site assessment in Bengaluru"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette & Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/65 to-navy-950/30 pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-white px-3 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/20 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    On-Site Assessment
                  </span>
                  <span className="font-mono text-xs text-white/80 font-bold">
                    Bengaluru
                  </span>
                </div>

                {/* Bottom Content & CTA */}
                <div className="relative z-10 space-y-4 pt-12">
                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl text-white font-bold leading-tight">
                      Need a Certified Property Valuation?
                    </h4>
                    <p className="text-xs text-slate-200/90 leading-relaxed font-sans">
                      Connect with our engineering team for on-site physical measurements, title verification, and bank-compliant reporting.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>Turnaround: 3–5 Days</span>
                    <span>CPWD / Guidance Rates</span>
                  </div>

                  <Link
                    href="/services/property-valuation-bangalore"
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white text-navy-950 font-sans font-bold text-xs hover:bg-slate-100 hover:shadow-lg transition-all shadow-md group/btn mt-2"
                  >
                    <span>Request Valuation Review</span>
                    <ArrowRight className="w-4 h-4 text-navy-950 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Subtly Integrated Institutional Disclaimer Strip */}
            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="font-mono font-bold text-slate-700 uppercase tracking-wider shrink-0">Note:</span>
              <p className="leading-relaxed">
                A property valuation report does not guarantee loan sanction. Assessed market value is determined strictly through verified revenue records, physical site measurements, and institutional standards.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
