import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { partner } from "@/lib/partner";
import { Beef, Flame, ThermometerSun, ShoppingBasket, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Düzce'de Et Nerede Yenir? | Et Rehberi 2026",
  description:
    "Düzce'de hangi et, nasıl pişer, nerede yenir? Meşe közünde pirzoladan köfteye, kasaptan sofraya — Düzce et severlerin eksiksiz rehberi.",
  keywords: [
    "düzce et lokantası",
    "düzce et nerede yenir",
    "düzce kuzu pirzola",
    "düzce köfte",
    "düzce kasap",
    "meşe közünde et pişirme",
  ],
  alternates: { canonical: "https://duzceetmangal.com/et-rehberi" },
};

const etler = [
  {
    icon: Beef,
    title: "Kuzu Pirzola",
    desc: "Düzce'nin yüksek yaylalarında yetişen kuzuların pirzolası, meşe közünde pişirildiğinde eşsiz bir lezzet sunar. Bakacak mevkiindeki restoranların en çok sipariş edilen ikinci yemeğidir. Pişirme süresi ve közün sıcaklığı kritiktir.",
  },
  {
    icon: Flame,
    title: "Bakacak Köfte",
    desc: "Dana ve kuzu kıymasının %60-40 oranında karıştırılmasıyla hazırlanır. Meşe közü üzerinde yavaş pişirme, köfteye tütsümsü bir derinlik katar. Taze günlük etler kullanılması şarttır.",
  },
  {
    icon: ThermometerSun,
    title: "Dana Bonfile & Antrikot",
    desc: "Kaliteli danayı meşe közünde pişirmek başlı başına bir sanattır. Düzce'deki usta mangalcılar, eti önce yüksek közde mühürler, sonra düşük közde dinlendirerek pişirir. Bu teknik, etin suyu kaybetmeden pişmesini sağlar.",
  },
  {
    icon: ShoppingBasket,
    title: "Kasap Sucuk & Ciğer",
    desc: "Düzce kasaplarının el yapımı sucuğu, doğal koyun bağırsağında ve geleneksel baharat karışımıyla hazırlanır. Közde pişirildiğinde dışı çıtır, içi yumuşak bir lezzet sunar. Dana ciğer de mangalın gizli kahramanıdır.",
  },
];

export default function EtRehberi() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20 smoke-grain">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="rule-dashed pt-3 mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
                <span className="font-semibold">Düzce Et Rehberi</span>
                <span>Defter 01 · Et Haritası</span>
              </div>
            </div>

            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-forest mb-5">
              Durak Özel · Et Haritası
            </p>

            <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[64px] leading-[0.95] tracking-[-0.02em] font-bold text-charcoal mb-6 max-w-[800px]">
              Düzce&apos;de Et{" "}
              <span className="italic font-normal text-forest">Nerede</span>{" "}
              Yenir?
            </h1>

            <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed max-w-[600px]">
              Meşe közünde pirzoladan köfteye, kasaptan sofraya — Düzce et
              severler için kapsamlı rehber.
            </p>
          </div>
        </section>

        {/* Et türleri */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-10">
              Düzce&apos;de Hangi Et, Nasıl Pişer?
            </h2>

            <div className="space-y-10 sm:space-y-12">
              {etler.map((e, i) => (
                <article key={i}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-highlight flex items-center justify-center">
                      <e.icon size={18} className="text-forest" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal">
                      {e.title}
                    </h3>
                  </div>
                  <p className="font-body text-base sm:text-lg text-charcoal-soft leading-[1.8]">
                    {e.desc}
                  </p>
                  {i < etler.length - 1 && <div className="rule-thin mt-8 sm:mt-10" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20 bg-forest text-smoke">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke/60 mb-4">
              Yolcunun Tercihi
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-smoke mb-4">
              Düzce&apos;de Et Mangal Adresi
            </h2>
            <p className="font-body text-base sm:text-lg text-smoke/80 leading-relaxed mb-6">
              Bakacak mevkiinde meşe közünde et mangal — {partner.name}
            </p>
            <a href={`tel:${partner.phone}`} className="btn-copper">
              <Phone size={16} />
              {partner.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
