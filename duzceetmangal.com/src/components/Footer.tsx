import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-3 sm:mb-4">
              🔥 Düzce Et Mangal
            </h3>
            <p className="text-sm leading-relaxed">
              Düzce&apos;nin mangal kültürünü ve et tariflerini keşfedin.
              Meşe kömürü ateşinde pişen geleneksel lezzetlerin adresi.
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-amber-400 hover:text-amber-300 ml-1">
                {siteConfig.businessName}
              </a>
              &apos;ın bir projesidir.
            </p>
            <div className="mt-3 sm:mt-4">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold py-1">
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Hızlı Linkler</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm">
              <li><Link href="/" className="inline-block py-1 hover:text-amber-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/blog" className="inline-block py-1 hover:text-amber-400 transition-colors">Blog</Link></li>
              <li><a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="inline-block py-1 hover:text-amber-400 transition-colors">Menümüz</a></li>
              <li><a href={siteConfig.links.store} target="_blank" rel="dofollow" className="inline-block py-1 hover:text-amber-400 transition-colors">Yöresel Mağaza</a></li>
              <li><a href={siteConfig.links.about} target="_blank" rel="dofollow" className="inline-block py-1 hover:text-amber-400 transition-colors">Hakkımızda</a></li>
              <li><a href={siteConfig.links.press} target="_blank" rel="dofollow" className="inline-block py-1 hover:text-amber-400 transition-colors">Basında Biz</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">İletişim</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm">
              <li className="leading-relaxed">📍 {siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="inline-block py-1 hover:text-amber-400 transition-colors">
                  📞 {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.directions} target="_blank" rel="dofollow" className="inline-block py-1 hover:text-amber-400 transition-colors">
                  🗺️ Nasıl Gidilir?
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors py-1" aria-label="Facebook">Facebook</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors py-1" aria-label="Instagram">Instagram</a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors py-1" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Düzce Et Mangal. Tüm hakları saklıdır. Bir{" "}
            <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-amber-400 hover:text-amber-300 font-semibold">
              ibrahiminyeri.com
            </a>{" "}
            projesidir.
          </p>
        </div>
      </div>
    </footer>
  );
}
