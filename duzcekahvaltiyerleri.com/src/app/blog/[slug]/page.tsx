import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/db";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";
import { siteConfig } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | Düzce Kahvaltı Yerleri`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  try {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts()
    .filter((p) => p.id !== post.id && p.category_id === post.category_id)
    .slice(0, 3);

  const postUrl = `https://duzcekahvaltiyerleri.com/blog/${post.slug}`;

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <article className="py-6 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-stone-400 mb-6 sm:mb-8 overflow-x-auto">
            <Link href="/" className="hover:text-amber-700 whitespace-nowrap py-1">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-700 whitespace-nowrap py-1">Blog</Link>
            <span>/</span>
            <span className="text-stone-500 truncate">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-6 sm:mb-8">
            {post.category_name && (
              <span className="text-xs sm:text-sm font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                {post.category_name}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-stone-400">
              <span>
                {new Date(post.published_at).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.reading_time} dk okuma</span>
            </div>
          </header>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-lg relative aspect-video">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                quality={80}
              />
            </div>
          )}

          {/* Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags & Share */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-100">
            {post.tags && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {post.tags.split(",").map((tag) => (
                  <span
                    key={tag.trim()}
                    className="text-xs bg-amber-50 text-amber-700 px-2.5 sm:px-3 py-1 rounded-full border border-amber-100"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            )}
            <ShareButtons url={postUrl} title={post.title} />
          </div>

          {/* ibrahiminyeri.com CTA */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
            <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-1.5 sm:mb-2">
              Düzce&apos;nin Lezzetlerini Yerinde Tatmak İster misiniz?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-3 sm:mb-4">
              D100 Karayolu üzerinde{" "}
              <a
                href="https://ibrahiminyeri.com"
                target="_blank"
                rel="dofollow"
                className="text-amber-700 font-semibold hover:text-amber-600"
              >
                İbrahim&apos;in Yeri Et Mangal
              </a>
              &apos;da yörenin en özgün lezzetlerini keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="https://ibrahiminyeri.com/menu"
                target="_blank"
                rel="dofollow"
                className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center"
              >
                Menüyü İncele
              </a>
              <a
                href="https://ibrahiminyeri.com/yoresel-magza"
                target="_blank"
                rel="dofollow"
                className="border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center"
              >
                Yöresel Mağaza
              </a>
              <a
                href="https://ibrahiminyeri.com/nasil-gidilir"
                target="_blank"
                rel="dofollow"
                className="border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center"
              >
                Nasıl Gidilir?
              </a>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 font-medium py-2 text-sm"
            >
              ← Tüm Yazılara Dön
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-amber-50 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 sm:mb-8 text-center">
              İlgili Yazılar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-md transition-all overflow-hidden active:scale-[0.98]"
                >
                  {rp.cover_image && (
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={rp.cover_image}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        quality={60}
                      />
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors text-sm sm:text-base line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1 line-clamp-2">
                      {rp.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
