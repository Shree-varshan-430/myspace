'use client';

import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingContactDock() {
  return (
    <aside
      className="fixed right-4 bottom-24 z-40 hidden md:flex flex-col gap-3 pointer-events-auto select-none"
      aria-label="Quick Contact Actions"
    >
      {/* 1. Direct Phone Call */}
      <div className="relative group flex items-center justify-end">
        <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-slate-700/50">
          Call: {siteConfig.contact.phoneDisplay}
        </span>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
          className="w-11 h-11 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-sky-500 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* 2. Direct Email */}
      <div className="relative group flex items-center justify-end">
        <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-slate-700/50">
          Email: {siteConfig.contact.email}
        </span>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="w-11 h-11 rounded-2xl bg-navy-900 text-white flex items-center justify-center shadow-lg hover:bg-navy-800 hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label={`Email ${siteConfig.contact.email}`}
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* 3. WhatsApp Direct Chat */}
      <div className="relative group flex items-center justify-end">
        <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-slate-700/50">
          WhatsApp Desk (Quick Response)
        </span>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hi My Space team, I would like to discuss a project in Bangalore.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}
