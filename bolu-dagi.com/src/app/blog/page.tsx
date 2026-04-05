import { getAllPosts, getAllCategories } from "@/lib/db";
import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Bolu Dağı — Doğa, Kültür ve Keşif Yazıları",
  description:
    "Bolu Dağı yürüyüş rotaları, mevsimsel rehberler, gastronomi ve fotoğrafçılık hakkında blog yazıları.",
  alternates: {
    canonical: "https://bolu-dagi.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  return <BlogPageClient posts={posts} categories={categories} />;
}
