import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Wix Destek",
  description: "Wix Destek gizlilik politikası. Kişisel verilerinizin nasıl toplandığını ve kullanıldığını öğrenin.",
  alternates: {
    canonical: `${SITE_URL}/gizlilik-politikasi`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">Gizlilik Politikası</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-6">Gizlilik Politikası</h1>
      <p className="text-slate-500 text-sm mb-8">Son güncelleme: Mart 2026</p>

      <div className="prose max-w-none text-slate-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Topladığımız Bilgiler</h2>
          <p>
            İletişim formunu doldurduğunuzda ad-soyad, e-posta adresi, telefon numarası (opsiyonel) ve
            mesaj içeriği bilgilerinizi topluyoruz. Bu bilgiler yalnızca destek talebinize yanıt vermek
            amacıyla kullanılır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Bilgilerin Kullanımı</h2>
          <p>Toplanan kişisel bilgiler aşağıdaki amaçlarla kullanılır:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Destek taleplerine yanıt vermek</li>
            <li>Hizmet kalitesini iyileştirmek</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Veri Güvenliği</h2>
          <p>
            Kişisel verileriniz şifreli bağlantı (HTTPS/SSL) üzerinden iletilir ve güvenli sunucularda saklanır.
            Üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Çerezler</h2>
          <p>
            Sitemiz, temel işlevsellik için gerekli teknik çerezleri kullanır.
            Reklam amaçlı çerez kullanılmamaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Haklarınız</h2>
          <p>
            KVKK kapsamında kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz.
            Bu haklarınızı kullanmak için{" "}
            <a href="mailto:info@wix-destek.com" className="text-blue-600 hover:text-blue-700">
              info@wix-destek.com
            </a>{" "}
            adresine e-posta gönderebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için:{" "}
            <a href="mailto:info@wix-destek.com" className="text-blue-600 hover:text-blue-700">
              info@wix-destek.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
