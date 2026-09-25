'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  location: string;
  projectType: string;
  review: string;
  initials: string;
  avatarBg: string;
}

export const googleReviewsData: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Ramesh Kumar",
    role: "Local Guide • 38 reviews",
    rating: 5,
    date: "3 months ago",
    location: "Singasandra, Bengaluru",
    projectType: "Turnkey Duplex Home Construction",
    review: "Er. Saravanan and his team at MY SPACE Civil Engineers did a fantastic job on our duplex house construction in Singasandra. The 3D elevation design, structural quality, and on-time delivery were top-notch. Very transparent in budget and material specifications with zero hidden costs. Highly recommended for house construction in Bangalore!",
    initials: "RK",
    avatarBg: "bg-blue-600"
  },
  {
    id: "rev-2",
    author: "Senthil Nathan",
    role: "Verified Google Review",
    rating: 5,
    date: "4 months ago",
    location: "HSR Layout, Bengaluru",
    projectType: "Structural Planning & Property Valuation",
    review: "We approached MY SPACE for building plan approval, structural drawings, and bank property valuation. Er. Saravanan is extremely knowledgeable and courteous. Everything was delivered on time with clear legal documentation and high precision. Best civil engineers and valuers in Bangalore.",
    initials: "SN",
    avatarBg: "bg-emerald-600"
  },
  {
    id: "rev-3",
    author: "Karthik Sundaram",
    role: "Local Guide • 19 reviews",
    rating: 5,
    date: "5 months ago",
    location: "Electronic City, Bengaluru",
    projectType: "2D/3D Architecture & Turnkey Execution",
    review: "Excellent architectural design and turnkey construction services. Their 3D floor plans helped us visualize our home clearly before breaking ground. The quality of concrete, steel, and plumbing work was strictly monitored on site. Budget-friendly, honest, and reliable engineers.",
    initials: "KS",
    avatarBg: "bg-purple-600"
  },
  {
    id: "rev-4",
    author: "Venkatesh Prasad",
    role: "Verified Google Review",
    rating: 5,
    date: "6 months ago",
    location: "Sarjapur Road, Bengaluru",
    projectType: "Residential Villa Construction",
    review: "Very reliable and trusted builders. Handled the complete construction of our residential villa near Sarjapur Road. Er. Saravanan visited the site regularly and gave weekly photo progress updates. The finish quality and structural strength are superb.",
    initials: "VP",
    avatarBg: "bg-amber-600"
  },
  {
    id: "rev-5",
    author: "Anitha R.",
    role: "Verified Google Review",
    rating: 5,
    date: "7 months ago",
    location: "AECS Layout, Kudlu, Bengaluru",
    projectType: "Modular Interiors & Kitchen Fitouts",
    review: "Highly satisfied with the bespoke interior design and modular kitchen work done by MY SPACE. The carpentry finishes, wardrobe layouts, and false ceiling lighting exceeded our expectations. Very professional, responsive, and punctual team.",
    initials: "AR",
    avatarBg: "bg-rose-600"
  },
  {
    id: "rev-6",
    author: "Praveen Kumar M.",
    role: "Local Guide • 42 reviews",
    rating: 5,
    date: "8 months ago",
    location: "AECS B Block, Singasandra",
    projectType: "Commercial Valuation & Structural Audit",
    review: "Got my commercial building valuation and structural stability certificate done through MY SPACE Civil Engineers & Valuers in AECS Layout. Fast response, thorough on-site inspection, and institutional valuation report recognized by leading banks.",
    initials: "PK",
    avatarBg: "bg-indigo-600"
  },
  {
    id: "rev-7",
    author: "Rajeshwari S.",
    role: "Verified Google Review",
    rating: 5,
    date: "9 months ago",
    location: "Begur Road, Bengaluru",
    projectType: "Vastu 2D Floor Plan & 3D Elevation",
    review: "Er. Saravanan provided wonderful vastu-compliant floor plans for our 30x40 site. His patience in explaining every structural detail and accommodating our family needs made all the difference. Clean working drawings and prompt support!",
    initials: "RS",
    avatarBg: "bg-teal-600"
  },
  {
    id: "rev-8",
    author: "Girish Gowda",
    role: "Verified Google Review",
    rating: 5,
    date: "10 months ago",
    location: "Singasandra / Kudlu, Bengaluru",
    projectType: "G+2 Residential Building Construction",
    review: "Best construction company in Kudlu / Singasandra area. No hidden costs or middlemen markups. The contract had a clear itemized BOQ and stage-wise payment schedule. Completed our G+2 building on schedule with branded materials.",
    initials: "GG",
    avatarBg: "bg-cyan-600"
  },
  {
    id: "rev-9",
    author: "Manjunath B.",
    role: "Verified Google Review",
    rating: 5,
    date: "11 months ago",
    location: "Bommanahalli, Bengaluru",
    projectType: "Civil Contracting & RCC Framing",
    review: "Professional civil engineering consultancy with deep technical knowledge of BBMP building bylaws and structural IS codes. Their site supervision team is dedicated, punctual, and very easy to work with throughout the foundation and framing stages.",
    initials: "MB",
    avatarBg: "bg-sky-600"
  },
  {
    id: "rev-10",
    author: "Dr. Arvind Swaminathan",
    role: "Local Guide • 27 reviews",
    rating: 5,
    date: "1 year ago",
    location: "Electronic City Phase 1, Bengaluru",
    projectType: "Turnkey Independent House Construction",
    review: "I engaged MY SPACE for turnkey construction of our independent house in Electronic City. Right from soil excavation to final painting and deep cleaning, their execution was flawless. Er. Saravanan is a thorough gentleman and expert engineer who gives genuine advice.",
    initials: "AS",
    avatarBg: "bg-blue-700"
  }
];

