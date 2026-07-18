export const guideSlug = "best-bookshelf-white";
export const guideTitle = "7 Best White Bookshelves in 2026";
export const metaTitle = "Best White Bookshelves in 2026 (Narrow, Tall & With Drawers)";
export const metaDescription =
  "7 best white bookshelves in 2026, comparing narrow stackable units, tall 6-tier towers, and drawer-equipped picks. Compare capacity, footprint, and price.";
export const mainKeyword = "bookshelf white";
export const introParagraphs = [
  "White bookshelves brighten a room and blend into almost any color scheme, which makes them one of the most requested finishes for living rooms, home offices, and bedrooms alike.",
  "Below are 7 white bookshelves we evaluated on weight capacity, footprint, and standout features, ranging from a narrow stackable unit that doubles as end tables to a wide 5-tier shelf built to hold oversized books.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/5145tO05s8L._SL500_.jpg";

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
    id: "tutotak-6-tier-narrow",
    rank: 1,
    badge: "Best Overall",
    name: "TUTOTAK 6-Tier Tall Bookshelf White",
    price: "$39.99",
    rating: "4.7",
    reviews: "1,049",
    imageUrl: "https://m.media-amazon.com/images/I/5145tO05s8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKRJS67K?tag=deskfinds0d-20",
    description:
      "The TUTOTAK is the highest-rated pick in this entire list, and its party trick is a genuinely clever DIY stackable design that lets it split into 2 low end tables or combine into one tall 6-tier bookcase, whichever your space needs right now. At a narrow 14.5 inches wide and 10.7 inches deep, it slots into corners most full-size bookshelves can't touch.\n\nFour adjustable feet and an anti-tilt wall mount kit round out a build that stays stable despite its slim profile, making it an easy top pick for renters or anyone who might rearrange furniture down the line.",
    specs: [
      "14.5\"W x 10.7\"D x 65.3\"H",
      "Engineered wood, 6 tiers",
      "Stackable/detachable, splits into 2 end tables",
      "4 adjustable feet",
      "Anti-tilt wall mount kit",
    ],
    pros: [
      "Highest rating in this list at 4.7 stars",
      "Unique stackable design splits into 2 end tables or one tall bookcase",
      "Narrow 14.5\" footprint fits tight spaces",
      "Cheapest pick in this list at $39.99",
    ],
    cons: [
      "Narrower shelves hold fewer books per tier than wider units",
      "No enclosed storage",
      "Engineered wood, not solid wood",
    ],
    bestFor: "Renters or small-space buyers who want a stackable bookshelf that can split into end tables",
  },
  {
    id: "fotosok-6-tier-open",
    rank: 2,
    badge: "Best Full-Size, Slimmest Depth",
    name: "FOTOSOK 6-Tier Open Bookcase White",
    price: "$79.99",
    rating: "4.6",
    reviews: "1,757",
    imageUrl: "https://m.media-amazon.com/images/I/41Jl8corSNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9XZZH1W?tag=deskfinds0d-20",
    description:
      "The FOTOSOK gives you a full-size, 6-tier bookcase in the slimmest depth of any full-size pick in this list at just 9.3 inches, so it hugs the wall without eating into floor space. A built-in anti-collapse stability device backs up the open shelving, and each tier is rated to hold 22 lbs.\n\nAt 70.9 inches tall and 23.6 inches wide, it has room for a serious book collection while still fitting cleanly against a wall in a living room, bedroom, or office.",
    specs: [
      "23.6\"W x 9.3\"D x 70.9\"H",
      "Engineered particleboard, 6 open tiers",
      "Anti-collapse stability device",
      "22 lb/shelf",
    ],
    pros: [
      "Slimmest depth among full-size white bookshelves at 9.3\"",
      "Anti-collapse stability device built in",
      "Full 6-tier height for a large collection",
      "Strong 4.6-star rating across 1,757 ratings",
    ],
    cons: [
      "No enclosed storage",
      "Taller units like this can feel top-heavy without wall anchoring",
      "Pricier than the narrower TUTOTAK",
    ],
    bestFor: "Buyers who want full-size 6-tier capacity in the slimmest depth available",
  },
  {
    id: "sunmory-tree-cabinets",
    rank: 3,
    badge: "Most Attractive Design",
    name: "SUNMORY 6-Tier Tree Bookshelf + 2 Storage Cabinets",
    price: "$51.99",
    rating: "4.6",
    reviews: "2,846",
    imageUrl: "https://m.media-amazon.com/images/I/41czXLWqp3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D3T2R4L4?tag=deskfinds0d-20",
    description:
      "The SUNMORY takes a tree-shaped silhouette that's arguably the most visually interesting design in this list, staggering 6 tiers around 2 joinable open storage cabinets at the base. It's built from MDF in a vintage white tone that reads warmer than a stark white finish, all in a tiny 14.6\" x 7.9\" footprint.\n\nSUNMORY backs it with a 2-year warranty plus lifetime support, longer coverage than most competitors offer, and includes an anti-tip kit for safe wall anchoring.",
    specs: [
      "14.6\"L x 7.9\"W x 47.4\"H",
      "MDF, tree-shaped design",
      "6 tiers + 2 joinable storage cabinets",
      "2-year warranty + lifetime support",
      "Anti-tip kit included",
    ],
    pros: [
      "Most attractive tree-shaped design in this list",
      "2-year warranty with lifetime support",
      "Combines open shelving with 2 storage cabinets",
      "Tiny footprint at 14.6\" x 7.9\"",
    ],
    cons: [
      "Shorter than the tallest picks at 47.4\"",
      "Vintage white tone runs slightly warmer than pure white",
      "Cabinets are compact, not full-size storage",
    ],
    bestFor: "Buyers who want the most eye-catching design plus real warranty backing",
  },
  {
    id: "vasagle-custos-6-tier",
    rank: 4,
    badge: "Highest Capacity, Open Shelving",
    name: "VASAGLE CUSTOS 6-Tier Bookcase",
    price: "$59.83",
    rating: "4.3",
    reviews: "1,546",
    imageUrl: "https://m.media-amazon.com/images/I/31zaJI1xQdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BNJ2SCR9?tag=deskfinds0d-20",
    description:
      "The VASAGLE CUSTOS carries the highest total capacity among open-shelving white bookcases in this list at 154 lbs, spread across 4 fully adjustable shelves that can be set to 3 different height positions. A footless H-shaped frame gives it a modern look that skips the usual four-leg base.\n\nA slot-in back panel adds rigidity without extra tools, and at 22 lbs per shelf it comfortably handles a mixed load of books, binders, and decor in a Cloud White finish.",
    specs: [
      "23.6\"W x 9.4\"D x 63.3\"H",
      "Particleboard + MDF",
      "4 adjustable shelves, 3 height positions",
      "22 lb/shelf (154 lb total)",
      "H-shaped footless structure, slot-in back panel",
    ],
    pros: [
      "Highest total capacity among open-shelving picks at 154 lbs",
      "4 fully adjustable shelves with 3 height positions",
      "Modern footless H-frame design",
      "Slot-in back panel adds rigidity without extra tools",
    ],
    cons: [
      "Lower star rating than most other picks in this list at 4.3",
      "No enclosed storage",
      "Footless design needs level flooring to sit flush",
    ],
    bestFor: "Buyers who want the highest capacity and the most shelf adjustability in an open design",
  },
  {
    id: "fotosok-drawers",
    rank: 5,
    badge: "Best with Drawers",
    name: "FOTOSOK 71\" White Bookshelf + 3 Drawers",
    price: "$112.99",
    rating: "4.7",
    reviews: "766",
    imageUrl: "https://m.media-amazon.com/images/I/51v0HhipEKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5RK4NBT?tag=deskfinds0d-20",
    description:
      "This FOTOSOK pairs 3 open display shelves with 3 smooth-gliding drawers finished with aluminum handles, giving you roughly 100 gallons of combined storage for both displayed and hidden items. An anti-collapse iron plate reinforces the frame, addressing a common weak point on tall bookshelves.\n\nAt 70.9 inches tall and 23.6 inches wide, it's the best-looking white pick in this list for anyone who wants concealed storage without giving up open shelf display space.",
    specs: [
      "23.6\"W x 13.8\"D x 70.9\"H",
      "Engineered particleboard",
      "3 open shelves + 3 drawers with aluminum handles",
      "Anti-collapse iron plate",
      "~100 gallons of combined storage",
    ],
    pros: [
      "Smooth-glide drawers with aluminum handles",
      "Anti-collapse iron plate reinforcement",
      "Best-looking white pick with concealed storage",
      "Highest rating among drawer-equipped picks at 4.7 stars",
    ],
    cons: [
      "Most expensive pick in this list at $112.99",
      "Deeper footprint than the slimmer open-shelf picks",
      "Fewer total ratings than the top sellers",
    ],
    bestFor: "Buyers who want the best mix of open display shelving and hidden drawer storage",
  },
  {
    id: "oschf-beech-legs",
    rank: 6,
    badge: "Highest Total Capacity",
    name: "OSCHF 5-Tier Bookcase with Beech Wood Legs",
    price: "$129.90",
    rating: "4.6",
    reviews: "536",
    imageUrl: "https://m.media-amazon.com/images/I/51-W1x24xYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BRPKSG14?tag=deskfinds0d-20",
    description:
      "The OSCHF carries the highest total weight capacity in this entire list at 400 lbs, or 80 lbs per shelf, thanks to P2 MDF shelving paired with genuine solid beech wood legs rather than the metal or composite legs found on most competitors. Three side panels on each shelf keep smaller items from sliding off the edges.\n\nRounded corners and a warm white finish give it the most premium, minimalist look among white bookshelves here, and at 31.5 inches wide it holds a serious book collection without towering over the room.",
    specs: [
      "31.5\"W x 9.45\"D x 53.94\"H",
      "P2 MDF + solid beech wood legs (30mm)",
      "80 lb/shelf (400 lb total)",
      "3 side panels per shelf",
      "Rounded corners",
    ],
    pros: [
      "Highest total capacity in this list at 400 lbs",
      "Genuine solid beech wood legs, not composite or metal",
      "Most premium minimalist design",
      "Side panels on each shelf prevent items sliding off",
    ],
    cons: [
      "Shorter than the tallest picks at 53.94\"",
      "Fewer total ratings than the top sellers",
      "Premium materials come at a premium price",
    ],
    bestFor: "Buyers who want the highest weight capacity plus genuine solid wood legs",
  },
  {
    id: "bevfint-70in-wide",
    rank: 7,
    badge: "Best for Oversized Books",
    name: "Bevfint 70\" Tall White Bookcase, 5-Tier",
    price: "$179.99",
    rating: "4.5",
    reviews: "499",
    imageUrl: "https://m.media-amazon.com/images/I/41aYIIYxIDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C4HK9PTC?tag=deskfinds0d-20",
    description:
      "The Bevfint is both the widest pick in this list at 33 inches and the highest per-shelf capacity among 5-tier white bookshelves at 60 lbs per shelf, a combination that makes it well suited to encyclopedias, binders, and other oversized items most bookshelves can't accommodate. FSC-certified MDF construction backs a sustainable sourcing claim most competitors skip.\n\nAn anti-tipping device is included for wall anchoring, and 11.8 inches of clearance on each shelf gives even tall hardcovers room to stand upright without leaning.",
    specs: [
      "33\"W x 13\"D x 70\"H",
      "FSC-certified MDF, 5 open tiers",
      "60 lb/shelf (highest among 5-tier picks)",
      "11.8\" shelf height",
      "Anti-tipping device included",
    ],
    pros: [
      "Highest per-shelf capacity among 5-tier white bookshelves at 60 lbs",
      "Widest pick in this list at 33\"",
      "FSC-certified sustainable wood",
      "11.8\" shelf height fits oversized books and binders",
    ],
    cons: [
      "Most expensive pick in this list at $179.99",
      "Lower star rating than most other picks at 4.5",
      "Wide footprint needs more wall space than narrower picks",
    ],
    bestFor: "Buyers with encyclopedias, binders, or oversized books that need extra shelf height and depth",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Footprint vs capacity trade-off",
    explanation:
      "Narrow white picks like the TUTOTAK (14.5\" wide) and SUNMORY (14.6\" x 7.9\") save the most space, while wide premium picks like the OSCHF and Bevfint hold the most books thanks to their wider, deeper shelves.",
  },
  {
    criterion: "Weight capacity",
    explanation:
      "Capacity ranges from roughly 12 lbs per shelf on narrow units up to 400 lbs total on the OSCHF. Match capacity to whether you're storing paperbacks or dense hardcovers and binders.",
  },
  {
    criterion: "Open shelving vs drawers",
    explanation:
      "Most picks here are fully open, but the FOTOSOK with 3 Drawers (Pick 5) is the best mix of display shelving and hidden storage if you want to keep some items out of sight.",
  },
  {
    criterion: "Material and legs",
    explanation:
      "Most picks use engineered wood or MDF, but the OSCHF stands out with genuine solid beech wood legs rather than composite or metal, giving it a more premium feel.",
  },
  {
    criterion: "Stability features",
    explanation:
      "Look for anti-collapse devices or iron plates, called out on the FOTOSOK picks, plus anti-tip kits for wall anchoring, included on most picks in this list.",
  },
  {
    criterion: "Flexible or modular design",
    explanation:
      "The TUTOTAK's stackable, detachable design is unique in this list, letting it split into 2 end tables or combine into one tall bookcase depending on your space.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What is the best white bookshelf overall?",
    a: "The TUTOTAK 6-Tier Tall Bookshelf White (Pick 1) is the best overall choice, with the highest rating in this list at 4.7 stars and a unique stackable design that splits into 2 end tables or combines into one tall bookcase.",
  },
  {
    q: "Which white bookshelf saves the most floor space?",
    a: "The TUTOTAK (Pick 1) and SUNMORY (Pick 3) have the narrowest footprints in this list, at 14.5 inches and 14.6 x 7.9 inches respectively.",
  },
  {
    q: "Is there a white bookshelf with drawers in this list?",
    a: "Yes, the FOTOSOK 71\" White Bookshelf + 3 Drawers (Pick 5) pairs open display shelves with 3 smooth-gliding drawers for hidden storage.",
  },
  {
    q: "Which white bookshelf holds the most weight?",
    a: "The OSCHF 5-Tier Bookcase with Beech Wood Legs (Pick 6) has the highest total capacity in this list at 400 lbs, thanks to solid beech wood legs and reinforced side panels.",
  },
  {
    q: "Which white bookshelf is best for oversized books?",
    a: "The Bevfint 70\" Tall White Bookcase (Pick 7) has the highest per-shelf capacity among 5-tier picks at 60 lbs and 11.8 inches of shelf clearance, enough for encyclopedias and binders.",
  },
  {
    q: "What is the most affordable white bookshelf in this list?",
    a: "The TUTOTAK 6-Tier Tall Bookshelf White (Pick 1) is the cheapest at $39.99, while also carrying the highest rating in this list.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-5-tier", title: "Best 5-Tier Bookshelves in 2026" },
  { href: "/guide/best-bookshelf-with-drawers", title: "Best Bookshelves with Drawers in 2026" },
  { href: "/guide/best-bookshelf-3-tier", title: "Best 3-Tier Bookshelves in 2026" },
];
