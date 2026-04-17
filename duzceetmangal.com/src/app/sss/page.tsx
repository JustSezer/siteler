import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { partner } from "@/lib/partner";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Düzce Mangal SSS | Sık Sorulan Sorular",
  description:
    "Düzce'de mangal nerede yenir, Bakacak'a nasıl gidilir, fiyatlar ne kadar? Düzce et mangal hakkında en çok sorulan soruların cevapları.",
  keywords: [
    "düzce mangal nerede yenir",
    "bakacak mevkii nasıl gidilir",
    "düzce et mangal fiyat",
    "bakacak köfte nedir",
    "düzce en iyi mangal",
    "d100 mangal molası",
  ],
  alternates: { canonical: "https://duzceetmangal.com/sss" },
};

const sorular = [
  {
    q: "Düzce'de en iyi et mangal nerede yenir?",
    a: "Düzce'de et mangal deneyimi için en bilinen bölge Kaynaşlı'daki Bakacak mevkiidir. D100 karayolu üzerinde meşe közünde et mangal sunan birçok restoran bulunur. Bunların yanı sıra Düzce merkez ve Akçakoca'da da kaliteli et lokantaları mevcuttur.",
  },
  {
    q: "Bakacak mevkiine nasıl gidilir?",
    a: "Bakacak, Düzce'nin Kaynaşlı ilçesinde D100 (eski İstanbul-Ankara karayolu) üzerinde yer alır. İstanbul'dan yaklaşık 2.5 saat, Ankara'dan yaklaşık 3 saat mesafededir. TEM otoyolundan Kaynaşlı çıkışını kullanarak D100'e bağlanabilirsiniz.",
  },
  {
    q: "Bakacak köfte nedir?",
    a: "Bakacak köftesi, dana ve kuzu kıymasının özel oranlarda harmanlanmasıyla hazırlanan bölgesel bir lezzettir. Meşe kömürü üzerinde yavaş pişirilerek hazırlanır. Taze günlük etler kullanılır ve közlenmiş biber, domates ile servis edilir.",
  },
  {
    q: "Düzce'de et mangal fiyatları ne kadar?",
    a: "2026 yılı itibarıyla Düzce'de et mangal fiyatları, porsiyon köfte 200-350 TL, kuzu pirzola 400-700 TL, karışık ızgara 350-600 TL aralığında değişmektedir. Bakacak mevkiindeki restoranlarda fiyatlar benzer seviyelerdedir. Güncel fiyatlar için doğrudan mekanları aramanızı öneririz.",
  },
  {
    q: "Meşe kömürü mangalda ne fark yaratır?",
    a: "Meşe kömürü hazır mangal kömürüne göre daha yavaş ve düzgün yanar. Bu sayede et dışı yanmadan homojen pişer. Meşe közünün verdiği hafif tütsü aroması, ete ayırt edici bir derinlik ve lezzet katar. Düzce'nin meşe ormanları sayesinde bölgede bu gelenek nesiller boyu sürmektedir.",
  },
  {
    q: "İstanbul-Ankara yolunda mangal molası nerede verilir?",
    a: "İstanbul-Ankara güzergahında en köklü mangal molası noktası, Düzce Kaynaşlı'daki Bakacak mevkiidir. D100 karayolu üzerinde onlarca yıldır hizmet veren restoranlar, meşe közünde et mangal ve yöresel lezzetler sunmaktadır. Özellikle hafta sonları ve bayram dönemlerinde çok yoğun olabilir.",
  },
  {
    q: "Düzce'de mangal yapılacak piknik alanı var mı?",
    a: "Evet, Düzce'de birçok piknik ve mangal alanı bulunur. Samandere Şelalesi çevresi, Güzeldere Şelalesi, Efteni Gölü ve Kaynaşlı çevresindeki orman alanları popüler mangal noktalarıdır. Yaz aylarında ormanlarda mangal yasaklarını kontrol etmenizi öneririz.",
  },
  {
    q: "Bakacak mevkiinde restoranlar 7/24 açık mı?",
    a: `Bakacak'taki bazı restoranlar 7/24 hizmet vermektedir. Özellikle gece İstanbul-Ankara güzergahını kullanan yolcular için gece mangal seçenekleri mevcuttur. ${partner.name} bu restoranlardan biridir ve gece boyunca açık olup sıcak servis sunmaktadır.`,
  },
  {
    q: "Düzce'nin meşhur yemekleri nelerdir?",
    a: "Düzce mutfağı Bolu ve Karadeniz etkisi taşır. Bakacak köftesi, kuzu pirzola, meşe közünde mangal başta olmak üzere; muhlama, sarma, kara lahana çorbası, Akçakoca'nın deniz ürünleri ve Düzce mantısı bölgenin öne çıkan lezzetleridir.",
  },
  {
    q: "Düzce'de çocuklu aileye uygun et mangal mekanı var mı?",
    a: "Evet, Bakacak mevkiindeki birçok restoran geniş bahçe alanlarına sahiptir ve aile dostu ortam sunmaktadır. Çocuk oyun alanı, geniş oturma alanları ve park imkânı sunan mekanlar mevcuttur. Hafta içi ziyaret daha sakin bir deneyim sunar.",
  },
];

export default function SSS() {
  return (
    <>
      <FAQJsonLd questions={sorular} />
      <Header />
      <main>
        <section className="pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
            <div className="rule-dashed pt-3 mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
                <span className="font-semibold">Sık Sorulan Sorular</span>
                <span>{sorular.length} Soru</span>
              </div>
            </div>

            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-forest mb-5">
              Yolcunun Soruları
            </p>

            <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.02em] font-bold text-charcoal mb-6">
              Düzce Mangal
              <br />
              <span className="italic font-normal text-forest">S.S.S.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed mb-12">
              Düzce&apos;de mangal nerede yenir, Bakacak&apos;a nasıl gidilir,
              fiyatlar ne kadar? En çok sorulan soruların cevaplarını derledik.
            </p>

            <div className="space-y-0">
              {sorular.map((s, i) => (
                <details key={i} className="group border-t border-bark-soft">
                  <summary className="flex items-start justify-between gap-4 py-5 sm:py-6 cursor-pointer list-none">
                    <h2 className="font-display text-base sm:text-lg font-semibold text-charcoal group-open:text-forest transition-colors text-left">
                      {s.q}
                    </h2>
                    <ChevronDown
                      size={20}
                      className="shrink-0 mt-1 text-charcoal-muted group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="font-body text-sm sm:text-base text-charcoal-soft leading-relaxed pb-6 pr-8">
                    {s.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
