'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Home,
  Building2,
  Compass,
  Sparkles,
  FileCheck2
} from 'lucide-react';

export interface CoreServiceItem {
  id: string;
  title: string;
  slug: string;
  category: 'Build' | 'Design' | 'Assess';
  iconType: 'home' | 'building' | 'compass' | 'sparkles' | 'valuation';
  image: string;
  description: string;
}

export const coreServicesData: CoreServiceItem[] = [
  {
    id: 'residential-construction',
    title: 'Turnkey Residential Construction',
    slug: 'house-construction-bangalore',
    category: 'Build',
    iconType: 'home',
    image: '/images/company/turnkey-house-hero.jpeg',
    description: 'End-to-end house construction from foundation to finish with locked BOQ pricing, IS-standard civil quality, and zero cost escalations across Bengaluru.'
  },
  {
    id: 'commercial-construction',
    title: 'Commercial & Civil Construction',
    slug: 'commercial-construction-bangalore',
    category: 'Build',
    iconType: 'building',
    image: '/images/company/showroom-2.jpeg',
    description: 'Commercial office complexes, retail showrooms, industrial sheds, and civil contracting engineered for long-term durability and BBMP compliance.'
  },
  {
    id: 'architectural-drawing',
    title: 'Architectural Drawing & 3D Design',
    slug: 'architectural-drawing-bangalore',
    category: 'Design',
    iconType: 'compass',
    image: '/images/company/real-project-83.jpeg',
    description: 'Vastu-compliant 2D floor plans, photorealistic 3D elevations, and complete structural working blueprints optimized for natural light and ventilation.'
  },
  {
    id: 'interior-design',
    title: 'Bespoke Modular Interiors',
    slug: 'interior-design-bangalore',
    category: 'Design',
    iconType: 'sparkles',
    image: '/images/company/interior-design-hero.jpeg',
    description: 'Custom modular kitchens, floor-to-ceiling wardrobes, designer false ceilings, and premium factory-finished joinery tailored to your lifestyle.'
  },
  {
    id: 'property-valuation',
    title: 'Property & Asset Valuation',
    slug: 'property-valuation-bangalore',
    category: 'Assess',
    iconType: 'valuation',
    image: '/images/company/real-project-75.jpeg',
    description: 'Government-approved valuation reports for residential villas, vacant plots, commercial buildings, bank loans, visa solvency, and capital gains tax.'
  }
];

function renderServiceIcon(type: CoreServiceItem['iconType']) {
  switch (type) {
    case 'home':
      return <Home className="w-5 h-5" />;
    case 'building':
      return <Building2 className="w-5 h-5" />;
    case 'compass':
      return <Compass className="w-5 h-5" />;
    case 'sparkles':
      return <Sparkles className="w-5 h-5" />;
    case 'valuation':
    default:
      return <FileCheck2 className="w-5 h-5" />;
  }
}

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Estimate active index based on scroll position
      const cardWidth = 360;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), coreServicesData.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth * 0.75 : clientWidth * 0.9;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.service-carousel-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header with Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-brand-blue" />
            <span>Our Core Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
            Engineering, Design & Valuation Under One Roof
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-sans">
            Specialized solutions designed and delivered with single-point engineering accountability across Bengaluru.
          </p>
        </div>

        {/* Action & Carousel Arrows */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors shadow-sm"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full border transition-all ${
                canScrollLeft
                  ? 'bg-white text-navy-950 border-slate-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-sm active:scale-95'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full border transition-all ${
                canScrollRight
                  ? 'bg-white text-navy-950 border-slate-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-sm active:scale-95'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {coreServicesData.map((service, index) => (
          <div
            key={service.id}
            className="service-carousel-card flex-none w-[300px] sm:w-[350px] lg:w-[380px] snap-start rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-blue/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div>
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  {service.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {renderServiceIcon(service.iconType)}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Card Action Link */}
            <div className="p-6 sm:p-7 pt-0">
              <Link
                href={`/services/${service.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-ice group-hover:bg-brand-blue group-hover:text-white text-navy-950 text-xs font-semibold border border-slate-200/80 group-hover:border-brand-blue transition-all"
              >
                <span>Explore {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 pt-2">
        {coreServicesData.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`transition-all rounded-full ${
              activeIndex === i
                ? 'w-7 h-2 bg-brand-blue'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
