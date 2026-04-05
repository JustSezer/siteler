@echo off
set PATH=E:\Node;%PATH%
start "bolu-dagi :3010" /D "E:\Visual Studio\Siteler\bolu-dagi.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
timeout /t 3 /nobreak >nul
start "boluetlokantasi :3012" /D "E:\Visual Studio\Siteler\boluetlokantasi.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
timeout /t 3 /nobreak >nul
start "duzcedeyemek :3013" /D "E:\Visual Studio\Siteler\duzcedeyemek.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
timeout /t 3 /nobreak >nul
start "duzceetmangal :3014" /D "E:\Visual Studio\Siteler\duzceetmangal.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
timeout /t 3 /nobreak >nul
start "duzcekahvaltiyerleri :3015" /D "E:\Visual Studio\Siteler\duzcekahvaltiyerleri.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
timeout /t 3 /nobreak >nul
start "et-mangal :3016" /D "E:\Visual Studio\Siteler\et-mangal.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
timeout /t 3 /nobreak >nul
start "etmangalbolu :3017" /D "E:\Visual Studio\Siteler\etmangalbolu.com" cmd /k "set PATH=E:\Node;%PATH% && npm run dev"
