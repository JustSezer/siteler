import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Düzce Et Mangal",
  description: "Düzce Et Mangal gizlilik politikası ve kişisel verilerin korunması.",
  alternates: { canonical: "https://duzceetmangal.com/gizlilik" },
};

export default function Gizlilik() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
              Gizlilik Politikası
            </h1>

            <div className="font-body text-base text-charcoal-soft leading-[1.8] space-y-6">
              <p>
                Bu gizlilik politikası, duzceetmangal.com web sitesinin ziyaretçi
                verilerini nasıl topladığını, kullandığını ve koruduğunu açıklar.
              </p>

              <h2 className="font-display text-xl font-semibold text-charcoal !mt-8">
                Toplanan Veriler
              </h2>
              <p>
                Sitemiz, ziyaretçi deneyimini iyileştirmek amacıyla anonim
                kullanım verileri (sayfa görüntüleme, cihaz bilgisi) toplayabilir.
                Kişisel bilgileriniz (ad, e-posta, telefon) yalnızca iletişim
                formunu doldurduğunuzda ve sizin onayınızla alınır.
              </p>

              <h2 className="font-display text-xl font-semibold text-charcoal !mt-8">
                Çerezler
              </h2>
              <p>
                Sitemiz, temel işlevsellik ve analiz amacıyla çerez
                kullanabilir. Tarayıcı ayarlarınızdan çerezleri kontrol
                edebilirsiniz.
              </p>

              <h2 className="font-display text-xl font-semibold text-charcoal !mt-8">
                Üçüncü Taraf Bağlantıları
              </h2>
              <p>
                Sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
                sitelerin gizlilik politikalarından sorumlu değiliz.
              </p>

              <h2 className="font-display text-xl font-semibold text-charcoal !mt-8">
                İletişim
              </h2>
              <p>
                Gizlilik politikamız hakkında sorularınız için info@duzceetmangal.com
                adresinden bize ulaşabilirsiniz.
              </p>

              <p className="font-mono text-[11px] text-charcoal-muted !mt-10">
                Son güncelleme: Nisan 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
