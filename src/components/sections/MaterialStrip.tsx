'use client';

import React from 'react';
import { Layers, ArrowRight, Sparkles, Home } from 'lucide-react';
import Link from 'next/link';

interface MaterialItem {
  name: string;
  category: string;
  headline: string;
  image: string;
  tag: string;
}

const materials: MaterialItem[] = [
  {
    name: 'Exposed Wire-Cut Brick',
    category: 'Masonry & Façade',
    headline: 'Natural wire-cut clay bricks for thermal insulation and earthen warmth.',
    image: '/images/company/real-project-39.jpeg',
    tag: 'myspacebangalore.com'
  },
  {
    name: 'Form-Finish Concrete',
    category: 'Structural Envelope',
    headline: 'Monolithic concrete and exposed ceilings with enduring structural purity.',
    image: '/images/company/real-project-85.jpeg',
    tag: 'myspacebangalore.com'
  },
  {
    name: 'Sadahalli & Flamed Granite',
    category: 'Hardscaping & Steps',
    headline: 'Locally quarried natural granites for slip-resistant stairways and counters.',
    image: '/images/company/showroom-1.jpeg',
    tag: 'myspacebangalore.com'
  },
  {
    name: 'Seasoned Teak & Oak Veneer',
    category: 'Joinery & Interiors',
    headline: 'FSC-certified hardwoods for acoustic fluted paneling and bespoke millwork.',
    image: '/images/company/real-project-01.jpeg',
    tag: 'myspacebangalore.com'
  },
  {
    name: 'Powder-Coated Aluminium & Louvers',
    category: 'Fenestration & Louvers',
    headline: 'Precision window systems and privacy louvers built for the Bangalore monsoon.',
    image: '/images/company/showroom-2.jpeg',
    tag: 'myspacebangalore.com'
  },
  {
    name: 'Low-E Acoustic Glazing',
    category: 'Façade & Windows',
    headline: 'High-performance double glazing cutting noise while preserving natural light.',
    image: '/images/company/real-project-28.jpeg',
    tag: 'myspacebangalore.com'
  }
];

// Minimalist 3-lobed architectural emblem mark matching the reference in brand color
function BrandEmblem() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-navy-950 group-hover:text-brand-blue transition-colors shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="4.2" />
      <circle cx="7" cy="16" r="4.2" />
      <circle cx="17" cy="16" r="4.2" />
      <circle cx="12" cy="13" r="2.2" fill="white" />
    </svg>
  );
}

import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function MaterialStrip() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-navy-950 text-white border-y border-navy-800/80 relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Home className="w-4 h-4 text-sky-400" />
              <span>Quality Materials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Built with materials that last for generations.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-sans">
            We handpick tested cement, certified steel, genuine hardwoods, and weather-proof fittings suited for Bengaluru’s climate.
          </p>
        </ScrollReveal>

        {/* Poster Cards Grid (Matching Reference Layout Style with Brand Palette) */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {materials.map((mat, idx) => {
            // Alternating split layout: Middle card in 3-col grid (or odd cards) has text on top, image on bottom
            const isInverted = idx % 3 === 1;

            return (
              <StaggerItem key={mat.name} className="h-full">
                <div
                  className="rounded-[24px] overflow-hidden bg-white text-navy-950 border border-slate-200 shadow-elevated flex flex-col justify-between aspect-[3/4.8] sm:aspect-[3/4.6] group hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-blue/50 transition-all duration-500 h-full"
                >
                  {isInverted ? (
                    <>
                      {/* Top: Editorial Text Block */}
                      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                        <div className="space-y-2">
                          <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block">
                            {mat.category}
                          </span>
                          <h3 className="text-lg sm:text-xl text-slate-800 font-normal leading-[1.38] tracking-normal">
                            {mat.headline}
                          </h3>
                        </div>
                        <div className="pt-6 flex items-center justify-between border-t border-slate-100 mt-auto">
                          <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                            {mat.tag}
                          </span>
                          <BrandEmblem />
                        </div>
                      </div>

                      {/* Bottom: Full-Bleed Imagery */}
                      <div className="relative h-[56%] overflow-hidden bg-navy-950">
                        <img
                          src={mat.image}
                          alt={mat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Top: Full-Bleed Imagery */}
                      <div className="relative h-[56%] overflow-hidden bg-navy-950">
                        <img
                          src={mat.image}
                          alt={mat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>

                      {/* Bottom: Editorial Text Block */}
                      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                        <div className="space-y-2">
                          <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block">
                            {mat.category}
                          </span>
                          <h3 className="text-lg sm:text-xl text-slate-800 font-normal leading-[1.38] tracking-normal">
                            {mat.headline}
                          </h3>
                        </div>
                        <div className="pt-6 flex items-center justify-between border-t border-slate-100 mt-auto">
                          <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                            {mat.tag}
                          </span>
                          <BrandEmblem />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
