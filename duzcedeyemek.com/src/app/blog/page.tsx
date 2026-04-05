import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts, getPostsByCategory, getCategories } from "@/lib/db";
import { BlogListJsonLd } from "@/components/JsonLd";
import CategoryFilter from "@/components/CategoryFilter";
import PostCard from "@/components/PostCard";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Blog | Düzce Yemek Kültürü ve Mekan Rehberi",
  description:
    "Düzce yemek kültürü, geleneksel tarifler, mekan rehberi ve lezzet yazıları.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com"}/blog`,
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BlogListJsonLd posts={posts} />

      <div className="flex items-center gap-3 mb-2">
        <span className="w-1 h-7 bg-orange-500 rounded-full inline-block"></span>
        <h1 className="text-3xl sm:text-4xl font-bold">Blog</h1>
      </div>
      <p className="text-stone-500 mb-6 text-sm sm:text-base ml-4">
        Düzce yemek kültürü, tarifler ve mekan rehberi
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
          <p className="text-stone-500 text-base sm:text-lg">
            {kategori
              ? `"${kategori}" kategorisinde yazı bulunamadı.`
              : "Henüz blog yazısı eklenmemiş."}
          </p>
          {kategori && (
            <a
              href="/blog"
              className="text-orange-600 hover:text-orange-700 font-bold mt-4 inline-block"
            >
              Tüm yazıları göster
            </a>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <p className="text-center text-stone-400 text-xs sm:text-sm mt-8 sm:mt-10">
            Toplam {posts.length} yazı
          </p>
        </>
      )}
    </div>
  );
}
