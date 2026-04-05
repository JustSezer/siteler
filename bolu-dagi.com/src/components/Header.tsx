"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-green-950 shadow-lg shadow-green-950/20" : "bg-green-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 min-h-[44px]" onClick={closeMenu}>
            <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center border border-green-400/30">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="text-base sm:text-lg font-bold text-white">Bolu Dağı</span>
              <span className="hidden sm:block text-xs text-green-300 -mt-0.5">Doğa, Kültür & Keşif</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-green-100 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors text-sm font-medium">
              Ana Sayfa
            </Link>
            <Link href="/blog" className="px-3 py-2 text-green-100 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors text-sm font-medium">
              Blog
            </Link>
            <a href={siteConfig.links.about} target="_blank" rel="dofollow" className="px-3 py-2 text-green-100 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors text-sm font-medium">
              Hakkımızda
            </a>
            <div className="w-px h-5 bg-green-700 mx-1" />
            <a
              href={siteConfig.businessUrl}
              target="_blank"
              rel="dofollow"
              className="flex items-center gap-1.5 bg-green-400 hover:bg-green-300 text-green-950 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              ibrahiminyeri.com
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-green-200 hover:text-white"
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

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[calc(100vh-3.5rem)] opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="pb-4 space-y-0.5 border-t border-green-700/50 pt-3">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 py-3 px-3 text-green-100 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors text-base">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" /></svg>
              Ana Sayfa
            </Link>
            <Link href="/blog" onClick={closeMenu} className="flex items-center gap-2 py-3 px-3 text-green-100 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors text-base">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              Blog
            </Link>
            <a href={siteConfig.links.about} target="_blank" rel="dofollow" className="flex items-center gap-2 py-3 px-3 text-green-100 hover:text-white hover:bg-green-800/50 rounded-lg transition-colors text-base">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
              Hakkımızda
            </a>
            <div className="pt-2 px-3">
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="flex items-center justify-center gap-2 w-full bg-green-400 hover:bg-green-300 text-green-950 font-semibold py-3 rounded-lg text-sm transition-colors">
                ibrahiminyeri.com →
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
