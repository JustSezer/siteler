"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--border)] mt-6">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <h4 className="font-bold mb-4 text-[var(--brand)]">Site Haritası</h4>
          <ul className="space-y-2 text-[var(--muted)]">
            <li><Link href="/" className="hover:text-[var(--accent)]">Anasayfa</Link></li>
            <li><Link href="/magaza" className="hover:text-[var(--accent)]">Mağaza</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-[var(--accent)]">Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-[var(--accent)]">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[var(--brand)]">Kategoriler</h4>
          <ul className="space-y-2 text-[var(--muted)]">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/magaza/${c.slug}`} className="hover:text-[var(--accent)]">{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[var(--brand)]">İletişim Bilgileri</h4>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>
              <a href={`tel:${site.phone1Tel}`} className="hover:text-[var(--accent)]">
                Sabit: {site.phone1}
              </a>
            </li>
            <li>
              <a href={site.social.whatsapp} target="_blank" rel="noopener" className="hover:text-[var(--accent)]">
                Whatsapp: {site.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-[var(--accent)] break-all">
                {site.email}
              </a>
            </li>
            <li className="pt-1">{site.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[var(--brand)]">Sözleşmeler</h4>
          <ul className="space-y-2 text-[var(--muted)]">
            <li><Link href="/uyelik-sozlesmesi" className="hover:text-[var(--accent)]">Üyelik Sözleşmesi</Link></li>
            <li><Link href="/gizlilik" className="hover:text-[var(--accent)]">Gizlilik Sözleşmesi</Link></li>
            <li><Link href="/kullanim-kosullari" className="hover:text-[var(--accent)]">Kullanım Koşulları</Link></li>
            <li><Link href="/mesafeli-satis" className="hover:text-[var(--accent)]">Mesafeli Satış</Link></li>
            <li><Link href="/kvkk" className="hover:text-[var(--accent)]">Kişisel Veri & İletişim İzni</Link></li>
            <li><Link href="/cerez-politikasi" className="hover:text-[var(--accent)]">Çerez Politikası</Link></li>
            <li>
              <button
                type="button"
                onClick={() => {
                  const fn = (window as unknown as Record<string, () => void>).__openCookiePreferences;
                  if (fn) fn();
                }}
                className="hover:text-[var(--accent)] text-left"
              >
                Çerez Tercihleri
              </button>
            </li>
            <li><Link href="/erisilebilirlik" className="hover:text-[var(--accent)]">Erişilebilirlik</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)] bg-[#faf7f2]">
        <div className="container-x py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Sol: ödeme yöntemleri - büyük boy */}
          <div className="flex flex-wrap items-center gap-3">
            {([
              ["iyzico", site.payments.iyzico],
              ["VISA", site.payments.visa],
              ["TROY", site.payments.troy],
            ] as const).map(([name, src]) => (
              <div
                key={name}
                className="relative w-[120px] h-16 bg-white border border-[var(--border)] rounded-lg shadow-sm"
              >
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="120px"
                  className="object-contain p-2.5"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Sağ: sosyal ikonlar + destek hattı - büyütüldü */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2.5">
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener"
                aria-label="Whatsapp"
                className="w-12 h-12 rounded-full bg-[var(--success)] text-white flex items-center justify-center hover:scale-110 transition shadow-sm"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full text-white flex items-center justify-center hover:scale-110 transition shadow-sm"
                style={{ background: "#E4405F" }}
              >
                <Instagram size={20} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full text-white flex items-center justify-center hover:scale-110 transition shadow-sm"
                style={{ background: "#1877F2" }}
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">
                Müşteri Destek Hattımız
              </div>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener"
                className="text-3xl md:text-4xl font-black text-[var(--brand)] hover:text-[var(--accent)] tracking-tight"
              >
                {site.phone2}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)]">
          <div className="container-x py-4 text-center text-[11px] text-[var(--muted-light)]">
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
