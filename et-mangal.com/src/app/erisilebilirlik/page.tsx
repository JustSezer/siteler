import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Erisilebilirlik",
  description:
    "Et & Mangal erisilebirlik bildirimi. WCAG 2.1 AA standartlarina uygunluk, erisilebirlik ozellikleri ve iletisim bilgileri.",
  alternates: { canonical: `${site.url}/erisilebilirlik` },
};

export default function ErisilebilirlikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <article className="max-w-[780px] mx-auto px-5 sm:px-8 prose-paper">
          <p className="eyebrow mb-4">Erisilebilirlik Bildirimi</p>
          <h1 className="display-font text-[clamp(2.25rem,8vw,3.75rem)] leading-[1] sm:leading-[0.95] text-ink mb-8 sm:mb-10 tracking-tight">
            Erisilebilirlik{" "}
            <span className="italic text-ember font-normal">Taahhudumuz</span>
          </h1>

          <p>
            Et &amp; Mangal olarak, web sitemizin engelli bireyler dahil herkes
            tarafindan erisilebiir olmasini onemsiyoruz. Sitemiz WCAG 2.1 AA
            standartlarina uygunluk hedefiyle tasarlanmis ve gelistirilmistir.
          </p>

          <h2>Erisilebilirlik Aracimiz</h2>
          <p>
            Sayfanin sol alt kosesinde yer alan erisilebilirlik butonu ile
            asagidaki ayarlari kisisel tercihlerinize gore yapilandirabilirsiniz.
            Tercihleriniz tarayicinizda otomatik olarak kaydedilir.
          </p>

          <h3>1. Yazi Boyutu</h3>
          <p>
            Metinleri Normal, Buyuk, Daha Buyuk veya En Buyuk olarak
            ayarlayabilirsiniz. Bu ozellik tum sayfa metinlerini orantili sekilde
            buyutur.
          </p>

          <h3>2. Kontrast</h3>
          <p>
            Varsayilan renk semasini degistirebilirsiniz: Yuksek Kontrast modu
            renk farklarini artirirken, Ters (Koyu) modu tum renkleri ters
            cevirir.
          </p>

          <h3>3. Satir Araligi</h3>
          <p>
            Metin satirlari arasindaki boslugu Genis veya Daha Genis olarak
            ayarlayabilirsiniz. Bu, okuma guclugu yasayan kullanicilar icin
            metinleri daha rahat takip edilebilir kilar.
          </p>

          <h3>4. Yazi Tipi</h3>
          <p>
            Varsayilan fontu, disleksi dostu ve yuksek okunabilirlige sahip
            sans-serif sistem fontuna degistirebilirsiniz.
          </p>

          <h3>5. Link Vurgusu</h3>
          <p>
            Guclu modu etkinlestirildiginde tum baglantilar kalin ve altı cizili
            olarak gosterilir, boylece sayfa icerisindeki baglantilari kolayca
            ayirt edebilirsiniz.
          </p>

          <h3>6. Animasyonlar</h3>
          <p>
            Tum sayfa animasyonlarini ve gecis efektlerini durdurabilirsiniz.
            Bu ozellik vestibular hassasiyet veya dikkat dagilmasi yasayan
            kullanicilar icin tasarlanmistir.
          </p>

          <h3>7. Imlec</h3>
          <p>
            Fare imlecini standart boyutun iki katina buyuterek ekranda daha
            kolay takip edilmesini saglayabilirsiniz.
          </p>

          <h3>8. Gorseller</h3>
          <p>
            Tum gorselleri gizleyerek sayfayi sadece metin icerigine
            indirgebilirsiniz. Bu ozellik bant genisligi kisitlamasi olan veya
            metin odakli deneyim tercih eden kullanicilar icin uygundur.
          </p>

          <h2>Klavye Navigasyonu</h2>
          <p>
            Sitemiz tamamen klavye ile kullanilabiilir sekilde tasarlanmistir:
          </p>
          <ul>
            <li>
              <strong>Tab</strong> tusu ile tum interaktif elemanlar arasinda
              gezinebilirsiniz.
            </li>
            <li>
              <strong>Shift + Tab</strong> ile geri yonde hareket edebilirsiniz.
            </li>
            <li>
              <strong>Enter / Space</strong> tuslari ile buton ve baglantilari
              etkinlestirebilirsiniz.
            </li>
            <li>
              <strong>Escape</strong> tusu ile acik diyaloglari ve panelleri
              kapatabilirsiniz.
            </li>
          </ul>

          <h2>Icerge Atla Baglantisi</h2>
          <p>
            Her sayfanin basinda gizli bir &quot;Icerge atla&quot; baglantisi
            bulunur. Tab tusuna bastiginizda bu baglanti gorunur hale gelir ve
            dogrudan ana icerge atlamamizi saglar, boylece tekrarli navigasyon
            ogenlerini gecebilirsiniz.
          </p>

          <h2>ARIA ve Semantik HTML</h2>
          <p>
            Tum sayfalarimiz semantik HTML etiketleri (header, nav, main,
            article, footer) ve uygun ARIA etiketleri ile yapilandirilmistir.
            Ekran okuyuculari ve diger yardimci teknolojiler sayfa icerigini
            dogru bir sekilde yorumlayabilir.
          </p>

          <h2>Fokus Halkasi</h2>
          <p>
            Klavye ile gezinirken odaklanan elemanlar belirgin bir turuncu fokus
            halkasi ile vurgulanir. Bu gorsel gosterge, o anda hangi elemanin
            secili oldugunu net bir sekilde gosterir.
          </p>

          <h2>WCAG 2.1 AA Uygunlugu</h2>
          <p>
            Sitemiz Web Icerik Erisilebilirlik Yonergeleri (WCAG) 2.1 AA
            seviyesine uygunluk hedeflemektedir. Bu kapsamda:
          </p>
          <ul>
            <li>Yeterli renk kontrast oranlari saglanmistir.</li>
            <li>Tum gorseller aciklayici alt metin icerir.</li>
            <li>Formlar etiketli ve hata mesajlari anlasilirdir.</li>
            <li>Sayfa yapisi tutarli ve onceden tahmin edilebilirdir.</li>
            <li>Metin yeniden boyutlandirmada icerik kaybi yasamaz.</li>
          </ul>

          <h2>Geri Bildirim</h2>
          <p>
            Sitemizde erisilebilirlik ile ilgili herhangi bir sorunla
            karsilastiginizda veya iyilestirme oneriniz oldugunda bizimle
            iletisime gecmekten cekinmeyin:
          </p>
          <p>
            <a href="mailto:info@et-mangal.com">info@et-mangal.com</a>
          </p>
          <p>
            Tum geri bildirimler degerlendirilir ve sitemizin erisilebilirligini
            surekli iyilestirmek icin calisiyoruz.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
