"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";

export default function HeaderV4() {
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
          ? "bg-[var(--color-snow)]/95 backdrop-blur-md border-b-2 border-[var(--color-night)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" aria-label="Bakacak" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[var(--color-tomato)] text-[var(--color-snow)] v4-display-tight text-xl ring-2 ring-[var(--color-night)]"
          >
            B
          </span>
          <span className="v4-display text-[var(--color-night)] text-xl md:text-2xl">
            Bakacak<span className="text-[var(--color-tomato)]">.</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="v4-display text-[15px] text-[var(--color-night)] hover:text-[var(--color-tomato)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/franchise" className="v4-btn-tomato !py-2.5 !px-5 !text-sm">
            Bayilik Başvur
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--color-night)] bg-[var(--color-snow)] text-[var(--color-night)]"
          aria-label="Menüyü aç"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[99] bg-[var(--color-butter)] text-[var(--color-night)]">
          <div className="flex items-center justify-between h-16 px-6 border-b-2 border-[var(--color-night)]">
            <span className="v4-display text-xl">
              Bakacak<span className="text-[var(--color-tomato)]">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--color-night)]"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-5 v4-display-tight text-3xl border-b border-[var(--color-night)]/20"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/franchise" onClick={() => setOpen(false)} className="v4-btn-tomato justify-center mt-10">
              Bayilik Başvurusu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
