"use client";

import { motion } from "framer-motion";
import { Sun, Snowflake, Leaf, Flower2 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const seasons = [
  {
    icon: Flower2,
    name: "İlkbahar",
    months: "Mart - Mayıs",
    temperature: "8 - 18 C",
    description:
      "Doğanın uyanış mevsimi. Çiçek açmış yaylalar, şelaleler ve yeşillenen ormanlar. Kamp ve yürüyüş sezonu başlar.",
    highlights: [
      "Çiçek açan yaylalar",
      "Şelale sezonu",
      "Kuş gözlemciliği",
      "Kamp başlangıcı",
    ],
    image:
      "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?w=800&q=80",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    icon: Sun,
    name: "Yaz",
    months: "Haziran - Ağustos",
    temperature: "18 - 28 C",
    description:
      "Serin yayla havası ve doğal göllerde yüzme keyfi. Trekking, dağ bisikleti ve fotosafari için mükemmel hava koşulları.",
    highlights: [
      "Serin yayla havası",
      "Göl manzaraları",
      "Trekking",
      "Gece kampı",
    ],
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: Leaf,
    name: "Sonbahar",
    months: "Eylül - Kasım",
    temperature: "5 - 16 C",
    description:
      "Yedigöller'de renk coşkunu. Kırmızı, sarı, turuncu yapraklar arasında unutulmaz yürüyüşler. Fotoğrafçılar için altın mevsim.",
    highlights: [
      "Renk coşkunu",
      "Fotoğraf turları",
      "Mantar toplama",
      "Termal kaynak",
    ],
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    icon: Snowflake,
    name: "Kış",
    months: "Aralık - Şubat",
    temperature: "-5 - 5 C",
    description:
      "Karla kaplanan Kartalkaya pistleri açılır. Kayak, snowboard ve karla oynama keyfi. Sıcak bir şöminede Bolu kebabı.",
    highlights: [
      "Kartalkaya kayak",
      "Kar yürüyüşü",
      "Termal oteller",
      "Bolu mutfağı",
    ],
    image:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
];

export default function Seasons() {
  return (
    <section id="mevsimler" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Dört Mevsim Bolu Dagi"
          subtitle="Her mevsimin ayri bir hikayesi, ayri bir guzellig var"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {seasons.map((season, i) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden border ${season.borderColor} bg-gradient-to-br ${season.color} group h-full`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${season.image}')` }}
                    role="img"
                    aria-label={`${season.name} mevsiminde Bolu Dagi`}
                  />
                </div>
                {/* Content */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <season.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {season.name}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {season.months} / {season.temperature}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-2">
                    {season.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {season.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-base font-medium bg-card text-foreground px-3 py-1.5 rounded-full border border-border"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
