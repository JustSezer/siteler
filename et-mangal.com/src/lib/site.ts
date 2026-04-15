export const site = {
  name: "Et & Mangal",
  fullName: "Et & Mangal — Usta Rehberi",
  tagline: "Ateş, kor ve etin sanatı",
  url: "https://et-mangal.com",
  description:
    "Türkiye'nin bağımsız et ve mangal rehberi. Kömür seçiminden et dinlendirmeye, marinasyondan ızgara sıcaklığına kadar usta tavsiyeleri.",
  locale: "tr_TR",
  twitter: "@etmangal",
  founded: "2026",
} as const;

export const nav = [
  { href: "/", label: "Ana Ocak" },
  { href: "/mangal-rehberi", label: "Mangal Rehberi" },
  { href: "/et-cesitleri", label: "Et Çeşitleri" },
  { href: "/tarifler", label: "Tarifler" },
  { href: "/blog", label: "Günlük" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
] as const;
