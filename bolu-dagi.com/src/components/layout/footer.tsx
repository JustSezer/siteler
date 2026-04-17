"use client";

import { Mountain, MapPin, Mail, UtensilsCrossed, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Mountain className="w-6 h-6" />
              <span>Bolu Dagi</span>
            </div>
            <p className="text-base leading-relaxed">
              Bolu Dagi ve çevresindeki doğal guzellikler, aktiviteler ve
              gezilecek yerler hakkında kapsamli rehberiniz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Hızlı Erisim
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#gezilecek-yerler" className="hover:text-white transition-colors">
                  Gezilecek Yerler
                </a>
              </li>
              <li>
                <a href="#aktiviteler" className="hover:text-white transition-colors">
                  Aktiviteler
                </a>
              </li>
              <li>
                <a href="#mevsimler" className="hover:text-white transition-colors">
                  Mevsimler
                </a>
              </li>
              <li>
                <a href="#konaklama" className="hover:text-white transition-colors">
                  Konaklama
                </a>
              </li>
              <li>
                <a href="#ulasim" className="hover:text-white transition-colors">
                  Ulaşım
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Bolu, Türkiye</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@bolu-dagi.com" className="hover:text-white transition-colors">
                  info@bolu-dagi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Önerilen Mekanlar */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Önerilen Mekanlar
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://ibrahiminyerinden.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors group"
                >
                  <UtensilsCrossed className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold text-white block">ibrahiminyeri</span>
                    <span className="text-sm text-white/60">Bolu - Et & Kebap</span>
                  </span>
                  <ExternalLink className="w-3 h-3 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Yasal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/gizlilik" className="hover:text-white transition-colors">
                  Gizlilik Politikasi
                </a>
              </li>
              <li>
                <a href="/kullanim-sartlari" className="hover:text-white transition-colors">
                  Kullanim Sartlari
                </a>
              </li>
              <li>
                <a href="/cerez-politikasi" className="hover:text-white transition-colors">
                  Çerez Politikasi
                </a>
              </li>
              <li>
                <a href="/erisilebilirlik" className="hover:text-white transition-colors">
                  Erişilebilirlik
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    const fn = (window as unknown as Record<string, () => void>).__openCookiePreferences;
                    if (fn) fn();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Çerez Tercihleri
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bolu Dagi Rehberi. Tum haklari saklidir.</p>
        </div>
      </div>
    </footer>
  );
}
