"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Category { id: number; name: string; slug: string; }

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");
  const { csrfFetch } = useCsrf();
  const router = useRouter();

  useEffect(() => { fetchCategories(); }, []);

  async function fetchCategories() {
    const res = await fetch("/api/categories");
    if (!res.ok) { router.push("/admin/login"); return; }
    setCategories(await res.json());
  }

  function generateSlug(text: string) {
    return text.toLowerCase()
      .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
      .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
    setName(""); setSlug(""); fetchCategories();
  }

  async function handleDelete(id: number, catName: string) {
    if (!confirm(`"${catName}" kategorisini silmek istediğinize emin misiniz?`)) return;
    await csrfFetch(`/api/categories/${id}`, { method: "DELETE" });
    fetchCategories();
  }

  const inputClass = "flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/admin" className="text-green-400 hover:text-green-300 text-sm">← Dashboard</Link>
          <h1 className="text-lg font-bold">Kategoriler</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-800 mb-4">Yeni Kategori</h2>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text" value={name}
              onChange={(e) => { setName(e.target.value); setSlug(generateSlug(e.target.value)); }}
              placeholder="Kategori adı" required className={inputClass}
            />
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug" className={inputClass} />
            <button type="submit" className="bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap">
              Ekle
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ad</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Slug</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800 text-sm">{cat.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{cat.slug}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleDelete(cat.id, cat.name)} className="text-sm text-red-500 hover:text-red-600 font-medium">Sil</button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr><td colSpan={3} className="px-6 py-12 text-center text-gray-400 text-sm">Henüz kategori yok.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
