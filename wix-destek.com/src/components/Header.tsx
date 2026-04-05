"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa", exact: true },
  { href: "/hizmetler", label: "Hizmetler", exact: true },
  { href: "/blog", label: "Blog", exact: false },
  { href: "/hakkimizda", label: "Hakkımızda", exact: true },
  { href: "/iletisim", label: "İletişim", exact: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      {/* Skip to main content — klavye/ekran okuyucu erişilebilirliği (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        İçeriğe geç
      </a>
      <nav
        aria-label="Ana navigasyon"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-slate-900">
            Wix<span className="text-blue-600">Destek</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-150 text-sm lg:text-base ${
                isActive(link.href, link.exact)
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/blog/ara"
            className="p-2 text-slate-500 hover:text-blue-600 transition-colors duration-150"
            aria-label="Ara"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link
            href="/iletisim"
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-150 text-sm min-h-[44px]"
          >
            Destek Al
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 rounded-lg active:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
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
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[60px] bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden fixed left-0 right-0 top-[60px] bg-white border-t border-slate-200 z-50 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              <Link
                href="/blog/ara"
                className={`block px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === "/blog/ara"
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 active:bg-slate-100"
                }`}
              >
                Ara
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                    isActive(link.href, link.exact)
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 active:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="/iletisim"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors text-base"
                >
                  Destek Al
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
