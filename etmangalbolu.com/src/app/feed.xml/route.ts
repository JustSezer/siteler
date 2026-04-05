import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { category: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  const baseUrl = "https://etmangalbolu.com";

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category.name}</category>
      <pubDate>${post.createdAt.toUTCString()}</pubDate>
      <author>İbrahim İnyeri</author>
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Et Mangal Bolu</title>
    <link>${baseUrl}</link>
    <description>Bolu'da et mangal kültürü, tarifler ve restoran önerileri</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>info@ibrahiminyeri.com (İbrahim İnyeri)</managingEditor>
    <webMaster>info@ibrahiminyeri.com (İbrahim İnyeri)</webMaster>${items}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
