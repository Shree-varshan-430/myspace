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
    author: "P.S Vaisshnav",
    role: "1 review • 2 photos",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Turnkey House Construction",
    review: "Good design work, my house was built by myspace engineers team and handed over on time. High quality with cost effective. Complete space utilisation and nicely crafted. Thanks to Myspace",
    initials: "PV",
    avatarBg: "bg-blue-600"
  },
  {
    id: "rev-2",
    author: "Hrithik. s",
    role: "13 reviews • 5 photos",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Custom House Planning & Execution",
    review: "It was interesting and satisfactory to approach someone who has technical and wide knowledge on the project to be done with the budget ,design of the house according to the client's theme and was built with multiple necessary requirements",
    initials: "HS",
    avatarBg: "bg-emerald-600"
  },
  {
    id: "rev-3",
    author: "sanavas shajahan",
    role: "9 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "House Construction",
    review: "MY SPACE Engineers was a wonderful experience. I am truly thankful I called for their services. They are not only professional at what they do but also reliable and dependable. I’ve built my house under there construction and they offered great support.",
    initials: "SS",
    avatarBg: "bg-purple-600"
  },
  {
    id: "rev-4",
    author: "yogen s",
    role: "5 reviews • 8 photos",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Engineering Consultancy",
    review: "I have known him for more than four decades and one of the most truthworthy person that I come across.",
    initials: "YS",
    avatarBg: "bg-amber-600"
  },
  {
    id: "rev-5",
    author: "King Kaliswaran",
    role: "6 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "3D Design & Elevation",
    review: "He is well knowledged, good experience & qualified engineer. Personal and professionally know him very well. He shared his technical knowledge to all friends. For me he worked 3D design for me.. friendly, Updated, skilled engineer .. all the best Engg. Saravanan",
    initials: "KK",
    avatarBg: "bg-rose-600"
  },
  {
    id: "rev-6",
    author: "Ovium N",
    role: "2 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Civil Construction & Architecture",
    review: "Reliable and accountable, his wast and in depth knowledge in construction and allied fields makes the work upto the mark and fulfill our desire towards comfy, sturdy and aesthetic dwellings at nominal cost",
    initials: "ON",
    avatarBg: "bg-indigo-600"
  },
  {
    id: "rev-7",
    author: "Sri Sabari Marketing services",
    role: "3 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "House Design & Planning",
    review: "Excellent design given by myspace engineers for my house, Mr saravanan is very humble and patience in listening our views and ideas, good work, great, wishing him great success on further projects",
    initials: "SS",
    avatarBg: "bg-teal-600"
  },
  {
    id: "rev-8",
    author: "Balakrishna N",
    role: "Local Guide • 96 reviews • 133 photos",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Civil & Valuation Services",
    review: "Professional & reliable service at a reasonable charges.",
    initials: "BN",
    avatarBg: "bg-cyan-600"
  },
  {
    id: "rev-9",
    author: "v.janarthanan Vadivel",
    role: "6 reviews • 4 photos",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Civil Construction",
    review: "Best service in City....honouruble,Adjustable, dedicated .....",
    initials: "JV",
    avatarBg: "bg-sky-600"
  },
  {
    id: "rev-10",
    author: "Vaishri S",
    role: "4 reviews • 1 photo",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Residential Construction",
    review: "Excellent work ... Trust worthy people",
    initials: "VS",
    avatarBg: "bg-blue-700"
  },
  {
    id: "rev-11",
    author: "ganesh r",
    role: "4 reviews • 1 photo",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Project Execution",
    review: "Excellent execution and good in time management 👍",
    initials: "GR",
    avatarBg: "bg-emerald-700"
  },
  {
    id: "rev-12",
    author: "sasekumar cs",
    role: "1 review",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Advisory & Construction",
    review: "Best advisor Excellent work",
    initials: "SC",
    avatarBg: "bg-amber-700"
  },
  {
    id: "rev-13",
    author: "Ramesh Duraisamy",
    role: "3 reviews • 9 photos",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Civil Contracting",
    review: "Super 👌",
    initials: "RD",
    avatarBg: "bg-purple-700"
  },
  {
    id: "rev-14",
    author: "Askrish RC",
    role: "4 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Engineering Services",
    review: "Great team.",
    initials: "AR",
    avatarBg: "bg-rose-700"
  },
  {
    id: "rev-15",
    author: "Yuvarajkarthikeyan Mani",
    role: "3 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Civil & Design",
    review: "Super service",
    initials: "YM",
    avatarBg: "bg-teal-700"
  },
  {
    id: "rev-16",
    author: "Selva Raj",
    role: "3 reviews",
    rating: 5,
    date: "3 years ago",
    location: "Bengaluru",
    projectType: "Turnkey Construction",
    review: "My Space Engineers, Er.Saravanan = Quality for Sure, Er. Saravanan = Simplicity in his approach",
    initials: "SR",
    avatarBg: "bg-blue-800"
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
    const el = scrollContainerRef.current;
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
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
      const scrollAmount = direction === 'left' ? -itemWidth - 20 : itemWidth + 20;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
      scrollContainerRef.current.scrollTo({ left: index * (itemWidth + 20), behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header with Google Rating Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/80">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
            {/* Google Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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

        {/* Google My Business Summary Box */}
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
          {googleReviewsData.map((item) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all p-6 sm:p-7 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3.5">
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

                <div className="relative">
                  <Quote className="w-5 h-5 text-slate-200 mb-1 group-hover:text-brand-blue/30 transition-colors shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                    "{item.review}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm`}>
                  {item.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-navy-950 font-sans truncate">
                      {item.author}
                    </h3>
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
