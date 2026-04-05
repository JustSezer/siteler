import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12 px-4 sm:px-6 mt-auto" aria-label="Site alt bilgisi">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">
              Wix<span className="text-blue-400">Destek</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Wix ile web sitenizi kurmak, tasarlamak ve büyütmek için profesyonel destek hizmetleri.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wide">Sayfalar</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-150">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/hizmetler" className="hover:text-blue-400 transition-colors duration-150">Hizmetler</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition-colors duration-150">Blog</Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:text-blue-400 transition-colors duration-150">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-blue-400 transition-colors duration-150">İletişim</Link>
            </li>
          </ul>
        </div>

        {/* Blog Categories */}
        <div>
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wide">Kategoriler</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/blog?kategori=Wix%20Ba%C5%9Flang%C4%B1%C3%A7" className="hover:text-blue-400 transition-colors duration-150">Wix Başlangıç</Link>
            </li>
            <li>
              <Link href="/blog?kategori=Wix%20Tasar%C4%B1m" className="hover:text-blue-400 transition-colors duration-150">Wix Tasarım</Link>
            </li>
            <li>
              <Link href="/blog?kategori=Wix%20E-Ticaret" className="hover:text-blue-400 transition-colors duration-150">Wix E-Ticaret</Link>
            </li>
            <li>
              <Link href="/blog?kategori=Wix%20SEO" className="hover:text-blue-400 transition-colors duration-150">Wix SEO</Link>
            </li>
            <li>
              <Link href="/blog?kategori=Wix%20Sorun%20%C3%87%C3%B6zme" className="hover:text-blue-400 transition-colors duration-150">Wix Sorun Çözme</Link>
            </li>
          </ul>
        </div>

        {/* Legal + Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wide">İletişim</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="mailto:info@wix-destek.com" className="hover:text-blue-400 transition-colors duration-150">
                info@wix-destek.com
              </a>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-blue-400 transition-colors duration-150">
                Destek Formu
              </Link>
            </li>
            <li>
              <span className="text-slate-500 text-xs">Yanıt süresi: maks. 24 saat</span>
            </li>
            <li className="pt-2">
              <Link href="/gizlilik-politikasi" className="hover:text-blue-400 transition-colors duration-150">
                Gizlilik Politikası
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Wix Destek. Tüm hakları saklıdır.</p>
        <p className="mt-1 text-xs text-slate-700">Bu site Wix ile resmi bir bağlantısı olmayan bağımsız bir danışmanlık hizmetidir.</p>
      </div>
    </footer>
  );
}
