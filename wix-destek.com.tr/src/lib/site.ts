export const SITE = {
  name: "Wix Destek TR",
  fullName: "Wix Destek Türkiye",
  domain: "wix-destek.com.tr",
  url: "https://wix-destek.com.tr",
  email: "blakfy@hotmail.com",
  phone: "+90 000 000 00 00",
  whatsapp: {
    number: "905000000000",
    display: "+90 500 000 00 00",
    link: "https://wa.me/905000000000",
  },
  tagline: "Wix sitenizi birlikte toparlayalım",
  description:
    "Wix sitenizle ilgili her soruna Türkçe profesyonel destek. Site kurulumu, tasarım, SEO, domain ve e-ticaret hizmetleri. 24 saat içinde yanıt.",
  locale: "tr_TR",
  twitter: "",
  author: "Wix Destek TR Ekibi",
  foundedYear: 2023,
} as const;

export const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Paketler", href: "/fiyatlar" },
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
    slug: "wix-site-kurulumu",
    title: "Wix Site Kurulumu — Anahtar Teslim Hizmet",
    shortTitle: "Site Kurulumu",
    summary: "Sıfırdan profesyonel Wix sitesi. Tema, sayfa, form ve SEO temeli dahil.",
    description:
      "İşinize özel tema seçimi, tüm sayfaların oluşturulması, iletişim formu, temel SEO ayarları ve yayına alma dahil anahtar teslim Wix site kurulumu. Siz fikirleri söyleyin, biz hepsini ekrana koyalım.",
    bullets: [
      "İşinize uygun Wix teması seçimi ve kişiselleştirme",
      "Ana sayfa + 5-7 alt sayfa (hakkımızda, hizmetler, iletişim, SSS, blog)",
      "İletişim formu kurulumu ve test",
      "Mobil uyum ve hızlı açılış ayarları",
      "Temel SEO başlangıç ayarları (meta, sitemap)",
      "Domain bağlama ve yayına alma",
    ],
    duration: "3-7 iş günü",
    keywords: ["wix site kurulumu", "wix sitesi kurma", "wix site kurulumu fiyatı"],
    metaTitle: "Wix Site Kurulumu — Sıfırdan Profesyonel Web Sitesi",
    metaDescription:
      "İşinize özel Wix site kurulumu. Tema seçimi, sayfalar, form, SEO başlangıç ayarları dahil anahtar teslim hizmet. Teklif için iletişime geçin.",
  },
  {
    slug: "wix-tasarim-duzenleme",
    title: "Wix Tasarım Düzenleme ve Yenileme",
    shortTitle: "Tasarım Düzenleme",
    summary: "Mevcut Wix sitenizin tasarımını modernleştirin. Renk, tipografi, mobil uyum.",
    description:
      "Mevcut Wix sitenizin tasarımını marka kimliğinize uyumlu hale getiriyoruz: renkler, tipografi, görseller, mobil uyum ve 2025 trendlerine uygun modern görünüm. Öncesi ve sonrası karşılaştırmasıyla.",
    bullets: [
      "Renk paleti ve tipografi düzenlemesi",
      "Hero bölümü ve CTA yenileme",
      "Mobil uyum kontrolü ve düzeltmeleri",
      "Görsel iyileştirme (stok görsel desteği)",
      "Buton ve form tasarım güncellemesi",
      "Marka kimliğine hizalama",
    ],
    duration: "2-5 iş günü",
    keywords: ["wix tasarım düzenleme", "wix tasarım yardım", "wix tema değiştirme"],
    metaTitle: "Wix Tasarım Düzenleme — Modern Arayüz Yenileme",
    metaDescription:
      "Mevcut Wix sitenizin tasarımını modernleştirin. Renk, tipografi, mobil uyum ve marka kimliğine uygun tasarım düzenlemesi.",
  },
  {
    slug: "wix-seo",
    title: "Wix SEO — Google'da Görünür Olun",
    shortTitle: "SEO",
    summary: "Wix siteniz için teknik ve içerik SEO. Anahtar kelime, meta, hız, sitemap.",
    description:
      "Wix sitenizin Google'da üst sıralara çıkması için kapsamlı SEO optimizasyonu. Anahtar kelime araştırması, meta taglar, sitemap, Search Console entegrasyonu, site hızı ve içerik önerileri.",
    bullets: [
      "Anahtar kelime araştırması ve hedefleme",
      "Meta title ve description optimizasyonu",
      "Sitemap ve robots.txt ayarları",
      "Google Search Console kurulumu",
      "Sayfa hızı ve Core Web Vitals iyileştirmesi",
      "İçerik önerileri ve blog stratejisi",
    ],
    duration: "5-10 iş günü",
    keywords: ["wix seo", "wix seo ayarları", "wix google sıralama"],
    metaTitle: "Wix SEO Hizmeti — Google'da Üst Sıralara Çıkın",
    metaDescription:
      "Wix siteniz için teknik ve içerik SEO. Anahtar kelime, meta tag, site hızı, sitemap ve Search Console kurulumu. Ölçülebilir sıralama artışı.",
  },
  {
    slug: "wix-domain-baglama",
    title: "Wix Domain Bağlama ve DNS Kurulumu",
    shortTitle: "Domain Bağlama",
    summary: "Özel alan adınızı Wix'e sorunsuz bağlayın. GoDaddy, Natro, İsimTescil uyumlu.",
    description:
      "Satın aldığınız alan adını (GoDaddy, Natro, İsimTescil, Türk Telekom, vb.) Wix sitenize doğru DNS ayarlarıyla bağlayalım. E-posta yönlendirmeleri ve SSL kontrolü dahil.",
    bullets: [
      "DNS kayıtlarının (A, CNAME, MX) doğru yapılandırılması",
      "SSL sertifikası kontrolü",
      "WWW ve non-WWW yönlendirmesi",
      "E-posta (MX) kayıt desteği",
      "Eski site 301 yönlendirme (varsa)",
      "Yayın sonrası test ve doğrulama",
    ],
    duration: "Aynı gün",
    keywords: ["wix domain bağlama", "wix alan adı bağlama", "wix godaddy domain bağlama"],
    metaTitle: "Wix Domain Bağlama — DNS Ayarları ve Yönlendirme",
    metaDescription:
      "Özel alan adınızı Wix sitenize sorunsuz bağlayın. GoDaddy, Natro, İsimTescil dahil tüm sağlayıcılarla uyumlu DNS kurulumu.",
  },
  {
    slug: "wix-e-ticaret",
    title: "Wix E-Ticaret Kurulumu — Türkiye'ye Özel",
    shortTitle: "E-Ticaret",
    summary: "Wix Stores ile satışa hazır online mağaza. iyzico, kargo, KDV entegre.",
    description:
      "Wix Stores üzerinde Türkiye'ye özel yapılandırılmış e-ticaret sitesi. iyzico ödeme entegrasyonu, kargo seçenekleri, KDV ayarları, stok yönetimi ve ilk ürünlerin eklenmesi dahil.",
    bullets: [
      "Wix Stores kurulum ve yapılandırma",
      "iyzico ödeme entegrasyonu",
      "Kargo seçenekleri (Yurtiçi, Aras, MNG, PTT)",
      "KDV oranları ve fatura ayarları",
      "İlk 10 ürünün eklenmesi (görsel + açıklama)",
      "Sipariş akışı testi ve teslim",
    ],
    duration: "5-10 iş günü",
    keywords: ["wix e-ticaret", "wix e-ticaret kurulumu", "wix iyzico entegrasyonu"],
    metaTitle: "Wix E-Ticaret Kurulumu — Satışa Hazır Online Mağaza",
    metaDescription:
      "Wix Stores ile profesyonel e-ticaret sitesi kurulumu. iyzico, kargo, KDV, stok yönetimi entegre. Türkiye'ye özel yapılandırma ile satışa başlayın.",
  },
  {
    slug: "wix-hata-giderme",
    title: "Wix Acil Destek ve Hata Giderme",
    shortTitle: "Hata Giderme",
    summary: "Editör açılmıyor, site yayınlanmıyor, ödeme sorunu — aynı gün çözüm.",
    description:
      "Wix'te yaşadığınız acil sorunlar için hızlı destek: editör açılmıyor, site yayınlanmıyor, form çalışmıyor, ödeme hatası, görsel yüklenmiyor, abonelik/faturalama sorunları ve daha fazlası.",
    bullets: [
      "Editör ve kaydetme sorunları",
      "Site yayın hatası çözümü",
      "Form çalışmama / e-posta gelmiyor",
      "Görsel ve medya yükleme sorunu",
      "Ödeme ve abonelik sorunları",
      "Performans ve hız problemi",
    ],
    duration: "Aynı gün / acil",
    keywords: ["wix hata giderme", "wix sitesi yayınlanmıyor", "wix editör çökmesi"],
    metaTitle: "Wix Hata Giderme — Acil Destek ve Sorun Çözümü",
    metaDescription:
      "Wix editörü açılmıyor, site yayınlanmıyor, ödeme sorunu mu yaşıyorsunuz? Aynı gün acil destek ile problemlerinize kalıcı çözüm.",
  },
  {
    slug: "wix-egitim",
    title: "Wix Birebir Eğitim ve Kişisel Ders",
    shortTitle: "Eğitim",
    summary: "Sıfırdan ileri seviyeye birebir Türkçe Wix eğitimi. Ekran paylaşımıyla.",
    description:
      "Wix'i kendiniz kullanmak ister misiniz? Ekran paylaşımı üzerinden birebir, Türkçe ve sizin ihtiyaçlarınıza özel müfredatla ilerleyen Wix eğitimi. Sıfırdan ileri seviyeye.",
    bullets: [
      "İhtiyacınıza göre kişisel müfredat",
      "Canlı ekran paylaşımlı ders",
      "Editör kullanımı, sayfa ekleme, tasarım",
      "Form, SEO, domain, e-ticaret modülleri",
      "Ders sonrası notlar ve kayıt",
      "Soruları ders dışı WhatsApp desteği",
    ],
    duration: "1-2 saat / ders",
    keywords: ["wix eğitim", "wix birebir ders", "wix kullanımı"],
    metaTitle: "Wix Eğitimi — Birebir Türkçe Kişisel Ders",
    metaDescription:
      "Wix'i kendiniz kullanmak ister misiniz? Sıfırdan ileri seviyeye birebir Türkçe eğitim. Ekran paylaşımıyla kişisel ders, özel müfredat.",
  },
];

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  scope: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
  group: "destek" | "seo";
};

