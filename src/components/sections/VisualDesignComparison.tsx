'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Layers, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function VisualDesignComparison() {
  const [activeTab, setActiveTab] = useState<'elevation' | 'floorplan'>('elevation');

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Visual Spatial Confidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            See the space before it is built.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Eliminate guesswork. Our architectural visualization translates two-dimensional line drawings into tactile exterior elevations and furnished interior floor plans.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal direction="up" delay={0.1} className="flex items-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('elevation')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'elevation'
                ? 'bg-navy-950 text-white shadow-card'
                : 'bg-surface-ice border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>3D Elevation Design</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('floorplan')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'floorplan'
                ? 'bg-navy-950 text-white shadow-card'
                : 'bg-surface-ice border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4 text-brand-blue" />
            <span>3D Floor Plan Visualization</span>
          </button>
        </ScrollReveal>

        {/* Content Box */}
        <ScrollReveal direction="up" delay={0.15}>
        {activeTab === 'elevation' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-ice rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  Façade Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                  Façade Drawing → Photorealistic Exterior
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Evaluate how your building will interact with sunlight, street view, and neighbouring structures. We model authentic materials—brick jali, exposed concrete, aluminium louvers, and warm lighting—so there are no surprises when the scaffolding comes down.
                </p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Daytime sunlight and shadow studies</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Evening architectural accent lighting simulation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>2D dimensioned elevation drawings for site execution</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services/elevation-design-bangalore"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors shadow-subtle"
                >
                  <span>Explore 3D Elevation Services</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200">
                <img
                  src="/images/company/showroom-4.jpeg"
                  alt="3D Elevation Façade Render in Bangalore"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-navy-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-medium border border-white/10">
                  Concept Façade Visualization • Bangalore Villa
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-ice rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                  Spatial Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                  2D Line Plan → Furnished Spatial View
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  See how rooms connect, how wide hallways feel, and how furniture fits into your floor plan. A 3D floor plan prevents costly modifications during brick masonry and column casting.
                </p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>True-to-scale king bed, sofa & wardrobe layouts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Kitchen work-triangle and utility corridor verification</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Cross-ventilation and natural daylight verification</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services/3d-floor-plan-design-bangalore"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
                >
                  <span>Explore 3D Floor Plan Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200">
                <img
                  src="/images/company/real-project-01.jpeg"
                  alt="3D Floor Plan Blueprint and Furnished Layout"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-navy-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-medium border border-white/10">
                  Isometric 3D Spatial Layout • Living & Dining Zones
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mandatory Visualisation Disclaimer */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-surface-mist border border-blue-100 text-xs text-slate-600">
          <ShieldAlert className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
          <p>
            <strong className="text-navy-950">Engineering & Statutory Note:</strong> Visualizations communicate design intent, spatial proportions, and material aesthetics. Final construction detailing and approval drawings depend on site-specific structural load calculations and local municipal setback guidelines.
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
