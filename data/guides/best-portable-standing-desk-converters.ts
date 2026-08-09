export const guideSlug = "best-portable-standing-desk-converters";
export const guideTitle = "5 Best Portable Standing Desk Converters in 2026";
export const metaTitle = "Best Portable Standing Desk Converters (2026)";
export const metaDescription =
  "5 lightweight standing desk converters compared on carry weight and setup effort, for buyers who genuinely need to move the converter regularly.";
export const mainKeyword = "portable standing desk converter";
export const introParagraphs = [
  "\"Portable\" only means something if weight and setup effort are treated as real thresholds. A 30-pound converter that can technically be lifted isn't genuinely portable in daily practice, so we prioritized the lightest, simplest designs.",
  "We compared confirmed weight where available and flagged single-top designs, which are generally easier to carry than dual-tier converters with a separate keyboard mechanism.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/411ZEuCs0FL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07sd7yh8t-portable",
    rank: 1,
    badge: "Best Overall",
    name: "VIVO Black Small Single Top 28 inch Standing Desk Converter, Tabletop",
    price: "$69.99",
    rating: "4.5",
    reviews: "987",
    imageUrl: "https://m.media-amazon.com/images/I/411ZEuCs0FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07SD7YH8T?tag=deskfinds0d-20",
    description: "A single-top tabletop design at a low price with a solid review base, generally easier to carry between rooms than a dual-tier converter.\n\nA single-top structure has fewer moving parts and a lighter overall build than models with a separate keyboard tray mechanism.",
    specs: ["28 inch platform, single-top tabletop design"],
    pros: ["Single-top design is lighter and simpler to carry", "Solid review base at a low price"],
    cons: ["No separate keyboard tier"],
    bestFor: "Buyers who want the most proven lightweight single-top converter.",
  },
  {
    id: "b07k8wz19k-portable",
    rank: 2,
    badge: "Best Value Portable Option",
    name: "VIVO Black 29 in Single Top Standing Desk Converter, DESK-V000U",
    price: "$99.99",
    rating: "4.5",
    reviews: "632",
    imageUrl: "https://m.media-amazon.com/images/I/41Br1CxfavL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07K8WZ19K?tag=deskfinds0d-20",
    description: "A slightly larger single-top platform than the top pick, at a higher price, still lighter and simpler than dual-tier converters.\n\nA reasonable alternative if you want slightly more platform space while still prioritizing portability.",
    specs: ["29 inch platform, single-top design"],
    pros: ["Single-top design remains lighter than dual-tier alternatives"],
    cons: ["Higher price than the smaller single-top pick"],
    bestFor: "Buyers who want slightly more platform space in a still-portable single-top design.",
  },
  {
    id: "b08gkxxt22-portable",
    rank: 3,
    badge: "Best Ultra-Slim Design",
    name: "VIVO Ultra-Slim Single Top Height Adjustable Standing Desk Riser, Compact",
    price: "$99.99",
    rating: "4.5",
    reviews: "1,243",
    imageUrl: "https://m.media-amazon.com/images/I/412VP8wOKyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08GKXXT22?tag=deskfinds0d-20",
    description: "Explicitly marketed as ultra-slim with a larger review base than the standard single-top options, a genuinely low-profile design that's easier to slide into a bag or against a wall for storage.\n\nA slim profile makes this easier to store or transport than a bulkier converter, even at a similar weight class.",
    specs: ["Ultra-slim single-top compact design"],
    pros: ["Larger review base than other single-top compact options", "Genuinely low-profile design for easier storage"],
    cons: ["Slim design means limited platform depth"],
    bestFor: "Buyers who specifically want a low-profile design that's easy to store or transport.",
  },
  {
    id: "b0d1c9lbn5-portable",
    rank: 4,
    badge: "Best Ultra-Compact, Lightest",
    name: "Aconcept Extra-Slim 24 x 14 inch Black Lift Standing Desk Converter, Manual",
    price: "$49.99",
    rating: "4.1",
    reviews: "64",
    imageUrl: "https://m.media-amazon.com/images/I/418VudppzfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1C9LBN5?tag=deskfinds0d-20",
    description: "The smallest platform in this comparison at 24 by 14 inches, likely the lightest option here given its minimal size, at the lowest price.\n\nA smaller review base and lower rating than the VIVO options, but the smallest and cheapest genuinely portable design.",
    specs: ["24 x 14 inch platform, manual lift"],
    pros: ["Smallest platform, likely the lightest option here", "Lowest price in this comparison"],
    cons: ["Smaller review base and lower rating than the VIVO options"],
    bestFor: "Budget-focused buyers who want the smallest, lightest, cheapest option.",
  },
  {
    id: "b0f4fn3snt-portable",
    rank: 5,
    badge: "Best Simple Keyboard Riser",
    name: "Standing Desk Converter, Adjustable Height Keyboard Riser for Stand Up Desk",
    price: "$59.99",
    rating: "4.2",
    reviews: "109",
    imageUrl: "https://m.media-amazon.com/images/I/41azPSHnDnL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4FN3SNT?tag=deskfinds0d-20",
    description: "A simple keyboard riser design, likely one of the lightest options here given its minimal construction, at a reasonable low price.\n\nA smaller review base than the more established VIVO options, but a genuinely simple, minimal-weight design.",
    specs: ["Adjustable height keyboard riser, simple design"],
    pros: ["Minimal, simple construction likely means lighter weight"],
    cons: ["Smaller review base than established VIVO options"],
    bestFor: "Buyers who want the simplest, most minimal portable design.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Prioritized single-top designs over dual-tier converters", description: "Single-top converters generally have fewer moving parts and lighter overall construction than dual-tier designs with a separate keyboard mechanism, making them genuinely easier to carry." },
  { title: "Compared platform size as a proxy for weight where exact weight wasn't confirmed", description: "Smaller platforms generally correlate with lighter overall weight; we used this as a reasonable indicator alongside confirmed specs where available." },
  { title: "Flagged slim, low-profile designs as genuinely easier to store and transport", description: "We noted where a product is explicitly marketed as ultra-slim, a real factor in ease of storage beyond weight alone." },
  { title: "Weighed review volume against the smallest, cheapest options", description: "The smallest and cheapest picks here have smaller review bases than VIVO's more established single-top line; we disclosed this tradeoff directly." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By What Matters Most",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most proven portable option", "VIVO Black Small Single Top 28 inch Standing Desk Converter"],
        ["Low-profile for storage", "VIVO Ultra-Slim Single Top Standing Desk Riser"],
        ["Smallest, lightest, cheapest", "Aconcept Extra-Slim 24 x 14 inch Standing Desk Converter"],
        ["More platform space, still portable", "VIVO Black 29 in Single Top Standing Desk Converter"],
      ],
    },
  },
  {
    subheading: "Single-Top Designs Are Genuinely More Portable Than Dual-Tier",
    note: "A dual-tier converter with a separate keyboard tray has more hardware and generally weighs more than a single-top platform of similar size. If you genuinely need to move the converter between rooms or store it away regularly, prioritize single-top designs even if it means giving up the independent keyboard height adjustment.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Prioritize single-top designs for genuine portability", explanation: "Fewer moving parts and no separate keyboard tray mechanism generally means lighter overall weight, making single-top converters easier to carry regularly." },
  { criterion: "Consider platform size as a rough weight indicator", explanation: "Smaller platforms generally weigh less, though verify actual weight specs where available rather than assuming from size alone." },
  { criterion: "Weigh a low-profile design if storage space matters as much as carrying", explanation: "An ultra-slim design is easier to slide against a wall or into a closet than a bulkier converter, even at similar weight." },
  { criterion: "Don't assume any marketed \"portable\" converter meets a genuine weight threshold", explanation: "Verify actual weight where the listing confirms it, since \"portable\" alone doesn't guarantee the product is genuinely easy to lift and carry." },
  { criterion: "Weigh review volume against the smallest, cheapest options", explanation: "The lightest and cheapest picks here have smaller review histories than VIVO's more established single-top converters; factor this into your confidence level." },
];

export const faq: FaqItem[] = [
  { q: "Which portable converter has the most reviews?", a: "The VIVO Black Small Single Top 28 inch Standing Desk Converter, with 987 reviews." },
  { q: "What's the smallest, lightest option?", a: "The Aconcept Extra-Slim 24 x 14 inch Standing Desk Converter, the smallest platform in this comparison." },
  { q: "Is there a low-profile design for easy storage?", a: "Yes, the VIVO Ultra-Slim Single Top Standing Desk Riser is explicitly marketed for its slim, low-profile design." },
  { q: "Are single-top converters genuinely more portable than dual-tier?", a: "Generally yes, since they have fewer moving parts and no separate keyboard tray mechanism, resulting in lighter overall weight." },
  { q: "What's the cheapest portable option?", a: "The Aconcept Extra-Slim 24 x 14 inch Standing Desk Converter at $49.99." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-standing-desk-converters", title: "Best Compact Standing Desk Converters (2026)" },
  { href: "/guide/best-slim-standing-desk-converters", title: "Best Slim Standing Desk Converters (2026)" },
  { href: "/guide/best-standing-desk-converters", title: "Best Standing Desk Converters (2026)" },
];
