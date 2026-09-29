'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageSquare,
  ChevronDown,
  Building2,
  Home,
  Layers,
  Compass,
  FileSearch,
  Paintbrush,
  Sparkles,
  ArrowRight,
  Factory,
  Ruler,
  Landmark,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'construction' | 'planning' | 'valuation' | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHome = pathname === '/';

  const isConstructionActive = [
    '/services/house-construction-bangalore',
    '/services/commercial-construction-bangalore',
    '/services/industrial-construction-bangalore',
    '/services/civil-construction-bangalore'
  ].includes(pathname);

  const isPlanningActive = [
    '/services/interior-design-bangalore',
    '/services/2d-design-bangalore',
    '/services/3d-design-bangalore',
    '/services/structural-design-bangalore',
    '/services/elevation-design-bangalore',
    '/services/3d-floor-plan-design-bangalore'
  ].includes(pathname);

  const isValuationActive = [
    '/services/land-valuation-bangalore',
    '/services/property-valuation-bangalore',
    '/services/business-valuation-bangalore'
  ].includes(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - White Background for Social Links & Contact */}
      <div className="bg-white border-b border-slate-200/80 text-slate-600 text-[11px] sm:text-xs font-sans">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-1.5 flex items-center justify-between">
          {/* Left: Contact Phones, Email & Working Hours */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-brand-blue transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <span className="text-slate-300">/</span>

            <a
              href={`tel:${siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-brand-blue transition-colors font-semibold"
            >
              <span>{siteConfig.contact.phoneSecondaryDisplay}</span>
            </a>

            <span className="hidden md:inline text-slate-300">|</span>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-blue transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>

            <span className="hidden xl:inline text-slate-300">|</span>

            <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{siteConfig.contact.hours}</span>
            </span>
          </div>

          {/* Right: Social Links & WhatsApp Quick Chat */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-600 flex items-center justify-center transition-all"
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-600 flex items-center justify-center transition-all"
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.667 0 9 1.583 9 4.889V8z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-600 flex items-center justify-center transition-all"
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white text-slate-600 flex items-center justify-center transition-all"
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-semibold text-[11px]"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Full Width with Logo Fully to the Left */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-2.5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Wordmark (Pinned Fully Left) */}
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
              <div className="w-9 h-9 rounded-xl bg-navy-950 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-brand-blue transition-colors">
                <span className="font-bold tracking-tight">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-navy-950 group-hover:text-brand-blue transition-colors leading-tight">
                  MY SPACE
                </span>
                <span className="text-[8.5px] sm:text-[9px] tracking-wider text-slate-500 uppercase font-medium">
                  Engineering & Construction
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 font-sans text-[13px] font-medium" aria-label="Main Navigation">
              {/* Home */}
              <Link
                href="/"
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg transition-all ${
                  isHome
                    ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Home
              </Link>

              {/* About - Right next to Home */}
              <Link
                href="/about"
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg transition-all ${
                  pathname === '/about'
                    ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                About
              </Link>

              {/* Construction Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('construction')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`whitespace-nowrap inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                    isConstructionActive || activeDropdown === 'construction'
                      ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                  }`}
                  aria-expanded={activeDropdown === 'construction'}
                >
                  <span>Construction</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'construction' ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === 'construction' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-80 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1">
                      <Link
                        href="/services/house-construction-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Home className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Residential Construction</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Turnkey custom homes & luxury villas.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/commercial-construction-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Commercial Construction</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Offices, retail, clinics & commercial spaces.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/industrial-construction-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Factory className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Industrial Construction</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Warehouses, PEB sheds & factories.
                          </p>
                        </div>
                      </Link>

                      <div className="pt-1 border-t border-slate-100">
                        <Link
                          href="/packages"
                          className="group flex items-start gap-3 p-2.5 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                              <span className="font-bold text-brand-blue">Packages & Pricing</span>
                              <ArrowRight className="w-3 h-3 text-brand-blue" />
                            </div>
                            <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                              Turnkey packages from ₹1,850/sq.ft with BOQ.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Planning and Design Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('planning')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`whitespace-nowrap inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                    isPlanningActive || activeDropdown === 'planning'
                      ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                  }`}
                  aria-expanded={activeDropdown === 'planning'}
                >
                  <span>Planning & Design</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'planning' ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === 'planning' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-80 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1">
                      <Link
                        href="/services/interior-design-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Paintbrush className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Interior design</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Turnkey interiors, modular kitchens & joinery.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/2d-design-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>2D design</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Vastu floor plans, sanction & working drawings.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/3d-design-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>3D design</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Façade elevations, 3D views & walkthroughs.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/structural-design-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Ruler className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Structural design</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            RCC detailing, footings & IS code design.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Valuation Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('valuation')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`whitespace-nowrap inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                    isValuationActive || activeDropdown === 'valuation'
                      ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                  }`}
                  aria-expanded={activeDropdown === 'valuation'}
                >
                  <span>Valuation</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'valuation' ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === 'valuation' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-80 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1">
                      <Link
                        href="/services/land-valuation-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Land Valuation</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Plot appraisal, guidance value & survey reports.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/property-valuation-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Landmark className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Property Valuation</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Bank loans, tax records & fair market value.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/business-valuation-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Business valuation</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Commercial assets, plant & enterprise value.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects */}
              <Link
                href="/projects"
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg transition-all ${
                  pathname.startsWith('/projects')
                    ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Projects
              </Link>

              {/* Insights */}
              <Link
                href="/insights"
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg transition-all ${
                  pathname.startsWith('/insights')
                    ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Insights
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg transition-all ${
                  pathname === '/contact'
                    ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Utilities - Start a Project Button Only */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                href="/contact?intent=start-project"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-navy-950 text-white hover:bg-brand-blue shadow-sm active:scale-[0.98] transition-all duration-100 ease-out"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Menu & Direct Call button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="p-2 rounded-full bg-slate-100 text-brand-blue hover:bg-slate-200 active:scale-[0.98] transition-all"
                aria-label="Call My Space directly"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-navy-950 hover:bg-slate-200 active:scale-[0.98] transition-all"
                aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-8 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="space-y-4">
            {/* Quick Consultation CTA */}
            <Link
              href="/contact?intent=start-project"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold bg-brand-blue text-white shadow-sm active:scale-[0.98] transition-all duration-100 ease-out"
            >
              <span>Tell Us What You Are Planning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Home and About links */}
            <div className="pt-2 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-brand-blue hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-brand-blue hover:bg-slate-50"
              >
                About Us
              </Link>
            </div>

            {/* Construction Category */}
            <div className="py-2 border-t border-slate-100">
              <span className="text-[11px] font-bold tracking-wider text-brand-blue uppercase block mb-1.5 px-3">
                Construction
              </span>
              <div className="space-y-1">
                <Link
                  href="/services/house-construction-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Residential Construction
                </Link>
                <Link
                  href="/services/commercial-construction-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Commercial Construction
                </Link>
                <Link
                  href="/services/industrial-construction-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Industrial Construction
                </Link>
                <Link
                  href="/packages"
                  className="block px-3 py-1.5 rounded-lg text-sm font-semibold text-brand-blue hover:bg-blue-50"
                >
                  Packages & Pricing (From ₹1,850/sq.ft)
                </Link>
              </div>
            </div>

            {/* Planning and Design Category */}
            <div className="py-2 border-t border-slate-100">
              <span className="text-[11px] font-bold tracking-wider text-brand-gold uppercase block mb-1.5 px-3">
                Planning and Design
              </span>
              <div className="space-y-1">
                <Link
                  href="/services/interior-design-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Interior design & Packages
                </Link>
                <Link
                  href="/services/2d-design-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  2D design
                </Link>
                <Link
                  href="/services/3d-design-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  3D design
                </Link>
                <Link
                  href="/services/structural-design-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Structural design
                </Link>
              </div>
            </div>

            {/* Valuation Category */}
            <div className="py-2 border-t border-slate-100">
              <span className="text-[11px] font-bold tracking-wider text-brand-blue uppercase block mb-1.5 px-3">
                Valuation
              </span>
              <div className="space-y-1">
                <Link
                  href="/services/land-valuation-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Land Valuation
                </Link>
                <Link
                  href="/services/property-valuation-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Property Valuation
                </Link>
                <Link
                  href="/services/business-valuation-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Business valuation
                </Link>
              </div>
            </div>

            {/* General Pages */}
            <div className="space-y-1 pt-2 border-t border-slate-200">
              <Link
                href="/projects"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Projects
              </Link>
              <Link
                href="/process"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                How It Works
              </Link>
              <Link
                href="/insights"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>

            {/* Direct Contact info */}
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2 px-3">
              <p>
                <strong className="text-navy-950">Office:</strong> {siteConfig.address.street}, {siteConfig.address.city}
              </p>
              <p>
                <strong className="text-navy-950">Direct Phones:</strong>{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-blue font-semibold">
                  {siteConfig.contact.phoneDisplay}
                </a>
                {' / '}
                <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="text-brand-blue font-semibold">
                  {siteConfig.contact.phoneSecondaryDisplay}
                </a>
              </p>
              <p>
                <strong className="text-navy-950">Email:</strong>{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-blue">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
