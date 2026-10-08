import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  Compass,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { faqsData } from '@/data/faqs';
import FaqAccordion from '@/components/faq/FaqAccordion';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 6);
  const homeFaqs = faqsData.filter((f) => f.featuredOnHome);

  const coreServices = [
    {
      id: 'residential',
      title: 'Turnkey Residential Construction',
      slug: 'house-construction-bangalore',
      category: 'Build',
      icon: Home,
      image: '/images/company/turnkey-house-hero.jpeg',
      description: 'End-to-end house construction from foundation to finish with locked BOQ pricing, IS-standard civil quality, and zero cost escalations.',
      deliverables: [
        'Custom 2D/3D architectural plan & structural engineering',
        'Turnkey civil execution with Tata/JSW steel & UltraTech cement',
        'Daily digital site progress logs & stage-wise milestone billing',
        'Complete plumbing, electrical, and flooring handover'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial & Civil Construction',
      slug: 'commercial-construction-bangalore',
      category: 'Build',
      icon: Building2,
      image: '/images/company/showroom-2.jpeg',
      description: 'Commercial office spaces, retail showrooms, industrial sheds, and civil contracting engineered for durability and compliance.',
      deliverables: [
        'Commercial structural design & BBMP setback compliance',
        'Heavy-duty RCC framing & PEB roofing execution',
        'Utility zoning, fire-safety conduits, and high-traffic flooring',
        'Rigid timeline delivery with milestone inspection sign-offs'
      ]
    },
    {
      id: 'architectural',
      title: 'Architectural Drawing & 3D Design',
      slug: 'architectural-drawing-bangalore',
      category: 'Design',
      icon: Compass,
      image: '/images/company/real-project-83.jpeg',
      description: 'Vastu-compliant 2D floor plans, photorealistic 3D elevations, and complete structural working blueprints for modern spaces.',
      deliverables: [
        'Detailed 2D floor layouts optimized for light & ventilation',
        'Photorealistic 3D day/night exterior façade rendering',
        'Structural column, beam & rebar schedules (IS 456)',
        'Municipal sanction approval drawings & documentation'
      ]
    },
    {
      id: 'interiors',
      title: 'Bespoke Modular Interiors',
      slug: 'interior-design-bangalore',
      category: 'Design',
      icon: Sparkles,
      image: '/images/company/interior-design-hero.jpeg',
      description: 'Custom modular kitchens, floor-to-ceiling wardrobes, designer false ceilings, and premium factory-finished joinery.',
      deliverables: [
        'BWP 710 marine ply & anti-fingerprint acrylic/matte finishes',
        'Modular kitchens with Blum/Hafele soft-close hardware',
        'Custom TV accent walls, pooja units & ambient COB lighting',
        'Precision factory manufacturing & dust-free on-site assembly'
      ]
    },
    {
      id: 'valuation',
      title: 'Property & Asset Valuation',
      slug: 'property-valuation-bangalore',
      category: 'Assess',
      icon: FileCheck2,
      image: '/images/company/real-project-75.jpeg',
      description: 'Government-approved valuation reports for residential villas, vacant plots, commercial buildings, bank loans, visa, and capital gains.',
      deliverables: [
        'On-site physical boundary, building age & specification audit',
        'Guideline value benchmarking with micro-market transaction data',
        'CPWD structural depreciation math & net asset valuation',
        'Bank-compliant, signed valuation dossiers in 2–4 working days'
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* ============================================================
          1. HERO SECTION
      ============================================================ */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
        {/* Real-World Architectural Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/company/real-project-62.jpeg"
            alt="My Space Real-World Contemporary House Architecture & Turnkey Execution"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-navy-950/40" />
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <ScrollReveal direction="up" delay={0.1} duration={0.8} className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              <span className="block">We Design, We Build,</span>
              <span className="block mt-1">And We Value It</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-xl">
              Architectural design, turnkey house construction, bespoke modular interiors, and property valuation under one roof across Bengaluru.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-sky-500 active:scale-[0.98] transition-all shadow-lg"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold backdrop-blur-md border border-white/30 active:scale-[0.98] transition-all"
              >
                <span>Completed Projects</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          2. ABOUT US SECTION
      ============================================================ */}
      <section id="about-section" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Story & Philosophy */}
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Complete Building Solutions Under One Roof</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Construction Company in Bangalore with End-to-End Interior & Valuation Solutions
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                <p className="font-semibold text-navy-950">
                  Plan, design, build, and value your space with one specialized team bringing over 10+ years of industry experience across Bengaluru.
                </p>
                <p>
                  As a trusted residential and commercial construction company in Bangalore, experienced interior designers, and professional property valuation experts, <strong className="text-navy-950">My Space</strong> turns your vision into reality with an unwavering focus on transparency, milestone-bound delivery, and consistent engineering quality standards.
                </p>
                <p>
                  Every stage is managed with a clear, unified approach — ensuring your project stays perfectly aligned from soil testing and foundation to bespoke modular interior finishing and comprehensive property valuation. With one single team responsible throughout, you eliminate subcontractor confusion, budget escalations, and timeline delays.
                </p>
              </div>

              {/* Core Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Turnkey House Construction</span>
                </div>

                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Bespoke Modular Interiors</span>
                </div>

                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Architectural 2D & 3D Drawing</span>
                </div>

                <div className="flex items-center gap-2.5 text-navy-950 font-sans font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Property Valuation & Assessment</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-semibold hover:bg-navy-950 transition-all shadow-md group"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column: Asymmetric 4-Image Staggered Grid */}
            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5 items-start">
              <div className="flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-12">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100 aspect-[3/4] group">
                  <img
                    src="/images/company/real-project-83.jpeg"
                    alt="Turnkey Architectural Construction Bangalore"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 bg-slate-100 aspect-[4/3] group">
                  <img
                    src="/images/company/showroom-3.jpeg"
                    alt="Bespoke Interiors & Millwork Bangalore"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 bg-slate-100 aspect-[4/3] group">
                  <img
                    src="/images/company/real-project-54.jpeg"
                    alt="Precision Engineering & Fitouts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100 aspect-[3/4] group">
                  <img
                    src="/images/company/real-project-62.jpeg"
                    alt="Bespoke Residential Villa Construction & Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ============================================================
          3. DEDICATED SERVICES SECTION
      ============================================================ */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-surface-ice border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span>Our Core Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Engineering, Design & Valuation Under One Roof
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-sans">
                Everything you need to design, build, furnish, and assess your property in Bengaluru with single-point engineering accountability.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors shadow-sm shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-blue/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Card Top Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        {service.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <ServiceIcon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {service.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. PROJECTS SECTION
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Completed Projects</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Projects That Show the Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors shadow-sm shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>

          {/* Project Cards Grid */}
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group rounded-[32px] sm:rounded-[36px] overflow-hidden bg-white text-navy-950 border border-slate-200 shadow-elevated p-3 sm:p-3.5 flex flex-col justify-between hover:border-brand-blue/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 h-full"
                >
                  {/* Top Image Frame */}
                  <div className="relative aspect-[1/1] sm:aspect-[4/3.8] rounded-[26px] overflow-hidden bg-slate-100">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Centered Category Pill */}
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-md z-10 whitespace-nowrap">
                      {project.category}
                    </div>

                    {/* Bottom Center Notch */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end z-10 select-none pointer-events-none">
                      <svg className="w-3.5 h-3.5 text-white block shrink-0 -mr-px" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M16 16H0C8.83656 16 16 8.83656 16 0V16Z" />
                      </svg>

                      <div className="bg-white text-navy-950 px-4 py-1.5 font-mono text-xs font-bold tracking-wider rounded-t-xl border-t border-slate-100 shadow-sm whitespace-nowrap">
                        {project.builtUpArea}
                      </div>

                      <svg className="w-3.5 h-3.5 text-white block shrink-0 -ml-px" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M0 16H16C7.16344 16 0 8.83656 0 0V16Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Middle Identity Row */}
                  <div className="px-2 sm:px-3 pt-4 pb-3 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-surface-ice border border-blue-100 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors shadow-sm">
                      <span className="font-bold text-base">M</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base sm:text-lg text-navy-950 truncate group-hover:text-brand-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider truncate">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Metrics Tray */}
                  <div className="p-3.5 rounded-2xl bg-surface-ice border border-slate-200/80 flex items-center justify-between mt-1">
                    <div className="flex-1 pr-3 min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        LOCATION
                      </span>
                      <span className="text-xs font-bold text-navy-950 truncate block mt-0.5">
                        {project.location.split(',')[0]}
                      </span>
                    </div>

                    <div className="w-px h-6 bg-slate-200" />

                    <div className="flex-1 pl-4 text-right min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        STATUS
                      </span>
                      <span className="text-xs font-bold text-brand-blue truncate block mt-0.5">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          5. TESTIMONIALS SECTION
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-surface-ice border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ============================================================
          6. FAQ SECTION
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column */}
            <ScrollReveal direction="right" duration={0.7} className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <Home className="w-4 h-4 text-brand-blue" />
                <span>Questions & Answers</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                Frequently Asked Questions
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Key questions about construction costs, approval processes, timelines, and valuation in Bengaluru.
              </p>

              <div className="pt-2">
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-navy-950 uppercase tracking-wider transition-colors group"
                >
                  <span>Explore all {faqsData.length} FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column */}
            <ScrollReveal direction="left" duration={0.7} delay={0.15} className="lg:col-span-7">
              <FaqAccordion
                faqs={homeFaqs}
                limit={6}
                title=""
                className="py-0"
                showViewAll={false}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
