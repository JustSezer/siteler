"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const places = [
  {
    title: "Abant Gölü",
    description:
      "Deniz seviyesinden 1.328 metre yükseklikte, camlarin arasinda saklanan doğal gol. Yürüyüş parkurlari, at biniciligi ve piknik alanlariyla yilin her mevsimi ziyaret edilebilir.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    tag: "Doğal Gol",
    href: "/blog/bolu-dagi-gezilecek-yerler-rehberi",
  },
  {
    title: "Yedigoller Milli Parki",
    description:
      "Yedi farkli gölün bir arada bulundugu, özellikle sonbahar aylarinda renk cuskunu yasatan milli park. Türkiye'nin en fotojenik doğal alani.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    tag: "Milli Park",
    href: "/blog/yedigoller-sonbahar-fotograf-rehberi",
  },
  {
    title: "Kartalkaya Kayak Merkezi",
    description:
      "2.200 metreye kadar yükselen pistleri, modern teleferik sistemi ve otel tesisleriyle Türkiye'nin onde gelen kış turizmi merkezlerinden biri.",
    image:
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    tag: "Kayak Merkezi",
    href: "/blog/kartalkaya-kayak-rehberi",
  },
  {
    title: "Gölcük Tabiat Parki",
    description:
      "Şehir merkezine sadece 13 km uzaklikta, huzurlu atmosferi ve piknik alanlariyla aileler için ideal bir doğal yasam alani.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    tag: "Tabiat Parki",
    href: "/blog/bolu-hafta-sonu-plani",
  },
  {
    title: "Mudurnu Tarihi Ilcesi",
    description:
      "Osmanli mimarisi ornekleriyle dolu sokaklar, restore edilmis tarihi konaklar ve yöresel lezzetler sunan butik dukkanlarla bir acik hava muzesi.",
    image:
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
    tag: "Tarihi Ilce",
    href: "/blog/bolu-yoresel-lezzetler",
  },
  {
    title: "Seben Gölü ve Cevredeki Yaylalar",
    description:
      "Bolu'nun sakli cenneti Seben Gölü ve çevresindeki el degmemis yaylalar. Kamp ve doğa yuruyusu için mükemmel rotalar sunar.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tag: "Yayla",
    href: "/blog/bolu-kamp-rehberi",
  },
];

export default function Places() {
  return (
    <section id="gezilecek-yerler" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Dagi Gezilecek Yerler"
          subtitle="Bolu ve çevresinde mutlaka görmeniz gereken doğal guzellikler"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, i) => (
            <motion.article
              key={place.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-500"
            >
              <Link href={place.href}>
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${place.image}')` }}
                    role="img"
                    aria-label={place.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                      <MapPin className="w-3 h-3" />
                      {place.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {place.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {place.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    Detayli Bilgi
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
