import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Bolu Dağı Kahvaltı",
  description:
    "Bolu Dağı sabah sofrası, kuymak, köy tereyağı, kestane balı ve yöresel kahvaltı kültürü hakkında yazılar.",
  alternates: {
    canonical: "https://boludagikahvalti.com/blog",
  },
  openGraph: {
    title: "Blog | Bolu Dağı Kahvaltı",
    description:
      "Bolu Dağı sabah sofrası ve yöresel kahvaltı kültürü hakkında yazılar.",
    type: "website",
    locale: "tr_TR",
    url: "https://boludagikahvalti.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-24 bg-background min-h-screen">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">Sabah Notları</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
              Blog
            </h1>
            <p className="text-foreground-muted text-[16px] leading-[1.8] max-w-lg">
              Bolu Dağı sabah sofrası, yöresel tarifler ve kahvaltı kültürü
              üzerine yazılar.
            </p>
          </div>

          {/* Öne çıkan yazı */}
          {posts.length > 0 && (
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group block mb-14 border-t border-charcoal/80 pt-8"
            >
              <article>
                <div className="flex items-center gap-3 text-[11px] text-foreground-muted mb-4">
                  <span className="eyebrow">Öne Çıkan</span>
                  <span>&middot;</span>
                  <span>{posts[0].category}</span>
                  <span>&middot;</span>
                  <span>{posts[0].readingTime}</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span className="hidden sm:inline">
                    {new Date(posts[0].date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground group-hover:text-forest transition-colors leading-tight mb-3 max-w-2xl">
                  {posts[0].title}
                </h2>
                <p className="text-foreground-muted text-[15px] leading-[1.8] max-w-xl mb-4">
                  {posts[0].description}
                </p>
                <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] font-semibold text-forest group-hover:text-ochre transition-colors">
                  Devamını oku <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </article>
            </Link>
          )}

          {/* Diğer yazılar */}
          <div className="border-t border-charcoal/80">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="py-7 sm:py-8 border-b border-border grid sm:grid-cols-[1fr_auto] gap-4 items-center">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-foreground-muted mb-2">
                      <span className="eyebrow">{post.category}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                      <span className="hidden sm:inline">&middot;</span>
                      <span className="hidden sm:inline">
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl text-foreground group-hover:text-forest transition-colors leading-snug mb-1">
                      {post.title}
                    </h3>
                    <p className="text-foreground-muted text-sm line-clamp-1 hidden sm:block">
                      {post.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-forest transition-colors shrink-0" />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
