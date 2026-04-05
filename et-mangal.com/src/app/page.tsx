import Link from "next/link";
import { getAllPosts } from "@/lib/db";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getAllPosts(6);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white py-16 sm:py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Sol: Başlık + CTA */}
            <div>
              <span className="inline-block bg-green-900/50 text-green-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-green-800/60">
                Uzman Et Rehberi
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Türkiye&apos;nin{" "}
                <span className="text-green-400">Et & Mangal</span>{" "}
                Rehberi
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                Teknikler, tarifler ve uzman tavsiyeleri. Mükemmel bir mangal
                deneyimi için ihtiyacınız olan her şey tek yerde.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-150 text-base min-h-[44px]"
                >
                  Tarifleri Keşfet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/blog/ara"
                  className="inline-flex items-center gap-2 border border-slate-500 hover:border-green-500 hover:text-green-400 text-slate-300 font-semibold px-6 py-3 rounded-lg transition-colors duration-150 text-base min-h-[44px]"
                >
                  Teknikleri Öğren
                </Link>
              </div>
            </div>

            {/* Sag: Özellik badge'leri */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-slate-800/70 border border-slate-700/60 rounded-xl p-5 hover:border-green-700/50 transition-colors duration-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-900/50 border border-green-800/60 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Profesyonel Tavsiye</p>
                  <p className="text-sm text-slate-400">Uzman görüşleri ve kanıtlanmış teknikler</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/70 border border-slate-700/60 rounded-xl p-5 hover:border-green-700/50 transition-colors duration-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-900/40 border border-red-800/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">50+ Tarif</p>
                  <p className="text-sm text-slate-400">Adım adım detaylı tarif kütüphanesi</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/70 border border-slate-700/60 rounded-xl p-5 hover:border-green-700/50 transition-colors duration-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-900/40 border border-amber-800/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Uzman İpuçları</p>
                  <p className="text-sm text-slate-400">Marine, ateş kontrolü, et seçimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ÖZELLİK KARTLARI ===== */}
      <section className="bg-slate-900 py-12 sm:py-16 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Uzman Rehber Kategorileri
          </h2>
          <p className="text-slate-400 text-center mb-10 sm:mb-12 max-w-xl mx-auto">
            Et ve mangal dünyasında bilmeniz gereken her teknik, her ipucu
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {/* Kart 1 */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-green-600/60 transition-colors duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-orange-900/40 border border-orange-800/50 flex items-center justify-center mb-4 group-hover:bg-orange-900/60 transition-colors">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Izgara Teknikleri</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Direkt ve dolaylı ısı yöntemleri, kor yönetimi ve doğru
                pişirme süreleri ile kusursuz ızgara sırrı.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 mt-4 text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                Incele
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Kart 2 */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-green-600/60 transition-colors duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-red-900/40 border border-red-800/50 flex items-center justify-center mb-4 group-hover:bg-red-900/60 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Et Seçimi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dana, kuzu, tavuk ve balık türleri. Kaliteli et nasıl
                anlaşılır, hangi kesim hangi pişirmeye uyar?
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 mt-4 text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                Incele
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Kart 3 */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-green-600/60 transition-colors duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-green-900/40 border border-green-800/50 flex items-center justify-center mb-4 group-hover:bg-green-900/60 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Marine & Baharat</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Etin lezzetini katlamak için marinasyon süreleri, baharat
                karışımları ve rub tarifleri.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 mt-4 text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                Incele
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG YAZILARI ===== */}
      <section className="bg-slate-900 py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Son Yazılar
              </h2>
              <p className="text-slate-400 mt-1 text-sm sm:text-base">
                Uzman içerikler ve güncel tarifler
              </p>
            </div>
            {posts.length > 0 && (
              <Link
                href="/blog"
                className="self-start sm:self-auto inline-flex items-center gap-2 border border-slate-600 hover:border-green-500 text-slate-300 hover:text-green-400 font-medium px-5 py-2.5 rounded-lg transition-colors duration-150 text-sm min-h-[44px]"
              >
                Tüm Yazılar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {posts.length === 0 ? (
            /* Ghost / Placeholder kartlar */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="aspect-video bg-slate-700/60 animate-pulse" />
                  <div className="p-5 flex flex-col gap-3">
                    <div className="h-3 w-20 bg-slate-700 rounded animate-pulse" />
                    <div className="h-5 w-full bg-slate-700 rounded animate-pulse" />
                    <div className="h-5 w-4/5 bg-slate-700 rounded animate-pulse" />
                    <div className="h-4 w-full bg-slate-700/60 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-slate-700/60 rounded animate-pulse" />
                    <div className="flex justify-between mt-2 pt-3 border-t border-slate-700">
                      <div className="h-3 w-20 bg-slate-700 rounded animate-pulse" />
                      <div className="h-3 w-10 bg-slate-700 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== SEO METİN BÖLÜMÜ ===== */}
      <section className="bg-slate-800 border-t border-slate-700 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Et & Mangal Hakkında
          </h2>
          <div className="text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-white">Et & Mangal</strong>, Türk
              mutfağının vazgeçilmez lezzetleri olan et yemekleri ve mangal
              kültürünü bir araya getiren kapsamlı bir uzman rehberdir. Kuzu
              etinden dana etine, tavuktan balığa kadar tüm et çeşitlerinin en
              doğru pişirme tekniklerini burada bulabilirsiniz.
            </p>
            <p>
              Mangal yakmaktan ızgara tekniklerine, marinasyon ipuçlarından et
              seçim rehberine kadar ihtiyacınız olan tüm bilgileri uzman
              içeriklerimizle sunuyoruz. İster evde ister açık havada, mükemmel
              bir mangal deneyimi için doğru adrestesiniz.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SAYFA SONU CTA (Peak-End Kuralı) ===== */}
      <section className="bg-gradient-to-br from-green-950 via-slate-900 to-slate-900 py-14 sm:py-20 px-4 border-t border-green-900/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Mangal ustası olmaya hazır mısınız?
          </h2>
          <p className="text-slate-300 mb-8 text-base sm:text-lg">
            Tüm tarif ve teknikleri keşfedin, bir sonraki mangalınızı mükemmel
            yapın.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-150 text-base min-h-[44px]"
          >
            Tüm Tarifleri Gör
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
