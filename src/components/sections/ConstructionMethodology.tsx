'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  FileText, 
  Users, 
  Building2, 
  ChevronRight,
  Clock,
  Check
} from 'lucide-react';

interface MethodologyStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  sentence: string;
  timeline: string;
  keyActivities: string[];
  deliverables: string[];
  qualityAssurance: string;
}

const methodologyStages: MethodologyStage[] = [
  {
    id: 'planning',
    stepNumber: '01',
    title: 'Project Discussion & Planning',
    subtitle: 'Consultation & Strategic Scope',
    sentence: 'We begin with an in-depth consultation to understand your architectural requirements, lifestyle preferences, plot constraints, and budget parameters, establishing a clear roadmap for your dream home.',
    timeline: 'Week 1 - 2',
    keyActivities: [
      'Comprehensive spatial brief & family lifestyle mapping',
      'Physical site audit, soil assessment & boundary verification',
      'BBMP / BDA local municipal bylaws & setback feasibility analysis',
      'Preliminary timeline, budget ceiling & architectural orientation'
    ],
    deliverables: [
      'Site Feasibility & Soil Audit Report',
      'Spatial Zoning & Project Charter',
      'Initial Budget & Milestone Schedule'
    ],
    qualityAssurance: '100% statutory alignment with local zoning bylaws and soil load-bearing recommendations.'
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Design & Detailed Specifications',
    subtitle: 'Architectural & Engineering Drawings',
    sentence: 'Our architectural and structural engineering team translates your vision into comprehensive 2D floor plans, 3D photorealistic elevations, and exhaustive technical structural specifications.',
    timeline: 'Week 3 - 5',
    keyActivities: [
      'Vastu-aligned 2D architectural floor plans & spatial optimization',
      'Photorealistic 3D exterior elevations & façade design',
      'Structural engineering detailing (RCC slab, column & footing design)',
      'Plumbing, electrical (MEP) & joinery material scheduling'
    ],
    deliverables: [
      'Complete 2D Architectural Working Drawings',
      'High-Resolution 3D Exterior Elevation Renders',
      'Structural Consultant Vetted Drawings'
    ],
    qualityAssurance: 'Structural drawings engineered in full compliance with standard IS 456 codes.'
  },
  {
    id: 'agreement',
    stepNumber: '03',
    title: 'Scope Finalization & Agreement',
    subtitle: 'Transparent BOQ & Legal Contract',
    sentence: 'We provide a transparent, itemized Bill of Quantities (BOQ) with guaranteed zero hidden costs, defining exact material specifications, stage payment milestones, and formal contract execution.',
    timeline: 'Week 6',
    keyActivities: [
      'Line-item Bill of Quantities (BOQ) with guaranteed brand specifications',
      'Stage-by-stage escrow-style payment schedule linked strictly to progress',
      'Clear definition of inclusions, exclusions, and warranty clauses',
      'Legally binding contract execution with definite completion timeline'
    ],
    deliverables: [
      'Transparent Itemized BOQ Contract',
      'Milestone-Linked Payment Schedule',
      'Formal Construction Agreement'
    ],
    qualityAssurance: 'Guaranteed zero price escalation policy on approved specifications throughout the build cycle.'
  },
  {
    id: 'construction',
    stepNumber: '04',
    title: 'Construction & Execution Progress',
    subtitle: 'Rigorous On-Site Build Execution',
    sentence: 'Full-scale physical execution commences on site under the direct supervision of qualified site engineers, utilizing approved branded materials and real-time digital progress tracking.',
    timeline: 'Months 2 - 10',
    keyActivities: [
      'Earthwork excavation, anti-termite treatment & footing concrete pouring',
      'RCC framework (columns, beams, slabs) with automated batch-mix concrete',
      'AAC block / solid block masonry, interior and exterior plastering',
      'Concealed MEP conduit routing, waterproofing & flooring installations'
    ],
    deliverables: [
      'Weekly Digital Photo & Video Progress Dossiers',
      'Concrete Cube Strength Test Lab Reports',
      'Stage Completion Verification Sign-offs'
    ],
    qualityAssurance: 'Continuous on-site engineer supervision with daily site logs and laboratory batch testing.'
  },
  {
    id: 'quality',
    stepNumber: '05',
    title: 'Site Reviews & Quality Checks',
    subtitle: '430+ Multi-Stage Quality Audits',
    sentence: 'Continuous multi-stage quality audits and 430+ checkpoint inspections ensure every structural component, waterproofing membrane, and electrical/plumbing run meets rigorous standards.',
    timeline: 'Throughout Build & Month 11',
    keyActivities: [
      '430+ proprietary QA checklist inspections across all trade works',
      'Hydrostatic plumbing pressure testing & water ponding tests for roofs/toilets',
      'Electrical line continuity and earth resistance verification',
      'Millimeter-precision laser leveling for tile alignments and joinery'
    ],
    deliverables: [
      'Comprehensive 430+ QA Audit Report',
      'Waterproofing & MEP Pressure Test Reports',
      'Comprehensive Snag Clearance Registry'
    ],
    qualityAssurance: 'Zero-tolerance snag clearance protocol before authorizing final interior finishes.'
  },
  {
    id: 'handover',
    stepNumber: '06',
    title: 'Final Completion & Handover',
    subtitle: 'Flawless Delivery & Key Presentation',
    sentence: 'Upon 100% snag resolution and professional deep cleaning, we formally hand over the keys along with as-built drawings, warranties, and an ongoing maintenance orientation.',
    timeline: 'Month 12',
    keyActivities: [
      'Deep chemical cleaning, polishing, and post-construction sanitization',
      'Joint comprehensive walkthrough with the client for final sign-off',
      'Handover of complete as-built MEP drawings and manufacturer manuals',
      'Presentation of keys, welcome dossier, and 10-year structural warranty pack'
    ],
    deliverables: [
      'Official Possession & Handover Certificate',
      'Complete As-Built Drawings & Operational Manuals',
      '10-Year Written Structural Warranty Card'
    ],
    qualityAssurance: '10-year structural warranty and 1-year complimentary maintenance support post-handover.'
  }
];

