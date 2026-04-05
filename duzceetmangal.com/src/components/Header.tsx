"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => { if (window.innerWidth >= 768) closeMenu(); };
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="bg-stone-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 min-h-[44px]" onClick={closeMenu}>
            <span className="text-xl sm:text-2xl" aria-hidden="true">🔥</span>
            <div>
              <span className="text-base sm:text-lg font-bold text-amber-400">Düzce</span>
              <span className="text-base sm:text-lg font-bold text-white"> Et Mangal</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/" className="hover:text-amber-400 transition-colors py-2">Ana Sayfa</Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors py-2">Blog</Link>
            <a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="hover:text-amber-400 transition-colors py-2">Menü</a>
            <a href={siteConfig.links.store} target="_blank" rel="dofollow" className="hover:text-amber-400 transition-colors py-2">Mağaza</a>
            <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-4 py-2 rounded-full transition-colors">
              ibrahiminyeri.com
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="pb-4 space-y-1 border-t border-stone-700 pt-3">
            <Link href="/" onClick={closeMenu} className="block py-3 px-2 hover:text-amber-400 hover:bg-stone-800 rounded-lg transition-colors text-base">Ana Sayfa</Link>
            <Link href="/blog" onClick={closeMenu} className="block py-3 px-2 hover:text-amber-400 hover:bg-stone-800 rounded-lg transition-colors text-base">Blog</Link>
            <a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="block py-3 px-2 hover:text-amber-400 hover:bg-stone-800 rounded-lg transition-colors text-base">Menü</a>
            <a href={siteConfig.links.store} target="_blank" rel="dofollow" className="block py-3 px-2 hover:text-amber-400 hover:bg-stone-800 rounded-lg transition-colors text-base">Mağaza</a>
            <a href={`tel:${siteConfig.phone}`} className="block py-3 px-2 text-amber-400 hover:bg-stone-800 rounded-lg transition-colors text-base font-semibold">
              📞 {siteConfig.phoneDisplay}
            </a>
            <div className="pt-2 px-2">
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-4 py-3 rounded-full">
                ibrahiminyeri.com
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
