import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-small-desk-charging-stations";
const srcDir = join(__dirname, "../design/blog image/small-desk-charging-stations-webp");
const images = [
  "06-best-small-desk-charging-stations-hero.webp",
  "01-anker-nano-6-in-1-67w.webp",
  "02-anker-615-ganprime-65w.webp",
  "03-anker-525-7-in-1-65w.webp",
  "04-anker-magsafe-3-in-1-qi2.webp",
  "05-anker-powerport-5.webp",
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
