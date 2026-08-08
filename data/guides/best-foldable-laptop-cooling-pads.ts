export const guideSlug = "best-foldable-laptop-cooling-pads";
export const guideTitle = "Best Foldable Laptop Cooling Pads in 2026 (Honest Category Guide)";
export const metaTitle = "Best Foldable Laptop Cooling Pads (2026)";
export const metaDescription =
  "Genuine foldable-hinge laptop cooling pads are rare. Here's the closest verified match and what most portable pads actually offer instead.";
export const mainKeyword = "foldable laptop cooling pads";
export const introParagraphs = [
  "A truly \"foldable\" cooling pad, one with a literal hinge mechanism that folds flat for storage, is a narrower category than the search term suggests. Most products marketed as portable laptop cooling pads use fixed height-adjustment legs, not a genuine folding hinge, and don't collapse into a meaningfully flatter shape.",
  "We checked the real feature lists of every cooling pad in our research pool and found no product that explicitly confirms a genuine folding-hinge mechanism. This guide covers the closest practical alternative, a lightweight portable stand that does fold flat, and is honest that it's a laptop stand rather than a cooling pad with a fan.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-P9I-xIRL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0c7bkz883-foldlcp",
    rank: 1,
    badge: "Closest Genuine Match",
    name: "Gogoonike Adjustable Laptop Stand for Desk, Metal Laptop Riser Holder",
    price: "$14.24",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-P9I-xIRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C7BKZ883?tag=deskfinds0d-20",
    description:
      "This product's own listing explicitly describes a \"foldable design\" that allows it to slip into a backpack, the clearest genuine folding claim in our research pool. It has no fan, cooling comes from elevation and open ventilation holes in the metal surface, not active airflow.\n\nMetal construction supports up to 17.6 lbs, and anti-skid silicone pads protect the laptop. Be clear-eyed that this is a passive, fanless stand with a folding mechanism, not a fan-equipped cooling pad that happens to fold.",
    specs: ["Explicitly foldable design", "Metal riser, no fan", "Supports up to 17.6 lbs", "Ventilated top surface"],
    pros: ["Explicitly and genuinely foldable per its own listing", "Compact for backpack storage when folded", "High weight capacity", "Anti-skid protection"],
    cons: ["No fan, purely passive elevation cooling", "Compatible up to 15.6 inches only", "Cooling benefit is more modest than an active fan pad"],
    bestFor: "Buyers who want a genuinely folding laptop stand and are comfortable with passive, fan-free cooling.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine folding mechanism verification", description: "We checked every product's real feature list for an explicit fold claim, and found only one product genuinely confirming a folding design." },
  { title: "Honest category clarification", description: "We distinguished genuine folding-hinge stands from height-adjustable pads that merely collapse their legs, a meaningfully different mechanism." },
  { title: "Cooling mechanism disclosure", description: "We were explicit that the one genuine match is a passive, fan-free stand, not an active-cooling pad, since buyers searching for a cooling pad may expect a fan." },
  { title: "Realistic expectations", description: "We set honest expectations about the modest cooling benefit of a fanless, elevation-only design compared to an active fan pad." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Understand What 'Foldable' Actually Means Here",
    note: "Most products marketed broadly as portable cooling pads use adjustable stand legs, not a literal folding hinge. Only one product in our research pool explicitly confirms a genuine fold mechanism, and it has no fan.",
  },
  {
    subheading: "If You Specifically Want Active Fan Cooling",
    note: "The genuinely foldable pick in this guide is passive, no fan. If active airflow matters more to you than a literal folding mechanism, see our Best Portable Laptop Cooling Pads guide for fan-equipped options that still travel reasonably well, even without a true fold hinge.",
  },
  {
    subheading: "Folding vs Height-Adjustable Legs",
    cards: [
      { label: "Genuine folding hinge", text: "Collapses into a meaningfully flatter shape for storage, like the Gogoonike pick." },
      { label: "Height-adjustable legs", text: "Common on most cooling pads, adjusts elevation angle but doesn't fold flat into a significantly smaller shape." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify a genuine fold claim, not just adjustable legs", explanation: "Most portable pads use height-adjustable legs rather than a true folding hinge. Check the listing explicitly states foldable before assuming it collapses flat." },
  { criterion: "Understand this specific pick has no fan", explanation: "The one genuinely foldable product in our research pool is a passive metal riser, not an active-cooling fan pad. Set your expectations accordingly." },
  { criterion: "Passive cooling means a more modest benefit", explanation: "Without a fan, cooling comes from elevation and open ventilation alone, expect a smaller temperature improvement than an active fan pad provides." },
  { criterion: "Check weight capacity for your laptop", explanation: "Confirm the stated weight rating covers your laptop's actual weight, especially for larger or heavier models." },
  { criterion: "Consider an active portable pad if fan cooling matters more", explanation: "If active airflow is more important to you than a literal fold mechanism, our Best Portable Laptop Cooling Pads guide covers fan-equipped travel-friendly options." },
];

export const faq: FaqItem[] = [
  { q: "Why does this guide only have one product?", a: "We checked every cooling pad in our research pool for a genuine folding-hinge mechanism and found only one product whose listing explicitly confirms it. We'd rather report that honestly than pad the list with height-adjustable pads mislabeled as foldable." },
  { q: "Does the foldable pick have a fan?", a: "No, it's a passive metal riser that cools through elevation and open ventilation, not active airflow. If you specifically need fan-based cooling, see our portable cooling pads guide instead." },
  { q: "What's the difference between foldable and height-adjustable?", a: "A genuinely foldable product collapses into a meaningfully flatter shape for storage. Height-adjustable legs, common on most cooling pads, only change the elevation angle without folding flat." },
  { q: "Is a foldable stand as good as an active cooling pad?", a: "It provides a more modest cooling benefit since there's no fan. It's a reasonable choice for light use and travel convenience, not for sustained heavy workloads." },
  { q: "Should I search for something else if I want active cooling that also folds?", a: "Based on our research, that combination doesn't currently exist as a clearly labeled product. Choose either a genuine fold mechanism with passive cooling, or an active fan pad from our portable guide without a true fold hinge." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-laptop-cooling-pads", title: "Best Portable Laptop Cooling Pads (2026)" },
  { href: "/guide/best-slim-laptop-cooling-pads", title: "Best Slim Laptop Cooling Pads (2026)" },
  { href: "/guide/best-passive-laptop-cooling-pads", title: "Best Passive Laptop Cooling Pads (2026)" },
];
