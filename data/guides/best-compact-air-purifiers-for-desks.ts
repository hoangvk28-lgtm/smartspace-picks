export const guideSlug = "best-compact-air-purifiers-for-desks";
export const guideTitle = "5 Best Compact Air Purifiers for Desks in 2026";
export const metaTitle = "Best Compact Air Purifiers for Desks, Honestly Reviewed (2026)";
export const metaDescription =
  "5 compact desk air purifiers we evaluated, with the distinction competitors blur: desk-proximity CADR effectiveness is fundamentally different from whole-room CADR, a compact desk unit primarily cleans your immediate vicinity, not the whole room.";
export const mainKeyword = "compact air purifier";
export const introParagraphs = [
  "Desk-proximity CADR effectiveness is fundamentally different from whole-room CADR, a compact desk unit primarily cleans air in its immediate vicinity rather than achieving genuine whole-room air changes, a distinction competitors blur by quoting whole-room CADR figures for a personal-zone product.",
  "Desk-mounted purifiers compete for the same limited desk surface area as monitors, lamps, and other accessories, footprint should be weighed against genuine airflow effectiveness, not treated as a pure positive.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/414NIpA+xLL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-small-compactdesk",
    rank: 1,
    badge: "Best Compact Desk Air Purifier Overall",
    name: "Levoit Air Purifiers for Bedroom Home Pets Dorm Room, Small Air Purifiers",
    price: "$49.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ODC2Uu41L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09GTRVJQM?tag=deskfinds0d-20",
    description:
      "A genuinely compact design with a large review base, appropriately scaled for personal-zone desk use rather than whole-room air changes. Affordable price.\n\nUnderstand this cleans your immediate desk vicinity effectively, it's not achieving genuine whole-room CADR despite the room-size figures sometimes quoted for similar products.",
    specs: ["Compact desk-scale design", "Large review base", "Affordable", "Personal-zone focused"],
    pros: ["Genuinely appropriately sized for personal-zone desk use", "Large, well-established review base", "Very affordable", "Compact footprint doesn't dominate desk space"],
    cons: ["Only cleans immediate desk vicinity, not whole-room CADR", "Filter media surface area limited, frequent replacement", "No smart features"],
    bestFor: "Buyers who want an appropriately scaled personal-zone desk purifier",
  },
  {
    id: "fulminare-compactdeskalt",
    rank: 2,
    badge: "Best Desk Pick with Night Light",
    name: "Air Purifiers for Bedroom, FULMINARE H13 True HEPA Air Filter, Quiet Air Cleaner With Night Light, Portable Small Air Purifier for Home, Office, Living Room",
    price: "$24.99",
    rating: "4.4 stars from 5,517 Amazon ratings",
    reviews: "5,517 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414NIpA+xLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B4ZSKPNL?tag=deskfinds0d-20",
    description:
      "Certified True HEPA H13 in a genuinely portable, small design with a night light feature at an affordable price. Solid review base.\n\nExhaust airflow direction relative to your monitor and keyboard matters at this close range, verify it doesn't blow dust across your desk surface rather than upward or away.",
    specs: ["True HEPA H13 filter", "Night light feature", "Portable, small design", "Solid review base"],
    pros: ["Certified True HEPA H13 filtration", "Portable with a useful night light feature", "Appropriately sized for desk use", "Affordable"],
    cons: ["Exhaust direction relative to desk layout not independently verified", "Smaller filter media, frequent replacement", "Lower rating than the top pick"],
    bestFor: "Buyers who want certified True HEPA in a compact desk-friendly size",
  },
  {
    id: "voopnu-compactdeskalt2",
    rank: 3,
    badge: "Best Budget Compact Desk Pick",
    name: "VOOPNU Air Purifiers for Home, High Efficiency Filter Up to 1076 Ft², White",
    price: "$26.99",
    rating: "4.5 stars from 4,026 Amazon ratings",
    reviews: "4,026 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41BE3lVftQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DY4S3HP2?tag=deskfinds0d-20",
    description:
      "The most affordable pick in this guide with a solid review base, though its rated coverage far exceeds personal-zone desk use, expect it to be more effective in your immediate vicinity than the whole-room figure suggests.\n\nA desk purifier competes for the same limited surface area as monitors and lamps, weigh this unit's footprint against your specific desk layout.",
    specs: ["Up to 1076 sq ft rated", "Solid review base", "Most affordable in this guide", "High efficiency filter"],
    pros: ["Most affordable pick in this guide", "Solid review base", "High efficiency filter", "Genuine personal-zone effectiveness"],
    cons: ["Whole-room rating doesn't reflect actual desk-proximity performance", "Larger footprint may compete more for desk space", "Verify true HEPA certification"],
    bestFor: "Budget-conscious buyers who want a compact desk purifier",
  },
  {
    id: "purivortex-compactdeskalt3",
    rank: 4,
    badge: "Best Alternative Compact Desk Pick",
    name: "Purivortex Air Purifiers for Bedroom, Covers Up to 880 Sq Ft, PX500 Black",
    price: "$32.99",
    rating: "4.5 stars from 2,997 Amazon ratings",
    reviews: "2,997 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Apo3YcVHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9SL7894?tag=deskfinds0d-20",
    description:
      "A solid review base at an affordable price, appropriately scaled to sit on a desk without dominating your surface, even though its rated coverage exceeds what's relevant at personal-zone desk distance.\n\nA USB-powered desk purifier's power draw can compete with a laptop's own USB port budget, verify this isn't an issue if powering multiple USB devices from the same source.",
    specs: ["Up to 880 sq ft rated", "Solid review base", "Affordable", "Compact design"],
    pros: ["Solid review base", "Affordable price", "Compact design fits desk placement", "Genuine personal-zone performance"],
    cons: ["Whole-room rating doesn't reflect actual desk-proximity performance", "Verify USB power draw compatibility if applicable", "No smart features"],
    bestFor: "Buyers who want a compact, affordable desk purifier",
  },
  {
    id: "levoit-smallquiet-compactdeskalt4",
    rank: 5,
    badge: "Best Quiet Compact Desk Pick",
    name: "Levoit Air Purifiers for Home Bedroom Dorm Room, Small Quiet Air Purifiers",
    price: "$44.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e6d46ZnyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LMF648R?tag=deskfinds0d-20",
    description:
      "A large review base for a small, quiet-focused design, genuinely appropriate for desk placement where noise during calls or focused work matters.\n\nCompact filter media in desk-sized units means meaningfully shorter replacement intervals than room-sized purifiers, an ongoing cost worth factoring in relative to the low purchase price.",
    specs: ["Small, quiet-focused design", "Large review base", "Affordable", "Compact footprint"],
    pros: ["Large, well-established review base", "Quiet-focused design appropriate for desk proximity", "Very affordable", "Appropriately scaled for personal-zone use"],
    cons: ["Filter replacement more frequent given compact media size", "No smart features", "Only cleans immediate desk vicinity, not whole-room"],
    bestFor: "Buyers who want a quiet compact purifier for close desk placement",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Personal-zone vs. whole-room CADR distinction explicitly clarified", description: "Distinguished desk-proximity effectiveness from whole-room CADR, since a compact desk unit primarily cleans air in its immediate vicinity rather than achieving genuine whole-room air changes." },
  { title: "Desk footprint vs. airflow effectiveness tradeoff assessed", description: "Weighed each pick's desk surface footprint against its genuine airflow effectiveness, rather than treating a small footprint as a pure positive regardless of performance." },
  { title: "Filter replacement cost specific to compact filter media", description: "Considered that very compact filter media in desk-sized units has meaningfully shorter replacement intervals than room-sized purifiers, an ongoing cost factor proportionally larger relative to the low purchase price." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Desk-Proximity Cleaning Is Different From Whole-Room CADR",
    note: "Desk-proximity CADR effectiveness is fundamentally different from whole-room CADR. A compact desk unit primarily cleans air in its immediate vicinity rather than achieving genuine whole-room air changes, a distinction blurred when a product quotes a whole-room square-footage rating for what's actually a personal-zone product.",
  },
  {
    subheading: "Weigh Footprint Against Genuine Airflow Effectiveness",
    note: "Desk-mounted purifiers compete for the same limited desk surface area as monitors, lamps, and other accessories. Footprint should be weighed against genuine airflow effectiveness, not treated as a pure positive, a tiny unit that barely moves air isn't better just because it's small.",
  },
  {
    subheading: "Exhaust Direction Matters at Close Desk Range",
    note: "A desk purifier's exhaust direction relative to your monitor and keyboard can blow dust it hasn't yet captured across the desk surface rather than purely upward or away, an airflow-direction design quality highly relevant at this close range.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Desk-proximity cleaning is different from whole-room CADR", explanation: "A compact desk unit primarily cleans air in its immediate vicinity rather than achieving genuine whole-room air changes, don't expect a personal-zone product to match a quoted whole-room square-footage rating." },
  { criterion: "Footprint should be weighed against genuine airflow effectiveness", explanation: "Desk-mounted purifiers compete for limited desk surface area, a small footprint that barely moves air isn't automatically better, weigh both factors together." },
  { criterion: "Compact filter media needs more frequent, proportionally costlier replacement", explanation: "Very compact filter media in desk-sized units has meaningfully shorter replacement intervals than room-sized purifiers, an ongoing cost factor proportionally larger relative to the low purchase price." },
  { criterion: "Exhaust direction relative to your desk layout affects real comfort", explanation: "A desk purifier's exhaust can blow dust it hasn't yet captured across the desk surface rather than purely upward or away, check this against your specific monitor and keyboard layout." },
];

