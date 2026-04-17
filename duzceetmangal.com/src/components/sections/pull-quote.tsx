export default function PullQuote() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-charcoal text-smoke">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-12 text-center">
        <blockquote>
          <p className="pull-quote text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-snug tracking-tight">
            &ldquo;Meşe kömürü yavaş yanar, sabırlı pişirir. Düzce&apos;de
            mangal acele işi değil — beklemeyi bilen, tadını alır.&rdquo;
          </p>
        </blockquote>
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-smoke/50 mt-6 sm:mt-8">
          — Bakacak Mevkii Ustası
        </p>
      </div>
    </section>
  );
}
