"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sofra", href: "#kahvaltilar" },
  { label: "Mekanlar", href: "#mekanlar" },
  { label: "Programlar", href: "#programlar" },
  { label: "Ev Sofrası", href: "#ev-sofrasi" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-bone/92 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          <Link
            href="/"
            className="flex items-baseline gap-2"
            aria-label="Bolu Dağı Kahvaltı ana sayfa"
          >
            <span className={`font-serif text-[22px] sm:text-2xl leading-none tracking-tight transition-colors ${
              scrolled ? "text-charcoal" : "text-bone"
            }`}>
              Bolu Dağı
            </span>
            <span className={`font-serif italic text-lg sm:text-xl leading-none transition-colors ${
              scrolled ? "text-ochre" : "text-ochre-soft"
            }`}>
              kahvaltı
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  scrolled
                    ? "text-ash hover:text-forest"
                    : "text-bone/80 hover:text-ochre-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="#kahvaltilar" className="btn-forest !py-2.5 !px-5 !text-[13px]">
              Sofraya Buyur
            </Link>
          </div>

          <button
            ref={toggleRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled ? "text-charcoal border border-charcoal" : "text-bone border border-bone"
            }`}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bone border-t border-border overflow-hidden"
            aria-label="Mobil navigasyon"
          >
            <div className="max-w-[1320px] mx-auto px-5 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 border-b border-border text-[15px] font-medium text-charcoal hover:text-forest transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#kahvaltilar"
                onClick={closeMenu}
                className="btn-forest justify-center mt-5"
              >
                Sofraya Buyur
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
