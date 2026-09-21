'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function MobileContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down 300px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-2.5 px-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-navy-900 border border-navy-700 text-white text-xs font-semibold hover:bg-navy-800 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-brand-blue" />
          <span>Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hi My Space, I am planning a project in Bangalore and would like to speak with your engineering team.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-brand-green-success text-white text-xs font-semibold hover:bg-emerald-700 active:scale-95 transition-all shadow-sm"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white text-brand-green-success flex items-center justify-center text-[9px] font-bold">
            W
          </div>
          <span>WhatsApp</span>
        </a>

        {/* Enquire Action */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel active:scale-95 transition-all shadow-blueprint"
        >
          <span>Enquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
