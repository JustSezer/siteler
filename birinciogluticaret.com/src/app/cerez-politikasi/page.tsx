import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Birincioğlu Ticaret çerez politikası. Sitede kullanılan çerez türleri ve nasıl yönetileceği hakkında bilgi.",
};

export default function Page() {
  return (
    <LegalPage title="Çerez Politikası">
      <p className="text-sm">Son güncelleme: 17 Nisan 2026</p>

      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">1. Çerez Nedir?</h2>
      <p>
        Çerezler, web sitelerinin tarayıcınıza kaydettiği küçük metin dosyalarıdır.
        Tercihlerinizi hatırlamak, site performansını ölçmek ve deneyiminizi
        iyileştirmek için kullanılır.
      </p>

      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">2. Kullanılan Çerez Türleri</h2>

      <h3 className="text-lg font-semibold text-[var(--fg)] mt-5">Zorunlu Çerezler</h3>
      <p>
        Sitenin düzgün çalışması için gereklidir. Devre dışı bırakılamaz.
        Çerez onay tercihinizi hatırlamak için kullanılır.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-[var(--border)] rounded-lg overflow-hidden">
          <thead className="bg-[var(--bg)]">
            <tr>
              <th className="text-left p-3 font-semibold text-[var(--fg)]">Çerez</th>
              <th className="text-left p-3 font-semibold text-[var(--fg)]">Amaç</th>
              <th className="text-left p-3 font-semibold text-[var(--fg)]">Süre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[var(--border)]">
              <td className="p-3">cookie_consent</td>
              <td className="p-3">Çerez tercihlerinizi saklar</td>
              <td className="p-3">1 yıl</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-[var(--fg)] mt-5">Analitik Çerezler</h3>
      <p>
        Ziyaretçi istatistiklerini toplamamıza yardımcı olur. Kişisel kimlik
        bilgileri içermez. Onayınız olmadan aktifleştirilmez.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-[var(--border)] rounded-lg overflow-hidden">
          <thead className="bg-[var(--bg)]">
            <tr>
              <th className="text-left p-3 font-semibold text-[var(--fg)]">Çerez</th>
              <th className="text-left p-3 font-semibold text-[var(--fg)]">Amaç</th>
              <th className="text-left p-3 font-semibold text-[var(--fg)]">Süre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[var(--border)]">
              <td className="p-3">_ga, _ga_*</td>
              <td className="p-3">Google Analytics ziyaretçi istatistikleri</td>
              <td className="p-3">2 yıl</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-[var(--fg)] mt-5">Pazarlama Çerezleri</h3>
      <p>
        Kişiselleştirilmiş reklam gösterimi için kullanılır. Onayınız olmadan
        aktifleştirilmez.
      </p>

      <h3 className="text-lg font-semibold text-[var(--fg)] mt-5">Fonksiyonel Çerezler</h3>
      <p>
        Sepet içeriği, dil seçimi ve benzer tercihlerinizi hatırlamamızı sağlar.
        Onayınız olmadan aktifleştirilmez.
      </p>

      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">3. Çerez Yönetimi</h2>
      <p>Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Site altbilgisindeki &quot;Çerez Tercihleri&quot; linkine tıklayarak</li>
        <li>Tarayıcınızın çerez ayarlarından tüm çerezleri silerek</li>
        <li>Tarayıcı eklentileri ile çerezleri yöneterek</li>
      </ul>

      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">4. Google Consent Mode v2</h2>
      <p>
        Sitemiz Google Consent Mode v2 standartlarına uygundur. Çerez tercihinize
        göre analitik ve pazarlama çerezleri otomatik olarak aktifleştirilir veya
        devre dışı bırakılır.
      </p>
    </LegalPage>
  );
}
