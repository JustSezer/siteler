import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import {
  getAllPosts,
  getAllSlugs,
  getPostBySlug,
  markdownToHtml,
} from "@/lib/blog";
import { site } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${site.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      locale: "tr_TR",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${slug}`,
  };

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 paper-grain">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 eyebrow text-ink-mute hover:text-ember transition-colors mb-8 sm:mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Tüm Yazılar
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 eyebrow mb-5 sm:mb-6">
            <span>{post.category}</span>
            <span className="w-6 h-px bg-ember" />
            <span className="text-ink-mute">
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="w-6 h-px bg-ember" />
            <span className="text-ink-mute">{post.readingTime}</span>
            <span className="w-6 h-px bg-ember" />
            <span className="text-ink-mute">{post.author}</span>
          </div>

          <h1 className="display-font text-[clamp(2rem,7vw,3.75rem)] lg:text-6xl text-ink leading-[1.02] sm:leading-[0.98] tracking-tight mb-6 sm:mb-8">
            {post.title}
          </h1>

          <p className="text-[17px] sm:text-[20px] leading-[1.65] sm:leading-[1.6] text-ink italic border-l-2 border-ember pl-4 sm:pl-5 mb-10 sm:mb-14 font-display">
            {post.description}
          </p>

          <article
            className="prose-paper"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {post.tags.length > 0 && (
            <div className="mt-14 pt-8 border-t border-rule">
              <p className="eyebrow mb-4">Etiketler</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-ink/20 px-3 py-1.5 font-sans"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 text-center display-font italic text-2xl text-ink-mute">
            —∎—
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 sm:mt-24 border-t border-rule pt-14 sm:pt-20 bg-paper-warm">
            <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
              <p className="eyebrow mb-8">Devamı Var</p>
              <div className="grid gap-10 sm:grid-cols-2">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block border-t border-rule pt-6"
                  >
                    <div className="flex items-center gap-3 mb-4 eyebrow">
                      <span>{rp.category}</span>
                      <span className="w-4 h-px bg-ember" />
                      <span className="text-ink-mute">{rp.readingTime}</span>
                    </div>
                    <h3 className="display-font text-2xl text-ink leading-tight tracking-tight group-hover:text-ember transition-colors">
                      {rp.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <JsonLd data={articleSchema} />
    </>
  );
}
