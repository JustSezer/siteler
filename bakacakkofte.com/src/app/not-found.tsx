import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="paper-warm grain min-h-[70vh] flex items-center py-20">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <p className="display-font text-[120px] md:text-[180px] leading-none text-red font-semibold">
            404
          </p>
          <h1 className="display-font text-3xl md:text-4xl text-ink mt-4">
            Bu karavan başka bir lokasyona gitti.
          </h1>
          <p className="mt-5 text-ink-2 leading-relaxed">
            Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
            Ana sayfaya dön veya bayilik sayfasına geç.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-red">
              <Home className="w-4 h-4" /> Ana Sayfa
            </Link>
            <Link href="/franchise" className="btn-outline">
              <ArrowLeft className="w-4 h-4" /> Bayilik
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
