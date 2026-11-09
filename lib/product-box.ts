/**
 * Inline "related product" box for informational guides (markdown section bodies).
 * Emits a single line of HTML that lib/markdown.ts passes through untouched.
 * Never pass prices, star ratings or review counts here (Amazon terms).
 */
export interface ProductBoxItem {
  label: string; // e.g. "Best 75% pick"
  name: string;
  text: string; // 1-2 short sentences, no prices
  asin: string;
  image: string; // PA-API image URL
}

const TAG = "deskfinds0d-20";
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function productBox(items: ProductBoxItem[]): string {
  const cards = items
    .map((p) => {
      const url = `https://www.amazon.com/dp/${p.asin}?tag=${TAG}`;
      const a = `href="${url}" target="_blank" rel="noopener noreferrer sponsored nofollow"`;
      return (
        `<div class="df-pbox">` +
        `<a class="df-pbox-img" ${a}><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" width="160" height="160"></a>` +
        `<div class="df-pbox-body">` +
        `<span class="df-pbox-label">${esc(p.label)}</span>` +
        `<a class="df-pbox-name" ${a}>${esc(p.name)}</a>` +
        `<span class="df-pbox-text">${esc(p.text)}</span>` +
        `<a class="df-pbox-cta" ${a}>Check price on Amazon</a>` +
        `</div></div>`
      );
    })
    .join("");
  return `<div class="df-pbox-wrap">${cards}</div>`;
}
