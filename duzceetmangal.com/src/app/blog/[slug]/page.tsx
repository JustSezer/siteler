import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Düzce Et Mangal`,
    description: post.description,
    keywords: [post.keyword],
    alternates: {
      canonical: `https://duzceetmangal.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      locale: "tr_TR",
      siteName: "Düzce Et Mangal",
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={`list-${elements.length}`}
          className="list-disc pl-6 space-y-1 font-body text-base text-charcoal-soft leading-relaxed"
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={i}
          className="font-display text-xl sm:text-2xl font-semibold text-charcoal mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={i}
          className="font-display text-lg sm:text-xl font-semibold text-charcoal mt-8 mb-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.replace(/^- \*\*(.*?)\*\*(.*)/, "$1$2").replace("- ", ""));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={i}
          className="font-body text-base sm:text-lg text-charcoal-soft leading-[1.8]"
        >
          {line}
        </p>
      );
    }
    i++;
  }
  flushList();
  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
      />
      <Header />
      <main>
        <article className="pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
            {/* Üst bar */}
            <div className="rule-dashed pt-3 mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
                <Link href="/blog" className="hover:text-forest transition-colors">
                  &larr; Duman Defteri
                </Link>
                <span>{post.readTime} okuma</span>
              </div>
            </div>

            {/* Başlık */}
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-forest mb-5">
              Yol Notu ·{" "}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>

            <h1 className="font-display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] font-bold text-charcoal mb-8">
              {post.title}
            </h1>

            {/* İçerik */}
            <div className="space-y-4">{renderMarkdown(post.content)}</div>

            {/* Alt bar */}
            <div className="rule-dashed mt-12 pt-6 flex items-center justify-between">
              <Link
                href="/blog"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-forest hover:text-forest-deep transition-colors"
              >
                &larr; Tüm Yazılar
              </Link>
              <Link
                href="/bakacak-rehberi"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-copper hover:text-copper-glow transition-colors"
              >
                Bakacak Rehberi &rarr;
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
