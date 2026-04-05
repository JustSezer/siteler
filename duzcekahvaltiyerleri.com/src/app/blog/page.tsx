import { getAllPosts, getAllCategories } from "@/lib/db";
import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Düzce Kahvaltı Tarifleri ve Mekan Rehberi",
  description:
    "Kahvaltı tarifleri, yöresel ürünler, Düzce mekanları ve sabah sofrası kültürü hakkında en güncel blog yazıları.",
  alternates: {
    canonical: "https://duzcekahvaltiyerleri.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogPageClient posts={posts} categories={categories} />;
}