export default function ConstructionMethodology() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = methodologyStages[activeStageIndex];

  return (
    <section className="pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 lg:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-2">
              <Home className="w-4 h-4 text-brand-blue" />
              <span>Construction Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug max-w-4xl">
              6-Stage House Construction Process
            </h2>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-brand-blue uppercase tracking-wider transition-colors shrink-0 group"
          >
            <span>Explore Complete Process</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6-Stage Circular Timeline Navigation (Matching User Screenshot) */}
        <div className="relative">
          {/* Scrollable Container on Mobile, Grid on Desktop */}
          <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <div className="grid grid-cols-6 min-w-[760px] lg:min-w-0 gap-2 sm:gap-4 relative">
              {methodologyStages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className="group flex flex-col items-center text-center focus:outline-none transition-all duration-300 relative py-2"
                  >
                    {/* Outlined Number Floating Behind/Above */}
                    <div className="relative flex flex-col items-center">
                      <span 
                        className={`text-3xl sm:text-4xl font-black font-mono select-none transition-all duration-300 ${
                          isActive 
                            ? 'text-brand-blue/30 scale-105' 
                            : 'text-brand-blue/20 group-hover:text-brand-blue/35'
                        }`}
                        style={{
                          WebkitTextStroke: '1.5px #2563eb',
                          color: 'transparent',
                          lineHeight: '0.9'
                        }}
                      >
                        {stage.stepNumber}
                      </span>

                      {/* Circle Icon Badge */}
                      <div
                        className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 -mt-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-[#0B1528] text-white shadow-xl scale-105 ring-4 ring-brand-blue/20'
                            : 'bg-white text-navy-950 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-lg hover:scale-102 group-hover:border-slate-200'
                        }`}
                      >
                        {/* Custom Graphic Icons Matching Screenshot Details */}
                        {idx === 0 && (
                          /* 01: Handshake Icon */
                          <div className="relative flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 28L6 22L12 16L18 22L12 28Z" fill={isActive ? "#FBBF24" : "#F59E0B"} fillOpacity={isActive ? "0.9" : "0.85"} />
                              <path d="M36 28L42 22L36 16L30 22L36 28Z" fill={isActive ? "#FBBF24" : "#F59E0B"} fillOpacity={isActive ? "0.9" : "0.85"} />
                              <path d="M16 20L22 14L28 20L22 26L16 20Z" fill={isActive ? "#FDE68A" : "#FBBF24"} />
                              <path d="M22 26L28 20L34 26L28 32L22 26Z" fill={isActive ? "#F59E0B" : "#D97706"} />
                              <path d="M16 26L22 32L28 26L22 20L16 26Z" fill={isActive ? "#FDE68A" : "#FBBF24"} />
                              <path d="M18 22C18 22 21 19 24 19C27 19 30 22 30 22" stroke={isActive ? "#FFFFFF" : "#1E293B"} strokeWidth="2.5" strokeLinecap="round" />
                              <path d="M14 26L20 32C22.2091 34.2091 25.7909 34.2091 28 32L34 26" stroke={isActive ? "#FDE68A" : "#D97706"} strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                          </div>
                        )}

                        {idx === 1 && (
                          /* 02: Drafting Triangle / Ruler Icon */
                          <div className="relative flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 38L38 38L10 10L10 38Z" fill="#FBBF24" />
                              <path d="M16 32L28 32L16 20L16 32Z" fill={isActive ? "#0B1528" : "#FFFFFF"} />
                              <line x1="10" y1="34" x2="14" y2="34" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="10" y1="30" x2="13" y2="30" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="10" y1="26" x2="14" y2="26" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="10" y1="22" x2="13" y2="22" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="10" y1="18" x2="14" y2="18" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="10" y1="14" x2="13" y2="14" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="14" y1="38" x2="14" y2="34" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="18" y1="38" x2="18" y2="35" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="22" y1="38" x2="22" y2="34" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="26" y1="38" x2="26" y2="35" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="30" y1="38" x2="30" y2="34" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="34" y1="38" x2="34" y2="35" stroke={isActive ? "#0B1528" : "#B45309"} strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                        )}

                        {idx === 2 && (
                          /* 03: Scope Finalization & Agreement Document with Pencil */
                          <div className="relative flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="12" y="10" width="20" height="28" rx="4" fill="#CBD5E1" />
                              <rect x="14" y="12" width="16" height="24" rx="2" fill={isActive ? "#1E293B" : "#F8FAFC"} />
                              <line x1="18" y1="18" x2="26" y2="18" stroke={isActive ? "#94A3B8" : "#64748B"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="18" y1="23" x2="26" y2="23" stroke={isActive ? "#94A3B8" : "#64748B"} strokeWidth="2" strokeLinecap="round" />
                              <line x1="18" y1="28" x2="23" y2="28" stroke={isActive ? "#94A3B8" : "#64748B"} strokeWidth="2" strokeLinecap="round" />
                              {/* Slanted Pencil */}
                              <g transform="rotate(45 32 26)">
                                <rect x="28" y="14" width="6" height="18" rx="2" fill="#F59E0B" />
                                <polygon points="28,32 34,32 31,37" fill="#EF4444" />
                                <polygon points="30,35 32,35 31,37" fill="#1E293B" />
                              </g>
                            </svg>
                          </div>
                        )}

                        {idx === 3 && (
                          /* 04: Construction Crane Icon */
                          <div className="relative flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Tower Truss */}
                              <path d="M19 40L23 16H27L31 40H19Z" stroke="#DC2626" strokeWidth="2" strokeLinejoin="round" fill="none" />
                              <line x1="20" y1="32" x2="30" y2="32" stroke="#DC2626" strokeWidth="1.5" />
                              <line x1="21" y1="24" x2="29" y2="24" stroke="#DC2626" strokeWidth="1.5" />
                              <line x1="20" y1="40" x2="29" y2="24" stroke="#DC2626" strokeWidth="1.2" />
                              <line x1="30" y1="40" x2="21" y2="24" stroke="#DC2626" strokeWidth="1.2" />
                              {/* Horizontal Jib */}
                              <path d="M12 16H42" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                              <path d="M25 16V10L14 16" stroke="#DC2626" strokeWidth="2" strokeLinejoin="round" />
                              <path d="M25 10L36 16" stroke="#DC2626" strokeWidth="2" />
                              {/* Counterweight & Cable */}
                              <rect x="12" y="17" width="5" height="4" fill="#64748B" rx="1" />
                              <line x1="38" y1="16" x2="38" y2="25" stroke="#475569" strokeWidth="1.5" />
                              <rect x="35" y="25" width="6" height="5" fill="#F59E0B" rx="1" />
                            </svg>
                          </div>
                        )}

                        {idx === 4 && (
                          /* 05: Site Reviews & Quality Check Pin */
                          <div className="relative flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Vertical Pole */}
                              <line x1="24" y1="24" x2="24" y2="38" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
                              <ellipse cx="24" cy="38" rx="4" ry="1.5" fill="#94A3B8" />
                              {/* Red Circular Pin Head */}
                              <circle cx="24" cy="20" r="9" fill="#DC2626" />
                              <circle cx="21" cy="17" r="3" fill="#FCA5A5" fillOpacity="0.8" />
                              {/* Subtle Checkmark Inside or Highlight */}
                              <path d="M21 20L23 22L27 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}

                        {idx === 5 && (
                          /* 06: Final Completion & Handover Key */
                          <div className="relative flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g transform="rotate(-45 24 24)">
                                <circle cx="17" cy="24" r="8" stroke="#D97706" strokeWidth="3" fill="none" />
                                <circle cx="17" cy="24" r="3.5" fill="#D97706" />
                                <path d="M25 24H39" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
                                <line x1="33" y1="24" x2="33" y2="30" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
                                <line x1="38" y1="24" x2="38" y2="29" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
                              </g>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step Title Beneath Circle */}
                    <div className="mt-3.5 px-1 max-w-[155px]">
                      <h3
                        className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 line-clamp-2 leading-snug ${
                          isActive
                            ? 'text-navy-950 font-extrabold'
                            : 'text-slate-700 group-hover:text-navy-950'
                        }`}
                      >
                        {stage.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Continuous Bottom Horizontal Track with Dynamic Active Bar */}
          <div className="relative mt-2 border-b border-slate-200">
            {/* Desktop Active Underline Bar */}
            <div className="hidden lg:grid grid-cols-6 w-full">
              {methodologyStages.map((_, idx) => (
                <div key={idx} className="h-1 flex justify-center">
                  {activeStageIndex === idx ? (
                    <div className="w-full h-1 bg-navy-950 rounded-full transition-all duration-300" />
                  ) : (
                    <div className="w-full h-1 bg-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Detail Sentence & Specifications Container ("Sentence Inside It") */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8 lg:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Identification, Title, & Explanatory Sentence */}
            <div className="lg:col-span-7 space-y-5">
              <div className="pt-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5 mt-2">
                  {currentStage.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
                  {currentStage.title}
                </h3>
              </div>

              {/* Explanatory Sentence Card with What We Provide */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-l-brand-blue border border-slate-200 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue block">
                  What We Provide in this Stage:
                </span>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {currentStage.sentence}
                </p>
              </div>

              {/* Key Execution Activities */}
              <div>
                <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>What We Provide & Scope of Execution</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStage.keyActivities.map((activity, actIdx) => (
                    <div
                      key={actIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-ice border border-slate-100 text-xs text-slate-700 leading-relaxed"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables & Quality Benchmark */}
            <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 to-[#132238] rounded-xl p-6 text-white space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Key Client Deliverables</span>
                </div>

                <ul className="space-y-2.5">
                  {currentStage.deliverables.map((deliv, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/10 border border-white/10 text-xs text-slate-100"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="font-medium">{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Quality Assurance Benchmark</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentStage.qualityAssurance}
                  </p>
                </div>
              </div>

              {/* Next Stage Navigation / Action Button */}
              <div className="pt-4 flex items-center justify-between gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  &larr; Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev < 5 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-navy-950 hover:bg-slate-100 text-xs font-bold transition-all"
                >
                  <span>{activeStageIndex === 5 ? 'Back to Stage 01' : 'Next Stage'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Click any step above to explore detailed activities, deliverables, and engineering timelines.</span>
          </div>

          <Link
            href="/process"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-navy-950 text-white hover:bg-brand-blue active:scale-[0.98] transition-all duration-150 shadow-md group shrink-0"
          >
            <span className="text-xs sm:text-sm font-semibold">
              Explore Complete Roadmap & Deliverables
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
