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
    tag: 'Stage 01 • Scoping',
    title: 'Define Appraisal Objective',
    turnaround: 'Day 1',
    summary: 'Identify valuation requirement for bank loan, capital gains tax, visa, or sale.',
    checklist: [
      'Bank mortgage collateral',
      'Capital gains tax (Sec 54)',
      'Legal partition & probate',
      'Visa net worth certification'
    ],
    deliverable: 'Scope Matrix & Prerequisite Checklist',
    methodology: 'Statutory Purpose Mapping'
  },
  {
    step: '02',
    tabLabel: 'Document Review',
    tag: 'Stage 02 • Audit',
    title: 'Verify Title & Sanctions',
    turnaround: 'Day 1–2',
    summary: 'Review title deeds, sanctioned building plans, e-Khata, and EC records.',
    checklist: [
      'Sale Deed & mother deed chain',
      'BBMP e-Khata & tax receipts',
      'Sanctioned plan & setback check',
      '15–30 year Encumbrance Certificate'
    ],
    deliverable: 'Sanction & Title Summary',
    methodology: 'Revenue Title Verification'
  },
  {
    step: '03',
    tabLabel: 'Site Inspection',
    tag: 'Stage 03 • Inspection',
    title: 'Physical Site Survey',
    turnaround: 'Day 2–3',
    summary: 'Laser measurements of plot boundaries, built-up areas, and structural health.',
    checklist: [
      'Laser measurement of carpet area',
      'Road width verification',
      'RCC structural health audit',
      'Civic infrastructure rating'
    ],
    deliverable: 'Field Sheet & Geo-Tagged Photos',
    methodology: 'Laser Distance Meter Survey'
  },
  {
    step: '04',
    tabLabel: 'Computations',
    tag: 'Stage 04 • Analysis',
    title: 'Guideline & Cost Computations',
    turnaround: 'Day 3–4',
    summary: 'Department guideline rates combined with CPWD depreciated building cost.',
    checklist: [
      'Sub-registrar guidance benchmark',
      'Micro-market transaction rates',
      'CPWD structural depreciation',
      'Bank realizable value'
    ],
    deliverable: 'Itemized Computation Sheet',
    methodology: 'CPWD Plinth & Guideline Norms'
  },
  {
    step: '05',
    tabLabel: 'Valuation Dossier',
    tag: 'Stage 05 • Final Report',
    title: 'Comprehensive Valuation Dossier',
    turnaround: 'Day 3–5',
    summary: 'Detailed valuation dossier including market analysis, cost depreciation, and physical audit observations.',
    checklist: [
      'Standard valuation format',
      'Detailed site observations & notes',
      'Site photographs & layout maps',
      'Market value summary'
    ],
    deliverable: 'Complete Valuation Dossier',
    methodology: 'Standard Valuation Norms'
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
            <span>Property Valuation & Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
            Comprehensive Property Valuation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Independent property and asset valuation reports based on physical audits, guideline values, and micro-market analysis.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>3–5 Days Turnaround</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Engineering-Led Assessment</span>
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
