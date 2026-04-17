import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Gizlilik Sözleşmesi" };

export default function Page() {
  return (
    <LegalPage title="Gizlilik Sözleşmesi">
      <p>Kişisel verileriniz KVKK kapsamında hassasiyetle korunmaktadır.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Toplanan Bilgiler</h2>
      <p>Ad, soyad, e-posta, telefon, adres ve sipariş bilgileri yalnızca hizmet sunumu için işlenir.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Bilgilerin Kullanımı</h2>
      <p>Toplanan bilgiler sipariş takibi, kargo teslimatı ve müşteri iletişimi amacıyla kullanılır. Üçüncü kişilerle yasal zorunluluk dışında paylaşılmaz.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Çerezler</h2>
      <p>Sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılır. Tarayıcınızdan çerez tercihlerinizi yönetebilirsiniz.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Güvenlik</h2>
      <p>256-bit SSL ve 3D Secure ile ödeme altyapısı güvence altındadır.</p>
    </LegalPage>
  );
}
