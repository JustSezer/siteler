# Admin Panel Giriş Rehberi — wix-destek.com

## İlk Kurulum

1. Siteyi çalıştırın: `npm run dev`
2. Tarayıcıda `/admin/setup` adresine gidin
3. Bilgileri doldurun:
   - **Ad Soyad** (opsiyonel)
   - **Kullanıcı Adı** (min 3 karakter, harf/rakam/_ )
   - **Şifre** (min 8 karakter)
   - **Şifre Tekrar**
4. "Hesap Oluştur" butonuna tıklayın
5. Setup sayfası sadece 1 kez çalışır — kullanıcı oluşturulduktan sonra erişilemez

---

## Admin Giriş Bilgileri

> **NOT:** `/admin/setup` sayfasında aşağıdaki bilgilerle ilk hesabı oluşturun.

| Alan | Değer |
|------|-------|
| **Kullanıcı Adı** | `admin` |
| **Şifre** | *(kurulum sırasında kendiniz belirleyin — bu dosyaya yazmayın)* |
| **Ad Soyad** | `Wix Destek Admin` |
| **Giriş URL** | `/admin/login` |
| **Setup URL** | `/admin/setup` (yalnızca ilk kurulumda) |

> **GÜVENLİK:** Şifrenizi bu dosyaya veya herhangi bir metin dosyasına yazmayın. Bir şifre yöneticisi (Bitwarden, 1Password vb.) kullanın.
> Kurulum tamamlandıktan sonra şifreyi `/admin/settings` sayfasından değiştirin!

---

## Admin Panel Sayfaları

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Dashboard | `/admin` | İstatistikler + yazılar + destek talepleri |
| Yeni Yazı | `/admin/posts/new` | Blog yazısı oluşturma |
| Yazı Düzenle | `/admin/posts/[id]` | Mevcut yazıyı güncelleme |
| Ayarlar | `/admin/settings` | Hesap bilgileri + şifre değiştirme |

## Dashboard Özellikleri

- **Blog Yazıları sekmesi**: Blog yazılarını görüntüle, düzenle, sil, yayınla/taslağa al
- **Destek Talepleri sekmesi**: Kullanıcıların iletişim formundan gelen talepleri görüntüle
  - Okunmamış talepler mavi ile işaretlenir
  - "Okundu" butonu ile okundu olarak işaretle
  - "E-posta ile yanıtla" linki ile doğrudan yanıtla

---

## Blog Kategorileri

| Kategori | Açıklama |
|----------|----------|
| Wix Başlangıç | Yeni başlayanlar için rehberler |
| Wix Tasarım | Tasarım ve özelleştirme |
| Wix E-Ticaret | Online mağaza kurulumu |
| Wix SEO | Arama motoru optimizasyonu |
| Wix Sorun Çözme | Teknik sorunlar ve çözümler |
| Wix Domain | Domain ve hosting |
| Genel | Diğer konular |

---

## Güvenlik Bilgileri

- Şifreler **bcrypt (12 rounds)** ile hashlenip veritabanında saklanır
- Oturum HMAC-SHA256 imzalı token ile 24 saat geçerlidir (httpOnly cookie)
- Admin sayfaları arama motorları tarafından indexlenmez (robots.txt disallow)
- Her mutation isteğinde CSRF token doğrulaması yapılır
- Admin route'ları middleware seviyesinde korunur
- İletişim formu gönderimlerinde rate limiting aktif (5 dakikada 3 istek)
- **SESSION_SECRET zorunlu**: 32+ karakter olmalı, eksikse uygulama başlamaz

---

## Vercel Deploy Öncesi Yapılacaklar

### 1. Turso Veritabanı Oluştur
- https://turso.tech adresinden hesap aç
- Yeni veritabanı oluştur (örn: `wix-destek-db`)
- URL ve token'ı al

### 2. Vercel'de Ortam Değişkenlerini Ayarla

```
SESSION_SECRET=<openssl rand -base64 32 ile oluştur — min 32 karakter>
TURSO_DATABASE_URL=libsql://veritabani-adi.turso.io
TURSO_AUTH_TOKEN=turso-auth-token
NEXT_PUBLIC_SITE_URL=https://wix-destek.com
CONTACT_EMAIL=info@wix-destek.com
```

### 3. Deploy Sonrası
1. `/admin/setup` adresine git → admin hesabı oluştur
2. Bu dosyaya kullanıcı adı ve şifreyi not et
3. Google Search Console'a `sitemap.xml` gönder
4. İlk blog yazılarını ekle (Wix kategorilerinde)
5. FormSubmit.co'da `info@wix-destek.com` adresini doğrula

---

## SEO İpuçları

- Blog yazıları için hedef keyword: **wix destek**, **wix yardım**, **wix sorun çözme**
- Her yazı için unique meta description yaz (150-160 karakter)
- Kategorileri tutarlı kullan (Wix Başlangıç, Wix SEO, Wix E-Ticaret, vb.)
- Yazılarda iletişim sayfasına yönlendiren CTA butonları otomatik ekleniyor
