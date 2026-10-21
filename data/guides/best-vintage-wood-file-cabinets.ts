const BASE = "/images/guides/best-vintage-wood-file-cabinets";

export const guideSlug = "best-vintage-wood-file-cabinets";
export const guideTitle = "Best Vintage Wood File Cabinets for Home Office (2026)";
export const metaTitle = "Best Vintage Wood File Cabinets for Home Office (2026)";
export const metaDescription =
  "Find the best vintage-style, rustic, and antique-inspired wood file cabinets for your home office. Honest picks ranked by reviews, rating, and style fit.";
export const lastUpdated = "2026-07-02";
export const readTime = "9 min";
export const heroImage = `${BASE}/hero.webp`;

export interface VintageCabinet {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  drawers: string;
  style: string;
  rating: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: VintageCabinet[] = [
  {
    id: "sauder-palladia-vintage-oak",
    rank: 1,
    badge: "Best Overall Vintage-Look",
    name: "Sauder Palladia 2-Drawer Lateral File Cabinet, Vintage Oak",
    price: "$289.99",
    drawers: "2 Drawers Lateral",
    style: "Vintage Oak",
    rating: "",
    imageUrl: `${BASE}/sauder-palladia-vintage-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B01MR4Q0WA?tag=deskfinds0d-20",
    whyItWorks:
      "The Sauder Palladia is the most-reviewed vintage-style file cabinet in this roundup. The Vintage Oak finish replicates the warm, slightly aged look of natural oak with visible grain variation and a matte, furniture-like surface. It does not look like a shiny office product - it looks like it belongs beside a wood desk in a home library or study. Sauder is one of the most established names in home office furniture, and their construction at this price tier is generally reliable. The lateral format provides a wide flat top for printer or decor placement.",
    tradeoffs: [
      "Engineered wood, not solid oak",
      "Under $300 is a significant spend for an engineered wood product"
    ],
    skipIf:
      "Skip if you are budget-conscious. The VINGLI (Pick 2) and VASAGLE (Pick 3) provide vintage farmhouse style at a fraction of the price. Skip if you need a locking cabinet in this finish - verify lock availability on the current listing.",
    pros: [
      "Vintage oak finish looks warm and residential, not corporate",
      "Lateral format provides a wide, flat top for printer or decor",
      "Trusted Sauder brand with consistent product quality"
    ],
    cons: [
      "Engineered wood, not solid oak",
      "Under $300 is a premium price for engineered wood"
    ],
  },
  {
    id: "vingli-2-drawer-lock-rustic-brown",
    rank: 2,
    badge: "Best Budget Rustic With Lock",
    name: "VINGLI 2-Drawer File Cabinet with Lock, Rustic Brown Farmhouse",
    price: "$62.99",
    drawers: "2 Drawers",
    style: "Rustic Brown Farmhouse",
    rating: "",
    imageUrl: `${BASE}/vingli-2-drawer-lock-rustic-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C8JKCZRR?tag=deskfinds0d-20",
    whyItWorks:
      "The VINGLI at under $70 is the most affordable pick in this roundup with a meaningful review count. It pairs a rustic brown wood-look finish with a black metal frame - a combination that reads as farmhouse or industrial-rustic. The locking drawers add security, which is uncommon at this price point. It is not a premium product, but for a budget rustic cabinet with a lock, it earns its ranking.",
    tradeoffs: [
      "Budget construction will show more wear over time than premium picks",
      "Wood-look finish rather than real wood",
      "May feel lightweight compared to heavier engineered wood cabinets"
    ],
    skipIf:
      "Skip if you want a warm lateral format with a wide top surface for a printer. The Sauder Palladia (Pick 1) is the right choice for that use case. Skip if you need a honey-brown or antique white finish.",
    pros: [
      "Very affordable at under $70 for the style and features included",
      "Locking drawers at budget pricing",
      "Black metal accents pair well with industrial desk setups"
    ],
    cons: [
      "Budget construction shows wear faster than premium picks",
      "Wood-look laminate, not real wood",
      "May feel lightweight compared to heavier products"
    ],
  },
  {
    id: "vasagle-2-drawer-honey-brown",
    rank: 3,
    badge: "Best Farmhouse Under $100",
    name: "VASAGLE 2-Drawer File Cabinet, Farmhouse Style, Honey Brown and Black",
    price: "$88.99",
    drawers: "2 Drawers",
    style: "Honey Brown Farmhouse",
    rating: "",
    imageUrl: `${BASE}/vasagle-2-drawer-honey-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09XF4Z5GP?tag=deskfinds0d-20",
    whyItWorks:
      "The VASAGLE combines a honey brown wood-look surface with a black metal frame for a farmhouse aesthetic that pairs well with black-framed desks, industrial-style shelving, and warm-toned home offices. The honey brown finish reads lighter and warmer than rustic brown, making it more versatile for rooms that use light wood tones. VASAGLE is a recognized brand in the home office furniture space.",
    tradeoffs: [
      "Engineered wood with metal frame, not solid wood",
      "Does not include a lock (verify on current listing before ordering)",
      "Farmhouse finish may not suit minimalist or all-white setups"
    ],
    skipIf:
      "Skip if you need locking drawers - verify lock availability on the current listing, and consider the VINGLI (Pick 2) which includes a lock at a lower price. Skip if your office is neutral or minimalist.",
    pros: [
      "Honey brown plus black is a popular and versatile farmhouse combination",
      "Pairs naturally with warm wood desk setups",
      "Under $90 is competitive for the farmhouse style tier"
    ],
    cons: [
      "Engineered wood, not solid wood",
      "Lock status needs verification on current listing",
      "Does not come with locking drawers in the base version"
    ],
  },
  {
    id: "bush-salinas-antique-white",
    rank: 4,
    badge: "Best Antique White Pick",
    name: "Bush Furniture Salinas 2-Drawer Lateral File Cabinet, Antique White",
    price: "Check Amazon",
    drawers: "2 Drawers Lateral",
    style: "Antique White",
    rating: "Check Amazon",
    imageUrl: `${BASE}/bush-salinas-antique-white.webp`,
    amazonUrl: "https://www.amazon.com/Bush-Furniture-Salinas-Lateral-Cabinet/dp/B0799BJVZ2/?tag=deskfinds0d-20",
    whyItWorks:
      "The Bush Furniture Salinas in Antique White fills a style gap that none of the other picks cover: a painted, antiqued white finish with decorative hardware that reads as French country or cottage-style furniture. This is a distinctly different look from the warm brown and walnut tones of the other picks. Bush Furniture is a reliable brand with a long track record in home office furniture. Verify current price and review count on Amazon before ordering.",
    tradeoffs: [
      "Price and rating require verification on current Amazon listing",
      "White painted finishes can chip or scuff more visibly than dark wood finishes",
      "Engineered wood with painted finish, not solid wood"
    ],
    skipIf:
      "Skip if your office is warm-toned or rustic. This is specifically a cottage, shabby chic, or French country option. Skip if you need confirmed locking drawers without verifying the listing.",
    pros: [
      "Antique white finish is unique in this category - no other pick covers this style",
      "Bush Furniture is a trusted brand",
      "Lateral format with a flat top surface for printer use"
    ],
    cons: [
      "Price and rating require manual verification before ordering",
      "White painted finish shows scuffs more visibly than dark finishes",
      "Engineered wood with painted finish"
    ],
  },
  {
    id: "itaar-classical-walnut-brown",
    rank: 5,
    badge: "Best Mid-Tier Walnut Brown",
    name: "Itaar 2-Drawer File Cabinet, Classical American Style, Walnut Brown",
    price: "$124.44",
    drawers: "2 Drawers",
    style: "Classical Walnut Brown",
    rating: "",
    imageUrl: `${BASE}/itaar-classical-walnut-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DPCHWX2F?tag=deskfinds0d-20",
    whyItWorks:
      "The Itaar Classical American-style cabinet brings a walnut brown finish with decorative hardware that references traditional American furniture design. The Classical American style positions it between full vintage and contemporary. It works in traditional home offices, rustic farmhouse setups, and beside mid-century or dark wood desks.",
    tradeoffs: [
      "Classical American styling may not suit all vintage aesthetics",
      "Material not confirmed as solid wood"
    ],
    skipIf:
      "Skip if you want the most statistically validated quality signal. The Sauder Palladia (Pick 1) has over ten times the review count. Skip if you need a farmhouse rustic finish - the VINGLI (Pick 2) and VASAGLE (Pick 3) cover that better.",
    pros: [
      "Walnut brown is a warm, versatile finish",
      "Mid-tier price fills the gap between budget and premium picks", "Two-drawer classical American style"],
    cons: [
      "Rating may shift as more buyers review the product",
      "Material type not confirmed as solid hardwood"
    ],
  }
];

export const backupProducts: VintageCabinet[] = [
  {
    id: "modernmate-4-drawer-mid-century-walnut",
    rank: 0,
    badge: "Backup: 4-Drawer With Power Strip",
    name: "ModernMate 4-Drawer File Cabinet, Mid-Century Walnut with Power Strip",
    price: "$269.99",
    drawers: "4 Drawers",
    style: "Mid-Century Walnut",
    rating: "",
    imageUrl: `${BASE}/modernmate-4-drawer-mid-century-walnut.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0F29HRN9M?tag=deskfinds0d-20",
    whyItWorks:
      "The ModernMate stands out for one feature none of the other picks offer: a built-in power strip integrated into the cabinet unit. If you need a 4-drawer file cabinet with the ability to charge devices nearby, this is the only pick in this list that addresses that use case. The mid-century walnut finish is clean and modern.",
    tradeoffs: [
      "Low-review products can have volatile ratings",
      "Higher price for limited review validation"
    ],
    skipIf:
      "Skip if you do not specifically need 4-drawer storage with integrated power access. All 5 main picks are better validated for general home office use.",
    pros: [
      "Built-in power strip is unique in this category",
      "4-drawer format provides more storage than 2-drawer picks",
      "Mid-century walnut finish is design-forward"
    ],
    cons: [
      "Rating may shift significantly with more buyer data",
      "Under $300 is a significant spend for an unproven product"
    ],
  },
  {
    id: "tribesigns-4-drawer-dark-walnut",
    rank: 0,
    badge: "Backup: 4-Drawer Dark Walnut",
    name: "Tribesigns 4-Drawer Vertical Wood Filing Cabinet, Classic Dark Walnut",
    price: "$219.99",
    drawers: "4 Drawers Vertical",
    style: "Classic Dark Walnut",
    rating: "",
    imageUrl: `${BASE}/tribesigns-4-drawer-dark-walnut.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0G23FCHMG?tag=deskfinds0d-20",
    whyItWorks:
      "The Tribesigns 4-drawer cabinet in Classic Dark Walnut offers a tall, stately vertical format with a dark walnut finish. Eight reviews is far too few to recommend with confidence. Include only as a reference for buyers who specifically need a 4-drawer dark walnut vertical cabinet and understand the limited review data.",
    tradeoffs: [
      "Rating not validated at any meaningful scale",
      "Vertical format at 50-plus inches dominates small rooms"
    ],
    skipIf:
      "Skip for most buyers. Only consider if you specifically need a 4-drawer dark walnut vertical cabinet and cannot find a better-reviewed alternative.",
    pros: [
      "4-drawer format provides significant filing capacity",
      "Dark walnut finish is a classic home office look"
    ],
    cons: [
      "Tall vertical format requires dedicated wall space",
      "Under $250 for a product with almost no buyer validation"
    ],
  }
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  price: string;
  drawers: string;
  style: string;
  rating: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  drawers: p.drawers,
  style: p.style,
  rating: p.rating,
}));