export default function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const itemWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(index, 0), googleReviewsData.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const current = scrollContainerRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      return () => current.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 20 : 380;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  };

  return (
    <div className="space-y-8 pt-6 border-t border-slate-200">
      {/* Top Header Row with Google Business Profile Summary Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {/* Google Logo Icon SVG */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-xs font-bold text-slate-700 tracking-wider uppercase font-mono">
              Google Customer Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            What Our Clients Say on Google
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
            Real feedback from verified homeowners and commercial clients who trusted MY SPACE Civil Engineers & Valuers across Bengaluru.
          </p>
        </div>

        {/* Google My Business Summary Box (Matching Google Maps card) */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm shrink-0">
          <div className="text-center pr-3 border-r border-slate-200">
            <div className="text-3xl font-black text-navy-950 leading-none font-mono">
              4.9
            </div>
            <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
              18 Google Reviews
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950">
              <span>MY SPACE Civil Engineers & Valuers</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            </div>
            <p className="text-[11px] text-slate-500">
              AECS B Block, Singasandra, Bengaluru
            </p>
            <div className="flex items-center gap-2 text-[10px] text-emerald-700 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Verified Real Estate Builders & Civil Practice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Navigation Buttons (Top Right on Large Screens / Floating on Mobile) */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono text-slate-500">
            Showing <strong className="text-navy-950 font-bold">{activeIndex + 1}</strong> of <strong className="text-navy-950 font-bold">{googleReviewsData.length}</strong> verified reviews
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous review"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                canScrollLeft
                  ? 'bg-white text-navy-950 border-slate-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-sm active:scale-95'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next review"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                canScrollRight
                  ? 'bg-white text-navy-950 border-slate-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-sm active:scale-95'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Track Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {googleReviewsData.map((item, idx) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all p-6 sm:p-7 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3.5">
                {/* Review Top Bar: Google G logo + Star Rating + Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Review Text with Quote */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-slate-200 mb-1 group-hover:text-brand-blue/30 transition-colors shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                    "{item.review}"
                  </p>
                </div>
              </div>

              {/* Review Bottom Card: Avatar + Author + Role & Location */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm`}>
                  {item.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-navy-950 font-sans truncate">
                      {item.author}
                    </h3>
                    {/* Google G mini icon */}
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono truncate">
                    {item.role} • {item.location}
                  </p>
                  <span className="inline-block mt-0.5 text-[10px] font-medium text-brand-blue">
                    {item.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {googleReviewsData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToIndex(dotIdx)}
              aria-label={`Go to review ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex ? 'w-6 bg-brand-blue' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
