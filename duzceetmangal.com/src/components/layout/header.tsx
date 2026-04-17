"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-smoke/95 backdrop-blur-sm">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Üst çizgi */}
        <div className="rule-forest" />

        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-charcoal group-hover:text-forest transition-colors">
              Düzce Et Mangal
            </span>
            <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.2em] text-charcoal-muted">
              Duman Defteri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Ana menü"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal-soft hover:text-forest transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-charcoal-soft hover:text-forest transition-colors"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Alt çizgi */}
        <div className="rule-thin" />
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="lg:hidden bg-smoke border-t border-bark-soft"
          aria-label="Mobil menü"
        >
          <div className="max-w-[1320px] mx-auto px-5 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal-soft hover:text-forest py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
