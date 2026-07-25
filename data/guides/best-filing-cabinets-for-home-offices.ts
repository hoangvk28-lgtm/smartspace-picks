export const guideSlug = "best-filing-cabinets-for-home-offices";
export const guideTitle = "8 Best Filing Cabinets for Home Offices in 2026";
export const metaTitle = "Best Filing Cabinets for Home Offices in 2026 (Steel Gauge Guide)";
export const metaDescription =
  "8 filing cabinets for home offices compared on steel gauge, drawer extension type, anti-tip safety, and hanging file compatibility, not just price and drawer count.";
export const mainKeyword = "filing cabinet for home office";
export const introParagraphs = [
  "Most filing cabinet listings lead with drawer count and lock type, but the details that actually determine how long a cabinet lasts and how safely it functions rarely make it into the bullet points. Steel gauge, drawer extension type, and anti-tip interlocks vary widely between $52.99 and $129.99 cabinets that look nearly identical in photos, and a cabinet marketed as metal can still be built with a particleboard core behind a thin metal face.",
  "This guide compares 8 home office filing cabinets we evaluated based on product specs and buyer feedback, focused on the build-quality signals competitors rarely explain: steel gauge, full-extension versus partial-extension drawers, anti-tip safety, and which hanging file sizes each drawer actually fits. Prices here range from $52.99 for a compact rolling cabinet to $129.99 for a fully assembled two-drawer unit.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg";

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
    id: "letaya-3-drawer-mobile-lock",
    rank: 1,
    badge: "Best Fully Assembled 3-Drawer",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinet",
    price: "$99.99",
    rating: "4.5 stars from 1,373 Amazon ratings",
    reviews: "1,373 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=deskfinds0d-20",
    description:
      "This three-drawer mobile cabinet ships fully assembled, a real advantage over kits that need 30-60 minutes of setup, and it fits letter, legal, and A4 hanging files across its drawers. It is designed to roll under a standard desk, which is worth checking against your desk's clearance height before buying since under-desk pedestals commonly run 24-28 inches tall.\n\nAt 4.5 stars across 1,373 ratings, it has one of the strongest buyer feedback records in this list. The lock secures the top drawer, useful for sensitive documents, though buyers should verify whether all three drawers lock together or only the top one before assuming full-cabinet security.",
    specs: [
      "3 drawers, fully assembled",
      "Fits letter, legal, A4 hanging files",
      "Locking mechanism included",
      "Under-desk mobile design",
    ],
    pros: [
      "Fully assembled, no setup time required",
      "Strong 4.5-star rating across 1,373 reviews",
      "Fits multiple hanging file sizes",
    ],
    cons: [
      "Steel gauge not disclosed in listing",
      "Under-desk fit depends on your desk's clearance height",
      "Lock scope across all drawers should be confirmed before buying",
    ],
    bestFor: "Buyers who want a ready-to-use three-drawer cabinet with no assembly required",
  },
  {
    id: "devaise-2-drawer-metal-assembled",
    rank: 2,
    badge: "Best 2-Drawer Fully Assembled",
    name: "DEVAISE 2 Drawer Metal File Cabinet, Fully Assembled, Under Desk, Black",
    price: "$129.99",
    rating: "4.5 stars from 1,681 Amazon ratings",
    reviews: "1,681 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wnmQx3CxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08G53L8B5?tag=deskfinds0d-20",
    description:
      "DEVAISE's two-drawer cabinet is fully assembled out of the box and fits letter, legal, and A4 size files, aimed squarely at under-desk placement. It carries the highest review count in this list at 1,681 ratings and matches the Letaya 3-drawer's 4.5-star average, a strong combination of volume and consistency.\n\nAt $129.99 it is the most expensive pick here, a premium over the similarly styled Letaya 2-drawer version below, likely reflecting its all-metal build and finish quality. As with any locking cabinet, confirm whether the lock secures both drawers or just one before relying on it for sensitive files.",
    specs: [
      "2 drawers, fully assembled",
      "Fits letter, legal, A4 hanging files",
      "Lock included",
      "Under-desk metal design",
    ],
    pros: [
      "Highest review count in this list at 1,681 ratings",
      "Fully assembled, no setup needed",
      "Matches top-rated 4.5-star average",
    ],
    cons: [
      "Highest price in this list",
      "Steel gauge not specified",
      "Two drawers only, less capacity than 3-drawer options",
    ],
    bestFor: "Buyers who want the most-reviewed two-drawer cabinet and are comfortable paying a premium for it",
  },
  {
    id: "letaya-2-drawer-lateral-lock",
    rank: 3,
    badge: "Best Lateral 2-Drawer",
    name: "Letaya 2 Drawer File Cabinet with Lock, Metal Lateral Filing Cabinet",
    price: "$99.99",
    rating: "4.2 stars from 1,671 Amazon ratings",
    reviews: "1,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ukHwAN+yL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=deskfinds0d-20",
    description:
      "This lateral cabinet opens along its wider side rather than front to back, which changes the clearance math for a home office: lateral cabinets typically need less front-to-back depth but more side clearance than a vertical drawer of similar capacity. At 27.95 inches tall and 28.35 inches wide, it needs more wall or side space than most vertical picks in this list.\n\nWith 1,671 ratings at 4.2 stars, feedback is solid though slightly below the top two picks. Verify your hanging files will orient correctly in a lateral drawer before buying, since not every lateral cabinet supports both front-to-back and side-to-side hanging rail configurations.",
    specs: [
      "2 drawers, lateral orientation",
      "Metal construction with lock",
      "Fits letter, legal, A4 files",
      "27.95 x 28.35 x 15.74 inches",
    ],
    pros: [
      "Solid 4.2-star rating across 1,671 reviews",
      "Lateral design needs less front-to-back clearance",
      "Locking mechanism included",
    ],
    cons: [
      "Needs more side clearance than vertical cabinets",
      "Steel gauge not disclosed",
      "Hanging file orientation should be confirmed before buying",
    ],
    bestFor: "Home offices with limited front-to-back space but room along a wall for a wider cabinet",
  },
  {
    id: "devaise-3-drawer-mobile-brown",
    rank: 4,
    badge: "Best Rustic Finish 3-Drawer",
    name: "DEVAISE 3-Drawer Mobile File Cabinet, Lateral Filing Cabinet, Rustic Brown",
    price: "$94.99",
    rating: "4.2 stars from 2,444 Amazon ratings",
    reviews: "2,444 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51vzgnkbcjL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=deskfinds0d-20",
    description:
      "This three-drawer lateral cabinet in rustic brown carries the highest review count in this entire list at 2,444 ratings, a meaningful signal of real-world reliability across a large buyer base. Its lateral orientation and mobile casters make it suitable for home offices that want to roll it between rooms rather than leave it fixed under a desk.\n\nAt $94.99, it undercuts the metal-finish picks above while offering an extra drawer, though buyers should note that many wood-finish mobile cabinets use a metal frame with a wood-look laminate face rather than being true solid wood or all-metal construction. Confirm the actual material composition in the listing before assuming premium build quality.",
    specs: [
      "3 drawers, lateral, mobile casters",
      "Rustic brown finish",
      "Fits letter, legal, A4 files",
      "Rolling design",
    ],
    pros: [
      "Highest review count in this list at 2,444 ratings",
      "Extra drawer for the price",
      "Mobile casters for repositioning",
    ],
    cons: [
      "Finish material composition should be verified before buying",
      "4.2-star average, not the highest in this list",
      "Steel gauge not disclosed",
    ],
    bestFor: "Buyers who want a well-reviewed, rollable three-drawer cabinet in a wood-look finish",
  },
  {
    id: "vasagle-custos-2-drawer",
    rank: 5,
    badge: "Best Budget Rolling Cabinet",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet, Small Rolling Filing Cabinet, Matte Black",
    price: "$52.99",
    rating: "4.1 stars from 7,901 Amazon ratings",
    reviews: "7,901 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31xyJKdJz-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BQJ5WL24?tag=deskfinds0d-20",
    description:
      "This VASAGLE cabinet has by far the largest review base in this entire list at 7,901 ratings, a strong volume signal even though its 4.1-star average sits slightly below the top picks. At 15.7 by 16.5 by 27.6 inches, it is one of the more compact rolling options here, doubling as a printer stand alongside its filing function.\n\nAt $52.99, it is the lowest-priced cabinet in this list, which likely means a lighter-gauge steel body than the pricier assembled picks. For light-duty home office use where budget matters more than heavy-duty construction, its volume of positive feedback makes it a reasonable value pick.",
    specs: [
      "2 drawers, rolling casters",
      "Doubles as printer stand",
      "Fits letter, A4 files",
      "15.7 x 16.5 x 27.6 inches",
    ],
    pros: [
      "Largest review base in this list at 7,901 ratings",
      "Lowest price in this list",
      "Compact footprint doubles as printer stand",
    ],
    cons: [
      "Lowest price likely means lighter steel gauge",
      "4.1-star average, below the top-rated picks",
      "Legal-size compatibility not confirmed in listing",
    ],
    bestFor: "Budget-focused buyers who want a compact rolling cabinet with a large proven track record",
  },
  {
    id: "gyiiyuo-2-drawer-extended-desktop",
    rank: 6,
    badge: "Best with Extended Desktop",
    name: "GYIIYUO 2 Drawer File Cabinet with 24 Inch Extended Desktop, Mobile Filing Cabinet",
    price: "$56.99",
    rating: "4.2 stars from 1,425 Amazon ratings",
    reviews: "1,425 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=deskfinds0d-20",
    description:
      "This cabinet adds a 24-inch extended desktop surface on top, useful as a printer stand or small side worktop in a home office where every extra flat surface counts. Its fabric drawer construction differs from the all-metal picks in this list, trading some durability for a lighter overall weight and different aesthetic.\n\nAt $56.99, it is one of the more affordable picks here, with a 4.2-star rating across 1,425 reviews. The fabric drawer material is worth understanding upfront since it will not match the dent resistance of a true steel drawer front.",
    specs: [
      "2 drawers, fabric drawer fronts",
      "24-inch extended desktop surface",
      "Mobile casters with side bag",
      "Fits A4, letter size files",
    ],
    pros: [
      "Extended desktop adds usable surface space",
      "Affordable price at $56.99",
      "Solid 4.2-star rating across 1,425 reviews",
    ],
    cons: [
      "Fabric drawers are less durable than steel",
      "Not a true all-metal cabinet",
      "Legal-size compatibility not confirmed",
    ],
    bestFor: "Home offices that want a small extra work surface alongside basic filing storage",
  },
  {
    id: "bynsoe-2-drawer-vertical-lock",
    rank: 7,
    badge: "Best Vertical Steel Cabinet",
    name: "BYNSOE 2 Drawer File Cabinet with Lock, Vertical Steel Filing Cabinet",
    price: "$64.99",
    rating: "4.0 stars from 1,303 Amazon ratings",
    reviews: "1,303 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31VM3xK++PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=deskfinds0d-20",
    description:
      "The BYNSOE is a vertical steel cabinet built for letter-size files, with a lock and steel body construction called out directly in the listing, a more explicit build-quality claim than several other picks here that just say metal. Assembly is required, unlike the fully assembled Letaya and DEVAISE picks, so factor in setup time before buying.\n\nAt $64.99 with a 4.0-star rating across 1,303 reviews, it is a mid-tier value option. Vertical orientation means it needs less side clearance than the lateral picks above but more front-to-back depth when a drawer is fully open.",
    specs: [
      "2 drawers, vertical orientation",
      "Steel construction with lock",
      "Letter size files",
      "Assembly required",
    ],
    pros: [
      "Explicit steel construction claim",
      "Locking mechanism included",
      "Needs less side clearance than lateral cabinets",
    ],
    cons: [
      "Assembly required, unlike top assembled picks",
      "Letter size only, no legal-size compatibility confirmed",
      "Lowest rating among the higher-review-count picks",
    ],
    bestFor: "Buyers who want an explicitly steel-built vertical cabinet and don't mind assembling it",
  },
  {
    id: "steeloong-2-drawer-metal-lock",
    rank: 8,
    badge: "Most Affordable Locking Steel Cabinet",
    name: "SteeLoong 2 Drawer File Cabinet, Metal Office File Cabinet with Lock, Black",
    price: "$64.99",
    rating: "4.0 stars from 382 Amazon ratings",
    reviews: "382 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31IIIyTZ29L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2QSQZ1X?tag=deskfinds0d-20",
    description:
      "SteeLoong's two-drawer cabinet matches the BYNSOE on price and rating but has a much smaller review base at 382 ratings, worth weighing if buyer feedback volume matters to your decision. It is a straightforward metal cabinet with a lock, without the extra features like extended desktops or lateral orientation seen in other picks.\n\nFor a no-frills locking metal cabinet at a moderate price point, it is a reasonable option, though the lighter review count means less certainty about long-term durability compared to the top picks in this list with thousands of ratings.",
    specs: [
      "2 drawers, metal construction",
      "Lock included",
      "Black finish",
      "Standard office design",
    ],
    pros: [
      "Straightforward metal cabinet with lock",
      "Matches mid-tier pricing of similar cabinets",
      "No unnecessary added features to drive up cost",
    ],
    cons: [
      "Smallest review base in this list at 382 ratings",
      "No extended desktop or lateral option",
      "Steel gauge not specified",
    ],
    bestFor: "Buyers who want a basic locking metal cabinet without paying for extra features",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Steel gauge and build material transparency",
    description:
      "Checked whether each listing explicitly claimed steel or metal construction versus vague language that could describe a metal face over a particleboard core.",
  },
  {
    title: "Drawer extension and hanging file compatibility",
    description:
      "Noted stated hanging file size support (letter, legal, A4) and whether drawers were described as full-extension or standard, since partial-extension drawers leave back files harder to reach.",
  },
  {
    title: "Assembly requirement",
    description:
      "Distinguished fully assembled cabinets from ones requiring buyer assembly, factoring setup time into the overall value assessment.",
  },
  {
    title: "Lateral vs vertical footprint fit",
    description:
      "Weighed each cabinet's stated orientation and dimensions against typical home office clearance needs for front-to-back versus side space.",
  },
  {
    title: "Value for price across review volume",
    description:
      "Weighed price against both star rating and review count, since a high rating on a small sample carries less confidence than a similar rating across thousands of reviews.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Steel gauge is rarely disclosed but matters for dent resistance",
    explanation:
      "18-gauge steel is the heaviest and most dent-resistant, typically found on premium cabinets. 20-gauge is standard mid-range, while 22-24-gauge budget cabinets dent more easily under daily use. Most listings in this price range don't state gauge directly, so treat price and stated 'heavy-duty' claims as rough proxies rather than certainties.",
  },
  {
    criterion: "Full-extension drawers matter more than drawer count",
    explanation:
      "A 3/4-extension drawer leaves files at the back partially inaccessible without pulling the whole drawer forward, while a full-extension drawer slides completely out. Few listings specify which type they use, so check buyer photos and reviews for extension complaints before assuming full access to every file.",
  },
  {
    criterion: "Anti-tip interlock is a real safety feature, not a marketing term",
    explanation:
      "Cabinets 28 inches or taller should include an anti-tip interlock that prevents multiple drawers from opening at once, since two open drawers loaded with files can tip a cabinet forward. ANSI/BIFMA standards call for this on qualifying cabinet heights, but budget imports sometimes skip it, so check listing photos for an interlock bar if this matters to you.",
  },
  {
    criterion: "'Metal' cabinets can still have a particleboard or MDF core",
    explanation:
      "Some cabinets marketed as metal use a thin metal face over a wood-composite body, which is lighter but less durable than true all-metal construction. All-metal cabinets are noticeably heavier to lift and typically require less assembly since the frame doesn't rely on wood joinery.",
  },
  {
    criterion: "Hanging file drawer width determines legal-size compatibility",
    explanation:
      "Letter-size hanging files need about 12-13 inches of internal drawer width, while legal-size needs 15-16 inches. Some cabinets marketed as legal-compatible actually require a separate adapter rail, so confirm true internal width rather than trusting the size label alone.",
  },
  {
    criterion: "Lateral cabinets need side clearance, vertical cabinets need depth clearance",
    explanation:
      "A lateral cabinet like the Letaya 2 Drawer Lateral opens along its wide side, needing clearance along a wall rather than in front. A vertical cabinet needs roughly 38-40 inches of total front-to-back clearance when a drawer is fully open, which can conflict with a nearby desk chair path in a tight office.",
  },
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Assembly Preference",
    intro: "Whether you want a cabinet ready to use immediately or don't mind assembly changes which picks make sense.",
    table: {
      headers: ["Preference", "Best pick"],
      rows: [
        ["Fully assembled, no setup", "Letaya 3 Drawer Mobile or DEVAISE 2 Drawer Metal"],
        ["Willing to assemble for a lower price", "BYNSOE 2 Drawer Vertical Steel"],
        ["Fully assembled, budget-focused", "VASAGLE CUSTOS 2-Drawer"],
      ],
    },
  },
  {
    subheading: "By Footprint Constraint",
    cards: [
      {
        label: "Limited front-to-back space, room along a wall",
        text: "The Letaya 2 Drawer Lateral or DEVAISE 3-Drawer Lateral need less depth clearance than vertical cabinets, opening along their wider side instead.",
      },
      {
        label: "Limited side space, room to open a drawer forward",
        text: "The BYNSOE 2 Drawer Vertical Steel needs less side clearance, but plan for roughly 38-40 inches of depth when a drawer is fully open.",
      },
      {
        label: "Very tight home office corner",
        text: "The VASAGLE CUSTOS is the most compact option in this list at 15.7 x 16.5 x 27.6 inches and doubles as a printer stand.",
      },
    ],
  },
  {
    subheading: "Steel Cabinets vs Fabric-Drawer Cabinets",
    intro: "Not every cabinet here is true all-metal construction, and that changes durability expectations.",
    table: {
      headers: ["Type", "Example", "Trade-off"],
      rows: [
        ["Explicit steel construction", "BYNSOE 2 Drawer Vertical Steel", "Heavier, more dent-resistant, requires assembly"],
        ["Metal cabinet, gauge not specified", "Letaya, DEVAISE, SteeLoong picks", "Likely mid-range gauge, treat price as a rough proxy"],
        ["Fabric drawer fronts", "GYIIYUO with Extended Desktop", "Lighter weight, less dent-resistant than steel"],
      ],
    },
    note: "If dent resistance matters most, prioritize cabinets that explicitly state steel construction over ones that only say 'metal' without further detail.",
  },
  {
    subheading: "By Budget Tier",
    table: {
      headers: ["Budget", "Trade-off", "Best pick"],
      rows: [
        ["Under $60", "Lightest gauge, smallest footprint", "VASAGLE CUSTOS or GYIIYUO with Extended Desktop"],
        ["$65-$100", "Mid-range steel, assembly varies", "BYNSOE, SteeLoong, Letaya 3 Drawer, DEVAISE 3-Drawer Brown"],
        ["$100-$130", "Fully assembled, strongest review base", "Letaya 3 Drawer Mobile or DEVAISE 2 Drawer Metal"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "How do I know if a filing cabinet is real steel or just metal-faced?",
    a: "Few listings state steel gauge directly, but explicit steel construction claims like the BYNSOE 2 Drawer Vertical Steel are a stronger signal than generic 'metal' descriptions. All-metal cabinets are noticeably heavier to lift and rarely need wood-joinery assembly, both useful checks when a listing is vague.",
  },
  {
    q: "What's the difference between full-extension and 3/4-extension drawers?",
    a: "A 3/4-extension drawer leaves files at the back partially inaccessible without pulling the whole drawer forward, while a full-extension drawer slides completely out for full access. Most listings in this price range don't specify which type they use, so check buyer reviews and photos for extension complaints before buying.",
  },
  {
    q: "Do I need an anti-tip interlock on a home office filing cabinet?",
    a: "If your cabinet is 28 inches or taller, an anti-tip interlock that prevents multiple drawers opening at once is a genuine safety feature, since two open drawers loaded with files can tip a cabinet forward. Budget imports sometimes skip this feature, so check listing photos for an interlock bar if you have kids or pets near the cabinet.",
  },
  {
    q: "Will a legal-size hanging file fit in any of these cabinets?",
    a: "Only if the drawer has at least 15-16 inches of internal width. Several picks in this list, including the Letaya 3 Drawer Mobile and DEVAISE picks, state letter, legal, and A4 compatibility directly, but always confirm true internal drawer width against the size label rather than assuming.",
  },
  {
    q: "Should I choose a lateral or vertical filing cabinet for a small home office?",
    a: "Choose lateral, like the Letaya 2 Drawer Lateral, if you have limited front-to-back space but room along a wall, since it opens sideways. Choose vertical, like the BYNSOE 2 Drawer Vertical Steel, if you have limited side space but can accommodate roughly 38-40 inches of depth when a drawer opens fully.",
  },
  {
    q: "Is a cheaper cabinet like the VASAGLE CUSTOS worth it for a home office?",
    a: "For light-duty use, yes. It has the largest review base in this list at 7,901 ratings, showing a strong track record, even though its 4.1-star average and lower price likely reflect a lighter steel gauge than pricier fully assembled picks like the DEVAISE 2 Drawer Metal.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-murphy-beds-with-desks", title: "Best Murphy Beds with Desks (2026)" },
  { href: "/guide/best-office-chairs-for-long-hours", title: "Best Office Chairs for Long Hours (2026)" },
  { href: "/guide/best-murphy-beds-for-small-spaces", title: "Best Murphy Beds for Small Spaces (2026)" },
];
