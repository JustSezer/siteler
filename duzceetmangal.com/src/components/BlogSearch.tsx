"use client";

import { useState } from "react";

export default function BlogSearch({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Yazılarda ara..."
        className="w-full px-4 py-2.5 pl-10 rounded-full border border-stone-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
      />
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
}
