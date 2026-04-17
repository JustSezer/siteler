export const SITE = {
  name: "Wix Uzmanı",
  fullName: "Wix Uzmanı — Premium Wix Ajansı",
  domain: "wixuzmani.com",
  url: "https://wixuzmani.com",
  email: "blakfy@hotmail.com",
  phone: "+90 000 000 00 00",
  whatsapp: {
    number: "905000000000",
    display: "+90 500 000 00 00",
    link: "https://wa.me/905000000000",
  },
  calendly: {
    url: "https://cal.com/wixuzmani/strateji",
    embed: "https://cal.com/wixuzmani/strateji",
  },
  tagline: "Ölçülebilir sonuç veren Wix ajansı",
  description:
    "Tasarımcı, SEO uzmanı ve geliştiriciden oluşan ekiple Wix'te ajans kalitesinde strateji, tasarım ve performans. Core Web Vitals, SEO ve dönüşüm odaklı kurumsal Wix danışmanlığı.",
  locale: "tr_TR",
  twitter: "",
  author: "Wix Uzmanı Ekibi",
  foundedYear: 2022,
} as const;

export const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Vaka Çalışmaları", href: "/vaka-calismalari" },
  { label: "Fiyatlar", href: "/fiyatlar" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Gizlilik Politikası", href: "/gizlilik" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  bullets: string[];
  startingPrice?: string;
  duration?: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "wix-kurumsal-site",
    title: "Kurumsal Wix Site — Marka Kimliğinden Yayına",
    shortTitle: "Kurumsal Site",
    summary: "Marka rehberi, bilgi mimarisi ve ajans kalitesinde tasarımla kurumsal Wix sitesi.",
    description:
      "İş hedefiniz ve marka konumlandırmanızdan başlayarak bilgi mimarisi, wireframe, görsel tasarım ve yayın süreçlerini tek elden yürütürüz. Tüm sayfalar SEO temelleri, erişilebilirlik ve Core Web Vitals kontrolünden geçer.",
    bullets: [
      "Marka atölyesi ve mesajlaşma çerçevesi",
      "Bilgi mimarisi + wireframe + prototip",
      "Ajans kalitesinde görsel tasarım ve özel bileşenler",
      "A11y WCAG AA uyumu ve SEO temeli",
      "Core Web Vitals hedef skorları (LCP < 2.5s, CLS < 0.05)",
      "30 gün post-launch bakım",
    ],
    startingPrice: "Başlangıç: 48.000 TL",
    duration: "4-6 hafta",
    keywords: ["wix kurumsal site", "wix b2b site", "wix şirket sitesi"],
    metaTitle: "Kurumsal Wix Site Tasarımı — Marka ve Mimariden Yayına",
    metaDescription:
      "Ajans kalitesinde kurumsal Wix sitesi. Marka atölyesi, bilgi mimarisi, A11y uyumu ve Core Web Vitals hedefli teslim.",
  },
  {
    slug: "wix-premium-tasarim",
    title: "Wix Premium Tasarım — Mevcut Site Yenileme",
    shortTitle: "Premium Tasarım",
    summary: "Mevcut Wix sitenizin görsel kimliğini ajans standardına çekme.",
    description:
      "Mevcut Wix sitenizi ajans düzeyinde bir tasarım sistemine taşırız: tipografik hiyerarşi, renk tokenları, bileşen tutarlılığı ve düzenli grid. Öncesi/sonrası kıyaslamayla teslim.",
    bullets: [
      "Marka + tipografi auditi ve yeni tasarım sistemi",
      "Tüm sayfalar için bileşen tutarlılığı",
      "Mobil ve tablet öncelikli düzenleme",
      "Mikro-etkileşim ve davranış standardı",
      "Öncesi/sonrası kıyaslama teslim dokümanı",
    ],
    startingPrice: "Başlangıç: 18.000 TL",
    duration: "2-3 hafta",
    keywords: ["wix profesyonel tasarım", "wix premium tasarım", "wix tasarım yenileme"],
    metaTitle: "Wix Premium Tasarım — Sitenizi Ajans Standardına Çıkarın",
    metaDescription:
      "Mevcut Wix sitenize tipografi, renk sistemi ve bileşen tutarlılığı getiriyoruz. Öncesi/sonrası kıyaslama ile.",
  },
  {
    slug: "wix-eticaret-ajans",
    title: "Wix E-Ticaret — Kurumsal Yapılandırma",
    shortTitle: "E-Ticaret Ajans",
    summary: "Wix Stores kurulumu, iyzico entegrasyonu, kurumsal katalog ve checkout optimizasyonu.",
    description:
      "Kurumsal bir e-ticaret altyapısı için Wix Stores'u Türkiye gereksinimlerine göre yapılandırırız: iyzico ödeme, kargo, KDV/fatura, filtreleme, ürün şeması ve checkout CRO.",
    bullets: [
      "Wix Stores kurulumu ve kurumsal katalog",
      "iyzico entegrasyonu + alternatif ödeme seçenekleri",
      "Kargo (Yurtiçi, Aras, MNG, Sürat) ve KDV yapılandırması",
      "Gelişmiş ürün filtreleme ve arama",
      "Checkout CRO — ortalama dönüşüm +%18-30",
      "Product schema + Merchant Center hazırlığı",
    ],
    startingPrice: "Başlangıç: 38.000 TL",
    duration: "3-5 hafta",
    keywords: ["wix e-ticaret kurulum fiyat", "wix iyzico kurumsal entegrasyon", "wix online mağaza"],
    metaTitle: "Wix E-Ticaret Ajans Hizmeti — Kurumsal Satış Altyapısı",
    metaDescription:
      "Wix Stores, iyzico, kargo, KDV ve checkout CRO entegre. Türkiye'ye özel kurumsal e-ticaret yapılandırması.",
  },
  {
    slug: "wix-seo-ajans",
    title: "Wix SEO Ajansı — Ölçülebilir Organik Büyüme",
    shortTitle: "SEO Ajans",
    summary: "Teknik SEO, içerik stratejisi ve bağlantı profili yönetimi ile organik büyüme.",
    description:
      "Wix üzerinde teknik audit, anahtar kelime mimarisi, içerik stratejisi ve Search Console / GA4 raporlamayla ölçülebilir organik trafik artışı sağlarız. 90 günlük dashboard teslim.",
    bullets: [
      "Teknik SEO audit (crawl, canonical, hreflang)",
      "Anahtar kelime mimarisi ve içerik takvimi",
      "Pillar page + cluster içerik stratejisi",
      "Schema markup (Organization, Article, Product, LocalBusiness)",
      "90 günlük GSC + GA4 dashboard",
      "Aylık performans raporu",
    ],
    startingPrice: "Aylık: 12.500 TL",
    duration: "Minimum 3 ay",
    keywords: ["wix seo ajansı", "wix seo danışmanlığı", "wix organik trafik"],
    metaTitle: "Wix SEO Ajansı — 90 Günde Ölçülebilir Organik Büyüme",
    metaDescription:
      "Teknik audit, içerik stratejisi ve aylık raporlamayla Wix organik trafik büyüme programı.",
  },
  {
    slug: "wix-performans",
    title: "Wix Performans — Core Web Vitals Optimizasyonu",
    shortTitle: "Performans",
    summary: "LCP, INP, CLS hedef skorlarına optimizasyon ve yeşil CWV rozeti.",
    description:
      "Wix'in yapısal kısıtları içinde görsel optimizasyon, font stratejisi, script sadeleştirme, image CDN ve lazy-load ile Core Web Vitals'ı 'Good' banda çıkarırız.",
    bullets: [
      "Lighthouse & PageSpeed baseline raporu",
      "Görsel CDN + WebP/AVIF dönüşümü",
      "Font stratejisi ve layout shift kontrolü",
      "3rd-party script audit ve sadeleştirme",
      "LCP, INP, CLS hedef skor garantisi",
      "Teslim sonrası 30 gün izleme",
    ],
    startingPrice: "Sabit: 14.500 TL",
    duration: "1-2 hafta",
    keywords: ["wix hız optimizasyonu", "wix core web vitals", "wix performans"],
    metaTitle: "Wix Core Web Vitals Optimizasyonu — Yeşil Skor Garantisi",
    metaDescription:
      "Wix sitenize LCP, INP ve CLS hedefli optimizasyon. PageSpeed yeşil skor garantisi ile teslim.",
  },
  {
    slug: "wix-migration",
    title: "Wix Migration — WordPress / Shopify'dan Wix'e",
    shortTitle: "Migration",
    summary: "Mevcut platformdan Wix'e sıfır veri kaybı, 301 ile SEO güvenli geçiş.",
    description:
      "WordPress, Shopify, Wix eski altyapı veya özel sitelerden Wix Studio'ya kayıpsız geçiş. URL haritalama, 301 yönlendirme, görsel/içerik taşıma ve SEO koruma teslim.",
    bullets: [
      "Kaynak platform içerik envanteri",
      "URL haritalama ve 301 planı",
      "Görsel, blog, ürün ve form taşıma",
      "SEO meta & schema koruma",
      "Yayın öncesi QA + canlı kontrol listesi",
      "İlk 60 gün sıralama izleme",
    ],
    startingPrice: "Başlangıç: 24.000 TL",
    duration: "2-4 hafta",
    keywords: ["wix migration", "wordpress wix taşıma", "shopify wix geçiş"],
    metaTitle: "Wix Migration Hizmeti — SEO Güvenli Platform Geçişi",
    metaDescription:
      "WordPress veya Shopify'dan Wix'e kayıpsız geçiş. URL haritası, 301 planı ve 60 günlük sıralama izleme.",
  },
  {
    slug: "wix-cro",
    title: "Wix CRO — Dönüşüm Oranı Optimizasyonu",
    shortTitle: "CRO",
    summary: "Hypothesis-driven A/B test programı ile ölçülebilir dönüşüm artışı.",
    description:
      "Veri odaklı CRO programı: GA4 event mapping, heatmap, funnel analizi, hipotez havuzu ve Wix üzerinde yürüttüğümüz A/B testler. Çeyreklik 3-4 test, her biri net kazanç/kayıp raporlu.",
    bullets: [
      "GA4 + heatmap kurulumu ve funnel haritası",
      "Hipotez atölyesi — test önceliklendirme (ICE)",
      "Çeyreklik 3-4 A/B test (varyant tasarımı dahil)",
      "İstatistiksel anlamlılık raporu",
      "Kazanan varyantın canlıya alınması",
      "Çeyrek sonu portföy kazanç raporu",
    ],
    startingPrice: "Çeyreklik: 28.000 TL",
    duration: "3 ay döngü",
    keywords: ["wix dönüşüm optimizasyonu", "wix cro", "wix a/b test"],
    metaTitle: "Wix CRO Hizmeti — Veri Odaklı Dönüşüm Artışı",
    metaDescription:
      "Çeyreklik A/B test programı ile Wix sitenizde ölçülebilir dönüşüm artışı.",
  },
  {
    slug: "wix-bakim",
    title: "Wix Bakım — Aylık Strateji ve Teknik Destek",
    shortTitle: "Bakım",
    summary: "Aylık retainer ile içerik, SEO takibi ve teknik destek.",
    description:
      "Sitenizin sürekli iyileşmesi için aylık retainer. Strateji görüşmesi, içerik güncellemesi, performans izleme, Search Console takibi ve öncelikli teknik destek.",
    bullets: [
      "Aylık 8 saat strateji + yapım zamanı",
      "GSC / GA4 izleme ve aylık rapor",
      "Öncelikli yanıt (4 saat içinde)",
      "İçerik güncellemesi ve görsel yönetimi",
      "Performans ve uptime takibi",
      "Çeyreklik strateji oturumu",
    ],
    startingPrice: "Aylık: 9.500 TL",
    duration: "3 ay min. taahhüt",
    keywords: ["wix bakım paketi", "wix aylık bakım", "wix retainer"],
    metaTitle: "Wix Bakım Paketi — Aylık Strateji ve Teknik Destek",
    metaDescription:
      "Aylık retainer ile Wix sitenizin sürekli iyileşmesi: strateji, içerik, teknik destek.",
  },
];

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  priceLabel: string;
  priceNote: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
};

