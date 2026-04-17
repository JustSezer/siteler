import Link from "next/link";
import { site, nav, legalNav } from "@/lib/site";

export default function FooterV3() {
  return (
    <footer className="v3-section pt-16 sm:pt-20 pb-8 sm:pb-10 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-10 mb-12 sm:mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="v3-num">№ — Bakacak</p>
            <h3 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl mt-3 leading-[0.95] tracking-[-0.02em]">
              Köz, karavan
              <br />
              <span className="italic text-[var(--color-terracotta)]">ve yol.</span>
            </h3>
            <p className="v3-sans text-[var(--color-charcoal-3)] mt-5 max-w-md text-sm sm:text-base leading-relaxed font-light">
              {site.description}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="v3-eyebrow mb-5">Sayfalar</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="v3-sans text-[var(--color-charcoal-2)] hover:text-[var(--color-terracotta)] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="v3-eyebrow mb-5">İletişim</p>
            <ul className="space-y-3 v3-sans text-[var(--color-charcoal-2)] text-sm">
              <li>{site.phones[0].display}</li>
              <li className="break-all">{site.email}</li>
              <li className="text-[var(--color-stone)] leading-relaxed">
                {site.address.line}
                <br />
                {site.address.district} · {site.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t v3-rule pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="v3-sans text-xs text-[var(--color-stone)]">
            © {new Date().getFullYear()} {site.fullName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 v3-sans text-xs text-[var(--color-stone)]">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--color-terracotta)] transition-colors">
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
