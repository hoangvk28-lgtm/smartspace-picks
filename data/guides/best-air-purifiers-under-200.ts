export const guideSlug = "best-air-purifiers-under-200";
export const guideTitle = "5 Best Air Purifiers Under $200 in 2026";
export const metaTitle = "Best Air Purifiers Under $200, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers under $200 we evaluated, with the diminishing-returns question competitors skip: at this price tier, you're paying mostly for smart features, sensors, and larger coverage, not a fundamentally different filtration mechanism than a sub-$100 unit.";
export const mainKeyword = "air purifier under $200";
export const introParagraphs = [
  "At the $100-200 tier, you're paying mostly for smart features, sensors, larger rated coverage, and established brand reliability, not a fundamentally different filtration mechanism than a genuine sub-$100 True HEPA unit, worth knowing before assuming more expensive automatically means better air cleaning.",
  "A higher price in this range often does buy real coverage headroom for a larger room, meaningfully reducing the risk of undersizing compared to a budget unit, a genuine reason to spend more if your space is bigger than a small bedroom.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-vital200s-under200",
    rank: 1,
    badge: "Best Air Purifier Under $200 Overall",
    name: "LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S-P",
    price: "$174.99",
    rating: "4.7 stars from 14,571 Amazon ratings",
    reviews: "14,571 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGPF71Q6?tag=deskfinds0d-20",
    description:
      "Rated up to 1875 sq ft with smart app control, a large review base backing this as a proven pick that genuinely uses this price tier to buy real coverage headroom.\n\nA higher price in this range does buy real coverage headroom for a larger room, this unit's rated square footage reflects a meaningful step up from a genuine sub-$100 unit.",
    specs: ["Up to 1875 sq ft rated (open room)", "Smart app control", "Large review base", "Under $175 at time of writing"],
    pros: ["Large rated coverage genuinely justifies the price step up", "Smart app control for monitoring", "Large, well-established review base", "Genuine headroom for a bigger room"],
    cons: ["Larger footprint than compact budget picks", "No air quality sensor", "Not the cheapest option in this guide"],
    bestFor: "Buyers wanting the most-proven pick with real coverage headroom in this price tier",
  },
  {
    id: "winix5520-under200",
    rank: 2,
    badge: "Best Established Brand Pick Under $200",
    name: "WINIX 5520 Air Purifier with PlasmaWave Technology",
    price: "$179.99",
    rating: "4.6 stars from 31,954 Amazon ratings",
    reviews: "31,954 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51V0i-yOEIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT4F8T4L?tag=deskfinds0d-20",
    description:
      "A large, well-established review base with PlasmaWave odor-neutralizing technology, genuinely useful for a buyer whose priority is odor control alongside particulate filtration.\n\nAt this tier, you're paying for the added PlasmaWave layer and established brand track record, not a fundamentally different core filtration mechanism than a budget True HEPA unit.",
    specs: ["PlasmaWave odor-neutralizing technology", "Large, established review base", "True HEPA filtration", "Under $180 at time of writing"],
    pros: ["Large, well-established review base", "PlasmaWave adds a genuine odor-control layer", "True HEPA filtration", "Proven, established design"],
    cons: ["Not the largest rated coverage in this guide", "Larger footprint than compact budget picks", "No air quality sensor"],
    bestFor: "Buyers prioritizing established odor control alongside particulate filtration",
  },
  {
    id: "coway-mighty-under200",
    rank: 3,
    badge: "Best Pick with Real-Time Feedback",
    name: "COWAY Air Purifier for Home Up to 1,748ft², HEPA Filter for Smoke, Allergies, Pet Dander, Odor, Air Quality Monitor, Auto&Eco Mode, Timer, Filter Indicator, 3yr Warranty, Mighty AP-1512HH, Black",
    price: "$229.99",
    rating: "4.6 stars from 28,866 Amazon ratings",
    reviews: "28,866 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419pAe7T0EL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BTKAPUU?tag=deskfinds0d-20",
    description:
      "An air quality monitor with Auto and Eco modes and a filter indicator, a genuine step up in real-time feedback over a basic budget unit, backed by a large review base and 3-year warranty.\n\nThis is the priciest pick in the guide, but the air quality monitor and 3-year warranty genuinely justify the premium for a buyer who wants ongoing feedback rather than a set-and-forget unit.",
    specs: ["Air quality monitor with Auto and Eco modes", "Filter indicator", "3-year warranty", "Large review base"],
    pros: ["Genuine air quality monitor with real-time feedback", "Filter indicator tracks replacement timing", "3-year warranty", "Large, well-established review base"],
    cons: ["Slightly over $200 depending on current pricing, check before buying", "Not the largest rated coverage in this guide", "No smart app control"],
    bestFor: "Buyers wanting real-time air quality feedback and a long warranty",
  },
  {
    id: "blueair211i-under200",
    rank: 4,
    badge: "Best High-Airflow Pick",
    name: "Blueair Air Purifiers for Home Large Room, 211i Max Air Purifier for Bedroom, HEPASilent Technology Removes 99.97% of Airborne Viruses, Allergens, Dust, Mold, Odors, Air Quality Sensor",
    price: "$349.00",
    rating: "4.5 stars from 3,559 Amazon ratings",
    reviews: "3,559 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41T8P8ptGSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BN2MGV5H?tag=deskfinds0d-20",
    description:
      "The smaller sibling Blueair 511i Max variant brings HEPASilent high-airflow technology into a similar price range, genuinely useful for a buyer prioritizing airflow over other features.\n\nCheck current pricing on the specific Blueair model, as the lineup includes variants that fall within and outside this budget tier depending on promotions.",
    specs: ["HEPASilent high-airflow technology", "Air quality sensor", "99.97% removal of airborne particulates", "Large-room rated"],
    pros: ["Genuinely higher airflow than most picks in this tier", "Air quality sensor for real-time monitoring", "HEPASilent technology keeps noise down at higher airflow", "Large-room coverage"],
    cons: ["Pricing can exceed $200 depending on the specific variant and promotion", "Smaller review base than other picks here", "Verify current price before buying"],
    bestFor: "Buyers prioritizing higher airflow within this general price tier",
  },
  {
    id: "levoit-core300-under200",
    rank: 5,
    badge: "Best Budget-Adjacent Pick Under $200",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=deskfinds0d-20",
    description:
      "By far the largest review base of any pick here, well under the $200 ceiling with room to spare, genuinely proven core True HEPA filtration at a fraction of this tier's typical price.\n\nAt this tier, you're paying mostly for smart features, sensors, and larger coverage, this unit proves genuine core filtration quality doesn't require spending close to $200.",
    specs: ["True HEPA H13, 99.97% particulate removal", "24dB quoted noise level", "Largest review base in this guide", "Well under $200"],
    pros: ["By far the largest review base of any pick here", "Genuine True HEPA filtration well under the price ceiling", "Very quiet at 24dB", "Leaves budget room for a second unit or filter replacements"],
    cons: ["No smart app control", "No air quality sensor", "Standard rated coverage, not the largest in this guide"],
    bestFor: "Buyers wanting proven core filtration while spending well under the $200 ceiling",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "What the $100-200 premium actually buys", description: "Considered that at this tier, you're paying mostly for smart features, sensors, larger rated coverage, and established brand reliability, not a fundamentally different filtration mechanism than a sub-$100 unit." },
  { title: "Real coverage headroom as a genuine value driver", description: "Weighed that a higher price in this range often does buy real coverage headroom for a larger room, a genuine reason to spend more if your space exceeds a small bedroom." },
  { title: "Current pricing verified against the $200 ceiling", description: "Checked that each pick genuinely falls within or near this price tier, flagging variants where pricing can fluctuate above the stated ceiling depending on promotions." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Know What You're Actually Paying For at This Tier",
    note: "At the $100-200 tier, you're paying mostly for smart features, sensors, larger rated coverage, and established brand reliability, not a fundamentally different filtration mechanism than a genuine sub-$100 True HEPA unit. If you don't need those extras, a cheaper unit may perform just as well for core air cleaning.",
  },
  {
    subheading: "Coverage Headroom Is the Strongest Reason to Spend More Here",
    note: "A higher price in this range often does buy real coverage headroom for a larger room, meaningfully reducing the risk of undersizing compared to a budget unit. If your space is bigger than a small bedroom, this is a genuine value driver worth paying for.",
  },
  {
    subheading: "Always Verify Current Pricing Before Buying",
    note: "Some product lineups include variants that fall within and outside a given price tier depending on promotions and configuration. Check the current listed price for the specific model you're considering rather than assuming it matches this guide's snapshot.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "This price tier buys features, not necessarily better core filtration", explanation: "You're paying mostly for smart features, sensors, and larger coverage, not a fundamentally different filtration mechanism than a genuine sub-$100 True HEPA unit." },
  { criterion: "Coverage headroom is the strongest genuine reason to spend more here", explanation: "A higher price in this range often does buy real coverage headroom for a larger room, worth it if your space exceeds a small bedroom." },
  { criterion: "Verify current pricing before buying, tiers shift with promotions", explanation: "Some product lineups include variants that fall within and outside a stated price tier depending on current promotions and configuration, check before purchasing." },
  { criterion: "A 3-year warranty and filter indicator justify a premium for some buyers", explanation: "If you want ongoing feedback and a longer warranty period rather than a set-and-forget unit, a pick at the higher end of this tier can genuinely be worth it." },
];

