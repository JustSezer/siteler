import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/mangal-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/et-cesitleri`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/tarifler`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${site.url}/gizlilik`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const posts = getAllSlugs().map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
