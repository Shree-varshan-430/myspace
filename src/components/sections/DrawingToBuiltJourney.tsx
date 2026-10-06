'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Compass,
  Layers,
  Sparkles,
  CheckCircle2,
  MoveHorizontal,
  Eye,
  Building2,
  Check,
  Maximize2,
  Ruler,
  Grid,
  Home
} from 'lucide-react';
import Link from 'next/link';

interface ComparisonItem {
  id: string;
  title: string;
  location: string;
  category: string;
  floorPlanType: string;
  drawingImage: string;
  builtImage: string;
  drawingLabel: string;
  builtLabel: string;
  stats: {
    builtArea: string;
    timeline: string;
    adherence: string;
  };
  drawingHighlights: string[];
  builtHighlights: string[];
  description: string;
  floorPlanRooms: {
    name: string;
    dims: string;
    coords: { top: string; left: string; width: string; height: string };
  }[];
}

const comparisonProjects: ComparisonItem[] = [
  {
    id: 'villa-facade',
    title: 'Contemporary 4-BHK Courtyard Villa',
    location: 'Whitefield Enclave, Bengaluru',
    category: 'Turnkey Residential',
    floorPlanType: '2D Architectural Floor Plan (G+1)',
    drawingImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
    builtImage: '/images/company/showroom-1.jpeg',
    drawingLabel: 'BEFORE: 2D Floor Plan & CAD Blueprint',
    builtLabel: 'AFTER: Executed Physical Building',
    stats: {
      builtArea: '4,200 sq.ft',
      timeline: '11 Months',
      adherence: '100% Dimensional Match'
    },
    drawingHighlights: [
      'Vastu-aligned living & courtyard cross-ventilation',
      'Structural column grids (C1-C18) & MEP conduit runs',
      'Precise wall thickness & setback boundary compliance'
    ],
    builtHighlights: [
      'Exact spatial flow translation with zero wall deviations',
      'Monolithic concrete cantilever & double-height glazing',
      'Turnkey handover with zero punch-list snags'
    ],
    description: 'From a millimeter-precise 2D CAD floor plan with central courtyard zoning to an iconic modern luxury residence delivered exactly as blueprinted.',
    floorPlanRooms: [
      { name: 'FOYER & PARKING', dims: "14'0\" × 18'6\"", coords: { top: '65%', left: '8%', width: '25%', height: '28%' } },
      { name: 'CENTRAL COURTYARD', dims: "12'0\" × 16'0\"", coords: { top: '35%', left: '38%', width: '24%', height: '30%' } },
      { name: 'DOUBLE LIVING', dims: "22'0\" × 15'6\"", coords: { top: '15%', left: '8%', width: '28%', height: '42%' } },
      { name: 'KITCHEN & DINING', dims: "18'0\" × 14'0\"", coords: { top: '15%', left: '66%', width: '26%', height: '38%' } },
      { name: 'MASTER SUITE 01', dims: "16'0\" × 15'0\"", coords: { top: '58%', left: '66%', width: '26%', height: '34%' } }
    ]
  },
  {
    id: 'open-living',
    title: 'G+2 Multi-Generational Urban Residence',
    location: 'HSR Layout Sector 2, Bengaluru',
    category: 'Bespoke Turnkey Home',
    floorPlanType: 'Structural & Spatial Blueprint (G+2)',
    drawingImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    builtImage: '/images/company/real-project-83.jpeg',
    drawingLabel: 'BEFORE: CAD Floor Plan & Sectional Plan',
    builtLabel: 'AFTER: Completed Multi-Storey Building',
    stats: {
      builtArea: '5,600 sq.ft',
      timeline: '13 Months',
      adherence: '99.8% Tolerance Accuracy'
    },
    drawingHighlights: [
      'Elevator shaft core & cantilever balcony structural load',
      'Dual-kitchenette zoning & acoustic party-wall layout',
      'Sub-surface drainage & solar conduit routing'
    ],
    builtHighlights: [
      'Structural cantilevers cast to millimeter tolerances',
      'Precision wooden louver & weather-resistant exterior cladding',
      'BBMP occupancy guideline compliance & property valuation dossier'
    ],
    description: 'Multi-level floor plans engineered for family privacy, converted into a striking contemporary multi-storey home with integrated private decks.',
    floorPlanRooms: [
      { name: 'CAR PORT & ENTRY', dims: "20'0\" × 16'0\"", coords: { top: '65%', left: '10%', width: '26%', height: '28%' } },
      { name: 'FAMILY LOUNGE', dims: "20'0\" × 18'0\"", coords: { top: '20%', left: '10%', width: '32%', height: '40%' } },
      { name: 'LIFT & STAIR CORE', dims: "10'0\" × 8'0\"", coords: { top: '35%', left: '46%', width: '14%', height: '25%' } },
      { name: 'MASTER BEDROOM', dims: "16'0\" × 16'0\"", coords: { top: '18%', left: '64%', width: '28%', height: '38%' } },
      { name: 'DECK / BALCONY', dims: "18'0\" × 8'0\"", coords: { top: '62%', left: '64%', width: '28%', height: '28%' } }
    ]
  },
  {
    id: 'urban-elevation',
    title: 'Minimalist Penthouse & Rooftop Villa',
    location: 'Indiranagar 100ft Road, Bengaluru',
    category: 'Luxury Penthouse Architecture',
    floorPlanType: 'Penthouse Layout & Terrace Zoning',
    drawingImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
    builtImage: '/images/company/showroom-5.jpeg',
    drawingLabel: 'BEFORE: Penthouse Floor Plan & MEP Layout',
    builtLabel: 'AFTER: Finished Architectural Penthouse',
    stats: {
      builtArea: '3,800 sq.ft',
      timeline: '8 Months',
      adherence: '100% Material & Plan Match'
    },
    drawingHighlights: [
      'Rooftop plunge pool dead-weight structural load plan',
      'Wraparound terrace planter drainage & waterproofing details',
      'Panoramic glass façade wind-load engineering'
    ],
    builtHighlights: [
      'Turnkey luxury execution matching the 2D layout 1-to-1',
      'Frameless thermal-break glass façade installation',
      'Zero leakage guarantee on terrace pool & planters'
    ],
    description: 'Complex rooftop floor plan layout transformed into a spacious sanctuary with open-plan indoor-outdoor terrace living.',
    floorPlanRooms: [
      { name: 'PRIVATE LOBBY', dims: "10'0\" × 12'0\"", coords: { top: '60%', left: '10%', width: '22%', height: '30%' } },
      { name: 'OPEN LIVING & BAR', dims: "28'0\" × 18'0\"", coords: { top: '15%', left: '10%', width: '38%', height: '42%' } },
      { name: 'CHEF KITCHEN', dims: "14'0\" × 12'0\"", coords: { top: '58%', left: '36%', width: '20%', height: '32%' } },
      { name: 'SKY SUITE', dims: "18'0\" × 16'0\"", coords: { top: '15%', left: '60%', width: '30%', height: '40%' } },
      { name: 'TERRACE DECK', dims: "24'0\" × 12'0\"", coords: { top: '60%', left: '60%', width: '30%', height: '30%' } }
    ]
  }
];

