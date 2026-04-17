import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Kişisel Veri Paylaşımı ve İletişim İzni" };

export default function Page() {
  return (
    <LegalPage title="Kişisel Veri Paylaşımı ve İletişim İzni">
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metnidir.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">İşlenen Veriler</h2>
      <p>Ad, soyad, iletişim bilgileri, teslimat adresi ve sipariş kayıtları.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Amaç</h2>
      <p>Sipariş süreçlerinin yürütülmesi, teslimat, müşteri hizmetleri ve yasal yükümlülüklerin yerine getirilmesi.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Haklarınız</h2>
      <p>KVKK 11. madde kapsamında kişisel verilerinize erişme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsiniz.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">İletişim İzni</h2>
      <p>Sipariş bilgilendirmeleri ve kampanyalar için e-posta, SMS ve Whatsapp üzerinden iletişime geçilebilmesine onay vermiş sayılırsınız. Onayınızı dilediğiniz zaman geri çekebilirsiniz.</p>
    </LegalPage>
  );
}
