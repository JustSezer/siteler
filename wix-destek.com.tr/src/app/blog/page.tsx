import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import JsonLd from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Wix Blog — Rehberler, İpuçları ve Çözümler",
  description:
    "Wix kullanıcıları için Türkçe rehberler, sorun çözümleri ve SEO ipuçları. Günlük işinizi kolaylaştıracak pratik bilgiler.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Wix Blog — Rehberler ve Çözümler",
    description:
      "Wix kullanıcıları için Türkçe rehberler, sorun çözümleri ve SEO ipuçları.",
    type: "website",
    url: `${SITE.url}/blog`,
  },
};

const CATEGORIES = ["Tümü", "Rehber", "Karşılaştırma", "Çözüm", "SEO", "E-Ticaret"] as const;

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Wix Destek Blog",
          url: `${SITE.url}/blog`,
          inLanguage: "tr-TR",
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            url: `${SITE.url}/blog/${p.slug}`,
            datePublished: p.publishedAt,
            author: { "@type": "Organization", name: SITE.fullName },
          })),
        }}
      />

      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-5 lg:px-6 py-16 lg:py-20">
          <span className="eyebrow mb-3 block animate-fade-in">Wix Blog</span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight animate-fade-up">
            Wix için Türkçe <span className="text-gradient">rehberler, çözümler.</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl animate-fade-up delay-150">
            SEO'dan domain bağlamaya, iyzico'dan hız optimizasyonuna — işinize yarayacak
            pratik yazılar. Her rehber bir Wix kullanıcısının gerçek sorusundan çıktı.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6 py-16">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Kategoriler">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border border-[var(--line)] bg-white text-[var(--ink-soft)]"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured post */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="card-glow block group p-8 lg:p-10 mb-10"
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <Image
                  src={featured.cover}
                  alt={featured.coverAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--indigo-950)]/50 via-transparent to-transparent" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge">{featured.category}</span>
                  <span className="text-xs font-semibold text-[var(--ink-mute)]">
                    Öne çıkan · {featured.readMinutes} dk okuma
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)] group-hover:text-[var(--coral)] transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[var(--ink-soft)] leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--coral)]">
                  Yazıyı oku
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} as="article">
              <Link href={`/blog/${p.slug}`} className="card group h-full flex flex-col p-0 overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--indigo-950)]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 badge" style={{ background: "rgba(255,255,255,0.95)" }}>
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[var(--indigo-900)] group-hover:text-[var(--coral)] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <p className="mt-5 text-xs font-semibold text-[var(--ink-mute)]">
                    {p.readMinutes} dk okuma
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6 pb-20">
        <Reveal>
          <div className="card-glow text-center py-12 px-6">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
              Kendi <span className="text-gradient">sorununuz için</span> bir rehber mi arıyorsunuz?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)] max-w-xl mx-auto">
              Henüz burada olmayan bir konuda takılıyorsanız bize yazın — yanıt verirken rehberleştiriyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary mt-6 inline-flex">
              Sorunuzu gönderin
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
