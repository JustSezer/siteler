import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Wix Destek - Türkçe Wix Rehberleri ve Kaynaklar';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #003399 0%, #0066FF 60%, #3385ff 100%)',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: '800',
              color: '#0066FF',
            }}
          >
            W
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '42px',
                fontWeight: '800',
                color: 'white',
                lineHeight: 1.1,
              }}
            >
              Wix<span style={{ color: '#99c2ff' }}>Destek</span>
            </span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>
              wix-destek.com.tr
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: '800',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          Türkçe Wix Rehberleri
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '26px',
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Web sitesi kurulumu • SEO • E-Ticaret • Şablon rehberleri
        </div>
      </div>
    ),
    { ...size }
  );
}
