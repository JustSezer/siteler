import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/reveal";
import JsonLd from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const url = `${SITE.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            author: { "@type": "Organization", name: SITE.fullName },
            publisher: {
              "@type": "Organization",
              name: SITE.fullName,
              url: SITE.url,
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: post.keyword,
            inLanguage: "tr-TR",
          },
          ...(post.faq
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faq.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                },
              ]
            : []),
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana sayfa", item: SITE.url },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto max-w-3xl px-5 lg:px-6 py-14 lg:py-20">
          <nav aria-label="Ekmek kırıntısı" className="text-sm text-[var(--ink-mute)] mb-6">
            <Link href="/" className="hover:text-[var(--coral)]">Ana sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[var(--coral)]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink-soft)]">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge">{post.category}</span>
            <span className="text-xs font-semibold text-[var(--ink-mute)]">
              {post.readMinutes} dk okuma
            </span>
            <time
              dateTime={post.publishedAt}
              className="text-xs font-semibold text-[var(--ink-mute)]"
            >
              {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-[var(--ink-soft)] leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover image */}
      <div className="mx-auto max-w-5xl px-5 lg:px-6 -mt-6 lg:-mt-10">
        <div className="aspect-[16/9] relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-[var(--line)]">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-5 lg:px-6 py-16">
        <div className="space-y-5">
          {post.intro.map((p, i) => (
            <p key={i} className="text-lg text-[var(--ink-soft)] leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 space-y-12">
          {post.sections.map((sec, si) => (
            <Reveal key={si} as="section">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs && (
                <div className="mt-5 space-y-4">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="text-[var(--ink-soft)] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {sec.list && (
                <ul className="mt-5 space-y-3">
                  {sec.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--ink-soft)]">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)]"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.steps && (
                <ol className="mt-5 space-y-5">
                  {sec.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg text-white font-bold text-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--coral), var(--gold))",
                        }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-[var(--indigo-900)]">{step.title}</h3>
                        <p className="mt-1 text-[var(--ink-soft)] leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {sec.callout && (
                <aside
                  className="mt-6 rounded-xl p-5 border-l-4"
                  style={{
                    borderColor: "var(--coral)",
                    background: "var(--coral-soft)",
                    color: "var(--coral-active)",
                  }}
                >
                  <p className="text-sm font-medium leading-relaxed">{sec.callout}</p>
                </aside>
              )}
            </Reveal>
          ))}
        </div>

        {post.faq && post.faq.length > 0 && (
          <Reveal as="section" className="mt-16">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
              Sık sorulanlar
            </h2>
            <div className="mt-6 space-y-3">
              {post.faq.map((f, i) => (
                <details key={i} className="card group cursor-pointer" name="post-faq">
                  <summary className="font-semibold text-[var(--indigo-900)] list-none flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span
                      className="flex-shrink-0 transition-transform duration-300 group-open:rotate-45 text-[var(--coral)]"
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        )}

        {/* Inline CTA */}
        <Reveal as="section" className="mt-16">
          <div className="card-glow p-8 lg:p-10 text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
              {post.ctaTitle}
            </h2>
            <p className="mt-4 text-[var(--ink-soft)] max-w-xl mx-auto">
              {post.ctaBody}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link href="/iletisim" className="btn-primary btn-primary-glow">
                Ücretsiz ön görüşme
              </Link>
              <a
                href={SITE.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp'tan yazın
              </a>
            </div>
          </div>
        </Reveal>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[var(--surface)] border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-5 lg:px-6 py-16">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight mb-8">
              Devamı niteliğinde
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80} as="article">
                  <Link href={`/blog/${p.slug}`} className="card group h-full flex flex-col p-0 overflow-hidden">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 badge" style={{ background: "rgba(255,255,255,0.95)" }}>
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[var(--indigo-900)] group-hover:text-[var(--coral)] transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                        {p.excerpt}
                      </p>
                      <p className="mt-5 text-xs font-semibold text-[var(--ink-mute)]">
                        {p.readMinutes} dk okuma
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
