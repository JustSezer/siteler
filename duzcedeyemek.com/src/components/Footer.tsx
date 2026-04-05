import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#9a9a9a] py-12 sm:py-16 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <span className="text-[#c2571a]">Düzce&apos;de</span>
              <span className="text-white"> Yemek</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#7a7a7a]">
              Düzce&apos;nin lezzetli mutfağını, geleneksel tariflerini ve en iyi
              mekanlarını keşfedebileceğiniz rehberiniz.
            </p>
          </div>

          {/* Sayfalar */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Sayfalar
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/blog", label: "Blog" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/iletisim", label: "İletişim" },
                { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c2571a] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              İletişim
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@duzcedeyemek.com"
                  className="hover:text-[#c2571a] transition-colors duration-150"
                >
                  info@duzcedeyemek.com
                </a>
              </li>
              <li>
                <a
                  href="https://ibrahiminyeri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c2571a] transition-colors duration-150"
                >
                  ibrahiminyeri.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#2d2d2d] text-center text-xs text-[#555555]">
          <p>
            &copy; {new Date().getFullYear()} Düzce&apos;de Yemek. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
