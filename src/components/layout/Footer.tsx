import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, Compass, Eye } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 relative overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />

      {/* Starting of Footer: Redesigned 4-Pillar Architectural Assurance Bar */}
      <div className="border-b border-navy-800/80 bg-navy-900/40 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4 sm:px-4 first:pl-0 pt-4 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-sans font-bold text-sm group-hover:text-sky-400 transition-colors">
                  Start With Clarity
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Know what needs to happen before physical work begins. Fixed line-item BOQ and transparent scope.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4 sm:px-4 pt-4 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <Eye className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-sans font-bold text-sm group-hover:text-sky-400 transition-colors">
                  See the Idea First
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Photorealistic 3D elevations and 2D floor plans so you approve every detail before construction.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4 sm:px-4 pt-4 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-sans font-bold text-sm group-hover:text-sky-400 transition-colors">
                  Visible Stages
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Weekly digital photo logs, slump test reports, and milestone stage sign-offs at each floor casting.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-4 sm:px-4 last:pr-0 pt-4 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-sans font-bold text-sm group-hover:text-sky-400 transition-colors">
                  One Accountable Team
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Architectural design, civil execution, interior fit-outs, and certified property valuation under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-blueprint">
                <span className="font-bold tracking-tight">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl tracking-tight font-bold text-white">
                  MY SPACE
                </span>
                <span className="text-[11px] tracking-wider text-slate-400 uppercase font-sans">
                  Engineering, Construction & Valuers
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              An engineering-led partner for property owners planning residential construction, commercial buildings, civil works, 3D visualization, interior design, and property valuation enquiries in Bengaluru.
            </p>

            <div className="pt-2">
              <div className="inline-block px-3 py-1.5 rounded-md bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-wide uppercase">
                Brand Promise: Build Your Own Space
              </div>
            </div>

            <div className="pt-3 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}, Karnataka {siteConfig.address.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Build & Civil Services */}
          <div>
            <h3 className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">
              Build & Civil
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/house-construction-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Residential House Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial-construction-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/civil-construction-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Civil & Structural Works
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Selected Projects Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Our 5-Stage Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Design, 3D & Valuation */}
          <div>
            <h3 className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Design & Valuation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/interior-design-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Interior Design & Execution
                </Link>
              </li>
              <li>
                <Link
                  href="/services/elevation-design-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  3D Elevation Façade Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3d-floor-plan-design-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  3D Floor Plan Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/property-valuation-bangalore"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Property Valuation Enquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Cost & Design Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Quick Enquiries */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Start a Conversation
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-navy-900 border border-navy-800 hover:border-brand-blue text-slate-200 hover:text-white transition-all group"
              >
                <Phone className="w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" />
                <div className="text-xs">
                  <span className="text-slate-400 block">Direct Consultation</span>
                  <span className="font-semibold text-white">{siteConfig.contact.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello My Space, I am planning a project in Bangalore and would like to discuss.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-brand-green-success/15 border border-brand-green-success/30 hover:border-brand-green-success text-slate-200 hover:text-white transition-all group"
              >
                <div className="w-4 h-4 rounded-full bg-brand-green-success flex items-center justify-center text-[10px] font-bold text-white">
                  W
                </div>
                <div className="text-xs">
                  <span className="text-emerald-300 block">WhatsApp Chat</span>
                  <span className="font-semibold text-white">Message Our Team</span>
                </div>
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-brand-blue text-white hover:bg-brand-steel transition-colors shadow-blueprint"
              >
                <span>Tell Us What You Are Planning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bangalore Localities Strip */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="font-medium text-slate-300">Service Coverage in Bengaluru:</span>
            <div className="flex flex-wrap gap-2 text-slate-400 text-[11px]">
              {siteConfig.serviceAreas.map((area, idx) => (
                <span key={area} className="inline-flex items-center">
                  <span>{area}</span>
                  {idx < siteConfig.serviceAreas.length - 1 && <span className="mx-1.5 text-navy-700">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="mt-8 pt-8 border-t border-navy-800 text-[11px] text-slate-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-slate-300">Statutory & Scope Disclaimer:</strong> All property valuation enquiries and reports are subject to physical site inspection, verified property documents, and applicable professional scope standards. A valuation does not guarantee bank loan sanction. Construction cost guidelines and timelines are illustrative and confirmed through formal site-specific structural design and an itemized Bill of Quantities (BOQ).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-slate-500">
            <p>© {new Date().getFullYear()} My Space Engineering, Construction & Valuers. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
