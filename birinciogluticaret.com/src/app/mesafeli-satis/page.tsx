import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = { title: "Mesafeli Satış Sözleşmesi" };

export default function Page() {
  return (
    <LegalPage title="Mesafeli Satış Sözleşmesi">
      <p>İşbu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında düzenlenmiştir.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Satıcı</h2>
      <p>{site.name} — {site.address} · Tel: {site.phone1} · E-posta: {site.email}</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Konu</h2>
      <p>Sitede satışa sunulan ürünlerin alıcıya teslimine ilişkin usul ve esasları düzenler.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Teslimat</h2>
      <p>Saat 16:00'a kadar verilen siparişler aynı gün MNG kargo ile gönderilir. Teslim süresi kargo firmasına bağlıdır.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">Cayma Hakkı</h2>
      <p>Alıcı, ürünü teslim aldığı tarihten itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin cayma hakkına sahiptir.</p>
      <h2 className="text-xl font-bold text-[var(--fg)] mt-6">İade</h2>
      <p>İade edilecek ürün, orijinal ambalajında ve kullanılmamış olmalıdır. Kargo ücreti iade talebinin sebebine göre değerlendirilir.</p>
    </LegalPage>
  );
}
