"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";

const navLinks = [
  { href: "#gezilecek-yerler", label: "Gezilecek Yerler" },
  { href: "#aktiviteler", label: "Aktiviteler" },
  { href: "#mevsimler", label: "Mevsimler" },
  { href: "#konaklama", label: "Konaklama" },
  { href: "#galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-primary-dark/80 backdrop-blur-sm py-5"
      }`}
    >
      <nav aria-label="Ana navigasyon" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl tracking-tight"
        >
          <Mountain className="w-7 h-7" strokeWidth={2.5} />
          <span>Bolu Dagi</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white px-3 py-2 text-base font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileOpen ? "Menuyu kapat" : "Menuyu ac"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
            className="lg:hidden bg-primary-dark/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/80 hover:text-white px-4 py-3 text-base font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
