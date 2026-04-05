"use client";

import { useState } from "react";
import { useCsrf } from "@/lib/useCsrf";

export default function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { csrfFetch } = useCsrf();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Yeni şifreler eşleşmiyor");
      return;
    }

    if (newPassword.length < 8) {
      setError("Yeni şifre en az 8 karakter olmalı");
      return;
    }

    setLoading(true);

    try {
      const res = await csrfFetch("/api/admin/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Şifre değiştirme başarısız");
        setLoading(false);
        return;
      }

      setSuccess("Şifre başarıyla değiştirildi");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setError("Bağlantı hatası");
    }
    setLoading(false);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
      <h2 className="font-semibold text-slate-800 mb-4">Şifre Değiştir</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3 mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-700 mb-1">
            Mevcut Şifre
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 mb-1">
            Yeni Şifre
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            placeholder="En az 8 karakter"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-slate-700 mb-1">
            Yeni Şifre Tekrar
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          {loading ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
        </button>
      </form>
    </div>
  );
}
