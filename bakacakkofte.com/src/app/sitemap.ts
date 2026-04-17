import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/franchise", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/karavan", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cerez-politikasi", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/gizlilik", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/kullanim-sartlari", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/erisilebilirlik", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