export const faq: { q: string; a: string }[] = [
  {
    q: "Are these file cabinets actual vintage or antique products?",
    a: "No. All products in this list are newly manufactured modern furniture designed to look vintage or antique-inspired. They are not genuine antique furniture. The rustic and vintage aesthetics are achieved through surface finishes, not through aged materials.",
  },
  {
    q: "What is the best vintage-style wood file cabinet overall?",
    a: "If budget is the priority, the VINGLI at under $70 with locking drawers is the best combination of farmhouse style and security under $70.",
  },
  {
    q: "Which vintage file cabinet is best for a farmhouse home office?",
    a: "The VINGLI Rustic Brown and the VASAGLE Honey Brown are the strongest farmhouse-style picks. The VINGLI (rustic brown plus black metal) is more industrial-rustic. The VASAGLE (honey brown plus black) is warmer and lighter. Both pair well with shiplap walls, natural wood accents, and rattan baskets.",
  },
  {
    q: "Do any of these use reclaimed wood?",
    a: "None of the products in this list are verified as using reclaimed wood. The rustic and reclaimed aesthetic is achieved through surface finishes rather than reclaimed materials. This is standard for Amazon furniture in this category.",
  },
  {
    q: "Can I find a real antique wood file cabinet?",
    a: "Yes, through estate sales, antique dealers, Facebook Marketplace, Craigslist, and auction sites. Amazon does not typically carry genuine antique furniture. The VINGLI or VASAGLE picks are the closest rustic aesthetic at an accessible price for buyers who want a vintage look without sourcing actual antiques.",
  },
  {
    q: "What is the difference between rustic brown and vintage oak finishes?",
    a: "Rustic brown finishes have a darker, more distressed look with visible wood-grain patterns mimicking aged or weathered wood. Vintage oak finishes are warmer and more amber-toned, replicating the look of natural aged oak without heavy distressing. Rustic brown suits farmhouse and industrial setups; vintage oak suits traditional and warm classic home offices.",
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets in 2026" },
  { href: "/guide/best-solid-wood-file-cabinets", title: "Best Solid Wood File Cabinets" },
  { href: "/guide/best-2-drawer-wood-file-cabinets", title: "Best 2-Drawer Wood File Cabinets" },
  { href: "/guide/best-wood-file-cabinets-under-200", title: "Best Wood File Cabinets Under $200" },
  { href: "/guide/best-lateral-wood-file-cabinets", title: "Best Lateral Wood File Cabinets" },
  { href: "/guide/best-vintage-wooden-desk", title: "Best Vintage Wooden Desks" }
];
