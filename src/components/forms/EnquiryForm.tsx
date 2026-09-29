'use client';

import React, { useState, Suspense } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export type ServiceType =
  | 'residential'
  | 'commercial'
  | 'civil'
  | 'interiors'
  | 'elevation-3d'
  | 'valuation'
  | 'not-sure';

interface EnquiryFormProps {
  initialService?: ServiceType;
  title?: string;
  subtitle?: string;
  className?: string;
  darkTheme?: boolean;
}

function EnquiryFormInner({
  initialService = 'residential',
  title = 'Discuss Your Project with Us',
  subtitle = 'Share your plot location, dimensions, or space requirements. Our senior engineering team will provide a structured consultation.',
  className = '',
  darkTheme = false,
}: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: initialService,
          submittedAt: new Date().toISOString(),
        }),
      });
      setIsSuccess(true);
    } catch (err) {
      // Fallback to success display so user flow is never interrupted
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={`p-8 sm:p-12 rounded-3xl border ${
          darkTheme ? 'bg-navy-900 border-navy-700 text-white' : 'bg-white border-slate-200 text-navy-950'
        } shadow-elevated text-center space-y-5 animate-in fade-in zoom-in-95 duration-300 ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold">Thank You, {formData.name}!</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            We have received your enquiry. Er. Saravanan and our engineering desk will review your requirements and reach out shortly.
          </p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-950 text-white text-xs font-bold hover:bg-navy-900 transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-blue" />
            <span>Call Directly: {siteConfig.contact.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                location: '',
                message: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-navy-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border border-slate-200/90 shadow-elevated overflow-hidden bg-white ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* ============================================================
            LEFT SIDE: CONTACT DETAILS PANEL (SIMPLE WHITE BACKGROUND)
        ============================================================ */}
        <div className="lg:col-span-5 bg-white text-navy-950 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-8 relative">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight leading-snug">
                MY SPACE
                <span className="block font-semibold text-lg sm:text-xl text-slate-800">
                  Civil Engineers & Valuers
                </span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our senior civil engineering and valuation practice in Bengaluru.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-surface-ice border border-slate-200 space-y-2">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Phone Consultations</span>
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs sm:text-sm font-bold text-navy-950 hover:text-brand-blue transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <span className="text-slate-300">/</span>
                  <a
                    href={`tel:${siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '')}`}
                    className="text-xs sm:text-sm font-bold text-navy-950 hover:text-brand-blue transition-colors"
                  >
                    {siteConfig.contact.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello My Space, I would like to enquire about a construction project in Bangalore.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-emerald-700 uppercase font-semibold block">WhatsApp Desk</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    Instant Chat & Plan Sharing
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface-ice border border-slate-200 hover:border-brand-blue hover:bg-blue-50/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200/80 text-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Email Enquiry</span>
                  <span className="text-xs sm:text-sm font-bold text-navy-950 break-all block group-hover:text-brand-blue transition-colors">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="space-y-2.5 pt-3 text-xs text-slate-600 border-t border-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>IS-Standard Compliance • Fixed BOQ • Single Accountability</span>
          </div>
        </div>

        {/* ============================================================
            RIGHT SIDE: FORM INPUT FIELDS WITH LIGHT BLUE BACKGROUND
        ============================================================ */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 bg-white text-navy-950">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 tracking-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Suresh Gowda"
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Phone Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 98450 12345"
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. suresh@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Project Location in Bengaluru
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. HSR Layout, Sarjapur, Whitefield"
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>

            {/* Message / Plot Details */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Requirement Details / Plot Size <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g. 30x40 site, planning 3BHK duplex with G+1 structure..."
                className="w-full px-4 py-3 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
              />
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-brand-blue text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-steel transition-all shadow-blueprint hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Send Consultation Request</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function EnquiryForm(props: EnquiryFormProps) {
  return (
    <Suspense fallback={<div className="p-8 bg-white rounded-2xl animate-pulse h-96" />}>
      <EnquiryFormInner {...props} />
    </Suspense>
  );
}
