import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-charging-stations-for-bedside-table";
const srcDir = join(__dirname, "../design/blog image/bai-9-bedside-table-charging-stations-6-webp-images");
const images = [
  "06-hero-bedside-table-charging-stations.webp",
  "01-best-overall-anker-maggo-3-in-1-qi2-foldable.webp",
  "02-best-premium-belkin-boostcharge-pro-3-in-1-qi2.webp",
  "03-best-compact-2-in-1-ugreen-magflow-2-in-1-qi2.webp",
  "04-best-android-ugreen-qi2-25w-magflow.webp",
  "05-best-ultra-compact-anker-3-in-1-cube-magsafe.webp",
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
