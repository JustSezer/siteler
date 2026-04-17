export const metadata = { title: "Hakkımızda" };

export default function AboutPage() {
  return (
    <div className="container-x py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-black mb-6">Hakkımızda</h1>
      <div className="space-y-4 text-[var(--muted)] leading-relaxed">
        <p>
          1946 yılında Ahmet Birincioğlu tarafından zahire olarak başlayan serüven oğullarına
          devrolup 1994 yılında Mustafa ve Yahya Birincioğlu tarafından kurulan BİRİNCİOĞLU
          TİCARET, 28 yılı aşkın tecrübesiyle Kömür, Kabuk, Pelet, Yakacak, Kedi ve Köpek maması
          hizmeti vermektedir.
        </p>
        <p>
          İşletmemiz toptan ve perakende satış yapmakta, müşteri memnuniyetini ve kalite-fiyat
          dengesini ön planda tutmaktadır.
        </p>
      </div>
    </div>
  );
}