export const PLANS: Plan[] = [
  {
    slug: "baslangic",
    name: "Başlangıç",
    tagline: "Tek bir sorunum var",
    scope: "Tek seferlik · aynı gün başlar",
    group: "destek",
    features: [
      "Tek bir konuya odaklı çözüm",
      "E-posta + WhatsApp destek",
      "24 saat içinde başlama",
      "1 düzeltme hakkı",
    ],
    ctaText: "Sorununuzu anlatın",
  },
  {
    slug: "standart",
    name: "Standart",
    tagline: "Siteyi sıfırdan kuralım",
    scope: "Tek seferlik · anahtar teslim",
    group: "destek",
    highlight: true,
    features: [
      "Anahtar teslim Wix kurulumu",
      "Ana sayfa + 5 alt sayfa",
      "Mobil uyum ve temel SEO",
      "Domain bağlama dahil",
      "2 revizyon hakkı",
      "30 gün ücretsiz destek",
    ],
    ctaText: "Teklif alın",
  },
  {
    slug: "pro",
    name: "Pro Destek",
    tagline: "Sürekli yanınızda olalım",
    scope: "Aylık abonelik · esnek",
    group: "destek",
    features: [
      "Ayda 5 saat teknik destek",
      "Öncelikli yanıt (4 saat içinde)",
      "Aylık site sağlık raporu",
      "Performans takibi",
      "WhatsApp + e-posta 7/24",
      "İstediğin zaman iptal",
    ],
    ctaText: "Teklif alın",
  },
];

