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
            ? "bg-amber-800 text-white"
            : "bg-stone-200 text-stone-700 hover:bg-stone-300 active:bg-stone-400"
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
              ? "bg-amber-800 text-white"
              : "bg-stone-200 text-stone-700 hover:bg-stone-300 active:bg-stone-400"
          }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
