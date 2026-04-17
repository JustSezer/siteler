"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";

export default function HeaderV2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-coal)]/85 backdrop-blur-md border-b v2-rule"
          : "bg-transparent"
      }`}
      style={{ color: "var(--color-paper)" }}
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" aria-label="Bakacak Köfte" className="flex items-center gap-3 group">
          <span className="v2-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog-2)] group-hover:text-[var(--color-ember)] transition-colors">
            №
          </span>
          <span className="v2-display text-base md:text-lg leading-none">
            Bakacak<span className="text-[var(--color-ember)]">.</span>
          </span>
          <span className="hidden sm:inline v2-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] ml-2 border-l v2-rule pl-3">
            Karavan Bayilik · 2026
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden md:flex items-center gap-1">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 px-3 py-2 v2-display text-sm text-[var(--color-paper)]/80 hover:text-[var(--color-ember)] transition-colors"
            >
              <span className="v2-mono text-[9px] tracking-[0.2em] text-[var(--color-fog)] group-hover:text-[var(--color-ember)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
          <Link href="/franchise" className="ml-4 v2-btn-ember !py-2.5 !px-4">
            Başvur
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border v2-rule text-[var(--color-paper)]"
          aria-label="Menüyü aç"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-[99] bg-[var(--color-coal)] text-[var(--color-paper)]"
          role="dialog"
        >
          <div className="flex items-center justify-between h-16 px-6 border-b v2-rule">
            <span className="v2-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog-2)]">Menü</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 border v2-rule"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-8 gap-0">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 v2-display text-2xl border-b v2-rule"
              >
                <span className="v2-mono text-[10px] tracking-[0.22em] text-[var(--color-fog)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <Link href="/franchise" onClick={() => setOpen(false)} className="v2-btn-ember mt-10 justify-center">
              Bayilik başvurusu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
