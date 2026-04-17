export const site = {
  name: "Düzce'de Yemek",
  fullName: "Düzce'de Yemek — Her Tabakta Bir Hikaye",
  tagline: "Her Tabakta Bir Hikaye",
  url: "https://duzcedeyemek.com",
  description:
    "Düzce'nin yöresel lezzetleri, geleneksel tarifleri ve en iyi restoranları. Mamursa'dan isli balığa, Akçakoca sahilinden Kardüz yaylasına Düzce lezzet rehberi.",
  locale: "tr_TR",
  founded: "2026",
  email: "info@duzcedeyemek.com",
  location: "Düzce, Türkiye",
} as const;

export const nav = [
  { href: "/duzce-yoresel-yemekleri", label: "Yöresel Lezzetler" },
  { href: "/duzce-restoranlari", label: "Mekanlar" },
  { href: "/tarifler", label: "Tarifler" },
  { href: "#rotalar", label: "Gezi" },
  { href: "/blog", label: "Blog" },
] as const;

export const footerLinks = {
  kesfet: [
    { href: "/duzce-yoresel-yemekleri", label: "Yöresel Lezzetler" },
    { href: "/duzce-restoranlari", label: "Restoran Rehberi" },
    { href: "/tarifler", label: "Tarifler" },
    { href: "/blog", label: "Blog" },
    { href: "#rotalar", label: "Gezi Rotaları" },
  ],
  yasal: [
    { href: "/gizlilik", label: "Gizlilik Politikası" },
    { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
    { href: "/cerez-politikasi", label: "Çerez Politikası" },
    { href: "/erisilebilirlik", label: "Erişilebilirlik" },
  ],
} as const;
