"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBox from "@/components/SearchBox";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-cream sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-md border-b border-surface" : "border-b border-stone-200"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo — Lora serif, bordo */}
        <Link href="/" className="shrink-0 group">
          <span className="font-serif text-xl sm:text-2xl font-bold text-primary group-hover:text-red-900 transition-colors duration-150">
            Bolu Et Mangal
          </span>
        </Link>

        {/* Desktop arama */}
        <div className="hidden md:block w-56 lg:w-72">
          <SearchBox />
        </div>

        {/* Mobil hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary hover:text-red-900 transition-colors duration-150"
          aria-label="Menüyü aç/kapat"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm shrink-0">
          <Link
            href="/"
            className="text-dark hover:text-primary transition-colors duration-150 font-medium relative group"
          >
            Ana Sayfa
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-200" />
          </Link>
          <Link
            href="/blog"
            className="text-dark hover:text-primary transition-colors duration-150 font-medium relative group"
          >
            Blog
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-200" />
          </Link>
          <Link
            href="/kategoriler"
            className="text-dark hover:text-primary transition-colors duration-150 font-medium relative group"
          >
            Kategoriler
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-200" />
          </Link>
          <Link
            href="https://ibrahiminyeri.com"
            target="_blank"
            rel="dofollow"
            className="bg-primary text-cream px-4 py-2 rounded-lg hover:bg-red-900 transition-colors duration-150 font-semibold min-h-[44px] inline-flex items-center text-sm"
          >
            İbrahim İnyeri
          </Link>
        </div>
      </nav>

      {/* Mobil nav */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-200 bg-cream px-4 pb-4 space-y-1">
          <div className="py-3">
            <SearchBox />
          </div>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-3 min-h-[44px] text-dark hover:text-primary transition-colors duration-150 font-medium border-b border-stone-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block py-3 min-h-[44px] text-dark hover:text-primary transition-colors duration-150 font-medium border-b border-stone-100"
          >
            Blog
          </Link>
          <Link
            href="/kategoriler"
            onClick={() => setIsOpen(false)}
            className="block py-3 min-h-[44px] text-dark hover:text-primary transition-colors duration-150 font-medium border-b border-stone-100"
          >
            Kategoriler
          </Link>
          <Link
            href="https://ibrahiminyeri.com"
            target="_blank"
            rel="dofollow"
            onClick={() => setIsOpen(false)}
            className="block py-3 min-h-[44px] text-secondary font-semibold hover:text-amber-700 transition-colors duration-150"
          >
            İbrahim İnyeri &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
