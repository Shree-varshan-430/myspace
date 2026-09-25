'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { constructionProcessStages, valuationProcessStages } from '@/data/process';
import {
  ShieldCheck,
  Building2,
  HardHat,
  Landmark,
  CheckCircle2,
  MapPin,
  Check,
  ArrowRight,
  Home,
  FileCheck2,
  Star,
  Quote
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  const [activeProcess, setActiveProcess] = useState<'construction' | 'valuation'>('construction');

  const currentStages = activeProcess === 'construction' ? constructionProcessStages : valuationProcessStages;

  const testimonials = [
    {
      name: "Ramesh Kumar & Family",
      location: "Singasandra, Bengaluru",
      rating: 5,
      project: "Turnkey Duplex Home Construction",
      review: "Er. Saravanan and the My Space team delivered our duplex house with exceptional engineering quality. Their 3D elevation clarity, on-time project execution, and transparent material budgeting gave us complete peace of mind. Highly recommended for turnkey home construction in Bangalore."
    },
    {
      name: "Senthil Nathan",
      location: "HSR Layout, Bengaluru",
      rating: 5,
      project: "Structural Planning & Property Valuation",
      review: "Very professional and trusted civil engineers. They handled our building plan approvals, structural drawings, and bank valuation reports with great precision. Honest communication and no hidden costs at any stage."
    },
    {
      name: "Karthik Sundaram",
      location: "Electronic City, Bengaluru",
      rating: 5,
      project: "2D/3D Architecture & Modular Interiors",
      review: "We consulted My Space for 2D planning, 3D elevation, and modular interiors. Er. Saravanan provided personalized attention to our space requirements and delivered trendy, functional designs within our budget."
    },
    {
      name: "Venkatesh Prasad",
      location: "Sarjapur Road, Bengaluru",
      rating: 5,
      project: "Residential Villa Construction",
      review: "The structural integrity and quality of construction materials used by My Space are top-notch. Every milestone was completed on schedule with regular site inspection updates. One of the best civil engineering teams in Bangalore."
    }
  ];

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Page Header / Hero Banner - Clean & Simple matching Vaasan Builders */}
      <section className="bg-navy-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              About Us
            </h1>
            <Breadcrumbs
              items={[{ name: 'About Us', href: '/about' }]}
              theme="dark"
            />
          </div>
        </div>
      </section>

      {/* Philosophy & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Our Vision & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Complete Building Solutions Under One Roof
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We specialize in residential construction, 2D architectural planning, 3D elevation design, bespoke interior works, and comprehensive turnkey project execution. From initial site inspection and municipal guideline review to final key handover, we ensure exceptional structural strength, certified quality materials, transparent processes, and timely delivery for every project we undertake.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In conventional construction, clients are often forced to coordinate between independent architects, unaccountable sub-contractors, and separate interior carpenters—leading to miscommunication, budget overruns, and compromised quality. My Space unifies all disciplines under a single accountable engineering leadership with clear stage-by-stage milestones and zero hidden costs.
            </p>

            <div className="p-4 rounded-xl bg-surface-mist border border-blue-100 text-xs text-navy-950 font-medium">
              <strong>Our Commitment:</strong> Tailored 2D/3D planning, IS-standard structural engineering, certified branded materials, and on-time project completion.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 aspect-[4/3]">
              <img
                src="/images/company/showroom-1.jpeg"
                alt="Contemporary architecture in Bangalore"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-navy-950/90 backdrop-blur-md rounded-xl text-white text-xs">
                Bengaluru-Rooted Engineering & Contemporary Architectural Practice
              </div>
            </div>
          </div>
        </div>

        {/* Dual Process Section: Construction & Valuation */}
        <div id="how-it-works" className="scroll-mt-28 space-y-8 pt-6 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              5-Stage Construction & Valuation Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Select below to view our systematic milestone stages for turnkey construction or certified property valuation:
            </p>
          </div>

          {/* Process Switcher Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm gap-2">
              <button
                type="button"
                onClick={() => setActiveProcess('construction')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeProcess === 'construction'
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                <HardHat className="w-4 h-4 text-brand-gold" />
                <span>Construction Process</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveProcess('valuation')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeProcess === 'valuation'
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                <Landmark className="w-4 h-4 text-brand-blue" />
                <span>Valuation Process</span>
              </button>
            </div>
          </div>

          {/* Concise 5-Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {currentStages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-navy-950 text-white flex items-center justify-center font-mono font-bold text-xs">
                      {stage.number}
                    </span>
                    <span className="text-[10px] font-mono text-brand-blue font-bold uppercase">
                      Stage {stage.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-navy-950 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <Check className="w-3 h-3 shrink-0" />
                    <span className="truncate">{stage.keyOutputs[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-navy-950 transition-colors"
            >
              <span>Explore Detailed Process & Checklist Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Client Testimonials Section (Inspired by Vaasan Builders & Google Reviews) */}
        <div className="space-y-8 pt-6 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider mb-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.9 / 5 Rating on Google Reviews</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Real feedback from homeowners and property owners who trusted MY SPACE Civil Engineers & Valuers for their construction and design projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-200 group-hover:text-brand-blue/30 transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-navy-950 font-sans">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      {item.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-surface-ice text-brand-blue font-mono text-[10px] font-bold tracking-wide">
                    {item.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Project Execution Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                Completed Portfolio
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                Completed Projects Across Bengaluru
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
            >
              <span>View Full Gallery & Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/showroom-1.jpeg"
                alt="Commercial Showroom Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Commercial Complex
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-83.jpeg"
                alt="Multi-Storey Villa Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Villa Architecture
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-54.jpeg"
                alt="Modular Kitchen Execution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Modular Kitchen
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/showroom-3.jpeg"
                alt="Commercial Facade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Commercial Facade
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-18.jpeg"
                alt="RCC Structural Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Civil Superstructure
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 group shadow-xs">
              <img
                src="/images/company/real-project-69.jpeg"
                alt="Turnkey Living Space"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-medium truncate">
                Living Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Local Bangalore Context & Office */}
        <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 border border-navy-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="lg:col-span-7 space-y-3 relative z-10">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Bangalore Building Expertise
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Bangalore Bylaws, Approvals & Site Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From soil conditions and water table analysis in Sarjapur, Whitefield, and North Bengaluru to BBMP building bylaws, setback compliance, and BESCOM/BWSSB utility connections, our team delivers seamless execution.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-gold-light font-mono">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>Office: {siteConfig.address.street}, {siteConfig.address.city}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10 bg-navy-900 border border-navy-700 p-5 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-white">Consult Our Civil Engineers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedule a visit to our studio or request an on-site feasibility inspection across Greater Bengaluru.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
            >
              <span>Call: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Lead Form CTA */}
        <section className="pt-8 border-t border-slate-200">
          <EnquiryForm
            title="Free Construction Consultation & Valuation Assessment"
            subtitle="Share what you are planning in Bengaluru, and our civil engineering team will provide an estimate."
          />
        </section>
      </section>
    </div>
  );
}
