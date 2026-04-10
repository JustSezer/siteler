"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const foods = [
  {
    name: "Bolu Kebabı",
    description:
      "Kuzu etinin odun ateşinde uzun süre pişirilerek hazırlandığı, Bolu'nun en ünlü lezzeti. Yanında tereyağlı pilav ve yoğurtla servis edilir. Geleneksel tarifle hazırlanan bu kebap, bölgeye gelenlerin mutlaka denemesi gereken bir tattır.",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  },
  {
    name: "Mengen Mutfağı",
    description:
      "Türkiye'nin aşçılar diyarı Mengen'den gelen geleneksel tarifler. Her yıl düzenlenen Uluslararası Aşçılık Festivali ile dünya çapında tanınır. Mengen çorbası ve sac kavurma en bilinen lezzetlerdir.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    name: "Abant Alabalığı",
    description:
      "Abant Gölü'nde yetişen taze alabalığın ızgara veya buğulamayla hazırlanan nefis sunumu. Yanında taze dağ otları salatası ile servis edilir. Göl kenarında manzaraya karşı tadına varılmalıdır.",
    image:
      "https://images.unsplash.com/photo-1534766555764-ce878a4e947d?w=600&q=80",
  },
  {
    name: "Dağ Mantısı",
    description:
      "Yöreye özgü, ince açılmış hamur içinde baharatlı kıymayla hazırlanan el yapımı mantı. Sarımsak yoğurt ve kırmızı biber tereyağı sosuyla servis edilir. Kış aylarının vazgeçilmez lezzetlerinden biridir.",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
  },
  {
    name: "Orman Kebabı",
    description:
      "Kuzu eti, mantar, biber ve domateslerin birlikte kağıtta fırında pişirilmesiyle hazırlanır. Kağıt açıldığında yükselen buhar ve koku başlı başına bir deneyimdir. Sonbahar mantarlarıyla yapılanı tercih edin.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    name: "Bolu Peyniri ve Kaymağı",
    description:
      "Dağ koşullarında geleneksel yöntemlerle üretilen doğal peynir çeşitleri ve koyu kıvamlı kaymak. Kahvaltı sofralarının vazgeçilmez lezzetleridir. Yerel pazarlardan taze olarak almayı unutmayın.",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
  },
];

export default function Food() {
  return (
    <section id="yeme-icme" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Yöresel Lezzetleri"
          subtitle="Ascilar diyari Bolu'nun essiz mutfagini kesfedin"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="/blog/bolu-yoresel-lezzetler"
                className="block bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${food.image}')` }}
                    role="img"
                    aria-label={food.name}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-secondary/90 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                      <UtensilsCrossed className="w-3 h-3" />
                      Yöresel
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {food.name}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3 line-clamp-3">
                    {food.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    Detayli Bilgi
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
