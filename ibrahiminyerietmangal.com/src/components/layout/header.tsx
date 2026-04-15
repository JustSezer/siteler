"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-coal/95 backdrop-blur-md border-b border-smoke"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <span className="display-font text-xl sm:text-2xl text-bone tracking-tight leading-none">
            İbrahim&apos;in <span className="text-ember italic">Yeri</span>
          </span>
          <span className="hidden md:inline-block text-[11px] text-bone-mute border-l border-smoke pl-3 tracking-wide">
            Bolu Dağı · 1990
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-bone-soft hover:text-ember transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phones[0].value}`}
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-ember hover:text-ember-soft transition-colors"
          >
            <Phone className="w-4 h-4" />
            7/24 Açık
          </a>
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center text-bone border border-smoke hover:border-ember hover:text-ember transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-smoke bg-coal">
          <ul className="max-w-[1320px] mx-auto px-5 py-4 flex flex-col">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 border-b border-smoke/60 text-[15px] font-medium text-bone-soft hover:text-ember transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-5 flex flex-col gap-3">
              <a
                href={`tel:${site.phones[0].value}`}
                className="btn-ember justify-center"
              >
                <Phone className="w-4 h-4" />
                {site.phones[0].display}
              </a>
              <a
                href={site.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center"
              >
                Yol Tarifi
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
