import { wix } from "./site";

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  weight?: string;
  brand?: string;
  inStock: boolean;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "kedi-mamasi",
    title: "Kedi Maması",
    description: "Yetişkin ve yavru kedi mamaları, tüm ırklar için kaliteli besin",
    image: wix("1626b5_f421652ff7814fe99b2003e450f6a575~mv2.jpg"),
  },
  {
    slug: "kopek-mamasi",
    title: "Köpek Maması",
    description: "Enjoy, Perfect, King, Fitto - geniş marka yelpazesi",
    image: wix("1626b5_9df0abe71b424ad7a6a14df3f45a2c23~mv2.jpg"),
  },
  {
    slug: "kedi-kumu",
    title: "Kedi Kumu",
    description: "Topaklanan ve topaklanmayan kedi kumu çeşitleri",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
  },
  {
    slug: "pelet-cesitleri",
    title: "Pelet Çeşitleri",
    description: "Şen, Sinop Enersan, Erzincan Çamsa - ısıtma için premium pelet",
    image: wix("1626b5_045b0744524a403ca64638f7e22e00a8~mv2.jpg"),
  },
  {
    slug: "gubre-cesitleri",
    title: "Gübre Çeşitleri",
    description: "Organik pelet tavuk, koyun, güvercin gübreleri",
    image: wix("1626b5_482301e85e1547a386ab29ac73ee5d0c~mv2.jpg"),
  },
  {
    slug: "yakacak-komur",
    title: "Yakacak & Kömür",
    description: "Akabe, yerli meşe, portakal biriket mangal kömürleri",
    image: wix("1626b5_105bb9c65ecb43579cb56a7101467c4e~mv2.jpg"),
  },
];

