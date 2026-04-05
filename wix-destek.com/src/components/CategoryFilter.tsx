"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoryFilter({
  categories,
}: {
  categories: string[];
}) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("kategori");

  return (
    <div className="flex gap-2 mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
      <Link
        href="/blog"
        className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
          !activeCategory
            ? "bg-blue-600 text-white border border-blue-500"
            : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-300 active:bg-blue-50"
        }`}
      >
        Tümü
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/blog?kategori=${encodeURIComponent(cat)}`}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
            activeCategory === cat
              ? "bg-blue-600 text-white border border-blue-500"
              : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-300 active:bg-blue-50"
          }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
