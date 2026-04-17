import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = { title: "Mağaza — Tüm Ürünler" };

export default function ShopPage() {
  return (
    <div className="container-x py-12">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Mağaza</h1>
      <p className="text-[var(--muted)] mb-8">
        Tüm ürünlerimizi kategori kategori inceleyin, Whatsapp üzerinden sipariş verin.
      </p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mb-14">
        {categories.map((c) => (
          <Link key={c.slug} href={`/magaza/${c.slug}`} className="card relative aspect-[4/3] group">
            <Image src={c.image} alt={c.title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-bold text-lg">{c.title}</div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-5">Tüm Ürünler ({products.length})</h2>
      <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
