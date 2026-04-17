"use client";

import { useState, useEffect } from "react";
import { Shield, Settings, Check, X } from "lucide-react";
import { getConsentState, acceptAll, rejectAll, setConsentState } from "@/lib/consent";

interface CategoryToggleProps {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function CategoryToggle({ label, description, checked, disabled, onChange }: CategoryToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[var(--border)] last:border-0">
      <div className="flex-1">
        <p className="font-semibold text-[var(--fg)] text-sm">{label}</p>
        <p className="text-[var(--muted)] text-sm mt-1 leading-relaxed">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={`${label} ${checked ? "açık" : "kapalı"}`}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 shrink-0 ${
          checked ? "bg-[var(--brand)]" : "bg-[var(--muted-light)]"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const state = getConsentState();
    if (!state) {
      setVisible(true);
      setTimeout(() => setMounted(true), 50);
    }
  }, []);

  const close = () => {
    setMounted(false);
    setTimeout(() => {
      setVisible(false);
      setShowPreferences(false);
    }, 300);
  };

  const handleAcceptAll = () => { acceptAll(); close(); };
  const handleRejectAll = () => { rejectAll(); close(); };
  const handleSavePreferences = () => { setConsentState(preferences); close(); };

  const openPreferences = () => {
    const state = getConsentState();
    if (state) {
      setPreferences({ analytics: state.analytics, marketing: state.marketing, functional: state.functional });
    }
    setShowPreferences(true);
    setVisible(true);
    setTimeout(() => setMounted(true), 50);
  };

  useEffect(() => {
    (window as unknown as Record<string, () => void>).__openCookiePreferences = openPreferences;
    return () => { delete (window as unknown as Record<string, () => void>).__openCookiePreferences; };
  });

  if (!visible) return null;

  return (
    <>
      {!showPreferences && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-[90] p-3 sm:p-6 transition-all duration-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
          role="dialog"
          aria-label="Çerez onayı"
          data-a11y-ui
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-[var(--border)] p-5 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[var(--fg)] text-base sm:text-lg mb-2">Çerez Kullanımı</h3>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed mb-5">
                  Deneyiminizi iyileştirmek için çerez kullanıyoruz. Detaylar için{" "}
                  <a href="/cerez-politikasi" className="text-[var(--accent)] underline hover:opacity-80">Çerez Politikamızı</a>{" "}
                  inceleyebilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button onClick={handleAcceptAll} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity">
                    <Check className="w-4 h-4" /> Tümünü Kabul Et
                  </button>
                  <button onClick={handleRejectAll} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--bg)] text-[var(--fg)] font-semibold text-sm rounded-full hover:bg-[var(--border)] transition-colors border border-[var(--border)]">
                    <X className="w-4 h-4" /> Tümünü Reddet
                  </button>
                  <button onClick={() => setShowPreferences(true)} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--brand)] text-[var(--brand)] font-semibold text-sm rounded-full hover:bg-[var(--brand)] hover:text-white transition-colors">
                    <Settings className="w-4 h-4" /> Tercihler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          className={`fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-4 transition-opacity duration-300 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => { setShowPreferences(false); if (getConsentState()) close(); }}
          data-a11y-ui
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl border border-[var(--border)] max-w-lg w-full max-h-[85vh] overflow-y-auto transition-all duration-300 ${
              mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Çerez tercihleri"
          >
            <div className="p-5 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[var(--fg)] text-lg">Çerez Tercihleri</h3>
                <button onClick={() => { setShowPreferences(false); if (getConsentState()) close(); }} className="p-1.5 rounded-lg hover:bg-[var(--bg)] transition-colors" aria-label="Kapat">
                  <X className="w-5 h-5 text-[var(--muted)]" />
                </button>
              </div>
              <div className="space-y-0">
                <CategoryToggle label="Zorunlu Çerezler" description="Sitenin düzgün çalışması için gerekli çerezler. Devre dışı bırakılamaz." checked={true} disabled={true} onChange={() => {}} />
                <CategoryToggle label="Analitik Çerezler" description="Ziyaretçi istatistikleri toplamamıza yardımcı olur." checked={preferences.analytics} onChange={(v) => setPreferences((p) => ({ ...p, analytics: v }))} />
                <CategoryToggle label="Pazarlama Çerezleri" description="Kişiselleştirilmiş reklam gösterimi için kullanılır." checked={preferences.marketing} onChange={(v) => setPreferences((p) => ({ ...p, marketing: v }))} />
                <CategoryToggle label="Fonksiyonel Çerezler" description="Tercih ve ayarlarınızı hatırlamamızı sağlar." checked={preferences.functional} onChange={(v) => setPreferences((p) => ({ ...p, functional: v }))} />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6">
                <button onClick={handleSavePreferences} className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity">Seçimleri Kaydet</button>
                <button onClick={handleAcceptAll} className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--brand)] text-[var(--brand)] font-semibold text-sm rounded-full hover:bg-[var(--brand)] hover:text-white transition-colors">Tümünü Kabul Et</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
