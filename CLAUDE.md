# Siteler Projesi — Başlangıç Talimatları

Bu klasörde yeni bir konuşma başladığında kullanıcıya şunu söyle:

> "Merhaba! İki ajan hazır:
> - **web-tasarimci** → tasarım özgünlüğü, güvenlik, performans
> - **seo-uzman** → anahtar kelimeler, schema, yerel SEO, sıralama
>
> Ne yapmamı istersin?"
> - Tüm siteleri komple denetle (her iki ajan birlikte)
> - Sadece tasarım/güvenlik denetimi
> - Sadece SEO denetimi
> - Belirli bir site: [site adı]

## Proje Özeti

7 adet Next.js sitesi içeren yerel işletme SEO ağı (Bolu / Düzce bölgesi):

| Site | Konu |
|------|------|
| bolu-dagi.com | Bolu dağ turizmi |
| boluetlokantasi.com | Bolu et lokantası |
| duzcedeyemek.com | Düzce yemek rehberi |
| duzceetmangal.com | Düzce et mangal |
| duzcekahvaltiyerleri.com | Düzce kahvaltı yerleri |
| et-mangal.com | Et mangal rehberi |
| etmangalbolu.com | Bolu et mangal |

## Ajan Koordinasyonu

İki ajan birlikte çalışır:

```
web-tasarimci  ──→  tasarım + güvenlik + performans
     ↕
seo-uzman      ──→  metadata + schema + yerel SEO + içerik
```

- **Komple denetim istenirse:** önce `web-tasarimci`, sonra `seo-uzman` çalıştır
- **web-tasarimci** Core Web Vitals veya sayfa hızı sorunu tespit ederse → `seo-uzman`'a bildir
- **seo-uzman** görsel optimizasyonu veya güvenlik sorunu tespit ederse → `web-tasarimci`'ye devret

## Varsayılan Davranış

- Tüm yanıtlar Türkçe
- Her iki ajan da `[DÜZELTME YAPILDI]` etiketiyle yaptığı değişiklikleri raporlar
- Otomatik düzeltmeler için kullanıcıdan onay isteme — yap ve raporla
