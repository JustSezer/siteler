const veriler = [
  { sayi: "250 km", etiket: "İstanbul'dan Mesafe" },
  { sayi: "D100", etiket: "Efsane Karayolu Güzergahı" },
  { sayi: "7/24", etiket: "Açık Mangal Restoranları" },
  { sayi: "Meşe", etiket: "Közü ile Pişirme Geleneği" },
];

export default function IstatistikBant() {
  return (
    <section className="py-10 sm:py-12 bg-charcoal text-smoke">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {veriler.map((v, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-copper mb-1">
                {v.sayi}
              </p>
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-smoke/50">
                {v.etiket}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
