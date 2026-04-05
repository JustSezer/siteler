import { redirect } from "next/navigation";
import { isAuthenticated, getSessionUser } from "@/lib/auth";
import { getUserByUsername } from "@/lib/db";
import PasswordChange from "@/components/admin/PasswordChange";

export default async function SettingsPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const username = await getSessionUser();
  const user = username ? await getUserByUsername(username) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Ayarlar</h1>
        <a href="/admin" className="text-sm text-slate-500 hover:text-blue-600 font-medium">
          &larr; Dashboard
        </a>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
        <h2 className="font-semibold text-slate-800 mb-4">Hesap Bilgileri</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Ad</span>
            <span className="font-medium text-slate-900">{user?.display_name || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Kullanıcı Adı</span>
            <span className="font-medium font-mono text-slate-900">{user?.username || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Kayıt Tarihi</span>
            <span className="font-medium text-slate-900">
              {user?.created_at
                ? new Date(user.created_at).toLocaleDateString("tr-TR")
                : "-"}
            </span>
          </div>
        </div>
      </div>

      <PasswordChange />
    </div>
  );
}
