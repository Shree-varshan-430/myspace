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
  Compass
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

  // 4 contextual images for the 4 full-page covering sections
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
    <div className="pt-20 bg-navy-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ============================================================
          SECTION 1 (HERO & OVERVIEW): COVERED ENTIRELY BY IMAGE 1
      ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 border-b border-white/10">
        {/* Full-bleed background image 1 */}
        <div className="absolute inset-0 z-0">
          <img
            src={img1.url}
            alt={img1.title}
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
            theme="dark"
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/30 backdrop-blur-md border border-brand-blue/50 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{service.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.12] drop-shadow-md">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl drop-shadow">
                {service.summary}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <a
                  href="#enquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue text-white hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{service.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Glassmorphic Project Highlight Badge Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-navy-950/85 backdrop-blur-xl border border-white/20 rounded-3xl p-6 space-y-4 shadow-2xl text-white">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Showcase 01
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-brand-blue/30 text-sky-300 font-mono text-[10px] font-bold uppercase">
                    Bengaluru
                  </span>
                </div>

                <h3 className="font-bold text-base text-white leading-snug">
                  {img1.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {img1.caption}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>IS-Standard & Engineering Governed</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Fixed Scope BOQ & Stage Timeline Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Coverage across all Bengaluru Urban Zones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 (SUITABILITY & TARGET PROFILE): COVERED ENTIRELY BY IMAGE 2
      ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden border-b border-white/10">
        {/* Full-bleed background image 2 */}
        <div className="absolute inset-0 z-0">
          <img
            src={img2.url}
            alt={img2.title}
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-navy-950/88 backdrop-blur-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/15">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Suitability & Profile</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Who this service is planned for.
              </h2>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 max-w-md">
              <strong className="text-white">Showcase 02:</strong> {img2.title} — {img2.caption}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whoIsThisFor.map((item, index) => (
              <div
                key={index}
                className="bg-navy-900/80 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-xl hover:border-brand-blue/70 hover:scale-[1.02] transition-all flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-blue/30 text-sky-300 border border-brand-blue/50 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 (EXECUTION GOVERNANCE): COVERED ENTIRELY BY IMAGE 3
      ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 lg:py-28 text-white overflow-hidden border-b border-white/10">
        {/* Full-bleed background image 3 */}
        <div className="absolute inset-0 z-0">
          <img
            src={img3.url}
            alt={img3.title}
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/15">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Execution Governance & Lifecycle</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                How My Space manages this work.
              </h2>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 max-w-md">
              <strong className="text-white">Showcase 03:</strong> {img3.title} — {img3.caption}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whatWeHelpWith.map((item, index) => (
              <div
                key={index}
                className="bg-navy-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/15 shadow-xl hover:border-brand-gold/60 hover:scale-[1.01] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center text-xs font-mono font-bold mb-3 shadow-md">
                    0{index + 1}
                  </div>
                  <h3 className="font-sans font-bold text-base text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 (PREPARATION & SCOPE BOUNDARIES): COVERED ENTIRELY BY IMAGE 4
      ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden border-b border-white/10">
        {/* Full-bleed background image 4 */}
        <div className="absolute inset-0 z-0">
          <img
            src={img4.url}
            alt={img4.title}
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/15">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Preparation & Scope Boundaries</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Clear scope boundaries. No surprises.
              </h2>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 max-w-md">
              <strong className="text-white">Showcase 04:</strong> {img4.title} — {img4.caption}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Consultation Preparation Checklist */}
            <div className="lg:col-span-5 bg-navy-900/85 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider pb-2 border-b border-white/10">
                <ClipboardList className="w-4 h-4" />
                <span>What Is Helpful To Prepare</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Having these basic details ready helps us provide immediate, practical direction during our first conversation:
              </p>
              <div className="space-y-3 pt-2">
                {service.whatToPrepare.map((prep, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded bg-brand-blue/30 text-sky-300 flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/40">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{prep}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Inclusions vs Exclusions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-950/60 backdrop-blur-xl border border-emerald-500/40 rounded-3xl p-6 space-y-3 shadow-xl">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider pb-2 border-b border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Typical Scope Inclusions</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    {service.scopeInclusions.map((inc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-navy-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 space-y-3 shadow-xl">
                  <div className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider pb-2 border-b border-white/10">
                    <XCircle className="w-4 h-4 text-slate-400" />
                    <span>Separately Quoted</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {service.scopeExclusions.map((exc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span className="leading-snug">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              {service.disclaimer && (
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-blue/20 backdrop-blur-md border border-brand-blue/40 text-xs text-slate-200">
                  <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Important Notice:</strong> {service.disclaimer}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE FAQS
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-surface-ice text-slate-900">
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
        <section className="py-12 bg-white text-slate-900 border-t border-slate-200">
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
      <section id="enquiry" className="py-16 lg:py-20 bg-surface-ice border-t border-slate-200 text-slate-900">
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
