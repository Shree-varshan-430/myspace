'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import {
  ShieldCheck,
  Building2,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  Eye,
  Target,
  HeartHandshake
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Page Header / Hero Banner */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
        {/* ============================================================
            SECTION 1: WHO WE ARE
        ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
              Engineering-Led Construction & Valuation in Bengaluru
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Founded and led by <strong>Er. Saravanan</strong>, <strong>MY SPACE Civil Engineers & Valuers</strong> is a premier property engineering consultancy based in Bengaluru. We specialize in residential turnkey construction, commercial buildings, architectural 2D/3D design, bespoke interiors, and government-approved property valuation.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              We eliminate the stress and ambiguity often associated with contractors by offering single-point accountability, transparent itemized BOQs, and strict compliance with Indian Standards (IS codes).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black text-brand-blue font-mono">15+</span>
                <p className="text-xs text-slate-600 font-medium mt-1">Years of Civil Mastery</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black text-brand-blue font-mono">100%</span>
                <p className="text-xs text-slate-600 font-medium mt-1">IS-Standard Compliance</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                <span className="text-2xl font-black text-brand-blue font-mono">4.9 ★</span>
                <p className="text-xs text-slate-600 font-medium mt-1">Google Client Rating</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-slate-200 aspect-[4/3] group">
              <img
                src="/images/company/showroom-1.jpeg"
                alt="MY SPACE Civil Engineers Bangalore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-950/90 backdrop-blur-md rounded-2xl text-white text-xs">
                <strong className="block text-sm font-bold text-white mb-0.5">MY SPACE Civil Engineers & Valuers</strong>
                <span>AECS B Block, Singasandra, Bengaluru</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: OUR VISION • OUR MISSION • OUR VALUES
        ============================================================ */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl font-bold flex-wrap border-b border-slate-100 pb-6">
            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'vision'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-1'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Our Vision
            </button>
            <span className="text-slate-400 select-none">•</span>
            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'mission'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-1'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Our Mission
            </button>
            <span className="text-slate-400 select-none">•</span>
            <button
              type="button"
              onClick={() => setActiveTab('values')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'values'
                  ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-1'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Our Values
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'vision' && (
              <div className="text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Our Vision</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
                  To be Bengaluru's most trusted engineering, construction, and valuation firm, transforming our clients' aspirations into structurally resilient, aesthetically inspiring, and cost-effective living spaces.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-2">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Our Mission</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
                  To deliver turnkey building solutions with absolute budget transparency, uncompromised structural integrity, innovative 3D visualization, and punctual milestone delivery under single-point engineering ownership.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="text-center space-y-2 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-2">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">Our Core Values</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">1. Integrity & Transparency</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Fixed itemized BOQ contracts with locked per-sq.ft rates and zero hidden charges.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">2. Engineering Excellence</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      IS-standard rebar reinforcement, batch-tested concrete, and 21-day curing cycles.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">3. Client-Centric Approach</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Patiently listening to family and business needs to craft tailored spatial solutions.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-navy-950 text-sm sm:text-base">4. Single Accountability</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      One dedicated engineering team coordinating architecture, civil execution, and handover.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 3: CLIENT TESTIMONIALS (Google Reviews)
        ============================================================ */}
        <TestimonialsCarousel />

        {/* ============================================================
            SECTION 4: CLEAN DIRECT CONTACT CARD
        ============================================================ */}
        <section className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                Direct Engineering Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Start Your Project With Our Engineering Team
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Connect directly with practicing civil engineers and accredited valuers to discuss your plot location, design requirements, or valuation needs.
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
      </div>
    </div>
  );
}
