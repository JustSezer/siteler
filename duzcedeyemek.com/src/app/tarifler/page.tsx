import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieBanner from "@/components/cookie-consent/cookie-banner";

export const metadata: Metadata = {
  title: "Düzce Yemek Tarifleri — Yöresel Tarifler Adım Adım",
  description:
    "Düzce'nin yöresel yemek tarifleri: Mamursa, hamsili börek, Boşnak böreği, Melengücceği tatlısı ve daha fazlası.",
  keywords: [
    "düzce tarifleri",
    "düzce yemek tarifleri",
    "mamursa tarifi",
    "hamsili börek tarifi",
    "melengücceği tatlısı tarifi",
    "boşnak böreği tarifi",
  ],
  alternates: { canonical: "/tarifler" },
};

const recipes = [
  { name: "Mamursa", category: "Ana Yemek", difficulty: "Kolay", time: "30 dk", desc: "Mısır unu, su ve yumurta ile saçta pişirilen geleneksel lezzet.", image: "https://www.kulturportali.gov.tr/contents/images/mamursa%20logolu.jpg?format=jpg&quality=50&width=1200", slug: "/blog/mamursa-nedir-tarifi" },
  { name: "Hamsili Börek", category: "Hamur İşi", difficulty: "Orta", time: "60 dk", desc: "Taze hamsi ve soğan harcıyla hazırlanan Karadeniz böreği.", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/hamsili_borek-32c96a1b-1ec5-441e-8686-df46768942d7.jpg", slug: "/blog/hamsili-borek-tarifi" },
  { name: "Boşnak Böreği", category: "Hamur İşi", difficulty: "Orta", time: "45 dk", desc: "Peynirli veya kıyma harcıyla hazırlanan Boşnak göçmen böreği.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Burek_en_plato.jpg", slug: "/blog/bosnak-boregi-tarifi" },
  { name: "Melengücceği Tatlısı", category: "Tatlı", difficulty: "Zor", time: "90 dk", desc: "700 yıllık Osmanlı mirası. Manda kaymağı, bal ve cevizle.", image: "https://image.hurimg.com/i/hurriyet/90/0x0/61bb38144e3fe01184d2f1fc.jpg", slug: "/blog/melenguccegi-tatlisi-tarifi" },
  { name: "Mamalika", category: "Meze", difficulty: "Kolay", time: "20 dk", desc: "Tatar mutfağından mısır unu mezesi.", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Polenta.jpg", slug: "/blog/mamalika-tarifi-duzce" },
  { name: "Tembel Karı Makarnası", category: "Ana Yemek", difficulty: "Kolay", time: "35 dk", desc: "Kaşıkla parçalanan hamur, keş veya cevizle servis.", image: "https://images.unsplash.com/photo-1607358111458-0787f03afff3?w=500&q=80", slug: "/blog/tembel-kari-makarnasi-tarifi" },
  { name: "Düzce Bazlaması", category: "Ekmek", difficulty: "Kolay", time: "25 dk", desc: "Köy sacında tereyağı ile kızartılan fırınsız ekmek.", image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bazlama.jpg", slug: "/blog/duzce-bazlama-tarifi" },
  { name: "Fındıklı Kurabiye", category: "Tatlı", difficulty: "Kolay", time: "40 dk", desc: "Düzce fındığı ile geleneksel kurabiye.", image: "https://images.unsplash.com/photo-1661416957190-7e3c0793e5b9?w=500&q=80", slug: "/blog/duzce-findigi-tarifler" },
];

const difficultyStyle: Record<string, string> = {
  Kolay: "bg-tag-green text-tag-green-text",
  Orta: "bg-tag-yellow text-tag-yellow-text",
  Zor: "bg-tag-red text-tag-red-text",
};

export default function TariflerPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-primary text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <span className="inline-flex items-center gap-2 bg-white/10 text-secondary-light px-4 py-2 rounded-full text-xs font-bold mb-6">
              Tarif Defteri
            </span>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] mb-4">
              Düzce <span className="text-secondary-light">Tarifleri</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Yöresel lezzetleri evinize taşıyın. Adım adım anlatımlar ve püf noktaları.
            </p>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recipes.map((recipe) => (
                <Link key={recipe.name} href={recipe.slug} className="group block">
                  <article className="bg-card rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${recipe.image}')` }}
                        role="img"
                        aria-label={recipe.name}
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-foreground">{recipe.category}</span>
                        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${difficultyStyle[recipe.difficulty] || ""}`}>{recipe.difficulty}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-foreground-muted">
                        {recipe.time}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{recipe.name}</h3>
                      <p className="text-foreground-muted text-sm leading-relaxed">{recipe.desc}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-background-alt text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Kendiniz Yapmak İstemez misiniz?</h2>
            <p className="text-foreground-muted mb-8">Düzce&apos;nin en iyi restoranlarını keşfedelim.</p>
            <Link href="/duzce-restoranlari" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl text-sm font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
              Restoran Rehberi &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
