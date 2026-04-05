import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-500 text-white" aria-label="Site alt bilgisi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-2 mb-4"
              aria-label="Wix Destek - Anasayfaya git"
            >
              <div
                className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white">
                Wix<span className="text-primary-400">Destek</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Wix platformu hakkında Türkçe rehberler, ipuçları ve destek
              kaynakları. Web sitenizi Wix ile kolayca oluşturun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/wix-ucretsiz-web-sitesi-kurma"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Ücretsiz Site Kurma
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/wix-seo-rehberi-2024"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  SEO Rehberi
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Kaynaklar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/wix-e-ticaret-online-magaza"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  E-Ticaret Rehberi
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/wix-sablonlari-en-iyi-temalar"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Şablon Rehberi
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/wix-vs-wordpress-karsilastirma"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Wix vs WordPress
                </Link>
              </li>
              <li>
                <Link
                  href="/git/wix-premium"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Wix Premium →
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Hemen Başla
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Wix ile ücretsiz web sitenizi hemen oluşturun. Kredi kartı
              gerekmez!
            </p>
            <Link
              href="/git/wix-start"
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm min-h-[44px]"
            >
              Ücretsiz Başla →
            </Link>
          </div>
        </div>

        {/* Affiliate Disclosure — yasal uyumluluk icin belirgin */}
        <div className="border-t border-secondary-400 mt-8 pt-6">
          <div className="bg-secondary-600 rounded-xl px-5 py-4 mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white font-semibold">Reklam Açıklaması:</strong>{' '}
              Bu site Wix Inc. ile resmi bir bağlantıya sahip değildir ve Wix
              tarafından onaylı değildir. Sitemizdeki bazı bağlantılar affiliate
              (ortaklık) bağlantıları olabilir; bu bağlantılar üzerinden yapılan
              alışverişlerde komisyon kazanabiliriz. Bu durum sizin ödeyeceğiniz
              fiyatı etkilemez.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} WixDestek.com.tr. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500 text-xs">
              Wix, Wix.com Ltd. firmasının tescilli markasıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
