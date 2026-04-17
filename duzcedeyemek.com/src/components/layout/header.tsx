"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { nav } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-sm border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo — sadece yazı */}
          <Link href="/" className="leading-tight">
            <span className="font-display text-xl font-bold text-primary">
              Düzce&apos;de
            </span>{" "}
            <span className="text-secondary font-bold text-sm tracking-wide">
              YEMEK
            </span>
          </Link>

          {/* Nav pills */}
          <nav className="hidden lg:flex items-center gap-2">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-foreground-muted hover:bg-background-alt hover:text-primary text-sm font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 rounded-xl bg-background-alt flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-muted transition-colors"
              aria-label="Ara"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <Link
              href="/duzce-yoresel-yemekleri"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-light transition-colors"
            >
              Keşfet
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-background-alt flex items-center justify-center text-primary"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-card border-t border-border-light overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 rounded-xl text-foreground-muted hover:bg-background-alt hover:text-primary text-sm font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
