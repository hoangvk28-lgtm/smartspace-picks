export const guideSlug = "best-air-purifiers-under-100";
export const guideTitle = "5 Best Air Purifiers Under $100 in 2026";
export const metaTitle = "Best Air Purifiers Under $100, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers under $100 we evaluated, with the true cost-of-ownership angle competitors skip: the sticker price is only part of the story, ongoing filter replacement cost over a year can rival or exceed the unit's original price.";
export const mainKeyword = "air purifier under $100";
export const introParagraphs = [
  "The sticker price is only part of the true cost, ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, a real factor competitors rarely mention when comparing budget units.",
  "A budget unit under $100 can still be genuinely capable for a small-to-medium room, the price cut is more often in smart features and app control than in core filtration quality, worth knowing before assuming cheaper means meaningfully worse performance.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-core300-under100",
    rank: 1,
    badge: "Best Air Purifier Under $100 Overall",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=deskfinds0d-20",
    description:
      "By far the largest review base of any pick here at under $90, genuine True HEPA H13 filtration that doesn't cut corners on the core filtration quality despite the budget price.\n\nThe price cut here is in smart features and app control, not core filtration, factor in the replacement filter cost over a year when comparing this to pricier alternatives.",
    specs: ["True HEPA H13, 99.97% particulate removal", "24dB quoted noise level", "Largest review base in this guide", "Under $90 at time of writing"],
    pros: ["By far the largest review base of any pick here", "Genuine True HEPA H13 filtration despite budget price", "Very quiet at 24dB", "Affordable replacement filters"],
    cons: ["No smart app control", "No air quality sensor", "Standard CADR, not the highest airflow pick"],
    bestFor: "Buyers wanting the most-proven budget pick with genuine HEPA filtration",
  },
  {
    id: "germguardian-under100",
    rank: 2,
    badge: "Best Value Pick Under $100",
    name: "Germ Guardian True HEPA Filter Air Purifier for Home",
    price: "$80.74",
    rating: "4.6 stars from 63,485 Amazon ratings",
    reviews: "63,485 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41c0eBmqPXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004VGIGVY?tag=deskfinds0d-20",
    description:
      "A large, well-established review base at a low price, genuine True HEPA filtration with a carbon component included at this budget tier.\n\nCheck the manufacturer's stated filter lifespan and current replacement filter price before buying, since ongoing cost over a year can rival the unit's original purchase price.",
    specs: ["True HEPA filtration with carbon component", "Large review base", "Compact design", "Budget-friendly"],
    pros: ["Large, well-established review base", "Low upfront price", "True HEPA filtration plus a carbon component", "Compact footprint"],
    cons: ["No filter indicator to track replacement timing", "No smart features", "No air quality sensor"],
    bestFor: "Buyers wanting a proven value pick with HEPA and carbon filtration",
  },
  {
    id: "mooka-pr1-under100",
    rank: 3,
    badge: "Best Budget Pick for a Larger Room",
    name: "MOOKA Air Purifiers for Home Large Room, PR1 HEPA Air Purifier",
    price: "$79.99",
    rating: "4.6 stars from 4,454 Amazon ratings",
    reviews: "4,454 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41oQGJqYNKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCBC8KKV?tag=deskfinds0d-20",
    description:
      "An affordable option with a solid review base, marketed for a larger room than a typical budget desktop unit while staying under $100.\n\nA budget unit under $100 can still be genuinely capable for a small-to-medium room, this pick's disclosed coverage rating supports that at its price point.",
    specs: ["HEPA filtration", "Solid review base", "Larger-room marketing at a budget price", "Under $80 at time of writing"],
    pros: ["Affordable price for a larger-room-marketed unit", "Solid review base", "Genuine HEPA filtration", "Good value for the coverage claimed"],
    cons: ["No smart app control", "No air quality sensor", "No filter indicator"],
    bestFor: "Buyers wanting more coverage for the money at a budget price",
  },
  {
    id: "afloia-under100",
    rank: 4,
    badge: "Best Compact Budget Pick",
    name: "Afloia Air Purifiers for Home Large Room Up to 900 Sq Ft, H13 True HEPA Air Purifier PM2.5",
    price: "$79.99",
    rating: "4.6 stars from 1,384 Amazon ratings",
    reviews: "1,384 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Y2LKzLmSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CHW2LLSJ?tag=deskfinds0d-20",
    description:
      "An affordable pick with a genuine 900 sq ft coverage claim and True HEPA PM2.5 filtration, a solid review base backing its performance at this price tier.\n\nCompare the manufacturer's filter lifespan claim against your actual usage before buying, cooking or pet-heavy homes will need more frequent replacement than the standard estimate.",
    specs: ["True HEPA PM2.5 filtration", "Up to 900 sq ft rated (open room)", "Solid review base", "Under $80 at time of writing"],
    pros: ["Affordable price for the coverage offered", "Solid review base", "True HEPA captures particulate effectively", "Reasonable performance for the price"],
    cons: ["No smart app control", "No air quality sensor", "No filter indicator"],
    bestFor: "Budget buyers wanting a disclosed coverage rating for a larger small room",
  },
  {
    id: "mooka-under100",
    rank: 5,
    badge: "Best Ultra-Budget Pick",
    name: "MOOKA Small Air Purifier for Bedroom",
    price: "$45.30",
    rating: "4.5 stars from 9,252 Amazon ratings",
    reviews: "9,252 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41mBUdCzQwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PJQ3MWB?tag=deskfinds0d-20",
    description:
      "The lowest price in this guide by a wide margin with a large review base, genuinely appropriate for a desk zone or small personal space on a tight budget.\n\nAt this price point, the ongoing filter replacement cost matters even more proportionally, factor that into your true cost of ownership over a year.",
    specs: ["Compact desktop footprint", "Large review base", "Lowest price in this guide", "Under $50 at time of writing"],
    pros: ["Lowest price in this guide by a wide margin", "Large, well-established review base", "Good value for a desk-zone unit", "Very compact footprint"],
    cons: ["Lower CADR appropriate only for a desk zone, not a full room", "No smart features", "Basic filtration compared to premium picks"],
    bestFor: "Tightest-budget buyers wanting a desk zone or personal-space unit",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "True cost of ownership beyond the sticker price", description: "Considered that ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, not just the upfront number." },
  { title: "What the budget price cut actually sacrifices", description: "Weighed that the price cut on a budget unit is more often in smart features and app control than in core filtration quality, evaluating each pick's actual HEPA and carbon filtration honestly." },
  { title: "Coverage claims verified against price point", description: "Checked whether each pick's disclosed coverage rating was reasonable for its price, rather than assuming a low price automatically means reduced coverage." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Factor in Filter Replacement Cost, Not Just the Sticker Price",
    note: "The sticker price is only part of the true cost, ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price. Check the manufacturer's stated filter lifespan and current replacement filter price before buying, not just the unit's upfront cost.",
  },
  {
    subheading: "A Budget Price Usually Cuts Features, Not Core Filtration",
    note: "A budget unit under $100 can still be genuinely capable for a small-to-medium room, the price cut is more often in smart features and app control than in core filtration quality. Don't assume cheaper automatically means meaningfully worse air cleaning, check the actual HEPA and carbon specification.",
  },
  {
    subheading: "Match Coverage Claims to Your Actual Room, Even at a Low Price",
    note: "Some budget units genuinely disclose a reasonable coverage rating for their price, others rely on vague marketing. Prioritize a pick with a specific square-footage or CADR number over one relying on generic 'large room' language alone.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "The sticker price is only part of the true cost of ownership", explanation: "Ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, check the filter lifespan and replacement cost before buying." },
  { criterion: "A budget price usually cuts smart features, not core filtration", explanation: "The price cut on a sub-$100 unit is more often in app control and sensors than in HEPA and carbon filtration quality, don't assume cheaper means meaningfully worse air cleaning." },
  { criterion: "Prioritize a specific disclosed coverage number over vague marketing", explanation: "Some budget units genuinely publish a square-footage or CADR rating, others rely on generic 'large room' language, favor the ones with a specific number." },
  { criterion: "The cheapest option is best matched to a desk zone, not a full room", explanation: "At the very bottom of the price range, expect a lower CADR appropriate for a small personal space rather than a full bedroom or living area." },
];

export const faq: FaqItem[] = [
  { q: "Is a budget air purifier under $100 actually worth it?", a: "Often yes for core filtration. The price cut is more often in smart features and app control than in core HEPA filtration quality, a genuine True HEPA budget unit can be a reasonable choice." },
  { q: "What's the real cost of owning a cheap air purifier over time?", a: "More than the sticker price suggests. Ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, factor that into your comparison." },
  { q: "How do I know if a budget air purifier can cover my room?", a: "Check for a specific disclosed square-footage or CADR rating rather than trusting vague 'large room' marketing language, which doesn't tell you much about actual capacity." },
  { q: "Is the cheapest air purifier under $50 good enough for a bedroom?", a: "It's best matched to a desk zone or small personal space rather than a full bedroom, expect a lower CADR at that price point." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-under-200", title: "Best Air Purifiers Under $200 (2026)" },
  { href: "/guide/best-small-air-purifiers", title: "Best Small Air Purifiers (2026)" },
  { href: "/guide/best-hepa-air-purifiers", title: "Best HEPA Air Purifiers (2026)" },
];
