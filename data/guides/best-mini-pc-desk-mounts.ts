export const guideSlug = "best-mini-pc-desk-mounts";
export const guideTitle = "5 Best Mini PC Desk Mounts in 2026";
export const metaTitle = "Best Mini PC Desk Mounts (2026)";
export const metaDescription =
  "5 VESA-compatible mini PC mounting brackets compared for device depth range, mounting location flexibility, and price, covering under-desk, behind-monitor, and pole mounting.";
export const mainKeyword = "mini PC desk mount";
export const introParagraphs = [
  "Our original candidate list for this article turned out to reference ASINs that are no longer valid or accessible through Amazon's product API, so we researched the current real product pool from scratch. Every pick below is a genuine, currently listed VESA-compatible mounting bracket.",
  "These mounts use the standard VESA 75x75mm and 100x100mm hole patterns, which is what makes them compatible across brands rather than needing an OEM-specific bracket for each mini PC model.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41nWvL8pqlL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07ky3lhvg-deskmount",
    rank: 1,
    badge: "Best Overall",
    name: "HumanCentric Thin Client Mount Bracket Mini PC VESA Monitor Arm, Under Desk",
    price: "$26.99",
    rating: "4.4",
    reviews: "702",
    imageUrl: "https://m.media-amazon.com/images/I/41nWvL8pqlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KY3LHVG?tag=deskfinds0d-20",
    description: "Fits devices 0.65 to 2.55 inches deep, supports both 75x75 and 100x100mm VESA patterns, and can mount under a desk, to a pole, or on a flat surface — the most flexible mounting options in this comparison with a solid review base.",
    specs: ["Fits 0.65-2.55 in device depth", "75x75 and 100x100mm VESA", "Under-desk, pole, or surface mount", "702 reviews at 4.4 stars"],
    pros: ["Widest device depth range in this comparison", "Multiple mounting location options"],
    cons: ["Higher price than the budget options"],
    bestFor: "Buyers who want the most flexible mounting location options.",
  },
  {
    id: "b0dzbpr859-deskmount",
    rank: 2,
    badge: "Best Value",
    name: "Yimaut Adjustable Mini PC Vesa Mount Bracket Behind Monitor, Under Desk",
    price: "$21.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31L4FiZcVdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZBPR859?tag=deskfinds0d-20",
    description: "Fits equipment 0.63 to 2.8 inches wide, supports up to 12 lbs, and is explicitly compatible with HP, Dell, KAMRUI, Mac Mini, and GMKtec devices, plus routers and cable boxes — a wide brand-compatibility claim worth verifying against your specific device dimensions.",
    specs: ["Fits 0.63-2.8 in device width", "Supports up to 12 lbs", "Compatible with HP, Dell, Mac Mini, GMKtec and more"],
    pros: ["Wide brand compatibility claimed", "Lower price than the top pick"],
    cons: ["No review history available yet to verify real-world reliability"],
    bestFor: "Budget-focused buyers open to a newer listing without extensive review history yet.",
  },
  {
    id: "b0db5rqh7v-deskmount",
    rank: 3,
    badge: "Best Multi-Mount Flexibility",
    name: "Adjustable Thin Client Mini PC Mount Bracket, Mini PC Vesa Mount, Under Desk",
    price: "$19.99",
    rating: "4.4",
    reviews: "40",
    imageUrl: "https://m.media-amazon.com/images/I/41d9ePK-7vL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DB5RQH7V?tag=deskfinds0d-20",
    description: "Supports under-desk, wall, and monitor-arm mounting in one bracket, at a lower price than the HumanCentric pick, with a solid rating despite a smaller review base.",
    specs: ["Under-desk, wall, or monitor-arm mount", "40 reviews at 4.4 stars"],
    pros: ["Multiple mounting locations in one bracket", "Lower price than the top pick"],
    cons: ["Smaller review base than the HumanCentric option"],
    bestFor: "Buyers who want mounting flexibility at a lower price point.",
  },
  {
    id: "b0bx8m9rlf-deskmount",
    rank: 4,
    badge: "Best Freestanding Option",
    name: "VIVO Multifunctional Adjustable Thin Client Mini PC Mount Bracket",
    price: "$14.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41yUqhBzwzL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BR8M9RLF?tag=deskfinds0d-20",
    description: "The cheapest option in this comparison, uniquely able to work as a freestanding desk holder in addition to behind-monitor or monitor-arm mounting, from an established mounting-hardware brand.",
    specs: ["75x75mm and 100x100mm VESA", "Freestanding desk stand option", "Behind-monitor or monitor-arm mounting"],
    pros: ["Cheapest option in this comparison", "Unique freestanding desk-stand capability"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers who want a freestanding option, not just wall or desk-attached mounting.",
  },
  {
    id: "b076n6b6gq-deskmount",
    rank: 5,
    badge: "Best From an Established Hardware Brand",
    name: "StarTech Thin Client Mount, Adjustable .7 to 2.8\", Mac Mini Monitor Mount",
    price: "$32.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41Ohj6NQqpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B076N6B6GQ?tag=deskfinds0d-20",
    description: "From StarTech, a well-established computer-hardware brand, with a wide device depth range and multiple installation options (behind-monitor, pole, or under-desk), at the highest price in this comparison.",
    specs: ["Fits 0.7-2.8 in device depth", "Behind-monitor, pole, or under-desk mount"],
    pros: ["From a well-established computer-hardware brand", "Wide device depth compatibility range"],
    cons: ["Highest price in this comparison", "No review history available yet on this specific listing"],
    bestFor: "Buyers who prioritize a trusted hardware brand over the lowest price.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Re-verified the actual current product pool", description: "Our original candidate ASINs were no longer accessible, so we researched and confirmed real, currently listed products before ranking anything." },
  { title: "Device depth/width compatibility range", description: "We compared each mount's stated compatible device dimensions, since mini PCs vary meaningfully in thickness across brands." },
  { title: "VESA pattern support confirmed", description: "We verified 75x75mm and/or 100x100mm VESA compatibility for each pick, the standard that makes cross-brand mounting possible." },
  { title: "Mounting location flexibility", description: "We noted whether each bracket supports under-desk, behind-monitor, wall, pole, or freestanding placement." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "VESA Compatibility Makes Cross-Brand Mounting Possible",
    note: "These brackets aren't tied to a specific mini PC brand — they work via the standard VESA 75x75mm or 100x100mm hole pattern used across most monitors and many mini PC chassis. Verify your specific device's VESA compatibility and depth before ordering.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Measure your mini PC's depth against the bracket's compatible range", explanation: "Device depth compatibility varies by bracket — check your specific mini PC's dimensions against the stated range before ordering." },
  { criterion: "Confirm VESA pattern compatibility", explanation: "Verify your mini PC or monitor supports 75x75mm or 100x100mm VESA mounting before assuming any bracket will work." },
  { criterion: "Decide on mounting location", explanation: "Under-desk, behind-monitor, wall, pole, and freestanding options each suit different desk setups — pick based on your actual space." },
  { criterion: "Weigh established brand reputation against price", explanation: "StarTech and HumanCentric are more established hardware brands; some cheaper options are newer listings without extensive review history yet." },
  { criterion: "Check weight capacity for heavier mini PCs", explanation: "Verify the stated weight limit against your specific device before mounting, especially for behind-monitor placement." },
];

export const faq: FaqItem[] = [
  { q: "Are these compatible with any mini PC brand?", a: "Generally yes, via the standard VESA 75x75mm or 100x100mm mounting pattern, though verify your specific device's depth and VESA compatibility before ordering." },
  { q: "Which has the most reviews?", a: "The HumanCentric Thin Client Mount Bracket, with 702 reviews at 4.4 stars." },
  { q: "What's the cheapest option?", a: "The VIVO Multifunctional Adjustable Thin Client Mini PC Mount Bracket at $14.99." },
  { q: "Can I mount my mini PC as a freestanding desk unit rather than attached to something?", a: "Yes, the VIVO pick specifically supports freestanding desk placement in addition to mounted options." },
  { q: "Is there an option from an established computer-hardware brand?", a: "Yes, the StarTech Thin Client Mount, from a well-known computer-accessory manufacturer." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pc-mounts-for-tvs", title: "Best Mini PC Mounts for TVs (2026)" },
  { href: "/guide/best-mini-pc-mounts-behind-monitors", title: "Best Mini PC Mounts Behind Monitors (2026)" },
  { href: "/guide/best-mini-pc-mounts", title: "Best Mini PC Mounts (2026)" },
];
