export default function ManifestoV3() {
  return (
    <section id="niyet" className="v3-section-warm py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <p className="v3-num">№ 01</p>
            <p className="v3-eyebrow mt-2">Niyet</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="v3-serif text-[var(--color-charcoal)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.02em] max-w-5xl [text-wrap:pretty]">
              Sabit restoran değil; <span className="italic text-[var(--color-terracotta)]">hareketli bir istasyon.</span>
              {" "}Karavan, ocağı yatırımcının olduğu yere taşır; reçeteyi, pişimi ve servisi
              her noktada tek bir kıvamda sabitler.
            </p>

            <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-px bg-[var(--color-rule-3)] border v3-rule">
              {[
                {
                  k: "Tarif",
                  v: "30+ yıllık usta reçetesi, karavan operasyonu için yeniden standardize edildi.",
                },
                {
                  k: "Operasyon",
                  v: "İki kişilik kompakt ekip, 5–7 dakikalık servis döngüsü, sabit kira yok.",
                },
                {
                  k: "Marka",
                  v: "Görsel kimlik, sosyal medya şablonu, lokasyon takibi, merkezi tedarik.",
                },
              ].map((b) => (
                <div key={b.k} className="bg-[var(--color-card-3)] p-7 sm:p-8 md:p-10">
                  <p className="v3-eyebrow !text-[var(--color-terracotta)] mb-4">{b.k}</p>
                  <p className="v3-serif text-[var(--color-charcoal)] text-xl sm:text-2xl leading-snug">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
