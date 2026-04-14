import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 4);
  if (posts.length === 0) return null;
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-serif text-secondary text-3xl italic">§ 07</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Blog &amp; Rehber
          </p>
        </div>

        <div className="flex items-end justify-between mb-16">
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-black text-primary leading-[1] tracking-tight max-w-2xl">
            Kahvaltı <span className="italic text-secondary font-light">notları.</span>
          </h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-foreground text-sm font-medium underline underline-offset-4 decoration-secondary decoration-2 hover:text-secondary transition-colors"
          >
            Tüm yazılar
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="lg:col-span-7 group"
          >
            <article>
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${featured.image}')` }}
                  role="img"
                  aria-label={featured.imageAlt}
                />
                <div className="absolute top-4 left-4 bg-background px-3 py-1 text-[10px] uppercase tracking-wider text-primary font-medium">
                  {featured.category}
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </div>
              <p className="text-foreground-muted text-xs mb-2 uppercase tracking-wider">
                Öne Çıkan &middot; {featured.readingTime}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed line-clamp-2">
                {featured.description}
              </p>
            </article>
          </Link>

          {/* Rest */}
          <div className="lg:col-span-5 space-y-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="grid grid-cols-3 gap-5 items-start">
                  <div className="col-span-1 aspect-[4/3] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${post.image}')` }}
                      role="img"
                      aria-label={post.imageAlt}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-secondary text-[10px] uppercase tracking-wider font-medium mb-1.5">
                      {post.category} &middot; {post.readingTime}
                    </p>
                    <h3 className="font-serif text-base lg:text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-snug line-clamp-3">
                      {post.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:hidden text-center mt-12">
          <Link
            href="/blog"
            className="text-foreground text-sm font-medium underline underline-offset-4 decoration-secondary decoration-2"
          >
            Tüm yazılar &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
