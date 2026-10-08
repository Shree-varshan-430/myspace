import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData, ServiceItem } from '@/data/services';
import { serviceDetailsLookup, DetailedServiceData } from '@/data/serviceDetailsData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { FaqItem } from '@/data/faqs';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Phone,
  Home,
  MapPin,
  Clock,
  Award,
  Compass,
  FileCheck2,
  Sliders,
  Sparkles,
  Layers,
  Scale,
  Landmark,
  FileText,
  Briefcase,
  Factory,
  Mail,
  MessageSquare
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
    case 'compass':
      return <Compass className="w-6 h-6" />;
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

  const isValuation = [
    'property-valuation-bangalore',
    'land-valuation-bangalore',
    'business-valuation-bangalore'
  ].includes(service.slug);

  // ============================================================
  // UNIFIED 3-SECTION VALUATION PAGE LAYOUT
  // ============================================================
  if (isValuation) {
    const valuationTypes = [
      {
        title: 'Residential Property Valuation',
        icon: Home,
        description: 'Independent houses, residential villas, duplexes, and apartment flats across BBMP & BDA layouts.',
        deliverables: [
          'CPWD structural replacement cost & age depreciation math',
          'Locality land rate benchmarking against Sub-Registrar guidance',
          'Accepted across SBI, HDFC, ICICI, Axis, Canara & nationalized banks',
          'Includes building dimension audit and photo documentation'
        ]
      },
      {
        title: 'Land & Vacant Plot Valuation',
        icon: Landmark,
        description: 'Vacant residential, commercial, and agricultural plots across Bengaluru and surrounding zones.',
        deliverables: [
          'Physical survey boundary, road width & frontage verification',
          'e-Khata, RTC, and revenue document authenticity review',
          'Fair Market Value vs Guideline Value comparative analysis',
          'Essential for capital gains tax (Sec 54/54EC) & mortgage loans'
        ]
      },
      {
        title: 'Commercial Property Valuation',
        icon: Building2,
        description: 'Office complexes, tech parks, shopping complexes, and retail high-street properties.',
        deliverables: [
          'Rental capitalization & Discounted Cash Flow (DCF) modeling',
          'Commercial lease audit & yield rate assessment',
          'Asset assessment for partnership buyouts & enterprise records',
          'Institutional-grade report ready for bank credit committees'
        ]
      },
      {
        title: 'Industrial & Plant Asset Valuation',
        icon: Factory,
        description: 'Industrial plots, PEB warehouses, factory sheds, and plant & machinery registers in Peenya, Bommasandra, etc.',
        deliverables: [
          'On-site plant, machinery & technical asset register audit',
          'Depreciated replacement value conforming to IS/CPWD standards',
          'Custom clearance, insurance, and corporate restructuring reports',
          'Strict NDA protected confidential handling'
        ]
      }
    ];

    const valuationFaqs: FaqItem[] = [
      {
        id: 'val-faq-1',
        category: 'Valuation',
        question: 'What is Property Valuation and why is it legally required?',
        answer: 'Property Valuation is the formal, certified estimation of the fair market value of real estate based on land rates, structural condition, building age, and legal parameters. It is mandatory for bank loans, mortgage underwriting, capital gains tax calculation (under Section 54/54EC of the IT Act), visa net-worth solvency verification, and legal inheritance settlements.'
      },
      {
        id: 'val-faq-2',
        category: 'Valuation',
        question: 'What is the difference between Guidance Value and Fair Market Value in Bangalore?',
        answer: 'Guidance Value (Circle Rate) is the minimum statutory baseline determined by the Karnataka Government for collecting stamp duty and registration fees. Fair Market Value is the actual price a buyer is willing to pay in the open market, determined by location demand, infrastructure, construction quality, and amenities.'
      },
      {
        id: 'val-faq-3',
        category: 'Valuation',
        question: 'What documents are required to initiate a Property Valuation?',
        answer: 'We require a copy of the registered Sale Deed (Mother Deed chain), latest e-Khata extract/certificate, recent property tax paid receipt, and approved building sanction drawing (if available).'
      },
      {
        id: 'val-faq-4',
        category: 'Valuation',
        question: 'How long does it take to deliver the signed valuation report?',
        answer: 'Once property documents are verified and on-site physical inspection is concluded, the comprehensive valuation dossier is prepared and handed over within 2 to 4 working days.'
      },
      {
        id: 'val-faq-5',
        category: 'Valuation',
        question: 'Are your valuation reports accepted by nationalized and private banks in Bangalore?',
        answer: 'Yes. Our reports are prepared strictly following government-approved valuer guidelines, CPWD depreciation schedules, and bank mortgage documentation standards recognized across SBI, HDFC, ICICI, Axis, Canara Bank, and NBFCs.'
      },
      {
        id: 'val-faq-6',
        category: 'Valuation',
        question: 'Can valuation reports be used for Foreign Visa Net Worth Certificates?',
        answer: 'Yes. We prepare certified Net Worth & Property Asset Valuation dossiers formatted to meet the strict financial solvency requirements of US, UK, Canada, Australia, and European embassies.'
      }
    ];

    return (
      <div className="pt-20 bg-surface-ice text-slate-900">
        {/* ============================================================
            HERO BANNER
        ============================================================ */}
        <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden border-b border-navy-800">
          <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { name: 'Services', href: '/services' },
                { name: 'Property Valuation', href: '/services/property-valuation-bangalore' },
              ]}
              theme="dark"
              className="mb-6"
            />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-sky-300 text-xs font-semibold">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Government-Approved & Bank-Compliant Reports</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Property Valuation in Bangalore
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
                Certified valuation reports for residential homes, vacant plots, commercial buildings, bank loans, visa solvency, and capital gains tax.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-bold hover:bg-sky-500 transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Valuation Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 1: WHAT IS PROPERTY VALUATION?
        ============================================================ */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
                Section 01 • Definition & Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
                What is Property Valuation?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Property Valuation is the structured, technical determination of the realistic economic worth of a property. Our certified engineering valuation incorporates physical land inspection, building replacement cost analysis, CPWD structural depreciation, and prevailing Bengaluru micro-market transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Key Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm">
                      01
                    </div>
                    <h3 className="font-bold text-base text-navy-950">Bank Mortgage & Home Loans</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Determining accurate collateral security value for home loans, top-up loans, and LAP approval across leading banks.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm">
                      02
                    </div>
                    <h3 className="font-bold text-base text-navy-950">Capital Gains Tax (Sec 54/54EC)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fair market value computation as of April 1, 2001 or date of acquisition for accurate income tax deductions.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm">
                      03
                    </div>
                    <h3 className="font-bold text-base text-navy-950">Visa & Immigrant Net Worth</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Certified asset evaluation dossiers required by consulates and immigration authorities for student and investor visas.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-ice border border-slate-200 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm">
                      04
                    </div>
                    <h3 className="font-bold text-base text-navy-950">Family Settlement & Division</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Unbiased, transparent valuation to facilitate fair distribution of ancestral or joint family real estate assets.
                    </p>
                  </div>
                </div>

                {/* Guidance vs Market Value Highlight */}
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Guideline Value vs. Fair Market Value</span>
                  </div>
                  <p className="leading-relaxed">
                    While the <strong>Guidance Value</strong> is the government-fixed minimum threshold for stamp duty, our reports compute the true <strong>Fair Market Value</strong> by analyzing location growth, construction specifications, and verified market trends.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
                  <img
                    src="/images/company/real-project-75.jpeg"
                    alt="Physical Property Valuation Audit Bangalore"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300 block">
                      Physical Inspection & Verification
                    </span>
                    <h4 className="font-bold text-base mt-0.5">On-Site Boundary & Structural Audit</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: WHAT ARE THE VALUATIONS WE DO?
        ============================================================ */}
        <section className="py-16 lg:py-24 bg-surface-ice border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
                Section 02 • Scope & Asset Types
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
                What Are The Valuations We Do?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                We provide comprehensive property and asset assessment services across all property categories in Bengaluru.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {valuationTypes.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-blue/60 hover:shadow-xl transition-all duration-300 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-950">
                        {val.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Included In Valuation Dossier:
                      </span>
                      <ul className="space-y-1.5">
                        {val.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: SIMPLE 3-STEP PROCESS & DIRECT CONSULTATION
        ============================================================ */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
                Section 03 • Fast 3-Step Process
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
                How Our Valuation Process Works
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Get your certified valuation report delivered in 2 to 4 working days through our streamlined 3-step workflow.
              </p>
            </div>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-7 rounded-3xl bg-surface-ice border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl sm:text-5xl font-mono font-black text-brand-blue/15 absolute top-4 right-4 select-none">
                  01
                </span>
                <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest">
                  Step 01
                </span>
                <h3 className="text-lg font-bold text-navy-950">
                  Document Intake & Verification
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Share copies of your Sale Deed, e-Khata, and tax receipts via WhatsApp or email for initial legal review and boundary checks.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-surface-ice border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl sm:text-5xl font-mono font-black text-brand-blue/15 absolute top-4 right-4 select-none">
                  02
                </span>
                <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest">
                  Step 02
                </span>
                <h3 className="text-lg font-bold text-navy-950">
                  On-Site Inspection & CPWD Math
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our practicing structural engineers visit the site, inspect building quality, take measurements, and calculate structural depreciation.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-surface-ice border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <span className="text-4xl sm:text-5xl font-mono font-black text-brand-blue/15 absolute top-4 right-4 select-none">
                  03
                </span>
                <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest">
                  Step 03
                </span>
                <h3 className="text-lg font-bold text-navy-950">
                  Certified Dossier Handover
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Receive the signed, stamped, bank-compliant valuation dossier with complete market calculations within 2–4 working days.
                </p>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="mt-12 rounded-3xl bg-navy-950 text-white p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                    Fast Consultation & Document Review
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Need a Property Valuation Report?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Speak directly with our valuation engineers. We will review your documents and schedule an on-site inspection promptly.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-bold hover:bg-sky-500 transition-all shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {siteConfig.contact.phoneDisplay}</span>
                    </a>

                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Valuation Desk</span>
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3.5 text-xs text-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">Office Location:</strong>
                      <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.postalCode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <strong className="text-white block font-sans">Turnaround Time:</strong>
                      <span>2–4 Working Days Post Inspection</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <strong className="text-white block font-sans">Email Dossier Desk:</strong>
                      <span>{siteConfig.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            VALUATION FAQS SECTION
        ============================================================ */}
        <section className="bg-surface-ice py-16 lg:py-20 border-b border-slate-200">
          <FaqAccordion
            faqs={valuationFaqs}
            title="Property Valuation FAQs"
            subtitle="Frequently asked questions about property appraisals, banks, and tax rules in Bangalore."
            showViewAll={true}
            viewAllLink="/faqs"
            viewAllText="Explore all FAQs"
          />
        </section>
      </div>
    );
  }

  // ============================================================
  // STANDARD SERVICE PAGE LAYOUT (Construction, Interior, Design)
  // ============================================================
  const isConstructionService = [
    'house-construction-bangalore',
    'commercial-construction-bangalore',
    'industrial-construction-bangalore',
    'civil-construction-bangalore'
  ].includes(service.slug);

  const isInteriorService = service.slug === 'interior-design-bangalore';

  const details: DetailedServiceData = serviceDetailsLookup[service.slug] || {
    typologiesTitle: `What We Deliver in ${service.title}`,
    typologiesSubtitle: `We deliver specialized solutions tailored to your plot and specifications in Bengaluru:`,
    typologies: [
      { title: `${service.title} Planning`, desc: service.summary, iconType: 'compass' },
      { title: `Customized Execution`, desc: service.whoIsThisFor[0] || 'Engineered according to site specifications.', iconType: 'shield' },
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

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs?.includes(s.slug)
  );

  const img1 = service.galleryImages?.[0] || { url: service.heroImage, title: service.title, caption: service.tagline };
  const img2 = service.galleryImages?.[1] || img1;
  const img3 = service.galleryImages?.[2] || img1;
  const img4 = service.galleryImages?.[3] || img2;

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
          SCOPE & KEY DELIVERABLES (2-COLUMN CLEAN ARCHITECTURE)
      ============================================================ */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Scope & Deliverables Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
                  Core Engineering Scope
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-snug">
                  Scope & Key Deliverables
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.summary}
                </p>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3 pt-2">
                {service.scopeInclusions.map((inclusion, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-surface-ice border border-slate-200/80 hover:border-brand-blue/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-navy-950 leading-relaxed">
                      {inclusion}
                    </span>
                  </div>
                ))}
              </div>

              {/* Execution Workflow / Process Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.whatWeHelpWith.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1"
                  >
                    <span className="text-[10px] font-bold font-mono text-amber-600 uppercase tracking-wider block">
                      Stage 0{idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-navy-950">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contextual Feature Image */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
                <img
                  src={img1.url}
                  alt={img1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1 pt-1 space-y-1">
                <h4 className="font-bold text-base text-navy-950">{img1.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{img1.caption}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          PACKAGES & PRICING (FOR CONSTRUCTION & INTERIORS)
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
                      href="#contact"
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
          PREVIOUS PROJECTS SHOWCASE
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
          STANDARDIZED FAQ SECTION
      ============================================================ */}
      <section className="bg-surface-ice border-b border-slate-200">
        <FaqAccordion
          faqs={service.faqs.map((f, i) => ({
            id: `service-faq-${i}`,
            category: 'General' as const,
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
          CLEAN DIRECT CONTACT / NEXT STEPS
      ============================================================ */}
      <section id="contact" className="py-16 lg:py-20 bg-surface-ice">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                  Direct Engineering Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Discuss Your {service.title} Project
                </h2>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  Call us or message on WhatsApp to discuss plot location, space requirements, or timeline estimates directly with practicing engineers.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs font-bold hover:bg-sky-500 transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3.5 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans">Office Location:</strong>
                    <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-sans">Working Hours:</strong>
                    <span>Mon - Sat: 9:30 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-sans">Email:</strong>
                    <span>{siteConfig.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
