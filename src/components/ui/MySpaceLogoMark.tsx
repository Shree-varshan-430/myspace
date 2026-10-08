'use client';

import React from 'react';

interface MySpaceLogoMarkProps {
  className?: string;
}

export default function MySpaceLogoMark({ className = "w-12 h-12" }: MySpaceLogoMarkProps) {
  const clipId = React.useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} shrink-0 select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>

      {/* Clipped Inner Logo Shapes */}
      <g clipPath={`url(#${clipId})`}>
        {/* Left Half: Light Slate-Grey */}
        <rect x="0" y="0" width="50" height="100" fill="#B2B6BA" />

        {/* Right Half: Medium Slate-Grey */}
        <rect x="50" y="0" width="50" height="100" fill="#A4A8AD" />

        {/* Central Vertical Separator */}
        <line x1="50" y1="0" x2="50" y2="100" stroke="#E2E8F0" strokeWidth="1.4" />

        {/* Left Side: Horizontal Divider between Top & Bottom */}
        <line x1="0" y1="46" x2="50" y2="46" stroke="#E2E8F0" strokeWidth="1.4" />

        {/* Left Side Top: Horizontal Floorplan / Parquet Lines */}
        <line x1="0" y1="16" x2="50" y2="16" stroke="#E2E8F0" strokeWidth="1.4" />
        <line x1="0" y1="31" x2="50" y2="31" stroke="#E2E8F0" strokeWidth="1.4" />

        {/* Left Side Bottom: Vertical Lines */}
        <line x1="12.5" y1="46" x2="12.5" y2="100" stroke="#E2E8F0" strokeWidth="1.4" />
        <line x1="25" y1="46" x2="25" y2="100" stroke="#E2E8F0" strokeWidth="1.4" />
        <line x1="37.5" y1="46" x2="37.5" y2="100" stroke="#E2E8F0" strokeWidth="1.4" />

        {/* Right Side: Building Notch / Exclamation Symbol */}
        <rect x="67" y="52" width="10" height="23" fill="#FFFFFF" rx="0.5" />
        <rect x="67" y="79" width="10" height="9" fill="#FFFFFF" rx="0.5" />
      </g>

      {/* Clean Outer Rim */}
      <circle cx="50" cy="50" r="48" stroke="#989CA1" strokeWidth="1.6" />
    </svg>
  );
}
