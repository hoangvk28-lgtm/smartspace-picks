export const guideSlug = "best-portable-scrapbook-file-boxes";
export const guideTitle = "5 Best Portable Scrapbook File Boxes in 2026";
export const metaTitle = "Best Portable Scrapbook File Boxes (2026)";
export const metaDescription =
  "5 file boxes verified for genuine 12x12 inch scrapbook paper compatibility, distinguished from standard letter-size boxes that don't fit larger scrapbook materials.";
export const mainKeyword = "portable scrapbook file box";
export const introParagraphs = [
  "We required confirmed 12x12 inch compatibility for the true scrapbook-specific picks, since standard letter-size file boxes don't fit scrapbook paper and page protectors. We also included well-reviewed letter-size options for buyers whose scrapbook materials fit smaller dimensions.",
  "\"Made in USA\" and archival-quality claims matter more in this category than most file storage, since scrapbook materials are often irreplaceable — we noted where a product specifically addresses this.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41oWQz8xKPL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b08v21rxfy-scrapbookbox",
    rank: 1,
    badge: "Best Overall",
    name: "IRIS USA Scrapbook Case, Made in USA, Fits 12\"x12\" - Thick (6-Pack) - Clear",
    price: "$41.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41oWQz8xKPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08V21RXFY?tag=deskfinds0d-20",
    description: "Confirmed genuine 12x12 inch compatibility, made in the USA, in a 6-pack of clear cases — the most directly matched product to the true scrapbook-storage use case.",
    specs: ["Confirmed 12x12 in compatibility", "Made in USA", "6-pack, clear"],
    pros: ["Confirmed genuine 12x12 scrapbook paper compatibility", "Made in USA", "6-pack value"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers who specifically need confirmed 12x12 inch scrapbook paper storage.",
  },
  {
    id: "b09vjsh9f9-scrapbookbox",
    rank: 2,
    badge: "Best With Latching Lids",
    name: "Citylife 3 PCS Plastic Storage Bins with Latching Lids Portable Project Case",
    price: "$28.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41oWQz8xKPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VJSH9F9?tag=deskfinds0d-20",
    description: "A 3-pack of clear project cases with latching lids, useful for organizing scrapbook supplies and smaller crafting materials into separate secure containers.",
    specs: ["3-pack, latching lids, clear", "Portable project case design"],
    pros: ["Latching lids secure contents during transport", "3-pack for organizing multiple project categories"],
    cons: ["Verify 12x12 compatibility directly, as this may be sized for smaller materials"],
    bestFor: "Buyers who want to organize scrapbook supplies into multiple secure containers.",
  },
  {
    id: "b08t6p8lb6-scrapbookbox",
    rank: 3,
    badge: "Most Proven, Letter-Size",
    name: "Pendaflex Portable File Box with File Rails, Simple Document Storage",
    price: "$28.54",
    rating: "4.4",
    reviews: "5,076",
    imageUrl: "https://m.media-amazon.com/images/I/41oWQz8xKPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08T6P8LB6?tag=deskfinds0d-20",
    description: "A letter-size file box, not a genuine 12x12 scrapbook fit, but with by far the largest review base in this comparison — included for scrapbook supplies and materials that fit standard letter dimensions.",
    specs: ["Letter size, file rails", "5,076 reviews at 4.4 stars"],
    pros: ["Largest, most established review base in this comparison"],
    cons: ["Letter size, not confirmed 12x12 scrapbook compatible"],
    bestFor: "Buyers with smaller-format scrapbook materials that fit letter-size storage.",
  },
  {
    id: "b0cn6g2dj6-scrapbookbox",
    rank: 4,
    badge: "Best A4 Multi-Pack Option",
    name: "LonlyEagle 6 Pcs Clear A4 File Portable Project Case, Plastic Storage Box",
    price: "$24.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41oWQz8xKPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CN6G2DJ6?tag=deskfinds0d-20",
    description: "A 6-pack of A4-sized clear project cases, useful for organizing smaller scrapbook embellishments and supplies rather than full 12x12 pages.",
    specs: ["6-pack, A4 size, clear plastic"],
    pros: ["6-pack value for organizing smaller supplies", "Transparent design shows contents"],
    cons: ["A4 size, not confirmed for full 12x12 scrapbook pages"],
    bestFor: "Buyers who want to organize smaller scrapbook embellishments and supplies rather than full pages.",
  },
  {
    id: "b0d92v2xzt-scrapbookbox",
    rank: 5,
    badge: "Best Clear Letter-Size Alternative",
    name: "Staples File Box Portable Storage Tote, Letter Size, Clear Plastic",
    price: "$24.15",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41oWQz8xKPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D92V2XZT?tag=deskfinds0d-20",
    description: "A transparent letter-size tote from an established office-supply retailer, suited to smaller-format scrapbook materials or general craft supply storage.",
    specs: ["Letter size, clear plastic"],
    pros: ["From an established office-supply retailer", "Transparent design shows contents"],
    cons: ["Letter size, not confirmed for full 12x12 scrapbook pages", "No review history available yet"],
    bestFor: "Buyers who want a proven-brand clear tote for smaller-format materials.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified genuine 12x12 inch compatibility where claimed", description: "We confirmed which products actually state 12x12 inch compatibility versus those sized for A4 or letter materials instead." },
  { title: "Distinguished true scrapbook-specific products from general storage", description: "We separated the IRIS USA scrapbook-specific case from general clear plastic storage totes that happen to work for smaller craft supplies." },
  { title: "Archival quality and Made in USA noted where present", description: "We flagged where a product specifically addresses archival-safe or domestic manufacturing claims, relevant for buyers storing irreplaceable materials." },
  { title: "Review volume weighted for the letter-size alternatives", description: "We prioritized established review history for the general-purpose picks included as alternatives to the true 12x12 option." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Confirm 12x12 Compatibility Before Buying for Full Scrapbook Pages",
    note: "Only the IRIS USA Scrapbook Case explicitly confirms 12x12 inch compatibility in this comparison. If you work with full-size scrapbook pages, verify this dimension directly before choosing a letter or A4-size alternative.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm genuine 12x12 inch compatibility for full scrapbook pages", explanation: "Only the IRIS USA Scrapbook Case explicitly confirms this dimension — verify before assuming a letter or A4-size box fits full scrapbook pages." },
  { criterion: "Consider Made in USA or archival-safe claims for irreplaceable materials", explanation: "Scrapbook materials are often irreplaceable, so archival-quality construction matters more here than for general document storage." },
  { criterion: "Weigh multi-pack value for organizing separate project categories", explanation: "Several picks here come in 3-6 packs, useful for separating different scrapbook projects or supply types." },
  { criterion: "Consider letter or A4-size alternatives for smaller materials", explanation: "If your scrapbook supplies fit smaller dimensions, the Pendaflex or Staples letter-size picks offer stronger review evidence." },
  { criterion: "Check latching lids for secure transport", explanation: "The Citylife pick's latching lids help secure contents if you transport scrapbook supplies between locations." },
];

export const faq: FaqItem[] = [
  { q: "Which is confirmed to fit full 12x12 inch scrapbook pages?", a: "The IRIS USA Scrapbook Case, made in the USA, is the only pick here with explicitly confirmed 12x12 inch compatibility." },
  { q: "Which has the most reviews?", a: "The Pendaflex Portable File Box, with 5,076 reviews, though it's letter size, not confirmed 12x12." },
  { q: "Is there a multi-pack option?", a: "Yes, both the IRIS USA (6-pack) and Citylife (3-pack) options come in multi-packs." },
  { q: "What if my scrapbook materials are smaller than 12x12?", a: "The letter-size Pendaflex and Staples picks, or the A4-size LonlyEagle pick, may be more appropriate and offer strong review evidence." },
  { q: "Are these secure for transport?", a: "The Citylife pick specifically includes latching lids for secure transport." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-plastic-file-boxes-with-handles", title: "Best Portable Plastic File Boxes with Handles (2026)" },
  { href: "/guide/best-portable-file-organizer-boxes", title: "Best Portable File Organizer Boxes (2026)" },
  { href: "/guide/best-portable-file-boxes", title: "Best Portable File Boxes (2026)" },
];
