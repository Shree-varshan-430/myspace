import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData, ServiceItem } from '@/data/services';
import { serviceDetailsLookup, DetailedServiceData } from '@/data/serviceDetailsData';
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
  Hammer,
  Calculator,
  Grid
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

// Helper to render icon for typology cards
function renderTypologyIcon(type: string) {
  switch (type) {
    case 'home':
      return <Home className="w-6 h-6" />;
    case 'building':
      return <Building2 className="w-6 h-6" />;
    case 'layers':
      return <Layers className="w-6 h-6" />;
    case 'grid':
      return <Grid className="w-6 h-6" />;
    case 'compass':
      return <Compass className="w-6 h-6" />;
    case 'hammer':
      return <Hammer className="w-6 h-6" />;
    case 'calculator':
      return <Calculator className="w-6 h-6" />;
    case 'file':
      return <FileCheck2 className="w-6 h-6" />;
    case 'shield':
    default:
      return <ShieldCheck className="w-6 h-6" />;
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Get rich detailed service data or default from lookup
  const details: DetailedServiceData = serviceDetailsLookup[service.slug] || {
    typologiesTitle: `What We Deliver in ${service.title}`,
    typologiesSubtitle: `We deliver specialized solutions tailored to your plot and specifications in Bengaluru:`,
    typologies: [
      { title: `${service.title} Planning`, desc: service.summary, iconType: 'compass' },
      { title: `Customized Execution`, desc: service.whoIsThisFor[0] || 'Engineered according to site specifications.', iconType: 'hammer' },
      { title: `Engineering Quality`, desc: service.whoIsThisFor[1] || 'Conforming to IS-Standards and quality checks.', iconType: 'shield' },
      { title: `Verified Handover`, desc: service.whoIsThisFor[2] || 'Complete documentation and warranty handover.', iconType: 'file' }
    ],
    processTitle: `Our ${service.title} Process`,
    processSubtitle: `We execute every project through a disciplined engineering workflow:`,
    processStages: service.whatWeHelpWith.map((step, idx) => ({
      stageNumber: `0${idx + 1}`,
      title: step.title,
      desc: step.desc
    })),
    scopeTitle: `What Is Included In Our ${service.title} Service?`,
    scopeSubtitle: `Our turnkey delivery in Bangalore covers everything required for complete project success:`,
    detailedScope: service.scopeInclusions.map((inc) => ({
      title: inc,
      desc: 'Executed with certified materials, engineering supervision, and quality compliance.'
    })),
    costTitle: `${service.title} Cost in Bangalore`,
    costSubtitle: `Understanding what drives costs in Bangalore helps you plan your budget without compromising on quality:`,
    costDrivers: [
      { number: '1', title: 'Site Location & Logistics Access', desc: 'Approach road width and locality transport rules influence concrete and equipment mobilization.' },
      { number: '2', title: 'Specification & Material Quality', desc: 'Choices of structural steel grades, cement types, and architectural finishes define total budget.' },
      { number: '3', title: 'Structural & Geotechnical Requirements', desc: 'Soil bearing capacity and foundation depth determine excavation and reinforcement quantities.' },
      { number: '4', title: 'Statutory & Regulatory Clearances', desc: 'Municipal approvals, setback rules, and utility deposits in Bengaluru.' }
    ],
    timelineTitle: `How Long Does It Take to Deliver?`,
    timelineSubtitle: `A structured overview of how key project milestones are scheduled across the project lifecycle:`,
    timelineSchedule: [
      { durationBadge: 'STAGE 1', title: 'Planning & Documentation', desc: 'Site inspection, requirement gathering, and preliminary drawings.' },
      { durationBadge: 'STAGE 2', title: 'Engineering & Execution', desc: 'Stage-wise execution with continuous quality inspections.' },
      { durationBadge: 'STAGE 3', title: 'Finishing & Handover', desc: 'Snag rectifications, testing, and formal project handover.' }
    ]
  };

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
          PAGE HERO BANNER
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
          SERVICES INTERLEAVED ZIG-ZAG 4-BLOCK CONTENT & IMAGE SHOWCASE
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">

          {/* ============================================================
              BLOCK 1: WHAT WE BUILD / TYPOLOGIES (Left) & IMAGE 1 (Right)
          ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  01
                </span>
                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-wider border border-blue-200">
                  Typologies & Solutions
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                  {details.typologiesTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {details.typologiesSubtitle}
                </p>
              </div>

              {/* Typology Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {details.typologies.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-ice rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all space-y-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderTypologyIcon(item.iconType)}
                    </div>
                    <h3 className="text-base font-bold text-navy-950 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg hover:translate-x-0.5"
                >
                  <span>{service.primaryCta || 'Plan Your Project'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Image 1 */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img1.url}
                  alt={img1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1 pt-1">
                <h4 className="font-bold text-base text-navy-950">{img1.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img1.caption}</p>
              </div>
            </div>
          </div>

          {/* ============================================================
              BLOCK 2: IMAGE 2 (Left) & OUR PROCESS WORKFLOW (Right)
          ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Image 2 */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img2.url}
                  alt={img2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1 pt-1">
                <h4 className="font-bold text-base text-navy-950">{img2.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img2.caption}</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  02
                </span>
                <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-xs uppercase tracking-wider border border-amber-200">
                  Engineering Workflow
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                  {details.processTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {details.processSubtitle}
                </p>
              </div>

              {/* Process Stages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {details.processStages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="relative bg-surface-ice rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all overflow-hidden space-y-1.5"
                  >
                    <span className="absolute top-3 right-4 text-3xl sm:text-4xl font-mono font-black text-amber-500/20 select-none pointer-events-none">
                      {stage.stageNumber}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-navy-950 pr-10">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                      {stage.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
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

          {/* ============================================================
              BLOCK 3: WHAT IS INCLUDED (Left) & IMAGE 3 (Right)
          ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  03
                </span>
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200">
                  Deliverables & Specifications
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                  {details.scopeTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {details.scopeSubtitle}
                </p>
              </div>

              {/* Detailed Scope Grid with Left Amber Border Accent */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {details.detailedScope.map((scope, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-ice rounded-2xl p-5 border border-slate-200/90 border-l-4 border-l-amber-500 shadow-sm hover:shadow-md hover:border-slate-300 transition-all space-y-1.5"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-navy-950">
                      {scope.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {scope.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg hover:translate-x-0.5"
                >
                  <span>Request Scope & BOQ Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Image 3 */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img3.url}
                  alt={img3.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1 pt-1">
                <h4 className="font-bold text-base text-navy-950">{img3.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img3.caption}</p>
              </div>
            </div>
          </div>

          {/* ============================================================
              BLOCK 4: IMAGE 4 (Left) & PROJECT TIMELINE & MILESTONES (Right)
          ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Image 4 */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/12] group">
                <img
                  src={img4.url}
                  alt={img4.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1 pt-1">
                <h4 className="font-bold text-base text-navy-950">{img4.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{img4.caption}</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  04
                </span>
                <span className="px-3.5 py-1 rounded-full bg-purple-50 text-purple-800 font-bold text-xs uppercase tracking-wider border border-purple-200">
                  Milestones & Schedule
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                  {details.timelineTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {details.timelineSubtitle}
                </p>
              </div>

              {/* Timeline Milestones Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {details.timelineSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-ice rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all space-y-2.5"
                  >
                    <span className="inline-block px-3 py-1 rounded-md bg-navy-950 text-white font-mono text-xs font-bold uppercase tracking-wider">
                      {item.durationBadge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-navy-950">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {service.disclaimer && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-600 mt-2">
                  <AlertCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-navy-950">Notice:</strong> {service.disclaimer}
                  </p>
                </div>
              )}

              <div className="pt-3">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg hover:translate-x-0.5"
                >
                  <span>Inquire Timeline & Feasibility</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 5: COST DRIVERS & BUDGET GUIDANCE (Bangalore Market Transparency)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-surface-ice border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Budget & Cost Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              {details.costTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {details.costSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.costDrivers.map((cost, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    {cost.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-navy-950">
                    {cost.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  {cost.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE MY SPACE SECTION
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-surface-ice border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
              Why Bengaluru Chooses My Space
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Built on engineering principles, certified materials, and transparent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">IS-Standard Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structural casting and rebar conforming strictly to Indian Standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Detailed Itemized BOQ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero hidden costs with locked per-sq.ft rates and brand specs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Timely Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Critical-path scheduling with milestone-by-milestone inspections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Certified Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete as-built drawings, structural calculations, and warranties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Local Zonal Insight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep expertise in Bengaluru soil, BBMP bylaws, and valuations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-brand-steel flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Single Accountability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single dedicated team coordinating design, engineering, and handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STANDARDIZED 2-COLUMN FAQ SECTION
      ============================================================ */}
      <section className="bg-white border-b border-slate-200">
        <FaqAccordion
          faqs={service.faqs.map((f, i) => ({
            id: `service-faq-${i}`,
            category: 'General',
            question: f.question,
            answer: f.answer,
          }))}
          title={`${service.title} FAQs`}
          subtitle="Frequently asked questions specific to this service in Bangalore."
          showViewAll={true}
          viewAllLink="/faqs"
          viewAllText="Explore all general FAQs"
        />
      </section>

      {/* ============================================================
          RELATED SERVICES
      ============================================================ */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-surface-ice border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy-950 mb-5">
              Complementary Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group p-4 rounded-xl border border-slate-200 bg-white hover:border-brand-blue hover:shadow-card transition-all flex items-center justify-between"
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
      <section id="enquiry" className="py-16 lg:py-20 bg-surface-ice">
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
