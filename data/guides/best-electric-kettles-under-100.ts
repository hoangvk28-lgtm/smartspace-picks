export const guideSlug = "best-electric-kettles-under-100";
export const guideTitle = "6 Best Electric Kettles Under $100 in 2026";
export const metaTitle = "Best Electric Kettles Under $100 in 2026";
export const metaDescription = "Six electric kettles under $100, mixing gooseneck pour-over models and larger temperature-control jugs, compared on presets, wattage and materials.";
export const mainKeyword = "electric kettle under $100";
export const introParagraphs = [
  "Spending up to a hundred dollars on a kettle gets you things a cheap one cannot offer: set temperatures for tea, a keep-warm mode, a spout designed for pour-over and often a stainless steel interior. The right model depends on whether you pour slowly into a dripper or pour fast into a mug.",
  "These six picks split into gooseneck kettles for coffee and larger jug-style kettles with presets. We compared them on listed wattage, capacity, number of presets, water-contact materials and safety features. Prices change often, and dorm rules differ, so check before plugging any of them in."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41wLhtCITgL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-electric-kettles-under-100-1",
    "rank": 1,
    "badge": "Best Gooseneck Overall",
    "name": "Cosori Gooseneck Electric Kettle 0.8L",
    "price": "$61.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wLhtCITgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081LQMXKP?tag=deskfinds0d-20",
    "description": "Cosori is a 0.8 liter gooseneck kettle with 5 temperature presets, a 60 minute keep-warm function and 1200 watts. The listing says the housing, lid and spout are stainless steel, it uses a British STRIX thermostat, and it has boil-dry protection.\n\nIt costs about $2 more than Aiheal and lists a longer keep-warm time than the Ninja's 30 minutes. It has presets but not the one-degree adjustment that Aiheal offers.\n\nChoose it for pour-over coffee and tea at a small desk. The caveat is that 0.8 liters is a small amount for a shared office.",
    "specs": [
      "0.8L, 1200W",
      "5 presets, 60 minute keep warm",
      "Stainless steel body, lid, spout"
    ],
    "pros": [
      "Long 60 minute keep-warm",
      "Spout for steady pour-over",
      "Counterbalanced handle",
      "Stainless contact surfaces"
    ],
    "cons": [
      "Small capacity",
      "Fixed presets"
    ],
    "bestFor": "Pour-over drinkers"
  },
  {
    "id": "best-electric-kettles-under-100-2",
    "rank": 2,
    "badge": "Best Fine Temperature Control",
    "name": "Aiheal Gooseneck Kettle with Stopwatch",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KQulVgIDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B1MLVMY5?tag=deskfinds0d-20",
    "description": "Aiheal is a 0.8 liter gooseneck kettle with 1200 watts, a temperature range of 100 to 212 degrees adjustable by one degree, an LCD, a built-in stopwatch and a 304 stainless inner. The listing says there is no silicone or plastic apart from the temperature sensor.\n\nIt is slightly cheaper than Cosori and offers finer temperature control, though it does not list a keep-warm duration in the features we reviewed. It is more of a coffee tool than a tea jug.\n\nBest for a coffee brewer who wants one-degree control and a timer. The caveat is the missing keep-warm information.",
    "specs": [
      "100 to 212F, 1 degree steps",
      "Built-in stopwatch",
      "304 stainless inner, 1200W"
    ],
    "pros": [
      "One degree temperature steps",
      "Stopwatch on the base",
      "Mute option via button",
      "Stainless inner"
    ],
    "cons": [
      "Keep-warm time not listed",
      "Small 0.8L capacity"
    ],
    "bestFor": "Coffee tinkerers"
  },
  {
    "id": "best-electric-kettles-under-100-3",
    "rank": 3,
    "badge": "Best Larger Gooseneck",
    "name": "INTASTING 0.9L Gooseneck Kettle",
    "price": "$59.45",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oN9WgyBRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F62LMYNY?tag=deskfinds0d-20",
    "description": "INTASTING is a 0.9 liter gooseneck kettle with plus or minus 1 degree temperature control, a stainless interior and a quick heating system. The base adjusts heating power as it nears the target temperature.\n\nIt costs about the same as Aiheal and holds slightly more than Cosori. The features we reviewed do not state wattage or presets.\n\nChoose it for a slightly bigger gooseneck. The caveat is that wattage and keep-warm details are not given.",
    "specs": [
      "0.9 liter capacity",
      "Plus or minus 1F control",
      "Stainless steel interior"
    ],
    "pros": [
      "Slightly larger than rivals",
      "Accurate temperature control",
      "Stainless interior",
      "Precision spout"
    ],
    "cons": [
      "Wattage not listed",
      "Fewer details than Cosori"
    ],
    "bestFor": "A bigger gooseneck"
  },
  {
    "id": "best-electric-kettles-under-100-4",
    "rank": 4,
    "badge": "Best Large Tea Jug",
    "name": "PARIS RHONE 1.7L Temperature Control Kettle",
    "price": "$59.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51m2912nBAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HG1RVH5S?tag=deskfinds0d-20",
    "description": "PARIS RHONE is a 1.7 liter kettle at 1500 watts with six presets: 160 degrees for delicate tea, 175 for green tea, 185 for white tea and 190 for oolong, among others. It uses a British Strix thermostat, 304 stainless steel, a 360 degree swivel base and cord storage.\n\nIt holds roughly twice what the goosenecks hold and costs about the same, but it is not built for slow pour-over. It also draws 1500 watts, which matters in a dorm.\n\nBest for tea drinkers who brew for two or three people. The caveat is the high wattage and the fact that the spout is wide.",
    "specs": [
      "1.7L, 1500W",
      "6 presets, keep-warm setting",
      "304 stainless, swivel base"
    ],
    "pros": [
      "Presets labeled by tea type",
      "Large 1.7 liter capacity",
      "Cord storage under base",
      "Boil-dry protection"
    ],
    "cons": [
      "1500W draw",
      "Not for pour-over"
    ],
    "bestFor": "Tea for several people"
  },
  {
    "id": "best-electric-kettles-under-100-5",
    "rank": 5,
    "badge": "Best Safe Pour Design",
    "name": "Breville BKE700 Soft Top Pure Kettle",
    "price": "$98.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WQtNcJBRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06ZZQMVBK?tag=deskfinds0d-20",
    "description": "Breville is a 57 ounce, about 7 cup kettle with a soft-opening lid that releases steam gradually, dual water windows, a lid release button and an illuminated power button. The listing says materials are free of BPA and the base is cordless with cord storage.\n\nIt does not have temperature presets, unlike every other pick here, so it is a plain boiler. It costs $98, close to the Ninja.\n\nBest for a family that wants a simple, safe boil. The caveat is that there is no temperature control, so green tea will be scalded.",
    "specs": [
      "57 oz, about 7 cups",
      "Soft-opening lid",
      "Dual water windows"
    ],
    "pros": [
      "Soft lid reduces splashes",
      "Dual water windows",
      "Cordless with cord wrap",
      "Simple operation"
    ],
    "cons": [
      "No temperature presets",
      "Priced near $100"
    ],
    "bestFor": "Plain fast boiling"
  },
  {
    "id": "best-electric-kettles-under-100-6",
    "rank": 6,
    "badge": "Best Presets and Hold",
    "name": "Ninja Precision 7-Cup Electric Kettle KT200",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31mv7u7ZGEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B098TQJJJ1?tag=deskfinds0d-20",
    "description": "Ninja's KT200 is a 7 cup kettle with seven one-touch presets for green, white, oolong and black tea, herbal tea, coffee and boil. It can hold temperature for up to 30 minutes, offers manual temperature control and shows a live temperature on an illuminated display. The listing says it boils one cup in as little as 90 seconds.\n\nIt is the most expensive pick at $99.99 and it has more presets than Cosori, but a shorter keep-warm window. It is bigger than the goosenecks.\n\nChoose it for a household with different drinks. The caveat is the price and a bulky body.",
    "specs": [
      "7 one-touch presets",
      "Hold temp up to 30 minutes",
      "Live temperature display"
    ],
    "pros": [
      "Seven presets for different drinks",
      "Fast single cup boil",
      "Manual temperature control",
      "Live temperature display"
    ],
    "cons": [
      "Highest price here",
      "Shorter keep-warm"
    ],
    "bestFor": "Mixed drinks household"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Temperature presets",
    "explanation": "A preset is a button that heats water to a set temperature for a drink. Green tea is commonly brewed near 175 degrees and coffee near 195 to 205, and water at a full boil scalds delicate tea. Look for the exact temperatures, not just the word preset."
  },
  {
    "criterion": "Keep-warm duration",
    "explanation": "Keep warm holds the water at temperature after heating. The listings here run from 30 to 60 minutes, which matters if you brew several cups. Look for the number of minutes, since many kettles do not list it."
  },
  {
    "criterion": "Gooseneck versus standard spout",
    "explanation": "A gooseneck gives slow, controlled flow for pour-over coffee but holds less water. A standard spout pours faster for mugs. Pick based on how you drink."
  },
  {
    "criterion": "Interior and lid materials",
    "explanation": "Stainless interiors and lids keep flavors clean while plastic parts may add taste. Some listings say stainless inside but plastic on the lid. Read the bullets and check the photos."
  },
  {
    "criterion": "Wattage and dorm caps",
    "explanation": "A 1500 watt kettle boils fast but may exceed a school's appliance limit, while a 1200 watt one draws less. Some schools cap appliances at 1000 to 1200 watts, though caps differ by school. Check your housing list and the listed watts before buying."
  },
  {
    "criterion": "Capacity versus footprint",
    "explanation": "A 1.7 liter jug serves several cups but takes a larger base. A 0.8 liter fits a desk. Check the listed capacity."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Temperature control",
    "description": "We compared presets, adjustment steps and keep-warm times."
  },
  {
    "title": "Materials",
    "description": "We looked at stainless versus plastic contact surfaces."
  },
  {
    "title": "Capacity and wattage",
    "description": "Liters and watts were compared as listed."
  },
  {
    "title": "Price",
    "description": "Every pick is under $100 when gathered."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Drink",
    "intro": "Match the kettle to what you brew.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Pour-over coffee",
          "Cosori Gooseneck Electric Kettle 0.8L"
        ],
        [
          "Coffee with one degree control",
          "Aiheal Gooseneck Kettle with Stopwatch"
        ],
        [
          "Tea for several people",
          "PARIS RHONE 1.7L Temperature Control Kettle"
        ],
        [
          "A mix of drinks in a household",
          "Ninja Precision 7-Cup Electric Kettle KT200"
        ],
        [
          "Just boiling water",
          "Breville BKE700 Soft Top Pure Kettle"
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
          "$59 to $60",
          "INTASTING 0.9L Gooseneck Kettle"
        ],
        [
          "$59 to $60 (1.7L)",
          "PARIS RHONE 1.7L Temperature Control Kettle"
        ],
        [
          "$60 to $62",
          "Cosori Gooseneck Electric Kettle 0.8L"
        ],
        [
          "About $98",
          "Breville BKE700 Soft Top Pure Kettle"
        ],
        [
          "About $100",
          "Ninja Precision 7-Cup Electric Kettle KT200"
        ]
      ]
    }
  },
  {
    "subheading": "Gooseneck vs Large Jug",
    "cards": [
      {
        "label": "Gooseneck",
        "text": "Holds 0.8 to 0.9 liters and pours slowly for coffee. That is Cosori Gooseneck Electric Kettle 0.8L, Aiheal Gooseneck Kettle with Stopwatch and INTASTING 0.9L Gooseneck Kettle."
      },
      {
        "label": "Large jug",
        "text": "Holds 1.7 liters or about 7 cups and pours fast. That is PARIS RHONE 1.7L Temperature Control Kettle, Breville BKE700 Soft Top Pure Kettle and Ninja Precision 7-Cup Electric Kettle KT200."
      }
    ],
    "note": "Most pour-over drinkers should choose a gooseneck, and everyone else a large jug."
  },
  {
    "subheading": "Features You Care About",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Stopwatch for brewing",
          "Aiheal Gooseneck Kettle with Stopwatch"
        ],
        [
          "Long 60 minute keep warm",
          "Cosori Gooseneck Electric Kettle 0.8L"
        ],
        [
          "Soft opening lid",
          "Breville BKE700 Soft Top Pure Kettle"
        ],
        [
          "Seven presets",
          "Ninja Precision 7-Cup Electric Kettle KT200"
        ]
      ]
    }
  },
  {
    "subheading": "For Tea Drinkers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Presets at 160 to 190 degrees and a keep-warm setting."
      },
      {
        "label": "In this comparison",
        "text": "PARIS RHONE 1.7L Temperature Control Kettle lists six presets for tea types, and Ninja Precision 7-Cup Electric Kettle KT200 lists presets for green, white, oolong and black tea."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You brew several drinks. Ninja Precision 7-Cup Electric Kettle KT200 and PARIS RHONE 1.7L Temperature Control Kettle cover presets for different drinks."
      },
      {
        "label": "Save if",
        "text": "You want basic quality at a lower price. INTASTING 0.9L Gooseneck Kettle is about $59 and offers one degree control."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Do I need temperature control for tea?",
    "a": "Green and white teas taste harsh at boiling temperature, so presets help. The Cosori Gooseneck Kettle has 5 presets and the Ninja Precision KT200 has 7. Black tea and herbal tea handle a full boil, so a simpler kettle is fine for those."
  },
  {
    "q": "What is a gooseneck kettle for?",
    "a": "A long curved spout gives a slow, steady pour that helps in pour-over coffee. The Aiheal Gooseneck Kettle holds 100 to 212F in 1 degree steps, and the INTASTING 0.9L offers plus or minus 1F control."
  },
  {
    "q": "Is a stainless steel interior better?",
    "a": "It avoids plastic flavor and lasts longer. Check that the lid underside is also stainless. The Cosori lists a stainless steel body, lid and spout, and the PARIS RHONE 1.7L uses 304 stainless."
  },
  {
    "q": "How often should I descale?",
    "a": "Monthly in hard water and every few months in soft water, using vinegar or citric acid. A wide-mouth model like the Breville BKE700 is easier to reach into, and its dual water windows let you check scale levels."
  },
  {
    "q": "Can I use these in a dorm?",
    "a": "Check housing rules first. Many schools allow kettles with concealed heating elements, but a 1500W unit like the PARIS RHONE can trip dorm circuits. A 1200W model such as the Cosori is a lower-draw choice."
  },
  {
    "q": "Is a $100 kettle worth it over a $20 one?",
    "a": "If you brew tea or coffee, yes, since the extra money buys accurate temperature control and holding. For plain hot water, a cheaper kettle works. The Ninja can hold temp up to 30 minutes, the Cosori keeps warm for 60."
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
