import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-budget-usb-charging-station-under-30";
const srcDir = join(__dirname, "../design/blog image/usb-charging-stations-under-30-8-webp-images");
const images = [
  "00-hero-7-best-budget-usb-charging-stations-under-30.webp",
  "01-anker-powerport-6-60w-6-port.webp",
  "02-hercules-tuff-6-port-aluminum.webp",
  "03-soopii-6-port-6-cables-pd-20w.webp",
  "04-sabrent-10-port-60w-ax-tpcs.webp",
  "05-mstjry-68w-6-port.webp",
  "06-anker-powerport-5-40w-5-port.webp",
  "07-soopii-lcd-display-6-port.webp",
];
for (const f of images) {
  const res = await fetch(`${SB}/storage/v1/object/${BUCKET}/${FOLDER}/${f}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "image/webp", "x-upsert": "true" },
    body: readFileSync(join(srcDir, f)),
  });
  console.log(res.ok ? `OK  ${f}` : `FAIL ${f}: ${await res.text()}`);
}
console.log("Done.");
