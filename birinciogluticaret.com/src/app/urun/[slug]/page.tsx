import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, Phone, Truck, Shield, Check, X } from "lucide-react";
import { products, getBySlug, getCategory, getByCategory } from "@/data/products";
import { site } from "@/data/site";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getBySlug(slug);
  return { title: p?.name ?? "Ürün", description: p?.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getBySlug(slug);
  if (!product) return notFound();
  const cat = getCategory(product.category);
  const related = getByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4);
  const waMsg = encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`);

  return (
    <div className="container-x py-10">
      <nav className="text-sm text-[var(--muted)] mb-6">
        <Link href="/" className="hover:text-[var(--brand)]">Anasayfa</Link>
        <span className="mx-2">/</span>
        <Link href="/magaza" className="hover:text-[var(--brand)]">Mağaza</Link>
        {cat && <>
          <span className="mx-2">/</span>
          <Link href={`/magaza/${cat.slug}`} className="hover:text-[var(--brand)]">{cat.title}</Link>
        </>}
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square bg-[var(--bg-soft)] rounded-xl overflow-hidden border border-[var(--border)]">
          <Image src={product.image} alt={product.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" unoptimized />
          {!product.inStock && (
            <span className="absolute top-4 left-4 bg-[var(--danger)] text-white px-3 py-1 rounded font-semibold">
              Tükendi
            </span>
          )}
        </div>

        <div>
          {product.brand && (
            <div className="text-sm uppercase tracking-wider text-[var(--muted)]">{product.brand}</div>
          )}
          <h1 className="text-3xl md:text-4xl font-black mt-1">{product.name}</h1>

          <div className="mt-5 flex items-center gap-4">
            {product.price ? (
              <div className="text-3xl font-black text-[var(--brand)]">{product.price}</div>
            ) : (
              <div className="text-lg font-semibold text-[var(--muted)]">Fiyat bilgisi için arayın</div>
            )}
            {product.inStock ? (
              <span className="flex items-center gap-1 text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                <Check size={14} /> Stokta
              </span>
            ) : (
              <span className="flex items-center gap-1 text-sm text-[var(--danger)] bg-red-50 px-2 py-1 rounded">
                <X size={14} /> Tükendi
              </span>
            )}
          </div>

          <p className="mt-5 text-[var(--muted)] leading-relaxed">{product.description}</p>

          {product.weight && (
            <div className="mt-5 inline-block border border-[var(--border)] px-3 py-1.5 rounded text-sm">
              <span className="text-[var(--muted)]">Ağırlık: </span>
              <span className="font-semibold">{product.weight}</span>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${site.whatsappNumber}?text=${waMsg}`} target="_blank" rel="noopener" className="btn btn-wa">
              <MessageCircle size={18} /> Whatsapp Sipariş
            </a>
            <a href={`tel:${site.phone1Tel}`} className="btn btn-outline">
              <Phone size={18} /> {site.phone1}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex gap-3 p-4 border border-[var(--border)] rounded-lg">
              <Truck className="text-[var(--brand)] shrink-0" size={22} />
              <div>
                <div className="font-semibold text-sm">Aynı Gün Kargo</div>
                <div className="text-xs text-[var(--muted)]">16:00'a kadar verilen siparişler</div>
              </div>
            </div>
            <div className="flex gap-3 p-4 border border-[var(--border)] rounded-lg">
              <Shield className="text-[var(--brand)] shrink-0" size={22} />
              <div>
                <div className="font-semibold text-sm">Güvenli Alışveriş</div>
                <div className="text-xs text-[var(--muted)]">3D Secure + 256bit SSL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 md:mt-20">
          <h2 className="text-xl md:text-2xl font-bold mb-5">Benzer Ürünler</h2>
          <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
