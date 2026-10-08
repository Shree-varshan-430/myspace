'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import MySpaceLogoMark from '@/components/ui/MySpaceLogoMark';
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ChevronDown,
  Building2,
  Home,
  Layers,
  FileText,
  Paintbrush,
  Ruler,
  ArrowRight,
  Factory
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'construction' | 'planning' | null>(null);
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
    '/services/civil-construction-bangalore',
    '/packages'
  ].includes(pathname);

  const isPlanningActive = [
    '/services/architectural-drawing-bangalore',
    '/services/interior-design-bangalore',
    '/services/structural-design-bangalore'
  ].includes(pathname);

  const isValuationActive = [
    '/services/property-valuation-bangalore',
    '/services/land-valuation-bangalore',
    '/services/business-valuation-bangalore'
  ].includes(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
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

          {/* Right: Social Media Links & WhatsApp Quick Chat */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Links (Instagram, Facebook, LinkedIn, YouTube) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                title="Instagram"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-500 hover:text-pink-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                title="Facebook"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-500 hover:text-sky-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube"
                title="YouTube"
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            {/* WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-semibold text-[11px]"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-2.5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo: Vector Circle Emblem + HTML/CSS Text (Prominent & Crisp) */}
            <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none shrink-0 py-1">
              <MySpaceLogoMark className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 transition-transform duration-200 group-hover:scale-105" />
              <div className="flex flex-col justify-center">
                <span className="font-black text-2xl sm:text-[26px] lg:text-[28px] tracking-tight text-[#0a2540] group-hover:text-brand-blue transition-colors leading-none font-sans">
                  MY SPACE
                </span>
                <span className="text-[10px] sm:text-[11.5px] lg:text-xs font-bold text-slate-500 group-hover:text-slate-700 tracking-tight leading-none mt-1 sm:mt-1.5 font-sans whitespace-nowrap">
                  Engineers, Contractors &amp; Valuers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 font-sans text-[13px] font-medium" aria-label="Main Navigation">
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

              {/* About */}
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
                            Offices, retail & commercial buildings.
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

              {/* Planning & Design Dropdown */}
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
                        href="/services/architectural-drawing-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Architectural Drawing</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            2D floor plans & 3D elevations.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/interior-design-bangalore"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Paintbrush className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-navy-950 font-semibold text-xs group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Interior Design</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            Turnkey interiors & modular woodwork.
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
                            <span>Structural Design</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            RCC detailing & IS code calculations.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Valuation - Direct Single Link (NO DROPDOWN) */}
              <Link
                href="/services/property-valuation-bangalore"
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg transition-all ${
                  isValuationActive
                    ? 'text-brand-blue font-semibold bg-brand-blue/[0.08]'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Valuation
              </Link>

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

            {/* Right Action Utilities */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                href="/contact?intent=start-project"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-navy-950 text-white hover:bg-brand-blue shadow-sm active:scale-[0.98] transition-all duration-100 ease-out"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
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
            <Link
              href="/contact?intent=start-project"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold bg-brand-blue text-white shadow-sm active:scale-[0.98] transition-all duration-100 ease-out"
            >
              <span>Tell Us What You Are Planning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

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
                Planning & Design
              </span>
              <div className="space-y-1">
                <Link
                  href="/services/architectural-drawing-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Architectural Drawing (2D & 3D)
                </Link>
                <Link
                  href="/services/interior-design-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Interior Design & Modular Joinery
                </Link>
                <Link
                  href="/services/structural-design-bangalore"
                  className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Structural Design
                </Link>
              </div>
            </div>

            {/* Valuation - Direct Single Link */}
            <div className="py-2 border-t border-slate-100">
              <Link
                href="/services/property-valuation-bangalore"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-brand-blue hover:bg-slate-50"
              >
                Property Valuation
              </Link>
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
          </div>
        </div>
      )}
    </header>
  );
}
