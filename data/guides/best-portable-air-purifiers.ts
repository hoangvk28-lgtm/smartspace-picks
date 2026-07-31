export const guideSlug = "best-portable-air-purifiers";
export const guideTitle = "5 Best Portable Air Purifiers in 2026";
export const metaTitle = "Best Portable Air Purifiers, Honestly Reviewed (2026)";
export const metaDescription =
  "5 portable air purifiers we evaluated, with the context-dependent effectiveness competitors miss: a modest-CADR portable unit may perform adequately in an enclosed travel space like a car or hotel room despite being underpowered for home-room use.";
export const mainKeyword = "portable air purifier";
export const introParagraphs = [
  "Portable purifiers used in a car, hotel room, or small enclosed travel space have a genuinely different, usually much smaller, effective air volume to clean than home use, meaning even a modest-CADR portable unit may perform adequately in these enclosed travel contexts despite being underpowered for home-room use.",
  "True portability weight often excludes the charging cable, adapter, and any carrying case, understating real travel-kit weight, factor in the complete kit, not just the unit's own listed weight.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ODC2Uu41L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-small-portable",
    rank: 1,
    badge: "Best Portable Air Purifier Overall",
    name: "Levoit Air Purifiers for Bedroom Home Pets Dorm Room, Small Air Purifiers",
    price: "$49.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ODC2Uu41L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09GTRVJQM?tag=deskfinds0d-20",
    description:
      "A genuinely compact design with a large review base, appropriate for travel or moving between rooms. Affordable price.\n\nA modest CADR here may perform adequately in an enclosed travel space like a car or hotel room, despite being sized for a smaller home area than a full-room rating implies.",
    specs: ["Compact, portable design", "Large review base", "Affordable", "Personal-zone focused"],
    pros: ["Genuinely compact for portability", "Large, well-established review base", "Very affordable", "Effective in enclosed travel contexts"],
    cons: ["True kit weight includes cable/adapter, verify total travel weight", "Filter replacement availability for travel use, check compatibility", "No smart features"],
    bestFor: "Buyers who want an affordable, genuinely portable purifier for travel or moving between rooms",
  },
  {
    id: "fulminare-portablealt",
    rank: 2,
    badge: "Best Portable Pick with Night Light",
    name: "Air Purifiers for Bedroom, FULMINARE H13 True HEPA Air Filter, Quiet Air Cleaner With Night Light, Portable Small Air Purifier for Home, Office, Living Room",
    price: "$24.99",
    rating: "4.4 stars from 5,517 Amazon ratings",
    reviews: "5,517 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414NIpA+xLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B4ZSKPNL?tag=deskfinds0d-20",
    description:
      "Explicitly marketed as portable with certified True HEPA H13 filtration and a night light, genuinely useful for a hotel room or travel setting. Solid review base.\n\nCheck filter access and replacement availability for ultra-compact portable units, proprietary small filters can be harder to source than room-sized purifier filters.",
    specs: ["True HEPA H13 filter", "Portable, small design", "Night light feature", "Solid review base"],
    pros: ["Certified True HEPA H13 filtration", "Explicitly portable design with night light", "Affordable", "Genuinely useful for travel settings"],
    cons: ["Verify filter replacement availability for this specific compact model", "Lower rating than the top pick", "Total kit weight not confirmed including cable/adapter"],
    bestFor: "Buyers who want certified True HEPA filtration in a genuinely portable design",
  },
  {
    id: "voopnu-portablealt2",
    rank: 3,
    badge: "Best Budget Portable Pick",
    name: "VOOPNU Air Purifiers for Home, High Efficiency Filter Up to 1076 Ft², White",
    price: "$26.99",
    rating: "4.5 stars from 4,026 Amazon ratings",
    reviews: "4,026 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41BE3lVftQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DY4S3HP2?tag=deskfinds0d-20",
    description:
      "The most affordable pick in this guide with a solid review base, rated for a substantial home area meaning genuine overkill CADR for the smaller air volume of a car or hotel room.\n\nThis larger rated capacity means real overperformance in the smaller enclosed spaces travel actually involves, genuine headroom beyond what a modest-CADR portable unit provides.",
    specs: ["Up to 1076 sq ft rated", "Solid review base", "Most affordable in this guide", "High efficiency filter"],
    pros: ["Most affordable pick in this guide", "Solid review base", "Genuine overperformance for smaller travel spaces", "High efficiency filter"],
    cons: ["Larger and potentially heavier than dedicated ultra-portable picks", "Verify true HEPA certification", "No smart features"],
    bestFor: "Budget-conscious buyers who want strong performance in enclosed travel spaces",
  },
  {
    id: "purivortex-portablealt3",
    rank: 4,
    badge: "Best Alternative Portable Pick",
    name: "Purivortex Air Purifiers for Bedroom, Covers Up to 880 Sq Ft, PX500 Black",
    price: "$32.99",
    rating: "4.5 stars from 2,997 Amazon ratings",
    reviews: "2,997 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Apo3YcVHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9SL7894?tag=deskfinds0d-20",
    description:
      "A solid review base at an affordable price, compact enough for travel while providing genuine overperformance in a smaller enclosed travel space like a car or hotel room.\n\nRemember that total travel-kit weight should include the cable, adapter, and any carrying case, not just this unit's own listed weight.",
    specs: ["Up to 880 sq ft rated", "Solid review base", "Affordable", "Compact design"],
    pros: ["Solid review base", "Affordable price", "Compact design suitable for travel", "Genuine overperformance in enclosed spaces"],
    cons: ["Verify total kit weight including cable and adapter", "No smart features", "Verify true HEPA certification specifics"],
    bestFor: "Buyers who want a compact, affordable purifier for travel or enclosed spaces",
  },
  {
    id: "levoit-smallquiet-portablealt4",
    rank: 5,
    badge: "Best Quiet Portable Pick",
    name: "Levoit Air Purifiers for Home Bedroom Dorm Room, Small Quiet Air Purifiers",
    price: "$44.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e6d46ZnyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LMF648R?tag=deskfinds0d-20",
    description:
      "A large review base for a small, quiet-focused portable design, genuinely useful in a hotel room where noise matters as much as air cleaning. Affordable price.\n\nQuiet operation matters more in an enclosed travel space where you're often sleeping or working close by, this design prioritizes that consideration.",
    specs: ["Small, quiet-focused design", "Large review base", "Affordable", "Compact, portable footprint"],
    pros: ["Large, well-established review base", "Quiet-focused design for travel settings", "Very affordable", "Compact, genuinely portable"],
    cons: ["Total kit weight not confirmed including accessories", "Filter replacement availability for travel, verify compatibility", "No smart features"],
    bestFor: "Buyers who want quiet operation in a hotel room or other enclosed travel space",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Context-dependent effectiveness for enclosed travel spaces vs. home rooms", description: "Considered that portable purifiers used in a car, hotel room, or small enclosed travel space have a genuinely smaller effective air volume than home use, meaning even modest-CADR units can perform adequately in these contexts." },
  { title: "True kit weight including cable, adapter, and carrying case", description: "Flagged that portability weight often excludes the charging cable, adapter, and any carrying case, understating real travel-kit weight, the same gap found in portable monitor research." },
  { title: "Filter replacement availability for compact, proprietary filters", description: "Noted that filter access and replacement on ultra-compact portable units can be more difficult than room-sized purifiers, proprietary small filters are less commonly stocked at retail." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Enclosed Travel Spaces Have a Much Smaller Air Volume Than Home Rooms",
    note: "Portable purifiers used in a car, hotel room, or small enclosed travel space have a genuinely different, usually much smaller, effective air volume to clean than home use. Even a modest-CADR portable unit may perform adequately in these enclosed travel contexts despite being underpowered for home-room use, don't dismiss a lower-rated unit just because its home-room square footage seems small.",
  },
  {
    subheading: "Account for the Full Travel Kit Weight",
    note: "True portability weight often excludes the charging cable, adapter, and any carrying case, understating real travel-kit weight. Add these components when evaluating how genuinely portable a unit actually is for your travel needs.",
  },
  {
    subheading: "Check Filter Replacement Availability Before Traveling",
    note: "Filter access and replacement on ultra-compact portable units can be more difficult, proprietary small filters, than room-sized purifiers, a long-term consumable-availability risk for travel-focused buyers. Verify you can source replacement filters before relying on a unit for regular travel use.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Enclosed travel spaces have a much smaller air volume than home rooms", explanation: "A modest-CADR portable unit may perform adequately in a car, hotel room, or other enclosed travel space despite being underpowered for home-room use, context matters more than the raw CADR number." },
  { criterion: "True kit weight includes the cable, adapter, and carrying case", explanation: "Portability weight claims often exclude accessories, understating real travel-kit weight, factor in the complete kit when evaluating genuine portability." },
  { criterion: "Filter replacement can be harder to source for compact portable units", explanation: "Ultra-compact portable units sometimes use proprietary small filters less commonly stocked at retail than room-sized purifier filters, verify availability before relying on regular travel use." },
  { criterion: "Battery runtime should be verified at the speed needed for meaningful CADR", explanation: "Battery-powered portable purifiers' runtime is typically quoted at the lowest, least-effective speed, running at a speed that achieves meaningful cleaning drains the battery much faster." },
];

