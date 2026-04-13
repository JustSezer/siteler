import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-paper px-6">
      <div className="max-w-xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember mb-6">
          Hata · 404
        </p>
        <h1 className="font-display text-6xl lg:text-8xl text-ink font-black mb-6 leading-none">
          Sayfa <em className="italic font-light">bulunamadı.</em>
        </h1>
        <p className="font-body text-lg text-ink-soft mb-10">
          Aradığınız sayfa bu sayıda yer almıyor. Belki bir sonraki sayıda.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border-2 border-ink text-ink px-6 py-3 hover:bg-ink hover:text-paper transition-all font-mono text-[11px] uppercase tracking-[0.15em]"
        >
          ← Manşete Dön
        </Link>
      </div>
    </main>
  );
}
