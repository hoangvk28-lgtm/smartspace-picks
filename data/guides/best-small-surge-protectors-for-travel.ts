export const guideSlug = "best-small-surge-protectors-for-travel";
export const guideTitle = "5 Best Small Surge Protectors for Travel in 2026";
export const metaTitle = "Best Small Surge Protectors for Travel, Honestly Reviewed (2026)";
export const metaDescription =
  "5 compact travel surge protectors we evaluated, with the scope limitation competitors skip: a 120V US-market travel surge protector is often only genuinely applicable to domestic travel, not international trips.";
export const mainKeyword = "small surge protector";
export const introParagraphs = [
  "International power infrastructure quality varies significantly, and a traveler most needs reliable surge protection specifically in regions or buildings with less consistent grid power, yet a 120V-only US surge protector provides zero protection value internationally since it can't be safely used on a 230V circuit without a separate voltage converter.",
  "Ultra-compact travel surge protectors are especially likely to cut joule rating to save size and weight, precisely in the use case, unfamiliar electrical infrastructure, where protection arguably matters most.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31ovehM96AL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "spikecube-600j-traveloverall",
    rank: 1,
    badge: "Best Small Surge Protector for Travel Overall",
    name: "Eaton Tripp Lite SPIKECUBE Single Outlet Surge Protector Power Strip, 600 Joule Rating, Diagnostic LEDs, Portable Direct Plug-in Outlet Extender, Lifetime Manufacturer's Guarantee & $5,000 Insurance",
    price: "$15.53",
    rating: "4.7 stars from 6,466 Amazon ratings",
    reviews: "6,466 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ovehM96AL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00006B81E?tag=deskfinds0d-20",
    description:
      "Explicitly compact at just 2.5 inches tall, genuinely designed for suitcase or laptop bag packing, with 600 joules of disclosed surge protection and diagnostic LEDs. Includes lifetime guarantee and $5,000 connected equipment insurance.\n\nThis is a 120V US-market design, it is not a voltage converter, verify voltage compatibility separately before international travel.",
    specs: ["Single outlet, 600 joules", "2.5in tall, portable direct-plug design", "Diagnostic LEDs", "Lifetime guarantee, $5,000 insurance"],
    pros: ["Genuinely compact for suitcase or laptop bag packing", "600 joules with diagnostic LEDs for status visibility", "Lifetime guarantee and connected equipment insurance", "Large, well-established review base"],
    cons: ["120V-only, not usable internationally without a separate converter", "Single outlet only", "400/500/500 clamping voltage not the lowest available"],
    bestFor: "Domestic US travelers who want a compact, well-insured single-outlet surge protector",
  },
  {
    id: "cablematters-1350j-travelalt",
    rank: 2,
    badge: "Best High-Joule Compact Travel Pick",
    name: "[ETL Listed] Cable Matters 1350J Single Outlet Surge Protector, White",
    price: "$9.99",
    rating: "4.7 stars from 2,241 Amazon ratings",
    reviews: "2,241 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e0JpMEJvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09NP7VSNK?tag=deskfinds0d-20",
    description:
      "1350 joules in a genuinely compact single-outlet design, more capacity than the typical ultra-compact travel surge protector without significantly larger size. ETL listed.\n\nThis higher joule rating for its size directly addresses the common tradeoff where compact travel units cut protection to save space.",
    specs: ["Single outlet, 1350 joules", "ETL listed", "Compact design", "Affordable"],
    pros: ["Higher joule rating than typical for this compact size", "ETL listed for verified safety", "Very affordable", "Solid rating base"],
    cons: ["120V-only, not for international use", "Single outlet only", "Smaller review base than the top pick"],
    bestFor: "Buyers who want above-average joule capacity in a genuinely compact travel design",
  },
  {
    id: "cablematters-2pack-travelalt2",
    rank: 3,
    badge: "Best 2-Pack Travel Pick",
    name: "[ETL Listed] Cable Matters 2-Pack 1350J Single Outlet Surge Protector",
    price: "$17.99",
    rating: "4.7 stars from 2,241 Amazon ratings",
    reviews: "2,241 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/314n2Zz2FhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BNW64BPF?tag=deskfinds0d-20",
    description:
      "A 2-pack of the same 1350 joule compact design, genuinely useful if you travel with a companion or want a spare for two separate outlets. ETL listed.\n\nSame domestic-only scope applies to both units, verify voltage compatibility before any international trip.",
    specs: ["2 single-outlet units, 1350 joules each", "ETL listed", "Compact design", "2-pack value"],
    pros: ["2-pack for two separate travel outlet needs", "Higher joule rating than typical for this compact size", "ETL listed", "Good value per unit"],
    cons: ["120V-only, not for international use", "Single outlet per unit", "Same smaller review base as the single-pack"],
    bestFor: "Buyers who travel with a companion or want a backup unit",
  },
  {
    id: "single-4pack-travelbudget",
    rank: 4,
    badge: "Best Budget Multi-Pack Travel Pick",
    name: "Single Surge Protector Plug, Grounded Outlet Wall Tap Adapter with Indicator Light, 1 Outlet,245J/125V, ETL, White, 4Pack",
    price: "$11.69",
    rating: "4.6 stars from 5,166 Amazon ratings",
    reviews: "5,166 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wknFuDByL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Q3DJL3W?tag=deskfinds0d-20",
    description:
      "A genuinely affordable 4-pack for buyers who want multiple compact travel surge protectors, though the 245 joule rating is notably lower than the other picks in this guide. ETL listed with an indicator light.\n\nAt this lower joule rating, this is best for basic electronics rather than valuable devices, consider a higher-joule pick if protecting an expensive laptop specifically.",
    specs: ["1 outlet each, 245J/125V, 4-pack", "ETL listed, indicator light", "Grounded outlet wall tap design", "Most affordable per-unit price"],
    pros: ["4-pack offers the most units for the price", "ETL listed with indicator light", "Very affordable per unit", "Solid rating base"],
    cons: ["Lowest joule rating in this guide, best for basic electronics", "120V-only", "Single outlet per unit"],
    bestFor: "Budget-conscious buyers who want multiple compact units for basic electronics",
  },
  {
    id: "tessan-single-1050j-travelalt3",
    rank: 5,
    badge: "Best Single-Outlet High-Joule Travel Pick",
    name: "TESSAN Single Outlet Wall Surge Protector with 1050J Surge Protector, Grey",
    price: "$9.99",
    rating: "4.7 stars from 208 Amazon ratings",
    reviews: "208 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21sqvh28s1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F1T9R63P?tag=deskfinds0d-20",
    description:
      "1050 joules in a genuinely compact single-outlet design at an affordable price, a solid middle ground between the ultra-budget and premium picks in this guide.\n\nSmaller review base as a newer listing, weigh that against the genuinely strong joule rating for this compact form factor.",
    specs: ["Single outlet, 1050 joules", "Compact wall design", "Affordable", "Solid joule rating for the size"],
    pros: ["1050 joules, solid rating for a compact single-outlet design", "Very affordable", "Compact for travel packing", "Good middle-ground option"],
    cons: ["Smaller review base as a newer product", "120V-only, not for international use", "Single outlet only"],
    bestFor: "Buyers who want a solid joule rating in a compact, affordable single-outlet design",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Domestic-only scope limitation stated clearly for every pick", description: "Explicitly noted that every pick in this guide is a 120V US-market design, not a voltage converter, correcting the assumption that a travel surge protector solves international electrical protection universally." },
  { title: "Joule rating verified against typical compact-travel-unit cost-cutting", description: "Flagged that ultra-compact travel surge protectors are especially likely to cut joule rating to save size and weight, precisely the use case where protection matters most given unfamiliar electrical infrastructure." },
  { title: "MOV physical-shock sensitivity considered for suitcase-packing stress", description: "Noted that a physically stressed MOV component could degrade performance in a less obvious, partial way than a basic power strip's simple conductor, a durability nuance specific to this surge-protection subcategory under travel packing stress." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "A US Travel Surge Protector Is Often Domestic-Only",
    note: "International power infrastructure quality varies significantly, and a traveler most needs reliable surge protection specifically in regions or buildings with less consistent grid power. Yet a 120V-only US surge protector provides zero protection value internationally, since it can't be safely used on a 230V circuit without a separate, non-surge-protected voltage converter, defeating the travel-protection purpose for international trips.",
  },
  {
    subheading: "Two Paths for International Travelers",
    note: "A genuinely useful international travel surge protection strategy typically requires either a separate voltage-converting device with its own (often more limited) surge protection rating, or accepting that a US-market travel surge protector is domestic-travel-only. Don't assume one product category solves both needs universally.",
  },
  {
    subheading: "Compact Doesn't Have to Mean Low Joule Rating",
    note: "Ultra-compact travel surge protectors are especially likely to cut joule rating to save size and weight. Some picks in this guide, like the Cable Matters 1350J option, offer above-average joule capacity for their compact size, seek these out rather than assuming all compact travel units are equally limited.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "A US-market travel surge protector is typically domestic-only", explanation: "A 120V-only surge protector can't be safely used on a 230V circuit abroad, even via a simple plug-shape adapter, without a separate voltage converter, understand this scope limitation before international travel." },
  { criterion: "Compact travel units often cut joule rating precisely where protection matters most", explanation: "Ultra-compact travel surge protectors are especially likely to reduce joule rating to save size and weight, ironically in the exact scenario, unfamiliar electrical infrastructure, where protection matters more." },
  { criterion: "International travelers need a two-path strategy, not one universal product", explanation: "Either use a dedicated voltage-converting device with its own surge protection rating, or accept that a US-market travel surge protector is domestic-only, don't assume one product category solves both." },
  { criterion: "Suitcase-packing stress can subtly degrade MOV components", explanation: "A physically stressed MOV component from repeated packing can degrade performance in a less obvious, partial way than a basic power strip conductor's simple pass/fail durability." },
];

export const faq: FaqItem[] = [
  { q: "Can I use a US travel surge protector internationally?", a: "Generally no, most are 120V-only and not voltage converters, using one on a 230V circuit abroad, even via a simple plug-shape adapter, can damage the unit or your electronics." },
  { q: "Do compact travel surge protectors have weaker protection than full-size ones?", a: "Often yes, ultra-compact designs are especially likely to cut joule rating to save size and weight, though some picks in this guide offer above-average joule capacity for their compact size, worth seeking out specifically." },
  { q: "What should international travelers use for surge protection?", a: "Either a dedicated voltage-converting device with its own surge protection rating, or accept that a US-market travel surge protector is domestic-travel-only, don't assume one product solves both needs." },
  { q: "Does suitcase packing damage a travel surge protector's MOV components?", a: "It can, in a less obvious way than a basic power strip. A physically stressed MOV component from repeated packing and impact can degrade performance partially rather than simply working or not working." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-travel-power-strips", title: "Best Travel Power Strips (2026)" },
  { href: "/guide/best-single-outlet-surge-protectors", title: "Best Single-Outlet Surge Protectors (2026)" },
  { href: "/guide/best-cruise-approved-power-strips", title: "Best Cruise-Approved Power Strips (2026)" },
];
