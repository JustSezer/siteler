import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getByCategory, getCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const cat = getCategory(kategori);
  return { title: cat?.title ?? "Kategori" };
}

export default async function CategoryPage({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const cat = getCategory(kategori);
  if (!cat) return notFound();
  const items = getByCategory(kategori);

  return (
    <div className="container-x py-12">
      <nav className="text-sm text-[var(--muted)] mb-4">
        <Link href="/" className="hover:text-[var(--brand)]">Anasayfa</Link>
        <span className="mx-2">/</span>
        <Link href="/magaza" className="hover:text-[var(--brand)]">Mağaza</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--fg)]">{cat.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-black">{cat.title}</h1>
      <p className="text-[var(--muted)] mt-2 mb-8 max-w-2xl">{cat.description}</p>

      {items.length === 0 ? (
        <p className="text-[var(--muted)]">Bu kategoride ürün bulunamadı.</p>
      ) : (
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      )}
    </div>
  );
}
