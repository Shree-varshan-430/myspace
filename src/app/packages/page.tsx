import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Home,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  Ruler,
  Award
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Construction Packages & Pricing Bangalore | My Space',
  description: 'Explore transparent construction packages for independent houses, villas, and commercial buildings in Bangalore. Clear specifications, itemized BOQ, and fixed milestone payments.',
  openGraph: {
    title: 'Construction Packages & Pricing Bangalore | My Space',
    description: 'Transparent turnkey house construction packages in Bengaluru with strict engineering supervision.',
  },
};

const constructionPackages = [
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
    ],
    structural: {
      steel: 'Fe 550D grade TMT (Tata / JSW / Kamdhenu)',
      cement: 'Grade 53/43 (UltraTech / ACC / Birla Super)',
      aggregate: '20mm & 40mm machine crushed granite',
      sand: 'Manufactured sand (M-Sand) for masonry, P-Sand for plastering',
      curing: 'Continuous 14 to 21-day pond & spray curing cycles'
    },
    finishes: {
      flooring: '2x2 ft Double Charged Vitrified Tiles',
      kitchen: 'Granite Countertop (20mm) with SS Sink & 2ft ceramic dado',
      bathroom: 'Anti-skid tiles & ceramic wall dado up to 7ft; Parryware/Cera sanitaryware',
      doors: 'Teak wood main door frame (5"x3"); flush internal doors with veneer polish',
      windows: '3-track UPVC sliding windows with mosquito mesh'
    }
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
    ],
    structural: {
      steel: 'Tata Tiscon / JSW Neosteel 550D exclusively',
      cement: 'UltraTech Super / Birla Super 53-grade with waterproofing admixtures',
      aggregate: 'Machine washed blue granite aggregate',
      sand: 'Triple-washed certified plaster sand and masonry sand',
      curing: 'Full 21-day water curing with geotextile hessian cloth'
    },
    finishes: {
      flooring: '4x2 ft Glazed Vitrified Tiles (GVT) or Italian Marble look vitrified slabs / Sadarahalli granite stairs',
      kitchen: 'Black Galaxy / Jet Black Granite with Quartz/Franke sink & 3ft designer wall tiles',
      bathroom: 'Jaquar / Grohe fixtures, concealed flush valves, full height 8ft wall tiles',
      doors: 'First quality Teak wood main door (5"x4" frame) with brass/SS architectural hardware',
      windows: 'Finesta / Kommerling German UPVC windows with toughened glass & security grills'
    }
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
    ],
    structural: {
      steel: 'Tata Tiscon 550D with automated bar-bending fabrication',
      cement: 'UltraTech Ready Mix Concrete (RMC) M25/M30 with certified cube testing',
      aggregate: 'Graded basalt and granite crushed stone',
      sand: 'High-purity washed river/manufactured sand',
      curing: '28-day curing regime with automated chemical curing compounds'
    },
    finishes: {
      flooring: 'Imported Italian Marble (Bottochino / Diana) + Wooden Laminated Planks',
      kitchen: 'Exotic Quartz / Corian counter with Häfele/Blum kitchen hardware provision',
      bathroom: 'Hansgrohe / Toto wall-hung rimless commodes, glass partition enclosures & rain showers',
      doors: 'Solid Burma Teak (6"x4" frame) with smart biometric digital door lock',
      windows: 'Thermal-break Aluminium / Premium Schuco UPVC double-glazed systems'
    }
  }
];

