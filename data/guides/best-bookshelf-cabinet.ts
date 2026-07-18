export const guideSlug = "best-bookshelf-cabinet";
export const guideTitle = "8 Best Bookshelf Cabinets in 2026";
export const metaTitle = "Best Bookshelf Cabinets in 2026 (Doors, Glass Display & Locking)";
export const metaDescription =
  "8 best bookshelf cabinets in 2026, comparing enclosed-door combos, glass LED display cabinets, and locking storage units. Compare capacity, features, and price.";
export const mainKeyword = "bookshelf cabinet";
export const introParagraphs = [
  "A bookshelf cabinet gives you the best of both worlds, open shelving for the books and decor you want on display, plus enclosed doors or drawers for everything you'd rather keep out of sight.",
  "Below are 8 bookshelf cabinets we evaluated on capacity, construction, and standout features, ranging from farmhouse-style door combos under $100 to glass display cabinets with automatic LED lighting.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51P0hhxgYxL._SL500_.jpg";

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

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "vasagle-liry-farmhouse",
    rank: 1,
    badge: "Best Overall",
    name: "VASAGLE Liry Farmhouse 6-Tier Bookshelf + 2-Door Cabinet",
    price: "$79.99",
    rating: "4.6",
    reviews: "2,298",
    imageUrl: "https://m.media-amazon.com/images/I/51P0hhxgYxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H5VH3H97?tag=deskfinds0d-20",
    description:
      "The VASAGLE Liry carries the highest total weight capacity in this entire list at 374.8 lbs, split between 2 open display tiers up top and a 2-door cabinet below with 3 adjustable shelves that can be set to 5 different height positions. A robot-vacuum-friendly 3.5-inch base gap means it won't block your cleaning routine, a small but genuinely useful detail.\n\nThe two-tone Cloud White and Warm Brown farmhouse finish gives it a warmer look than an all-white or all-black cabinet, and at 24.8 inches wide it fits comfortably in a living room, entryway, or home office.",
    specs: [
      "24.8\"W x 10\"D x 70.7\"H",
      "Engineered wood",
      "2 open tiers + 2-door cabinet, 3 adjustable shelves (5 height options)",
      "374.8 lb total capacity",
      "Robot-vacuum-friendly 3.5\" base",
    ],
    pros: [
      "Highest total capacity in this list at 374.8 lbs",
      "Robot-vacuum-friendly base gap",
      "2-door cabinet hides clutter behind adjustable shelving",
      "Attractive two-tone farmhouse finish",
    ],
    cons: [
      "No glass doors or LED lighting for display",
      "Engineered wood, not solid wood",
      "Cabinet doors are opaque, so contents stay fully hidden",
    ],
    bestFor: "Buyers who want the highest overall capacity plus real hidden storage behind cabinet doors",
  },
  {
    id: "shintenchi-6-tier-cabinet",
    rank: 2,
    badge: "Best Compact Depth",
    name: "Shintenchi 6-Tier Bookshelf + 2-Door Cabinet",
    price: "$79.99",
    rating: "4.3",
    reviews: "746",
    imageUrl: "https://m.media-amazon.com/images/I/31OuUlfdpbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DLB54QRV?tag=deskfinds0d-20",
    description:
      "The Shintenchi combines 4 open display shelves with 2 dust-blocking enclosed shelves behind doors, all rated for a solid 300 lb total capacity. Black industrial styling with metal accents gives it a more modern, edgy look than the farmhouse-style alternatives in this list, and a stability device is built in to help resist tipping.\n\nAt just 9.3 inches deep, it's the most compact bookshelf cabinet here front to back, making it an easy fit for a living room, study, or apartment where floor space is tight.",
    specs: [
      "23.6\"W x 9.3\"D x 70.9\"H",
      "Engineered wood + metal",
      "4 open shelves + 2 enclosed shelves with doors",
      "300 lb total capacity",
      "Stability device included",
    ],
    pros: [
      "300 lb total capacity",
      "Most compact depth in this list at 9.3\"",
      "Dust-blocking enclosed shelves protect stored items",
      "Modern black industrial styling",
    ],
    cons: [
      "Lower star rating than most other picks at 4.3",
      "Fewer total ratings than the top sellers",
      "No LED lighting or glass display doors",
    ],
    bestFor: "Space-constrained rooms that need a slim-depth cabinet with both open and enclosed storage",
  },
  {
    id: "befrases-farmhouse-drawers",
    rank: 3,
    badge: "Most Versatile Storage",
    name: "Befrases Farmhouse White Cabinet + 2 Doors + 2 Drawers",
    price: "$99.99",
    rating: "4.5",
    reviews: "1,630",
    imageUrl: "https://m.media-amazon.com/images/I/41tFAo0NXNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CMGW2X41?tag=deskfinds0d-20",
    description:
      "The Befrases packs the most total storage zones into a mid-size footprint of any pick in this list, combining 2 doors, 2 drawers, and 1 adjustable shelf into 5 distinct storage areas. A metal cross-bar accent along the base adds an industrial touch to the otherwise farmhouse-style white finish.\n\nBuilt from recyclable P2 board, it's noticeably lighter and easier to move than the taller, heavier cabinets in this list, which makes it a practical pick if you rearrange furniture often or need to carry it up stairs.",
    specs: [
      "23\"W x 11.6\"D x 42.5\"H",
      "P2 board (recyclable)",
      "2 doors + 2 drawers + 1 adjustable shelf",
      "5 total storage zones",
      "Metal cross-bar industrial accent",
    ],
    pros: [
      "Most versatile storage mix with 5 total zones",
      "Lightweight and easy to move",
      "Recyclable P2 material",
      "Attractive farmhouse look with an industrial accent",
    ],
    cons: [
      "Shorter than most other picks in this list at 42.5\"",
      "Lower total capacity than the taller cabinet combos",
      "No glass display or LED lighting",
    ],
    bestFor: "Buyers who want the most storage zones in a compact, easy-to-move cabinet",
  },
  {
    id: "brottar-display-led",
    rank: 4,
    badge: "Best Glass Display",
    name: "BROTTAR Display Cabinet + Glass Doors + LED + Sensor",
    price: "$179.99",
    rating: "4.4",
    reviews: "2,031",
    imageUrl: "https://m.media-amazon.com/images/I/51i3506hQML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DF7G3BPQ?tag=deskfinds0d-20",
    description:
      "The BROTTAR is built specifically for showing off a collection, with 4 pop-up glass doors across 4 tiers and 3-color LED lighting controlled by a human-body sensor that switches on automatically when you walk up and off when you step away. FSC-certified wood construction backs a sustainable sourcing claim most competitors skip.\n\nAn anti-tipping device is included for wall anchoring, and the black finish with glass fronts gives it the best-looking display presence in this list for collectibles, books, or decor you want lit and visible.",
    specs: [
      "31.5\"W x 14\"D x 65\"H",
      "FSC-certified wood + glass",
      "4 pop-up glass doors, 4 tiers",
      "3-color LED with human-body sensor",
      "Anti-tipping device included",
    ],
    pros: [
      "Pop-up glass doors on all 4 tiers",
      "3-color LED with automatic motion sensor",
      "FSC-certified sustainable wood",
      "Best-looking glass display cabinet in this list",
    ],
    cons: [
      "Among the most expensive picks in this list at $179.99",
      "Glass doors require more careful handling than solid wood doors",
      "Lower star rating than the storage-focused cabinets",
    ],
    bestFor: "Buyers who want to display and light up a collectibles or book collection behind glass",
  },
  {
    id: "brottar-corner-hexagonal",
    rank: 5,
    badge: "Best Corner Fit",
    name: "BROTTAR Corner Display Cabinet + Glass Doors + LED + Sensor",
    price: "$179.99",
    rating: "4.6",
    reviews: "645",
    imageUrl: "https://m.media-amazon.com/images/I/51c02m9pUmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F296Z662?tag=deskfinds0d-20",
    description:
      "This BROTTAR takes a hexagonal corner design that fits directly into a room corner, a shape none of the other cabinets in this list can match, giving you 360-degree visibility through 4 magnetic glass doors on 4 tiers. The same 3-color LED and human-body sensor from the standard BROTTAR carries over here.\n\nFSC-certified wood and tempered glass construction, plus a 40 lb per-shelf rating, make it both durable and display-ready, and the white finish keeps it bright even tucked into a corner with less natural light.",
    specs: [
      "33.5\"W x 14.2\"D x 65\"H",
      "FSC-certified wood + tempered glass",
      "Hexagonal corner design, 4 magnetic glass doors, 4 tiers",
      "3-color LED with human-body sensor",
      "40 lb/shelf",
    ],
    pros: [
      "Hexagonal corner design fits directly into a room corner",
      "360-degree visibility through 4-sided glass",
      "LED motion sensor lighting",
      "Best-looking corner cabinet in this list",
    ],
    cons: [
      "Among the most expensive picks in this list at $179.99",
      "Corner-specific shape limits placement flexibility elsewhere",
      "Tempered glass doors need careful handling",
    ],
    bestFor: "Buyers with an unused room corner who want a lit glass display cabinet built for that exact space",
  },
  {
    id: "peukc-steel-locking",
    rank: 6,
    badge: "Most Secure",
    name: "PEUKC 71\" Metal Display Cabinet + Tempered Glass Doors + Lock",
    price: "$159.99",
    rating: "4.3",
    reviews: "1,412",
    imageUrl: "https://m.media-amazon.com/images/I/31bAAXan8lL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTHPR71K?tag=deskfinds0d-20",
    description:
      "The PEUKC is built around an 8mm heavy-duty steel frame, the thickest of any cabinet in this list, and carries the highest per-shelf capacity here at 120 lbs. A 3-point door lock secures the tempered glass doors, making it a genuinely practical pick for a home office storing important documents or valuables alongside books.\n\nFour adjustable shelves let you customize the interior layout, and a powder-coated anti-rust finish keeps the steel frame looking clean over time.",
    specs: [
      "31.5\"W x 15.7\"D x 71\"H",
      "8mm steel frame + tempered glass",
      "4 adjustable shelves",
      "120 lb/shelf",
      "Lockable 3-point door lock",
      "Powder-coated anti-rust finish",
    ],
    pros: [
      "Highest per-shelf capacity in this list at 120 lbs",
      "Thickest steel frame at 8mm",
      "Lockable 3-point security",
      "Powder-coated anti-rust finish",
    ],
    cons: [
      "No LED lighting or motion sensor",
      "Lower star rating than most other picks at 4.3",
      "Heavier and harder to move than lighter cabinet combos",
    ],
    bestFor: "Home offices that need lockable, secure storage for documents or valuables alongside display shelving",
  },
  {
    id: "dystler-acrylic-led",
    rank: 7,
    badge: "Best for Kitchens or Wet Rooms",
    name: "Dystler 65\" Tall Display Cabinet + Acrylic Doors + LED Sensor",
    price: "$169.99",
    rating: "4.4",
    reviews: "684",
    imageUrl: "https://m.media-amazon.com/images/I/51QCHDSiqAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CYGGYBFR?tag=deskfinds0d-20",
    description:
      "The Dystler uses transparent acrylic doors instead of glass, the only pick in this list to do so, which cuts weight and reduces breakage risk while still giving full visibility into all 5 tiers. A smart 3-color LED with a motion sensor lights the interior automatically, and 2 adjustable shelves let you fine-tune the layout alongside 2 fixed shelves.\n\nWaterproof FSC-certified MDF construction means it holds up in rooms where humidity is a concern, kitchens, dining rooms, and bathrooms included, somewhere most wood display cabinets would warp over time.",
    specs: [
      "27.56\"W x 13.78\"D x 64.96\"H",
      "FSC-certified MDF + acrylic",
      "5 tiers, 2 adjustable + 2 fixed shelves",
      "3-color smart LED with sensor",
      "Waterproof construction",
    ],
    pros: [
      "Most transparent acrylic doors in this list",
      "Smart LED motion sensor lighting",
      "Waterproof construction suits kitchens or bathrooms",
      "FSC-certified sustainable wood",
    ],
    cons: [
      "Acrylic doors can scratch more easily than glass over time",
      "Fewer total ratings than the top sellers",
      "No lock, unlike the PEUKC",
    ],
    bestFor: "Kitchens, dining rooms, or bathrooms where a waterproof display cabinet is a must",
  },
  {
    id: "oschf-11-cube-oak",
    rank: 8,
    badge: "Most Premium Build",
    name: "OSCHF 11-Cube Bookcase + 4-Door Cabinet",
    price: "$168.00",
    rating: "4.5",
    reviews: "97",
    imageUrl: "https://m.media-amazon.com/images/I/51MwVy47XAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CMC715ZK?tag=deskfinds0d-20",
    description:
      "The OSCHF is the most premium build in this list, standing on genuine solid oak legs with beech wood door handles rather than the composite or metal hardware found on most competitors. Eleven total cubes, 7 open and 4 enclosed behind doors, give you flexible display and hidden storage in one refined, minimalist unit.\n\nFSC-certified MDF construction backs each cube, rated for 60 lbs apiece and 240 lbs across the top panel, making it sturdy enough for a genuine mixed-use collection despite its compact 46.6\" width and low 39.8\" height.",
    specs: [
      "46.6\"W x 11.2\"D x 39.8\"H",
      "FSC-certified MDF + solid oak legs (30mm) + beech door handles",
      "7 open cubes + 4 enclosed cubes",
      "60 lb/cube (240 lb top panel)",
    ],
    pros: [
      "Most premium construction with solid oak legs and beech handles",
      "11 total cubes split between open and enclosed storage",
      "Most refined minimalist design in this list",
      "FSC-certified sustainable wood",
    ],
    cons: [
      "Fewest total ratings in this list at 97",
      "Low, wide profile takes up more wall width than tall cabinets",
      "No glass display or LED lighting",
    ],
    bestFor: "Buyers who want the most premium materials and finish in a low, wide cube-storage cabinet",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Enclosed cabinet vs glass display",
    explanation:
      "Bookshelf-plus-cabinet combos like the VASAGLE Liry, Shintenchi, and Befrases mix open display with fully hidden storage around $80-100. Glass display cabinets like the BROTTAR and Dystler are more upscale and better suited to showing off collectibles.",
  },
  {
    criterion: "Weight capacity",
    explanation:
      "Capacity ranges from 300 lbs total up to 374.8 lbs on the VASAGLE Liry. Per-shelf capacity is highest on the PEUKC at 120 lbs, useful if you're storing dense items rather than just books.",
  },
  {
    criterion: "Security",
    explanation:
      "The PEUKC is the most secure pick in this list, with an 8mm steel frame and a lockable 3-point door lock, useful for a home office storing documents or valuables.",
  },
  {
    criterion: "Lighting and display features",
    explanation:
      "The BROTTAR (standard and corner) and Dystler all include 3-color LED lighting controlled by a human-body motion sensor, which turns lighting on and off automatically as you approach or step away.",
  },
  {
    criterion: "Material and construction",
    explanation:
      "The OSCHF stands out with genuine solid oak legs and beech wood handles, making it the premium pick, while most other cabinets use engineered wood, MDF, or metal frames.",
  },
  {
    criterion: "Room and placement fit",
    explanation:
      "The BROTTAR Corner cabinet is purpose-built for a hexagonal room corner, the Dystler's waterproof build suits kitchens or bathrooms, and the compact Befrases and Shintenchi fit tighter rooms overall.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What is the best bookshelf cabinet overall?",
    a: "The VASAGLE Liry Farmhouse 6-Tier Bookshelf + 2-Door Cabinet (Pick 1) is the best overall choice, with the highest total capacity in this list at 374.8 lbs and a robot-vacuum-friendly base.",
  },
  {
    q: "Which bookshelf cabinet is best for displaying a collection?",
    a: "The BROTTAR Display Cabinet + Glass Doors + LED + Sensor (Pick 4) and its corner variant (Pick 5) are built specifically for display, with glass doors and automatic 3-color LED lighting.",
  },
  {
    q: "Is there a lockable bookshelf cabinet in this list?",
    a: "Yes, the PEUKC 71\" Metal Display Cabinet (Pick 6) has a 3-point door lock and the thickest 8mm steel frame in this list, making it the most secure option.",
  },
  {
    q: "Which bookshelf cabinet fits a room corner?",
    a: "The BROTTAR Corner Display Cabinet (Pick 5) uses a hexagonal design built specifically to fit into a room corner with 360-degree glass visibility.",
  },
  {
    q: "Is there a waterproof bookshelf cabinet for a kitchen or bathroom?",
    a: "Yes, the Dystler 65\" Tall Display Cabinet (Pick 7) uses waterproof FSC-certified MDF construction that holds up in humid rooms.",
  },
  {
    q: "Which bookshelf cabinet has the most premium materials?",
    a: "The OSCHF 11-Cube Bookcase + 4-Door Cabinet (Pick 8) uses genuine solid oak legs and beech wood door handles, the most premium construction in this list.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-with-doors", title: "Best Bookshelves with Doors in 2026" },
  { href: "/guide/best-bookshelf-with-storage", title: "Best Bookshelves with Storage in 2026" },
  { href: "/guide/best-bookshelf-with-drawers", title: "Best Bookshelves with Drawers in 2026" },
];
