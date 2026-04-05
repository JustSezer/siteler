const ALLOWED_TAGS = new Set([
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "br", "hr",
  "ul", "ol", "li",
  "strong", "em", "b", "i", "u", "s",
  "a", "img",
  "blockquote", "pre", "code",
  "table", "thead", "tbody", "tr", "th", "td",
  "div", "span",
  "figure", "figcaption",
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "title", "target", "rel"]),
  img: new Set(["src", "alt", "title", "width", "height"]),
  td: new Set(["colspan", "rowspan"]),
  th: new Set(["colspan", "rowspan"]),
};

const DANGEROUS_URL_PATTERN = /^\s*(javascript|vbscript|data\s*:(?!image\/(png|jpeg|gif|webp|svg\+xml)))/i;

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&#x([0-9a-fA-F]+);?/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);?/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
    .replace(/&tab;|&newline;/gi, "");
}

function isUrlSafe(url: string): boolean {
  const decoded = decodeHtmlEntities(url).replace(/[\s\t\n\r\0]+/g, "");
  return !DANGEROUS_URL_PATTERN.test(decoded);
}

function cleanAttributes(tag: string, attrString: string): string {
  const allowedSet = ALLOWED_ATTRS[tag];
  if (!allowedSet) return "";
  const attrs: string[] = [];
  const attrRegex = /([a-zA-Z][\w-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g;
  let match;
  while ((match = attrRegex.exec(attrString)) !== null) {
    const name = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    if (name.startsWith("on")) continue;
    if (!allowedSet.has(name)) continue;
    if ((name === "href" || name === "src") && !isUrlSafe(value)) continue;
    attrs.push(`${name}="${value.replace(/"/g, "&quot;")}"`);
  }
  if (tag === "a" && attrs.some(a => a.startsWith("target="))) {
    if (!attrs.some(a => a.startsWith("rel="))) attrs.push('rel="noopener"');
  }
  return attrs.length > 0 ? " " + attrs.join(" ") : "";
}

export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== "string") return "";
  let clean = html;
  let prev = "";
  while (prev !== clean) {
    prev = clean;
    clean = clean.replace(/<(script|style|iframe|embed|object|form|input|textarea|button|svg|math|link|meta|base)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
    clean = clean.replace(/<(script|style|iframe|embed|object|form|input|textarea|button|svg|math|link|meta|base)\b[^>]*\/?>/gi, "");
  }
  clean = clean.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, "");
  clean = clean.replace(/<!--[\s\S]*?-->/g, "");
  clean = clean.replace(/<\/?([a-zA-Z][\w-]*)\b([^>]*)>/g, (fullMatch, tagName, attrs) => {
    const tag = tagName.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) return "";
    if (tag === "br" || tag === "hr" || tag === "img") {
      return `<${tag}${cleanAttributes(tag, attrs)} />`;
    }
    if (fullMatch.startsWith("</")) return `</${tag}>`;
    return `<${tag}${cleanAttributes(tag, attrs)}>`;
  });
  clean = clean.replace(/(?:href|src|action)\s*=\s*["']?\s*(?:javascript|vbscript|data)\s*:/gi, 'href="#"');
  return clean.trim();
}
