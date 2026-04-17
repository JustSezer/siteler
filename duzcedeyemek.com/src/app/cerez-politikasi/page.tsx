import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Cerez Politikasi | Duzce'de Yemek",
  description: "Duzce'de Yemek cerez politikasi ve cerez yonetim bilgileri.",
  alternates: {
    canonical: "https://duzcedeyemek.com/cerez-politikasi",
  },
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Çerez Politikası
          </h1>

          <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
            <p>Son güncelleme: Ocak 2026</p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              1. Çerez Nedir?
            </h2>
            <p>
              Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen
              küçük metin dosyalarıdır. Sitemizin düzgün çalışmasını sağlamak ve
              deneyiminizi iyileştirmek için kullanılırlar.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              2. Kullandığımız Çerez Türleri
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Zorunlu Çerezler
            </h3>
            <p>
              Sitenin temel işlevlerinin çalışması için gereklidir. Bu çerezler
              devre dışı bırakılamaz.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Analitik Çerezler
            </h3>
            <p>
              Ziyaretçi sayısı, sayfa görüntüleme ve site kullanım istatistikleri
              toplamak için kullanılır.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Pazarlama Çerezleri
            </h3>
            <p>
              Kişiselleştirilmiş reklam ve içerik gösterimi için kullanılır.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Fonksiyonel Çerezler
            </h3>
            <p>
              Tercihlerinizi (dil, tema vb.) hatırlamak için kullanılır.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              3. Çerez Yönetimi
            </h2>
            <p>
              Çerez tercihlerinizi sayfanın alt kısmındaki &quot;Çerez
              Tercihleri&quot; bağlantısından istediğiniz zaman
              değiştirebilirsiniz. Ayrıca tarayıcı ayarlarınızdan çerezleri
              silebilir veya engelleyebilirsiniz.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              4. İletişim
            </h2>
            <p>
              Çerez politikamız hakkında sorularınız için{" "}
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
