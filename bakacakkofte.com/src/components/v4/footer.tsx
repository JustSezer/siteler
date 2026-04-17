import Link from "next/link";
import { site, nav, legalNav } from "@/lib/site";

export default function FooterV4() {
  return (
    <footer className="v4-section-night pt-16 sm:pt-20 pb-10">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-10 mb-12">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-tomato)] text-[var(--color-snow)] v4-display-tight text-xl ring-2 ring-[var(--color-mustard)]/40"
              >
                B
              </span>
              <span className="v4-display text-[var(--color-snow)] text-2xl">
                Bakacak<span className="text-[var(--color-tomato-soft)]">.</span>
              </span>
            </div>
            <p className="v4-sans text-[var(--color-snow)]/65 max-w-md leading-relaxed">
              {site.description}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="v4-eyebrow !text-[var(--color-mustard)] mb-5">Sayfalar</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="v4-sans text-[var(--color-snow)]/85 hover:text-[var(--color-tomato-soft)] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="v4-eyebrow !text-[var(--color-mustard)] mb-5">İletişim</p>
            <ul className="space-y-3 v4-sans text-[var(--color-snow)]/85 text-sm">
              <li>{site.phones[0].display}</li>
              <li className="break-all">{site.email}</li>
              <li className="text-[var(--color-snow)]/55 leading-relaxed">
                {site.address.line}
                <br />
                {site.address.district} · {site.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-snow)]/15 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="v4-sans text-xs text-[var(--color-snow)]/55">
            © {new Date().getFullYear()} {site.fullName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 v4-sans text-xs text-[var(--color-snow)]/65">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--color-tomato-soft)] transition-colors">
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
