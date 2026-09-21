import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { insightsData, InsightArticle } from '@/data/insights';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  Clock,
  Calendar,
  User,
  Sparkles,
  ArrowRight,
  Share2,
  BookOpen,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface InsightPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: InsightPageProps): Metadata {
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found | My Space' };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [{ url: article.heroImage }],
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author.name],
    },
  };
}

export default function InsightDetailPage({ params }: InsightPageProps) {
  const article = insightsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Schema.org Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: [article.heroImage],
    datePublished: '2025-01-15T08:00:00+05:30',
    dateModified: '2025-02-10T08:00:00+05:30',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.meta.url}/logo.png`,
      },
    },
    description: article.metaDescription,
  };

  return (
    <div className="pt-20 bg-surface-ice">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Insights', href: '/insights' },
              { name: article.title, href: `/insights/${article.slug}` },
            ]}
            theme="dark"
            className="mb-6"
          />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-brand-blue text-white text-xs font-semibold">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-blue" />
                {article.readTime}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {article.publishDate}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {article.h1}
            </h1>

            <div className="pt-2 flex items-center gap-3 border-t border-navy-800/80">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs font-sans">
                {article.author.name[0]}
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block">{article.author.name}</span>
                <span className="text-slate-400">{article.author.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content & TOC */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-elevated aspect-[16/9] bg-slate-200">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-subtle space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Key Takeaways for Property Owners</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Sections */}
        <div className="prose prose-slate max-w-none space-y-10">
          {article.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
              <h2 className="text-2xl font-bold text-navy-950">
                {section.heading}
              </h2>
              <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-3 font-sans">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Enquiry CTA */}
        <div className="pt-10 border-t border-slate-200">
          <EnquiryForm
            title="Have a Question About This Topic?"
            subtitle="Connect with our engineering team for personalized advice on your Bengaluru property project."
          />
        </div>
      </section>
    </div>
  );
}
