'use client';

import React, { useState, useId } from 'react';
import { ChevronDown, Search, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { FaqItem } from '@/data/faqs';

interface FaqAccordionProps {
  faqs: FaqItem[];
  showCategoryFilter?: boolean;
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  viewAllText?: string;
}

export default function FaqAccordion({
  faqs,
  showCategoryFilter = false,
  showSearch = false,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about construction costs, approval processes, timelines, and valuation in Bengaluru.',
  limit,
  className = '',
  showViewAll = true,
  viewAllLink = '/faqs',
  viewAllText,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const baseId = useId();

  const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: displayFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // If a title is provided, render the full 2-column layout (Left: Heading & Subtitle, Right: Accordion List)
  if (title) {
    return (
      <section className={`py-12 lg:py-16 ${className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle & Direct Support / Explore Link */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>QUESTIONS & ANSWERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
                {title}
              </h2>

              {subtitle && (
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {subtitle}
                </p>
              )}

              {/* Search Bar if enabled in 2-column */}
              {showSearch && (
                <div className="relative pt-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your question..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none shadow-xs"
                  />
                </div>
              )}

              {/* Category Filter if enabled in 2-column */}
              {showCategoryFilter && categories.length > 2 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                        selectedCategory === cat
                          ? 'bg-navy-900 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {showViewAll && (
                <div className="pt-3">
                  <Link
                    href={viewAllLink}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-navy-950 uppercase tracking-wider transition-colors group"
                  >
                    <span>{viewAllText || `EXPLORE ALL ${faqs.length} FAQS`}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column: FAQ Accordion List */}
            <div className="lg:col-span-7 space-y-3.5">
              {displayFaqs.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                  No matching questions found. Please try another search term or contact our team directly.
                </div>
              ) : (
                displayFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const buttonId = `${baseId}-btn-${faq.id}`;
                  const panelId = `${baseId}-panel-${faq.id}`;

                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-white border-brand-blue ring-1 ring-brand-blue/20 shadow-sm'
                          : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <button
                        type="button"
                        id={buttonId}
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none"
                      >
                        <span className="font-sans font-semibold text-base sm:text-lg text-navy-950 pr-4 leading-snug">
                          {faq.question}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isOpen
                              ? 'rotate-180 bg-brand-blue text-white'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed pt-1"
                        >
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Standalone accordion list (when title is omitted)
  return (
    <div className={`space-y-3.5 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Search Bar */}
      {showSearch && (
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your question (e.g. costs, valuation, 3D plans, approvals)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none shadow-xs"
          />
        </div>
      )}

      {/* Category Filters */}
      {showCategoryFilter && categories.length > 2 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-navy-950 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3.5">
        {displayFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No matching questions found. Please try another search term or contact our team directly.
          </div>
        ) : (
          displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-btn-${faq.id}`;
            const panelId = `${baseId}-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-brand-blue ring-1 ring-brand-blue/20 shadow-sm'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none"
                >
                  <span className="font-sans font-semibold text-base sm:text-lg text-navy-950 pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-brand-blue text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed pt-1"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {showViewAll && limit && faqs.length > limit && (
        <div className="text-center mt-8">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-navy-950 uppercase tracking-wider transition-colors"
          >
            <span>{viewAllText || `View all ${faqs.length} Frequently Asked Questions`}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
