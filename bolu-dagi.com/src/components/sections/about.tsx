"use client";

import { motion } from "framer-motion";
import { TreePine, Snowflake, Bird, Droplets } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const stats = [
  { icon: TreePine, value: "650+", label: "Bitki Turu" },
  { icon: Snowflake, value: "1.725m", label: "En Yüksek Nokta" },
  { icon: Bird, value: "200+", label: "Kus Turu" },
  { icon: Droplets, value: "7", label: "Doğal Gol" },
];

export default function About() {
  return (
    <section id="hakkinda" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Dagi Hakkında"
          subtitle="Bati Karadeniz'in kalbinde, dogayla ic ice bir cennet"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bolu Dagi, Türkiye&apos;nin Bati Karadeniz Bölgesi&apos;nde yer
              alan, yemyesil ormanlari, berrak gölleri ve zengin biyolojik
              cesitliligiyle bilinen essiz bir doğal hazinedir. Yillardir
              dogaseverlerin, fotografcilarin ve maceraperestlerin gozdesi olan
              bu bölge, her mevsim farkli bir güzellik sunar.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Abant Gölü&apos;nden Yedigoller Milli Parki&apos;na,
              Kartalkaya&apos;nin karlı pistlerinden Gölcük Tabiat Parki&apos;nin
              huzurlu atmosferine kadar, Bolu Dagi ziyaretcilerine unutulmaz
              anlar yasatir. Zengin mutfagi, sıcak misafirperverligi ve doğal
              termal kaynaklariyla da buyuler.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Istanbul&apos;a sadece 3 saat mesafede olan bu cennet kose,
              hafta sonu kacamagi için ideal bir noktadir. Yaz aylarinda
              yürüyüş, kış aylarinda kayak, sonbaharda fotograf ve ilkbaharda
              kamp için her zaman bir sebebiniz olacak.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-base text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
