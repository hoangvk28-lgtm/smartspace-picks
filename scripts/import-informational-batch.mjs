/**
 * Imports ONE informational-guide content package (batch06+ "flat-array" format) into
 * data/informational-guides/<slug>.ts without touching previously imported guides.
 * Differences from import-informational-guides.mjs:
 *  - photo credit/license links are stripped from figcaptions; a single small
 *    image note is appended at the end of the article instead
 *  - links to /guide/<slug> targets that don't exist on the site (e.g. unpublished
 *    drafts from a later package) are unwrapped to plain text
 *
 * Usage: SUPABASE_SERVICE_ROLE_KEY=... node scripts/import-informational-batch.mjs <batchDir> <datePublished>
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = "affiliate-media";
const AUTHOR = "Jamie Cole, Lead Product Researcher";

const [batchDir, datePublished] = process.argv.slice(2);
if (!batchDir || !datePublished || !KEY) {
  console.error("Usage: SUPABASE_SERVICE_ROLE_KEY=... node scripts/import-informational-batch.mjs <batchDir> <datePublished>");
  process.exit(1);
}

const IMAGE_NOTE =
  '<p class="image-note"><small>Photos are illustrative and come from free-license libraries such as Unsplash; diagrams are original to DeskFinds.</small></p>';

function parseCsv(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    // simple CSV split good enough for these link-map files (no embedded commas in URLs)
    const parts = line.split(",");
    const row = {};
    headers.forEach((h, i) => (row[h.trim()] = (parts[i] || "").trim()));
    return row;
  });
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function sanitizeDashes(s) {
  return s.replace(/—/g, "-").replace(/–/g, "-");
}

function smartTruncateTitle(title, max = 48) {
  if (title.length <= max) return title;
  const cut = title.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 20 ? cut.slice(0, lastSpace) : cut).trim();
}

function fixMetaDescription(md) {
  md = sanitizeDashes(md.trim());
  if (md.length > 160) {
    const cut = md.slice(0, 160);
    const lastSpace = cut.lastIndexOf(" ");
    md = cut.slice(0, lastSpace).trim();
    if (!/[.!?]$/.test(md)) md += ".";
  }
  if (md.length < 120) {
    const suffix = " A research-based guide from DeskFinds.";
    if (md.length + suffix.length <= 160) {
      md = md.replace(/\.$/, "") + "." + suffix;
    }
  }
  return md;
}

async function uploadImage(localPath, destFolder, filename) {
  const body = readFileSync(localPath);
  const res = await fetch(`${SB}/storage/v1/object/${BUCKET}/${destFolder}/${filename}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "image/webp", "x-upsert": "true" },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed for ${localPath}: ${res.status} ${text}`);
  }
  return `${SB}/storage/v1/object/public/${BUCKET}/${destFolder}/${filename}`;
}

function normalizeImages(article) {
  // Returns array of { position, path, alt, caption, download_url|null }
  return (article.images || []).map((img) => ({
    position: Number(img.position),
    path: img.path,
    alt: img.alt || "",
    caption: img.caption || "",
    downloadUrl: img.download_url || null,
  }));
}

function stripLeadingH1(html) {
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}

function stripTocNav(html) {
  return html.replace(/<nav\s+aria-label="In this guide">[\s\S]*?<\/nav>\s*/i, "");
}

function addRelToExternalLinks(html) {
  return html.replace(/<a href="(https?:\/\/[^"]+)"((?:(?!target=)[^>])*)>/g, (match, url, rest) => {
    if (url.includes("deskfinds.com")) return match;
    if (/target=/.test(rest)) return match;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer"${rest}>`;
  });
}

function extractToc(html) {
  const toc = [];
  const seen = new Map();
  const processed = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h[23]>/gi, (full, rawLevel, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    if (!text) return full;
    let id;
    const idMatch = attrs.match(/\bid="([^"]+)"/);
    if (idMatch) {
      id = idMatch[1];
    } else {
      id = slugifyHeading(text);
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count > 0) id = `${id}-${count}`;
      attrs = `${attrs} id="${id}"`;
    }
    toc.push({ id, text, level: Number(rawLevel) });
    return `<h${rawLevel}${attrs}>${inner}</h${rawLevel}>`;
  });
  return { toc, processed };
}

function readTimeFromWordCount(wordCount) {
  const minutes = Math.max(3, Math.round(wordCount / 220));
  return `${minutes} min`;
}

