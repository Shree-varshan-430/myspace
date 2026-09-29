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
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import FaqAccordion from '@/components/faq/FaqAccordion';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 6);
  const homeFaqs = faqsData.filter((f) => f.featuredOnHome);

  return (
    <div className="flex flex-col">
      {/* ============================================================
          4.2 HERO SECTION (Architectural Premium Hero)
      ============================================================ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pt-32 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Real-World Architectural Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/company/real-project-62.jpeg"
            alt="My Space Real-World Contemporary House Architecture & Turnkey Execution"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/30" />
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-6 sm:mb-10">
          <ScrollReveal direction="up" delay={0.1} duration={0.8} className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Complete Building Solutions Under One Roof • Bengaluru</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Building Bengaluru With Engineering Rigor & Architectural Vision
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl">
              Turnkey residential construction, 2D/3D custom planning, bespoke modular interiors, and certified valuation with fixed milestone BOQ pricing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-sky-500 active:scale-[0.98] transition-all shadow-lg"
              >
                <span>Start Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold backdrop-blur-md border border-white/30 active:scale-[0.98] transition-all"
              >
                <span>Explore Previous Projects</span>
              </Link>
            </div>

            {/* Quick Contact Chips in Hero */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Direct Engineering Desks:</span>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>{siteConfig.contact.phoneSecondaryDisplay}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            <div className="p-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10">
              <span className="text-xl sm:text-2xl font-bold text-white block">15+ Years</span>
              <span className="text-[11px] text-slate-300">Senior Practice in Bangalore</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10">
              <span className="text-xl sm:text-2xl font-bold text-sky-400 block">100+ Built</span>
              <span className="text-[11px] text-slate-300">Homes, Villas & Fitouts</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10">
              <span className="text-xl sm:text-2xl font-bold text-white block">Fixed BOQ</span>
              <span className="text-[11px] text-slate-300">Zero Midway Cost Escalation</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10">
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 block">IS Standards</span>
              <span className="text-[11px] text-slate-300">Certified Structural Testing</span>
            </div>
          </div>
        </div>

        {/* Right-Edge Floating Contact Action Bar */}
        <aside className="fixed right-4 bottom-24 z-40 hidden md:flex flex-col gap-2.5" aria-label="Quick Contact Actions">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-sky-500 hover:scale-110 active:scale-95 transition-all"
            title={`Call: ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-sky-500 hover:scale-110 active:scale-95 transition-all"
            title={`Email: ${siteConfig.contact.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-brand-green-success text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
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
                <span>Complete Building Solutions Under One Roof</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Turnkey Construction, Architecture & Interiors
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                We design and build modern homes with single-point accountability—integrating architectural planning, structural engineering, and interior execution with transparent pricing.
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
                  <span>Creative 2D/3D Architecture</span>
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
                <span>Construction Consultation & Planning</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                Get Your Architectural Plan & Detailed BOQ Estimate
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                Schedule a consultation to review plot setbacks, spatial layout options, and receive a clear, itemized Bill of Quantities.
              </p>
            </ScrollReveal>

            {/* Right Content: Direct Engineering Channel Box */}
            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.07] backdrop-blur-xl border border-white/15 shadow-2xl space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Consult Directly With Our Engineers & Architects
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Direct discussion with practicing structural engineers and architects—no sales agents or middlemen.
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
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
              Built with precision, transparency & trust
            </h2>
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
                      Itemized BOQ & Zero Hidden Costs
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Line-item specifications with zero midway cost escalations.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Brick 2: Direct Execution */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-7 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group flex flex-col justify-between h-full">
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        02 • Direct Execution
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        02
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      In-House Direct Execution
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Executed directly by our engineers with zero broker markups.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Brick 3: Climate-Responsive Architecture */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-7 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group flex flex-col justify-between h-full">
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        03 • Creative Design
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        03
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Custom 2D/3D Architecture
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Bespoke layouts optimized for natural light and ventilation.
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
                      Structural Quality Control
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Engineered footings, cube testing, and Fe550D steel verification.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Brick 5: Milestone Payments */}
              <StaggerItem>
                <div className="relative overflow-hidden p-6 sm:p-8 rounded-[22px] bg-white border border-slate-300/50 ring-1 ring-slate-900/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] hover:border-slate-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3.5 group h-full">
                  <div className="relative z-10 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                        05 • Milestone Payments
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-surface-ice border border-slate-200/60 text-navy-950 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                        05
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors">
                      Stage Milestone Payments
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Pay only as each milestone is verified on site.
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
      <section className="pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading matching previous sections style */}
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-center justify-between mb-8 lg:mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-2">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Construction Methodology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug max-w-4xl">
                5-Stage House Construction Process
              </h2>
            </div>
            <Link
              href="/about#how-it-works"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-brand-blue uppercase tracking-wider transition-colors shrink-0 group"
            >
              <span>Explore Complete Process</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          {/* 5 Stages Ascending Architectural Staircase (Matching Image 1) */}
          <div className="pt-0 pb-2">
            {/* Desktop True Stepped Staircase with Clean Gaps */}
            <div className="hidden lg:flex items-start w-full gap-3.5 lg:gap-4">
              {processStages.map((stage, idx) => {
                const stepOffsets = [
                  "mt-[80px]",
                  "mt-[60px]",
                  "mt-[40px]",
                  "mt-[20px]",
                  "mt-0"
                ];

                return (
                  <div
                    key={stage.number}
                    className={`flex-1 bg-white rounded-xl border border-slate-200 border-l-[3px] border-l-brand-blue border-t-[3px] border-t-brand-blue p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[210px] flex flex-col justify-between ${stepOffsets[idx]}`}
                  >
                    <div>
                      {/* Top Header Row: STEP 0X + 5 Indicator Dots */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-brand-blue uppercase tracking-wider">
                          STEP 0{idx + 1}
                        </span>
                        <div className="flex items-center gap-1">
                          {[0, 1, 2, 3, 4].map((dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`w-1.5 h-1.5 rounded-full ${
                                dotIdx <= idx ? 'bg-amber-400' : 'bg-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Large Amber Step Number */}
                      <div className="text-4xl sm:text-5xl font-black text-amber-500 tracking-tight my-2 font-mono select-none">
                        0{idx + 1}
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-navy-950 leading-snug">
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                        {stage.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Stepped Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
              {processStages.map((stage, idx) => (
                <div
                  key={stage.number}
                  className="bg-white rounded-xl border border-slate-200 border-l-[3px] border-l-brand-blue border-t-[3px] border-t-brand-blue p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand-blue uppercase tracking-wider">
                      STEP 0{idx + 1}
                    </span>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dotIdx <= idx ? 'bg-amber-400' : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-4xl font-black text-amber-500 tracking-tight my-2 font-mono select-none">
                    0{idx + 1}
                  </div>

                  <h3 className="text-base font-bold text-navy-950 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {stage.tagline}
                  </p>
                </div>
              ))}
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
                <span>Completed Projects</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Completed Homes & Commercial Projects in Bangalore
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
          4.12 CLIENT TESTIMONIALS & GOOGLE REVIEWS
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
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

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Frequently Asked Questions
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Key questions about construction costs, approval processes, timelines, and valuation in Bengaluru.
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
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
