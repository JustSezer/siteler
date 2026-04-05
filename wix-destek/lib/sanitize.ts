/**
 * Sunucu tarafli HTML temizleyici
 * dangerouslySetInnerHTML ile render edilen blog icerigi icin XSS korumasi
 *
 * Yaklasim: Tehlikeli tag'leri ve event handler attribute'larini kaldir.
 * Uretim icin `isomorphic-dompurify` veya `sanitize-html` paketi tercih edilmeli.
 */

const DANGEROUS_TAGS = [
  'script',
  'iframe',
  'object',
  'embed',
  'form',
  'input',
  'button',
  'select',
  'textarea',
  'link',
  'meta',
  'base',
  'applet',
  'noscript',
  'template',
];

const DANGEROUS_TAG_PATTERN = new RegExp(
  `<\\/?(?:${DANGEROUS_TAGS.join('|')})[^>]*>`,
  'gi'
);

// javascript: protokolü ile href/src attribute'larini kaldir
const JAVASCRIPT_PROTOCOL = /\s(?:href|src|action|data)\s*=\s*["']?\s*javascript:/gi;

// onerror, onclick, onload gibi inline event handler'lari kaldir
const EVENT_HANDLERS = /\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi;

// data: URI'leri src attribute'larindan kaldir (SVG XSS vektörü)
const DATA_URI_SRC = /\ssrc\s*=\s*["']?\s*data:/gi;

export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';

  return html
    .replace(DANGEROUS_TAG_PATTERN, '')
    .replace(JAVASCRIPT_PROTOCOL, '')
    .replace(EVENT_HANDLERS, '')
    .replace(DATA_URI_SRC, ' src="about:blank" data-blocked=');
}
