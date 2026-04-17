"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/95 backdrop-blur-md border-b border-peach shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Bakacak Köfte ana sayfa">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-bone display-font font-bold text-lg transition-transform group-hover:-translate-y-0.5 ring-2 ring-red/20"
          >
            B
          </span>
          <span className="flex flex-col">
            <span className="display-font text-lg md:text-xl font-semibold leading-tight text-ink">
              Bakacak Köfte
            </span>
            <span className="eyebrow-gold text-[10px] leading-none">
              Karavan Franchise
            </span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-semibold text-ink-2 hover:text-red transition-colors rounded-full"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/franchise"
            className="ml-3 btn-red text-sm !py-2.5 !px-5"
          >
            Bayilik Başvurusu
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-soft/30 text-ink"
          aria-label="Menüyü aç"
          aria-expanded={open}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-[99] bg-cream"
          role="dialog"
          aria-label="Mobil menü"
        >
          <div className="flex items-center justify-between h-20 px-5 border-b border-peach">
            <span className="display-font text-lg font-semibold">Menü</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-soft/30 text-ink"
              aria-label="Menüyü kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav aria-label="Mobil ana menü" className="flex flex-col px-5 py-6 gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-4 text-lg display-font border-b border-peach/60 text-ink hover:text-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/franchise"
              onClick={() => setOpen(false)}
              className="btn-red mt-6 justify-center"
            >
              Bayilik Başvurusu
            </Link>
            <a
              href={`tel:${site.phones[0].value}`}
              className="btn-outline mt-3 justify-center"
            >
              <Phone className="w-4 h-4" /> {site.phones[0].display}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
