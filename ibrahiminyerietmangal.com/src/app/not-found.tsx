import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-[70vh] flex items-center">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow mb-6">404 · Kayıp Sayfa</p>
          <h1 className="display-font text-[clamp(3rem,10vw,7rem)] text-bone leading-none tracking-tight">
            Bu <span className="italic text-ember">köz</span> burada yanmadı.
          </h1>
          <p className="mt-8 text-[16px] leading-[1.8] text-bone-soft">
            Aradığınız sayfa taşınmış ya da hiç var olmamış. Ateşin başına
            dönelim.
          </p>
          <Link href="/" className="btn-ember mt-10">
            Anasayfaya Dön
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