export const PLANS: Plan[] = [
  {
    slug: "launch",
    name: "Launch",
    tagline: "Tek amaçlı kurulum ya da yenileme",
    priceLabel: "18.000 TL",
    priceNote: "tek seferlik — 2-3 hafta",
    features: [
      "Mevcut tasarımın ajans standardına taşınması",
      "5-7 sayfa tasarım sistemi uygulaması",
      "Temel SEO ve A11y kontrol",
      "Core Web Vitals yeşil skor hedefi",
      "2 revizyon hakkı",
    ],
    ctaText: "Strateji görüşmesi planlayın",
  },
  {
    slug: "scale",
    name: "Scale",
    tagline: "Kurumsal web + 90 gün büyüme programı",
    priceLabel: "48.000 TL",
    priceNote: "tek seferlik + 3 ay bakım",
    highlight: true,
    features: [
      "Kurumsal Wix site (marka atölyesi dahil)",
      "Teknik + içerik SEO hazırlığı",
      "Core Web Vitals ve A11y WCAG AA",
      "GA4 + Search Console dashboard kurulumu",
      "3 ay Scale bakım paketi dahil",
      "2 strateji oturumu / çeyrek",
    ],
    ctaText: "Teklif alın",
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "Aylık retainer — SEO, CRO, bakım",
    priceLabel: "12.500 TL",
    priceNote: "aylık (min 3 ay)",
    features: [
      "Aylık 16 saat ajans kapasitesi",
      "SEO içerik üretimi (2 makale / ay)",
      "Aylık CWV & GSC raporu",
      "Çeyrekte 1 A/B test",
      "Öncelikli yanıt 4 saat",
      "Stratejik çeyrek planı",
    ],
    ctaText: "Growth planına geçin",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  sector: string;
  quote: string;
  result?: string;
  initial: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Deniz A.",
    role: "Pazarlama Direktörü",
    sector: "B2B SaaS · İstanbul",
    quote:
      "Kurumsal sitemizi WordPress'ten Wix Studio'ya taşıdılar; tek satır trafik kaybı yaşamadık. 3 ay içinde marka aramalarımız %42 arttı, ajans panoda her şeyi şeffaf gösteriyor.",
    result: "+%42 marka araması",
    initial: "D",
  },
  {
    name: "Elif B.",
    role: "Kurucu",
    sector: "Butik kozmetik · E-ticaret",
    quote:
      "Önceki ajans CWV'den bahsetmiyordu bile. Wix Uzmanı, LCP'yi 4.1s'den 1.8s'e düşürdü ve checkout dönüşümümüz %24 arttı. Raporlar anlaşılır, vakit kaybettirmiyorlar.",
    result: "LCP 4.1s → 1.8s",
    initial: "E",
  },
  {
    name: "Barış K.",
    role: "CEO",
    sector: "Mühendislik danışmanlığı · Ankara",
    quote:
      "Randevu bazlı çalışma disiplini kurumsal bir ajansla çalıştığımızı hissettirdi. Sabit kapsam, sabit fiyat, beklenen tarihte yayın. Diyecek söz yok.",
    result: "Tarihinde yayın",
    initial: "B",
  },
  {
    name: "Seren Y.",
    role: "Marka Müdürü",
    sector: "Butik otel · Bodrum",
    quote:
      "Marka atölyesiyle başladıkları için tasarım birinci denemede oturdu. Sürekli revizyon trafiğine girmedik. Ekip çok hazırlıklı geldi.",
    result: "2 revizyonda teslim",
    initial: "S",
  },
  {
    name: "Cem T.",
    role: "E-Ticaret Yöneticisi",
    sector: "Premium giyim · Online",
    quote:
      "CRO programıyla bir çeyrekte 3 A/B test çalıştırdık; ikisi kazandı. Sepete ekleme oranımız %17 arttı. Hipotezleri iş hedefimize bağlamaları fark yarattı.",
    result: "Sepete ekleme +%17",
    initial: "C",
  },
  {
    name: "Zeynep D.",
    role: "İletişim Müdürü",
    sector: "Kurumsal vakıf",
    quote:
      "Erişilebilirlik (A11y) WCAG AA uyumu kurumsal gereksinimimizdi — denetim geçebilecek kalitede teslim ettiler. Hukuk ekibimiz rahatladı.",
    result: "WCAG AA onaylı",
    initial: "Z",
  },
];

