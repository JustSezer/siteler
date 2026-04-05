import { redirect, notFound } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { adminGetPostById } from "@/lib/db";
import PostEditor from "@/components/admin/PostEditor";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const { id } = await params;
  const postId = parseInt(id, 10);
  if (isNaN(postId)) notFound();

  const post = await adminGetPostById(postId);
  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-2xl font-bold mb-6">Yazıyı Düzenle</h1>
      <PostEditor post={post} />
    </div>
  );
}
