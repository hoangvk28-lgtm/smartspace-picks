export const guideSlug = "best-air-purifiers-for-dorm-rooms";
export const guideTitle = "5 Best Air Purifiers for Dorm Rooms in 2026";
export const metaTitle = "Best Air Purifiers for Dorm Rooms, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers we evaluated for dorm rooms, with the compliance check competitors skip: many universities have specific fire-safety or electrical policies restricting certain appliance types or wattage in dorm rooms.";
export const mainKeyword = "air purifier dorm";
export const introParagraphs = [
  "Many universities have specific fire-safety or electrical policies restricting certain appliance types or wattage in dorm rooms, verify your specific school's housing policy before assuming any air purifier is automatically permitted.",
  "Dorm rooms are frequently small, shared, and poorly ventilated with variable furniture arrangements each semester, sizing guidance should account for shared occupancy and furniture-crowded conditions rather than assuming an empty-room CADR test applies.",
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
    id: "levoit-small-dorm",
    rank: 1,
    badge: "Best Air Purifier for Dorm Rooms Overall",
    name: "Levoit Air Purifiers for Bedroom Home Pets Dorm Room, Small Air Purifiers",
    price: "$49.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ODC2Uu41L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09GTRVJQM?tag=deskfinds0d-20",
    description:
      "Explicitly marketed for dorm room use with a large review base, genuinely compact for shared, space-constrained living. Affordable price.\n\nVerify your specific university's fire-safety or electrical wattage policy for personal appliances before assuming this or any purifier is automatically permitted.",
    specs: ["Dorm-room marketed", "Large review base", "Affordable", "Compact design"],
    pros: ["Explicitly marketed for dorm room use", "Large, well-established review base", "Very affordable", "Compact for shared, space-constrained living"],
    cons: ["Verify your school's specific appliance policy", "Limited storage-friendly packability not confirmed", "No smart features"],
    bestFor: "Buyers who want an affordable, dorm-appropriate purifier",
  },
  {
    id: "levoit-smallquiet-dormalt",
    rank: 2,
    badge: "Best Quiet Dorm Pick for Roommate Situations",
    name: "Levoit Air Purifiers for Home Bedroom Dorm Room, Small Quiet Air Purifiers",
    price: "$44.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e6d46ZnyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LMF648R?tag=deskfinds0d-20",
    description:
      "A large review base for a quiet-focused design, genuinely useful for a shared two-person dorm room where roommate noise tolerance overnight matters as much as air cleaning. Affordable.\n\nRoommate noise tolerance and shared-space etiquette introduce a joint-decision noise threshold, discuss this with your roommate before committing to running it overnight.",
    specs: ["Small, quiet-focused design", "Large review base", "Affordable", "Compact footprint"],
    pros: ["Large, well-established review base", "Quiet-focused design for shared roommate situations", "Very affordable", "Compact for a shared dorm room"],
    cons: ["Verify your school's specific appliance policy", "Roommate agreement on overnight operation needed", "No smart features"],
    bestFor: "Buyers sharing a dorm room who want quiet operation overnight",
  },
  {
    id: "fulminare-dormalt2",
    rank: 3,
    badge: "Best Certified HEPA Dorm Pick",
    name: "Air Purifiers for Bedroom, FULMINARE H13 True HEPA Air Filter, Quiet Air Cleaner With Night Light, Portable Small Air Purifier for Home, Office, Living Room",
    price: "$24.99",
    rating: "4.4 stars from 5,517 Amazon ratings",
    reviews: "5,517 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414NIpA+xLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B4ZSKPNL?tag=deskfinds0d-20",
    description:
      "Certified True HEPA H13 filtration with a night light feature, genuinely useful for a dorm room where a nightlight can be practical for a shared space. Solid review base.\n\nNo ionizer feature confirmed, a genuine plus given the elevated ozone-risk consideration in a small, poorly ventilated, overnight-occupied dorm room specifically.",
    specs: ["True HEPA H13 filter", "Night light feature", "Portable, small design", "Solid review base"],
    pros: ["Certified True HEPA H13 filtration", "Night light feature useful for a shared dorm room", "No ionizer feature to worry about ozone risk", "Affordable"],
    cons: ["Lower rating than the top picks", "Verify your school's specific appliance policy", "Smaller filter media, frequent replacement"],
    bestFor: "Buyers who want certified True HEPA without an ionizer's ozone risk in a dorm setting",
  },
  {
    id: "voopnu-dormalt3",
    rank: 4,
    badge: "Best Budget Dorm Pick",
    name: "VOOPNU Air Purifiers for Home, High Efficiency Filter Up to 1076 Ft², White",
    price: "$26.99",
    rating: "4.5 stars from 4,026 Amazon ratings",
    reviews: "4,026 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41BE3lVftQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DY4S3HP2?tag=deskfinds0d-20",
    description:
      "The most affordable pick in this guide with a solid review base, genuinely oversized capacity for a small dorm room's actual furniture-crowded, shared-occupancy conditions.\n\nDorm room move-in and move-out logistics mean limited storage over summer break, verify this unit's storage footprint fits your realistic summer-storage situation.",
    specs: ["Up to 1076 sq ft rated", "Solid review base", "Most affordable in this guide", "High efficiency filter"],
    pros: ["Most affordable pick in this guide", "Solid review base", "Genuine headroom for shared occupancy", "High efficiency filter"],
    cons: ["Verify storage footprint for summer break", "Verify your school's specific appliance policy", "No smart features"],
    bestFor: "Budget-conscious students who want headroom for shared occupancy",
  },
  {
    id: "purivortex-dormalt4",
    rank: 5,
    badge: "Best Compact Storage-Friendly Pick",
    name: "Purivortex Air Purifiers for Bedroom, Covers Up to 880 Sq Ft, PX500 Black",
    price: "$32.99",
    rating: "4.5 stars from 2,997 Amazon ratings",
    reviews: "2,997 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Apo3YcVHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9SL7894?tag=deskfinds0d-20",
    description:
      "A solid review base at an affordable price, compact enough to be genuinely storage-friendly during dorm move-out over summer break. \n\nDorm rooms compete for outlet access with a mini-fridge and microwave, verify your room's realistic outlet availability before committing to running this alongside other shared appliances.",
    specs: ["Up to 880 sq ft rated", "Solid review base", "Affordable", "Compact design"],
    pros: ["Solid review base", "Affordable price", "Compact, storage-friendly design", "Genuine headroom for shared occupancy"],
    cons: ["Verify your school's specific appliance policy", "Verify realistic outlet availability alongside other dorm appliances", "No smart features"],
    bestFor: "Buyers who want a compact, storage-friendly purifier for dorm move-out logistics",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "University policy compliance flagged as a first-step consideration", description: "Emphasized verifying a specific school's fire-safety or electrical wattage policy for personal appliances before assuming any purifier is automatically permitted in a dorm room." },
  { title: "Shared-occupancy, furniture-crowded room sizing adjustment", description: "Adjusted sizing guidance for shared dorm rooms with variable furniture arrangements each semester, rather than assuming an empty-room CADR test applies." },
  { title: "Move-in/move-out storage and shared-outlet practical constraints", description: "Considered dorm-specific practical constraints like limited storage over summer break and shared mini-fridge or microwave outlet competition, rarely addressed in general small-room purifier guidance." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Verify Your University's Appliance Policy First",
    note: "Many universities have specific fire-safety or electrical policies restricting certain appliance types or wattage in dorm rooms. Verify your specific school's housing policy before assuming any air purifier is automatically permitted, this is directly relevant to this exact buyer and worth checking before purchase.",
  },
  {
    subheading: "Elevated Ozone Risk in Small, Overnight-Occupied Rooms",
    note: "Ozone-generating ionizer features are a more elevated risk consideration in a small, poorly ventilated, occupied-overnight dorm room than in a larger home, given the smaller air volume per occupant. Prioritize picks without an ionizer feature for this specific living arrangement.",
  },
  {
    subheading: "Discuss Roommate Noise Tolerance for Overnight Operation",
    note: "Roommate noise tolerance and shared-space etiquette, a purifier running overnight in a shared two-person dorm room, introduce a joint-decision noise threshold distinct from a single-occupant bedroom, discuss this with your roommate before committing to overnight operation.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "University fire-safety and electrical policies may restrict certain appliances", explanation: "Verify your specific school's housing policy before assuming any air purifier is automatically permitted in a dorm room, this compliance check is directly relevant to this buyer." },
  { criterion: "Ozone-generating ionizer features are a more elevated risk in small dorm rooms", explanation: "A small, poorly ventilated, overnight-occupied dorm room has less air volume per occupant, making ozone byproduct risk from ionizer features more consequential than in a larger home." },
  { criterion: "Roommate noise tolerance is a joint decision for overnight operation", explanation: "A purifier running overnight in a shared two-person dorm room introduces a joint noise threshold distinct from a single-occupant bedroom, discuss this with your roommate first." },
  { criterion: "Consider move-in and move-out storage and shared-outlet constraints", explanation: "Limited storage over summer break and shared mini-fridge or microwave outlet competition are real practical constraints specific to dorm living arrangements." },
];

