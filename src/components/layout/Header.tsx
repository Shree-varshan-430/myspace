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
  ArrowRight
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - White Background for Social Links & Contact */}
      <div className="bg-white border-b border-slate-200/80 text-slate-600 text-[11px] sm:text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          {/* Left: Contact Phone, Email & Working Hours */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-brand-blue transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <span className="hidden sm:inline text-slate-300">|</span>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-blue transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>

            <span className="hidden lg:inline text-slate-300">|</span>

            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-500">
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

      {/* Main Navbar */}
      <div
        className={`bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 rounded-xl bg-navy-950 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-brand-blue transition-colors">
                <span className="font-bold tracking-tight">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-navy-950 group-hover:text-brand-blue transition-colors">
                  MY SPACE
                </span>
                <span className="text-[9px] tracking-widest text-slate-500 uppercase font-medium">
                  Engineering & Construction
                </span>
              </div>
            </Link>

          {/* Desktop Navigation Links (Apple-style subtle pills) */}
          <nav className="hidden lg:flex items-center gap-1 font-sans text-xs font-medium tracking-wide" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  pathname.startsWith('/services')
                    ? 'text-navy-950 bg-black/[0.06] font-semibold'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Services Mega Menu Dropdown Bridge */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                  <div className="w-[840px] bg-white border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-1 duration-150">
                    {/* Build Category */}
                    <div>
                      <div className="flex items-center gap-2 text-brand-blue font-semibold text-xs tracking-wider uppercase mb-3 pb-1.5 border-b border-slate-100">
                        <Building2 className="w-4 h-4" />
                        <span>Build</span>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/house-construction-bangalore"
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-navy-950 font-medium text-sm group-hover:text-brand-blue transition-colors flex items-center justify-between">
                              <span>Residential Construction</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              Turnkey custom homes & luxury villas built with engineering supervision.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/commercial-construction-bangalore"
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-navy-950 font-medium text-sm group-hover:text-brand-blue transition-colors flex items-center justify-between">
                              <span>Commercial Construction</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              Offices, retail spaces, clinics & commercial interiors.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/civil-construction-bangalore"
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-navy-950 font-medium text-sm group-hover:text-brand-blue transition-colors flex items-center justify-between">
                              <span>Civil & Structural Works</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              RCC frame execution, deep foundations & site excavation.
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Design Category */}
                    <div>
                      <div className="flex items-center gap-2 text-brand-gold font-semibold text-xs tracking-wider uppercase mb-3 pb-1.5 border-b border-slate-100">
                        <Compass className="w-4 h-4" />
                        <span>Design & Visualize</span>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/interior-design-bangalore"
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-navy-950 font-medium text-sm group-hover:text-brand-gold transition-colors flex items-center justify-between">
                              <span>Interior Design & Execution</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              Turnkey joinery, modular kitchens, warm lighting & custom storage.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/elevation-design-bangalore"
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-navy-950 font-medium text-sm group-hover:text-brand-gold transition-colors flex items-center justify-between">
                              <span>3D Elevation Design</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              Façade renders, textural finishes & curated material palettes.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/3d-floor-plan-design-bangalore"
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-navy-950 font-medium text-sm group-hover:text-brand-gold transition-colors flex items-center justify-between">
                              <span>3D Floor Plans</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                              Vastu-compliant spatial layouts & furnished room plans.
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Assess Category */}
                    <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-brand-blue font-semibold text-xs tracking-wider uppercase mb-2.5">
                          <FileSearch className="w-4 h-4" />
                          <span>Assess & Value</span>
                        </div>
                        <Link
                          href="/services/property-valuation-bangalore"
                          className="group block"
                        >
                          <div className="text-navy-950 font-semibold text-sm group-hover:text-brand-blue transition-colors flex items-center justify-between">
                            <span>Property Valuation</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue" />
                          </div>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                            Government-approved valuation reports for bank loans, property transactions, capital gains tax, and asset records.
                          </p>
                        </Link>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-200/60">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-steel active:scale-[0.98] transition-all group"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                pathname.startsWith('/projects')
                  ? 'text-navy-950 bg-black/[0.06] font-semibold'
                  : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/process"
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                pathname === '/process'
                  ? 'text-navy-950 bg-black/[0.06] font-semibold'
                  : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                pathname === '/about'
                  ? 'text-navy-950 bg-black/[0.06] font-semibold'
                  : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
              }`}
            >
              About
            </Link>

            <Link
              href="/insights"
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                pathname.startsWith('/insights')
                  ? 'text-navy-950 bg-black/[0.06] font-semibold'
                  : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
              }`}
            >
              Insights
            </Link>

            <Link
              href="/faqs"
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                pathname === '/faqs'
                  ? 'text-navy-950 bg-black/[0.06] font-semibold'
                  : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
              }`}
            >
              FAQs
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                pathname === '/contact'
                  ? 'text-navy-950 bg-black/[0.06] font-semibold'
                  : 'text-slate-600 hover:text-navy-950 hover:bg-black/[0.04]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Utilities */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-navy-950 px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] transition-all"
              title="Call My Space"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/contact?intent=start-project"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-navy-950 text-white hover:bg-brand-blue shadow-sm active:scale-[0.98] transition-all duration-100 ease-out"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu & Direct Call button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-full bg-black/[0.04] text-brand-blue hover:bg-black/[0.08] active:scale-[0.98] transition-all duration-100 ease-out"
              aria-label="Call My Space directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-black/[0.04] text-slate-700 hover:text-navy-950 hover:bg-black/[0.08] active:scale-[0.98] transition-all duration-100 ease-out"
              aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Drawer Menu (Pure White) */}
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

            {/* Navigation links */}
            <div className="py-2 border-b border-slate-200">
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase block mb-2 px-2">
                Services
              </span>
              <div className="space-y-1">
                <Link
                  href="/services/house-construction-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Residential House Construction
                </Link>
                <Link
                  href="/services/commercial-construction-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Commercial Construction
                </Link>
                <Link
                  href="/services/civil-construction-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Civil & Structural Works
                </Link>
                <Link
                  href="/services/interior-design-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Interior Design & Execution
                </Link>
                <Link
                  href="/services/elevation-design-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  3D Elevation Design
                </Link>
                <Link
                  href="/services/3d-floor-plan-design-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  3D Floor Plan Design
                </Link>
                <Link
                  href="/services/property-valuation-bangalore"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                >
                  Property Valuation Enquiries
                </Link>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <Link
                href="/projects"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Selected Projects
              </Link>
              <Link
                href="/process"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                How It Works (5-Stage Process)
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                About My Space
              </Link>
              <Link
                href="/insights"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Insights & Guides
              </Link>
              <Link
                href="/faqs"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50"
              >
                Contact & Location
              </Link>
            </div>

            {/* Direct Contact info */}
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2 px-3">
              <p>
                <strong className="text-navy-950">Office:</strong> {siteConfig.address.street}, {siteConfig.address.city}
              </p>
              <p>
                <strong className="text-navy-950">Direct Phone:</strong>{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-blue font-semibold">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
