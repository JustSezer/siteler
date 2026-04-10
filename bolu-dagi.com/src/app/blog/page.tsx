import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Bolu Dagi Rehberi",
  description:
    "Bolu Dagi hakkında gezi rehberleri, rota onerileri, yöresel lezzetler ve doğal guzellikler uzerine yazilar.",
  alternates: {
    canonical: "https://bolu-dagi.com/blog",
  },
  openGraph: {
    title: "Blog | Bolu Dagi Rehberi",
    description:
      "Bolu Dagi hakkında gezi rehberleri, rota onerileri, yöresel lezzetler ve doğal guzellikler uzerine yazilar.",
    type: "website",
    locale: "tr_TR",
    url: "https://bolu-dagi.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bolu Dagi ve çevresindeki gezilecek yerler, aktiviteler ve yöresel
              lezzetler hakkında rehber yazilar
            </p>
            <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-primary" />
          </div>

          {/* Featured post (first) */}
          {posts.length > 0 && (
            <Link
              href={`/blog/${posts[0].slug}`}
              className="block mb-16 group"
            >
              <article className="grid md:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${posts[0].image}')` }}
                    role="img"
                    aria-label={posts[0].imageAlt}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                      One Cikan
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-base text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(posts[0].date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {posts[0].readingTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {posts[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Devamini Oku
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${post.image}')` }}
                      role="img"
                      aria-label={post.imageAlt}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-base text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                      Devamini Oku
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
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
