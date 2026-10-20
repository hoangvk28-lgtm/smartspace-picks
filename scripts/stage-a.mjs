// Stage A (zero LLM tokens), adapted from HardcastlesRV/AdultTricyclesPro.
// Usage: node scripts/stage-a.mjs <config.json> <pool.json> <out-dir>
// config: { "<slug>": { poolKey, must, ban, minPrice?, maxPrice?, n?, spread? } }
import fs from "node:fs";
import path from "node:path";

const [cfgFile, poolFile, outDir] = process.argv.slice(2);
const cfg = JSON.parse(fs.readFileSync(cfgFile, "utf8"));
const pool = JSON.parse(fs.readFileSync(poolFile, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

// ASINs already used anywhere on the site (never re-list the same product under a new price tier)
const used = new Set();
for (const f of fs.readdirSync("data/guides")) {
  if (!f.endsWith(".ts")) continue;
  for (const m of fs.readFileSync("data/guides/" + f, "utf8").matchAll(/\/dp\/([A-Z0-9]{10})/g)) used.add(m[1]);
}

for (const [slug, c] of Object.entries(cfg)) {
  const must = new RegExp(c.must, "i"), ban = new RegExp(c.ban, "i");
  const n = c.n ?? 8;
  const source = pool[c.poolKey] ?? [];
  const seenAsin = new Set(), seenKey = new Set(), cand = [];
  for (const i of source) {
    const t = i.title || "";
    if (seenAsin.has(i.asin)) continue;
    seenAsin.add(i.asin);
    if (!must.test(t) || ban.test(t)) continue;
    if (!i.img || !i.features?.length) continue;
    if (used.has(i.asin) && !c.allowReuse) continue;
    if (c.minPrice && !(i.price >= c.minPrice)) continue;
    if (c.maxPrice && !(i.price && i.price <= c.maxPrice)) continue;
    if (i.rating != null && i.rating < 3.8) continue;
    const key = `${(i.brand || "").toLowerCase()}|${t.toLowerCase().replace(/[^a-z ]/g, "").split(" ").slice(0, 5).join(" ")}`;
    if (seenKey.has(key)) continue;
    seenKey.add(key);
    cand.push(i);
  }
  // prefer never-used-elsewhere products; only dip into reused ones to fill remaining slots
  const fresh = cand.filter((i) => !used.has(i.asin)).sort((a, b) => a.price - b.price);
  const reused = cand.filter((i) => used.has(i.asin)).sort((a, b) => a.price - b.price);
  function spreadSort(list) {
    if (c.spread === false || list.length <= n) return list;
    const step = (list.length - 1) / (n - 1);
    const picked = [...new Set(Array.from({ length: n }, (_, k) => list[Math.round(k * step)]))];
    return [...picked, ...list.filter((x) => !picked.includes(x))];
  }
  const ordered = [...spreadSort(fresh), ...spreadSort(reused)];
  const brand = {}, picks = [];
  for (const i of ordered) {
    if (picks.length >= n) break;
    const b = (i.brand || "x").toLowerCase();
    if ((brand[b] ?? 0) >= 2) continue;
    brand[b] = (brand[b] ?? 0) + 1;
    picks.push(i);
  }
  for (const i of ordered) {
    if (picks.length >= n) break;
    if (picks.includes(i)) continue;
    const b = (i.brand || "x").toLowerCase();
    if ((brand[b] ?? 0) >= 3) continue;
    brand[b] = (brand[b] ?? 0) + 1;
    picks.push(i);
  }
  picks.sort((a, b) => b.price - a.price);
  picks.forEach((p) => used.add(p.asin));
  const out = {
    slug,
    status: picks.length >= (c.minAccept ?? 5) ? "ok" : "THIN",
    candidates: cand.length,
    products: picks.map((p) => ({
      asin: p.asin, brand: p.brand, title: p.title, image: p.img, price: p.price,
      rating: p.rating, reviews: p.reviews,
      features: p.features.slice(0, 6).map((f) => f.replace(/\s+/g, " ").slice(0, 300)),
    })),
  };
  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(out, null, 1));
  console.log(`${out.status.padEnd(5)} ${slug.padEnd(40)} picks=${picks.length} candidates=${cand.length}`);
}
