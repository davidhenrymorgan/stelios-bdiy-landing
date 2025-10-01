/**
 * Analytics utility functions for tracking user behavior
 */

// Track a generic event
export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  eventValue?: number,
  customProperties?: Record<string, any>
) => {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
      ...customProperties,
    });
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', { eventName, eventCategory, eventLabel, eventValue, ...customProperties });
  }
};

// Track page view
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Extract UTM parameters from URL
export const getUTMParams = () => {
  if (typeof window === 'undefined') return undefined;

  const params = new URLSearchParams(window.location.search);
  const utmParams = {
    campaign: params.get('utm_campaign') ?? undefined,
    source: params.get('utm_source') ?? undefined,
    medium: params.get('utm_medium') ?? undefined,
    content: params.get('utm_content') ?? undefined,
    term: params.get('utm_term') ?? undefined,
  };

  // Only return if at least one UTM param exists
  return Object.values(utmParams).some(v => v) ? utmParams : undefined;
};

// Generate or retrieve session ID
export const getSessionId = (): string => {
  if (typeof window === 'undefined') return '';

  const SESSION_KEY = 'bdiy_session_id';
  let sessionId = sessionStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
};

// Get referrer
export const getReferrer = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  return document.referrer || undefined;
};

// Get user agent
export const getUserAgent = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  return navigator.userAgent;
};

// Get screen resolution
export const getScreenResolution = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  return `${window.screen.width}x${window.screen.height}`;
};