export const faq: FaqItem[] = [
  { q: "Does a compact desk air purifier clean the whole room?", a: "Not really. Desk-proximity CADR effectiveness is fundamentally different from whole-room CADR, a compact desk unit primarily cleans air in its immediate vicinity rather than achieving genuine whole-room air changes." },
  { q: "Should I pick the smallest desk air purifier available?", a: "Not necessarily. Footprint should be weighed against genuine airflow effectiveness, a tiny unit that barely moves air isn't automatically the better choice just because it takes up less desk space." },
  { q: "How often do compact desk air purifier filters need replacing?", a: "More often than room-sized purifiers. Very compact filter media in desk-sized units has meaningfully shorter replacement intervals, an ongoing cost factor proportionally larger relative to the low purchase price." },
  { q: "Does the exhaust direction on a desk purifier matter?", a: "Yes, at this close range. A desk purifier's exhaust can blow dust it hasn't yet captured across the desk surface toward your monitor and keyboard rather than purely upward or away, check this against your specific desk layout." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-air-purifiers", title: "Best Desktop Air Purifiers (2026)" },
  { href: "/guide/best-portable-air-purifiers", title: "Best Portable Air Purifiers (2026)" },
  { href: "/guide/best-small-air-purifiers", title: "Best Small Air Purifiers (2026)" },
];
