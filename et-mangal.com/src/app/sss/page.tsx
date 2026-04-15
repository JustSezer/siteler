import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Mangal, et, kömür, marinad ve dinlendirme hakkında en çok sorulan soruların kısa ve net cevapları.",
  alternates: { canonical: `${site.url}/sss` },
};

const faqs = [
  {
    q: "Mangalı kaç dakika önce yakmalıyım?",
    a: "Kömür kullanıyorsanız en az 30 dakika, odun kullanıyorsanız 45–60 dakika. Alevlerin sönmesini ve kömürün gri kül tabakasıyla kaplanmasını bekleyin.",
  },
  {
    q: "Etimi marinaddan ne zaman çıkarmalıyım?",
    a: "Izgaraya koymadan 20–30 dakika önce. Et oda sıcaklığına inmeli ve yüzeyindeki fazla marinad silkelenmeli — aksi halde yanar.",
  },
  {
    q: "Kırmızı etimin içi neden hâlâ soğuk?",
    a: "Büyük olasılıkla buzdolabından direkt ateşe koydunuz. Kalın etler 45–60 dakika oda sıcaklığına inmeli. Kalınlık 3 cm'den fazlaysa iki bölgeli ateş şart.",
  },
  {
    q: "Tavuk neden kuru çıkıyor?",
    a: "İç sıcaklığı 72°C'yi geçince nem kaybı hızlanır. Termometre kullanın, 68°C'de ocaktan alın — dinlendirirken 72°C'ye tırmanır. Yoğurtlu marinad da kuruma marjını yükseltir.",
  },
  {
    q: "Tuzu ne zaman atmalıyım?",
    a: "İki seçenek: ya 12–24 saat önce kuru tuzlama (dry brine), ya da ateşe koymadan 3 dakika önce. Arada kalan süreler (10 dk – 1 saat) etin yüzeyinden nem çeker, içine zaman bulamaz.",
  },
  {
    q: "Et dinlendirirken soğumuyor mu?",
    a: "Hayır. Oda sıcaklığında gevşek folyo altında iç sıcaklık ilk 5 dakikada sadece 2–3°C düşer — buna karşılık lifler arasındaki sular dengelenir. Dinlendirme atlanması en büyük hatadır.",
  },
  {
    q: "Kömür hangi marka olmalı?",
    a: "Marka değil, tür önemli. Meşe kömürü en iyisi — uzun yanar, yüksek ısı verir. Hindistan cevizi kabuğu kömürü temiz yanar ama pahalıdır. Briket kömürden uzak durun: kimyasal bağlayıcılar içerir.",
  },
  {
    q: "Termometresiz pişirebilir miyim?",
    a: "Teknik olarak evet, profesyonelce hayır. Parmak testi 2–3 kez yaptıktan sonra öğrenilir; ama termometre 300 liraya alınır ve yıllarca iş görür. Yatırım olarak en doğru karar.",
  },
];

export default function SssPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <header className="max-w-[900px] mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
          <p className="eyebrow mb-4 sm:mb-5">Hızlı Cevaplar</p>
          <h1 className="display-font text-[clamp(2.5rem,9vw,4.75rem)] lg:text-[76px] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
            Sık Sorulan{" "}
            <span className="italic text-ember font-normal">Sorular</span>
          </h1>
        </header>

        <div className="max-w-[900px] mx-auto px-5 sm:px-8 border-t-2 border-ink">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border-b border-rule [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer list-none py-6 flex items-start justify-between gap-4">
                <h2 className="display-font text-xl sm:text-2xl text-ink tracking-tight leading-snug group-hover:text-ember transition-colors">
                  {f.q}
                </h2>
                <span className="text-ember text-2xl leading-none transition-transform group-open:rotate-45 font-sans">
                  +
                </span>
              </summary>
              <div className="pb-7 text-[16px] leading-[1.78] text-ink-soft italic font-body max-w-2xl">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </main>
      <Footer />
      <JsonLd data={faqSchema} />
    </>
  );
}
