export const guideSlug = "best-refurbished-digital-notebooks";
export const guideTitle = "5 Best Refurbished Digital Notebooks in 2026";
export const metaTitle = "Best Refurbished Digital Notebooks (2026)";
export const metaDescription =
  "5 Like-New and refurbished E Ink notebooks compared by actual discount versus the new price, since the savings vary a lot more than the \"refurbished\" label alone suggests.";
export const mainKeyword = "refurbished digital notebook";
export const introParagraphs = [
  "The real discount on a refurbished device depends heavily on the specific listing, and we found it varies meaningfully even within the same product family — a Like-New Kindle Scribe 64GB at $323.99 is actually cheaper than the new 32GB base model in some configurations, which is the kind of pricing quirk worth checking before assuming more storage always costs more.",
  "We compared each refurbished listing's price directly against its new-condition counterpart rather than just listing them as generically discounted, so you can see the actual savings.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0d4jkm1s7-refurbdn",
    rank: 1,
    badge: "Best Value",
    name: "Like-New Amazon Kindle Scribe (64GB)",
    price: "$323.99",
    rating: "4.3",
    reviews: "425",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D4JKM1S7?tag=deskfinds0d-20",
    description: "64GB of storage for $323.99 in Like-New condition, which undercuts the new 16GB base Kindle Scribe's $399.99 price while offering four times the storage. This is the clearest value pick in the entire refurbished comparison.",
    specs: ["64GB storage", "Like-New certified condition", "425 reviews at 4.3 stars"],
    pros: ["More storage than the new base model for meaningfully less money", "Solid review base for a refurbished listing"],
    cons: ["Like-New condition means light cosmetic wear is possible — check the listing's specific grading terms"],
    bestFor: "Buyers who want the most storage for the least money and are comfortable with Like-New condition.",
  },
  {
    id: "b0d4jhqgw2-refurbdn",
    rank: 2,
    badge: "Best Lower-Storage Option",
    name: "Like-New Amazon Kindle Scribe (32GB)",
    price: "$302.39",
    rating: "4.3",
    reviews: "425",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D4JHQGW2?tag=deskfinds0d-20",
    description: "The cheapest Kindle Scribe in this comparison, though the price gap to the 64GB Like-New model above is small enough ($21.60) that most buyers should size up unless storage genuinely doesn't matter to them.",
    specs: ["32GB storage", "Like-New certified condition", "425 reviews at 4.3 stars"],
    pros: ["Lowest price of any Kindle Scribe option here"],
    cons: ["Only $21.60 cheaper than the 64GB Like-New model, which is a much better value at that small price gap"],
    bestFor: "Buyers on the tightest possible budget who are certain 32GB is enough storage.",
  },
  {
    id: "b0d7bthtps-refurbdn",
    rank: 3,
    badge: "Best Refurbished reMarkable",
    name: "reMarkable 2 Tablet with 10.3\" Digital Paper Display, Marker Plus Pen",
    price: "$418.90",
    rating: "3.7",
    reviews: "26",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D7BTHTPS?tag=deskfinds0d-20",
    description: "A refurbished path into the reMarkable ecosystem at a discount versus the new $449 price, but with a noticeably lower rating (3.7) and much smaller review count (26) than the new reMarkable 2 listing — worth reading current reviews carefully before choosing this over buying new.",
    specs: ["10.3 inch digital paper display", "Marker Plus pen included", "3.7 stars from 26 reviews"],
    pros: ["Discount versus the new reMarkable 2 price", "Includes the Marker Plus pen"],
    cons: ["Meaningfully lower rating and much smaller review base than the new reMarkable 2 listing", "Worth verifying current seller and condition grading before buying"],
    bestFor: "Buyers who specifically want the reMarkable ecosystem and are comfortable with the lower rating relative to buying new.",
  },
  {
    id: "b08hdl3xjr-refurbdn",
    rank: 4,
    badge: "New, Included for Price Comparison",
    name: "reMarkable 2 with Marker Plus (New)",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "We're including the new-condition listing directly next to the refurbished one above so you can see the real tradeoff: $30.10 more for a meaningfully higher 4.4 rating and a much larger, more established review base of 1,354.",
    specs: ["Marker Plus stylus included", "New condition", "1,354 reviews at 4.4 stars"],
    pros: ["Much larger, higher-rated review base than the refurbished reMarkable 2 listing", "Full manufacturer warranty as a new unit"],
    cons: ["Costs more than the refurbished option, though the gap is smaller than you might expect"],
    bestFor: "Buyers who see the small price gap to the refurbished option and decide the much better rating and warranty are worth it.",
  },
  {
    id: "b0cz9vfqp-refurbdn",
    rank: 5,
    badge: "New Kindle Scribe, Price Reference",
    name: "Amazon Kindle Scribe (16GB, New)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description: "Included as the direct new-condition comparison point: the Like-New 64GB refurbished Kindle Scribe above costs $76 less than this new 16GB base model while offering four times the storage, which is the clearest reason to consider refurbished in this entire comparison.",
    specs: ["16GB storage", "New condition, full warranty"],
    pros: ["Full manufacturer warranty as a new unit"],
    cons: ["Costs more than the Like-New 64GB refurbished option for a quarter of the storage"],
    bestFor: "Buyers who specifically want a full new-unit warranty and are willing to pay more for less storage to get it.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Direct price comparison against the new-condition equivalent", description: "We placed refurbished listings next to their new-condition counterparts so the actual dollar savings (or lack thereof) is visible, rather than assuming refurbished always means a big discount." },
  { title: "Rating and review count as refurbished-specific evidence", description: "We flagged where a refurbished listing has a meaningfully lower rating or smaller review base than its new-condition counterpart, since that's specific evidence worth weighing." },
  { title: "Storage-to-price value within the refurbished tier", description: "We compared 32GB and 64GB refurbished Kindle Scribe options directly, since the price gap between them turned out to be small enough to change the recommendation." },
  { title: "Condition grading terms", description: "We noted that \"Like-New\" still permits light cosmetic wear under most sellers' grading systems — verify the specific listing's terms before buying." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "The Kindle Scribe Refurbished Discount Is the Standout Deal Here",
    note: "The Like-New 64GB Kindle Scribe at $323.99 costs $76 less than the new 16GB base model while offering four times the storage — this is the clearest value case for refurbished in this entire comparison. The refurbished reMarkable 2, by contrast, only saves $30.10 versus new while carrying a noticeably lower rating.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Compare the refurbished price directly against new, not against MSRP alone", explanation: "The Like-New Kindle Scribe 64GB is actually cheaper than the new 16GB base model — check both listings directly rather than assuming a bigger device costs more." },
  { criterion: "Check the refurbished listing's rating against the new-condition equivalent", explanation: "The refurbished reMarkable 2 carries a noticeably lower rating (3.7 vs. 4.4) and much smaller review base than its new counterpart — that gap is worth weighing against the modest savings." },
  { criterion: "Verify the seller's specific condition grading terms", explanation: "\"Like-New\" and \"refurbished\" grading standards vary by seller. Check the current listing for exactly what cosmetic or functional condition is guaranteed." },
  { criterion: "Confirm what warranty coverage applies", explanation: "Refurbished units often carry a shorter or different warranty than new units — verify this before assuming full manufacturer coverage." },
  { criterion: "Weigh storage tier against the actual price gap", explanation: "The 32GB and 64GB refurbished Kindle Scribe options are only about $21 apart — sizing up is usually the better value at that small a gap." },
];

export const faq: FaqItem[] = [
  { q: "Is the refurbished Kindle Scribe actually a good deal?", a: "Yes — the Like-New 64GB model at $323.99 costs less than the new 16GB base model while offering four times the storage, making it the clearest value case in this comparison." },
  { q: "Is the refurbished reMarkable 2 worth it over buying new?", a: "The savings are smaller ($30.10) and the rating is noticeably lower (3.7 vs. 4.4) than the new listing — worth reading current reviews carefully before choosing refurbished here." },
  { q: "What does \"Like-New\" actually mean?", a: "Grading standards vary by seller, but it generally permits light cosmetic wear while guaranteeing full functionality. Check the specific listing's terms." },
  { q: "Do refurbished units come with a warranty?", a: "Often, but terms vary and may be shorter than a new unit's warranty. Verify this on the current listing before buying." },
  { q: "Should I get 32GB or 64GB refurbished?", a: "The price gap between the two refurbished Kindle Scribe options is only about $21, so 64GB is the better value for most buyers." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-under-200", title: "Best Digital Notebooks Under $200 (2026)" },
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
