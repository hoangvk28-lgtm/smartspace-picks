const BASE = "/images/guides/best-small-printer-stands";
export const guideSlug = "best-small-printer-stands";
export const guideTitle = "8 Best Small Printer Stands for Home Offices (2026)";
export const metaTitle =
  "Best Small Printer Stands for Home Offices (2026): Compact Options Ranked";
export const metaDescription =
  "Find the best small printer stands for home offices. Compact 2-tier and 3-tier carts with exact dimensions, weight capacity, and power outlet options. Ranked by reviews.";
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
    id: "huanuo-narrow-14in",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "HUANUO Printer Stand with Cable Management and Storage Drawer, 2-Tier, 14.1 inch Wide, Black",
    price: "~$33.99",
    rating: "4.5 stars",
    reviews: "6,293 reviews",
    imageUrl: `${BASE}/huanuo-14in-narrow.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07CBV7YJ8?tag=deskfinds0d-20",
    description:
      "6,293 reviews at 4.5 stars is the strongest trust signal in this roundup by a significant margin. At 14.1 inches wide, it is the narrowest cart here and suits tight spaces beside a desk. Built-in cable management routes printer cables cleanly. Locking casters keep the cart from drifting during printing.",
    specs: ["14.1 inch wide", "Cable management", "Locking casters", "Storage drawer"],
    pros: [
      "6,293 reviews at 4.5 stars strongest trust signal in roundup",
      "14.1-inch narrow width suits tight spaces",
      "Cable management built in",
      "Locking casters",
    ],
    cons: [
      "No power outlet",
      "Black steel mesh may not suit warm office aesthetics",
      "Single small drawer only",
    ],
    bestFor:
      "narrow spaces where width is the constraint and cable management is needed at the lowest price",
  },
  {
    id: "vasagle-under-desk",
    rank: 2,
    badge: "Best Under-Desk Option",
    name: "VASAGLE Industrial 2-Tier Mobile Cart, 15.7 x 13.4 inches, 99 lbs Capacity, Ebony Black",
    price: "~$35.99",
    rating: "4.7 stars",
    reviews: "1,784 reviews",
    imageUrl: `${BASE}/vasagle-industrial-ebony.webp`,
    amazonUrl: "https://www.amazon.com/dp/B075SWRC34?tag=deskfinds0d-20",
    description:
      "At 13.4 inches tall, this is the only cart in this roundup specifically suited for sliding under a standard desk. 4.7 stars is the highest rating here. A 99-lb capacity handles heavy laser printers. Under $36 with strong ratings.",
    specs: ["13.4 inch height", "99 lbs capacity", "Ebony black", "2 tiers"],
    pros: [
      "4.7 stars highest rating in roundup",
      "13.4-inch height fits under standard desks",
      "99-lb capacity handles heavy laser printers",
      "Under $36",
    ],
    cons: [
      "No drawer or concealed storage",
      "No cable management",
      "Ebony black only, no color options",
    ],
    bestFor:
      "buyers who specifically need a printer stand that slides completely under the desk",
  },
  {
    id: "hoobro-2-tier-rustic",
    rank: 3,
    badge: "Best Rustic Brown 2-Tier",
    name: "HOOBRO 2-Tier Printer Stand, Industrial Under Desk Cart with Shelf, 88 lbs, Rustic Brown",
    price: "~$32.99",
    rating: "4.5 stars",
    reviews: "2,359 reviews",
    imageUrl: `${BASE}/hoobro-2-tier-rustic.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08BR5JJQF?tag=deskfinds0d-20",
    description:
      "2,359 reviews at 4.5 stars is a strong validation for a rustic brown compact cart under $33. An 88-lb per shelf capacity handles any standard home office printer. The rustic brown and black finish pairs with warm wood office furniture. No power outlet.",
    specs: ["88 lbs per shelf", "Rustic brown", "2 tiers", "Rolling casters"],
    pros: [
      "2,359 reviews at 4.5 stars strong validation",
      "88-lb capacity handles standard home printers",
      "Rustic brown pairs with warm wood desks",
      "Under $33",
    ],
    cons: [
      "No drawer or concealed storage",
      "No power outlet",
      "Open shelves only",
    ],
    bestFor:
      "small home offices with warm wood tones needing a rustic brown rolling printer cart",
  },
  {
    id: "hoobro-3-tier-power",
    rank: 4,
    badge: "Best 3-Tier with Power Access",
    name: "HOOBRO 3-Tier Mobile Printer Table, Rolling Cart with Power Outlet and USB Ports, Rustic Brown",
    price: "~$34.99",
    rating: "4.5 stars",
    reviews: "976 reviews",
    imageUrl: `${BASE}/hoobro-3-tier-power.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BVHYLM57?tag=deskfinds0d-20",
    description:
      "Three tiers plus a built-in power outlet and USB ports under $35 is competitive value. Side hooks add optional accessory storage. The rustic brown finish matches the 2-tier HOOBRO. At 44 lbs per shelf, verify that your printer is within this weight limit.",
    specs: ["Power outlet", "USB ports", "3 tiers", "44 lbs per shelf"],
    pros: [
      "3 tiers plus power outlet under $35",
      "Power outlet and 2 USB ports",
      "Side hooks for accessory storage",
      "4.5 stars",
    ],
    cons: [
      "44-lb capacity limit requires weight verification",
      "No drawer",
      "976 reviews smaller than top picks",
    ],
    bestFor:
      "apartments and small offices lacking a nearby outlet where 3 storage tiers are more useful than a single drawer",
  },
  {
    id: "tutotak-white-power",
    rank: 5,
    badge: "Best White Finish with Power Outlets",
    name: "TUTOTAK 2-Tier Printer Stand, Rolling Cart with Power Outlets and USB Ports, White",
    price: "~$26.99",
    rating: "4.4 stars",
    reviews: "780 reviews",
    imageUrl: `${BASE}/tutotak-white-power.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D1K1462B?tag=deskfinds0d-20",
    description:
      "The lowest price in this roundup for a printer stand with a power outlet at $26.99. White finish is uncommon in this category and suits light-colored and Scandinavian home office setups. Locking wheels are included. 780 reviews at 4.4 stars is a reasonable early signal.",
    specs: ["Power outlet", "USB ports", "White finish", "Locking wheels"],
    pros: [
      "Lowest price with power outlet integration",
      "White finish uncommon in this category",
      "Locking wheels included",
      "4.4 stars",
    ],
    cons: [
      "780 reviews smaller sample",
      "Verify outlet count and weight capacity on listing",
      "2-tier only with no drawer",
    ],
    bestFor:
      "light-colored home office setups needing power outlet access at the lowest possible price",
  },
  {
    id: "hoobro-charging-station",
    rank: 6,
    badge: "Best Compact Charging Cart",
    name: "HOOBRO 2-Tier Printer Stand with Charging Station, 1 Outlet and 2 USB Ports, Rustic Brown",
    price: "~$26.99",
    rating: "4.4 stars",
    reviews: "708 reviews",
    imageUrl: `${BASE}/hoobro-charging-station.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CCV5YC4L?tag=deskfinds0d-20",
    description:
      "At $26.99, this is the lowest-priced option in this roundup with a power outlet. Rustic brown pairs with warm wood desks. The compact 2-tier format suits small spaces. Only 1 outlet is included, so plan accordingly if you need multiple plugs.",
    specs: ["1 outlet", "2 USB ports", "Rustic brown", "2 tiers"],
    pros: [
      "$26.99 lowest price in roundup with power outlet",
      "Rustic brown pairs with warm wood desks",
      "Compact 2-tier format",
      "1 outlet and 2 USB built in",
    ],
    cons: [
      "44-lb capacity excludes some heavier printers",
      "708 reviews smaller sample",
      "Only 1 outlet, not 2",
    ],
    bestFor:
      "buyers wanting rustic brown aesthetics with power outlet access at the lowest price point",
  },
  {
    id: "yaohuoo-22x15-fabric",
    rank: 7,
    badge: "Best for Larger Printers",
    name: "YAOHUOO 22x15 Printer Stand with Fabric Drawer, 2-Tier Rolling Cart, 88 lbs Per Shelf",
    price: "~$39.98",
    rating: "4.5 stars",
    reviews: "924 reviews",
    imageUrl: `${BASE}/yaohuoo-22x15-fabric.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CGHMP9BH?tag=deskfinds0d-20",
    description:
      "A 22-inch top surface accommodates wide all-in-one inkjet printers that would not fit safely on narrower 14-18 inch compact stands. At 88 lbs per shelf, it handles heavier devices. A fabric drawer provides concealed storage. 924 reviews at 4.5 stars validate the design.",
    specs: ["22x15 inch surface", "88 lbs per shelf", "Fabric drawer", "2 tiers"],
    pros: [
      "22-inch top surface fits wide all-in-one printers",
      "88-lb per shelf high capacity",
      "Fabric drawer for concealed storage",
      "4.5 stars 924 reviews",
    ],
    cons: [
      "22-inch width is the largest footprint in this roundup",
      "No power outlet",
      "Fabric drawer lighter than wood construction",
    ],
    bestFor:
      "buyers with a wide all-in-one inkjet printer that would not fit safely on a narrower compact stand",
  },
  {
    id: "vyuol-3-tier-dual-rod",
    rank: 8,
    badge: "Best Structural Design for Stability",
    name: "VYUOL 3-Tier Printer Stand with Fabric Drawer, Dual-Rod Support, Rustic Brown",
    price: "~$27.99",
    rating: "4.7 stars",
    reviews: "228 reviews",
    imageUrl: `${BASE}/vyuol-3-tier-dual-rod.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DQ55HR7H?tag=deskfinds0d-20",
    description:
      "4.7 stars tied for highest rating in this roundup. A dual-rod frame design reduces wobble during printing, a practical structural advantage over single-rod carts. Three tiers accommodate printer plus scanner plus supplies. At $27.99 it is budget-priced for the feature set.",
    specs: ["Dual-rod frame", "3 tiers", "Fabric drawer", "Rustic brown"],
    pros: [
      "4.7 stars tied highest rating in roundup",
      "Dual-rod frame reduces wobble during printing",
      "3 tiers for printer plus scanner plus supplies",
      "$27.99 budget-friendly",
    ],
    cons: [
      "228 reviews small sample for confident recommendation",
      "Fabric drawer lighter construction",
      "No power outlet",
    ],
    bestFor:
      "buyers prioritizing structural stability who want a 3-tier rustic brown cart at a budget price",
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
    q: "What is the best small printer stand under $35?",
    a: "The HOOBRO 2-Tier at $32.99, HOOBRO Charging Station at $26.99, TUTOTAK at $26.99, and VYUOL at $27.99 are all under $35. The HOOBRO 2-Tier has 2,359 reviews versus smaller samples on the others, making it the most validated option at this price.",
  },
  {
    q: "How low does a printer stand need to be to fit under a desk?",
    a: "Standard desk height is 29 to 30 inches. The VASAGLE 13.4-inch model is the only one in this roundup specifically rated for under-desk use. Most 2-tier stands are 19 to 23 inches tall and will not fit under a standard desk.",
  },
  {
    q: "Which small printer stand supports the heaviest printers?",
    a: "The VASAGLE rates at 99 lbs per shelf, the highest in this roundup. The YAOHUOO 22x15 and HOOBRO 2-Tier both rate at 88 lbs per shelf. These three handle any standard home laser printer.",
  },
  {
    q: "Do any of these small printer stands include power outlets?",
    a: "Yes. The HOOBRO 3-Tier, TUTOTAK, and HOOBRO Charging Station all include built-in power outlets and USB ports. The HOOBRO Charging Station at $26.99 is the lowest-cost option with power access.",
  },
  {
    q: "What is the narrowest compact printer stand option?",
    a: "The HUANUO at 14.1 inches wide is the narrowest cart in this roundup with 6,293 reviews for strong validation. The VASAGLE at 15.7 inches is the second narrowest.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-printer-stands-with-storage",
    title: "Best Printer Stands with Storage (2026)",
  },
  {
    href: "/guide/best-printer-stands-with-file-drawers",
    title: "Best Printer Stands with File Drawers (2026)",
  },
  {
    href: "/guide/best-under-desk-storage-drawers",
    title: "Best Under Desk Storage Drawers (2026)",
  },
  {
    href: "/guide/small-desk-organization-ideas",
    title: "Small Desk Organization Ideas",
  },
];
