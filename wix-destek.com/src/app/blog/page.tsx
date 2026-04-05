import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts, getPostsByCategory, getCategories } from "@/lib/db";
import { BlogListJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import CategoryFilter from "@/components/CategoryFilter";
import PostCard from "@/components/PostCard";
import SearchBox from "@/components/SearchBox";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const metadata: Metadata = {
  title: "Wix Rehberleri ve İpuçları | Blog",
  description:
    "Wix ile ilgili kapsamlı rehberler, pratik ipuçları ve teknik destek yazıları. Wix başlangıç, tasarım, SEO, e-ticaret ve sorun çözme kategorilerinde Türkçe içerikler.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/blog`,
    siteName: "Wix Destek",
    title: "Wix Rehberleri ve İpuçları | Wix Destek Blog",
    description:
      "Wix başlangıç, tasarım, SEO, e-ticaret ve sorun çözme konularında kapsamlı Türkçe rehberler.",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Wix Destek Blog — Türkçe Wix Rehberleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Rehberleri ve İpuçları | Wix Destek Blog",
    description:
      "Wix başlangıç, tasarım, SEO, e-ticaret ve sorun çözme konularında kapsamlı Türkçe rehberler.",
    images: [`${SITE_URL}/og-image.svg`],
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const posts = kategori ? await getPostsByCategory(kategori) : await getAllPosts();
  const categories = await getCategories();

  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BlogListJsonLd posts={posts} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-6">
        <a href="/" className="hover:text-blue-600">Ana Sayfa</a>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">Blog</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">
        Wix Rehberleri — Türkçe İpuçları ve Destek Yazıları
      </h1>
      <p className="text-slate-500 mb-6 text-sm sm:text-base">
        Wix kullanımını kolaylaştıran kapsamlı rehberler, ipuçları ve teknik destek yazıları
      </p>

      <div className="max-w-md mb-6 sm:mb-8">
        <SearchBox />
      </div>

      {categories.length > 0 && (
        <Suspense>
          <CategoryFilter categories={categories} />
        </Suspense>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-16 sm:py-20">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-slate-500 text-base sm:text-lg">
            {kategori
              ? `"${kategori}" kategorisinde henüz yazı yok.`
              : "Henüz blog yazısı eklenmemiş."}
          </p>
          {kategori && (
            <a href="/blog" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
              Tüm yazıları göster
            </a>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs sm:text-sm mt-8 sm:mt-10">
            Toplam {posts.length} yazı
          </p>
        </>
      )}
    </div>
  );
}
