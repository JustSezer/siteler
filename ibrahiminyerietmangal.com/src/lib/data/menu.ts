export interface MenuItem {
  slug: string;
  name: string;
  category: "İmza" | "Izgara" | "Kahvaltı" | "Çorba & Tatlı" | "İçecek";
  description: string;
  image?: string;
  signature?: boolean;
}

export const menu: MenuItem[] = [
  {
    slug: "bakacak-kofte",
    name: "Bakacak Köftesi",
    category: "İmza",
    description:
      "İbrahim'in Yeri'nin imza lezzeti. Dana ve kuzu karışımı, ustaların nesiller boyu aktardığı baharatla harmanlanır; köz ateşinde dışı kıtır, içi sulu pişer.",
    image: "/images/bakacak-kofte.jpg",
    signature: true,
  },
  {
    slug: "bakacak-pirzola",
    name: "Bakacak Pirzolası",
    category: "İmza",
    description:
      "Bolu Dağı kuzusundan, sırttan ayrılmış özel pirzola. Tuz ve kekikle ovulur, közün en yüksek sıcaklığında kısa sürede karamelize olur.",
    image: "/images/bakacak-pirzola.jpg",
    signature: true,
  },
  {
    slug: "serpme-kahvalti",
    name: "Serpme Kahvaltı",
    category: "İmza",
    description:
      "40'ı aşkın yöresel lezzetten oluşan, 7/24 sunulan serpme kahvaltı. Köy tereyağı, kaymak, kendi ürettiğimiz reçeller, közde sucuk ve sıcak börekler sofrayı doldurur.",
    image: "/images/serpme-kahvalti.jpg",
    signature: true,
  },
  {
    slug: "kuzu-mangal",
    name: "Kuzu Mangal",
    category: "Izgara",
    description:
      "Bolu yaylalarının kuzusundan, yağ şeridi cömert kesim. Köz başında dolaylı ateşte pişirilir, dinlendirme zamanı tavizsiz uygulanır.",
  },
  {
    slug: "dana-bonfile",
    name: "Dana Bonfile",
    category: "Izgara",
    description:
      "Yerli dananın en yumuşak kesimi. Köz üzerinde kısa süreli, yüksek ateşte pişer; medium-rare sunulur.",
  },
  {
    slug: "adana-kebap",
    name: "Adana Kebap",
    category: "Izgara",
    description:
      "Acılı kıyma kebabı, el çekmesi. Közün üzerinde kendi yağıyla pişer, lavaş ve közde biberle servis edilir.",
  },
  {
    slug: "kuzu-sis",
    name: "Kuzu Şiş",
    category: "Izgara",
    description:
      "Kuzu butundan küp kesim, kısa soğan-zeytinyağı marinasyonu. Şiş arası kuyrukyağı ile zenginleştirilir.",
  },
  {
    slug: "tavuk-sis",
    name: "Tavuk Şiş",
    category: "Izgara",
    description:
      "Butundan kesim, yoğurt-baharat marinasyonu. Göğüsten farklı olarak kurumayan, sulu bir alternatif.",
  },
  {
    slug: "koy-kahvaltisi",
    name: "Köy Kahvaltısı",
    category: "Kahvaltı",
    description:
      "Tek kişilik daha hafif seçenek. Peynir çeşitleri, zeytin, tereyağlı yumurta, bal-kaymak ve taze köy ekmeği.",
  },
  {
    slug: "mihlama",
    name: "Mıhlama",
    category: "Kahvaltı",
    description:
      "Karadeniz'in sıcak başlangıcı. Tereyağı, mısır unu ve tel peyniriyle bakır tavada közde pişer.",
  },
  {
    slug: "kuymak",
    name: "Kuymak",
    category: "Kahvaltı",
    description:
      "Yayla tereyağı ve peyniriyle hazırlanan geleneksel sıcak kahvaltı. Taze ekmekle tüketilir.",
  },
  {
    slug: "tarhana-corbasi",
    name: "Tarhana Çorbası",
    category: "Çorba & Tatlı",
    description:
      "Ev yapımı ekşimaya tarhana. Özellikle kış aylarında Bolu Dağı yolcusunun değişmezi.",
  },
  {
    slug: "mercimek",
    name: "Mercimek Çorbası",
    category: "Çorba & Tatlı",
    description:
      "Kırmızı mercimek, sade tereyağı ve limonla. Sıcak ekmek eşliğinde 7/24 hazır.",
  },
  {
    slug: "sutlac",
    name: "Fırın Sütlaç",
    category: "Çorba & Tatlı",
    description:
      "Kemik porselende pişirilmiş, üstü hafif karamelize geleneksel sütlaç.",
  },
  {
    slug: "kunefe",
    name: "Künefe",
    category: "Çorba & Tatlı",
    description:
      "Taze antep peyniri, şerbetli tel kadayıf — sipariş üzerine hazırlanır.",
  },
  {
    slug: "ayran",
    name: "Ev Ayranı",
    category: "İçecek",
    description: "Kendi yoğurdumuzdan çırpma ayran. Etin yanına klasik eş.",
  },
  {
    slug: "salgam",
    name: "Şalgam Suyu",
    category: "İçecek",
    description: "Acılı ve acısız seçenek. Kebap ve pirzolanın doğal yoldaşı.",
  },
  {
    slug: "turk-kahvesi",
    name: "Türk Kahvesi",
    category: "İçecek",
    description: "Köz külünde pişirilmiş, lokumuyla servis edilen geleneksel Türk kahvesi.",
  },
];

export const menuCategories: Array<MenuItem["category"]> = [
  "İmza",
  "Izgara",
  "Kahvaltı",
  "Çorba & Tatlı",
  "İçecek",
];
