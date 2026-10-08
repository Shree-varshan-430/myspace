'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import {
  constructionPackagesData,
  interiorPackagesData,
  constructionCostFactors,
  packagesFaqs
} from '@/data/packages';
import { siteConfig } from '@/data/siteConfig';
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Home,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  Ruler,
  Award,
  Paintbrush,
  Hammer,
  Clock,
  ChevronDown,
  ChevronUp,
  Info,
  PhoneCall,
  Download,
  Phone,
  MessageSquare,
  MapPin,
  Mail
} from 'lucide-react';

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<'construction' | 'interior'>('construction');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [specSubTab, setSpecSubTab] = useState<'civil' | 'flooring' | 'doors' | 'painting' | 'kitchen' | 'electrical'>('civil');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Packages & Pricing', href: '/packages' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 text-sky-300 text-xs font-semibold border border-brand-blue/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Transparent Pricing • Zero Hidden Costs • Fixed Itemized BOQ</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Construction & Interior Design Packages in Bangalore
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
              Compare transparent per-sq.ft residential construction packages and turnkey interior design solutions tailored for Bangalore homes, villas, and commercial spaces.
            </p>

            {/* Package Switcher Tabs */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('construction')}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === 'construction'
                    ? 'bg-white text-navy-950 shadow-lg scale-102'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                }`}
              >
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span>House Construction Packages</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('interior')}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === 'interior'
                    ? 'bg-white text-navy-950 shadow-lg scale-102'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                }`}
              >
                <Paintbrush className="w-4 h-4 text-amber-500" />
                <span>Interior Design Packages</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 1: CONSTRUCTION PACKAGES
      ============================================================ */}
      {activeTab === 'construction' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Bengaluru Residential Construction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Build Your Home with Fixed Price & Zero Surprises
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our residential construction packages start from <strong className="text-navy-950">₹1,950/sq.ft</strong> with full scope clarity, brand guarantees, and engineering oversight before you sign anything.
            </p>
          </div>

          {/* 3 Tier Construction Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {constructionPackagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-navy-950 text-white border-2 border-brand-blue shadow-[0_20px_50px_rgba(15,23,42,0.35)] -translate-y-1'
                    : 'bg-white text-navy-950 border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold uppercase tracking-wider shadow-md text-center whitespace-nowrap flex items-center justify-center">
                    Most Popular Choice for Homeowners
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-navy-950'}`}>
                        {pkg.name}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          pkg.popular
                            ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                            : pkg.badgeColor
                        }`}
                      >
                        {pkg.tier.toUpperCase()}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-snug min-h-[36px] ${
                        pkg.popular ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div
                    className={`p-4 rounded-2xl border ${
                      pkg.popular
                        ? 'bg-white border-white/90 text-navy-950 shadow-sm'
                        : 'bg-surface-ice border-slate-200/80 text-navy-950'
                    }`}
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
                        {pkg.rate}
                      </span>
                      <span className="text-xs font-semibold text-slate-600">
                        {pkg.rateUnit}
                      </span>
                    </div>
                    <span className="text-[11px] mt-1 block text-slate-600 font-medium">
                      Built-up area pricing • Includes material + skilled labour + supervision
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block ${
                        pkg.popular ? 'text-slate-200' : 'text-navy-950'
                      }`}
                    >
                      Key Inclusions in this Package:
                    </span>
                    <ul className="space-y-2">
                      {pkg.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-xs leading-snug ${
                            pkg.popular ? 'text-slate-200' : 'text-slate-700'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              pkg.popular ? 'text-emerald-400' : 'text-emerald-600'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`pt-8 mt-8 border-t ${
                    pkg.popular ? 'border-navy-800' : 'border-slate-100'
                  }`}
                >
                  <Link
                    href={`/contact?intent=start-project&package=${pkg.id}`}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-brand-blue text-white hover:bg-sky-500 shadow-md'
                        : 'bg-navy-950 text-white hover:bg-brand-blue shadow-sm'
                    }`}
                  >
                    <span>Get Detailed Quote for {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specifications Tabbed Deep Dive */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                  Detailed Technical Specifications
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  Comprehensive Material Comparison by Component
                </h3>
              </div>

              {/* Sub-Tabs for Component View */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'civil', label: 'Civil Work' },
                  { id: 'flooring', label: 'Flooring' },
                  { id: 'doors', label: 'Doors & Windows' },
                  { id: 'painting', label: 'Painting' },
                  { id: 'kitchen', label: 'Kitchen & Plumbing' },
                  { id: 'electrical', label: 'Electrical' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSpecSubTab(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      specSubTab === tab.id
                        ? 'bg-navy-950 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-Tab Content Comparison */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-navy-950 font-bold">
                    <th className="p-3.5 rounded-l-xl w-1/4">Specification Item</th>
                    <th className="p-3.5 w-1/4">Basic Package (₹1,950)</th>
                    <th className="p-3.5 w-1/4 bg-blue-50/60 text-brand-blue">Premium Package (₹2,150)</th>
                    <th className="p-3.5 w-1/4 rounded-r-xl">Luxury Package (₹2,600)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {specSubTab === 'civil' && (
                    <>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Steel Rebar Grade</td>
                        <td className="p-3.5">{constructionPackagesData[0].civilWork.steel}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].civilWork.steel}</td>
                        <td className="p-3.5">{constructionPackagesData[2].civilWork.steel}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Cement Brands & Grade</td>
                        <td className="p-3.5">{constructionPackagesData[0].civilWork.cement}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].civilWork.cement}</td>
                        <td className="p-3.5">{constructionPackagesData[2].civilWork.cement}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Masonry / Blockwork</td>
                        <td className="p-3.5">{constructionPackagesData[0].civilWork.masonry}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].civilWork.masonry}</td>
                        <td className="p-3.5">{constructionPackagesData[2].civilWork.masonry}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Concrete Mix & RCC Design</td>
                        <td className="p-3.5">{constructionPackagesData[0].civilWork.rcc}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].civilWork.rcc}</td>
                        <td className="p-3.5">{constructionPackagesData[2].civilWork.rcc}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Curing Cycle Protocol</td>
                        <td className="p-3.5">{constructionPackagesData[0].civilWork.curing}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].civilWork.curing}</td>
                        <td className="p-3.5">{constructionPackagesData[2].civilWork.curing}</td>
                      </tr>
                    </>
                  )}

                  {specSubTab === 'flooring' && (
                    <>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Living & Dining Flooring</td>
                        <td className="p-3.5">{constructionPackagesData[0].flooring.livingDining}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].flooring.livingDining}</td>
                        <td className="p-3.5">{constructionPackagesData[2].flooring.livingDining}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Bedroom Flooring</td>
                        <td className="p-3.5">{constructionPackagesData[0].flooring.bedrooms}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].flooring.bedrooms}</td>
                        <td className="p-3.5">{constructionPackagesData[2].flooring.bedrooms}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Kitchen Flooring & Counter</td>
                        <td className="p-3.5">{constructionPackagesData[0].flooring.kitchen}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].flooring.kitchen}</td>
                        <td className="p-3.5">{constructionPackagesData[2].flooring.kitchen}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Balcony & Utility Tiles</td>
                        <td className="p-3.5">{constructionPackagesData[0].flooring.balconyUtility}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].flooring.balconyUtility}</td>
                        <td className="p-3.5">{constructionPackagesData[2].flooring.balconyUtility}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Staircase Steps & Railings</td>
                        <td className="p-3.5">{constructionPackagesData[0].flooring.staircase}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].flooring.staircase}</td>
                        <td className="p-3.5">{constructionPackagesData[2].flooring.staircase}</td>
                      </tr>
                    </>
                  )}

                  {specSubTab === 'doors' && (
                    <>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Main Entrance Door</td>
                        <td className="p-3.5">{constructionPackagesData[0].doorsWindows.mainDoor}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].doorsWindows.mainDoor}</td>
                        <td className="p-3.5">{constructionPackagesData[2].doorsWindows.mainDoor}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Internal Room Doors</td>
                        <td className="p-3.5">{constructionPackagesData[0].doorsWindows.internalDoors}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].doorsWindows.internalDoors}</td>
                        <td className="p-3.5">{constructionPackagesData[2].doorsWindows.internalDoors}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Bathroom Doors</td>
                        <td className="p-3.5">{constructionPackagesData[0].doorsWindows.bathroomDoors}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].doorsWindows.bathroomDoors}</td>
                        <td className="p-3.5">{constructionPackagesData[2].doorsWindows.bathroomDoors}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Windows & Glazing</td>
                        <td className="p-3.5">{constructionPackagesData[0].doorsWindows.windows}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].doorsWindows.windows}</td>
                        <td className="p-3.5">{constructionPackagesData[2].doorsWindows.windows}</td>
                      </tr>
                    </>
                  )}

                  {specSubTab === 'painting' && (
                    <>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Interior Wall Painting</td>
                        <td className="p-3.5">{constructionPackagesData[0].painting.interior}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].painting.interior}</td>
                        <td className="p-3.5">{constructionPackagesData[2].painting.interior}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Exterior Façade Painting</td>
                        <td className="p-3.5">{constructionPackagesData[0].painting.exterior}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].painting.exterior}</td>
                        <td className="p-3.5">{constructionPackagesData[2].painting.exterior}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Ceiling & False Ceiling</td>
                        <td className="p-3.5">{constructionPackagesData[0].painting.ceiling}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].painting.ceiling}</td>
                        <td className="p-3.5">{constructionPackagesData[2].painting.ceiling}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Wood & Metal Grills</td>
                        <td className="p-3.5">{constructionPackagesData[0].painting.metalWood}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].painting.metalWood}</td>
                        <td className="p-3.5">{constructionPackagesData[2].painting.metalWood}</td>
                      </tr>
                    </>
                  )}

                  {specSubTab === 'kitchen' && (
                    <>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Kitchen Countertop</td>
                        <td className="p-3.5">{constructionPackagesData[0].kitchenPlumbing.countertop}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].kitchenPlumbing.countertop}</td>
                        <td className="p-3.5">{constructionPackagesData[2].kitchenPlumbing.countertop}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Kitchen Sink</td>
                        <td className="p-3.5">{constructionPackagesData[0].kitchenPlumbing.sink}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].kitchenPlumbing.sink}</td>
                        <td className="p-3.5">{constructionPackagesData[2].kitchenPlumbing.sink}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">CP Fittings & Taps</td>
                        <td className="p-3.5">{constructionPackagesData[0].kitchenPlumbing.cpFittings}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].kitchenPlumbing.cpFittings}</td>
                        <td className="p-3.5">{constructionPackagesData[2].kitchenPlumbing.cpFittings}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Sanitaryware Commodes</td>
                        <td className="p-3.5">{constructionPackagesData[0].kitchenPlumbing.sanitaryware}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].kitchenPlumbing.sanitaryware}</td>
                        <td className="p-3.5">{constructionPackagesData[2].kitchenPlumbing.sanitaryware}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Plumbing Piping Network</td>
                        <td className="p-3.5">{constructionPackagesData[0].kitchenPlumbing.pipes}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].kitchenPlumbing.pipes}</td>
                        <td className="p-3.5">{constructionPackagesData[2].kitchenPlumbing.pipes}</td>
                      </tr>
                    </>
                  )}

                  {specSubTab === 'electrical' && (
                    <>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Electrical Copper Cabling</td>
                        <td className="p-3.5">{constructionPackagesData[0].electrical.wiring}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].electrical.wiring}</td>
                        <td className="p-3.5">{constructionPackagesData[2].electrical.wiring}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Switches & Sockets</td>
                        <td className="p-3.5">{constructionPackagesData[0].electrical.switches}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].electrical.switches}</td>
                        <td className="p-3.5">{constructionPackagesData[2].electrical.switches}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Power Distribution & MCBs</td>
                        <td className="p-3.5">{constructionPackagesData[0].electrical.distribution}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].electrical.distribution}</td>
                        <td className="p-3.5">{constructionPackagesData[2].electrical.distribution}</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-navy-950">Provisions & Smart Home</td>
                        <td className="p-3.5">{constructionPackagesData[0].electrical.provisions}</td>
                        <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">{constructionPackagesData[1].electrical.provisions}</td>
                        <td className="p-3.5">{constructionPackagesData[2].electrical.provisions}</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Factors Impacting Construction Cost in Bangalore */}
          <div className="bg-gradient-to-br from-navy-950 to-[#132238] rounded-3xl p-8 sm:p-12 text-white space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Transparency Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                6 Key Factors That Influence House Construction Cost in Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Understanding construction cost per square feet in Bangalore helps avoid budget surprises. Material quality, structure, location, and specifications all directly impact your final construction pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructionCostFactors.map((factor, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/10 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue text-sm font-bold">
                    <span className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs">
                      {idx + 1}
                    </span>
                    <h4 className="text-white font-semibold text-sm">{factor.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-8">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          SECTION 2: INTERIOR DESIGN PACKAGES
      ============================================================ */}
      {activeTab === 'interior' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
              Bengaluru Interior Design Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Transparent Interior Design Packages for Every Home
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tailored for Bangalore apartments, independent duplexes, and luxury villas with guaranteed timber certifications, premium soft-close hardware, and factory modular precision.
            </p>
          </div>

          {/* 3 Tier Interior Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {interiorPackagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.tier === 'Premium'
                    ? 'bg-navy-950 text-white border-2 border-brand-blue shadow-[0_20px_50px_rgba(15,23,42,0.35)] -translate-y-1'
                    : 'bg-white text-navy-950 border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.tier === 'Premium' && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold uppercase tracking-wider shadow-md text-center whitespace-nowrap">
                    The Sweet Spot • Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-bold ${pkg.tier === 'Premium' ? 'text-white' : 'text-navy-950'}`}>
                        {pkg.name}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          pkg.tier === 'Premium'
                            ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {pkg.tier.toUpperCase()}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-snug min-h-[36px] ${
                        pkg.tier === 'Premium' ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Room-wise Estimated Budgets */}
                  <div
                    className={`p-4 rounded-2xl border ${
                      pkg.tier === 'Premium'
                        ? 'bg-white border-white/90 text-navy-950 shadow-sm'
                        : 'bg-surface-ice border-slate-200/80 text-navy-950'
                    }`}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Estimated Turnkey Budget by Home Size:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                        <span className="text-[10px] text-slate-500 font-bold block">1 BHK</span>
                        <span className="text-xs font-extrabold text-navy-950">{pkg.roomEstimates.oneBhk}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-blue-50/80 border border-blue-200/60">
                        <span className="text-[10px] text-brand-blue font-bold block">2 BHK</span>
                        <span className="text-xs font-extrabold text-brand-blue">{pkg.roomEstimates.twoBhk}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                        <span className="text-[10px] text-slate-500 font-bold block">3 BHK</span>
                        <span className="text-xs font-extrabold text-navy-950">{pkg.roomEstimates.threeBhk}</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Specifications */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-100/20">
                      <span className={pkg.tier === 'Premium' ? 'text-slate-400' : 'text-slate-500'}>Core Plywood:</span>
                      <span className="font-semibold text-right">{pkg.woodGrade}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100/20">
                      <span className={pkg.tier === 'Premium' ? 'text-slate-400' : 'text-slate-500'}>Hardware Brand:</span>
                      <span className="font-semibold text-right">{pkg.hardware}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100/20">
                      <span className={pkg.tier === 'Premium' ? 'text-slate-400' : 'text-slate-500'}>Finish Surface:</span>
                      <span className="font-semibold text-right">{pkg.finishType}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100/20">
                      <span className={pkg.tier === 'Premium' ? 'text-slate-400' : 'text-slate-500'}>Warranty Cover:</span>
                      <span className="font-semibold text-emerald-500 text-right">{pkg.warranty}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-3 pt-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block ${
                        pkg.tier === 'Premium' ? 'text-slate-200' : 'text-navy-950'
                      }`}
                    >
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {pkg.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-xs leading-snug ${
                            pkg.tier === 'Premium' ? 'text-slate-200' : 'text-slate-700'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              pkg.tier === 'Premium' ? 'text-emerald-400' : 'text-emerald-600'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`pt-8 mt-8 border-t ${
                    pkg.tier === 'Premium' ? 'border-navy-800' : 'border-slate-100'
                  }`}
                >
                  <Link
                    href={`/contact?intent=interior-consultation&package=${pkg.id}`}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                      pkg.tier === 'Premium'
                        ? 'bg-brand-blue text-white hover:bg-sky-500 shadow-md'
                        : 'bg-navy-950 text-white hover:bg-brand-blue shadow-sm'
                    }`}
                  >
                    <span>Request Free 3D Design for {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Per-Sq-Ft Rate Breakdown Table (Carpenter vs Factory Modular) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                Itemized Unit Pricing
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                Per-Square-Foot Rates for Modular vs. On-Site Carpenter Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Below are the transparent per-sq.ft rates for custom wardrobes, modular kitchens, and TV units across all 3 tiers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-navy-950 font-bold">
                    <th className="p-3.5 rounded-l-xl">Interior Unit Type</th>
                    <th className="p-3.5">Basic (Carpenter / Modular)</th>
                    <th className="p-3.5 bg-blue-50/60 text-brand-blue">Premium (Carpenter / Modular)</th>
                    <th className="p-3.5 rounded-r-xl">Luxury (Carpenter / Modular)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Floor-to-Ceiling Wardrobes</td>
                    <td className="p-3.5">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[0].sqFtRates.wardrobeCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[0].sqFtRates.wardrobeModular}</span> (Mod.)
                    </td>
                    <td className="p-3.5 bg-blue-50/20">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[1].sqFtRates.wardrobeCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[1].sqFtRates.wardrobeModular}</span> (Mod.)
                    </td>
                    <td className="p-3.5">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[2].sqFtRates.wardrobeCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[2].sqFtRates.wardrobeModular}</span> (Mod.)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Modular Kitchen (Base + Wall)</td>
                    <td className="p-3.5">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[0].sqFtRates.kitchenCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[0].sqFtRates.kitchenModular}</span> (Mod.)
                    </td>
                    <td className="p-3.5 bg-blue-50/20">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[1].sqFtRates.kitchenCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[1].sqFtRates.kitchenModular}</span> (Mod.)
                    </td>
                    <td className="p-3.5">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[2].sqFtRates.kitchenCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[2].sqFtRates.kitchenModular}</span> (Mod.)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Designer TV Entertainment Unit</td>
                    <td className="p-3.5">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[0].sqFtRates.tvUnitCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[0].sqFtRates.tvUnitModular}</span> (Mod.)
                    </td>
                    <td className="p-3.5 bg-blue-50/20">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[1].sqFtRates.tvUnitCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[1].sqFtRates.tvUnitModular}</span> (Mod.)
                    </td>
                    <td className="p-3.5">
                      <span className="font-semibold text-navy-950">{interiorPackagesData[2].sqFtRates.tvUnitCarpenter}</span> (Carp.) / <span className="text-brand-blue font-bold">{interiorPackagesData[2].sqFtRates.tvUnitModular}</span> (Mod.)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          SECTION 3: ENGINEERING & PROCESS GUARANTEE
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
              Engineering Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Why Homeowners Choose My Space
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
              <h4 className="font-bold text-sm text-white">430+ QA Checkpoints</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated site engineer assigned with daily digital photo logs and structural laboratory testing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <FileSpreadsheet className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-sm text-white">Guaranteed Fixed BOQ</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero price escalations once approved. Every single bag of cement and fitting brand is locked.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <Layers className="w-6 h-6 text-brand-blue" />
              <h4 className="font-bold text-sm text-white">Milestone Stage Payments</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Escrow-style billing released strictly after you inspect and sign off on each structural stage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <Award className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-sm text-white">10-Year Written Warranty</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive 10-year structural warranty pack and as-built MEP conduit blueprints at handover.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Got Questions?
            </span>
            <h3 className="text-2xl font-bold text-navy-950">
              Frequently Asked Questions About Packages & Pricing
            </h3>
          </div>

          <div className="divide-y divide-slate-100 max-w-3xl mx-auto">
            {packagesFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-navy-950 hover:text-brand-blue transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-blue shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pr-6">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Reach Card */}
        <section className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden mt-8">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                Direct Engineering Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Get Your Itemized Package Estimate
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Connect directly with our civil engineers to review your plot dimensions, compare specifications, and lock your per-sq.ft BOQ rate with zero midway escalation.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-bold hover:bg-sky-500 transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3.5 text-xs text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Office Location:</strong>
                  <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.postalCode}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <strong className="text-white block font-sans">Working Hours:</strong>
                  <span>Mon - Sat: 9:30 AM – 7:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <strong className="text-white block font-sans">Email:</strong>
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
