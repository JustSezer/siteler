import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Kullanım Koşulları" };

export default function Page() {
  return (
    <LegalPage title="Kullanım Koşulları">
      <p>Siteyi ziyaret ederek aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">İçerik</h2>
      <p>Sitedeki tüm görsel ve yazılı içerikler {`Birincioğlu Ticaret`}'e aittir; izinsiz kullanılamaz.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Sorumluluk</h2>
      <p>Site içeriği bilgilendirme amaçlıdır; güncel bilgi için Whatsapp veya telefon ile iletişime geçiniz.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Linkler</h2>
      <p>Harici sitelere verilen bağlantıların içerikleri sorumluluğumuz dışındadır.</p>
    </LegalPage>
  );
}
