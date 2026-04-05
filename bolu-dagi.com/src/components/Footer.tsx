import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-200">
      {/* Top band */}
      <div className="bg-green-900 border-b border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Bolu Dağı — Keşfetmeye Değer
              </h3>
              <p className="text-green-300 text-sm mt-1">
                Doğa, kültür ve lezzet üçgeninde Türkiye&apos;nin eşsiz güzergahı
              </p>
            </div>
            <a
              href={siteConfig.businessUrl}
              target="_blank"
              rel="dofollow"
              className="flex items-center gap-2 bg-green-400 hover:bg-green-300 text-green-950 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              ibrahiminyeri.com →
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-green-400 font-bold mb-3 text-sm uppercase tracking-wide">Hakkımızda</h4>
            <p className="text-sm text-green-300 leading-relaxed">
              Bolu Dağı&apos;nın doğasını, kültürünü ve lezzetlerini keşfetmek için rehberiniz.{" "}
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-green-400 hover:text-green-300 font-medium">
                {siteConfig.businessName}
              </a>
              &apos;nın bir projesidir.
            </p>
          </div>

          {/* Keşfet */}
          <div>
            <h4 className="text-green-400 font-bold mb-3 text-sm uppercase tracking-wide">Keşfet</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors py-1.5 block">Ana Sayfa</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors py-1.5 block">Blog</Link></li>
              <li><Link href="/feed.xml" className="hover:text-white transition-colors py-1.5 block">RSS Feed</Link></li>
            </ul>
          </div>

          {/* İbrahim'in Yeri */}
          <div>
            <h4 className="text-green-400 font-bold mb-3 text-sm uppercase tracking-wide">İbrahim&apos;in Yeri</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="hover:text-white transition-colors py-1.5 block">Menümüz</a></li>
              <li><a href={siteConfig.links.store} target="_blank" rel="dofollow" className="hover:text-white transition-colors py-1.5 block">Yöresel Mağaza</a></li>
              <li><a href={siteConfig.links.about} target="_blank" rel="dofollow" className="hover:text-white transition-colors py-1.5 block">Hikayemiz</a></li>
              <li><a href={siteConfig.links.press} target="_blank" rel="dofollow" className="hover:text-white transition-colors py-1.5 block">Basında Biz</a></li>
              <li><a href={siteConfig.links.directions} target="_blank" rel="dofollow" className="hover:text-white transition-colors py-1.5 block">Nasıl Gidilir?</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-green-400 font-bold mb-3 text-sm uppercase tracking-wide">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5">📍</span>
                <span className="text-green-300 leading-relaxed">{siteConfig.address}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors py-1.5">
                  📞 {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-green-300 transition-colors px-2 py-2 -ml-2 block sm:inline">Instagram</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-green-300 transition-colors px-2 py-2 block sm:inline">Facebook</a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-green-300 transition-colors px-2 py-2 block sm:inline">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-500">
          <p>© {new Date().getFullYear()} bolu-dagi.com — Tüm hakları saklıdır.</p>
          <p>
            Bir{" "}
            <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-green-400 hover:text-green-300 font-medium">
              ibrahiminyeri.com
            </a>{" "}
            projesidir.
          </p>
        </div>
      </div>
    </footer>
  );
}
