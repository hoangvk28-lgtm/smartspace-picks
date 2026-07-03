const BASE = "/images/guides/best-rolling-carts-home-office";
export const guideSlug = "best-rolling-carts-home-office";
export const guideTitle = "8 Best Rolling Carts for Home Offices (2026)";
export const metaTitle =
  "Best Rolling Carts for Home Offices (2026): Utility, Drawer, and Storage Options";
export const metaDescription =
  "Find the best rolling carts for home offices. Metal utility carts, plastic drawer carts, and mobile file cabinets ranked by reviews. Weight capacity and caster type compared.";
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
    id: "simple-houseware-3-tier",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "Simple Houseware 3-Tier Heavy Duty Metal Utility Rolling Cart, Alloy Steel, White",
    price: "~$37.97",
    rating: "4.7 stars",
    reviews: "32,107 reviews",
    imageUrl: `${BASE}/simple-houseware-3-tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B081KBXT5N?tag=deskfinds0d-20",
    description:
      "32,107 reviews at 4.7 stars is the most validated rolling cart in this category by a significant margin. Open shelves provide immediate visual access to stored items. 22 lbs per shelf handles standard office supplies and most inkjet printers. Two lockable casters keep the cart in place.",
    specs: ["32,107 reviews", "3 tiers", "22 lbs per shelf", "2 lockable casters"],
    pros: [
      "32,107 reviews at 4.7 stars most validated cart in this roundup",
      "Open shelves for immediate visual access",
      "22 lbs per shelf handles inkjet printers",
      "2 lockable casters",
    ],
    cons: [
      "22 lbs per shelf not rated for heavy laser printers",
      "No enclosed drawers",
      "No handle for carrying",
    ],
    bestFor:
      "home offices needing a general-purpose rolling supply cart backed by the strongest trust signal in this category",
  },
  {
    id: "pipishell-3-tier-handle",
    rank: 2,
    badge: "Best Metal Cart with Handle",
    name: "Pipishell 3-Tier Rolling Cart, Metal, 22 lbs Per Shelf, Handle and 2 Lockable Wheels, White",
    price: "~$28.46",
    rating: "4.6 stars",
    reviews: "15,132 reviews",
    imageUrl: `${BASE}/pipishell-3-tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08GS9T78W?tag=deskfinds0d-20",
    description:
      "Lower price than the Simple Houseware at $28.46 versus $37.97. A built-in handle allows carrying the cart over obstacles like door thresholds. 15,132 reviews at 4.6 stars is strong validation. Two lockable wheels and the same 22 lbs per shelf capacity.",
    specs: ["Handle", "3 tiers", "22 lbs per shelf", "2 lockable wheels"],
    pros: [
      "Lower price than Simple Houseware at $28.46",
      "Handle allows carrying over obstacles",
      "15,132 reviews at 4.6 stars",
      "2 lockable wheels",
    ],
    cons: [
      "Same 22 lbs per shelf limit as Simple Houseware",
      "Open shelves only, no drawers",
      "White finish may show marks over time",
    ],
    bestFor:
      "buyers who want the lowest-priced validated metal utility cart with a handle for multi-room mobility",
  },
  {
    id: "homz-4-drawer-black",
    rank: 3,
    badge: "Best Enclosed Drawer Cart by Review Count",
    name: "HOMZ 4-Tier Plastic Storage Organizer Cart, 4 Drawers, 360-Degree Casters, Black/Smoke",
    price: "~$52.99",
    rating: "4.5 stars",
    reviews: "13,002 reviews",
    imageUrl: `${BASE}/homz-4-drawer-black.webp`,
    amazonUrl: "https://www.amazon.com/dp/B071CLZG8T?tag=deskfinds0d-20",
    description:
      "13,002 reviews make this the most validated enclosed-drawer rolling cart in this roundup. Four drawers compartmentalize by category. 360-degree casters allow movement in any direction in tight spaces. Made from 90% recycled materials.",
    specs: ["4 drawers", "360-degree casters", "Recycled materials", "Enclosed storage"],
    pros: [
      "13,002 reviews most validated drawer cart in roundup",
      "4 drawers allow compartmentalization by category",
      "360-degree casters for tight spaces",
      "90% recycled materials",
    ],
    cons: [
      "Plastic less durable than metal",
      "$52.99 second highest price",
      "Drawers slower to access than open shelves",
    ],
    bestFor:
      "home offices where organized concealed storage is more important than immediate visual access",
  },
  {
    id: "homz-3-tier-clear",
    rank: 4,
    badge: "Best Clear-Drawer Option",
    name: "HOMZ 3-Tier Rolling Storage Cart, 3 Clear Drawers, Removable Wheels, White",
    price: "~$49.99",
    rating: "4.6 stars",
    reviews: "7,224 reviews",
    imageUrl: `${BASE}/homz-3-tier-clear.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0823H3Z95?tag=deskfinds0d-20",
    description:
      "Clear drawers let you see contents without opening each compartment. Removable wheels allow converting to a stationary storage unit. 7,224 reviews at 4.6 stars is strong validation. White finish broadly compatible with home office aesthetics.",
    specs: ["Clear drawers", "Removable wheels", "3 drawers", "White"],
    pros: [
      "Clear drawers show contents without opening",
      "Removable wheels for optional stationary use",
      "7,224 reviews at 4.6 stars",
      "White finish broadly compatible",
    ],
    cons: [
      "$49.99 higher than HOMZ 4-drawer for fewer drawers",
      "Plastic construction",
      "3 drawers fewer than the black HOMZ at similar price",
    ],
    bestFor:
      "buyers who want organized drawer storage with the visibility benefit of clear panels",
  },
  {
    id: "ctsnslh-stackable-bins",
    rank: 5,
    badge: "Best for Large-Volume Storage",
    name: "CTSNSLH 4-Tier Stackable Storage Bins with Wheels, 93 Qt, Translucent Lids, White",
    price: "~$30.35",
    rating: "4.5 stars",
    reviews: "5,690 reviews",
    imageUrl: `${BASE}/ctsnslh-stackable-bins.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CHRNM2YF?tag=deskfinds0d-20",
    description:
      "93-quart total capacity is the highest volume option in this roundup. Translucent lids allow partial content visibility. 5,690 reviews at 4.5 stars is solid validation at under $31. Best for bulk supply storage rather than a traditional rolling cart.",
    specs: ["93 Qt capacity", "Translucent lids", "4 tiers", "Rolling wheels"],
    pros: [
      "93-quart capacity largest volume option in roundup",
      "Translucent lids for partial content visibility",
      "5,690 reviews at 4.5 stars",
      "Under $31 competitive price",
    ],
    cons: [
      "Bin format different from traditional rolling cart",
      "Lids add an access step",
      "Not ideal as a direct printer stand",
    ],
    bestFor:
      "buyers needing rolling large-volume bin storage for bulk paper stock or supply reorders",
  },
  {
    id: "goovilla-124lb-hybrid",
    rank: 6,
    badge: "Best Value for High Weight Capacity",
    name: "Goovilla 3-Tier Rolling Utility Cart, Removable Drawer, 124 lbs, Cups and Hooks, White",
    price: "~$23.99",
    rating: "4.6 stars",
    reviews: "3,559 reviews",
    imageUrl: `${BASE}/goovilla-124lb-cart.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DNFB8FHD?tag=deskfinds0d-20",
    description:
      "124-lb capacity is the highest of any utility cart in this roundup. At $23.99 it is also the lowest-priced option. A removable drawer plus open shelves combines concealed and open storage. Side cups and hooks add accessory organization.",
    specs: ["124 lbs capacity", "Removable drawer", "Cups and hooks", "$23.99"],
    pros: [
      "124-lb capacity highest in this roundup",
      "Lowest price at $23.99",
      "Removable drawer plus open shelves combination",
      "Side cups and hooks for accessories",
    ],
    cons: [
      "Single removable drawer limited vs 4-drawer carts",
      "Lockable wheels only, no removable caster option",
      "Open shelves for most storage",
    ],
    bestFor:
      "home office workers who need a rolling cart to support a heavy printer at the lowest price",
  },
  {
    id: "yasonic-3-tier-black",
    rank: 7,
    badge: "Best Black Metal with Accessories",
    name: "YASONIC 3-Tier Rolling Cart, Metal Mesh Baskets, Hanging Cups and Hooks, 66 lbs, Black",
    price: "~$32.99",
    rating: "4.7 stars",
    reviews: "1,773 reviews",
    imageUrl: `${BASE}/yasonic-3-tier-black.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CRGNKHVW?tag=deskfinds0d-20",
    description:
      "4.7 stars tied for the highest rating in this roundup. 66-lb capacity per shelf is 3x the standard 22-lb rating on most utility carts. Hanging cups and hooks are included for accessory storage. Black finish suits darker home office setups.",
    specs: ["4.7 stars", "66 lbs per shelf", "Cups and hooks", "Black metal mesh"],
    pros: [
      "4.7 stars tied highest rating in roundup",
      "66-lb capacity 3x most utility carts",
      "Cups and hooks included",
      "Black finish suits darker setups",
    ],
    cons: [
      "Black finish limits compatibility with white or natural setups",
      "1,773 reviews smaller than top picks",
      "Open mesh baskets only, no drawers",
    ],
    bestFor:
      "darker home office setups needing metal construction and higher weight capacity at under $33",
  },
  {
    id: "letaya-mobile-file-cabinet",
    rank: 8,
    badge: "Best for Active File Storage on Wheels",
    name: "Letaya 3-Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinet, 5 Wheels",
    price: "~$99.99",
    rating: "4.5 stars",
    reviews: "1,329 reviews",
    imageUrl: `${BASE}/letaya-mobile-cabinet.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=deskfinds0d-20",
    description:
      "Confirmed letter/legal/A4 file hanging capability makes this the best pick for active document storage on wheels. Locking drawers add document security. A 5-wheel design improves stability over standard 4-wheel cabinets. Metal construction is more durable than engineered wood alternatives.",
    specs: ["3 drawers", "Locking drawers", "5 wheels", "Metal construction"],
    pros: [
      "Confirmed letter/legal/A4 file hanging capability",
      "Locking drawers for document security",
      "5-wheel design improves stability",
      "Metal construction more durable",
    ],
    cons: [
      "$99.99 most expensive in this roundup by a significant margin",
      "Not a general utility cart",
      "Does not function as a flat printer stand surface",
    ],
    bestFor:
      "home office workers specifically needing rolling file storage for active documents with a lock",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the best rolling cart for a home office printer?",
    a: "For a heavy printer specifically, the Goovilla at $23.99 with 124-lb capacity is the best value. For a general utility cart with the highest review count, the Simple Houseware with 32,107 reviews at 4.7 stars is the most validated choice.",
  },
  {
    q: "How heavy is a typical home office printer?",
    a: "Inkjet printers typically weigh 5 to 20 lbs. Laser printers range from 20 to 50 lbs. Most utility carts in this roundup have a 22 lbs per shelf limit, which fits most inkjets but not heavy laser printers. The Goovilla at 124 lbs and YASONIC at 66 lbs have higher capacities.",
  },
  {
    q: "What is the advantage of lockable casters on a rolling cart?",
    a: "Lockable casters keep the cart in a fixed position and prevent it from drifting when you place items on it or open drawers. Most carts in this roundup include at least 2 lockable casters. Look for this feature on any cart used as a printer stand.",
  },
  {
    q: "Is a metal or plastic rolling cart better for a home office?",
    a: "Metal carts (Simple Houseware, Pipishell, YASONIC) are more durable and support higher weight. Plastic carts (HOMZ) are lighter and come in clear-drawer versions that show contents without opening. Both materials are appropriate for a home office context.",
  },
  {
    q: "Which rolling cart is best for organizing supplies rather than a printer?",
    a: "The HOMZ 4-Drawer plastic cart with 13,002 reviews is the best-validated enclosed-drawer cart for supply organization. The HOMZ 3-Tier clear-drawer adds the visibility benefit. Both are better for supply storage than open-shelf utility carts.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-rolling-carts-with-drawers", title: "Best Rolling Carts with Drawers (2026)" },
  { href: "/guide/best-printer-stands-with-storage", title: "Best Printer Stands with Storage (2026)" },
  { href: "/guide/best-desk-shelves-small-desks", title: "Best Desk Shelves for Small Desks (2026)" },
  { href: "/guide/small-desk-organization-ideas", title: "Small Desk Organization Ideas" },
];
