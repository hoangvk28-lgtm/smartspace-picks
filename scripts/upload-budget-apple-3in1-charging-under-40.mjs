import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-budget-apple-3-in-1-charging-station-under-40";
const srcDir = join(__dirname, "../design/blog image/deskfinds-apple-3in1-charging-stations-6-images-webp");
const images = [
  "6-hero-best-budget-apple-3-in-1-charging-stations-under-40-2026.webp",
  "1-esr-halolock-foldable-3-in-1.webp",
  "2-esr-25w-cryoboost-3-in-1.webp",
  "3-keepro-ultra-compact-foldable-3-in-1.webp",
  "4-keepro-travel-stand-3-in-1.webp",
  "5-budget-foldable-3-in-1-with-light.webp",
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
