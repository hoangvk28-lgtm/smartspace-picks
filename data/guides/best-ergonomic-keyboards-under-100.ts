export const guideSlug = "best-ergonomic-keyboards-under-100";
export const guideTitle = "8 Best Ergonomic Keyboards Under $100 in 2026";
export const metaTitle = "Best Ergonomic Keyboards Under $100";
export const metaDescription =
  "8 ergonomic keyboards genuinely under $100 we evaluated, verifying every listed price and setting modest, realistic expectations for first-time buyers.";
export const mainKeyword = "ergonomic keyboard under 100";
export const introParagraphs = [
  "Every product in this guide is verified at a price genuinely under $100 based on current listing data at the time of writing, keyboard pricing shifts often enough that we recommend double-checking the live price before purchase rather than assuming it holds indefinitely. This price ceiling carries forward the same design-tier questions covered in our budget ergonomic keyboard research, some of these picks deliver genuine split layouts, useful to verify against a one-piece design marketed as ergonomic at a similar price.",
  "First-time buyers should set modest, realistic expectations here, a genuine split or column-stagger layout usually comes with a temporary typing-speed dip during the first one to two weeks of adjustment, a normal part of the transition rather than a sign of a bad purchase, and warranty length is worth checking directly on the current listing since it varies at this price tier.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "perixx-periboard-512b-under100",
    rank: 1,
    badge: "Best Overall Pick Under $100",
    name: "Perixx PERIBOARD-512B Wired Ergonomic Keyboard - Split Keyboard with Wrist Rest",
    price: "$44.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "9,553 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B075GZVD4T?tag=deskfinds0d-20",
    description:
      "Verified at $44.99, well under the $100 ceiling, this genuinely split, fixed-angle keyboard carries the largest verified review base among the picks in this guide. Expect a normal one-to-two-week adjustment period if you're new to split layouts, a real transition rather than a product flaw.\n\nIts wired connection removes battery management from the equation, and build materials reflect this accessible price point, basic but functional for a first ergonomic keyboard purchase.",
    specs: ["Verified price $44.99, well under $100", "Genuine split, fixed-angle layout", "Padded wrist rest included", "Largest verified review base of any pick here"],
    pros: ["Verified genuinely under $100", "Largest verified review base in this guide", "Genuine split design, not a one-piece shape", "No battery to manage"],
    cons: ["Basic build materials at this price", "Fixed split angle, not tenting-adjustable", "Check current listing for specific warranty length"],
    bestFor: "First-time buyers wanting a verified genuine split keyboard well under $100",
  },
  {
    id: "logitech-wave-keys-graphite-under100",
    rank: 2,
    badge: "Best Low-Commitment Pick Under $100",
    name: "Logitech Wave Keys Wireless Ergonomic Keyboard - Graphite",
    price: "$59.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "2,972 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTNY72VD?tag=deskfinds0d-20",
    description:
      "Verified at $59.99, a one-piece wave-shaped keyboard offering a gentler introduction to ergonomic typing than a fully split design, with a much shorter adjustment period as a result. Its wireless connection and solid review base make it a reasonable low-commitment first purchase under $100.\n\nAs a one-piece design, its ergonomic benefit is more modest than a true split, worth knowing this tradeoff going in rather than expecting split-level benefit at this design tier.",
    specs: ["Verified price $59.99, under $100", "One-piece wave-shaped frame", "Cushioned attached palm rest", "Minimal adjustment period"],
    pros: ["Verified genuinely under $100", "Minimal adjustment period versus a true split", "Solid review base", "Reliable multi-device wireless"],
    cons: ["Less ergonomic benefit than a true split design", "Cannot be positioned shoulder-width apart", "Check current listing for specific warranty length"],
    bestFor: "First-time buyers wanting a gentle, low-commitment introduction to ergonomic typing under $100",
  },
  {
    id: "arteck-split-2-4g-under100",
    rank: 3,
    badge: "Best Wireless Split Pick Under $100",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, 2.4G USB Wireless",
    price: "$54.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "1,624 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKKYRQ31?tag=deskfinds0d-20",
    description:
      "Verified at $54.99, a genuinely split, angled keyboard connecting over a stable 2.4G receiver, well under the $100 ceiling. Its built-in cushioned palm rest is included at no extra cost, and its genuine split layout means expecting a real adjustment period rather than the shorter one-piece transition.\n\nAs with any true split keyboard, its fixed split angle offers less tenting adjustability than premium options above the $100 mark.",
    specs: ["Verified price $54.99, under $100", "Genuine split, angled layout", "Built-in cushioned palm rest", "2.4G USB wireless receiver"],
    pros: ["Verified genuinely under $100", "Genuine split design with wireless convenience", "Built-in palm rest, no extra purchase", "Stable 2.4G connection"],
    cons: ["Fixed split angle, not tenting-adjustable", "Genuine adjustment period expected for new split users", "Check current listing for specific warranty length"],
    bestFor: "Buyers wanting a verified genuine split, wireless keyboard under $100",
  },
  {
    id: "arteck-split-wired-backlit-under100",
    rank: 4,
    badge: "Best Backlit Pick Under $100",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, USB Wired Backlit Keyboard",
    price: "$53.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "1,166 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51mIgAEAexL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGL8X4H6?tag=deskfinds0d-20",
    description:
      "Verified at $53.99, a genuinely split, backlit keyboard well under $100, its wired connection removes any backlight battery-life tradeoff entirely. Its built-in cushioned palm rest is included at this price, no separate purchase required.\n\nAs a genuine split design, expect the same one-to-two-week adjustment period as other true split picks in this guide, a normal transition rather than a flaw.",
    specs: ["Verified price $53.99, under $100", "Genuine split, angled layout", "Backlit keys, wired power", "Built-in cushioned palm rest"],
    pros: ["Verified genuinely under $100", "Genuine split design with backlighting included", "No backlight battery-life tradeoff since it's wired", "Built-in palm rest, no extra purchase"],
    cons: ["Genuine adjustment period expected for new split users", "Fixed split angle, not tenting-adjustable", "Check current listing for specific warranty length"],
    bestFor: "Buyers wanting backlit keys alongside a verified genuine split design under $100",
  },
  {
    id: "protoarc-ekm01-plus-under100",
    rank: 5,
    badge: "Best Combo Pick Under $100",
    name: "ProtoArc EKM01 Plus Wireless Ergonomic Keyboard Mouse Combo, Gray Black",
    price: "$76.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "872 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31nNQhQDCpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZ6DR13F?tag=deskfinds0d-20",
    description:
      "Verified at $76.99, a matched wireless ergonomic keyboard and mouse combo, the highest price in this guide but still comfortably under the $100 ceiling for both devices together. Solid verified review base for a combo product at this price point.\n\nVerify the current listing for single-dongle versus dual-dongle wireless architecture, and check specific warranty terms for both devices before purchase.",
    specs: ["Verified price $76.99, under $100 for keyboard and mouse together", "Wireless ergonomic keyboard and mouse combo", "Solid verified review base", "Matched ergonomic design"],
    pros: ["Verified genuinely under $100 for both devices", "Matched keyboard and mouse in one purchase", "Solid review base", "Ergonomic design across both peripherals"],
    cons: ["Highest price in this guide, though still under $100", "Verify single vs dual dongle architecture on current listing", "Check current listing for specific warranty terms"],
    bestFor: "Buyers wanting a matched keyboard and mouse combo while staying under a $100 total budget",
  },
  {
    id: "x9-wired-ergonomic-under100",
    rank: 6,
    badge: "Best Lowest-Price One-Piece Pick Under $100",
    name: "X9 Wired Ergonomic Keyboard - Comfortable Typing, Ergonomic Full Size",
    price: "$29.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "1,141 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41LVGOn5JLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08G1WNS6F?tag=deskfinds0d-20",
    description:
      "Verified at $29.99, one of the lowest prices in this guide, a one-piece curved keyboard rather than a genuine split design, worth being direct about that tradeoff at this price. Its high rating relative to price is a reasonable signal for a low-risk first purchase.\n\nIts wired connection removes battery management from the equation, and as with any one-piece design under $100, expect a shorter adjustment period than the genuine split picks above, at the cost of less ergonomic benefit.",
    specs: ["Verified price $29.99, well under $100", "One-piece curved ergonomic frame", "Wired USB connection", "Full-size layout"],
    pros: ["Verified genuinely under $100, one of the lowest prices here", "High rating relative to price", "No battery to manage", "Minimal adjustment period versus a true split"],
    cons: ["One-piece shape, not a true split design", "Basic build materials at this price", "Check current listing for specific warranty length"],
    bestFor: "First-time buyers wanting the lowest-cost entry point under $100",
  },
  {
    id: "reccazr-wired-under100",
    rank: 7,
    badge: "Best Pick with Included Wrist Rest Under $100",
    name: "RECCAZR Ergonomic Keyboard, Wired Computer USB Keyboard with Wrist Rest",
    price: "$29.98",
    rating: "4.3 stars from Amazon ratings",
    reviews: "280 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419u8a5c96L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DMDJB6G2?tag=deskfinds0d-20",
    description:
      "Verified at $29.98, nearly identical in price to the X9 pick above but with an attached wrist rest included, a small added value at this price point. As with the X9, this is a one-piece design rather than genuine split, verify your ergonomic expectations against what this price tier actually delivers.\n\nIts smaller verified review base than the split picks in this guide means less long-term reliability data, worth checking current buyer feedback for durability signals.",
    specs: ["Verified price $29.98, well under $100", "Attached wrist rest", "Wired USB connection", "Curved ergonomic layout"],
    pros: ["Verified genuinely under $100", "Attached wrist rest included at a low price", "No battery to manage", "Simple plug-and-play setup"],
    cons: ["One-piece shape, not a true split design", "Smaller verified review base than other picks here", "Check current listing for specific warranty length"],
    bestFor: "Budget buyers under $100 who want an included wrist rest without paying more for one",
  },
  {
    id: "wired-rgb-gaming-membrane-under100",
    rank: 8,
    badge: "Best Lowest Overall Price Under $100",
    name: "Wired RGB Gaming Membrane Keyboard, 100 Percent Mini Creamy LED",
    price: "$22.90",
    rating: "4.6 stars from Amazon ratings",
    reviews: "53 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41yeJ-XPp7L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F66LFC8Q?tag=deskfinds0d-20",
    description:
      "Verified at $22.90, the single lowest price in this entire guide, a compact wired keyboard with RGB backlighting rather than a curved or split ergonomic frame. Buyers specifically seeking wrist-angle relief should treat this as a budget compact option rather than a true ergonomic pick, and compare it against the genuinely split picks above if ergonomic benefit is the priority.\n\nIts high rating relative to price and compact footprint make it a reasonable secondary keyboard for a tight desk, though it lacks the split or curved design that defines most other picks in this guide.",
    specs: ["Verified price $22.90, lowest in this guide", "Compact mini layout", "RGB backlighting", "Wired USB connection"],
    pros: ["Verified genuinely under $100, lowest price in this guide", "Compact footprint for tight desks", "High rating relative to price", "No battery to manage"],
    cons: ["Flat layout, not curved or split for ergonomic relief", "Smaller verified review base than top picks here", "Limited value for genuine wrist-angle relief"],
    bestFor: "Budget buyers under $100 who want the lowest possible price and don't need a split or curved frame",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Every price independently verified under $100", description: "Checked each product's actual verified price against the $100 ceiling before inclusion, rather than assuming a product fits based on category or brand reputation." },
  { title: "Design tier scrutiny carried forward from budget research", description: "Applied the same design-tier verification from our budget keyboard research, checking whether genuine split or one-piece design applies at this specific price ceiling." },
  { title: "Durability and warranty expectations for this price tier", description: "Set modest, appropriately calibrated durability and warranty expectations, carrying forward the same tier-level caution as our budget keyboard guide." },
  { title: "First-time buyer adaptation-period disclosure", description: "Disclosed the realistic typing-speed adjustment period new split-layout users can expect, setting honest expectations for a first ergonomic keyboard purchase." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Prices Verified at Time of Writing, Always Double-Check",
    note: "Keyboard pricing shifts often enough that we recommend confirming the live price on the current listing before purchase, rather than assuming the prices verified here hold indefinitely.",
  },
  {
    subheading: "Genuine Split Options Do Exist Under $100",
    note: "Unlike some price ceilings where variety is limited, several genuinely split, tented options are verified under $100 in this guide, alongside one-piece designs. Decide which design tier matters more to you rather than assuming this price point is dominated by only one-piece keyboards.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most reviewed genuine split option under $100", "Perixx PERIBOARD-512B"],
        ["Gentlest adjustment period under $100", "Logitech Wave Keys Graphite"],
        ["Genuine split, wireless under $100", "Arteck Split Ergonomic 2.4G"],
        ["Genuine split with backlighting under $100", "Arteck Split Wired Backlit"],
        ["Matched combo under $100 total", "ProtoArc EKM01 Plus Combo"],
        ["Lowest-price one-piece option", "X9 Wired Ergonomic Keyboard"],
        ["Included wrist rest at a low price", "RECCAZR Wired Wrist Rest"],
        ["Absolute lowest price in this guide", "Wired RGB Gaming Membrane Mini"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Always double-check the live price before buying", explanation: "Keyboard pricing shifts often, the prices verified in this guide were accurate at time of writing but should be confirmed on the current listing." },
  { criterion: "Verify whether a genuine split design exists at this price", explanation: "Several picks in this guide are genuinely split under $100, don't assume this price ceiling is dominated only by one-piece designs." },
  { criterion: "Set modest durability expectations at this price tier", explanation: "Build quality under sustained daily use is more likely compromised than a premium option, check recent buyer feedback for durability signals." },
  { criterion: "Expect a genuine adjustment period on split layouts", explanation: "Typing speed commonly dips for one to two weeks after switching to a genuine split layout, a normal transition rather than a sign of a bad purchase." },
  { criterion: "Check warranty length directly on the current listing", explanation: "Warranty terms vary meaningfully at this price tier, verify the specific listing rather than assuming a standard warranty length across all under-$100 options." },
];

export const faq: FaqItem[] = [
  { q: "Are these prices guaranteed to stay under $100?", a: "They were verified under $100 at time of writing, but keyboard pricing shifts often, always double-check the live price on the current listing before purchase." },
  { q: "Can I find a genuine split ergonomic keyboard under $100?", a: "Yes, several picks in this guide are genuinely split under $100, though one-piece wave-style designs are also common at this price ceiling." },
  { q: "Is build quality worse for keyboards under $100?", a: "Often somewhat, yes, set modest durability expectations and check recent buyer feedback, though several picks here still carry large, reassuring verified review bases." },
  { q: "How long does it take to adjust to a split keyboard under $100?", a: "Typically one to two weeks for typing speed to return to normal, a standard transition period regardless of price point, not a sign of a bad purchase." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-budget-ergonomic-keyboards", title: "Best Budget Ergonomic Keyboards (2026)" },
  { href: "/guide/best-wired-ergonomic-keyboards", title: "Best Wired Ergonomic Keyboards (2026)" },
  { href: "/guide/best-wireless-ergonomic-keyboard-and-mouse-combos", title: "Best Wireless Ergonomic Keyboard and Mouse Combos (2026)" },
];
