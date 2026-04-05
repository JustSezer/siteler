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
      {/* Hero — Light design, different from other sites */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-10 sm:py-16 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-amber-700 text-xs font-bold uppercase tracking-widest mb-3">☀️ Kahvaltı Dünyası</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-3 sm:mb-4">Blog</h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto mb-7">
            Kahvaltı tarifleri, yöresel ürünler, Düzce mekanları ve sabah sofrası kültürü üzerine yazılar.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Yazılarda ara..."
              className="w-full px-4 py-3 pl-11 rounded-2xl bg-white border border-amber-200 text-stone-700 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm shadow-sm"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400"
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
        <section className="bg-white border-b border-stone-100 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-colors ${
                  !selectedCategory
                    ? "bg-amber-700 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-700"
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
                    className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-colors ${
                      selectedCategory === cat.name
                        ? "bg-amber-700 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-700"
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
              {selectedCategory && ` — ${selectedCategory}`}
            </span>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
                setCurrentPage(1);
              }}
              className="text-amber-700 hover:text-amber-600 font-medium"
            >
              Filtreleri Temizle
            </button>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <section className="py-8 sm:py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {paginatedPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col active:scale-[0.98]"
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
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    {post.category_name && (
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full w-fit mb-2">
                        {post.category_name}
                      </span>
                    )}
                    <h2 className="text-base sm:text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2 flex-1">
                      {post.title}
                    </h2>
                    <p className="text-stone-400 text-sm line-clamp-2 sm:line-clamp-3 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-stone-300 border-t border-stone-50 pt-3 mt-auto">
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
              <p className="text-4xl mb-3">☕</p>
              <p className="text-lg">
                {searchQuery ? `"${searchQuery}" için sonuç bulunamadı.` : "Henüz blog yazısı eklenmemiş."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pb-8 sm:pb-12 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl text-sm font-medium border border-stone-200 hover:bg-amber-50 hover:border-amber-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← <span className="hidden sm:inline">Önceki</span>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  if (totalPages <= 7) return true;
                  if (page === 1 || page === totalPages) return true;
                  if (Math.abs(page - currentPage) <= 1) return true;
                  return false;
                })
                .reduce<(number | "...")[]>((acc, page, idx, arr) => {
                  if (idx > 0 && typeof arr[idx - 1] === "number" && (page as number) - (arr[idx - 1] as number) > 1) {
                    acc.push("...");
                  }
                  acc.push(page);
                  return acc;
                }, [])
                .map((item, idx) =>
                  item === "..." ? (
                    <span key={`ellipsis-${idx}`} className="w-8 text-center text-stone-400 text-sm">…</span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => setCurrentPage(item as number)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-sm font-medium transition-colors ${
                        currentPage === item
                          ? "bg-amber-700 text-white"
                          : "border border-stone-200 hover:bg-amber-50 hover:border-amber-200"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl text-sm font-medium border border-stone-200 hover:bg-amber-50 hover:border-amber-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Sonraki</span> →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Lezzetleri Yerinde Tatmak İster misiniz?
          </h2>
          <p className="text-amber-200 mb-5 sm:mb-6 text-sm sm:text-base">
            Düzce D100 Karayolu üzerinde{" "}
            <a
              href="https://ibrahiminyeri.com"
              target="_blank"
              rel="dofollow"
              className="text-white font-semibold hover:text-amber-100"
            >
              İbrahim&apos;in Yeri Et Mangal
            </a>
            &apos;da sizi bekliyoruz.
          </p>
          <a
            href="https://ibrahiminyeri.com/menu"
            target="_blank"
            rel="dofollow"
            className="inline-block bg-white text-amber-800 font-bold px-7 py-3.5 rounded-xl transition-all hover:bg-amber-50 text-sm sm:text-base"
          >
            Menüyü İnceleyin →
          </a>
        </div>
      </section>
    </>
  );
}
