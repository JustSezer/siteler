"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const hotels = [
  {
    name: "Kartalkaya Dağ Otelleri",
    type: "Kayak Oteli",
    description:
      "Pist kenarı konumda, kayak-in / kayak-out imkanı sunan lüks dağ otelleri. Isıtılmış havuz, spa ve restoranlar mevcut.",
    features: ["Pist Kenarı", "Spa", "Restoran", "Kayak Kiralama"],
    priceRange: "Yüksek",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  },
  {
    name: "Abant Gölü Konaklama",
    type: "Göl Kenarı Otel",
    description:
      "Göl manzaralı odalar, huzurlu atmosfer ve doğayla iç içe konaklama deneyimi. Kahvaltı dahil seçenekler sunulmaktadır.",
    features: ["Göl Manzarası", "Kahvaltı Dahil", "Bahçe", "Otopark"],
    priceRange: "Orta - Yüksek",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
  {
    name: "Bolu Şehir Merkezi",
    type: "Şehir Oteli",
    description:
      "Merkezi konumda, ulaşım kolaylığı ve şehir yaşamıyla iç içe. Bütçe dostu seçeneklerden lüks otellere kadar çeşitlilik.",
    features: ["Merkezi Konum", "Wi-Fi", "Otopark", "Resepsiyon 24s"],
    priceRange: "Düşük - Orta",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  },
  {
    name: "Dağ Evleri ve Bungalovlar",
    type: "Butik Konaklama",
    description:
      "Orman içinde özel dağ evleri ve bungalovlar. Sobalı odalar, doğal malzemeler ve tam bir doğa deneyimi sizi bekliyor.",
    features: ["Soba", "Bahçe", "Mangal", "Doğa İçi"],
    priceRange: "Orta",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80",
  },
];

export default function Accommodation() {
  return (
    <section id="konaklama" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Konaklama Seçenekleri"
          subtitle="Her bütçeye ve tercihe uygun konaklama seçenekleri"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                href="/blog/bolu-konaklama-rehberi"
                className="block bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-500 group h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${hotel.image}')` }}
                    role="img"
                    aria-label={hotel.name}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-sm font-semibold text-white bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      {hotel.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-sm text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      {hotel.priceRange}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {hotel.name}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-2">
                    {hotel.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <ul className="flex flex-wrap gap-2">
                      {hotel.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <ArrowRight className="w-5 h-5 text-primary shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
