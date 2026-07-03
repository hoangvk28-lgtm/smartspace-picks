const BASE = "/images/guides/best-wall-mounted-desks-small-spaces";

export const guideSlug = "best-wall-mounted-desks-small-spaces";
export const guideTitle = "8 Best Wall-Mounted Desks for Small Spaces (2026)";
export const metaTitle =
  "Best Wall-Mounted Desks for Small Spaces (2026): Fold-Down and Floating Desks";
export const metaDescription =
  "Find the best wall-mounted desks for small spaces. Fold-down Murphy desks, floating wall desks, and ladder desks ranked by reviews and storage features.";
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
    id: "nathan-james-ladder",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "Nathan James Theo 2-Shelf Industrial Wall Mount Ladder Desk, 30W x 73H inch, Nutmeg Brown and Matte Black",
    price: "~$139.63",
    rating: "4.7 stars",
    reviews: "1,216 reviews",
    imageUrl: `${BASE}/nathan-james-ladder.webp`,
    amazonUrl: "https://www.amazon.com/dp/B084HCVNPZ?tag=deskfinds0d-20",
    description:
      "1,216 reviews at 4.7 stars is the highest rated and most reviewed desk in this roundup. At 73 inches tall, it provides vertical shelf storage extending to ceiling height. Nathan James is a recognized brand in the budget furniture space. The industrial aesthetic suits modern and transitional home offices. Note: this is a permanent ladder desk, not a fold-down.",
    specs: [
      "73-inch height",
      "30-inch wide",
      "Industrial ladder",
      "Wall-mount",
    ],
    pros: [
      "1,216 reviews at 4.7 stars highest rated and most reviewed",
      "73-inch vertical storage extends to ceiling",
      "Industrial aesthetic",
      "Nathan James recognized brand",
    ],
    cons: [
      "Not fold-down, desk surface is always extended",
      "30-inch width narrower than a standard desk",
      "Small floor footprint at ladder base can tip if not wall-anchored",
    ],
    bestFor:
      "buyers who use a desk daily and want the strongest brand and review validation with permanent vertical shelving in a narrow footprint",
  },
  {
    id: "tangkula-murphy-white",
    rank: 2,
    badge: "Most-Reviewed Fold-Down Murphy Desk",
    name: "Tangkula Folding Wall Mounted Desk, Storage Shelves, Murphy Style, White",
    price: "~$109.99",
    rating: "4.2 stars",
    reviews: "988 reviews",
    imageUrl: `${BASE}/tangkula-murphy-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07KJ4ZM9K?tag=deskfinds0d-20",
    description:
      "988 reviews is the most-reviewed fold-down Murphy desk in this roundup. Storage shelves remain accessible when the desk is folded up. White finish suits residential home offices. Zero floor footprint when closed. 4.2 stars across nearly 1,000 reviews is an honest signal.",
    specs: [
      "Fold-down Murphy style",
      "Storage shelves",
      "White finish",
      "Zero floor footprint when closed",
    ],
    pros: [
      "988 reviews most validated fold-down desk in roundup",
      "Storage shelves accessible when folded up",
      "White finish for residential settings",
      "Zero floor footprint when closed",
    ],
    cons: [
      "4.2 stars lowest rating among fold-down options",
      "White finish shows scuffs and marks",
      "Verify desk surface dimensions in product listing",
    ],
    bestFor:
      "buyers who want the most-reviewed fold-down Murphy desk with integrated shelving in a white finish",
  },
  {
    id: "haotian-sobuy-black",
    rank: 3,
    badge: "Best Fold-Down by Rating and Reviews Balance",
    name: "Haotian SoBuy Wall Mounted Folding Desk, Storage Shelves, Black, FWT18-SCH",
    price: "~$99.99",
    rating: "4.6 stars",
    reviews: "955 reviews",
    imageUrl: `${BASE}/haotian-sobuy-black.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07988PS8K?tag=deskfinds0d-20",
    description:
      "4.6 stars across 955 reviews is the strongest validation among fold-down desks in this roundup. Black finish suits industrial and modern home offices. Storage shelves remain accessible when folded. Under $100. The Haotian SoBuy brand is well-established in European markets for wall furniture.",
    specs: [
      "4.6 stars across 955 reviews",
      "Fold-down",
      "Storage shelves",
      "Black finish",
    ],
    pros: [
      "4.6 stars 955 reviews strongest validation among fold-down desks",
      "Black finish industrial and modern",
      "Storage shelves accessible when folded",
      "Under $100",
    ],
    cons: [
      "Verify desk surface dimensions in listing",
      "No built-in cable management",
      "Requires wall stud anchoring for safety",
    ],
    bestFor:
      "buyers wanting the best-validated fold-down desk in a black finish under $100",
  },
  {
    id: "homcom-chalkboard",
    rank: 4,
    badge: "Only Fold-Down with Chalkboard and 9 Shelves",
    name: "HOMCOM Foldable Wall Mounted Desk, Integrated Chalkboard, 9 Storage Shelves, Charcoal Gray",
    price: "~$129.99",
    rating: "4.4 stars",
    reviews: "675 reviews",
    imageUrl: `${BASE}/homcom-chalkboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08PDTSY7D?tag=deskfinds0d-20",
    description:
      "The only fold-down desk in this roundup with an integrated chalkboard for planning and notes. 9 storage shelves is the most shelf capacity among fold-down options. 4.4 stars across 675 reviews is solid validation. Charcoal gray is versatile. This is the largest and heaviest fold-down unit in the roundup.",
    specs: [
      "Integrated chalkboard",
      "9 shelves",
      "Fold-down",
      "Charcoal gray",
    ],
    pros: [
      "Only fold-down with integrated chalkboard",
      "9 storage shelves most capacity in category",
      "4.4 stars 675 reviews solid validation",
      "Charcoal gray versatile finish",
    ],
    cons: [
      "$129.99 most expensive fold-down in roundup",
      "Chalkboard creates dust near the work surface",
      "Largest and heaviest fold-down unit",
    ],
    bestFor:
      "buyers wanting a planning chalkboard built into the desk wall unit with maximum shelf storage in one installation",
  },
  {
    id: "yusing-enclosed-compartments",
    rank: 5,
    badge: "Best Fold-Down with Enclosed Storage Compartments",
    name: "YUSING Wall Mounted Fold Down Laptop Desk with Enclosed Storage Compartments, White",
    price: "~$65.54",
    rating: "4.3 stars",
    reviews: "642 reviews",
    imageUrl: `${BASE}/yusing-enclosed.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07TDGP13T?tag=deskfinds0d-20",
    description:
      "Enclosed compartments conceal contents when the unit is on the wall, unlike open shelves. Under $70 for a fold-down with enclosed storage is competitive. 642 reviews at 4.3 stars provides reasonable confidence. White finish.",
    specs: [
      "Enclosed compartments",
      "Fold-down",
      "White",
      "Under $70",
    ],
    pros: [
      "Enclosed compartments conceal items, cleaner visual than open shelves",
      "Under $70 for fold-down with enclosed storage",
      "4.3 stars 642 reviews reasonable confidence",
      "White finish for residential spaces",
    ],
    cons: [
      "4.3 stars lower than Haotian at similar price",
      "Enclosed compartment sizes may be limited",
      "White shows marks and scuffs over time",
    ],
    bestFor:
      "buyers wanting enclosed hidden storage compartments on a fold-down wall unit in a white finish at under $70",
  },
  {
    id: "teamix-simple-budget",
    rank: 6,
    badge: "Best Budget Fold-Down (No Storage Shelves)",
    name: "TEAMIX Wall Mounted Folding Table, 23.6 x 11.8 inch, 80 lbs, Heavy-Duty Brackets, Black",
    price: "~$39.99",
    rating: "4.3 stars",
    reviews: "502 reviews",
    imageUrl: `${BASE}/teamix-simple.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CMSYL7Q1?tag=deskfinds0d-20",
    description:
      "$39.99 is the lowest price in this roundup. Simple fold-down surface with no surrounding shelves. 80-lb capacity handles a laptop and accessories. Folds completely flat against the wall. Heavy-duty brackets. Note: 11.8-inch depth is shallow, verify a laptop fits before purchasing.",
    specs: ["$39.99", "23.6 x 11.8 inch", "80 lbs", "Folds completely flat"],
    pros: [
      "Lowest price at $39.99",
      "Simple installation no shelves to assemble",
      "Black finish industrial",
      "Folds completely flat against wall",
    ],
    cons: [
      "11.8-inch depth shallow, verify laptop fits before buying",
      "No integrated storage",
      "23.6-inch width narrower than standard desks",
    ],
    bestFor:
      "buyers needing the most affordable fold-down wall surface with no surrounding storage",
  },
  {
    id: "arrowstone-vesa-mount",
    rank: 7,
    badge: "Only Fold-Down with Integrated VESA Monitor Mount (Verify Reviews)",
    name: "ARROWSTONE SKEENA Wall-Mounted Desk, Fold-Down, VESA Monitor Mount, 31 inch, Birch Wood",
    price: "~$209.89",
    rating: "3.9 stars",
    reviews: "66 reviews",
    imageUrl: `${BASE}/arrowstone-vesa.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DJCTCC7L?tag=deskfinds0d-20",
    description:
      "The only fold-down desk in this roundup with an integrated VESA monitor mount. The monitor stays wall-mounted when the desk folds up, avoiding the need to move the monitor. 200-lb capacity is the highest in the roundup. 31-inch birch wood surface. Important: 3.9 stars from 66 reviews is insufficient confidence for a $209.89 purchase. Verify current reviews before buying.",
    specs: [
      "VESA mount integrated",
      "200 lbs",
      "31 inch birch wood",
      "Monitor stays mounted when desk folds",
    ],
    pros: [
      "Only fold-down with integrated VESA monitor mount",
      "Monitor stays wall-mounted when desk folds",
      "200-lb capacity highest in roundup",
      "31-inch birch wood surface",
    ],
    cons: [
      "3.9 stars from 66 reviews insufficient confidence at $209.89",
      "Highest price in fold-down category",
      "Monitor must be VESA-compatible",
    ],
    bestFor:
      "tech-forward buyers wanting a fold-down desk where the monitor remains independently wall-mounted, who have verified current review quality",
  },
  {
    id: "modway-floating-desk",
    rank: 8,
    badge: "Best Permanent Floating Wall Desk (Not Fold-Down)",
    name: "Modway Render Mid-Century Modern Wall Mount Office Desk, 60 inch, Keyboard Tray and 2 Drawers, Oak",
    price: "~$269.00",
    rating: "3.9 stars",
    reviews: "42 reviews",
    imageUrl: `${BASE}/modway-render-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0B6CYBX5B?tag=deskfinds0d-20",
    description:
      "60-inch surface width is the widest option in this roundup and suitable for dual monitors. Includes a pull-out keyboard tray and two drawers. Legless floating design creates a clean look. Oak finish is warm and residential. Important: 3.9 stars from only 42 reviews. Purchase based on feature set, not review validation.",
    specs: ["60 inch surface", "Keyboard tray", "2 drawers", "Oak finish"],
    pros: [
      "60-inch surface widest for dual monitor setup",
      "Pull-out keyboard tray and 2 drawers",
      "Legless floating wall design",
      "Oak warm residential finish",
    ],
    cons: [
      "3.9 stars from 42 reviews, do not use as buying signal",
      "$269.00 highest price in roundup",
      "Permanent installation does not fold",
    ],
    bestFor:
      "buyers committed to a permanent full-size floating wall desk with drawer storage who evaluate on feature set rather than review count",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the difference between a wall-mounted desk and a Murphy desk?",
    a: "A Murphy desk (fold-down desk) folds up flush against the wall when not in use, creating zero floor footprint. A floating wall desk is permanently extended from the wall. A ladder desk leans against the wall on a small floor footprint. Each trades different amounts of flexibility and surface size.",
  },
  {
    q: "Do fold-down wall desks need to be anchored to a stud?",
    a: "Yes. Fold-down desks support the weight of a monitor, laptop, and accessories plus downward pressure from typing. Anchoring to wall studs is required for structural safety. Drywall anchors alone are not sufficient for any desk in this roundup.",
  },
  {
    q: "Can a wall-mounted fold-down desk support dual monitors?",
    a: "The Modway Render at 60 inches wide is the only option with enough surface for a standard dual monitor setup. Most fold-down desks are 24 to 36 inches wide. The ARROWSTONE SKEENA offers a VESA monitor mount so the monitor stays on the wall independently when the desk folds.",
  },
  {
    q: "What is the maximum load capacity for wall-mounted desks in this roundup?",
    a: "Capacities range from 50 to 200 lbs. The ARROWSTONE SKEENA rates at 200 lbs, the highest in this roundup. The TEAMIX rates at 80 lbs. Most home office desk use (laptop, monitor, accessories) falls well under 50 lbs.",
  },
  {
    q: "How much does installation cost for a wall-mounted desk?",
    a: "DIY installation requires a stud finder, drill, level, and basic hardware included with most products. Professional handyman installation typically costs $75 to $200 depending on location and the complexity of the unit.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-desk-shelves-small-desks",
    title: "Best Desk Shelves for Small Desks (2026)",
  },
  {
    href: "/guide/best-over-desk-shelves",
    title: "Best Over Desk Shelves (2026)",
  },
  {
    href: "/guide/best-l-shaped-wood-desk",
    title: "Best L-Shaped Wood Desk (2026)",
  },
  {
    href: "/guide/small-desk-organization-ideas",
    title: "Small Desk Organization Ideas",
  },
];
