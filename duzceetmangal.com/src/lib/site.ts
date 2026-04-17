export const site = {
  name: "Düzce Et Mangal",
  fullName: "Düzce Et Mangal — Duman Defteri",
  tagline: "Meşe közünde, yolun kenarında",
  url: "https://duzceetmangal.com",
  description:
    "Düzce'nin bağımsız et ve mangal rehberi. Bakacak'tan Kaynaşlı'ya, meşe közünde pişen etin peşinde — en iyi mangal noktaları, et seçimi ve usta tavsiyeleri.",
  locale: "tr_TR",
  founded: "2026",
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/bakacak-rehberi", label: "Bakacak Rehberi" },
  { href: "/et-rehberi", label: "Et Rehberi" },
  { href: "/blog", label: "Defter" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
] as const;
