"use client";

import Link from "next/link";

const PAGES = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const CONTACT = [
  { href: "tel:03740000000", label: "0374 XXX XX XX", type: "tel" },
  { href: "mailto:info@boluetlokantasi.com", label: "info@boluetlokantasi.com", type: "mail" },
];

const LEGAL = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(212, 175, 55, 0.15)",
      }}
    >
      {/* Dekoratif ust bant */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(to right, transparent, #d4af37, transparent)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      {/* Ana icerik */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Marka kolonu — genis */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-base"
                style={{ color: "#d4af37" }}
                aria-hidden="true"
              >
                ◈
              </span>
              <h3
                className="text-2xl font-semibold"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  color: "#d4af37",
                  letterSpacing: "0.02em",
                }}
              >
                Bolu Et{" "}
                <span style={{ color: "#f5f5f5" }}>Lokantası</span>
              </h3>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "#555555", lineHeight: "1.8" }}
            >
              Bolu&apos;nun eşsiz et lezzetleri ve geleneksel lokanta kültürü hakkında
              kapsamlı rehberiniz. Yüzyıllık mutfak mirasını sofralarınıza taşıyoruz.
            </p>

            {/* Calisma saatleri */}
            <div
              className="inline-flex items-start gap-3 p-4 mb-6"
              style={{
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "2px",
                backgroundColor: "rgba(212,175,55,0.03)",
              }}
            >
              <svg
                className="w-4 h-4 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#d4af37" }}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#d4af37", letterSpacing: "0.1em" }}
                >
                  Çalışma Saatleri
                </p>
                <p className="text-xs" style={{ color: "#666666" }}>
                  Her Gün 11:00 — 22:00
                </p>
              </div>
            </div>

            {/* Telefon */}
            <a
              href="tel:03740000000"
              className="footer-link inline-flex items-center gap-2 text-sm font-medium"
              aria-label="Telefon ile ara"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span style={{ color: "#d4af37" }}>0374 XXX XX XX</span>
            </a>
          </div>

          {/* Sayfalar kolonu */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#f5f5f5", letterSpacing: "0.12em" }}
            >
              Sayfalar
            </h4>
            <ul className="space-y-3" role="list">
              {PAGES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0 transition-colors duration-150"
                      style={{ backgroundColor: "#333333" }}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Iletisim kolonu */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#f5f5f5", letterSpacing: "0.12em" }}
            >
              İletişim
            </h4>
            <ul className="space-y-3" role="list">
              {CONTACT.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="footer-link text-sm block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Adres */}
              <li>
                <address
                  className="text-sm not-italic leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  Bolu, Türkiye
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#333333" }}>
            &copy; {year} Bolu Et Lokantası. Tüm hakları saklıdır.
          </p>

          {/* Yasal linkler */}
          <div className="flex items-center gap-5">
            {LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-link text-xs"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "#2a2a2a", letterSpacing: "0.12em" }}
          >
            Bolu&apos;nun Lezzet Rehberi
          </p>
        </div>
      </div>
    </footer>
  );
}
