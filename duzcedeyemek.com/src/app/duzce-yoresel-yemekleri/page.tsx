import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieBanner from "@/components/cookie-consent/cookie-banner";

export const metadata: Metadata = {
  title: "Duzce Yoresel Yemekleri — Geleneksel Lezzetler Rehberi",
  description:
    "Duzce'nin en meshur yoresel yemekleri: Mamursa, isli balik, hamsili borek, Melenguccegi tatlisi, cevizli karalahana ve daha fazlasi.",
  keywords: [
    "duzce yoresel yemekler",
    "duzce yemekleri",
    "duzce meshur yemekleri",
    "mamursa",
    "isli balik",
    "melenguccegi tatlisi",
  ],
  alternates: { canonical: "/duzce-yoresel-yemekleri" },
};

const dishes = [
  { name: "Mamursa", origin: "Duzce Yoresel", culture: "Yerel Turk", desc: "Misir unu, su ve yumurtadan hazirlanan Duzce'nin en bilinen yoresel yemegi.", image: "https://images.unsplash.com/photo-1724079908191-5f7fb8d34c6f?w=500&q=80", slug: "/blog/mamursa-nedir-tarifi", tag: "bg-tag-green text-tag-green-text" },
  { name: "Isli Balik", origin: "Akcakoca", culture: "Karadeniz", desc: "Tutsulenme yontemiyle hazirlanan, Akcakoca'ya ozgu essiz bir lezzet.", image: "https://images.unsplash.com/photo-1518602662926-215ebfb0ac61?w=500&q=80", slug: "/blog/isli-balik-akcakoca-tarifi", tag: "bg-tag-blue text-tag-blue-text" },
  { name: "Hamsili Borek", origin: "Karadeniz", culture: "Karadeniz", desc: "Un hamuru arasina taze hamsi ve sogan harci yerlestirilerek firina verilen geleneksel borek.", image: "https://images.unsplash.com/photo-1617806501736-fc7cab7c05bf?w=500&q=80", slug: "/blog/hamsili-borek-tarifi", tag: "bg-tag-yellow text-tag-yellow-text" },
  { name: "Melenguccegi Tatlisi", origin: "Osmanli Mirasi", culture: "Osmanli", desc: "700 yillik gecmise sahip, manda kaymagi, bal, ceviz ve findikla hazirlanan essiz tatli.", image: "https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?w=500&q=80", slug: "/blog/melenguccegi-tatlisi-tarifi", tag: "bg-tag-red text-tag-red-text" },
  { name: "Cevizli Karalahana", origin: "Karadeniz", culture: "Karadeniz", desc: "Lahana, ceviz, sarimsak, yogurt ve misir unundan yapilan abista ile sunulur.", image: "https://images.unsplash.com/photo-1685504513848-df0dd6893cec?w=500&q=80", slug: "/blog/cevizli-karalahana-tarifi", tag: "bg-tag-green text-tag-green-text" },
  { name: "Bosnak Boregi", origin: "Balkan Gocmen", culture: "Bosnak", desc: "Peynirli, patatesli cesitleriyle hazirlanan Bosnak toplulugundan miras lezzet.", image: "https://images.unsplash.com/photo-1540631899529-ee1b535414b9?w=500&q=80", slug: "/blog/bosnak-boregi-tarifi", tag: "bg-tag-purple text-tag-purple-text" },
  { name: "Mamalika", origin: "Tatar Mutfagi", culture: "Tatar", desc: "Misir unu ile yapilan sicak meze. Ozellikle kis aylarinda tercih edilir.", image: "https://images.unsplash.com/photo-1673694800551-b84c5e7d2933?w=500&q=80", slug: "/blog/mamalika-tarifi-duzce", tag: "bg-tag-yellow text-tag-yellow-text" },
  { name: "Tembel Karı Makarnası", origin: "Düzce Yöresel", culture: "Yerel Türk", desc: "Kaşıkla parçalanan hamur haşlendikten sonra keş, fındık veya cevizle servis edilir.", image: "https://images.unsplash.com/photo-1607358111458-0787f03afff3?w=500&q=80", slug: "/blog/tembel-kari-makarnasi-tarifi", tag: "bg-tag-green text-tag-green-text" },
  { name: "Bazlama", origin: "Köy Geleneği", culture: "Yerel Türk", desc: "Köy sacında tereyağı ile kızartılan fırınsız ekmek geleneği.", image: "https://images.unsplash.com/photo-1763951718802-39ebd3a4f302?w=500&q=80", slug: "/blog/duzce-bazlama-tarifi", tag: "bg-tag-red text-tag-red-text" },
  { name: "Sebzeli Kaygana", origin: "Karadeniz", culture: "Karadeniz", desc: "Yumurta, un ve mevsim sebzeleriyle hazirlanan kahvaltinin yildiz lezzeti.", image: "https://images.unsplash.com/photo-1647772809798-f34d785c981c?w=500&q=80", slug: "/blog/sebzeli-kaygana-tarifi", tag: "bg-tag-blue text-tag-blue-text" },
];

