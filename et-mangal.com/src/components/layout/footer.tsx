"use client";

import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-paper-warm mt-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12 sm:py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="sm:col-span-2 md:col-span-1">
          <p className="display-font text-3xl text-ink tracking-tight mb-3">
            Et <span className="italic text-ember">&amp;</span> Mangal
          </p>
          <p className="eyebrow-mute mb-5">{site.tagline}</p>
          <p className="text-[15px] leading-relaxed text-ink-soft max-w-sm">
            {site.description}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Rehber</p>
          <ul className="space-y-2.5">
            {nav.slice(1, 5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-ink-soft hover:text-ember transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Site</p>
          <ul className="space-y-2.5">
            {nav.slice(5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-ink-soft hover:text-ember transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/gizlilik"
                className="text-[15px] text-ink-soft hover:text-ember transition-colors"
              >
                Gizlilik
              </Link>
            </li>
            <li>
              <Link
                href="/cerez-politikasi"
                className="text-[15px] text-ink-soft hover:text-ember transition-colors"
              >
                Çerez Politikası
              </Link>
            </li>
            <li>
              <Link
                href="/erisilebilirlik"
                className="text-[15px] text-ink-soft hover:text-ember transition-colors"
              >
                Erişilebilirlik
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => (window as unknown as Record<string, () => void>).__openCookiePreferences?.()}
                className="text-[15px] text-ink-soft hover:text-ember transition-colors"
              >
                Çerez Tercihleri
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-mute font-sans">
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-[11px] italic text-ink-mute font-display">
            Ateşe saygı, ete hürmet.
          </p>
        </div>
      </div>
    </footer>
  );
}
