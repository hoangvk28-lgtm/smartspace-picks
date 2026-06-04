import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SB = "https://xlipolezpdkfmneqkncd.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaXBvbGV6cGRrZm1uZXFrbmNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ1NjcyOSwiZXhwIjoyMDk1MDMyNzI5fQ.nnQTZfueVnpKwxKkB506BfL1nMlvUFj4aOdlvCyq2mE";
const BUCKET = "affiliate-media";
const FOLDER = "guides/best-headphones-for-online-classes";
const srcDir = join(__dirname, "../design/blog image/best-headphones-for-online-classes-7-webp-images");
const images = [
  "07-hero-best-headphones-for-online-classes.webp",
  "01-best-overall-sony-wh-ch520-wireless.webp",
  "02-best-wired-best-mic-logitech-h390-usb-headset.webp",
  "03-best-anc-soundcore-anker-q20i.webp",
  "04-best-budget-under-35-jlab-studio-wireless.webp",
  "05-best-for-long-classes-jlab-studio-pro-wireless.webp",
  "06-best-wired-no-charging-audio-technica-ath-m20x.webp",
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
