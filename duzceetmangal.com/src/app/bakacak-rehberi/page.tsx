import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { partner } from "@/lib/partner";
import { Phone, MapPin, Clock, Flame, TreePine, Route } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bakacak Mangal Rehberi | D100'ün Efsane Et Durağı — Düzce",
  description:
    "Bakacak mevkiinde mangal geleneği, en iyi mekanlar ve meşe kömürü sırları. D100 üzerinde et molası vermek isteyenler için eksiksiz Bakacak rehberi.",
  keywords: [
    "bakacak mangal",
    "bakacak köfte",
    "bakacak et mangal",
    "d100 mangal düzce",
    "kaynaşlı bakacak mangal",
    "bakacak mevkii restoran",
    "bolu dağı mangal",
  ],
  alternates: { canonical: "https://duzceetmangal.com/bakacak-rehberi" },
};

const rehberBolumleri = [
  {
    icon: Route,
    title: "Bakacak Nerede?",
    content:
      "Bakacak mevkii, Düzce'nin Kaynaşlı ilçesinde, D100 (eski İstanbul-Ankara karayolu) üzerinde yer alır. Bolu Dağı'nın batı yamacında, İstanbul'dan gelenlerin Bolu'ya girmeden son, Ankara'dan gelenlerin ilk durağıdır. Kaynaşlı çıkışından yaklaşık 5 km sonra, yolun sağında ve solunda sıralanan mangal restoranları sizi karşılar.",
  },
  {
    icon: Flame,
    title: "Bakacak Köfte Nedir?",
    content:
      "Bakacak köftesi, bölgenin imza lezzetidir. Özel oranlarda harmanlanmış dana ve kuzu kıymasından hazırlanır. Sırrı, meşe kömürü üzerinde yavaş pişirmede gizlidir. Taze günlük etlerden hazırlanan köfte, közün üzerinde kendi yağıyla pişerken etrafa yayılan duman kokusu, Bakacak deneyiminin ayrılmaz parçasıdır. Yanında közlenmiş biber, domates ve taze lavaş ile servis edilir.",
  },
  {
    icon: TreePine,
    title: "Meşe Kömürü Farkı",
    content:
      "Düzce'nin zengin meşe ormanları, bölgedeki mangal kültürünün temelini oluşturur. Meşe kömürü, hazır mangal kömürüne göre daha yavaş ve düzgün yanar. Bu sayede et, dışı yanmadan içi pişer. Meşe közünün verdiği hafif tütsü aroması, ete ayırt edici bir derinlik katar. Bakacak'taki restoranların çoğu hâlâ yerel meşe kömürü kullanır.",
  },
  {
    icon: Clock,
    title: "Ne Zaman Gidilir?",
    content:
      "Bakacak yıl boyunca açık restoranlarıyla hizmet verir. Yaz aylarında (Haziran-Eylül) açık hava mangal keyfi en yoğun dönemdir. Hafta sonları özellikle İstanbul'dan gelen günübirlik ziyaretçilerle dolup taşar. Bayram dönemleri çok yoğun olabilir — önceden rezervasyon yapmanız önerilir. Kış aylarında kapalı mekanlarda sıcak mangal deneyimi de ayrı bir keyiftir.",
  },
];

export default function BakacakRehberi() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20 smoke-grain">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="rule-dashed pt-3 mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
                <span className="font-semibold">Bakacak Mangal Rehberi</span>
                <span>Defter 01 · Durak Özel</span>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-14">
              <div className="md:col-span-7">
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-forest mb-5">
                  Durak Özel · Bakacak Mevkii
                </p>
                <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-[-0.02em] font-bold text-charcoal mb-6">
                  Bakacak&apos;ta Mangal:
                  <br />
                  D100&apos;ün{" "}
                  <span className="italic font-normal text-forest">
                    Efsane
                  </span>{" "}
                  Durağı.
                </h1>
                <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed max-w-xl">
                  İstanbul-Ankara arasında milyonlarca kişinin &ldquo;bir
                  duralım&rdquo; dediği yer. Bakacak mevkii, meşe közünde et
                  mangal geleneğiyle Türkiye&apos;nin en köklü yol durağı.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg border border-bark-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=85"
                    alt="Mangal ızgarasında közde pişen etler — Bakacak mevkii"
                    fill
                    priority
                    className="object-cover saturate-[0.85]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-forest/5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rehber bölümleri */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
            <div className="space-y-12 sm:space-y-16">
              {rehberBolumleri.map((b, i) => (
                <article key={i}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-highlight flex items-center justify-center">
                      <b.icon
                        size={18}
                        className="text-forest"
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-charcoal">
                      {b.title}
                    </h2>
                  </div>
                  <p className="font-body text-base sm:text-lg text-charcoal-soft leading-[1.8]">
                    {b.content}
                  </p>
                  {i < rehberBolumleri.length - 1 && (
                    <div className="rule-thin mt-10 sm:mt-12" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Yolcunun tercihi CTA */}
        <section className="py-14 sm:py-16 lg:py-20 bg-forest text-smoke">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12 text-center">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-smoke/60 mb-4">
              Yolcunun Tercihi · Bakacak
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-smoke mb-4">
              {partner.name}
            </h2>
            <p className="font-body text-base sm:text-lg text-smoke/80 leading-relaxed mb-6">
              {partner.tagline}. Bakacak mevkiinde 7/24 açık, meşe közünde et
              mangal ve yöresel kahvaltı.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={`tel:${partner.phone}`} className="btn-copper">
                <Phone size={16} />
                {partner.phoneDisplay}
              </a>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-smoke/70 hover:text-smoke transition-colors"
              >
                <MapPin size={14} />
                {partner.address}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
