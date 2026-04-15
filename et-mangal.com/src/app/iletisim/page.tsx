import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Rehbere katkı, tarif önerisi, yerel mangal mekanı teklifi için bize yazın.",
  alternates: { canonical: `${site.url}/iletisim` },
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <header className="mb-10 sm:mb-14">
            <p className="eyebrow mb-4 sm:mb-5">Bize Yaz</p>
            <h1 className="display-font text-[clamp(2.5rem,9vw,4.75rem)] lg:text-[76px] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
              <span className="italic text-ember font-normal">İletişim</span>
            </h1>
            <p className="mt-6 sm:mt-7 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] sm:leading-[1.78] text-ink-soft italic font-body">
              Rehbere katkı vermek, tarif paylaşmak, bölgenizdeki iyi bir
              mangal mekanını önermek veya bir hata bildirmek için bize
              yazabilirsiniz. Reklamsız ve bağımsızız — sponsorlu içerik
              kabul etmiyoruz.
            </p>
          </header>

          <div className="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-rule pt-8 sm:pt-10">
            <a
              href="mailto:merhaba@et-mangal.com"
              className="group flex flex-col items-start"
            >
              <Mail className="w-7 h-7 text-ember mb-5" strokeWidth={1.5} />
              <p className="eyebrow mb-2">E-posta</p>
              <p className="display-font text-xl text-ink group-hover:text-ember transition-colors">
                merhaba@et-mangal.com
              </p>
            </a>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start"
            >
              <MessageCircle
                className="w-7 h-7 text-ember mb-5"
                strokeWidth={1.5}
              />
              <p className="eyebrow mb-2">WhatsApp</p>
              <p className="display-font text-xl text-ink group-hover:text-ember transition-colors">
                Yazışma Hattı
              </p>
            </a>
            <div>
              <MapPin className="w-7 h-7 text-ember mb-5" strokeWidth={1.5} />
              <p className="eyebrow mb-2">Merkez</p>
              <p className="display-font text-xl text-ink">Türkiye</p>
              <p className="mt-2 text-[14px] text-ink-mute italic font-body">
                Gezgin editörlük — tek bir adresimiz yok.
              </p>
            </div>
          </div>

          <div className="mt-14 sm:mt-20 border-t border-rule pt-8 sm:pt-10">
            <p className="eyebrow mb-5">Editoryal İlkeler</p>
            <ul className="space-y-4 text-[16px] leading-[1.75] text-ink-soft max-w-2xl font-body italic">
              <li>
                — Bir mekanı listelemek için para, ürün veya ağırlama kabul
                etmeyiz.
              </li>
              <li>
                — Yazılan her cümle köz başında test edilmiştir veya bir
                ustadan alıntıdır.
              </li>
              <li>
                — Rehberdeki tablolar bağımsız termometre ölçümleri ve
                kaynaklanmış literatürle çapraz doğrulanmıştır.
              </li>
              <li>
                — Bir hata gördünüz mü? Yazın — düzeltir, düzeltildiğini
                belirtiriz.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
