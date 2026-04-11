import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Bolu Et Lokantası Rehberi",
  description: "Bolu Et Lokantası Rehberi gizlilik politikası.",
  alternates: {
    canonical: "https://boluetlokantasi.com/gizlilik",
  },
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Gizlilik Politikası
          </h1>

          <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Son güncelleme: Ocak 2026
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              1. Toplanan Bilgiler
            </h2>
            <p>
              boluetlokantasi.com (&quot;Site&quot;) ziyaretçilerinin gizliliğini
              korumayı taahhüt eder. Sitemizi ziyaret ettiğinizde aşağıdaki
              bilgiler toplanabilir:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>IP adresi ve tarayıcı bilgileri</li>
              <li>Ziyaret edilen sayfalar ve ziyaret süresi</li>
              <li>Çerez verileri (çerez tercihlerinize bağlı olarak)</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              2. Bilgilerin Kullanımı
            </h2>
            <p>Toplanan bilgiler aşağıdaki amaçlarla kullanılır:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Site performansının iyileştirilmesi</li>
              <li>İçerik ve kullanıcı deneyiminin geliştirilmesi</li>
              <li>İstatistiksel analiz</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              3. Çerezler
            </h2>
            <p>
              Sitemiz zorunlu, analitik, pazarlama ve fonksiyonel çerezler
              kullanmaktadır. Çerez tercihlerinizi ilk ziyaretinizde veya
              sayfanın alt kısmındaki &quot;Çerez Tercihleri&quot; bağlantısından
              yönetebilirsiniz. Detaylar için{" "}
              <Link href="/cerez-politikasi" className="text-primary underline">
                Çerez Politikamızı
              </Link>{" "}
              inceleyiniz.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              4. Üçüncü Taraf Paylaşımı
            </h2>
            <p>
              Kişisel bilgileriniz yasal zorunluluklar dışında üçüncü
              taraflarla paylaşılmaz.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              5. İletişim
            </h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için{" "}
              <a
                href="mailto:info@boluetlokantasi.com"
                className="text-primary underline"
              >
                info@boluetlokantasi.com
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
