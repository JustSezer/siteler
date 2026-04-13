export default function PullQuote() {
  return (
    <section className="py-20 sm:py-24 lg:py-40 bg-ink text-paper relative overflow-hidden">
      {/* Dekoratif tırnak işareti */}
      <div className="absolute top-4 left-2 sm:top-8 sm:left-6 lg:top-16 lg:left-16 font-display text-[110px] sm:text-[160px] lg:text-[280px] leading-none text-ember/20 select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute bottom-4 right-2 sm:bottom-8 sm:right-6 lg:bottom-16 lg:right-16 font-display text-[110px] sm:text-[160px] lg:text-[280px] leading-none text-ember/20 select-none pointer-events-none rotate-180">
        &ldquo;
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10 text-center">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ember mb-8 sm:mb-10">
          Ara · Pull Quote
        </p>

        <blockquote className="pull-quote text-2xl sm:text-3xl md:text-4xl lg:text-[56px] xl:text-[64px] leading-[1.2] sm:leading-[1.15] text-paper mb-10 sm:mb-12">
          İyi mangal acele kaldırmaz; <br className="hidden sm:block" />
          köz <em>sabır</em> ister, <br className="hidden sm:block" />
          et <em>saygı</em> ister.
        </blockquote>

        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className="w-8 sm:w-12 h-px bg-paper/40" />
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-paper/70">
            Bir Mengen aşçısı
          </p>
          <span className="w-8 sm:w-12 h-px bg-paper/40" />
        </div>
      </div>
    </section>
  );
}
