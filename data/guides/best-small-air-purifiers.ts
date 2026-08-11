export const guideSlug = "best-small-air-purifiers";
export const guideTitle = "5 Best Small Air Purifiers in 2026";
export const metaTitle = "Best Small Air Purifiers, Honestly Reviewed (2026)";
export const metaDescription =
  "5 small air purifiers we evaluated, with the CADR-per-square-foot tradeoff competitors skip: a small footprint often means a smaller fan and filter surface, meaning genuinely lower CADR than its size alone would suggest.";
export const mainKeyword = "small air purifier";
export const introParagraphs = [
  "A small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR (Clean Air Delivery Rate) than the compact size alone would suggest, worth checking the actual coverage rating rather than assuming small equals sufficient.",
  "Desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment, a scope mismatch that leads to disappointing results when a compact unit is asked to cover more space than it's rated for.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/51SEA4kds4L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "medify-ma35-small",
    rank: 1,
    badge: "Best Small Air Purifier Overall",
    name: "Medify MA-35 Air Purifier with H13 True HEPA Filter | 330 sq ft Coverage | for Allergies, Pets, Smoke, Smokers, Dust, Odors | Quiet 99.9% Removal to 0.1 Microns | White, 1-Pack",
    price: "$107.99",
    rating: "3.9 stars from 197 Amazon ratings",
    reviews: "197 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51SEA4kds4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08GQ9BQB4?tag=deskfinds0d-20",
    description:
      "A compact footprint with genuine 330 sq ft coverage rating and a specific 0.1-micron removal specification, appropriate for a small bedroom or home office rather than a whole apartment.\n\nA small footprint doesn't automatically mean lower performance here, this unit's disclosed coverage and micron specification give real confidence in its capacity for its size.",
    specs: ["99.9% removal to 0.1 microns", "330 sq ft coverage", "H13 True HEPA", "Compact footprint"],
    pros: ["Genuine disclosed coverage rating for its compact size", "Explicit 0.1-micron removal specification", "Marketed for multiple issues (allergies, pets, smoke, odors)", "Reasonable price"],
    cons: ["Lower average rating than other picks in this guide", "Smaller review base", "Not intended for a whole small apartment"],
    bestFor: "Buyers wanting a compact unit with a genuinely disclosed coverage rating",
  },
  {
    id: "levoit-core300-small",
    rank: 2,
    badge: "Best Small Air Purifier for Proven Reliability",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=deskfinds0d-20",
    description:
      "A compact cylindrical footprint with by far the largest review base of any pick here, genuinely proven for a small bedroom or desk zone at 24dB quoted noise.\n\nDesktop and small-room units like this are appropriate for a single space specifically, not a whole small apartment, match your expectation to that scope.",
    specs: ["True HEPA H13, 99.97% particulate removal", "24dB quoted noise level", "Compact cylindrical footprint", "Largest review base in this guide"],
    pros: ["By far the largest review base of any pick here", "Compact footprint fits a small room or desk zone", "Certified True HEPA H13 filtration", "Very quiet at 24dB"],
    cons: ["Not rated for a whole small apartment", "No smart app control", "Standard CADR, not the highest airflow pick here"],
    bestFor: "Buyers wanting the most-proven compact pick for a single small room",
  },
  {
    id: "mooka-pr1-small",
    rank: 3,
    badge: "Best Budget Small Air Purifier",
    name: "MOOKA Air Purifiers for Home Large Room, PR1 HEPA Air Purifier",
    price: "$79.99",
    rating: "4.6 stars from 4,454 Amazon ratings",
    reviews: "4,454 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51nlbgobV2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCBC8KKV?tag=deskfinds0d-20",
    description:
      "An affordable compact option with a solid review base, genuinely capable for a small room or desk zone rather than an open-plan space.\n\nCheck the disclosed coverage rating against your actual room size before buying, a small footprint here does correspond to a genuinely smaller-room CADR rather than an oversized promise.",
    specs: ["HEPA filtration", "Compact footprint", "Solid review base", "Budget-friendly"],
    pros: ["Affordable price for a compact unit", "Solid review base", "Compact footprint fits a small room", "Reasonable performance for its size"],
    cons: ["Lower CADR than larger-footprint alternatives", "Not intended for an open-plan or larger space", "Fewer smart features than premium picks"],
    bestFor: "Budget-conscious buyers with a genuinely small single room",
  },
  {
    id: "mooka-small2",
    rank: 4,
    badge: "Best Ultra-Compact Small Air Purifier",
    name: "MOOKA Small Air Purifier for Bedroom",
    price: "$45.30",
    rating: "4.5 stars from 9,252 Amazon ratings",
    reviews: "9,252 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41zOBElZS-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PJQ3MWB?tag=deskfinds0d-20",
    description:
      "The lowest price and most compact footprint in this guide with a large review base, genuinely appropriate for a small desk zone or a personal space within a larger room.\n\nA small footprint often means a smaller fan and less filter surface area, resulting in a genuinely lower CADR, this unit is best matched to a desk-zone scope rather than a full small bedroom.",
    specs: ["Compact desktop footprint", "Large review base", "Lowest price in this guide", "Budget-friendly"],
    pros: ["Lowest price in this guide", "Large, well-established review base", "Very compact, fits on a desk", "Good value for a desk-zone unit"],
    cons: ["Lower CADR appropriate only for a desk zone, not a full room", "No smart features", "Basic filtration compared to premium picks"],
    bestFor: "A desk zone or personal space rather than a full small bedroom",
  },
  {
    id: "germguardian-small",
    rank: 5,
    badge: "Best Small Air Purifier with Largest Track Record",
    name: "Germ Guardian True HEPA Filter Air Purifier for Home",
    price: "$80.74",
    rating: "4.6 stars from 63,485 Amazon ratings",
    reviews: "63,485 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316AtkHoSdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004VGIGVY?tag=deskfinds0d-20",
    description:
      "A compact, well-established design with a large review base, genuinely capable for a small bedroom or home office at a reasonable price.\n\nMatch your expectation of coverage to this unit's actual rated small-room size, not a whole apartment, for realistic results.",
    specs: ["True HEPA filtration", "Large review base", "Compact design", "Budget-friendly"],
    pros: ["Large, well-established review base", "Compact footprint for a small room", "True HEPA filtration", "Reasonable price"],
    cons: ["Not rated for a whole small apartment", "No filter indicator", "Fewer smart features than premium alternatives"],
    bestFor: "Small bedrooms or home offices wanting a proven compact pick",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "CADR relative to compact footprint", description: "Considered that a small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR than the compact size alone would suggest." },
  { title: "Realistic scope: single room versus whole apartment", description: "Weighed that desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment." },
  { title: "Disclosed coverage rating verified against claims", description: "Checked whether each pick published a genuine coverage or CADR figure rather than relying on compact size alone to imply adequate performance." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Small Size Often Means Lower CADR, Check the Rating",
    note: "A small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR than the compact size alone would suggest. Always check the actual disclosed coverage rating rather than assuming small equals sufficient for your room.",
  },
  {
    subheading: "Match Scope: Desk Zone vs. Small Room vs. Small Apartment",
    table: {
      headers: ["Your space", "Recommended pick"],
      rows: [
        ["A desk zone or personal space", "MOOKA Small Air Purifier for Bedroom"],
        ["A genuinely small single room", "MOOKA PR1 HEPA Air Purifier"],
        ["A small bedroom with proven reliability", "LEVOIT Core 300"],
        ["A small bedroom needing a specific micron spec", "Medify MA-35"],
      ],
    },
    note: "Desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment. A scope mismatch here is the most common source of disappointment with a compact unit.",
  },
  {
    subheading: "When a Compact Unit Isn't Enough",
    note: "If your space is closer to a full small apartment or an open-plan studio, a compact unit rated for one room likely won't keep up. Consider a larger-capacity unit instead, or use multiple compact units placed in each separate room.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "A small footprint often means a genuinely lower CADR", explanation: "Less fan size and filter surface area in a compact unit results in lower real Clean Air Delivery Rate than the compact size alone would suggest, check the disclosed rating." },
  { criterion: "Match the unit's scope to your actual space, not just your room count", explanation: "Desktop-sized units suit a single small room or a desk zone specifically, not a whole small apartment, a common scope mismatch." },
  { criterion: "Verify a genuine disclosed coverage rating exists", explanation: "A trustworthy compact pick publishes an actual square-footage or CADR figure rather than relying on small size alone to imply adequate performance." },
  { criterion: "Consider multiple compact units for a multi-room small space", explanation: "A studio or small apartment with multiple distinct areas often does better with one compact unit per room than a single unit expected to cover everything." },
];

export const faq: FaqItem[] = [
  { q: "Does a smaller air purifier clean air slower than a larger one?", a: "Often yes. A small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR than the compact size alone would suggest, check the disclosed coverage rating." },
  { q: "Can a small air purifier cover my whole studio apartment?", a: "Usually not well. Desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment, that's a common scope mismatch leading to disappointing results." },
  { q: "What should I check before buying a compact air purifier?", a: "Verify it has a genuine disclosed coverage or CADR rating rather than assuming its small size alone implies adequate performance for your specific room." },
  { q: "Should I buy one compact unit or several for a small multi-room apartment?", a: "Several is often better. A studio or small apartment with multiple distinct areas typically does better with one compact unit per room than a single unit expected to cover everything." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-air-purifiers-for-desks", title: "Best Compact Air Purifiers for Desks (2026)" },
  { href: "/guide/best-desktop-air-purifiers", title: "Best Desktop Air Purifiers (2026)" },
  { href: "/guide/best-portable-air-purifiers", title: "Best Portable Air Purifiers (2026)" },
];
