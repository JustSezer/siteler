import type { LucideIcon } from "lucide-react";
import { Flame, Drumstick, Thermometer, Clock, Droplet, Leaf } from "lucide-react";

export interface Kategori {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const kategoriler: Kategori[] = [
  {
    slug: "ates",
    title: "Ateş & Kömür",
    kicker: "01",
    description:
      "Meşe, gürgen, kayın; köz ile alev arasındaki fark. Hangi odun hangi et için yakılır, kömür nasıl seçilir.",
    icon: Flame,
    href: "/mangal-rehberi#ates",
  },
  {
    slug: "et",
    title: "Et Seçimi",
    kicker: "02",
    description:
      "Dana, kuzu, tavuk, av eti. Kesim bölgeleri, yağlılık, dinlendirme süresi ve ustanın tezgahta aradığı işaretler.",
    icon: Drumstick,
    href: "/et-cesitleri",
  },
  {
    slug: "sicaklik",
    title: "Sıcaklık & Süre",
    kicker: "03",
    description:
      "Direkt mi, dolaylı mı? Her et için çekirdek sıcaklık tablosu, kalınlığa göre çevirme aralıkları.",
    icon: Thermometer,
    href: "/mangal-rehberi#sicaklik",
  },
  {
    slug: "dinlendirme",
    title: "Dinlendirme",
    kicker: "04",
    description:
      "Eti ocaktan indirmek başlangıçtır. Kaç dakika, ne örtüyle, hangi sıcaklıkta — ve neden atlanmaması gerekir.",
    icon: Clock,
    href: "/mangal-rehberi#dinlendirme",
  },
  {
    slug: "marinasyon",
    title: "Marinasyon",
    kicker: "05",
    description:
      "Zeytinyağı, süt, yoğurt, tuzlu su. Hangi marinad hangi ete, ne kadar süreyle. Asit dengesi ve yumuşama.",
    icon: Droplet,
    href: "/tarifler#marinasyon",
  },
  {
    slug: "sos",
    title: "Sos & Garnitür",
    kicker: "06",
    description:
      "Chimichurri, köz patlıcan, sarımsaklı yoğurt, közde biber sosu — etin yanında duran sessiz yıldızlar.",
    icon: Leaf,
    href: "/tarifler#soslar",
  },
];
