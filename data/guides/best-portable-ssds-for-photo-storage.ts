export const guideSlug = "best-portable-ssds-for-photo-storage";
export const guideTitle = "4 Best Portable SSDs for Photo Storage in 2026";
export const metaTitle = "Best Portable SSDs for Photo Storage";
export const metaDescription = "4 portable SSDs we evaluated for photo archival, weighing long-term endurance and warranty length over raw speed for a written-once library.";
export const mainKeyword = "best portable ssd for photo storage";
export const introParagraphs = [
  "Photo archival is genuinely different from video editing's continuous read-write cycling, a photo library is typically written once and read occasionally, so long-term reliability and endurance matter more for this use case than raw transfer speed.",
  "Because photo libraries are often irreplaceable, redundancy matters too, we recommend not relying on a single drive for your only copy regardless of which pick you choose, and to weigh TBW endurance and warranty length as real reliability signals.",
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
    badge: "Best Overall Pick for Photo Archival",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    price: "$299.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=deskfinds0d-20",
    description:
      "SanDisk's Extreme combines reliable 1050MB/s speed with IP65 water and dust resistance, a sensible balance for photographers who want both durability and dependable long-term storage.\n\nAs with any single drive, keep a second backup of irreplaceable photo libraries rather than relying on this drive as your only copy.",
    specs: ["2TB capacity", "Up to 1050MB/s rated", "USB-C, USB 3.2 Gen 2", "IP65 water and dust resistance"],
    pros: ["IP65 rating adds real durability for field use", "Large 2TB capacity for extensive photo libraries", "Well-established, large review base as a reliability signal", "Realistic everyday speed ceiling for archival use"],
    cons: ["Speed is not the priority for archival, capacity and endurance matter more", "Older model, verify current firmware", "Should not be your only backup copy of irreplaceable photos"],
    bestFor: "Photographers who want durable, dependable long-term photo storage",
  },
  {
    id: "b09vlhr4jc-p2",
    rank: 2,
    badge: "Best High-Capacity Pick for Large Photo Libraries",
    name: "Samsung T7 Shield Portable SSD 2TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    price: "$399.75",
    rating: "4.7 stars from Amazon ratings",
    reviews: "16,380 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VLHR4JC?tag=deskfinds0d-20",
    description:
      "Samsung's T7 Shield scales up to 2TB with rugged shell protection, useful headroom for photographers accumulating large RAW file libraries over years of shooting.\n\nRAW files carry real overhead over compressed JPEGs, plan your realistic capacity needs around RAW file sizes if that is your primary format.",
    specs: ["2TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Rugged shield"],
    pros: ["Large 2TB capacity suited to growing RAW file libraries", "Rugged shell adds real protection for field use", "Reliable, well-reviewed platform", "Good long-term reliability track record"],
    cons: ["RAW file overhead can fill capacity faster than expected", "Bulkier than the non-shielded T7", "Should not be your only backup copy of irreplaceable photos"],
    bestFor: "Photographers with large or growing RAW file libraries",
  },
  {
    id: "b0874xn4d8-p3",
    rank: 3,
    badge: "Best Slim Pick for Everyday Photo Backup",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "Samsung's T7 offers a slim, reliable everyday option for photographers who want a straightforward backup companion without extra ruggedization bulk.\n\nIts well-established reliability track record and warranty support make it a reasonable choice for a library you plan to keep for years, paired with an additional backup elsewhere.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Slim metal body"],
    pros: ["Slim, lightweight design for everyday photo backup", "Reliable, widely reviewed platform with strong warranty support", "Good value for moderate photo library sizes", "Comes in multiple colors"],
    cons: ["No official IP rating", "1TB may be limiting for large RAW file libraries", "Should not be your only backup copy of irreplaceable photos"],
    bestFor: "Photographers with a moderate library wanting a reliable everyday backup drive",
  },
  {
    id: "b0c5jq68fy-p4",
    rank: 4,
    badge: "Best Budget Pick for Photo Backup",
    name: "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    price: "$164.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "10,968 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JQ68FY?tag=deskfinds0d-20",
    description:
      "SanDisk's standard Portable SSD offers a budget-friendly way to maintain a second copy of a photo library, rated up to 800MB/s, more than sufficient for the occasional-read pattern typical of photo archival.\n\nBecause a photo library is written once and read occasionally rather than continuously cycled, this drive's more modest speed rarely matters in practice for archival use.",
    specs: ["1TB capacity", "Up to 800MB/s rated", "USB-C, USB 3.2 Gen 2", "Budget price"],
    pros: ["Budget-friendly way to maintain a second backup copy", "Sufficient speed for occasional-read archival use", "Reliable brand with a large review base", "Good value per gigabyte for a redundant backup"],
    cons: ["800MB/s ceiling would matter more for continuous editing than archival", "No official IP rating", "1TB may be limiting for large RAW file libraries"],
    bestFor: "Budget-conscious photographers wanting an affordable redundant backup copy",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Long-term endurance weighted over raw speed", description: "Prioritized TBW endurance and warranty length as reliability signals more heavily than raw transfer speed, appropriate for a written-once, read-occasionally use pattern." },
  { title: "Written-once, read-occasionally use pattern recognized", description: "Distinguished photo archival's usage pattern from video editing's continuous read-write cycling when weighing which specs actually matter." },
  { title: "RAW file overhead considered in capacity planning", description: "Factored in that RAW file sizes create real capacity overhead compared to compressed JPEGs when planning realistic library size needs." },
  { title: "Redundancy strategy emphasized", description: "Recommended not relying on a single drive for irreplaceable photo libraries regardless of which specific pick a buyer chooses." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Archival Priorities Differ From Editing Priorities",
    note: "A photo library is typically written once and read occasionally, genuinely different from video editing's continuous read-write cycling. For archival, weigh TBW endurance and warranty length more heavily than raw transfer speed, which matters less for this usage pattern.",
  },
  {
    subheading: "Never Rely on a Single Drive for Irreplaceable Photos",
    note: "Regardless of which drive you choose, keep at least one additional backup copy of an irreplaceable photo library, whether on a second drive, a cloud service, or both. A single point of failure is a real risk for photos you cannot reshoot.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Balanced durability and dependable storage", "SanDisk Extreme 2TB"], ["Large or growing RAW file library", "Samsung T7 Shield 2TB"], ["Slim everyday backup companion", "Samsung T7 1TB"], ["Affordable redundant backup copy", "SanDisk Portable SSD 1TB"]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Weigh TBW endurance and warranty length over raw speed", explanation: "For a library written once and read occasionally, long-term endurance and warranty length are more meaningful reliability signals than transfer speed." },
  { criterion: "Never rely on a single drive for irreplaceable photos", explanation: "Keep at least one additional backup copy, whether a second drive or a cloud service, regardless of how reliable your primary drive is rated." },
  { criterion: "Plan capacity around RAW file overhead", explanation: "RAW files are significantly larger than compressed JPEGs, budget your capacity needs around your actual file format rather than an assumed average size." },
  { criterion: "Check warranty claim process quality, not just length", explanation: "A longer warranty is only as good as the manufacturer's actual claim process, established brands with a longer review history tend to have more predictable support." },
  { criterion: "Prioritize capacity over speed for archival-only use", explanation: "Since photo archival rarely involves continuous sustained transfers, a larger-capacity drive is often a better use of budget than a faster but smaller one." }
];

export const faq: FaqItem[] = [
  { q: "Does speed matter for photo storage the way it does for video editing?", a: "Less so. A photo library is typically written once and read occasionally, so long-term endurance and warranty length matter more than raw transfer speed." },
  { q: "Should I keep my only photo backup on one portable SSD?", a: "No, keep at least one additional backup copy of an irreplaceable photo library, whether on a second drive, a cloud service, or both." },
  { q: "Do RAW files need more storage planning than JPEGs?", a: "Yes, RAW files carry real capacity overhead compared to compressed JPEGs, plan your storage needs around your actual file format." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-iphone", title: "Best Portable SSDs for iPhone in 2026" },
  { href: "/guide/best-reliable-portable-ssds", title: "Best Reliable Portable SSDs in 2026" },
  { href: "/guide/best-2tb-portable-ssds", title: "Best 2TB Portable SSDs in 2026" }
];
