"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${SITE.name} ana sayfa`}>
      <span>wix</span>
      <span className="logo-mark">·</span>
      <span className="logo-uzmani">uzmanı</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[var(--canvas)]/85 backdrop-blur-xl border-[var(--line)]"
          : "bg-[var(--canvas)]/60 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav aria-label="Ana gezinme" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative text-[14px] font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--bronze)] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/iletisim" className="btn-primary text-[13px]" style={{ padding: "9px 18px" }}>
              Randevu al
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 rounded-md hover:bg-[var(--tile)] text-[var(--ink)] transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobil gezinme"
            className="lg:hidden pb-5 pt-2 border-t border-[var(--line)] animate-fade-in"
          >
            <ul className="flex flex-col gap-1 mt-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-md text-[15px] font-medium text-[var(--ink)] hover:bg-[var(--tile)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-3">
              <Link
                href="/iletisim"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Strateji Görüşmesi
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
