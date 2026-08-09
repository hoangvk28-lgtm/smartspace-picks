export const guideSlug = "best-23-8-inch-monitor-privacy-screens";
export const guideTitle = "5 Best 23.8-Inch Monitor Privacy Screens in 2026";
export const metaTitle = "Best 23.8-Inch Monitor Privacy Screens (2026)";
export const metaDescription =
  "5 privacy filters specifically sized for 23.8 inch monitors, not rounded to standard 24 inch, from a $19.98 budget option to a proven 4,087-review pick.";
export const mainKeyword = "23.8 inch monitor privacy screen";
export const introParagraphs = [
  "23.8 inch is a common size for business and productivity monitors, close to but distinct from standard 24 inch. We only included filters specifically sized for 23.8 inch rather than assuming a 24 inch filter rounds down acceptably.",
  "We found a genuinely wide selection at this size, five confirmed options spanning from under $20 to nearly $60, with real review history across most of them.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/51yLgwOOaTL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07rj22hdn-238inch",
    rank: 1,
    badge: "Best Overall",
    name: "SightPro 23.8 Inch 16:9 Computer Privacy Screen Filter for Monitor",
    price: "$40.49",
    rating: "4.3",
    reviews: "4,087",
    imageUrl: "https://m.media-amazon.com/images/I/51yLgwOOaTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07RJ22HDN?tag=deskfinds0d-20",
    description: "By far the largest review base of any 23.8 inch filter we found, specifically sized for this exact dimension rather than rounded to standard 24 inch.\n\nSold as a single unit; from SightPro, a brand with strong review histories across our broader size research.",
    specs: ["23.8 inch, 16:9 aspect ratio", "Single unit"],
    pros: ["By far the largest review base of any 23.8 inch filter we found"],
    cons: ["Higher price than the RedANGEL budget option"],
    bestFor: "Buyers who want the most proven 23.8 inch option.",
  },
  {
    id: "b0gxdvlvzw-238inch",
    rank: 2,
    badge: "Highest Rated",
    name: "SYHUAIFEI [2-Pack] 23.8 Inch Privacy Screen for Monitor, 16:9 Aspect Ratio",
    price: "$43.99",
    rating: "4.6",
    reviews: "26",
    imageUrl: "https://m.media-amazon.com/images/I/41vA7ER-a4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GXDVLVZW?tag=deskfinds0d-20",
    description: "The highest rating among confirmed 23.8 inch filters, on a smaller but growing review base, at a similar price to the SightPro top pick but sold as a matched 2-pack.\n\nWorth watching as review volume builds; a blackout, anti-spy design.",
    specs: ["23.8 inch, 16:9 aspect ratio", "2-pack, removable"],
    pros: ["Highest rating among confirmed 23.8 inch filters", "Matched 2-pack at a similar price to a single-unit alternative"],
    cons: ["Smaller review base than the established leaders"],
    bestFor: "Buyers who want a matched 2-pack with the highest rating at this size.",
  },
  {
    id: "b0cjr5hry6-238inch",
    rank: 3,
    badge: "Best Anti-Scratch Option",
    name: "[2 Pack] 23.8 Inch Computer Privacy Screen, Anti-Scratch Protector",
    price: "$59.99",
    rating: "4.2",
    reviews: "1,564",
    imageUrl: "https://m.media-amazon.com/images/I/41FUI1zQ5IL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJR5HRY6?tag=deskfinds0d-20",
    description: "A substantial review history for a matched 2-pack, explicitly marketed with an anti-scratch protector film alongside the privacy function.\n\nThe highest price in this comparison; worth it if scratch protection is a genuine priority alongside privacy.",
    specs: ["23.8 inch, 16:9 aspect ratio", "2-pack, anti-scratch protector film"],
    pros: ["Substantial review history", "Explicit anti-scratch protection alongside privacy"],
    cons: ["Highest price in this comparison"],
    bestFor: "Buyers who want scratch protection bundled with their privacy filter.",
  },
  {
    id: "b0cdkktfrg-238inch",
    rank: 4,
    badge: "Best With Blue-Light Filtering",
    name: "[2 Pack] 23.8 Inch Computer Monitor Privacy Screen, Blue Light Filter",
    price: "$36.99",
    rating: "4.3",
    reviews: "938",
    imageUrl: "https://m.media-amazon.com/images/I/31lS0FwCceL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CDKKTFRG?tag=deskfinds0d-20",
    description: "A solid review base for a matched 2-pack, bundling blue-light filtering at a lower price than the anti-scratch pick above.\n\nA reasonable mid-range option between the budget RedANGEL pick and the more established leaders.",
    specs: ["23.8 inch, 16:9 aspect ratio", "2-pack, blue-light filtering"],
    pros: ["Solid review base", "Bundles blue-light filtering at a reasonable price"],
    cons: ["Smaller review base than the SightPro top pick"],
    bestFor: "Buyers who want blue-light filtering bundled at a mid-range price.",
  },
  {
    id: "b0c2c8nfdd-238inch",
    rank: 5,
    badge: "Cheapest Option",
    name: "RedANGEL 23.8-Inch Computer Privacy Screen for 16:9 Monitor",
    price: "$19.98",
    rating: "4.0",
    reviews: "193",
    imageUrl: "https://m.media-amazon.com/images/I/41XGW9ND9ML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C2C8NFDD?tag=deskfinds0d-20",
    description: "The lowest price for a 23.8 inch filter across our entire research, with a reasonable review base for its price tier.\n\nA solid entry point for buyers testing whether a privacy filter is worth it before spending more.",
    specs: ["23.8 inch, 16:9 aspect ratio", "Single unit"],
    pros: ["Lowest price among all confirmed 23.8 inch options", "Reasonable review base for the price"],
    cons: ["Lower rating than the higher-priced alternatives"],
    bestFor: "Budget-focused buyers wanting to try a privacy filter first.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Required filters specifically sized for 23.8 inch, not rounded from 24 inch", description: "We confirmed every pick here as a genuine 23.8 inch fit rather than assuming a standard 24 inch filter rounds down acceptably." },
  { title: "Compared value across a real price range", description: "23.8 inch filters span from $19.98 to $59.99 in our research, and we compared value across that full range." },
  { title: "Weighed a newer high-rated listing against established leaders", description: "We flagged the SYHUAIFEI pick's higher rating on a smaller review base as worth watching, without overstating its current certainty against the SightPro pick's thousands of reviews." },
  { title: "Noted bundled anti-scratch and blue-light features separately", description: "Where a listing explicitly adds these extras, we treated them as genuine differentiators rather than assuming all filters offer equivalent bundled features." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By What Matters Most",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most proven, largest review base", "SightPro 23.8 Inch 16:9 Computer Privacy Screen Filter"],
        ["Highest rating, matched 2-pack", "SYHUAIFEI [2-Pack] 23.8 Inch Privacy Screen"],
        ["Scratch protection priority", "[2 Pack] 23.8 Inch Computer Privacy Screen, Anti-Scratch"],
        ["Cheapest option", "RedANGEL 23.8-Inch Computer Privacy Screen"],
      ],
    },
  },
  {
    subheading: "23.8 Inch Is Not the Same as Standard 24 Inch",
    note: "Though close in size, a filter specifically made for 23.8 inch will fit more precisely than a standard 24 inch filter stretched or trimmed to fit. If your monitor is specifically labeled 23.8 inch, use one of the picks in this guide rather than a standard 24 inch filter from elsewhere.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm your monitor is specifically 23.8 inch, not rounded to 24", explanation: "These are close but distinct sizes; a filter made specifically for 23.8 inch will fit more precisely than a generic 24 inch filter." },
  { criterion: "Weigh a high rating on fewer reviews against an established larger sample", explanation: "The SYHUAIFEI pick's 4.6 rating is on 26 reviews versus the SightPro pick's 4.3 on 4,087; consider both figures together." },
  { criterion: "Consider bundled anti-scratch or blue-light features", explanation: "Not every 23.8 inch filter includes these extras; check the specific listing if durability or blue-light reduction matters to you." },
  { criterion: "Compare matched 2-pack pricing against single-unit cost for dual monitors", explanation: "A matched 2-pack avoids tint or thickness mismatch between two screens, and several options here are competitively priced 2-packs." },
  { criterion: "Weigh price against rating for the budget option", explanation: "The cheapest pick has a lower rating than the pricier alternatives; decide whether the savings justify the rating gap for your use case." },
];

