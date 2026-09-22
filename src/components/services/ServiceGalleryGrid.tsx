'use client';

import React, { useState } from 'react';
import { Eye, MapPin, X, ArrowRight, Camera } from 'lucide-react';
import { ServiceGalleryImage } from '@/data/services';

interface ServiceGalleryGridProps {
  images: ServiceGalleryImage[];
  serviceTitle: string;
}

export default function ServiceGalleryGrid({ images, serviceTitle }: ServiceGalleryGridProps) {
  const [activeImage, setActiveImage] = useState<ServiceGalleryImage | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImage(img)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Quick View Pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View</span>
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h4 className="font-bold text-sm text-navy-950 group-hover:text-brand-blue transition-colors leading-snug">
                  {img.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>

            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-brand-blue font-bold">
              <span>Execution Record</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full border border-white/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-7 space-y-2 bg-white">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono font-bold text-xs uppercase tracking-wider">
                {serviceTitle}
              </span>
              <h3 className="text-lg sm:text-xl text-navy-950 font-bold">
                {activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
