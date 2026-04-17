export default function ManifestoV2() {
  return (
    <section id="manifesto" className="v2-section py-20 sm:py-28 md:py-44 border-t v2-rule">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="v2-num">№ 02 — Niyet</p>
            <p className="v2-label mt-3">Manifesto</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="v2-display text-[var(--color-paper)] text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] sm:tracking-[-0.025em] max-w-5xl [text-wrap:pretty]">
              Sabit restoran değil. <span className="text-[var(--color-fog-2)]">Hareketli istasyon.</span> Karavan, ocağı yatırımcının
              olduğu yere taşır; reçeteyi, pişimi ve servisi her noktada{" "}
              <span className="text-[var(--color-ember)]">tek bir kıvamda</span> sabitler.
            </p>

            <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-line)] border v2-rule">
              {[
                {
                  k: "Tarif",
                  v: "30+ yıllık usta reçetesi karavan operasyonu için yeniden standardize edildi.",
                },
                {
                  k: "Operasyon",
                  v: "İki kişilik kompakt ekip, 5–7 dakikalık servis döngüsü, sabit kira yok.",
                },
                {
                  k: "Marka",
                  v: "Görsel kimlik, sosyal medya şablonu, lokasyon takibi ve merkezi tedarik.",
                },
              ].map((b) => (
                <div key={b.k} className="bg-[var(--color-coal)] p-6 sm:p-7 md:p-10">
                  <p className="v2-label v2-label-ember mb-3 md:mb-4">{b.k}</p>
                  <p className="v2-display text-[var(--color-paper)] text-base sm:text-lg md:text-xl leading-snug">
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
