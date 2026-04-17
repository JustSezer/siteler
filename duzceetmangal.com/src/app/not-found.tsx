import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="text-center px-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-forest mb-4">
            Sayfa Bulunamadı
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-charcoal mb-4">
            404
          </h1>
          <p className="font-body text-lg text-charcoal-muted mb-8">
            Bu durak defterde yok. Belki yanlış yoldasın?
          </p>
          <Link href="/" className="btn-forest">
            Kapağa Dön
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
