export const guideSlug = "best-shoe-rack-cabinet";
export const guideTitle = "8 Best Shoe Rack Cabinets in 2026";
export const metaTitle = "Best Shoe Rack Cabinets in 2026 (White, Black & Farmhouse)";
export const metaDescription =
  "8 best shoe rack cabinets in 2026, from a ventilated plastic cabinet to farmhouse barn-door and flip-drawer wood styles. Compare finish, capacity, and price.";
export const mainKeyword = "shoe rack cabinet";
export const introParagraphs = [
  "A shoe rack cabinet is meant to look like real entryway furniture, not a bare-bones organizer, so finish, hardware, and cabinetry details matter as much as pair capacity. But a cabinet is also a fully enclosed box, and closing damp shoes into one with no airflow feature is a common way to end up with lingering odor, so ventilation deserves the same attention as the finish.",
  "Below are 8 shoe rack cabinets we evaluated on finish quality, design, ventilation, and capacity, ranging from a $32.99 ventilated plastic cabinet to a $119.99 flip-drawer wood cabinet available in matching white and black finishes.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41a7DzzlTVL._SL500_.jpg";

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

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "homidec-6-tier-plastic-cabinet",
    rank: 1,
    badge: "Most-Reviewed Plastic Cabinet / Best Odor Control",
    name: "HOMIDEC 6-Tier Plastic Shoe Cabinet",
    price: "$32.99",
    rating: "4.2",
    reviews: "11,653",
    imageUrl: "https://m.media-amazon.com/images/I/41a7DzzlTVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08N4C97TS?tag=deskfinds0d-20",
    description:
      "The HOMIDEC is the cheapest cabinet in this list and also the only one built with dedicated air circulation holes, which matters because a fully enclosed cabinet with zero airflow is a common way to end up with lingering shoe odor. PP plastic and metal wire construction keep the price down without giving up the closed-cabinet look most buyers searching for a shoe rack cabinet actually want.\n\nSix tiers with removable partitions let you reconfigure the interior for boots or sneakers, and anti-toppling hardware is included at 37.2\" tall. It's also the most-reviewed cabinet in this entire list, with a review count well beyond every other pick here.",
    specs: [
      "33.07\"L x 12.4\"W x 37.2\"H",
      "PP plastic + metal wire + ABS connectors",
      "6 tiers, holds 24 pairs",
      "Air circulation holes for odor control",
      "Removable partitions, anti-toppling hardware",
    ],
    pros: [
      "Only pick in this list with dedicated odor-control ventilation",
      "Most-reviewed pick in this list at 11,653 ratings",
      "Cheapest cabinet in this list",
      "Removable partitions and anti-toppling hardware",
    ],
    cons: [
      "Plastic finish looks less like furniture than the wood cabinets",
      "No color options beyond the standard finish",
      "37.2\" height needs a stable surface",
    ],
    bestFor: "Buyers who want proven, well-ventilated cabinet storage at the lowest price",
  },
  {
    id: "bornoon-white-3-flip-drawers",
    rank: 2,
    badge: "Best-Rated White",
    name: "BORNOON White 3 Flip Drawer Shoe Cabinet",
    price: "$119.99",
    rating: "4.7",
    reviews: "1,968",
    imageUrl: "https://m.media-amazon.com/images/I/51L2YK92tGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CBRBVL61?tag=deskfinds0d-20",
    description:
      "The BORNOON in white is the highest-rated cabinet in this entire list, built from FSC-certified engineered wood, the most eco-certified material of any pick here. Three flip drawers plus 6 open shelves give it 18-24 pairs of capacity behind a clean white cabinet front that reads as real entryway furniture rather than a plastic organizer.\n\nAt 47.24\" tall, it's the tallest cabinet in this list, and anti-tipping hardware along with adjustable panels are both included. The white finish is the more popular choice for buyers who want their entryway to feel bright and open rather than heavy.",
    specs: [
      "47.24\"H x 31.5\"W x 9.45\"D",
      "FSC-certified engineered wood",
      "3 flip drawers + 6 shelves",
      "Holds 18-24 pairs",
      "Adjustable panels, anti-tipping hardware",
    ],
    pros: [
      "Highest-rated cabinet in this list at 4.7 stars",
      "Most eco-certified material (FSC-certified wood)",
      "Clean white finish suits bright entryways",
      "Adjustable panels and anti-tipping hardware",
    ],
    cons: [
      "Most expensive cabinet in this list",
      "White finish shows scuffs more visibly over time",
      "No dedicated ventilation feature",
    ],
    bestFor: "Buyers who want the highest-rated white cabinet regardless of price",
  },
  {
    id: "bornoon-black-3-flip-drawers",
    rank: 3,
    badge: "Best-Rated Black",
    name: "BORNOON Black 3 Flip Drawer Shoe Cabinet",
    price: "$119.99",
    rating: "4.7",
    reviews: "1,968",
    imageUrl: "https://m.media-amazon.com/images/I/51vsts0s5KL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DDHFQP13?tag=deskfinds0d-20",
    description:
      "This is the same BORNOON cabinet build as the white version above, in a black finish with a scratch-resistant coating that hides daily wear better than a light finish. Three flip drawers and 6 compartments hold the same 18-24 pairs, and the engineered wood construction carries over unchanged.\n\nIt's the highest-rated black cabinet in this list, matching the white version's 4.7-star rating, and anti-tipping hardware is included at the same 47.24\" height. Choose this over the white version if your entryway leans toward a darker, more modern palette or if you'd rather not worry about visible scuffs.",
    specs: [
      "9.45\"D x 31.5\"W x 47.24\"H",
      "Engineered wood",
      "3 flip drawers + 6 compartments",
      "Scratch-resistant finish",
      "Anti-tipping hardware, holds 18-24 pairs",
    ],
    pros: [
      "Highest-rated black cabinet in this list at 4.7 stars",
      "Scratch-resistant finish hides daily wear",
      "Same proven build as the white BORNOON",
      "Anti-tipping hardware included",
    ],
    cons: [
      "Most expensive cabinet in this list, tied with the white version",
      "No dedicated ventilation feature",
      "Tall 47.24\" frame needs a stable, anchored placement",
    ],
    bestFor: "Buyers who want the same top-rated cabinet in a darker, more modern finish",
  },
  {
    id: "qivomix-2-flip-drawers-modern",
    rank: 4,
    badge: "Best Handles",
    name: "QIVOMIX 2 Flip Drawer Modern Shoe Cabinet",
    price: "$84.98",
    rating: "4.4",
    reviews: "425",
    imageUrl: "https://m.media-amazon.com/images/I/51mrvTZu2PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F7RTLXRM?tag=deskfinds0d-20",
    description:
      "The QIVOMIX stands out with arc-shaped rose-gold handles, the most distinctive hardware detail in this list, on an otherwise clean engineered-wood cabinet body. It's the kind of detail that turns a functional cabinet into a design piece an entryway is actually built around.\n\nTwo flip drawers with a removable center divider hold 14-20 pairs, and an 80 lb top load rating means the flat top can double as a console surface for keys, mail, or decor. Anti-tipping hardware is included, and the 38\" height keeps it more compact than the tallest cabinets in this list.",
    specs: [
      "31.5\"W x 9.4\"D x 38\"H",
      "Engineered wood",
      "2 flip drawers, arc-shaped rose-gold handles",
      "80 lb top load, holds 14-20 pairs",
      "Removable divider, anti-tipping hardware",
    ],
    pros: [
      "Most distinctive hardware detail in this list",
      "80 lb top load doubles as a console surface",
      "Removable center divider adds flexibility",
      "Anti-tipping hardware included",
    ],
    cons: [
      "Lower capacity than the taller cabinets in this list",
      "No dedicated ventilation feature",
      "Rose-gold handles may not suit every entryway palette",
    ],
    bestFor: "Buyers who want a cabinet with a genuine design statement, not just storage",
  },
  {
    id: "homleke-barn-door-white",
    rank: 5,
    badge: "Best Farmhouse White",
    name: "Homleke Barn Door White Shoe Cabinet",
    price: "$89.99",
    rating: "4.6",
    reviews: "234",
    imageUrl: "https://m.media-amazon.com/images/I/41QiduloQCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DQ8SM4BS?tag=deskfinds0d-20",
    description:
      "The Homleke in white brings genuine barn-door styling to a shoe cabinet, the most distinctive farmhouse design in this list, with 2 sliding barn doors instead of a flip-drawer or flat-panel front. Wood legs and a 5-tier interior with 3 adjustable shelves round out the farmhouse-console look.\n\nAt 31.5\" tall, it's one of the more compact cabinets here, which keeps it proportional in a smaller entryway while still holding 15+ pairs. Anti-tipping hardware is included, and the white finish leans bright and cottage-style rather than heavy or industrial.",
    specs: [
      "13.8\"D x 27.6\"W x 31.5\"H",
      "Engineered wood",
      "2 barn doors, 5-tier",
      "3 adjustable shelves",
      "Anti-tipping hardware, wood legs, holds 15+ pairs",
    ],
    pros: [
      "Most distinctive farmhouse styling in this list",
      "Compact 31.5\" height suits smaller entryways",
      "3 adjustable shelves for flexible storage",
      "Anti-tipping hardware included",
    ],
    cons: [
      "Lower capacity than the taller flip-drawer cabinets",
      "No dedicated ventilation feature",
      "Sliding barn doors need clear wall space to slide across",
    ],
    bestFor: "Buyers who want farmhouse barn-door styling in a bright white finish",
  },
  {
    id: "homleke-farmhouse-barn-door-black",
    rank: 6,
    badge: "Best Farmhouse Black",
    name: "Homleke Farmhouse Barn Door Black Shoe Cabinet",
    price: "$89.98",
    rating: "4.4",
    reviews: "492",
    imageUrl: "https://m.media-amazon.com/images/I/41MAdbTNZAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DJ92VYLT?tag=deskfinds0d-20",
    description:
      "This black Homleke swaps the sliding barn doors of the white version above for 2 flip drawers, still under the same farmhouse-styled frame with tapered legs and a fence-style top shelf. Four adjustable shelves, the most among the farmhouse-style cabinets in this list, sit behind the flip drawers for flexible storage.\n\nAt 38.6\" tall, it's noticeably taller than its white farmhouse sibling, giving it more vertical storage in the same footprint. Anti-tipping hardware is included, which matters at this height, and the black finish hides scuffs better than a light farmhouse cabinet would.",
    specs: [
      "31.5\"W x 9.5\"D x 38.6\"H",
      "Engineered wood",
      "2 flip drawers, barn-door styling",
      "4 adjustable shelves (most among the farmhouse picks in this list)",
      "Tapered legs, fence top, anti-tipping hardware",
    ],
    pros: [
      "Most adjustable shelves among the farmhouse-style cabinets in this list",
      "Taller than the white farmhouse pick for more storage",
      "Black finish hides daily scuffs",
      "Anti-tipping hardware included",
    ],
    cons: [
      "No dedicated ventilation feature",
      "38.6\" height needs a stable, anchored placement",
      "Flip-drawer front loses some of the sliding barn-door look",
    ],
    bestFor: "Buyers who want farmhouse styling with more shelves and a darker finish",
  },
  {
    id: "boonatu-white-3-flip-drawers",
    rank: 7,
    badge: "Fastest Assembly",
    name: "Boonatu White 3 Flip Drawer Shoe Cabinet",
    price: "$102.59",
    rating: "4.6",
    reviews: "443",
    imageUrl: "https://m.media-amazon.com/images/I/51je9c8YkdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJFH9RCT?tag=deskfinds0d-20",
    description:
      "The Boonatu is built from P2-grade engineered wood, the highest board grade among the flip-drawer cabinets in this list, and pairs it with a genuine ventilation feature to help reduce odor inside the closed cabinet. Three flip drawers plus 6 compartments and adjustable dividers give it a flexible interior layout.\n\nAssembly takes about 20 minutes, the fastest among the multi-drawer cabinets in this list, which matters if you'd rather not spend an afternoon building furniture. Anti-tip hardware is included on the 47.2\" tall frame, matching the height class of the BORNOON cabinets above.",
    specs: [
      "47.2\"H x 31.5\"W x 9.25\"D",
      "P2-grade engineered wood",
      "3 flip drawers + 6 compartments",
      "Ventilation feature to reduce odor",
      "Adjustable dividers, anti-tip hardware, 20-minute assembly",
    ],
    pros: [
      "Fastest assembly among the multi-drawer cabinets in this list",
      "Highest-grade board among the flip-drawer cabinets in this list",
      "Includes a ventilation feature to reduce odor",
      "Adjustable dividers and anti-tip hardware",
    ],
    cons: [
      "Priced above the BORNOON cabinets despite fewer ratings",
      "White finish shows scuffs more visibly over time",
      "Only available in white, not a matching black option",
    ],
    bestFor: "Buyers who want fast assembly and a ventilated cabinet interior",
  },
  {
    id: "choochoo-deodorizer-flip-cabinet",
    rank: 8,
    badge: "Only Deodorizer Pick",
    name: "ChooChoo Deodorizer Flip Shoe Cabinet",
    price: "$89.09",
    rating: "4.3",
    reviews: "459",
    imageUrl: "https://m.media-amazon.com/images/I/51nQXmPrBeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DRJR7CMS?tag=deskfinds0d-20",
    description:
      "The ChooChoo is the only cabinet in this entire list with a built-in active deodorizer, running 4 modes to actively manage odor rather than relying on passive vents or holes. That's a meaningfully different approach to the ventilation problem every fully enclosed cabinet faces, and it's worth prioritizing if odor control is your top concern.\n\nTwo flip drawers hold 16 pairs behind a fence-top, side-hook design, and anti-tipping hardware is included at 42.9\" tall. Capacity is more modest than the BORNOON or Boonatu cabinets, but the active deodorizer is a feature none of the other picks in this list offer.",
    specs: [
      "31.5\"W x 9.45\"D x 42.9\"H",
      "Engineered wood",
      "2 flip drawers, built-in deodorizer with 4 modes",
      "Side hooks, fence top",
      "Anti-tipping hardware, holds 16 pairs",
    ],
    pros: [
      "Only pick in this entire list with active odor control",
      "4 deodorizer modes for different needs",
      "Side hooks add extra hanging storage",
      "Anti-tipping hardware included",
    ],
    cons: [
      "Lower pair capacity than the BORNOON or Boonatu cabinets",
      "Active deodorizer likely needs periodic power or replacement parts",
      "Only available in one finish",
    ],
    bestFor: "Buyers whose top priority is active odor control, not just capacity",
  },
];

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Finish and cabinetry quality",
    description: "Compared plastic, engineered wood, and P2-grade board across white, black, and farmhouse finishes for how much each cabinet actually looks like entryway furniture.",
  },
  {
    title: "Ventilation and odor control",
    description: "Checked for air circulation holes, dedicated ventilation features, or active deodorizers, since a sealed cabinet with no airflow is a common cause of lingering shoe odor.",
  },
  {
    title: "Real-world pair capacity",
    description: "Weighed listed pair counts against shoe size, since advertised capacity typically assumes small or narrow shoes stacked close together.",
  },
  {
    title: "Stability and anti-tip hardware",
    description: "Checked whether cabinets 38 inches and taller shipped with real anti-tipping hardware rather than just a wider decorative base.",
  },
  {
    title: "Value for price",
    description: "Weighed finish, capacity, and included hardware against price, from the $32.99 HOMIDEC to the $119.99 BORNOON cabinets.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "A cabinet needs its own ventilation feature, not just a closed door",
    explanation:
      "Shoes often go into a cabinet still damp, and sealing them into a fully enclosed box with zero airflow is a common way to end up with lingering odor or mold on the soles. Look for dedicated air holes like the HOMIDEC, a ventilation feature like the Boonatu, or an active deodorizer like the ChooChoo, rather than a solid cabinet front with no airflow feature at all.",
  },
  {
    criterion: "Pair-count claims assume smaller shoes than yours might be",
    explanation:
      "Most \"holds 24 pairs\" style claims on cabinet listings assume small or narrow shoes stacked close together. A household with men's size 10+ shoes or boots should plan on fewer real pairs than advertised and size up a compartment tier to compensate.",
  },
  {
    criterion: "Anti-tip hardware is mandatory above roughly 38 inches",
    explanation:
      "Cabinets in this height range, including the BORNOON, Boonatu, and ChooChoo picks, are top-heavy with a flip drawer open, so anti-tipping hardware isn't optional in a household with kids or pets. Confirm the cabinet ships with real anti-tip hardware, not just a wider decorative base, before buying.",
  },
  {
    criterion: "Matching white and black finishes let you match existing furniture",
    explanation:
      "Several cabinets in this list, including the BORNOON and Homleke farmhouse pairs, come in matching white and black builds with identical dimensions and hardware. Picking by finish rather than spec sheet is reasonable here since the underlying cabinet is functionally the same.",
  },
  {
    criterion: "Board grade affects how a cabinet holds up over years, not just months",
    explanation:
      "P2-grade engineered wood, like the Boonatu, is a higher board grade than standard engineered wood and holds screws and hinges better over repeated flip-drawer use. If you plan to keep the cabinet long-term, board grade is worth checking beyond just the finish color.",
  },
  {
    criterion: "An active deodorizer is a different tool than passive ventilation",
    explanation:
      "Passive vents and air holes rely on ambient airflow, while an active deodorizer like the ChooChoo's 4-mode system actively treats the air inside the cabinet. If odor control is your top priority over capacity or finish, the active option is worth the tradeoff in pair count.",
  },
];

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Finish and Design Style",
    intro:
      "This guide leans into cabinetry details since buyers searching for a shoe rack cabinet generally want a piece that reads as real furniture, not a bare organizer.",
    table: {
      headers: ["Design style", "Finish available", "Best pick"],
      rows: [
        ["Clean modern white", "White", "BORNOON White 3 Flip Drawer"],
        ["Clean modern black", "Black", "BORNOON Black 3 Flip Drawer"],
        ["Farmhouse barn door", "White", "Homleke Barn Door White"],
        ["Farmhouse with more shelves", "Black", "Homleke Farmhouse Barn Door Black"],
        ["Design-forward hardware", "Wood tone", "QIVOMIX with rose-gold handles"],
      ],
    },
  },
  {
    subheading: "Ventilation and Odor Control",
    intro:
      "A sealed cabinet with no airflow feature is one of the most common reasons a shoe rack cabinet starts to smell after months of daily use.",
    table: {
      headers: ["Ventilation approach", "Picks that have it", "Best for"],
      rows: [
        ["Active deodorizer (4 modes)", "ChooChoo Deodorizer Flip Cabinet", "Buyers prioritizing odor control above all else"],
        ["Dedicated air circulation holes", "HOMIDEC 6-Tier Plastic Cabinet", "Best passive ventilation at the lowest price"],
        ["Built-in ventilation feature", "Boonatu White 3 Flip Drawer", "Ventilation plus fast assembly"],
        ["No dedicated ventilation feature", "BORNOON, QIVOMIX, Homleke pairs", "Air shoes out before storing, crack the door periodically"],
      ],
    },
    note: "If you choose a cabinet with no built-in ventilation feature, let shoes dry fully before closing them in to avoid lingering odor.",
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Budget", "What you get", "Best pick"],
      rows: [
        ["Under $40", "Ventilated plastic cabinet", "HOMIDEC 6-Tier Plastic Cabinet"],
        ["$80-$100", "Wood cabinet with a design detail or farmhouse styling", "QIVOMIX, Homleke White or Black"],
        ["$100+", "Highest-rated flip-drawer wood cabinet, fastest assembly, or active deodorizer", "BORNOON White or Black, Boonatu, ChooChoo"],
      ],
    },
  },
  {
    subheading: "By How Fast You Want It Assembled",
    cards: [
      {
        label: "Want the cabinet built and in use the same day",
        text: "The Boonatu's 20-minute assembly is the fastest among the multi-drawer cabinets in this list.",
      },
      {
        label: "Don't mind a longer build for the best rating",
        text: "The BORNOON White or Black cabinets take longer to assemble but carry the highest rating in this list.",
      },
      {
        label: "Want the simplest possible cabinet build",
        text: "The HOMIDEC's plastic-and-wire construction with ABS connectors is a quicker, lighter assembly than the wood flip-drawer cabinets.",
      },
    ],
  },
  {
    subheading: "Stability Reality Check for Tall Cabinets",
    intro:
      "Every cabinet at 38 inches or taller in this list ships with anti-tipping hardware, and it should be installed, not left in the box, especially with kids or pets around.",
    table: {
      headers: ["Pick", "Height", "Stability feature"],
      rows: [
        ["Homleke Farmhouse Barn Door Black", "38.6\"", "Anti-tipping hardware, tapered legs"],
        ["ChooChoo Deodorizer Flip Cabinet", "42.9\"", "Anti-tipping hardware"],
        ["Boonatu White 3 Flip Drawer", "47.2\"", "Anti-tip hardware, adjustable dividers"],
        ["BORNOON White / Black 3 Flip Drawer", "47.24\"", "Anti-tipping hardware, adjustable panels"],
      ],
    },
    note: "Verify anti-tip hardware is actually in the box before assembly, especially on any cabinet at 42 inches or taller.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "Do shoe rack cabinets need ventilation, or is a sealed door fine?",
    a: "A sealed door with no airflow feature at all is a common cause of lingering odor, since shoes often go into storage still damp. Look for a dedicated ventilation feature like the HOMIDEC's air circulation holes or the Boonatu's built-in vent, or consider an active deodorizer like the ChooChoo if odor control is your top priority.",
  },
  {
    q: "Which shoe rack cabinet has the highest rating?",
    a: "The BORNOON cabinets, in both white and black, are the highest-rated picks in this list at 4.7 stars across nearly 2,000 ratings each. Both use the same FSC-certified engineered wood build and differ only in finish.",
  },
  {
    q: "Do these cabinets come in matching white and black options?",
    a: "Yes, two pairs in this list are available in matching finishes with identical dimensions and hardware: the BORNOON White and Black 3 Flip Drawer cabinets, and the Homleke farmhouse-style White Barn Door and Black Flip Drawer cabinets.",
  },
  {
    q: "How many pairs of shoes will a cabinet actually hold?",
    a: "Usually fewer than the listed number if your household wears larger shoes, since advertised pair counts typically assume small or narrow shoes stacked close together. A household with men's size 10+ shoes or boots should size up a compartment tier and expect somewhat fewer pairs than the top of the advertised range.",
  },
  {
    q: "Is an active deodorizer better than a cabinet with air holes?",
    a: "They solve the same odor problem differently. Passive air holes, like the HOMIDEC's, rely on ambient airflow through the cabinet, while an active deodorizer, like the ChooChoo's 4-mode system, actively treats the air inside. If odor control matters more to you than pair capacity, the active option is worth the tradeoff.",
  },
  {
    q: "Do tall shoe cabinets need to be anchored?",
    a: "Every cabinet in this list at roughly 38 inches or taller ships with anti-tipping hardware, and it should be installed rather than skipped, especially in a household with kids or pets. Confirm the hardware is actually included in the box before assembling any cabinet in that height range.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-shoe-rack-with-doors", title: "Best Shoe Racks with Doors (2026)" },
  { href: "/guide/best-rolling-carts-with-drawers", title: "Best Rolling Carts with Drawers (2026)" },
  { href: "/guide/best-printer-stands-with-storage", title: "Best Printer Stands with Storage (2026)" },
];
