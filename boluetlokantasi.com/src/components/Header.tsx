"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
  const [headerHeight, setHeaderHeight] = useState(64);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!headerRef.current) return;
    const updateHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 64);
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#0f0f0f",
        borderBottom: scrolled
          ? "1px solid rgba(212, 175, 55, 0.4)"
          : "1px solid rgba(212, 175, 55, 0.12)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.7), 0 1px 0 rgba(212,175,55,0.1)"
          : "none",
      }}
    >
      {/* Altın üst çizgi — sadece scroll'da görünür */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: "linear-gradient(to right, transparent, #d4af37, transparent)",
          opacity: scrolled ? 0.6 : 0,
        }}
        aria-hidden="true"
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-2">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group"
          aria-label="Bolu Et Lokantası Ana Sayfa"
        >
          {/* Dekoratif ikon */}
          <span
            className="text-base leading-none select-none"
            style={{ color: "#d4af37" }}
            aria-hidden="true"
          >
            ◈
          </span>
          <span
            className="text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-200"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#d4af37",
              letterSpacing: "0.02em",
            }}
          >
            Bolu Et{" "}
            <span
              className="transition-colors duration-200"
              style={{ color: "#f5f5f5" }}
            >
              Lokantası
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-xs font-medium tracking-widest uppercase${isActive(link.href, link.exact) ? " active" : ""}`}
              style={{ letterSpacing: "0.1em" }}
              aria-current={isActive(link.href, link.exact) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Arama + Rezervasyon (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/blog/ara"
            className="search-icon-btn p-2 rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Blog'da ara"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <a
            href="tel:03740000000"
            className="rezervasyon-btn inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-5 py-2 min-h-[44px]"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Rezervasyon
          </a>
        </div>

        {/* Mobile: arama + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href="/blog/ara"
            className="search-icon-btn p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Blog'da ara"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <button
            className="p-2 -mr-1 rounded min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-150"
            style={{ color: "#a0a0a0" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 z-40"
            style={{ top: headerHeight, backgroundColor: "rgba(0,0,0,0.75)" }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menü paneli */}
          <div
            id="mobile-menu"
            className="md:hidden fixed left-0 right-0 z-50"
            role="navigation"
            aria-label="Mobil menü"
            style={{
              top: headerHeight,
              backgroundColor: "#141414",
              borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.85)",
            }}
          >
            {/* Üst gold çizgi */}
            <div
              className="w-full h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)" }}
              aria-hidden="true"
            />
            <div className="px-4 py-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded text-sm font-medium tracking-widest uppercase transition-colors duration-150"
                  style={{
                    color: isActive(link.href, link.exact) ? "#d4af37" : "#a0a0a0",
                    backgroundColor: isActive(link.href, link.exact)
                      ? "rgba(212, 175, 55, 0.08)"
                      : "transparent",
                    letterSpacing: "0.1em",
                  }}
                  aria-current={isActive(link.href, link.exact) ? "page" : undefined}
                >
                  {link.label}
                  {isActive(link.href, link.exact) && (
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#d4af37" }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}

              {/* Ayırıcı */}
              <div
                className="my-3 h-px"
                style={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                aria-hidden="true"
              />

              {/* Telefon */}
              <a
                href="tel:03740000000"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-semibold tracking-widest uppercase transition-all duration-150"
                style={{
                  backgroundColor: "#d4af37",
                  color: "#0f0f0f",
                  borderRadius: "2px",
                }}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Rezervasyon Yap
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
