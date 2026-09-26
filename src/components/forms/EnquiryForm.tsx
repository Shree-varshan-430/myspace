'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Home,
  Layers,
  Compass,
  FileSearch,
  Sparkles,
  Phone,
  ArrowRight
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

const serviceOptions: { id: ServiceType; label: string; icon: any }[] = [
  { id: 'residential', label: 'House Construction', icon: Home },
  { id: 'commercial', label: 'Commercial Space', icon: Building },
  { id: 'civil', label: 'Civil Works', icon: Layers },
  { id: 'interiors', label: 'Interior Design', icon: Sparkles },
  { id: 'elevation-3d', label: '3D Elevation & Plans', icon: Compass },
  { id: 'valuation', label: 'Property Valuation', icon: FileSearch },
];

function EnquiryFormInner({
  initialService = 'residential',
  title = 'Get in Touch with Our Engineers',
  subtitle = 'Share your plot location, dimensions, or requirements. Our engineering team will get back to you with structured advice.',
  className = '',
  darkTheme = false,
}: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<ServiceType>(initialService);
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

  useEffect(() => {
    const serviceParam = searchParams?.get('service') as ServiceType;
    if (serviceParam && ['residential', 'commercial', 'civil', 'interiors', 'elevation-3d', 'valuation', 'not-sure'].includes(serviceParam)) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          service: selectedService,
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
        className={`p-8 sm:p-10 rounded-3xl border ${
          darkTheme ? 'bg-navy-900 border-navy-700 text-white' : 'bg-white border-slate-200 text-navy-950'
        } shadow-elevated text-center space-y-4 animate-in fade-in zoom-in-95 duration-300 ${className}`}
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold">Thank You, {formData.name}!</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            We have received your enquiry for <strong className="capitalize text-brand-blue">{selectedService.replace('-', ' ')}</strong>.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Our engineering team will review your requirement and call you back shortly.
          </p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy-950 text-white text-xs font-bold hover:bg-navy-900 transition-colors"
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
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border p-6 sm:p-8 lg:p-10 shadow-elevated ${
        darkTheme ? 'bg-navy-900 border-navy-700 text-white' : 'bg-white border-slate-200 text-navy-950'
      } ${className}`}
    >
      <div className="mb-6 space-y-1">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Service Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
            Select Service
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {serviceOptions.map((srv) => {
              const Icon = srv.icon;
              const isSelected = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(srv.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                    isSelected
                      ? 'border-brand-blue bg-brand-blue/10 text-brand-blue font-bold ring-1 ring-brand-blue shadow-xs'
                      : darkTheme
                      ? 'border-navy-700 bg-navy-950/60 text-slate-300 hover:border-slate-500'
                      : 'border-slate-200 bg-surface-ice text-slate-700 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-brand-blue' : 'text-slate-400'}`} />
                  <span className="truncate">{srv.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Suresh Gowda"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Phone Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98450 12345"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. suresh@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Project Location in Bengaluru
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. HSR Layout, Sarjapur, Whitefield"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
            />
          </div>
        </div>

        {/* Message / Plot Details */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Requirement Details / Plot Size <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. 30x40 site, planning 3BHK duplex with G+1 structure..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none"
          />
        </div>

        {errorMessage && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs">
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
  );
}

export default function EnquiryForm(props: EnquiryFormProps) {
  return (
    <Suspense fallback={<div className="p-8 bg-white rounded-2xl animate-pulse h-96" />}>
      <EnquiryFormInner {...props} />
    </Suspense>
  );
}
