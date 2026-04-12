import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Düzce Yemek Rehberi",
  description: "Düzce Yemek Rehberi kullanım şartları.",
  alternates: {
    canonical: "https://duzcedeyemek.com/kullanim-sartlari",
  },
};

export default function KullanimSartlariPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Kullanım Şartları
          </h1>

          <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
            <p>Son güncelleme: Ocak 2026</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              1. Kabul
            </h2>
            <p>
              duzcedeyemek.com (&quot;Site&quot;) web sitesini kullanarak bu
              kullanım şartlarını kabul etmiş sayılırsınız.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              2. İçerik
            </h2>
            <p>
              Sitedeki tüm içerikler bilgilendirme amaçlıdır. Lokanta bilgileri,
              fiyatlar ve çalışma saatleri değişkenlik gösterebilir. Güncel bilgi
              için ilgili işletmeyle doğrudan iletişime geçmenizi öneririz.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              3. Fikri Mülkiyet
            </h2>
            <p>
              Sitedeki tüm metin, grafik ve tasarım öğeleri duzcedeyemek.com
              mülkiyetindedir. İzinsiz kopyalanması veya dağıtılması yasaktır.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              4. Bağlantılar
            </h2>
            <p>
              Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
              sitelerin içeriklerinden sorumlu değiliz.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              5. Sorumluluk Sınırı
            </h2>
            <p>
              Sitedeki bilgilerin doğruluğu konusunda azami özen gösterilmekle
              birlikte, olası hatalardan dolayı sorumluluk kabul edilmez.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              6. İletişim
            </h2>
            <p>
              Sorularınız için{" "}
              <a
                href="mailto:info@duzcedeyemek.com"
                className="text-primary underline"
              >
                info@duzcedeyemek.com
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
