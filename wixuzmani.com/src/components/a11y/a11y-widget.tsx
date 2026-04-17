"use client";

import { useEffect, useState } from "react";

type Prefs = {
  fontScale: number;
  highContrast: boolean;
  reducedMotion: boolean;
  underlineLinks: boolean;
};

const DEFAULTS: Prefs = {
  fontScale: 1,
  highContrast: false,
  reducedMotion: false,
  underlineLinks: false,
};

const STORAGE_KEY = "wd-a11y";

function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(p.fontScale));
  root.classList.toggle("a11y-high-contrast", p.highContrast);
  root.classList.toggle("a11y-reduced-motion", p.reducedMotion);
  root.classList.toggle("a11y-underline-links", p.underlineLinks);
}

export default function A11yWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) };
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function update<K extends keyof Prefs>(key: K, value: Prefs[K]) {
    const next = { ...prefs, [key]: value };
    setPrefs(next);
    applyPrefs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }

  function reset() {
    setPrefs(DEFAULTS);
    applyPrefs(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={open ? "Erişilebilirlik menüsünü kapat" : "Erişilebilirlik menüsünü aç"}
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 bottom-4 z-40 w-12 h-12 rounded-full bg-[var(--indigo-900)] text-white shadow-lg hover:bg-[var(--indigo-800)] transition-all hover:scale-105 flex items-center justify-center"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M12 22v-5" />
          <path d="M9 8h6l-1 9" />
          <path d="M15 8l-1 9" />
          <path d="M5 11l7-2 7 2" />
        </svg>
      </button>

      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="Erişilebilirlik ayarları"
          className="fixed left-4 bottom-20 z-40 w-[300px] bg-white rounded-2xl shadow-2xl border border-[var(--line)] p-5 animate-scale-in"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-[var(--indigo-900)]">Erişilebilirlik</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Kapat"
              className="p-1 rounded hover:bg-[var(--surface)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[var(--ink)]">Metin boyutu</span>
                <span className="text-xs text-[var(--ink-mute)]">{Math.round(prefs.fontScale * 100)}%</span>
              </div>
              <div className="flex gap-1.5">
                {[
                  { label: "A-", scale: 0.9 },
                  { label: "A", scale: 1 },
                  { label: "A+", scale: 1.15 },
                  { label: "A++", scale: 1.3 },
                ].map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => update("fontScale", o.scale)}
                    aria-pressed={prefs.fontScale === o.scale}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                      prefs.fontScale === o.scale
                        ? "bg-[var(--indigo-900)] text-white border-[var(--indigo-900)]"
                        : "bg-white text-[var(--ink)] border-[var(--line)] hover:border-[var(--indigo-500)]"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <Toggle
              label="Yüksek kontrast"
              pressed={prefs.highContrast}
              onChange={(v) => update("highContrast", v)}
            />
            <Toggle
              label="Animasyonları azalt"
              pressed={prefs.reducedMotion}
              onChange={(v) => update("reducedMotion", v)}
            />
            <Toggle
              label="Bağlantıların altını çiz"
              pressed={prefs.underlineLinks}
              onChange={(v) => update("underlineLinks", v)}
            />

            <button
              type="button"
              onClick={reset}
              className="w-full text-xs font-semibold text-[var(--coral)] py-2 border-t border-[var(--line)] pt-3 hover:text-[var(--coral-hover)]"
            >
              Varsayılana döndür
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({
  label,
  pressed,
  onChange,
}: {
  label: string;
  pressed: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={pressed}
      onClick={() => onChange(!pressed)}
      className="w-full flex items-center justify-between py-2 text-left"
    >
      <span className="text-xs font-semibold text-[var(--ink)]">{label}</span>
      <span
        className={`relative w-10 h-5 rounded-full transition-colors ${
          pressed ? "bg-[var(--coral)]" : "bg-[var(--line-strong)]"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
            pressed ? "translate-x-5" : ""
          }`}
        />
      </span>
    </button>
  );
}