export default function PackagesPage() {
  return (
    <div className="pt-20 bg-surface-ice">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Packages & Pricing', href: '/packages' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              House Construction Cost in Bangalore & Turnkey Packages
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Transparent per-sq.ft residential pricing in Bangalore with zero hidden charges, itemized BOQ, and milestone payments.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            Residential Packages
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            Compare Residential Construction Packages & Specifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All turnkey packages include architectural drawings, structural engineering, BBMP-compliant execution, and formal handover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {constructionPackages.map((pkg) => (
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
                  Most Popular for Bengaluru Villas
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
                      {pkg.id.toUpperCase()}
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
                    Built-up area pricing • Includes material + skilled labour
                  </span>
                </div>

                {/* Key Inclusions */}
                <div className="space-y-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block ${
                      pkg.popular ? 'text-slate-200' : 'text-navy-950'
                    }`}
                  >
                    Key Specifications Included:
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
                <Link
                  href={`/contact?intent=start-project&package=${pkg.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-brand-blue text-white hover:bg-sky-500 shadow-blueprint'
                      : 'bg-navy-950 text-white hover:bg-brand-blue shadow-sm'
                  }`}
                >
                  <span>Select {pkg.name} Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle space-y-8">
          <div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Specification Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
              Technical Material Comparison by Package
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-navy-950 font-bold">
                  <th className="p-3.5 rounded-l-xl">Component</th>
                  <th className="p-3.5">Classic Standard (₹1,850/sq.ft)</th>
                  <th className="p-3.5 bg-blue-50/50 text-brand-blue">Premium Luxury (₹2,250/sq.ft)</th>
                  <th className="p-3.5 rounded-r-xl">Royal Signature (₹2,850/sq.ft)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Steel Rebar</td>
                  <td className="p-3.5">Tata / JSW Fe 550D Rebar</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">Tata Tiscon 550D Exclusively</td>
                  <td className="p-3.5">Tata Tiscon 550D + Custom BBS</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Cement Grade</td>
                  <td className="p-3.5">UltraTech / ACC 53-grade</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">UltraTech Super / Birla 53-grade</td>
                  <td className="p-3.5">UltraTech RMC M25/M30 with Cube testing</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Living Flooring</td>
                  <td className="p-3.5">2x2 Double Charged Vitrified Tiles</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">4x2 Glazed Vitrified Tiles / Sadarahalli Granite</td>
                  <td className="p-3.5">Imported Italian Marble / Engineered Hardwood</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Bathroom Fixtures</td>
                  <td className="p-3.5">Parryware / Cera with CPVC Lines</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">Jaquar / Kohler with Concealed Diverters</td>
                  <td className="p-3.5">Grohe / Hansgrohe Thermostatic Concealed Systems</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Main Door</td>
                  <td className="p-3.5">Teak wood frame with flush door</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">First Quality Teak wood frame (5"x4")</td>
                  <td className="p-3.5">Burma Teak Solid Panel (6"x4") with Biometric lock</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Windows</td>
                  <td className="p-3.5">3-track UPVC sliding with mesh</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">Finesta / Kommerling UPVC with Toughened glass</td>
                  <td className="p-3.5">Schuco / Thermal-Break Double Glazed Systems</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Waterproofing</td>
                  <td className="p-3.5">Standard Terrace & Sump coat</td>
                  <td className="p-3.5 bg-blue-50/20 font-semibold text-brand-blue">72-hr pond testing + crystalline sumps</td>
                  <td className="p-3.5">10-Year Certified multi-tier warranty membrane</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What Is Always Included Section */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
              Engineering Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Quality Standards & Engineering Guarantee
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
              <h4 className="font-bold text-sm text-white">Engineering Oversight</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated civil engineer assigned on site with 200+ quality audit checkpoint inspections.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <FileSpreadsheet className="w-6 h-6 text-brand-gold" />
              <h4 className="font-bold text-sm text-white">Fixed Itemized BOQ</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Itemized quantities, branded materials, and locked per-sq.ft rate before ground breaking.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <Layers className="w-6 h-6 text-brand-blue" />
              <h4 className="font-bold text-sm text-white">Milestone Stage Payments</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Payments released only after you verify completion of each physical structural stage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-700 space-y-2">
              <Award className="w-6 h-6 text-brand-gold" />
              <h4 className="font-bold text-sm text-white">As-Built Documentation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Concealed electrical/plumbing routing maps and 10-year structural warranty at handover.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Form CTA */}
        <section className="pt-6 border-t border-slate-200">
          <EnquiryForm
            title="Get a Custom House Construction Cost Estimate & BOQ"
            subtitle="Share your plot location, dimensions, and preferred specification package to receive a detailed cost breakdown."
          />
        </section>
      </section>
    </div>
  );
}
