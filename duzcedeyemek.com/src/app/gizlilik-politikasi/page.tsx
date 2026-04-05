import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Düzce'de Yemek",
  description: "Düzce'de Yemek gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
  alternates: {
    canonical: `${SITE_URL}/gizlilik-politikasi`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">Gizlilik Politikası</span>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <span className="w-1 h-8 bg-orange-500 rounded-full inline-block"></span>
        <h1 className="text-3xl sm:text-4xl font-bold">Gizlilik Politikası</h1>
      </div>
      <p className="text-stone-500 text-sm mb-8 ml-4">Son güncelleme: 27 Mart 2026</p>

      <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
        <p>
          Bu gizlilik politikası, <strong>duzcedeyemek.com</strong> (&quot;Site&quot;) tarafından toplanan,
          kullanılan ve korunan kişisel verileri açıklamaktadır. Sitemizi kullanarak bu politikayı
          kabul etmiş sayılırsınız.
        </p>

        <h2>1. Toplanan Bilgiler</h2>
        <p>Sitemiz aşağıdaki bilgileri toplayabilir:</p>
        <ul>
          <li><strong>Otomatik bilgiler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret süresi ve tarih/saat bilgileri</li>
          <li><strong>Çerezler:</strong> Site deneyiminizi iyileştirmek için kullanılan teknik çerezler</li>
          <li><strong>İletişim bilgileri:</strong> İletişim formu aracılığıyla gönüllü olarak paylaştığınız ad, e-posta ve mesaj içeriği</li>
        </ul>

        <h2>2. Bilgilerin Kullanımı</h2>
        <ul>
          <li>Site içeriğinin ve kullanıcı deneyiminin iyileştirilmesi</li>
          <li>Ziyaretçi istatistiklerinin analiz edilmesi</li>
          <li>İletişim taleplerine yanıt verilmesi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>

        <h2>3. Çerezler</h2>
        <p>
          Sitemiz, işlevselliği sağlamak ve analitik veriler toplamak amacıyla çerez kullanmaktadır.
          Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
        </p>

        <h2>4. Üçüncü Taraf Hizmetleri</h2>
        <ul>
          <li><strong>Vercel:</strong> Site barındırma ve performans izleme için</li>
        </ul>

        <h2>5. Veri Güvenliği</h2>
        <p>
          Kişisel verilerinizin güvenliğini sağlamak için SSL şifreleme ve güvenli sunucular kullanmaktayız.
        </p>

        <h2>6. Haklarınız</h2>
        <p>KVKK kapsamında verilerinizin işlenmesi, düzeltilmesi veya silinmesini talep edebilirsiniz.</p>

        <h2>7. İletişim</h2>
        <p>
          Sorularınız için{" "}
          <Link href="/iletisim" className="text-orange-600 hover:text-orange-700 font-bold">
            iletişim sayfamızdan
          </Link>{" "}
          bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
