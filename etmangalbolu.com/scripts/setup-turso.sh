#!/bin/bash
# Turso veritabanı kurulum scripti
# Önce Turso CLI kurulumu: curl -sSfL https://get.tur.so/install.sh | bash

echo "=== Et Mangal Bolu - Turso Veritabanı Kurulumu ==="
echo ""

# 1. Turso'ya giriş yap
echo "1. Turso'ya giriş yapılıyor..."
turso auth login

# 2. Veritabanı oluştur (Frankfurt - Avrupa)
echo ""
echo "2. Veritabanı oluşturuluyor..."
turso db create etmangalbolu --location fra

# 3. URL ve token al
echo ""
echo "3. Veritabanı bilgileri alınıyor..."
echo ""
echo "TURSO_DATABASE_URL:"
turso db show etmangalbolu --url
echo ""
echo "TURSO_AUTH_TOKEN:"
turso db tokens create etmangalbolu
echo ""
echo "=== Bu değerleri Vercel Environment Variables'a ekleyin ==="
echo "=== Vercel Dashboard > Settings > Environment Variables ==="
