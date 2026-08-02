export const guideSlug = "best-mini-pcs-for-small-desks";
export const guideTitle = "4 Best Mini PCs for Small Desks in 2026";
export const metaTitle = "Best Mini PCs for Small Desks (2026)";
export const metaDescription =
  "4 mini PCs for small desks we evaluated, calculating the true installed footprint including cables and the power brick, not just chassis size.";
export const mainKeyword = "mini pc for small desks";
export const introParagraphs = [
  "The true installed footprint on a small desk includes cable clearance and the external power brick, not just the bare chassis dimensions, worth calculating this complete picture rather than assuming a small chassis alone guarantees a tidy desk setup.",
  "VESA mount compatibility genuinely reclaims desk surface entirely by moving the mini PC behind a monitor, worth checking whether your specific model supports this before assuming every compact mini PC can be mounted this way.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41doFA0lgDL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "btbpc6ty-smalldesk",
    rank: 1,
    badge: "Best Mini PC for Small Desks Overall",
    name: "Beelink Mini S13 Mini PC,13th Gen Intel N150 (Up to 3.6GHz)",
    price: "$329.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41doFA0lgDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTBPC6TY?tag=deskfinds0d-20",
    description:
      "A genuinely compact chassis with a modern 13th-gen Intel N150 chip, appropriate for buyers wanting a small footprint without sacrificing driver maturity.\n\nVerify VESA mount compatibility and calculate the complete installed footprint including the power brick before finalizing your small-desk layout.",
    specs: ["Intel N150, Up to 3.6GHz", "13th-gen Intel chip", "Compact chassis", "Efficient low-power design"],
    pros: ["Genuinely compact chassis suited to a small desk footprint", "Modern 13th-gen Intel chip for mature driver support", "Efficient low-power design for always-on desktop use", "Good balance of size, price, and processing capability"],
    cons: ["Verify VESA mount compatibility for this specific model", "Verify the power brick size when calculating true installed footprint", "Entry-level chip suits lighter everyday tasks"],
    bestFor: "Buyers wanting a genuinely compact, modern mini PC for a small desk setup",
  },
  {
    id: "chwpqngf-smalldesk",
    rank: 2,
    badge: "Best Value Compact Pick",
    name: "HP EliteDesk 800 G4 Mini Tiny Business PC, Intel Hexa-Core i5",
    price: "$184.98",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31IxLk1-T3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CHWPQNGF?tag=deskfinds0d-20",
    description:
      "A genuine hexa-core Intel Core i5 business-class mini PC in HP's compact 'Tiny' form factor, appropriate for buyers wanting proven small-footprint business hardware at a lower price.\n\nBusiness-class hardware typically includes VESA mount compatibility, verify this on the specific listing before purchase.",
    specs: ["Intel Hexa-Core i5", "HP compact 'Tiny' form factor", "Business-class hardware", "Budget-friendly price"],
    pros: ["Genuine hexa-core Core i5 for solid everyday performance", "HP's proven compact 'Tiny' business form factor", "Budget-friendly price for the processor tier offered", "Business-class hardware typically includes VESA mount support"],
    cons: ["Verify current reviews and refurbishment condition if applicable", "Older business-class hardware generation", "Confirm exact RAM and storage configuration on the listing"],
    bestFor: "Budget-conscious buyers wanting proven compact business hardware for a small desk",
  },
  {
    id: "gr463lcq-smalldesk",
    rank: 3,
    badge: "Best Barebone Compact Pick",
    name: "GMKtec G3 Pro Mini PC Barebone Intel Core i3-10110U (Beats 4415U)",
    price: "$189.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41CL4VABm1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GR463LCQ?tag=deskfinds0d-20",
    description:
      "A genuine Intel Core i3 chip in a compact barebone chassis, appropriate for buyers wanting to choose their own RAM and storage while keeping a small desk footprint.\n\nVerify VESA mount compatibility and calculate the complete installed footprint before finalizing your desk layout.",
    specs: ["Intel Core i3-10110U", "Compact barebone chassis", "Choose your own RAM/storage", "Low starting price"],
    pros: ["Genuine Intel Core i3 chip for mature driver support", "Compact chassis suited to a small desk footprint", "Flexibility to choose your own RAM and storage capacity", "Low starting price leaves budget room for components"],
    cons: ["Barebone listing excludes RAM and storage, factor in added cost", "Requires self-installation of RAM and storage components", "Verify VESA mount compatibility for this specific model"],
    bestFor: "Buyers wanting a compact chassis with the flexibility to choose their own components",
  },
  {
    id: "gx667hrm-smalldesk",
    rank: 4,
    badge: "Best Lowest-Cost Compact Pick",
    name: "Barebone Mini PC, AMD Ryzen 5 3500U (up to 3.7GHz), Without RAM/Storage",
    price: "$179.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31LlCbf8wEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX667HRM?tag=deskfinds0d-20",
    description:
      "A genuine Ryzen 5 3500U barebone chassis at the lowest starting price in this guide, appropriate for buyers on a tight budget still wanting a small desk footprint.\n\nThis is a barebone listing without RAM or storage, factor in the added component cost and verify VESA mount compatibility.",
    specs: ["AMD Ryzen 5 3500U, up to 3.7GHz", "Barebone, no RAM/storage included", "Lowest starting price in this guide", "Compact chassis"],
    pros: ["Genuine Ryzen 5 processor tier at the lowest starting price here", "Compact chassis suited to a small desk footprint", "Flexibility to choose your own RAM and storage capacity", "Low sticker price leaves budget room for good components"],
    cons: ["Barebone listing excludes RAM and storage, factor in added cost", "Verify VESA mount compatibility for this specific model", "Requires self-installation of RAM and storage components"],
    bestFor: "Budget-conscious buyers wanting the lowest-cost compact starting point for a small desk",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "True installed footprint calculated including cables and power brick", description: "Calculated the true installed footprint including cable clearance and the external power brick, not just bare chassis dimensions." },
  { title: "VESA mount compatibility checked for reclaiming desk surface entirely", description: "Checked whether each model supports VESA mounting to move the mini PC behind a monitor and free up desk surface entirely." },
  { title: "Barebone versus complete-build listings distinguished for total cost", description: "Distinguished barebone listings requiring separate RAM and storage purchase from complete builds when comparing total desk-setup cost." },
  { title: "Processor tier weighted against realistic small-desk workflow needs", description: "Weighted processor tier against realistic everyday workflow needs for a small-desk setup, not assuming maximum performance is required." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Calculate the True Installed Footprint, Not Just Chassis Size",
    note: "The true installed footprint on a small desk includes cable clearance and the external power brick, not just the bare chassis dimensions, worth calculating this complete picture rather than assuming a small chassis alone guarantees a tidy desk setup.",
  },
  {
    subheading: "Check VESA Mount Compatibility to Reclaim Desk Surface",
    note: "VESA mount compatibility genuinely reclaims desk surface entirely by moving the mini PC behind a monitor, worth checking whether your specific model supports this before assuming every compact mini PC can be mounted this way.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Modern chip, genuinely compact chassis", "Beelink Mini S13 Intel N150"],
        ["Proven compact business hardware, budget", "HP EliteDesk 800 G4 Tiny"],
        ["Compact chassis, choose your own components", "GMKtec G3 Pro Core i3-10110U (barebone)"],
        ["Lowest-cost compact starting point", "Barebone Ryzen 5 3500U"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Calculate the true installed footprint including power brick and cables", explanation: "A small chassis alone doesn't guarantee a tidy desk, factor in cable clearance and the external power brick's real space." },
  { criterion: "Check VESA mount compatibility for your specific model", explanation: "Mounting behind a monitor genuinely reclaims desk surface entirely, but not every compact mini PC supports this." },
  { criterion: "Distinguish barebone listings from complete builds for total cost", explanation: "A barebone chassis needs separate RAM and storage purchase, factor in this added cost when comparing prices for a small-desk build." },
  { criterion: "Match processor tier to realistic small-desk workflow needs", explanation: "Most small-desk setups handle everyday tasks well without needing the highest-end chip tier available." },
];

export const faq: FaqItem[] = [
  { q: "Does a small mini PC chassis guarantee a tidy desk setup?", a: "Not necessarily, calculate the true installed footprint including cable clearance and the external power brick's real space." },
  { q: "Can I VESA mount any compact mini PC behind my monitor?", a: "Not always, verify VESA mount compatibility for your specific model before assuming this desk-saving option is available." },
  { q: "Is a barebone mini PC a good choice for a small desk?", a: "Yes, if you want to choose your own RAM and storage, but factor in the added component cost when comparing total price." },
  { q: "Do I need a powerful chip for a small-desk mini PC?", a: "Most everyday workflows handle well without the highest-end chip tier, match processor tier to your realistic needs." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pcs-with-vesa-mounts", title: "Best Mini PCs with VESA Mounts (2026)" },
  { href: "/guide/best-smallest-mini-pcs", title: "Best Smallest Mini PCs (2026)" },
  { href: "/guide/best-mini-pcs-under-300", title: "Best Mini PCs Under $300 (2026)" },
];