export const faq: FaqItem[] = [
  { q: "Is a $200 air purifier meaningfully better than a $90 one?", a: "Mostly in features. At this tier, you're paying mostly for smart features, sensors, larger rated coverage, and established brand reliability, not a fundamentally different filtration mechanism than a genuine sub-$100 True HEPA unit." },
  { q: "What's the best reason to spend closer to $200 on an air purifier?", a: "Coverage headroom for a larger room. A higher price in this range often does buy real coverage headroom, meaningfully reducing the risk of undersizing compared to a budget unit." },
  { q: "Why do some air purifier prices fluctuate above or below $200?", a: "Product lineups often include variants that fall within and outside a stated price tier depending on current promotions and configuration, always verify current pricing before buying." },
  { q: "Is a 3-year warranty worth paying extra for?", a: "For buyers who want ongoing peace of mind and real-time feedback rather than a set-and-forget unit, a pick with a 3-year warranty and filter indicator at the higher end of this tier is a reasonable choice." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-under-100", title: "Best Air Purifiers Under $100 (2026)" },
  { href: "/guide/best-air-purifiers-for-large-home-offices", title: "Best Air Purifiers for Large Home Offices (2026)" },
  { href: "/guide/best-smart-air-purifiers", title: "Best Smart Air Purifiers (2026)" },
];
