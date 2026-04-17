import Link from "next/link";
import { FOOTER_LEGAL, NAV_ITEMS, SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--canvas-elev)]">
      <div className="mx-auto max-w-6xl px-5 lg:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="logo mb-4 block" aria-label="Ana sayfa">
              <span>wix</span>
              <span className="logo-mark">·</span>
              <span className="logo-uzmani">uzmanı</span>
            </Link>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed max-w-xs">
              Türkiye'de kurumsal markalara Wix üzerinde ajans düzeyinde
              strateji, tasarım ve performans hizmeti.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--emerald-900)] mb-3 uppercase tracking-wide">
              Sayfalar
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--bronze-hover)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--emerald-900)] mb-3 uppercase tracking-wide">
              Hizmetler
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--bronze-hover)] transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--emerald-900)] mb-3 uppercase tracking-wide">
              İletişim
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-[var(--ink-soft)] hover:text-[var(--bronze-hover)] transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp.link}
                  className="text-sm text-[var(--ink-soft)] hover:text-[var(--bronze-hover)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp ile yazın
                </a>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-[var(--ink-soft)] hover:text-[var(--bronze-hover)] transition-colors"
                >
                  Strateji görüşmesi
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[var(--ink-mute)]">
              Ortalama yanıt süresi: 4 saat (iş saatleri)
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--line)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[var(--ink-mute)]">
            © {new Date().getFullYear()} {SITE.fullName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-5">
            {FOOTER_LEGAL.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-[var(--ink-mute)] hover:text-[var(--emerald-900)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-[11px] text-[var(--ink-mute)] max-w-3xl leading-relaxed">
          Wix Uzmanı, Wix.com Ltd. ile resmî bir bağlı kuruluş değildir. "Wix" markası,
          yalnızca hizmet verdiğimiz platformun adını belirtmek için kullanılmaktadır.
          Wix ticari markaları ilgili sahiplerine aittir.
        </p>
      </div>
    </footer>
  );
}
