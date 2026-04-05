import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import path from 'path';
import fs from 'fs';

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), 'data', 'wix-destek.db');

// Ensure data directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let db: Database.Database;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    initializeSchema();
  }
  return db;
}

function initializeSchema() {
  const database = db;

  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL,
      meta_description TEXT,
      keywords TEXT,
      published INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS redirects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      target_url TEXT NOT NULL,
      clicks INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);

  seedData();
}

function seedData() {
  const database = db;

  // Seed admin user
  const existingAdmin = database.prepare('SELECT id FROM users WHERE username = ?').get('admin');
  if (!existingAdmin) {
    const passwordHash = bcrypt.hashSync('WixDestek2024!', 12);
    database.prepare('INSERT INTO users (id, username, password_hash) VALUES (1, ?, ?)').run('admin', passwordHash);
  }

  // Seed blog posts
  const postCount = (database.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number }).count;
  if (postCount === 0) {
    const posts = [
      {
        title: 'Wix ile Ücretsiz Web Sitesi Nasıl Kurulur? Adım Adım Rehber',
        slug: 'wix-ucretsiz-web-sitesi-kurma',
        excerpt: 'Wix ile ücretsiz web sitesi kurmak artık çok kolay! Bu kapsamlı rehberde adım adım tüm süreci açıklıyoruz. Teknik bilgi gerektirmeden profesyonel bir site oluşturun.',
        meta_description: 'Wix ile ücretsiz web sitesi nasıl kurulur? Adım adım rehberimizle dakikalar içinde profesyonel sitenizi oluşturun. Hesap açma, şablon seçimi ve yayınlama.',
        keywords: 'wix ücretsiz web sitesi, wix nasıl kurulur, wix rehber, wix başlangıç',
        content: `<h2>Wix ile Ücretsiz Web Sitesi Kurma Rehberi</h2>

<p>Wix, dünya genelinde 230 milyondan fazla kullanıcısı olan, en popüler web sitesi oluşturma platformlarından biridir. Kodlama bilgisi gerektirmeyen sürükle-bırak arayüzü sayesinde herkes kolaylıkla profesyonel bir web sitesi oluşturabilir.</p>

<h3>Neden Wix'i Tercih Etmelisiniz?</h3>

<p>Wix'in diğer platformlardan ayrılan birçok özelliği vardır. Öncelikle 800'den fazla profesyonel şablon sunmaktadır. Bu şablonlar her sektöre uygun olarak tasarlanmış olup kolayca özelleştirilebilir. Ayrıca Wix ADI (Yapay Zeka Tasarımcı) özelliği sayesinde birkaç soruya cevap vererek otomatik bir site oluşturabilirsiniz.</p>

<p>Wix'in ücretsiz planı birçok temel özelliği içermektedir. Ücretsiz Wix subdomain'i ile sitenizi hemen yayına alabilirsiniz. Ücretli planlara geçerek kendi domain'inizi bağlayabilir ve reklamsız bir deneyim elde edebilirsiniz.</p>

<h3>Adım 1: Wix Hesabı Açma</h3>

<p>İlk adım olarak Wix'in resmi web sitesine gitmeniz gerekmektedir. Ana sayfada "Ücretsiz Başla" butonuna tıklayın. E-posta adresiniz ve şifrenizle kayıt olabilir ya da Google veya Facebook hesabınızla giriş yapabilirsiniz.</p>

<p>Hesabınızı oluşturduktan sonra e-posta adresinize bir doğrulama maili gönderilecektir. Bu maildeki linke tıklayarak hesabınızı doğrulayın. Hesap doğrulama işlemi tamamlandıktan sonra Wix kontrol panelinize erişebilirsiniz.</p>

<h3>Adım 2: Şablon Seçimi</h3>

<p>Wix kontrol paneline girdikten sonra "Site Oluştur" seçeneğini tıklayın. Karşınıza iki seçenek çıkacaktır: Wix ADI veya Wix Editörü. Wix ADI, sorularınızı yanıtlayarak sizin için otomatik bir site oluşturur. Wix Editörü ise daha fazla kontrol sağlayarak şablon seçip özelleştirmenize olanak tanır.</p>

<p>Wix Editörü'nü seçtiğinizde sizi 800'den fazla şablonun bulunduğu şablon galerisine yönlendirecektir. Şablonları kategorilere göre filtreleyebilirsiniz. İşletme, portfolyo, e-ticaret, blog, restoran gibi kategorilerde onlarca şablon mevcuttur. Beğendiğiniz bir şablonun üzerine gelerek önizleme yapabilir ya da hemen düzenlemeye başlayabilirsiniz.</p>

<h3>Adım 3: Sitenizi Özelleştirin</h3>

<p>Şablonunuzu seçtikten sonra Wix Editörü açılacaktır. Sol taraftaki araç çubuğundan farklı öğeler ekleyebilirsiniz. Metin, görsel, video, buton, form ve daha birçok öğeyi sürükleyip bırakarak sitenize ekleyebilirsiniz.</p>

<p>Metinleri değiştirmek için üzerine tıklayın ve doğrudan yazın. Görselleri değiştirmek için üzerine tıklayın ve "Görsel Değiştir" seçeneğini kullanın. Wix'in dahili görsel kütüphanesi olan Wix Stock'tan milyonlarca ücretsiz fotoğraf kullanabilirsiniz.</p>

<p>Renk şemanızı değiştirmek için sol paneldeki "Tema" bölümüne gidin. Hazır renk paletlerinden birini seçebilir ya da kendi renklerinizi belirleyebilirsiniz. Font seçimi için de geniş bir koleksiyon sunulmaktadır.</p>

<h3>Adım 4: Sayfa Ekleme ve Yönetimi</h3>

<p>Sitenize yeni sayfalar eklemek için sol paneldeki "Sayfalar" bölümüne tıklayın. "Sayfa Ekle" butonuna tıklayarak yeni bir sayfa oluşturabilirsiniz. Her sayfa için ayrı bir şablon seçebilir ya da mevcut sayfanızı kopyalayarak kullanabilirsiniz.</p>

<p>Sayfa ayarlarından SEO başlığı, meta açıklaması ve URL yapısını düzenleyebilirsiniz. Bu ayarlar sitenizin arama motorlarında daha iyi görünmesi için önemlidir.</p>

<h3>Adım 5: Mobil Görünümü Optimize Edin</h3>

<p>Wix Editörü'nün üst kısmındaki mobil simgesine tıklayarak sitenizin mobil görünümüne geçebilirsiniz. Mobil görünümde bazı öğelerin yeniden konumlandırılması gerekebilir. Wix, masaüstü tasarımınızdan otomatik bir mobil versiyon oluşturur ancak bazı düzenlemeler yapmanız gerekebilir.</p>

<h3>Adım 6: Sitenizi Yayınlayın</h3>

<p>Siteniz hazır olduğunda sağ üst köşedeki "Yayınla" butonuna tıklayın. Ücretsiz plan ile siteniz kullaniciadi.wixsite.com/siteniz formatında bir adresle yayına girecektir. Kendi domain adresinizi kullanmak için Wix'in ücretli planlarından birine geçmeniz gerekmektedir.</p>

<h3>Sonuç</h3>

<p>Wix ile web sitesi kurmak gerçekten çok basit ve hızlıdır. Birkaç adımda profesyonel görünümlü bir site oluşturabilirsiniz. İşletmenizi, blogunuzu ya da portfolyonuzu çevrimiçine taşımak için Wix harika bir başlangıç noktasıdır. Ücretsiz plan ile başlayıp ihtiyaçlarınız arttıkça ücretli planlara geçebilirsiniz.</p>`,
      },
      {
        title: 'Wix SEO Rehberi 2025: Google\'da Üst Sıralara Çıkma Taktikleri',
        slug: 'wix-seo-rehberi-2024',
        excerpt: 'Wix sitenizi Google\'da üst sıralara taşıyın! 2025 yılının en güncel SEO tekniklerini ve Wix\'e özel optimizasyon ipuçlarını bu rehberde bulabilirsiniz.',
        meta_description: 'Wix SEO rehberi 2025: Wix sitenizi Google\'da üst sıralara çıkarmanın yolları. Meta etiketler, hız optimizasyonu, backlink stratejileri ve daha fazlası.',
        keywords: 'wix seo, wix google sıralaması, wix seo ayarları, wix site optimizasyonu',
        content: `<h2>Wix SEO Rehberi 2025: Google'da Üst Sıralara Çıkma Taktikleri</h2>

<p>Wix, son yıllarda SEO konusunda büyük adımlar attı. Wix SEO Wiz aracı ve gelişmiş SEO ayarları sayesinde sitenizi Google'da üst sıralara çıkarmak artık çok daha kolay. Bu kapsamlı rehberde Wix SEO'nun tüm inceliklerini ele alacağız.</p>

<h3>Wix SEO'nun Temelleri</h3>

<p>SEO (Arama Motoru Optimizasyonu), web sitenizin arama motorlarında daha üst sıralarda görünmesi için yapılan çalışmaların tümüdür. Wix, bu konuda kullanıcılarına birçok araç sunmaktadır. Ancak bu araçları doğru kullanmayı bilmek kritik önem taşımaktadır.</p>

<p>Wix SEO'nun üç temel bileşeni vardır: teknik SEO, içerik SEO ve off-page SEO. Teknik SEO, sitenizin arama motorları tarafından düzgün taranabilmesi için gerekli teknik ayarları kapsar. İçerik SEO, sitenizin içeriğinin arama motorları ve kullanıcılar için optimize edilmesini ifade eder. Off-page SEO ise sitenize dışarıdan yapılan bağlantılar ve sosyal medya aktivitelerini kapsar.</p>

<h3>Wix SEO Wiz Kullanımı</h3>

<p>Wix SEO Wiz, sitenizin SEO durumunu analiz eden ve iyileştirme önerileri sunan bir araçtır. Kontrol panelinizden "SEO Araçları" bölümüne girerek SEO Wiz'e erişebilirsiniz. Araç, sitenizi tarayarak eksik meta etiketleri, yavaş yükleme süreleri ve diğer SEO sorunlarını tespit eder.</p>

<h3>Sayfa Başlığı ve Meta Açıklaması</h3>

<p>Her sayfa için benzersiz ve anahtar kelime içeren başlıklar oluşturun. Başlıklar 50-60 karakter arasında olmalıdır. Meta açıklamaları ise 150-160 karakter arasında tutulmalı ve o sayfanın içeriğini özetlemelidir.</p>

<p>Wix'te meta etiketleri düzenlemek için sayfanın ayarlarına gidin. "SEO" sekmesini açarak başlık ve açıklama alanlarını doldurun. Bu bilgiler Google arama sonuçlarında görünecektir.</p>

<h3>URL Yapısı Optimizasyonu</h3>

<p>Kısa, açıklayıcı ve anahtar kelime içeren URL'ler oluşturun. Wix'te sayfa URL'lerini düzenlemek için sayfa ayarlarından "Adres" bölümüne gidin. Türkçe karakter kullanmaktan kaçının ve kelimeler arasında tire (-) kullanın.</p>

<h3>Görsel Optimizasyonu</h3>

<p>Görseller için ALT etiketleri eklemek SEO açısından kritik önem taşır. Her görsele açıklayıcı ve anahtar kelime içeren ALT metni yazın. Ayrıca görsellerin boyutlarını optimize ederek sayfa yükleme hızını artırın. Wix, görselleri otomatik olarak optimize etse de manuel ayarlar yapmanız önerilir.</p>

<h3>Mobil Uyumluluk</h3>

<p>Google, 2025 yılında da mobil öncelikli indeksleme politikasını sürdürmektedir. Bu nedenle sitenizin mobil uyumlu olması zorunludur. Wix editöründen mobil görünümü kontrol ederek gerekli düzenlemeleri yapın. Tüm butonların, metinlerin ve görsellerin mobil cihazlarda düzgün görüntülendiğinden emin olun.</p>

<h3>Sayfa Hızı İyileştirme</h3>

<p>Google, sayfa hızını önemli bir sıralama faktörü olarak değerlendirmektedir. Wix sitelerinin hızını artırmak için gereksiz animasyonlardan kaçının, büyük dosyalı videoları embed etmek yerine YouTube veya Vimeo bağlantısı kullanın ve kullanmadığınız Wix uygulamalarını kaldırın.</p>

<h3>Schema Markup Ekleme</h3>

<p>Schema markup, arama motorlarına içeriğiniz hakkında daha fazla bilgi sunar. Wix'te JSON-LD formatında schema ekleyebilirsiniz. Blog yazıları için Article schema, ürünler için Product schema ve yerel işletmeler için LocalBusiness schema kullanılması önerilir.</p>

<h3>İç Bağlantı Stratejisi</h3>

<p>Sitenizin sayfaları arasında mantıklı iç bağlantılar oluşturun. Bu, hem kullanıcıların sitenizde daha uzun süre kalmasını sağlar hem de arama motorlarının sitenizi daha iyi anlamasına yardımcı olur. Her blog yazısında ilgili diğer yazılara bağlantı verin.</p>

<h3>Backlink Edinme Stratejileri</h3>

<p>Kaliteli backlink'ler sitenizin otoritesini artırır. Bu amaçla sektörünüzdeki bloglara misafir yazılar yazabilir, yerel dizinlere sitenizi ekleyebilir ve sosyal medyada aktif olabilirsiniz. Backlink edinirken kaliteye odaklanın; az sayıda kaliteli backlink, çok sayıda düşük kaliteli backlink'ten daha değerlidir.</p>

<h3>Sonuç</h3>

<p>Wix SEO çalışmaları sabır ve düzenli çaba gerektiren bir süreçtir. Bu rehberdeki adımları takip ederek sitenizi Google'da üst sıralara taşıyabilirsiniz. Önemli olan, SEO çalışmalarını bir kez yapıp bırakmak değil, sürekli olarak takip etmek ve iyileştirmek gerektiğidir.</p>`,
      },
      {
        title: 'Wix E-Ticaret: Online Mağaza Açmanın Tüm Sırları',
        slug: 'wix-e-ticaret-online-magaza',
        excerpt: 'Wix ile online mağaza açmak hiç bu kadar kolay olmamıştı. Ürün ekleme, ödeme sistemleri, kargo entegrasyonu ve pazarlama araçlarını bu rehberde bulun.',
        meta_description: 'Wix e-ticaret rehberi: Online mağaza açma, ürün yönetimi, ödeme sistemleri ve satış stratejileri. Wix ile kendi online mağazanızı kurun.',
        keywords: 'wix e-ticaret, wix online mağaza, wix shop, wix ürün satışı',
        content: `<h2>Wix E-Ticaret: Online Mağaza Açmanın Tüm Sırları</h2>

<p>E-ticaret, son yıllarda iş dünyasının vazgeçilmez bir parçası haline geldi. Wix, bu alanda kullanıcılarına kapsamlı araçlar sunarak online mağaza açmayı son derece kolaylaştırdı. Bu rehberde Wix ile nasıl başarılı bir online mağaza kurabileceğinizi adım adım anlatacağız.</p>

<h3>Wix E-Ticaret Planları</h3>

<p>Wix'te online mağaza açmak için Business veya daha üst bir plan seçmeniz gerekmektedir. Business Basic planı küçük mağazalar için uygunken, Business Unlimited ve Business VIP planları daha fazla özellik sunar. Plan seçerken ürün sayısını, beklenen satış hacmini ve ihtiyaç duyduğunuz özellikleri göz önünde bulundurun.</p>

<h3>Mağaza Kurulum Adımları</h3>

<p>Wix kontrol panelinden "Wix Store" uygulamasını sitenize ekleyin. Uygulama eklendikten sonra ürün kataloğunuzu oluşturmaya başlayabilirsiniz. Ürün adı, açıklama, fiyat, stok miktarı ve görseller gibi temel bilgileri girin.</p>

<p>Her ürün için yüksek kaliteli görseller kullanın. Araştırmalar, kaliteli görsel kullanan mağazaların daha yüksek dönüşüm oranına sahip olduğunu göstermektedir. Ürün açıklamalarını hem kullanıcılar hem de arama motorları için optimize edin.</p>

<h3>Ödeme Sistemleri Entegrasyonu</h3>

<p>Wix, birçok farklı ödeme yöntemi sunmaktadır. Wix Payments, kredi kartı, banka kartı ve PayPal ile ödeme almanızı sağlar. Türkiye'de iyzico entegrasyonu da mevcuttur. Müşterilerinize mümkün olduğunca fazla ödeme seçeneği sunmak, satışlarınızı artırmanıza yardımcı olur.</p>

<p>Ödeme sayfasının güvenliğine dikkat edin. Wix, SSL sertifikası sunduğu için ödeme bilgileri şifrelenmiş olarak aktarılır. Ancak müşterilerinize güven vermek için güvenlik rozetleri ve SSL bilgisi eklemek faydalıdır.</p>

<h3>Kargo ve Teslimat Ayarları</h3>

<p>Wix Store'da kargo ayarlarını yapılandırabilirsiniz. Sabit kargo ücreti, ağırlığa göre kargo veya ücretsiz kargo gibi seçenekler mevcuttur. Türkiye'de Yurtiçi Kargo, Aras Kargo ve PTT Kargo gibi firmalarla entegrasyon yapabilirsiniz.</p>

<p>Ücretsiz kargo eşiği belirlemek satışları artırmak için etkili bir stratejidir. Örneğin, 200 TL üzeri alışverişlerde ücretsiz kargo sunarak ortalama sepet değerini artırabilirsiniz.</p>

<h3>Vergi Ayarları</h3>

<p>Türkiye'de e-ticaret için vergi uyumluluğu son derece önemlidir. Wix'te otomatik vergi hesaplaması özelliğini kullanabilirsiniz. KDV oranlarını doğru şekilde ayarlayın ve fatura düzenleme süreçlerinizi planlayın.</p>

<h3>Pazarlama Araçları</h3>

<p>Wix, e-ticaret mağazanız için çeşitli pazarlama araçları sunar. E-posta pazarlaması için Wix Email Marketing'i kullanabilirsiniz. Terkedilmiş sepet e-postaları, satışlarınızı önemli ölçüde artırabilir. Ayrıca Facebook ve Instagram ile entegrasyon yaparak sosyal medya üzerinden satış yapabilirsiniz.</p>

<p>İndirim kuponları ve promosyon kodları oluşturmak müşteri sadakatini artırır. Wix'te kolayca indirim kampanyaları oluşturabilir ve belirli ürünlere ya da müşteri gruplarına özel indirimler sunabilirsiniz.</p>

<h3>Envanter Yönetimi</h3>

<p>Wix Store'un envanter yönetimi özelliği, stok takibinizi kolaylaştırır. Ürünlerin stok miktarını girin ve stok tükendiğinde otomatik bildirim alın. Varyantlı ürünler için (farklı renk ve boyutlar) her varyant için ayrı stok takibi yapabilirsiniz.</p>

<h3>Müşteri Yönetimi</h3>

<p>Wix'in CRM özellikleri, müşteri ilişkilerinizi yönetmenize yardımcı olur. Müşteri siparişlerini, iletişim geçmişini ve satın alma davranışlarını takip edebilirsiniz. Bu verileri kullanarak kişiselleştirilmiş pazarlama kampanyaları oluşturabilirsiniz.</p>

<h3>Analitik ve Raporlama</h3>

<p>Mağazanızın performansını takip etmek için Wix Analytics'i kullanın. Satış raporları, en çok satan ürünler, müşteri demografisi gibi önemli verilere erişebilirsiniz. Bu verilere dayanarak stratejik kararlar alabilirsiniz.</p>

<h3>Sonuç</h3>

<p>Wix ile online mağaza açmak, doğru adımları takip ettiğinizde oldukça başarılı sonuçlar verebilir. Ürün kalitesine, müşteri hizmetlerine ve pazarlama stratejilerine odaklanarak rekabetçi bir e-ticaret mağazası oluşturabilirsiniz. Düzenli olarak analizlerinizi inceleyin ve stratejilerinizi güncel tutun.</p>`,
      },
      {
        title: 'Wix Şablonları: En İyi 10 Ücretsiz Tema ve Nasıl Özelleştirilir',
        slug: 'wix-sablonlari-en-iyi-temalar',
        excerpt: 'Wix\'in en iyi ücretsiz şablonlarını keşfedin! Her sektör için özenle seçilmiş 10 tema ve bunları nasıl özelleştireceğinizi adım adım öğrenin.',
        meta_description: 'Wix\'in en iyi ücretsiz şablonları: Her sektör için 10 önerilen tema. Şablonları nasıl özelleştireceğinizi ve profesyonelleştireceğinizi öğrenin.',
        keywords: 'wix şablonları, wix ücretsiz temalar, wix template, wix tasarım',
        content: `<h2>Wix Şablonları: En İyi 10 Ücretsiz Tema ve Nasıl Özelleştirilir</h2>

<p>Wix, 800'den fazla profesyonel şablon sunan kapsamlı bir galeri sunmaktadır. Bu şablonlar farklı sektörler ve kullanım amaçları için tasarlanmıştır. Bu rehberde en iyi ücretsiz Wix şablonlarını ve bunları nasıl özelleştireceğinizi ele alacağız.</p>

<h3>Wix Şablon Galerisi Nasıl Kullanılır?</h3>

<p>Wix editörüne giriş yaptıktan sonra şablon galerisine erişebilirsiniz. Şablonlar; İş Dünyası, Online Mağaza, Portfolyo, Blog, Müzik, Fotoğrafçılık, Restoran, Sağlık, Güzellik ve Eğitim gibi kategorilere ayrılmıştır. Her kategori içinde onlarca şablon bulunmaktadır.</p>

<p>Şablonları filtrelerken "Ücretsiz" seçeneğini işaretleyerek yalnızca ücretsiz şablonları görüntüleyebilirsiniz. Şablonun önizlemesini görmek için üzerine tıklayın ve farklı cihazlarda nasıl görüneceğini kontrol edin.</p>

<h3>En İyi 10 Ücretsiz Wix Şablonu</h3>

<h4>1. Clean Portfolio</h4>
<p>Minimalist tasarımı ve temiz düzeni ile portfolyo siteleri için ideal bir şablondur. Beyaz arka plan üzerine büyük görseller ve tipografi kullanılmıştır. Fotoğrafçılar, tasarımcılar ve yaratıcı profesyoneller için uygundur.</p>

<h4>2. Business Pro</h4>
<p>Kurumsal işletmeler için tasarlanmış bu şablon, profesyonel görünümü ile öne çıkmaktadır. Hizmetler sayfası, hakkımızda bölümü ve iletişim formu hazır olarak gelmektedir.</p>

<h4>3. Fresh Blog</h4>
<p>Blog sahipleri için tasarlanmış bu şablon, okunabilirliği ön planda tutmaktadır. Geniş yazı alanı, sidebar bileşenleri ve sosyal medya entegrasyonu içermektedir.</p>

<h4>4. Restaurant Classic</h4>
<p>Restoranlar ve kafeler için tasarlanmış bu şablon, menü sayfası, galeri ve rezervasyon formu içermektedir. Koyu renk şeması ile zarif bir görünüm sunar.</p>

<h4>5. Fitness Pro</h4>
<p>Spor salonları ve fitness koçları için ideal bu şablon, hizmetler, fiyatlandırma ve randevu sayfaları içermektedir. Dinamik tasarımı ile enerjik bir izlenim bırakır.</p>

<h4>6. Online Store Basic</h4>
<p>Küçük e-ticaret mağazaları için tasarlanmış bu şablon, ürün grid'i, sepet ve ödeme akışı için optimize edilmiştir.</p>

<h4>7. Creative Agency</h4>
<p>Dijital ajanslar ve yaratıcı şirketler için tasarlanmış bu şablon, projeler galerisi ve ekip bölümü içermektedir.</p>

<h4>8. Medical Clinic</h4>
<p>Sağlık hizmetleri için tasarlanmış bu şablon, doktor profilleri, hizmetler ve randevu sistemi içermektedir.</p>

<h4>9. Wedding</h4>
<p>Düğün siteleri için tasarlanmış romantik ve zarif bir şablondur. Davet listesi, galeri ve etkinlik detayları sayfaları içerir.</p>

<h4>10. Event Planner</h4>
<p>Etkinlik organizasyoncuları için tasarlanmış bu şablon, etkinlik takvimi, galeri ve fiyatlandırma bölümleri içerir.</p>

<h3>Şablonları Özelleştirme Rehberi</h3>

<h4>Renk Şemasını Değiştirme</h4>
<p>Sol panelden "Tasarım" bölümüne gidin ve "Tema Renkleri"ni seçin. Marka renklerinize uygun bir renk paleti oluşturun. Tüm site genelinde tutarlı renk kullanımı profesyonellik katacaktır.</p>

<h4>Font Değiştirme</h4>
<p>Tema ayarlarından font seçimini yapabilirsiniz. Başlık ve gövde metni için farklı fontlar seçin. Wix, 100'den fazla Google Font sunmaktadır. Okunabilirliği yüksek fontlar tercih edin.</p>

<h4>Logo Ekleme</h4>
<p>Header bölümüne logo eklemek için "Görsel Ekle" seçeneğini kullanın ya da Wix Logo Maker ile yeni bir logo oluşturun. Logonuz sitenizin tüm sayfalarında tutarlı görünmeli ve marka kimliğinizi yansıtmalıdır.</p>

<h4>İçerik Güncelleme</h4>
<p>Şablondaki örnek metinleri kendi içeriğinizle değiştirin. Başlıklar, açıklamalar ve call-to-action butonları için etkili metinler yazın. Müşterilerinizin sorunlarını çözdüğünüzü vurgulayan, değer odaklı içerikler oluşturun.</p>

<h3>Sonuç</h3>

<p>Doğru şablonu seçmek ve etkili şekilde özelleştirmek, Wix sitenizin başarısında kritik rol oynar. Markanızı yansıtan, hedef kitlenize hitap eden ve kullanıcı deneyimini ön planda tutan bir şablon seçin. Düzenli güncellemeler ve iyileştirmeler yaparak sitenizi canlı tutun.</p>`,
      },
      {
        title: 'Wix vs WordPress: Hangisi Daha İyi? 2025 Karşılaştırması',
        slug: 'wix-vs-wordpress-karsilastirma',
        excerpt: 'Wix mi WordPress mi? İki platformun detaylı karşılaştırması: kullanım kolaylığı, fiyat, SEO, özelleştirme ve performans açısından hangisi daha iyi?',
        meta_description: 'Wix vs WordPress 2025 karşılaştırması: Hangisi daha iyi? Fiyat, SEO, kullanım kolaylığı ve özellikler açısından iki platformu detaylı olarak karşılaştırdık.',
        keywords: 'wix vs wordpress, wix mi wordpress mi, wix wordpress karşılaştırma, hangi platform',
        content: `<h2>Wix vs WordPress: Hangisi Daha İyi? 2025 Karşılaştırması</h2>

<p>Web sitesi kurmak isteyen herkesin karşılaştığı en büyük soru: Wix mi, WordPress mi? Her iki platform da güçlü özelliklere sahip olsa da farklı kullanıcı profillerine hitap etmektedir. Bu kapsamlı karşılaştırmada iki platformu çeşitli açılardan ele alacağız.</p>

<h3>Kullanım Kolaylığı</h3>

<p><strong>Wix:</strong> Wix, kullanım kolaylığı açısından açık ara öndedir. Sürükle-bırak editörü sayesinde teknik bilgisi olmayan kullanıcılar bile kolaylıkla web sitesi oluşturabilir. Kurulum gerektirmez, hosting dahildir ve tek bir kontrol panelinden her şeyi yönetebilirsiniz.</p>

<p><strong>WordPress:</strong> WordPress öğrenme eğrisi daha dik bir platformdur. Başlangıçta hosting satın alımı, domain kaydı ve kurulum gerektirir. Eklenti yönetimi, güncellemeler ve güvenlik yamaları kullanıcının sorumluluğundadır. Ancak bu esneklik ileri kullanıcılara büyük avantaj sağlar.</p>

<p><strong>Sonuç:</strong> Kullanım kolaylığı açısından Wix kazanıyor.</p>

<h3>Tasarım ve Özelleştirme</h3>

<p><strong>Wix:</strong> 800+ profesyonel şablon sunar. Her öğeyi piksel hassasiyetinde konumlandırabilirsiniz. Ancak şablon seçildikten sonra değiştirilmesi zahmetlidir ve kod bilgisi gerektiren derin özelleştirmeler kısıtlıdır.</p>

<p><strong>WordPress:</strong> 10.000'den fazla ücretsiz tema ve sayısız premium tema mevcuttur. Page builder'lar (Elementor, Divi, Gutenberg) ile sınırsız tasarım özgürlüğü sunar. Kod bilgisiyle sitenizi tamamen istediğiniz gibi şekillendirebilirsiniz.</p>

<p><strong>Sonuç:</strong> Tasarım esnekliği açısından WordPress kazanıyor.</p>

<h3>SEO Performansı</h3>

<p><strong>Wix:</strong> Wix, son yıllarda SEO konusunda büyük ilerleme kaydetti. Wix SEO Wiz, otomatik site haritası, meta etiketler ve yapısal veri desteği sunmaktadır. Ancak bazı gelişmiş SEO özelliklerinde WordPress'in gerisinde kalabilir.</p>

<p><strong>WordPress:</strong> Yoast SEO, Rank Math gibi güçlü SEO eklentileri ile tam kontrol imkânı sunar. Sayfa hızı optimizasyonu, breadcrumb yapısı ve teknik SEO konularında daha esnek bir platform sunar.</p>

<p><strong>Sonuç:</strong> SEO kapasitesi açısından WordPress biraz öndedir, ancak Wix de yeterlice iyi sonuçlar verebilir.</p>

<h3>Fiyat Karşılaştırması</h3>

<p><strong>Wix:</strong> Ücretsiz plan mevcuttur (wix.com alt domain ile). Ücretli planlar aylık $16 ile $59 arasında değişir ve hosting, SSL dahildir. Kurulum ücreti yoktur.</p>

<p><strong>WordPress:</strong> WordPress yazılımı ücretsizdir, ancak hosting ($5-50/ay), domain ($10-15/yıl) ve premium tema/eklentiler için ayrıca ödeme yapmanız gerekir. Toplam maliyet Wix'e yakın veya daha yüksek olabilir.</p>

<p><strong>Sonuç:</strong> Fiyat açısından her ikisi de benzer maliyette, Wix daha öngörülür bir fiyatlandırma sunar.</p>

<h3>E-Ticaret Özellikleri</h3>

<p><strong>Wix:</strong> Wix Store ile temel e-ticaret ihtiyaçlarını karşılar. Ürün varyantları, indirim kuponları, terkedilmiş sepet e-postaları gibi özellikler mevcuttur. Büyük ölçekli mağazalar için bazı kısıtlamalar söz konusu olabilir.</p>

<p><strong>WordPress (WooCommerce):</strong> WooCommerce ile sınırsız ürün yönetimi ve gelişmiş e-ticaret özellikleri sunar. Çeşitli eklentilerle genişletilebilir. Büyük mağazalar için daha ölçeklenebilir bir çözümdür.</p>

<p><strong>Sonuç:</strong> Büyük e-ticaret projeleri için WordPress/WooCommerce, küçük ve orta ölçekli mağazalar için Wix yeterlidir.</p>

<h3>Güvenlik ve Bakım</h3>

<p><strong>Wix:</strong> Güvenlik ve altyapı yönetimi tamamen Wix'e aittir. Otomatik yedekleme, SSL sertifikası ve güvenlik güncellemeleri dahildir. Kullanıcının güvenlik konusunda endişelenmesine gerek yoktur.</p>

<p><strong>WordPress:</strong> Güvenlik güncellemelerini ve yedeklemeleri kendiniz yönetmeniz gerekir ya da yönetilen hosting hizmeti satın almanız gerekir. Eklenti güvenlik açıkları ciddi bir risk oluşturabilir.</p>

<p><strong>Sonuç:</strong> Güvenlik ve bakım kolaylığı açısından Wix kazanıyor.</p>

<h3>Kime Göre Hangisi?</h3>

<p><strong>Wix'i tercih edin:</strong> Eğer teknik bilginiz yoksa, hızlıca bir site kurmak istiyorsanız, küçük veya orta ölçekli bir işletmeniz varsa ve tüm teknik detaylarla uğraşmak istemiyorsanız.</p>

<p><strong>WordPress'i tercih edin:</strong> Eğer teknik bilginiz varsa veya geliştirici ekibiniz mevcutsa, tam kontrol ve sınırsız özelleştirme istiyorsanız, büyük ölçekli bir e-ticaret veya içerik platformu kurmak istiyorsanız.</p>

<h3>Sonuç</h3>

<p>2025 yılında her iki platform da kendi kullanıcı kitlesine mükemmel hizmet sunmaktadır. Wix, kullanım kolaylığı ve hız avantajıyla öne çıkarken, WordPress esneklik ve ölçeklenebilirlik konusunda üstündür. Doğru seçim, sizin özel ihtiyaçlarınıza ve teknik bilginize göre değişir.</p>`,
      },
    ];

    const insertPost = database.prepare(`
      INSERT INTO blog_posts (title, slug, excerpt, content, meta_description, keywords, published)
      VALUES (?, ?, ?, ?, ?, ?, 1)
    `);

    for (const post of posts) {
      insertPost.run(post.title, post.slug, post.excerpt, post.content, post.meta_description, post.keywords);
    }

    // Seed redirect codes
    const redirectCount = (database.prepare('SELECT COUNT(*) as count FROM redirects').get() as { count: number }).count;
    if (redirectCount === 0) {
      const insertRedirect = database.prepare('INSERT INTO redirects (code, target_url) VALUES (?, ?)');
      insertRedirect.run('wix-premium', 'https://www.wix.com/upgrade/website');
      insertRedirect.run('wix-start', 'https://www.wix.com/');
      insertRedirect.run('wix-seo', 'https://support.wix.com/tr/article/wix-seo-wiz');
    }
  }
}

export { getDb };
