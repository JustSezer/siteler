"use client";

import { motion } from "framer-motion";
import { Car, Bus, Plane, Navigation, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const routes = [
  {
    icon: Car,
    from: "Istanbul",
    distance: "262 km",
    duration: "3 saat",
    description:
      "TEM otoyolu uzerinden Bolu cikisi. En populer rota. Yol boyunca dinlenme tesisleri mevcut.",
    route: "TEM Otoyolu > Bolu Cikisi",
    mapUrl: "https://www.google.com/maps/dir/Istanbul/Bolu+Da%C4%9F%C4%B1,+Bolu",
  },
  {
    icon: Car,
    from: "Ankara",
    distance: "191 km",
    duration: "2.5 saat",
    description:
      "Ankara-Istanbul otoyolu uzerinden Bolu cikisi. Düz ve rahat bir yolculuk. Manzarali bir sürüş sizi bekliyor.",
    route: "Ankara-Istanbul Otoyolu > Bolu",
    mapUrl: "https://www.google.com/maps/dir/Ankara/Bolu+Da%C4%9F%C4%B1,+Bolu",
  },
  {
    icon: Bus,
    from: "Otobus",
    distance: "Tum Sehirler",
    duration: "Degisken",
    description:
      "Buyuk otobus firmalari Bolu'ya düzenli seferler yapmaktadir. Bolu otogar şehir merkezine yakindir.",
    route: "Metro, Kamil Koc, Pamukkale vs.",
    mapUrl: null,
  },
  {
    icon: Plane,
    from: "Ucak + Transfer",
    distance: "En Yakın: Ankara Esenboga",
    duration: "Ucus + 2.5 saat",
    description:
      "En yakın havalimanlarindan rent-a-car veya transfer ile ulaşım mumkundur.",
    route: "Esenboga / Sabiha Gokcen + Kara Yolu",
    mapUrl: null,
  },
];

const tips = [
  "Kış aylarinda kar lastiği veya zincir bulundurun",
  "Kartalkaya yolunda dikkatli surun, virajli dag yoludur",
  "Bolu geçişi yoğun trafikli gunlerde uzayabilir",
  "Yedigoller'e ulaşım için özel arac öneriler",
];

export default function Transportation() {
  return (
    <section id="ulasim" className="py-24 lg:py-32 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Dagi'na Nasıl Gidilir?"
          subtitle="Bolu Dagi'na ulaşım secenekleri ve rota bilgileri"
          light
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {routes.map((route, i) => (
            <motion.div
              key={route.from}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary-light/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-light/20 transition-colors duration-300">
                  <route.icon className="w-7 h-7 text-secondary-light" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {route.from}
                    </h3>
                    <span className="text-secondary-light text-sm font-semibold">
                      {route.duration}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    {route.distance} - {route.route}
                  </p>
                  <p className="text-white/80 text-base leading-relaxed">
                    {route.description}
                  </p>
                  {route.mapUrl && (
                    <a
                      href={route.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-secondary-light font-semibold text-sm hover:text-white transition-colors group/link"
                    >
                      <Navigation className="w-4 h-4" />
                      Yol Tarifini Ac
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary-light/10 border border-secondary-light/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="w-6 h-6 text-secondary-light" />
            <h3 className="text-lg font-bold text-white">Yol Ipuclari</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-2 text-white/70 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-light mt-2 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
