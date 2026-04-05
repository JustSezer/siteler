# Admin Panel Giriş Rehberi

## Giriş Adresi
`https://bolu-dagi.com/admin/login`

## İlk Kurulum (Yerel)
1. `npm run dev` ile siteyi başlatın
2. `/admin/setup` adresine gidin
3. Admin hesabı oluşturun (kullanıcı adı + şifre)
4. Setup sayfası yalnızca bir kez çalışır — hesap oluşturulduktan sonra erişilemez

## Admin Panel Sayfaları

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Dashboard | `/admin` | İstatistikler + yazı listesi |
| Yeni Yazı | `/admin/posts/new` | Blog yazısı oluşturma |
| Yazı Düzenle | `/admin/posts/[id]` | Mevcut yazıyı güncelleme |
| Ayarlar | `/admin/settings` | Hesap bilgileri + şifre değiştirme |

## Şifre Değiştirme
`/admin/settings` → mevcut şifre → yeni şifre (min 8 karakter) → Kaydet

## Güvenlik
- Şifreler **bcrypt (12 rounds)** ile hashlenerek saklanır
- Oturum JWT (HS256), **7 gün** geçerli — httpOnly, secure, sameSite: strict cookie
- Admin sayfaları arama motorları tarafından indexlenmez (robots.txt + noindex)
- CSRF token koruması her mutation isteğinde doğrulanır
- Rate limiting: giriş 5 deneme / 5 dakika, şifre değiştirme 5 deneme / 5 dakika
- **JWT_SECRET zorunlu** — 32+ karakter olmalı

---

## Vercel Deploy Adımları

### 1. Ortam Değişkenlerini Ayarla
Vercel Dashboard → Project → Settings → Environment Variables:

```
JWT_SECRET=<güçlü rastgele değer — openssl rand -hex 48>
NEXT_PUBLIC_URL=https://bolu-dagi.com
NEXT_PUBLIC_BUSINESS_URL=https://ibrahiminyeri.com
NEXT_PUBLIC_BUSINESS_NAME=İbrahim'in Yeri Et Mangal
NEXT_PUBLIC_PHONE=08508888114
NEXT_PUBLIC_PHONE_DISPLAY=0850 888 81 14
NEXT_PUBLIC_ADDRESS=D100 Karayolu, Kaynaşlı, 81900 Düzce
NEXT_PUBLIC_FACEBOOK=https://www.facebook.com/ibrahiminyeriboludagi
NEXT_PUBLIC_INSTAGRAM=https://www.instagram.com/ibrahiminyeriboludagi
NEXT_PUBLIC_YOUTUBE=https://www.youtube.com/@ibrahiminyeri
```

> **Not:** Vercel'de SQLite çalışmaz. Üretime geçmeden önce veritabanını Turso (libsql) veya başka bir hosted DB'ye taşımanız gerekir.

### 2. Deploy Sonrası
- `/admin/setup` adresine gidip ilk admin hesabını oluşturun
- Google Search Console'a `sitemap.xml` gönderin
- OG image test: https://www.opengraph.xyz
