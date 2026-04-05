"use client";

import { useState } from "react";

export default function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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
      const res = await fetch("/api/admin/password", {
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
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <h2 className="font-semibold text-stone-800 mb-4">Şifre Değiştir</h2>

      {error && (
        <div className="bg-amber-50 border border-amber-200 text-amber-900 text-sm rounded-lg p-3 mb-4">
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
          <label htmlFor="currentPassword" className="block text-sm font-medium text-stone-700 mb-1">
            Mevcut Şifre
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-stone-700 mb-1">
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
            className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
            placeholder="En az 8 karakter"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-stone-700 mb-1">
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
            className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-800 hover:bg-amber-900 disabled:bg-amber-400 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          {loading ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
        </button>
      </form>
    </div>
  );
}
