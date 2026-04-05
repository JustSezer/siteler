"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-amber-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-h-[44px]" onClick={closeMenu}>
            <span className="text-xl sm:text-2xl" aria-hidden="true">☕</span>
            <div>
              <span className="text-base sm:text-lg font-bold text-amber-700">Düzce</span>
              <span className="text-base sm:text-lg font-bold text-stone-700"> Kahvaltı Yerleri</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-stone-600 hover:text-amber-700 transition-colors px-3 py-2 rounded-lg hover:bg-amber-50 text-sm font-medium">
              Ana Sayfa
            </Link>
            <Link href="/blog" className="text-stone-600 hover:text-amber-700 transition-colors px-3 py-2 rounded-lg hover:bg-amber-50 text-sm font-medium">
              Blog
            </Link>
            <a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="text-stone-600 hover:text-amber-700 transition-colors px-3 py-2 rounded-lg hover:bg-amber-50 text-sm font-medium">
              Menü
            </a>
            <a href={siteConfig.links.store} target="_blank" rel="dofollow" className="text-stone-600 hover:text-amber-700 transition-colors px-3 py-2 rounded-lg hover:bg-amber-50 text-sm font-medium">
              Yöresel Mağaza
            </a>
            <a
              href={siteConfig.businessUrl}
              target="_blank"
              rel="dofollow"
              className="ml-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
            >
              ibrahiminyeri.com
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-stone-600"
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

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="pb-4 space-y-1 border-t border-amber-100 pt-3">
            <Link href="/" onClick={closeMenu} className="block py-2.5 px-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors text-base">
              Ana Sayfa
            </Link>
            <Link href="/blog" onClick={closeMenu} className="block py-2.5 px-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors text-base">
              Blog
            </Link>
            <a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="block py-2.5 px-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors text-base">
              Menü
            </a>
            <a href={siteConfig.links.store} target="_blank" rel="dofollow" className="block py-2.5 px-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors text-base">
              Yöresel Mağaza
            </a>
            <a href={`tel:${siteConfig.phone}`} className="block py-2.5 px-3 text-amber-700 font-semibold hover:bg-amber-50 rounded-xl transition-colors text-base">
              📞 {siteConfig.phoneDisplay}
            </a>
            <div className="pt-2 px-2">
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="block w-full text-center bg-amber-700 hover:bg-amber-800 text-white font-semibold px-4 py-3 rounded-xl">
                ibrahiminyeri.com
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
