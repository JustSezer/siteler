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
    if (selectedCategory) result = result.filter((p) => p.category_name === selectedCategory);
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
      {/* ── Page Header ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <Link href="/" className="hover:text-green-600">Ana Sayfa</Link>
                <span>/</span>
                <span className="text-gray-600">Blog</span>
              </nav>
              <h1 className="text-2xl sm:text-3xl font-bold text-green-950">Blog</h1>
              <p className="text-green-700 text-sm mt-1">
                {posts.length} yazı · Doğa, kültür ve keşif
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Yazılarda ara..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      {categories.length > 0 && (
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap" style={{ WebkitOverflowScrolling: "touch" }}>
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-colors border ${
                  !selectedCategory
                    ? "bg-green-900 text-white border-green-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700"
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
                    className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-colors border ${
                      selectedCategory === cat.name
                        ? "bg-green-900 text-white border-green-900"
                        : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700"
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

      {/* ── Filter info ── */}
      {(searchQuery || selectedCategory) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <div className="flex items-center justify-between text-sm text-gray-500 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
            <span>
              <strong className="text-green-800">{filteredPosts.length}</strong> yazı bulundu
              {searchQuery && <> — &ldquo;{searchQuery}&rdquo;</>}
              {selectedCategory && <> · {selectedCategory}</>}
            </span>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory(null); setCurrentPage(1); }}
              className="text-green-700 hover:text-green-600 font-medium flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              Temizle
            </button>
          </div>
        </div>
      )}

      {/* ── Posts Grid ── */}
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paginatedPosts.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-green-200 hover:shadow-lg transition-all duration-300 active:scale-[0.98] flex flex-col"
                >
                  {post.cover_image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-green-50 flex-shrink-0">
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading={i < 3 ? "eager" : "lazy"}
                        quality={70}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-emerald-50 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                    </div>
                  )}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    {post.category_name && (
                      <span className="text-xs font-semibold text-green-600 bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-full w-fit">
                        {post.category_name}
                      </span>
                    )}
                    <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-2.5 mb-1.5 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
                      <span>{new Date(post.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span className="text-green-500 font-medium">{post.reading_time} dk</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <p className="text-gray-400 text-lg">
                {searchQuery ? `"${searchQuery}" için sonuç bulunamadı.` : "Henüz blog yazısı eklenmemiş."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Önceki
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-11 h-11 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-green-900 text-white"
                      : "border border-gray-200 hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Sonraki →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-green-50 border-t border-green-100 py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-green-950 mb-3">
            Bolu Dağı&apos;nda Bir Mola Verin
          </h2>
          <p className="text-green-700 mb-5 text-sm sm:text-base">
            D100 üzerinde,{" "}
            <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow" className="text-green-600 font-semibold hover:text-green-500">
              İbrahim&apos;in Yeri Et Mangal
            </a>
            &apos;da meşe közü ateşinde pişen lezzetlerimizle sizi bekliyoruz.
          </p>
          <a
            href="https://ibrahiminyeri.com/menu"
            target="_blank"
            rel="dofollow"
            className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Menüyü İncele →
          </a>
        </div>
      </section>
    </>
  );
}
