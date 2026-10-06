'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface PracticeArea {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
  ctaText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'house-construction',
    tag: 'Residential',
    title: 'House Construction',
    description: 'Complete home construction from planning to handover.',
    image: '/images/company/turnkey-house-hero.jpeg',
    href: '/services/house-construction-bangalore',
    ctaText: 'Explore Construction',
  },
  {
    id: 'commercial-construction',
    tag: 'Commercial',
    title: 'Commercial Construction',
    description: 'Offices, retail spaces, and commercial buildings.',
    image: '/images/company/showroom-2.jpeg',
    href: '/services/commercial-construction-bangalore',
    ctaText: 'Explore Commercial',
  },
  {
    id: 'bespoke-interiors',
    tag: 'Interiors',
    title: 'Interior Design',
    description: 'Custom modular kitchens, wardrobes, and wood joinery.',
    image: '/images/company/interior-design-hero.jpeg',
    href: '/services/interior-design-bangalore',
    ctaText: 'Explore Interiors',
  },
  {
    id: 'architectural-drawing',
    tag: 'Architecture',
    title: 'Architectural Drawing',
    description: '2D Vastu floor plans, BBMP sanctions & photorealistic 3D elevations.',
    image: '/images/company/front-elevation-hero.jpeg',
    href: '/services/architectural-drawing-bangalore',
    ctaText: 'Explore Drawings',
  },
  {
    id: 'civil-contracting',
    tag: 'Engineering',
    title: 'Civil Contracting',
    description: 'Precision earthwork, RCC framing, and structural build.',
    image: '/images/company/real-project-18.jpeg',
    href: '/services/civil-construction-bangalore',
    ctaText: 'Explore Civil Works',
  },
  {
    id: 'property-valuation',
    tag: 'Valuation',
    title: 'Property Valuation',
    description: 'Comprehensive appraisal reports for property assessment, sales, and documentation.',
    image: '/images/company/real-project-75.jpeg',
    href: '/services/property-valuation-bangalore',
    ctaText: 'Explore Valuation',
  },
];

export default function PracticeAreasCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
    const newIndex = Math.round(scrollLeft / (cardWidth + 24));
    setActiveIndex(Math.min(Math.max(0, newIndex), practiceAreas.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
    const scrollAmount = cardWidth + 24;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
    const targetLeft = index * (cardWidth + 24);
    scrollContainerRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-ice overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <Home className="w-4 h-4 text-brand-blue" />
              <span>Integrated Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
              One Team. From Plan to Completion.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Instead of coordinating several people for design, structure, civil work and interiors, you can work with one engineering-led team.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-slate-300 bg-white text-navy-950 hover:border-brand-blue hover:text-brand-blue hover:shadow-md active:scale-[0.98] transition-transform duration-100 ease-out cursor-pointer'
                  : 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
              aria-label="Next service"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-slate-300 bg-white text-navy-950 hover:border-brand-blue hover:text-brand-blue hover:shadow-md active:scale-[0.98] transition-transform duration-100 ease-out cursor-pointer'
                  : 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start h-auto flex"
            >
              <div className="group rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:border-brand-blue hover:shadow-elevated transition-all flex flex-col justify-between w-full">
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-950/80 backdrop-blur-sm text-white text-xs font-mono font-semibold">
                      {area.tag}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-steel transition-colors"
                  >
                    <span>{area.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {practiceAreas.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-7 bg-brand-blue'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