export const faq: FaqItem[] = [
  { q: "Which 23.8 inch privacy screen has the most reviews?", a: "The SightPro 23.8 Inch 16:9 Computer Privacy Screen Filter, with 4,087 reviews at a 4.3 rating." },
  { q: "What's the cheapest 23.8 inch option?", a: "The RedANGEL 23.8-Inch Computer Privacy Screen at $19.98, the lowest price in our entire research at this size." },
  { q: "Is 23.8 inch the same as 24 inch?", a: "No, they're close but distinct sizes. A filter specifically made for 23.8 inch will fit more precisely than a standard 24 inch filter." },
  { q: "Is there an anti-scratch option?", a: "Yes, the [2 Pack] 23.8 Inch Computer Privacy Screen explicitly includes an anti-scratch protector film." },
  { q: "What's the highest-rated option?", a: "The SYHUAIFEI [2-Pack] 23.8 Inch Privacy Screen at 4.6, though on a much smaller review base than the SightPro pick." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-23-inch-monitor-privacy-screens", title: "Best 23-Inch Monitor Privacy Screens (2026)" },
  { href: "/guide/best-24-inch-monitor-privacy-screens", title: "Best 24-Inch Monitor Privacy Screens (2026)" },
  { href: "/guide/best-monitor-privacy-screens", title: "Best Monitor Privacy Screens (2026)" },
];
