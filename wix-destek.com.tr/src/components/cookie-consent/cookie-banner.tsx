"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wix-destek-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined"
      ? window.localStorage.getItem(STORAGE_KEY)
      : null;
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 md:left-auto md:right-5 md:bottom-5 md:max-w-md z-40"
    >
      <div className="card shadow-lg">
        <h2 id="cookie-title" className="text-base font-bold text-[var(--navy)] mb-1.5">
          Çerez tercihiniz
        </h2>
        <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
          Siteyi geliştirmek için temel çerezler kullanıyoruz. Tüm tercihleri{" "}
          <Link href="/cerez-politikasi" className="text-[var(--orange)] underline underline-offset-2">
            çerez politikasında
          </Link>{" "}
          inceleyebilirsiniz.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={accept} className="btn-primary text-sm">
            Kabul et
          </button>
          <button type="button" onClick={reject} className="btn-secondary text-sm">
            Sadece zorunlular
          </button>
        </div>
      </div>
    </div>
  );
}
