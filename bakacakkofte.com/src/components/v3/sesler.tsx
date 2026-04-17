const reviews = [
  {
    text: "Karavan sistemini tek seferde kurmak imkansız geliyordu — anahtar teslim paket sayesinde 6 haftada açıldık. Operasyon ilk günden tıkır tıkır.",
    who: "Bayi adayı görüşmesi",
    where: "İç Anadolu · pilot lokasyon",
  },
  {
    text: "Sabit kira ve dekorasyon yükü olmadan markalı bir gastronomi işletmesi açtım. Bölge değişikliği esnekliği rakipsiz.",
    who: "İlk grup bayi",
    where: "Karadeniz hattı",
  },
  {
    text: "Reçete, tedarik ve eğitim merkezden geldiği için ürün kalitesi günden güne sapmıyor. Müşteri her gün aynı kıvamı bekleyerek geliyor.",
    who: "Operasyon değerlendirmesi",
    where: "Ege bölgesi",
  },
];

export default function SeslerV3() {
  return (
    <section className="v3-section-warm py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <p className="v3-num">№ 07</p>
            <h2 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl mt-3 leading-[0.98] tracking-[-0.02em]">
              Sahadan
              <br />
              <span className="italic text-[var(--color-terracotta)]">notlar.</span>
            </h2>
          </div>
          <p className="v3-eyebrow hidden md:block">Pilot dönem · 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule-3)] border v3-rule">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-[var(--color-card-3)] p-7 sm:p-8 md:p-10 flex flex-col">
              <span className="v3-num mb-6">№ 0{i + 1}</span>
              <blockquote className="v3-serif text-[var(--color-charcoal)] text-xl sm:text-2xl leading-snug tracking-[-0.01em] flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-8 sm:mt-10 pt-5 border-t v3-rule">
                <p className="v3-sans text-[var(--color-charcoal)] text-sm font-medium">{r.who}</p>
                <p className="v3-sans text-xs text-[var(--color-stone)] mt-1.5">{r.where}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
