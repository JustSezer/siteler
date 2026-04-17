"use client";

import Link from "next/link";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-10 mb-16">
          <div className="col-span-2 md:col-span-6 lg:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <span className="font-serif text-3xl font-black leading-none">
                Düzce<span className="text-secondary italic font-light"> kahvaltı</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Günün en güzel öğünü için Düzce&apos;nin en iyi adresleri. Serpme, köy ve yayla kahvaltısı rehberi.
            </p>
            <div className="mt-8 space-y-2">
              <a href="mailto:merhaba@duzcekahvaltiyerleri.com" className="flex items-center gap-2 text-white/40 text-sm hover:text-secondary transition-colors">
                <Mail className="w-3.5 h-3.5" /> merhaba@duzcekahvaltiyerleri.com
              </a>
              <p className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin className="w-3.5 h-3.5" /> Düzce, Türkiye
              </p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-secondary text-[10px] uppercase tracking-[0.2em] font-medium mb-5">
              Keşfet
            </h3>
            <ul className="space-y-3">
              {[
                { l: "Kültür", h: "#kultur" },
                { l: "Editör Seçimi", h: "#editor" },
                { l: "Lezzetler", h: "#lezzetler" },
                { l: "Blog", h: "/blog" },
              ].map((link) => (
                <li key={link.h}>
                  <Link href={link.h} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-secondary text-[10px] uppercase tracking-[0.2em] font-medium mb-5">
              Yasal
            </h3>
            <ul className="space-y-3">
              {[
                { l: "Gizlilik", h: "/gizlilik" },
                { l: "Kullanım Şartları", h: "/kullanim-sartlari" },
                { l: "Çerezler", h: "/cerez-politikasi" },
                { l: "Erişilebilirlik", h: "/erisilebilirlik" },
              ].map((link) => (
                <li key={link.h}>
                  <Link href={link.h} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="text-secondary text-[10px] uppercase tracking-[0.2em] font-medium mb-5">
              Editör Seçimi
            </h3>
            <a
              href="https://ibrahiminyeri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="font-serif text-xl font-bold text-white group-hover:text-secondary transition-colors flex items-center gap-2">
                İbrahim&apos;in Yeri
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-white/40 text-xs mt-1">
                Bolu Dağı Bakacak &middot; 7/24 Açık
              </p>
              <p className="text-white/30 text-xs mt-2 max-w-[200px] leading-relaxed">
                Düzce&apos;ye 45 dk mesafede. Güne odun ateşinde başlamak isteyenler için.
              </p>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Düzce Kahvaltı Rehberi. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs italic font-serif">
            &mdash; Güne lezzetle başlayın &mdash;
          </p>
        </div>
      </div>
    </footer>
  );
}
