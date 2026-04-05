import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/db";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | Bolu Dağı`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://bolu-dagi.com/blog/${post.slug}`,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
    },
    alternates: {
      canonical: `https://bolu-dagi.com/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts()
    .filter((p) => p.id !== post.id && p.category_id === post.category_id)
    .slice(0, 3);

  const postUrl = `https://bolu-dagi.com/blog/${post.slug}`;

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
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 sm:mb-8 overflow-x-auto">
            <Link href="/" className="hover:text-green-600 whitespace-nowrap">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-green-600 whitespace-nowrap">Blog</Link>
            <span>/</span>
            <span className="text-gray-600 truncate">{post.title}</span>
          </nav>

          {/* Category */}
          {post.category_name && (
            <span className="inline-block text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-4">
              {post.category_name}
            </span>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-950 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" /></svg>
              {new Date(post.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {post.reading_time} dk okuma
            </span>
          </div>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-md relative aspect-video">
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
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags & Share */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.split(",").map((tag) => (
                  <span key={tag.trim()} className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            )}
            <ShareButtons url={postUrl} title={post.title} />
          </div>

          {/* CTA */}
          <div className="mt-8 p-5 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-green-900 mb-1">
                  Bolu Dağı&apos;nda Bir Mola Verin
                </h3>
                <p className="text-green-700 text-sm mb-4">
                  D100 üzerinde{" "}
                  <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow" className="font-semibold hover:text-green-600">
                    İbrahim&apos;in Yeri Et Mangal
                  </a>
                  &apos;da meşe közünde pişen eşsiz lezzetleri keşfedin.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow" className="bg-green-900 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center">
                    Menüyü İncele
                  </a>
                  <a href="https://ibrahiminyeri.com/nasil-gidilir" target="_blank" rel="dofollow" className="border border-green-300 text-green-700 hover:bg-green-900 hover:text-white hover:border-green-900 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center">
                    Nasıl Gidilir?
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 font-medium text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              Tüm Yazılara Dön
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-green-50 border-t border-green-100 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-green-950 mb-6">İlgili Yazılar</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white border border-green-100 rounded-2xl overflow-hidden hover:shadow-md transition-all active:scale-[0.98]"
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
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors text-sm line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1.5 line-clamp-2">{rp.excerpt}</p>
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
