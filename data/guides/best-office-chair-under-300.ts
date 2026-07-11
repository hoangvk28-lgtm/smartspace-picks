const BASE = "/images/guides/best-office-chair-under-300";

export const guideSlug = "best-office-chair-under-300";
export const guideTitle = "8 Best Office Chairs Under $300 in 2026";
export const metaTitle = "Best Office Chairs Under $300 in 2026 - Ergonomic Value";
export const metaDescription = "Best office chairs under $300 in 2026. Ergonomic mesh and fabric chairs with lumbar support, adjustable arms, and all-day comfort ranked for home office and budget buyers.";
export const lastUpdated = "2026-07-11";
export const readTime = "10 min";
export const heroImage = `/images/guides/best-office-chair-under-300/hero.webp`;

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export const products: GuideProduct[] = [
  {
    id: "bestoffice-under-40",
    rank: 1,
    badge: "Best Under $40",
    name: "BestOffice Ergonomic Chair",
    price: "$38.99",
    rating: "4.3 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/81sLDLdB8CL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FQDM23S4?tag=deskfinds0d-20",
    description: "The BestOffice ergonomic chair at $38.99 is the most affordable office chair in this guide under $300. The mesh back and basic lumbar cushion provide more breathability and support than standard task chairs at this price.\n\nFor users who need any functional office chair at minimum cost, the BestOffice is the entry point at under $40.",
    specs: ["Mesh back", "Seat height: 15.7\"–19.3\"", "Adjustable armrests", "Lumbar cushion", "Basic tilt", "250 lb capacity"],
    pros: ["$38.99 cheapest in guide", "Mesh breathability", "Low seat height option", "Quick setup"],
    cons: ["Minimal ergonomic features", "Basic build quality", "Short expected lifespan"],
    bestFor: "Users on the absolute minimum budget who need any functional office chair under $40.",
  },
  {
    id: "neo-chair-flip-arms",
    rank: 2,
    badge: "Best Under $60 with Flip Arms",
    name: "NEO CHAIR with Flip-Up Arms",
    price: "$59.98",
    rating: "4.3 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/81lCJOQwKVL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGWZKVPX?tag=deskfinds0d-20",
    description: "The NEO CHAIR at $59.98 features flip-up arms that save desk space when not needed – a practical feature for compact desk setups. The mesh back and BIFMA-adjacent construction make it a reliable budget choice under $60.\n\nFor users with limited desk space who want a chair with arms that fold away, the NEO CHAIR flip-arm model is the most functional budget option.",
    specs: ["Flip-up armrests", "Mesh back", "Seat height: 15.5\"–19.5\"", "Lumbar support", "BIFMA certified", "Tilt function"],
    pros: ["Flip-up arms save desk space", "Under $60", "BIFMA certified", "Compact mesh design"],
    cons: ["Flip arms less adjustable than 2D/3D", "Minimal padding"],
    bestFor: "Users with compact desk setups who want a budget chair with space-saving flip-up arms under $60.",
  },
  {
    id: "hbada-ergonomic-under160",
    rank: 3,
    badge: "Best Under $160 Ergonomic",
    name: "Hbada Ergonomic Office Chair",
    price: "$159.99",
    rating: "4.0 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71h3GAsF7ML._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B085XQRBC5?tag=deskfinds0d-20",
    description: "The Hbada ergonomic chair at $159.99 provides high-back mesh, adjustable lumbar, reclining function, and footrest at a mid-range price. The built-in footrest is rare at this price point and allows users to alternate between standard sitting and reclined positions.\n\nFor users who want multi-position sitting with a footrest option in a budget-friendly ergonomic chair, the Hbada delivers more features per dollar than most competitors in this range.",
    specs: ["High-back mesh", "Retractable footrest", "Adjustable lumbar", "Reclining 90°–155°", "Seat height: 17.5\"–21.5\"", "Headrest"],
    pros: ["Footrest included at $159", "Multi-position reclining", "High-back mesh", "Adjustable lumbar and headrest"],
    cons: ["4.0 star rating", "Reclining reduces desk work posture"],
    bestFor: "Users who want a multi-position reclining mesh chair with footrest at a mid-range budget.",
  },
  {
    id: "sihoo-m18-under140",
    rank: 4,
    badge: "Best Under $140 High Back",
    name: "SIHOO M18 High-Back Mesh Chair",
    price: "$139.99",
    rating: "4.4 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71-w+1c6JPL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07GNDDNMW?tag=deskfinds0d-20",
    description: "The SIHOO M18 at $139.99 is the best high-back mesh chair under $140 with adjustable lumbar and headrest. At 4.4 stars it's one of the highest-rated chairs in this guide and provides meaningful ergonomic features at an accessible price.\n\nThe high-back design and lumbar adjustment make the M18 significantly more supportive than budget chairs under $100.",
    specs: ["High-back mesh", "Seat height: 17.5\"–21\"", "Adjustable lumbar", "Adjustable headrest", "2D armrests", "3-year warranty"],
    pros: ["4.4 stars high rating", "High-back support", "Adjustable lumbar and headrest", "3-year warranty"],
    cons: ["2D armrests", "139 investment above entry-level"],
    bestFor: "Mid-range buyers who want a high-rated high-back mesh chair with lumbar and headrest under $140.",
  },
  {
    id: "sihoo-m57-under200",
    rank: 5,
    badge: "Best Under $200 Ergonomic",
    name: "SIHOO M57 Ergonomic Mesh Chair",
    price: "$199.99",
    rating: "4.4 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71nLBIhG+0L._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08XXNQT2Y?tag=deskfinds0d-20",
    description: "The SIHOO M57 at $199.99 is the best ergonomic mesh chair under $200, featuring 3D armrests and an S-curve back that other chairs in this guide don't offer at the same price. The 3D armrests adjust in three dimensions, which prevents arm and shoulder strain that 2D arm chairs create.\n\nFor under $200, the M57 delivers 3D arm adjustability that typically costs more in other brands.",
    specs: ["S-curve high-back mesh", "3D armrests", "Seat height: 17.7\"–21.7\"", "Adjustable lumbar", "Headrest", "3-year warranty"],
    pros: ["3D armrests under $200", "S-curve back support", "Adjustable lumbar", "4.4 stars"],
    cons: ["$199 higher than mid-range options", "3-year warranty"],
    bestFor: "Users who want 3D arm adjustability and S-curve mesh support without exceeding $200.",
  },
  {
    id: "marsail-adaptive-lumbar",
    rank: 6,
    badge: "Best Under $180 Adaptive Lumbar",
    name: "Marsail Ergonomic Mesh Chair",
    price: "$179.99",
    rating: "4.0 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/81rJG1VNeLL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DKP341VM?tag=deskfinds0d-20",
    description: "The Marsail ergonomic chair at $179.99 features an adaptive lumbar system that adjusts automatically to posture changes. The auto-adaptive lumbar is a feature typically found in higher-priced ergonomic chairs, making the Marsail a strong value at under $180.\n\nFor users who want some form of adaptive lumbar support without paying $300+, the Marsail is the best value option in this guide.",
    specs: ["Adaptive lumbar system", "High-back mesh", "Seat height: 17\"–21\"", "Adjustable headrest", "3D armrests", "Weight capacity: 300 lbs"],
    pros: ["Adaptive lumbar at under $180", "3D armrests", "300 lb capacity", "High-back mesh"],
    cons: ["4.0 star rating", "Less proven than SIHOO or Steelcase adaptive systems"],
    bestFor: "Budget-conscious users who want some adaptive lumbar functionality without paying premium prices.",
  },
  {
    id: "duramont-lumbar-control",
    rank: 7,
    badge: "Best Lumbar Control Under $200",
    name: "Duramont Ergonomic Adjustable Chair",
    price: "$198.99",
    rating: "4.2 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71crI8HDP9L._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0797HZ8W1?tag=deskfinds0d-20",
    description: "The Duramont ergonomic chair at $198.99 features a wide lumbar adjustment range that lets users position lumbar support exactly where their pain point is. Most budget chairs offer a single lumbar position; the Duramont's adjustable range accommodates different spine heights.\n\nFor users with a specific lumbar pain location who need precise lumbar positioning, the Duramont delivers more control than fixed-lumbar alternatives at similar prices.",
    specs: ["Adjustable lumbar height and depth", "Mesh high-back", "Seat height: 17\"–21\"", "Adjustable headrest", "2D armrests", "3-year warranty"],
    pros: ["Wide lumbar position adjustment range", "3-year warranty", "Headrest included", "Mesh breathability"],
    cons: ["2D armrests", "$198 near top of mid-range"],
    bestFor: "Users with a specific lumbar pain location who need precise lumbar height and depth control under $200.",
  },
  {
    id: "gabrylly-big-tall-under300",
    rank: 8,
    badge: "Best Under $210 for Big and Tall",
    name: "GABRYLLY Big and Tall Mesh Chair",
    price: "$204.73",
    rating: "4.4 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/91bA1LZMqFL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Y8BXBX8?tag=deskfinds0d-20",
    description: "The GABRYLLY mesh chair at $204.73 supports 280 lbs with a wider seat than standard office chairs, making it the best big and tall option in this guide under $300. At 4.4 stars it's among the highest-rated chairs in the roundup.\n\nFor larger users who need a wider seat and higher weight capacity without paying big-and-tall premium prices, the GABRYLLY is the top value in this guide.",
    specs: ["Wider mesh high-back", "280 lb capacity", "Seat height: 18\"–22\"", "Adjustable lumbar", "Headrest", "Flip-up arms"],
    pros: ["280 lb capacity", "Wider seat for larger users", "4.4 stars", "Adjustable lumbar and headrest"],
    cons: ["Flip-up arms limited adjustability", "Slightly over $200"],
    bestFor: "Larger users who need above-average weight capacity and a wider seat in a mesh chair under $210.",
  },
];;

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "What features actually matter under $300", explanation: "At $300, you cannot get everything - choose your priority. The highest-value features for daily use are: adjustable lumbar height (not just depth), correct seat height range for your body, and a warranty of 3-plus years. Secondary features (4D armrests, adjustable seat depth, mesh seat) are good to have but shouldn't override the primary three. A chair with great lumbar adjustment and 7-year warranty (Branch) outperforms a chair with 5 features and a 1-year warranty." },
  { criterion: "Mesh vs padded: choosing your priority", explanation: "Mesh breathes and is consistently cool. Padded foam provides a softer initial feel but compresses over time. For warm offices or users who work for 5-plus hours, mesh is the practical choice. For cool offices where thermal comfort is not an issue, padded chairs feel plush initially. Beware of padded chairs at low prices where cheap foam flattens within 6 months - look for chairs with high-density foam claims or known foam brands (Serta)." },
  { criterion: "Warranty as a durability signal under $300", explanation: "At $300, warranty length is the best proxy for manufacturer confidence in longevity. A 7-year warranty (Branch) means the company expects the chair to function for 7 years. A 1-year warranty means they only commit to 12 months. Most chairs in this price tier offer 2 to 3 years. The Branch's 7-year warranty is the outlier and reflects a genuine quality commitment, not just marketing." },
  { criterion: "Armrest requirements for your desk setup", explanation: "If your desk is at standard height (28-30 inches) and your elbows rest at 90 degrees with height-adjustable arms, height-only adjustment is sufficient. If you have an unusual desk height or tend to hold your arms at varied angles, 4D armrests that also adjust depth, pivot, and lateral position become more useful. Most chairs under $300 offer 3D armrests (height, pivot, depth). 4D (adding lateral) is available in the Branch and SIHOO C300." },
  { criterion: "Seat height range for your body", explanation: "Always verify both minimum and maximum seat height against your body. At 5'3\", you need a chair that lowers to 16 inches or below. At 6'2\", you need 19 to 20 inches. The default 17.5 to 20-inch range on many chairs in this guide works well for 5'5\" to 6'1\". Outside that range, specifically check the specs against your sitting height requirement before buying." },
];

