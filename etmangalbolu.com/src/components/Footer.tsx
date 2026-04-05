import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-12 sm:mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Marka */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-3 text-cream">
            Bolu Et Mangal
          </h3>
          <div className="w-10 h-0.5 bg-secondary mb-4" />
          <p className="text-sm leading-relaxed text-stone-400">
            Bolu&apos;nun zengin et ve mangal kültürünü keşfedin. Nesiller
            boyu aktarılan tarifler, seçkin etler ve açık ateşin buluşması.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="font-serif font-semibold mb-3 text-cream text-lg">Hızlı Linkler</h4>
          <div className="w-8 h-0.5 bg-secondary mb-4" />
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/blog"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                Blog Yazıları
              </Link>
            </li>
            <li>
              <Link
                href="/kategoriler"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                Kategoriler
              </Link>
            </li>
            <li>
              <Link
                href="/gizlilik"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <a
                href="/feed.xml"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
                aria-label="RSS Feed"
              >
                RSS Feed
              </a>
            </li>
          </ul>
        </div>

        {/* İlgili Siteler */}
        <div>
          <h4 className="font-serif font-semibold mb-3 text-cream text-lg">İlgili Siteler</h4>
          <div className="w-8 h-0.5 bg-secondary mb-4" />
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://ibrahiminyeri.com"
                target="_blank"
                rel="dofollow"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                ibrahiminyeri.com
              </a>
            </li>
            <li>
              <a
                href="https://ibrahiminyeri.com/blog"
                target="_blank"
                rel="dofollow"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                İbrahim İnyeri Blog
              </a>
            </li>
            <li>
              <a
                href="https://ibrahiminyeri.com/hakkimda"
                target="_blank"
                rel="dofollow"
                className="hover:text-secondary transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                Hakkımda
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-700 py-4 px-4 text-center text-xs text-stone-500">
        <p>
          &copy; {new Date().getFullYear()} etmangalbolu.com &mdash; Tüm hakları saklıdır. &nbsp;|&nbsp;{" "}
          <a
            href="https://ibrahiminyeri.com"
            target="_blank"
            rel="dofollow"
            className="hover:text-secondary transition-colors duration-150"
          >
            İbrahim İnyeri
          </a>{" "}
          tarafından hazırlanmıştır.
        </p>
      </div>
    </footer>
  );
}
