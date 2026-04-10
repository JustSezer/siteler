# Siteler Projesi — WebForge Entegrasyonu

## Proje Ozeti
Tek tek olusturulacak profesyonel web siteleri. Her site Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui ile insa edilir.

## WebForge Sistemi
Bu proje **WebForge v3.0** ile yonetilir.
Detaylar: `webforge/CLAUDE.md` (calisma talimati) ve `webforge/BOOTSTRAP.md` (mimari referans)

## Agent Yapisi

### Yerlesik Ajanlar (subagent_type olarak mevcut)
- **web-tasarimci** → tasarim ozgunlugu, guvenlik, performans, UX denetimi
- **seo-uzman** → anahtar kelimeler, schema, yerel SEO, Core Web Vitals, siralama

### WebForge Ajanlari (.claude/agents/ altinda)
- **brand-strategist** → Marka kimligi, renkler, ton, kisilik
- **keyword-analyst** → Anahtar kelime arastirmasi, trafik hedefleri
- **seo-sem-expert** → SEO/SEM/GEO/AIO stratejisi
- **content-strategist** → Icerik plani, mesajlasma, kopya
- **frontend-dev** → UI, sayfalar, a11y, tema, i18n
- **backend-dev** → API, DB, auth, email
- **infra-engineer** → Cookie consent, analytics, guvenlik
- **test-engineer** → Kalite kontrolu, audit
- **lead-manager** → Koordinasyon, gorev dagitimi
- **prompt-engineer** → Task JSON olusturucu
- **user-liaison** → Kullanici iletisimi, ceviri

## Ajan Koordinasyonu

```
web-tasarimci + seo-uzman  ──→  Mevcut site denetimi icin
WebForge ajanlari          ──→  Yeni site insasi icin (Phase A/B/C/D)
```

### Yeni Site Olusturma Akisi
1. **Kullaniciya TEK MESAJDA 11 soru sor** (webforge/CLAUDE.md Adim 2)
2. **Proje buyuklugune gore agent sec** (kucuk/orta/buyuk)
3. **Phase A**: brand-strategist + keyword-analyst (paralel)
4. **Phase B**: seo-sem-expert + content-strategist (paralel, Phase A'ya bagimli)
5. **Phase C**: frontend-dev + backend-dev + infra-engineer (paralel, Phase B'ye bagimli)
6. **Phase D**: test-engineer (kalite kontrol)
7. **Denetim**: web-tasarimci + seo-uzman (son kontrol)

### Mevcut Site Denetimi Akisi
- **web-tasarimci** once calisir → tasarim + guvenlik + performans
- **seo-uzman** sonra calisir → metadata + schema + yerel SEO + icerik
- CWV sorunu varsa → seo-uzman'a bildir
- Gorsel/guvenlik sorunu varsa → web-tasarimci'ye devret

## Varsayilan Davranis
- Tum yanitlar Turkce
- Her ajan `[DUZELTME YAPILDI]` etiketiyle degisiklik raporlar
- Otomatik duzeltmeler icin kullanicidan onay isteme — yap ve raporla
- Agent'lar arasi iletisim INGILIZCE — kullaniciya donus HER ZAMAN Turkce

## Tech Stack (Her Site Icin)
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- UI: shadcn/ui (Radix tabanli)
- Theme: next-themes
- Icons: Lucide React
- Forms: react-hook-form + zod
- i18n: next-intl (gerekirse)

## Code Rules
- Semantic HTML kullan (div soup yapma)
- Tum renkler CSS custom property uzerinden
- Her interaktif eleman klavye ile erisilebilir olmali
- Her gorsel alt text icermeli
- Console.log uretimde yasak
- Tum sayfalar SSG/ISR — client-side rendering minimumda

## Baslangic Mesaji
Yeni konusma basladiginda kullaniciya sor:
> "Merhaba! WebForge + 2 yerlesik ajan hazir.
> Ne yapmak istersin?"
> 1. Yeni site olustur (WebForge ile)
> 2. Mevcut siteyi denetle (web-tasarimci + seo-uzman)
> 3. Belirli bir site uzerinde calis
