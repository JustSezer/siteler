"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

const links = {
  kesfet: [
    { label: "Lezzetler", href: "#yemekler" },
    { label: "Mekanlar", href: "#lokantalar" },
    { label: "Pişirme", href: "#pisirme" },
    { label: "Blog", href: "/blog" },
  ],
  yasal: [
    { label: "Gizlilik", href: "/gizlilik" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    { label: "Çerezler", href: "/cerez-politikasi" },
    { label: "Erişilebilirlik", href: "/erisilebilirlik" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-accent-warm border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <p className="font-serif text-xl text-foreground tracking-tight mb-4">
              bolu<span className="text-primary font-bold">et</span>
            </p>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              Aşçılar diyarının eşsiz et lezzetlerini keşfedin.
            </p>
            <a
              href="mailto:info@boluetlokantasi.com"
              className="inline-block text-foreground-muted text-sm mt-4 hover:text-foreground transition-colors"
            >
              info@boluetlokantasi.com
            </a>
          </div>

          {/* Keşfet */}
          <div>
            <h3 className="text-foreground-muted text-[11px] uppercase tracking-[0.15em] font-medium mb-5">
              Keşfet
            </h3>
            <ul className="space-y-3">
              {links.kesfet.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal + Mekan */}
          <div>
            <h3 className="text-foreground-muted text-[11px] uppercase tracking-[0.15em] font-medium mb-5">
              Yasal
            </h3>
            <ul className="space-y-3 mb-8">
              {links.yasal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    const w = window as unknown as Record<string, () => void>;
                    if (w.__openCookiePreferences) w.__openCookiePreferences();
                  }}
                  className="text-foreground-muted hover:text-foreground text-sm transition-colors"
                >
                  Çerez Tercihleri
                </button>
              </li>
            </ul>

            <h3 className="text-foreground-muted text-[11px] uppercase tracking-[0.15em] font-medium mb-3">
              Önerilen
            </h3>
            <a
              href="https://ibrahiminyerinden.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground-muted hover:text-foreground text-sm transition-colors"
            >
              İbrahim&apos;in Yeri
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Bolu Et Lokantası Rehberi
          </p>
          <p className="text-foreground-muted/30 text-xs">
            Bolu, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
