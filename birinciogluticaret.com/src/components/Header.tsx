"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { site } from "@/data/site";
import { categories } from "@/data/products";

const navItems = [
  { href: "/", label: "Anasayfa" },
  { href: "/magaza", label: "Mağaza" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "#", label: "Daha Fazlası" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--border)]">
      <div className="container-x flex items-center gap-3 md:gap-6 py-3 md:py-5">
        <Link href="/" className="shrink-0" aria-label={site.name}>
          <div className="relative w-14 h-14 md:w-20 md:h-20">
            <Image src={site.logo} alt={site.name} fill sizes="(max-width:768px) 56px, 80px" className="object-contain" unoptimized />
          </div>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <label className="search-pill" style={{ maxWidth: 640, padding: "1rem 1.5rem", fontSize: "1rem" }}>
            <Search size={20} className="text-[var(--muted-light)]" />
            <input type="search" placeholder="Ürün ara..." style={{ fontSize: "1rem" }} />
          </label>
        </div>

        <div className="flex-1 md:hidden" />

        <div className="flex items-center gap-1 md:gap-3 shrink-0">
          <Link
            href="#"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-base font-medium hover:text-[var(--brand)]"
          >
            <User size={22} /> Giriş Yap
          </Link>
          <button
            aria-label="Sepet"
            className="p-2 md:p-2.5 hover:text-[var(--brand)]"
          >
            <ShoppingCart size={22} />
          </button>
          <button
            aria-label="Menü"
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil search bar - her zaman görünür */}
      <div className="md:hidden border-t border-[var(--border)] px-4 py-3">
        <label className="search-pill">
          <Search size={18} className="text-[var(--muted-light)]" />
          <input type="search" placeholder="Ürün ara..." />
        </label>
      </div>

      <nav className="hidden lg:block border-t border-[var(--border)]">
        <div className="container-x flex items-center justify-center gap-12 py-5 text-lg font-semibold">
          {navItems.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="hover:text-[var(--accent)] transition tracking-wide"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-white">
          <nav className="container-x py-4 flex flex-col">
            {navItems.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-medium border-b border-[var(--border)] last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <div className="pl-3 py-2 flex flex-col">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/magaza/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm text-[var(--muted)]"
                >
                  → {c.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
