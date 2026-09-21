import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Compass,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ChevronDown,
  CheckCircle2,
  Building2,
  Calculator,
  HardHat,
  Key,
  Layers,
  HelpCircle,
  Sparkles,
  Home
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { projectsData } from '@/data/projects';
import { faqsData } from '@/data/faqs';
import { processStages } from '@/data/process';
import MaterialStrip from '@/components/sections/MaterialStrip';
import ValuationProcessModule from '@/components/sections/ValuationProcessModule';
import PracticeAreasCarousel from '@/components/sections/PracticeAreasCarousel';
import FaqAccordion from '@/components/faq/FaqAccordion';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 6);
  const homeFaqs = faqsData.filter((f) => f.featuredOnHome);

  return (
    <div className="flex flex-col">
      {/* ============================================================
          4.2 HERO SECTION (Full Screen)
      ============================================================ */}
      <section className="relative min-h-screen h-[100dvh] flex flex-col justify-end pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Full Clarity Real-World Architectural Background Image - Company Original House */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/company/real-project-62.jpeg"
            alt="My Space Real-World Contemporary House Architecture & Turnkey Execution"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-black/20" />
        </div>

        {/* Main Content Area - Clean Human Craft Architectural Hero Typography */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-8 sm:mb-12">
          <ScrollReveal direction="up" delay={0.1} duration={0.8} className="max-w-3xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono font-medium tracking-wider uppercase">
                <span>Turnkey Construction & Valuation • Bengaluru</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Crafting spaces designed for generations.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl">
                From foundation excavation and structural engineering to bespoke interiors, we build custom homes and commercial spaces with complete transparency.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#about-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 active:scale-[0.98] transition-transform duration-100 ease-out shadow-lg"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold backdrop-blur-md border border-white/30 active:scale-[0.98] transition-transform duration-100 ease-out"
                >
                  <span>Get Project Estimate</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Centered Swipe / Scroll Down Arrow Key */}
        <a
          href="#about-section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/80 hover:text-white group transition-all"
          aria-label="Scroll down to About Us section"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono text-white/70 group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-black/60 group-hover:scale-110 active:scale-95 transition-all animate-bounce">
            <ChevronDown className="w-5 h-5 text-white" />
          </div>
        </a>

        {/* Right-Edge Floating Contact Action Bar (Matching Reference) */}
        <aside className="fixed right-4 bottom-24 z-40 hidden md:flex flex-col gap-2.5" aria-label="Quick Contact Actions">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
            className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-steel hover:scale-110 active:scale-95 transition-all"
            title={`Call: ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-steel hover:scale-110 active:scale-95 transition-all"
            title={`Email: ${siteConfig.contact.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-steel hover:scale-110 active:scale-95 transition-all"
            title="WhatsApp My Space"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </aside>
      </section>

      {/* ============================================================
          ABOUT US SECTION (Left Side Text & Right Side 4-Image Grid)
      ============================================================ */}
      <section id="about-section" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Story & Philosophy */}
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
                Design, engineering, and construction under one roof.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Building in Bengaluru shouldn't feel stressful or complicated. At My Space, we bring architectural planning, solid civil construction, custom interior design, and certified property valuation together under one accountable team.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                You never have to juggle between architects who don't visit the site and contractors who cut corners. We give you transparent pricing, high-grade materials, and regular milestone updates from day one.
              </p>

              {/* Core Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Turnkey House Construction</span>
                </div>

                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Bespoke Modular Interiors</span>
                </div>

                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>3D Elevation & Floor Plans</span>
                </div>

                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Certified Property Valuation</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-semibold hover:bg-navy-950 transition-all shadow-md group"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column: Asymmetric 4-Image Staggered Architectural Grid */}
            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5 items-start">
              {/* Left Grid Column (Offset downwards: Vertical Tower on Top, Horizontal Space on Bottom) */}
              <div className="flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-12">
                {/* 1. Tower / High-Rise Architecture (Portrait) */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100 aspect-[3/4] group">
                  <img
                    src="/images/company/real-project-83.jpeg"
                    alt="Turnkey Architectural Construction Bangalore"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 2. Interior / Spatial Plan (Horizontal) */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 bg-slate-100 aspect-[4/3] group">
                  <img
                    src="/images/company/showroom-3.jpeg"
                    alt="Bespoke Interiors & Millwork Bangalore"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Grid Column (Elevated upwards: Horizontal on Top, Vertical on Bottom) */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {/* 3. Modern Living Room (Horizontal) */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 bg-slate-100 aspect-[4/3] group">
                  <img
                    src="/images/company/real-project-54.jpeg"
                    alt="Precision Engineering & Fitouts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 4. Contemporary Multi-Story Residential Villa (Portrait) */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100 aspect-[3/4] group">
                  <img
                    src="/images/company/real-project-62.jpeg"
                    alt="Bespoke Residential Villa Construction & Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ============================================================
          4.4 SITUATION-LED SERVICE SELECTOR (CAROUSEL)
      ============================================================ */}
      <PracticeAreasCarousel />

      {/* ============================================================
          CONSULTATION & TECHNICAL BOQ WORKSHOP (AUTHENTIC ARCHITECTURAL CTA)
      ============================================================ */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-navy-950 text-white border-y border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
            alt="Architectural Blueprint and Engineering Consultation"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/65" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content: Authentic Technical Pitch */}
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Home className="w-4 h-4 text-sky-400" />
                <span>Free Initial Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Have a plot or floor plan you want to discuss?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                Schedule a consultation at our studio or on your site. We review your plot dimensions, check BBMP setback feasibility, and prepare an itemized Bill of Quantities (BOQ) with specified material grades before you commit to construction.
              </p>
            </ScrollReveal>

            {/* Right Content: Direct Engineering Channel Box */}
            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.07] backdrop-blur-xl border border-white/15 shadow-2xl space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Connect With Our Engineering Team
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Direct discussion with practicing structural engineers and architects.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="#enquiry"
                    className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-sky-500 transition-all shadow-md group"
                  >
                    <span>Book Site & Scope Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white text-xs font-semibold transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{siteConfig.contact.phoneDisplay}</span>
                    </a>

                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white text-xs font-semibold transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>IS:456 Code Governance</span>
                  <span>BBMP Bylaw Review</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ============================================================
          4.5 THE MY SPACE CERTAINTY ADVANTAGE (POSITIVE REFRAMING)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <Home className="w-4 h-4 text-brand-blue" />
              <span>Why Homeowners Trust Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
              Clear pricing, honest advice, and zero surprise costs.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              From initial soil testing to final key handover, we replace traditional construction guesswork with fixed itemized pricing, transparent contracts, and dependable engineering.
            </p>
          </ScrollReveal>

          {/* Brickwork Masonry Bond Layout (3 Bricks Top Row + 2 Bricks Bottom Row) */}
          <div className="space-y-3.5 sm:space-y-4">
            {/* Top Row: 3 Bricks */}
            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              {/* Brick 1: Scope Precision */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-7 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group flex flex-col justify-between h-full">
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        01 • Fixed Pricing
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        01
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Itemized Scope & Fixed Budget
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Every material brand, specification, and finish grade is clearly listed upfront with zero hidden costs or midway escalations.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Brick 2: Single-Point Team */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-7 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group flex flex-col justify-between h-full">
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        02 • One Team
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        02
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Single Accountable Team
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Architects, structural engineers, electricians, and interior carpenters work together under one project lead to ensure zero delays.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Brick 3: 3D Visualization */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-7 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group flex flex-col justify-between h-full">
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        03 • 3D Previews
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        03
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Photorealistic 3D Previews
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Walk through 3D exterior elevations and furnished spatial layouts to visualize and refine your home before breaking ground.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Bottom Row: 2 Wider Bricks */}
            <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Brick 4: Structural Rigor */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-8 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group h-full">
                  <div className="relative z-10 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        04 • Quality Standards
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        04
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Strict Structural Quality Control
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Soil-matched foundation footings, lab-tested concrete mix strength, and certified TMT steel verification at every floor casting.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Brick 5: Accredited Valuation */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-8 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group h-full">
                  <div className="relative z-10 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        05 • Certified Valuation
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        05
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Certified Valuation & Legal Clarity
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Government-registered property valuation, thorough title verification, and institutional reports recognized by all major banks.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ============================================================
          4.6 SOLUTION PROCESS (5-STAGE ASCENDING ARCHITECTURAL STAIRCASE)
      ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading matching previous sections style */}
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>How We Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15] max-w-4xl">
                Step-by-step clarity from <br className="hidden sm:inline" />
                blueprint to handover.
              </h2>
            </div>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-brand-blue uppercase tracking-wider transition-colors shrink-0 group"
            >
              <span>Explore Complete Process</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          {/* 5 Stages Ascending Architectural Staircase */}
          <div className="relative pt-4 pb-2">
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 items-end">
              {processStages.map((stage, idx) => {
                // Harmonious Ascending Staircase Heights (30px step-up per level on desktop)
                const stepHeights = [
                  "lg:h-[310px]",
                  "lg:h-[340px]",
                  "lg:h-[370px]",
                  "lg:h-[400px]",
                  "lg:h-[430px]"
                ];
                const stepHeight = stepHeights[idx] || "lg:h-[430px]";

                const stepElevations = [
                  "Riser 01 • EL +0.00m",
                  "Riser 02 • EL +0.75m",
                  "Riser 03 • EL +1.50m",
                  "Riser 04 • EL +2.25m",
                  "Summit 05 • EL +3.00m"
                ];
                const stepElevation = stepElevations[idx] || `Step 0${idx + 1}`;

                const stepLevels = [
                  "Ground Zero",
                  "Blueprint & BOQ",
                  "3D Elevation",
                  "Civil Execution",
                  "Key Handover"
                ];
                const stepLevel = stepLevels[idx] || `Stage 0${idx + 1}`;

                // Deliverable items to fill vertical space naturally
                const deliverablesToShow = idx < 2 ? 2 : 3;

                return (
                  <StaggerItem key={stage.number} className="w-full flex flex-col justify-end">
                    <div
                      className={`group relative rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between border w-full min-h-[260px] ${stepHeight} bg-white text-navy-950 border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-xl hover:border-brand-blue/50`}
                    >
                      {/* Top Step Header */}
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shadow-sm bg-navy-950 text-white group-hover:bg-brand-blue transition-colors">
                            0{stage.number}
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider block text-brand-blue">
                              {stepElevation}
                            </span>
                            <span className="text-[9px] font-mono block text-slate-400">
                              {stepLevel}
                            </span>
                          </div>
                        </div>

                        {/* Step Title & Tagline */}
                        <div className="mt-3 space-y-1">
                          <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                            {stage.title}
                          </h3>
                          <p className="text-xs font-normal leading-relaxed text-slate-600">
                            {stage.tagline}
                          </p>
                        </div>

                        {/* Checkpoint Deliverables List (Fills height naturally without empty void) */}
                        <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                            Milestone Checks:
                          </span>
                          <ul className="space-y-1">
                            {stage.keyOutputs.slice(0, deliverablesToShow).map((item, oIdx) => (
                              <li key={oIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-snug font-sans">
                                <span className="text-brand-blue font-bold shrink-0">✓</span>
                                <span className="line-clamp-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Step Deliverable Pill */}
                      <div className="pt-3 mt-auto">
                        <div className="text-[11px] font-medium rounded-lg p-2 flex items-center justify-between border bg-slate-50 border-slate-200/80 text-slate-700 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-brand-blue transition-colors">
                          <span className="truncate">{stage.keyOutputs[0] || 'Milestone sign-off'}</span>
                          <ArrowRight className="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Architectural Staircase Plinth Datum Baseline (Desktop) */}
            <div className="hidden lg:flex items-center justify-between pt-4 mt-2 border-t-2 border-slate-300/80 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span>PLINTH DATUM: 0.00m (Ground Level)</span>
              </div>
              <div className="flex items-center gap-4">
                <span>ASCENDING PROGRESSION • 5 STAGES</span>
                <span>→</span>
                <span className="text-navy-950 font-bold">FINAL SUMMIT: OCCUPANCY READY</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Button */}
          <ScrollReveal direction="up" delay={0.2} className="pt-6 sm:pt-8 flex justify-start">
            <Link
              href="/process"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-navy-950 text-white hover:bg-brand-blue active:scale-[0.98] transition-all duration-150 shadow-md group"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Explore Complete 5-Stage Roadmap & Deliverables
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          4.8 OUR PORTFOLIO
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Our Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
                Explore homes and spaces <br className="hidden sm:inline" />
                we’ve built in Bengaluru.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors shadow-sm shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>

          {/* Project Cards Grid (Light White Cards with Reference Layout Design) */}
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group rounded-[32px] sm:rounded-[36px] overflow-hidden bg-white text-navy-950 border border-slate-200 shadow-elevated p-3 sm:p-3.5 flex flex-col justify-between hover:border-brand-blue/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 h-full"
                >
                  {/* Top Image Frame with Top Pill & Bottom Cutout Notch */}
                  <div className="relative aspect-[1/1] sm:aspect-[4/3.8] rounded-[26px] overflow-hidden bg-slate-100">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Centered Category Pill */}
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-md z-10 whitespace-nowrap">
                      {project.category}
                    </div>

                    {/* Bottom Center Inverted Cutout Notch with Fillet Curves (White Version) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end z-10 select-none pointer-events-none">
                      {/* Left Fillet Curve */}
                      <svg className="w-3.5 h-3.5 text-white block shrink-0 -mr-px" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M16 16H0C8.83656 16 16 8.83656 16 0V16Z" />
                      </svg>

                      {/* Center Notch Badge */}
                      <div className="bg-white text-navy-950 px-4 py-1.5 font-mono text-xs font-bold tracking-wider rounded-t-xl border-t border-slate-100 shadow-sm whitespace-nowrap">
                        {project.builtUpArea}
                      </div>

                      {/* Right Fillet Curve */}
                      <svg className="w-3.5 h-3.5 text-white block shrink-0 -ml-px" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M0 16H16C7.16344 16 0 8.83656 0 0V16Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Middle Identity Row: Monogram Icon & Project Details */}
                  <div className="px-2 sm:px-3 pt-4 pb-3 flex items-center gap-3">
                    {/* Monogram Box */}
                    <div className="w-11 h-11 rounded-2xl bg-surface-ice border border-blue-100 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors shadow-sm">
                      <span className="font-bold text-base">M</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base sm:text-lg text-navy-950 truncate group-hover:text-brand-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider truncate">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Bottom 2-Column Metrics Tray */}
                  <div className="p-3.5 rounded-2xl bg-surface-ice border border-slate-200/80 flex items-center justify-between mt-1">
                    <div className="flex-1 pr-3 min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        LOCATION
                      </span>
                      <span className="text-xs font-bold text-navy-950 truncate block mt-0.5">
                        {project.location.split(',')[0]}
                      </span>
                    </div>

                    <div className="w-px h-6 bg-slate-200" />

                    <div className="flex-1 pl-4 text-right min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        STATUS
                      </span>
                      <span className="text-xs font-bold text-brand-blue truncate block mt-0.5">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          4.9 MATERIALS AND DETAILS
      ============================================================ */}
      <MaterialStrip />

      {/* ============================================================
          4.10 PROPERTY VALUATION ROUTE
      ============================================================ */}
      <ValuationProcessModule />

      {/* ============================================================
          4.12 TRUST & ENGINEERING PRINCIPLES (SITE GOVERNANCE)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-sky-400" />
                <span>Construction Quality & Safety</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                How we guarantee structural <br className="hidden sm:inline" />
                strength for your building.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We test every batch of concrete, verify steel grades on-site, and follow strict national engineering standards so your home stays safe and solid forever.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 space-y-1.5 hover:border-sky-500/40 transition-colors">
                  <div className="font-mono text-[11px] text-sky-400 font-semibold tracking-wider">01 • SUBSTRUCTURE</div>
                  <h3 className="font-sans font-bold text-sm text-white">Soil SBC Matched Footings</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Foundation footing depth and raft design precisely calculated to local soil bearing capacity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 space-y-1.5 hover:border-sky-500/40 transition-colors">
                  <div className="font-mono text-[11px] text-sky-400 font-semibold tracking-wider">02 • SUPERSTRUCTURE</div>
                  <h3 className="font-sans font-bold text-sm text-white">IS 456 Cube Testing</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Concrete batch sampling with 7-day and 28-day compression crushing tests and Fe550D steel verification.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 space-y-1.5 hover:border-sky-500/40 transition-colors">
                  <div className="font-mono text-[11px] text-sky-400 font-semibold tracking-wider">03 • MASONRY</div>
                  <h3 className="font-sans font-bold text-sm text-white">Controlled Wet Curing</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rigorous multi-day curing schedules for solid blocks and joint mortar prior to plaster application.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 space-y-1.5 hover:border-sky-500/40 transition-colors">
                  <div className="font-mono text-[11px] text-sky-400 font-semibold tracking-wider">04 • ENVELOPE</div>
                  <h3 className="font-sans font-bold text-sm text-white">Monsoon Waterproofing</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Multi-layer crystalline and elastomeric waterproofing across sunken slabs, sumps, and terrace parapets.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-navy-700 shadow-2xl">
                <img
                  src="/images/company/real-project-01.jpeg"
                  alt="Site engineering supervision in Bangalore"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-950/90 backdrop-blur-md rounded-xl border border-navy-700 text-xs text-slate-300">
                  <strong className="text-white block font-sans font-bold text-sm mb-1">On-Site Structural Inspection</strong>
                  Every column alignment, rebar bend radius, and cover block is verified against structural drawings prior to concrete pouring.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          4.13 FAQ SECTION (2-Column Layout: Left Header, Right Accordion)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-surface-ice border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle & Direct Support Box */}
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Questions & Answers</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
                Got questions? <br />
                We’ve got clear answers.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Everything you need to know about construction costs, approval processes, timelines, and valuation in Bengaluru.
              </p>

              <div className="pt-2">
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-navy-950 uppercase tracking-wider transition-colors group"
                >
                  <span>Explore all {faqsData.length} FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column: FAQ Accordion List */}
            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-7">
              <FaqAccordion
                faqs={homeFaqs}
                limit={6}
                title=""
                className="py-0"
                showViewAll={false}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          4.14 FINAL CTA & LEAD ENQUIRY FORM
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Let's Talk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15]">
                You don't need blueprints ready to talk to us.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tell us about your plot, ideas, or budget. Our team is here to guide you with honest advice, clear options, and zero pressure.
              </p>

              <div className="pt-4 space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-ice border border-slate-200 hover:border-brand-blue text-navy-950 hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Engineering Consultation</span>
                    <span className="text-sm font-bold text-navy-950">{siteConfig.contact.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello My Space, I would like to discuss a property project in Bangalore.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-navy-950 hover:bg-emerald-100/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green-success text-white flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                    W
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 block">WhatsApp Chat</span>
                    <span className="text-sm font-bold text-emerald-950">Quick Message with Site Details</span>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-7">
              <EnquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
