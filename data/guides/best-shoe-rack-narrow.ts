export const guideSlug = "best-shoe-rack-narrow";
export const guideTitle = "8 Best Narrow Shoe Racks in 2026";
export const metaTitle = "Best Narrow Shoe Racks for Small Entryways in 2026";
export const metaDescription =
  "8 best narrow shoe racks in 2026, from an 11.5-inch tower to a tool-free expandable rack. Compare real pair capacity, height, and stability.";
export const mainKeyword = "shoe rack narrow";
export const introParagraphs = [
  "A narrow shoe rack has to solve a floor-space problem, so most of the picks in this list trade width for height, going 8 to 10 tiers tall instead of spreading wide. That tradeoff comes with two catches worth knowing before you buy: the \"pairs\" number on the listing is almost always optimistic, and a tall, narrow tower is inherently less stable than a short, wide one.",
  "Below are 8 narrow shoe racks we evaluated on footprint, real-world pair capacity versus advertised capacity, and stability at height, ranging from a $7.99 stackable 3-tier unit to a 78.7-inch tower with a 100 lb load rating.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41VvCMnbsXL._SL500_.jpg";

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
    id: "autonomier-3-tier-extra-small",
    rank: 1,
    badge: "Narrowest + Cheapest",
    name: "Autonomier 3-Tier Extra Small Shoe Rack",
    price: "$7.99",
    rating: "4.2",
    reviews: "1,664",
    imageUrl: "https://m.media-amazon.com/images/I/41VvCMnbsXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPF32TQ3?tag=deskfinds0d-20",
    description:
      "The Autonomier 3-Tier is the narrowest pick in this entire list at just 16.3 inches wide, small enough to tuck beside a door or into a closet corner most racks can't fit. Metal legs and a non-woven fabric shelf surface keep it lightweight and corrosion-resistant. It's also the cheapest pick here at a budget-friendly price, and it stacks either vertically for more tiers or side-by-side for more width, so you can scale it up later without buying a whole new rack. Worth calling out specifically: cheapest pick in this list. The catch is only 3 tiers, low overall capacity as a standalone unit.",
    specs: [
      "16.3\"W x 10.2\"D x 14.7\"H",
      "Metal frame + non-woven fabric",
      "3 tiers",
      "Stackable vertically or side-by-side",
      "Corrosion-resistant",
    ],
    pros: [
      "Narrowest pick in this list at 16.3\" wide",
      "Cheapest pick in this list at $7.99",
      "Stacks vertically or side-by-side to scale up later",
      "Corrosion-resistant frame",
    ],
    cons: [
      "Only 3 tiers, low overall capacity as a standalone unit",
      "Fabric shelf surface less durable than solid metal",
      "Short height means it won't hold much on its own",
    ],
    bestFor: "The tightest entryway corners and budget-first buyers",
  },
  {
    id: "autonomier-4-tier-extra-small",
    rank: 2,
    badge: "Cheapest Tall",
    name: "Autonomier 4-Tier Extra Small Shoe Rack",
    price: "$8.99",
    rating: "4.2",
    reviews: "2,847",
    imageUrl: "https://m.media-amazon.com/images/I/41+JCePqlmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPF4548R?tag=deskfinds0d-20",
    description:
      "The 4-tier version of the Autonomier keeps the same narrow 16.3-inch footprint as the 3-tier model but adds a fourth shelf and stretches to 21.5 inches tall, giving it more capacity without taking up any more floor space. It's built from the same metal-and-fabric combination and holds up to 22 lbs. It's the cheapest tall option in this list, and like its 3-tier sibling it's fully stackable, so it can grow into a taller tower or a wider side-by-side setup as your shoe collection does. Cheapest tall pick in this list. Set against that, 22 lb capacity is on the low side. Both matter when comparing it to the other picks here.",
    specs: [
      "16.3\"W x 10.2\"D x 21.5\"H",
      "Metal frame + non-woven fabric",
      "4 tiers",
      "22 lb capacity",
      "Stackable, corrosion-resistant",
    ],
    pros: [
      "Same 16.3\" narrow footprint as the 3-tier model with more capacity",
      "Cheapest tall pick in this list at $8.99",
      "Stackable for future expansion",
      "Corrosion-resistant frame",
    ],
    cons: [
      "22 lb capacity is on the low side",
      "Fabric shelves show wear faster than metal ones",
      "Still limited to light everyday shoes rather than boots",
    ],
    bestFor: "Buyers who want a little more capacity than the 3-tier without giving up width",
  },
  {
    id: "enjoybasics-3-tier-expandable",
    rank: 3,
    badge: "Best-Rated Expandable",
    name: "ENJOYBASICS 3-Tier Expandable Shoe Rack",
    price: "$17.99",
    rating: "4.7",
    reviews: "1,843",
    imageUrl: "https://m.media-amazon.com/images/I/41GrZFMJEeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DNQ8VPT7?tag=deskfinds0d-20",
    description:
      "The ENJOYBASICS is the only pick in this list with an adjustable width, sliding from 17.8 inches up to 32.7 inches so it can fit an odd-shaped nook now and expand later if you move to a wider hallway. Tool-free assembly means it snaps together without a screwdriver.\n\nWith a 4.7-star rating across 1,843 reviews, it's also the highest-rated pick in this entire list. The metal frame holds around 12 pairs across its 3 tiers, and the fold-flat width adjustment is genuinely useful for renters who don't know their next entryway's exact dimensions.\n\nA genuine advantage here is that only pick with adjustable width, 17.8\" to 32.7\". The tradeoff is short 17.05\" height limits it to a single low tier of visibility.",
    specs: [
      "Expandable 17.8\"-32.7\"W x 8.9\"D x 17.05\"H",
      "Metal frame",
      "3 tiers",
      "Tool-free assembly",
      "Holds 12 pairs",
    ],
    pros: [
      "Highest-rated pick in this list at 4.7 stars",
      "Only pick with adjustable width, 17.8\" to 32.7\"",
      "Tool-free assembly",
      "Flexible for renters with unknown future floor plans",
    ],
    cons: [
      "Short 17.05\" height limits it to a single low tier of visibility",
      "12-pair capacity is modest at full width",
      "Expandable joints add a bit of wobble versus a fixed frame",
    ],
    bestFor: "Renters or buyers unsure of their exact entryway width",
  },
  {
    id: "lanteful-10-tier-11-5in",
    rank: 4,
    badge: "Narrowest Tall Tower",
    name: "LANTEFUL 10-Tier Shoe Rack (11.5\" Wide)",
    price: "$16.99",
    rating: "4.3",
    reviews: "2,306",
    imageUrl: "https://m.media-amazon.com/images/I/41e7Tu2q8mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BZ42GY8V?tag=deskfinds0d-20",
    description:
      "At just 11.5 inches wide, the LANTEFUL 10-Tier is the narrowest tall tower in this entire list, built to fit a corner most other racks would overhang. Its corner-fit design uses 10 tiers and 5 side hooks to pack in vertical storage without eating up floor space.\n\nBecause it's a 10-tier fabric-and-connector tower, it splits into two separate 5-tier racks if you'd rather run two shorter units side by side. Given the height-to-width ratio here, an anti-tip kit and wall anchor are worth adding, especially in a home with kids or pets.\n\nSplits into two separate 5-tier racks for flexibility. On the other hand, 66.93\" height on an 11.5\" base is top-heavy without extra support. Neither should be a surprise once you know to look for it.",
    specs: [
      "11.5\"W x 11.5\"D x 66.93\"H",
      "Metal frame + non-woven fabric",
      "10 tiers, splits into two 5-tier racks",
      "5 side hooks",
      "Corner-fit design",
    ],
    pros: [
      "Narrowest tall tower in this list at 11.5\" wide",
      "Splits into two separate 5-tier racks for flexibility",
      "Corner-fit design suits awkward entryway shapes",
      "5 side hooks for accessories",
    ],
    cons: [
      "66.93\" height on an 11.5\" base is top-heavy without extra support",
      "Fabric-and-connector build sways more than solid metal at full height",
      "No stated weight capacity per shelf",
    ],
    bestFor: "Corner placements where every inch of width counts",
  },
  {
    id: "lanteful-10-tier-17-7in",
    rank: 5,
    badge: "Most-Reviewed Narrow Tall",
    name: "LANTEFUL 10-Tier Shoe Rack (17.7\" Wide)",
    price: "$15.99",
    rating: "4.6",
    reviews: "17,535",
    imageUrl: "https://m.media-amazon.com/images/I/41WPjwLYDKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTHQH9S8?tag=deskfinds0d-20",
    description:
      "The 17.7-inch-wide version of the LANTEFUL 10-Tier is the most-reviewed pick in this entire list by a wide margin, with over 17,500 ratings behind its 10-tier metal-and-fabric build. It's rated to hold 20-25 pairs and up to 55 lbs, and it splits into two 5-tier racks the same way the narrower version does.\n\nRemember that the 20-25 pair claim assumes small or narrow shoes stacked close together; buyers with men's size 10+ shoes or boots should plan on fewer actual pairs fitting per tier. At 68 inches tall, it's another pick where an anti-tip kit and wall anchor matter, particularly with kids or pets in the house.\n\n55 lb capacity, higher than most narrow fabric racks. That's a real strength, but weigh it against the flip side: advertised 20-25 pair capacity assumes small, closely stacked shoes.",
    specs: [
      "17\"W x 10\"D x 68\"H",
      "Metal frame + non-woven fabric",
      "10 tiers, splits into two 5-tier racks",
      "Holds 20-25 pairs, 55 lb capacity",
      "5 hooks",
    ],
    pros: [
      "Most-reviewed pick in this entire list at 17,535 reviews",
      "55 lb capacity, higher than most narrow fabric racks",
      "Splits into two 5-tier racks",
      "Strong 4.6-star rating at this scale of reviews",
    ],
    cons: [
      "Advertised 20-25 pair capacity assumes small, closely stacked shoes",
      "68\" height needs anti-tip hardware and wall anchoring for safety",
      "Fabric tiers wear faster than solid metal shelving",
    ],
    bestFor: "Buyers who want the most battle-tested narrow tower on the market",
  },
  {
    id: "wexcise-10-tier-11-8in",
    rank: 6,
    badge: "Tallest + Highest Load",
    name: "WEXCISE 10-Tier Shoe Rack",
    price: "$21.99",
    rating: "4.5",
    reviews: "6,129",
    imageUrl: "https://m.media-amazon.com/images/I/41qUcjU9qYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09Q678QVP?tag=deskfinds0d-20",
    description:
      "The WEXCISE 10-Tier is both the tallest pick in this entire list at 78.7 inches and the highest-capacity, rated for 100 lbs total across its metal-and-plastic frame. Five hooks add extra hanging storage along the side.\n\nThat height-and-capacity combination makes this the pick where stability matters most. Load heavier shoes and boots on the bottom tiers to keep the center of gravity low, and treat the anti-tip kit and wall anchor as mandatory rather than optional, especially in households with kids or pets.\n\nWorth calling out specifically: highest weight capacity in this list at 100 lbs. The catch is height demands anti-tip kit and wall anchoring, not optional here.",
    specs: [
      "11.8\"W x 17.1\"D x 78.7\"H",
      "Metal frame + plastic",
      "10 tiers",
      "100 lb capacity (highest in this list)",
      "5 hooks",
    ],
    pros: [
      "Tallest pick in this list at 78.7\"",
      "Highest weight capacity in this list at 100 lbs",
      "Deeper 17.1\" base than most narrow towers, adding some stability",
      "Strong review base at 6,129 ratings",
    ],
    cons: [
      "Height demands anti-tip kit and wall anchoring, not optional here",
      "Heaviest shoes should stay on the bottom tiers only",
      "Bulkier depth than the slimmer 10\"-11.5\" deep picks",
    ],
    bestFor: "Buyers who need maximum capacity and are willing to anchor it properly",
  },
  {
    id: "songmics-metal-8-tier",
    rank: 7,
    badge: "Sturdiest / Best Load-per-Shelf",
    name: "SONGMICS Metal 8-Tier Shoe Rack",
    price: "$39.99",
    rating: "4.5",
    reviews: "1,338",
    imageUrl: "https://m.media-amazon.com/images/I/31SeQgMZQxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTGQK21X?tag=deskfinds0d-20",
    description:
      "The SONGMICS Metal 8-Tier swaps fabric-and-connector construction for thickened powder-coated steel and dense wire shelving, giving it the highest per-shelf load rating among the narrow metal picks in this list at 30 lbs per shelf. Its 1.47 sq ft footprint is also the smallest of any pick here.\n\nFour adjustable feet let it sit level on uneven flooring, and it ships with 2 anti-tip kits already included rather than leaving stability as an afterthought. The open wire shelving also improves airflow around damp shoes, which helps reduce odor and mold buildup compared to fully enclosed fabric tiers.\n\nSmallest floor footprint in this list at 1.47 sq ft. Set against that, pricier than the fabric-tier picks in this list. Both matter when comparing it to the other picks here.",
    specs: [
      "17.6\"W x 12\"D x 50.6\"H",
      "Powder-coated steel + dense wire",
      "8 tiers",
      "30 lb/shelf (highest among narrow metal picks)",
      "1.47 sq ft footprint, 4 adjustable feet, 2 anti-tip kits included",
    ],
    pros: [
      "Highest per-shelf load rating among the metal picks in this list",
      "Smallest floor footprint in this list at 1.47 sq ft",
      "Ships with 2 anti-tip kits included",
      "Open wire shelving improves airflow and reduces odor",
    ],
    cons: [
      "Pricier than the fabric-tier picks in this list",
      "50.6\" height still benefits from wall anchoring with kids or pets",
      "Wire shelving shows less visually finished than solid shelves",
    ],
    bestFor: "Buyers who want a sturdier all-metal build over fabric-and-connector towers",
  },
  {
    id: "vasagle-7-tier-vertical",
    rank: 8,
    badge: "Narrowest Wood Vertical",
    name: "VASAGLE 7-Tier Vertical Shoe Rack",
    price: "$37.84",
    rating: "4.5",
    reviews: "1,173",
    imageUrl: "https://m.media-amazon.com/images/I/31DVfsEpWqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BXK95YKP?tag=deskfinds0d-20",
    description:
      "The VASAGLE 7-Tier is the narrowest wood-construction pick in this entire list at 10.4 inches wide, built from particleboard and engineered wood rather than metal or fabric. Left/right adjustable hooks and a raised back panel add a bit more finished styling than the wire and fabric towers in this list.\n\nEach of its 7 shelves holds up to 22 lbs, and it ships with anti-tip hardware given its 43.5-inch height. It's the pick for buyers who want a narrow footprint but prefer a wood-look finish over exposed metal or fabric.\n\nA genuine advantage here is that 22 lb per-shelf rating across all 7 tiers. The tradeoff is wood construction is heavier to move than metal-and-fabric towers.",
    specs: [
      "10.4\"W x 11.8\"D x 43.5\"H",
      "Particleboard + engineered wood",
      "7 tiers",
      "22 lb/shelf",
      "Left/right adjustable hooks, raised back panel, anti-tip hardware",
    ],
    pros: [
      "Narrowest wood-construction pick in this list at 10.4\" wide",
      "22 lb per-shelf rating across all 7 tiers",
      "Adjustable hooks and raised back panel for a finished look",
      "Anti-tip hardware included",
    ],
    cons: [
      "Wood construction is heavier to move than metal-and-fabric towers",
      "Narrower shelves hold fewer wide shoes per tier",
      "Pricier than the fabric-based narrow picks",
    ],
    bestFor: "Buyers who want a narrow footprint with a wood-look finish",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Real-world footprint",
    description: "Measured width first since that's the entire point of a narrow rack, then cross-checked depth against typical entryway and closet clearances.",
  },
  {
    title: "Advertised vs. realistic pair capacity",
    description: "Compared each listing's stated pair count against shelf width and tier spacing, since narrow racks are the category most prone to optimistic pair claims.",
  },
  {
    title: "Stability at height",
    description: "Weighed base width against overall height for every tall tower in this list, and checked whether anti-tip hardware ships in the box or has to be bought separately.",
  },
  {
    title: "Material and build quality",
    description: "Compared metal, fabric, plastic, and wood construction for how each holds up under repeated daily loading and unloading of shoes.",
  },
  {
    title: "Value for price",
    description: "Weighed capacity, height, and included hardware against price, from the Autonomier 3-tier up to the SONGMICS all-metal build.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a shoe rack narrow often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the shoe rack narrow holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this shoe rack narrow over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any shoe rack narrow you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A shoe rack narrow that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
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
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest average rating",
          "ENJOYBASICS 3"
        ],
        [
          "Largest review base, strongest reliability signal",
          "LANTEFUL 10"
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
          "Under $8",
          "Autonomier 3"
        ],
        [
          "Up to $40",
          "SONGMICS Metal 8"
        ]
      ]
    }
  },
  {
    "subheading": "Autonomier 3 vs SONGMICS Metal 8",
    "cards": [
      {
        "label": "Autonomier 3",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "SONGMICS Metal 8",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Autonomier 3 unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "LANTEFUL 10"
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
        "text": "LANTEFUL 10 is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where SONGMICS Metal 8's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Autonomier 3 covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "How many pairs of shoes will a narrow shoe rack actually hold?",
    a: "Less than the listing usually claims. A 36-inch-wide rack realistically holds 8-10 pairs, and a 30-inch-wide rack more like 6-10 pairs, once you're storing average adult shoes rather than the small, tightly packed shoes most listing photos show. Men's size 10+ shoes and boots reduce the real count further, so measure your own shoes against the shelf width before assuming the advertised number.",
  },
  {
    q: "Are tall narrow shoe racks safe around kids or pets?",
    a: "They can be, but only with anti-tip hardware and, ideally, a wall anchor. Racks in the 38-inch-and-up range, like most of the 10-tier towers in this list, are top-heavy by design, and fabric-and-connector construction sways more at full height than a solid metal frame. Load heavier shoes and boots on the bottom tiers to keep the center of gravity low, and treat the included anti-tip kit as mandatory rather than optional.",
  },
  {
    q: "Which narrow shoe rack is the most stable?",
    a: "The SONGMICS Metal 8-Tier is the sturdiest pick in this list, thanks to its thickened powder-coated steel and dense wire shelving plus 2 included anti-tip kits. For a shorter, lower-risk option, the VASAGLE 7-Tier Vertical tops out at 43.5 inches, well below the 60-78 inch towers elsewhere in this list.",
  },
  {
    q: "Does open shelving really help with shoe odor?",
    a: "Yes. Mesh or open wire shelving lets air circulate around stored shoes, which helps them dry between uses and reduces the odor and mold buildup that fully enclosed fabric tiers are more prone to trap, especially with damp or recently worn shoes.",
  },
  {
    q: "What's the narrowest shoe rack that still holds a real amount?",
    a: "The LANTEFUL 10-Tier at 11.5 inches wide is the narrowest tall option in this list and splits into two 5-tier racks if you'd rather run two shorter units. For a slightly wider but still narrow option, the Autonomier 4-Tier at 16.3 inches wide offers more per-tier surface without much added footprint.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-shoe-rack-on-wheels", title: "Best Shoe Racks on Wheels (2026)" },
  { href: "/guide/best-shoe-rack-5-tier", title: "Best 5-Tier Shoe Racks (2026)" },
  { href: "/guide/best-shoe-rack-entryway", title: "Best Entryway Shoe Racks (2026)" },
];
