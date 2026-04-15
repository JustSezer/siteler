"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/92 backdrop-blur border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-baseline gap-2"
          aria-label={site.name}
        >
          <span className="display-font text-2xl sm:text-[26px] tracking-tight text-ink">
            Et <span className="italic text-ember">&amp;</span> Mangal
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-ink-mute font-sans">
            Rehber
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[12px] uppercase tracking-[0.16em] font-sans font-medium text-ink-soft hover:text-ember transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 inline-flex items-center justify-center text-ink border border-ink/20"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-rule bg-paper">
          <ul className="max-w-[1280px] mx-auto px-5 py-4 flex flex-col gap-1">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-rule-soft text-[13px] uppercase tracking-[0.14em] text-ink-soft hover:text-ember font-sans font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
