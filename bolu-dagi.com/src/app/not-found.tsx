import Link from "next/link";
import { Mountain, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <Mountain className="w-16 h-16 text-primary mb-6 opacity-60" />
      <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        Sayfa Bulunamadi
      </h2>
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        Aradiginiz sayfa mevcut değil, tasindi veya silinmis olabilir.
        Ana sayfaya donebilir ya da blog yazilarimiza goz atabilirsiniz.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfaya Don
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-200"
        >
          Blog Yazilarini Gor
        </Link>
      </div>
    </div>
  );
}