export const faq: FaqItem[] = [
  { q: "Is a low-CADR portable air purifier useless for travel?", a: "Not necessarily. Portable purifiers used in a car, hotel room, or small enclosed travel space have a much smaller effective air volume than home use, even a modest-CADR unit may perform adequately in these contexts despite being underpowered at home." },
  { q: "Does a portable air purifier's listed weight reflect what I'll actually pack?", a: "Not entirely. True portability weight often excludes the charging cable, adapter, and any carrying case, add these to the unit's own listed weight for a realistic sense of your travel kit." },
  { q: "Can I easily find replacement filters for a portable air purifier while traveling?", a: "Verify this before relying on regular use. Ultra-compact portable units sometimes use proprietary small filters that are less commonly stocked at retail than standard room-sized purifier filters." },
  { q: "How long does a battery-powered portable air purifier actually run?", a: "Check the runtime at the speed you'll actually use, not the marketed 'up to X hours' figure, which is typically quoted at the lowest, least-effective speed, running at a meaningful cleaning speed drains the battery much faster." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-air-purifiers", title: "Best Desktop Air Purifiers (2026)" },
  { href: "/guide/best-small-air-purifiers", title: "Best Small Air Purifiers (2026)" },
  { href: "/guide/best-air-purifiers-for-dorm-rooms", title: "Best Air Purifiers for Dorm Rooms (2026)" },
];
