"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";

export default function HeaderV3() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-paper-3)]/90 backdrop-blur-md border-b v3-rule"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" aria-label="Bakacak Köfte" className="flex items-baseline gap-3">
          <span className="v3-serif text-[var(--color-charcoal)] text-2xl md:text-[28px] leading-none italic">
            Bakacak
          </span>
          <span className="hidden sm:inline v3-sans text-[10px] tracking-[0.24em] uppercase text-[var(--color-stone)] border-l v3-rule pl-3">
            Karavan Bayilik
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="v3-sans text-[14px] text-[var(--color-charcoal-2)] hover:text-[var(--color-terracotta)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/franchise" className="v3-btn !py-2.5 !px-5">
            Başvur
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border v3-rule text-[var(--color-charcoal)]"
          aria-label="Menüyü aç"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[99] bg-[var(--color-paper-3)] text-[var(--color-charcoal)]">
          <div className="flex items-center justify-between h-16 px-6 border-b v3-rule">
            <span className="v3-sans text-[10px] tracking-[0.24em] uppercase text-[var(--color-stone)]">Menü</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border v3-rule"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-5 v3-serif text-3xl border-b v3-rule"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/franchise" onClick={() => setOpen(false)} className="v3-btn justify-center mt-10">
              Bayilik başvurusu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
