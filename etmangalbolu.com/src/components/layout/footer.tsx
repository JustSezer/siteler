"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper border-t-4 border-double border-ink py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-14">
          {/* Brand kolon */}
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
              Bağımsız Rehber · {year}
            </p>
            <p className="font-display text-3xl lg:text-4xl text-ink font-black leading-none mb-4 sm:mb-5">
              Bolu <span className="italic font-light">Mangal</span> Rehberi
            </p>
            <p className="font-body text-[15px] sm:text-base text-ink-soft leading-relaxed max-w-md">
              Bolu&apos;da et, mangal ve köz üzerine bağımsız bir gastronomi
              dergisi. Reklam içermez, tarafsızdır, kişiseldir.
            </p>
          </div>

          {/* Bölümler */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember mb-4 sm:mb-5">
              Bölümler
            </p>
            <ul className="space-y-3 font-body text-[15px] text-ink-soft">
              <li><Link href="#editorden" className="hover:text-ember transition-colors">Editörden</Link></li>
              <li><Link href="#bolu-eti" className="hover:text-ember transition-colors">Bolu Eti</Link></li>
              <li><Link href="#rehber" className="hover:text-ember transition-colors">Mangal Rehberi</Link></li>
              <li><Link href="#pisirme" className="hover:text-ember transition-colors">Pişirme Dersleri</Link></li>
              <li><Link href="#yazilar" className="hover:text-ember transition-colors">Arşiv</Link></li>
            </ul>
          </div>

          {/* Künye */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember mb-4 sm:mb-5">
              Künye
            </p>
            <ul className="space-y-3 font-body text-[15px] text-ink-soft">
              <li><Link href="/gizlilik" className="hover:text-ember transition-colors">Gizlilik</Link></li>
              <li><Link href="/kullanim-sartlari" className="hover:text-ember transition-colors">Kullanım Şartları</Link></li>
              <li><Link href="/cerez-politikasi" className="hover:text-ember transition-colors">Çerez Politikası</Link></li>
              <li><Link href="/erisilebilirlik" className="hover:text-ember transition-colors">Erişilebilirlik</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => (window as unknown as Record<string, () => void>).__openCookiePreferences?.()}
                  className="hover:text-ember transition-colors"
                >
                  Çerez Tercihleri
                </button>
              </li>
              <li><Link href="mailto:editor@etmangalbolu.com" className="hover:text-ember transition-colors">editor@etmangalbolu.com</Link></li>
            </ul>
          </div>
        </div>

        <div className="rule-thick pt-4 flex flex-wrap items-center justify-between gap-2 sm:gap-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-muted">
          <span>© {year} Bolu Mangal Rehberi</span>
          <span className="hidden sm:inline">Bağımsız · Tarafsız · Kişisel</span>
          <span>—∎—</span>
        </div>
      </div>
    </footer>
  );
}
