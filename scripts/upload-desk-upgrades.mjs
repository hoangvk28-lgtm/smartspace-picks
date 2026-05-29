import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SUPABASE_URL = "https://xlipolezpdkfmneqkncd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/desk-upgrades-under-100";

const images = [
  "1A-huanuo-flowlift-single.webp",
  "1B-huanuo-dual-monitor-stand.webp",
  "2A-vivo-single-laptop-mount.webp",
  "2B-vivo-combo-stand.webp",
  "3A-trueque-km23.webp",
  "3B-wave-keys-combo.webp",
  "3C-purple-ergonomic-combo.webp",
  "4-premium-wrist-rest-armrest.webp",
  "5-mount-it-3-height-footrest.webp",
  "6A-satechi-108w-pro.webp",
  "6B-anker-9-in-1-100w.webp",
  "7-sabrent-10-port-hub.webp",
  "8-d-line-cable-box-large.webp",
];

const srcDir = join(__dirname, "../design/blog image/Desk Upgrades Under $100 That Make a Real Difference");

for (const filename of images) {
  const filePath = join(srcDir, filename);
  const fileBuffer = readFileSync(filePath);
  const storagePath = `${FOLDER}/${filename}`;
  const uploadUrl = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${storagePath}`;

  const res = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "image/webp",
      "x-upsert": "true",
    },
    body: fileBuffer,
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error(`FAILED ${filename}: ${res.status} ${txt}`);
  } else {
    const pub = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`;
    console.log(`OK  ${filename}\n    ${pub}`);
  }
}
console.log("\nDone.");
