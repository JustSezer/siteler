import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              ☕ Düzce Kahvaltı Yerleri
            </h3>
            <p className="text-sm leading-relaxed text-amber-200">
              Düzce&apos;nin en güzel kahvaltı mekanlarını, yöresel lezzetlerini ve kahvaltı kültürünü keşfedebileceğiniz rehber.{" "}
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-white font-semibold hover:text-amber-100">
                {siteConfig.businessName}
              </a>
              &apos;nın bir projesidir.
            </p>
            <div className="mt-3 sm:mt-4">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-1.5 text-white hover:text-amber-100 font-semibold py-1 text-sm">
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Hızlı Linkler</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm">
              <li><Link href="/" className="inline-block py-1 text-amber-200 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/blog" className="inline-block py-1 text-amber-200 hover:text-white transition-colors">Blog</Link></li>
              <li><a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="inline-block py-1 text-amber-200 hover:text-white transition-colors">Menümüz</a></li>
              <li><a href={siteConfig.links.store} target="_blank" rel="dofollow" className="inline-block py-1 text-amber-200 hover:text-white transition-colors">Yöresel Mağaza</a></li>
              <li><a href={siteConfig.links.about} target="_blank" rel="dofollow" className="inline-block py-1 text-amber-200 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href={siteConfig.links.press} target="_blank" rel="dofollow" className="inline-block py-1 text-amber-200 hover:text-white transition-colors">Basında Biz</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">İletişim</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm text-amber-200">
              <li className="leading-relaxed">📍 {siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="inline-block py-1 hover:text-white transition-colors">
                  📞 {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.directions} target="_blank" rel="dofollow" className="inline-block py-1 hover:text-white transition-colors">
                  🗺️ Nasıl Gidilir?
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors py-1 text-sm" aria-label="Facebook">Facebook</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors py-1 text-sm" aria-label="Instagram">Instagram</a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors py-1 text-sm" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-amber-300">
          <p>
            © {new Date().getFullYear()} Düzce Kahvaltı Yerleri. Tüm hakları saklıdır. Bir{" "}
            <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-white font-semibold hover:text-amber-100">
              ibrahiminyeri.com
            </a>{" "}
            projesidir.
          </p>
          <p className="mt-2">
            <Link href="/unsubscribe" className="text-amber-500 hover:text-amber-300 transition-colors">
              E-posta aboneliğinden çık
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
