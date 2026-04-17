import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <div className="text-7xl font-black text-[var(--brand)]">404</div>
      <h1 className="text-2xl font-bold mt-4">Sayfa bulunamadı</h1>
      <p className="text-[var(--muted)] mt-2">Aradığınız sayfa kaldırılmış veya hiç var olmamış olabilir.</p>
      <Link href="/" className="btn btn-primary mt-6">Anasayfa</Link>
    </div>
  );
}
