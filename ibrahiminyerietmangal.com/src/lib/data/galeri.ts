export interface GaleriFoto {
  src: string;
  alt: string;
  kind: "yemek" | "mekan" | "detay";
}

const menuFotos: GaleriFoto[] = Array.from({ length: 40 }, (_, i) => ({
  src: `/images/menu-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `İbrahim'in Yeri menüsünden lezzetler — ${i + 1}`,
  kind: "yemek",
}));

export const galeri: GaleriFoto[] = [
  {
    src: "/images/bakacak-kofte.jpg",
    alt: "Bakacak Köftesi — İbrahim'in Yeri'nin imza lezzeti",
    kind: "yemek",
  },
  {
    src: "/images/bakacak-pirzola.jpg",
    alt: "Bakacak Pirzolası — Bolu Dağı kuzusundan köz pirzola",
    kind: "yemek",
  },
  {
    src: "/images/serpme-kahvalti.jpg",
    alt: "Serpme kahvaltı sofrası — 40'ı aşkın çeşit",
    kind: "yemek",
  },
  {
    src: "/images/mekan-disari.jpg",
    alt: "İbrahim'in Yeri dış cephe — Bolu Dağı D100 üzerinde",
    kind: "mekan",
  },
  {
    src: "/images/restoran-gece.jpeg",
    alt: "Gece vakti İbrahim'in Yeri",
    kind: "mekan",
  },
  {
    src: "/images/mekan-hero.jpg",
    alt: "Bolu Dağı'nda mangal ve kahvaltı keyfi",
    kind: "mekan",
  },
  {
    src: "/images/galeri-1.jpg",
    alt: "İbrahim'in Yeri mutfağından bir kare",
    kind: "detay",
  },
  {
    src: "/images/galeri-2.jpg",
    alt: "Köz ateşi ve hazırlık",
    kind: "detay",
  },
  {
    src: "/images/galeri-3.jpg",
    alt: "Lokantadan bir an",
    kind: "mekan",
  },
  {
    src: "/images/galeri-4.jpg",
    alt: "Mangal başında geleneksel pişirme",
    kind: "detay",
  },
  {
    src: "/images/galeri-5.jpg",
    alt: "Yöresel ürünler",
    kind: "detay",
  },
  {
    src: "/images/galeri-6.jpg",
    alt: "İbrahim'in Yeri'nden kare",
    kind: "detay",
  },
  ...menuFotos,
];
