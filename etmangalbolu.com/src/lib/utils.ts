export function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  const wordCount = text.split(" ").length;
  return Math.max(1, Math.ceil(wordCount / 200));
}
