import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { sanitizeHtml } from "@/lib/sanitize";
import { calculateReadingTime } from "@/lib/utils";
import Breadcrumb from "@/components/Breadcrumb";
import ShareButtons from "@/components/ShareButtons";
import PostCard from "@/components/PostCard";
import CommentSection from "@/components/CommentSection";
import ImageGallery from "@/components/ImageGallery";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: { category: true, tags: true },
  });

  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.map((t) => t.name),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      url: `https://etmangalbolu.com/blog/${post.slug}`,
      images: post.coverImage ? [post.coverImage] : [],
    },
    alternates: {
      canonical: `https://etmangalbolu.com/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: { category: true, tags: true },
  });

  if (!post) notFound();

  const safeContent = sanitizeHtml(post.content);
  const readingTime = calculateReadingTime(post.content);
  const images: string[] = post.images ? JSON.parse(post.images) : [];
  const recipeData = post.recipeData ? JSON.parse(post.recipeData) : null;

  const relatedPosts = await prisma.post.findMany({
    where: {
      published: true,
      categoryId: post.categoryId,
      id: { not: post.id },
    },
    include: { category: true, tags: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  // Build JSON-LD
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": recipeData ? "Recipe" : "BlogPosting",
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    image: post.coverImage || undefined,
    author: {
      "@type": "Person",
      name: "İbrahim İnyeri",
      url: "https://ibrahiminyeri.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Et Mangal Bolu",
      url: "https://etmangalbolu.com",
    },
    mainEntityOfPage: `https://etmangalbolu.com/blog/${post.slug}`,
  };

  if (recipeData) {
    jsonLd.recipeCategory = recipeData.category || "Et Mangal";
    jsonLd.recipeCuisine = "Türk Mutfağı";
    jsonLd.prepTime = recipeData.prepTime || undefined;
    jsonLd.cookTime = recipeData.cookTime || undefined;
    jsonLd.totalTime = recipeData.totalTime || undefined;
    jsonLd.recipeYield = recipeData.servings || undefined;
    jsonLd.recipeIngredient = recipeData.ingredients || undefined;
    jsonLd.recipeInstructions = recipeData.steps?.map(
      (step: string, i: number) => ({
        "@type": "HowToStep",
        position: i + 1,
        text: step,
      })
    );
    if (recipeData.calories) {
      jsonLd.nutrition = {
        "@type": "NutritionInformation",
        calories: recipeData.calories,
      };
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.category.name, href: `/kategoriler/${post.category.slug}` },
            { label: post.title },
          ]}
        />

        <div className="mb-6 sm:mb-8">
          <Link
            href={`/kategoriler/${post.category.slug}`}
            className="text-sm font-semibold text-primary uppercase tracking-wider hover:underline"
          >
            {post.category.name}
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-stone-500">
            <time>{new Date(post.createdAt).toLocaleDateString("tr-TR")}</time>
            <span>|</span>
            <span>{readingTime} dk okuma</span>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://ibrahiminyeri.com"
              target="_blank"
              rel="dofollow"
              className="text-primary hover:underline"
            >
              İbrahim İnyeri
            </a>
          </div>
        </div>

        {/* Recipe info card */}
        {recipeData && (
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="font-bold text-lg mb-3 text-secondary">Tarif Bilgileri</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {recipeData.prepTime && (
                <div>
                  <span className="text-stone-500 block">Hazırlık</span>
                  <span className="font-semibold">{recipeData.prepTime}</span>
                </div>
              )}
              {recipeData.cookTime && (
                <div>
                  <span className="text-stone-500 block">Pişirme</span>
                  <span className="font-semibold">{recipeData.cookTime}</span>
                </div>
              )}
              {recipeData.servings && (
                <div>
                  <span className="text-stone-500 block">Porsiyon</span>
                  <span className="font-semibold">{recipeData.servings}</span>
                </div>
              )}
              {recipeData.difficulty && (
                <div>
                  <span className="text-stone-500 block">Zorluk</span>
                  <span className="font-semibold">{recipeData.difficulty}</span>
                </div>
              )}
            </div>
            {recipeData.ingredients && (
              <div className="mt-4">
                <h3 className="font-semibold text-sm mb-2">Malzemeler:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-stone-700">
                  {recipeData.ingredients.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {post.coverImage && (
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6 sm:mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: safeContent }}
        />

        {/* Image Gallery */}
        <ImageGallery images={images} alt={post.title} />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        <ShareButtons title={post.title} slug={post.slug} />

        {/* Backlink CTA */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Bu yazıyı beğendiniz mi?
          </h3>
          <p className="mb-4 opacity-90 text-sm sm:text-base">
            Daha fazla et, mangal ve gastronomi içerikleri için İbrahim
            İnyeri&apos;ni ziyaret edin.
          </p>
          <a
            href="https://ibrahiminyeri.com"
            target="_blank"
            rel="dofollow"
            className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-stone-100 transition-colors"
          >
            ibrahiminyeri.com &rarr;
          </a>
        </div>

        {/* Comments */}
        <CommentSection postId={post.id} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-10 sm:mt-14">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">İlgili Yazılar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <PostCard key={rp.id} post={rp} />
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/blog"
            className="text-primary font-semibold hover:underline min-h-[44px] flex items-center"
          >
            &larr; Tüm Yazılar
          </Link>
          <a
            href="https://ibrahiminyeri.com/blog"
            target="_blank"
            rel="dofollow"
            className="text-primary font-semibold hover:underline min-h-[44px] flex items-center"
          >
            Daha Fazla Yazı &rarr;
          </a>
        </div>
      </article>
    </>
  );
}
