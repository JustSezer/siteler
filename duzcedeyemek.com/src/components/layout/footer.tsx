"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { site, footerLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-5 leading-tight">
              <span className="font-display text-xl font-bold text-white">
                Düzce&apos;de
              </span>{" "}
              <span className="text-secondary-light font-bold text-sm tracking-wide">
                YEMEK
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Düzce&apos;nin yöresel lezzetleri, restoran rehberi ve mutfak
              hikayeleri — tek adreste. Her tabakta bir hikaye.
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-white/40 text-sm hover:text-secondary-light transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> {site.email}
              </a>
              <p className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin className="w-3.5 h-3.5" /> {site.location}
              </p>
            </div>
          </div>

          {/* Kesfet */}
          <div className="lg:col-span-2">
            <h3 className="text-secondary-light text-xs font-bold uppercase tracking-wider mb-5">
              Keşfet
            </h3>
            <ul className="space-y-3">
              {footerLinks.kesfet.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div className="lg:col-span-2">
            <h3 className="text-secondary-light text-xs font-bold uppercase tracking-wider mb-5">
              Yasal
            </h3>
            <ul className="space-y-3">
              {footerLinks.yasal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Populer */}
          <div className="col-span-2 lg:col-span-4">
            <h3 className="text-secondary-light text-xs font-bold uppercase tracking-wider mb-5">
              Popüler Yazılar
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { l: "Mamursa Tarifi", h: "/blog/mamursa-nedir-tarifi" },
                { l: "Kahvalti Rehberi", h: "/blog/duzce-kahvalti-kulturu" },
                { l: "Cerkez Mutfagi", h: "/blog/duzce-cerkez-mutfagi" },
                { l: "Bosnak Boregi", h: "/blog/bosnak-boregi-tarifi" },
                { l: "Melenguccegi", h: "/blog/melenguccegi-tatlisi-tarifi" },
                { l: "En Iyi 10 Restoran", h: "/blog/duzce-en-iyi-restoranlar-2026" },
              ].map((link) => (
                <Link
                  key={link.h}
                  href={link.h}
                  className="bg-white/5 hover:bg-white/10 text-white/60 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                >
                  {link.l}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Düzce&apos;de Yemek. Tüm hakları
            saklıdır.
          </p>
          <p className="text-white/20 text-xs font-display italic">
            Her tabakta bir hikaye.
          </p>
        </div>
      </div>
    </footer>
  );
}
