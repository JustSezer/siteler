"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Settings, Check, X } from "lucide-react";
import { getConsentState, acceptAll, rejectAll, setConsentState } from "@/lib/consent";

interface CategoryToggleProps {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function CategoryToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: CategoryToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-border last:border-0">
      <div className="flex-1">
        <p className="font-semibold text-foreground text-sm">{label}</p>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={`${label} ${checked ? "acik" : "kapali"}`}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 shrink-0 ${
          checked ? "bg-primary" : "bg-border"
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
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    setConsentState(preferences);
    setVisible(false);
    setShowPreferences(false);
  };

  const openPreferences = () => {
    const state = getConsentState();
    if (state) {
      setPreferences({
        analytics: state.analytics,
        marketing: state.marketing,
        functional: state.functional,
      });
    }
    setShowPreferences(true);
    setVisible(true);
  };

  // Expose for footer link
  useEffect(() => {
    (window as unknown as Record<string, () => void>).__openCookiePreferences =
      openPreferences;
    return () => {
      delete (window as unknown as Record<string, () => void>).__openCookiePreferences;
    };
  });

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {visible && !showPreferences && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-label="Çerez onayi"
            className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6"
          >
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    Çerez Kullanimi
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-5">
                    Deneyiminizi iyilestirmek için çerez kullaniyoruz. Detaylar
                    için{" "}
                    <a
                      href="/cerez-politikasi"
                      className="text-primary underline hover:text-primary-light"
                    >
                      Çerez Politikamizi
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-light transition-colors"
                    >
                      <Check className="w-4 h-4" />
                      Tumunu Kabul Et
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-muted text-foreground font-semibold text-sm rounded-full hover:bg-border transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Tumunu Reddet
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-border text-foreground font-semibold text-sm rounded-full hover:bg-muted transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Tercihler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-4"
            onClick={() => {
              setShowPreferences(false);
              if (!getConsentState()) setVisible(true);
              else setVisible(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="Çerez tercihleri"
              className="bg-card rounded-2xl shadow-2xl border border-border max-w-lg w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-foreground text-lg">
                    Çerez Tercihleri
                  </h3>
                  <button
                    onClick={() => {
                      setShowPreferences(false);
                      if (!getConsentState()) setVisible(true);
                      else setVisible(false);
                    }}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Kapat"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                <div className="space-y-0">
                  <CategoryToggle
                    label="Zorunlu Cerezler"
                    description="Sitenin düzgün calismasi için gerekli cerezler. Devre dışı birakilamaz."
                    checked={true}
                    disabled={true}
                    onChange={() => {}}
                  />
                  <CategoryToggle
                    label="Analitik Cerezler"
                    description="Ziyaretci istatistikleri toplamamiza yardimci olur."
                    checked={preferences.analytics}
                    onChange={(v) =>
                      setPreferences((p) => ({ ...p, analytics: v }))
                    }
                  />
                  <CategoryToggle
                    label="Pazarlama Cerezleri"
                    description="Kisisellestirilmis reklam gosterimi için kullanilir."
                    checked={preferences.marketing}
                    onChange={(v) =>
                      setPreferences((p) => ({ ...p, marketing: v }))
                    }
                  />
                  <CategoryToggle
                    label="Fonksiyonel Cerezler"
                    description="Tercih ve ayarlarinizi hatirlamamizi saglar."
                    checked={preferences.functional}
                    onChange={(v) =>
                      setPreferences((p) => ({ ...p, functional: v }))
                    }
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-light transition-colors"
                  >
                    Secimleri Kaydet
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-border text-foreground font-semibold text-sm rounded-full hover:bg-muted transition-colors"
                  >
                    Tumunu Kabul Et
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
