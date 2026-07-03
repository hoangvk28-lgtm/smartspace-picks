const BASE = "/images/guides/best-under-desk-storage-drawers";
export const guideSlug = "best-under-desk-storage-drawers";
export const guideTitle = "8 Best Under Desk Storage Drawers (2026)";
export const metaTitle =
  "Best Under Desk Storage Drawers (2026): Adhesive, Clamp-On, and Lockable Picks";
export const metaDescription =
  "Find the best under desk drawers for home offices. Adhesive, clamp-on, and bracket-mount options compared by reviews. No-drill and renter-friendly picks included.";
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
    id: "yoousoo-2pack-adhesive",
    rank: 1,
    badge: "Best Adhesive Option by Review Count",
    name: "YOOUSOO 2-Pack Under Desk Storage Drawer, Hidden Slide Out, Self-Adhesive, White",
    price: "~$15.99",
    rating: "4.3 stars",
    reviews: "1,999 reviews",
    imageUrl: `${BASE}/yoousoo-2pack-adhesive.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08B3XHWJD?tag=deskfinds0d-20",
    description:
      "The most reviewed under desk drawer in this roundup at 1,999 reviews. A 2-pack at $15.99 gives the lowest per-drawer cost of any option here. No drilling required, making it renter-friendly. Works on smooth flat desk undersides. White finish suits most desk undersides.",
    specs: ["2-pack", "Self-adhesive", "No drill", "White"],
    pros: [
      "Most reviewed under desk drawer in roundup (1,999)",
      "2-pack at $15.99 lowest per-drawer cost",
      "No drilling ideal for renters",
      "White finish",
    ],
    cons: [
      "4.3 stars lowest rating in roundup",
      "Adhesive fails on rough or textured surfaces",
      "Lower weight limit than clamped alternatives",
    ],
    bestFor:
      "renters with smooth-underside desks who need light storage for small everyday items at the lowest price",
  },
  {
    id: "lockable-double-drawer",
    rank: 2,
    badge: "Best Premium Option with Lock",
    name: "Under Desk Drawer Slide-Out, Lockable Metal Storage with Cable Management, Double Drawers",
    price: "~$99.99",
    rating: "4.5 stars",
    reviews: "1,329 reviews",
    imageUrl: `${BASE}/lockable-double-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DRDJ3PVQ?tag=deskfinds0d-20",
    description:
      "The only lockable under desk drawer in this roundup. Integrated cable management routes cables from the underside of the desk cleanly. Double drawers double the storage capacity of single-drawer alternatives. 1,329 reviews at 4.5 stars provide strong confidence for a premium product.",
    specs: ["Lockable", "Cable management", "Double drawers", "Metal"],
    pros: [
      "Only lockable drawer in this roundup",
      "Cable management integrated",
      "Double drawer doubles storage",
      "4.5 stars 1,329 reviews",
    ],
    cons: [
      "$99.99 highest price by a wide margin",
      "Requires drilling, not renter-friendly",
      "Overkill for basic pen and notepad storage",
    ],
    bestFor:
      "permanent home offices where document or item security is a priority",
  },
  {
    id: "homeify-clamp-on",
    rank: 3,
    badge: "Best Clamp-On: No Drilling, No Adhesive",
    name: "Homeify Under Desk Drawer Organizer Clamp-On, Mesh Metal, 1 Drawer, No Drill, Black",
    price: "~$21.99",
    rating: "4.2 stars",
    reviews: "889 reviews",
    imageUrl: `${BASE}/homeify-clamp-on.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CKZJ43CR?tag=deskfinds0d-20",
    description:
      "A clamp-on attachment requires no drilling and no surface adhesive, making it fully removable without any surface damage. Metal mesh construction is more durable than plastic alternatives. Requires a desk edge within the clamp range. 889 reviews at 4.2 stars.",
    specs: ["Clamp-on", "No drill", "Mesh metal", "Removable"],
    pros: [
      "No drilling required, renter-friendly",
      "Removable without surface damage",
      "Metal mesh more durable than plastic",
      "No adhesive dependency",
    ],
    cons: [
      "4.2 stars second lowest in roundup",
      "Requires desk edge within clamp range",
      "Single drawer only",
    ],
    bestFor:
      "renters with a desk edge within clamp range who want a removable under-desk drawer without adhesive",
  },
  {
    id: "bostitch-konnect-2pack",
    rank: 4,
    badge: "Best Value Adhesive with Dividers",
    name: "Bostitch Konnect Under Desk Drawer, Self-Adhesive, 4 Customizable Dividers, 2-Pack, Black",
    price: "~$11.97",
    rating: "4.6 stars",
    reviews: "806 reviews",
    imageUrl: `${BASE}/bostitch-konnect.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CJCJTVJ6?tag=deskfinds0d-20",
    description:
      "At $11.97 for a 2-pack, this is the lowest-priced option in this roundup. 4.6 stars is the highest rating among adhesive options. Bostitch is a recognized office brand. Four customizable dividers per drawer let you organize by item type.",
    specs: ["2-pack", "4 dividers", "Self-adhesive", "Black"],
    pros: [
      "Lowest price at $11.97 for 2 units",
      "4.6 stars highest among adhesive picks",
      "Bostitch recognized office brand",
      "4 customizable dividers per drawer",
    ],
    cons: [
      "Adhesive weight limits apply",
      "Requires smooth flat desk underside",
      "No lock",
    ],
    bestFor:
      "buyers wanting organized divided under-desk storage at the lowest price from a recognizable office brand",
  },
  {
    id: "svnnelp-3pack-system",
    rank: 5,
    badge: "Best System Approach with Three Sizes",
    name: "SVNNELP Under Desk Drawer 3-Pack (Large, Medium, Small), Slide Out, Clear Black",
    price: "~$30.99",
    rating: "4.6 stars",
    reviews: "364 reviews",
    imageUrl: `${BASE}/svnnelp-3pack.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CX9GS4BC?tag=deskfinds0d-20",
    description:
      "Three different sizes in one purchase create an organized under-desk system for different item types. Clear panels let you see contents without opening each drawer. 4.6 stars matches the Bostitch for highest adhesive rating. One purchase covers multiple storage needs.",
    specs: ["3-pack", "Three sizes", "Clear panels", "Self-adhesive"],
    pros: [
      "Three different sizes create an organized system",
      "4.6 stars matches highest adhesive rating",
      "Clear panels show contents without opening",
      "One purchase covers multiple storage needs",
    ],
    cons: [
      "364 reviews relatively small sample",
      "Adhesive limits apply to all three units",
      "Requires three smooth attachment points",
    ],
    bestFor:
      "buyers wanting an organized under-desk system with different drawer sizes for different item types",
  },
  {
    id: "mofangtech-dual-tier",
    rank: 6,
    badge: "Best Dual-Tier at Mid-Range",
    name: "Mofangtech Dual-Tier Under Desk Drawer, 2 Layers, 15.3 x 9.8 x 5.1 inches, Metal, Black",
    price: "~$54.99",
    rating: "4.5 stars",
    reviews: "192 reviews",
    imageUrl: `${BASE}/mofangtech-dual-tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0F2MD4L4X?tag=deskfinds0d-20",
    description:
      "Two storage layers double the capacity of a single drawer at the same desk footprint. Known dimensions (15.3 x 9.8 x 5.1 inches) allow accurate clearance planning before installation. Metal construction. Requires drilling for permanent installation.",
    specs: ["Dual-tier", "2 layers", "Metal", "Drill required"],
    pros: [
      "Dual-tier doubles storage capacity",
      "Known dimensions allow clearance planning",
      "Metal construction",
      "4.5 stars",
    ],
    cons: [
      "5.1-inch height requires sufficient under-desk clearance",
      "Requires drilling, not renter-friendly",
      "192 reviews small sample",
    ],
    bestFor:
      "permanent home offices with sufficient under-desk clearance who want double the storage of a single drawer",
  },
  {
    id: "unitedpower-pullout",
    rank: 7,
    badge: "Best Single-Layer Metal Option",
    name: "UNITEDPOWER Under Desk Drawer Storage, Pull-Out Hidden Counter Drawer, Metal, Black",
    price: "~$39.99",
    rating: "4.6 stars",
    reviews: "167 reviews",
    imageUrl: `${BASE}/unitedpower-pullout.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BY8PNXJ1?tag=deskfinds0d-20",
    description:
      "4.6 stars is among the highest initial ratings in this roundup for a single-drawer option. Metal construction at $39.99 is competitive. A compact single-layer format suits desks with limited vertical clearance. Requires drilling for installation.",
    specs: ["Single layer", "Metal", "Pull-out", "Drill required"],
    pros: [
      "4.6 stars among highest initial ratings in roundup",
      "Metal construction competitive at price",
      "Compact single-layer format",
    ],
    cons: [
      "167 reviews small sample",
      "Requires drilling, not renter-friendly",
      "Single layer only",
    ],
    bestFor:
      "buyers wanting metal construction and a high initial rating at mid-range price who own the desk",
  },
  {
    id: "vivo-16-dual-tier",
    rank: 8,
    badge: "Premium Dual-Tier from Recognized Brand",
    name: "VIVO 16 inch Slide Out Dual-Tier Desk Drawer, Under Desk 2-Layer Storage, Black",
    price: "~$89.99",
    rating: "4.2 stars",
    reviews: "157 reviews",
    imageUrl: `${BASE}/vivo-16-dual-tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CC6Y2L4K?tag=deskfinds0d-20",
    description:
      "VIVO is a recognized brand in desk accessories. A 16-inch width provides the largest single-product storage area in this roundup. Dual-tier doubles capacity. At $89.99 it approaches the lockable premium option at $99.99 with fewer features.",
    specs: ["16 inch width", "Dual-tier", "VIVO brand", "Drill required"],
    pros: [
      "VIVO established brand in desk accessories",
      "16-inch width largest storage area in roundup",
      "Dual-tier doubles capacity",
    ],
    cons: [
      "4.2 stars lowest in roundup",
      "$89.99 close to lockable option at $99.99 with fewer features",
      "157 reviews small sample",
    ],
    bestFor:
      "buyers who specifically want the VIVO brand and need a wide dual-tier drawer without a lock",
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  rating: p.rating,
  reviews: p.reviews,
}));

