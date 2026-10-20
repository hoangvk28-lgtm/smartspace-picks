/**
 * Imports the 5 informational-guide content packages (deskfinds_p1..p5 / batch04-05)
 * into data/informational-guides/<slug>.ts files, uploading original WebP diagrams to
 * Supabase storage and rewriting body_html image paths to real URLs.
 *
 * Usage: node scripts/import-informational-guides.mjs
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";

const AUTHOR = "Jamie Cole, Lead Product Researcher";

const BATCHES = [
  {
    dir: resolve(ROOT, "deskfinds_p1_15_informational_guides (1)/deskfinds_p1"),
    jsonFile: "cms-import.json",
    linkMap: "internal-link-map.csv",
    kind: "articles-key",
    datePublished: "2026-10-20",
  },
  {
    dir: resolve(ROOT, "deskfinds_p2_15_informational_guides/deskfinds_p2"),
    jsonFile: "cms-import.json",
    linkMap: "internal-link-map.csv",
    kind: "articles-key",
    datePublished: "2026-10-27",
  },
  {
    dir: resolve(ROOT, "deskfinds_p3_10_informational_guides/deskfinds_p3"),
    jsonFile: "cms-import.json",
    linkMap: "internal-link-map.csv",
    kind: "articles-key",
    datePublished: "2026-11-03",
  },
  {
    dir: resolve(ROOT, "deskfinds_p4_20_informational_guides_41-60/deskfinds_batch04"),
    jsonFile: "all-20-guides.json",
    linkMap: "internal-link-map.csv",
    kind: "flat-array",
    datePublished: "2026-11-10",
  },
  {
    dir: resolve(ROOT, "deskfinds_p5_20_informational_guides_61-80/deskfinds_batch05"),
    jsonFile: "all-20-guides.json",
    linkMap: "internal-link-map.csv",
    kind: "flat-array",
    datePublished: "2026-11-17",
  },
];

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

async function main() {
  const outDir = resolve(ROOT, "data", "informational-guides");
  mkdirSync(outDir, { recursive: true });

  const allSlugLinks = new Map(); // slug -> Set of target paths with their status

  const allArticles = [];

  for (const batch of BATCHES) {
    const jsonPath = join(batch.dir, batch.jsonFile);
    const raw = JSON.parse(readFileSync(jsonPath, "utf8"));
    const articles = batch.kind === "articles-key" ? raw.articles : raw;

    // Parse internal link map for this batch
    const linkMapPath = join(batch.dir, batch.linkMap);
    let linkRows = [];
    try {
      linkRows = parseCsv(readFileSync(linkMapPath, "utf8"));
    } catch {
      linkRows = [];
    }
    for (const row of linkRows) {
      const sourceSlug = (row.source_slug || row.source || "").replace(/^\/guide\//, "").replace(/\/$/, "");
      const targetPath = row.target_path || row.target || "";
      if (!sourceSlug || !targetPath) continue;
      if (!allSlugLinks.has(sourceSlug)) allSlugLinks.set(sourceSlug, []);
      allSlugLinks.get(sourceSlug).push(targetPath);
    }

    for (const article of articles) {
      allArticles.push({ ...article, _datePublished: batch.datePublished, _batchDir: batch.dir });
    }
  }

  console.log(`Loaded ${allArticles.length} articles across ${BATCHES.length} batches.`);

  let uploadCount = 0;
  const filesWritten = [];

  for (const article of allArticles) {
    const slug = article.slug;
    const images = normalizeImages(article);
    const pathToUrl = new Map();

    for (const img of images) {
      let finalUrl;
      if (img.downloadUrl && img.downloadUrl.includes("images.unsplash.com")) {
        finalUrl = img.downloadUrl;
      } else {
        const filename = img.path.split("/").pop();
        const localFile = join(article._batchDir, img.path);
        const destFolder = `guides/informational/${slug}`;
        finalUrl = await uploadImage(localFile, destFolder, filename);
        uploadCount++;
      }
      // Map both "../assets/..." (used in body_html) and bare "assets/..." (used in images[].path)
      pathToUrl.set(`../${img.path}`, finalUrl);
      pathToUrl.set(img.path, finalUrl);
      img.finalUrl = finalUrl;
    }

    let body = article.body_html;
    for (const [from, to] of pathToUrl) {
      body = body.split(from).join(to);
    }
    body = stripLeadingH1(body);
    body = stripTocNav(body);
    body = addRelToExternalLinks(body);
    body = sanitizeDashes(body);

    const { toc, processed: bodyWithIds } = extractToc(body);

    const title = sanitizeDashes(article.title);
    const metaTitle = smartTruncateTitle(title);
    const metaDescription = fixMetaDescription(article.meta_description);

    const heroImage = images[0]?.finalUrl || "";
    const heroImageAlt = images[0]?.alt || title;

    const wordCount = article.main_word_count || article.word_count || 2000;
    const readTime = readTimeFromWordCount(wordCount);

    const relatedTargets = (allSlugLinks.get(slug) || []).filter((t) => t.startsWith("/guide/"));
    const uniqueRelated = [...new Set(relatedTargets)].slice(0, 6);

    const tsContent = `// AUTO-GENERATED by scripts/import-informational-guides.mjs from the informational
// content package. Hand edits here will be overwritten if the script re-runs.
export const slug = ${JSON.stringify(slug)};
export const title = ${JSON.stringify(title)};
export const metaTitle = ${JSON.stringify(metaTitle)};
export const metaDescription = ${JSON.stringify(metaDescription)};
export const author = ${JSON.stringify(AUTHOR)};
export const datePublished = ${JSON.stringify(article._datePublished)};
export const readTime = ${JSON.stringify(readTime)};
export const cluster = ${JSON.stringify(article.cluster || "")};
export const heroImage = ${JSON.stringify(heroImage)};
export const heroImageAlt = ${JSON.stringify(heroImageAlt)};
export const bodyHtml = ${JSON.stringify(bodyWithIds)};
export const toc: { id: string; text: string; level: 2 | 3 }[] = ${JSON.stringify(toc, null, 2)};
export const relatedGuides = ${JSON.stringify(uniqueRelated.map((href) => ({ href })), null, 2)};
`;

    writeFileSync(resolve(outDir, `${slug}.ts`), tsContent, "utf8");
    filesWritten.push(slug);
  }

  console.log(`Uploaded ${uploadCount} images.`);
  console.log(`Wrote ${filesWritten.length} files to data/informational-guides/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