export const products: Product[] = [
  {
    slug: "trendline-somonlu-kedi-mamasi-15-kg",
    name: "Trendline Somonlu Kedi Maması 15 kg",
    category: "kedi-mamasi",
    image: wix("1626b5_f421652ff7814fe99b2003e450f6a575~mv2.jpg"),
    weight: "15 kg",
    brand: "Trendline",
    inStock: true,
    description: "Somon balığı ağırlıklı formülasyonu ile yetişkin kedilerin günlük protein ve omega ihtiyacını karşılar.",
  },
  {
    slug: "trendline-kuzulu-pirincli-kedi-mamasi-15-kg",
    name: "Trendline Kuzulu ve Pirinçli Yetişkin Kedi Maması 15 kg",
    category: "kedi-mamasi",
    image: wix("1626b5_257a1b7a54354d508285b7d8a8a3ed59~mv2.jpg"),
    weight: "15 kg",
    brand: "Trendline",
    inStock: true,
    description: "Kuzu eti ve pirinç bazlı dengeli formül, hassas sindirim sistemi için ideal.",
  },
  {
    slug: "trendline-kisirlastirilmis-tavuklu-kedi-mamasi-15-kg",
    name: "Trendline Kısırlaştırılmış Tavuklu Yetişkin Kedi Maması 15 kg",
    category: "kedi-mamasi",
    image: wix("1626b5_3e4d6cd022f949f09c10c8b64959e4e4~mv2.jpg"),
    weight: "15 kg",
    brand: "Trendline",
    inStock: true,
    description: "Kısırlaştırılmış kediler için düşük kalorili, tavuk ağırlıklı özel formül.",
  },
  {
    slug: "enjoy-renkli-kedi-mamasi-15-kg",
    name: "Enjoy Renkli Kedi Maması 15 kg",
    category: "kedi-mamasi",
    image: wix("1626b5_4d625719e1674793bfd7ceb6826699bd~mv2.jpg"),
    weight: "15 kg",
    brand: "Enjoy",
    inStock: true,
    description: "Renkli kroket yapısıyla iştahı açar, yetişkin kediler için tam yem.",
  },
  {
    slug: "enjoy-sade-kedi-mamasi-15-kg",
    name: "Enjoy Sade Kedi Maması 15 kg",
    category: "kedi-mamasi",
    image: wix("1626b5_8c439055da4543228427efb62358b77a~mv2.jpg"),
    weight: "15 kg",
    brand: "Enjoy",
    inStock: true,
    description: "Sade kroket formlu yetişkin kedi maması, günlük beslenme için uygun fiyatlı seçenek.",
  },
  {
    slug: "giffy-kedi-mamasi-gurme-15-kg",
    name: "Giffy Kedi Maması Gurme 15 Kg",
    category: "kedi-mamasi",
    image: wix("1626b5_d6ec8d1b7bfc447a8741bf3ca7080f09~mv2.jpg"),
    weight: "15 kg",
    brand: "Giffy",
    inStock: true,
    description: "Gurme karışımı, et ve balık aromalı kroketleriyle seçici kedilere hitap eder.",
  },
  {
    slug: "heydoo-kedi-mamasi-12-kg",
    name: "Heydoo Kedi Maması 12 Kg",
    category: "kedi-mamasi",
    image: wix("1626b5_49cdad6f514843ed83f106a0c6a5392d~mv2.jpg"),
    weight: "12 kg",
    brand: "Heydoo",
    inStock: true,
    description: "Dengeli beslenme formülü, tüm yetişkin kediler için tam ve dengeli yem.",
  },

  {
    slug: "enjoy-kuzu-etli-pirincli-kopek-mamasi-15-kg",
    name: "Enjoy Kuzu Etli ve Pirinçli Yetişkin Köpek Maması 15 kg",
    category: "kopek-mamasi",
    image: wix("1626b5_0f3423fe9e264851b83625a55dd8b472~mv2.jpg"),
    price: "₺900,00",
    weight: "15 kg",
    brand: "Enjoy",
    inStock: false,
    description: "Kuzu eti ve pirinç ağırlıklı formülasyon, optimal protein/amino asit dengesiyle kas gelişimi, tüy kalitesi ve eklem sağlığını destekler. Glukozamin, kondroitin, omega 3&6 içerir.",
  },
  {
    slug: "king-biftekli-kopek-mamasi-10-kg",
    name: "King Biftekli Yetişkin Köpek Maması 10 Kg",
    category: "kopek-mamasi",
    image: wix("1626b5_5328d2b67c964814bc286b44a3521675~mv2.jpg"),
    weight: "10 kg",
    brand: "King",
    inStock: true,
    description: "Biftek ağırlıklı protein kaynağı, orta ve büyük ırk yetişkin köpekler için tam yem.",
  },
  {
    slug: "perfect-yavru-kopek-mamasi-15-kg",
    name: "Perfect Yavru Köpek Maması 15 kg",
    category: "kopek-mamasi",
    image: wix("1626b5_6afadbb338ae4a8580d1b0825d4c29df~mv2.jpg"),
    weight: "15 kg",
    brand: "Perfect",
    inStock: true,
    description: "Yavru köpekler için yüksek kalsiyum ve protein içeriği, sağlıklı büyüme desteği.",
  },
  {
    slug: "perfect-yetiskin-kopek-mamasi-15-kg",
    name: "Perfect Yetişkin Köpek Maması 15 kg",
    category: "kopek-mamasi",
    image: wix("1626b5_b2f7cdbca92043a8a4fc5fbc56840a7c~mv2.jpg"),
    weight: "15 kg",
    brand: "Perfect",
    inStock: true,
    description: "Yetişkin köpeklerin günlük enerji ve protein ihtiyacına yönelik tam ve dengeli yem.",
  },
  {
    slug: "fitto-yetiskin-kopek-mamasi-15-kg",
    name: "Fitto Yetişkin Köpek Maması 15 kg",
    category: "kopek-mamasi",
    image: wix("1626b5_d10eedbe0fc8453a877fabe82a9115ad~mv2.jpg"),
    weight: "15 kg",
    brand: "Fitto",
    inStock: true,
    description: "Uygun fiyatlı yetişkin köpek maması, her gün kullanım için dengeli besin profili.",
  },
  {
    slug: "heydoo-yetiskin-kopek-mamasi-15-kg",
    name: "Heydoo Yetişkin Köpek Maması 15 kg",
    category: "kopek-mamasi",
    image: wix("1626b5_363e4123a7284f3dbf49e7ccb9fb85e6~mv2.jpg"),
    weight: "15 kg",
    brand: "Heydoo",
    inStock: true,
    description: "Yetişkin köpekler için dengeli formülasyon, kaliteli protein kaynakları.",
  },
  {
    slug: "pati-life-kuzu-etli-konserve-24-adet",
    name: "Pati Life Kuzu Etli Yetişkin Köpek Konservesi 24 Adet",
    category: "kopek-mamasi",
    image: wix("1626b5_9df0abe71b424ad7a6a14df3f45a2c23~mv2.jpg"),
    price: "₺600,00",
    weight: "24 adet",
    brand: "Pati Life",
    inStock: true,
    description: "Kuzu eti bazlı yaş mama, 24'lü koli. Yetişkin köpekler için yumuşak ve lezzetli.",
  },

  {
    slug: "perfect-baby-powder-10-lt",
    name: "Perfect Baby Powder Kedi Kumu 10 LT",
    category: "kedi-kumu",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=800&q=80",
    price: "₺80,00",
    weight: "10 LT",
    brand: "Perfect",
    inStock: true,
    description: "Bebek pudrası kokulu, topaklanan doğal bentonit kedi kumu. 10 litrelik ekonomik boy.",
  },

  {
    slug: "sen-pelet-15-kg",
    name: "Şen Pelet 15 kg",
    category: "pelet-cesitleri",
    image: wix("1626b5_de6b19f95a0a4ff9ba13d802ca90a3f3~mv2.jpg"),
    weight: "15 kg",
    brand: "Şen",
    inStock: true,
    description: "Yüksek ısı değerli, yerli üretim 15 kg paketli pelet yakıt.",
  },
  {
    slug: "sinop-enersan-pelet-20-kg",
    name: "Sinop Enersan Pelet 6 ve 8 mm 20 kg",
    category: "pelet-cesitleri",
    image: wix("1626b5_1323f8fb91fd431bb139e6e17cdd99a3~mv2.jpg"),
    weight: "20 kg",
    brand: "Sinop Enersan",
    inStock: true,
    description: "6 ve 8 mm çapında yerli üretim pelet, 20 kg paket. Yüksek kaloriye sahip kaliteli yakıt.",
  },
  {
    slug: "erzincan-camsa-pelet-6mm-20-kg",
    name: "Erzincan Çamsa Pelet 6 mm 20 kg",
    category: "pelet-cesitleri",
    image: wix("1626b5_47eca32a3fec4d98848bf9c124a00400~mv2.jpg"),
    price: "₺300,00",
    weight: "20 kg",
    brand: "Çamsa",
    inStock: true,
    description: "Erzincan Çamsa markalı 6 mm pelet, düşük kül oranı ve yüksek ısı değeri.",
  },

  {
    slug: "organik-pelet-tavuk-gubresi-25-kg",
    name: "Organik Pelet Tavuk Gübresi 25 Kg",
    category: "gubre-cesitleri",
    image: wix("1626b5_92de14e7784e48f0afe46dc52d2ec3a5~mv2.jpg"),
    weight: "25 kg",
    inStock: true,
    description: "Pelet formunda organik tavuk gübresi, tarla ve bahçe için ideal. 25 kg paket.",
  },
  {
    slug: "koyun-gubresi-1-kg",
    name: "Koyun Gübresi 1 Kg",
    category: "gubre-cesitleri",
    image: wix("1626b5_df3e2335c5e744659058900b0cb7cd74~mv2.jpg"),
    weight: "1 kg",
    inStock: true,
    description: "Organik koyun gübresi, ev ve balkon bitkileri için küçük paket.",
  },
  {
    slug: "gumus-organik-toz-tavuk-gubresi-25-kg",
    name: "Gümüş Organik Toz Tavuk Gübresi 25 Kg",
    category: "gubre-cesitleri",
    image: wix("1626b5_a6fb33c432e0481ea354267973f43fee~mv2.jpg"),
    weight: "25 kg",
    brand: "Gümüş",
    inStock: true,
    description: "Toz formunda organik tavuk gübresi, toprağı zenginleştirir. 25 kg paket.",
  },
  {
    slug: "guvercin-gubresi-1-kg",
    name: "Güvercin Gübresi 1 Kg",
    category: "gubre-cesitleri",
    image: wix("1626b5_3b0d519264e240fe9d334f86defad2ac~mv2.jpg"),
    weight: "1 kg",
    inStock: true,
    description: "Yüksek azot içerikli güvercin gübresi, süs bitkileri için ideal küçük paket.",
  },

  {
    slug: "portakal-biriket-mangal-komuru-10-kg",
    name: "Portakal Biriket Mangal Kömürü 10 Kg",
    category: "yakacak-komur",
    image: wix("1626b5_c613d5c8d93c41be8c694ca5747e6b22~mv2.jpg"),
    price: "₺800,00",
    weight: "10 kg",
    inStock: true,
    description: "Portakal ağacından üretilmiş biriket mangal kömürü, uzun süreli yanma ve yoğun ısı.",
  },
  {
    slug: "yerli-mese-mangal-komuru-10-kg",
    name: "Yerli Meşe Mangal Kömürü 10 Kg",
    category: "yakacak-komur",
    image: wix("1626b5_5a702dc6f73b4b8791f997f9c06f5de8~mv2.jpg"),
    price: "₺500,00",
    weight: "10 kg",
    inStock: true,
    description: "Yerli meşe ağacından üretilmiş mangal kömürü, restoran ve ev kullanımı için ideal.",
  },
  {
    slug: "akabe-karpuz-komur-40-kg",
    name: "Akabe Karpuz Kömür 40 kg",
    category: "yakacak-komur",
    image: wix("1626b5_045b0744524a403ca64638f7e22e00a8~mv2.jpg"),
    weight: "40 kg",
    brand: "Akabe",
    inStock: true,
    description: "Akabe markalı karpuz kömür, 40 kg büyük paket. Uzun süreli yanma, yoğun koru.",
  },
  {
    slug: "akabe-portakal-komur-40-kg",
    name: "Akabe Portakal Kömür 40 kg",
    category: "yakacak-komur",
    image: wix("1626b5_482301e85e1547a386ab29ac73ee5d0c~mv2.jpg"),
    weight: "40 kg",
    brand: "Akabe",
    inStock: true,
    description: "Akabe markalı portakal kömür, 40 kg. Mangal ve kebapçılar için tercih edilen kömür.",
  },
  {
    slug: "akabe-findik-komur-25-kg",
    name: "Akabe Fındık Kömür 25 kg",
    category: "yakacak-komur",
    image: wix("1626b5_105bb9c65ecb43579cb56a7101467c4e~mv2.jpg"),
    weight: "25 kg",
    brand: "Akabe",
    inStock: true,
    description: "Akabe markalı fındık kömür, 25 kg. Düşük dumanlı, yüksek ısı verimi.",
  },
  {
    slug: "akabe-ceviz-komur-25-kg",
    name: "Akabe Ceviz Kömür 25 kg",
    category: "yakacak-komur",
    image: wix("1626b5_a54ae8b14f8d43ea8088f31d780726a8~mv2.jpg"),
    weight: "25 kg",
    brand: "Akabe",
    inStock: true,
    description: "Akabe markalı ceviz kömür, 25 kg. Kaliteli sert ağaç kömürü.",
  },
];

export const getByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
