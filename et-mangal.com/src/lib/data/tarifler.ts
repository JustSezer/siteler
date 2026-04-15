export interface Tarif {
  slug: string;
  title: string;
  kind: "Marinad" | "Sos" | "Garnitür" | "Teknik";
  time: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  description: string;
  ingredients: string[];
  steps: string[];
}

export const tarifler: Tarif[] = [
  {
    slug: "yogurt-sutlu-marinad",
    title: "Yoğurtlu Süt Marinadı",
    kind: "Marinad",
    time: "6–12 saat",
    difficulty: "Kolay",
    description:
      "Tavuk göğüs ve kuzu pirzola için yumuşatıcı, nemini koruyan klasik Anadolu marinadı.",
    ingredients: [
      "300 g süzme yoğurt",
      "150 ml tam yağlı süt",
      "3 diş sarımsak (ezilmiş)",
      "1 tatlı kaşığı tuz",
      "1 çay kaşığı karabiber",
      "Yarım demet taze kekik",
    ],
    steps: [
      "Yoğurt, süt ve baharatı çırparak pürüzsüz hale getirin.",
      "Eti kabın içinde marinadla tamamen kaplayın.",
      "Buzdolabında 6–12 saat dinlendirin; asla 24 saati geçmeyin.",
      "Izgaraya koymadan önce fazla yoğurdu silkeleyin, yanması önlenir.",
    ],
  },
  {
    slug: "klasik-chimichurri",
    title: "Klasik Chimichurri",
    kind: "Sos",
    time: "15 dk",
    difficulty: "Kolay",
    description:
      "Arjantin asıllı bu sos, dana antrikot ve dana pirzolanın yanında etin yağını keser.",
    ingredients: [
      "1 demet maydanoz (ince kıyım)",
      "3 diş sarımsak",
      "1 yemek kaşığı kurutulmuş kekik",
      "100 ml iyi kalite zeytinyağı",
      "2 yemek kaşığı kırmızı şarap sirkesi",
      "1 çay kaşığı pul biber, tuz",
    ],
    steps: [
      "Tüm kuru malzemeleri bir kase içinde birleştirin.",
      "Sirkeyi ekleyin, 3 dakika dinlendirin.",
      "Zeytinyağını yavaşça akıtarak karıştırın.",
      "En az 30 dakika oda sıcaklığında dinlendirin — tat aromaları buluşur.",
    ],
  },
  {
    slug: "koz-patlican-yogurtlu",
    title: "Közde Patlıcan & Sarımsaklı Yoğurt",
    kind: "Garnitür",
    time: "40 dk",
    difficulty: "Orta",
    description:
      "Etin duman aromasını tamamlayan, tabağın sakin kahramanı.",
    ingredients: [
      "3 orta boy közlük patlıcan",
      "250 g süzme yoğurt",
      "2 diş sarımsak (ezik)",
      "2 yemek kaşığı zeytinyağı",
      "Sumak, tuz, bir tutam nane",
    ],
    steps: [
      "Patlıcanları közün dolaylı tarafında, sık sık çevirerek 25 dakika pişirin.",
      "Kabukları temiz bir bezle sıyırın; sudaki acılığı akıtın.",
      "Yoğurt, sarımsak ve tuzu çırpın.",
      "Patlıcan üzerine yoğurt, üstüne zeytinyağı ve sumak gezdirin.",
    ],
  },
  {
    slug: "kuru-tuzlama-dry-brine",
    title: "Kuru Tuzlama (Dry Brine)",
    kind: "Teknik",
    time: "12–24 saat",
    difficulty: "Kolay",
    description:
      "Marinad değil; etin kendi nemini içine çeken, kabuk kıtırlığını artıran bir ön hazırlık.",
    ingredients: [
      "İri kristalli deniz tuzu (et ağırlığının %1'i)",
      "Taze çekilmiş karabiber",
    ],
    steps: [
      "Eti kağıt havluyla kurulayın.",
      "Her yüzeyine eşit miktarda tuz serpin.",
      "Telli ızgara üzerinde, buzdolabında kapaksız 12–24 saat bekletin.",
      "Çıkarınca yüzey kuru olacak — bu ideal kabuğun anahtarıdır.",
    ],
  },
  {
    slug: "koz-biber-sosu",
    title: "Közde Biber Sosu",
    kind: "Sos",
    time: "30 dk",
    difficulty: "Orta",
    description:
      "Kırmızı biberin tatlı keskinliği — özellikle kuzu ve tavukla çok yakışır.",
    ingredients: [
      "4 kapya biber",
      "2 diş sarımsak",
      "1 yemek kaşığı zeytinyağı",
      "Yarım çay kaşığı kimyon",
      "Tuz, limon",
    ],
    steps: [
      "Biberleri közde kabukları karbon olana dek pişirin.",
      "10 dakika kapalı kapta dinlendirip soyun.",
      "Tüm malzemeleri blenderda pürüzsüzleştirin.",
      "Limon ile asit dengesini ayarlayın, oda sıcaklığında servis edin.",
    ],
  },
  {
    slug: "sarimsakli-yogurt",
    title: "Sarımsaklı Yoğurt",
    kind: "Sos",
    time: "10 dk",
    difficulty: "Kolay",
    description:
      "Minimum malzeme, maksimum etki. Adana kebap, köfte, kuzu pirzolanın değişmezi.",
    ingredients: [
      "400 g süzme yoğurt",
      "2 diş ezik sarımsak",
      "1 çay kaşığı tuz",
      "1 tatlı kaşığı nane (kurutulmuş)",
    ],
    steps: [
      "Yoğurdu oda sıcaklığına getirin.",
      "Sarımsak ve tuzu ekleyip çırpın.",
      "Naneyi avuç içinde ufalayarak üzerine serpin.",
      "Servisten önce en az 15 dakika dinlendirin.",
    ],
  },
  {
    slug: "zeytinyagi-limon-marinad",
    title: "Zeytinyağı & Limon Marinadı",
    kind: "Marinad",
    time: "2–4 saat",
    difficulty: "Kolay",
    description:
      "Kuzu pirzola ve bıldırcın için Akdeniz kökenli, asit dengeli hafif marinad.",
    ingredients: [
      "150 ml sızma zeytinyağı",
      "1 limonun suyu ve kabuk rendesi",
      "4 diş sarımsak (dilimli)",
      "1 yemek kaşığı taze kekik",
      "1 çay kaşığı tuz, karabiber",
    ],
    steps: [
      "Zeytinyağı, limon suyu ve kabuk rendesini çırpın.",
      "Sarımsak ve otları ekleyin, 10 dakika aromaların salınmasını bekleyin.",
      "Eti marinadla buluşturun, 2–4 saatten fazla bekletmeyin; aksi halde asit lifleri pişirir.",
      "Izgaradan önce kağıt havluyla fazlasını alın — asitli marinad yanar.",
    ],
  },
  {
    slug: "soya-bal-marinad",
    title: "Soya & Bal Marinadı",
    kind: "Marinad",
    time: "3–6 saat",
    difficulty: "Kolay",
    description:
      "Tavuk kanat ve kaburga için umami + karamelizasyon odaklı asyatik esinli marinad.",
    ingredients: [
      "120 ml soya sosu",
      "3 yemek kaşığı bal",
      "2 yemek kaşığı pirinç sirkesi",
      "1 yemek kaşığı rendelenmiş zencefil",
      "3 diş sarımsak (rendelenmiş)",
      "1 çay kaşığı susam yağı",
    ],
    steps: [
      "Tüm sıvıları karıştırın, bal eriyene kadar çırpın.",
      "Eti poşete alıp marinadı dökün, havasını alın.",
      "Buzdolabında 3–6 saat bekletin, bal dibe çöktüğü için poşeti iki kez çevirin.",
      "Izgaranın son 2 dakikasında marinadı glaze olarak sürün — şeker yanmasın diye dolaylı tarafta.",
    ],
  },
  {
    slug: "tarator-sos",
    title: "Cevizli Tarator",
    kind: "Sos",
    time: "15 dk",
    difficulty: "Kolay",
    description:
      "Ege kökenli yoğun sos. Köz balık yerine köz sebze ve kuzu şiş için sadeleştirilmiş bir versiyon.",
    ingredients: [
      "100 g iç ceviz",
      "2 dilim bayat ekmek içi",
      "3 diş sarımsak",
      "100 ml zeytinyağı",
      "2 yemek kaşığı elma sirkesi",
      "Tuz, karabiber",
    ],
    steps: [
      "Cevizi robotta iri kırın — toz haline getirmeyin.",
      "Ekmek içini sirkede ıslatın, sarımsak ve cevizi ekleyip çırpın.",
      "Zeytinyağını ince akışla dökerek sos kıvamına getirin.",
      "İstediğiniz kıvamda bir miktar soğuk su ekleyerek inceltin.",
    ],
  },
  {
    slug: "nar-eksili-sos",
    title: "Nar Ekşili Kırmızı Sos",
    kind: "Sos",
    time: "20 dk",
    difficulty: "Kolay",
    description:
      "Güneydoğu mutfağının tatlı-ekşi kimliği. Kuzu kol ve etek etine yakışır.",
    ingredients: [
      "3 yemek kaşığı nar ekşisi (gerçek)",
      "2 yemek kaşığı zeytinyağı",
      "1 çay kaşığı pul biber",
      "1 çay kaşığı sumak",
      "1 diş sarımsak (rendelenmiş)",
      "1 tutam tuz, kıyılmış maydanoz",
    ],
    steps: [
      "Nar ekşisi, zeytinyağı ve sarımsağı bir kasede birleştirin.",
      "Baharatları ekleyip çırpın — sos hafif koyulaşır.",
      "15 dakika dinlendirin, maydanozu servis anında ilave edin.",
      "Tabakta etin üzerine çizgi şeklinde gezdirin, ağzına fazla göl oluşturmayın.",
    ],
  },
  {
    slug: "koz-soganli-salata",
    title: "Közde Soğanlı Sumak Salatası",
    kind: "Garnitür",
    time: "20 dk",
    difficulty: "Kolay",
    description:
      "Adana ve Urfa'nın değişmez et arkadaşı. Soğanın keskinliğini köz aroması dengeler.",
    ingredients: [
      "3 adet kuru soğan (halka halka)",
      "1 yemek kaşığı sumak",
      "Yarım demet maydanoz",
      "1 yemek kaşığı zeytinyağı",
      "Tuz, nar ekşisi (opsiyonel)",
    ],
    steps: [
      "Soğanları közün yakınında 5 dakika tutarak hafif yumuşatın.",
      "Tuzla ovup suyunu sıkın — acılık gider.",
      "Sumak, maydanoz ve zeytinyağıyla buluşturun.",
      "Et servisinden 10 dakika önce hazırlayın, daha önce değil.",
    ],
  },
  {
    slug: "koz-domates-biber",
    title: "Közde Domates & Biber",
    kind: "Garnitür",
    time: "25 dk",
    difficulty: "Kolay",
    description:
      "Izgarının sessiz tamamlayıcısı. Etin dinlendiği süreyi güzel değerlendiren klasik.",
    ingredients: [
      "4 kapya biber",
      "4 olgun domates",
      "1 çarliston biber",
      "1 diş sarımsak",
      "Zeytinyağı, tuz, taze kekik",
    ],
    steps: [
      "Biber ve domatesleri közün kenarında sık sık çevirerek pişirin.",
      "Kabuklarını bir bez içinde buharlayıp soyun.",
      "İri parçalar halinde kesin, sarımsakla karıştırın.",
      "Zeytinyağı, tuz ve kekik ekleyin — ılık servis edin.",
    ],
  },
  {
    slug: "bulgur-pilavi",
    title: "Şehriyeli Bulgur Pilavı",
    kind: "Garnitür",
    time: "30 dk",
    difficulty: "Kolay",
    description:
      "Kuzu pirzola, köfte ve şişin yanında geleneğin değişmeyen tarafı.",
    ingredients: [
      "2 su bardağı pilavlık bulgur",
      "1 orta boy kuru soğan",
      "Yarım su bardağı şehriye",
      "1 yemek kaşığı salça",
      "3 su bardağı sıcak tavuk suyu",
      "Tereyağı, tuz",
    ],
    steps: [
      "Tereyağında şehriyeyi pembeleştirin, soğanı ekleyip kavurun.",
      "Salçayı ekleyip kokusu çıkana dek karıştırın.",
      "Bulguru ekleyin, 1 dakika kavurun.",
      "Sıcak tavuk suyunu ilave edip kısık ateşte 15 dakika pişirin, 10 dakika dinlendirin.",
    ],
  },
  {
    slug: "koz-kabak-yogurt",
    title: "Közde Kabak & Yoğurt",
    kind: "Garnitür",
    time: "25 dk",
    difficulty: "Kolay",
    description:
      "Sakız kabağının hafifliği, kuzu ve tavuk gibi beyaz etleri dengeleyen ferah garnitür.",
    ingredients: [
      "3 sakız kabağı (uzunlamasına dilimli)",
      "200 g süzme yoğurt",
      "1 diş sarımsak",
      "Zeytinyağı, tuz, nane, çam fıstığı",
    ],
    steps: [
      "Kabakları zeytinyağı ve tuzla ovun.",
      "Közün orta sıcaklığında her iki yüzlerini 3–4 dakika pişirin.",
      "Tabakta sarımsaklı yoğurtla buluşturun.",
      "Kavrulmuş çam fıstığı ve nane ile süsleyin.",
    ],
  },
  {
    slug: "reverse-sear",
    title: "Reverse Sear Tekniği",
    kind: "Teknik",
    time: "1–1,5 saat",
    difficulty: "Orta",
    description:
      "Kalın dilim bifteklerde (tomahawk, kontrafile) eşit pembelik ve kıtır kabuğu garantileyen iki aşamalı yöntem.",
    ingredients: [
      "Kalın kesim biftek (en az 4 cm)",
      "Deniz tuzu, iri çekilmiş karabiber",
      "Çift bölgeli mangal (dolaylı + direkt)",
    ],
    steps: [
      "Eti kuru tuzlamaya tabi tutup oda sıcaklığına getirin.",
      "Mangalın dolaylı tarafında 110–120°C'de, çekirdek 48°C olana dek bekletin.",
      "Eti çıkarın, közü canlandırın (direkt taraf çok yüksek ısıya ulaşsın).",
      "Her yüzünü 45–60 saniye kabuklayın — çekirdek 54–56°C'ye çıkar.",
      "3 dakika dinlendirip lif yönüne dik kesin.",
    ],
  },
  {
    slug: "komur-hazirlama",
    title: "Kömür Hazırlama & Ateş Haritası",
    kind: "Teknik",
    time: "30–45 dk",
    difficulty: "Kolay",
    description:
      "Mangal başarısının yüzde ellisi kömür kurulumunda saklıdır — sıvı kullanmadan ideal köz tabakası.",
    ingredients: [
      "Meşe veya gürgen kömürü",
      "Baca başlatıcı (chimney starter)",
      "Gazete veya doğal tutuşturucu",
    ],
    steps: [
      "Baca başlatıcının altına 2 tabaka gazete sıkıştırın, üstüne kömürü doldurun.",
      "Gazeteyi yakın; 20 dakika sonra üst kömürler griye dönmüş olmalı.",
      "Közü mangala iki bölgeli boşaltın: bir tarafa kalın yığın (direkt), diğer tarafa ince tabaka (dolaylı).",
      "Elinizi köz üzerinde 10 cm'de tutun — 2 saniye dayanabiliyorsanız yüksek, 5 saniye ise orta ateş.",
    ],
  },
  {
    slug: "tuzlu-su-salamura",
    title: "Tuzlu Su Salamurası (Wet Brine)",
    kind: "Teknik",
    time: "4–12 saat",
    difficulty: "Kolay",
    description:
      "Tavuk göğüs ve bütün tavuk için nemliliği garantileyen, kuruma riskini minimize eden ön işlem.",
    ingredients: [
      "1 litre soğuk su",
      "60 g tuz (yüzde 6)",
      "30 g şeker",
      "2 defne yaprağı, 1 çay kaşığı karabiber",
    ],
    steps: [
      "Suyun yarısını ısıtıp tuz ve şekeri eritin.",
      "Baharatları ekleyin, geri kalan soğuk suyla buz gibi olacak şekilde birleştirin.",
      "Eti tamamen salamuraya batırın, buzdolabında bekletin (göğüs 4 sa, bütün piliç 8–12 sa).",
      "Çıkarınca durulayın, kağıt havluyla iyice kurulayın — yüzey kuru olmazsa kabuk oluşmaz.",
    ],
  },
];
