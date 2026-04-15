export interface BasinItem {
  outlet: string;
  title: string;
  year: string;
  note: string;
  url: string;
  kind: "haber" | "video";
}

// Tüm bağlantılar marka sitesinin "Basında Biz" sayfasına yönlendirilir —
// oradan ilgili yayın detaylarına erişilebilir.
const PRESS_HUB = "https://ibrahiminyeri.com/basinda";

export const basinda: BasinItem[] = [
  {
    outlet: "NTV",
    title: "Bolu Dağı'nın 7/24 açık durağı",
    year: "2023",
    note: "Sabahın ilk ışıklarında serpme kahvaltıya uğrayan yolcuların konuşulduğu röportaj.",
    url: PRESS_HUB,
    kind: "video",
  },
  {
    outlet: "TRT Haber",
    title: "Gelenekten geleceğe: Bakacak Köftesi",
    year: "2022",
    note: "İmza köftenin hikayesini ustasından dinlediğimiz belgesel kısa filmi.",
    url: PRESS_HUB,
    kind: "video",
  },
  {
    outlet: "Hürriyet Gezi",
    title: "İstanbul–Ankara yolunun en iyi mola noktaları",
    year: "2022",
    note: "Editörlerin D100 üzerinde İbrahim'in Yeri'ni listenin başına yazdığı rehber yazı.",
    url: PRESS_HUB,
    kind: "haber",
  },
  {
    outlet: "Milliyet",
    title: "Düzce mutfağında bir yaşayan gelenek",
    year: "2021",
    note: "Yöresel ürünler ve köz ateşini harmanlayan mekanların incelendiği dosya.",
    url: PRESS_HUB,
    kind: "haber",
  },
  {
    outlet: "CNN Türk",
    title: "Sabahın dördünde bir mangal: 7/24 Bolu Dağı",
    year: "2021",
    note: "Gece yolcularının mola verdiği lokantaların anlatıldığı sabah programı.",
    url: PRESS_HUB,
    kind: "video",
  },
  {
    outlet: "Yedigün",
    title: "Türkiye'nin en iyi serpme kahvaltıları",
    year: "2020",
    note: "Ülke genelinde seçilen on kahvaltı mekanı arasında yer aldığımız dergi yazısı.",
    url: PRESS_HUB,
    kind: "haber",
  },
];
