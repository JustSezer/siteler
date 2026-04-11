import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/section-heading";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-accent-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 lg:mb-20">
          <div>
            <SectionHeading
              title="Blog"
              subtitle="Lezzet notları ve rehber yazılar"
              align="left"
            />
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors border-b border-foreground-muted/30 hover:border-foreground pb-0.5"
          >
            Tüm Yazılar
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Magazine grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <article
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 ? "h-full min-h-[400px] lg:min-h-[500px]" : "h-[260px]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                  role="img"
                  aria-label={post.imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-xs">{post.readingTime}</span>
                  </div>
                  <h3
                    className={`font-serif font-bold text-white group-hover:text-secondary transition-colors duration-500 leading-snug ${
                      i === 0 ? "text-2xl lg:text-3xl" : "text-lg"
                    }`}
                  >
                    {post.title}
                  </h3>
                  {i === 0 && (
                    <p className="text-white/50 text-sm mt-2 line-clamp-2 max-w-md">
                      {post.description}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile all posts link */}
        <div className="sm:hidden text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors"
          >
            Tüm Yazıları Gör
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
