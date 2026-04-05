import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/db";
import PostCard from "@/components/PostCard";
import ContactForm from "@/components/ContactForm";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const metadata: Metadata = {
  title: "Wix Destek | Türkiye'nin Wix Yardım ve Danışmanlık Merkezi",
  description:
    "Wix site kurma, tasarım, SEO ve teknik sorunlarınız için Türkçe profesyonel destek. Wix'te sorun yaşıyorsanız uzman ekibimiz 24 saat içinde yanıt verir.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "tr-TR": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Wix Destek",
    title: "Wix Destek | Türkiye'nin Wix Yardım ve Danışmanlık Merkezi",
    description:
      "Wix site kurma, tasarım, SEO ve teknik sorunlarınız için Türkçe profesyonel destek. 24 saat içinde yanıt garantisi.",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Wix Destek — Profesyonel Wix Yardım ve Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Destek | Türkiye'nin Wix Yardım ve Danışmanlık Merkezi",
    description:
      "Wix site kurma, tasarım, SEO ve teknik sorunlarınız için Türkçe profesyonel destek.",
    images: [`${SITE_URL}/og-image.svg`],
  },
};

const FAQ_ITEMS = [
  {
    question: "Wix ile ücretsiz site açabilir miyim?",
    answer: "Evet, Wix ücretsiz plan sunar. Ancak ücretsiz planda Wix alt alan adı kullanılır (örneğin kullaniciadi.wixsite.com) ve Wix reklamları görünür. Kendi alan adınızı kullanmak, reklamsız site yayınlamak ve profesyonel e-posta adresi için premium plan gereklidir.",
  },
  {
    question: "Wix siteme özel alan adı nasıl bağlarım?",
    answer: "Wix panelinden Ayarlar > Alan Adları bölümüne giderek mevcut bir domain bağlayabilir ya da Wix üzerinden yeni bir domain satın alabilirsiniz. Domain bağlama işlemi DNS kayıtlarının güncellenmesini gerektirir ve yayına geçmesi 24-48 saat sürebilir.",
  },
  {
    question: "Wix ile e-ticaret mağazası açmak mümkün mü?",
    answer: "Evet, Wix Business planları ile tam özellikli e-ticaret mağazası kurabilirsiniz. Ürün yönetimi, ödeme entegrasyonu (kredi kartı, PayPal), kargo takibi ve stok yönetimi yapılabilir.",
  },
  {
    question: "Wix sitemi Google'da üst sıralara nasıl çıkarırım?",
    answer: "Wix'in SEO Asistanı aracını kullanın, her sayfa için benzersiz meta açıklaması ve başlık yazın, görsellere alt metin ekleyin, sayfa hızını artırın ve düzenli blog içeriği üretin. Wix SEO ayarlarını doğru yapılandırmak, Google Search Console bağlantısı ve sitemap göndermek de kritiktir.",
  },
  {
    question: "Wix teknik destek Türkçe veriyor mu?",
    answer: "Wix.com'un resmi destek ekibi ağırlıklı olarak İngilizce hizmet verir. Türkçe Wix desteği için wix-destek.com olarak bağımsız danışmanlık hizmeti sunuyoruz. İletişim formunu doldurmanız yeterli; 24 saat içinde yanıt veriyoruz.",
  },
  {
    question: "Wix sitemi başka bir platforma taşıyabilir miyim?",
    answer: "Wix içeriklerini (yazılar, ürünler, görseller) CSV veya XML olarak dışa aktarabilirsiniz; ancak Wix tasarımı ve şablonları diğer platformlara taşınamaz. WordPress, Shopify veya başka bir platforma geçiş yaparken profesyonel destek almanız veri kaybını önler.",
  },
  {
    question: "Wix eklentim çalışmıyor, ne yapmalıyım?",
    answer: "Önce Wix App Market'ten eklentinin güncel sürümde olduğunu kontrol edin. Tarayıcı önbelleğini temizleyip sayfayı yenileyin. Sorun devam ederse eklentiyi kaldırıp yeniden yükleyin. Bunlar işe yaramazsa Wix yetkilendirme hatası veya plan uyumsuzluğu olabilir; destek ekibimizle iletişime geçin.",
  },
];

