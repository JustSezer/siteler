import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, nav, legalNav } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-bone">
      <div className="h-[2px] red-hairline" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span
              aria-hidden
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-bone display-font font-bold text-lg ring-2 ring-red/30"
            >
              B
            </span>
            <span className="display-font text-xl font-semibold">
              Bakacak Köfte
            </span>
          </div>
          <p className="text-bone/70 leading-relaxed max-w-md">
            Mobil karavan konseptiyle Türkiye genelinde franchise veren köfte markası.
            İmza lezzeti <span className="text-red-soft">Bakacak Köftesi</span>,
            hazır işletme modeli ve düşük giriş bariyeriyle yatırımcıya çekici bir fırsat.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-bone/20 hover:border-red hover:text-red transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="E-posta"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-bone/20 hover:border-red hover:text-red transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow-gold mb-5">Sayfalar</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-bone/80 hover:text-red-soft transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow-gold mb-5">İletişim</p>
          <ul className="space-y-4 text-bone/80">
            {site.phones.map((p) => (
              <li key={p.value} className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-red-soft shrink-0" />
                <div>
                  <p className="text-xs opacity-70">{p.label}</p>
                  <a href={`tel:${p.value}`} className="hover:text-red-soft transition-colors">
                    {p.display}
                  </a>
                </div>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 text-red-soft shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-red-soft transition-colors">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-red-soft shrink-0" />
              <span>{site.address.line} · {site.address.city}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-bone/60">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-5 items-center">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-red-soft transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
