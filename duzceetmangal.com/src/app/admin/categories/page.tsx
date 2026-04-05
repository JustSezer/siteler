"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");
  const { csrfFetch } = useCsrf();
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const res = await fetch("/api/categories");
    if (!res.ok) {
      router.push("/admin/login");
      return;
    }
    setCategories(await res.json());
  }

  function generateSlug(text: string) {
    return text
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await csrfFetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, slug: slug || generateSlug(name) }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Ekleme başarısız.");
      return;
    }

    setName("");
    setSlug("");
    fetchCategories();
  }

  async function handleDelete(id: number, name: string) {
    if (!confirm(`"${name}" kategorisini silmek istediğinize emin misiniz?\n\nBu kategoriye ait yazılar kategorisiz kalacaktır.`)) return;
    await csrfFetch(`/api/categories/${id}`, { method: "DELETE" });
    fetchCategories();
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <header className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/admin" className="text-amber-400 hover:text-amber-300">
            ← Dashboard
          </Link>
          <h1 className="text-xl font-bold">Kategoriler</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Add Category */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-stone-800 mb-4">Yeni Kategori</h2>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSlug(generateSlug(e.target.value));
              }}
              placeholder="Kategori adı"
              required
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="slug"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-orange-800 hover:bg-orange-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ekle
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Category List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-stone-500">Ad</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-stone-500">Slug</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-stone-500">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-medium text-stone-800">{cat.name}</td>
                  <td className="px-6 py-4 text-sm text-stone-400">{cat.slug}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(cat.id, cat.name)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-stone-400">
                    Henüz kategori yok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
