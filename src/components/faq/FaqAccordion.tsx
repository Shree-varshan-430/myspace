'use client';

import React, { useState, useId } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
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
}

export default function FaqAccordion({
  faqs,
  showCategoryFilter = false,
  showSearch = false,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers to common questions about house construction, commercial projects, 3D designs, and property valuation in Bengaluru.',
  limit,
  className = '',
  showViewAll = true,
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

  return (
    <section className={`py-12 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        {title && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Search Bar */}
        {showSearch && (
          <div className="relative mb-6">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question (e.g. costs, valuation, 3D plans, approvals)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none shadow-subtle"
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-3">
          {displayFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
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
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-brand-blue/40 shadow-card ring-1 ring-brand-blue/10'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors focus:outline-none"
                  >
                    <span className="font-sans font-semibold text-sm sm:text-base text-navy-950 pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'
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
                      className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
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
          <div className="text-center mt-6">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-navy-900 transition-colors"
            >
              <span>View all {faqs.length} Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
