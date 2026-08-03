export const guideSlug = "best-vertical-ergonomic-keyboards";
export const guideTitle = "3 Best 'Vertical' Ergonomic Keyboards in 2026 (Split and Tented, Explained)";
export const metaTitle = "Best Vertical Ergonomic Keyboards";
export const metaDescription =
  "Before you search further: genuinely vertical-tilt keyboards are rare. We clarify the split vs tented vs vertical terminology and evaluate the closest options.";
export const mainKeyword = "vertical ergonomic keyboard";
export const introParagraphs = [
  "It's worth clarifying terminology before recommending anything here, a 'vertical ergonomic keyboard' in the truest sense, one with the entire key surface tilted up on its side similar to a vertical mouse, is a genuinely rare product category, much rarer than split or tented keyboards which are frequently mislabeled as 'vertical' in search results and product titles. Split means the keyboard is divided into two halves that can be positioned apart, tented means the halves are angled upward toward the center, and vertical in the strictest sense means the whole board is tilted onto its side, these are three different things and we won't call a product 'vertical' if its actual design is split or tented.",
  "None of the widely available, well-reviewed keyboards in our research catalog are genuinely vertical-tilt in this strict sense, so this guide instead features the closest verified split and tented options and is explicit that they are split or tented, not true vertical-tilt, designs. Given how rare true vertical-tilt keyboards are, review coverage for that specific category is also thin, a real purchase-risk factor worth knowing before you search further for a niche product with little buyer feedback to go on.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "logitech-ergo-k860-tented-split",
    rank: 1,
    badge: "Best Split and Tented Pick (Not True Vertical)",
    name: "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest",
    price: "$129.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "7,992 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZWK2TQT?tag=deskfinds0d-20",
    description:
      "To be direct, this is a split, tented keyboard, not a true vertical-tilt design, the two halves angle upward toward the center rather than the whole board tilting onto its side. It carries the largest verified review base of any pick in this guide, useful given how thin review coverage generally is for anything genuinely 'vertical' in this category.\n\nIts negative tilt and tenting angle are fixed rather than adjustable, offering a real step up in wrist positioning from a flat keyboard without reaching the more dramatic angle a true vertical-tilt design would provide.",
    specs: ["Split, tented layout (not true vertical-tilt)", "Negative tilt, front higher than back", "Largest verified review base here", "Bluetooth or USB receiver"],
    pros: ["Largest verified review base among split/tented options", "Genuine split and negative-tilt benefit", "Well-established, low purchase risk", "Included wrist rest"],
    cons: ["Not a true vertical-tilt keyboard despite adjacent marketing language", "Fixed tenting angle, not adjustable", "Highest price in this guide"],
    bestFor: "Buyers who searched 'vertical' but want the most reviewed genuinely split, tented option available",
  },
  {
    id: "perixx-periboard-512b-tented-split",
    rank: 2,
    badge: "Best Budget Split and Tented Pick",
    name: "Perixx PERIBOARD-512B Wired Ergonomic Keyboard - Split Keyboard with Wrist Rest",
    price: "$44.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "9,553 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B075GZVD4T?tag=deskfinds0d-20",
    description:
      "Also a split, angled keyboard rather than a true vertical-tilt design, offered at a lower price point for buyers who want to test whether a split, tented layout helps before considering the rare and pricier genuinely vertical-tilt category. Its large verified review base is reassuring given how thin review coverage tends to be for anything actually labeled vertical.\n\nIts wired connection and fixed split angle keep the design simple, a lower-risk way to explore split, tented ergonomics without the purchase risk of a niche true-vertical product.",
    specs: ["Split, angled layout (not true vertical-tilt)", "Wired USB connection", "Large verified review base", "Padded wrist rest included"],
    pros: ["Lowest price of any pick in this guide", "Large verified review base, lower purchase risk", "No battery to manage", "True split, angled layout"],
    cons: ["Not a true vertical-tilt keyboard", "Fixed split angle, not adjustable", "Basic build materials at this price"],
    bestFor: "Budget-conscious buyers wanting to test split, tented ergonomics before considering a niche true-vertical product",
  },
  {
    id: "arteck-split-2-4g-tented",
    rank: 3,
    badge: "Best Wireless Split and Tented Pick",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, 2.4G USB Wireless",
    price: "$54.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "1,624 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKKYRQ31?tag=deskfinds0d-20",
    description:
      "A split, angled keyboard connecting over 2.4G wireless, again not a true vertical-tilt design despite sometimes appearing in 'vertical keyboard' search results due to loose terminology across the category. Its built-in cushioned palm rest and mid-range price make it a reasonable middle option in this guide.\n\nAs with the other picks here, we're being explicit that this is split and tented, not vertical, terminology matters for setting the right expectations before you buy.",
    specs: ["Split, angled layout (not true vertical-tilt)", "2.4G USB wireless receiver", "Built-in cushioned palm rest", "Mid-range price point"],
    pros: ["True split, angled layout with wireless convenience", "Built-in palm rest, no extra purchase", "Stable 2.4G connection", "Mid-range price for the design"],
    cons: ["Not a true vertical-tilt keyboard", "Fixed split angle, not tenting-adjustable", "Smaller review base than the Perixx or Logitech picks here"],
    bestFor: "Buyers wanting a wireless split, tented option while understanding it isn't a true vertical-tilt design",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Terminology accuracy over marketing language", description: "Verified whether each product is genuinely split, tented, or true vertical-tilt before using any of those terms, rather than repeating loose marketing language." },
  { title: "Review coverage scarcity for the true vertical category", description: "Noted that genuinely vertical-tilt full keyboards have thin review coverage industry-wide, a real purchase-risk factor for this specific niche." },
  { title: "Ergonomic benefit proportionate to novelty", description: "Weighed whether the ergonomic benefit and adaptation cost of a rarer orientation are proportionate, rather than assuming rarer automatically means better." },
  { title: "Closest verified alternatives when true vertical isn't available", description: "Selected the closest well-reviewed split and tented options when no genuinely vertical-tilt product met our verification bar, and said so directly." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Split vs. Tented vs. Vertical: Know the Difference",
    note: "Split means the keyboard divides into two halves you can position apart. Tented means those halves angle upward toward the center. Vertical, in the strict sense, means the entire board tilts onto its side. Most products search results call 'vertical' are actually split or tented, worth knowing which you're actually buying.",
  },
  {
    subheading: "Review Coverage Is Thin for True Vertical Keyboards",
    note: "Because genuinely vertical-tilt full keyboards are a rare category, buyer review coverage is thinner than for split or tented designs, a real purchase-risk factor if you do find a product explicitly labeled true-vertical. Weigh that scarcity against the novelty before committing to a niche purchase.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most reviewed split, tented option", "Logitech Ergo K860"],
        ["Lowest-cost way to test split, tented ergonomics", "Perixx PERIBOARD-512B"],
        ["Wireless split, tented option", "Arteck Split Ergonomic 2.4G"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Clarify split vs. tented vs. vertical before you search further", explanation: "These are three distinct designs, split halves position apart, tented halves angle upward, true vertical tilts the whole board onto its side, most 'vertical keyboard' results are actually split or tented." },
  { criterion: "Expect thin review coverage for genuinely vertical-tilt products", explanation: "True vertical-tilt full keyboards are a rare category, review coverage is thinner than for split or tented designs, a real risk factor for a niche purchase." },
  { criterion: "Don't assume rarer automatically means more ergonomic benefit", explanation: "A rarer orientation isn't automatically better, weigh the actual ergonomic benefit and adaptation cost proportionately rather than assuming novelty equals improvement." },
  { criterion: "Consider a well-reviewed split or tented option as a lower-risk alternative", explanation: "If true vertical-tilt keyboards are too niche or thinly reviewed for your comfort, a well-established split or tented keyboard offers a lower-risk path to similar wrist-positioning goals." },
];

export const faq: FaqItem[] = [
  { q: "What's the difference between a split, tented, and vertical keyboard?", a: "Split means the keyboard divides into two halves you position apart, tented means those halves angle upward toward the center, and true vertical means the whole board tilts onto its side, a much rarer design than the other two." },
  { q: "Are the keyboards in this guide actually 'vertical'?", a: "No, they are genuinely split and tented, not true vertical-tilt designs, we're being explicit about that distinction rather than repeating loose marketing language." },
  { q: "Why is it hard to find reviews for true vertical-tilt keyboards?", a: "Because genuinely vertical-tilt full keyboards are a rare product category, review coverage is thinner than for split or tented keyboards, a real risk factor to weigh before buying one." },
  { q: "Should I buy a split/tented keyboard instead of searching for a true vertical one?", a: "It's a reasonable lower-risk alternative if true vertical-tilt options are too niche or thinly reviewed for your comfort, and split/tented designs still offer real wrist-positioning benefit." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-split-ergonomic-keyboards", title: "Best Split Ergonomic Keyboards (2026)" },
  { href: "/guide/best-ergonomic-keyboards-for-wrist-pain", title: "Best Ergonomic Keyboards for Wrist Pain (2026)" },
  { href: "/guide/best-ergonomic-keyboards", title: "Best Ergonomic Keyboards (2026)" },
];
