$sites = @(
    @{ path = "bolu-dagi.com"; port = 3010 },
    @{ path = "boluetlokantasi.com"; port = 3012 },
    @{ path = "duzcedeyemek.com"; port = 3013 },
    @{ path = "duzceetmangal.com"; port = 3014 },
    @{ path = "duzcekahvaltiyerleri.com"; port = 3015 },
    @{ path = "et-mangal.com"; port = 3016 },
    @{ path = "etmangalbolu.com"; port = 3017 }
)

foreach ($site in $sites) {
    $dir = "E:\Visual Studio\Siteler\$($site.path)"
    Start-Process powershell -ArgumentList "-NoExit -Command `"Set-Location '$dir'; npm run dev`"" -WindowStyle Normal
    Start-Sleep -Seconds 1
}

Write-Host "Tum sunucular baslatildi. 15 saniye bekleniyor..."
Start-Sleep -Seconds 15

foreach ($site in $sites) {
    Start-Process "http://localhost:$($site.port)"
}
