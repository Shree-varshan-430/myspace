'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-surface-ice px-4 pt-24 pb-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-elevated">
        <div className="w-16 h-16 rounded-2xl bg-red-50 text-brand-red-error flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-brand-red-error uppercase tracking-wider">
            Something went wrong
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-950">
            An unexpected error occurred
          </h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            Please try refreshing the page or navigating back to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors shadow-blueprint"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-navy-950 text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
