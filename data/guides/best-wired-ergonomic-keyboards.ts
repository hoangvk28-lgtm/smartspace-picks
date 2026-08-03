export const guideSlug = "best-wired-ergonomic-keyboards";
export const guideTitle = "4 Best Wired Ergonomic Keyboards in 2026";
export const metaTitle = "Best Wired Ergonomic Keyboards (2026)";
export const metaDescription =
  "4 wired ergonomic keyboards we evaluated for cable management, inter-half cable flexibility, and build quality, with honest notes on desk setup constraints.";
export const mainKeyword = "wired ergonomic keyboard";
export const introParagraphs = [
  "A wired ergonomic keyboard removes battery anxiety entirely, but on a genuinely split design the cable connecting the two halves is often a fixed, non-standard length, which limits how far apart you can actually place them, a real flexibility constraint that rarely shows up in product photos. Worth checking cable exit direction too, since a rear-exiting cable tucks away more cleanly on most desks than one exiting from the side.",
  "We also looked at whether any listed USB pass-through hub port actually delivers full-speed data rather than just charging power, since that distinction matters if you plan to plug a mouse or flash drive directly into the keyboard rather than the computer.",
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
    id: "perixx-periboard-512b-wired",
    rank: 1,
    badge: "Best Overall Wired Pick",
    name: "Perixx PERIBOARD-512B Wired Ergonomic Keyboard - Split Keyboard with Wrist Rest",
    price: "$44.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "9,553 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B075GZVD4T?tag=deskfinds0d-20",
    description:
      "A genuinely split, fixed-angle keyboard with a padded wrist rest, plugging in over a single USB cable with no battery to manage. It carries the largest verified review base in this guide, a strong signal for wired reliability across many desks.\n\nAs with any split wired keyboard, verify the current listing for the exact cable length between the halves and the main USB cable exit direction before assuming it will fit a specific desk layout.",
    specs: ["Wired USB connection", "Fixed-angle split layout", "Padded wrist rest included", "Largest verified review base here"],
    pros: ["No battery to charge or replace", "Largest review base of any wired pick", "Included padded wrist rest", "Simple plug-and-play setup"],
    cons: ["Fixed split angle, not tenting-adjustable", "Verify inter-half cable length before buying", "Basic build materials at this price"],
    bestFor: "Buyers who want the most reviewed budget wired split keyboard on the market",
  },
  {
    id: "x9-wired-ergonomic",
    rank: 2,
    badge: "Best Budget One-Piece Wired Pick",
    name: "X9 Wired Ergonomic Keyboard - Comfortable Typing, Ergonomic Full Size",
    price: "$29.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "1,141 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41LVGOn5JLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08G1WNS6F?tag=deskfinds0d-20",
    description:
      "A one-piece curved keyboard at a low price point, plugging in over a single standard USB cable. As a one-piece design it avoids the inter-half cable question entirely, since there's only one cable to manage on the desk.\n\nBuild quality at this price reflects the lower cost, so verify the current listing's cable exit direction and length if desk space is tight before purchase.",
    specs: ["Wired USB connection", "One-piece curved ergonomic frame", "Full-size layout", "Budget price point"],
    pros: ["No inter-half cable to manage", "Lowest price in this guide", "High rating relative to price", "Standard single USB cable"],
    cons: ["Less ergonomic benefit than a true split design", "Basic build materials", "No wrist rest included"],
    bestFor: "Budget-conscious buyers who want a single simple USB cable with no split-cable complexity",
  },
  {
    id: "arteck-split-wired-backlit",
    rank: 3,
    badge: "Best Backlit Wired Split Pick",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, USB Wired Backlit Keyboard",
    price: "$53.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "1,166 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51mIgAEAexL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGL8X4H6?tag=deskfinds0d-20",
    description:
      "A split, backlit keyboard connecting over USB, combining the wired reliability of this guide's other picks with illuminated keys. It ships with a built-in cushioned palm rest, avoiding a separate accessory purchase.\n\nBacklit models draw power directly from the USB port rather than a battery, so there's no battery-life tradeoff to weigh, though verify the current listing for the fixed cable length between the halves before assuming a specific desk fit.",
    specs: ["Wired USB connection", "Split, angled key layout", "Backlit keys", "Built-in cushioned palm rest"],
    pros: ["Backlighting with no battery-life tradeoff since it's wired", "Built-in palm rest", "True split, angled layout", "Solid review base"],
    cons: ["Verify inter-half cable length on current listing", "Fixed split angle, not tenting-adjustable", "Backlighting has limited value for touch typists"],
    bestFor: "Buyers who want backlit keys without any wireless battery-life tradeoff",
  },
  {
    id: "cloud-nine-c989m-mechanical-wired",
    rank: 4,
    badge: "Best Premium Wired Mechanical Pick",
    name: "Cloud Nine C989M Ergonomic Mechanical Keyboard for PC, Kailh Tactile Switches",
    price: "$199.00",
    rating: "4.3 stars from Amazon ratings",
    reviews: "675 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51J8PEUgcWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084BP8T18?tag=deskfinds0d-20",
    description:
      "A premium mechanical ergonomic keyboard using Kailh tactile switches, wired for a consistent, low-latency connection appropriate for buyers who want mechanical feel alongside an ergonomic layout. Wired mechanical keyboards avoid any Bluetooth or 2.4G connection variability entirely.\n\nAt this price point verify the current listing's cable management options and whether the cable exits from the rear or side, since a mechanical board's added desk footprint makes cable routing more noticeable.",
    specs: ["Wired USB connection", "Kailh tactile mechanical switches", "Ergonomic curved layout", "Premium build"],
    pros: ["Wired mechanical feel with no connection lag", "Kailh tactile switches for tactile feedback", "Solid review base for a premium product", "Consistent, low-latency wired connection"],
    cons: ["Highest price in this guide", "Verify cable exit direction and length before buying", "Larger desk footprint than a compact wired keyboard"],
    bestFor: "Buyers who want a wired mechanical ergonomic keyboard with no wireless variability",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Inter-half cable flexibility on split designs", description: "Noted that a fixed, non-standard inter-half cable limits how far apart the two halves can be placed, a real constraint on desk layout." },
  { title: "Cable exit direction and desk cable management", description: "Considered whether the main USB cable exits from the rear or side, since rear-exiting cables tend to tuck away more cleanly." },
  { title: "USB pass-through port speed where disclosed", description: "Verified whether any pass-through hub port on a keyboard actually carries full-speed data versus charging power alone, rather than assuming full speed by default." },
  { title: "Build quality and review consistency", description: "Weighed verified buyer feedback on build quality and long-term reliability across each wired keyboard's review history." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Check the Inter-Half Cable Before You Buy",
    note: "On a genuinely split wired keyboard, the cable connecting the two halves is often a fixed, proprietary length. Verify the current listing for that length and for whether a replacement cable is available if it wears out, since this is a real long-term ownership constraint rarely mentioned upfront.",
  },
  {
    subheading: "One-Piece vs. Split for Simpler Cable Management",
    note: "A one-piece wired keyboard only has a single standard USB cable to manage, while a split wired keyboard adds a second inter-half cable to route around your desk. If desk cable clutter is a concern, weigh that tradeoff against the split's larger ergonomic benefit.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most reviewed budget split option", "Perixx PERIBOARD-512B"],
        ["Simplest single-cable setup", "X9 Wired Ergonomic Keyboard"],
        ["Backlit split with no battery tradeoff", "Arteck Split Wired Backlit"],
        ["Premium mechanical feel, wired", "Cloud Nine C989M Mechanical"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify the inter-half cable length on split models", explanation: "A fixed, proprietary cable between the two halves limits how far apart you can position them, check the current listing rather than assuming standard length." },
  { criterion: "Check cable exit direction", explanation: "A rear-exiting cable tends to tuck away more cleanly than a side-exiting one on most desk layouts, a small but real detail for cable management." },
  { criterion: "Don't assume a pass-through USB port is full-speed", explanation: "If a keyboard lists a USB pass-through port, verify it carries full data speed rather than charging power alone before relying on it for a mouse or flash drive." },
  { criterion: "Weigh replacement-cable availability for long-term ownership", explanation: "A proprietary inter-half or main cable that wears out can be difficult to replace, check if the manufacturer sells spares before buying." },
];

export const faq: FaqItem[] = [
  { q: "Can I position a split wired keyboard's halves far apart?", a: "It depends on the inter-half cable length, which is often fixed and proprietary, check the current listing before assuming you can position the halves shoulder-width or further apart." },
  { q: "Does a wired ergonomic keyboard need any cable management?", a: "Yes, especially a split model with both a main USB cable and an inter-half cable, worth planning cable routing before you buy if your desk setup is tight." },
  { q: "Are USB pass-through ports on ergonomic keyboards full-speed?", a: "Not always, verify the specific listing since some pass-through ports only carry charging power rather than full data speed." },
  { q: "Is a wired keyboard more reliable than wireless for typing speed?", a: "Wired connections avoid any Bluetooth or 2.4G latency variability, which can matter for very fast touch typists, though most casual typists won't notice a difference." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wireless-ergonomic-keyboards", title: "Best Wireless Ergonomic Keyboards (2026)" },
  { href: "/guide/best-mechanical-ergonomic-keyboards", title: "Best Mechanical Ergonomic Keyboards (2026)" },
  { href: "/guide/best-budget-ergonomic-keyboards", title: "Best Budget Ergonomic Keyboards (2026)" },
];
