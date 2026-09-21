import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectsData, ProjectItem } from '@/data/projects';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  MapPin,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Building,
  Check,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found | My Space' };

  return {
    title: `${project.title} | ${project.location} | My Space Bangalore`,
    description: `${project.summary} Explore client brief, engineering contribution, blueprints, and materials for this ${project.category.toLowerCase()} project in Bengaluru.`,
    openGraph: {
      title: `${project.title} | My Space Project Case Study`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 bg-surface-ice">
      {/* Top Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Projects', href: '/projects' },
              { name: project.title, href: `/projects/${project.slug}` },
            ]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-brand-blue text-white text-xs font-semibold">
                {project.category}
              </span>
              <span className={`px-2.5 py-1 rounded text-xs font-semibold ${
                project.status === 'Completed'
                  ? 'bg-emerald-900/90 text-emerald-200'
                  : project.status === 'Ongoing'
                  ? 'bg-amber-900/90 text-amber-200'
                  : 'bg-blue-900/90 text-blue-200'
              }`}>
                {project.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-mono pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>{project.location}</span>
              </div>
              <span className="text-navy-700">•</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-brand-gold" />
                <span>{project.builtUpArea}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed pt-2">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Brief & Contribution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Client Brief */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-subtle space-y-4">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
              The Client Brief
            </span>
            <h2 className="text-2xl font-bold text-navy-950">
              Need & Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.clientBrief}
            </p>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Key Architectural Features:
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {project.keyFeatures.map((kf, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-2.5 h-2.5" />
                    </div>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: My Space Contribution */}
          <div className="lg:col-span-7 bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-elevated space-y-4">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              Engineering Governance
            </span>
            <h2 className="text-2xl font-bold text-white">
              My Space Engineering Contribution
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We acted as the single accountable team managing architectural drawings, structural calculations, on-site civil casting, and material coordination.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
              {project.mySpaceContribution.map((contrib, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-navy-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Primary Materials & Finishes:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.materialsUsed.map((mat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300 font-medium"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blueprint & Visual Gallery */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
              Visual & Structural Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
              Drawings, Progress & Completed Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-subtle hover:shadow-card transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-navy-950/80 backdrop-blur-sm text-white text-[11px] font-semibold uppercase">
                    {img.type}
                  </div>
                </div>
                <div className="p-4 text-xs font-medium text-slate-700">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Enquiry Form */}
        <div className="pt-10 border-t border-slate-200">
          <EnquiryForm
            title={`Plan a Project Similar to ${project.title}`}
            subtitle="Share your plot details, location, and requirements to begin a structured design and engineering consultation with My Space."
          />
        </div>
      </section>
    </div>
  );
}
