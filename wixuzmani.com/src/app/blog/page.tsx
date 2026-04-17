import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Wix Stratejisi, Performans ve CRO Rehberleri",
  description:
    "Wix üzerinde kurumsal strateji, performans, SEO ve dönüşüm optimizasyonu üzerine uzun soluklu rehberler.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 lg:px-6 py-16">
      <span className="eyebrow mb-3 block">Blog</span>
      <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
        Wix&apos;te stratejik düşünme.
      </h1>
      <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
        Uzun soluklu rehberler: performans, SEO, CRO ve kurumsal kullanım üzerine
        saha deneyimimizden notlar.
      </p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BLOG_POSTS.map((p) => (
          <article key={p.slug} className="card group flex flex-col">
            <span className="badge w-fit mb-4">{p.category}</span>
            <h2 className="text-lg font-bold text-[var(--emerald-900)] leading-snug">
              {p.title}
            </h2>
            <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
              {p.excerpt}
            </p>
            <p className="mt-5 text-xs font-semibold text-[var(--ink-mute)]">
              {p.readMinutes} dk okuma
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 card text-center py-10">
        <h2 className="text-xl font-bold text-[var(--emerald-900)]">
          Yazıların tamamı yakında yayında
        </h2>
        <p className="mt-2 text-[var(--ink-soft)]">
          Rehberleri ajans çalışmasına özel uyarlıyoruz. İlk üç cornerstone içerik
          önümüzdeki haftalarda açılacak.
        </p>
        <Link href="/iletisim" className="btn-primary mt-5">
          Strateji görüşmesi planlayın
        </Link>
      </div>
    </section>
  );
}
