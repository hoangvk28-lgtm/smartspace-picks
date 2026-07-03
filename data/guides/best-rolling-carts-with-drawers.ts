const BASE = "/images/guides/best-rolling-carts-with-drawers";

export const guideSlug = "best-rolling-carts-with-drawers";
export const guideTitle = "8 Best Rolling Carts with Drawers (2026)";
export const metaTitle =
  "Best Rolling Carts with Drawers (2026): Clear, Multi-Drawer, and Heavy Duty Options";
export const metaDescription =
  "Find the best rolling carts with drawers for home offices. Clear drawer, 4-drawer, 10-drawer, and metal frame options compared by reviews, weight capacity, and features.";
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
    id: "iris-usa-4-drawer",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "IRIS USA 4-Drawer Plastic Storage Organizer Rolling Cart, Clear Drawers, Divided Top, Made in USA",
    price: "~$33.99",
    rating: "4.6 stars",
    reviews: "7,851 reviews",
    imageUrl: `${BASE}/iris-usa-4-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07Q4FHWV9?tag=deskfinds0d-20",
    description:
      "7,851 reviews at 4.6 stars is the most validated rolling cart with drawers in this roundup. Clear drawers show contents without opening. A divided top tray adds an extra organized compartment. Made in USA is a quality signal. Removable casters allow use as a stationary unit.",
    specs: ["4 drawers", "Clear drawers", "Made in USA", "Divided top"],
    pros: [
      "7,851 reviews at 4.6 stars most validated in roundup",
      "Made in USA quality signal",
      "Clear drawers plus divided top tray",
      "Removable casters for stationary option",
    ],
    cons: [
      "Plastic less durable than metal",
      "Black/Pearl color specific",
      "4 drawers fewer compartments than 10-drawer options",
    ],
    bestFor:
      "home offices wanting the most-validated clear-drawer rolling cart from a Made in USA brand",
  },
  {
    id: "homz-3-tier-clear-360",
    rank: 2,
    badge: "Best 360-Degree Casters with Clear Drawers",
    name: "HOMZ 3-Tier Rolling Storage Cart, 3 Clear Removable Drawers, 360-Degree Casters, White",
    price: "~$49.99",
    rating: "4.6 stars",
    reviews: "7,224 reviews",
    imageUrl: `${BASE}/homz-3-tier-clear.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0823H3Z95?tag=deskfinds0d-20",
    description:
      "360-degree casters allow movement in any direction, useful in tight spaces and corners. Clear drawers identify contents without opening. 7,224 reviews at 4.6 stars is strong validation. Removable casters offer a stationary option.",
    specs: ["360-degree casters", "Clear drawers", "Removable casters", "3 drawers"],
    pros: [
      "360-degree casters for corner and tight space maneuverability",
      "Clear drawers identify contents without opening",
      "7,224 reviews at 4.6 stars",
      "Removable casters for stationary use",
    ],
    cons: [
      "$49.99 higher than IRIS USA for fewer drawers",
      "Plastic construction",
      "3 drawers vs 4 on IRIS USA at lower price",
    ],
    bestFor:
      "tight home offices or corner setups where 360-degree caster maneuverability is useful with clear drawer visibility",
  },
  {
    id: "iris-usa-10-drawer",
    rank: 3,
    badge: "Best for Maximum Compartmentalization",
    name: "IRIS USA 10-Drawer Plastic Storage Organizer Rolling Cart, Clear Drawers, Drawer Stops, Made in USA",
    price: "~$62.99",
    rating: "4.6 stars",
    reviews: "4,257 reviews",
    imageUrl: `${BASE}/iris-usa-10-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08S9RLZXC?tag=deskfinds0d-20",
    description:
      "Ten drawers allow maximum category separation for a large variety of small supplies. Drawer stops prevent accidental full removal. Clear drawers identify contents from any of 10 compartments at a glance. Made in USA. Best for buyers managing many different small item types.",
    specs: ["10 drawers", "Clear drawers", "Drawer stops", "Made in USA"],
    pros: [
      "10 drawers maximum supply category separation",
      "Drawer stops prevent accidental removal",
      "Clear drawers identify any of 10 compartments",
      "Made in USA",
    ],
    cons: [
      "$62.99 highest price among dedicated drawer carts",
      "Shallower drawers than 4-drawer alternatives",
      "More compartments than most home offices need",
    ],
    bestFor:
      "home office workers managing a large variety of small supplies who want maximum organized compartmentalization",
  },
  {
    id: "goovilla-hybrid-124lb",
    rank: 4,
    badge: "Best Value for High Weight Capacity",
    name: "Goovilla 3-Tier Rolling Utility Cart, Removable Drawer, 124 lbs, Cups and Hooks, White",
    price: "~$23.99",
    rating: "4.6 stars",
    reviews: "3,559 reviews",
    imageUrl: `${BASE}/goovilla-hybrid.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DNFB8FHD?tag=deskfinds0d-20",
    description:
      "124-lb capacity is the highest in this roundup. At $23.99 it is also the lowest-priced option. A removable drawer plus open shelves combines concealed and open storage. Side cups and hooks extend accessory organization.",
    specs: ["124 lbs capacity", "Removable drawer", "Cups and hooks", "$23.99"],
    pros: [
      "Lowest price at $23.99",
      "124-lb capacity highest for heavy printers",
      "Cups and hooks add accessory storage",
      "4.6 stars 3,559 reviews",
    ],
    cons: [
      "Single removable drawer limited compartmentalization",
      "Lockable wheels only, no removable option",
      "Open shelves for most storage",
    ],
    bestFor:
      "buyers needing a rolling cart to support a heavy printer at the lowest price",
  },
  {
    id: "sunally-waterproof-124lb",
    rank: 5,
    badge: "Best Waterproof Construction Option",
    name: "SUNALLY 3-Tier Rolling Cart with Drawer, 124 lbs, Waterproof PP Material, White",
    price: "~$22.99",
    rating: "4.5 stars",
    reviews: "1,971 reviews",
    imageUrl: `${BASE}/sunally-waterproof.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D34HFHZH?tag=deskfinds0d-20",
    description:
      "Waterproof polypropylene construction is relevant for home offices in humid environments or near water sources. 124-lb capacity matches the Goovilla. At $22.99 it is the lowest-priced option in this roundup. 1,971 reviews at 4.5 stars.",
    specs: ["Waterproof PP", "124 lbs", "3 tiers", "$22.99"],
    pros: [
      "Lowest price at $22.99",
      "Waterproof PP for humid environments",
      "124-lb capacity matches Goovilla",
      "1,971 reviews at 4.5 stars",
    ],
    cons: [
      "Single drawer same limitation as Goovilla",
      "Open shelves for most storage",
      "No removable caster option",
    ],
    bestFor:
      "budget buyers in humid environments where waterproof construction matters or for garages and wet areas",
  },
  {
    id: "yasonic-mesh-baskets",
    rank: 6,
    badge: "Highest Rated - Open Mesh Baskets, Not Drawers",
    name: "YASONIC 3-Tier Rolling Metal Cart, Mesh Baskets, Hanging Cups and Hooks, 66 lbs, Black",
    price: "~$32.99",
    rating: "4.7 stars",
    reviews: "1,773 reviews",
    imageUrl: `${BASE}/yasonic-mesh-baskets.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CRGNKHVW?tag=deskfinds0d-20",
    description:
      "4.7 stars is the highest rating in this roundup. Open mesh baskets provide immediate access without drawers. 66-lb capacity per shelf is 3x the standard 22-lb rating. Cups and hooks are included. Note: this is open mesh storage, not enclosed drawers.",
    specs: ["4.7 stars", "66 lbs per shelf", "Mesh baskets", "Cups and hooks"],
    pros: [
      "4.7 stars highest rating in roundup",
      "66-lb capacity 3x standard carts",
      "Cups and hooks for accessories",
      "Metal more durable than plastic",
    ],
    cons: [
      "Open mesh baskets NOT enclosed drawers",
      "Black finish limits aesthetic flexibility",
      "Items visible from all sides",
    ],
    bestFor:
      "buyers who want the highest-rated rolling cart and open basket storage is acceptable",
  },
  {
    id: "aokitsink-wood-top",
    rank: 7,
    badge: "Best Premium Option with Wood Top",
    name: "Aokitsink 4-Drawer Rolling Storage Cart, 150 lbs, Metal Frame with Wood Top, Diamond Mesh",
    price: "~$59.99",
    rating: "4.4 stars",
    reviews: "267 reviews",
    imageUrl: `${BASE}/aokitsink-wood-top.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0FDB2H7LD?tag=deskfinds0d-20",
    description:
      "The only rolling cart in this roundup with a wood top surface. 150 lbs is the highest capacity here, more than enough for any home office printer. Metal frame with diamond mesh drawers is a distinct aesthetic. 267 reviews at 4.4 stars is limited validation for the price.",
    specs: ["Wood top", "150 lbs", "4 drawers", "Metal frame"],
    pros: [
      "Only wood top in roundup for desk matching",
      "150-lb highest capacity in roundup",
      "Metal frame plus wood premium look",
      "Diamond mesh drawer design",
    ],
    cons: [
      "267 reviews small sample at $59.99",
      "Wood top requires moisture care",
      "Limited review validation",
    ],
    bestFor:
      "home offices where the cart needs to visually match a wood desk and 150-lb capacity is needed",
  },
  {
    id: "costway-10-drawer-rainbow",
    rank: 8,
    badge: "Best for Creative Spaces with Color Options",
    name: "COSTWAY 10-Drawer Rolling Storage Cart, Galvanized Metal Frame, Rainbow or Black Option",
    price: "~$49.99",
    rating: "4.4 stars",
    reviews: "247 reviews",
    imageUrl: `${BASE}/costway-10-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BN4YD7M4?tag=deskfinds0d-20",
    description:
      "Rainbow color option is unique in this category and suited for creative workspaces, art studios, or children homework stations. Galvanized metal construction resists rust. Removable individual drawers per compartment. The IRIS USA 10-drawer has 17x more reviews at a similar price.",
    specs: ["10 drawers", "Rainbow color option", "Galvanized metal", "Removable drawers"],
    pros: [
      "Rainbow color option unique in this category",
      "Galvanized metal rust-resistant",
      "Removable individual drawers",
      "10 drawers for maximum compartments",
    ],
    cons: [
      "247 reviews small sample",
      "IRIS USA 10-drawer has 17x more reviews at same price",
      "Opaque drawers no visibility",
    ],
    bestFor:
      "creative workspaces or children homework stations where the rainbow color option is a deliberate aesthetic choice",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the difference between a rolling cart with drawers and a rolling utility cart?",
    a: "A rolling cart with drawers has enclosed compartments that conceal items and require pulling to access. A utility cart has open shelves where items are visible from all sides. Drawer carts suit organized concealed storage. Utility carts suit frequently accessed items and heavier loads.",
  },
  {
    q: "How many drawers does a rolling cart need for home office use?",
    a: "For most home office supply storage, 3 to 4 drawers provides adequate separation of categories like paper, pens, tech accessories, and miscellaneous items. The 10-drawer options suit buyers managing a very large variety of small items.",
  },
  {
    q: "Are clear drawer rolling carts better than opaque?",
    a: "Clear drawers let you identify contents without opening each drawer, which saves time when multiple drawers look similar. The IRIS USA and HOMZ clear-drawer models are well-validated for this reason. Opaque drawers provide a cleaner visual appearance.",
  },
  {
    q: "Do rolling carts with drawers work as printer stands?",
    a: "The Goovilla and SUNALLY with 124-lb capacity can support any home office printer. Most other drawer carts in this roundup focus on supply organization and have lower weight capacities. Always verify the top surface weight limit before using any cart as a printer stand.",
  },
  {
    q: "Can I remove the wheels from these rolling carts?",
    a: "The IRIS USA 4-drawer and HOMZ 3-tier clear both offer removable casters for a stationary option. Most other carts in this roundup have fixed wheels. Check the product listing if stationary use is a requirement.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-rolling-carts-home-office", title: "Best Rolling Carts for Home Offices (2026)" },
  { href: "/guide/best-printer-stands-with-storage", title: "Best Printer Stands with Storage (2026)" },
  { href: "/guide/best-desk-shelves-small-desks", title: "Best Desk Shelves for Small Desks (2026)" },
  { href: "/guide/small-desk-organization-ideas", title: "Small Desk Organization Ideas" },
];
