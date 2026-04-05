import Database from "better-sqlite3";
import path from "path";
import bcrypt from "bcryptjs";
import fs from "fs";

const dbDir = path.join(process.cwd(), "db");
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, "blog.db");
const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE
  );

  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    category_id INTEGER,
    tags TEXT,
    reading_time INTEGER DEFAULT 5,
    is_published INTEGER DEFAULT 1,
    published_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (category_id) REFERENCES categories(id)
  );

  CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
  CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category_id);
  CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at);
`);

// Drop and recreate tables for clean seed
db.pragma("foreign_keys = OFF");
db.exec("DROP TABLE IF EXISTS posts");
db.exec("DROP TABLE IF EXISTS categories");
db.exec("DROP TABLE IF EXISTS users");
db.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE
  );
  CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    category_id INTEGER,
    tags TEXT,
    reading_time INTEGER DEFAULT 5,
    is_published INTEGER DEFAULT 1,
    published_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
  );
  CREATE INDEX idx_posts_slug ON posts(slug);
  CREATE INDEX idx_posts_category ON posts(category_id);
  CREATE INDEX idx_posts_published_at ON posts(published_at);
`);
db.pragma("foreign_keys = ON");

// Create admin user
const hashedPassword = bcrypt.hashSync("admin123", 12);
db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)").run(
  "admin@duzceetmangal.com",
  hashedPassword,
  "Admin"
);

// Create categories
const categories = [
  { name: "Mangal Tarifleri", slug: "mangal-tarifleri" },
  { name: "Et Rehberi", slug: "et-rehberi" },
  { name: "Kebap Çeşitleri", slug: "kebap-cesitleri" },
  { name: "Marine & Soslar", slug: "marine-soslar" },
  { name: "Düzce Lezzetleri", slug: "duzce-lezzetleri" },
  { name: "Mutfak İpuçları", slug: "mutfak-ipuclari" },
];

const insertCategory = db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)");
for (const cat of categories) {
  insertCategory.run(cat.name, cat.slug);
}

// Create posts
const insertPost = db.prepare(`
  INSERT INTO posts (title, slug, excerpt, content, cover_image, category_id, tags, reading_time, is_published, published_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
`);

