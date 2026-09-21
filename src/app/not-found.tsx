import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-surface-ice px-4 pt-24 pb-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-elevated">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8 text-brand-blue" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
            Page Not Found • 404
          </span>
          <h1 className="text-3xl font-bold text-navy-950">
            Let's get you back on track
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been moved or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-navy-950 text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
