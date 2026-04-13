import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Arşiv | Bolu Mangal Rehberi",
  description:
    "Bolu mangal kültürü, et seçimi, pişirme teknikleri ve saha gözlemleri üzerine yazılar.",
  alternates: { canonical: "https://etmangalbolu.com/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="bg-paper pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-32 paper-grain">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          {/* Masthead */}
          <div className="rule-thick pt-3 mb-10 sm:mb-14">
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft">
              <span className="font-semibold">Bolu Mangal Rehberi</span>
              <span className="hidden sm:inline">Arşiv · Tüm Yazılar</span>
              <span>{posts.length} Yazı</span>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ember mb-5 sm:mb-6">
              Arşiv
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-[-0.025em] text-ink font-black mb-8">
              Yazılar &{" "}
              <em className="italic font-light text-ember">notlar.</em>
            </h1>
            <p className="font-body text-base sm:text-lg lg:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Saha gözlemleri, mikro tarifler ve mevsim notları. Geniş başlıklı
              değil, dar odaklı yazılar — okurun zamanına saygılı.
            </p>
          </div>

          {/* Yazı listesi */}
          <div className="space-y-0">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="grid md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 py-10 sm:py-12 lg:py-16 border-t border-rule"
              >
                <div className="md:col-span-1">
                  <p className="entry-number text-5xl sm:text-6xl text-ink leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <figure className="relative aspect-[4/3] overflow-hidden border-2 border-ink">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover grayscale-[35%] sepia-[8%] contrast-[1.05] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="md:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 font-mono text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em]">
                    <span className="text-ember font-semibold">
                      {post.category}
                    </span>
                    <span className="w-6 h-px bg-rule" />
                    <span className="text-ink-muted">
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="w-6 h-px bg-rule" />
                    <span className="text-ink-muted">{post.readingTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] text-ink font-bold leading-[1.1] mb-4 sm:mb-5 hover:text-ember transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="font-body text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-ink-soft max-w-[60ch] mb-5">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] editorial-link"
                  >
                    Yazıyı oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
