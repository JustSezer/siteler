"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-smoke bg-coal-2 pb-24 sm:pb-28">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-16 sm:py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="display-font text-3xl text-bone tracking-tight mb-4 leading-none">
            İbrahim&apos;in <span className="text-ember italic">Yeri</span>
          </p>
          <p className="eyebrow-mute mb-5">Bolu Dağı · Est. 1990</p>
          <p className="text-[14.5px] leading-[1.8] text-bone-soft max-w-xs">
            D100 karayolunun üzerinde, 7 gün 24 saat açık; Bakacak Köftesi ve serpme
            kahvaltısıyla Bolu Dağı yolcusunun durağı.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Dolaş</p>
          <ul className="space-y-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-bone-soft hover:text-ember transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-smoke mt-2">
              <Link href="/gizlilik" className="text-[14px] text-bone-soft hover:text-ember transition-colors">
                Gizlilik
              </Link>
            </li>
            <li>
              <Link href="/cerez-politikasi" className="text-[14px] text-bone-soft hover:text-ember transition-colors">
                Çerez Politikası
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => (window as unknown as Record<string, () => void>).__openCookiePreferences?.()}
                className="text-[14px] text-bone-soft hover:text-ember transition-colors"
              >
                Çerez Tercihleri
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Bağlan</p>
          <ul className="space-y-3">
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-bone-soft hover:text-ember transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-bone-soft hover:text-ember transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> YouTube
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-bone-soft hover:text-ember transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Mekan</p>
          <ul className="space-y-3.5 text-[14px] text-bone-soft">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-ember mt-1 shrink-0" />
              <span>
                {site.address.line}
                <br />
                {site.address.district} / {site.address.city}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-3.5 h-3.5 text-ember mt-1 shrink-0" />
              <span>
                <a href={`tel:${site.phones[0].value}`} className="hover:text-ember block">
                  {site.phones[0].display}
                </a>
                <a href={`tel:${site.phones[1].value}`} className="hover:text-ember block">
                  {site.phones[1].display}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-3.5 h-3.5 text-ember mt-1 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-ember">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-3.5 h-3.5 text-ember mt-1 shrink-0" />
              <span className="text-ember font-medium">{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-smoke">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="mono-font text-[10px] uppercase tracking-[0.2em] text-bone-mute">
            © {year} {site.name} · Tüm hakları saklıdır
          </p>
          <p className="mono-font text-[10px] uppercase tracking-[0.2em] text-bone-mute">
            Köz, tuz ve sabır
          </p>
        </div>
      </div>
    </footer>
  );
}
