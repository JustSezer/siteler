"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa", exact: true },
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
    <header className="bg-slate-900 border-b border-slate-700/60 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl sm:text-2xl font-bold text-white">
            Et <span className="text-green-500">&</span> Mangal
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
                  ? "text-green-400"
                  : "text-slate-300 hover:text-green-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Icon */}
        <Link
          href="/blog/ara"
          className="hidden md:flex p-2 text-slate-400 hover:text-green-400 transition-colors duration-150"
          aria-label="Ara"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-300 hover:text-white rounded-lg active:bg-slate-800 transition-colors"
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
            className="md:hidden fixed inset-0 top-[57px] bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden fixed left-0 right-0 top-[57px] bg-slate-900 border-t border-slate-700 z-50 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              <Link
                href="/blog/ara"
                className={`block px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === "/blog/ara"
                    ? "bg-green-900/40 text-green-400"
                    : "text-slate-300 active:bg-slate-800"
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
                      ? "bg-green-900/40 text-green-400"
                      : "text-slate-300 active:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
