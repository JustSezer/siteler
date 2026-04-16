export type ConsentCategory = "essential" | "analytics" | "marketing" | "functional";

export interface ConsentState {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
  version: string;
}

export const CONSENT_COOKIE_NAME = "cookie_consent";
export const CONSENT_VERSION = "1.0";
export const CONSENT_EXPIRY_DAYS = 365;
