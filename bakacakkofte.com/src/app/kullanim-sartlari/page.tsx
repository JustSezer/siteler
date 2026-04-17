import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "Bakacak Köfte web sitesi kullanım şartları. Site kullanım koşulları, fikri mülkiyet ve sorumluluk sınırları.",
  alternates: { canonical: "https://bakacakkofte.com/kullanim-sartlari" },
};

export default function KullanimSartlariPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 bg-bone">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="display-font text-3xl sm:text-4xl font-bold text-ink mb-8">
            Kullanım Şartları
          </h1>
          <div className="max-w-none text-ink-2 space-y-6 text-base leading-relaxed">
            <p className="text-base text-ink">Son güncelleme: 17 Nisan 2026</p>

            <p>
              Bu web sitesini (bakacakkofte.com) kullanarak aşağıdaki şartları kabul etmiş
              sayılırsınız.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">1. Genel Hükümler</h2>
            <p>
              Site içeriği yalnızca bilgilendirme amaçlıdır. Bakacak Köfte, içeriği
              önceden haber vermeksizin değiştirme hakkını saklı tutar.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">2. Fikri Mülkiyet</h2>
            <p>
              Site üzerinde yer alan tüm metin, görsel, logo ve tasarım öğelerinin telif
              hakları Bakacak Köfte ve ilgili iştiraklere aittir. İzinsiz kullanım, kopyalama,
              çoğaltma veya dağıtım yasaktır.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">3. Franchise Bilgileri</h2>
            <p>
              Sitede yer alan franchise yatırım bilgileri; güncel olmayabilir veya bölgeye
              göre farklılık gösterebilir. Nihai rakamlar ve sözleşme koşulları bireysel
              başvuru ve değerlendirme süreci sonunda netleştirilir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">4. Sorumluluk Sınırı</h2>
            <p>
              Site içeriğinin doğruluğu için azami özen gösterilmekle birlikte, Bakacak Köfte;
              site kullanımından kaynaklanan doğrudan veya dolaylı zararlardan sorumlu tutulamaz.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">5. Dış Bağlantılar</h2>
            <p>
              Site, üçüncü taraf sitelere bağlantı içerebilir. Bu sitelerin içeriği ve
              gizlilik politikaları Bakacak Köfte&apos;nin sorumluluğunda değildir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">6. Uyuşmazlık ve Yetki</h2>
            <p>
              İşbu şartlardan doğan uyuşmazlıklarda Türkiye Cumhuriyeti mevzuatı uygulanır
              ve Düzce Mahkemeleri yetkilidir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">7. İletişim</h2>
            <p>
              Sorularınız için{" "}
              <a href="mailto:franchise@bakacakkofte.com" className="text-red underline">
                franchise@bakacakkofte.com
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
