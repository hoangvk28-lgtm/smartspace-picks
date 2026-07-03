const BASE = "/images/guides/best-desk-shelves-small-desks";

export const guideSlug = "best-desk-shelves-small-desks";
export const guideTitle = "8 Best Desk Shelves for Small Desks (2026)";
export const metaTitle =
  "Best Desk Shelves for Small Desks (2026): Monitor Risers, Organizers, and Bookshelves";
export const metaDescription =
  "Find the best desk shelves for small home office desks. Monitor riser shelves, adjustable organizer shelves, and desktop bookshelves compared by reviews and footprint.";
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
    id: "wali-adjustable-riser",
    rank: 1,
    badge: "Best Monitor Riser by Review Count",
    name: "WALI Monitor Stand Riser, Height Adjustable 3.9 to 5.5 inch, Metal, 44 lbs, 10-Year Warranty",
    price: "~$12.99",
    rating: "4.7 stars",
    reviews: "15,617 reviews",
    imageUrl: `${BASE}/wali-adjustable-riser.webp`,
    amazonUrl: "https://www.amazon.com/dp/B094QTGHNZ?tag=deskfinds0d-20",
    description:
      "15,617 reviews at 4.7 stars makes this the most reviewed desk shelf in this roundup. A 10-year warranty at $12.99 is the strongest durability signal in the category. Height adjustable from 3.9 to 5.5 inches allows optimal monitor positioning. 44-lb capacity handles all standard monitors.",
    specs: ["Adjustable 3.9-5.5 inch", "44 lbs", "10-year warranty", "$12.99"],
    pros: [
      "15,617 reviews at 4.7 stars most reviewed in roundup",
      "10-year warranty at $12.99 strongest durability signal",
      "Height adjustable 3.9 to 5.5 inches",
      "44-lb capacity for all standard monitors",
    ],
    cons: [
      "No drawer or pen holder storage",
      "Black metal may not suit warm wood desks",
      "Adjustable mechanism adds slight complexity",
    ],
    bestFor:
      "home office workers wanting the most-validated height-adjustable monitor riser with the strongest warranty at the lowest price",
  },
  {
    id: "huanuo-monitor-riser",
    rank: 2,
    badge: "Highest-Rated Monitor Riser",
    name: "HUANUO Monitor Riser for Desk, Metal, Vented, 14.57 x 9.25 inches, 44 lbs Capacity",
    price: "~$15.99",
    rating: "4.8 stars",
    reviews: "15,362 reviews",
    imageUrl: `${BASE}/huanuo-monitor-riser.webp`,
    amazonUrl: "https://www.amazon.com/dp/B073VKC134?tag=deskfinds0d-20",
    description:
      "4.8 stars is the highest rating in this entire roundup. Known dimensions (14.57 x 9.25 inches) allow accurate planning before purchase. Vented top improves airflow for laptops placed on the riser. 15,362 reviews at 4.8 stars represent exceptional validation.",
    specs: ["4.8 stars", "14.57x9.25 inches", "Vented top", "44 lbs"],
    pros: [
      "4.8 stars highest rating in entire roundup",
      "Known dimensions allow accurate planning",
      "Vented top better for laptop cooling",
      "15,362 reviews strong validation",
    ],
    cons: [
      "Fixed height, no adjustability",
      "Black metal only",
      "No drawer or pen holder",
    ],
    bestFor:
      "home office workers who prioritize the highest rating and known dimensions, where standard fixed riser height is appropriate",
  },
  {
    id: "bontec-dual-monitor-wood",
    rank: 3,
    badge: "Best Dual Monitor Riser with Wood Aesthetic",
    name: "BONTEC Dual Monitor Stand Riser, Adjustable Length 31.5 to 42.5 inches, Wood, Smartphone Holder",
    price: "~$25.64",
    rating: "4.6 stars",
    reviews: "7,846 reviews",
    imageUrl: `${BASE}/bontec-dual-monitor.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C4SZ286V?tag=deskfinds0d-20",
    description:
      "A wood surface suits warm home office aesthetics that black metal risers do not match. Adjustable length from 31.5 to 42.5 inches accommodates different desk widths. Includes a smartphone holder and cable management. 7,846 reviews at 4.6 stars is strong validation.",
    specs: ["Wood surface", "Adjustable 31.5-42.5 inches", "Smartphone holder", "Dual monitor"],
    pros: [
      "Wood surface suits warm home office aesthetics",
      "7,846 reviews at 4.6 stars strong validation",
      "Adjustable length 31.5 to 42.5 inches",
      "Smartphone holder and cable management",
    ],
    cons: [
      "31.5-inch minimum width occupies large portion of small desks",
      "Not suitable for desks under 40 inches",
      "No height adjustability",
    ],
    bestFor:
      "dual monitor setups on desks 48 inches or wider where wood aesthetics are important",
  },
  {
    id: "opnice-riser-with-drawer",
    rank: 4,
    badge: "Best Monitor Riser with Built-In Drawer",
    name: "OPNICE 2-Tier Monitor Stand Riser, Drawer and 2 Pen Holders, Metal, 44 lbs",
    price: "~$19.79",
    rating: "4.7 stars",
    reviews: "4,900 reviews",
    imageUrl: `${BASE}/opnice-riser-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DB8F7GDN?tag=deskfinds0d-20",
    description:
      "A built-in pull-out drawer plus two pen holders makes this the best monitor riser for adding concealed storage at desk level. 4,900 reviews at 4.7 stars is strong validation. Adjustable non-slip pads adapt to different surfaces. Under $20.",
    specs: ["Pull-out drawer", "2 pen holders", "44 lbs", "$19.79"],
    pros: [
      "Only monitor riser in roundup with built-in pull-out drawer",
      "2 pen holders on riser top",
      "4.7 stars 4,900 reviews strong validation",
      "Under $20",
    ],
    cons: [
      "Drawer is shallow for small items only",
      "No height adjustability",
      "Verify width fits small desk before purchasing",
    ],
    bestFor:
      "small desk owners wanting a monitor riser that adds a hidden pull-out drawer and pen storage in one product",
  },
  {
    id: "gianotter-dual-magnetic",
    rank: 5,
    badge: "Best Dual Riser with Magnetic Pen Holders",
    name: "gianotter Dual Monitor Stand Riser, 40.6 inch, Drawer and 2 Magnetic Pen Holders, Metal",
    price: "~$28.99",
    rating: "4.6 stars",
    reviews: "2,908 reviews",
    imageUrl: `${BASE}/gianotter-dual-magnetic.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DJKSMV2T?tag=deskfinds0d-20",
    description:
      "USPTO-patented magnetic pen holders are a proprietary feature not found on other risers in this roundup. The drawer plus magnetic holders address both storage and daily-use organization. 2,908 reviews at 4.6 stars provides adequate confidence. Best for wide desks.",
    specs: ["Magnetic pen holders", "40.6 inches", "Pull-out drawer", "USPTO patent"],
    pros: [
      "USPTO patent on magnetic pen holder is a proprietary differentiator",
      "Drawer plus magnetic holders in one unit",
      "2,908 reviews at 4.6 stars",
      "Dual monitor support",
    ],
    cons: [
      "40.6 inch wide too large for most small desks under 40 inches",
      "$28.99 highest among monitor risers",
      "Fixed width only",
    ],
    bestFor:
      "dual monitor setups on wide desks (48 inches or wider) where magnetic pen holders and a drawer are useful",
  },
  {
    id: "nutikas-adjustable-organizer",
    rank: 6,
    badge: "Best Adjustable-Width Desktop Organizer",
    name: "NUTIKAS Desk Shelves Desktop Organizer, Adjustable Width 16.2 to 27.8 inches, 3 Shelves, Wood, White",
    price: "~$25.97",
    rating: "4.3 stars",
    reviews: "544 reviews",
    imageUrl: `${BASE}/nutikas-adjustable.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DR31GC3D?tag=deskfinds0d-20",
    description:
      "Adjustable width from 16.2 to 27.8 inches makes this the most adaptable organizer for different desk sizes. Three shelves create vertical layers for books, binders, and supplies. White wood matches light home office setups. Under $26.",
    specs: ["Adjustable 16.2-27.8 inch width", "3 shelves", "Wood", "White"],
    pros: [
      "Adjustable width 16.2 to 27.8 inches fits different desk sizes",
      "3 shelves for vertical organization",
      "White wood matches light home offices",
      "Under $26",
    ],
    cons: [
      "4.3 stars lowest in roundup",
      "544 reviews small sample",
      "Not a monitor riser",
    ],
    bestFor:
      "small desk owners needing an adjustable-width shelf organizer where exact fit to available space is important",
  },
  {
    id: "nromant-desktop-bookshelf",
    rank: 7,
    badge: "Best Desktop Bookshelf with Anti-Tip Anchors",
    name: "Nromant Desktop Bookshelf, 36 inch W x 31.5 inch H, 6 Shelves, 70 lbs, Anti-Tip Anchors, White",
    price: "~$66.99",
    rating: "4.5 stars",
    reviews: "204 reviews",
    imageUrl: `${BASE}/nromant-bookshelf.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CN4H17QL?tag=deskfinds0d-20",
    description:
      "Anti-tip anchors are a safety feature for a 31.5-inch tall desktop bookshelf that the ChooChoo alternative lacks. 70-lb capacity handles heavy books and binders. Six shelves provide maximum vertical storage at desk level. 204 reviews at 4.5 stars.",
    specs: ["Anti-tip anchors", "70 lbs", "6 shelves", "31.5 inch tall"],
    pros: [
      "Anti-tip anchors unique safety feature among desktop bookshelves",
      "70-lb capacity highest in roundup",
      "6 shelves maximum vertical storage",
      "4.5 stars 204 reviews",
    ],
    cons: [
      "$66.99 highest price in roundup",
      "36-inch wide occupies most of a small desk",
      "31.5-inch tall significant visual presence",
    ],
    bestFor:
      "home office desks 48 inches or wider where a safety-anchored vertical bookshelf is the storage goal",
  },
  {
    id: "choochoo-bookshelf-drawer",
    rank: 8,
    badge: "Tallest Desktop Bookshelf with Drawer",
    name: "ChooChoo Desktop Bookshelf, 36.4 inch H x 37 inch W, 5 Shelves and 1 Drawer, White",
    price: "~$64.99",
    rating: "4.6 stars",
    reviews: "114 reviews",
    imageUrl: `${BASE}/choochoo-bookshelf.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CWLCHKZD?tag=deskfinds0d-20",
    description:
      "The tallest product in this roundup at 36.4 inches. Includes a drawer for concealed storage alongside 5 open shelves. 4.6 stars from 114 reviews is a promising initial signal. Slightly lower price than Nromant. Note: no anti-tip anchor system.",
    specs: ["36.4 inch tall", "5 shelves + 1 drawer", "White", "Engineered wood"],
    pros: [
      "Tallest product in roundup at 36.4 inches",
      "Includes 1 drawer for concealed storage",
      "4.6 stars promising initial rating",
      "$64.99 slightly lower than Nromant",
    ],
    cons: [
      "No anti-tip anchor system, tipping risk for tallest unit",
      "114 reviews smallest sample in roundup",
      "37-inch wide occupies most of a small desk",
    ],
    bestFor:
      "wide desks where a tall desktop bookshelf with a concealed drawer is the goal and anti-tip anchoring is not a concern",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the best monitor riser for a small desk?",
    a: "The HUANUO at $15.99 has the highest rating (4.8 stars, 15,362 reviews) with known dimensions of 14.57 x 9.25 inches. The WALI at $12.99 has the most reviews (15,617) and adds height adjustability plus a 10-year warranty. Both are strong choices.",
  },
  {
    q: "How much height does a monitor riser add?",
    a: "Fixed risers typically add 3.5 to 5 inches. The WALI is adjustable from 3.9 to 5.5 inches. Optimal monitor positioning places the top of the screen at eye level or slightly below. Measure the distance needed before choosing a fixed vs adjustable riser.",
  },
  {
    q: "What is the difference between a desktop bookshelf and a monitor riser?",
    a: "A monitor riser is a low shelf 3 to 6 inches tall specifically sized to raise a monitor to eye level. A desktop bookshelf is taller (24 to 37 inches) with multiple shelves for books, binders, and decorative items. Both sit on a desk but serve different purposes.",
  },
  {
    q: "Are desk shelves with drawers better than ones without?",
    a: "Desk shelves with drawers (OPNICE monitor riser, ChooChoo bookshelf) add concealed storage that plain risers or open shelves lack. If you frequently use small items like adapters, cables, or accessories at desk level, a built-in drawer adds convenience.",
  },
  {
    q: "How wide should a desk shelf be for a small desk?",
    a: "For a desk 40 inches or smaller, monitor risers under 15 inches wide or adjustable-width organizers (NUTIKAS) are best. Dual monitor risers (31.5 to 42.5 inches) and desktop bookshelves (36 to 37 inches) are suited for desks 48 inches or wider.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-over-desk-shelves", title: "Best Over Desk Shelves (2026)" },
  { href: "/guide/small-desk-organization-ideas", title: "Small Desk Organization Ideas" },
  { href: "/guide/best-rolling-carts-home-office", title: "Best Rolling Carts for Home Offices (2026)" },
  { href: "/guide/best-clamp-on-desk-drawers", title: "Best Clamp-On Desk Drawers (2026)" },
];
