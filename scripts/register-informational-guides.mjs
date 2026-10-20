/**
 * Appends a lightweight registry entry to data/guides.ts for every
 * data/informational-guides/<slug>.ts file, so the slug shows up in
 * getPublicGuideSlugs() (sitemap, generateStaticParams, category pages).
 * The actual rich content is rendered via informationalGuideLoaders, not this entry -
 * recommendedProductIds/sections/faq/buyingCriteria stay empty here deliberately.
 *
 * Usage: node scripts/register-informational-guides.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const GUIDES_DIR = resolve(ROOT, "data", "informational-guides");
const GUIDES_TS = resolve(ROOT, "data", "guides.ts");

function clusterToSubcategorySlug(cluster) {
  return cluster
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractField(content, name) {
  const m = content.match(new RegExp(`export const ${name} = "((?:[^"\\\\]|\\\\.)*)";`));
  return m ? m[1] : "";
}

const files = readdirSync(GUIDES_DIR)
  .filter((f) => f.endsWith(".ts"))
  .sort();

const existing = readFileSync(GUIDES_TS, "utf8");
const existingSlugs = new Set([...existing.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));

let entries = "";
let added = 0;
let skipped = 0;

for (const file of files) {
  const content = readFileSync(resolve(GUIDES_DIR, file), "utf8");
  const slug = extractField(content, "slug");
  if (!slug || existingSlugs.has(slug)) {
    skipped++;
    continue;
  }

  const title = extractField(content, "title");
  const metaDescription = extractField(content, "metaDescription");
  const author = extractField(content, "author");
  const datePublished = extractField(content, "datePublished");
  const readTime = extractField(content, "readTime");
  const cluster = extractField(content, "cluster");
  const heroImage = extractField(content, "heroImage");
  const subcategorySlug = clusterToSubcategorySlug(cluster) || "desk-setup-explained";

  const relatedMatch = content.match(/export const relatedGuides[^=]*=\s*(\[[\s\S]*?\n\]);/);
  let relatedSlugs = [];
  if (relatedMatch) {
    const related = JSON.parse(relatedMatch[1]);
    relatedSlugs = related
      .map((r) => r.href.replace(/^\/guide\//, "").replace(/\/$/, ""))
      .slice(0, 4);
  }

  entries += `  {
    title: ${JSON.stringify(title)},
    slug: ${JSON.stringify(slug)},
    categorySlug: "desk-setup",
    subcategorySlug: ${JSON.stringify(subcategorySlug)},
    description: ${JSON.stringify(metaDescription)},
    mainKeyword: ${JSON.stringify(title.toLowerCase())},
    subKeywords: [],
    heroImage: ${JSON.stringify(heroImage)},
    lastUpdated: ${JSON.stringify(datePublished)},
    author: ${JSON.stringify(author)},
    readTime: ${JSON.stringify(readTime)},
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: ${JSON.stringify(relatedSlugs)},
    buyingCriteria: [],
  },
`;
  added++;
}

const updated = existing.replace(/\n\];\s*$/, `\n${entries}];\n`);
writeFileSync(GUIDES_TS, updated, "utf8");
console.log(`Added ${added} entries to data/guides.ts (${skipped} already present/skipped).`);
