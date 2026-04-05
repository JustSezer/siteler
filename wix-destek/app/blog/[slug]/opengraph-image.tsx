import { ImageResponse } from 'next/og';
import { getDb } from '@/lib/db';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface Props {
  params: { slug: string };
}

export default async function Image({ params }: Props) {
  let title = 'Wix Rehberi';
  let excerpt = '';

  try {
    const db = getDb();
    const post = db
      .prepare('SELECT title, excerpt FROM blog_posts WHERE slug = ? AND published = 1')
      .get(params.slug) as { title: string; excerpt: string | null } | undefined;
    if (post) {
      title = post.title;
      excerpt = post.excerpt || '';
    }
  } catch {
    // fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #003399 0%, #0052cc 50%, #0066FF 100%)',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
          padding: '60px 80px',
          justifyContent: 'space-between',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
          }}
        />

        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              padding: '8px 20px',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            Wix Rehberi
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? '42px' : '52px',
            fontWeight: '800',
            color: 'white',
            lineHeight: 1.25,
            maxWidth: '1000px',
          }}
        >
          {title}
        </div>

        {/* Excerpt */}
        {excerpt && (
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.5,
              maxWidth: '900px',
              overflow: 'hidden',
              display: '-webkit-box',
            }}
          >
            {excerpt.length > 120 ? excerpt.slice(0, 120) + '...' : excerpt}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'white',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '800',
              color: '#0066FF',
            }}
          >
            W
          </div>
          <span style={{ fontSize: '22px', fontWeight: '700', color: 'white' }}>
            Wix<span style={{ color: '#99c2ff' }}>Destek</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '400', marginLeft: '8px' }}>
              — wix-destek.com.tr
            </span>
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
