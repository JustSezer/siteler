"use client";

import { motion } from "framer-motion";

const dishes = [
  { num: "01", name: "Kuymak", desc: "Mısır unu, taze kaşar ve bolca tereyağı. Bakır tencerede kıvamına gelene kadar karıştırılır.", tag: "Sıcak" },
  { num: "02", name: "Tereyağlı Göz", desc: "Demir tavada, yöre köy tereyağında pişirilen iki yumurta. Sarısı akarken sacın üstündeki sıcak ekmeğe sürülür.", tag: "Klasik" },
  { num: "03", name: "Sıcak Sac Gözlemesi", desc: "İnce açılmış hamur, içine peynir, patates ya da ıspanak. Sacda kabarıp kahverengileşene kadar pişer.", tag: "Saç" },
  { num: "04", name: "Bal & Kaymak", desc: "Manda sütünden çırpılmış kaymağın üstüne kestane balı süzülür. Sabahın en tatlı sözleşmesi.", tag: "Tatlı" },
  { num: "05", name: "Köy Tereyağı", desc: "Yayık altında saatlerce çırpılmış, hafif tuzlu, sarı bir yıldız. Sıcak ekmeğin üstünde anında erir.", tag: "Yayık" },
  { num: "06", name: "Demli Sabah Çayı", desc: "Çift demlikte yarım saat kaynamış koyu çay. İnce belli bardakta servis edilir.", tag: "Çay" },
  { num: "07", name: "Kestane Balı", desc: "Bolu ormanlarında toplanan, hafif acımsı, koyu kahve renkli bal. Bir kaşığı sofranın iddiasını değiştirir.", tag: "Bal" },
  { num: "08", name: "Bakla Kavurması", desc: "Yöreye özgü kuru baklanın suda haşlanıp tereyağda kavrulması. Üzerine bir tutam pul biber.", tag: "Yöresel" },
  { num: "09", name: "Köy Yumurtası", desc: "Hür gezen tavuğun mısırla beslendiği aile bahçesinden geliyor. Sarısı turuncu, beyazı diri.", tag: "Doğal" },
];

export default function Kahvaltilar() {
  return (
    <section id="kahvaltilar" className="relative py-20 sm:py-24 lg:py-32 bg-bone-warm" aria-labelledby="kahvaltilar-heading">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="eyebrow">Yöresel Kahvaltılar</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20 max-w-3xl"
        >
          <h2 id="kahvaltilar-heading" className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-charcoal tracking-tight">
            Bolu Dağı serpme kahvaltısında{" "}
            <span className="italic text-forest">hangi yöresel lezzetler var?</span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.8] text-ash max-w-xl">
            Bolu Dağı serpme kahvaltısında 9 temel yöresel lezzet bulunur:
            kuymak, tereyağlı göz, sac gözleme, bal-kaymak, köy tereyağı,
            demli çay, kestane balı, bakla kavurması ve köy yumurtası.
            Her biri Bolu yöresine özgü malzemelerle hazırlanır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-charcoal/80">
          {dishes.map((dish, i) => (
            <motion.article
              key={dish.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group border-b border-r border-charcoal/10 p-6 sm:p-8 hover:bg-bone transition-colors"
              role="article"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-serif italic text-4xl sm:text-5xl text-forest/20 leading-none">
                  {dish.num}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ochre border border-ochre/30 px-2.5 py-1">
                  {dish.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-tight mb-3 group-hover:text-forest transition-colors">
                {dish.name}
              </h3>
              <p className="text-[14px] leading-[1.8] text-ash">
                {dish.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
