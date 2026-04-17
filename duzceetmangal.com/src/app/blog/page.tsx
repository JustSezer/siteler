import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Düzce Lezzet Defteri | Et, Köz ve Yol Notları",
  description:
    "D100'den Bakacak'a, meşe ormanından közün başına — Düzce'nin et ve mangal hikâyelerini yolcu defteri formatında okuyun.",
  keywords: [
    "düzce yemek rehberi",
    "düzce mangal blog",
    "bakacak köfte tarifi",
    "düzce lezzet",
    "d100 mangal molası",
  ],
  alternates: { canonical: "https://duzceetmangal.com/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <section className="pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
            <div className="rule-dashed pt-3 mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
                <span className="font-semibold">Duman Defteri</span>
                <span>{posts.length} Yazı</span>
              </div>
            </div>

            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-forest mb-5">
              Yol Notları
            </p>

            <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.02em] font-bold text-charcoal mb-4">
              Duman{" "}
              <span className="italic font-normal text-forest">Defteri</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed max-w-[600px] mb-12">
              Düzce&apos;nin et ve mangal hikâyelerini yolcu defteri formatında
              okuyun. Tarifler, mola rehberleri, mevsimsel öneriler.
            </p>

            {/* Yazı listesi */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 sm:p-8 rounded-lg bg-smoke-deep/60 border border-bark-soft/30 hover:border-forest/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="durak-number text-3xl text-bark-soft/40 group-hover:text-forest/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-charcoal-muted">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-lg sm:text-xl font-semibold text-charcoal group-hover:text-forest transition-colors mb-3">
                    {post.title}
                  </h2>

                  <p className="font-body text-sm text-charcoal-muted leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-copper group-hover:text-copper-glow transition-colors">
                    Oku &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
