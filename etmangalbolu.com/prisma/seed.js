const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Kategoriler
  const tarifler = await prisma.category.create({ data: { name: "Tarifler", slug: "tarifler" } });
  const restoranlar = await prisma.category.create({ data: { name: "Restoran Önerileri", slug: "restoran-onerileri" } });
  const ipuclari = await prisma.category.create({ data: { name: "Mangal İpuçları", slug: "mangal-ipuclari" } });
  const kultur = await prisma.category.create({ data: { name: "Et Kültürü", slug: "et-kulturu" } });
  const rehber = await prisma.category.create({ data: { name: "Bolu Rehberi", slug: "bolu-rehberi" } });

  // Etiketler
  const tags = {};
  for (const t of ["mangal","et","bolu","tarif","kebap","restoran","pirzola","kofte","tavuk","balik","marine","komu","adana","urfa","abant","kartalkaya","mengen","kahvalti","doga","piknik"]) {
    tags[t] = await prisma.tag.create({ data: { name: t, slug: t } });
  }

  const posts = [
    {
      title: "Bolu'da En İyi 5 Et Mangal Restoranı",
      slug: "bolu-en-iyi-5-et-mangal-restorani",
      excerpt: "Bolu'nun en sevilen et mangal restoranlarını sizler için derledik.",
      content: `<h2>Bolu'nun Et Mangal Cennetleri</h2><p>Bolu, doğal güzellikleri kadar zengin mutfak kültürüyle de bilinir. Özellikle et ve mangal konusunda şehir, Türkiye'nin en önemli destinasyonlarından biridir.</p><h3>1. Bolu Dağ Mangalı</h3><p>Şehir merkezine yakın konumuyla dikkat çeken bu restoran, özellikle kuzu pirzolası ve adana kebaplarıyla ün yapmıştır.</p><h3>2. Yeşil Vadi Et Mangal</h3><p>Doğa içinde mangal keyfi yaşamak isteyenler için ideal bir mekan.</p><h3>3. Abant Göl Kenarı Mangal</h3><p>Abant Gölü manzarasında mangal keyfi eşsiz bir deneyim sunar.</p><h3>4. Kartalkaya Et Evi</h3><p>Kış sporlarının merkezi Kartalkaya'da yer alan bu mekan mükemmeldir.</p><h3>5. Mudurnu Tarihi Et Lokantası</h3><p>Osmanlı mimarisinin yaşatıldığı Mudurnu'da geleneksel et yemekleri tadabilirsiniz.</p><p>Daha fazla bilgi için <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a> adresini ziyaret edin.</p>`,
      categoryId: restoranlar.id,
      tagIds: [tags.restoran.id, tags.bolu.id, tags.et.id],
    },
    {
      title: "Evde Mangal Yapmanın 10 Altın Kuralı",
      slug: "evde-mangal-yapmanin-10-altin-kurali",
      excerpt: "Evde profesyonel mangal yapmanın sırlarını öğrenin.",
      content: `<h2>Evde Mangal Sanatı</h2><p>Mangal yapmak bir sanattır ve doğru tekniklerle evde de restoran kalitesinde sonuçlar elde edebilirsiniz.</p><h3>1. Doğru Kömür Seçimi</h3><p>Meşe kömürü mangal için en ideal seçenektir.</p><h3>2. Ateş Ayarı</h3><p>Kömürlerin kül bağlamasını bekleyin.</p><h3>3. Marine Teknikleri</h3><p>Eti en az 2 saat önceden marine edin.</p><h3>4. Et Seçimi</h3><p>Pirzola, bonfile, kaburga ve kuşbaşı idealdir.</p><h3>5. Pişirme Süresi</h3><p>Her et parçasının pişme süresi farklıdır.</p><h3>6. Dinlendirme</h3><p>5 dakika dinlendirin.</p><h3>7. Tuz Zamanlaması</h3><p>Tuzu pişirme sonrasında ekleyin.</p><h3>8. Izgara Temizliği</h3><p>Her kullanımdan önce temizleyin.</p><h3>9. Yan Lezzetler</h3><p>Közlenmiş biber ve domates vazgeçilmez.</p><h3>10. Sabır</h3><p>İyi mangal sabır ister.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a> sitesini ziyaret edin.</p>`,
      categoryId: ipuclari.id,
      tagIds: [tags.mangal.id, tags.et.id, tags.komu.id],
    },
    {
      title: "Adana Kebap Tarifi: Evde Restoran Tadında",
      slug: "adana-kebap-tarifi-evde-restoran-tadinda",
      excerpt: "Orijinal Adana kebap tarifini evde kolayca yapabilirsiniz.",
      content: `<h2>Gerçek Adana Kebap Tarifi</h2><p>Adana kebap, Türk mutfağının en sevilen lezzetlerinden biridir.</p><h3>Malzemeler</h3><ul><li>500g kuzu kıyma</li><li>100g kuyruk yağı</li><li>2 adet közlenmiş biber</li><li>1 tatlı kaşığı pul biber</li><li>Tuz, karabiber</li></ul><h3>Hazırlanışı</h3><p>1. Kıyma ve yağı zırh ile çekin.</p><p>2. Biberleri ekleyin.</p><p>3. Baharatları ekleyip yoğurun.</p><p>4. Şişlere yapıştırın.</p><p>5. Mangalda pişirin.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.kebap.id, tags.tarif.id, tags.adana.id],
      recipeData: JSON.stringify({ prepTime: "PT30M", cookTime: "PT15M", totalTime: "PT45M", servings: "4 kişilik", difficulty: "Orta", category: "Kebap", ingredients: ["500g kuzu kıyma","100g kuyruk yağı","2 közlenmiş kırmızı biber","1 tatlı kaşığı pul biber","1 tatlı kaşığı tuz","1 çay kaşığı karabiber"], steps: ["Kuzu kıyma ve kuyruk yağını zırh ile iyice çekin","Közlenmiş biberleri ince kıyıp ete ekleyin","Baharatları ekleyip hamur kıvamına gelene kadar yoğurun","Geniş şişlere yapıştırarak şekil verin","Kül bağlamış mangal kömüründe sık çevirerek pişirin"], calories: "450 kcal" }),
    },
    {
      title: "Bolu'nun Et Mangal Kültürü ve Tarihi",
      slug: "bolunun-et-mangal-kulturu-ve-tarihi",
      excerpt: "Bolu'nun yüzyıllara dayanan et ve mangal geleneğini keşfedin.",
      content: `<h2>Aşçılar Diyarı Bolu</h2><p>Bolu, Türkiye'nin "Aşçılar Diyarı" olarak bilinir.</p><h3>Tarihi Kökler</h3><p>Osmanlı döneminde saray mutfağına en çok aşçı yetiştiren şehir Bolu olmuştur.</p><h3>Et Kültürü</h3><p>Bolu'nun dağlık coğrafyası hayvancılığa elverişlidir.</p><h3>Mangal Geleneği</h3><p>Bolu'da mangal bir sosyal aktivitedir.</p><h3>Mengen Festivali</h3><p>Her yıl düzenlenen Uluslararası Mengen Aşçılık Festivali, Bolu'nun gastronomi kimliğinin sembolüdür.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: kultur.id,
      tagIds: [tags.bolu.id, tags.et.id, tags.mengen.id],
    },
    {
      title: "Mangalda Kuzu Pirzola Nasıl Pişirilir?",
      slug: "mangalda-kuzu-pirzola-nasil-pisirilir",
      excerpt: "Mükemmel kuzu pirzola pişirmenin tüm sırları bu yazıda.",
      content: `<h2>Kuzu Pirzola Mangal Rehberi</h2><p>Kuzu pirzola mangalın kralıdır. Doğru teknikle eşsiz lezzet elde edebilirsiniz.</p><h3>Et Seçimi</h3><p>Taze, pembe renkli kuzu pirzola tercih edin. Yağ oranı dengeli olmalı.</p><h3>Marine</h3><p>Zeytinyağı, taze kekik, sarımsak ve karabiber ile 2 saat marine edin.</p><h3>Pişirme</h3><p>Yüksek ateşte her yüzünü 3-4 dakika pişirin. İç sıcaklık 63°C olmalı.</p><h3>Dinlendirme</h3><p>5 dakika dinlendirdikten sonra servis edin.</p><p>Daha fazlası: <a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.pirzola.id, tags.tarif.id, tags.mangal.id],
      recipeData: JSON.stringify({ prepTime: "PT2H", cookTime: "PT8M", totalTime: "PT2H8M", servings: "4 kişilik", difficulty: "Kolay", category: "Et Mangal", ingredients: ["8 adet kuzu pirzola","3 yemek kaşığı zeytinyağı","3 diş sarımsak","Taze kekik","Tuz, karabiber"], steps: ["Pirzolayı zeytinyağı, sarımsak ve kekik ile marine edin","2 saat buzdolabında bekletin","Mangalı yüksek ateşe hazırlayın","Her yüzünü 3-4 dakika pişirin","5 dakika dinlendirip servis edin"] }),
    },
    {
      title: "Bolu Dağı Yol Üstü Restoranları Rehberi",
      slug: "bolu-dagi-yol-ustu-restoranlari-rehberi",
      excerpt: "İstanbul-Ankara yolculuğunda Bolu Dağı'nda nerede durmalısınız?",
      content: `<h2>Bolu Dağı Lezzet Durakları</h2><p>İstanbul-Ankara karayolu üzerindeki Bolu Dağı, onlarca yıldır yolcuların vazgeçilmez mola noktasıdır.</p><h3>Bakacak Mevkii</h3><p>D100 üzerindeki en eski ve en köklü mangal restoranları burada bulunur.</p><h3>Ne Yenmeli?</h3><p>Kuzu pirzola, adana kebap ve köfte en popüler seçeneklerdir.</p><h3>Kahvaltı</h3><p>Sabah saatlerinde Bolu yöresel kahvaltısı sunan mekanlar da vardır.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a> - Bolu Dağı'nın en kapsamlı rehberi.</p>`,
      categoryId: rehber.id,
      tagIds: [tags.bolu.id, tags.restoran.id, tags.kahvalti.id],
    },
    {
      title: "Et Marine Etmenin 7 Farklı Yöntemi",
      slug: "et-marine-etmenin-7-farkli-yontemi",
      excerpt: "Mangal öncesi etin yumuşak ve lezzetli olması için marine teknikleri.",
      content: `<h2>Marine Sanatı</h2><p>Marine, etin lezzetini ve yumuşaklığını artırmanın en etkili yoludur.</p><h3>1. Klasik Zeytinyağı Marine</h3><p>Zeytinyağı, limon, sarımsak ve baharatlar.</p><h3>2. Yoğurt Marine</h3><p>Yoğurt etin proteinini yumuşatır.</p><h3>3. Soğan Suyu Marine</h3><p>Soğan suyu doğal bir yumuşatıcıdır.</p><h3>4. Süt Marine</h3><p>Sütteki kazein proteini etin liflerini yumuşatır.</p><h3>5. Sirke Marine</h3><p>Asitlik etin yapısını değiştirir.</p><h3>6. Nar Ekşisi Marine</h3><p>Ekşi-tatlı denge sağlar.</p><h3>7. Bira Marine</h3><p>Biranın karbonasyonu eti gevretir.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a></p>`,
      categoryId: ipuclari.id,
      tagIds: [tags.marine.id, tags.et.id, tags.tarif.id],
    },
    {
      title: "Mangalda Tavuk Nasıl Pişirilir? Sulu Kalmanın Sırrı",
      slug: "mangalda-tavuk-nasil-pisirilir",
      excerpt: "Mangalda tavuğun kurumaması için bilmeniz gereken her şey.",
      content: `<h2>Mangalda Tavuk Rehberi</h2><p>Tavuk mangalda en çok kurutulma riski olan ettir. Ama doğru teknikle sulu kalır.</p><h3>Yoğurt Marine</h3><p>Tavuğu yoğurt, sarımsak ve pul biber ile 4 saat marine edin.</p><h3>Dolaylı Isı</h3><p>Tavuğu doğrudan ateşin üzerinde değil, kenarında pişirin.</p><h3>Sık Çevirme</h3><p>3-4 dakikada bir çevirin.</p><h3>İç Sıcaklık</h3><p>74°C'ye ulaştığında çıkarın.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.tavuk.id, tags.mangal.id, tags.tarif.id],
      recipeData: JSON.stringify({ prepTime: "PT4H", cookTime: "PT25M", totalTime: "PT4H25M", servings: "4 kişilik", difficulty: "Orta", category: "Tavuk", ingredients: ["1 bütün tavuk (parçalanmış)","1 kase yoğurt","3 diş sarımsak","Pul biber, tuz, karabiber","Zeytinyağı"], steps: ["Tavuğu parçalara ayırın","Yoğurt marine hazırlayıp 4 saat bekletin","Mangalı orta ateşe hazırlayın","Dolaylı ısıda 20-25 dakika pişirin","İç sıcaklık 74°C olunca çıkarın"] }),
    },
    {
      title: "Abant Gölü Çevresinde Mangal Yapılacak Yerler",
      slug: "abant-golu-cevresinde-mangal-yapilacak-yerler",
      excerpt: "Abant'ın eşsiz doğasında mangal keyfi yaşayabileceğiniz en güzel noktalar.",
      content: `<h2>Abant'ta Mangal Keyfi</h2><p>Abant Gölü, Bolu'nun en güzel doğa alanlarından biridir ve mangal yapılabilecek harika noktalar sunar.</p><h3>Abant Tabiat Parkı</h3><p>Göl çevresindeki piknik alanlarında mangal yapabilirsiniz.</p><h3>Sarıçam Ormanları</h3><p>Gölün kuzey kıyısındaki ormanlık alanlar idealdir.</p><h3>Dikkat Edilmesi Gerekenler</h3><p>Orman yangını riski nedeniyle sadece belirlenen alanlarda mangal yapın.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: rehber.id,
      tagIds: [tags.abant.id, tags.piknik.id, tags.doga.id],
    },
    {
      title: "Mangal Kömürü Rehberi: Hangi Kömür Hangisi İçin?",
      slug: "mangal-komuru-rehberi",
      excerpt: "Meşe, narenciye, ceviz... Hangi kömür ne tür et için en uygun?",
      content: `<h2>Kömür Seçimi Rehberi</h2><p>Mangal kömürü seçimi lezzeti doğrudan etkiler.</p><h3>Meşe Kömürü</h3><p>En ideal kömür. Uzun yanar, stabil ısı verir. Tüm et türleri için uygundur.</p><h3>Narenciye Kömürü</h3><p>Hafif tatlımsı aroma verir. Balık ve tavuk için idealdir.</p><h3>Mangal Briketi</h3><p>Uzun süreli pişirmeler için. Slow cook için tercih edilir.</p><h3>Hindistan Cevizi Kömürü</h3><p>Çok yüksek ısı verir, kokusuz yanar.</p><p>Kömür alırken dikkat: FSC sertifikalı ürünleri tercih edin.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: ipuclari.id,
      tagIds: [tags.komu.id, tags.mangal.id],
    },
    {
      title: "Urfa Kebap Tarifi: Acısız Lezzet",
      slug: "urfa-kebap-tarifi-acisiz-lezzet",
      excerpt: "Urfa kebabın farkı nedir? Evde nasıl yapılır? Adım adım tarif.",
      content: `<h2>Urfa Kebap</h2><p>Adana kebabın acısız versiyonu olan Urfa kebap, yumuşak dokusuyla sevilir.</p><h3>Malzemeler</h3><ul><li>500g dana kıyma</li><li>1 soğan rendesi</li><li>Tuz, karabiber</li><li>Kimyon</li></ul><h3>Hazırlanışı</h3><p>Kıymayı soğan suyu ile yoğurun. Şişlere takıp mangalda pişirin.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">ibrahiminyeri.com</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.kebap.id, tags.tarif.id, tags.urfa.id],
      recipeData: JSON.stringify({ prepTime: "PT20M", cookTime: "PT12M", totalTime: "PT32M", servings: "4 kişilik", difficulty: "Kolay", category: "Kebap", ingredients: ["500g dana kıyma","1 soğan rendesi","Tuz","Karabiber","Kimyon"], steps: ["Kıymayı soğan suyu ile iyice yoğurun","30 dakika buzdolabında dinlendirin","Şişlere yapıştırın","Mangalda 10-12 dakika pişirin"] }),
    },
    {
      title: "Kartalkaya'da Et Mangal ve Kayak Keyfi",
      slug: "kartalkaya-et-mangal-kayak",
      excerpt: "Kış sporları ve et mangalı bir arada yaşayabileceğiniz Kartalkaya rehberi.",
      content: `<h2>Kartalkaya: Kayak ve Mangal</h2><p>Kartalkaya Türkiye'nin en popüler kayak merkezlerinden biridir ve et mangal kültürü burada da yaşatılmaktadır.</p><h3>Kayak Sonrası Mangal</h3><p>Kayak pistlerinin yakınındaki restoranlar sıcak mangal servisi sunar.</p><h3>Otel Restoranları</h3><p>Kartalkaya otellerinin çoğunda meşe kömüründe et mangal menüsü vardır.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: rehber.id,
      tagIds: [tags.kartalkaya.id, tags.bolu.id, tags.et.id],
    },
    {
      title: "Köfte Çeşitleri: 8 Farklı Mangal Köftesi",
      slug: "kofte-cesitleri-8-farkli-mangal-koftesi",
      excerpt: "Klasik köfteden Bolu köftesine, 8 farklı mangal köftesi tarifi.",
      content: `<h2>Mangal Köfteleri</h2><p>Köfte mangalın en demokratik lezzetidir. Herkesin severek yediği köftenin onlarca çeşidi vardır.</p><h3>1. Klasik Mangal Köfte</h3><p>Dana kıyma, soğan, maydanoz, baharatlar.</p><h3>2. Bolu Köftesi</h3><p>İnce çekilmiş et, ekmek içi ve baharatlarla hazırlanır.</p><h3>3. İnegöl Köfte</h3><p>Yağsız dana kıyma ve soğan ile yapılır.</p><h3>4. Tekirdağ Köfte</h3><p>Uzun ve yassı şekliyle tanınır.</p><h3>5. Kasap Köfte</h3><p>Sadece et ve tuz ile yapılır.</p><h3>6. Pideli Köfte</h3><p>Pide üzerinde tereyağı sosuyla servis edilir.</p><h3>7. Izgara Köfte</h3><p>İnce ve uzun şekilde hazırlanır.</p><h3>8. Çiğ Köfte (Pişirilmiş)</h3><p>Bulgur ve baharatlarla hazırlanıp mangalda pişirilir.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.kofte.id, tags.tarif.id, tags.mangal.id],
    },
    {
      title: "Mangalda Balık Pişirmenin Püf Noktaları",
      slug: "mangalda-balik-pisirmenin-puf-noktalari",
      excerpt: "Mangalda balık pişirmek zordur ama bu ipuçlarıyla kolaylaşır.",
      content: `<h2>Mangalda Balık</h2><p>Balık mangalda en çok dağılma riski olan besindir. Ama doğru teknikle muhteşem sonuçlar alabilirsiniz.</p><h3>Balık Seçimi</h3><p>Levrek, çipura ve somon mangal için idealdir.</p><h3>Izgara Hazırlığı</h3><p>Izgarayı yağlayın ve çok iyi ısıtın. Balık yapışmayacaktır.</p><h3>Pişirme</h3><p>Orta ateşte her yüzünü 4-5 dakika pişirin. Çok çevirmeyin.</p><h3>Lezzet İpucu</h3><p>İçine limon dilimi ve taze otlar yerleştirin.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.balik.id, tags.mangal.id, tags.tarif.id],
      recipeData: JSON.stringify({ prepTime: "PT15M", cookTime: "PT10M", totalTime: "PT25M", servings: "2 kişilik", difficulty: "Orta", category: "Balık", ingredients: ["2 adet levrek veya çipura","Zeytinyağı","Limon","Taze kekik, defne yaprağı","Tuz, karabiber"], steps: ["Balığı temizleyip kurutun","İçine limon dilimi ve otlar yerleştirin","Zeytinyağı ile ovun","Izgarayı yağlayıp ısıtın","Her yüzünü 4-5 dakika pişirin"] }),
    },
    {
      title: "Mengen Aşçılık Festivali: Tarihi ve Önemi",
      slug: "mengen-ascilik-festivali-tarihi-onemi",
      excerpt: "Her yıl düzenlenen Mengen Aşçılık Festivali hakkında bilmeniz gerekenler.",
      content: `<h2>Mengen Aşçılık Festivali</h2><p>Bolu'nun Mengen ilçesinde her yıl düzenlenen Uluslararası Mengen Aşçılık ve Turizm Festivali, Türkiye'nin gastronomi dünyasındaki en önemli etkinliklerden biridir.</p><h3>Tarihçe</h3><p>Festival ilk kez 1982 yılında düzenlenmiştir.</p><h3>Etkinlikler</h3><p>Yemek yarışmaları, master class'lar, tadım etkinlikleri ve kültürel gösteriler yapılır.</p><h3>Aşçılar Diyarı</h3><p>Mengen, Osmanlı döneminden beri Türkiye'ye en çok aşçı yetiştiren ilçedir.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: kultur.id,
      tagIds: [tags.mengen.id, tags.bolu.id],
    },
    {
      title: "Mangal Sosları: 5 Ev Yapımı Sos Tarifi",
      slug: "mangal-soslari-5-ev-yapimi-sos-tarifi",
      excerpt: "Mangalınızı bir üst seviyeye taşıyacak ev yapımı sos tarifleri.",
      content: `<h2>Mangal Sosları</h2><p>Doğru sos mangalın lezzetini katlayabilir.</p><h3>1. Acılı Ezme</h3><p>Domates, biber, soğan, nar ekşisi ile hazırlanır.</p><h3>2. Yoğurt Sosu</h3><p>Süzme yoğurt, sarımsak, nane.</p><h3>3. BBQ Sos</h3><p>Domates salçası, bal, soya sosu, sirke.</p><h3>4. Chimichurri</h3><p>Maydanoz, sarımsak, zeytinyağı, sirke.</p><h3>5. Nar Ekşili Sos</h3><p>Nar ekşisi, zeytinyağı, pul biber.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: tarifler.id,
      tagIds: [tags.tarif.id, tags.mangal.id],
    },
    {
      title: "Bolu'da Doğa İçinde Piknik ve Mangal Alanları",
      slug: "bolu-doga-piknik-mangal-alanlari",
      excerpt: "Bolu'nun en güzel piknik ve mangal alanlarını keşfedin.",
      content: `<h2>Bolu Piknik Rehberi</h2><p>Bolu, Türkiye'nin en yeşil şehirlerinden biridir ve doğa içinde mangal yapılacak onlarca alan sunar.</p><h3>Yedigöller Milli Parkı</h3><p>7 gölün bulunduğu bu park doğa harikasıdır.</p><h3>Gölcük Tabiat Parkı</h3><p>Şehir merkezine yakın, aileler için idealdir.</p><h3>Seben Gölü</h3><p>Sakin bir ortamda piknik keyfi sunar.</p><h3>Mudurnu Ormanları</h3><p>Tarihi Mudurnu evlerinin yakınında ormanlık piknik alanları bulunur.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: rehber.id,
      tagIds: [tags.bolu.id, tags.piknik.id, tags.doga.id],
    },
    {
      title: "Et Pişirme Dereceleri: Rare'den Well Done'a",
      slug: "et-pisirme-dereceleri-rehberi",
      excerpt: "Rare, medium rare, medium, well done - her pişirme derecesinin farkı.",
      content: `<h2>Et Pişirme Dereceleri</h2><p>Etin pişirme derecesi lezzetini ve dokusunu belirleyen en önemli faktördür.</p><h3>Rare (Az Pişmiş)</h3><p>İç sıcaklık: 52°C. Dışı kavrulmuş, içi kırmızı.</p><h3>Medium Rare</h3><p>İç sıcaklık: 57°C. En çok tercih edilen derece.</p><h3>Medium</h3><p>İç sıcaklık: 63°C. Pembe iç, sulu.</p><h3>Medium Well</h3><p>İç sıcaklık: 68°C. Hafif pembelik.</p><h3>Well Done</h3><p>İç sıcaklık: 74°C. Tamamen pişmiş.</p><h3>Tavsiye</h3><p>Kaliteli et için medium rare veya medium tercih edin.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: ipuclari.id,
      tagIds: [tags.et.id, tags.mangal.id],
    },
    {
      title: "Bolu Yöresel Kahvaltısı: Lezzetler ve Mekanlar",
      slug: "bolu-yoresel-kahvaltisi",
      excerpt: "Bolu'nun eşsiz kahvaltı kültürü ve en iyi kahvaltı mekanları.",
      content: `<h2>Bolu Kahvaltı Kültürü</h2><p>Bolu sadece et ve mangal değil, kahvaltı konusunda da zengin bir kültüre sahiptir.</p><h3>Bolu Kahvaltısında Neler Var?</h3><p>Mengen peyniri, köy tereyağı, bal-kaymak, gözleme, Bolu mantısı ve yöresel reçeller.</p><h3>En İyi Kahvaltı Mekanları</h3><p>Bolu Dağı üzerindeki mekanlar hem manzarası hem lezzetiyle öne çıkar.</p><h3>Serpme Kahvaltı</h3><p>20-30 çeşit sunulan serpme kahvaltı Bolu'nun vazgeçilmezidir.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a> - Bolu Dağı kahvaltı ve mangal.</p>`,
      categoryId: rehber.id,
      tagIds: [tags.kahvalti.id, tags.bolu.id],
    },
    {
      title: "Mangalda Sebze Pişirme Rehberi",
      slug: "mangalda-sebze-pisirme-rehberi",
      excerpt: "Közlenmiş biber, domates, patlıcan ve daha fazlası. Mangalda sebze sanatı.",
      content: `<h2>Mangalda Sebze Sanatı</h2><p>Et yanında sebzeler mangalın vazgeçilmez eşlikçileridir.</p><h3>Közlenmiş Biber</h3><p>Bütün olarak közün üzerine koyun. Kabuğu siyahlaşınca çıkarın.</p><h3>Közlenmiş Patlıcan</h3><p>Çatalla birkaç delik açın. Közde yumuşayana kadar çevirin.</p><h3>Közlenmiş Domates</h3><p>Yarım kesin, közün kenarında pişirin.</p><h3>Mantar</h3><p>Zeytinyağı ve sarımsakla marine edip ızgarada pişirin.</p><h3>Közlenmiş Mısır</h3><p>Kabuğuyla birlikte 15-20 dakika pişirin.</p><p><a href="https://ibrahiminyeri.com" target="_blank" rel="dofollow">İbrahim İnyeri</a></p>`,
      categoryId: ipuclari.id,
      tagIds: [tags.mangal.id, tags.tarif.id],
    },
  ];

  for (const p of posts) {
    const { tagIds, recipeData, ...postData } = p;
    await prisma.post.create({
      data: {
        ...postData,
        recipeData: recipeData || null,
        tags: { connect: tagIds.map((id) => ({ id })) },
      },
    });
  }

  console.log(`${posts.length} yazı oluşturuldu!`);
  console.log("Seed tamamlandı!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
