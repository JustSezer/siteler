import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10 sm:py-12 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
            Et <span className="text-green-500">&</span> Mangal
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Et çeşitleri, mangal tarifleri ve ızgara teknikleri hakkında
            kapsamlı uzman rehberiniz.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wide">Sayfalar</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400 transition-colors duration-150">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-400 transition-colors duration-150">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:text-green-400 transition-colors duration-150">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-green-400 transition-colors duration-150">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wide">Yasal</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/gizlilik-politikasi" className="hover:text-green-400 transition-colors duration-150">
                Gizlilik Politikası
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wide">İletişim</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="mailto:info@et-mangal.com" className="hover:text-green-400 transition-colors duration-150">
                info@et-mangal.com
              </a>
            </li>
            <li>
              <a
                href="https://ibrahiminyeri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors duration-150"
              >
                ibrahiminyeri.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Et & Mangal. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
