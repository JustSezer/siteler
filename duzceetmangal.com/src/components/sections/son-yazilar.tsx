import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export default function SonYazilar() {
  const posts = getAllPosts();

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-smoke-deep">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-forest mb-4">
              Durak 05 · Son Yazılar
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal">
              Duman Defteri
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-body text-sm text-copper hover:text-copper-glow transition-colors flex items-center gap-2 underline underline-offset-4 decoration-copper/40 hover:decoration-copper"
          >
            Tüm Yazılar
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-smoke rounded-lg border border-bark-soft/30 hover:border-forest/30 transition-all overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="durak-number text-2xl text-bark-soft/40 group-hover:text-forest/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-charcoal-muted">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-semibold text-charcoal group-hover:text-forest transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="font-body text-sm text-charcoal-muted leading-relaxed mb-4">
                  {post.description}
                </p>

                <span className="font-body text-sm text-copper group-hover:text-copper-glow transition-colors">
                  Devamını Oku &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
