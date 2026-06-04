import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-charging-stations-for-home-office";
const srcDir = join(__dirname, "../design/blog image/bai-10-best-charging-stations-for-home-office-desks-6-webp-images");
const images = [
  "06-hero-best-charging-stations-for-home-office-desks.webp",
  "01-best-overall-anker-prime-200w.webp",
  "02-best-macbook-pro-16-ugreen-nexode-200w.webp",
  "03-best-wireless-anker-prime-3-in-1-qi2-25w.webp",
  "04-best-all-in-one-baseus-nomos-5-in-1.webp",
  "05-best-value-tessan-130w-8-in-1.webp",
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
