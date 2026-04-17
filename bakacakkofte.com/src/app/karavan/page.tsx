import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Truck, Flame, MapPin, Zap, Check } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AnnounceBar from "@/components/layout/announce-bar";

export const metadata: Metadata = {
  title: "Karavan · Mobil Köfte Noktası",
  description:
    "Bakacak Köfte karavanı; köz ızgara sistemi, kompakt mutfak düzeni ve Türkiye'nin her köşesinde kurulabilir mobil yapısıyla hazır bir işletme modeli sunar.",
  alternates: { canonical: "https://bakacakkofte.com/karavan" },
};

const specs = [
  { label: "Boyut", value: "2.4 × 5 m (ortalama)" },
  { label: "Köz ızgara", value: "Entegre profesyonel sistem" },
  { label: "Soğuk zincir", value: "Çift kompartımanlı buzdolabı" },
  { label: "Tezgah", value: "304 paslanmaz çelik" },
  { label: "Enerji", value: "Şebeke + jeneratör hazır" },
  { label: "Su tankı", value: "Temiz + gri su ayrı" },
];

const locations = [
  "Şehir çıkışları ve otoyol dinlenme tesisleri",
  "Sahil bandı, festival alanları",
  "Üniversite yerleşkeleri",
  "AVM meydan alanları ve food court",
  "Etkinlik alanları ve panayırlar",
  "Kurumsal kampüs girişleri",
];

export default function KaravanPage() {
  return (
    <>
      <AnnounceBar />
      <Header />
      <main id="main-content">
        <section className="relative paper-warm grain py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <p className="eyebrow mb-4">Karavan</p>
                <h1 className="display-font text-[42px] leading-[1.05] md:text-[64px] md:leading-[1.02] tracking-tight text-ink">
                  Mutfak değil,
                  <span className="block text-red">hareketli bir istasyon.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-2 leading-relaxed max-w-2xl">
                  Bakacak Köfte karavanı, standart bir mobil mutfaktan fazlasıdır. Köz ızgara,
                  soğuk zincir, servis tezgahı ve operasyon akışı; hızlı ve tutarlı köfte üretimi
                  için optimize edilmiş bütün bir sistemdir.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link href="/franchise" className="btn-red">
                    Bayilik Başvurusu <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/iletisim" className="btn-outline">
                    Bilgi al
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-peach shadow-2xl bg-red-deep">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/karavan-1.jpg)" }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" aria-hidden />
                  <div className="absolute bottom-6 left-6 right-6 text-bone">
                    <Truck className="w-8 h-8 text-orange mb-3" />
                    <p className="display-font text-2xl font-semibold">Anahtar teslim</p>
                    <p className="text-bone/80 text-sm mt-1">Karavan + ekipman + reçete + eğitim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bone py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="eyebrow mb-4">Teknik Özet</p>
                <h2 className="display-font text-3xl md:text-4xl leading-tight text-ink">
                  Standardize edilmiş bir ünite.
                </h2>
                <p className="mt-5 text-ink-2 leading-relaxed">
                  Her karavan, aynı iç düzen ve aynı ekipmanla teslim edilir. Bu; operasyon
                  tutarlılığı, hızlı eğitim ve bölgeler arası kalite farkının ortadan kalkması
                  demek.
                </p>
              </div>
              <div className="md:col-span-7">
                <dl className="grid gap-4 sm:grid-cols-2">
                  {specs.map((s) => (
                    <div key={s.label} className="card-food rounded-xl p-5">
                      <dt className="text-xs uppercase tracking-wider text-muted">
                        {s.label}
                      </dt>
                      <dd className="display-font text-lg font-semibold text-ink mt-1">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="ink-panel py-20 md:py-28 grain">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-12 items-start">
              <div className="md:col-span-5">
                <p className="eyebrow-gold mb-4">Kurulum Lokasyonları</p>
                <h2 className="display-font text-3xl md:text-4xl leading-tight text-bone">
                  <span className="italic text-orange">Nerede kuruluyor?</span>
                </h2>
                <p className="mt-5 text-bone/70 leading-relaxed">
                  Karavanın lokasyon esnekliği sayesinde sabit kira yükü olmadan yüksek
                  trafikli noktalara konumlanabilir. Örnek alanlar:
                </p>
              </div>
              <div className="md:col-span-7">
                <ul className="space-y-4">
                  {locations.map((l) => (
                    <li key={l} className="flex items-start gap-4 pb-4 border-b border-bone/15">
                      <span className="mt-1 flex items-center justify-center w-7 h-7 rounded-full bg-gold/20 text-orange shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-bone text-lg">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Flame,
                  title: "Açıkta pişen köfte",
                  text: "Karavanın köz ızgarası göz önünde; müşteri pişimi izliyor. Güven sinyali, anlık iştah tetiği.",
                },
                {
                  icon: Zap,
                  title: "Hızlı servis döngüsü",
                  text: "Sipariş alımı — pişim — servis zinciri 5-7 dakikaya kadar optimize edilmiştir.",
                },
                {
                  icon: MapPin,
                  title: "Lokasyon takibi",
                  text: "Her karavanın günlük konumu marka panelinden takip edilir; müşteriye Instagram üzerinden duyurulur.",
                },
              ].map((c) => (
                <div key={c.title} className="card-food rounded-2xl p-7">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red/10 text-red mb-5">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="display-font text-xl font-semibold text-ink mb-2">
                    {c.title}
                  </h3>
                  <p className="text-ink-2 text-sm leading-relaxed opacity-80">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