const cultures = [
  { name: "Cerkez", desc: "Tavuk yemekleri, soslar ve hamur isleri", color: "bg-tag-green" },
  { name: "Abaza", desc: "Et yemekleri ve baharatli soslar", color: "bg-tag-red" },
  { name: "Bosnak", desc: "Borekler ve hamur isi gelenegi", color: "bg-tag-yellow" },
  { name: "Laz", desc: "Misir unu ve balik yemekleri", color: "bg-tag-blue" },
  { name: "Gurcu", desc: "Et ve baharat agirlikli sofra", color: "bg-tag-purple" },
  { name: "Tatar", desc: "Misir unu mezeleri ve pilavlar", color: "bg-tag-green" },
];

export default function YoreselYemeklerPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <span className="inline-flex items-center gap-2 bg-white/10 text-secondary-light px-4 py-2 rounded-full text-xs font-bold mb-6">
              Pillar Rehber
            </span>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] mb-4">
              Duzce Yoresel <span className="text-secondary-light">Yemekleri</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Cerkez, Abaza, Bosnak, Laz ve Gurcu mutfaklarinin izlerini tasiyan zengin bir sofra mirasi.
            </p>
          </div>
        </section>

        {/* Kultur kartlari */}
        <section className="py-14 bg-background-alt">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <h2 className="font-display text-2xl font-black text-foreground mb-8 text-center">
              Bes Kultur, <span className="text-primary">Bir Sofra</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cultures.map((c) => (
                <div key={c.name} className={`${c.color} rounded-2xl p-5`}>
                  <h3 className="font-display text-lg font-bold mb-1">{c.name} Mutfagi</h3>
                  <p className="text-sm opacity-80">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yemekler masonry */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <h2 className="font-display text-2xl font-black text-foreground mb-4 text-center">
              Mutlaka Denenmesi Gereken <span className="text-primary">10 Lezzet</span>
            </h2>
            <p className="text-foreground-muted text-center mb-10 max-w-xl mx-auto">Her biri farkli bir kulturun sofraya biraktigi mirastir.</p>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {dishes.map((dish) => (
                <Link key={dish.name} href={dish.slug} className="group block break-inside-avoid">
                  <article className="bg-card rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${dish.image}')` }}
                        role="img"
                        aria-label={dish.name}
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold ${dish.tag}`}>{dish.culture}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{dish.origin}</p>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{dish.name}</h3>
                      <p className="text-foreground-muted text-sm leading-relaxed">{dish.desc}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-background-alt text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tarifleri Evinize Tasiyin</h2>
            <p className="text-foreground-muted mb-8">Adim adim tariflerimize goz atin.</p>
            <Link href="/tarifler" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl text-sm font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
              Tum Tarifler &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
