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
        <h1 className="text-2xl font-bold">Ayarlar</h1>
        <a
          href="/admin"
          className="text-sm text-stone-500 hover:text-orange-600 font-bold"
        >
          &larr; Dashboard
        </a>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="font-bold text-stone-800 mb-4">Hesap Bilgileri</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-stone-500">Ad</span>
            <span className="font-bold">{user?.display_name || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Kullanıcı Adı</span>
            <span className="font-bold font-mono">{user?.username || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Kayıt Tarihi</span>
            <span className="font-bold">
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
