import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/urun/${product.slug}`} className="product-card group">
      <div className="thumb">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-contain p-3 group-hover:scale-105 transition duration-300"
          unoptimized
        />
        {!product.inStock && (
          <span className="absolute top-2 left-2 bg-[var(--accent)] text-white text-[10px] px-2 py-0.5 rounded">
            Tükendi
          </span>
        )}
      </div>
      <div className="text-center">
        <div className="text-[13px] font-medium leading-snug line-clamp-2 min-h-[34px]">
          {product.name}
        </div>
        <div className="mt-1.5 text-[13px]">
          {product.price ? (
            <span className="font-bold text-[var(--accent)]">{product.price}</span>
          ) : (
            <span className="text-[var(--muted-light)] italic">Fiyat Bilgisi İçin Arayın</span>
          )}
        </div>
      </div>
    </Link>
  );
}
