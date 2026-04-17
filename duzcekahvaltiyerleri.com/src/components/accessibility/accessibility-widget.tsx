"use client";

import { useState, useEffect, useRef } from "react";

const DEFAULT_STATE: Record<string, string> = {
  text: "normal",
  contrast: "normal",
  spacing: "normal",
  font: "default",
  links: "default",
  motion: "default",
  cursor: "default",
  images: "default",
};

const STORAGE_KEY = "site-a11y";

const CATEGORIES = [
  {
    key: "text",
    label: "Yaz\u0131 Boyutu",
    description: "Metinleri b\u00fcy\u00fct",
    options: [
      { value: "normal", label: "Normal" },
      { value: "lg", label: "B\u00fcy\u00fck" },
      { value: "xl", label: "Daha b\u00fcy\u00fck" },
      { value: "xxl", label: "En b\u00fcy\u00fck" },
    ],
  },
  {
    key: "contrast",
    label: "Kontrast",
    description: "Renkleri de\u011fi\u015ftir",
    options: [
      { value: "normal", label: "Varsay\u0131lan" },
      { value: "high", label: "Y\u00fcksek kontrast" },
      { value: "inverted", label: "Ters (koyu)" },
    ],
  },
  {
    key: "spacing",
    label: "Sat\u0131r Aral\u0131\u011f\u0131",
    description: "Metin aral\u0131klar\u0131n\u0131 ayarla",
    options: [
      { value: "normal", label: "Normal" },
      { value: "wide", label: "Geni\u015f" },
      { value: "wider", label: "Daha geni\u015f" },
    ],
  },
  {
    key: "font",
    label: "Yaz\u0131 Tipi",
    description: "Okunabilir font",
    options: [
      { value: "default", label: "Varsay\u0131lan" },
      { value: "sans", label: "Sans-serif" },
    ],
  },
  {
    key: "links",
    label: "Link Vurgusu",
    description: "Ba\u011flant\u0131lar\u0131 belirginle\u015ftir",
    options: [
      { value: "default", label: "Normal" },
      { value: "strong", label: "G\u00fc\u00e7l\u00fc" },
    ],
  },
  {
    key: "motion",
    label: "Animasyonlar",
    description: "Hareketleri durdur",
    options: [
      { value: "default", label: "A\u00e7\u0131k" },
      { value: "reduce", label: "Durdur" },
    ],
  },
  {
    key: "cursor",
    label: "\u0130mle\u00e7",
    description: "B\u00fcy\u00fck imle\u00e7",
    options: [
      { value: "default", label: "Normal" },
      { value: "lg", label: "B\u00fcy\u00fck" },
    ],
  },
  {
    key: "images",
    label: "G\u00f6rseller",
    description: "Sayfay\u0131 sadele\u015ftir",
    options: [
      { value: "default", label: "G\u00f6ster" },
      { value: "hide", label: "Gizle" },
    ],
  },
];

function applySettings(settings: Record<string, string>) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  Object.keys(settings).forEach((key) => {
    const value = settings[key];
    const attr = `data-a11y-${key}`;
    if (value === "normal" || value === "default") {
      root.removeAttribute(attr);
    } else {
      root.setAttribute(attr, value);
    }
  });
}

function saveSettings(settings: Record<string, string>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function loadSettings(): Record<string, string> {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULT_STATE, ...JSON.parse(stored) };
  } catch {}
  return { ...DEFAULT_STATE };
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_STATE);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Load saved settings on mount
  useEffect(() => {
    const saved = loadSettings();
    setSettings(saved);
    applySettings(saved);
  }, []);

  // Apply settings whenever they change
  useEffect(() => {
    applySettings(settings);
    saveSettings(settings);
  }, [settings]);

  // Handle open/close animation
  useEffect(() => {
    if (open) {
      setTimeout(() => setMounted(true), 50);
    } else {
      setMounted(false);
    }
  }, [open]);

  // Focus trap & Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const updateSetting = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetAll = () => {
    setSettings({ ...DEFAULT_STATE });
    applySettings(DEFAULT_STATE);
    saveSettings(DEFAULT_STATE);
  };

  const hasChanges = Object.keys(settings).some(
    (key) => settings[key] !== DEFAULT_STATE[key]
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        aria-label="Eri\u015filebilirlik ayarlar\u0131n\u0131 a\u00e7"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-current bg-[var(--a11y-btn-bg,var(--color-paper,#fff))] text-[var(--a11y-btn-text,var(--color-ink,#1a1a1a))] shadow-lg transition-transform hover:-translate-y-0.5 md:left-6 md:bottom-6 md:h-14 md:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 md:h-7 md:w-7"
          fill="currentColor"
          aria-hidden="true"
          data-a11y-ui="true"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M5 9h14v2h-5l2 11h-2l-1.5-7h-1l-1.5 7H8l2-11H5z" />
        </svg>
        {hasChanges && (
          <span
            aria-hidden="true"
            className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-[var(--a11y-accent,var(--color-ember,#e85d04))]"
          />
        )}
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity duration-300 md:items-center md:justify-center ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-title"
            className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[var(--a11y-border,#ddd)] bg-[var(--a11y-panel-bg,#fff)] text-[var(--a11y-panel-text,#1a1a1a)] shadow-2xl transition-all duration-300 ${
              mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[var(--a11y-border,#ddd)] bg-[var(--a11y-header-bg,#f5f5f0)] px-6 py-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--a11y-accent,#e85d04)]">
                  Eri\u015filebilirlik
                </p>
                <h2
                  id="a11y-title"
                  className="mt-1 text-[24px] font-bold leading-tight md:text-[28px]"
                >
                  Siteyi kendinize g\u00f6re ayarlay\u0131n
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed opacity-70">
                  Tercihleriniz bu cihazda otomatik kaydedilir.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Kapat"
                className="shrink-0 rounded-lg border border-[var(--a11y-border,#ddd)] p-2 transition-colors hover:border-[var(--a11y-accent,#e85d04)] hover:text-[var(--a11y-accent,#e85d04)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  data-a11y-ui="true"
                >
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* Settings Grid */}
            <div className="grid gap-6 px-6 py-6 md:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <fieldset key={cat.key} className="space-y-2">
                  <legend className="text-[13px] font-semibold">
                    {cat.label}
                    <span className="ml-1 font-normal opacity-60">
                      — {cat.description}
                    </span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {cat.options.map((opt) => {
                      const isActive = settings[cat.key] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => updateSetting(cat.key, opt.value)}
                          aria-pressed={isActive}
                          className={`rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors ${
                            isActive
                              ? "border-[var(--a11y-accent,#e85d04)] bg-[var(--a11y-accent,#e85d04)] text-white"
                              : "border-[var(--a11y-border,#ddd)] hover:border-[var(--a11y-accent,#e85d04)]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[var(--a11y-border,#ddd)] px-6 py-4">
              <button
                type="button"
                onClick={resetAll}
                disabled={!hasChanges}
                className="text-[13px] font-medium underline underline-offset-2 transition-opacity disabled:opacity-30"
              >
                T\u00fcm\u00fcn\u00fc s\u0131f\u0131rla
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[var(--a11y-accent,#e85d04)] px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:opacity-90"
              >
                Tamam
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
