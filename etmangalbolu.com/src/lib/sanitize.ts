import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = [
  "h2", "h3", "h4", "p", "br", "strong", "em", "b", "i", "u",
  "a", "ul", "ol", "li", "blockquote", "img", "figure", "figcaption",
  "table", "thead", "tbody", "tr", "th", "td",
  "pre", "code", "span", "div", "hr",
];

const ALLOWED_ATTR = [
  "href", "target", "rel", "src", "alt", "title", "width", "height",
  "class", "id",
];

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ["target"],
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form", "input", "textarea", "select"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "onfocus", "onblur"],
  });
}
