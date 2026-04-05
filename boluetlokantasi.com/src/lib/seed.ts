import { createClient } from "@libsql/client";
import bcrypt from "bcryptjs";

const db = createClient({ url: "file:db/blog.db" });

async function seed() {
  // Tabloları oluştur
  await db.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      cover_image TEXT,
      category TEXT NOT NULL DEFAULT 'Genel',
      tags TEXT,
      reading_time INTEGER DEFAULT 5,
      published_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      is_published INTEGER DEFAULT 1
    )
  `);
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      display_name TEXT NOT NULL DEFAULT 'Admin',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  // Admin kullanıcısı oluştur (yoksa)
  const existing = await db.execute("SELECT COUNT(*) as c FROM users");
  if ((existing.rows[0].c as number) === 0) {
    const passwordHash = await bcrypt.hash("Bolu2026!", 12);
    await db.execute({
      sql: "INSERT INTO users (username, password_hash, display_name) VALUES (?, ?, ?)",
      args: ["admin", passwordHash, "Admin"],
    });
    console.log("✅ Admin kullanıcısı oluşturuldu → kullanıcı: admin / şifre: Bolu2026!");
  } else {
    console.log("ℹ️  Admin kullanıcısı zaten mevcut, atlandı.");
  }

  // Örnek blog yazıları
  const posts = [
    {
      title: "Bolu'nun Meşhur Yemekleri: Lokanta Kültürünün Kalbi",
      slug: "bolunun-meshur-yemekleri-lokanta-kulturunun-kalbi",
      excerpt: "Bolu mutfağının eşsiz lezzetleri ve köklü lokanta kültürü hakkında kapsamlı bir rehber. Bolu'ya geldiğinizde mutlaka tatmanız gereken yemekler.",
      content: `
        <h2>Bolu Mutfağının Zenginliği</h2>
        <p>Bolu, Türkiye'nin en zengin mutfak kültürlerinden birine sahip şehirlerinden biridir. Orman ürünlerinin bolluğu, temiz suları ve verimli tarım arazileriyle Bolu mutfağı kendine özgü bir lezzet profili oluşturmuştur.</p>
        <h3>Bolu'nun Simge Yemekleri</h3>
        <ul>
          <li><strong>Bolu Mantısı:</strong> İnce hamurlu, bol yoğurtlu geleneksel mantı. Bolu'ya özgü yapım tekniğiyle hazırlanır.</li>
          <li><strong>Orman Kebabı:</strong> Bolu ormanlarından toplanan mantar ve otlarla hazırlanan özel kebap çeşidi.</li>
          <li><strong>Mudurnu Tavuğu:</strong> Mudurnu yöresinin meşhur tavuk yemeği. Özel baharatlarla hazırlanır.</li>
          <li><strong>Bolu Çorbası:</strong> Tarhana bazlı, kış aylarının vazgeçilmezi geleneksel çorba.</li>
        </ul>
        <h3>Lokanta Kültürü</h3>
        <p>Bolu'nun lokantaları, Türkiye'nin en eski ve köklü lokantacılık geleneğine sahiptir. Osmanlı döneminden bu yana süregelen usta-çırak geleneğiyle lezzet sırları nesillere aktarılmıştır.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=450&fit=crop",
      category: "Bolu Mutfağı",
      tags: "bolu yemekleri,lokanta kültürü,geleneksel mutfak,bolu mantısı",
      reading_time: 6,
      published_at: "2026-03-20T10:00:00Z",
      is_published: 1,
    },
    {
      title: "Kaliteli Et Nasıl Seçilir? Lokanta Ustalarından İpuçları",
      slug: "kaliteli-et-nasil-secilir-lokanta-ustalarindan-ipuclari",
      excerpt: "Kasapta doğru et seçimi yapmak için bilmeniz gereken her şey. Bolu'nun deneyimli lokanta ustalarından et seçim sırları.",
      content: `
        <h2>Et Seçiminin Önemi</h2>
        <p>Lezzetli bir et yemeğinin temeli, doğru et seçimiyle başlar. Bolu'nun köklü lokantaları, kaliteli et seçimini sanatın bir parçası olarak görür.</p>
        <h3>Dana Eti Parçaları</h3>
        <ul>
          <li><strong>Bonfile:</strong> En yumuşak ve değerli parça. Izgara ve tava için idealdir.</li>
          <li><strong>Antrikot:</strong> Yağ damarları sayesinde zengin aroması vardır. Mangal için mükemmeldir.</li>
          <li><strong>Kontrfile:</strong> Yağsız yapısıyla diyet dostu seçenek. Marine edilerek kullanılmalıdır.</li>
          <li><strong>Tranç:</strong> Bolu lokantalarında sıkça kullanılan, uygun fiyatlı lezzetli parça.</li>
        </ul>
        <h3>Taze Et Kontrolü</h3>
        <p>Taze etin rengi parlak kırmızı olmalıdır. Parmakla bastırıldığında geri esnemelidir. Kokusu taze ve hafif olmalı, ekşi veya amonyak kokusu içermemelidir.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=450&fit=crop",
      category: "Et Tavsiyeleri",
      tags: "et seçimi,kaliteli et,kasap,dana eti,kuzu eti,lokanta",
      reading_time: 7,
      published_at: "2026-03-15T10:00:00Z",
      is_published: 1,
    },
    {
      title: "Bolu'da Yemek Kültürü: Gelenekten Modernliğe",
      slug: "boluda-yemek-kulturu-gelenekten-modernlige",
      excerpt: "Bolu'nun köklü yemek kültürü, Osmanlı döneminden günümüze uzanan lokantacılık geleneği ve modern yorumlar hakkında kapsamlı bir rehber.",
      content: `
        <h2>Bolu'nun Yemek Tarihi</h2>
        <p>Bolu'nun yemek kültürü, yüzyıllar öncesine dayanan köklü bir geçmişe sahiptir. Osmanlı saray mutfağına aşçı yetiştiren bu topraklar, Türk gastronomi tarihinde önemli bir yer tutmaktadır.</p>
        <h3>Osmanlı Mirasından Gelen Lezzet Geleneği</h3>
        <p>Osmanlı döneminde Bolu'dan pek çok usta aşçı İstanbul'a gönderilmiştir. Bu gelenek, bölgede güçlü bir aşçılık kültürünün oluşmasını sağlamıştır.</p>
        <h3>Geleneksel Lokanta Anlayışı</h3>
        <ul>
          <li><strong>Günlük Taze Malzeme:</strong> Bolu lokantaları günlük taze malzeme kullanımına önem verir.</li>
          <li><strong>Yöresel Ürünler:</strong> Orman mantarı, yöresel sebzeler ve taze et kullanımı.</li>
          <li><strong>Usul ve Teknik:</strong> Nesiller boyu aktarılan pişirme teknikleri.</li>
        </ul>
        <h3>Modern Yorumlar</h3>
        <p>Günümüzde Bolu'nun genç şefleri, geleneksel tarifleri modern tekniklerle harmanlayarak yeni lezzetler yaratmaktadır.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop",
      category: "Lokanta Rehberi",
      tags: "bolu lokantaları,yemek kültürü,gastronomi,osmanlı mutfağı",
      reading_time: 8,
      published_at: "2026-03-10T10:00:00Z",
      is_published: 1,
    },
  ];

  for (const post of posts) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO posts (title, slug, excerpt, content, cover_image, category, tags, reading_time, published_at, is_published)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        post.title, post.slug, post.excerpt, post.content,
        post.cover_image, post.category, post.tags,
        post.reading_time, post.published_at, post.is_published,
      ],
    });
  }

  console.log("✅ Veritabanı örnek yazılarla başarıyla dolduruldu!");
}

seed().catch(console.error);
