import type { Metadata } from "next";
import Link from "next/link";
import { searchPosts } from "@/lib/db";
import PostCard from "@/components/PostCard";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Arama Sonuçları",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const posts = query.length >= 2 ? await searchPosts(query) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-amber-800">Ana Sayfa</Link>
        <span className="mx-1.5">/</span>
        <Link href="/blog" className="hover:text-amber-800">Blog</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">Arama</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Arama</h1>

      <div className="max-w-lg mb-8">
        <SearchBox initialQuery={query} />
      </div>

      {query && (
        <p className="text-stone-500 text-sm mb-6">
          &quot;{query}&quot; için {posts.length} sonuç bulundu
        </p>
      )}

      {!query && (
        <p className="text-stone-500">Aramak istediğiniz kelimeyi yazın.</p>
      )}

      {query && posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-stone-500 text-lg mb-2">Sonuç bulunamadı</p>
          <p className="text-stone-400 text-sm">Farklı anahtar kelimeler deneyin.</p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
