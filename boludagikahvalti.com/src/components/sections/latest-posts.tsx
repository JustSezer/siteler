import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 4);
  if (posts.length === 0) return null;
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="relative py-20 sm:py-24 lg:py-32 bg-bone" aria-labelledby="blog-heading">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="eyebrow">Blog</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex items-end justify-between gap-6 flex-wrap mb-12 sm:mb-16">
          <h2 id="blog-heading" className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-charcoal tracking-tight">
            Sıcak <span className="italic text-forest">notlar.</span>
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-semibold text-forest hover:text-charcoal transition-colors"
          >
            Tüm yazılar <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Öne çıkan yazı — görselsiz */}
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="border-t border-charcoal/80 pt-8">
              <p className="eyebrow mb-4">
                Öne Çıkan · {featured.readingTime}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-tight mb-4 group-hover:text-forest transition-colors">
                {featured.title}
              </h3>
              <p className="text-[15px] leading-[1.8] text-ash line-clamp-3 max-w-2xl">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-2 mt-6 text-[12px] uppercase tracking-[0.14em] font-semibold text-forest group-hover:text-ochre transition-colors">
                Devamını oku <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </article>
          </Link>

          {/* Diğer yazılar — görselsiz */}
          <div className="space-y-0 border-t border-charcoal/80">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="py-6 border-b border-border">
                  <p className="eyebrow mb-2">
                    {post.category} · {post.readingTime}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl leading-snug text-charcoal group-hover:text-forest transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
