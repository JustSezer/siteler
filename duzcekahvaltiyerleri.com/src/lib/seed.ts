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
`);

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

const hashedPassword = bcrypt.hashSync("admin123", 12);
db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)").run(
  "admin@duzcekahvaltiyerleri.com",
  hashedPassword,
  "Admin"
);

const cats = db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)");
cats.run("Kahvaltı Mekanları", "kahvalti-mekanlari");
cats.run("Kahvaltı Tarifleri", "kahvalti-tarifleri");
cats.run("Yöresel Ürünler", "yoresel-urunler");
cats.run("Kahvaltı Kültürü", "kahvalti-kulturu");
cats.run("Sağlıklı Kahvaltı", "saglikli-kahvalti");

const insertPost = db.prepare(`
  INSERT INTO posts (title, slug, excerpt, content, cover_image, category_id, tags, reading_time, published_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertPost.run(
  "Düzce'nin En İyi Kahvaltı Yerleri: Sabahın En Güzel Adresleri",
  "duzce-en-iyi-kahvalti-yerleri",
  "Düzce'de sabahın tadını çıkarabileceğiniz, taze yöresel ürünlerle hazırlanan nefis kahvaltı mekanlarını keşfedin.",
  `<h2>Düzce Kahvaltı Kültürü</h2>
<p>Düzce, Bolu Dağı'nın eteklerinde yer alan ve zengin doğasıyla öne çıkan bir şehirdir. Bu güzel şehrin kahvaltı kültürü de tıpkı doğası gibi zengin ve çeşitlidir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a> gibi köklü mekanlar, Düzce'nin kahvaltı geleneğini yaşatmaktadır.</p>
<h2>Kahvaltı Mekanlarını Seçerken Dikkat Edilecekler</h2>
<p>Düzce'de kahvaltı yapacağınız mekanı seçerken şu kriterlere dikkat etmenizi öneririz:</p>
<ul>
  <li>Yöresel ve taze malzeme kullanımı</li>
  <li>Geniş çeşit sunan kahvaltı tabakları</li>
  <li>Doğal ortamda huzurlu bir atmosfer</li>
  <li>Uygun fiyat politikası</li>
</ul>
<h2>D100 Karayolu Üzerindeki Kahvaltı Noktaları</h2>
<p>D100 Karayolu üzerinde, özellikle Kaynaşlı bölgesinde pek çok lezzetli kahvaltı noktası bulunmaktadır. Bu noktaların başında <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri Et Mangal</a> gelmektedir. Sabah kahvaltısından akşam yemeğine kadar geniş menüsuyla hizmet veren bu mekan, Düzce'nin vazgeçilmez gastronomi adresleri arasındadır.</p>
<h2>Sonuç</h2>
<p>Düzce'de sabah kahvaltısı yapmak istiyorsanız, yöresel lezzetleri bir araya getiren mekanları tercih etmenizi öneririz. Taze yumurta, organik bal, ev yapımı reçeller ve yöresel peynirlerle başlayan bir gün, sizi tüm güne hazırlar.</p>`,
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
  1,
  "düzce kahvaltı, kahvaltı yerleri, yöresel kahvaltı",
  4,
  "2025-01-10 09:00:00"
);

insertPost.run(
  "Türk Kahvaltısının Vazgeçilmez Lezzetleri",
  "turk-kahvaltisinin-vazgecilmez-lezzetleri",
  "Zengin içeriği ve çeşitliliğiyle dünyanın en güzel sabah sofralarından biri olan Türk kahvaltısının olmazsa olmaz lezzetlerini keşfedin.",
  `<h2>Türk Kahvaltısı Neden Özeldir?</h2>
<p>Türk kahvaltısı, dünyada en zengin ve çeşitli kahvaltılar arasında gösterilmektedir. Onlarca çeşit yiyecek, taze ekmek ve çay eşliğinde sunulan bu sofra, Türk misafirperverliğinin en güzel yansımalarından biridir.</p>
<h2>Kahvaltı Sofrasının Temel Unsurları</h2>
<ul>
  <li><strong>Peynirler:</strong> Beyaz peynir, kaşar, tulum, çeçil peyniri</li>
  <li><strong>Zeytinler:</strong> Siyah ve yeşil zeytin çeşitleri</li>
  <li><strong>Yumurta:</strong> Sahanda, haşlanmış veya menemen şeklinde</li>
  <li><strong>Bal ve Kaymak:</strong> Özellikle Düzce ve Bolu yöresinin meşhur ürünleri</li>
  <li><strong>Reçeller:</strong> Ev yapımı çilek, kayısı, incir reçelleri</li>
  <li><strong>Simit ve Ekmek:</strong> Taze pişirilmiş çeşitler</li>
</ul>
<h2>Düzce'nin Özel Kahvaltılıkları</h2>
<p>Düzce, özellikle Bolu Dağı'nın zengin florası sayesinde eşsiz bal ve doğal ürünler üretmektedir. <a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow">İbrahim'in Yeri Yöresel Mağaza</a>'sında bu ürünlerin en kalitelilerini bulabilirsiniz.</p>
<h2>Çay Olmadan Olmaz</h2>
<p>Türk kahvaltısının tamamlayıcısı olan demli çay, özel olarak hazırlanmış çay bardaklarında servis edilir. İnce belli bardaklarda sunulan bu çay, kahvaltının vazgeçilmez eşlikçisidir.</p>`,
  "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1200",
  4,
  "türk kahvaltısı, kahvaltı çeşitleri, sabah sofrası",
  5,
  "2025-01-15 10:00:00"
);

insertPost.run(
  "Düzce'de Sabah Kahvaltısı Ritüeli: Bolu Dağı Eteklerinde Bir Sabah",
  "duzce-sabah-kahvaltisi-ritueli",
  "Düzce'nin eşsiz doğasında sabah kahvaltısının nasıl yapıldığını, yerel halkın kahvaltı alışkanlıklarını ve en güzel sabah mekanlarını anlatan özel bir rehber.",
  `<h2>Sabah Düzce'de Uyanmak</h2>
<p>Düzce'de bir sabah, Bolu Dağı'nın sisli görüntüsüyle başlar. Çam ormanlarının temiz havasını içine çeken biri için kahvaltı, sadece bir öğün değil, adeta bir ritüeldir. Bu ritüelin en güzel şekilde yaşanabileceği mekanlardan biri <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'dir.</p>
<h2>Yerel Halkın Kahvaltı Alışkanlıkları</h2>
<p>Düzce'li aileler, hafta sonlarını genellikle uzun ve keyifli kahvaltı sofraları etrafında geçirir. Taze çilek reçeli, organik bal, köy yumurtası ve taze ekmekle başlayan bu sohbet saatleri, aile bağlarını güçlendiren özel anlardır.</p>
<h2>Kahvaltı için En İdeal Zamanlar</h2>
<p>Düzce'de kahvaltı yapmak için en ideal zaman, özellikle ilkbahar ve yaz aylarında sabahın erken saatleridir. Bu saatlerde hava serin ve taze olduğundan, açık havada kahvaltı yapmak büyük bir keyif haline gelir.</p>
<h2>D100 Üzerindeki Özel Mekanlar</h2>
<p>D100 Karayolu üzerinde Kaynaşlı'ya yakın bölgede, doğayla iç içe pek çok kahvaltı mekanı bulunmaktadır. Bu mekanlar arasında <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri Et Mangal</a>, hem kahvaltı hem de öğle ve akşam yemeği için tercih edilen köklü bir adres olarak öne çıkmaktadır.</p>`,
  "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1200",
  1,
  "düzce sabah, kahvaltı ritüeli, bolu dağı",
  4,
  "2025-01-20 08:00:00"
);

insertPost.run(
  "Organik Bal ve Kaymak: Düzce'nin Eşsiz Yöresel Hazineleri",
  "organik-bal-ve-kaymak-duzce-yoresel-hazineleri",
  "Düzce ve Bolu yöresinin meşhur organik balları ve taze kaymağı hakkında bilmeniz gereken her şey. Yöresel üretim, çeşitler ve nerede bulunur.",
  `<h2>Düzce Balının Özellikleri</h2>
<p>Bolu Dağı eteklerinde yetişen çam ve kestane ormanları, Düzce balına eşsiz bir aroma ve lezzet katmaktadır. Bu bölgede üretilen organik bal, hem renk hem de tat açısından diğer ballardan ayrışmaktadır.</p>
<h2>Bal Çeşitleri</h2>
<ul>
  <li><strong>Çam Balı:</strong> Koyu renkli ve yoğun aromalı, mineral değeri yüksek</li>
  <li><strong>Kestane Balı:</strong> Acı-tatlı dengesiyle kendine özgü lezzet</li>
  <li><strong>Çiçek Balı:</strong> Hafif ve tatlı, günlük tüketim için ideal</li>
  <li><strong>Ihlamur Balı:</strong> Özellikle kış aylarında tercih edilen, sakinleştirici etkisiyle bilinen</li>
</ul>
<h2>Kaymağın Sırrı</h2>
<p>Düzce ve çevresinde üretilen taze kaymak, tam yağlı inek sütünden geleneksel yöntemlerle hazırlanmaktadır. Sabah sıcak ekmeğin üzerine bal ile birlikte sürülen kaymak, bu yörenin kahvaltı geleneğinin en önemli parçasıdır.</p>
<h2>Nereden Satın Alınır?</h2>
<p><a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow">İbrahim'in Yeri Yöresel Mağaza</a>'sında Düzce ve Bolu yöresinin en kaliteli organik ürünlerini bulabilirsiniz. D100 Karayolu üzerinde konumlanan bu mağazada taze kaymak, organik bal ve ev yapımı reçeller sizi bekliyor.</p>`,
  "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1200",
  3,
  "organik bal, kaymak, düzce yöresel, bolu balı",
  5,
  "2025-02-01 09:30:00"
);

insertPost.run(
  "Ev Yapımı Reçel Tarifleri: Çilekten Vişneye Düzce'nin Lezzetleri",
  "ev-yapimi-recel-tarifleri-duzce",
  "Düzce'nin bereketli bahçelerinden toplanan mevsim meyveleriyle hazırlanan ev yapımı reçel tarifleri. Çilek, vişne, erik ve daha fazlası.",
  `<h2>Düzce'nin Reçel Kültürü</h2>
<p>Düzce, zengin meyve bahçeleriyle ünlü bir şehirdir. Her mevsim farklı meyveler yetişen bu şehirde, ev yapımı reçel yapımı yüzyıllardır süregelen bir geleneğir. Bu reçeller, kahvaltı sofrasının vazgeçilmez tatlısı olarak yer almaktadır.</p>
<h2>Çilek Reçeli Tarifi</h2>
<p><strong>Malzemeler:</strong></p>
<ul>
  <li>1 kg taze çilek</li>
  <li>800 gram şeker</li>
  <li>1 adet limon suyu</li>
</ul>
<p><strong>Yapılışı:</strong> Çilekleri yıkayıp saplarını ayırın. Şekerle karıştırıp bir gece bekletin. Ertesi gün kısık ateşte, arada karıştırarak koyulaşana kadar pişirin. Limon suyunu ekleyip 5 dakika daha kaynatın. Sterilize edilmiş kavanozlara doldurun.</p>
<h2>Vişne Reçeli Tarifi</h2>
<p><strong>Malzemeler:</strong></p>
<ul>
  <li>1 kg vişne (çekirdeksiz)</li>
  <li>700 gram şeker</li>
  <li>Yarım limon suyu</li>
</ul>
<p><strong>Yapılışı:</strong> Vişnelerin çekirdeklerini çıkarın. Şekerle karıştırıp 2 saat bekletin. Orta ateşte kaynatmaya başlayın. Köpükleri alın, koyulaşana kadar pişirmeye devam edin. Limon suyunu ekleyip kavanozlara alın.</p>
<h2>Yöresel Reçelleri Nereden Bulabilirsiniz?</h2>
<p>Ev yapımı reçel yapmak için zamanınız yoksa, <a href="https://ibrahiminyeri.com/yoresel-magza" target="_blank" rel="dofollow">İbrahim'in Yeri Yöresel Mağaza</a>'sında geleneksel tariflerle hazırlanan ev yapımı reçelleri bulabilirsiniz.</p>`,
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200",
  2,
  "reçel tarifi, çilek reçeli, ev yapımı reçel, düzce",
  6,
  "2025-02-10 10:00:00"
);

insertPost.run(
  "Sağlıklı Kahvaltı Tabağı: Enerji Dolu Bir Güne Başlangıç",
  "saglikli-kahvalti-tabagi-enerji-dolu-baslangic",
  "Güne enerjik başlamak için besleyici ve dengeli kahvaltı tabağı önerileri. Protein, karbonhidrat ve vitamin dengesini doğru kurun.",
  `<h2>Sağlıklı Kahvaltı Neden Önemli?</h2>
<p>Sabah kahvaltısı, gün boyu enerjinizi belirleyen en önemli öğündür. Doğru besinlerle hazırlanan dengeli bir kahvaltı, konsantrasyonunuzu artırır, metabolizmanızı hızlandırır ve gün içinde sağlıksız atıştırmalık tüketimini azaltır.</p>
<h2>Dengeli Kahvaltı Tabağının Bileşenleri</h2>
<h3>Protein Kaynakları</h3>
<ul>
  <li>Yumurta (haşlanmış veya sahanda)</li>
  <li>Beyaz peynir veya lor peyniri</li>
  <li>Çekilmemiş ceviz veya badem</li>
</ul>
<h3>Karbonhidrat Kaynakları</h3>
<ul>
  <li>Tam buğday ekmeği veya çavdar ekmeği</li>
  <li>Yulaf ezmesi</li>
  <li>Az miktarda bal</li>
</ul>
<h3>Vitamin ve Mineral Kaynakları</h3>
<ul>
  <li>Mevsim meyveleri</li>
  <li>Domates ve salatalık</li>
  <li>Taze otlar (maydanoz, dereotu)</li>
</ul>
<h2>Düzce'nin Sağlıklı Kahvaltılık Ürünleri</h2>
<p>Düzce ve çevresi, doğal ve organik kahvaltılık ürünler açısından son derece zengindir. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'nde sunulan kahvaltı tabakları, bu ilkeleri göz önünde bulundurarak hazırlanmaktadır. Taze ve yerel malzemelerin bir araya getirilmesiyle oluşturulan bu tabaklar, hem lezzetli hem de besleyicidir.</p>
<h2>Kahvaltıyı Atlamayın</h2>
<p>Araştırmalar, düzenli kahvaltı yapan bireylerin daha sağlıklı bir metabolizmaya ve daha yüksek bir konsantrasyon kapasitesine sahip olduğunu göstermektedir. Sabah acelesiyle kahvaltıyı atlamak yerine, en azından 15-20 dakika ayırarak sağlıklı bir başlangıç yapın.</p>`,
  "https://images.pexels.com/photos/162939/pexels-photo-162939.jpeg?auto=compress&cs=tinysrgb&w=1200",
  5,
  "sağlıklı kahvaltı, dengeli beslenme, protein kahvaltı",
  5,
  "2025-02-20 08:30:00"
);

console.log("✅ Veritabanı başarıyla oluşturuldu!");
console.log("📧 Admin email: admin@duzcekahvaltiyerleri.com");
console.log("🔑 Admin şifre: admin123");
console.log("⚠️  Lütfen admin şifrenizi değiştirmeyi unutmayın!");
