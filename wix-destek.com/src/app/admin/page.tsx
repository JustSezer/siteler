import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { adminGetAllPosts, adminGetStats, adminGetLeads } from "@/lib/db";
import AdminDashboard from "@/components/admin/Dashboard";

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const [posts, stats, leads] = await Promise.all([
    adminGetAllPosts(),
    adminGetStats(),
    adminGetLeads(),
  ]);

  return <AdminDashboard posts={posts} stats={stats} leads={leads} />;
}