export const HONEST_PROOF = [
  { label: "Ortalama LCP iyileşme", value: "-58%", hint: "Son 12 performans projesi" },
  { label: "Organik trafik", value: "+%82", hint: "6 ay SEO retainer ortalama" },
  { label: "Çekirdek ekip", value: "3 uzman", hint: "Tasarım · SEO · Geliştirme" },
  { label: "Tamamlanan proje", value: "40+", hint: "Yalnızca Wix platformu" },
];

export const TRUST_SIGNALS = [
  "Tasarım + SEO + geliştirici üçlü ekibi",
  "Core Web Vitals yeşil skor hedefi",
  "Sabit kapsam, sabit fiyat",
  "Her proje için ölçüm panosu",
  "KVKK uyumlu kurumsal süreç",
  "Yalnızca Wix — platform uzmanlığı",
];

export const FAQ_ITEMS = [
  {
    q: "Kurumsal bir markayız, Wix bize uygun mu?",
    a: "Çoğu kurumsal marka için Wix Studio yeterli ve bakım açısından avantajlı. Çok özel arka uç iş akışı, ağır ERP entegrasyonu veya headless mimari gereksinimi varsa önce ücretsiz strateji görüşmesinde birlikte değerlendiriyoruz.",
  },
  {
    q: "Ajans kalitesi denince neyi kastediyorsunuz?",
    a: "Her projede üç uzman birden çalışır: marka/tasarım yönetmeni, SEO uzmanı ve geliştirici. Teslim öncesi A11y (WCAG AA), Core Web Vitals ve SEO audit çekiyoruz. Kurumsal ajanslardan beklediğiniz süreç netliğini Wix'e getiriyoruz.",
  },
  {
    q: "Fiyatlar neden kardeş sitelere göre farklı?",
    a: "Wix Uzmanı, kurumsal projelere odaklanmış ajans modelidir. Bireysel sorun çözme veya birebir destek için kardeş markamız wix-destek.com.tr daha uygundur. İki hizmet farklı kapsamdadır.",
  },
  {
    q: "Mevcut ajansımdan geçişte riskler ne?",
    a: "SEO sıralaması ve mevcut entegrasyonlar. Biz migration projelerinde URL haritası, 301 yönlendirme ve 60 günlük sıralama izlemesi taahhüdüyle çalışıyoruz. Yayın öncesi kontrol listesiyle risk minimumda.",
  },
  {
    q: "Süreç nasıl işliyor?",
    a: "1) Ücretsiz 30 dk strateji görüşmesi. 2) Kapsam ve sabit fiyat teklifi. 3) Marka/içerik atölyesi. 4) Tasarım ve geliştirme sprintleri. 5) Teslim öncesi A11y + CWV + SEO auditi. 6) Yayın ve 30 gün bakım.",
  },
  {
    q: "Core Web Vitals yeşil skor garantisi nasıl?",
    a: "Performans projelerimizde hedef değerlere (LCP < 2.5s, INP < 200ms, CLS < 0.1) ulaşamazsak ek ücret talep etmeden iyileştirmeye devam ediyoruz. Ölçüm kriterimiz PageSpeed Insights field data (28 gün).",
  },
  {
    q: "KVKK ve veri gizliliği ne durumda?",
    a: "Tüm proje dosyaları yalnızca proje ekibiyle paylaşılır, üçüncü taraf servislere erişim yazılı onay ile verilir. Form altyapımız KVKK uyumlu, müşteri verileri şifrelenmiş kanallarda tutulur. Gizlilik sözleşmesi (NDA) talep edebilirsiniz.",
  },
  {
    q: "Uzaktan mı çalışıyorsunuz?",
    a: "Evet. Türkiye genelinde uzaktan çalışıyoruz; yüz yüze toplantı talebinde İstanbul içinde buluşabiliyoruz. İletişim Google Meet, e-posta ve paylaşımlı proje yönetim panosu üzerinden yürür.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  service: string;
  challenge: string;
  approach: string[];
  metrics: { label: string; value: string; note?: string }[];
  quote?: { text: string; author: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ik-saas-wix-studio-migration",
    client: "İK yazılımı — Anonim müşteri",
    sector: "İnsan kaynakları SaaS · İstanbul · NDA'lı",
    service: "Yeniden marka + WordPress → Wix Studio",
    challenge: "Eski WordPress sitesi aylık bakıma boğulmuştu; arayüz de şirketin büyüdüğü yeri yansıtmıyordu. Satış ekibinin rahatça önüne koyabileceği, sıfır trafik kaybıyla taşınmış bir site çıkması gerekiyordu.",
    approach: [
      "İçerik envanteri ve URL haritası",
      "Marka atölyesi + yeni tasarım sistemi",
      "Wix Studio'da bileşen kütüphanesi",
      "301 yönlendirme planı, canonical kontrol",
      "GA4 event yapısı ve Looker Studio panosu",
    ],
    metrics: [
      { label: "Organik trafik", value: "+%28", note: "İlk 90 gün" },
      { label: "Marka araması", value: "+%42", note: "3 ay" },
      { label: "LCP", value: "3.8s → 1.6s" },
      { label: "Trafik kaybı", value: "0", note: "Migration sonrası" },
    ],
    quote: {
      text: "Ajans panoda her şeyi şeffaf gösteriyor; 3 ay içinde marka aramalarımız %42 arttı.",
      author: "Deniz A. — Pazarlama Direktörü",
    },
  },
  {
    slug: "butik-parfum-performans-cro",
    client: "Butik parfüm markası",
    sector: "Niş e-ticaret · İstanbul",
    service: "Performans + dönüşüm programı",
    challenge: "Mobilde açılış süresi 4 saniyeyi geçiyor, checkout yarıda kalıyordu. Düşen dönüşümün ardındaki asıl sebebi bulup hem hızı hem sepet akışını aynı çeyrekte toparlamak istiyorlardı.",
    approach: [
      "PageSpeed field data baseline",
      "Görsel CDN + AVIF dönüşümü",
      "Font stratejisi + layout shift kontrolü",
      "3 çeyreklik A/B test (hero, ürün kartı, checkout)",
      "GA4 event map + ecommerce tracking",
    ],
    metrics: [
      { label: "LCP", value: "4.1s → 1.8s" },
      { label: "Checkout dönüşüm", value: "+%24" },
      { label: "Sepete ekleme", value: "+%17" },
      { label: "Mobil CWV", value: "Tümü yeşil" },
    ],
    quote: {
      text: "Raporlar anlaşılır, vakit kaybettirmiyorlar — checkout dönüşümümüz %24 arttı.",
      author: "Elif B. — Kurucu",
    },
  },
  {
    slug: "muhendislik-danismanlik-kurumsal",
    client: "Mühendislik danışmanlık bürosu",
    sector: "Altyapı danışmanlığı · Ankara",
    service: "Kurumsal site + randevu akışı",
    challenge: "Ton amatör kalıyordu, referans projeleri dağınıktı ve form gönderenlerin büyük kısmı bir daha dönmüyordu. Marka ciddiyetini yansıtacak ve teklif isteklerini süreç içine sokacak bir site gerekliydi.",
    approach: [
      "Sektör analizi + competitor benchmarking",
      "Yeni marka sesi ve mesajlaşma çerçevesi",
      "Proje portföyü için case-study şablonu",
      "Çok adımlı form + randevu takvimi entegrasyonu",
      "LocalBusiness + Organization schema",
    ],
    metrics: [
      { label: "Form dönüşümü", value: "+%63" },
      { label: "Ortalama oturum", value: "1:48 → 3:12" },
      { label: "A11y", value: "WCAG AA" },
      { label: "Yayın", value: "Tarihinde" },
    ],
    quote: {
      text: "Randevu bazlı çalışma disiplini kurumsal bir ajansla çalıştığımızı hissettirdi.",
      author: "Barış K. — CEO",
    },
  },
];
