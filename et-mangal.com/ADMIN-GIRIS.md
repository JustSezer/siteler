# Admin Panel Giriş Rehberi

## İlk Kurulum

1. Siteyi çalıştırın: `npm run dev`
2. Tarayıcıda `/admin/setup` adresine gidin
3. Bilgileri doldurun:
   - **Ad Soyad** (opsiyonel)
   - **Kullanıcı Adı** (min 3 karakter, harf/rakam/_ )
   - **Şifre** (min 8 karakter)
   - **Şifre Tekrar**
4. "Hesap Oluştur" butonuna tıklayın
5. Setup sayfası sadece 1 kez çalışır, kullanıcı oluşturulduktan sonra erişilemez

## Giriş

- **URL:** `/admin/login`
- Kullanıcı adı ve şifre ile giriş yapın
- Kullanıcı henüz yoksa otomatik olarak `/admin/setup` sayfasına yönlendirilirsiniz
- 5 dakikada en fazla 5 giriş denemesi yapılabilir

## Admin Panel Sayfaları

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Dashboard | `/admin` | İstatistikler + yazı listesi |
| Yeni Yazı | `/admin/posts/new` | Blog yazısı oluşturma |
| Yazı Düzenle | `/admin/posts/[id]` | Mevcut yazıyı güncelleme |
| Ayarlar | `/admin/settings` | Hesap bilgileri + şifre değiştirme |

## Şifre Değiştirme

1. `/admin/settings` sayfasına gidin
2. Mevcut şifrenizi girin
3. Yeni şifrenizi girin (min 8 karakter)
4. Yeni şifreyi tekrar girin
5. "Şifreyi Değiştir" butonuna tıklayın

## Güvenlik Bilgileri

- Şifreler **bcrypt (12 rounds)** ile hashlenip veritabanında saklanır, düz metin olarak tutulmaz
- Oturum HMAC-SHA256 imzalı token ile 24 saat geçerlidir (httpOnly, secure, sameSite: strict cookie)
- Admin sayfaları arama motorları tarafından indexlenmez (noindex, nofollow + robots.txt disallow)
- Her mutation isteğinde CSRF token doğrulaması yapılır
- Admin route'ları middleware seviyesinde korunur
- **SESSION_SECRET zorunlu**: 32+ karakter olmalı, eksikse uygulama başlamaz

## Vercel Deploy Öncesi Yapılacaklar

### 1. Turso Veritabanı Oluştur
- https://turso.tech adresinden hesap aç
- Yeni veritabanı oluştur
- URL ve token'ı al

### 2. Vercel'de Ortam Değişkenlerini Ayarla

```
BLOG_API_KEY=<openssl rand -base64 32 ile oluştur>
SESSION_SECRET=<openssl rand -base64 32 ile oluştur>
TURSO_DATABASE_URL=libsql://veritabani-adi.turso.io
TURSO_AUTH_TOKEN=turso-auth-token
NEXT_PUBLIC_SITE_URL=https://et-mangal.com
CONTACT_EMAIL=info@et-mangal.com
```

### 3. Deploy Sonrası
- `/admin/setup` adresine gidip ilk admin hesabını oluştur
- Google Search Console'a sitemap.xml gönder
- OG image'ı test et: https://www.opengraph.xyz

> **Not:** `ADMIN_USERNAME` ve `ADMIN_PASSWORD` gibi env variable'lara gerek yoktur. Kullanıcı bilgileri veritabanında tutulur.
