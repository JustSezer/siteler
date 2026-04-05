"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Subscriber {
  id: number;
  email: string;
  subscribed_at: string;
  is_active: number;
}

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingEmail, setDeletingEmail] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { csrfFetch } = useCsrf();

  async function loadSubscribers() {
    try {
      const res = await fetch("/api/newsletter");
      if (!res.ok) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setSubscribers(data);
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubscribers();
  }, []);

  async function handleDelete(email: string) {
    if (!confirm(`"${email}" aboneliğini silmek istediğinizden emin misiniz?`)) return;
    setDeletingEmail(email);
    try {
      const res = await csrfFetch("/api/newsletter", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribers((prev) => prev.filter((s) => s.email !== email));
      } else {
        alert("Silme işlemi başarısız.");
      }
    } catch {
      alert("Bağlantı hatası.");
    } finally {
      setDeletingEmail(null);
    }
  }

  function exportCsv() {
    const rows = [
      ["E-posta", "Abone Tarihi"],
      ...filtered.map((s) => [
        s.email,
        new Date(s.subscribed_at).toLocaleDateString("tr-TR"),
      ]),
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `aboneler-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filtered = subscribers.filter((s) =>
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-stone-400 hover:text-amber-700 text-sm">
              ← Dashboard
            </Link>
            <span className="text-stone-300">|</span>
            <h1 className="text-xl font-bold text-amber-700">Aboneler</h1>
          </div>
          {filtered.length > 0 && (
            <button
              onClick={exportCsv}
              className="text-sm text-amber-700 border border-amber-300 hover:bg-amber-50 px-4 py-2 rounded-xl transition-colors font-medium"
            >
              ↓ CSV İndir
            </button>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="text-3xl font-bold text-amber-700">{subscribers.length}</div>
            <div className="text-stone-400 text-sm mt-1">Toplam Abone</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="text-3xl font-bold text-green-600">
              {subscribers.filter((s) => s.is_active).length}
            </div>
            <div className="text-stone-400 text-sm mt-1">Aktif</div>
          </div>
        </div>

        {/* Search */}
        {subscribers.length > 0 && (
          <div className="relative">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="E-posta ara..."
              className="w-full px-4 py-2.5 pl-9 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        )}

        {/* List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-700 rounded-full animate-spin" />
          </div>
        ) : subscribers.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-amber-100">
            <div className="text-4xl mb-4">📭</div>
            <p className="text-stone-400">Henüz abone yok.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-amber-100">
            <p className="text-stone-400 text-sm">"{search}" için sonuç bulunamadı.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-100 bg-amber-50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider">E-posta</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider hidden sm:table-cell">Tarih</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-amber-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm text-stone-700">{s.email}</td>
                    <td className="px-4 py-3 text-sm text-stone-400 hidden sm:table-cell">
                      {new Date(s.subscribed_at).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-3 text-right">
                      <button
                        onClick={() => handleDelete(s.email)}
                        disabled={deletingEmail === s.email}
                        className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-40"
                      >
                        {deletingEmail === s.email ? "..." : "Sil"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 border-t border-amber-50 bg-amber-50/50">
              <span className="text-xs text-stone-400">
                {filtered.length === subscribers.length
                  ? `${subscribers.length} abone`
                  : `${filtered.length} / ${subscribers.length} abone gösteriliyor`}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
