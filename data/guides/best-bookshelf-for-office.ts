export const guideSlug = "best-bookshelf-for-office";
export const guideTitle = "8 Best Bookshelves for Office in 2026";
export const metaTitle = "Best Bookshelves for Office in 2026 (Storage, Doors & Desktop)";
export const metaDescription =
  "8 best bookshelves for a home or work office in 2026, comparing capacity, concealed storage, and desktop options. Find the sturdiest pick for your setup.";
export const mainKeyword = "bookshelf for office";
export const introParagraphs = [
  "An office bookshelf needs to do more than hold novels. It has to support binders, reference books, and files without sagging, and often needs at least some space to hide paperwork you don't want on display during a video call.",
  "Below are 8 office bookshelves we evaluated on weight capacity, build stability, and how much of their storage is open versus concealed, ranging from a 374-lb farmhouse cabinet to a compact desktop hutch that sits right on your desk.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
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
    id: "vasagle-liry-farmhouse-cabinet",
    rank: 1,
    badge: "Highest Capacity",
    name: "VASAGLE Liry 6-Tier Farmhouse Bookcase + 2-Door Cabinet",
    price: "$79.99",
    rating: "4.6",
    reviews: "2,298",
    imageUrl: "https://m.media-amazon.com/images/I/51P0hhxgYxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H5VH3H97?tag=deskfinds0d-20",
    description:
      "The VASAGLE Liry carries the highest total weight capacity in this list at 374.8 lbs, built from particleboard and MDF with three adjustable open shelves up top and an enclosed 2-door cabinet below for files and paperwork you'd rather keep out of view. Its cloud white and warm brown farmhouse styling looks intentional in a home office rather than purely functional.\n\nA 3.5-inch base is specifically designed to let a robot vacuum pass underneath, a small but genuinely useful detail for anyone who keeps their office floor on a cleaning schedule.",
    specs: [
      "24.8\"W x 10\"D x 70.7\"H",
      "Particleboard + MDF",
      "374.8 lb total capacity (highest in this list)",
      "3 adjustable shelves + 2-door cabinet",
      "3.5\" robot-vacuum-friendly base",
    ],
    pros: [
      "Highest total capacity in this list at 374.8 lbs",
      "2-door cabinet conceals clutter and paperwork",
      "Robot-vacuum-friendly base clears easily",
      "Farmhouse styling looks great in a home office",
    ],
    cons: [
      "Larger footprint than the narrower VASAGLE picks",
      "Higher price point than most on this list",
      "Adjustable shelves are limited to the top section only",
    ],
    bestFor: "A home office that needs maximum capacity and a mix of open and hidden storage",
  },
  {
    id: "vasagle-6-tier-wide-office",
    rank: 2,
    badge: "Best-Selling",
    name: "VASAGLE 6-Tier Wide Bookcase",
    price: "$69.99",
    rating: "4.7",
    reviews: "6,779",
    imageUrl: "https://m.media-amazon.com/images/I/41zgzmQKuwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08FR5SMRW?tag=deskfinds0d-20",
    description:
      "With nearly 6,800 ratings and a 4.7-star average, this is the best-selling pick in this entire list. An X-brace reinforcement keeps the wide 26-inch frame from racking under load, and a 22 lb per-shelf rating adds up to 132 lbs total across the alloy steel and particleboard build.\n\nIts industrial rustic brown and steel look suits a home office or a shared workspace equally well, and adjustable feet plus an anti-tip kit round out a build that's proven itself over thousands of reviews.",
    specs: [
      "11.8\"D x 26\"W x 73.2\"H",
      "Particleboard + alloy steel",
      "X-brace reinforcement",
      "22 lb/shelf (132 lb total)",
      "Adjustable feet, anti-tip kit",
    ],
    pros: [
      "Best-selling pick with nearly 6,800 ratings",
      "X-brace reinforcement adds real rigidity",
      "Widest VASAGLE option at 26 inches",
      "Most industrial styling of the group",
    ],
    cons: [
      "Open-shelf design offers no concealed storage",
      "Wide footprint needs more wall space than the narrow VASAGLE",
      "Particleboard shelves, not solid wood",
    ],
    bestFor: "Buyers who want the most proven, best-reviewed office bookshelf",
  },
  {
    id: "vasagle-6-tier-narrow-office",
    rank: 3,
    badge: "Smallest Footprint",
    name: "VASAGLE 6-Tier Narrow Bookcase",
    price: "$49.99",
    rating: "4.7",
    reviews: "2,206",
    imageUrl: "https://m.media-amazon.com/images/I/41dxHGUL7hL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08NDZ1119?tag=deskfinds0d-20",
    description:
      "This is the compact sibling of VASAGLE's wide bookcase, shrinking the footprint down to just 15.7 inches while keeping the same X-brace reinforcement and alloy steel frame. It's the pick to reach for in a small home office or a corner where the 26-inch version simply won't fit.\n\nDespite the smaller footprint, it holds up to the same 4.7-star rating as its wider counterpart, and adjustable feet plus an anti-tip kit make it just as stable.",
    specs: [
      "11.8\"D x 15.7\"W x 73.2\"H",
      "Particleboard + alloy steel",
      "X-brace reinforcement",
      "Compact 15.7\" width",
      "Adjustable feet, anti-tip kit",
    ],
    pros: [
      "Smallest footprint among VASAGLE picks at 15.7 inches wide",
      "Same trusted X-brace reinforcement as the wider model",
      "Ideal for a compact home office",
      "Strong 4.7-star rating",
    ],
    cons: [
      "Narrower shelves hold fewer items per tier",
      "No enclosed storage",
      "Tall and narrow profile needs anchoring",
    ],
    bestFor: "A compact home office where floor space is limited",
  },
  {
    id: "ironck-6-tier-doors-office",
    rank: 4,
    badge: "Best for Document Storage",
    name: "IRONCK 6-Tier Bookshelf with Doors",
    price: "$84.99",
    rating: "4.5",
    reviews: "2,431",
    imageUrl: "https://m.media-amazon.com/images/I/41kTT7kaFgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BFFFKXRX?tag=deskfinds0d-20",
    description:
      "IRONCK's doored bookshelf pairs four open display shelves with two concealing doors at the base, giving you a dedicated place to lock away office documents and files during video calls or when clients visit. An MDF build with a tipover-resistance device keeps the tall unit steady.\n\nIndustrial vintage black styling and strengthened hardware make it the most versatile pick here for buyers who want to combine open display with genuine hidden storage in one unit.",
    specs: [
      "23.8\"W x 9.3\"D x 70.9\"H",
      "MDF construction",
      "4 open shelves + 2 concealing doors",
      "132 lb total capacity",
      "Tipover-resistance device, industrial vintage styling",
    ],
    pros: [
      "2 concealing doors hide office documents",
      "Industrial vintage styling suits a work office",
      "Combines open display and closed storage in one unit",
      "Tipover-resistance device included",
    ],
    cons: [
      "Highest price point in this list",
      "9.3-inch depth limits shelf capacity per tier",
      "Doors add assembly steps compared to open-shelf options",
    ],
    bestFor: "An office that needs part of its storage locked away from view",
  },
  {
    id: "ironck-6-tier-open-office",
    rank: 5,
    badge: "Best-Selling IRONCK",
    name: "IRONCK 6-Tier Bookshelf",
    price: "$74.99",
    rating: "4.6",
    reviews: "4,474",
    imageUrl: "https://m.media-amazon.com/images/I/31zcIjQrqVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LM3FMXH?tag=deskfinds0d-20",
    description:
      "The open version of IRONCK's bookshelf is the brand's best-selling office option, with over 4,400 ratings and a 4.6-star average. It shares the same 132 lb total capacity and strengthened screw construction as the doored version but skips the cabinet for a cleaner, more open industrial look.\n\nA tipover-resistance device is included as standard, and the vintage black finish and clean lines make it an easy match for most office decor.",
    specs: [
      "23.8\"W x 9.3\"D x 70.8\"H",
      "MDF particleboard",
      "22 lb/shelf (132 lb total)",
      "Strengthened screws",
      "Tipover-resistance device included",
    ],
    pros: [
      "Best-selling IRONCK option with 4,474 ratings",
      "Clean industrial lines suit most office styles",
      "Strengthened screw construction for consistent load support",
      "Tipover-resistance device included",
    ],
    cons: [
      "No concealed storage, unlike the doored version",
      "9.3-inch depth limits larger book or binder storage",
      "Tall, narrow profile needs wall anchoring",
    ],
    bestFor: "Buyers who want IRONCK's proven build without paying for doors",
  },
  {
    id: "numenn-5-tier-vintage-office",
    rank: 6,
    badge: "Best Overall",
    name: "NUMENN 5-Tier Bookshelf",
    price: "$50.99",
    rating: "4.7",
    reviews: "4,299",
    imageUrl: "https://m.media-amazon.com/images/I/41p8nGWmCmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08DR542S9?tag=deskfinds0d-20",
    description:
      "The NUMENN is the best-selling vintage-toned pick in this list, equally suited to an office or a study room, and its 4.7-star average across more than 4,000 ratings makes it one of the most trusted picks here. An X-shaped back rod removes the wobble that plagues cheaper metal-frame shelves.\n\nWaterproof and anti-scratch coatings help it survive the daily wear of an office environment, and its 150 lb total capacity across premium metal and teak particle board handles a real reference library.",
    specs: [
      "23.6\"L x 11.8\"W x 62.2\"H",
      "Premium metal + teak particle board",
      "X-shaped back rod",
      "30 lb/shelf (150 lb total)",
      "Waterproof + anti-scratch",
    ],
    pros: [
      "Best-selling vintage-tone pick for offices and study rooms",
      "Waterproof and scratch-resistant finish",
      "X-back rod eliminates wobble",
      "Strong 4.7-star rating",
    ],
    cons: [
      "No concealed storage",
      "Mid-range capacity compared to the wider units on this list",
      "Vintage tone won't match every office aesthetic",
    ],
    bestFor: "A well-rounded, trusted bookshelf for an office or study",
  },
  {
    id: "shintenchi-5-tier-office",
    rank: 7,
    badge: "Highest Per-Shelf Capacity",
    name: "Shintenchi 5-Tier Bookshelf",
    price: "$40.09",
    rating: "4.7",
    reviews: "1,816",
    imageUrl: "https://m.media-amazon.com/images/I/510fPP+lFkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BXDP61M2?tag=deskfinds0d-20",
    description:
      "Shintenchi rates each shelf for 40 lbs, the highest per-shelf capacity among the standard 5-tier picks in this list, for a 200 lb total. FSC-certified eco wood pairs with a metal frame and X-shaped back rod for the same anti-wobble reinforcement found on pricier office bookshelves.\n\nWaterproof and anti-scratch coatings keep it looking sharp through daily office use, and the wide 23.6-inch frame gives you more usable shelf surface for binders and reference books than the narrower picks on this list.",
    specs: [
      "23.6\"W x 11.8\"D x 62.2\"H",
      "FSC-certified wood + metal",
      "40 lb/shelf (highest among standard 5-tier picks, 200 lb total)",
      "X-shaped back rod",
      "Waterproof + anti-scratch",
    ],
    pros: [
      "Highest per-shelf capacity among standard office bookshelves at 40 lbs",
      "FSC-certified eco wood",
      "X-back rod reinforcement",
      "Budget-friendly under $45",
    ],
    cons: [
      "No concealed storage",
      "Fewer reviews than the top-selling picks in this list",
      "Industrial look may not suit every office",
    ],
    bestFor: "An office that needs maximum per-shelf load capacity on a budget",
  },
  {
    id: "tangkula-desktop-hutch",
    rank: 8,
    badge: "Best Desktop Pick",
    name: "Tangkula Desktop Bookshelf with Hutch",
    price: "$79.99",
    rating: "4.5",
    reviews: "582",
    imageUrl: "https://m.media-amazon.com/images/I/51rHIYOuk6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C2KR6BVM?tag=deskfinds0d-20",
    description:
      "The only desktop-mounted pick in this list, the Tangkula hutch sits directly on your desk surface and spans over a 27-inch monitor, turning otherwise wasted vertical desk space into five shelves of storage. Anti-falling baffles and two anti-tip wall anchors keep books and folders from sliding off during use.\n\nRounded corners and an engineered wood build make it a safe, practical addition to a desk that's short on room for a full floor-standing bookcase, ideal for organizing reference books, files, and desk supplies within arm's reach.",
    specs: [
      "37\"L x 10\"W x 29\"H",
      "Engineered wood",
      "5 shelves, fits over a 27\" monitor",
      "Anti-falling baffles",
      "2 anti-tip wall anchors, rounded corners",
    ],
    pros: [
      "Only desktop/countertop pick in this list",
      "Fits directly over a 27-inch monitor",
      "Integrates storage onto the desk surface itself",
      "Rounded corners for safety",
    ],
    cons: [
      "Limited to desktop use, not a floor-standing bookshelf",
      "Smaller total capacity than the floor units on this list",
      "Fewer reviews than the established brands here",
    ],
    bestFor: "A desk that has no floor space left for a standalone bookcase",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Trusted, stable builds",
    explanation:
      "The VASAGLE 6-Tier picks, with their X-brace reinforcement and adjustable feet, are the most trusted and stable options in this list, backed by thousands of reviews each.",
  },
  {
    criterion: "Capacity for a real reference library",
    explanation:
      "The VASAGLE Liry Farmhouse has the highest capacity in this list at 374.8 lbs and looks the most intentional in a home office, making it the pick if you're storing a large collection of books or binders.",
  },
  {
    criterion: "Concealed storage for documents",
    explanation:
      "The IRONCK with Doors is the only pick in this list with concealing doors, useful for hiding paperwork or files during video calls or client visits.",
  },
  {
    criterion: "Desk-mounted storage",
    explanation:
      "Tangkula's desktop bookshelf is the only pick designed to sit directly on a desk rather than the floor, which matters if your office has no remaining floor space.",
  },
  {
    criterion: "Per-shelf capacity for heavy binders",
    explanation:
      "Shintenchi has the highest per-shelf capacity among standard 5-tier picks at 40 lbs per shelf, a detail that matters more than total capacity if you're storing dense binders or textbooks.",
  },
  {
    criterion: "Footprint vs. wall space",
    explanation:
      "Measure your available wall space before choosing between the wide (26\") and narrow (15.7\") VASAGLE options; both share the same build quality, just at different widths.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What's the best bookshelf for a home office?",
    a: "The VASAGLE Liry 6-Tier Farmhouse Bookcase is the top pick for a home office, with the highest capacity in this list at 374.8 lbs and a mix of open shelves and an enclosed cabinet for hiding clutter.",
  },
  {
    q: "Which office bookshelf has concealed storage for documents?",
    a: "The IRONCK 6-Tier Bookshelf with Doors is the only pick in this list with concealing doors, letting you hide paperwork and files behind a closed cabinet front.",
  },
  {
    q: "Is there a bookshelf that fits on a desk instead of the floor?",
    a: "Yes. The Tangkula Desktop Bookshelf with Hutch sits directly on your desk and spans over a 27-inch monitor, making it the only desktop option in this list.",
  },
  {
    q: "Which bookshelf has the highest per-shelf weight capacity?",
    a: "The Shintenchi 5-Tier Bookshelf has the highest per-shelf capacity among standard 5-tier picks at 40 lbs per shelf, ideal for heavy binders and reference books.",
  },
  {
    q: "What's the most reviewed office bookshelf on this list?",
    a: "The VASAGLE 6-Tier Wide Bookcase is the best-selling pick with nearly 6,800 ratings and a 4.7-star average.",
  },
  {
    q: "Is a narrow or wide bookshelf better for a small office?",
    a: "If floor space is limited, the VASAGLE 6-Tier Narrow Bookcase at 15.7 inches wide offers the same build quality as the wider version in a much smaller footprint.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-desk", title: "Best Bookshelf Desks (2026)" },
  { href: "/guide/best-bookshelf-with-doors", title: "Best Bookshelves with Doors (2026)" },
  { href: "/guide/best-bookshelf-for-bedroom", title: "Best Bookshelves for Bedroom (2026)" },
];
