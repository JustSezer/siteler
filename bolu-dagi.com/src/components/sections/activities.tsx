"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Bike,
  Camera,
  Fish,
  Tent,
  Footprints,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const activities = [
  {
    icon: Mountain,
    title: "Kayak ve Snowboard",
    description:
      "Kartalkaya'da 22 pist, 2.200 metre zirve yüksekliği. Aralık-Mart arasi sezon. Her seviyeye uygun pistler mevcut.",
    season: "Kış",
  },
  {
    icon: Footprints,
    title: "Doğa Yuruyusu",
    description:
      "Yedigoller, Abant ve Gölcük'te isaretlenmis parkurlar. 5 km'den 25 km'ye kadar farkli zorluk seviyelerinde rotalar.",
    season: "Ilkbahar / Yaz",
  },
  {
    icon: Bike,
    title: "Dag Bisikleti",
    description:
      "Orman yollari ve dag patikalarinda bisiklet keyfi. Özellikle Abant cevresi ve Gölcük bölgesi pedalcilar için ideal.",
    season: "Yaz / Sonbahar",
  },
  {
    icon: Camera,
    title: "Doğa Fotografciligi",
    description:
      "Sonbahar renkleri, kış manzaralari ve ilkbahar cicekleri. Yedigoller özellikle Ekim ayinda fotografcilarin cennetidir.",
    season: "Tum Yıl",
  },
  {
    icon: Fish,
    title: "Balik Tutma",
    description:
      "Abant Gölü ve Seben Gölü'nde alabalik avciligi. Izinle yasal donemde sportif balikcilik imkani.",
    season: "Ilkbahar / Yaz",
  },
  {
    icon: Tent,
    title: "Kamp ve Cadir",
    description:
      "Yedigoller ve Abant çevresinde belirli kamping alanlari. Ateslerin kurallara uygun yakilmasi zorunludur.",
    season: "Yaz",
  },
];

export default function Activities() {
  return (
    <section id="aktiviteler" className="py-24 lg:py-32 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Dagi Aktiviteleri"
          subtitle="Her mevsim farkli bir macera sizi bekliyor"
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
            >
              <div className="absolute top-6 right-6">
                <span className="text-sm font-semibold text-secondary-light bg-secondary-light/10 px-3 py-1 rounded-full">
                  {activity.season}
                </span>
              </div>
              <activity.icon className="w-12 h-12 text-secondary-light mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">
                {activity.title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