export const SEO_PLANS: Plan[] = [
  {
    slug: "seo-temel",
    name: "SEO Temel",
    tagline: "Temeli doğru kuralım",
    scope: "Tek seferlik · 5-7 iş günü",
    group: "seo",
    features: [
      "Anahtar kelime araştırması (30 kelime)",
      "5 sayfa meta optimizasyonu",
      "Sitemap + robots.txt kontrolü",
      "Google Search Console kurulumu",
      "Temel Core Web Vitals raporu",
      "H1/H2 yapısı düzenleme",
    ],
    ctaText: "Teklif alın",
  },
  {
    slug: "seo-buyume",
    name: "SEO Büyüme",
    tagline: "Google'da üst sıralara çıkalım",
    scope: "Aylık · 3 ay minimum",
    group: "seo",
    highlight: true,
    features: [
      "Ayda 4 blog yazısı (SEO uyumlu)",
      "60+ anahtar kelime hedefleme",
      "Aylık teknik SEO denetimi",
      "Backlink analizi ve öneri",
      "Rakip takibi (3 rakip)",
      "Aylık sıralama raporu",
      "Google Analytics 4 yorumu",
    ],
    ctaText: "Teklif alın",
  },
  {
    slug: "seo-e-ticaret",
    name: "SEO E-Ticaret",
    tagline: "Ürün sayfalarımı sattıralım",
    scope: "Aylık · dönüşüm odaklı",
    group: "seo",
    features: [
      "Ürün sayfası başına meta + şema",
      "Kategori sayfası optimizasyonu",
      "Ürün foto alt text sistemi",
      "Zengin sonuç (rich snippet) kurulumu",
      "Sepet + checkout hız optimizasyonu",
      "Dönüşüm odaklı anahtar kelime",
      "iyzico takibi + analitik",
    ],
    ctaText: "Teklif alın",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  sector: string;
  quote: string;
  result?: string;
  initial: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Merve K.",
    role: "Kurucu",
    sector: "Butik pastane · İstanbul",
    quote:
      "Wix sitemi sıfırdan açmak istedim ama ingilizce panelde boğuldum. Formu doldurduktan 6 saat sonra aradılar, 3 gün içinde hem site hem sipariş formu yayında. Her adımda Türkçe anlattılar.",
    result: "3 günde yayın",
    initial: "M",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Ahmet D.",
    role: "İşletme sahibi",
    sector: "Klima servisi · Ankara",
    quote:
      "Google'da hiç çıkmıyorduk. SEO paketi aldık, meta ve hız ayarlarını tek tek yaptılar. 6 hafta sonra 'klima servisi ankara' aramasında ilk sayfadayız.",
    result: "1. sayfa · 6 hafta",
    initial: "A",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Ceren O.",
    role: "E-ticaret müdürü",
    sector: "Kozmetik · Online",
    quote:
      "iyzico entegrasyonunu kendim denedim, ödemeler yarıda kalıyordu. Bir günde düzelttiler, ilk 30 günde siparişler 2 katına çıktı. Fatura net, sürpriz yok.",
    result: "Sipariş x2",
    initial: "C",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Burak T.",
    role: "Freelance fotoğrafçı",
    sector: "Portföy sitesi · İzmir",
    quote:
      "Domain Natro'daydı, Wix'e bir türlü bağlayamadım. WhatsApp'tan yazdım, aynı gün çözdüler. Tek sabit ücret, sorun gitti.",
    result: "Aynı gün çözüm",
    initial: "B",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Selin Y.",
    role: "Diyetisyen",
    sector: "Danışmanlık sitesi",
    quote:
      "Wix'i kendim kullanmak istedim, 4 ders aldım. Ekran paylaşımlı birebir ders çok iyiydi, notlar geldi. Artık kendi bloglarımı yazabiliyorum.",
    result: "Kendi kullanır oldu",
    initial: "S",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Gökhan A.",
    role: "Restoran sahibi",
    sector: "Gastronomi · Bursa",
    quote:
      "Eski sitem çok eskimişti. Tasarım yenileme paketiyle tamamen modernleşti. Rezervasyon formu çalışıyor, mobilde de problemsiz. Telefonda her soruma Türkçe cevap aldım.",
    result: "Mobil sıfır hata",
    initial: "G",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
  },
];