export const faq: { q: string; a: string }[] = [
  {
    q: "Do I need to drill to install an under desk storage drawer?",
    a: "It depends on the type. Adhesive drawers (YOOUSOO, Bostitch Konnect, SVNNELP) require no drilling and no clamp, just a smooth underside. The Homeify clamp-on requires a desk edge but no drilling. Bracket-mount drawers (lockable double-drawer, Mofangtech, UNITEDPOWER, VIVO) require drilling for permanent installation.",
  },
  {
    q: "What is the weight limit for adhesive under desk drawers?",
    a: "Most adhesive drawers support 3 to 8 lbs of small items such as pens, notepads, and accessories. They are not suited for heavy items like books. Always check the specific product listing for the exact weight rating.",
  },
  {
    q: "Can I attach an under desk drawer to a glass desk?",
    a: "Adhesive options may not adhere safely to glass. Clamp-on options require a solid desk edge. Bracket-mount options require drilling. Glass desks are generally incompatible with all three types. Contact the manufacturer before purchasing.",
  },
  {
    q: "Which under desk drawer is best for renters?",
    a: "Adhesive options (YOOUSOO, Bostitch, SVNNELP) and the Homeify clamp-on are the renter-friendly choices as they require no drilling. The lockable metal drawer and VIVO options require permanent installation.",
  },
  {
    q: "How much do under desk storage drawers cost?",
    a: "Range is $11.97 (Bostitch Konnect 2-pack) to $99.99 (lockable metal double-drawer). Adhesive options range from $11.97 to $30.99. The clamp-on Homeify is $21.99. Bracket-mount options range from $39.99 to $99.99.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-clamp-on-desk-drawers",
    title: "Best Clamp-On Desk Drawers (2026)",
  },
  {
    href: "/guide/small-desk-organization-ideas",
    title: "Small Desk Organization Ideas",
  },
  {
    href: "/guide/under-desk-cable-management",
    title: "Under Desk Cable Management Guide",
  },
  {
    href: "/guide/best-desk-shelves-small-desks",
    title: "Best Desk Shelves for Small Desks (2026)",
  },
];
