import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData, ServiceItem } from '@/data/services';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FaqAccordion from '@/components/faq/FaqAccordion';
import EnquiryForm, { ServiceType } from '@/components/forms/EnquiryForm';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Check,
  ClipboardList,
  Sparkles,
  Layers,
  Phone,
  Home,
  Camera,
  MapPin,
  Clock,
  Award,
  Eye,
  CheckCheck,
  Compass,
  FileCheck2,
  Sliders,
  Scale,
  Hammer
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found | My Space' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Map service slug to form initial service
  const serviceFormMap: Record<string, ServiceType> = {
    'house-construction-bangalore': 'residential',
    'commercial-construction-bangalore': 'commercial',
    'industrial-construction-bangalore': 'commercial',
    'civil-construction-bangalore': 'civil',
    'interior-design-bangalore': 'interiors',
    '2d-design-bangalore': 'elevation-3d',
    '3d-design-bangalore': 'elevation-3d',
    'structural-design-bangalore': 'civil',
    'elevation-design-bangalore': 'elevation-3d',
    '3d-floor-plan-design-bangalore': 'elevation-3d',
    'land-valuation-bangalore': 'valuation',
    'property-valuation-bangalore': 'valuation',
    'business-valuation-bangalore': 'valuation',
  };

  const currentFormService: ServiceType = serviceFormMap[service.slug] || 'residential';

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs?.includes(s.slug)
  );

  // 4 contextual images for the zig-zag layout
  const img1 = service.galleryImages?.[0] || { url: service.heroImage, title: service.title, caption: service.tagline };
  const img2 = service.galleryImages?.[1] || img1;
  const img3 = service.galleryImages?.[2] || img1;
  const img4 = service.galleryImages?.[3] || img2;

  // JSON-LD Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Bengaluru',
    },
    description: service.summary,
  };

  return (
    <div className="pt-20 bg-surface-ice text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ============================================================
          PAGE HERO BANNER (BioArtha Reference Style)
      ============================================================ */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-sky-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>{service.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES INTRO SECTION
      ============================================================ */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
            Our Bengaluru Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
            {service.h1}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {service.summary}
          </p>
        </div>
      </section>

      {/* ============================================================
          SERVICES ZIGZAG SECTION (BioArtha Style: Left-Right-Left-Right)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-surface-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">

          {/* ------------------------------------------------------------
              ROW 1: TEXT LEFT, IMAGE RIGHT (01: Core Scope & Specifications)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Col Left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-mono font-black text-brand-blue/25 tracking-tighter leading-none select-none">
                  01
                </span>
                <span className="px-3 py-1 rounded-md bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-wider border border-blue-200">
                  Core Engineering Scope
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                Execution Quality & Key Scope
              </h3>

              <ul className="space-y-3">
                {service.scopeInclusions.slice(0, 4).map((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">
                      {inc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg hover:translate-x-0.5"
                >
                  <span>{service.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Image Col Right (No dark blue card background, clean text) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img1.url}
                  alt={img1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-base text-navy-950">{img1.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img1.caption}</p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------
              ROW 2: IMAGE LEFT, TEXT RIGHT (02: Suitability & Target Profile)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Col Left (No dark blue card background, clean text) */}
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img2.url}
                  alt={img2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-base text-navy-950">{img2.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img2.caption}</p>
              </div>
            </div>

            {/* Text Col Right (No white background cards on subpoints) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-mono font-black text-brand-blue/25 tracking-tighter leading-none select-none">
                  02
                </span>
                <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-800 font-bold text-xs uppercase tracking-wider border border-amber-200">
                  Target Profile
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                Who this service is planned for.
              </h3>

              <ul className="space-y-3">
                {service.whoIsThisFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/15 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-900 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------
              ROW 3: TEXT LEFT, IMAGE RIGHT (03: Execution Governance & Steps)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Col Left (No white background cards on subpoints) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-mono font-black text-brand-blue/25 tracking-tighter leading-none select-none">
                  03
                </span>
                <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200">
                  Execution Governance
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                How My Space manages this work.
              </h3>

              <div className="space-y-4">
                {service.whatWeHelpWith.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded bg-brand-blue text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-navy-950">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 pl-8.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg hover:translate-x-0.5"
                >
                  <span>Request Process Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Image Col Right (No dark blue card background, clean text) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img3.url}
                  alt={img3.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-base text-navy-950">{img3.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img3.caption}</p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------
              ROW 4: IMAGE LEFT, TEXT RIGHT (04: Preparation & Scope Boundaries)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Col Left (No dark blue card background, clean text) */}
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img4.url}
                  alt={img4.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-base text-navy-950">{img4.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img4.caption}</p>
              </div>
            </div>

            {/* Text Col Right (No white background cards on subpoints) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-mono font-black text-brand-blue/25 tracking-tighter leading-none select-none">
                  04
                </span>
                <span className="px-3 py-1 rounded-md bg-purple-50 text-purple-800 font-bold text-xs uppercase tracking-wider border border-purple-200">
                  Preparation & Scope Boundaries
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                Clear preparation & transparent scope.
              </h3>

              <div className="space-y-5">
                {/* Preparation points */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-brand-blue" />
                    <span>Helpful To Prepare Before We Speak</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-6">
                    {service.whatToPrepare.slice(0, 3).map((prep, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{prep}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions Note */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-slate-500" />
                    <span>Separately Quoted Items</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-6">
                    {service.scopeExclusions.slice(0, 3).map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {service.disclaimer && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-600">
                  <AlertCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-navy-950">Notice:</strong> {service.disclaimer}
                  </p>
                </div>
              )}

              <div className="pt-2">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg hover:translate-x-0.5"
                >
                  <span>Inquire This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE MY SPACE SECTION (BioArtha 6-Card Grid)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
              Why Bengaluru Chooses My Space
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Built on engineering principles, certified material standards, and transparent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">IS-Standard Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All structural casting, steel reinforcement, and concrete grades strictly adhere to Indian Standard codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Detailed Itemized BOQ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero hidden costs with transparent unit rates, brand specifications, and clear payment milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Timely Stage Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Critical-path project scheduling ensures every stage is completed and inspected according to contract timeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Certified Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete as-built drawings, structural calculations, and statutory valuation dossiers signed by registered professionals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Bangalore Micro-Market Insight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep expertise in local soil conditions, municipal sanction bylaws, and zonal real estate valuations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-brand-steel flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Direct Single Accountability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single dedicated point of contact coordinating architecture, engineering, civil masons, and handovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE FAQS
      ============================================================ */}
      <section className="py-16 bg-surface-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={service.faqs.map((f, i) => ({
              id: `service-faq-${i}`,
              category: 'General',
              question: f.question,
              answer: f.answer,
            }))}
            title={`${service.title} FAQs`}
            subtitle="Frequently asked questions specific to this service in Bangalore."
          />
        </div>
      </section>

      {/* ============================================================
          RELATED SERVICES
      ============================================================ */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy-950 mb-5">
              Complementary Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group p-4 rounded-xl border border-slate-200 bg-surface-ice hover:border-brand-blue hover:shadow-card transition-all flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
                      {rel.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          CONTEXTUAL LEAD FORM
      ============================================================ */}
      <section id="enquiry" className="py-16 lg:py-20 bg-surface-ice border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            initialService={currentFormService}
            title={`Discuss Your ${service.title} Project`}
            subtitle="Tell us about your plot location, space requirements, or documentation status. We will begin with a structured consultation."
          />
        </div>
      </section>
    </div>
  );
}
