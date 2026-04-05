import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-stone-600 mb-8">
        Aradığınız sayfa bulunamadı.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Ana Sayfa
        </Link>
        <Link
          href="/blog"
          className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
