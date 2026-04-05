import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl font-extrabold text-primary-500">404</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Sayfa Bulunamadı</h1>
          <p className="text-gray-500 text-lg mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Anasayfaya Dön
            </Link>
            <Link
              href="/blog"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Blog&apos;u İncele
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
