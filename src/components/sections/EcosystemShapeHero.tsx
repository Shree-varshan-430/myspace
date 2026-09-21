import React from 'react';

interface EcosystemShapeHeroProps {
  primaryImage?: string;
  topImage?: string;
  leftImage?: string;
  bottomImage?: string;
}

export default function EcosystemShapeHero({
  topImage = '/images/company/showroom-1.jpeg',
  leftImage = '/images/company/real-project-54.jpeg',
  bottomImage = '/images/company/showroom-3.jpeg',
}: EcosystemShapeHeroProps) {
  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] aspect-square flex items-center justify-center select-none">
      
      {/* Ambient Atmospheric Glow */}
      <div className="absolute inset-2 bg-gradient-to-tr from-brand-blue/20 via-brand-gold/15 to-emerald-500/15 rounded-full blur-3xl transform scale-95 pointer-events-none" />
      
      {/* SVG Container with Interconnected Ecosystem Swirl Masks */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top Swirl Petal Mask */}
          <clipPath id="swirl-petal-top">
            <path
              d="M 120,150 
                 C 200,40 380,30 490,130 
                 C 550,190 560,270 510,310 
                 C 450,360 380,320 330,250 
                 C 280,180 190,150 120,150 Z"
            />
          </clipPath>

          {/* Left Swirl Petal Mask */}
          <clipPath id="swirl-petal-left">
            <path
              d="M 270,540 
                 C 140,530 40,430 30,300 
                 C 20,190 80,110 140,110 
                 C 190,110 210,180 200,260 
                 C 190,340 220,440 270,540 Z"
            />
          </clipPath>

          {/* Bottom-Right Swirl Petal Mask */}
          <clipPath id="swirl-petal-bottom">
            <path
              d="M 520,290 
                 C 540,410 440,530 310,560 
                 C 220,580 160,540 180,480 
                 C 200,420 280,390 340,340 
                 C 400,290 480,260 520,290 Z"
            />
          </clipPath>

          <filter id="ecosystem-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#071527" floodOpacity="0.16" />
          </filter>
        </defs>

        {/* Ambient Decorative Outer Dashed Orbit */}
        <circle
          cx="300"
          cy="300"
          r="285"
          fill="none"
          stroke="#155EEF"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />

        {/* --- SWIRL PETAL 1: TOP (Architectural Villa Exterior) --- */}
        <g filter="url(#ecosystem-shadow)" className="transition-transform duration-500 hover:scale-[1.02] origin-[300px_300px]">
          <path
            d="M 120,150 C 200,40 380,30 490,130 C 550,190 560,270 510,310 C 450,360 380,320 330,250 C 280,180 190,150 120,150 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <image
            href={topImage}
            x="0"
            y="0"
            width="600"
            height="600"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#swirl-petal-top)"
          />
        </g>

        {/* --- SWIRL PETAL 2: LEFT (Interior / Living Space) --- */}
        <g filter="url(#ecosystem-shadow)" className="transition-transform duration-500 hover:scale-[1.02] origin-[300px_300px]">
          <path
            d="M 270,540 C 140,530 40,430 30,300 C 20,190 80,110 140,110 C 190,110 210,180 200,260 C 190,340 220,440 270,540 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <image
            href={leftImage}
            x="0"
            y="0"
            width="600"
            height="600"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#swirl-petal-left)"
          />
        </g>

        {/* --- SWIRL PETAL 3: BOTTOM-RIGHT (Villa Architecture / Structural Living) --- */}
        <g filter="url(#ecosystem-shadow)" className="transition-transform duration-500 hover:scale-[1.02] origin-[300px_300px]">
          <path
            d="M 520,290 C 540,410 440,530 310,560 C 220,580 160,540 180,480 C 200,420 280,390 340,340 C 400,290 480,260 520,290 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <image
            href={bottomImage}
            x="0"
            y="0"
            width="600"
            height="600"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#swirl-petal-bottom)"
          />
        </g>

        {/* Center Ecosystem Floating Core Ring */}
        <circle
          cx="300"
          cy="300"
          r="26"
          fill="#ffffff"
          stroke="#155EEF"
          strokeWidth="2"
        />
        <circle
          cx="300"
          cy="300"
          r="16"
          fill="#071527"
        />
        <circle
          cx="300"
          cy="300"
          r="6"
          fill="#B77A32"
        />
      </svg>
    </div>
  );
}
