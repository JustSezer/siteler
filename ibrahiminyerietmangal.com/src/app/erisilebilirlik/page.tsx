import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Erisilebilirlik",
  description:
    "Ibrahim'in Yeri erisilebilirlik bildirimi. WCAG 2.1 AA standartlarina uygunluk, erisilebilirlik ozellikleri ve iletisim bilgileri.",
};

export default function ErisilebilirlikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="display-font text-3xl sm:text-4xl font-bold text-bone mb-8">
            Erisilebilirlik Bildirimi
          </h1>
          <div className="max-w-none text-bone-soft space-y-6 text-base leading-relaxed">
            <p className="text-base text-bone">Son guncelleme: 16 Nisan 2026</p>

            <p>
              Ibrahim&apos;in Yeri olarak, web sitemizin engelli bireyler dahil
              herkes tarafindan erisilebilir olmasini onemsiyoruz. Sitemiz WCAG
              2.1 AA standartlarina uygunluk hedefiyle tasarlanmis ve
              gelistirilmistir.
            </p>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              Erisilebilirlik Aracimiz
            </h2>
            <p>
              Sayfanin sol alt kosesinde yer alan erisilebilirlik butonu ile
              asagidaki ayarlari kisisel tercihlerinize gore
              yapilandirabilirsiniz. Tercihleriniz tarayicinizda otomatik olarak
              kaydedilir.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              1. Yazi Boyutu
            </h3>
            <p>
              Metinleri Normal, Buyuk, Daha Buyuk veya En Buyuk olarak
              ayarlayabilirsiniz. Bu ozellik tum sayfa metinlerini orantili
              sekilde buyutur.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              2. Kontrast
            </h3>
            <p>
              Varsayilan renk semasini degistirebilirsiniz: Yuksek Kontrast modu
              renk farklarini artirirken, Ters (Koyu) modu tum renkleri ters
              cevirir.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              3. Satir Araligi
            </h3>
            <p>
              Metin satirlari arasindaki boslugu Genis veya Daha Genis olarak
              ayarlayabilirsiniz. Bu, okuma guclugu yasayan kullanicilar icin
              metinleri daha rahat takip edilebilir kilar.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              4. Yazi Tipi
            </h3>
            <p>
              Varsayilan fontu, disleksi dostu ve yuksek okunabilirlige sahip
              sans-serif sistem fontuna degistirebilirsiniz.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              5. Link Vurgusu
            </h3>
            <p>
              Guclu modu etkinlestirildiginde tum baglantilar kalin ve alti
              cizili olarak gosterilir, boylece sayfa icerisindeki baglantilari
              kolayca ayirt edebilirsiniz.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              6. Animasyonlar
            </h3>
            <p>
              Tum sayfa animasyonlarini ve gecis efektlerini durdurabilirsiniz.
              Bu ozellik vestibular hassasiyet veya dikkat dagilmasi yasayan
              kullanicilar icin tasarlanmistir.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              7. Imlec
            </h3>
            <p>
              Fare imlecini standart boyutun iki katina buyuterek ekranda daha
              kolay takip edilmesini saglayabilirsiniz.
            </p>

            <h3 className="text-lg font-semibold text-bone mt-6 display-font">
              8. Gorseller
            </h3>
            <p>
              Tum gorselleri gizleyerek sayfayi sadece metin icerigine
              indirgebilirsiniz. Bu ozellik bant genisligi kisitlamasi olan veya
              metin odakli deneyim tercih eden kullanicilar icin uygundur.
            </p>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              Klavye Navigasyonu
            </h2>
            <p>
              Sitemiz tamamen klavye ile kullanilabilir sekilde tasarlanmistir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-bone">Tab</strong> tusu ile tum
                interaktif elemanlar arasinda gezinebilirsiniz.
              </li>
              <li>
                <strong className="text-bone">Shift + Tab</strong> ile geri
                yonde hareket edebilirsiniz.
              </li>
              <li>
                <strong className="text-bone">Enter / Space</strong> tuslari ile
                buton ve baglantilari etkinlestirebilirsiniz.
              </li>
              <li>
                <strong className="text-bone">Escape</strong> tusu ile acik
                diyaloglari ve panelleri kapatabilirsiniz.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              Icerige Atla Baglantisi
            </h2>
            <p>
              Her sayfanin basinda gizli bir &quot;Icerige atla&quot; baglantisi
              bulunur. Tab tusuna bastiginizda bu baglanti gorunur hale gelir ve
              dogrudan ana icerige atlamanizi saglar, boylece tekrarli navigasyon
              ogelerini gecebilirsiniz.
            </p>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              ARIA ve Semantik HTML
            </h2>
            <p>
              Tum sayfalarimiz semantik HTML etiketleri (header, nav, main,
              article, footer) ve uygun ARIA etiketleri ile
              yapilandirilmistir. Ekran okuyuculari ve diger yardimci
              teknolojiler sayfa icerigini dogru bir sekilde yorumlayabilir.
            </p>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              Fokus Halkasi
            </h2>
            <p>
              Klavye ile gezinirken odaklanan elemanlar belirgin bir turuncu fokus
              halkasi ile vurgulanir. Bu gorsel gosterge, o anda hangi elemanin
              secili oldugunu net bir sekilde gosterir.
            </p>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              WCAG 2.1 AA Uygunlugu
            </h2>
            <p>
              Sitemiz Web Icerik Erisilebilirlik Yonergeleri (WCAG) 2.1 AA
              seviyesine uygunluk hedeflemektedir. Bu kapsamda:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Yeterli renk kontrast oranlari saglanmistir.</li>
              <li>Tum gorseller aciklayici alt metin icerir.</li>
              <li>Formlar etiketli ve hata mesajlari anlasilirdir.</li>
              <li>Sayfa yapisi tutarli ve onceden tahmin edilebilirdir.</li>
              <li>Metin yeniden boyutlandirmada icerik kaybi yasamaz.</li>
            </ul>

            <h2 className="text-xl font-semibold text-bone mt-8 display-font">
              Geri Bildirim
            </h2>
            <p>
              Sitemizde erisilebilirlik ile ilgili herhangi bir sorunla
              karsilastiginizda veya iyilestirme oneriniz oldugunda bizimle
              iletisime gecmekten cekinmeyin:
            </p>
            <p>
              <a
                href="mailto:info@ibrahiminyeri.com"
                className="text-ember underline"
              >
                info@ibrahiminyeri.com
              </a>
            </p>
            <p>
              Tum geri bildirimler degerlendirilir ve sitemizin
              erisilebilirligini surekli iyilestirmek icin calisiyoruz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
