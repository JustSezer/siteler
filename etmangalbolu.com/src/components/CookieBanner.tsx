"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark text-white p-4 sm:p-6 shadow-2xl border-t border-stone-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          Bu web sitesi deneyiminizi iyileştirmek ve trafik analizi yapmak için
          çerezler kullanmaktadır.{" "}
          <a href="/gizlilik" className="text-accent underline">
            Gizlilik Politikası
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm border border-stone-500 rounded-lg hover:bg-stone-800 transition-colors min-h-[44px]"
          >
            Reddet
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-accent text-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors min-h-[44px]"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