export const HONEST_PROOF = [
  { label: "Yanıt süresi", value: "24 sa", hint: "Form sonrası ortalama ilk dönüş" },
  { label: "Ön görüşme", value: "Ücretsiz", hint: "20 dk kapsam analizi" },
  { label: "Uzmanlık", value: "Yalnız Wix", hint: "Başka platformda çalışmıyoruz" },
  { label: "Fiyat", value: "Sabit", hint: "Teklif sonrası değişmez" },
];

export const TRUST_SIGNALS = [
  "24 saat içinde yanıt",
  "Sabit fiyat, sürpriz yok",
  "Ön görüşme ücretsiz",
  "Türkçe destek, Türk saatlerinde",
  "KVKK uyumlu iletişim",
  "Sadece Wix — uzmanlaşmış destek",
];

export const FAQ_ITEMS = [
  {
    q: "Wix Türkçe destek var mı?",
    a: "Wix'in kendisi Türkçe doğrudan destek sunmuyor. Wix Destek TR olarak biz, Wix platformunda yaşadığınız her konuda Türkçe profesyonel destek veriyoruz — e-posta, WhatsApp ve ekran paylaşımıyla.",
  },
  {
    q: "Wix site kurmak ne kadar sürer?",
    a: "Standart bir 5-7 sayfalık kurumsal sitenin kurulumu 3-7 iş gününde tamamlanır. E-ticaret sitesi 5-10 iş günü, tek sayfa landing 1-2 günde teslim edilir. Süre, bize vereceğiniz içerik ve görsel akışına bağlıdır.",
  },
  {
    q: "Wix iyzico destekliyor mu?",
    a: "Wix, iyzico'yu resmî olarak doğrudan desteklemese de iyzico'nun bağımsız ödeme akışıyla Wix sitenizde çalıştırılabiliyor. Bu entegrasyonu Türkiye'ye özel olarak biz kurabiliyoruz.",
  },
  {
    q: "Wix mi WordPress mi?",
    a: "Küçük-orta işletme, hızlı kurulum, kolay yönetim ve bakım maliyeti düşük site istiyorsanız Wix daha uygun. Çok özel fonksiyonel ihtiyaçlar, ağır blog veya çok büyük e-ticaret için WordPress'e bakmaya değer. Durumunuzu anlatın, size özel öneri sunalım.",
  },
  {
    q: "Fiyatlar sabit mi, sonradan değişir mi?",
    a: "Teklifimizi verdikten sonra fiyat sabittir. Sürpriz ek ücret çıkarmıyoruz. Kapsam değişirse önce size bildirir, onayınızı aldıktan sonra ilerleriz.",
  },
  {
    q: "Ön görüşme ücretli mi?",
    a: "Hayır. İlk 20 dakikalık ön görüşme tamamen ücretsiz. Sorununuzu dinliyor, size en uygun çözümü ve net fiyatı sunuyoruz.",
  },
  {
    q: "Uzaktan mı hizmet veriyorsunuz?",
    a: "Evet, tüm Türkiye'ye uzaktan hizmet veriyoruz. İşlemleri ekran paylaşımı, e-posta ve WhatsApp üzerinden yürütüyoruz. İstanbul, Ankara, İzmir dahil her ilden müşterilerimiz var.",
  },
  {
    q: "Kişisel verilerim güvende mi?",
    a: "KVKK uyumlu çalışıyoruz. Form üzerinden paylaştığınız bilgileri yalnızca size yanıt vermek için kullanıyoruz, üçüncü taraflarla paylaşmıyoruz. Gizlilik politikamızı inceleyebilirsiniz.",
  },
];