export default async function Home() {
  const posts = await getAllPosts(3);

  const breadcrumbs = [{ name: "Ana Sayfa", url: SITE_URL }];

  return (
    <>
      <FAQJsonLd items={FAQ_ITEMS} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-16 sm:py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Sol */}
            <div>
              <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-white/25">
                Türkiye&apos;nin Wix Destek Merkezi
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Wix&apos;te{" "}
                <span className="text-yellow-300">Sorun mu</span>{" "}
                Yaşıyorsunuz?
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                Wix site kurma, tasarım, SEO ve teknik sorunlarınız için uzman desteği.
                Formu doldurun, 24 saat içinde size ulaşalım.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 active:bg-blue-100 font-bold px-6 py-3 rounded-lg transition-colors duration-150 text-base min-h-[44px] shadow-lg"
                >
                  Ücretsiz Destek Al
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-150 text-base min-h-[44px]"
                >
                  Rehberleri İncele
                </Link>
              </div>
            </div>

            {/* Sağ: Contact Form inline */}
            <div className="lg:block">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GÜVEN SİNYALLERİ ===== */}
      <section className="bg-white border-b border-slate-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              {
                num: "500+",
                label: "Çözülen Sorun",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                num: "24s",
                label: "İçinde Yanıt",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                num: "5 Yıl",
                label: "Wix Deneyimi",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                num: "%98",
                label: "Memnuniyet",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                  {item.icon}
                </div>
                <p className="text-3xl font-bold text-blue-600">{item.num}</p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HİZMETLER ===== */}
      <section className="bg-slate-50 py-14 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Wix Destek Hizmetlerimiz
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg">
              Wix ile ilgili her konuda profesyonel destek sağlıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                  </svg>
                ),
                bg: "bg-blue-50",
                border: "border-blue-100",
                title: "Wix Site Kurma",
                desc: "Sıfırdan profesyonel bir Wix sitesi oluşturmanız için adım adım rehberlik. Şablon seçiminden yayına alma sürecine kadar tam destek.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                bg: "bg-indigo-50",
                border: "border-indigo-100",
                title: "Wix Tasarım",
                desc: "Markanıza özel, mobil uyumlu ve görsel açıdan çarpıcı Wix tasarımı. Renk paleti, font seçimi ve sayfa düzeni optimizasyonu.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                bg: "bg-green-50",
                border: "border-green-100",
                title: "Wix E-Ticaret",
                desc: "Wix üzerinde online mağaza kurulumu, ürün yönetimi, ödeme sistemi entegrasyonu ve kargo ayarları için kapsamlı destek.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                bg: "bg-purple-50",
                border: "border-purple-100",
                title: "Wix SEO",
                desc: "Google'da üst sıralara çıkmak için Wix SEO ayarları, meta etiketler, sayfa hızı optimizasyonu ve içerik stratejisi.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                bg: "bg-orange-50",
                border: "border-orange-100",
                title: "Domain & Hosting",
                desc: "Wix'e özel domain bağlama, SSL sertifikası, e-posta hesabı kurulumu ve hosting plan seçimi konularında rehberlik.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                bg: "bg-red-50",
                border: "border-red-100",
                title: "Teknik Sorun Çözme",
                desc: "Wix sitenizdeki çökme, yavaşlama, eklenti hatası veya görünüm bozukluğu gibi teknik sorunları hızlıca çözüyoruz.",
              },
            ].map((hizmet) => (
              <div
                key={hizmet.title}
                className={`bg-white rounded-xl border ${hizmet.border} p-6 hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`w-12 h-12 rounded-xl ${hizmet.bg} border ${hizmet.border} flex items-center justify-center mb-4`}>
                  {hizmet.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{hizmet.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{hizmet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SON BLOG YAZILARI ===== */}
      {posts.length > 0 && (
        <section className="bg-white py-14 sm:py-20 px-4 border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Wix Rehberleri
                </h2>
                <p className="text-slate-500 mt-1 text-sm sm:text-base">
                  Wix kullanımını kolaylaştıran ipuçları ve rehberler
                </p>
              </div>
              <Link
                href="/blog"
                className="self-start sm:self-auto inline-flex items-center gap-2 border border-slate-300 hover:border-blue-500 text-slate-600 hover:text-blue-600 font-medium px-5 py-2.5 rounded-lg transition-colors duration-150 text-sm min-h-[44px]"
              >
                Tüm Yazılar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== MÜŞTERİ YORUMLARI ===== */}
      <section className="bg-white py-14 sm:py-20 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg">
              Yüzlerce Wix kullanıcısının güvendiği destek hizmeti
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Elif K.",
                role: "Küçük İşletme Sahibi",
                text: "Wix e-ticaret mağazamı kurarken ödeme entegrasyonunda takıldım. Ekip bana adım adım yardımcı oldu, aynı gün çözdük. Çok teşekkürler!",
                stars: 5,
              },
              {
                name: "Mehmet A.",
                role: "Serbest Tasarımcı",
                text: "Domain bağlama ve SSL kurulumunda sorun yaşıyordum. 24 saat içinde geri döndüler ve sorunu dakikalar içinde hallettiler. Kesinlikle tavsiye ederim.",
                stars: 5,
              },
              {
                name: "Seda T.",
                role: "Blog Yazarı",
                text: "Wix SEO ayarlarını nasıl yapacağımı bilmiyordum. Verilen rehberlik sayesinde Google sıralamalarım 2 ay içinde ciddi oranda yükseldi.",
                stars: 5,
              },
            ].map((review) => (
              <div key={review.name} className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-slate-500 text-xs">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SSS ===== */}
      <section className="bg-slate-50 py-14 sm:py-20 px-4 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            Sık Sorulan Sorular
          </h2>
          <p className="text-slate-500 text-center mb-10">
            Wix hakkında merak edilen sorular ve cevaplar
          </p>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO METİN BÖLÜMÜ ===== */}
      <section className="bg-white border-t border-slate-100 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-6 sm:mb-8">
            Wix Yardım ve Danışmanlık: Neden Profesyonel Destek Gerekli?
          </h2>
          <div className="text-slate-600 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-slate-900">Wix destek</strong> hizmetimiz, Türkiye&apos;deki bireysel
              kullanıcılardan küçük işletmelere kadar her ölçekte müşteriye Türkçe profesyonel rehberlik
              sunmaktadır. Wix platformunun tüm potansiyelinden yararlanmanız için uzman ekibimiz 24 saat
              içinde yanıt verir.
            </p>
            <p>
              <strong className="text-slate-900">Wix ile site kurmak</strong> başlangıçta kolay görünse de
              e-ticaret entegrasyonları, <strong className="text-slate-900">Wix SEO optimizasyonu</strong>,
              özel domain bağlantısı ve mobil uyumluluk gibi konular teknik bilgi gerektirebilir.
              Özellikle Google Search Console bağlantısı, sitemap gönderimi ve sayfa hızı ayarları
              çoğu kullanıcı için zorlayıcı olmaktadır.
            </p>
            <p>
              <strong className="text-slate-900">Wix sorun çözme</strong> konusundaki güçlükleri bize
              bildirin. Eklenti hataları, yavaş yükleme süreleri, tasarım uyumsuzlukları veya ödeme
              sorunları gibi teknik problemleri hızla gideriyoruz.{" "}
              <strong className="text-slate-900">Wix e-ticaret</strong> kurulumundan{" "}
              <strong className="text-slate-900">Wix domain bağlama</strong> işlemlerine kadar her
              adımda yanınızdayız.
            </p>
            <p>
              Wix&apos;in resmi destek ekibi ağırlıklı olarak İngilizce hizmet vermektedir. Biz ise
              Türk kullanıcıların gerçek ihtiyaçlarını anlayarak{" "}
              <strong className="text-slate-900">Türkçe Wix yardımı</strong> sunuyoruz. İletişim formunu
              doldurun, 24 saat içinde size ulaşalım.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-1">Wix Başlangıç Rehberleri</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Sıfırdan Wix sitesi kurmak isteyenler için adım adım Türkçe rehberler.
              </p>
              <Link
                href="/blog?kategori=Wix%20Ba%C5%9Flang%C4%B1%C3%A7"
                className="text-blue-600 hover:text-blue-700 text-xs font-medium mt-2 inline-block"
              >
                Wix başlangıç rehberlerini incele &rarr;
              </Link>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-1">Wix SEO İpuçları</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Wix sitenizi Google&apos;da üst sıralara taşıyacak SEO optimizasyon rehberleri.
              </p>
              <Link
                href="/blog?kategori=Wix%20SEO"
                className="text-blue-600 hover:text-blue-700 text-xs font-medium mt-2 inline-block"
              >
                Wix SEO rehberlerine git &rarr;
              </Link>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-1">Wix Sorun Çözme</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                En sık karşılaşılan Wix teknik sorunları ve adım adım çözüm yolları.
              </p>
              <Link
                href="/blog?kategori=Wix%20Sorun%20%C3%87%C3%B6zme"
                className="text-blue-600 hover:text-blue-700 text-xs font-medium mt-2 inline-block"
              >
                Wix sorun çözme yazılarına bak &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SON CTA ===== */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-14 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Wix Sorununuzu Hemen Çözelim
          </h2>
          <p className="text-blue-100 mb-8 text-base sm:text-lg">
            Ücretsiz danışmanlık için formu doldurun. Uzmanlarımız en geç 24 saat içinde sizinle iletişime geçsin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-lg transition-colors duration-150 text-base min-h-[44px] shadow-lg"
          >
            Destek Talebi Oluştur
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-blue-200 text-sm">
            Kredi kartı gerekmez &middot; İlk danışmanlık tamamen ücretsiz &middot; 500+ çözülen sorun
          </p>
        </div>
      </section>
    </>
  );
}
