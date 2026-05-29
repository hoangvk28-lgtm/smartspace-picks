import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SUPABASE_URL = "https://xlipolezpdkfmneqkncd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-usb-hub-for-desk";
const srcDir = join(__dirname, "../design/blog image/deskfinds-usb-hubs-8-images-webp");

const images = [
  "1-anker-7-port-powered-hub.webp",
  "2-sabrent-10-port-plus-charging.webp",
  "3-sabrent-7-port-usb-c.webp",
  "4-sabrent-7-port-led-switches.webp",
  "5-grommet-desk-fit-hub.webp",
  "6-anker-10-port-60w-hub.webp",
  "7-anker-4-port-compact.webp",
  "8-4-port-portable-3.3ft-cable.webp",
];

for (const filename of images) {
  const buf = readFileSync(join(srcDir, filename));
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${FOLDER}/${filename}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "image/webp", "x-upsert": "true" },
    body: buf,
  });
  if (!res.ok) { console.error(`FAIL ${filename}: ${await res.text()}`); continue; }
  console.log(`OK  ${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${FOLDER}/${filename}`);
}
console.log("Done.");
