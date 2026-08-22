export const guideSlug = "best-nightstand-3-drawer";
export const guideTitle = "8 Best 3-Drawer Nightstands in 2026";
export const metaTitle = "Best 3-Drawer Nightstands in 2026 (LED, USB-C, and Certified Picks)";
export const metaDescription =
  "8 best 3-drawer nightstands in 2026, from certified LED charging models to a 110 lb-capacity wide pick. Compare height, ports, and weight capacity.";
export const mainKeyword = "3 drawer nightstand";
export const introParagraphs = [
  "A 3-drawer nightstand gives you more sorting space than a single-drawer table, but drawer count alone doesn't tell you whether a unit is safe to plug a phone charger into overnight, tall enough for your mattress, or sturdy enough for a stack of real books. Height, weight capacity, and electrical certification vary more between these picks than the drawer count does.",
  "Below are 8 3-drawer nightstands we evaluated on height range, drawer and shelf capacity, charging port quality, and build material, ranging from a $39.99 budget pick to a $249.99 set of two with a premium paint finish.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51fItpM0d4L._SL500_.jpg";

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
    id: "huuger-3-drawer-rustic-brown-usb-c",
    rank: 1,
    badge: "Best-Selling",
    name: "Huuger 3-Drawer Rustic Brown Nightstand with USB-C",
    price: "$42.99",
    rating: "4.5",
    reviews: "8,582",
    imageUrl: "https://m.media-amazon.com/images/I/51fItpM0d4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJMBZ6GJ?tag=deskfinds0d-20",
    description:
      "The Huuger 3-Drawer pairs P2 particleboard with a powder-coated steel frame, giving it three fabric drawers plus an open shelf at a mid-range 27.6\" height. A patent-pending drawer slide keeps the fabric bins running smoothly even when loaded.\n\nIt includes 2 AC outlets, 1 USB-A, and 1 USB-C port built into the side panel, and the top surface resists stains from spilled water or coffee. Its balance of height, storage, and charging makes it the most broadly practical pick in this list.\n\nUSB-C port alongside USB-A and AC outlets. That's a real strength, but weigh it against the flip side: no electrical safety certification listed.",
    specs: [
      "15.7\"W x 11.8\"D x 27.6\"H",
      "P2 particleboard + powder-coated steel",
      "3 fabric drawers + 1 open shelf",
      "2 AC outlets + 1 USB-A + 1 USB-C",
      "Stain-resistant top, patent-pending drawer slide",
    ],
    pros: [
      "Balanced 27.6\" height fits most standard beds",
      "USB-C port alongside USB-A and AC outlets",
      "Stain-resistant top surface",
      "Smooth patent-pending drawer slides",
    ],
    cons: [
      "No electrical safety certification listed",
      "Particleboard construction, not solid wood",
      "Open shelf adds dust-collecting surface",
    ],
    bestFor: "Buyers who want the most broadly proven all-around 3-drawer pick",
  },
  {
    id: "yoobure-3-drawer-white-led-fcc-etl",
    rank: 2,
    badge: "Most Certified / Safest",
    name: "Yoobure 3-Drawer White Nightstand with 16-Color LED, FCC & ETL Certified",
    price: "$41.99",
    rating: "4.5",
    reviews: "365",
    imageUrl: "https://m.media-amazon.com/images/I/31ApseNQRQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLNZFYMN?tag=deskfinds0d-20",
    description:
      "The Yoobure is the only pick in this list with both FCC and ETL certification on its electrical components, the kind of tested overcurrent, overvoltage, and short-circuit protection worth checking for on any nightstand you plan to charge a phone on overnight. An X-bar support frame keeps the wood board and metal build steady.\n\nBeyond safety, it adds 16 RGB colors and 22 lighting modes controllable by app or remote, plus 2 AC outlets and 2 USB ports. Adjustable feet help it sit level on uneven flooring.\n\nWorth calling out specifically: 16 RGB colors and 22 lighting modes. The catch is smaller review sample than the best-selling pick.",
    specs: [
      "15.4\"W x 11.8\"D x 25.6\"H",
      "Wood board + metal frame + fabric drawers",
      "FCC & ETL certified electrical components",
      "16 RGB colors, 22 modes, app/remote control",
      "2 AC outlets + 2 USB, X-bar support frame, adjustable feet",
    ],
    pros: [
      "Only FCC & ETL certified pick in this list",
      "16 RGB colors and 22 lighting modes",
      "X-bar frame adds structural stability",
      "Adjustable feet for uneven floors",
    ],
    cons: [
      "Smaller review sample than the best-selling pick",
      "25.6\" height suits lower beds, not raised ones",
      "Wood board is not solid hardwood",
    ],
    bestFor: "Buyers who want a certified, tested electrical charging nightstand",
  },
  {
    id: "furnulem-3-drawer-rustic-brown-3-ways",
    rank: 3,
    badge: "Most Versatile Install",
    name: "Furnulem 3-Drawer Rustic Brown Nightstand with 3-Way Charging Install",
    price: "$39.99",
    rating: "4.5",
    reviews: "1,906",
    imageUrl: "https://m.media-amazon.com/images/I/41AszYuX1SL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2VQVH6N?tag=deskfinds0d-20",
    description:
      "The Furnulem stands 28.3\" tall, tall enough to pair with beds that use a box spring or a thick mattress topper, and it's the only pick in this list that lets you install the charging unit three different ways: front-facing, back-facing, or left off entirely. That flexibility matters if your outlet placement or cord routing is awkward.\n\nParticleboard and a metal frame support 3 fabric drawers, 2 AC outlets, and 2 USB ports, and an anti-toppling device is included for extra stability at this height.\n\nTallest budget-tier pick at 28.3\". Set against that, no electrical safety certification listed. Both matter when comparing it to the other picks here.",
    specs: [
      "15.74\"W x 11.5\"D x 28.3\"H",
      "Particleboard + metal frame",
      "3 fabric drawers",
      "2 AC outlets + 2 USB, 3-way charging unit install",
      "Anti-toppling device included",
    ],
    pros: [
      "Only pick with 3 install options for the charging unit",
      "Tallest budget-tier pick at 28.3\"",
      "Anti-toppling device included",
      "Strong 1,906-rating track record",
    ],
    cons: [
      "No electrical safety certification listed",
      "Particleboard build, not solid wood",
      "Rustic brown finish only, no alternate colors",
    ],
    bestFor: "Buyers who need flexible charging-unit placement around an awkward outlet",
  },
  {
    id: "songmics-bellah-3-drawer-white-5-ports",
    rank: 4,
    badge: "Most Ports",
    name: "SONGMICS BELLAH 3-Drawer White Nightstand with 5 Charging Ports",
    price: "$39.99",
    rating: "4.4",
    reviews: "1,461",
    imageUrl: "https://m.media-amazon.com/images/I/31-wHgmqbjL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FL1QKM11?tag=deskfinds0d-20",
    description:
      "At 29.9\" tall, the SONGMICS BELLAH is the tallest nightstand in this entire list, built to match beds with a box spring or a raised mattress setup. Particleboard, steel, and a PVC leather finish combine for a sturdier, higher-capacity frame than most particleboard-only competitors, rated for 66 lbs.\n\nIt also has the most charging ports here, 2 AC outlets, 2 USB-A, and 1 USB-C, plus app-controlled LED with music sync. An anti-tip kit is included given its height.\n\nA genuine advantage here is that most charging ports at 5 total, including USB-C. The tradeoff is no electrical safety certification listed.",
    specs: [
      "15.6\"W x 11.8\"D x 29.9\"H (tallest in this list)",
      "Particleboard + steel + PVC leather",
      "3 drawers + 1 open shelf",
      "2 AC + 2 USB-A + 1 USB-C (5 ports, most in this list)",
      "App-controlled LED music sync, anti-tip kit, 66 lb capacity",
    ],
    pros: [
      "Tallest pick in this list at 29.9\"",
      "Most charging ports at 5 total, including USB-C",
      "66 lb capacity higher than plain particleboard units",
      "App-controlled LED with music sync",
    ],
    cons: [
      "No electrical safety certification listed",
      "Too tall for low platform beds",
      "PVC leather finish shows wear differently than wood",
    ],
    bestFor: "Buyers with a raised bed who need the most charging ports available",
  },
  {
    id: "lazzanto-3-drawer-black-led-voice",
    rank: 5,
    badge: "Smartest LED",
    name: "Lazzanto 3-Drawer Black Nightstand with Voice-Sync LED",
    price: "$50.39",
    rating: "4.4",
    reviews: "2,493",
    imageUrl: "https://m.media-amazon.com/images/I/41rwL5XOy0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DB1CWRKW?tag=deskfinds0d-20",
    description:
      "The Lazzanto in black runs the most capable LED control system in this list, with voice, app, timer, and music-sync modes rather than just a basic color cycle. Particleboard and metal frame the 3 fabric drawers, and rounded corners cut down on bumped-shin incidents in a dark bedroom.\n\nAt 29.4\" tall it suits raised beds, and it carries a 50 lb capacity rating, the highest explicitly rated capacity among the standard-width picks here. A water-resistant tabletop rounds out the build.\n\n50 lb capacity, highest among standard-width picks. On the other hand, no electrical safety certification listed. Neither should be a surprise once you know to look for it.",
    specs: [
      "15.6\"W x 11.4\"D x 29.4\"H",
      "Particleboard + metal frame",
      "3 fabric drawers",
      "2 AC + 2 USB, LED voice/app/timer/music sync",
      "Water-resistant top, rounded corners, 50 lb capacity",
    ],
    pros: [
      "Most capable LED control (voice, app, timer, music sync)",
      "50 lb capacity, highest among standard-width picks",
      "Rounded corners for safety",
      "Tall 29.4\" height suits raised beds",
    ],
    cons: [
      "No electrical safety certification listed",
      "Black finish shows dust more visibly",
      "Same price point as certified alternatives",
    ],
    bestFor: "Buyers who want the most advanced LED lighting controls",
  },
  {
    id: "lazzanto-3-drawer-white-led-voice",
    rank: 6,
    badge: "Smartest LED (White)",
    name: "Lazzanto 3-Drawer White Nightstand with Voice-Sync LED",
    price: "$56.69",
    rating: "4.4",
    reviews: "2,493",
    imageUrl: "https://m.media-amazon.com/images/I/31YBCOBtEBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DB1CJVMS?tag=deskfinds0d-20",
    description:
      "This is the white version of the Lazzanto above, with identical specs down to the 50 lb capacity rating and the same voice, app, timer, and music-sync LED modes. It exists mainly for buyers who want the same feature set in a lighter finish to match a white bedroom set.\n\nParticleboard and metal construction, a water-resistant tabletop, and rounded corners carry over unchanged, along with 2 AC outlets and 2 USB ports for overnight charging.\n\n50 lb capacity. That's a real strength, but weigh it against the flip side: priced higher than the black version for the same specs.",
    specs: [
      "15.6\"W x 11.4\"D x 29.4\"H",
      "Particleboard + metal frame",
      "3 fabric drawers",
      "2 AC + 2 USB, LED voice/app/timer/music sync",
      "Water-resistant top, rounded corners, 50 lb capacity",
    ],
    pros: [
      "Same advanced LED control as the black Lazzanto",
      "50 lb capacity",
      "White finish matches lighter bedroom sets",
      "Water-resistant tabletop",
    ],
    cons: [
      "Priced higher than the black version for the same specs",
      "No electrical safety certification listed",
      "White finish shows scuffs more than dark finishes",
    ],
    bestFor: "Buyers who want the Lazzanto's smart LED features in white",
  },
  {
    id: "wlive-tall-3-drawer-espresso-wide",
    rank: 7,
    badge: "Widest & Highest Capacity",
    name: "WLIVE Tall 3-Drawer Espresso Nightstand, 22.99\" Wide",
    price: "$99.99",
    rating: "4.5",
    reviews: "381",
    imageUrl: "https://m.media-amazon.com/images/I/41L43wI7O6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP64LYTG?tag=deskfinds0d-20",
    description:
      "The WLIVE Tall is built wider and deeper than every other pick here, at 22.99\" wide with 13.78\"-deep drawers, giving it noticeably more usable storage per drawer than the standard 15-16\" wide nightstands in this list. Engineered wood construction is rated for 110 lbs, the highest capacity in this entire guide.\n\nAt 29.06\" tall it works with raised beds, and it includes 2 AC outlets and 2 USB ports along with a waterproof top and smooth metal drawer glides. The extra footprint means it needs more floor space than the compact picks.\n\nWorth calling out specifically: widest footprint and deepest drawers for more storage. The catch is most expensive single-unit pick in this list.",
    specs: [
      "22.99\"W x 15.59\"D x 29.06\"H (widest in this list)",
      "Engineered wood",
      "3 drawers, 13.78\" drawer depth (deepest in this list)",
      "2 AC + 2 USB, waterproof top",
      "110 lb capacity (highest in this list), smooth metal glides",
    ],
    pros: [
      "Highest weight capacity in this list at 110 lbs",
      "Widest footprint and deepest drawers for more storage",
      "Waterproof top surface",
      "Smooth metal drawer glides",
    ],
    cons: [
      "Most expensive single-unit pick in this list",
      "Wide footprint needs more bedroom floor space",
      "Smaller review sample than the top sellers",
    ],
    bestFor: "Buyers who want maximum drawer capacity and don't mind a larger footprint",
  },
  {
    id: "huuger-paint-3-drawer-set-of-2",
    rank: 8,
    badge: "Best Set of 2",
    name: "Huuger Paint 3-Drawer White Nightstand Set of 2",
    price: "$249.99",
    rating: "4.4",
    reviews: "268",
    imageUrl: "https://m.media-amazon.com/images/I/41ETD0+viBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4X6WGN5?tag=deskfinds0d-20",
    description:
      "This is the only set-of-2 pick in this list, giving both sides of the bed a matching nightstand at 23.62\" wide and 23.62\" tall each. Engineered wood with a smooth paint finish and reinforced panels gives it the most premium look and feel here, closer to furniture-store finish quality than the budget particleboard picks.\n\nEach table includes 3 deep drawers along with 2 AC outlets, 1 USB-A, and 1 USB-C port, so both sides of the bed get identical charging access without buying two separate nightstands.\n\nMost premium paint finish and reinforced panels. Set against that, most expensive pick in this list by a wide margin. Both matter when comparing it to the other picks here.",
    specs: [
      "23.62\"W x 15.75\"D x 23.62\"H per table",
      "Engineered wood, smooth paint finish",
      "SET OF 2, 3 deep drawers per table",
      "2 AC + 1 USB-A + 1 USB-C per table",
      "Reinforced panels, most premium finish in this list",
    ],
    pros: [
      "Only matched set-of-2 pick in this list",
      "Most premium paint finish and reinforced panels",
      "Identical charging setup on both sides of the bed",
      "Deep drawers on both tables",
    ],
    cons: [
      "Most expensive pick in this list by a wide margin",
      "23.62\" height suits lower to mid-height beds only",
      "No electrical safety certification listed",
    ],
    bestFor: "Buyers who want a matching pair with a more premium finish",
  },
];

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Height-to-mattress fit",
    description:
      "Compared each nightstand's listed height against standard mattress-top heights, since a nightstand should land within a few inches of the sleeping surface, not the bed frame, to be usable from bed.",
  },
  {
    title: "Electrical safety certification",
    description:
      "Checked listings for FCC, ETL, or UL certification on any built-in charging ports or LED components, since only certified electronics indicate tested overcurrent and short-circuit protection.",
  },
  {
    title: "Drawer and shelf weight capacity",
    description:
      "Compared rated capacity across particleboard, steel-reinforced, and engineered wood builds, since material affects how much a drawer or shelf can realistically hold before sagging.",
  },
  {
    title: "Charging port configuration",
    description:
      "Weighed USB-C availability against plain USB-A-only setups, since most current phones and laptops charge over USB-C and a USB-A-only nightstand is now the less useful configuration.",
  },
  {
    title: "Value for price",
    description:
      "Weighed height, capacity, certification, and included features against price, from the budget picks to the matched set.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a 3 drawer nightstand often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the 3 drawer nightstand holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this 3 drawer nightstand over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any 3 drawer nightstand you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A 3 drawer nightstand that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest average rating",
          "Huuger 3"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Huuger 3"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $40",
          "Furnulem 3"
        ],
        [
          "Up to $250",
          "Huuger Paint 3"
        ]
      ]
    }
  },
  {
    "subheading": "Furnulem 3 vs Huuger Paint 3",
    "cards": [
      {
        "label": "Furnulem 3",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Huuger Paint 3",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Furnulem 3 unless your specific need genuinely calls for the pricier pick's extra headroom."
  },
  {
    "subheading": "By Review Base Confidence",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Largest, most-established review base",
          "Huuger 3"
        ]
      ]
    }
  },
  {
    "subheading": "For a First-Time Buyer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Clear, specific dimensions or capacity and a real, established review history, not just marketing language."
      },
      {
        "label": "In this comparison",
        "text": "Huuger 3 is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Huuger Paint 3's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Furnulem 3 covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "How tall should a 3-drawer nightstand be?",
    a: "It should land within 2-4 inches of your mattress-top height, not your bed frame height. Standard nightstands run 23-28\"H; if your bed uses a box spring or a thick mattress topper, look for a taller pick like the SONGMICS BELLAH at 29.9\"H or the Lazzanto at 29.4\"H instead of a standard-height model.",
  },
  {
    q: "Is it safe to charge my phone overnight on a nightstand?",
    a: "Only if the charging components carry a UL or ETL listing, which confirms tested overcurrent, overvoltage, short-circuit, and over-temperature protection. In this list, the Yoobure 3-Drawer White LED is the only pick with that certification (FCC & ETL); the others include functional charging ports but no listed electrical certification.",
  },
  {
    q: "Do I need USB-C on a nightstand or is USB-A enough?",
    a: "USB-C matters more for most 2026 buyers, since current phones and laptops largely charge over USB-C. A nightstand with only USB-A ports, even several of them, is now the less useful configuration. Picks like the Huuger 3-Drawer, SONGMICS BELLAH, and Huuger Paint Set of 2 all include at least one USB-C port alongside USB-A.",
  },
  {
    q: "How much weight can a 3-drawer nightstand hold?",
    a: "It varies heavily by material. Plain particleboard or MDF units typically cap out around 30-50 lbs per drawer or shelf, while steel-reinforced frames or certified units rate higher. The WLIVE Tall rates highest in this list at 110 lbs, followed by the SONGMICS BELLAH at 66 lbs and the Lazzanto picks at 50 lbs.",
  },
  {
    q: "Should I buy a single 3-drawer nightstand or a matching set of 2?",
    a: "A set gives both sides of the bed identical storage and charging, which looks more intentional in a shared bedroom. The Huuger Paint Set of 2 is the only matched pair in this list; every other pick is sold individually, so buy two of the same model if you want a matching look without paying the set's premium finish price.",
  },
  {
    q: "Why does drawer depth matter beyond drawer count?",
    a: "A 3-drawer nightstand with shallow drawers can hold less than a 2-drawer unit with deep drawers. The WLIVE Tall has the deepest drawers in this list at 13.78\", noticeably more usable space per drawer than the standard 15-16\" wide, shallower picks.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-nightstand-2-drawer", title: "Best 2-Drawer Nightstands (2026)" },
  { href: "/guide/best-nightstand-white", title: "Best White Nightstands (2026)" },
  { href: "/guide/best-charging-stations-for-bedside-table", title: "Best Charging Stations for a Bedside Table (2026)" },
];