export const faq: FaqItem[] = [
  { q: "Are air purifiers allowed in dorm rooms?", a: "Usually, but verify your specific university's fire-safety or electrical wattage policy for personal appliances first, some schools have restrictions worth checking before purchase." },
  { q: "Should I avoid air purifiers with an ionizer feature in a dorm room?", a: "Generally a good idea. Ozone-generating ionizer features are a more elevated risk consideration in a small, poorly ventilated, overnight-occupied dorm room, given the smaller air volume per occupant than in a larger home." },
  { q: "Do I need my roommate's agreement to run an air purifier overnight?", a: "It's worth discussing. Roommate noise tolerance and shared-space etiquette introduce a joint-decision noise threshold distinct from a single-occupant bedroom, talk to your roommate before committing to overnight operation." },
  { q: "How do I handle a dorm air purifier during summer break?", a: "Consider its storage footprint when moving out, dorm move-in and move-out logistics mean limited storage space over summer, a more compact purifier is genuinely easier to manage during this transition." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-for-small-rooms", title: "Best Air Purifiers for Small Rooms (2026)" },
  { href: "/guide/best-air-purifiers-for-bedrooms-and-home-offices", title: "Best Air Purifiers for Bedrooms and Home Offices (2026)" },
  { href: "/guide/best-ozone-free-air-purifiers", title: "Best Ozone-Free Air Purifiers (2026)" },
];
