import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone, Clock, Check } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AnnounceBar from "@/components/layout/announce-bar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Franchise · Bayilik Fırsatı",
  description:
    "Bakacak Köfte karavan franchise başvurusu. Türkiye geneli bayilik, anahtar teslim paket, kompakt operasyon. Detaylar başvuru sonrası netleşir.",
  alternates: { canonical: "https://bakacakkofte.com/franchise" },
};

const perks = [
  "Standardize reçete ve merkezi tedarik desteği",
  "Karavan + köz ızgara sistemi + ekipman teslimi",
  "Operasyon kılavuzu ve yerinde eğitim",
  "Marka görsel kimlik paketi ve sosyal medya şablonları",
  "Bölge değerlendirmesi ve lokasyon önerisi",
  "Açılış destek paketi (ilk 30 gün)",
];

const faqs = [
  {
    q: "Yatırım aralığı ne kadar?",
    a: "Güncel rakamlar; karavan tipi, ekipman paketi ve bölgeye göre değişir. Başvurunuzu değerlendirdikten sonra kişiye özel bir paket sunuyoruz.",
  },
  {
    q: "Hangi bölgelerde franchise veriliyor?",
    a: "Türkiye geneli başvuruya açığız. Bölge önceliği; trafik yoğunluğu, yerel pazar büyüklüğü ve mevcut karavan dağılımına göre belirleniyor.",
  },
  {
    q: "İşletme tecrübesi şart mı?",
    a: "Zorunlu değil. Gastronomi veya operasyon geçmişi olanlar tercih edilse de, sıfırdan başlamak isteyen yatırımcılar için kapsamlı eğitim programımız var.",
  },
  {
    q: "Karavan mülkiyeti bayide mi, markada mı?",
    a: "Sözleşme modeline göre değişir. Hem satın alma hem kiralama/leasing seçenekleri masada; yatırım kapasitenize göre en uygun yol birlikte belirlenir.",
  },
];

export default function FranchisePage() {
  return (
    <>
      <AnnounceBar />
      <Header />
      <main id="main-content">
        <section className="paper-warm grain py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <p className="eyebrow mb-4">Franchise</p>
                <h1 className="display-font text-[42px] leading-[1.05] md:text-[64px] md:leading-[1.02] tracking-tight text-ink">
                  Sabit restoran değil.
                  <span className="block text-red">Hareketli iş modeli.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-ink-2 leading-relaxed max-w-2xl">
                  Karavan franchise; düşük kira maliyeti, hızlı açılış süresi ve esnek lokasyon
                  politikasıyla klasik restoran modeline alternatif sunar. Bakacak Köfte; bu modelin
                  standart prosedürünü ve marka desteğini sağlar.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a href="#basvuru" className="btn-red">
                    Başvuru Formu <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href={`tel:${site.phones[0].value}`} className="btn-outline">
                    <Phone className="w-4 h-4" /> {site.phones[0].display}
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden bg-red text-bone p-10 grain">
                  <div className="absolute top-6 right-6 badge-hot !bg-gold !text-ink flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> Yakında
                  </div>
                  <p className="eyebrow-gold mb-6 text-orange">Yatırım Özeti</p>
                  <dl className="space-y-5">
                    {[
                      ["Başlangıç yatırımı", "Coming soon"],
                      ["Aylık royalty", "Coming soon"],
                      ["Geri dönüş süresi", "Coming soon"],
                      ["Bölge politikası", "Türkiye geneli"],
                      ["Eğitim süresi", "Coming soon"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-6 border-b border-bone/15 pb-3">
                        <dt className="text-bone/70 text-sm">{k}</dt>
                        <dd className="display-font text-lg text-orange">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bone py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="eyebrow mb-4">Paket</p>
                <h2 className="display-font text-3xl md:text-4xl leading-tight text-ink">
                  Franchise paketinde
                  <span className="italic text-red block">neler var?</span>
                </h2>
                <p className="mt-5 text-ink-2 leading-relaxed">
                  Anahtar teslim yaklaşımla; ilk günden operasyona hazır bir işletme devrediyoruz.
                </p>
              </div>
              <div className="md:col-span-7">
                <ul className="space-y-3">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-4 p-5 card-food rounded-xl">
                      <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-red text-orange shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-ink">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <p className="eyebrow mb-4">SSS</p>
            <h2 className="display-font text-3xl md:text-4xl leading-tight text-ink mb-10">
              Sık sorulanlar
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group card-food rounded-xl px-6 py-5 cursor-pointer"
                >
                  <summary className="display-font text-lg font-semibold text-ink flex items-center justify-between gap-4 list-none">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-peach text-red group-open:rotate-45 transition-transform"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-ink-2 leading-relaxed opacity-85">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="basvuru" className="ink-panel py-20 md:py-28 grain">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="text-center mb-12">
              <p className="eyebrow-gold mb-4">Başvuru</p>
              <h2 className="display-font text-3xl md:text-5xl leading-tight text-bone">
                Başvurunuzu <span className="italic text-orange">değerlendirelim.</span>
              </h2>
              <p className="mt-5 text-bone/70 leading-relaxed">
                Aşağıdaki kanallardan iletişime geç; franchise ekibimiz 3 iş günü içinde senin için
                özel değerlendirme raporu hazırlıyor.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {site.phones.map((p) => (
                <a
                  key={p.value}
                  href={`tel:${p.value}`}
                  className="group flex items-center gap-4 bg-red-deep border border-bone/10 rounded-2xl p-6 hover:border-gold transition-colors"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-orange">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-bone/60">{p.label}</p>
                    <p className="display-font text-xl text-bone">{p.display}</p>
                  </div>
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 bg-red-deep border border-bone/10 rounded-2xl p-6 hover:border-gold transition-colors sm:col-span-2"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-orange">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-bone/60">Franchise E-posta</p>
                  <p className="display-font text-xl text-bone">{site.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-10 text-center">
              <Link href="/iletisim" className="btn-red">
                İletişim formu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
