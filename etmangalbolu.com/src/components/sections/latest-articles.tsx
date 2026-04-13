import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function LatestArticles() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="yazilar" className="py-16 sm:py-20 lg:py-32 bg-paper-dark border-y border-rule">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Bölüm başlığı */}
        <div className="rule-thick pt-3 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between flex-wrap gap-2 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
              Bölüm 05 · Arşiv
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
              Sayfa 05
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6 mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight text-ink font-black max-w-2xl">
            Bu sayının{" "}
            <em className="italic font-light">yazıları.</em>
          </h2>
          <Link
            href="/blog"
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] editorial-link"
          >
            Tüm arşiv →
          </Link>
        </div>

        {/* 3 makale — magazine kart stili */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {posts.map((post, i) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <figure className="relative aspect-[4/5] mb-5 sm:mb-6 overflow-hidden border-2 border-ink">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover grayscale-[35%] sepia-[8%] contrast-[1.05] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-paper px-2 sm:px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink border border-ink">
                    {String(i + 1).padStart(2, "0")} · {post.category}
                  </div>
                </figure>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
                    <span>
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="w-4 h-px bg-rule" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] text-ink font-bold leading-[1.15] group-hover:text-ember transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-[14px] sm:text-[15px] leading-relaxed text-ink-soft">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
