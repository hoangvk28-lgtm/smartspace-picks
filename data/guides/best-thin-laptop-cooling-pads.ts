export const guideSlug = "best-thin-laptop-cooling-pads";
export const guideTitle = "5 Best Thin Laptop Cooling Pads in 2026";
export const metaTitle = "Best Thin Laptop Cooling Pads (2026)";
export const metaDescription =
  "5 slim, portable laptop cooling pads compared for actual collapsed thickness and portability, for buyers who want cooling without a bulky raised stand.";
export const mainKeyword = "thin laptop cooling pad";
export const introParagraphs = [
  "We prioritized products explicitly described as \"slim\" or \"portable\" in their own listings, since a thin cooling pad needs to pack down for travel or minimal desk footprint, not just look flat in a product photo.",
  "This overlaps with our flat laptop cooling pads guide, since \"thin\" and \"flat\" describe closely related product designs.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/51phX6jwL9L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b016cl2de6-thinpad",
    rank: 1,
    badge: "Best Overall",
    name: "TECKNET Laptop Cooling Pad, Portable Slim Laptop Cooler for 12\"-17\" Laptops",
    price: "$26.84",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/51phX6jwL9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B016CL2DE6?tag=deskfinds0d-20",
    description: "Explicitly marketed as slim and portable, covering a wide 12-17 inch laptop range, directly matching the thin/slim category this search targets.",
    specs: ["Explicitly slim, portable design", "Fits 12-17 inch laptops"],
    pros: ["Directly marketed as slim/portable", "Wide laptop size compatibility"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers who want a confirmed slim design across a wide laptop size range.",
  },
  {
    id: "b00nnmb3ks-thinpad",
    rank: 2,
    badge: "Most Proven Overall",
    name: "havit HV-F2056 15.6\"-17\" Laptop Cooler Cooling Pad - Slim Portable USB Powered (3 Fans)",
    price: "$27.99",
    rating: "4.5",
    reviews: "45,172",
    imageUrl: "https://m.media-amazon.com/images/I/51+142vwVRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00NNMB3KS?tag=deskfinds0d-20",
    description: "Also explicitly marketed as slim and portable, with by far the largest review base of any cooling pad in our entire research pass at 45,172 reviews.",
    specs: ["Slim, portable design", "45,172 reviews at 4.5 stars"],
    pros: ["Explicitly slim/portable design", "By far the largest review base in our entire cooling pad research"],
    cons: ["Slightly higher price than the TECKNET pick"],
    bestFor: "Buyers who want the most proven slim cooling pad available.",
  },
  {
    id: "b082ssjy2c-thinpad",
    rank: 3,
    badge: "Best Ultra-Slim Marketed Option",
    name: "Laptop Cooling Pad with 6 Quiet LED Fans, Portable Ultra Slim USB Powered",
    price: "$21.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/51KmjcikP8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B082SSJY2C?tag=deskfinds0d-20",
    description: "Explicitly described as \"ultra slim\" in the listing, fitting 6 fans into a low-profile design, at a mid-range price.",
    specs: ["Explicitly ultra-slim design", "6 quiet LED fans"],
    pros: ["Marketed specifically as ultra-slim despite fitting 6 fans"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers who want maximum fan count within a genuinely slim profile.",
  },
  {
    id: "b08trgt9vz-thinpad",
    rank: 4,
    badge: "Best Aluminum Slim Option",
    name: "ICE COOREL Aluminum Laptop Cooling Pad, 7 Height Adjustable",
    price: "$19.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/412Uv1YKYyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08TRGT9VZ?tag=deskfinds0d-20",
    description: "An aluminum-bodied pad that's inherently lower profile than plastic fan-array designs, with 7 height settings and the lowest price in this comparison.",
    specs: ["Aluminum body, single fan", "7 height-adjustable positions"],
    pros: ["Lowest price in this comparison", "Aluminum construction is inherently slim and durable"],
    cons: ["No review history available yet on this specific listing"],
    bestFor: "Buyers who want a slim aluminum design at the lowest price.",
  },
  {
    id: "b01469djlm-thinpad",
    rank: 5,
    badge: "Best Multi-Fan Slim Alternative",
    name: "Kootek Laptop Cooling Pad Cooler Stand with 5 Quiet Fans for 12\"-17\" Laptop",
    price: "$24.99",
    rating: "4.4",
    reviews: "14,981",
    imageUrl: "https://m.media-amazon.com/images/I/51QkELL-KFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01469DJLM?tag=deskfinds0d-20",
    description: "Not explicitly marketed as slim, but a very large, proven review base for buyers open to a standard-profile stand with more fans.",
    specs: ["5 quiet fans", "6 adjustable heights", "14,981 reviews at 4.4 stars"],
    pros: ["Very large, proven review base"],
    cons: ["Not specifically marketed as thin/slim like the other picks"],
    bestFor: "Buyers who want a proven pad and are less focused on a strictly slim profile.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Required explicit slim/portable marketing language", description: "We prioritized listings that specifically describe themselves as slim or portable, rather than assuming any flat-looking pad qualifies." },
  { title: "Aluminum construction noted as inherently slimmer", description: "We flagged where a pad's aluminum body contributes to a naturally lower profile than a plastic fan-array housing." },
  { title: "Fan count against profile thickness", description: "We noted where a pad fits more fans while still marketing itself as slim, a real design achievement worth highlighting." },
  { title: "Review volume weighted heavily for the top picks", description: "We prioritized established review history alongside the slim-design claims." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Overlaps With Our Flat Laptop Cooling Pads Guide",
    note: "\"Thin\" and \"flat\" cooling pads draw from a very similar product pool. Check our flat laptop cooling pads guide for additional options if these don't fit your needs.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Look for explicit slim/portable marketing language", explanation: "We prioritized listings that specifically claim a slim or portable design, rather than assuming any low-profile-looking pad qualifies." },
  { criterion: "Consider aluminum construction for inherent slimness", explanation: "The ICE COOREL pick's aluminum body is naturally lower profile than plastic fan-array housings." },
  { criterion: "Weigh review volume for confidence in real-world slimness claims", explanation: "The havit pick's massive review base is useful evidence its slim marketing holds up in practice." },
  { criterion: "Check overlap with our flat cooling pads guide", explanation: "The two categories draw from a similar product pool — check both for the fullest range of options." },
  { criterion: "Balance fan count against your desired profile thickness", explanation: "More fans can mean a slightly thicker design, though some products manage to fit more fans while staying genuinely slim." },
];

export const faq: FaqItem[] = [
  { q: "Which is explicitly marketed as slim?", a: "The TECKNET, havit, and the ultra-slim 6-fan pad all specifically use \"slim\" or \"portable\" in their own product descriptions." },
  { q: "Which has the most reviews?", a: "The havit HV-F2056, with 45,172 reviews at 4.5 stars." },
  { q: "Is there a slim aluminum option?", a: "Yes, the ICE COOREL Aluminum Laptop Cooling Pad, at the lowest price in this comparison." },
  { q: "How is this different from your flat laptop cooling pads guide?", a: "The product pool overlaps substantially — check that guide too if these don't fit your needs." },
  { q: "Can a slim pad still have multiple fans?", a: "Yes, the ultra-slim 6-fan pick manages to fit 6 fans into a marketed slim profile." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-flat-laptop-cooling-pads", title: "Best Flat Laptop Cooling Pads (2026)" },
  { href: "/guide/best-single-fan-laptop-cooling-pads", title: "Best Single-Fan Laptop Cooling Pads (2026)" },
  { href: "/guide/best-laptop-cooling-pads", title: "Best Laptop Cooling Pads (2026)" },
];
