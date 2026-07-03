const BASE = "/images/guides/best-clamp-on-desk-drawers";
export const guideSlug = "best-clamp-on-desk-drawers";
export const guideTitle = "8 Best Clamp-On Desk Drawers (2026)";
export const metaTitle =
  "Best Clamp-On Desk Drawers (2026): No-Drill, Swivel, and Keyboard Tray Options";
export const metaDescription =
  "Find the best clamp-on desk drawers for home offices. No-drill storage drawers, 360-degree swivel options, keyboard tray combos, and sit-stand compatible picks ranked by reviews.";
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
    id: "vivo-keyboard-tray-drawer",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "VIVO Large Keyboard Tray with Pencil Drawer, 27 inch, C-Clamp Mount, Ergonomic, Black",
    price: "~$49.99",
    rating: "4.4 stars",
    reviews: "13,973 reviews",
    imageUrl: `${BASE}/vivo-keyboard-tray-27.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07HFDJCSL?tag=deskfinds0d-20",
    description:
      "13,973 reviews at 4.4 stars is by far the strongest trust signal in this roundup. It repositions the keyboard ergonomically below desk height while a pencil drawer adds storage. Frees the entire desk surface of keyboard and mouse. A C-clamp mount requires no drilling.",
    specs: ["27 inch platform", "C-clamp mount", "Pencil drawer", "Ergonomic tilt"],
    pros: [
      "13,973 reviews at 4.4 stars strongest trust signal by far",
      "Ergonomic keyboard positioning plus storage in one",
      "Frees entire desk surface",
      "No drilling required",
    ],
    cons: [
      "Keyboard tray first, storage secondary",
      "27-inch platform extends over lap when in use",
      "No pure file storage capability",
    ],
    bestFor:
      "home office workers wanting ergonomic keyboard positioning and under-desk storage from a single clamp-on installation",
  },
  {
    id: "bontec-keyboard-tray",
    rank: 2,
    badge: "Best Keyboard Tray for Smaller Desks",
    name: "BONTEC KMT01 Keyboard Tray with Clamp Mount, 25.6 x 11.8 inch, Ergonomic, Black",
    price: "~$49.99",
    rating: "4.4 stars",
    reviews: "5,492 reviews",
    imageUrl: `${BASE}/bontec-keyboard-tray.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D3F13YC4?tag=deskfinds0d-20",
    description:
      "5,492 reviews at 4.4 stars makes this the second most validated keyboard tray combo in this roundup. At 25.6 inches it is slightly narrower than the VIVO, making it a better fit for smaller desks. Same price as VIVO with comparable features.",
    specs: ["25.6 inch platform", "C-clamp mount", "Ergonomic", "Pencil drawer"],
    pros: [
      "5,492 reviews at 4.4 stars strong validation",
      "Slightly narrower than VIVO for smaller desks",
      "Same price as VIVO",
      "Ergonomic tray with pencil drawer",
    ],
    cons: [
      "Keyboard tray first, not pure storage drawer",
      "Same format limitations as VIVO",
    ],
    bestFor:
      "buyers wanting keyboard tray ergonomics with a slightly narrower platform that fits smaller desks better",
  },
  {
    id: "homeify-2-drawer-clamp",
    rank: 3,
    badge: "Best Pure Clamp Drawer by Review Count",
    name: "Homeify Clamp-On Under Desk Drawer, Mesh Metal, 2 Slide-Out Drawers, Patent Pending, Black",
    price: "~$27.99",
    rating: "4.2 stars",
    reviews: "889 reviews",
    imageUrl: `${BASE}/homeify-2-drawer-clamp.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BR4K8HCZ?tag=deskfinds0d-20",
    description:
      "The most reviewed pure clamp-on storage drawer in this roundup at 889 reviews. A patent-pending clamp design attaches without drilling. Two separate slide-out drawers let you organize by category. Good renter-friendly option with no surface modification required.",
    specs: ["2 drawers", "Clamp-on", "No drill", "Patent-pending clamp"],
    pros: [
      "889 reviews most reviewed pure clamp drawer",
      "2 drawers for separate compartments",
      "Patent-pending clamp design",
      "No drill renter-friendly",
    ],
    cons: [
      "4.2 stars second lowest in roundup",
      "Verify desk thickness range on listing",
      "No swivel capability",
    ],
    bestFor:
      "renters wanting the most-validated pure clamp-on storage drawer with two separate compartments",
  },
  {
    id: "euyona-360-swivel",
    rank: 4,
    badge: "Best Swivel Drawer",
    name: "Euyona Clamp-On Swivel Desk Drawer, 360-Degree Rotating Mesh Metal, C-Clamp, Black",
    price: "~$28.49",
    rating: "4.6 stars",
    reviews: "446 reviews",
    imageUrl: `${BASE}/euyona-360-swivel.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09ZHH2M44?tag=deskfinds0d-20",
    description:
      "4.6 stars is the highest rating among pure storage drawers in this roundup. A 360-degree swivel allows the drawer to rotate to any orientation, useful for corner desks or angled sitting positions. Metal mesh construction. No drilling required.",
    specs: ["360-degree swivel", "C-clamp", "Mesh metal", "No drill"],
    pros: [
      "4.6 stars highest rating in pure drawer category",
      "360-degree swivel for corner desks and angled setups",
      "Metal mesh construction",
      "No drill",
    ],
    cons: [
      "Single tray, not two compartments like Homeify",
      "446 reviews smaller than Homeify",
      "Swivel adds mechanical complexity",
    ],
    bestFor:
      "corner desk setups or angled sitting positions where drawer orientation flexibility is useful",
  },
  {
    id: "vivo-corner-system",
    rank: 5,
    badge: "Corner System (Verify Reviews Before Buying)",
    name: "VIVO Corner Clamp-On Under Desk Drawer and Shelf System, 3-Level, Black",
    price: "~$79.99",
    rating: "3.9 stars",
    reviews: "108 reviews",
    imageUrl: `${BASE}/vivo-corner-system.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CLWRNCS5?tag=deskfinds0d-20",
    description:
      "A 3-level corner storage concept from VIVO. At 3.9 stars from 108 reviews, both the rating and sample size are insufficient for confident purchase. Included here for completeness. Verify current reviews on Amazon before purchasing.",
    specs: ["3-level", "Corner design", "VIVO brand", "Engineered wood"],
    pros: [
      "3-level corner storage concept unique in roundup",
      "VIVO brand credibility",
      "Engineered wood and steel construction",
    ],
    cons: [
      "3.9 stars lowest in roundup",
      "$79.99 high relative to rating",
      "108 reviews insufficient for confident recommendation",
    ],
    bestFor:
      "corner setups needing vertical multi-level storage only after independently verifying current review quality on Amazon",
  },
  {
    id: "vivo-22-sit-stand",
    rank: 6,
    badge: "Best for Sit-Stand Desks",
    name: "VIVO 22 inch Clamp-On Sliding Pull-Out Under Desk Drawer, Alloy Steel, Sit-Stand Compatible",
    price: "~$69.99",
    rating: "4.4 stars",
    reviews: "63 reviews",
    imageUrl: `${BASE}/vivo-22-sit-stand.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CBW85DDN?tag=deskfinds0d-20",
    description:
      "The only pure storage drawer in this roundup explicitly rated as sit-stand compatible. Standard clamp-on drawers can loosen through height adjustment cycles. This alloy steel option is designed to maintain grip. 22-inch width provides more storage area than narrower alternatives.",
    specs: ["Sit-stand compatible", "22 inch width", "Alloy steel", "C-clamp"],
    pros: [
      "Only product explicitly rated for sit-stand desks",
      "4.4 stars",
      "22-inch width wider storage area",
      "Alloy steel construction",
    ],
    cons: [
      "$69.99 high for a pure drawer without keyboard tray",
      "63 reviews small sample",
      "Not needed for stationary desks",
    ],
    bestFor:
      "sit-stand desk owners who want a clamp-on drawer that maintains grip through height adjustment cycles",
  },
  {
    id: "inldy-adjustable-clamp",
    rank: 7,
    badge: "Best Budget Clamp with Adjustable Jaw",
    name: "INLDY Clamp-On Under Desk Drawer, Mesh Metal, Adjustable C-Clamp, No Drill, Black",
    price: "~$24.99",
    rating: "4.4 stars",
    reviews: "66 reviews",
    imageUrl: `${BASE}/inldy-adjustable-clamp.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CJDS9JZ8?tag=deskfinds0d-20",
    description:
      "At $24.99, this is the lowest-priced pure clamp drawer in this roundup. An adjustable jaw may accommodate more desk thickness ranges than fixed-jaw alternatives. No drilling required. 66 reviews at 4.4 stars is a limited but positive early signal.",
    specs: ["Adjustable clamp", "No drill", "Mesh metal", "$24.99"],
    pros: [
      "Lowest price among pure clamp drawers at $24.99",
      "Adjustable jaw may fit more desk thicknesses",
      "No drill renter-friendly",
    ],
    cons: [
      "66 reviews very small sample",
      "Single drawer only",
      "Verify adjustable clamp range specification on listing",
    ],
    bestFor:
      "budget-focused buyers wanting the lowest-cost clamp drawer with an adjustable jaw to accommodate different desk thicknesses",
  },
  {
    id: "rhblme-360-swivel",
    rank: 8,
    badge: "Budget Swivel Alternative",
    name: "RHBLME 360-Degree Rotating Clamp-On Desk Drawer, Swivel Pencil Drawer, Metal Mesh, Black",
    price: "~$24.99",
    rating: "4.2 stars",
    reviews: "54 reviews",
    imageUrl: `${BASE}/rhblme-360-swivel.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C3YPYGKM?tag=deskfinds0d-20",
    description:
      "Same 360-degree swivel concept as the Euyona at a lower price. Metal mesh construction. At 54 reviews, there is insufficient data to evaluate quality reliably. Listed here for completeness. The Euyona at $28.49 with 446 reviews is a more validated swivel choice.",
    specs: ["360-degree swivel", "C-clamp", "Metal mesh", "No drill"],
    pros: [
      "Same 360-degree swivel concept as Euyona at lower price",
      "Metal mesh construction",
      "No drill",
    ],
    cons: [
      "54 reviews insufficient for confident recommendation",
      "4.2 stars lower than Euyona 4.6",
      "Limited validation makes rating unreliable",
    ],
    bestFor:
      "buyers who specifically want a swivel clamp drawer and the Euyona is unavailable, with the limited review sample accepted",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the difference between a keyboard tray and a clamp-on desk drawer?",
    a: "A keyboard tray extends below the desk to reposition the keyboard ergonomically. A clamp-on drawer hangs under the desk for storage only. The VIVO and BONTEC in this roundup are keyboard trays with a small pencil drawer included. The Homeify, Euyona, and INLDY are pure storage drawers.",
  },
  {
    q: "Do clamp-on desk drawers work on all desks?",
    a: "Most clamp-on products fit desks 0.75 to 2 inches thick. Verify the clamp range in the listing before purchasing. Desks with unusual edge profiles, very thick tops, or glass surfaces may be incompatible. Sit-stand desks need products specifically rated for height adjustment cycles.",
  },
  {
    q: "Which clamp-on drawer is best for sit-stand desks?",
    a: "The VIVO 22-inch at $69.99 is the only pure storage drawer in this roundup explicitly rated as sit-stand compatible. The VIVO keyboard tray is also sit-stand compatible. Standard clamp-on drawers may loosen through repeated height adjustment cycles.",
  },
  {
    q: "What can I store in a clamp-on desk drawer?",
    a: "Clamp-on drawers are shallow. They suit small items like pens, notepads, USB drives, charging cables, and small accessories. They are not suited for heavy items, large documents, or thick notebooks. The keyboard tray models include only a small pencil drawer, not a general storage compartment.",
  },
  {
    q: "Is the 360-degree swivel feature practical?",
    a: "The swivel feature on the Euyona and RHBLME is useful for corner desks where the drawer needs to face a different direction from the edge, or for users who sit at an angle to their desk. For straight-on desk use, swivel adds mechanical complexity without practical benefit.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-under-desk-storage-drawers", title: "Best Under Desk Storage Drawers (2026)" },
  { href: "/guide/under-desk-cable-management", title: "Under Desk Cable Management Guide" },
  { href: "/guide/small-desk-organization-ideas", title: "Small Desk Organization Ideas" },
  { href: "/guide/best-desk-shelves-small-desks", title: "Best Desk Shelves for Small Desks (2026)" },
];
