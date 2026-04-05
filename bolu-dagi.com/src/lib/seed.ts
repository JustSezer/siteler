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
    FOREIGN KEY (category_id) REFERENCES categories(id)
  );
  CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
  CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category_id);
  CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at);
`);
db.pragma("foreign_keys = ON");

const password = bcrypt.hashSync("admin123456", 12);
db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)").run(
  "admin@bolu-dagi.com",
  password,
  "Admin"
);

const categories = [
  { name: "Doğa & Yürüyüş", slug: "doga-yuruyus" },
  { name: "Gastronomi", slug: "gastronomi" },
  { name: "Seyahat Rehberi", slug: "seyahat-rehberi" },
  { name: "Mevsimler", slug: "mevsimler" },
  { name: "Fotoğrafçılık", slug: "fotografcilik" },
];

for (const cat of categories) {
  db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)").run(cat.name, cat.slug);
}

const catRows = db.prepare("SELECT * FROM categories").all() as Array<{ id: number; name: string; slug: string }>;
const catMap = Object.fromEntries(catRows.map(c => [c.slug, c.id]));

const posts = [
  {
    title: "Bolu Dağı'nda Sonbahar: Renklerin Dansı",
    slug: "bolu-daginda-sonbahar-renklerin-dansi",
    excerpt: "Ekim ve Kasım aylarında Bolu Dağı'nı ziyaret edenler eşsiz bir renk şölenine tanık olur. Sarı, kızıl ve turuncu tonlarıyla boyanmış ormanlar, fotoğrafçıların ve doğa severlerin gözdesi.",
    content: `<h2>Sonbaharın En Güzel Adresi</h2>
<p>Bolu Dağı, Türkiye'nin en spektaküler sonbahar manzaralarından birini sunar. Kayın, meşe ve gürgen ormanlarının yaprak döktüğü bu dönemde, dağın her köşesi adeta bir tablo gibidir.</p>
<h2>Ne Zaman Gitmelisiniz?</h2>
<p>Ekim ayının ortasından Kasım ayının başına kadar olan süre, yaprak renklenmesi için en ideal dönemdir. Bu süreçte sabah sisinin arasından süzülen güneş ışığı, ormanlara büyülü bir atmosfer katar.</p>
<h2>Fotoğraf Noktaları</h2>
<p>D100 karayolu üzerindeki virajlar, özellikle güneş batımında inanılmaz kareler sunar. Abant Gölü ve çevresi de mutlaka ziyaret edilmesi gereken noktalar arasındadır.</p>
<h2>Pratik Bilgiler</h2>
<p>Sonbahar döneminde Bolu Dağı'nın hava koşulları değişken olabilir. Yanınıza mutlaka bir yağmurluk ve sıcak kıyafet alın. <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri</a>'nde sıcak bir çorba veya ızgara mola vermek bu güzel manzaraları daha da keyifli hale getirir.</p>`,
    cover_image: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category_slug: "mevsimler",
    tags: "bolu dağı, sonbahar, yaprak, doğa, fotoğraf",
    reading_time: 4,
  },
  {
    title: "Bolu Dağı Yürüyüş Rotaları: Başlangıç Rehberi",
    slug: "bolu-dagi-yuruyus-rotalari-baslangic-rehberi",
    excerpt: "Bolu Dağı ve çevresinde onlarca yürüyüş parkuru bulunmaktadır. Abant Gölü çevresi, Yedigöller ve dağın zirvesine uzanan patikalar, her seviyeden doğa severine uygun seçenekler sunuyor.",
    content: `<h2>Abant Gölü Çevresi</h2>
<p>Yaklaşık 8 km uzunluğundaki bu düz parkur, her yaş grubuna uygundur. Göl çevresindeki orman yolu, tüm yıl boyunca keyifli bir yürüyüş imkânı sunar.</p>
<h2>Yedigöller Milli Parkı</h2>
<p>Bolu Dağı'nın kuzey yamacında yer alan Yedigöller, birbirini besleyen yedi gölün oluşturduğu eşsiz bir ekosistemdir. İlkbahar ve sonbahar aylarında özellikle büyüleyicidir.</p>
<h2>Bolu Dağı Zirve Rotası</h2>
<p>Daha deneyimli yürüyüşçüler için zirveye uzanan patika, yaklaşık 5-6 saat sürmektedir. İyi bir kondisyon ve uygun ekipman şarttır.</p>
<h2>Yürüyüş Sonrası Mola</h2>
<p>Yorucu bir yürüyüşün ardından <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri Et Mangal</a>'da meşe közünde pişmiş bir et yemeği, tüm yorgunluğunuzu alır. D100 üzerindeki konumuyla yolunuzun üzerinde yer alır.</p>`,
    cover_image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category_slug: "doga-yuruyus",
    tags: "yürüyüş, bolu dağı, abant, yedigöller, doğa",
    reading_time: 5,
  },
  {
    title: "Bolu Dağı'nda Yemek Kültürü: Orman Sofraları",
    slug: "bolu-daginda-yemek-kulturu-orman-sofralari",
    excerpt: "Bolu Dağı geçidinin iki yakasında, yüzyıllardır süregelen bir yemek kültürü yaşamaktadır. Meşe kömüründe pişen etler, taze yaylaların getirdiği doğal ürünler ve bölgeye özgü tatlar bu kültürün temel taşlarıdır.",
    content: `<h2>Bolu Dağı ve Et Kültürü</h2>
<p>Bolu Dağı geçidi, İstanbul-Ankara yolunun üzerindeki konumuyla yüzyıllardır kervansarayların ve hanlarin bulunduğu bir güzergahtır. Bu gelenek günümüzde et mangal restoranları şeklinde sürmektedir.</p>
<h2>Meşe Kömürünün Önemi</h2>
<p>Bölgenin zengin meşe ormanlarından elde edilen kömür, ete eşsiz bir aroma katar. Bu kömürün verdiği yavaş ateş, etin her noktasının eşit şekilde pişmesini sağlar.</p>
<h2>İbrahim'in Yeri: Bolu Dağı'nın Efsanesi</h2>
<p>30 yılı aşkın deneyimiyle <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim'in Yeri Et Mangal</a>, Bolu Dağı'nın yemek kültürünün canlı bir temsilcisidir. D100 karayolu üzerindeki konumuyla her yıl binlerce ziyaretçiyi ağırlamaktadır.</p>
<h2>Bölgenin Diğer Lezzetleri</h2>
<p>Bolu'nun meşhur orman mantarları, taze yaylaların tereyağı ve peyniri, bölge mutfağının vazgeçilmez unsurlarıdır. Yazın toplanan yabani çilekler ise adeta bir doğa armağanıdır.</p>`,
    cover_image: "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category_slug: "gastronomi",
    tags: "bolu dağı, et mangal, yemek kültürü, gastronomi, meşe kömürü",
    reading_time: 6,
  },
];

for (const post of posts) {
  db.prepare(`
    INSERT INTO posts (title, slug, excerpt, content, cover_image, category_id, tags, reading_time, is_published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
  `).run(
    post.title,
    post.slug,
    post.excerpt,
    post.content,
    post.cover_image,
    catMap[post.category_slug] || null,
    post.tags,
    post.reading_time
  );
}

console.log("✅ Veritabanı başarıyla oluşturuldu!");
console.log("📧 Admin Email: admin@bolu-dagi.com");
console.log("🔑 Admin Şifre: admin123456");
console.log("⚠️  Giriş yaptıktan sonra şifreyi değiştirin!");

db.close();
