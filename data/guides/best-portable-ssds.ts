export const guideSlug = "best-portable-ssds";
export const guideTitle = "4 Best Portable SSDs in 2026";
export const metaTitle = "Best Portable SSDs in 2026";
export const metaDescription = "4 portable SSDs we evaluated on real transfer speeds, durability, and price per gigabyte to help you pick the right drive for your setup.";
export const mainKeyword = "best portable ssd";
export const introParagraphs = [
  "The rated transfer speed printed on a portable SSD's box only holds up if the host port, the cable, and the drive's own controller all support that spec at the same time, so it is worth checking your laptop or console's actual port spec before assuming any drive will hit its advertised number.",
  "Most consumer portable SSDs also rely on an onboard SLC cache to hit their fastest numbers, and that cache runs out during large sustained transfers, after which write speed can drop noticeably, a real-world cliff that a short benchmark rarely reveals.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b08hn37xc1-p1",
    rank: 1,
    badge: "Best Overall Portable SSD",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    price: "$299.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=deskfinds0d-20",
    description:
      "SanDisk's Extreme line pairs a rated 1050MB/s transfer speed with IP65 water and dust resistance, a genuinely useful combination for buyers who want one drive that works reliably both at a desk and on the move.\n\nUSB-C and USB 3.2 Gen 2 connectivity cover most modern laptops and consoles, though actual throughput still depends on your specific port and cable meeting that same spec.",
    specs: ["2TB capacity", "Up to 1050MB/s rated", "USB-C, USB 3.2 Gen 2", "IP65 water and dust resistance"],
    pros: ["IP65 rating adds real everyday durability", "Large 2TB capacity for bigger libraries", "Broad compatibility with USB-C and USB-A via adapter", "Compact, pocketable form factor"],
    cons: ["Rated speed requires a USB 3.2 Gen 2 capable port", "Sustained transfers can slow once the SLC cache fills", "Older model, verify current firmware on arrival"],
    bestFor: "Buyers who want one dependable all-around drive for daily transfers",
  },
  {
    id: "b09vlk9w3s-p2",
    rank: 2,
    badge: "Best Balance of Speed and Toughness",
    name: "Samsung T7 Shield Portable SSD 1TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    price: "$286.88",
    rating: "4.7 stars from Amazon ratings",
    reviews: "16,380 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VLK9W3S?tag=deskfinds0d-20",
    description:
      "Samsung's T7 Shield adds a rugged rubberized shell on top of the well-regarded T7 platform, rated for 1050MB/s over USB 3.2 Gen 2.\n\nThe shield design trades a small amount of pocketability for meaningfully better drop resistance, a fair swap for buyers who carry a drive in a bag rather than a pocket.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Rugged rubberized shell"],
    pros: ["Rugged shell adds real drop protection", "Consistent, well-reviewed platform", "USB 3.2 Gen 2 speed ceiling is realistic for most users", "Compact despite the added shell bulk"],
    cons: ["Bulkier than the standard T7 due to the shield", "1050MB/s ceiling trails newer 2000MB/s+ drives", "Sustained large transfers can hit the SLC cache limit"],
    bestFor: "Buyers who want Samsung reliability with added drop protection",
  },
  {
    id: "b0874xn4d8-p3",
    rank: 3,
    badge: "Best Slim Everyday Drive",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "The standard Samsung T7 keeps the same 1050MB/s USB 3.2 Gen 2 performance in a slimmer, lighter metal body without the T7 Shield's rubber armor.\n\nIt is a sensible pick for buyers who mostly use a drive on a desk or in a padded bag and would rather have the slimmer form factor than extra ruggedization they will not use.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Slim metal body"],
    pros: ["Slimmer and lighter than the Shield variant", "Reliable, widely reviewed platform", "Comes in multiple color options", "Solid price for the performance tier"],
    cons: ["Less drop protection than the Shield model", "1050MB/s ceiling is not class-leading in 2026", "No official IP rating"],
    bestFor: "Buyers prioritizing a slim, pocketable everyday drive",
  },
  {
    id: "b0c5jq68fy-p4",
    rank: 4,
    badge: "Best Budget Value Pick",
    name: "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    price: "$164.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "10,968 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JQ68FY?tag=deskfinds0d-20",
    description:
      "SanDisk's standard Portable SSD trades some peak speed, rated up to 800MB/s, for a noticeably lower price than the Extreme or T7 lines.\n\nFor everyday document and media transfers rather than large video files, the lower ceiling rarely matters in practice, making this a reasonable choice for buyers watching price per gigabyte.",
    specs: ["1TB capacity", "Up to 800MB/s rated", "USB-C, USB 3.2 Gen 2", "Budget-friendly price"],
    pros: ["Lowest price per gigabyte in this group", "Still USB 3.2 Gen 2 rated for solid everyday speed", "Compact and lightweight", "Good backup and file-transfer companion"],
    cons: ["800MB/s ceiling trails the other picks here", "No official IP water or dust rating", "Best suited to everyday files rather than large video work"],
    bestFor: "Budget-conscious buyers who do not need top-tier speed",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Real-world compatibility chain", description: "Checked whether each drive's rated speed is realistically achievable given common USB-C and USB 3.2 Gen 2 host ports, not just the number printed on the box." },
  { title: "Sustained transfer behavior", description: "Weighted how each drive likely behaves once its SLC cache is exhausted during a large sustained transfer, not just its peak burst speed." },
  { title: "Durability and build", description: "Compared IP ratings, shell material, and enclosure design as genuine durability signals rather than marketing language." },
  { title: "Price per gigabyte", description: "Compared street price against capacity to judge real value, not just headline speed claims." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Match Your Port Before You Match a Speed Number",
    note: "A drive rated for 1050MB/s only hits that number over a USB 3.2 Gen 2 port with a compatible cable. Check your laptop or console's actual port spec first, since an older USB-A 3.0 port caps real throughput well below the drive's rating.",
  },
  {
    subheading: "Know Where the Speed Cliff Is",
    note: "Most drives here use an SLC cache to hit peak speed, and that cache can run out during a large sustained copy, after which write speed drops. If you regularly move very large files, prioritize a drive with reviews confirming steady sustained performance, not just a high peak number.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["All-around reliability with rugged rating", "SanDisk Extreme 2TB"], ["Best speed-to-toughness balance", "Samsung T7 Shield 1TB"], ["Slimmest everyday carry", "Samsung T7 1TB"], ["Lowest price per gigabyte", "SanDisk Portable SSD 1TB"]] },
  },
  {
    subheading: "Formatting Across Platforms",
    note: "Most portable SSDs ship pre-formatted in exFAT or NTFS. Both work across Windows and Mac with minor caveats, but if you plan to use Time Machine on a Mac, you will likely need to reformat to APFS first.",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify your actual port speed first", explanation: "A drive rated for 1050MB/s or faster only reaches that speed over a matching USB 3.2 Gen 2 or better port with a capable cable. Check your device's real port spec before comparing drives on speed alone." },
  { criterion: "Understand the SLC cache cliff", explanation: "Peak speed is usually only sustained until an onboard cache fills, after which write speed can drop well below the advertised number on large transfers over roughly 20 to 50GB." },
  { criterion: "Check the IP rating specifics", explanation: "IP65 and similar ratings describe dust and water resistance under specific test conditions, not full submersion durability. Treat it as splash and dust protection, not a waterproof guarantee." },
  { criterion: "Budget for real usable capacity", explanation: "Formatting overhead typically reduces usable space by around 7 percent below the advertised capacity, so a 1TB drive will show closer to 930GB in your operating system." },
  { criterion: "Confirm hardware encryption if you need it", explanation: "Not every portable SSD includes AES-256 hardware encryption. If you carry sensitive files, check the specific model's security features rather than assuming all drives include this." }
];

export const faq: FaqItem[] = [
  { q: "Will a portable SSD really hit its rated speed?", a: "Only if your host port, cable, and the drive's controller all support the same speed tier simultaneously. An older USB-A port will bottleneck even the fastest drive." },
  { q: "Why did my transfer speed drop partway through a large copy?", a: "Most drives use an SLC cache to sustain peak speed. Once that cache fills during a large sustained transfer, write speed typically drops until the controller catches up." },
  { q: "How much usable space will I actually get?", a: "Expect roughly 7 percent less than the advertised capacity after formatting overhead, plus the difference between decimal and binary gigabyte reporting." },
  { q: "Do I need to reformat a new drive for Mac or Windows?", a: "Most drives ship in exFAT, which works on both. For Mac Time Machine backups specifically, you will likely need to reformat to APFS first." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-nvme-portable-ssds", title: "Best NVMe Portable SSDs in 2026" },
  { href: "/guide/best-rugged-portable-ssds", title: "Best Rugged Portable SSDs in 2026" },
  { href: "/guide/best-budget-portable-ssds", title: "Best Budget Portable SSDs in 2026" }
];
