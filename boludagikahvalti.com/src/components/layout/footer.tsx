import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone" role="contentinfo">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-2 mb-5" aria-label="Bolu Dağı Kahvaltı ana sayfa">
              <span className="font-serif text-3xl sm:text-4xl leading-none tracking-tight">
                Bolu Dağı
              </span>
              <span className="font-serif italic text-2xl sm:text-3xl leading-none text-ochre-soft">
                kahvaltı
              </span>
            </Link>
            <p className="eyebrow-mute text-bone/40 mb-5">Bolu Dağı · Türkiye</p>
            <p className="text-[14.5px] leading-[1.85] text-bone/65 max-w-md">
              Sabahın sisi henüz dağılmadan, ahşap masada bir bardak demli çayın
              yanında başlayan günün rehberi.
            </p>
          </div>

          <nav aria-label="Alt navigasyon — Sofra">
            <p className="eyebrow text-ochre-soft mb-5">Sofra</p>
            <ul className="space-y-3">
              {[
                { l: "Yöresel Kahvaltılar", h: "#kahvaltilar" },
                { l: "Önerilen Mekanlar", h: "#mekanlar" },
                { l: "Kahvaltı Programları", h: "#programlar" },
                { l: "Ev Sofrası", h: "#ev-sofrasi" },
                { l: "Blog", h: "/blog" },
                { l: "SSS", h: "#sss" },
              ].map((link) => (
                <li key={link.h}>
                  <Link
                    href={link.h}
                    className="text-[14px] text-bone/65 hover:text-ochre-soft transition-colors"
                  >
                    {link.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Alt navigasyon — Yasal">
            <p className="eyebrow text-ochre-soft mb-5">Yasal</p>
            <ul className="space-y-3">
              {[
                { l: "Gizlilik", h: "/gizlilik" },
                { l: "Kullanım Şartları", h: "/kullanim-sartlari" },
                { l: "Çerezler", h: "/cerez-politikasi" },
                { l: "Erişilebilirlik", h: "/erisilebilirlik" },
              ].map((link) => (
                <li key={link.h}>
                  <Link
                    href={link.h}
                    className="text-[14px] text-bone/65 hover:text-ochre-soft transition-colors"
                  >
                    {link.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-ochre-soft mb-5">Dost Sofralar</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ibrahiminyeri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-bone/65 hover:text-ochre-soft transition-colors"
                >
                  İbrahim&apos;in Yeri
                </a>
                <p className="text-[12px] text-bone/35 mt-1">Bakacak · 1989&apos;dan beri</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="eyebrow-mute text-bone/40">
            &copy; {new Date().getFullYear()} Bolu Dağı Kahvaltı &middot; Tüm hakları saklıdır
          </p>
          <p className="font-serif italic text-bone/40 text-[15px]">
            — Sabahın ilk ışığıyla —
          </p>
        </div>
      </div>
    </footer>
  );
}
