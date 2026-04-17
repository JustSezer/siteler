import Link from "next/link";
import Image from "next/image";
import { Truck, MessageCircle, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 15);
  const thirdRow = products.slice(15, 20);
  const fourthRow = products.slice(20);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-hero)]">
        <div className="container-x grid lg:grid-cols-2 items-center gap-6 lg:gap-8 py-10 md:py-14 lg:py-16">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--brand)] leading-[1.1]">
              En uygun fiyat en üst kalite prensibimizdir
            </h1>
            <div className="mt-6 md:mt-7">
              <Link href="/magaza" className="btn btn-primary">
                Mağaza
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[5/4] order-first lg:order-none">
            <Image
              src={site.hero}
              alt=""
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Ürünler - 1. satır */}
      <section className="container-x py-10">
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {firstRow.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Ürünler - 2. satır (2 satırlık grid) */}
      <section className="container-x pb-10">
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {secondRow.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Aynı Gün Kargo bant */}
      <section className="bg-[var(--info)] text-white py-6">
        <div className="container-x text-center">
          <p className="text-lg md:text-xl font-semibold">
            Tüm Siparişleriniz Aynı Gün Kargoda! Türkiye'nin Her İli İçin Saat 16:00'a Kadar Verilen Emirler Aynı Gün Sevk Edilir.
          </p>
        </div>
      </section>

      {/* Ürünler - 3. satır */}
      <section className="container-x py-10">
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {thirdRow.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Avantajlar – koyu bölüm, ortada cihaz mock'u */}
      <section className="bg-[var(--bg-dark)] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 70%, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container-x relative grid gap-12 lg:grid-cols-3 items-center">
          {/* Sol – Ücretsiz Kargo */}
          <div className="text-center lg:text-right">
            <div className="inline-flex w-20 h-20 rounded-full bg-white/5 border border-white/10 items-center justify-center mb-5">
              <Truck size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-xl mb-3 tracking-wide">ÜCRETSİZ KARGO</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
              Saat 16:00'a kadar verilen tüm siparişler MNG Kargo ile aynı gün gönderilir.
            </p>
          </div>

          {/* Orta – Whatsapp sipariş hattı cihaz görseliyle */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* cihaz çerçevesi */}
              <div className="w-[280px] md:w-[320px] aspect-[4/3] rounded-[22px] bg-black p-3 shadow-2xl border border-white/15">
                <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-[#f5d5cc]">
                  <Image
                    src={site.deviceMock}
                    alt="Birincioğlu Ticaret mağaza"
                    fill
                    sizes="320px"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1 bg-black/30 rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-[var(--success)] flex items-center justify-center shadow-xl ring-4 ring-[var(--bg-dark)]">
                <MessageCircle size={26} />
              </div>
            </div>

            <h3 className="font-bold text-xl mt-7 mb-2 tracking-wide">WHATSAPP SİPARİŞ HATTI</h3>
            <p className="text-sm text-white/60 leading-relaxed text-center max-w-xs">
              Siparişleriniz ve fiyat bilgisi için bize Whatsapp üzerinden ulaşabilirsiniz.
            </p>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 bg-[var(--success)] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition"
            >
              <MessageCircle size={16} /> {site.phone2}
            </a>
          </div>

          {/* Sağ – Güvenli alışveriş */}
          <div className="text-center lg:text-left">
            <div className="inline-flex w-20 h-20 rounded-full bg-white/5 border border-white/10 items-center justify-center mb-5">
              <ShieldCheck size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-xl mb-3 tracking-wide">%100 GÜVENLİ ALIŞVERİŞ</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto lg:ml-0 lg:mr-auto">
              256Bit SSL ve 3D Secure altyapısıyla tüm alışverişleriniz güvence altındadır.
            </p>
          </div>
        </div>
      </section>

      {/* Ürünler - 4. satır */}
      <section className="container-x py-10">
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {fourthRow.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
