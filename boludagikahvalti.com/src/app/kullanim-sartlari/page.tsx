import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Bolu Dağı Kahvaltı",
  description: "Bolu Dağı Kahvaltı kullanım şartları.",
  alternates: {
    canonical: "https://boludagikahvalti.com/kullanim-sartlari",
  },
};

export default function KullanimPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Kullanım Şartları
          </h1>

          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>Son güncelleme: Nisan 2026</p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              1. Genel Hükümler
            </h2>
            <p>
              boludagikahvalti.com sitesini kullanarak, aşağıdaki kullanım şartlarını
              kabul etmiş sayılırsınız. Site, bilgilendirme amaçlıdır ve içerik
              güvenilirliğine özen gösterilir; ancak içeriklerin tam doğruluğu
              garanti edilmez.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              2. İçerik Kullanımı
            </h2>
            <p>
              Sitedeki yazılı ve görsel içerikler telif hakları kapsamındadır. İzinsiz
              kopyalanması, dağıtılması veya ticari amaçla kullanılması yasaktır.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              3. Önerilen Mekanlar
            </h2>
            <p>
              Sitede yer alan mekan önerileri, editöryel görüş niteliğindedir. Mekanlar
              ile ilgili güncel bilgi (açılış saati, hizmet, fiyat) için doğrudan
              mekanla iletişim kurmanız tavsiye edilir.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              4. Sorumluluk Reddi
            </h2>
            <p>
              Sitedeki içeriklerin kullanımı sonucunda doğabilecek herhangi bir
              zarardan site sahibi sorumlu tutulamaz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