function stripPhotoCredits(html) {
  // "... Photo: <a href=...>Name</a>, Unsplash. <a href=...>License</a>." inside figcaptions
  return html.replace(/<figcaption>([\s\S]*?)<\/figcaption>/gi, (full, inner) => {
    const cleaned = inner
      .replace(/\s*(Photo|Image|Diagram)( credit)?:[\s\S]*$/i, "")
      .trim();
    return cleaned ? `<figcaption>\n${cleaned}\n</figcaption>` : "";
  });
}

function unwrapMissingGuideLinks(html, known) {
  return html.replace(/<a href="(?:https:\/\/www\.deskfinds\.com)?\/guide\/([a-z0-9-]+)\/?"[^>]*>([\s\S]*?)<\/a>/g, (full, slug, text) =>
    known.has(slug) ? full : text
  );
}

function siteSlugs() {
  const reg = readFileSync(resolve(ROOT, "data", "guides.ts"), "utf8");
  return new Set([...reg.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));
}

async function main() {
  const outDir = resolve(ROOT, "data", "informational-guides");
  mkdirSync(outDir, { recursive: true });
  const articles = JSON.parse(readFileSync(join(batchDir, "all-20-guides.json"), "utf8"));
  const known = siteSlugs();
  for (const a of articles) known.add(a.slug);

  const links = new Map();
  try {
    for (const row of parseCsv(readFileSync(join(batchDir, "internal-link-map.csv"), "utf8"))) {
      const src = (row.source_slug || row.source || "").replace(/^\/guide\//, "").replace(/\/$/, "");
      const t = row.target_path || row.target || "";
      if (!src || !t) continue;
      if (!links.has(src)) links.set(src, []);
      links.get(src).push(t);
    }
  } catch {}

  let uploads = 0;
  for (const article of articles) {
    const slug = article.slug;
    if (existsSync(resolve(outDir, `${slug}.ts`))) throw new Error(`Refusing to overwrite existing ${slug}`);
    const images = normalizeImages(article);
    const pathToUrl = new Map();
    for (const img of images) {
      let finalUrl;
      if (img.downloadUrl && img.downloadUrl.includes("images.unsplash.com")) {
        finalUrl = img.downloadUrl;
      } else {
        const filename = img.path.split("/").pop();
        finalUrl = await uploadImage(join(batchDir, img.path), `guides/informational/${slug}`, filename);
        uploads++;
      }
      pathToUrl.set(`../${img.path}`, finalUrl);
      pathToUrl.set(img.path, finalUrl);
      img.finalUrl = finalUrl;
    }

    let body = article.body_html;
    for (const [from, to] of pathToUrl) body = body.split(from).join(to);
    body = stripLeadingH1(body);
    body = stripTocNav(body);
    body = stripPhotoCredits(body);
    body = unwrapMissingGuideLinks(body, known);
    body = addRelToExternalLinks(body);
    body = sanitizeDashes(body) + "\n" + IMAGE_NOTE;
    const { toc, processed } = extractToc(body);

    const title = sanitizeDashes(article.title);
    const related = [...new Set((links.get(slug) || []).filter((t) => t.startsWith("/guide/")))]
      .filter((t) => known.has(t.replace(/^\/guide\//, "").replace(/\/$/, "")))
      .slice(0, 6);

    const ts = `// AUTO-GENERATED by scripts/import-informational-batch.mjs from the informational
// content package. Hand edits here will be overwritten if the script re-runs.
export const slug = ${JSON.stringify(slug)};
export const title = ${JSON.stringify(title)};
export const metaTitle = ${JSON.stringify(smartTruncateTitle(title))};
export const metaDescription = ${JSON.stringify(fixMetaDescription(article.meta_description))};
export const author = ${JSON.stringify(AUTHOR)};
export const datePublished = ${JSON.stringify(datePublished)};
export const readTime = ${JSON.stringify(readTimeFromWordCount(article.main_word_count || article.word_count || 2000))};
export const cluster = ${JSON.stringify(article.cluster || "")};
export const heroImage = ${JSON.stringify(images[0]?.finalUrl || "")};
export const heroImageAlt = ${JSON.stringify(images[0]?.alt || title)};
export const bodyHtml = ${JSON.stringify(processed)};
export const toc: { id: string; text: string; level: 2 | 3 }[] = ${JSON.stringify(toc, null, 2)};
export const relatedGuides = ${JSON.stringify(related.map((href) => ({ href })), null, 2)};
`;
    writeFileSync(resolve(outDir, `${slug}.ts`), ts, "utf8");
  }
  console.log(`Imported ${articles.length} guides, uploaded ${uploads} images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
