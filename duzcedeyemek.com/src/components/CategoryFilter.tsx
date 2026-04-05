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
    <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
      <Link
        href="/blog"
        className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 ${
          !activeCategory
            ? "bg-orange-600 text-white"
            : "bg-stone-100 text-stone-700 hover:bg-stone-200 active:bg-stone-300"
        }`}
      >
        Tümü
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/blog?kategori=${encodeURIComponent(cat)}`}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 ${
            activeCategory === cat
              ? "bg-orange-600 text-white"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200 active:bg-stone-300"
          }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
