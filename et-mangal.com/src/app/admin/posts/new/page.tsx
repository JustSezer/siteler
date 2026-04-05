import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import PostEditor from "@/components/admin/PostEditor";

export default async function NewPostPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-2xl font-bold mb-6">Yeni Yazı</h1>
      <PostEditor />
    </div>
  );
}
