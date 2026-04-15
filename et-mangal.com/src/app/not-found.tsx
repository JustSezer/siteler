import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-6">404 · Ateş Burada Yanmıyor</p>
        <h1 className="display-font text-5xl sm:text-7xl text-ink mb-6 tracking-tight">
          Kaybolan{" "}
          <span className="italic text-ember font-normal">kor.</span>
        </h1>
        <p className="max-w-md mx-auto text-[17px] text-ink-soft italic font-body mb-10">
          Aradığınız sayfa başka bir ocağa taşınmış ya da hiç var olmamış
          olabilir. Rehbere dönelim.
        </p>
        <Link href="/" className="btn-amber">
          Ana Ocağa Dön
        </Link>
      </div>
    </main>
  );
}
