// Privacy-conscious telemetry & conversion event dispatcher

export type AnalyticsEvent =
  | 'hero_primary_click'
  | 'service_path_select'
  | 'service_page_view'
  | 'process_stage_view'
  | 'project_view'
  | 'valuation_cta_click'
  | 'faq_expand'
  | 'lead_form_start'
  | 'lead_form_submit'
  | 'click_to_call'
  | 'whatsapp_click';

export interface EventProperties {
  serviceType?: string;
  pagePath?: string;
  sourceSection?: string;
  projectSlug?: string;
  articleSlug?: string;
  faqId?: string;
  deviceCategory?: 'mobile' | 'tablet' | 'desktop';
  [key: string]: any;
}

export function trackEvent(eventName: AnalyticsEvent, properties?: EventProperties) {
  if (typeof window === 'undefined') return;

  // Never send private message text, uploaded documents, or full names to analytics
  const sanitizedProps = {
    ...properties,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
  };

  // Google Analytics 4 integration if gtag is defined
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, sanitizedProps);
  }

  // Developer console logger in non-production
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[ANALYTICS EVENT: ${eventName}]`, sanitizedProps);
  }
}
