import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData, ServiceItem } from '@/data/services';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
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
  Home
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
    'civil-construction-bangalore': 'civil',
    'interior-design-bangalore': 'interiors',
    'elevation-design-bangalore': 'elevation-3d',
    '3d-floor-plan-design-bangalore': 'elevation-3d',
    'property-valuation-bangalore': 'valuation',
  };

  const currentFormService: ServiceType = serviceFormMap[service.slug] || 'residential';

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs?.includes(s.slug)
  );

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
    <div className="pt-20 bg-surface-ice">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold uppercase tracking-widest">
              <Home className="w-3.5 h-3.5" />
              <span>{service.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              {service.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg"
              >
                <span>{service.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-200 border border-white/20 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHO THIS IS FOR
      ============================================================ */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
              Suitability & Profile
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
              Who this service is planned for.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whoIsThisFor.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface-ice border border-slate-200/80"
              >
                <div className="w-5 h-5 rounded-full bg-brand-blue/15 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT WE HELP WITH (CORE DELIVERABLES)
      ============================================================ */}
      <section className="py-16 lg:py-20 bg-surface-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Engineering Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              How My Space manages this work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeHelpWith.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle hover:border-brand-blue transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="font-sans font-bold text-base text-navy-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PREPARATION CHECKLIST
      ============================================================ */}
      <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold text-xs font-semibold uppercase tracking-wider">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Consultation Preparation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                What is helpful to prepare before we speak.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Having these items ready helps us give you immediate, practical direction during our first conversation. Don't worry if some items are missing—we will help you gather them.
              </p>
            </div>

            <div className="lg:col-span-7 bg-navy-900 border border-navy-800 rounded-2xl p-6 sm:p-8 space-y-3">
              {service.whatToPrepare.map((prep, index) => (
                <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{prep}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SCOPE INCLUSIONS & EXCLUSIONS
      ============================================================ */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
              Transparent Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Clear scope boundaries. No surprises.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We define clear contract boundaries upfront so both parties have complete certainty throughout execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Typical Scope Inclusions</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {service.scopeInclusions.map((inc, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5 text-slate-500" />
                <span>Common Scope Exclusions (Separately Quoted)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {service.scopeExclusions.map((exc, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer if present */}
          {service.disclaimer && (
            <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-surface-mist border border-blue-200 text-xs text-slate-600">
              <AlertCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <p>
                <strong className="text-navy-950">Important Notice:</strong> {service.disclaimer}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SERVICE FAQS
      ============================================================ */}
      <section className="py-16 lg:py-20 bg-surface-ice">
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
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-navy-950 mb-6">
              Complementary Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group p-5 rounded-xl border border-slate-200 bg-surface-ice hover:border-brand-blue hover:shadow-card transition-all flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <span className="text-sm font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
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
      <section id="enquiry" className="py-16 lg:py-24 bg-surface-ice border-t border-slate-200">
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
