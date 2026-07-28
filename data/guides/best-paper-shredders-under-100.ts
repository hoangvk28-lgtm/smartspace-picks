export const guideSlug = "best-paper-shredders-under-100";
export const guideTitle = "8 Best Paper Shredders Under $100 in 2026";
export const metaTitle = "Best Paper Shredders Under $100, Honestly Reviewed (2026)";
export const metaDescription =
  "8 shredders under $100, with an honest security-level ceiling disclosure: sub-$100 shredders are almost universally P-3 to P-4, buyers needing higher security won't find it reliably at this price.";
export const mainKeyword = "paper shredder under 100";
export const introParagraphs = [
  "Sub-$100 shredders sit almost universally at P-3 to P-4 security, a real ceiling worth knowing upfront if your documents need higher-security destruction. Duty cycle at this price point is also the shortest in the category, often 3-9 minutes with 30-40 minute cooldowns, plan for that if you're purging a large document backlog.",
  "Warranty coverage at this price tier is also typically the shortest available, often 1 year, and staple/clip tolerance is generally weakest here due to standard (non-hardened) steel blades, both real cost-of-ownership factors beyond the sticker price.",
];
export const lastUpdated = "2026-07-28";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31QbluTUmKL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "amazonbasics-8-under100",
    rank: 1,
    badge: "Best Overall Under $100",
    name: "Amazon Basics 8-Sheet High Security Cross Cut Paper and Credit Card Shredder",
    price: "$33.16",
    rating: "4.3 stars from 77,112 Amazon ratings",
    reviews: "77,112 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31QbluTUmKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C6LZ8S34?tag=deskfinds0d-20",
    description:
      "At just $33.16, this is the cheapest genuinely P-4-rated shredder in this guide, with a massive review base offering exceptional real-world confidence at this price point. As with every sub-$100 pick, expect a short 3-minute duty cycle and standard (not confirmed hardened) steel blades.\n\nHandles credit cards alongside paper, a genuinely useful combination at this price tier.",
    specs: ["8-sheet cross-cut, P-4 high security", "3-minute continuous run time", "3.7-gallon bin", "Massive review base"],
    pros: ["Cheapest genuinely P-4-rated pick in this guide", "Massive proven review base", "Handles credit cards", "Reliable at this exact price point"],
    cons: ["Short 3-minute continuous run time", "Standard steel blades, not confirmed hardened for heavy staple use", "Small 3.7-gallon bin needs frequent emptying"],
    bestFor: "Buyers who want the cheapest genuinely P-4-secure shredder",
  },
  {
    id: "amazonbasics-8-white-under100",
    rank: 2,
    badge: "Same Value, White Finish",
    name: "Amazon Basics 8-Sheet Cross Cut Paper and Credit Card Shredder for Security, White",
    price: "$33.16",
    rating: "4.3 stars from 77,112 Amazon ratings",
    reviews: "77,112 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31WGmZ4xo0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C6LXGNY1?tag=deskfinds0d-20",
    description:
      "Identical spec and price to the rank-1 pick, just in white, the same P-4 security, same massive review base, and the same short 3-minute duty cycle typical of this price tier.\n\nChoose based on finish preference, the underlying value proposition is the same.",
    specs: ["8-sheet cross-cut, P-4 high security", "3-minute continuous run time", "3.7-gallon bin, white finish", "Massive review base"],
    pros: ["Same P-4 security as the rank-1 pick", "Massive proven review base", "White finish option", "Handles credit cards too"],
    cons: ["Same short 3-minute duty cycle as the rank-1 pick", "Same non-hardened blade caveat", "Small bin needs frequent emptying"],
    bestFor: "Buyers who want the same value as rank 1 in a white finish",
  },
  {
    id: "bonsen-8-under100",
    rank: 3,
    badge: "Best Compact Under-Desk Value",
    name: "BONSEN Shredder for Home Office, 4 Gallons 8-Sheet Cross Cut Credit Card Shredder",
    price: "$39.09",
    rating: "4.4 stars from 7,466 Amazon ratings",
    reviews: "7,466 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31AtA7qsSwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08J2N4CS2?tag=deskfinds0d-20",
    description:
      "Explicitly designed to fit under a desk, with a larger 4-gallon bin than the basic Amazon Basics picks at a similar price. P-4 security and ETL certification are genuine value adds at this exact price point.\n\nA reasonable step up if bin size and under-desk fit matter more to you than the absolute lowest price.",
    specs: ["8-sheet cross-cut, P-4, compact under-desk design", "5-minute continuous run time", "4-gallon bin, ETL certified", "Lift-off handle"],
    pros: ["Explicitly designed to fit under a desk", "Larger 4-gallon bin than the cheapest picks", "Longer 5-minute run time than the cheapest options", "ETL certified"],
    cons: ["Slightly higher price than the cheapest picks in this guide", "Smaller review base than the Amazon Basics picks", "Same P-4 security ceiling as the rest of this guide"],
    bestFor: "Buyers who want a larger bin and confirmed under-desk fit at a modest premium",
  },
  {
    id: "bonsaii-282-under100",
    rank: 4,
    badge: "Longest Run Time Under $100",
    name: "Bonsaii 12-Sheet Cross Cut Heavy Duty Paper Shredder for Home Office",
    price: "$79.99",
    rating: "4.5 stars from 1,685 Amazon ratings",
    reviews: "1,685 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/310qS+3q87L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5XPJ524?tag=deskfinds0d-20",
    description:
      "At $79.99, this is the priciest pick in this guide but delivers the longest continuous run time under $100 at 15 minutes, capable of roughly 900 sheets per cycle, a genuinely substantial duty cycle for the price ceiling. Jam-proof reverse and a large 5.5-gallon bin round out a strong value proposition near the top of this budget range.\n\nA reasonable choice if you're willing to spend closer to the $100 ceiling for meaningfully more run time and capacity than the cheapest picks.",
    specs: ["12-sheet cross-cut, P-4", "15-minute continuous run, ~900 sheets/cycle", "5.5-gallon bin, jam-proof reverse", "Solid rating"],
    pros: ["Longest continuous run time under $100 in this guide", "Large 5.5-gallon bin", "Jam-proof reverse system", "Higher per-pass capacity than the 8-sheet picks"],
    cons: ["Priciest pick in this guide, close to the $100 ceiling", "Not the cheapest option here", "Same P-4 security ceiling as the rest of this guide"],
    bestFor: "Buyers willing to spend near the top of this budget for the longest available run time",
  },
  {
    id: "bonsaii-9-under100",
    rank: 5,
    badge: "Compact Budget Alternative",
    name: "Bonsaii 9-Sheet Crosscut Paper Shredder for Home, P-4 Security Level",
    price: "$45.99",
    rating: "4.4 stars from 17,486 Amazon ratings",
    reviews: "17,486 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31CCjvn4JRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DK73XJCX?tag=deskfinds0d-20",
    description:
      "A large review base for this specific price point, with 9-sheet capacity slightly above the basic 8-sheet picks and a 5-minute continuous run time. P-4 security and manual reverse for jam clearing round out a solid mid-budget option.\n\nA reasonable choice if you want slightly more capacity than the cheapest 8-sheet picks without approaching the higher end of this price range.",
    specs: ["9-sheet cross-cut, P-4", "5-minute continuous run time, ~180 sheets/cycle", "Compact size (7.34 x 12.2 x 14.88 in)", "Large review base"],
    pros: ["Large review base for its specific price point", "Slightly higher capacity than the basic 8-sheet picks", "Compact footprint", "P-4 security level"],
    cons: ["Same P-4 security ceiling as every pick in this guide", "Not the cheapest option here", "Modest 5-minute run time"],
    bestFor: "Buyers who want slightly more capacity than entry-level 8-sheet picks at a moderate price",
  },
  {
    id: "bonsaii-10-under100",
    rank: 6,
    badge: "Best Large Bin Under $60",
    name: "Bonsaii 10-Sheet Heavy Duty Cross Cut Paper Shredder for Home Office",
    price: "$53.09",
    rating: "4.4 stars from 9,810 Amazon ratings",
    reviews: "9,810 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wkQYg97oL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MHR4457?tag=deskfinds0d-20",
    description:
      "A genuinely large 5.5-gallon bin at just over $50, real value at this budget tier, with 10-sheet capacity and confirmed staple/credit card handling. Strong review base offers real-world confidence in this specific balance of capacity, bin size, and price.\n\nA sensible mid-budget pick if bin size matters more to you than run time.",
    specs: ["10-sheet cross-cut, P-4", "4-minute continuous run time", "5.5-gallon bin", "Handles staples, credit cards"],
    pros: ["Large 5.5-gallon bin for the price", "Strong review base", "Handles staples and credit cards", "Good balance of capacity and price"],
    cons: ["Short 4-minute continuous run time", "Same P-4 security ceiling as the rest of this guide", "Not the absolute cheapest option here"],
    bestFor: "Buyers who want a large bin without approaching the top of this budget range",
  },
  {
    id: "amazonbasics-12-under100",
    rank: 7,
    badge: "Highest Capacity Under $60",
    name: "Amazon Basics 12-Sheet Cross-Cut Paper and Credit Card Shredder",
    price: "$58.00",
    rating: "4.3 stars from 77,112 Amazon ratings",
    reviews: "77,112 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31GNS0CdNOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C6LZG69W?tag=deskfinds0d-20",
    description:
      "The highest sheet capacity under $60 in this guide at 12 sheets, with the massive Amazon Basics review base for strong real-world confidence. P-3 security here, a step below the P-4 picks elsewhere in this guide, a real tradeoff at this specific price point.\n\nA 9-minute continuous run time is a genuine step up from the shortest budget picks, worth the modest premium over the 8-sheet options.",
    specs: ["12-sheet cross-cut, P-3 security", "9-minute continuous run time", "5-gallon bin", "Massive review base"],
    pros: ["Highest capacity under $60 in this guide", "Massive proven review base", "Longer run time than the 8-sheet budget picks", "Large 5-gallon bin"],
    cons: ["P-3 security, lower than the P-4 picks elsewhere in this guide", "Not the cheapest option here", "Standard blade hardness, not confirmed"],
    bestFor: "Buyers who want the highest capacity in the sub-$60 range and accept P-3 security",
  },
  {
    id: "bonsaii-c275-under100",
    rank: 8,
    badge: "Most Compact, Lowest Run Time",
    name: "Bonsaii 12-Sheet Cross Cut Paper Shredder, 5.5 Gal Home Office Heavy Duty",
    price: "$55.24",
    rating: "4.5 stars from 8,974 Amazon ratings",
    reviews: "8,974 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31H0gGU7jHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09N991KVT?tag=deskfinds0d-20",
    description:
      "A genuinely compact 12-sheet-rated pick with a large 5.5-gallon bin, priced in the middle of this guide's range. Its short 6-minute continuous run time is typical of this price tier, plan for occasional light use rather than large bulk sessions.\n\nA reasonable, well-rated all-around choice for light home-office needs within this budget.",
    specs: ["12-sheet cross-cut, P-4", "6-minute continuous run time", "5.5-gallon bin, compact", "Strong rating and review base"],
    pros: ["Compact footprint fits under a desk", "Large 5.5-gallon bin", "Strong rating and review base", "P-4 security level"],
    cons: ["Short 6-minute continuous run time typical of this price tier", "Same P-4 security ceiling as the rest of this guide", "Not suited for large bulk purges"],
    bestFor: "Buyers who want a compact, well-rated shredder for light regular home-office use",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Explicit security-level ceiling disclosure at this price tier", description: "Confirmed that every pick in this guide sits at P-3 or P-4 security, the realistic ceiling under $100, buyers needing higher security destruction won't find it reliably in this price range." },
  { title: "Duty cycle and cooldown as a cost-of-ownership factor", description: "Highlighted that sub-$100 shredders have the shortest duty cycles in the category (3-15 minutes), front-and-center rather than buried, since this directly affects realistic bulk-purge expectations." },
  { title: "Blade hardness disclosure (or its absence) as a reliability signal", description: "Noted that none of the picks in this guide explicitly confirm hardened steel blades, the sub-$100 tier is the segment least likely to disclose this detail, making staple-tolerance claims less verifiable here than at higher price points." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Security Level Ceiling Under $100",
    note: "Every pick in this guide sits at P-3 or P-4, none reach the higher P-5+ micro-cut security level sometimes marketed for sensitive financial or ID documents. If you specifically need P-5 or higher, this price tier won't reliably deliver it, look above $100 for that requirement.",
  },
  {
    subheading: "Duty Cycle Expectations at This Price",
    table: {
      headers: ["Price range", "Typical duty cycle", "Picks"],
      rows: [
        ["$33-45", "3-5 minutes", "Amazon Basics 8-sheet (both), BONSEN 8-sheet, Bonsaii 9-sheet (ranks 1-3, 5)"],
        ["$53-58", "4-9 minutes", "Bonsaii 10/12-sheet, Amazon Basics 12-sheet (ranks 6-8)"],
        ["$80 (top of range)", "15 minutes", "Bonsaii 12-sheet C282-A (rank 4)"],
      ],
    },
  },
  {
    subheading: "Warranty and Blade Hardness Aren't Usually Disclosed Here",
    note: "None of the picks in this guide explicitly confirm hardened steel blades, and warranty terms at this price tier are typically the shortest available (often around 1 year). Factor both into your total cost-of-ownership expectations, not just the sticker price, since sub-$100 shredders both wear faster and are covered for a shorter period than pricier alternatives.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Sub-$100 shredders are almost universally P-3 to P-4, not higher", explanation: "None of the picks in this guide reach P-5+ security. If your documents need that higher tier, this price range won't reliably deliver it." },
  { criterion: "Duty cycle at this price point is the shortest in the category", explanation: "Budget shredders in this guide run continuously for only 3-15 minutes before needing a 30-40+ minute cooldown, plan for light, occasional use rather than a large one-sitting purge." },
  { criterion: "Warranty coverage is typically shorter than pricier alternatives", explanation: "Sub-$100 shredders commonly carry around 1-year warranties, factor this into total cost-of-ownership since these units both wear faster and are covered for less time than premium models." },
  { criterion: "Blade hardness is rarely disclosed at this price tier", explanation: "None of the picks in this guide explicitly confirm hardened steel blades, making staple/clip-tolerance claims the least independently verifiable in this specific price bracket." },
];

