"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Editörden", href: "#editorden" },
  { label: "Bolu Eti", href: "#bolu-eti" },
  { label: "Rehber", href: "#rehber" },
  { label: "Pişirme", href: "#pisirme" },
  { label: "Yazılar", href: "#yazilar" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-0.5">
              Bağımsız Rehber · 2026
            </span>
            <span className="font-display text-2xl lg:text-[26px] font-black text-ink leading-none tracking-tight">
              Bolu <span className="italic font-light">Mangal</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft hover:text-ember transition-colors"
              >
                <span className="text-ink-muted mr-1.5">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#kapanis"
            className="hidden lg:inline-flex items-center gap-2 border-2 border-ink text-ink px-5 py-2 hover:bg-ink hover:text-paper transition-all font-mono text-[11px] uppercase tracking-[0.15em]"
          >
            Rezervasyon →
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-paper border-t border-rule">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft"
              >
                <span className="text-ink-muted mr-2">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
            <Link
              href="#kapanis"
              onClick={() => setMobileOpen(false)}
              className="block mt-6 border-2 border-ink text-ink px-5 py-3 text-center font-mono text-[11px] uppercase tracking-[0.15em]"
            >
              Rezervasyon →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
