import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Günlük — Köz Başından Yazılar",
  description:
    "Et, mangal, ateş ve köz üstüne denemeler, saha notları ve usta söyleşileri.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <header className="max-w-[1100px] mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
          <p className="eyebrow mb-4 sm:mb-5">Günlük</p>
          <h1 className="display-font text-[clamp(2.5rem,9vw,4.75rem)] lg:text-[76px] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
            Köz başından{" "}
            <span className="italic text-ember font-normal">yazılar</span>
          </h1>
          <p className="mt-6 sm:mt-7 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] sm:leading-[1.78] text-ink-soft italic font-body">
            Rehberin dışına düşen saha notları, denemeler ve usta söyleşileri.
            Okuma sırası yoktur — ilgini çekenden başla.
          </p>
        </header>

        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 border-t-2 border-ink">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block py-8 sm:py-10 border-b border-rule"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 eyebrow mb-3 sm:mb-4">
                    <span>{p.category}</span>
                    <span className="w-6 h-px bg-ember" />
                    <span className="text-ink-mute">{p.readingTime}</span>
                    <span className="w-6 h-px bg-ember" />
                    <span className="text-ink-mute">
                      {new Date(p.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="display-font text-2xl sm:text-3xl lg:text-4xl text-ink leading-[1.1] sm:leading-[1.05] tracking-tight group-hover:text-ember transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-[1.75] text-ink-soft italic font-body">
                    {p.description}
                  </p>
                </div>
                <span className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ember font-sans font-semibold pt-4">
                  Oku
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
