import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = { title: "Üyelik Sözleşmesi" };

export default function Page() {
  return (
    <LegalPage title="Üyelik Sözleşmesi">
      <p>
        İşbu sözleşme, {site.name} internet sitesine üye olan kullanıcıların site üzerinden
        sunulan hizmetlerden faydalanmasına ilişkin koşul ve şartları düzenler.
      </p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">1. Taraflar</h2>
      <p>Taraflar: {site.name} (bundan sonra "Şirket") ve siteye kayıt olan kullanıcı (bundan sonra "Üye").</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">2. Üyelik Koşulları</h2>
      <p>18 yaşını doldurmuş her gerçek ve tüzel kişi üye olabilir. Üye, verdiği bilgilerin doğruluğundan sorumludur.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">3. Hak ve Yükümlülükler</h2>
      <p>Şirket, hizmet kalitesini korumak için sözleşmeyi tek taraflı güncelleme hakkını saklı tutar. Üye, hesap bilgilerinin gizliliğinden sorumludur.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">4. Sona Erme</h2>
      <p>Üye, istediği zaman hesabını kapatabilir. Şirket, sözleşmeye aykırı davranış halinde üyeliği sona erdirebilir.</p>
    </LegalPage>
  );
}
