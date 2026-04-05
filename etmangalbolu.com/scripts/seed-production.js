// Production Turso veritabanına seed data yüklemek için
// Kullanım: TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... node scripts/seed-production.js

// npm install -g @libsql/client (veya projedeyken: npx ile çalıştır)
// Kullanım: TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... npx -y @libsql/client node scripts/seed-production.js
let createClient;
try {
  createClient = require("@libsql/client").createClient;
} catch {
  console.error("@libsql/client bulunamadı. Şu komutu çalıştırın:");
  console.error("npm install @libsql/client");
  process.exit(1);
}

async function main() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    console.error("TURSO_DATABASE_URL ve TURSO_AUTH_TOKEN gerekli!");
    console.error("Kullanım: TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... node scripts/seed-production.js");
    process.exit(1);
  }

  const client = createClient({ url, authToken });

  console.log("Tablolar oluşturuluyor...");

  // Create tables
  await client.executeMultiple(`
    CREATE TABLE IF NOT EXISTS Category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS Tag (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS Post (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      coverImage TEXT,
      published INTEGER NOT NULL DEFAULT 1,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      categoryId INTEGER NOT NULL,
      FOREIGN KEY (categoryId) REFERENCES Category(id)
    );

    CREATE TABLE IF NOT EXISTS _PostToTag (
      A INTEGER NOT NULL,
      B INTEGER NOT NULL,
      FOREIGN KEY (A) REFERENCES Post(id) ON DELETE CASCADE,
      FOREIGN KEY (B) REFERENCES Tag(id) ON DELETE CASCADE
    );

    CREATE UNIQUE INDEX IF NOT EXISTS _PostToTag_AB_unique ON _PostToTag(A, B);
    CREATE INDEX IF NOT EXISTS _PostToTag_B_index ON _PostToTag(B);
  `);

  console.log("Kategoriler ekleniyor...");

  await client.execute("INSERT OR IGNORE INTO Category (name, slug) VALUES ('Tarifler', 'tarifler')");
  await client.execute("INSERT OR IGNORE INTO Category (name, slug) VALUES ('Restoran Önerileri', 'restoran-onerileri')");
  await client.execute("INSERT OR IGNORE INTO Category (name, slug) VALUES ('Mangal İpuçları', 'mangal-ipuclari')");
  await client.execute("INSERT OR IGNORE INTO Category (name, slug) VALUES ('Et Kültürü', 'et-kulturu')");

  console.log("Etiketler ekleniyor...");

  await client.execute("INSERT OR IGNORE INTO Tag (name, slug) VALUES ('mangal', 'mangal')");
  await client.execute("INSERT OR IGNORE INTO Tag (name, slug) VALUES ('et', 'et')");
  await client.execute("INSERT OR IGNORE INTO Tag (name, slug) VALUES ('bolu', 'bolu')");
  await client.execute("INSERT OR IGNORE INTO Tag (name, slug) VALUES ('tarif', 'tarif')");
  await client.execute("INSERT OR IGNORE INTO Tag (name, slug) VALUES ('kebap', 'kebap')");
  await client.execute("INSERT OR IGNORE INTO Tag (name, slug) VALUES ('restoran', 'restoran')");

  console.log("Blog yazıları ekleniyor...");

  // Post 1
  await client.execute({
    sql: `INSERT OR IGNORE INTO Post (title, slug, excerpt, content, categoryId, updatedAt)
          VALUES (?, ?, ?, ?, (SELECT id FROM Category WHERE slug='restoran-onerileri'), CURRENT_TIMESTAMP)`,
    args: [
      "Bolu'da En İyi 5 Et Mangal Restoranı",
      "bolu-en-iyi-5-et-mangal-restorani",
      "Bolu'nun en sevilen et mangal restoranlarını sizler için derledik. Lezzet dolu bir rehber.",
      `<h2>Bolu'nun Et Mangal Cennetleri</h2>
<p>Bolu, doğal güzellikleri kadar zengin mutfak kültürüyle de bilinir. Özellikle et ve mangal konusunda şehir, Türkiye'nin en önemli destinasyonlarından biridir.</p>
<h3>1. Bolu Dağ Mangalı</h3>
<p>Şehir merkezine yakın konumuyla dikkat çeken bu restoran, özellikle kuzu pirzolası ve adana kebaplarıyla ün yapmıştır.</p>
<h3>2. Yeşil Vadi Et Mangal</h3>
<p>Doğa içinde mangal keyfi yaşamak isteyenler için ideal bir mekan. Geniş bahçesi ve aile dostu ortamıyla öne çıkar.</p>
<h3>3. Abant Göl Kenarı Mangal</h3>
<p>Abant Gölü manzarasında mangal keyfi eşsiz bir deneyim sunar.</p>
<h3>4. Kartalkaya Et Evi</h3>
<p>Kış sporlarının merkezi Kartalkaya'da yer alan bu mekan, kayak sonrası sıcak bir et mangal ziyafeti için mükemmeldir.</p>
<h3>5. Mudurnu Tarihi Et Lokantası</h3>
<p>Osmanlı mimarisinin yaşatıldığı Mudurnu'da geleneksel yöntemlerle hazırlanan et yemekleri tadabilirsiniz.</p>
<p>Bolu'da et mangal kültürü hakkında daha fazla bilgi için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a> adresini ziyaret edebilirsiniz.</p>`,
    ],
  });

  // Post 2
  await client.execute({
    sql: `INSERT OR IGNORE INTO Post (title, slug, excerpt, content, categoryId, updatedAt)
          VALUES (?, ?, ?, ?, (SELECT id FROM Category WHERE slug='mangal-ipuclari'), CURRENT_TIMESTAMP)`,
    args: [
      "Evde Mangal Yapmanın 10 Altın Kuralı",
      "evde-mangal-yapmanin-10-altin-kurali",
      "Evde profesyonel mangal yapmanın sırlarını öğrenin. Ateş ayarından marine tekniklerine kadar her şey.",
      `<h2>Evde Mangal Sanatı</h2>
<p>Mangal yapmak bir sanattır ve doğru tekniklerle evde de restoran kalitesinde sonuçlar elde edebilirsiniz.</p>
<h3>1. Doğru Kömür Seçimi</h3><p>Meşe kömürü mangal için en ideal seçenektir.</p>
<h3>2. Ateş Ayarı</h3><p>Kömürlerin kül bağlamasını bekleyin.</p>
<h3>3. Marine Teknikleri</h3><p>Eti en az 2 saat önceden marine edin.</p>
<h3>4. Et Seçimi</h3><p>Mangal için en uygun parçalar: pirzola, bonfile, kaburga ve kuşbaşıdır.</p>
<h3>5. Pişirme Süresi</h3><p>Her et parçasının pişme süresi farklıdır.</p>
<h3>6. Dinlendirme</h3><p>Eti mangaldan aldıktan sonra 5 dakika dinlendirin.</p>
<h3>7. Tuz Zamanlaması</h3><p>Tuzu pişirme sonrasında ekleyin.</p>
<h3>8. Mangal Temizliği</h3><p>Izgarayı her kullanımdan önce ve sonra temizleyin.</p>
<h3>9. Yan Lezzetler</h3><p>Közlenmiş biber, domates ve soğan mangalın vazgeçilmez eşlikçileridir.</p>
<h3>10. Sabır</h3><p>İyi mangal sabır ister. Acele etmeyin ve sürecin tadını çıkarın.</p>
<p>Daha fazla mangal tarifi ve ipucu için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a> sitesini ziyaret edin.</p>`,
    ],
  });

  // Post 3
  await client.execute({
    sql: `INSERT OR IGNORE INTO Post (title, slug, excerpt, content, categoryId, updatedAt)
          VALUES (?, ?, ?, ?, (SELECT id FROM Category WHERE slug='tarifler'), CURRENT_TIMESTAMP)`,
    args: [
      "Adana Kebap Tarifi: Evde Restoran Tadında",
      "adana-kebap-tarifi-evde-restoran-tadinda",
      "Orijinal Adana kebap tarifini evde kolayca yapabilirsiniz. Adım adım tarif ve püf noktaları.",
      `<h2>Gerçek Adana Kebap Tarifi</h2>
<p>Adana kebap, Türk mutfağının en sevilen lezzetlerinden biridir.</p>
<h3>Malzemeler</h3>
<ul><li>500g kuzu kıyma (kaburga arası)</li><li>100g kuyruk yağı</li><li>2 adet közlenmiş kırmızı biber</li><li>1 tatlı kaşığı pul biber</li><li>1 tatlı kaşığı tuz</li></ul>
<h3>Hazırlanışı</h3>
<p>1. Kuzu kıyma ve kuyruk yağını zırh ile iyice çekin.</p>
<p>2. Közlenmiş biberleri ince kıyın ve ete ekleyin.</p>
<p>3. Baharatları ekleyip iyice yoğurun.</p>
<p>4. Geniş şişlere yapıştırarak şekil verin.</p>
<p>5. Kül bağlamış mangal kömüründe sık çevirerek pişirin.</p>
<p>Bu tarif ve daha fazlası için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a> adresini takip edin.</p>`,
    ],
  });

  // Post 4
  await client.execute({
    sql: `INSERT OR IGNORE INTO Post (title, slug, excerpt, content, categoryId, updatedAt)
          VALUES (?, ?, ?, ?, (SELECT id FROM Category WHERE slug='et-kulturu'), CURRENT_TIMESTAMP)`,
    args: [
      "Bolu'nun Et Mangal Kültürü ve Tarihi",
      "bolunun-et-mangal-kulturu-ve-tarihi",
      "Bolu'nun yüzyıllara dayanan et ve mangal geleneğini keşfedin. Aşçılar diyarının lezzet hikayesi.",
      `<h2>Aşçılar Diyarı Bolu</h2>
<p>Bolu, Türkiye'nin "Aşçılar Diyarı" olarak bilinir.</p>
<h3>Tarihi Kökler</h3><p>Osmanlı döneminde saray mutfağına en çok aşçı yetiştiren şehir Bolu olmuştur.</p>
<h3>Et Kültürü</h3><p>Bolu'nun dağlık coğrafyası hayvancılığa elverişlidir.</p>
<h3>Mangal Geleneği</h3><p>Bolu'da mangal sadece yemek pişirme yöntemi değil, bir sosyal aktivitedir.</p>
<h3>Abant ve Kartalkaya</h3><p>Abant Gölü çevresi ve Kartalkaya bölgesi, doğa içinde mangal yapılabilecek en güzel lokasyonlardandır.</p>
<h3>Mengen Festivali</h3><p>Her yıl düzenlenen Uluslararası Mengen Aşçılık Festivali, Bolu'nun gastronomi kimliğinin en önemli sembolüdür.</p>
<p>Bolu ve gastronomi dünyası hakkında daha fazla okuma için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a>'ni ziyaret edin.</p>`,
    ],
  });

  // Tag associations
  console.log("Etiket ilişkileri ekleniyor...");
  const posts = (await client.execute("SELECT id, slug FROM Post")).rows;
  const tags = (await client.execute("SELECT id, slug FROM Tag")).rows;

  const tagMap = Object.fromEntries(tags.map((t) => [t.slug, t.id]));
  const postMap = Object.fromEntries(posts.map((p) => [p.slug, p.id]));

  const associations = [
    ["bolu-en-iyi-5-et-mangal-restorani", ["restoran", "bolu", "et"]],
    ["evde-mangal-yapmanin-10-altin-kurali", ["mangal", "et", "tarif"]],
    ["adana-kebap-tarifi-evde-restoran-tadinda", ["kebap", "tarif", "et"]],
    ["bolunun-et-mangal-kulturu-ve-tarihi", ["bolu", "et", "mangal"]],
  ];

  for (const [postSlug, tagSlugs] of associations) {
    const postId = postMap[postSlug];
    if (!postId) continue;
    for (const tagSlug of tagSlugs) {
      const tagId = tagMap[tagSlug];
      if (!tagId) continue;
      await client.execute({
        sql: "INSERT OR IGNORE INTO _PostToTag (A, B) VALUES (?, ?)",
        args: [postId, tagId],
      });
    }
  }

  console.log("Production seed tamamlandı!");
  client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
