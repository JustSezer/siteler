import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/llms.txt", "/llms-full.txt"],
        disallow: ["/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/llms.txt"],
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/llms.txt"],
        disallow: ["/"],
      },
    ],
    sitemap: "https://duzcedeyemek.com/sitemap.xml",
  };
}
