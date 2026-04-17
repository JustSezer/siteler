import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Bolu Dağı Kahvaltı",
  description: "Bolu Dağı Kahvaltı gizlilik politikası.",
  alternates: {
    canonical: "https://boludagikahvalti.com/gizlilik",
  },
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Gizlilik Politikası
          </h1>

          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>Son güncelleme: Nisan 2026</p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              1. Toplanan Bilgiler
            </h2>
            <p>
              boludagikahvalti.com (&quot;Site&quot;) ziyaretçilerinin gizliliğini
              korumayı taahhüt eder. Sitemizi ziyaret ettiğinizde aşağıdaki bilgiler
              toplanabilir:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>IP adresi ve tarayıcı bilgileri</li>
              <li>Ziyaret edilen sayfalar ve ziyaret süresi</li>
              <li>Çerez verileri (çerez tercihlerinize bağlı olarak)</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              2. Bilgilerin Kullanımı
            </h2>
            <p>
              Toplanan bilgiler yalnızca sitenin işleyişini iyileştirmek, içerik
              kalitesini artırmak ve ziyaretçi deneyimini geliştirmek için kullanılır.
              Üçüncü taraflarla paylaşılmaz.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              3. Çerezler
            </h2>
            <p>
              Site, deneyiminizi iyileştirmek için çerezler kullanır. Çerez
              tercihlerinizi istediğiniz zaman çerez ayarlarından düzenleyebilirsiniz.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              4. Haklarınız
            </h2>
            <p>
              KVKK kapsamında verilerinize erişme, düzeltme veya silme talebinde
              bulunma hakkına sahipsiniz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
