import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/vaka-calismalari", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/fiyatlar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sss", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/hakkimizda", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/iletisim", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/cerez-politikasi", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/gizlilik", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/kullanim-sartlari", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const servicePaths = SERVICES.map((s) => ({
    path: `/hizmetler/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPaths, ...servicePaths].map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
