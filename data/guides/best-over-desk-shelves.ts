const BASE = "/images/guides/best-over-desk-shelves";

export const guideSlug = "best-over-desk-shelves";
export const guideTitle = "8 Best Over Desk Shelves (2026)";
export const metaTitle =
  "Best Over Desk Shelves (2026): Clamp-On Shelving for Small Home Offices";
export const metaDescription =
  "Find the best over desk shelves and clamp-on desk shelving for home offices. No-drill options that mount above or below the desk edge. Ranked by reviews and features.";
export const lastUpdated = "2026-07-03";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

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

export const products: GuideProduct[] = [
  {
    id: "vivo-13-2tier-clamp",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "VIVO Clamp-On 13 inch Above or Below Desk 2-Tier Shelving, Engineered Wood and Alloy Steel, Sit-Stand Compatible, Black",
    price: "~$49.99",
    rating: "4.6 stars",
    reviews: "799 reviews",
    imageUrl: `${BASE}/vivo-13-2tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BSB5T8YJ?tag=deskfinds0d-20",
    description:
      "799 reviews is the highest validated count among clamp-on shelves in this roundup. Sit-stand compatibility means the clamp maintains grip through height changes. 13-inch width is compact enough for side placement without blocking the primary work area. Two tiers from one clamp footprint doubles vertical storage.",
    specs: ["Sit-stand compatible", "13 inch wide", "2-tier", "C-clamp mount"],
    pros: [
      "799 reviews most validated clamp-on shelf in roundup",
      "Sit-stand compatible maintains grip through height changes",
      "13-inch compact for side placement",
      "2 tiers from one clamp footprint",
    ],
    cons: [
      "$49.99 second highest in roundup",
      "Engineered wood not solid wood",
      "Verify clamp range matches desk thickness",
    ],
    bestFor:
      "sit-stand desk owners wanting the most validated clamp-on side shelf that maintains grip through height adjustments",
  },
  {
    id: "snughome-desk-hutch",
    rank: 2,
    badge: "Best Desktop Hutch Organizer (Surface-Mount)",
    name: "Snughome Desk Shelf 38.6 inch, 4-Tier Desktop Organizer Hutch, Pegboard Hooks, Rustic Brown",
    price: "~$51.99",
    rating: "4.6 stars",
    reviews: "317 reviews",
    imageUrl: `${BASE}/snughome-hutch.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CYSXTHCX?tag=deskfinds0d-20",
    description:
      "317 reviews at 4.6 stars is the second strongest validation in this roundup. The pegboard hook system is configurable for different accessory arrangements. Four tiers provide substantial vertical organization. Rustic brown finish adds warmth. Note: this sits on the desk surface rather than clamping to the edge.",
    specs: ["38.6 inch wide", "4-tier", "Pegboard hooks", "Surface-mount"],
    pros: [
      "317 reviews at 4.6 stars second strongest validation",
      "Pegboard hook system is configurable",
      "4 tiers substantial vertical organization",
      "Rustic brown warm aesthetic",
    ],
    cons: [
      "Sits on desk surface, not a clamp-on floating shelf",
      "38.6 inch wide too large for small desks under 40 inches",
      "No sit-stand compatibility",
    ],
    bestFor:
      "wide desks (40 inches or wider) where a comprehensive desktop hutch with configurable pegboard organization is the goal",
  },
  {
    id: "art-giftree-natural-wood",
    rank: 3,
    badge: "Best Natural Wood Clamp-On Shelf",
    name: "ART-GIFTREE Clamp On Desk Shelf 2-Tier, 12.5 inch, Natural Wood, 30 lbs, Dual C-Clamps, Brown",
    price: "~$31.99",
    rating: "4.6 stars",
    reviews: "252 reviews",
    imageUrl: `${BASE}/art-giftree-natural-wood.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DC6FTG2D?tag=deskfinds0d-20",
    description:
      "The only natural wood clamp-on shelf in this roundup. Dual C-clamps provide more stability than a single clamp. 12.5-inch compact width suits side placement. 4.6 stars at 252 reviews matches VIVO at a lower price. Natural wood suits warm and farmhouse home office setups.",
    specs: ["Natural wood", "Dual C-clamps", "12.5 inch", "30 lbs"],
    pros: [
      "Only natural wood clamp-on shelf in roundup",
      "Dual C-clamps more stable than single clamp",
      "12.5 inch compact for side placement",
      "4.6 stars matches VIVO at lower price",
    ],
    cons: [
      "252 reviews smaller than VIVO 799",
      "Natural wood requires moisture protection",
      "No sit-stand compatibility rating",
    ],
    bestFor:
      "warm-toned home offices and farmhouse setups where natural wood matches the desk aesthetic",
  },
  {
    id: "ares-wing-headphone",
    rank: 4,
    badge: "Best with Built-In Headphone Holder",
    name: "ARES WING 2-Tier Clamp-On Desk Shelf, 16 inch, Alloy Steel, 44 lbs, Headphone Holder, Black",
    price: "~$37.99",
    rating: "4.3 stars",
    reviews: "251 reviews",
    imageUrl: `${BASE}/ares-wing-headphone.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DP6F28DX?tag=deskfinds0d-20",
    description:
      "The only clamp-on shelf in this roundup with an integrated headphone holder. 44-lb capacity is the highest among the clamp-on models here. 16-inch width provides more shelf surface than the 12 to 13-inch alternatives. Alloy steel construction.",
    specs: ["Headphone holder", "44 lbs", "16 inch", "Alloy steel"],
    pros: [
      "Only clamp-on shelf with integrated headphone holder",
      "44-lb capacity highest among clamp-on shelves",
      "16-inch wider than 12-13 inch alternatives",
      "Alloy steel durable",
    ],
    cons: [
      "4.3 stars second lowest in roundup",
      "No sit-stand compatibility rating",
      "Black only",
    ],
    bestFor:
      "home office workers who use headphones daily and want a clamp-on shelf with a dedicated headphone holder",
  },
  {
    id: "spacrea-fence-edge",
    rank: 5,
    badge: "Best with Fence Edge to Prevent Sliding",
    name: "Spacrea Clamp On Desk Shelf 2-Tier, Adjustable Height, Fence Edge, Double C-Clamps, Black",
    price: "~$27.99",
    rating: "4.1 stars",
    reviews: "243 reviews",
    imageUrl: `${BASE}/spacrea-fence-edge.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0F4WZNFSF?tag=deskfinds0d-20",
    description:
      "A fence edge along the shelf front prevents small items from sliding off, which other clamp-on shelves lack. Adjustable height positioning adds flexibility. Double C-clamps provide stable mounting. Under $28. Note: 4.1 stars is the lowest in this roundup. Verify current review quality before purchasing.",
    specs: ["Fence edge", "Adjustable height", "Double C-clamps", "Under $28"],
    pros: [
      "Fence edge prevents items from sliding off practical safety feature",
      "Adjustable height for positioning flexibility",
      "Double C-clamps stable mounting",
      "Under $28 lowest price clamp-on",
    ],
    cons: [
      "4.1 stars lowest in roundup, verify current reviews before purchasing",
      "243 reviews limited validation",
      "No sit-stand compatibility",
    ],
    bestFor:
      "buyers needing a fence-edge shelf to prevent items sliding who have checked current review quality before purchasing",
  },
  {
    id: "vivo-16-industrial-pipe",
    rank: 6,
    badge: "Best Industrial Pipe Aesthetic",
    name: "VIVO Clamp-On Premium 16 inch Industrial Pipe 2-Tier Shelf, 33 lbs Per Shelf, Sit-Stand Compatible, Black",
    price: "~$24.99",
    rating: "4.4 stars",
    reviews: "80 reviews",
    imageUrl: `${BASE}/vivo-16-industrial-pipe.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DG36FLFV?tag=deskfinds0d-20",
    description:
      "$24.99 is the lowest price among clamp-on shelves in this roundup. Industrial pipe frame is a distinct aesthetic for loft and industrial-style workspaces. Sit-stand compatible. 33 lbs per shelf. Only 80 reviews at launch, so limited validation.",
    specs: [
      "Industrial pipe frame",
      "Sit-stand compatible",
      "16 inch",
      "$24.99",
    ],
    pros: [
      "Lowest price in roundup at $24.99",
      "Industrial pipe aesthetic distinct style",
      "Sit-stand compatible",
      "16 inch wider shelf surface",
    ],
    cons: [
      "80 reviews small sample",
      "Industrial pipe does not suit warm traditional offices",
      "Limited review validation for quality confidence",
    ],
    bestFor:
      "industrial-style home offices where pipe frame matches the aesthetic and sit-stand compatibility is needed at budget price",
  },
  {
    id: "art-giftree-desk-extender",
    rank: 7,
    badge: "Best for Extending the Desk Surface Toward You",
    name: "ART-GIFTREE Desk Extender 15 inch, Clamp-On, Height-Adjustable, 44 lbs, 4 Clamping Options, Black",
    price: "~$35.99",
    rating: "4.5 stars",
    reviews: "62 reviews",
    imageUrl: `${BASE}/art-giftree-extender.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0FHJ1J7QQ?tag=deskfinds0d-20",
    description:
      "A desk extender adds surface area toward the user rather than shelving above. Useful for shallow desks where forearm support is limited. 4 clamping options suit different edge profiles. Height adjustable. 44-lb capacity. Note: 62 reviews is a small sample.",
    specs: [
      "Desk extender",
      "Height adjustable",
      "44 lbs",
      "4 clamping options",
    ],
    pros: [
      "Solves forearm support problem for shallow desks",
      "4 clamping options for different edge types",
      "Height adjustable",
      "44-lb capacity",
    ],
    cons: [
      "62 reviews small sample",
      "Single level vs 2-tier alternatives",
      "No sit-stand compatibility rating",
    ],
    bestFor:
      "buyers with a shallow desk who need the surface extended toward them for forearm and wrist support",
  },
  {
    id: "vivo-30-height-adj",
    rank: 8,
    badge: "Widest Clamp-On Shelf Available (Verify: Only 13 Reviews)",
    name: "VIVO Clamp-On 30 inch Above or Below Desk 2-Tier Shelving, Patent-Pending, Height Adjustable, Sit-Stand Compatible, Black",
    price: "~$69.99",
    rating: "4.9 stars",
    reviews: "13 reviews",
    imageUrl: `${BASE}/vivo-30-height-adj.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0FQPLKR1L?tag=deskfinds0d-20",
    description:
      "30-inch width is the widest clamp-on shelf in this roundup. Height-adjustable lower shelf and sit-stand compatibility are included. VIVO brand provides some confidence given their strong track record on the 799-review model. Important: 13 reviews is insufficient to use the 4.9-star rating as a buying signal.",
    specs: [
      "30 inch wide",
      "Height-adjustable",
      "Sit-stand compatible",
      "Patent-pending",
    ],
    pros: [
      "30-inch widest clamp-on shelf in roundup",
      "Height-adjustable lower shelf",
      "VIVO brand credibility from other validated models",
      "Sit-stand compatible",
    ],
    cons: [
      "13 reviews do NOT treat 4.9 stars as a reliable signal",
      "$69.99 highest in roundup",
      "11 lbs per shelf lowest weight capacity",
    ],
    bestFor:
      "VIVO brand buyers wanting the widest clamp-on shelf available who understand the review count is insufficient for quality validation",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the difference between a clamp-on desk shelf and a surface-mount desk shelf?",
    a: "A clamp-on shelf attaches to the desk edge with a C-clamp and floats above or below without occupying desk surface area. A surface-mount shelf like the Snughome hutch sits on the desk and uses the desk surface as its footprint. For small desks, clamp-on options preserve the work area.",
  },
  {
    q: "How much weight can a clamp-on desk shelf hold?",
    a: "The ARES WING and ART-GIFTREE extender rate at 44 lbs each. The VIVO 13-inch and VIVO 16-inch industrial pipe rate at 33 lbs per shelf. These capacities handle monitors, books, and typical home office accessories.",
  },
  {
    q: "Are clamp-on shelves compatible with sit-stand desks?",
    a: "The VIVO 13-inch and VIVO 16-inch Industrial Pipe are the two explicitly sit-stand compatible options in this roundup. Standard clamp-on shelves may loosen through repeated height adjustment cycles, so sit-stand compatibility is a meaningful differentiator.",
  },
  {
    q: "Will a clamp-on shelf work on a curved or thick desk edge?",
    a: "Most C-clamps fit flat desk edges 0.75 to 2 inches thick. Curved, beveled, or unusually thick edges may be incompatible. The ART-GIFTREE extender offers 4 clamping options for wider edge profile compatibility.",
  },
  {
    q: "What is the difference between the ART-GIFTREE desk extender and a 2-tier clamp-on shelf?",
    a: "The desk extender is a single flat shelf that extends toward the user for forearm support or extra surface area. The 2-tier shelf adds a second level above the desk for vertical storage. They solve different problems: shallow desk footprint vs vertical storage.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-desk-shelves-small-desks",
    title: "Best Desk Shelves for Small Desks (2026)",
  },
  {
    href: "/guide/best-clamp-on-desk-drawers",
    title: "Best Clamp-On Desk Drawers (2026)",
  },
  {
    href: "/guide/small-desk-organization-ideas",
    title: "Small Desk Organization Ideas",
  },
  {
    href: "/guide/best-rolling-carts-home-office",
    title: "Best Rolling Carts for Home Offices (2026)",
  },
];
