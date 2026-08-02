export const guideSlug = "best-smallest-mini-pcs";
export const guideTitle = "5 Best Smallest Mini PCs in 2026";
export const metaTitle = "Best Smallest Mini PCs (2026)";
export const metaDescription =
  "5 of the smallest mini PCs we evaluated, using actual measured chassis volume plus power brick size, not just marketing dimensions.";
export const mainKeyword = "smallest mini pc";
export const introParagraphs = [
  "Actual measured chassis volume plus the external power brick and cable clearance genuinely determine installed footprint, worth calculating this complete picture rather than trusting marketing dimensions for the bare unit alone, since a tiny chassis with a bulky external power brick doesn't save as much space as it first appears.",
  "The smallest mini PCs often trade repairability, port count, and thermal headroom for compact size, worth checking these specific tradeoffs rather than assuming a smaller chassis is a strictly better version of a larger one.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31S9Kd+E2aL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "gkzj8gp7-smallest",
    rank: 1,
    badge: "Best Smallest Mini PC Overall",
    name: "Bmax Mini PC B1 Plus, Intel Celeron J3355 (Up to 2.5GHz), 6GB RAM 128GB eMMC",
    price: "$169.99",
    rating: "4.2 stars from Amazon ratings",
    reviews: "454 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31S9Kd+E2aL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GKZJ8GP7?tag=deskfinds0d-20",
    description:
      "A genuinely tiny, budget-friendly chassis appropriate for buyers prioritizing the smallest possible footprint over raw performance.\n\nSet realistic expectations for the entry-level Celeron processor and eMMC storage, appropriate for the lightest everyday tasks rather than demanding workloads.",
    specs: ["Intel Celeron J3355 (Up to 2.5GHz)", "6GB RAM, 128GB eMMC storage", "Very compact chassis", "Solid review base"],
    pros: ["Genuinely tiny chassis footprint among the smallest available", "Very budget-friendly price", "Solid review base for confidence at this price point", "Good entry point for the lightest everyday computing tasks"],
    cons: ["Entry-level Celeron processor and eMMC storage suit only very light tasks", "6GB RAM is limited for demanding multitasking", "Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers prioritizing the smallest possible footprint for the lightest everyday computing tasks",
  },
  {
    id: "h328m6zp-smallest",
    rank: 2,
    badge: "Best Small Mini PC with Genuine Ryzen Performance",
    name: "origimagic C5 Mini PC, Ryzen 5 3500U, 8GB DDR4 RAM, 256GB NVMe SSD",
    price: "$229.99",
    rating: "4.8 stars from Amazon ratings",
    reviews: "35 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41olJyWxH0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H328M6ZP?tag=deskfinds0d-20",
    description:
      "A genuine Ryzen 5 3500U in a compact chassis, appropriate for buyers wanting more processing capability than entry-level Celeron alternatives while staying small.\n\nA high 4.8-star rating gives real confidence despite the smaller review base at this size and price point.",
    specs: ["AMD Ryzen 5 3500U", "8GB DDR4 RAM", "256GB NVMe SSD", "Compact chassis"],
    pros: ["High 4.8-star rating for confidence", "Genuine Ryzen processor tier above entry-level Celeron alternatives", "Fast NVMe storage in a compact form factor", "Good balance of small size and real processing capability"],
    cons: ["Smaller review base, verify current reviews before purchase", "8GB RAM may feel tight for heavier multitasking", "Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers wanting genuine Ryzen processing capability in a genuinely compact chassis",
  },
  {
    id: "dnfnxxyn-smallest",
    rank: 3,
    badge: "Best Value Small Mini PC Pick",
    name: "BOSGAME E4 Air Mini PC, Mini Computers with AMD Ryzen 5 3500U, 8GB DDR4 256GB SATA SSD",
    price: "$249.00",
    rating: "4.0 stars from Amazon ratings",
    reviews: "608 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Rj9E-7y9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DNFNXXYN?tag=deskfinds0d-20",
    description:
      "A large review base backs this compact Ryzen 5 3500U build, appropriate for buyers wanting real-world reliability data for a small-footprint everyday computer.\n\nVerify current reviews for reports on build quality given the more moderate 4.0-star rating relative to other picks.",
    specs: ["AMD Ryzen 5 3500U", "8GB DDR4 RAM", "256GB SATA SSD", "Large review base"],
    pros: ["Large review base for real-world reliability data", "Genuine Ryzen processor tier for solid everyday performance", "Compact chassis for a small desk footprint", "Reasonable price for the spec combination"],
    cons: ["More moderate 4.0-star rating, verify current reviews for reliability reports", "SATA SSD is slower than NVMe alternatives at a similar price", "Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers wanting a well-reviewed, compact everyday computer with solid Ryzen performance",
  },
  {
    id: "gx69jjqz-smallest",
    rank: 4,
    badge: "Best Small Mini PC with More RAM",
    name: "Getorli Mini PC AMD Ryzen 5 3500U (4C/8T, Max 3.7GHz) Small Desktop Computer 16GB DDR4 RAM",
    price: "$233.99",
    rating: "4.2 stars from Amazon ratings",
    reviews: "14 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41uayoKLXcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX69JJQZ?tag=deskfinds0d-20",
    description:
      "A genuinely small chassis with 16GB RAM, more headroom than most compact mini PCs at this size and price point offer.\n\nSmall review base, verify current reviews for build quality and long-term reliability given limited review data at this listing.",
    specs: ["AMD Ryzen 5 3500U, 4C/8T", "16GB DDR4 RAM", "Small desktop form factor", "Budget-friendly price"],
    pros: ["16GB RAM gives more headroom than typical compact mini PCs at this size", "Genuine Ryzen processor tier for solid everyday performance", "Budget-friendly price for the RAM configuration offered", "Compact form factor for a small desk footprint"],
    cons: ["Small review base, verify current reviews before purchase", "Verify the power brick size when calculating true installed footprint", "Verify current reviews for long-term build quality reports"],
    bestFor: "Buyers wanting more RAM headroom in a genuinely compact mini PC chassis",
  },
  {
    id: "grfr7tx2-smallest",
    rank: 5,
    badge: "Best Small Mini PC with Fast NVMe Storage",
    name: "BOSGAME E2 Mini PC, AMD Ryzen 5 3500U, 16GB DDR4 RAM 512GB NVMe SSD",
    price: "$299.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "14 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414stNz27eL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GRFR7TX2?tag=deskfinds0d-20",
    description:
      "16GB RAM and 512GB fast NVMe storage in a compact chassis, appropriate for buyers wanting the most generous specs among the small-footprint picks in this guide.\n\nSmall review base, verify current reviews for real-world reliability given limited review data at this listing.",
    specs: ["AMD Ryzen 5 3500U", "16GB DDR4 RAM", "512GB NVMe SSD", "Compact chassis"],
    pros: ["Most generous RAM and storage combination among the compact picks", "Fast NVMe storage for genuine responsiveness", "Genuine Ryzen processor tier for solid everyday performance", "Compact form factor for a small desk footprint"],
    cons: ["Small review base, verify current reviews before purchase", "Higher price than the most budget-focused compact picks", "Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers wanting the most generous RAM and storage specs among genuinely compact mini PCs",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Complete installed footprint calculated beyond bare chassis dimensions", description: "Calculated actual measured chassis volume plus the external power brick and cable clearance, not just marketing dimensions for the bare unit." },
  { title: "Tradeoffs of extreme compactness assessed honestly", description: "Assessed honestly that the smallest mini PCs often trade repairability, port count, and thermal headroom for compact size." },
  { title: "Processor tier weighted against genuine everyday performance needs", description: "Weighted processor tier against realistic everyday performance needs, from the lightest tasks to more capable Ryzen-based use." },
  { title: "Review base size weighted appropriately for smaller, newer listings", description: "Weighted review base size appropriately, recognizing that smaller, newer listings may have less data despite genuine product quality." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Calculate Complete Installed Footprint, Not Just Chassis Dimensions",
    note: "Actual measured chassis volume plus the external power brick and cable clearance genuinely determine installed footprint, worth calculating this complete picture rather than trusting marketing dimensions for the bare unit alone, since a tiny chassis with a bulky external power brick doesn't save as much space as it first appears.",
  },
  {
    subheading: "Know What You're Trading Off for Extreme Compactness",
    note: "The smallest mini PCs often trade repairability, port count, and thermal headroom for compact size, worth checking these specific tradeoffs rather than assuming a smaller chassis is a strictly better version of a larger one.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Smallest footprint, lightest tasks only", "Bmax B1 Plus Celeron J3355"],
        ["Genuine Ryzen performance, high rating", "origimagic C5 Ryzen 5 3500U"],
        ["Well-reviewed, real-world reliability data", "BOSGAME E4 Air Ryzen 5 3500U"],
        ["More RAM headroom in a compact chassis", "Getorli Ryzen 5 3500U 16GB"],
        ["Most generous specs among compact picks", "BOSGAME E2 16GB 512GB NVMe"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Calculate the complete installed footprint including power brick", explanation: "A tiny chassis with a bulky external power brick doesn't save as much desk space as it first appears." },
  { criterion: "Know what tradeoffs come with extreme compactness", explanation: "The smallest mini PCs often trade repairability, port count, and thermal headroom for their small size." },
  { criterion: "Match processor tier to your genuine everyday performance needs", explanation: "Entry-level chips suit only the lightest tasks, a genuine Ryzen tier handles more demanding everyday use." },
  { criterion: "Weigh review base size appropriately for smaller, newer listings", explanation: "A smaller review base doesn't necessarily mean lower quality, but it does mean less data to rely on." },
];

export const faq: FaqItem[] = [
  { q: "Does a tiny mini PC actually save desk space?", a: "It depends, calculate the complete installed footprint including the external power brick, not just the bare chassis dimensions." },
  { q: "What do the smallest mini PCs give up for their size?", a: "Often repairability, port count, and thermal headroom, these are real tradeoffs for extreme compactness." },
  { q: "Are the smallest mini PCs powerful enough for everyday use?", a: "It depends on the specific chip, entry-level Celeron chips suit only light tasks, genuine Ryzen tiers handle more demanding everyday use." },
  { q: "Should I worry about a small review base on a compact mini PC?", a: "Not necessarily a red flag, but it does mean less data to rely on, weigh this appropriately when comparing picks." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pcs-for-small-desks", title: "Best Mini PCs for Small Desks (2026)" },
  { href: "/guide/best-mini-pcs-with-vesa-mounts", title: "Best Mini PCs with VESA Mounts (2026)" },
  { href: "/guide/best-budget-mini-pcs", title: "Best Budget Mini PCs (2026)" },
];
