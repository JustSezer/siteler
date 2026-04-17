import Link from "next/link";
import { site, nav, legalNav } from "@/lib/site";

export default function FooterV2() {
  return (
    <footer className="v2-section border-t v2-rule pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-10 mb-12 sm:mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="v2-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog-2)]">
              № — Bakacak
            </p>
            <h3 className="v2-display text-[var(--color-paper)] text-3xl sm:text-4xl md:text-6xl mt-3 sm:mt-4 leading-[0.95] tracking-[-0.03em]">
              Köz, karavan
              <br />
              <span className="text-[var(--color-ember)] italic font-normal">ve yol.</span>
            </h3>
            <p className="text-[var(--color-paper)]/65 mt-5 sm:mt-6 max-w-md text-sm sm:text-base leading-relaxed">
              {site.description}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="v2-label mb-5">Sayfalar</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="v2-display text-[var(--color-paper)]/80 hover:text-[var(--color-ember)] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="v2-label mb-5">İletişim</p>
            <ul className="space-y-3 v2-display text-[var(--color-paper)]/80 text-sm">
              <li>{site.phones[0].display}</li>
              <li className="break-all">{site.email}</li>
              <li className="text-[var(--color-paper)]/55 leading-relaxed">
                {site.address.line}
                <br />
                {site.address.district} · {site.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t v2-rule pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="v2-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
            © {new Date().getFullYear()} {site.fullName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 v2-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-fog-2)]">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--color-ember)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
