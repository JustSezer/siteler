"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const questions = [
  {
    q: "Bolu&apos;da en iyi mangal hangi mevsim?",
    a: "Sonbahar ve erken kış (Ekim–Aralık). Hayvan yazı yaylada geçirmiş, et lifi olgunlaşmıştır; köz tutmak da bu mevsimde daha kolaydır. Yaz aylarında özellikle Abant ve yayla mekanları kalabalık olur, servis yavaşlayabilir.",
  },
  {
    q: "Kuzu mu dana mı tercih edilmeli?",
    a: "İkisi de ayrı tat. Kuzu pirzola Bolu&apos;nun en güçlü olduğu nokta — özellikle sonbahar kuzusu. Dana antrikot ise yıl boyu istikrarlı; eti dinlendirilmiş bir mekanda tercih edin.",
  },
  {
    q: "Köyden et almak daha mı doğrudur?",
    a: "Şart değil. &apos;Dinlendirilmemiş et&apos; sertlik yapar. Önemli olan dinlendirme süresi (en az 7 gün, ideali 14–21 gün) ve hijyendir. Bu disipline sahip bir restoran, köyden gelen ama dinlendirilmemiş etten daha iyi sonuç verir.",
  },
  {
    q: "Mangal başında ne kadar oturmalı?",
    a: "İyi pişmiş bir et tabağı için 25–35 dakika yeterlidir. Bundan kısaysa et soğutulmuş geliyor demektir; uzunsa servis akışı bozuktur. Rezervasyon yaparken &apos;saat tam başı&apos; tercih edin; mutfak ritmi en stabil zamandır.",
  },
  {
    q: "Çocukla mangal mekanına gidilebilir mi?",
    a: "Çoğu Bolu mangal mekanı aile dostudur. Ancak ocakbaşı stilindeki yerlerde duman yoğunluğu olabilir; kapalı alan yerine bahçeli/teraslı seçenekleri öncelikleyin. Hafta sonu öğle saatleri en uygun.",
  },
  {
    q: "Vejetaryen biri mangal masasında ne yer?",
    a: "Köz patlıcan, közde biber, mantar şiş, halloumi, közlenmiş kabak — Bolu mangal mekanlarının çoğunda mevcut. Bazı mekanlar kuzu ve sebzeyi aynı közde pişirir; vejetaryen iseniz ayrı köz isteyin.",
  },
];

export default function ReaderQuestions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Bölüm başlığı */}
        <div className="rule-thick pt-3 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between flex-wrap gap-2 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
              Bölüm 06 · Okurdan Gelenler
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
              Sayfa 06
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight text-ink font-black mb-6 sm:mb-8">
              Okur <em className="italic font-light">soruyor.</em>
            </h2>
            <p className="font-body text-base lg:text-lg text-ink-soft leading-relaxed">
              Geçen ay editöre en çok sorulan altı soru. Cevaplar
              kişiseldir, kesin değildir; bir sohbet açıcıdır.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <div className="border-t border-ink">
              {questions.map((item, i) => (
                <div key={i} className="border-b border-rule">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-3 sm:gap-6 py-5 sm:py-6 lg:py-8 text-left group"
                    aria-expanded={open === i}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-5 lg:gap-8 min-w-0">
                      <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted pt-1.5 sm:pt-2 flex-shrink-0">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-ink font-bold leading-snug group-hover:text-ember transition-colors">
                        {item.q.replace(/&apos;/g, "'")}
                      </h3>
                    </div>
                    <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 border border-ink flex items-center justify-center text-ink mt-0.5 sm:mt-1">
                      {open === i ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                    </span>
                  </button>
                  {open === i && (
                    <div className="pl-0 sm:pl-[40px] lg:pl-[60px] pb-6 sm:pb-8 pr-2 sm:pr-12">
                      <p className="font-body text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] sm:leading-[1.75] text-ink-soft max-w-[60ch]">
                        {item.a.replace(/&apos;/g, "'")}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
