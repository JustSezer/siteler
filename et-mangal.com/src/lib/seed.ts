import { createClient } from "@libsql/client";

const db = createClient({ url: "file:db/blog.db" });

async function seed() {
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

  const posts = [
    {
      title: "Mükemmel Mangal Nasıl Yakılır?",
      slug: "mukemmel-mangal-nasil-yakilir",
      excerpt: "Mangal yakmak bir sanattır. Doğru kömür seçiminden ateş kontrolüne kadar tüm ipuçları bu yazıda.",
      content: `
        <h2>Mangal Yakmanın Altın Kuralları</h2>
        <p>İyi bir mangal deneyimi, doğru yakma tekniğiyle başlar. İşte adım adım mükemmel mangal yakma rehberi.</p>
        <h3>1. Kömür Seçimi</h3>
        <p>Meşe kömürü, mangal için en ideal seçenektir. Uzun süre yanar ve eşit ısı dağılımı sağlar. Hazır briket kömürler de pratik bir alternatiftir.</p>
        <h3>2. Mangal Düzeni</h3>
        <p>Kömürleri piramit şeklinde dizin. Alt kısma çıra veya kuru gazete koyun. Asla benzin veya alkol kullanmayın.</p>
        <h3>3. Ateş Kontrolü</h3>
        <p>Kömürler beyaz kül tabakasıyla kaplanana kadar bekleyin. Bu genellikle 20-30 dakika sürer. Alevli kömür üzerinde et pişirmek, dışını yakarken içini çiğ bırakır.</p>
        <h3>4. Isı Bölgeleri</h3>
        <p>Kömürleri eşit dağıtmayın. Bir tarafı yoğun, diğer tarafı seyrek bırakarak farklı ısı bölgeleri oluşturun. Bu sayede hem searing hem de yavaş pişirme yapabilirsiniz.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=450&fit=crop",
      category: "Mangal Teknikleri",
      tags: "mangal,kömür,ateş,teknik",
      reading_time: 5,
      published_at: "2026-03-15T10:00:00Z",
      is_published: 1,
    },
    {
      title: "Et Seçim Rehberi: Kasaptan Doğru Et Almak",
      slug: "et-secim-rehberi-kasaptan-dogru-et-almak",
      excerpt: "Kasapta hangi eti almalısınız? Bonfile mi, antrikot mu? Et alırken dikkat etmeniz gereken her şey.",
      content: `
        <h2>Doğru Et Seçimi Nasıl Yapılır?</h2>
        <p>Et seçimi, lezzetli bir yemeğin ilk ve en önemli adımıdır. İşte bilmeniz gerekenler.</p>
        <h3>Dana Eti Parçaları</h3>
        <ul>
          <li><strong>Bonfile:</strong> En yumuşak parça. Izgara ve tava için idealdir.</li>
          <li><strong>Antrikot:</strong> Yağ damarları sayesinde çok lezzetlidir. Mangal için mükemmeldir.</li>
          <li><strong>Kontrfile:</strong> Yağsız ve sert yapılıdır. Marine edilerek kullanılmalıdır.</li>
          <li><strong>Pirzola:</strong> Kemikli parça. Mangal ve fırın için uygundur.</li>
        </ul>
        <h3>Kuzu Eti Parçaları</h3>
        <ul>
          <li><strong>Kuzu Pirzola:</strong> Mangalın yıldızıdır. Fazla pişirmeden servis edin.</li>
          <li><strong>Kuzu Şiş:</strong> But kısmından kesilen kuşbaşı. Şiş kebap için idealdir.</li>
          <li><strong>Kuzu Kaburga:</strong> Yavaş pişirmede muhteşem lezzet verir.</li>
        </ul>
        <h3>Taze Et Nasıl Anlaşılır?</h3>
        <p>Taze et parlak kırmızı renktedir. Parmakla bastığınızda eski haline dönmelidir. Kokusu hafif ve tatlımsı olmalıdır. Koyu mor veya kahverengi et bayat olabilir.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=450&fit=crop",
      category: "Et Rehberi",
      tags: "et seçimi,kasap,dana,kuzu,bonfile,antrikot",
      reading_time: 7,
      published_at: "2026-03-10T10:00:00Z",
      is_published: 1,
    },
    {
      title: "Evde Steakhouse Kalitesinde Et Pişirmenin Sırları",
      slug: "evde-steakhouse-kalitesinde-et-pisirmenin-sirlari",
      excerpt: "Evde restoran kalitesinde steak yapmak mümkün! Reverse sear tekniğinden dinlendirme süresine kadar tüm sırlar.",
      content: `
        <h2>Evde Mükemmel Steak</h2>
        <p>Steakhouse'a gitmenize gerek yok. Doğru tekniklerle evde de mükemmel bir steak hazırlayabilirsiniz.</p>
        <h3>Reverse Sear Tekniği</h3>
        <p>Eti önce düşük ısıda fırında yavaşça pişirin (120°C'de iç ısı 50°C olana kadar), sonra çok yüksek ateşte tavada her iki yüzünü 1-2 dakika searing yapın.</p>
        <h3>Pişirme Dereceleri</h3>
        <ul>
          <li><strong>Rare:</strong> İç ısı 49-52°C</li>
          <li><strong>Medium Rare:</strong> İç ısı 54-57°C (önerilen)</li>
          <li><strong>Medium:</strong> İç ısı 60-63°C</li>
          <li><strong>Well Done:</strong> İç ısı 71°C+</li>
        </ul>
        <h3>Dinlendirme</h3>
        <p>Pişen eti 5-10 dakika dinlendirin. Bu süre zarfında et suları eşit dağılır ve her lokmada aynı sululuğu elde edersiniz. Dinlendirmeden kesilen et suyunu kaybeder.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=450&fit=crop",
      category: "Tarifler",
      tags: "steak,pişirme tekniği,reverse sear,ev yemekleri",
      reading_time: 6,
      published_at: "2026-03-05T10:00:00Z",
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

  console.log("Database seeded successfully with sample posts!");
}

seed().catch(console.error);
