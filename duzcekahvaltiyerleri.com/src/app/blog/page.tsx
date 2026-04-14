import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Düzce Kahvaltı Rehberi",
  description:
    "Bolu et kültürü, lokanta rehberleri, pişirme teknikleri ve yöresel lezzetler hakkında yazılar.",
  alternates: {
    canonical: "https://duzcekahvaltiyerleri.com/blog",
  },
  openGraph: {
    title: "Blog | Düzce Kahvaltı Rehberi",
    description:
      "Bolu et kültürü, lokanta rehberleri, pişirme teknikleri ve yöresel lezzetler hakkında yazılar.",
    type: "website",
    locale: "tr_TR",
    url: "https://duzcekahvaltiyerleri.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-background min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Page header */}
          <div className="mb-16 lg:mb-20">
            <div className="w-12 h-[2px] bg-primary mb-8" />
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-5">
              Blog
            </h1>
            <p className="text-foreground-muted text-lg max-w-lg">
              Bolu et kültürü, lokanta rehberleri ve yöresel lezzetler hakkında yazılar.
            </p>
          </div>

          {/* Featured post */}
          {posts.length > 0 && (
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group block mb-16"
            >
              <article className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${posts[0].image}')` }}
                  role="img"
                  aria-label={posts[0].imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Öne Çıkan
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/50 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {posts[0].category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex items-center gap-4 text-white/40 text-sm mb-4">
                    <span>
                      {new Date(posts[0].date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>&middot;</span>
                    <span>{posts[0].readingTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-secondary transition-colors duration-500 leading-tight max-w-2xl mb-4">
                    {posts[0].title}
                  </h2>
                  <p className="text-white/50 max-w-xl leading-relaxed hidden sm:block">
                    {posts[0].description}
                  </p>
                </div>
              </article>
            </Link>
          )}

          {/* Rest of posts - line list style */}
          <div className="divide-y divide-border">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-center"
              >
                {/* Image */}
                <div className="col-span-3 lg:col-span-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${post.image}')` }}
                      role="img"
                      aria-label={post.imageAlt}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-7 lg:col-span-8">
                  <div className="flex items-center gap-3 text-xs text-foreground-muted mb-2">
                    <span className="text-primary font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
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
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-1">
                    {post.title}
                  </h3>
                  <p className="text-foreground-muted text-sm line-clamp-1 hidden sm:block">
                    {post.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="col-span-2 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
