import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Et Mangal Bolu gizlilik politikası ve çerez kullanımı hakkında bilgi.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Gizlilik Politikası" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Gizlilik Politikası</h1>

      <div className="prose max-w-none">
        <h2>Çerez Kullanımı</h2>
        <p>
          etmangalbolu.com, kullanıcı deneyimini iyileştirmek ve site trafiğini
          analiz etmek amacıyla çerezler kullanmaktadır.
        </p>

        <h2>Toplanan Veriler</h2>
        <p>Sitemizde aşağıdaki veriler toplanabilir:</p>
        <ul>
          <li>Sayfa görüntüleme istatistikleri (Google Analytics)</li>
          <li>Tarayıcı türü ve sürümü</li>
          <li>Ziyaret edilen sayfalar ve süreleri</li>
          <li>Coğrafi konum (ülke/şehir düzeyinde)</li>
        </ul>

        <h2>Verilerin Kullanımı</h2>
        <p>
          Toplanan veriler yalnızca site performansını ve içerik kalitesini
          iyileştirmek amacıyla kullanılmaktadır. Kişisel verileriniz üçüncü
          taraflarla paylaşılmamaktadır.
        </p>

        <h2>Çerez Tercihleri</h2>
        <p>
          Sitemizi ilk ziyaretinizde çerez tercihlerinizi belirleyebilirsiniz.
          Tarayıcı ayarlarınızdan da çerezleri yönetebilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Gizlilik politikamız hakkında sorularınız için{" "}
          <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">
            ibrahiminyeri.com
          </a>{" "}
          üzerinden iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
}
