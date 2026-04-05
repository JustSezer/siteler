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
      title: "Düzce'nin En İyi Köy Kahvaltısı Mekanları",
      slug: "duzce-en-iyi-koy-kahvaltisi-mekanlari",
      excerpt: "Düzce'de sabahı açmak istiyorsanız doğru adrestesiniz. Şehrin dört bir yanına yayılmış köy kahvaltısı mekanlarını keşfedin.",
      content: `
        <h2>Düzce'de Köy Kahvaltısı Kültürü</h2>
        <p>Düzce, zengin orman dokusu ve temiz havası ile Türkiye'nin en güzel köy kahvaltısı mekanlarına ev sahipliği yapmaktadır.</p>
        <h3>Akçakoca Yolu Üzeri Kahvaltıcılar</h3>
        <p>Akçakoca yoluna çıktığınızda her birkaç kilometrede bir karşınıza çıkan bahçeli kafeler, taze köy ürünleri ile sizi bekliyor.</p>
        <ul>
          <li><strong>Taze Çekilmiş Tereyağı:</strong> Köy mandıralarından sabah getirilen gerçek tereyağı</li>
          <li><strong>Orman Balı:</strong> Düzce ormanlarından toplanan ıhlamur ve kestane balı</li>
          <li><strong>Ev Yapımı Reçeller:</strong> Vişne, dut, çilek çeşitleri</li>
          <li><strong>Düzce Peyniri:</strong> Bölgeye özgü beyaz peynir</li>
        </ul>
        <h3>Efteni Gölü Çevresi</h3>
        <p>Efteni Gölü kenarındaki lokantalar, kahvaltınıza gölün muhteşem manzarasını eşlik ediyor. Balıklı omlet ve taze balık çeşitleri ile fark yaratıyorlar.</p>
        <h3>Tavsiyeler</h3>
        <p>Hafta sonları erken saatte gidin. Özellikle yaz aylarında mekanlar dolar taşar. Rezervasyon yaptırmanızı tavsiye ederiz.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=450&fit=crop",
      category: "Düzce Lezzetleri",
      tags: "kahvaltı,düzce,köy kahvaltısı,mekan",
      reading_time: 5,
      published_at: "2026-03-20T10:00:00Z",
      is_published: 1,
    },
    {
      title: "Düzce Mutfağının Unutulmaz Lezzetleri",
      slug: "duzce-mutfaginin-unutulmaz-lezzetleri",
      excerpt: "Düzce yemek kültürünü şekillendiren geleneksel tatlar, tarifler ve yerel malzemelere dair kapsamlı bir rehber.",
      content: `
        <h2>Düzce Mutfağı Neden Özeldir?</h2>
        <p>Karadeniz ile İç Anadolu arasındaki geçiş noktasında yer alan Düzce, her iki bölgenin mutfak kültürünü harmanlayan kendine özgü bir gastronomi dünyasına sahiptir.</p>
        <h3>Temel Yemekler</h3>
        <ul>
          <li><strong>Mısır Ekmeği:</strong> Taş fırında pişirilen geleneksel mısır ekmeği Düzce sofrasının vazgeçilmezidir.</li>
          <li><strong>Lahana Çorbası:</strong> Beyaz lahana, patates ve tereyağıyla hazırlanan bu çorba kışın olmazsa olmazıdır.</li>
          <li><strong>Fasulye Pilaki:</strong> Zeytinyağlı, domatesli pişirilen kuru fasulye. Yanında mısır ekmeğiyle mükemmeldir.</li>
          <li><strong>Karalahana Kavurması:</strong> Taze tereyağında kavrulan karalahana, hem sağlıklı hem çok lezzetlidir.</li>
        </ul>
        <h3>Tatlılar</h3>
        <p>Düzce'de tatlı kültürü de bir o kadar zengindir. Fındıklı lokum, kestane şekeri ve köy usulü sütlaç öne çıkan tatlılar arasındadır.</p>
        <h3>Yerel Ürünler</h3>
        <p>Düzce'nin fındığı Türkiye'nin en kalitelileri arasında sayılır. Orman balı, yaban mersini ve kestane de bölgenin öne çıkan ürünleridir.</p>
      `,
      cover_image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=450&fit=crop",
      category: "Geleneksel Tarifler",
      tags: "düzce,geleneksel,yemek kültürü,tarif",
      reading_time: 6,
      published_at: "2026-03-15T10:00:00Z",
      is_published: 1,
    },
    {
      title: "Düzce'de Akşam Yemeği İçin En İyi Restoranlar",
      slug: "duzce-aksam-yemegi-icin-en-iyi-restoranlar",
      excerpt: "Ailenizle veya sevdiklerinizle Düzce'de akşam yemeği planı yapıyorsanız bu rehber tam size göre.",
      content: `
        <h2>Düzce'nin En İyi Akşam Yemeği Mekanları</h2>
        <p>Düzce, son yıllarda gelişen restoran kültürüyle hem yerel hem de bölgeye özgü lezzetleri sunan güçlü bir gastronomi sahnesine kavuştu.</p>
        <h3>Et Restoranları</h3>
        <p>Düzce'de et yeme kültürü oldukça köklüdür. Kasap işletmeciliği ile bütünleşik çalışan restoranlar en taze eti sofraya taşımaktadır.</p>
        <ul>
          <li>Mangal kültürü güçlüdür; kuzu çevirme ve döner seçenekleri bol</li>
          <li>Piyaz, cacık ve közlenmiş biber gibi mezeler her masada</li>
        </ul>
        <h3>Balık Restoranları</h3>
        <p>Efteni Gölü kenarındaki balık restoranları taze alabalık, sazan ve yayın balığı ile hizmet vermektedir. Göl manzarası eşliğinde yenen bir balık yemeği Düzce'de unutulmaz bir deneyim sunar.</p>
        <h3>Genel Öneriler</h3>
        <p>
          Şehir merkezinde çok sayıda seçenek mevcuttur. Hafta sonları için rezervasyon almanızı öneririz.
          Ayrıca <a href="https://ibrahiminyeri.com" target="_blank" rel="noopener noreferrer">ibrahiminyeri.com</a> adresinde Düzce yeme-içme mekanlarına dair detaylı bilgi bulabilirsiniz.
        </p>
      `,
      cover_image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop",
      category: "Mekan Rehberi",
      tags: "restoran,düzce,akşam yemeği,mekan rehberi",
      reading_time: 4,
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

  console.log("Database seeded with Düzce'de Yemek posts!");
}

seed().catch(console.error);
