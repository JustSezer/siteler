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

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="border-t-2 border-ink pt-10 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col border-t border-rule pt-6"
              >
                <div className="flex flex-wrap items-center gap-2 eyebrow mb-3">
                  <span>{p.category}</span>
                  <span className="w-4 h-px bg-ember" />
                  <span className="text-ink-mute">{p.readingTime}</span>
                </div>
                <h2 className="display-font text-xl lg:text-[26px] text-ink leading-[1.15] tracking-tight group-hover:text-ember transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.7] text-ink-soft italic font-body line-clamp-4">
                  {p.description}
                </p>
                <div className="mt-4 pt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-ink-mute font-sans">
                  <span>
                    {new Date(p.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1 text-ember font-semibold">
                    Oku
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
