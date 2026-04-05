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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header
      className={`bg-white border-b-2 border-[#c2571a] sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span
            className="text-xl sm:text-2xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            <span className="text-[#c2571a]">Düzce&apos;de</span>
            <span className="text-[#1a1a1a]"> Yemek</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-150 ${
                isActive(link.href, link.exact)
                  ? "text-[#c2571a] bg-[#fdf0e8]"
                  : "text-[#1a1a1a] hover:text-[#c2571a] hover:bg-[#fdf0e8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search + Hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/blog/ara"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg text-[#6b6b6b] hover:text-[#c2571a] hover:bg-[#fdf0e8] transition-colors duration-150"
            aria-label="Arama"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-1 rounded-lg text-[#1a1a1a] hover:bg-[#fdf0e8] transition-colors duration-150"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[57px] bg-black/30 z-40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden fixed left-0 right-0 top-[57px] bg-white border-t border-[#f0e8df] z-50 shadow-xl">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/blog/ara"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-colors ${
                  pathname === "/blog/ara"
                    ? "bg-[#fdf0e8] text-[#c2571a]"
                    : "text-[#1a1a1a] hover:bg-[#fdf0e8] hover:text-[#c2571a]"
                }`}
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Ara
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold text-base transition-colors ${
                    isActive(link.href, link.exact)
                      ? "bg-[#fdf0e8] text-[#c2571a]"
                      : "text-[#1a1a1a] hover:bg-[#fdf0e8] hover:text-[#c2571a]"
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
