export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  steps?: { title: string; body: string }[];
  callout?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: "Rehber" | "Karşılaştırma" | "Çözüm" | "SEO" | "E-Ticaret";
  readMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  keyword: string;
  intro: string[];
  sections: BlogSection[];
  faq?: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  relatedSlugs?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wix-seo-rehberi-2026",
    title: "Wix SEO Rehberi 2026: Google'da Üst Sıralara Çıkmak",
    excerpt:
      "Wix sitenizi 2026'da Google'da üst sıralara çıkarmak için gereken teknik ve içerik SEO ayarlarının tam listesi. Türkçe, sade, adım adım.",
    metaTitle: "Wix SEO Rehberi 2026 — Üst Sıralara Çıkmak İçin Adım Adım",
    metaDescription:
      "2026 için güncel Wix SEO rehberi. Meta taglar, Core Web Vitals, sitemap, Search Console, içerik optimizasyonu. Türkçe örneklerle.",
    category: "SEO",
    readMinutes: 12,
    publishedAt: "2026-04-14",
    keyword: "wix seo ayarları",
    intro: [
      "Wix'in 2018'den beri SEO altyapısı ciddi biçimde olgunlaştı. Eskiden \"Wix Google'a uygun değil\" deniyordu; bugün doğru ayarlarla bir WordPress sitesi kadar rahat sıralanabiliyor. Ancak Wix panelinin Türkçe dokümantasyonu yetersiz, varsayılan ayarların çoğu optimize değil.",
      "Bu rehberde Wix sitenizi 2026 standartlarına göre SEO uyumlu hale getirmek için yapmanız gerekenleri üç katmanda topladık: teknik SEO, içerik SEO ve performans (Core Web Vitals). Her adım için Wix panelinin tam yerini belirttik.",
    ],
    sections: [
      {
        heading: "1. Temel teknik ayarlar",
        paragraphs: [
          "Önce Wix'in arka plandaki temelini düzeltiyoruz. Bu adımlar 15 dakikanızı alır ama sıralama açısından en yüksek etkili olanlardır.",
        ],
        steps: [
          {
            title: "SEO Wiz aracını tamamlayın",
            body:
              "Wix Panel → Marketing & SEO → SEO → Get Found on Google. Kişiselleştirilmiş bir kontrol listesi sunar. Türkçe anahtar kelimenizi ve konumunuzu girmeyi unutmayın.",
          },
          {
            title: "Site dili tr olarak ayarlayın",
            body:
              "Settings → Language & Region. Yanlış dil etiketi Google'a \"bu sayfa İngilizce\" sinyali gönderir, Türkçe aramalarda görünmezsiniz.",
          },
          {
            title: "Sayfa URL'lerini sadeleştirin",
            body:
              "Wix varsayılan URL'leri /post_p1 gibi üretir. Her sayfanın Page Settings → URL bölümünden okunabilir ve anahtar kelime içeren slug yazın: /wix-seo-rehberi.",
          },
          {
            title: "Search Console bağlayın",
            body:
              "Wix Dashboard → SEO → Site Verification. Google Search Console'a giriş yapın, siteyi doğrulayın ve sitemap.xml URL'sini gönderin (site.com/sitemap.xml).",
          },
        ],
      },
      {
        heading: "2. Meta title ve description",
        paragraphs: [
          "Her sayfanın kendi meta title ve description'ı olmalı. Wix'te bu ayarlar sayfa bazında yapılır.",
          "Kural: title 50-60 karakter, description 140-155 karakter, anahtar kelime başa yakın, marka adı sonda.",
        ],
        list: [
          "İyi: \"Wix SEO Rehberi 2026 — Google'da Üst Sıralara Çıkmak | Wix Destek\"",
          "Kötü: \"Ana Sayfa | Firmanızın Adı | Çok Uzun Bir Açıklama...\"",
          "Her sayfada H1 etiketini yalnızca bir kez kullanın",
          "Alt görseller için anlamlı alt text yazın; Wix varsayılan \"image-01.jpg\" yerine içerik tanımı koyun",
        ],
      },
      {
        heading: "3. Core Web Vitals ve hız",
        paragraphs: [
          "Google 2021'den beri sayfa hızını sıralama faktörü olarak kullanıyor. Wix siteleri yoğun kod yüklerken yavaş açılabiliyor; bunu düzeltmek mümkün.",
        ],
        list: [
          "Görselleri yüklemeden önce 1920px genişliğine sıkıştırın (Squoosh, TinyPNG)",
          "Wix'in Image → Advanced → Loading bölümünden \"Lazy load\" seçin",
          "Video arka planları hero bölümünden çıkarın, MP4 yerine statik görsel kullanın",
          "3rd party app sayısını minimumda tutun; her app 200-500ms gecikme ekler",
          "Wix Dashboard → Performance panelinden LCP ve CLS metriklerini haftalık izleyin",
        ],
        callout:
          "Wix, LCP (Largest Contentful Paint) metriğinde genellikle 2.5sn hedefinin altına inmekte zorlanıyor. Hero görselini WebP formatına dönüştürmek tek başına LCP'yi 600-900ms iyileştirebiliyor.",
      },
      {
        heading: "4. Türkçe anahtar kelime araştırması",
        paragraphs: [
          "Wix sitelerinin Türkiye'de en büyük SEO sorunu: içerik İngilizce akademik tona sahip. Türk kullanıcı \"wix site kurulumu fiyat\" ararken sayfa başlığı \"Web Solutions\" olan bir siteyi tıklamıyor.",
        ],
        list: [
          "Google'a hedef kelimeyi yazın, sayfanın en altındaki \"İlgili aramalar\" kutusunu kopyalayın — ücretsiz altın",
          "Türkçe karakter kullanın: \"sss\" yerine \"sık sorulan sorular\", \"cozum\" yerine \"çözüm\"",
          "Uzun kuyruk kelimeleri hedefleyin: \"wix seo nasıl yapılır adım adım\" \"wix seo\" kelimesinden 5× daha kolay sıralanır",
        ],
      },
      {
        heading: "5. İçerik yapılandırması",
        paragraphs: [
          "Google, konu otoritesi (topic authority) puanını içerik içi bağlantı ağına göre veriyor. Wix'te bu ağı kurmak mümkün.",
        ],
        list: [
          "Ana sayfadan hizmetler sayfalarına, oradan blog yazılarına akış kur",
          "Her blog yazısının en az 2 iç linki olsun (ilgili yazıya veya hizmete)",
          "H2 ve H3 başlıklarında sinonim kelimeler kullan: \"Wix SEO ayarları\" + \"Wix arama motoru optimizasyonu\"",
          "Yazı sonuna FAQ bloğu ekle — Google zengin sonuç (rich snippet) olarak gösterebilir",
        ],
      },
    ],
    faq: [
      {
        q: "Wix SEO gerçekten WordPress kadar iyi mi?",
        a: "2022 sonrası güncellemelerle teknik SEO altyapısı eşitlendi. Fark artık içerik stratejisinde. Düzgün optimize edilmiş bir Wix sitesi Google'da rahat sıralanıyor.",
      },
      {
        q: "Wix SEO Wiz ücretsiz mi?",
        a: "Evet, tüm Wix planlarında dahil. Premium plan gerekmiyor. Ancak bazı ileri özellikler (structured data editörü) Business planından itibaren aktif.",
      },
      {
        q: "Sitemap'i manuel göndermek zorunda mıyım?",
        a: "Hayır, Wix otomatik oluşturur ve günceller. Ama ilk kurulumda Search Console'a göndermek endeksleme süresini 3-4 hafta kısaltır.",
      },
    ],
    ctaTitle: "Wix SEO'nuzu bizim yapmamızı ister misiniz?",
    ctaBody:
      "5-10 iş gününde tüm teknik ayarları + 6 sayfa meta optimizasyonu + Search Console kurulumu. Ölçülebilir sıralama artışı.",
    relatedSlugs: ["wix-site-hizlandirma-rehberi", "wix-search-console-baglama"],
  },

  {
    slug: "wix-mi-wordpress-mi-karsilastirma",
    title: "Wix mi WordPress mi? 2026 İçin Dürüst Karşılaştırma",
    excerpt:
      "Wix ve WordPress arasında hangisi size uygun? İşletme tipinize, bütçenize ve teknik seviyenize göre karar vermenize yardımcı dürüst bir karşılaştırma.",
    metaTitle: "Wix mi WordPress mi? 2026 Karşılaştırması",
    metaDescription:
      "Wix ve WordPress arasında seçim yaparken bilmeniz gereken 7 kritik fark. Kurulum, fiyat, SEO, e-ticaret, bakım ve ölçeklenebilirlik karşılaştırması.",
    category: "Karşılaştırma",
    readMinutes: 9,
    publishedAt: "2026-04-10",
    keyword: "wix mi wordpress mi",
    intro: [
      "\"Wix mi WordPress mi?\" sorusunun doğru yanıtı işletme tipinize bağlı. İkisini birlikte kullanmış, kurmuş ve 100'den fazla müşteriye tavsiye etmiş bir ekip olarak dürüst bakış açımızı paylaşıyoruz.",
      "Kısa yanıt: küçük-orta işletme, serbest meslek, restoran, klinik, butik — Wix. Yoğun blog odaklı yayıncılık, 1000+ ürünlü e-ticaret, karmaşık özel yazılım ihtiyacı — WordPress.",
    ],
    sections: [
      {
        heading: "1. Kurulum ve öğrenme eğrisi",
        paragraphs: [
          "Wix tamamen hazır kurulum sunar: tema seç, metinleri değiştir, yayınla — birkaç saat. WordPress için hosting, domain, tema, eklenti, güvenlik sertifikası ayrı ayrı kurulur. Deneyimsiz biri için en az 2-3 tam gün.",
          "Eğer \"site benim için lazım ama teknikle uğraşmak istemiyorum\" diyorsanız, Wix kazanır. Biraz teknik keyfi alıyorsanız WordPress size daha fazla esneklik verir.",
        ],
      },
      {
        heading: "2. Toplam maliyet",
        paragraphs: [
          "Wix yıllık sabit ücret modelidir: Business plan 3000-4500 TL/yıl, e-ticaret 5500-7000 TL/yıl. Her şey dahil.",
          "WordPress \"ücretsiz\" görünür ama gerçekte: hosting 1200-3000 TL/yıl + premium tema 1500 TL tek seferlik + önemli eklentiler 2000-4000 TL/yıl + SSL + bakım. Gerçek maliyet 4500-8000 TL/yıl.",
        ],
        callout:
          "Wix'in gizli avantajı: hosting, güvenlik, yedekleme, CDN fiyata dahil. WordPress'te her birini ayrı yönetmek gerek.",
      },
      {
        heading: "3. Tasarım esnekliği",
        paragraphs: [
          "WordPress teması değiştirilebilir; Wix'te tema seçildikten sonra değiştirmek sitenin tamamının yeniden yapılması demek. Bu Wix'in bilinen zayıflığı.",
          "Ama Wix'in Editor X / Studio panelleri artık piksel bazlı tasarım veriyor, eskisi gibi kısıtlı değil.",
        ],
      },
      {
        heading: "4. SEO kapasitesi",
        paragraphs: [
          "10 yıl önce Wix SEO'su zayıftı. 2026'da iki platform teknik SEO açısından eşit. WordPress'te Yoast/RankMath gibi eklentiler daha detaylı panel sunar ama sonuç itibariyle her iki platform da Google'da yarışabilir.",
        ],
      },
      {
        heading: "5. E-ticaret",
        paragraphs: [
          "100 ürüne kadar: Wix Stores yeterli. iyzico entegrasyonu Türkiye'de çalışıyor, kargo seçenekleri hazır.",
          "1000+ ürün, karmaşık varyant, B2B fiyatlandırma, abonelik modeli: WordPress + WooCommerce veya Shopify.",
        ],
      },
      {
        heading: "6. Bakım yükü",
        paragraphs: [
          "WordPress'te tema ve eklentiler haftada bir güncellenir. Güncellemezseniz güvenlik açıkları oluşur. Aylık 1-2 saat minimum bakım.",
          "Wix'te hiçbir şey güncellenmez — her şey otomatik, platform tarafından. \"Kur ve unut\" denklemi.",
        ],
      },
      {
        heading: "7. Taşınabilirlik",
        paragraphs: [
          "WordPress açık kaynak, başka bir hosting'e taşıyabilirsiniz. Wix kapalı sistem — ileride WordPress'e geçmek istediğinizde içerikleri manuel aktarmak gerek.",
          "Eğer \"bu siteyi 10 yıl büyüteceğim\" diyorsanız WordPress daha güvenli. Eğer \"5 yıl çalışsın yeter\" ise Wix sorunsuz.",
        ],
      },
      {
        heading: "Özetleyelim: hangisi size uygun?",
        list: [
          "Restoran, kuaför, klinik, freelancer, küçük işletme → Wix",
          "Blog yayıncılığı, haber sitesi, içerik odaklı portal → WordPress",
          "Küçük e-ticaret (≤100 ürün), Türkiye pazarı → Wix",
          "Büyük e-ticaret, uluslararası, özel entegrasyon → WordPress veya Shopify",
          "Teknik bilgisi az, kendisi yönetecek → Wix",
          "Geliştiriciyle çalışacak, özel fonksiyon lazım → WordPress",
        ],
      },
    ],
    faq: [
      {
        q: "Wix'ten WordPress'e geçiş mümkün mü?",
        a: "Evet ama otomatik aktarma aracı yok. İçerikler manuel kopyalanır, URL'ler 301 yönlendirilir. Tahmini süre: 5-10 sayfalık site için 1-2 iş günü.",
      },
      {
        q: "WordPress daha mı ucuz?",
        a: "İlk bakışta evet, gerçekte hayır. Bakım, eklenti ve güncelleme maliyetleri 2. yıldan itibaren Wix ile aynı seviyeye geliyor.",
      },
    ],
    ctaTitle: "Hangisi size uygun, birlikte karar verelim",
    ctaBody:
      "20 dakika ücretsiz ön görüşmede işinize özel hangisinin mantıklı olduğunu analiz edelim. Alternatifiniz olmayan bir çözüm önermeyiz.",
    relatedSlugs: ["wix-fiyatlari-turkiye-2026", "wix-site-hizlandirma-rehberi"],
  },

  {
    slug: "wix-sitesi-yayinlanmiyor-cozum",
    title: "Wix Sitem Yayınlanmıyor: 9 Olası Sebep ve Hızlı Çözümler",
    excerpt:
      "Wix sitesi \"yayına alınamıyor\" hatası veriyorsa yapmanız gereken 9 kontrol. En sık karşılaşılan sorunlar ve adım adım çözümleri.",
    metaTitle: "Wix Sitem Yayınlanmıyor — 9 Sebep ve Çözüm",
    metaDescription:
      "Wix siteniz yayına alınamıyor mu? Abonelik, domain, ödeme, form, eklenti ve teknik kök sebepler — her birinin adım adım çözümü.",
    category: "Çözüm",
    readMinutes: 7,
    publishedAt: "2026-04-08",
    keyword: "wix sitem yayınlanmıyor",
    intro: [
      "Wix editöründe \"Yayınla\" butonuna basıyorsunuz ama site yayına çıkmıyor ya da hata veriyor. Bu sorunun 9 tipik sebebi var; doğru sırayla kontrol ederseniz %95 durumda kendiniz çözebilirsiniz.",
    ],
    sections: [
      {
        heading: "1. Plan ücreti bitmiş olabilir",
        paragraphs: [
          "En sık sebep. Wix Premium plan süresi bittiyse site otomatik olarak ücretsiz alt alan adına (username.wixsite.com/site) döner ve \"yayınlanmadı\" hatası görünür.",
          "Çözüm: Wix Dashboard → Subscriptions sayfasından planın durumunu kontrol edin, gerekirse yenileyin.",
        ],
      },
      {
        heading: "2. Domain bağlantısı kopmuş",
        paragraphs: [
          "DNS ayarları domain sağlayıcı tarafında değişmiş olabilir (GoDaddy, Natro, İsimTescil panelinden biri yanlış güncellendi).",
          "Çözüm: Wix Dashboard → Domains → Status sekmesinden \"Connected\" görmeniz gerekiyor. \"Pending\" veya \"Disconnected\" ise DNS kayıtlarını yeniden yapılandırın.",
        ],
      },
      {
        heading: "3. Eklenen uygulama site'yi kilitlemiş",
        paragraphs: [
          "Bazı 3rd party Wix uygulamaları (özellikle ödeme ve üyelik eklentileri) yanlış yapılandırıldığında yayını engelliyor.",
          "Çözüm: Son 48 saatte eklediğiniz tüm uygulamaları geçici olarak devre dışı bırakın ve tekrar yayınlamayı deneyin. Sorunlu olanı bulduktan sonra yeniden yapılandırın.",
        ],
      },
      {
        heading: "4. Form email alanı boş",
        paragraphs: [
          "Wix, iletişim formlarında hedef email adresi boşsa bazen yayını bloke ediyor.",
          "Çözüm: Her formun settings'inden email recipient alanını kontrol edin, geçerli bir adres girin.",
        ],
      },
      {
        heading: "5. Görseller yüklenmemiş",
        paragraphs: [
          "Büyük görseller (10MB+) yükleme bitmeden yayın denediğinizde hata alırsınız.",
          "Çözüm: Media Manager'a girip eksik görsellerin yüklemesinin tamamlandığından emin olun.",
        ],
      },
      {
        heading: "6. SSL sertifikası yenileme sürecinde",
        paragraphs: [
          "Domain bağladığınız ilk 24-48 saatte SSL sertifikası hazırlanır. Bu süre boyunca site geçici olarak görünmez olabilir.",
          "Çözüm: 24 saat bekleyin. Sorun devam ederse Wix desteğine veya bize ulaşın.",
        ],
      },
      {
        heading: "7. Hesap güvenlik kilidi",
        paragraphs: [
          "Yeni hesap + yeni ödeme + hızlı yayın dizisinde Wix bazen dolandırıcılık koruması tetikliyor.",
          "Çözüm: Email'inizi kontrol edin, Wix'ten gelen \"verify\" mesajına yanıt verin.",
        ],
      },
      {
        heading: "8. Saklanmış beta sayfa",
        paragraphs: [
          "Editörde silinmeyen ve \"hidden\" işaretli bir sayfanın bazı alanları boşsa Wix yayın validasyonuna takılıyor.",
          "Çözüm: Menu & Pages → tüm sayfaları tek tek açın, içi boş gibi görünenleri tamamen silin.",
        ],
      },
      {
        heading: "9. Tarayıcı cache sorunu (aslında site yayındadır)",
        paragraphs: [
          "Bazen site gerçekten yayında ama siz göremiyorsunuz. Tarayıcı eski versiyonu tutuyor.",
          "Çözüm: Ctrl+Shift+R ile hard refresh yapın, veya gizli sekmede açın.",
        ],
        callout:
          "9 adımı denediniz hala yayınlanmıyor mu? Durumun ekran görüntüsüyle bize yazın, 4 saat içinde nedenini söyleriz.",
      },
    ],
    ctaTitle: "Acil çözüm lazım mı?",
    ctaBody:
      "Aynı gün Wix hata giderme hizmetimizle yayın sorununuzu çözüyoruz. WhatsApp'tan yazın, 2 saat içinde başlayalım.",
    relatedSlugs: ["wix-domain-dns-ayarlari-rehberi"],
  },

  {
    slug: "wix-domain-dns-ayarlari-rehberi",
    title: "Wix'e Domain Nasıl Bağlanır? Adım Adım DNS Rehberi",
    excerpt:
      "GoDaddy, Natro, İsimTescil'den aldığınız domaini Wix'e bağlamak için tam DNS rehberi. Yanlış gittiğinde ne yapılır?",
    metaTitle: "Wix Domain Bağlama — DNS Ayarları Adım Adım",
    metaDescription:
      "Wix'e özel domain bağlama rehberi. GoDaddy, Natro, İsimTescil için DNS kayıtları, SSL süreci ve yaygın hatalar.",
    category: "Rehber",
    readMinutes: 8,
    publishedAt: "2026-04-05",
    keyword: "wix domain bağlama",
    intro: [
      "Domain'i Wix'e bağlamak 3 adımdır ama yanlış gittiğinde neden olduğunu anlamak zordur. Bu rehberde hem standart süreci hem yaygın hataların çözümünü bulacaksınız.",
    ],
    sections: [
      {
        heading: "Hangi yöntem: Nameserver mı, Pointing mi?",
        paragraphs: [
          "Wix iki yol sunar. Nameserver yöntemi kolaydır: domain sağlayıcınızda Wix'in nameserver'larını kullanırsınız, tüm DNS Wix tarafından yönetilir.",
          "Pointing yöntemi esneklik verir: DNS kontrolü sizde kalır, A ve CNAME kayıtlarıyla Wix'e yönlendirirsiniz. E-posta hosting'inizi başka yerde tutacaksanız pointing tercih edin.",
        ],
      },
      {
        heading: "Yöntem 1: Nameserver (önerilen)",
        steps: [
          {
            title: "Wix Dashboard'a girin",
            body:
              "Settings → Domains → Manage → Connect with nameservers. Wix size 2 nameserver adresi verir (ns1.domains.com, ns2.domains.com gibi).",
          },
          {
            title: "Domain sağlayıcınıza gidin",
            body:
              "GoDaddy, Natro, İsimTescil — panele girin, domain listenizden ilgili domaini açın.",
          },
          {
            title: "Nameserver'ları değiştirin",
            body:
              "\"Domain Nameservers\" veya \"Ad Sunucuları\" bölümünden varsayılanları kaldırın, Wix'in verdiği 2 nameserver'ı ekleyin.",
          },
          {
            title: "48 saat bekleyin",
            body:
              "DNS propagasyonu tamamlandığında Wix Dashboard'da \"Connected\" yazar. Çoğunlukla 1-6 saatte biter.",
          },
        ],
      },
      {
        heading: "Yöntem 2: Pointing (A ve CNAME)",
        steps: [
          {
            title: "Wix Dashboard'dan kayıtları alın",
            body:
              "Settings → Domains → Connect via pointing. Size bir A record (23.236.62.147 gibi) ve bir CNAME (www → wix...) verir.",
          },
          {
            title: "Domain panelinizde DNS'e girin",
            body:
              "A Record oluşturun: Host \"@\", Value (Wix'in verdiği IP). CNAME oluşturun: Host \"www\", Value (Wix'in verdiği adres).",
          },
          {
            title: "Eski kayıtları temizleyin",
            body:
              "Başka A record'lar varsa silin (çakışma yaratır). MX kayıtlarını e-posta hizmeti için koruyun.",
          },
        ],
        callout:
          "Pointing yöntemi A ve CNAME çakışırsa çalışmaz. \"SSL pending\" görüyorsanız büyük ihtimalle eski bir A record hala duruyor.",
      },
      {
        heading: "E-posta ayarları (MX kayıtları)",
        paragraphs: [
          "Google Workspace, Microsoft 365, Yandex veya bir hosting'de e-posta kullanıyorsanız MX kayıtlarınız DNS'de olmalı. Nameserver yöntemini kullandıysanız bu kayıtları Wix panelinden ekleyin.",
          "Pointing yöntemindeyseniz e-posta kayıtlarınız domain sağlayıcınızda zaten duruyordur, müdahale etmeyin.",
        ],
      },
      {
        heading: "Yaygın 5 hata ve çözümü",
        list: [
          "\"SSL pending\" 72 saatten fazla sürüyor → Eski CNAME veya A record'u kaldırmamışsınızdır; DNS panelini temizleyin",
          "Site açılıyor ama www olmadan açılmıyor → CNAME kaydı eksik, www → @ yönlendirmesi kurun",
          "E-postalar gelmiyor → Nameserver değişiminden sonra eski MX kayıtlarını Wix'te yeniden girmediniz",
          "\"Domain not found\" hatası → Domain sağlayıcı tarafından henüz onay gelmemiş, 24 saat bekleyin",
          "Site www'da çalışıyor ama ana domain'de \"parked\" yazıyor → @ (root) A kaydı tanımlı değil",
        ],
      },
    ],
    faq: [
      {
        q: "Wix'e subdomain (blog.siteadi.com) bağlayabilir miyim?",
        a: "Evet. CNAME kaydıyla subdomain'i Wix'in verdiği adrese yönlendirirsiniz. Pointing yöntemi kullanılır.",
      },
      {
        q: "Domain transfer etmek zorunda mıyım?",
        a: "Hayır. Domain aldığınız yerde kalabilir, sadece DNS ayarıyla Wix'e yönlendirilir.",
      },
    ],
    ctaTitle: "DNS sizi strese sokmasın",
    ctaBody:
      "750 TL sabit ücretle domain bağlama hizmetimiz: DNS, SSL ve e-posta kayıtları dahil, aynı gün teslim.",
    relatedSlugs: ["wix-sitesi-yayinlanmiyor-cozum"],
  },

  {
    slug: "wix-iyzico-entegrasyonu-rehberi",
    title: "Wix'te iyzico ile Türkiye'den Satış Yapmanın Tüm Yolları",
    excerpt:
      "Wix Stores iyzico'yu resmî desteklemiyor ama Türk e-ticaret siteleri için çalışan 2 yöntem var. Avantaj ve dezavantajlarıyla.",
    metaTitle: "Wix iyzico Entegrasyonu Rehberi 2026",
    metaDescription:
      "Wix sitenize iyzico ödeme sistemini entegre etmenin iki yöntemi, artıları ve eksileri. Tek tıkla ödeme mi, form yönlendirme mi?",
    category: "E-Ticaret",
    readMinutes: 8,
    publishedAt: "2026-04-02",
    keyword: "wix iyzico entegrasyonu",
    intro: [
      "Wix'in resmî ödeme sağlayıcı listesinde iyzico yok. Bu yüzden Türkiye'de e-ticaret yapan Wix kullanıcıları Stripe / PayPal'a itiliyor — ama iki yöntemle iyzico'yu da çalıştırmak mümkün.",
    ],
    sections: [
      {
        heading: "Yöntem 1: iyzico Link / Ödeme Formu",
        paragraphs: [
          "Basit ve en hızlı yöntem. iyzico panelinden her ürün için bir ödeme linki oluşturup Wix'te butona bağlıyorsunuz.",
          "Artıları: kurulum 30 dakika, kod bilgisi gerekmez, iyzico faturalama altyapısı otomatik çalışır.",
          "Eksileri: sepet yok (ürün ürün satış), stok takibi Wix'le senkron değil, 50+ ürünü yönetmek zorlaşır.",
        ],
      },
      {
        heading: "Yöntem 2: Wix Stores + Custom Checkout",
        paragraphs: [
          "Profesyonel çözüm. Wix Stores'u sepet ve katalog yönetimi için kullanıyorsunuz, checkout adımında müşteriyi iyzico'nun checkout sayfasına yönlendirip ödeme sonrası Wix'e geri getiriyorsunuz.",
          "Artıları: tam e-ticaret deneyimi, stok/sipariş yönetimi, 500+ ürün ölçeklenir, müşteri hesabı tutulur.",
          "Eksileri: kurulum 2-3 iş günü sürer, Wix Velo (JavaScript) kod gerektirir, test için iyzico sandbox hesabı lazım.",
        ],
        callout:
          "Yöntem 2, bizim en sık kurduğumuz yapıdır. Büyüme hedefi olan e-ticaret siteleri için tek mantıklı yol.",
      },
      {
        heading: "Karar ağacı",
        list: [
          "0-20 ürün, manuel satış seviyesi → Yöntem 1",
          "20-200 ürün, düzenli büyüme → Yöntem 2",
          "200+ ürün, karmaşık varyant → WooCommerce'e geçiş düşünün",
          "Dijital ürün/abonelik satış → Yöntem 2 + iyzico subscription API",
        ],
      },
      {
        heading: "Kurulum öncesi iyzico tarafında yapılacaklar",
        steps: [
          {
            title: "İşyeri başvurusu",
            body:
              "iyzico.com → Başvur. Şahıs firması, limited veya A.Ş. belgeleri. Onay süresi 1-5 iş günü.",
          },
          {
            title: "API anahtarlarını alın",
            body:
              "iyzico Panel → Ayarlar → API Anahtarları. Sandbox (test) + Production (canlı) olmak üzere 2 çift anahtar.",
          },
          {
            title: "3D Secure aktivasyonu",
            body:
              "Yasal zorunluluk. iyzico panelinden tek tıkla aktive edin.",
          },
          {
            title: "Komisyon oranını öğrenin",
            body:
              "Standart oran %1.99-2.4 arası (ciroya göre). Yüksek ciroluysanız iyzico'dan özel oran talep edebilirsiniz.",
          },
        ],
      },
      {
        heading: "Kargo ve faturalandırma",
        paragraphs: [
          "iyzico ödeme aldığında fatura otomatik kesilmiyor; bu Wix Stores tarafında yapılır (veya Logo, Paraşüt gibi dış sistemle entegre).",
          "Kargo için Yurtiçi, Aras, MNG, PTT Wix Stores'a doğrudan entegre değil ama kargo hesaplayıcı eklentiyle ağırlık bazlı ücretlendirme yapılabilir.",
        ],
      },
    ],
    faq: [
      {
        q: "iyzico yerine Stripe kullansam olur mu?",
        a: "Türkiye'deki kart sahipleri için iyzico 3D Secure akışı daha güvenilir. Stripe TL destekliyor ama Türk kartlarda başarı oranı düşük olabilir.",
      },
      {
        q: "iyzico entegrasyonu kodsuz yapılır mı?",
        a: "Yöntem 1 evet (link/form). Yöntem 2 için Velo kod parçası gerekir. Kendiniz yapamıyorsanız 1.500-3.500 TL'ye kurduruyoruz.",
      },
    ],
    ctaTitle: "iyzico'yu sizin için kuralım",
    ctaBody:
      "Wix Stores + iyzico full entegrasyon 3 iş günü. Sandbox test, 3D Secure, komisyon optimizasyonu dahil.",
    relatedSlugs: ["wix-mi-wordpress-mi-karsilastirma"],
  },

  {
    slug: "wix-site-hizlandirma-rehberi",
    title: "Wix Site Hızlandırma: Core Web Vitals İçin 12 Adım",
    excerpt:
      "Wix sitenizin Google PageSpeed skorunu 90+'a çıkarmak için 12 somut adım. Görsel, yazı tipi, video ve eklenti optimizasyonu.",
    metaTitle: "Wix Site Hızlandırma — 12 Adımda Core Web Vitals",
    metaDescription:
      "Wix siteleri yavaş mı? 12 adımda LCP, CLS ve INP skorlarını düzeltin. Görsel sıkıştırma, lazy load, yazı tipi ve eklenti optimizasyonu.",
    category: "SEO",
    readMinutes: 10,
    publishedAt: "2026-03-29",
    keyword: "wix site hızlandırma",
    intro: [
      "Wix sitelerinin PageSpeed skoru varsayılan olarak 40-60 arasıdır. Birkaç ayarla 80-95 aralığına çıkmak mümkün. İşte sırayla yapmanız gerekenler.",
    ],
    sections: [
      {
        heading: "Hızı neden dert etmelisiniz?",
        paragraphs: [
          "Google 2021'den beri Core Web Vitals'ı (LCP, CLS, INP) sıralama faktörü olarak kullanıyor. Ayrıca 3 saniyeden geç açılan sayfalarda dönüşüm oranı %40 düşüyor.",
        ],
      },
      {
        heading: "12 adım",
        steps: [
          {
            title: "1. Hero görselini WebP'ye çevirin",
            body:
              "Squoosh.app'e yükleyin, WebP %80 kalitede export edin. Dosya boyutu genellikle 6-7× küçülür.",
          },
          {
            title: "2. Tüm görsellerde lazy load açın",
            body:
              "Editor → Image → Advanced → Loading = Lazy. Hero hariç tüm görsellere uygulayın.",
          },
          {
            title: "3. Video arka planı statik görsele çevirin",
            body:
              "Hero video 1-3MB bandwith yer. Aynı etkiyi CSS animasyonlu SVG veya Lottie ile alabilirsiniz.",
          },
          {
            title: "4. Google Fonts'u tek bir font'la sınırlayın",
            body:
              "Inter veya Poppins yeterli. 2 font + 4 weight = yaklaşık 80KB; 5 font + 8 weight = 400KB.",
          },
          {
            title: "5. 3rd party eklentileri saymamak",
            body:
              "Her Wix eklentisi 100-500ms ekler. Chat widget, popup, analytics, review widget — gerçekten gerekli olanları tutun.",
          },
          {
            title: "6. Mobile Editor'de ayrı kontrol",
            body:
              "Wix desktop'ı otomatik mobil'e dönüştürür ama görseller büyük kalabilir. Her sayfayı Mobile Editor'de açıp büyük blokları gizleyin.",
          },
          {
            title: "7. Sticky header'ı basitleştirin",
            body:
              "Backdrop-blur, gradient ve animasyon layering'i INP skorunu düşürür. Basit solid background kullanın.",
          },
          {
            title: "8. Hero altındaki animasyonları kaldırın",
            body:
              "Scroll-triggered animasyonlar CLS (layout shift) yaratır. İlk ekranda statik kalın.",
          },
          {
            title: "9. Sayfa başına element sayısı",
            body:
              "Bir sayfada 200'den fazla element olmasın. Gereksiz dekoratif shapeları silin.",
          },
          {
            title: "10. CDN zaten açık",
            body:
              "Wix CDN'i (Cloudflare) varsayılan açık. Dışarıdan CDN eklemeye gerek yok.",
          },
          {
            title: "11. Critical CSS inline",
            body:
              "Wix bunu otomatik yapıyor ama custom kod eklediyseniz kontrol edin, head'de büyük style tag olmamalı.",
          },
          {
            title: "12. Haftalık PageSpeed testi",
            body:
              "pagespeed.web.dev sayfasından hem mobil hem masaüstü skorunu takip edin. 7 günde bir test, 3 ayda %20-30 iyileşme.",
          },
        ],
      },
      {
        heading: "Hedef skorlar",
        list: [
          "LCP: 2.5 saniyenin altı",
          "CLS: 0.1'in altı",
          "INP: 200ms'nin altı",
          "Overall PageSpeed Mobile: 75+",
          "Overall PageSpeed Desktop: 90+",
        ],
      },
    ],
    ctaTitle: "Sitenizi 75+ skora biz çıkaralım",
    ctaBody:
      "Wix hız optimizasyonu: 12 adımın tamamı + önce/sonra PageSpeed raporu. 5 iş günü, sabit ücret.",
    relatedSlugs: ["wix-seo-rehberi-2026"],
  },

  {
    slug: "wix-turkce-yapma-rehberi",
    title: "Wix'i Türkçe Yapmak: Arayüz Dili ve Site İçeriği",
    excerpt:
      "Wix editör panelini Türkçeleştirmek ve sitenin kendi dilini Türkçe yapmak iki ayrı işlem. İkisini de doğru yapmanın rehberi.",
    metaTitle: "Wix Türkçe Yapma Rehberi — Panel ve Site Dili",
    metaDescription:
      "Wix editör arayüzünü Türkçeleştirme ve site dilini tr yapma adımları. Dil etiketinin SEO'ya etkisi ve çoklu dil opsiyonları.",
    category: "Rehber",
    readMinutes: 5,
    publishedAt: "2026-03-25",
    keyword: "wix türkçe yapma",
    intro: [
      "Wix'te iki ayrı dil var: sizin kullandığınız editör paneli ve ziyaretçinizin gördüğü site. Birini Türkçeleştirmek diğerini etkilemez.",
    ],
    sections: [
      {
        heading: "1. Editör panelini Türkçeleştirmek",
        steps: [
          {
            title: "wix.com'a giriş yapın",
            body:
              "Sağ üstteki hesap menüsünden → Account Settings → Language. Türkçe'yi seçin ve Save deyin.",
          },
          {
            title: "Tarayıcıyı kapatıp açın",
            body:
              "Ayar hemen geçerli olmayabilir. Browser cache temizleyin veya farklı tarayıcıda giriş yapın.",
          },
          {
            title: "Beklentiniz orta olsun",
            body:
              "Wix panelinin her bölümü Türkçeleştirilmedi. Teknik terimler, bazı butonlar İngilizce kalır.",
          },
        ],
      },
      {
        heading: "2. Site dilini Türkçe yapmak (SEO kritik)",
        paragraphs: [
          "Bu ayar Google'a sayfanızın dilini söyler. Yanlış olursa Türkçe aramalarda hiç görünmezsiniz.",
        ],
        steps: [
          {
            title: "Wix Dashboard'a gidin",
            body:
              "Settings → Language & Region → Site Language = Türkçe (Turkey). Save.",
          },
          {
            title: "HTML lang etiketini doğrulayın",
            body:
              "Sitenizi açın, sağ tık → Inspect → <html lang=\"tr\"> olmalı. Değilse Wix paneli ayar kabul etmemiş demek.",
          },
        ],
      },
      {
        heading: "3. Çoklu dil: Türkçe + İngilizce",
        paragraphs: [
          "Hem Türkçe hem İngilizce satış yapıyorsanız Wix Multilingual eklentisi çok dilli siteye izin veriyor. Menü, hreflang etiketleri, ayrı sitemap otomatik.",
        ],
        list: [
          "Wix Dashboard → Settings → Multilingual → Add Language = English",
          "Ana dil: Türkçe, ikincil: İngilizce seçin",
          "Her sayfayı İngilizce'ye tek tek çevirin (otomatik çeviri var ama manuel daha kaliteli)",
          "URL yapısı: siteadi.com/tr/ ve siteadi.com/en/ otomatik kurulur",
        ],
      },
    ],
    ctaTitle: "Çoklu dil kuralım mı?",
    ctaBody:
      "Wix multilingual kurulumu + 5 sayfa profesyonel Türkçe→İngilizce çeviri: 3.500 TL'den başlayan fiyatlarla.",
    relatedSlugs: ["wix-seo-rehberi-2026"],
  },

  {
    slug: "wix-fiyatlari-turkiye-2026",
    title: "2026'da Wix Türkiye Fiyatları ve Paket Karşılaştırması",
    excerpt:
      "Wix'in 2026 Türkiye fiyatları, hangi paketi hangi işletme tipi için almak gerektiği ve gizli maliyetler.",
    metaTitle: "Wix Fiyatları Türkiye 2026 — Hangi Paket Sizi Tutar?",
    metaDescription:
      "Wix'in güncel Türkiye fiyatları, paket karşılaştırması ve hangi plan hangi işletme için uygun. Gizli maliyetler ve tasarruf yolları.",
    category: "Karşılaştırma",
    readMinutes: 6,
    publishedAt: "2026-03-22",
    keyword: "wix fiyatları türkiye",
    intro: [
      "Wix fiyatları dolar bazlı değişiyor, Türkiye'de kur etkisiyle her 3-6 ayda güncelleniyor. 2026 Nisan verilerine göre paket bazında dürüst bir analiz.",
    ],
    sections: [
      {
        heading: "Güncel paketler (Nisan 2026)",
        list: [
          "Light: ~1.800 TL/yıl — kişisel sayfa, reklamsız, 2GB depolama",
          "Core: ~3.200 TL/yıl — küçük işletme, form, özel domain, 50GB",
          "Business: ~4.800 TL/yıl — ticari site, Business Suite, 100GB",
          "Business Elite: ~9.500 TL/yıl — ileri e-ticaret, sınırsız",
        ],
        callout:
          "Yıllık ödemede indirim %30-40 civarında. Aylık ödeyenler net olarak %50 daha fazla ödüyor.",
      },
      {
        heading: "Hangi paket kime uygun?",
        list: [
          "Freelancer / portföy sitesi → Core",
          "Kurumsal 5-10 sayfa site, reklamsız → Core",
          "Küçük e-ticaret (50 ürüne kadar) → Business",
          "Orta e-ticaret (200+ ürün, abonelik) → Business Elite",
          "Blog odaklı yayıncılık → Core (yeterli) veya WordPress (daha ucuz)",
        ],
      },
      {
        heading: "Gizli maliyetler",
        list: [
          "Premium temalar: 50-200$ tek seferlik (gerekmez ama pazarlanır)",
          "Profesyonel email (Google Workspace ile entegre): 1.800 TL/yıl ek",
          "Premium apps (review, chat, booking): 200-800 TL/yıl her biri",
          "iyzico gibi 3rd party ödeme: %1.99-2.4 işlem başı komisyon",
        ],
      },
      {
        heading: "Tasarruf ipuçları",
        list: [
          "İlk yıl için Wix'in kupon kodlarını takip edin (Black Friday, Eylül okul sezonu)",
          "3 yıllık plan alın — %20 ek indirim",
          "Domain'i Wix'ten değil, Natro/İsimTescil'den alın (%60-70 daha ucuz)",
          "Template'i ücretsiz olanlardan seçin, 200'den fazla profesyonel ücretsiz şablon var",
        ],
      },
    ],
    ctaTitle: "Plan seçerken yanlış yapmayın",
    ctaBody:
      "Ücretsiz ön görüşmede işinize uygun Wix paketini birlikte seçelim, ileride upgrade / downgrade maliyetine girmeyin.",
    relatedSlugs: ["wix-mi-wordpress-mi-karsilastirma"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, max = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.slice(0, max);
  const byExplicit = (current.relatedSlugs ?? [])
    .map((s) => getPostBySlug(s))
    .filter(Boolean) as BlogPost[];
  if (byExplicit.length >= max) return byExplicit.slice(0, max);
  const rest = BLOG_POSTS.filter(
    (p) => p.slug !== slug && !byExplicit.find((b) => b.slug === p.slug)
  );
  return [...byExplicit, ...rest].slice(0, max);
}
