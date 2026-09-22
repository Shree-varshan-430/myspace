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
  RotateCcw,
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

  // Helper matching function
  const matchItem = (itemCat: string, itemLoc: string) => {
    const matchesCat = selectedCategory === 'All' || itemCat.toLowerCase() === selectedCategory.toLowerCase();
    const matchesLoc =
      selectedLocation === 'All' ||
      itemLoc.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesCat && matchesLoc;
  };

  // Filter Gallery Images
  const filteredGallery = allProjectGalleryImages.filter((item) =>
    matchItem(item.category, item.location)
  );

  // Filter Case Studies
  const filteredProjects = projectsData.filter((p) =>
    matchItem(p.category, p.location)
  );

  const isFiltered = selectedCategory !== 'All' || selectedLocation !== 'All';

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedLocation('All');
  };

  return (
    <div className="pt-20 bg-surface-ice min-h-screen">
      {/* Top Hero Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <InnerPageHeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: 'Projects & Visual Archive', href: '/projects' }]}
            theme="dark"
            className="mb-5"
          />

          <div className="max-w-3xl space-y-3">
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

          {/* View Mode Switcher with Dynamic Filtered Counts */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'bg-white text-navy-950 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span>All Works Gallery ({filteredGallery.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('case-studies')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'case-studies'
                  ? 'bg-white text-navy-950 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>In-Depth Case Studies ({filteredProjects.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content & Filter Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Filters Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-brand-blue" />
              <span>Filter Portfolio By Work Type & Location</span>
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-blue bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Work Type / Category Filter */}
          <div>
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 block">
              Work Category
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs transition-all ${
                      isSelected
                        ? 'bg-navy-950 text-white shadow-sm font-bold'
                        : 'bg-surface-ice text-slate-600 hover:bg-slate-200/70 hover:text-navy-950 font-medium'
                    }`}
                  >
                    {cat === 'All' ? 'All Categories' : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location Filter */}
          <div className="pt-3 border-t border-slate-100">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 block">
              Bengaluru Micro-Location
            </span>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => {
                const isSelected = selectedLocation === loc;
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                      isSelected
                        ? 'bg-brand-blue text-white font-bold shadow-sm'
                        : 'bg-surface-ice border border-slate-200/60 text-slate-600 hover:bg-slate-100 hover:text-navy-950 font-medium'
                    }`}
                  >
                    {loc === 'All' ? 'All Locations' : loc}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================
            TAB 1: ALL WORKS GALLERY
        ============================================================ */}
        {activeTab === 'gallery' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                Showing <strong className="text-navy-950 font-bold">{filteredGallery.length}</strong> tagged photographic records
              </p>
              {isFiltered && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {filteredGallery.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
                <p className="text-sm sm:text-base text-slate-600 font-sans">
                  No photos match "{selectedCategory}" in "{selectedLocation}".
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Show All Works</span>
                </button>
              </div>
            ) : (
              <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((item) => (
                  <StaggerItem key={item.id} className="h-full">
                    <div
                      onClick={() => setActiveLightboxImage(item)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        {/* Image Container */}
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
                        <div className="p-5 space-y-2.5">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono font-bold text-[10px] uppercase tracking-wider">
                            {item.workType}
                          </span>

                          <h3 className="font-bold text-base sm:text-lg text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                            {item.title}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Location Tag */}
                      <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
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
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs sm:text-sm text-slate-500 font-mono">
                Showing <strong className="text-navy-950 font-bold">{filteredProjects.length}</strong> comprehensive case studies
              </p>
              {isFiltered && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
                <p className="text-sm sm:text-base text-slate-600 font-sans">
                  No case studies match "{selectedCategory}" in "{selectedLocation}".
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-navy-950 text-white text-xs font-semibold hover:bg-brand-blue transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Show All Case Studies</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
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
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-navy-950/85 backdrop-blur-sm text-white text-[11px] font-semibold">
                          {project.category}
                        </div>
                        <div
                          className={`absolute top-3 right-3 px-2.5 py-0.5 rounded text-[10px] font-semibold ${
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

                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{project.location}</span>
                        </div>
                        <h2 className="text-lg font-bold text-navy-950 group-hover:text-brand-blue transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>

                        <div className="pt-1 flex flex-wrap gap-1.5">
                          {project.materialsUsed.slice(0, 3).map((mat, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-surface-ice border border-slate-200/80 text-[10px] text-slate-700 font-medium font-mono"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 border-t border-slate-100">
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

              <div className="p-5 sm:p-7 space-y-2.5 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono font-bold text-xs uppercase tracking-wider">
                    {activeLightboxImage.workType}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600 font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{activeLightboxImage.location}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl text-navy-950 font-bold">
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
        <div className="mt-16 pt-10 border-t border-slate-200">
          <EnquiryForm
            title="Free Construction Consultation & Architectural Layout"
            subtitle="Tell us about your plot location, dimensions, or requirement, and our engineers will share floor plan options and a BOQ."
          />
        </div>
      </section>
    </div>
  );
}