const posts = [
  {
    title: "Düzce'de Mükemmel Mangal Deneyimi İçin 10 Altın Kural",
    slug: "duzcede-mukemmel-mangal-deneyimi-icin-10-altin-kural",
    excerpt: "Düzce'nin eşsiz doğası içinde unutulmaz bir mangal deneyimi yaşamak istiyorsanız, bu 10 altın kuralı mutlaka bilmelisiniz.",
    content: `<h2>Düzce Mangalının Sırları</h2>
<p>Düzce, Bolu Dağı'nın eteklerinde yer alan ve mangal kültürünün en köklü adreslerinden biridir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>, bu geleneği 30 yılı aşkın süredir sürdürmektedir.</p>

<h3>1. Meşe Kömürü Tercih Edin</h3>
<p>Düzce'nin zengin meşe ormanlarından elde edilen doğal kömür, mangala eşsiz bir aroma katar. İbrahim'in Yeri'nde kullanılan meşe közü, etin lezzetini en üst seviyeye çıkarır.</p>

<h3>2. Eti Oda Sıcaklığına Getirin</h3>
<p>Pişirmeden en az 30 dakika önce eti buzdolabından çıkarın. Bu sayede et eşit pişer ve iç kısmı soğuk kalmaz.</p>

<h3>3. Ateşin Közleşmesini Bekleyin</h3>
<p>Alevli ateşte değil, közleşmiş ateşte pişirin. Meşe kömürünün kızarmasını ve küllenmesini bekleyin. Bu, etin dışının yanmadan içinin pişmesini sağlar.</p>

<h3>4. Doğru Et Kalınlığını Seçin</h3>
<p>Mangal için ideal et kalınlığı 2-3 cm arasındadır. Çok ince kesimler kurur, çok kalın kesimler ise içi çiğ kalabilir.</p>

<h3>5. Tuzlamayı Zamanlayın</h3>
<p>Kırmızı eti pişirmeden hemen önce veya piştikten sonra tuzlayın. Erken tuzlama etin suyunu çeker ve sertleşmesine neden olur.</p>

<h3>6. Sürekli Çevirmeyin</h3>
<p>Eti mangala koyduktan sonra sabırlı olun. Her yüzü sadece bir kez çevirin. Sürekli çevirme etin suyunu kaybetmesine neden olur.</p>

<h3>7. Marinasyon İçin Zaman Tanıyın</h3>
<p>Özellikle tavuk ve kuzu eti için marinasyon çok önemlidir. En az 4-6 saat, ideal olarak bir gece önceden marine edin.</p>

<h3>8. Soğan ve Sebzeleri Unutmayın</h3>
<p>Mangalın yanında közlenmiş biber, domates ve soğan olmazsa olmazdır. Düzce'nin yöresel sebzeleri ile mangal sofranızı zenginleştirin.</p>

<h3>9. Dinlendirmeyi İhmal Etmeyin</h3>
<p>Eti mangaldan aldıktan sonra 5 dakika dinlendirin. Bu sürede ettin suları yeniden dağılır ve daha sulu bir tat elde edersiniz.</p>

<h3>10. Lezzeti Profesyonellere Bırakın</h3>
<p>Gerçek mangal lezzetini tatmak istiyorsanız <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri menüsüne</strong></a> göz atın. 30 yıllık tecrübe ile hazırlanan lezzetler sizi bekliyor.</p>

<blockquote>Düzce'de mangal yapmak sadece yemek pişirmek değil, bir kültürdür. D100 üzerinde <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'nde bu kültürü yaşayın.</blockquote>`,
    cover_image: "https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 1,
    tags: "mangal, düzce mangal, meşe közü, et mangal, mangal tarifleri",
    reading_time: 8,
    published_at: "2025-03-15 10:00:00",
  },
  {
    title: "Kuzu Pirzola Nasıl Pişirilir? Meşe Közünde Mükemmel Pirzola",
    slug: "kuzu-pirzola-nasil-pisirilir-mese-kozunde-mukemmel-pirzola",
    excerpt: "Meşe közünde mükemmel kuzu pirzola pişirmenin püf noktalarını öğrenin. İbrahim'in Yeri'nin 30 yıllık tecrübesiyle hazırlanan tarif.",
    content: `<h2>Meşe Közünde Kuzu Pirzola</h2>
<p>Kuzu pirzola, mangal sofralarının vazgeçilmez lezzetidir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'da meşe közünde pişirilen kuzu pirzola, Düzce'nin en sevilen lezzetleri arasındadır.</p>

<h3>Malzemeler</h3>
<ul>
<li>8 adet kuzu pirzola</li>
<li>Zeytinyağı</li>
<li>Taze kekik ve biberiye</li>
<li>Sarımsak (4 diş)</li>
<li>Tuz ve karabiber</li>
<li>Pul biber</li>
</ul>

<h3>Hazırlık</h3>
<p>Kuzu pirzolayı buzdolabından 45 dakika önce çıkarın. Zeytinyağı, ezilmiş sarımsak, kekik ve biberiye ile iyice ovun. Pirzolanın marine olması için en az 2 saat bekletin.</p>

<h3>Pişirme</h3>
<p>Meşe kömürünü yakın ve közleşmesini bekleyin. Pirzolayı yüksek ısıda her yüzünü 3-4 dakika pişirin. İç sıcaklığı 60°C'ye ulaştığında ateşten alın ve 5 dakika dinlendirin.</p>

<h3>Servis</h3>
<p>Taze roka, közlenmiş domates ve biber ile servis edin. <a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri yöresel mağazasından</strong></a> temin edebileceğiniz özel baharatlar ile lezzetinizi taçlandırın.</p>

<blockquote>Profesyonel ellerde hazırlanan kuzu pirzolanın tadına <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow">menümüzden</a> bakarak karar verin!</blockquote>`,
    cover_image: "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 1,
    tags: "kuzu pirzola, mangal tarifi, meşe közü, et pişirme, düzce",
    reading_time: 6,
    published_at: "2025-03-10 12:00:00",
  },
  {
    title: "Et Seçim Rehberi: Mangal İçin En İyi Et Nasıl Seçilir?",
    slug: "et-secim-rehberi-mangal-icin-en-iyi-et-nasil-secilir",
    excerpt: "Mangal için doğru et seçimi, lezzetli bir mangal deneyiminin temelini oluşturur. Kasaptan eti nasıl seçeceğinizi öğrenin.",
    content: `<h2>Mangal İçin Doğru Et Seçimi</h2>
<p>Mükemmel bir mangal deneyimi, doğru et seçimiyle başlar. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'da yalnızca en kaliteli etler kullanılır ve bu rehberde sizlerle et seçiminin inceliklerini paylaşıyoruz.</p>

<h3>Kırmızı Et Seçimi</h3>
<p>Mangal için en ideal kırmızı etler, yağ marbling'i (damarlanması) olan etlerdir. Dana bonfile, antrikot ve pirzola mangal için en çok tercih edilen kesimlerdir.</p>

<h3>Renk ve Doku</h3>
<p>Taze et parlak kırmızı renkte olmalıdır. Koyu kahverengi veya gri tonlar bayatlama belirtisidir. Etin dokusu sıkı ve elastik olmalıdır.</p>

<h3>Yağ Oranı</h3>
<p>İdeal mangallık ette %15-20 yağ oranı olmalıdır. Bu yağ, pişirme sırasında etin sulu kalmasını ve lezzet kazanmasını sağlar.</p>

<h3>Kuzu Eti İçin İpuçları</h3>
<p>Kuzu eti açık pembe renkte, ince yağ tabakası ile kaplı olmalıdır. Düzce bölgesinin otlaklarında yetişen kuzuların eti, doğal otlarla beslenmeleri sayesinde eşsiz bir aroma taşır.</p>

<h3>Tavuk Eti İçin İpuçları</h3>
<p>Mangal için bütün tavuk veya but tercih edin. Göğüs eti kolayca kuruyabilir, bu yüzden marinasyon şarttır.</p>

<h3>Ne Kadar Et Almalısınız?</h3>
<p>Kişi başı ortalama 300-400 gram et hesaplarsanız, sofranızda eksiklik olmaz. Çeşitlilik istiyorsanız <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow"><strong>menümüzdeki</strong></a> çeşitleri inceleyerek ilham alabilirsiniz.</p>

<blockquote>Et seçiminde profesyonel destek almak için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'ni ziyaret edin. 30 yıllık tecrübemizle en doğru eti sizin için seçiyoruz.</blockquote>`,
    cover_image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 2,
    tags: "et seçimi, kasap, kırmızı et, kuzu eti, mangal eti",
    reading_time: 7,
    published_at: "2025-03-05 09:00:00",
  },
  {
    title: "Adana Kebap Tarifi: Evde Profesyonel Adana Kebap Yapımı",
    slug: "adana-kebap-tarifi-evde-profesyonel-adana-kebap-yapimi",
    excerpt: "Evde lokanta kalitesinde Adana kebap yapmanın tüm sırlarını bu yazıda bulacaksınız. Doğru kıyma seçiminden pişirme tekniklerine kadar her şey.",
    content: `<h2>Evde Adana Kebap Nasıl Yapılır?</h2>
<p>Adana kebap, Türk mutfağının en sevilen lezzetlerinden biridir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'ın ustalarından ilham alarak hazırladığımız bu tarifle evde profesyonel Adana kebap yapabilirsiniz.</p>

<h3>Malzemeler (4 kişilik)</h3>
<ul>
<li>500 gram kuzu kıyma (kuyruk yağlı)</li>
<li>1 adet soğan (rendelenmiş, suyu sıkılmış)</li>
<li>2 yemek kaşığı pul biber (Urfa veya Antep)</li>
<li>1 çay kaşığı karabiber</li>
<li>1 çay kaşığı tuz</li>
<li>1 çay kaşığı sumak</li>
</ul>

<h3>Hazırlık</h3>
<p>Kıymayı geniş bir kapta baharatlar ve soğan ile yoğurun. En az 30 dakika yoğurmanız gerekir - bu adımı atlamayın! Yoğurma, kebabın şişte durmasını ve lezzetin eşit dağılmasını sağlar.</p>

<h3>Şişe Geçirme</h3>
<p>Ellerinizi ıslatarak kıyma karışımından parçalar alın ve yassı şişlere bastırarak geçirin. Kalınlık her yerde eşit olmalıdır.</p>

<h3>Pişirme</h3>
<p>Meşe közü üzerinde yüksek ısıda pişirin. Her tarafını 2-3 dakika pişirin. Toplamda 8-10 dakikada hazır olur. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'nde meşe közünün verdiği aroma farkını kesinlikle hissedeceksiniz.</p>

<h3>Servis</h3>
<p>Lavaş ekmeği, közlenmiş domates-biber, soğan ve bol maydanoz ile servis edin.</p>

<blockquote>Profesyonel ustalarımızın elinden çıkan Adana kebabı tatmak için <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow">menümüzü inceleyeın</a>.</blockquote>`,
    cover_image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 3,
    tags: "adana kebap, kebap tarifi, kıyma kebap, mangal, türk mutfağı",
    reading_time: 6,
    published_at: "2025-02-28 14:00:00",
  },
  {
    title: "En İyi Et Marine Tarifleri: Yumuşacık Et İçin 5 Farklı Marine",
    slug: "en-iyi-et-marine-tarifleri-yumusacik-et-icin-5-farkli-marine",
    excerpt: "Mangal etlerinizi bir üst seviyeye taşıyacak 5 farklı marine tarifi. Yoğurtlu, zeytinyağlı, soğanlı ve daha fazlası.",
    content: `<h2>Mükemmel Et Marine Tarifleri</h2>
<p>Marinasyon, sıradan bir eti olağanüstü bir lezzete dönüştürebilir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'ın mutfağından ilham alarak hazırladığımız bu marine tarifleri, mangal etlerinizi bir üst seviyeye taşıyacak.</p>

<h3>1. Klasik Yoğurtlu Marine</h3>
<p>1 su bardağı yoğurt, 2 yemek kaşığı zeytinyağı, 1 çay kaşığı pul biber, tuz ve karabiber. Tüm malzemeleri karıştırıp etin üzerine sürün. En az 4 saat buzdolabında bekletin.</p>

<h3>2. Soğanlı Marine</h3>
<p>3 adet rendelenmiş soğan, 2 yemek kaşığı zeytinyağı, 1 çay kaşığı kekik. Soğan suyu eti doğal olarak yumuşatır. Gece boyunca marine edin.</p>

<h3>3. Zeytinyağı-Biberiye Marine</h3>
<p>Yarım çay bardağı zeytinyağı, taze biberiye dalları, sarımsak dilimleri, limon suyu. Özellikle kuzu eti için mükemmeldir.</p>

<h3>4. Nar Ekşili Marine</h3>
<p>2 yemek kaşığı nar ekşisi, 1 yemek kaşığı zeytinyağı, 1 çay kaşığı pul biber. Tavuk ve kuzu etine harika uyum sağlar.</p>

<h3>5. Düzce Usulü Özel Marine</h3>
<p>Düzce'nin yöresel otları, meşe tütsüsü aromalı zeytinyağı ve taze kekik ile hazırlanan bu özel marine, <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri</strong></a>'nin imza tarifidir. <a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow">Yöresel mağazamızdan</a> özel baharat karışımlarımızı temin edebilirsiniz.</p>

<blockquote>Marine edilmiş etlerin meşe közünde pişirilmiş halini tatmak için <a href="https://ibrahiminyeri.com/nasil-gidilir" target="_blank" rel="dofollow">bize ulaşın</a>!</blockquote>`,
    cover_image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 4,
    tags: "marine, et marine, yoğurtlu marine, mangal marine, et yumuşatma",
    reading_time: 5,
    published_at: "2025-02-20 11:00:00",
  },
  {
    title: "Düzce'nin Yöresel Lezzetleri: Bolu Dağı'nın Mutfak Mirası",
    slug: "duzcenin-yoresel-lezzetleri-bolu-daginin-mutfak-mirasi",
    excerpt: "Düzce ve Bolu Dağı bölgesinin zengin mutfak kültürünü keşfedin. Yöresel tatlar, geleneksel tarifler ve İbrahim'in Yeri'nin hikayesi.",
    content: `<h2>Düzce'nin Mutfak Zenginliği</h2>
<p>Düzce, Batı Karadeniz'in incisi olarak bilinir ve mutfak kültürü de en az doğası kadar zengindir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>, bu zengin mutfak mirasını modern sunumlarla buluşturmaktadır.</p>

<h3>Bakacak Köfte</h3>
<p>Düzce'nin en meşhur lezzetlerinden biri olan Bakacak Köfte, özel baharatlar ve taze otlarla hazırlanır. <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri menüsünde</strong></a> mutlaka denemelisiniz.</p>

<h3>Meşe Közünde Et Mangal</h3>
<p>Bölgenin zengin orman yapısından elde edilen meşe kömürü, Düzce'nin et mangal geleneğinin temelini oluşturur. Meşe közünün yavaş ve eşit ısı dağılımı, ete eşsiz bir lezzet katar.</p>

<h3>Yöresel Kahvaltı</h3>
<p>Düzce'nin doğal ürünleri ile hazırlanan köy kahvaltısı, bölgeyi ziyaret edenlerin mutlaka denemesi gereken bir deneyimdir. Taze tereyağı, çeşit çeşit peynirler ve ev yapımı reçeller sofrayı süsler.</p>

<h3>Yöresel Ürünler</h3>
<p>Düzce'nin doğal fındığı, ev yapımı pestilleri ve geleneksel reçelleri, <a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Yöresel Mağazası</strong></a>'nda sizleri bekliyor.</p>

<h3>D100 Üzerinde Bir Gelenek</h3>
<p>D100 Karayolu üzerinde konumlanan <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri</strong></a>, İstanbul-Ankara yolculuğunun vazgeçilmez molası olarak bilinir. <a href="https://ibrahiminyeri.com/basinda-biz" target="_blank" rel="dofollow">Basında Biz</a> sayfamızdan medya yansımalarını inceleyebilirsiniz.</p>

<blockquote>Düzce'nin yöresel lezzetlerini keşfetmek için <a href="https://ibrahiminyeri.com/nasil-gidilir" target="_blank" rel="dofollow">yol tarifimize</a> göz atın ve bizi ziyaret edin!</blockquote>`,
    cover_image: "https://images.pexels.com/photos/5175622/pexels-photo-5175622.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 5,
    tags: "düzce, yöresel lezzetler, bolu dağı, bakacak köfte, türk mutfağı",
    reading_time: 7,
    published_at: "2025-02-15 08:00:00",
  },
  {
    title: "Mangalda Tavuk Kanat Tarifi: Çıtır Çıtır Baharatlı Kanatlar",
    slug: "mangalda-tavuk-kanat-tarifi-citir-citir-baharatli-kanatlar",
    excerpt: "Mangalda mükemmel tavuk kanat yapmanın sırları. Özel baharat karışımı ve meşe közü ile çıtır çıtır kanatlar.",
    content: `<h2>Mangalda Tavuk Kanat</h2>
<p>Tavuk kanat, mangal sofralarının en sevilen mezelerinden biridir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'da hazırlanan çıtır kanatlar, özel baharat karışımı ve meşe közünün birleşimiyle eşsiz bir lezzet sunar.</p>

<h3>Malzemeler (4 kişilik)</h3>
<ul>
<li>1 kg tavuk kanat</li>
<li>3 yemek kaşığı zeytinyağı</li>
<li>1 yemek kaşığı pul biber</li>
<li>1 çay kaşığı kekik</li>
<li>1 çay kaşığı tatlı toz biber</li>
<li>Yarım limon suyu</li>
<li>Tuz ve karabiber</li>
</ul>

<h3>Marine</h3>
<p>Tüm baharatları zeytinyağı ve limon suyu ile karıştırın. Kanatları bu karışıma iyice bulayın. Buzdolabında en az 3 saat, ideal olarak gece boyu bekletin.</p>

<h3>Pişirme Tekniği</h3>
<p>Meşe kömürünü yakıp közleşmesini bekleyin. Kanatları orta yükseklikteki ızgaraya dizin. Her yüzünü 5-6 dakika pişirin. Toplam pişirme süresi 20-25 dakikadır.</p>

<h3>Servis Önerisi</h3>
<p>Közlenmiş sebzeler ve yoğurtlu sos ile servis edin. <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow"><strong>Menümüzdeki</strong></a> diğer lezzetlerle birlikte harika bir sofra hazırlayabilirsiniz.</p>

<blockquote>Profesyonel mangalcılarımızın elinden çıkan kanatları tatmak için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'ni ziyaret edin!</blockquote>`,
    cover_image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 1,
    tags: "tavuk kanat, mangal tarifi, çıtır kanat, mangal mezesi, tavuk",
    reading_time: 5,
    published_at: "2025-02-10 10:00:00",
  },
  {
    title: "Mangal Kömürü Rehberi: Meşe mi, Odun mu, Briket mi?",
    slug: "mangal-komuru-rehberi-mese-mi-odun-mu-briket-mi",
    excerpt: "Mangal için en doğru kömür seçimi nasıl yapılır? Meşe kömürü, odun kömürü ve briket arasındaki farkları öğrenin.",
    content: `<h2>Doğru Kömür Seçimi</h2>
<p>Mangalın lezzeti, kullanılan kömürle doğrudan ilişkilidir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'da yalnızca %100 doğal meşe kömürü kullanılır ve bu fark, ete eşsiz bir aroma katar.</p>

<h3>Meşe Kömürü</h3>
<p>Meşe kömürü, mangal için en ideal seçenektir. Yavaş ve eşit yanar, uzun süre ısı verir. Düzce'nin zengin meşe ormanlarından elde edilen kömür, ete hafif tütsülenmiş bir lezzet katar.</p>

<h3>Odun Kömürü</h3>
<p>Odun kömürü daha hızlı tutuşur ancak çabuk söner. Küçük mangallar ve hızlı pişirmeler için uygundur. Ancak ısı dağılımı meşe kömürü kadar düzgün değildir.</p>

<h3>Briket Kömür</h3>
<p>Briket kömür endüstriyel olarak üretilir. Uzun yanar ancak doğal aroma vermez. Pratik olsa da lezzet açısından meşe kömürünün çok gerisinde kalır.</p>

<h3>Neden Meşe?</h3>
<p>Meşe kömürünün avantajları:</p>
<ul>
<li>6-8 saat kesintisiz yanma</li>
<li>Eşit ısı dağılımı</li>
<li>Doğal tütsü aroması</li>
<li>Daha az kıvılcım ve kül</li>
<li>Yüksek kalorifik değer</li>
</ul>

<blockquote>Meşe közünde pişen lezzetlerin farkını <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow">menümüzden</a> keşfedin. <a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow">Yöresel mağazamızdan</a> meşe kömürü de temin edebilirsiniz.</blockquote>`,
    cover_image: "https://images.pexels.com/photos/6941049/pexels-photo-6941049.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 6,
    tags: "mangal kömürü, meşe kömürü, briket, mangal ipuçları, kömür seçimi",
    reading_time: 6,
    published_at: "2025-02-05 09:00:00",
  },
  {
    title: "Evde Köfte Çeşitleri: 7 Farklı Köfte Tarifi",
    slug: "evde-kofte-cesitleri-7-farkli-kofte-tarifi",
    excerpt: "Türk mutfağının vazgeçilmez lezzeti köftenin 7 farklı çeşidi. İnegöl, Tekirdağ, İzmir ve Bakacak köfte tarifleri.",
    content: `<h2>Türk Köfte Kültürü</h2>
<p>Köfte, Türk mutfağının en sevilen ve en çeşitli lezzetlerinden biridir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'ın meşhur Bakacak Köftesi başta olmak üzere, evde yapabileceğiniz 7 farklı köfte tarifi.</p>

<h3>1. Bakacak Köfte (Düzce Özel)</h3>
<p>Düzce'nin imza lezzeti! Dana kıyma, özel baharatlar ve taze otlarla hazırlanır. <a href="https://ibrahiminyeri.com/menu" target="_blank" rel="dofollow"><strong>Menümüzde</strong></a> en çok tercih edilen lezzetimizdir.</p>

<h3>2. İnegöl Köfte</h3>
<p>Sadece et, soğan ve tuzdan oluşan sade ama lezzetli bir köfte. Ekmek içi yerine soğan suyu kullanılır.</p>

<h3>3. Tekirdağ Köfte</h3>
<p>Yassı ve ince şekliyle bilinen Tekirdağ köftesi, mangalda harika olur. Baharatları minimumdadır.</p>

<h3>4. İzmir Köfte</h3>
<p>Patates ve domates soslu fırın köftesi. Kışın sofraları ısıtan muhteşem bir lezzet.</p>

<h3>5. Kadınbudu Köfte</h3>
<p>Pirinçli ve yumurtalı, kızartılarak yapılan klasik bir köfte çeşidi.</p>

<h3>6. Çiğ Köfte</h3>
<p>İsot biberi ve bulgurla hazırlanan, etsiz çiğ köfte artık evlerin vazgeçilmezi.</p>

<h3>7. Şiş Köfte</h3>
<p>Şişe geçirilerek mangalda pişirilen klasik köfte. Meşe közünde en lezzetli haliyle pişer.</p>

<blockquote>Bakacak Köfte'nin orijinal tadını tatmak için <a href="https://ibrahiminyeri.com/nasil-gidilir" target="_blank" rel="dofollow">bize gelin</a>! <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'nde 30 yıllık tecrübeyle hazırlanan köftelerimizi deneyin.</blockquote>`,
    cover_image: "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 3,
    tags: "köfte tarifleri, bakacak köfte, inegöl köfte, türk mutfağı, mangal köfte",
    reading_time: 8,
    published_at: "2025-01-30 12:00:00",
  },
  {
    title: "D100 Karayolu Yol Üstü Lezzetleri: Düzce Molası",
    slug: "d100-karayolu-yol-ustu-lezzetleri-duzce-molasi",
    excerpt: "İstanbul-Ankara seferi yapanlar için D100 Karayolu üzerindeki en iyi mola noktaları ve Düzce'nin vazgeçilmez durakları.",
    content: `<h2>D100 Karayolu'nda Lezzet Durağı</h2>
<p>İstanbul-Ankara arasında yolculuk yapanlar için D100 Karayolu, sadece bir ulaşım güzergahı değil, aynı zamanda bir gastronomi rotasıdır. Bu rotanın en önemli durağı ise <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri Et Mangal</strong></a>'dır.</p>

<h3>Neden Düzce'de Mola?</h3>
<p>Düzce, İstanbul'a yaklaşık 3 saatlik mesafede, Bolu Dağı'nın hemen öncesinde yer alır. Yolculuğun tam ortasında, hem dinlenme hem de lezzet molası için ideal konumdadır.</p>

<h3>İbrahim'in Yeri'nin Hikayesi</h3>
<p>30 yılı aşkın süredir D100 Karayolu'nda hizmet veren <a href="https://ibrahiminyeri.com/hakkimizda" target="_blank" rel="dofollow"><strong>İbrahim'in Yeri</strong></a>, nesiller boyu aktarılan mangal geleneğini sürdürmektedir. Meşe közünde pişen etler, yöresel lezzetler ve samimi atmosfer ile binlerce yolcunun vazgeçilmez durağı olmuştur.</p>

<h3>Ne Yemeli?</h3>
<ul>
<li>Bakacak Köfte - Düzce'nin imza lezzeti</li>
<li>Kuzu Pirzola - Meşe közünde pişmiş</li>
<li>Adana Kebap - Ustalarımızın özel tarifi</li>
<li>Serpme Kahvaltı - Yöresel ürünlerle hazırlanmış</li>
</ul>

<h3>Yöresel Alışveriş</h3>
<p><a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow"><strong>Yöresel mağazamızda</strong></a> Düzce'nin doğal ürünlerini, fındık, pestil, reçel ve ev yapımı lezzetleri alabilirsiniz.</p>

<h3>Nasıl Gidilir?</h3>
<p>D100 Karayolu üzerinde, Kaynaşlı çıkışında bulunuyoruz. Detaylı yol tarifi için <a href="https://ibrahiminyeri.com/nasil-gidilir" target="_blank" rel="dofollow"><strong>Nasıl Gidilir</strong></a> sayfamızı ziyaret edin.</p>

<blockquote>Yolculuğunuzu bir lezzet deneyimine dönüştürün! <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'nde sizi bekliyoruz. 📞 0850 888 81 14</blockquote>`,
    cover_image: "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_id: 5,
    tags: "d100, yol molası, düzce, karayolu, restoran, seyahat",
    reading_time: 6,
    published_at: "2025-01-25 15:00:00",
  },
];

for (const post of posts) {
  insertPost.run(
    post.title,
    post.slug,
    post.excerpt,
    post.content,
    post.cover_image,
    post.category_id,
    post.tags,
    post.reading_time,
    post.published_at
  );
}

console.log("✅ Seed tamamlandı!");
console.log(`   - 1 admin kullanıcı oluşturuldu (admin@duzceetmangal.com / admin123)`);
console.log(`   - ${categories.length} kategori oluşturuldu`);
console.log(`   - ${posts.length} blog yazısı oluşturuldu`);

db.close();
