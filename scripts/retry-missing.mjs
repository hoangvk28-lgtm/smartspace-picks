import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

function loadDotEnvLocal() {
  try {
    const content = readFileSync(resolve(ROOT, ".env.local"), "utf-8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/\r$/, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {}
}
loadDotEnvLocal();

const TOKEN_ENDPOINT = process.env.AMAZON_PAAPI_TOKEN_ENDPOINT ?? "https://api.amazon.com/auth/o2/token";
const API_BASE = "https://creatorsapi.amazon";
const MARKETPLACE = process.env.AMAZON_PAAPI_MARKETPLACE ?? "www.amazon.com";
const PARTNER_TAG = process.env.AMAZON_PAAPI_PARTNER_TAG ?? "deskfinds0d-20";

async function getAccessToken() {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.AMAZON_PAAPI_ACCESS_KEY,
      client_secret: process.env.AMAZON_PAAPI_SECRET_KEY,
      scope: "creatorsapi::default",
    }),
  });
  const json = await res.json();
  return json.access_token;
}

async function getItems(asins, token) {
  const res = await fetch(`${API_BASE}/catalog/v1/getItems`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", "x-marketplace": MARKETPLACE },
    body: JSON.stringify({
      itemIds: asins, itemIdType: "ASIN", marketplace: MARKETPLACE, partnerTag: PARTNER_TAG,
      resources: ["images.primary.large","itemInfo.title","itemInfo.features","offersV2.listings.price","customerReviews.starRating","customerReviews.count"],
    }),
  });
  if (!res.ok) throw new Error(`getItems failed (${res.status}): ${await res.text()}`);
  const json = await res.json();
  if (json.errors?.length) for (const e of json.errors) console.log(`ERROR ${e.code}: ${e.message}`);
  return json.itemsResult?.items ?? [];
}

const missing = ["B01L0OSH18","B07PG9MSYX","B07TWDB7CJ","B08BF79MXN","B08LMYM7GW","B08LYHR45P","B094ZFQ9QD","B09BNLNX9B","B09BNTZDB3","B09DF5PBBC","B09L2V6NKL","B09QX53KH2","B09Y7DNJFR","B0B3DC27Q3","B0B9Y6N8QK","B0BFD3JVLB","B0BHN1XNCM","B0BHRQNNGL","B0BJXJ4WZJ","B0BRKQXNVQ","B0BWJZQMKN","B0BZ7H9RD9","B0BZPV9DYM","B0C5M5P36T","B0C5X3DJ1Z","B0C7JJKX5K","B0C7LGBTPD","B0C7QXZMN8","B0C8NDKJXV","B0C9GXKQLT","B0CHHZ4MGG","B0CJNXP2KL","B0CRTQ69L6","B0CV3KGW1P","B0D2PQWXNM","B0DK2QNXMR","B0DSFXVVX8","B0GCLSGD3T","B0GGYZB137"];

const token = await getAccessToken();
const allItems = [];
for (const asin of missing) {
  try {
    const items = await getItems([asin], token);
    allItems.push(...items);
    console.log(items.length ? `OK ${asin}` : `STILL MISSING ${asin}`);
  } catch (e) {
    console.log(`RETRY-FAIL ${asin}: ${e.message}`);
  }
  await new Promise(r => setTimeout(r, 1500));
}
writeFileSync(resolve(ROOT, "scripts", "data-1-80-retry.json"), JSON.stringify(allItems, null, 2), "utf8");
console.log(`Recovered ${allItems.length}/${missing.length}`);
