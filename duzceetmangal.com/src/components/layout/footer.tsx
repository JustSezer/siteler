import Link from "next/link";
import { site, nav } from "@/lib/site";
import { partner } from "@/lib/partner";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-smoke/80 mt-auto">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Marka */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-bold text-smoke mb-2">
              Düzce Et Mangal
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke/50 mb-4">
              Duman Defteri · 2026
            </p>
            <p className="font-body text-sm leading-relaxed text-smoke/60">
              {site.tagline}. Düzce&apos;nin bağımsız et ve mangal rehberi.
            </p>
          </div>

          {/* Sayfalar */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper mb-4">
              Sayfalar
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-smoke/60 hover:text-copper transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Düzce Rehberi */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper mb-4">
              Düzce Rehberi
            </p>
            <ul className="space-y-2 font-body text-sm text-smoke/60">
              <li>Bakacak Mevkii</li>
              <li>Kaynaşlı</li>
              <li>Düzce Merkez</li>
              <li>Akçakoca</li>
              <li>D100 Güzergahı</li>
            </ul>
          </div>

          {/* Yolcunun Tercihi */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper mb-4">
              Yolcunun Tercihi
            </p>
            <p className="font-body text-sm text-smoke/60 mb-3">
              {partner.shortNote}
            </p>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-copper hover:text-copper-glow transition-colors"
            >
              {partner.name} &rarr;
            </a>
            <p className="font-body text-sm text-smoke/40 mt-2">
              {partner.address}
            </p>
            <a
              href={`tel:${partner.phone}`}
              className="font-mono text-xs text-smoke/50 hover:text-copper transition-colors"
            >
              {partner.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Alt bar */}
        <div className="border-t border-smoke/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-smoke/30">
            &copy; {new Date().getFullYear()} Düzce Et Mangal. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-smoke/30">
            <Link
              href="/gizlilik"
              className="hover:text-smoke/60 transition-colors"
            >
              Gizlilik
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
