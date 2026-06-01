/**
 * Ping IndexNow after deploying new or updated pages.
 * Run: node scripts/ping-indexnow.mjs
 *
 * IndexNow notifies Bing + Yandex simultaneously.
 * Rate limit: 10,000 URLs/day (we have ~50 pages — no issue).
 */

const HOST = "www.deskfinds.com";
const KEY = "c98c7bf07f814a3b85155692e78cbbfc";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// All guide slugs
const guideSlugs = [
  "best-tablet-stands",
  "best-tablet-stands-for-bed",
  "best-tablet-stands-for-desk",
  "desk-lamps-small-desks",
  "monitor-stands-small-desks",
  "laptop-stands-small-desks",
  "cable-management-dorm",
  "bedside-caddies-students",
  "under-bed-storage-small-rooms",
  "desk-organizers-small-desks",
  "dorm-room-shower-essentials",
  "small-room-closet-storage",
  "dorm-room-power-essentials",
  "best-small-keyboards",
  "best-small-desk-accessories",
  "desk-setup-essentials",
  "best-desk-setup-accessories",
  "small-desk-setup",
  "ergonomic-desk-setup",
  "minimalist-desk-setup",
  "best-dorm-items-under-25",
  "best-desk-mat-for-small-desk",
  "20-genius-small-space-hacks",
  "best-usb-hub-for-desk",
  "desk-upgrades-under-100",
  "best-clip-on-desk-lamp",
  "best-headphone-stand-desk",
  "best-under-desk-cable-trays",
  "small-desk-organization-ideas",
];

// Compare articles
const compareSlug = ["monitor-stand-vs-monitor-arm"];

// Static pages
const staticPaths = [
  "/",
  "/guide",
  "/compare",
  "/categories",
  "/deals",
  "/about-deskfinds",
  "/affiliate-disclosure",
  "/how-we-review",
];

const urlList = [
  ...staticPaths.map((p) => `https://${HOST}${p}`),
  ...guideSlugs.map((s) => `https://${HOST}/guide/${s}`),
  ...compareSlug.map((s) => `https://${HOST}/compare/${s}`),
];

console.log(`Pinging IndexNow with ${urlList.length} URLs...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

if (res.ok) {
  console.log(`✓ IndexNow accepted — HTTP ${res.status}`);
  console.log(`  ${urlList.length} URLs submitted to Bing + Yandex`);
} else {
  const body = await res.text();
  console.error(`✗ IndexNow rejected — HTTP ${res.status}: ${body}`);
  process.exit(1);
}
