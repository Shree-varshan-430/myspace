import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { insightsData, InsightArticle } from '@/data/insights';
import { BookOpen, Clock, Calendar, ArrowRight, User, Sparkles } from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Insights & Guides | Construction, Costs & Valuation Bangalore | My Space',
  description: 'Practical guides for property owners in Bengaluru: house construction costs, 3D elevation vs floor plans, property valuation document checklists, and building bylaws.',
  openGraph: {
    title: 'Insights & Property Guides | My Space Bangalore',
    description: 'Practical guidance for better property decisions in Bengaluru.',
  },
};

export default function InsightsPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Top Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Insights', href: '/insights' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Guides & Advice</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Helpful guides to plan your property with confidence.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
              Learn how construction costs work in Bengaluru, how to plan your 3D layout, and what documents you need for property valuation.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-950/85 backdrop-blur-sm text-white text-xs font-semibold">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.publishDate}</span>
                  </div>

                  <h2 className="text-xl font-bold text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-slate-500">
                  By <strong className="text-navy-950">{article.author.name}</strong>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-brand-steel transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Lead CTA */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <EnquiryForm
            title="Have Questions About Your Plot or Budget?"
            subtitle="We are here to help you evaluate your setback limits, layout options, and estimated costs in Bengaluru."
          />
        </div>
      </section>
    </div>
  );
}
