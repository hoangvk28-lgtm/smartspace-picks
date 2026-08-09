export const guideSlug = "best-laptop-cooling-pads-for-desk-use";
export const guideTitle = "5 Best Laptop Cooling Pads for Desk Use in 2026";
export const metaTitle = "Best Laptop Cooling Pads for Desk Use (2026)";
export const metaDescription =
  "5 raised-stand cooling pads specifically suited to a stable desk surface, distinguished from lap-style mats that solve a different placement problem.";
export const mainKeyword = "laptop cooling pad for desk";
export const introParagraphs = [
  "This overlaps substantially with our home office cooling pads guide, since desk use is the primary scenario there too. Here we specifically excluded lap-mat-style products in favor of raised stands built for a stable table surface.",
  "A raised stand generally gives better airflow underneath the laptop than a flat lap mat, which is the main functional advantage for pure desk use.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b00nnmb3ks-deskusepad",
    rank: 1,
    badge: "Best Overall",
    name: "havit HV-F2056 15.6\"-17\" Laptop Cooler Cooling Pad - Slim Portable USB Powered (3 Fans)",
    price: "$27.99",
    rating: "4.5",
    reviews: "45,172",
    imageUrl: "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00NNMB3KS?tag=deskfinds0d-20",
    description: "A genuine raised stand with by far the largest review base in our entire cooling pad research, well-suited to a stable desk surface.",
    specs: ["Raised stand, 3 fans", "45,172 reviews at 4.5 stars"],
    pros: ["By far the largest review base in our entire cooling pad research", "True raised stand for airflow under the laptop"],
    cons: ["Verify slim profile matches your desired typing angle"],
    bestFor: "Buyers who want the single most proven desk-stand cooling pad.",
  },
  {
    id: "b01469djlm-deskusepad",
    rank: 2,
    badge: "Best Ergonomic Adjustment",
    name: "Kootek Laptop Cooling Pad Cooler Stand with 5 Quiet Fans for 12\"-17\" Laptop",
    price: "$24.99",
    rating: "4.4",
    reviews: "14,981",
    imageUrl: "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01469DJLM?tag=deskfinds0d-20",
    description: "6 adjustable height settings, ideal for a desk setup where you want to fine-tune the typing angle, with a very large review base.",
    specs: ["5 fans, 6 adjustable heights", "14,981 reviews at 4.4 stars"],
    pros: ["6 height settings for desk-specific angle adjustment", "Very large, proven review base"],
    cons: ["Slightly more bulk than the slim options"],
    bestFor: "Buyers who want fine-tuned ergonomic adjustment for a desk setup.",
  },
  {
    id: "b016cl2de6-deskusepad",
    rank: 3,
    badge: "Best Slim Desk Stand",
    name: "TECKNET Laptop Cooling Pad, Portable Slim Laptop Cooler for 12\"-17\" Laptops",
    price: "$26.84",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B016CL2DE6?tag=deskfinds0d-20",
    description: "A slim raised stand covering a wide laptop size range, well-suited to a desk with limited surface depth.",
    specs: ["Explicitly slim raised stand", "Fits 12-17 inch laptops"],
    pros: ["Directly marketed as slim, minimizing desk footprint", "Wide laptop size compatibility"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers with a shallow desk who want a slim raised stand.",
  },
  {
    id: "b08h5fbrd4-deskusepad",
    rank: 4,
    badge: "Best Budget Option",
    name: "LIANGSTAR Laptop Cooling Pad, Gaming Laptop Cooler with 2 Quiet Big Fans, RGB",
    price: "$16.99",
    rating: "4.4",
    reviews: "1,775",
    imageUrl: "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08H5FBRD4?tag=deskfinds0d-20",
    description: "The cheapest genuine raised stand in this comparison, with 2 large fans and RGB lighting for a gaming-adjacent desk aesthetic.",
    specs: ["Raised stand, 2 large fans, RGB", "1,775 reviews at 4.4 stars"],
    pros: ["Cheapest raised stand in this comparison", "Solid review base with RGB styling"],
    cons: ["Fewer height-adjustment options than the pricier picks"],
    bestFor: "Budget-focused buyers who want a proven raised desk stand.",
  },
  {
    id: "b07tkddz87-deskusepad",
    rank: 5,
    badge: "Verify Current Listing",
    name: "Additional Desk Cooling Pad Option",
    price: "See listing",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07TKDDZ87?tag=deskfinds0d-20",
    description: "This listing was not accessible through our product data lookup at time of research — verify current details, price, and availability directly before considering it.",
    specs: ["Verify current specs on the listing page"],
    pros: ["Verify current details directly"],
    cons: ["Not independently verifiable in our current product data — check the live listing before buying"],
    bestFor: "Buyers willing to verify this listing's current status directly before purchase.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Excluded lap-mat-style products for pure desk focus", description: "We kept this comparison to raised stands built for a stable table surface, excluding the lap-mat products covered in our home-office guide." },
  { title: "Ergonomic height adjustment prioritized", description: "We favored products with multiple height settings, relevant for desk-specific typing angle adjustment." },
  { title: "Desk footprint compared for shallow desks", description: "We noted where a slim design suits desks with limited surface depth." },
  { title: "Review volume weighted heavily for the confirmed picks", description: "We prioritized established review history across the verified product pool." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Overlaps With Our Home Office Cooling Pads Guide",
    note: "Desk use is close to the same scenario as home-office use. This guide excludes lap-mat-style products in favor of raised stands specifically — check our home office guide if you want lap-friendly options too.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm you want a raised stand, not a lap mat", explanation: "This guide focuses specifically on raised desk stands, excluding the lap-mat products in our home-office guide." },
  { criterion: "Consider ergonomic height adjustment", explanation: "The Kootek pick's 6 height settings help fine-tune typing angle for a desk setup." },
  { criterion: "Match footprint to your desk's available depth", explanation: "The TECKNET pick's slim design suits desks with limited surface depth." },
  { criterion: "Weigh review volume heavily", explanation: "The havit and Kootek picks have the strongest review evidence in this comparison." },
  { criterion: "Verify unconfirmed listings before buying", explanation: "One listing in this category wasn't accessible through our data lookup — check its current details directly." },
];

export const faq: FaqItem[] = [
  { q: "How is this different from your home office cooling pads guide?", a: "This guide focuses specifically on raised desk stands, excluding the lap-mat-style products covered in the home-office guide." },
  { q: "Which is the most proven raised stand?", a: "The havit HV-F2056, with 45,172 reviews at 4.5 stars." },
  { q: "Is there an option with adjustable height?", a: "Yes, the Kootek Laptop Cooling Pad offers 6 height settings." },
  { q: "What's the cheapest raised stand?", a: "The LIANGSTAR Laptop Cooling Pad at $16.99." },
  { q: "What's the best option for a shallow desk?", a: "The TECKNET Laptop Cooling Pad, explicitly marketed as slim." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-laptop-cooling-pads-for-home-offices", title: "Best Laptop Cooling Pads for Home Offices (2026)" },
  { href: "/guide/best-flat-laptop-cooling-pads", title: "Best Flat Laptop Cooling Pads (2026)" },
  { href: "/guide/best-laptop-cooling-pads", title: "Best Laptop Cooling Pads (2026)" },
];
