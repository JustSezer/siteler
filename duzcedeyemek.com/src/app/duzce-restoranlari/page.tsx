import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import { MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Duzce Restoranlari — Nerede Yenir? Mekan Rehberi 2026",
  description:
    "Duzce'nin en iyi restoranlari, kahvalti mekanlari ve yoresel lezzet duraklari. Kapsamli mekan rehberi.",
  keywords: [
    "duzce restoranlari",
    "duzce nerede yenir",
    "duzce en iyi restoran",
    "duzce kahvalti mekanlari",
    "akcakoca balik restoranlari",
  ],
  alternates: { canonical: "/duzce-restoranlari" },
};

const restaurants = [
  { name: "Akcakoca Balik Evi", type: "Deniz Urunleri", desc: "Sahil seridinde gunluk taze balik. Hamsi tava ve levrek izgara.", location: "Akcakoca Sahil", hours: "11:00 - 23:00", image: "https://images.unsplash.com/photo-1568713852801-44dd04bbff05?w=500&q=80", speciality: "Hamsi Tava", tag: "bg-tag-blue text-tag-blue-text" },
  { name: "Yaylaci Kahvalti Evi", type: "Kahvalti", desc: "40 cesit serpme kahvalti. Koy tereyagi, kaymak ve ev recelleri.", location: "Duzce Merkez", hours: "07:00 - 14:00", image: "https://images.unsplash.com/photo-1647772809798-f34d785c981c?w=500&q=80", speciality: "Serpme Kahvalti", tag: "bg-tag-yellow text-tag-yellow-text" },
  { name: "Dag Evi Restaurant", type: "Et & Mangal", desc: "Orman icinde dogayla ic ice mangal keyfi. Kuzu cevirme ve sac kavurma.", location: "Golyaka", hours: "10:00 - 22:00", image: "https://images.unsplash.com/photo-1680967628408-2e01f35b7b3e?w=500&q=80", speciality: "Kuzu Cevirme", tag: "bg-tag-red text-tag-red-text" },
  { name: "Ibrahim'in Yeri", type: "Et Lokantasi", desc: "Bolu Dagi Bakacak mevkiinde 7/24 acik. Odun atesinde efsanevi et lokantasi.", location: "Bolu Dagi Bakacak", hours: "7/24", image: "https://static.wixstatic.com/media/1626b5_38a9592421274b7fb76b5aad70260065~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ibrahimin%20yeri%20bolu%20et%20mangal%20restorant.jpeg", speciality: "Odun Atesi Kebap", tag: "bg-tag-red text-tag-red-text", link: "https://ibrahiminyerinden.com" },
  { name: "Konuralp Sofrasi", type: "Yoresel", desc: "Antik kent yakininda geleneksel Karadeniz mutfagi.", location: "Konuralp", hours: "09:00 - 21:00", image: "https://images.unsplash.com/photo-1674224199162-7762013f3e7a?w=500&q=80", speciality: "Karalahana Sarmasi", tag: "bg-tag-green text-tag-green-text" },
  { name: "Findikli Cafe", type: "Kafe & Tatli", desc: "Duzce findigi ile ozel tatlilar, kahveler ve el yapimi cikolatalar.", location: "Duzce Merkez", hours: "09:00 - 23:00", image: "https://images.unsplash.com/photo-1603807609292-76af9c0e4b51?w=500&q=80", speciality: "Findikli Tatlilar", tag: "bg-tag-purple text-tag-purple-text" },
  { name: "Sahil Meze Evi", type: "Meze & Balik", desc: "Deniz manzarali meze ve raki sofrasi.", location: "Akcakoca Liman", hours: "12:00 - 00:00", image: "https://images.unsplash.com/photo-1568713852801-44dd04bbff05?w=500&q=80", speciality: "Ahtapot Salatasi", tag: "bg-tag-blue text-tag-blue-text" },
];

export default function RestoranlarPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <span className="inline-flex items-center gap-2 bg-white/10 text-secondary-light px-4 py-2 rounded-full text-xs font-bold mb-6">
              Mekan Rehberi
            </span>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] mb-4">
              Duzce&apos;de Nerede <span className="text-secondary-light">Yenir?</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Akcakoca sahilinden Bolu Dagi&apos;na, Duzce&apos;nin en iyi mekanlari tek rehberde.
            </p>
          </div>
        </section>

        {/* Restaurant grid */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r) => {
                const card = (
                  <article className="bg-card rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${r.image}')` }}
                        role="img"
                        aria-label={r.name}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold ${r.tag}`}>{r.type}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{r.name}</h3>
                      <p className="text-foreground-muted text-sm leading-relaxed mb-3">{r.desc}</p>
                      <div className="flex items-center gap-4 text-xs text-foreground-muted mb-2">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{r.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{r.hours}</span>
                      </div>
                      {r.speciality && (
                        <span className="inline-block bg-secondary/10 text-secondary-dark px-3 py-1 rounded-lg text-[11px] font-bold">
                          Ozel: {r.speciality}
                        </span>
                      )}
                    </div>
                  </article>
                );

                if (r.link) {
                  return (
                    <a key={r.name} href={r.link} target="_blank" rel="noopener noreferrer" className="group block">
                      {card}
                    </a>
                  );
                }
                return <div key={r.name} className="group">{card}</div>;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-background-alt text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Detayli Restoran Incelemeleri</h2>
            <p className="text-foreground-muted mb-8">Blogumuzda detayli incelemeler ve menu onerileri var.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl text-sm font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
              Blog Yazilarini Oku &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
