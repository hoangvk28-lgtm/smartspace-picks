export const guideSlug = "best-electric-kettles-under-20";
export const guideTitle = "5 Best Electric Kettles Under $20 in 2026";
export const metaTitle = "Best Electric Kettles Under $20 in 2026";
export const metaDescription = "Five electric kettles under $20, from a 1.7L fast boiler to 600W travel kettles, compared on wattage, auto shut-off, water-contact materials and size.";
export const mainKeyword = "electric kettle under $20";
export const introParagraphs = [
  "A good electric kettle can cost less than a takeout lunch, but at this price the details that matter are easy to miss: whether the inside is really stainless, how many watts it draws and whether it shuts itself off when it boils or runs dry. Two kettles with the same size can behave very differently.",
  "We compared five picks that ranged from a 0.5 liter mini kettle to a 1.7 liter jug, looking at the listed wattage, capacity, auto shut-off wording and the materials that touch the water. Dorm and office rules on heating appliances vary, so check yours before plugging any of them in. Prices change often."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31aehFGzrgL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-electric-kettles-under-20-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Proctor Silex 1L 1000W Electric Kettle",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aehFGzrgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00023XCWS?tag=deskfinds0d-20",
    "description": "Proctor Silex is a 1 liter kettle rated at 1000 watts, with auto shut-off at boil, boil-dry protection, dual water windows and a detachable cord. The switch lights up when it is on, and the lid opens with a pull-up handle.\n\nIt states both its wattage and capacity, and at 1000 watts it has the highest rated power in this group, so it should boil faster than the 600 watt travel kettles below. Compared with Elite Gourmet, it holds less but states more of its specs.\n\nChoose it for a desk, dorm or small kitchen where you need two to four cups. The caveat is that the listing does not say what the interior is made of, so check the listing images before assuming it is stainless.",
    "specs": [
      "1000W, 1 liter",
      "Auto shut-off, boil-dry protection",
      "Detachable cord"
    ],
    "pros": [
      "States wattage and capacity clearly",
      "Boil-dry protection included",
      "Detachable cord for serving",
      "Dual water windows"
    ],
    "cons": [
      "Interior material not stated",
      "Mid-range size only"
    ],
    "bestFor": "Dorm desks and offices"
  },
  {
    "id": "best-electric-kettles-under-20-2",
    "rank": 2,
    "badge": "Best Large Capacity",
    "name": "Elite Gourmet EKT5051 1.7L Electric Kettle",
    "price": "$14.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sBN01ct7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G19VFPJ7?tag=deskfinds0d-20",
    "description": "Elite Gourmet is a 1.7 liter kettle with a 360 degree swivel base, a clear water level window, a mesh filter and an automatic shut-off at boil. The listing calls it BPA-free and says two cups boil in two minutes or less.\n\nIt is the lowest priced pick at under $15 and holds the most water, but unlike Proctor Silex above it does not state wattage or boil-dry protection in the features we reviewed. A 1.7 liter jug is more than one person needs at a desk.\n\nA good choice for a shared kitchen or a family. The caveat is that BPA-free does not mean plastic-free, so the water may touch plastic parts.",
    "specs": [
      "1.7 liter capacity",
      "360 degree swivel base",
      "BPA-free, mesh filter"
    ],
    "pros": [
      "Lowest price in this guide",
      "Biggest capacity",
      "Cordless pouring",
      "Clear water level window"
    ],
    "cons": [
      "Wattage not stated",
      "Water may touch plastic"
    ],
    "bestFor": "Shared kitchens"
  },
  {
    "id": "best-electric-kettles-under-20-3",
    "rank": 3,
    "badge": "Best Stainless Travel Kettle",
    "name": "Wdcme 0.8L Double Wall Travel Kettle",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NoIREif-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HDBRN3QZ?tag=deskfinds0d-20",
    "description": "Wdcme is a 0.8 liter travel kettle at 600 watts with a double wall anti-scald body, a 304 stainless steel inner pot and a seamless interior. The listing says it has auto shut-off and boil-dry protection and boils in about five minutes.\n\nCompared with Tanannbay, it holds more water and states the 304 stainless inner more clearly, but it costs a dollar more. Against Proctor Silex it boils slower because of the lower wattage.\n\nBest for a dorm room where a low wattage kettle is safer for the circuit. The caveat is the five minute boil, which feels slow when you are in a hurry.",
    "specs": [
      "600W, 0.8 liter",
      "304 stainless steel inner",
      "Double wall body"
    ],
    "pros": [
      "Double wall stays cooler to touch",
      "Low wattage suits strict dorms",
      "Stainless inside, no plastic contact",
      "Fits in a suitcase"
    ],
    "cons": [
      "Five minute boil",
      "Smaller than a full kettle"
    ],
    "bestFor": "Low wattage dorm rooms"
  },
  {
    "id": "best-electric-kettles-under-20-4",
    "rank": 4,
    "badge": "Best Mini Kettle",
    "name": "Tanannbay 0.5L Stainless Mini Kettle",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Y1sz7BJvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDPZPS3F?tag=deskfinds0d-20",
    "description": "Tanannbay is a 0.5 liter kettle at 600 watts, with 304 stainless steel, a double wall body, a steam switch and boil-dry protection. The listing suits it for two or three people and says it boils in about five minutes.\n\nIt is a dollar cheaper than Wdcme and holds about 40 percent less, which is the tradeoff. It is the smallest kettle here and ideal when you only need a mug or two.\n\nPerfect for a single person with limited desk space. The caveat is capacity, since 0.5 liters is about two mugs.",
    "specs": [
      "600W, 0.5 liter",
      "304 stainless steel",
      "Double wall, boil-dry protection"
    ],
    "pros": [
      "Smallest footprint",
      "Stainless water contact",
      "Cheaper than Wdcme",
      "Easy to carry"
    ],
    "cons": [
      "Only about two mugs",
      "Slow five minute boil"
    ],
    "bestFor": "One person, tiny desk"
  },
  {
    "id": "best-electric-kettles-under-20-5",
    "rank": 5,
    "badge": "Best Collapsible",
    "name": "resgitiati Collapsible Silicone Travel Kettle",
    "price": "$15.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31h66r40HlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNP12RYR?tag=deskfinds0d-20",
    "description": "This collapsible kettle is made from food grade silicone and 304 stainless steel, with a one button switch, an anti-spill spout, a detachable power cord and auto shut-off. It folds flat for storage.\n\nIt costs under $20 and takes the least room to store, unlike the rigid kettles above. The tradeoff is that hot water touches silicone, and the listing does not give wattage or capacity in the features we reviewed.\n\nBest for camping or a tiny dorm closet. The caveat is the missing specs, so check wattage and voltage before using it.",
    "specs": [
      "Foldable silicone body",
      "304 stainless steel base",
      "Auto shut-off, detachable cord"
    ],
    "pros": [
      "Folds flat for storage",
      "Detachable power cord",
      "Anti-spill spout",
      "One button operation"
    ],
    "cons": [
      "Wattage and capacity not stated",
      "Hot water touches silicone"
    ],
    "bestFor": "Small closets and travel"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Wattage and boil time",
    "explanation": "Wattage is how much power the kettle draws, and it sets how quickly water boils. A 600 watt kettle boils about 0.5 to 0.8 liters in around five minutes, while a 1000 watt model boils one liter faster. Look for the watts in the title or specs, not just the word fast. A 600W mini kettle can take close to double the time of a 1000W model for the same water, so check the wattage in the title before judging speed."
  },
  {
    "criterion": "Auto shut-off and boil-dry protection",
    "explanation": "Auto shut-off turns the kettle off when it reaches a boil, and boil-dry protection cuts power if it runs empty. Both are important for a kettle left in a dorm or office. Look for both phrases in the bullets, since some listings name only one. Auto shut-off stops at the boil, and boil-dry protection cuts power when the kettle is empty, so read for both terms, since the Proctor Silex lists both."
  },
  {
    "criterion": "What touches the water",
    "explanation": "BPA-free means no BPA but not no plastic. A kettle with a stainless inner and no plastic lid or spout underside keeps flavors cleaner. Read for words such as 304 stainless steel and look closely at the lid in the photos. A stainless inner like the Wdcme 304 steel body keeps water clean, while a plastic body such as the Elite Gourmet can leave a taste for the first few boils."
  },
  {
    "criterion": "Dorm and office rules",
    "explanation": "Many schools allow only certain heating appliances and some ban kettles outright, while others cap wattage. A low wattage 600 watt kettle may be easier to justify than 1500 watts. Check your housing list before buying. Housing offices can restrict heating appliances, so ask before bringing the 1.7L Elite Gourmet, and choose a 0.5L Tanannbay when space is tight."
  },
  {
    "criterion": "Capacity versus use",
    "explanation": "A 0.5 liter kettle holds about two mugs, while 1.7 liters serves a family. Overfilling a mini kettle risks boil-over. Match capacity to how many cups you make at once. A 0.5L kettle fills about two mugs, and refilling it six times a day speeds up scale, so match size to how many cups you pour at once."
  },
  {
    "criterion": "Cord and base design",
    "explanation": "A 360 degree swivel base and a detachable cord both make serving easier. A short cord limits where you can put it. Look for the base type in the bullets. A 360 degree swivel base like the Elite Gourmet one lets you set the kettle down at any angle, and a short cord makes it hard to place next to an outlet."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Safety shut-off at the lowest price",
    "description": "We checked every listing for auto shut-off and boil-dry protection, because a kettle left on by accident is the main hazard at this price. The Proctor Silex 1L, Tanannbay 0.5L and resgitiati travel kettle all name protections, and a pick with neither was marked down hard."
  },
  {
    "title": "Power versus boil speed",
    "description": "Wattage sets boil time, so we compared 1000W on the Proctor Silex against 600W on the Wdcme and Tanannbay minis. A 600W kettle needs noticeably longer to boil the same water, which only matters if you use it several times a day. We scored speed against typical dorm and desk habits."
  },
  {
    "title": "What touches the water",
    "description": "BPA-free is not the same as plastic-free, so we noted the 304 stainless inner on the Wdcme, Tanannbay and resgitiati base, and the BPA-free plastic body of the Elite Gourmet EKT5051 with a mesh filter. Stainless contact tastes cleaner after months of use."
  },
  {
    "title": "Capacity against desk space",
    "description": "Capacity runs from 0.5L on the Tanannbay to 1.7L on the Elite Gourmet. A 0.5L kettle holds about two mugs, and the foldable resgitiati stores flat for a drawer. We weighed whether each size suits one person, a roommate pair or a travel bag."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Capacity Needed",
    "intro": "How much water you boil decides the right size.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "One mug at a time",
          "Tanannbay 0.5L Stainless Mini Kettle"
        ],
        [
          "Two to three mugs",
          "Wdcme 0.8L Double Wall Travel Kettle"
        ],
        [
          "Up to a liter, faster boil",
          "Proctor Silex 1L 1000W Electric Kettle"
        ],
        [
          "Multiple cups for a household",
          "Elite Gourmet EKT5051 1.7L Electric Kettle"
        ],
        [
          "Folding into a drawer",
          "resgitiati Collapsible Silicone Travel Kettle"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "$14 to $15",
          "Elite Gourmet EKT5051 1.7L Electric Kettle"
        ],
        [
          "$15 to $16",
          "resgitiati Collapsible Silicone Travel Kettle"
        ],
        [
          "$16 to $17",
          "Proctor Silex 1L 1000W Electric Kettle"
        ],
        [
          "$18 to $19",
          "Tanannbay 0.5L Stainless Mini Kettle"
        ],
        [
          "$19 to $20",
          "Wdcme 0.8L Double Wall Travel Kettle"
        ]
      ]
    }
  },
  {
    "subheading": "Stainless vs BPA-Free Plastic",
    "cards": [
      {
        "label": "Stainless inner",
        "text": "Stainless steel touches the water and keeps flavors cleaner. In this guide that is Wdcme 0.8L Double Wall Travel Kettle and Tanannbay 0.5L Stainless Mini Kettle."
      },
      {
        "label": "BPA-free plastic body",
        "text": "Plastic bodies are lighter and cheaper but may touch water. That is Elite Gourmet EKT5051 1.7L Electric Kettle and Proctor Silex 1L 1000W Electric Kettle (material not stated)."
      }
    ],
    "note": "Most buyers who care about taste should choose a stainless interior."
  },
  {
    "subheading": "Wattage Limits",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Strict low wattage dorm",
          "Wdcme 0.8L Double Wall Travel Kettle"
        ],
        [
          "Under 700W only",
          "Tanannbay 0.5L Stainless Mini Kettle"
        ],
        [
          "Fastest boil among the five",
          "Proctor Silex 1L 1000W Electric Kettle"
        ],
        [
          "Wattage not a concern",
          "Elite Gourmet EKT5051 1.7L Electric Kettle"
        ]
      ]
    }
  },
  {
    "subheading": "For Dorm Rooms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Low wattage, auto shut-off, boil-dry protection and a small footprint."
      },
      {
        "label": "In this comparison",
        "text": "Wdcme 0.8L Double Wall Travel Kettle lists 600W, auto shut-off and boil-dry protection, and Tanannbay 0.5L Stainless Mini Kettle does as well. Confirm the school's kettle rules first."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a bigger capacity or faster boil. Elite Gourmet EKT5051 1.7L Electric Kettle and Proctor Silex 1L 1000W Electric Kettle cost under $17 and cover more."
      },
      {
        "label": "Save if",
        "text": "You only need a mug of water. Tanannbay 0.5L Stainless Mini Kettle at under $20 is small and enough."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Are electric kettles allowed in dorms?",
    "a": "Many schools allow them, but some ban any heating appliance, so check the prohibited items list. The Tanannbay 0.5L and Wdcme 0.8L at 600W draw less than the Proctor Silex 1L at 1000W, which matters on shared dorm circuits."
  },
  {
    "q": "How long does a 600 watt kettle take to boil?",
    "a": "The two 600 watt listings here, the Wdcme and Tanannbay, say about five minutes for their capacity. A full pot of a bigger, higher-wattage kettle like the Proctor Silex 1000W boils faster per liter."
  },
  {
    "q": "Is a double wall kettle safer?",
    "a": "The outer wall stays cooler, which helps against scalds, but the lid and spout still get hot. The Wdcme and Tanannbay both use double wall bodies, so lift by the handle and keep the spout pointed away."
  },
  {
    "q": "Can I descale a cheap kettle?",
    "a": "Yes. Boil a mix of water and white vinegar or citric acid, then rinse well. Do it monthly in hard water. The Elite Gourmet EKT5051 has a mesh filter that also catches loose flakes."
  },
  {
    "q": "Is a collapsible kettle durable?",
    "a": "The resgitiati Collapsible Silicone Travel Kettle flexes, but silicone wears over time. Treat the 304 stainless steel base carefully and never fill past the line, and keep it as a travel kettle, not a daily one."
  },
  {
    "q": "Does BPA-free mean plastic-free?",
    "a": "No. BPA-free plastic is still plastic. If you want no plastic touching hot water, look for a stainless interior, as on the Wdcme and Tanannbay 304 stainless models, rather than the BPA-free Elite Gourmet."
  }
];

export const relatedGuides = [
  {
    "href": "/guide/best-electric-kettles-for-office",
    "title": "Best Electric Kettles for the Office"
  },
  {
    "href": "/guide/best-electric-kettles-for-dorm",
    "title": "Best Electric Kettles for Dorm Rooms"
  },
  {
    "href": "/guide/best-electric-kettles-with-temperature-control",
    "title": "Best Temperature Control Kettles"
  }
];