export const faq: FaqItem[] = [
  { q: "Can I get a high-security P-5 shredder for under $100?", a: "Reliably, no. Every pick in this guide sits at P-3 or P-4 security, the realistic ceiling for sub-$100 shredders. If you need P-5+ for highly sensitive documents, look at higher price tiers." },
  { q: "How long can I shred continuously with a sub-$100 shredder?", a: "Typically only 3-15 minutes before needing a cooldown of 30-40+ minutes. This is the shortest duty-cycle range in the shredder category, plan for light, occasional sessions rather than one large purge." },
  { q: "Are warranties shorter on budget shredders?", a: "Generally yes. Sub-$100 shredders commonly carry around 1-year warranties, shorter than premium models, a real cost-of-ownership factor since these units also tend to wear faster." },
  { q: "Which pick in this guide has the longest run time under $100?", a: "The Bonsaii 12-sheet C282-A pick (rank 4) offers 15 minutes of continuous run time, capable of roughly 900 sheets per cycle, the longest confirmed duty cycle among the picks in this guide." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-8-sheet-paper-shredders", title: "Best 8-Sheet Paper Shredders (2026)" },
  { href: "/guide/best-10-sheet-paper-shredders", title: "Best 10-Sheet Paper Shredders (2026)" },
  { href: "/guide/best-paper-shredders-for-credit-cards", title: "Best Paper Shredders for Credit Cards (2026)" },
];
