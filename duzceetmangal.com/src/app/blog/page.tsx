import { getAllPosts, getAllCategories } from "@/lib/db";
import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Düzce Et Mangal Tarifleri ve Mangal Rehberi",
  description:
    "Et tarifleri, mangal teknikleri, et seçim rehberi ve Düzce'nin yöresel lezzetleri hakkında en güncel blog yazıları.",
  alternates: {
    canonical: "https://duzceetmangal.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogPageClient posts={posts} categories={categories} />;
}
