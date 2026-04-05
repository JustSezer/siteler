import { MetadataRoute } from 'next';
import { getDb } from '@/lib/db';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wix-destek.com.tr';

  let blogPosts: Array<{ slug: string; updated_at: string }> = [];

  try {
    const db = getDb();
    blogPosts = db.prepare('SELECT slug, updated_at FROM blog_posts WHERE published = 1').all() as Array<{ slug: string; updated_at: string }>;
  } catch {
    // ignore
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
