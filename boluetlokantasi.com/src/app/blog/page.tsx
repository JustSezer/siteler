import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts, getPostsByCategory, getCategories } from "@/lib/db";
import { BlogListJsonLd } from "@/components/JsonLd";
import CategoryFilter from "@/components/CategoryFilter";
import PostCard from "@/components/PostCard";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Blog | Bolu Yemekleri ve Lokanta Rehberi",
  description:
    "Bolu yemekleri, et kültürü ve lokanta tavsiyeleri hakkında en güncel yazılar.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://boluetlokantasi.com"}/blog`,
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

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Blog</h1>
      <p className="text-stone-600 mb-6 text-sm sm:text-base">
        Bolu yemekleri, et kültürü ve lokanta tavsiyeleri hakkında yazılarımız
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
              className="text-amber-800 hover:text-amber-900 font-medium mt-4 inline-block"
            >
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
          <p className="text-center text-stone-400 text-xs sm:text-sm mt-8 sm:mt-10">
            Toplam {posts.length} yazı
          </p>
        </>
      )}
    </div>
  );
}
