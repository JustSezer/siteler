"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const restaurants = [
  {
    name: "İbrahim'in Yeri",
    desc: "1989'dan beri Bakacak mevkiinde. Odun ateşinde yöresel et. 7/24 açık.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    link: "https://ibrahiminyerinden.com",
    tags: ["7/24", "Odun Ateşi"],
    featured: true,
  },
  {
    name: "Uçar Et Mangal",
    desc: "Bakacak'ta 1989'dan beri. Kuzu çevirme ve mangal.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
    tags: ["Mangal", "Çevirme"],
  },
  {
    name: "Köroğlu Et Mangal",
    desc: "Şehir merkezinde aile dostu geniş salonlu restoran.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    tags: ["Aile", "Merkez"],
  },
  {
    name: "Abant Et Lokantası",
    desc: "Abant Gölü yakınında turistlerin gözdesi. Kuzu tandır.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    tags: ["Tandır", "Abant"],
  },
  {
    name: "Somine Et Mangal",
    desc: "Şömineli sıcak ortam, kış aylarının gözdesi.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    tags: ["Şömine", "Kış"],
  },
  {
    name: "Bolu Et Evi",
    desc: "Modern steakhouse. Dry aged steak ve antrikot.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    tags: ["Steakhouse", "Modern"],
  },
];

export default function Restaurants() {
  const featured = restaurants[0];
  const grid = restaurants.slice(1);

  return (
    <section id="lokantalar" className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Mekanlar"
          subtitle="Bolu'nun en sevilen et adresleri"
          align="left"
        />

        {/* Featured - full width */}
        <motion.a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative block w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-8"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${featured.image}')` }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute top-6 left-6 inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Editörün Tercihi
          </motion.div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {featured.tags.map((t) => (
                <span key={t} className="text-[11px] font-medium uppercase tracking-wider text-white/60 border border-white/20 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-500">
              {featured.name}
            </h3>
            <p className="text-white/60 max-w-md mb-6">{featured.desc}</p>
            <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:text-secondary transition-colors">
              Web Sitesi <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </motion.a>

        {/* Grid - bento style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative h-[280px] lg:h-[320px] rounded-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${r.image}')` }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                  role="img"
                  aria-label={r.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-2 mb-2">
                    {r.tags.map((t) => (
                      <span key={t} className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-secondary transition-colors duration-500">
                    {r.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-1 line-clamp-1">{r.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
