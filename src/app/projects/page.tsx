'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InnerPageHeroBackground from '@/components/ui/InnerPageHeroBackground';
import { projectsData, allProjectGalleryImages, ProjectGalleryItem } from '@/data/projects';
import {
  ArrowRight,
  Compass,
  MapPin,
  Eye,
  CheckCircle2,
  SlidersHorizontal,
  Grid3X3,
  Layers,
  X,
  Building2,
  HardHat,
  Palette,
  Home
} from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function ProjectsIndexPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'case-studies'>('gallery');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState<ProjectGalleryItem | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Civil', 'Interiors', 'Elevation & 3D'];

  const locations = [
    'All',
    'Sarjapur Road',
    'HSR Layout',
    'Indiranagar',
    'Whitefield',
    'Koramangala',
    'JP Nagar',
    'Outer Ring Road',
    'Electronic City',
    'Hebbal',
    'Yelahanka',
    'Jayanagar'
  ];

  // Filter Gallery Images
  const filteredGallery = allProjectGalleryImages.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesLoc = selectedLocation === 'All' || item.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesCat && matchesLoc;
  });

  // Filter Case Studies
  const filteredProjects = projectsData.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesLoc = selectedLocation === 'All' || p.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesCat && matchesLoc;
  });

  return (
    <div className="pt-20 bg-surface-ice min-h-screen">
      {/* Top Hero Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Projects & Visual Archive', href: '/projects' }]}
            theme="dark"
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <Home className="w-4 h-4 text-sky-400" />
              <span>CONSTRUCTION & ARCHITECTURE PORTFOLIO</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Completed Construction Projects in Bangalore
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              Photographic archives and detailed case studies of our completed turnkey homes, villas, commercial buildings, and interiors across Bengaluru.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'bg-white text-navy-950 shadow-lg font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span>All Works Gallery ({allProjectGalleryImages.length} Photos)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('case-studies')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'case-studies'
                  ? 'bg-white text-navy-950 shadow-lg font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>In-Depth Case Studies ({projectsData.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content & Filter Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Filters Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm mb-10 space-y-5">
          {/* Work Type / Category Filter */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-blue" />
              <span>Filter by Type of Work Done</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-navy-950 text-white shadow-sm font-semibold'
                      : 'bg-surface-ice text-slate-600 hover:bg-slate-200/70 hover:text-navy-950'
                  }`}
                >
                  {cat === 'All' ? 'All Work Categories' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span>Filter by Bengaluru Location</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    selectedLocation === loc
                      ? 'bg-brand-blue text-white font-bold'
                      : 'bg-surface-ice border border-slate-200/60 text-slate-600 hover:bg-slate-100 hover:text-navy-950'
                  }`}
                >
                  {loc === 'All' ? 'All Locations' : loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            TAB 1: ALL WORKS GALLERY (TAGGED WITH LOCATION & WORK TYPE)
        ============================================================ */}
        {activeTab === 'gallery' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                Showing <strong className="text-navy-950 font-bold">{filteredGallery.length}</strong> tagged photographic records
              </p>
              {(selectedCategory !== 'All' || selectedLocation !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLocation('All');
                  }}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {filteredGallery.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
                <p className="text-base text-slate-600 font-sans">No projects match the selected category and location filter.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLocation('All');
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors"
                >
                  View All Works
                </button>
              </div>
            ) : (
              <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredGallery.map((item) => (
                  <StaggerItem key={item.id} className="h-full">
                    <div
                      onClick={() => setActiveLightboxImage(item)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        {/* Image Container with Hover Zoom */}
                        <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                          {/* Top-Right Category Badge */}
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-navy-950/85 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] font-semibold uppercase tracking-wider">
                            {item.category}
                          </div>

                          {/* Quick View Icon Pill */}
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Expand</span>
                          </div>
                        </div>

                        {/* Tagged Metadata & Description */}
                        <div className="p-5 sm:p-6 space-y-3">
                          {/* TAG 1: Type of Work Done */}
                          <div className="flex items-center gap-1.5">
                            <span className="px-2.5 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono font-bold text-[11px] uppercase tracking-wider">
                              {item.workType}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-xl text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                            {item.title}
                          </h3>

                          {/* Description of work */}
                          <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* TAG 2: Location Footer Tag */}
                      <div className="px-5 sm:p-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 font-mono text-slate-700 font-semibold text-[11px]">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                        <span className="text-[11px] font-mono text-brand-blue font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          View Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        )}

        {/* ============================================================
            TAB 2: IN-DEPTH CASE STUDIES
        ============================================================ */}
        {activeTab === 'case-studies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-950/85 backdrop-blur-sm text-white text-xs font-semibold">
                      {project.category}
                    </div>
                    <div
                      className={`absolute top-3 right-3 px-2.5 py-0.5 rounded text-[11px] font-semibold ${
                        project.status === 'Completed'
                          ? 'bg-emerald-900/90 text-emerald-200'
                          : project.status === 'Ongoing'
                          ? 'bg-amber-900/90 text-amber-200'
                          : 'bg-blue-900/90 text-blue-200'
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{project.location}</span>
                    </div>
                    <h2 className="text-xl font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.materialsUsed.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded bg-surface-ice border border-slate-200/80 text-[10px] text-slate-700 font-medium font-mono"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-steel transition-colors"
                  >
                    <span>View Project Case Study & Blueprints</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {activeLightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLightboxImage(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full border border-white/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={activeLightboxImage.imageUrl}
                  alt={activeLightboxImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono font-bold text-xs uppercase tracking-wider">
                    {activeLightboxImage.workType}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600 font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{activeLightboxImage.location}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl text-navy-950 font-bold">
                  {activeLightboxImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {activeLightboxImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Consultation CTA */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <EnquiryForm
            title="Free Construction Consultation & Architectural Layout"
            subtitle="Tell us about your plot location, dimensions, or requirement, and our engineers will share floor plan options and a BOQ."
          />
        </div>
      </section>
    </div>
  );
}
