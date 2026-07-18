export const guideSlug = "best-bookshelf-3-tier";
export const guideTitle = "8 Best 3-Tier Bookshelves in 2026";
export const metaTitle = "Best 3-Tier Bookshelves in 2026 (Industrial, Compact & Budget)";
export const metaDescription =
  "8 best 3-tier bookshelves in 2026, comparing compact industrial metal-frame shelves, ultra-narrow budget picks, and adjustable designs. Compare capacity and footprint.";
export const mainKeyword = "3 tier bookshelf";
export const introParagraphs = [
  "A 3-tier bookshelf is the right size for a small collection, a decorative display, or a spot where a full-height bookcase would simply overwhelm the room, think a nightstand, end table, or narrow hallway corner.",
  "Below are 8 three-tier bookshelves we evaluated on weight capacity, footprint, and construction, ranging from ultra-compact budget picks under $30 to industrial metal-frame designs that double as an end table or nightstand.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Qjs1SwnfL._SL500_.jpg";

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
    id: "mneetrung-industrial-x-frame",
    rank: 1,
    badge: "Best Overall",
    name: "MNEETRUNG 3-Tier Industrial Shelf",
    price: "$30.59",
    rating: "4.8",
    reviews: "1,430",
    imageUrl: "https://m.media-amazon.com/images/I/41Qjs1SwnfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CDFTGTHC?tag=deskfinds0d-20",
    description:
      "The MNEETRUNG carries the highest rating in this entire list at 4.8 stars, built around an X-shaped metal frame with horizontal cross bars and a backboard that together give it real rigidity for its size. At just 15.7 inches wide and 27.6 inches tall, it's genuinely triple-purpose, working as a small bookshelf, an end table, or a nightstand depending on where you place it.\n\nA mix of metal frame and MDF shelving is rated for 50 lbs total, and adjustable feet keep it level on uneven flooring, a small detail that matters when it's doing double duty as bedside furniture.",
    specs: [
      "15.7\"W x 11.8\"D x 27.6\"H",
      "Metal frame + MDF",
      "X-shaped frame + horizontal cross bars + backboard",
      "50 lb total",
      "Adjustable feet",
    ],
    pros: [
      "Highest rating in this list at 4.8 stars",
      "X-frame with cross bars adds real rigidity",
      "Genuinely triple-purpose as bookshelf, end table, or nightstand",
      "Compact 15.7\" width",
    ],
    cons: [
      "Lower capacity than the heavier industrial picks",
      "No enclosed storage",
      "MDF shelving, not solid wood",
    ],
    bestFor: "Buyers who want the highest-rated, most versatile compact 3-tier shelf for multiple uses",
  },
  {
    id: "vasagle-3-tier-xbrace",
    rank: 2,
    badge: "Smallest Footprint",
    name: "VASAGLE 3-Tier Bookshelf",
    price: "$24.64",
    rating: "4.7",
    reviews: "2,206",
    imageUrl: "https://m.media-amazon.com/images/I/41+8nje54kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DMFBXWHZ?tag=deskfinds0d-20",
    description:
      "The VASAGLE has the smallest footprint of any pick in this list at just 9.4 inches deep and 15.7 inches wide, built around a particleboard and alloy steel frame with X-brace reinforcement for stability. It's rated for 49.5 lbs total, or 16.5 lbs per shelf, plenty for a small book and decor collection.\n\nA two-tone Rustic Brown and Ink Black finish, adjustable feet, and an included anti-tip kit round out a build that's also the cheapest VASAGLE 3-tier option available, at $24.64.",
    specs: [
      "15.7\"W x 9.4\"D x 30.1\"H",
      "Particleboard + alloy steel",
      "X-brace reinforcement",
      "16.5 lb/shelf (49.5 lb total)",
      "Adjustable feet, anti-tip kit",
    ],
    pros: [
      "Smallest footprint among VASAGLE picks",
      "X-brace reinforcement for stability",
      "Cheapest VASAGLE 3-tier option",
      "Strong 4.7-star rating across 2,206 ratings",
    ],
    cons: [
      "Lower capacity than the heavier Homeiju pick",
      "No enclosed storage",
      "Narrow shelves hold fewer books per tier",
    ],
    bestFor: "Buyers who want the smallest possible footprint from a trusted brand at the lowest price",
  },
  {
    id: "hosfais-carb-p2",
    rank: 3,
    badge: "Fastest Assembly",
    name: "Hosfais 3-Tier Wood Bookcase",
    price: "$27.99",
    rating: "4.7",
    reviews: "609",
    imageUrl: "https://m.media-amazon.com/images/I/41AzxaDHAtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CCKS9W18?tag=deskfinds0d-20",
    description:
      "The Hosfais is built from CARB P2-certified plywood, an eco-certification standard for low formaldehyde emissions, paired with a metal side cross tube for stability. Edge protection runs along the back panel, a small but useful detail that guards against scuffs and sharp corners.\n\nAt just 44 lbs total capacity, it's on the lighter-duty end of this list, but it makes up for it with one of the fastest assemblies here at around 20 minutes, and a waterproof finish that holds up to spills.",
    specs: [
      "16.45\"W x 9.45\"D x 28.19\"H",
      "CARB P2 plywood + metal",
      "Side cross tube + edge-protected back panel",
      "44 lb total",
      "Adjustable feet",
      "~20-minute assembly",
    ],
    pros: [
      "CARB P2 eco-certified plywood",
      "Edge protection on all sides",
      "One of the fastest assemblies in this list at ~20 minutes",
      "Waterproof finish",
    ],
    cons: [
      "Lowest total capacity in this list at 44 lbs",
      "Fewer total ratings than the top sellers",
      "No enclosed storage",
    ],
    bestFor: "Buyers who want the quickest assembly plus a low-emission, eco-certified build",
  },
  {
    id: "hoobro-3-installation",
    rank: 4,
    badge: "Highest Per-Shelf Capacity",
    name: "HOOBRO 3-Tier Industrial Bookcase",
    price: "$26.99",
    rating: "4.7",
    reviews: "508",
    imageUrl: "https://m.media-amazon.com/images/I/41lZ7UpCqQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F47V5VCW?tag=deskfinds0d-20",
    description:
      "The HOOBRO carries the highest per-shelf capacity in this list at 40 lbs per shelf, backed by a particleboard-and-metal frame with a back panel and side metal wires for added support. It offers 3 different installation methods, more configuration flexibility than most competitors, so you can set it up in whichever orientation suits your space.\n\nAn anti-tip kit is included for wall anchoring, and the rustic brown finish matches several other industrial-style picks in this list if you're buying multiple pieces for a matched look.",
    specs: [
      "16.5\"W x 11\"D x 28.5\"H",
      "Particleboard + metal",
      "Back panel + side metal wires",
      "40 lb/shelf (highest in this list)",
      "3 installation methods",
      "Anti-tip kit",
    ],
    pros: [
      "Highest per-shelf capacity in this list at 40 lbs",
      "3 different installation configurations",
      "Back panel plus side wires for extra support",
      "Strong 4.7-star rating",
    ],
    cons: [
      "Lower total capacity than the heavier Homeiju pick",
      "No enclosed storage",
      "Fewer total ratings than the top sellers",
    ],
    bestFor: "Buyers who want the highest per-shelf capacity plus flexible installation options",
  },
  {
    id: "homeiju-carbon-steel",
    rank: 5,
    badge: "Highest Total Capacity",
    name: "Homeiju 3-Tier Industrial Bookshelf",
    price: "$35.99",
    rating: "4.6",
    reviews: "2,632",
    imageUrl: "https://m.media-amazon.com/images/I/41XOY1tL9iL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B6P3G41R?tag=deskfinds0d-20",
    description:
      "The Homeiju carries the highest total weight capacity in this list at 220 lbs, thanks to genuine carbon steel construction rather than the lighter alloy steel or particleboard frames found on most competitors. An X-shaped wire back and side horizontal tube add further rigidity to an already sturdy frame.\n\nRust-proof and scratch-resistant coatings help it hold up over years of daily use, and adjustable legs keep it level on uneven flooring, making it the most durable vintage industrial pick in this list.",
    specs: [
      "16.54\"W x 11.02\"D x 27.56\"H",
      "Carbon steel + engineered wood",
      "X-shaped wire back + side horizontal tube",
      "220 lb total (highest in this list)",
      "Adjustable legs",
      "Rust-proof + scratch-resistant",
    ],
    pros: [
      "Highest total capacity in this list at 220 lbs",
      "Genuine carbon steel construction",
      "Most durable vintage industrial pick",
      "Rust-proof and scratch-resistant coating",
    ],
    cons: [
      "Pricier than most other 3-tier picks in this list",
      "Lower star rating than the MNEETRUNG or VASAGLE",
      "No enclosed storage",
    ],
    bestFor: "Buyers who want the heaviest-duty, most durable 3-tier bookshelf for years of daily use",
  },
  {
    id: "furinno-luder-cube",
    rank: 6,
    badge: "Best Budget, Most Compact",
    name: "Furinno LUDER 3-Cube Bookshelf",
    price: "$25.16",
    rating: "4.4",
    reviews: "26,421",
    imageUrl: "https://m.media-amazon.com/images/I/415vIfh-KPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B074NHRZQX?tag=deskfinds0d-20",
    description:
      "The Furinno LUDER is a best-selling budget pick with over 26,000 ratings, built from FSC-certified composite wood that carries an E1 certification for low, essentially odorless formaldehyde emissions. At just 12 inches wide, it's the most compact footprint in this entire list, small enough for a corner most other shelves couldn't fit.\n\nA closed back panel keeps smaller items from falling through, and the whole unit is rated for 40 lbs total, backed by a 1-year warranty at the lowest price point among the compact picks in this list.",
    specs: [
      "12\"W x 9.3\"D x 31.5\"H",
      "FSC-certified composite wood",
      "3 open shelves + closed back panel",
      "40 lb total",
      "E1 certified odorless",
      "1-year warranty",
    ],
    pros: [
      "Best-selling budget pick with over 26,000 ratings",
      "Most compact footprint in this list at 12\" wide",
      "FSC-certified, E1 odorless material",
      "Cheapest pick in this list at $25.16",
    ],
    cons: [
      "Lowest rating among the top-selling picks at 4.4 stars",
      "Lower capacity than the industrial metal-frame picks",
      "Narrower shelves hold fewer books per tier",
    ],
    bestFor: "Budget buyers who want the most compact, best-selling 3-tier bookshelf on the market",
  },
  {
    id: "furinno-jaya-3-tier-adjustable",
    rank: 7,
    badge: "Widest Pick, Adjustable Shelf",
    name: "Furinno JAYA 3-Tier Bookshelf",
    price: "$28.84",
    rating: "4.2",
    reviews: "26,103",
    imageUrl: "https://m.media-amazon.com/images/I/41naGsZeyeS._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01BWZWEAK?tag=deskfinds0d-20",
    description:
      "The Furinno JAYA is another best-seller with over 26,000 ratings, and it stands apart from the compact LUDER by offering an adjustable middle shelf, letting you customize spacing for taller items like binders or decorative pieces. FSC-certified composite wood construction carries over from the LUDER, along with a closed back panel.\n\nAt 24.5 inches wide, it's the widest pick in this list, giving it the highest total capacity among the Furinno picks at 80 lbs, useful if you want more books per tier than the narrower compact options provide.",
    specs: [
      "24.5\"W x 9.5\"D x 40.3\"H",
      "FSC-certified composite wood",
      "3 open shelves + 1 adjustable middle shelf + closed back panel",
      "80 lb total",
      "1-year warranty",
    ],
    pros: [
      "Adjustable middle shelf for customizable spacing",
      "Highest total capacity among Furinno picks at 80 lbs",
      "Widest pick in this list at 24.5\" for more books per tier",
      "Best-seller with over 26,000 ratings",
    ],
    cons: [
      "Lowest rating in this list at 4.2 stars",
      "Widest footprint needs more wall space than the compact picks",
      "No enclosed storage",
    ],
    bestFor: "Buyers who want the widest 3-tier shelf with a customizable adjustable shelf for taller items",
  },
  {
    id: "vasagle-custos-3-tier-adjustable",
    rank: 8,
    badge: "Most Adjustable, Most Premium",
    name: "VASAGLE CUSTOS 3-Tier Bookcase",
    price: "$52.99",
    rating: "4.4",
    reviews: "230",
    imageUrl: "https://m.media-amazon.com/images/I/51SZTl0lKTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CMD5Z5J4?tag=deskfinds0d-20",
    description:
      "The VASAGLE CUSTOS stands apart with the most adjustable shelving in this list, letting you move both the 2nd and 3rd tiers across 3 different height positions to fit taller items wherever you need the extra clearance. A footless H-shaped design skips the usual leg base for a cleaner, more modern silhouette.\n\nA slot-in back panel adds rigidity without extra hardware, and at 88 lbs total, or 22 lbs per shelf, it's the most premium-feeling pick in the CUSTOS collection, priced accordingly above the industrial metal-frame picks in this list.",
    specs: [
      "31.5\"W x 9.4\"D x 32\"H",
      "Particleboard + MDF",
      "2nd and 3rd tiers adjustable, 3 positions",
      "22 lb/shelf (88 lb total)",
      "H-shaped footless design, slot-in back panel",
    ],
    pros: [
      "Most adjustable shelving with 2 movable tiers",
      "Modern footless H-frame design",
      "Slot-in back panel adds rigidity without extra hardware",
      "Most premium-feeling pick in the CUSTOS collection",
    ],
    cons: [
      "Most expensive pick in this list at $52.99",
      "Fewest total ratings in this list at 230",
      "Footless design needs level flooring to sit flush",
    ],
    bestFor: "Buyers who want the most shelf adjustability and a premium modern look, at a higher price",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Footprint and placement",
    explanation:
      "Ultra-compact picks like the Furinno LUDER (12\" wide) and VASAGLE (15.7\" wide) fit small rooms, hallways, or tight corners, while wider picks like the Furinno JAYA (24.5\") and VASAGLE CUSTOS (31.5\") hold more books per tier.",
  },
  {
    criterion: "Weight capacity and durability",
    explanation:
      "Industrial metal-frame picks like the MNEETRUNG, Homeiju, and HOOBRO are more durable and hold more weight. The Homeiju has the highest total capacity in this list at 220 lbs, thanks to genuine carbon steel construction.",
  },
  {
    criterion: "Rating and review volume",
    explanation:
      "The MNEETRUNG has the highest rating at 4.8 stars, while the Furinno LUDER and JAYA are the most-reviewed picks in this list, each with over 26,000 ratings.",
  },
  {
    criterion: "Adjustability",
    explanation:
      "Most 3-tier picks here have fixed shelves, but the Furinno JAYA has one adjustable middle shelf, and the VASAGLE CUSTOS goes further with 2 adjustable tiers across 3 height positions.",
  },
  {
    criterion: "Multi-purpose use",
    explanation:
      "The MNEETRUNG is explicitly built to double as a bookshelf, end table, or nightstand, useful if you want one piece of furniture to serve multiple roles.",
  },
  {
    criterion: "Material and certification",
    explanation:
      "The Furinno picks and Hosfais use FSC-certified or CARB P2-certified wood for lower emissions, while the Homeiju and HOOBRO lean on genuine metal frames for added strength.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What is the best 3-tier bookshelf overall?",
    a: "The MNEETRUNG 3-Tier Industrial Shelf (Pick 1) is the best overall choice, with the highest rating in this list at 4.8 stars and genuine triple-purpose use as a bookshelf, end table, or nightstand.",
  },
  {
    q: "Which 3-tier bookshelf holds the most weight?",
    a: "The Homeiju 3-Tier Industrial Bookshelf (Pick 5) has the highest total capacity in this list at 220 lbs, thanks to genuine carbon steel construction.",
  },
  {
    q: "What is the most compact 3-tier bookshelf?",
    a: "The Furinno LUDER 3-Cube Bookshelf (Pick 6) is the most compact pick in this list at just 12 inches wide.",
  },
  {
    q: "Is there a 3-tier bookshelf with adjustable shelves?",
    a: "Yes, the Furinno JAYA (Pick 7) has one adjustable middle shelf, and the VASAGLE CUSTOS (Pick 8) has 2 adjustable tiers across 3 height positions, the most adjustability in this list.",
  },
  {
    q: "What is the cheapest 3-tier bookshelf in this list?",
    a: "The Furinno LUDER 3-Cube Bookshelf (Pick 6) is the cheapest at $25.16, closely followed by the VASAGLE 3-Tier Bookshelf (Pick 2) at $24.64.",
  },
  {
    q: "Which 3-tier bookshelf assembles the fastest?",
    a: "The Hosfais 3-Tier Wood Bookcase (Pick 3) assembles in around 20 minutes, one of the fastest builds in this list.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-5-tier", title: "Best 5-Tier Bookshelves in 2026" },
  { href: "/guide/best-bookshelf-nightstand", title: "Best Bookshelf Nightstands in 2026" },
  { href: "/guide/best-bookshelf-small", title: "Best Small Bookshelves in 2026" },
];