export const faq: { q: string; a: string }[] = [
  { q: "Can you get a genuinely ergonomic office chair under $300?", a: "Yes, with realistic expectations. The Branch Ergonomic Chair ($299) includes lumbar height and depth adjustment, 4D armrests, and adjustable seat depth - features that premium chairs at $700 also include. The trade-offs at $300 are typically shorter warranty, less premium mesh quality, and no brand cache. The ergonomic function for preventing back strain during 6-8 hour workdays is real at this price, not just marketing." },
  { q: "What is the difference between a $300 chair and a $1,000 chair?", a: "At $300: adjustable lumbar, breathable mesh, 3-4D armrests, 3-7 year warranty. At $1,000: LiveBack adaptive spines (Steelcase), PostureFit SL dual-point lumbar (Herman Miller), 12-15 year warranty, significantly better mesh quality that won't sag for a decade, brand-backed service networks, and chairs specifically designed through human physiology research programs. For 2-4 hours of daily sitting, a $300 chair is adequate. For 6-8 hours daily over 10 years, the $1,000 chair is a value proposition when amortized." },
  { q: "How long should an office chair under $300 last?", a: "With a 3-year warranty, manufacturers commit to 3 years. Most quality chairs in this tier (Branch, SIHOO, NOUHAUS) will function well for 4 to 7 years with normal daily use under 250 lbs. Budget chairs under $200 may show cushion compression and mechanism loosening within 2 to 3 years. The Branch's 7-year warranty is exceptional and the build reflects that commitment." },
  { q: "Should I buy an office chair online without trying it?", a: "Most office chairs are purchased online without testing. The most important spec you can verify remotely is seat height range against your own sitting height - measure from the floor to your knee bend with your feet flat and compare to the chair's minimum height spec. Lumbar position can be somewhat verified by checking the adjustable height range and your L4/L5 height from the seat. For most users, a properly specified chair from a brand with a return policy is an acceptable online purchase." },
  { q: "Is it worth spending $300 on a chair for occasional use?", a: "For occasional use of 1 to 2 hours daily, a $100 to $150 basic ergonomic chair with adjustable height and lumbar is sufficient. The value of spending $300 increases with hours of daily use - at 6-plus hours, the ergonomic difference becomes significant enough to affect productivity and physical wellbeing. At 1 to 2 hours daily, the difference between a $150 and $300 chair is hard to feel." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-office-chair-under-500", title: "Best Office Chairs Under $500 (2026)" },
  { href: "/guide/best-mesh-office-chair", title: "Best Mesh Office Chairs (2026)" },
  { href: "/guide/best-office-chair-for-back-pain", title: "Best Office Chairs for Back Pain (2026)" },
  { href: "/guide/best-office-chair-for-short-people", title: "Best Office Chairs for Short People (2026)" },
];
