export default function EditorsNote() {
  return (
    <section id="editorden" className="py-16 sm:py-20 lg:py-32 bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-16">
          {/* Sol kolon: byline */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="rule-thin pt-3 lg:sticky lg:top-28">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember mb-3">
                Bölüm 01
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-tight mb-4 sm:mb-5">
                Editörden
              </h3>
              <div className="space-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                <p>Yazı · Editör Notu</p>
                <p>Süre · 3 dk</p>
                <p>Konu · Bolu Mutfağı</p>
              </div>
            </div>
          </aside>

          {/* Sağ kolon: makale */}
          <article className="md:col-span-8 lg:col-span-9 lg:max-w-[680px]">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.05] tracking-tight text-ink font-black mb-8 sm:mb-10">
              Bir <em className="font-light italic">şehrin</em> ateşle{" "}
              <em className="font-light italic">yazılmış</em> tarifi.
            </h2>

            <div className="font-body text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.7] sm:leading-[1.75] text-ink-soft space-y-5 sm:space-y-6">
              <p className="drop-cap">
                Bolu&apos;da et yemek bir karar değil, bir alışkanlıktır. Bu
                şehir aşçılar yetiştirdi; aşçıları sayesinde bu coğrafyanın
                damak tadı şekillendi. Mengen&apos;den çıkıp İstanbul mutfağına
                kadar uzanan bir geleneğin merkezindeyiz. Köz başına oturmak
                burada bir tören, mangalın yanı bir mektep.
              </p>

              <p>
                Bu rehberi hazırlarken üç şeyi gözettik: <em>doğruluk</em>,{" "}
                <em>tarafsızlık</em> ve <em>okurun zamanına saygı</em>. Hangi
                ette hangi pişirme, hangi mevsimde hangi kömür, hangi mekanda
                hangi usul — hepsini saha gözlemine ve aşçı sohbetlerine
                dayanarak yazdık. Liste değil, anlatı yapmaya çalıştık.
              </p>

              <p>
                Öneriler kişiseldir. &quot;En iyi&quot; yoktur; doğru zamanda,
                doğru ateşte, doğru ele düşen et vardır. Bu sayfa, o üçünü
                arayan okur içindir.
              </p>

              <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-ink-muted pt-6 border-t border-rule-soft">
                — Editör · Bolu, Mart 2026
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
