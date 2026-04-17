import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  type Entry = {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
    lastModified?: Date;
  };

  const staticPaths: Entry[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" },
    { path: "/fiyatlar", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sss", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.5, changeFrequency: "yearly" },
    { path: "/iletisim", priority: 0.9, changeFrequency: "yearly" },
    { path: "/cerez-politikasi", priority: 0.2, changeFrequency: "yearly" },
    { path: "/gizlilik", priority: 0.2, changeFrequency: "yearly" },
    { path: "/kullanim-sartlari", priority: 0.2, changeFrequency: "yearly" },
  ];

  const servicePaths: Entry[] = SERVICES.map((s) => ({
    path: `/hizmetler/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const blogPaths: Entry[] = BLOG_POSTS.map((b) => ({
    path: `/blog/${b.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
    lastModified: new Date(b.updatedAt ?? b.publishedAt),
  }));

  return [...staticPaths, ...servicePaths, ...blogPaths].map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: p.lastModified ?? now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
