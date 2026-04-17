import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight">
        Aradığınız sayfa bulunamadı.
      </h1>
      <p className="mt-4 text-[var(--ink-soft)] text-lg">
        Bağlantı hatalı ya da sayfa kaldırılmış olabilir. Ana sayfaya dönüp
        aradığınız hizmeti bulabilir ya da doğrudan bize yazabilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">Ana sayfaya dön</Link>
        <Link href="/iletisim" className="btn-secondary">İletişime geç</Link>
      </div>
    </section>
  );
}
