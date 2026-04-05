import sanitize from "sanitize-html";

const TRUSTED_IMAGE_DOMAINS = [
  "images.unsplash.com",
  "unsplash.com",
  "duzcedeyemek.com",
  "www.duzcedeyemek.com",
];

export function sanitizeHtml(html: string): string {
  return sanitize(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "hr",
      "ul", "ol", "li",
      "strong", "b", "em", "i", "u", "s", "mark",
      "a",
      "img",
      "blockquote", "pre", "code",
      "table", "thead", "tbody", "tfoot", "tr", "th", "td",
      "div", "span",
      "figure", "figcaption",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan"],
    },
    allowedSchemes: ["https", "mailto"],
    transformTags: {
      a: (tagName, attribs) => {
        if (attribs.target === "_blank") {
          attribs.rel = "noopener noreferrer";
        }
        return { tagName, attribs };
      },
      img: (tagName, attribs) => {
        if (attribs.src) {
          try {
            const url = new URL(attribs.src);
            if (!TRUSTED_IMAGE_DOMAINS.some((d) => url.hostname.endsWith(d))) {
              return { tagName: "span", attribs: {} };
            }
          } catch {
            return { tagName: "span", attribs: {} };
          }
        }
        attribs.loading = "lazy";
        return { tagName, attribs };
      },
    },
    allowedStyles: {},
    allowedSchemesAppliedToAttributes: ["href", "src"],
  });
}

export function isValidImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      TRUSTED_IMAGE_DOMAINS.some((d) => parsed.hostname.endsWith(d))
    );
  } catch {
    return false;
  }
}

export function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u00e7\u011f\u0131\u00f6\u015f\u00fc-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function sanitizeText(text: string, maxLength: number = 500): string {
  return text.slice(0, maxLength).trim();
}