export default function DrawingToBuiltJourney() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject = comparisonProjects[activeProjectIndex];

  // Handle Dragging
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const positionPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(positionPercent);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <Home className="w-4 h-4 text-brand-blue" />
              <span>Transformation Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-[1.15] max-w-2xl">
              Floor Plan Design to Proper Built Building.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed max-w-md">
            Experience our Before & After case study: slide between the approved 2D CAD architectural floor plan and the finished physical building structure delivered with 100% precision.
          </p>
        </div>

        {/* Project Switcher Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {comparisonProjects.map((project, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-navy-950 hover:border-slate-300'
                }`}
              >
                <span className={`font-mono text-xs ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                  Case 0{idx + 1}
                </span>
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Before/After Comparison Viewport */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-xl">
          {/* Main Visual Slider Frame */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onClick={(e) => handleMove(e.clientX)}
            className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] bg-slate-950 cursor-ew-resize group touch-none"
          >
            {/* Layer 1: The Proper Built Physical Building (Underneath / After Case) */}
            <img
              src={activeProject.builtImage}
              alt="Proper Built Building Result"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* Layer 1 Badge (AFTER: Built Building - Right Side) */}
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-lg bg-navy-950/90 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold font-mono flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeProject.builtLabel}</span>
            </div>

            {/* Layer 2: 2D Floor Plan Design & CAD Blueprint (Clipped on Left / Before Case) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Floor Plan Underlying Blueprint Image / CAD Draft */}
              <div
                className="absolute inset-0 bg-[#0B1E3B]"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              >
                <img
                  src={activeProject.drawingImage}
                  alt="2D Floor Plan Blueprint Design"
                  className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter contrast-125"
                  draggable={false}
                />

                {/* Blueprint CAD Grid Overlay */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(96, 165, 250, 0.25) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(96, 165, 250, 0.25) 1px, transparent 1px),
                      linear-gradient(to right, rgba(96, 165, 250, 0.6) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(96, 165, 250, 0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px'
                  }}
                />

                {/* Architectural 2D Floor Plan Schematic Vector Graphics */}
                <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between">
                  {/* Blueprint Title Block Header */}
                  <div className="flex items-center justify-between text-blue-200/90 font-mono text-[10px] sm:text-xs border-b border-blue-400/40 pb-2">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
                      <span className="font-bold tracking-wider text-white uppercase">
                        ARCHITECTURAL WORKING DRAWING // {activeProject.floorPlanType}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-blue-300/80">
                      <span>SCALE: 1:100 @ A1</span>
                      <span>PROJECT ID: MS-BLR-2026</span>
                    </div>
                  </div>

                  {/* Floor Plan Room Layout & Spatial Zoning Boxes */}
                  <div className="relative flex-1 my-3 sm:my-4 border-2 border-blue-400/60 rounded-lg bg-blue-950/40 backdrop-blur-xs overflow-hidden">
                    {/* Architectural Dimension Ticks */}
                    <div className="absolute top-1 left-3 text-[9px] font-mono text-amber-300/90 flex items-center gap-1">
                      <Ruler className="w-3 h-3" />
                      <span>PLOT BOUNDARY: 60&apos;0&quot; × 40&apos;0&quot;</span>
                    </div>

                    {/* Interactive Floor Plan Room Boxes */}
                    {activeProject.floorPlanRooms.map((room, rIdx) => (
                      <div
                        key={rIdx}
                        className="absolute border border-blue-300/70 bg-blue-900/30 rounded flex flex-col items-center justify-center p-1 text-center transition-all"
                        style={{
                          top: room.coords.top,
                          left: room.coords.left,
                          width: room.coords.width,
                          height: room.coords.height
                        }}
                      >
                        {/* Door swing / corner tick mark */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-amber-400" />
                        <span className="font-mono text-[9px] sm:text-[11px] font-bold text-white tracking-wide leading-tight">
                          {room.name}
                        </span>
                        <span className="font-mono text-[8px] sm:text-[10px] text-blue-300 font-medium">
                          {room.dims}
                        </span>
                      </div>
                    ))}

                    {/* Center North Indicator Icon */}
                    <div className="absolute bottom-2 right-2 flex flex-col items-center justify-center p-1.5 rounded bg-blue-950/80 border border-blue-400/50 text-[9px] font-mono text-blue-200">
                      <span className="font-bold text-amber-400">N</span>
                      <span className="text-[10px]">▲</span>
                    </div>
                  </div>

                  {/* CAD Footer Note */}
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-blue-300/90 pt-1 border-t border-blue-400/30">
                    <span className="text-amber-300">● STRUCTURAL &amp; MEP SANCTIONED</span>
                    <span className="truncate max-w-[240px] sm:max-w-none">
                      BUILT-UP: {activeProject.stats.builtArea}
                    </span>
                  </div>
                </div>
              </div>

              {/* Layer 2 Badge (BEFORE: 2D Floor Plan - Left Side) */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-blue-600/95 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold font-mono flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                <span>{activeProject.drawingLabel}</span>
              </div>
            </div>

            {/* Vertical Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Crisp Divider Bar with Ambient Glow */}
              <div className="absolute top-0 bottom-0 -left-0.5 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)]" />

              {/* Center Draggable Floating Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-navy-950 shadow-2xl flex items-center justify-center border-2 border-slate-100 group-hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-brand-blue" />
              </div>
            </div>

            {/* Bottom Floating Drag Helper Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/15 text-white text-[10px] sm:text-xs font-medium tracking-wide pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
              ◀ Drag slider to transform Floor Plan into Proper Building ▶
            </div>
          </div>

          {/* Quick Preset Buttons & Project Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                <span className="text-brand-blue font-semibold">{activeProject.category}</span>
                <span>•</span>
                <span>{activeProject.location}</span>
                <span>•</span>
                <span className="text-emerald-600 font-semibold">{activeProject.stats.builtArea}</span>
              </div>
              <h3 className="font-sans font-bold text-lg sm:text-xl text-navy-950">
                {activeProject.title}
              </h3>
            </div>

            {/* Position Presets */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setSliderPosition(100)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sliderPosition === 100
                    ? 'bg-white text-navy-950 shadow-xs'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                100% Floor Plan (Before)
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sliderPosition === 50
                    ? 'bg-white text-navy-950 shadow-xs'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                50/50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sliderPosition === 0
                    ? 'bg-white text-navy-950 shadow-xs'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                100% Built Building (After)
              </button>
            </div>
          </div>

          {/* Side-by-Side Before & After Transformation Dossier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Left: Before Floor Plan Design Rigor */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs font-mono">
                    01
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phase 01 Design
                    </span>
                    <h4 className="font-sans font-bold text-sm text-navy-950">
                      Floor Plan &amp; Blueprint Precision
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                  Before
                </span>
              </div>
              <ul className="space-y-2.5 mb-4">
                {activeProject.drawingHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                    <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Sanction Tolerance: ±0mm</span>
                <span className="text-slate-700 font-semibold">{activeProject.floorPlanType}</span>
              </div>
            </div>

            {/* Right: After Physical Execution Reality */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs font-mono">
                    02
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phase 02 Outcome
                    </span>
                    <h4 className="font-sans font-bold text-sm text-navy-950">
                      Proper Built Building Reality
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                  After
                </span>
              </div>
              <ul className="space-y-2.5 mb-4">
                {activeProject.builtHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Delivery: {activeProject.stats.timeline}</span>
                <span className="text-emerald-700 font-semibold">{activeProject.stats.adherence}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



