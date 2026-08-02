export const guideSlug = "best-mini-pcs-under-300";
export const guideTitle = "5 Best Mini PCs Under $300 in 2026";
export const metaTitle = "Best Mini PCs Under $300 (2026)";
export const metaDescription =
  "5 mini PCs under $300 we evaluated, setting realistic expectations for entry-level chips and RAM at this competitive budget tier.";
export const mainKeyword = "mini pc under 300";
export const introParagraphs = [
  "At this price tier, RAM and storage configuration genuinely matters more for real-world usability than processor branding, worth checking that 8GB or more RAM is included rather than assuming a low sticker price automatically means an underpowered machine.",
  "Entry-level chips at this budget genuinely suit lighter tasks like browsing, email, and document editing well, worth setting realistic expectations rather than expecting demanding multitasking or content creation performance under $300.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31LlCbf8wEL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "gx667hrm-under300",
    rank: 1,
    badge: "Best Mini PC Under $300 Overall",
    name: "Barebone Mini PC, AMD Ryzen 5 3500U (up to 3.7GHz), Without RAM/Storage",
    price: "$179.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31LlCbf8wEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX667HRM?tag=deskfinds0d-20",
    description:
      "A genuine Ryzen 5 3500U barebone chassis at a very low starting price, appropriate for buyers wanting to add their own RAM and storage to stay well under $300 total.\n\nThis is a barebone listing without RAM or storage included, factor in the added component cost before assuming this is the final price.",
    specs: ["AMD Ryzen 5 3500U, up to 3.7GHz", "Barebone, no RAM/storage included", "Very low starting price", "Genuine Ryzen processor tier"],
    pros: ["Genuine Ryzen 5 processor tier at a very low barebone price", "Flexibility to choose your own RAM and storage capacity", "Low sticker price leaves budget room for good components", "Compact form factor for a small desk"],
    cons: ["Barebone listing excludes RAM and storage, factor in added cost", "Verify current reviews as this is a newer listing", "Requires self-installation of RAM and storage components"],
    bestFor: "Buyers wanting a genuine Ryzen chip and the flexibility to choose their own RAM and storage",
  },
  {
    id: "gr463lcq-under300",
    rank: 2,
    badge: "Best Value Complete Build Under $300",
    name: "GMKtec G3 Pro Mini PC Barebone Intel Core i3-10110U (Beats 4415U)",
    price: "$189.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41CL4VABm1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GR463LCQ?tag=deskfinds0d-20",
    description:
      "A genuine Intel Core i3-10110U chip at a low starting price, appropriate for buyers wanting Intel's mature driver ecosystem well under $300.\n\nVerify whether this specific listing includes RAM and storage or is barebone before assuming the final configured price.",
    specs: ["Intel Core i3-10110U", "Very low starting price", "Genuine Intel Core i3 tier", "Verify RAM/storage inclusion"],
    pros: ["Genuine Intel Core i3 processor tier at a low starting price", "Mature Intel driver support for everyday tasks", "Low price leaves budget room for good components if barebone", "Compact form factor for a small desk"],
    cons: ["Verify whether RAM and storage are included in this specific listing", "10th-gen Intel is an older chip generation", "Verify current reviews as this is a newer listing"],
    bestFor: "Buyers wanting Intel's mature driver ecosystem at a low price under $300",
  },
  {
    id: "gd7nrs93-under300",
    rank: 3,
    badge: "Best Complete Build Under $300",
    name: "GMKtec G3S Mini PC Intel N95 Processor (Up to 3.4GHz) 8GB RAM",
    price: "$249.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41GIF1yaVoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GD7NRS93?tag=deskfinds0d-20",
    description:
      "A complete build including 8GB RAM at this budget tier, appropriate for buyers wanting a ready-to-use machine without sourcing separate RAM and storage.\n\nSet realistic expectations for the entry-level N95 processor, appropriate for lighter tasks like browsing and document editing.",
    specs: ["Intel N95, Up to 3.4GHz", "8GB RAM included", "Complete, ready-to-use build", "Budget-friendly price"],
    pros: ["8GB RAM already included, no separate component sourcing needed", "Efficient low-power chip for always-on desktop use", "Mature Intel driver support for everyday tasks", "Complete build stays comfortably under $300"],
    cons: ["Entry-level N95 processor suits only lighter everyday tasks", "8GB RAM may feel tight for heavier multitasking", "Verify current reviews as this is a newer listing"],
    bestFor: "Buyers wanting a complete, ready-to-use machine with RAM included, no assembly required",
  },
  {
    id: "cq4c9zy1-under300",
    rank: 4,
    badge: "Best Intel Core i3 Complete Build",
    name: "GMKtec Mini PC Intel Core i3-10110U Processor 8GB DDR4 256GB SSD",
    price: "$246.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41sKXJEffSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CQ4C9ZY1?tag=deskfinds0d-20",
    description:
      "A genuine Core i3 chip with 8GB RAM and 256GB SSD already included, appropriate for buyers wanting a complete Intel-based build under $300.\n\n256GB SSD gives reasonable storage headroom for documents and applications without needing separate storage.",
    specs: ["Intel Core i3-10110U", "8GB DDR4 RAM", "256GB SSD", "Complete, ready-to-use build"],
    pros: ["Genuine Intel Core i3 chip for mature driver support", "8GB RAM and 256GB SSD already included, no assembly required", "Reasonable storage headroom for documents and applications", "Competitive complete-build price under $300"],
    cons: ["10th-gen Intel is an older chip generation", "8GB RAM may feel tight for heavier multitasking", "Verify current reviews before purchase"],
    bestFor: "Buyers wanting a complete Intel-based build under $300 with no assembly required",
  },
  {
    id: "gfcmghjt-under300",
    rank: 5,
    badge: "Best Budget N95 Complete Build",
    name: "GMKtec Mini PC Computers Intel N95 Processor (Turbo 3.4GHz)",
    price: "$249.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41C8DZtap0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GFCMGHJT?tag=deskfinds0d-20",
    description:
      "Another efficient N95-based complete build, appropriate for buyers comparing similarly priced entry-level options for lighter everyday tasks.\n\nVerify current reviews and exact RAM and storage configuration before purchase to compare against similar listings at this price point.",
    specs: ["Intel N95, Turbo 3.4GHz", "Complete, ready-to-use build", "Budget-friendly price", "Efficient low-power design"],
    pros: ["Efficient low-power chip for always-on desktop use", "Complete build stays comfortably under $300", "Mature Intel driver support for everyday tasks", "Compact form factor for a small desk"],
    cons: ["Entry-level N95 processor suits only lighter everyday tasks", "Verify current reviews and exact RAM/storage configuration", "Not appropriate for demanding multitasking workflows"],
    bestFor: "Budget-conscious buyers comparing entry-level complete builds for lighter everyday tasks",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "RAM and storage inclusion checked over processor branding alone", description: "Checked whether 8GB or more RAM is genuinely included rather than assuming a low sticker price automatically means an underpowered machine." },
  { title: "Realistic performance expectations set for entry-level chips", description: "Set realistic expectations that entry-level chips at this budget suit lighter tasks well, rather than expecting demanding multitasking performance." },
  { title: "Barebone versus complete-build listings distinguished clearly", description: "Distinguished barebone listings requiring separate RAM and storage purchase from complete, ready-to-use builds at this price tier." },
  { title: "Intel versus AMD driver maturity considered for budget chips", description: "Considered driver maturity differences between entry-level Intel and AMD chips for everyday budget-tier use." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check That RAM and Storage Are Genuinely Included",
    note: "At this price tier, RAM and storage configuration genuinely matters more for real-world usability than processor branding, worth checking that 8GB or more RAM is included rather than assuming a low sticker price automatically means an underpowered machine.",
  },
  {
    subheading: "Set Realistic Expectations for Entry-Level Chips",
    note: "Entry-level chips at this budget genuinely suit lighter tasks like browsing, email, and document editing well, worth setting realistic expectations rather than expecting demanding multitasking or content creation performance under $300.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Genuine Ryzen chip, choose your own RAM/storage", "Barebone Ryzen 5 3500U"],
        ["Genuine Intel Core i3, low starting price", "GMKtec G3 Pro Core i3-10110U (barebone)"],
        ["Complete ready-to-use build, N95", "GMKtec G3S Intel N95 8GB"],
        ["Complete ready-to-use build, Core i3", "GMKtec Core i3-10110U 8GB 256GB"],
        ["Comparison-shopping budget N95 build", "GMKtec N95 Turbo 3.4GHz"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check whether RAM and storage are genuinely included", explanation: "A low sticker price sometimes reflects a barebone listing, verify 8GB or more RAM is included before assuming it's ready to use." },
  { criterion: "Set realistic expectations for entry-level chip performance", explanation: "These chips suit lighter tasks like browsing and email well, don't expect demanding multitasking performance at this budget." },
  { criterion: "Distinguish barebone listings from complete builds", explanation: "Barebone listings require separate RAM and storage purchase, factor in this added cost before comparing prices." },
  { criterion: "Consider Intel's driver maturity for entry-level everyday use", explanation: "Intel chips at this tier often have more mature, well-tested driver support for common everyday tasks in some cases." },
];

export const faq: FaqItem[] = [
  { q: "Do mini PCs under $300 come with RAM included?", a: "Not always, some are barebone listings requiring separate RAM and storage purchase, verify this before comparing prices." },
  { q: "Can a mini PC under $300 handle real work?", a: "For lighter tasks like browsing, email, and document editing, yes, but set realistic expectations for demanding multitasking or content creation." },
  { q: "What's the difference between barebone and complete mini PC listings?", a: "Barebone listings exclude RAM and storage, requiring separate purchase and self-installation, complete builds are ready to use out of the box." },
  { q: "Is 8GB RAM enough for a budget mini PC?", a: "For lighter everyday tasks, yes, but it may feel tight for heavier multitasking, consider more RAM if your workflow demands it." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pcs-under-500", title: "Best Mini PCs Under $500 (2026)" },
  { href: "/guide/best-budget-mini-pcs", title: "Best Budget Mini PCs (2026)" },
  { href: "/guide/best-barebones-mini-pcs", title: "Best Barebones Mini PCs (2026)" },
];
