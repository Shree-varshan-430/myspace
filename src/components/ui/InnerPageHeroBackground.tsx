import React from 'react';

interface InnerPageHeroBackgroundProps {
  imageSrc?: string;
  imageAlt?: string;
  opacityClassName?: string;
}

export default function InnerPageHeroBackground({
  imageSrc = '/images/company/showroom-1.jpeg',
  imageAlt = 'My Space Engineering & Architecture',
  opacityClassName = 'opacity-20',
}: InnerPageHeroBackgroundProps) {
  return (
    <>
      {/* Translucent Real Architectural Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover object-center ${opacityClassName}`}
          loading="eager"
        />
        {/* Soft Contrast Gradient to guarantee typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/70" />
      </div>

      {/* Subtle Blueprint Grid Texture */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none z-0" />
    </>
  );
}
