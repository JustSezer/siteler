"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import type { Post, Category } from "@/lib/db";

const POSTS_PER_PAGE = 9;

export default function BlogPageClient({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedCategory) {
      result = result.filter((p) => p.category_name === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          (p.tags && p.tags.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function handleCategoryClick(catName: string | null) {
    setSelectedCategory(catName);
    setCurrentPage(1);
  }

  function handleSearch(value: string) {
    setSearchQuery(value);
    setCurrentPage(1);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-900 to-stone-800 text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Blog</h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Mangal tarifleri, et seçim rehberleri, pişirme teknikleri ve
            Düzce&apos;nin yöresel lezzetleri hakkında yazılar.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Yazılarda ara..."
              className="w-full px-4 py-3 pl-11 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm backdrop-blur-sm"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-white border-b py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                  !selectedCategory
                    ? "bg-orange-800 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-orange-100 hover:text-orange-700"
                }`}
              >
                Tümü ({posts.length})
              </button>
              {categories.map((cat) => {
                const count = posts.filter((p) => p.category_name === cat.name).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.name)}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                      selectedCategory === cat.name
                        ? "bg-orange-800 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-orange-100 hover:text-orange-700"
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Results info */}
      {(searchQuery || selectedCategory) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <div className="flex items-center justify-between text-sm text-stone-500">
            <span>
              {filteredPosts.length} yazı bulundu
              {searchQuery && ` "${searchQuery}" için`}
              {selectedCategory && ` - ${selectedCategory}`}
            </span>
            {(searchQuery || selectedCategory) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setCurrentPage(1);
                }}
                className="text-orange-700 hover:text-orange-600 font-medium"
              >
                Filtreleri Temizle
              </button>
            )}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {paginatedPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden active:scale-[0.98] md:hover:-translate-y-1"
                >
                  {post.cover_image && (
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        quality={70}
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {post.category_name && (
                      <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                        {post.category_name}
                      </span>
                    )}
                    <h2 className="text-base sm:text-lg font-bold text-stone-800 mt-2.5 sm:mt-3 mb-1.5 sm:mb-2 group-hover:text-orange-700 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-stone-500 text-sm line-clamp-2 sm:line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs text-stone-400">
                      <span>
                        {new Date(post.published_at).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>{post.reading_time} dk okuma</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20 text-stone-400">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-lg">
                {searchQuery ? `"${searchQuery}" için sonuç bulunamadı.` : "Henüz blog yazısı eklenmemiş."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg text-sm font-medium border border-stone-300 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Önceki
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-orange-800 text-white"
                      : "border border-stone-300 hover:bg-stone-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg text-sm font-medium border border-stone-300 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Sonraki →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-amber-50 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">
            Lezzetlerimizi Yerinde Tatmak İster misiniz?
          </h2>
          <p className="text-stone-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Düzce&apos;de, D100 Karayolu üzerinde{" "}
            <a
              href="https://ibrahiminyeri.com"
              target="_blank"
              rel="dofollow"
              className="text-orange-700 font-semibold hover:text-orange-600"
            >
              İbrahim&apos;in Yeri Et Mangal
            </a>
            &apos;da sizi bekliyoruz.
          </p>
          <a
            href="https://ibrahiminyeri.com/menu"
            target="_blank"
            rel="dofollow"
            className="inline-block bg-orange-800 hover:bg-orange-900 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-colors text-sm sm:text-base"
          >
            Menüyü İnceleyin →
          </a>
        </div>
      </section>
    </>
  );
}
