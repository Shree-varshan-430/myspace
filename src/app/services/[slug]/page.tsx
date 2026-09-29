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

const turnkeyConstructionPackages = [
  {
    id: 'standard',
    name: 'Classic Standard',
    tagline: 'Ideal for rental properties, budget-conscious independent homes & duplexes',
    rate: '₹1,850',
    rateUnit: 'per sq.ft',
    popular: false,
    badgeColor: 'bg-slate-100 text-slate-700',
    highlights: [
      'RCC Framed Structure (IS 456 compliant)',
      'Tata / JSW Fe 550D TMT Steel',
      'UltraTech / ACC 53-grade Cement',
      'Solid Concrete Blocks (6" & 4")',
      'Vitrified Tile Flooring (Up to ₹60/sq.ft)',
      'Asian Paints Apex & Tractor Emulsion',
      'Ashirvad / Astral CPVC & PVC Plumbing',
      'Anchor / GM Modular Electrical Switches',
      'Flush Doors with Teak Wood Main Door Frame'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Luxury',
    tagline: 'Our most popular package for custom family villas & contemporary duplex residences',
    rate: '₹2,250',
    rateUnit: 'per sq.ft',
    popular: true,
    badgeColor: 'bg-brand-blue text-white',
    highlights: [
      'Engineered Raft / Column Sizing with Soil Testing',
      'Tata Tiscon 550D High-Ductility Rebar',
      'UltraTech Super / ACC Gold Cement',
      'Wire-Cut Red Bricks or High-Density Solid Blocks',
      'Premium Glazed Vitrified Tiles (Up to ₹100/sq.ft) / Granite',
      'Asian Paints Royale Luxury Emulsion (Interior)',
      'Kohler / Jaquar Concealed Diverters & Wall-Hung Toilets',
      'Schneider / Legrand Modular Smart-Ready Switches',
      'Complete Honne / Teak Wood Frames & Hardwood Doors',
      '72-Hour Pond Tested Terrace Waterproofing'
    ]
  },
  {
    id: 'ultra-luxury',
    name: 'Royal Signature',
    tagline: 'Bespoke architectural mastercraft with Italian marble, smart home automation & luxury façades',
    rate: '₹2,850',
    rateUnit: 'per sq.ft',
    popular: false,
    badgeColor: 'bg-brand-gold text-navy-950 font-bold',
    highlights: [
      'Comprehensive Soil Geotechnical Investigation & Structural Peer Review',
      'Tata Tiscon 550D Rebar + Waterproof Admixtures in all RCC Slabs',
      'Imported Italian Marble / Micro-topping in Living & Dining',
      'Engineered Hardwood Flooring in Master Suites',
      'Grohe / Hansgrohe Concealed Thermostatic Shower Systems',
      'Full Home Smart Automation Conduits, EV Charging & Solar Ready',
      'Burma Teak Main Door & Solid Wood Internal Doors',
      'Double Glazed Acoustic Insulated Exterior Façade',
      'Multi-Tier Waterproofing with 10-Year Certified Warranty'
    ]
  }
];

const interiorPackages = [
  {
    id: 'essential-interior',
    name: 'Essential Modular',
    tagline: 'Complete modular essentials for 2BHK / 3BHK rental or first-home move-in',
    rate: '₹3.5L – ₹5.5L',
    rateUnit: 'approx. budget',
    popular: false,
    badgeColor: 'bg-slate-100 text-slate-700',
    highlights: [
      'Commercial MR-Grade Plywood (IS 303 certified)',
      'High-Gloss 0.8mm Laminate Finishes',
      'Soft-Close Hinges & Telescopic Channels (Ebco/Hettich)',
      'Modular Kitchen with SS Wire Baskets & Cutlery Trays',
      'Master & Guest Bedroom Sliding / Hinged Wardrobes',
      'Sleek Living TV Unit with Concealed Cable Management',
      'Foyer Shoe Rack & Vanity Storage Mirrors'
    ]
  },
  {
    id: 'premium-interior',
    name: 'Premium Designer',
    tagline: 'Customized luxury woodwork, quartz countertops & layered warm ambient lighting',
    rate: '₹6.5L – ₹10.5L',
    rateUnit: 'approx. budget',
    popular: true,
    badgeColor: 'bg-brand-blue text-white',
    highlights: [
      'BWP 710 Boiling Waterproof Marine Plywood',
      '1.0mm Anti-Fingerprint Acrylic / Matte Laminate',
      'Blum / Hafele Soft-Close Tandem Boxes & Lift-Ups',
      'Kitchen Quartz / Nano White Countertop with Profile Lights',
      'Floor-to-Ceiling Wardrobes with Tinted Glass & Loft Storage',
      'Designer Fluted Panel & Charcoal Sheet TV Accent Wall',
      'Gypsum False Ceiling with Warm LED COB Strip Lighting',
      'Pooja Room with CNC Jali Design & Brass Accents'
    ]
  },
  {
    id: 'royal-interior',
    name: 'Royal Bespoke & Automation',
    tagline: 'Bespoke architectural mastercraft with Italian veneers, smart automation & custom millwork',
    rate: '₹12L+',
    rateUnit: 'turnkey bespoke',
    popular: false,
    badgeColor: 'bg-brand-gold text-navy-950 font-bold',
    highlights: [
      'Imported Natural Wood Veneers with PU Matte Polish',
      'Full Home Smart Automation (Mood Lighting & Motorized Drapes)',
      'Hafele Luxury Kitchen with Integrated Appliance Garage',
      'Walk-In Wardrobes with Sensor LED Rails & Aluminum Flutes',
      'Acoustic Paneling & Custom Living Room Bar Counter',
      'Italian Marble Inlay Wall Treatments & Dining Partitions',
      'Designer Hardware in Rose Gold / Brushed Brass Finish'
    ]
  }
];

const constructionPreviousProjects = [
  {
    title: "The Courtyard Residence",
    location: "HSR Layout Sector 2, Bengaluru",
    area: "4,200 sq.ft (G+2 Duplex)",
    desc: "A contemporary tropical home centered around an internal double-height courtyard that maximizes natural light and cross-ventilation on a 40x60 plot.",
    image: "/images/company/real-project-62.jpeg",
    tag: "Residential Villa"
  },
  {
    title: "Horizon Commercial Hub",
    location: "Whitefield, Bengaluru",
    area: "12,500 sq.ft (G+3 Commercial)",
    desc: "A modern commercial building designed for flexible IT work environments, clinic suites, and high-street retail on the ground floor.",
    image: "/images/company/showroom-2.jpeg",
    tag: "Commercial Space"
  },
  {
    title: "The Canopy Villa",
    location: "Sarjapur Road, Bengaluru",
    area: "3,600 sq.ft (G+2 Residence)",
    desc: "Engineered RCC framed luxury villa with large cantilevered overhangs, open terrace gardens, and thermal-break UPVC glazing.",
    image: "/images/company/real-project-69.jpeg",
    tag: "Turnkey Villa"
  }
];

const planningDesignPreviousProjects = [
  {
    title: "Contemporary Villa Elevation & 3D Façade",
    location: "Whitefield, Bengaluru",
    scope: "3D Elevation & Material Palette",
    desc: "Geometric modern façade design featuring wood-composite cladding, vertical greenery, and warm architectural accent lighting.",
    image: "/images/company/real-project-83.jpeg",
    tag: "3D Elevation"
  },
  {
    title: "Bespoke Modular Living & Kitchen Suite",
    location: "HSR Layout, Bengaluru",
    scope: "Turnkey Modular Interiors",
    desc: "Complete interior execution featuring acrylic modular kitchen, fluted wood paneling, hidden lighting, and custom joinery.",
    image: "/images/company/interior-design-hero.jpeg",
    tag: "Interior Design"
  },
  {
    title: "Vastu 2D & 3D Villa Layout Plan",
    location: "Sarjapur Road, Bengaluru",
    scope: "2D Architectural Sanction & 3D Layout",
    desc: "Precision floor plan designed conforming 100% to Vastu principles, municipal setback compliance, and cross-ventilation.",
    image: "/images/company/real-project-01.jpeg",
    tag: "2D/3D Architecture"
  },
  {
    title: "Industrial PEB & Structural Detailing",
    location: "Peenya Industrial Area, Bengaluru",
    scope: "Structural Engineering & RCC Design",
    desc: "Structural footing, load-distribution column schedules, and PEB roofing design for heavy manufacturing warehouse.",
    image: "/images/company/real-project-54.jpeg",
    tag: "Structural Design"
  }
];

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const isConstructionService = [
    'house-construction-bangalore',
    'commercial-construction-bangalore',
    'industrial-construction-bangalore',
    'civil-construction-bangalore'
  ].includes(service.slug);

  const isInteriorService = service.slug === 'interior-design-bangalore';

  const isPlanningService = [
    'interior-design-bangalore',
    '2d-design-bangalore',
    '3d-design-bangalore',
    'structural-design-bangalore',
    'elevation-design-bangalore',
    '3d-floor-plan-design-bangalore'
  ].includes(service.slug);

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
              <div className="flex items-center">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  01
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
              <div className="flex items-center">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  02
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
              <div className="flex items-center">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  03
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
              BLOCK 4: SERVICE SUMMARY & KEY DELIVERABLES SHOWCASE
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
              <div className="flex items-center">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-mono font-black text-brand-blue/20 tracking-tighter leading-none select-none">
                  04
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                  Engineering Quality & Certified Handover
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Every project delivered by My Space adheres strictly to Indian Standards (IS:456), structural quality checks, and transparent documentation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-surface-ice rounded-2xl p-5 border border-slate-200/90 space-y-2">
                  <span className="font-bold text-sm text-navy-950 block">Single Accountability</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct execution by practicing civil engineers and architects without middlemen or subcontractors.
                  </p>
                </div>
                <div className="bg-surface-ice rounded-2xl p-5 border border-slate-200/90 space-y-2">
                  <span className="font-bold text-sm text-navy-950 block">Transparent Milestone Billing</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stage-by-stage payments verified against physical work progress and itemized BOQ specifications.
                  </p>
                </div>
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
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION: PACKAGES & PRICING (FOR CONSTRUCTION & INTERIORS)
      ============================================================ */}
      {(isConstructionService || isInteriorService) && (
        <section className="py-16 lg:py-24 bg-surface-ice border-b border-slate-200" id="packages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
                {isConstructionService ? 'Transparent Construction Pricing' : 'Modular Interior Packages'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                {isConstructionService
                  ? 'Turnkey Construction Packages & Specifications'
                  : 'Turnkey Interior Design Packages & Budgets'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isConstructionService
                  ? 'Itemized BOQ with locked per-sq.ft rates, branded building materials, and milestone payments.'
                  : 'Bespoke space planning, premium woodwork, factory-finished joinery, and transparent inclusions.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {(isConstructionService ? turnkeyConstructionPackages : interiorPackages).map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.popular
                      ? 'bg-navy-950 text-white border-2 border-brand-blue shadow-[0_20px_50px_rgba(15,23,42,0.35)] -translate-y-1'
                      : 'bg-white text-navy-950 border border-slate-200 shadow-subtle hover:shadow-elevated'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold uppercase tracking-wider shadow-md text-center whitespace-nowrap flex items-center justify-center">
                      Most Popular in Bengaluru
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-navy-950'}`}>
                          {pkg.name}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            pkg.popular
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                              : pkg.badgeColor
                          }`}
                        >
                          {pkg.id.toUpperCase().replace('-', ' ')}
                        </span>
                      </div>
                      <p
                        className={`text-xs leading-snug min-h-[36px] ${
                          pkg.popular ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div
                      className={`p-4 rounded-2xl border ${
                        pkg.popular
                          ? 'bg-white border-white/90 text-navy-950 shadow-sm'
                          : 'bg-surface-ice border-slate-200/80 text-navy-950'
                      }`}
                    >
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
                          {pkg.rate}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          {pkg.rateUnit}
                        </span>
                      </div>
                      <span className="text-[11px] mt-1 block text-slate-600 font-medium">
                        {isConstructionService
                          ? 'Built-up area pricing • Includes material + skilled labour'
                          : 'Complete space execution • Branded hardware + finish warranty'}
                      </span>
                    </div>

                    {/* Key Inclusions */}
                    <div className="space-y-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider block ${
                          pkg.popular ? 'text-slate-200' : 'text-navy-950'
                        }`}
                      >
                        Specifications Included:
                      </span>
                      <ul className="space-y-2">
                        {pkg.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2.5 text-xs leading-snug ${
                              pkg.popular ? 'text-slate-200' : 'text-slate-700'
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                pkg.popular ? 'text-emerald-400' : 'text-emerald-600'
                              }`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`pt-8 mt-8 border-t ${
                      pkg.popular ? 'border-navy-800' : 'border-slate-100'
                    }`}
                  >
                    <a
                      href="#enquiry"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                        pkg.popular
                          ? 'bg-brand-blue text-white hover:bg-sky-500 shadow-blueprint'
                          : 'bg-navy-950 text-white hover:bg-brand-blue shadow-sm'
                      }`}
                    >
                      <span>Select {pkg.name} Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION: PREVIOUS PROJECTS SHOWCASE (CONSTRUCTION: 3 / DESIGN: 4)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
                {isConstructionService
                  ? 'Previous Construction Projects in Bangalore'
                  : 'Previous Planning, Design & Architecture Projects'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isConstructionService
                  ? 'Selected residential villas, commercial complexes, and turnkey builds engineered by My Space.'
                  : 'Selected 2D/3D architectural floor plans, façade elevations, and bespoke modular interior projects.'}
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors shrink-0 shadow-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div
            className={`grid gap-6 sm:gap-8 ${
              isConstructionService
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {(isConstructionService
              ? constructionPreviousProjects
              : planningDesignPreviousProjects
            ).map((proj, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-blue/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {proj.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-navy-950 text-[11px]">
                    {'area' in proj ? proj.area : proj.scope}
                  </span>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-brand-blue font-semibold hover:text-navy-950 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
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
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-1">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-navy-950">IS-Standard Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structural casting and rebar conforming strictly to Indian Standards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-1">
                <Sliders className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Detailed Itemized BOQ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero hidden costs with locked per-sq.ft rates and brand specs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-1">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Timely Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Critical-path scheduling with milestone-by-milestone inspections.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-1">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Certified Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete as-built drawings, structural calculations, and warranties.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-1">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-navy-950">Local Zonal Insight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep expertise in Bengaluru soil, BBMP bylaws, and valuations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/50 hover:shadow-card transition-all space-y-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-brand-steel flex items-center justify-center mb-1">
                <Award className="w-7 h-7" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
