export const guideSlug = "best-mini-fridges-with-freezer";
export const guideTitle = "6 Best Mini Fridges with Freezers in 2026";
export const metaTitle = "Best Mini Fridges with Freezers in 2026";
export const metaDescription = "Six mini fridges with freezer compartments compared on listed freezer temperatures, door layout, noise, energy figures and size for small spaces.";
export const mainKeyword = "mini fridge with freezer";
export const introParagraphs = [
  "The word freezer on a mini fridge listing covers a wide range of products. Some are separate insulated compartments that list a real below-zero temperature, and others are small chiller boxes that will melt ice cream in a few hours. Before looking at features like glass shelves or crisper drawers, the first question is whether the freezer part is something you can rely on.",
  "These six picks all state a freezer or freezing function in their listings, and we sorted them by how clearly they document it: stated freezer temperatures, whether the freezer has its own door, and how much of the total volume it takes. We left out a 7.5 cu ft apartment-size unit, since it is no longer a mini fridge. Energy, noise and temperature numbers are the sellers' claims, not independent readings."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41hP4KFvpKL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-mini-fridges-with-freezer-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Midea 3.1 Cu Ft Energy Star Fridge with Freezer",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hP4KFvpKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G443NKSP?tag=deskfinds0d-20",
    "description": "Midea is a 3.1 cu ft fridge and freezer with a 19.4 by 18.5 by 33 inch footprint, a mechanical thermostat with a fridge range of 32F to 50F and a freezer range of about -11F to 5F. The listing claims Energy Star certification at 270 kWh per year, with a crisper drawer, detachable glass shelves, a 2L bottle rack and an interior LED.\n\nIt is the only pick that gives separate stated temperature ranges for both sections and an Energy Star claim at once. Compared with the EUHOMY below, it is $10 cheaper and has the efficiency claim, though EUHOMY states a noise figure and Midea does not.\n\nBest for a dorm or apartment shopper who wants documented freezer temperatures and a certified efficient unit. The caveat is that the listing gives no decibel number.",
    "specs": [
      "3.1 cu ft, Energy Star",
      "Freezer about -11F to 5F",
      "270 kWh per year"
    ],
    "pros": [
      "Stated temperatures for both sections",
      "Energy Star certified per listing",
      "Crisper drawer and 2L rack",
      "Reversible door with LED light"
    ],
    "cons": [
      "No noise figure listed",
      "Footprint is deeper than rivals"
    ],
    "bestFor": "Documented freezer and efficiency"
  },
  {
    "id": "best-mini-fridges-with-freezer-2",
    "rank": 2,
    "badge": "Best Cold Freezer",
    "name": "EUHOMY 3.2 Cu Ft Two Door Mini Fridge",
    "price": "$209.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/512+F6RffFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B092VM6JJF?tag=deskfinds0d-20",
    "description": "EUHOMY is a dual-zone 3.2 cu ft fridge with a separate freezer door, 3 temperature levels, and a freezer that reaches as low as -7.6F per the listing. The fridge holds 32F to 50F, and the unit measures 18.9 by 18.1 by 33.5 inches with a stated 40 dB and 0.98 kWh per day.\n\nCompared with Midea above, it has a separate freezer door and a stated noise number, but costs $10 more and carries no efficiency certification. Against the OLIXIS below, it has a colder stated freezer figure.\n\nBest for someone who wants frozen meals and ice cream kept firmly frozen. The caveat is the highest price in this guide after the Frigidaire.",
    "specs": [
      "3.2 cu ft, two doors",
      "Freezer to -7.6F",
      "40 dB, 0.98 kWh per day"
    ],
    "pros": [
      "Separate freezer door",
      "Stated 40 dB noise figure",
      "Freezer reaches -7.6F",
      "Reversible door"
    ],
    "cons": [
      "Higher daily kWh figure",
      "No efficiency certification listed"
    ],
    "bestFor": "Frozen meals and ice cream"
  },
  {
    "id": "best-mini-fridges-with-freezer-3",
    "rank": 3,
    "badge": "Best Mid Priced Two Door",
    "name": "OLIXIS 3.2 Cu Ft Double Door Mini Fridge",
    "price": "$149.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NDi4oHiUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6WMWK7M?tag=deskfinds0d-20",
    "description": "OLIXIS splits its 3.2 cu ft into a 0.75 cu ft independent freezer and a 1.85 cu ft fresh zone behind separate doors, with a 7 level thermostat. The listing gives a refrigeration range of 21F to 54F, freezing down to -13F, 41 dB or less and 0.8 kWh per day, and asks for 4 hours of upright standing before plug-in.\n\nCompared with EUHOMY, it is $60 cheaper with a similar layout, though its noise ceiling is one decibel higher. It has a crisper drawer and LED lighting, and a lower kWh figure than EUHOMY.\n\nBest for a double door layout without paying top price. The caveat is that the fridge range extends to 54F, so set the dial carefully for dairy.",
    "specs": [
      "0.75 cu ft freezer, 1.85 cu ft fresh",
      "Freezing to -13F",
      "41 dB, 0.8 kWh per day"
    ],
    "pros": [
      "Separate doors for each zone",
      "Lower listed energy than EUHOMY",
      "Crisper drawer and LED light",
      "$60 less than EUHOMY"
    ],
    "cons": [
      "Fridge range reaches 54F",
      "Wait 4 hours before plugging in"
    ],
    "bestFor": "Double door layout on a budget"
  },
  {
    "id": "best-mini-fridges-with-freezer-4",
    "rank": 4,
    "badge": "Best Single Door Pick",
    "name": "Igloo 3.2 Cu Ft Single Door Fridge with Freezer",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S5Lj0GhSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCF81FPG?tag=deskfinds0d-20",
    "description": "Igloo is a 3.2 cu ft single-door fridge and freezer combo with slide-out shelves, door racks for cans and tall bottles, a can dispenser and static cooling. The listing talks about frozen meals but gives no freezer temperature in these bullets.\n\nCompared with OLIXIS, it has a more traditional layout at about $10 more, but the freezer sits inside the same door as the fridge. Against EUHOMY, it costs $50 less and does not state a noise or kWh figure.\n\nBest for a simple one-door fridge with a small freezer. The caveat is that the freezer is not documented, so treat it as a chilling box rather than for long term frozen storage.",
    "specs": [
      "3.2 cu ft, single door",
      "Static cooling",
      "Slide-out shelves"
    ],
    "pros": [
      "Slide-out shelves ease access",
      "Door racks for tall bottles",
      "Built-in can dispenser",
      "Static cooling design"
    ],
    "cons": [
      "No freezer temperature stated",
      "No noise or energy figure"
    ],
    "bestFor": "Simple one door layout"
  },
  {
    "id": "best-mini-fridges-with-freezer-5",
    "rank": 5,
    "badge": "Best Compact Two Door",
    "name": "DEMULLER 45L Double Door Mini Fridge",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CeqBCavPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6VFHBZD?tag=deskfinds0d-20",
    "description": "DEMULLER is a 45 liter double-door unit with a 0.8 cu ft freezer and a 1.6 cu ft fridge, with a footprint of 14.9 by 14.6 by 30.8 inches. It has a 7 level thermostat, a fridge range of 32F to 50F, a 38 dB claim, two removable shelves and leveling legs, plus a manual defrost design.\n\nIt is the narrowest unit here and the cheapest, at $100 less than EUHOMY. In return, the fridge space is about half of what the 3.2 cu ft picks give.\n\nBest for a single person in a small room who wants a real freezer door. The caveat is limited fridge capacity.",
    "specs": [
      "0.8 cu ft freezer, 1.6 cu ft fridge",
      "14.9 x 14.6 x 30.8 inches",
      "38 dB, manual defrost"
    ],
    "pros": [
      "Narrowest footprint here",
      "Separate freezer door",
      "Stated 38 dB noise level",
      "Lowest price in this guide"
    ],
    "cons": [
      "Small fridge section",
      "Manual defrost required"
    ],
    "bestFor": "One person in a tight room"
  },
  {
    "id": "best-mini-fridges-with-freezer-6",
    "rank": 6,
    "badge": "Best Large Compact",
    "name": "Frigidaire 4.5 Cu Ft Compact Refrigerator",
    "price": "$188.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21uUCgiQ5WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088GWNKYJ?tag=deskfinds0d-20",
    "description": "This Frigidaire is a 4.5 cu ft refrigerator with a stainless steel door, an internal freezer compartment according to its title, glass shelves, a 2L door basket, a can dispenser and a chiller compartment. It has a flush back design, a recessed handle, a reversible door and leveling legs.\n\nIt is the largest in the guide, so compared with the 3.2 cu ft picks you get about 40 percent more room, but the listing documents no freezer temperature, noise or energy figure. Against Midea, it is $12 cheaper and has no certification claim.\n\nBest for a small apartment where extra space matters more than a documented freezer. The caveat is that the freezer is an internal compartment of unstated temperature.",
    "specs": [
      "4.5 cu ft, stainless door",
      "Chiller and internal freezer",
      "2L door basket, flush back"
    ],
    "pros": [
      "Largest capacity here",
      "Flush back saves wall space",
      "Can dispenser and 2L basket",
      "Stainless steel door"
    ],
    "cons": [
      "Freezer temperature not stated",
      "No noise or energy figures"
    ],
    "bestFor": "Extra space in a small apartment"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Freezer temperature in the listing",
    "explanation": "A true freezer holds food at 0F or below, while a chiller box may only reach the low 20s F. A stated number such as -7.6F or -13F shows the maker has designed the compartment for frozen food. Look for the freezer temperature in the bullets, and be cautious when the listing mentions only frozen meals with no figure."
  },
  {
    "criterion": "Separate door or shared door",
    "explanation": "A separate freezer door keeps cold air in when you open the fridge, which reduces ice buildup and temperature swings. A freezer inside the fridge door shares air with the fridge, and often holds frost-prone ice trays rather than frozen meals. Check the listing for the phrase double door or separate freezer door."
  },
  {
    "criterion": "Share of volume taken by the freezer",
    "explanation": "Total cubic feet counts both sections, so a 3.2 cu ft model with a 0.75 cu ft freezer leaves about 1.85 cu ft of fresh space after insulation and compressor volume. Subtract the freezer from the headline number to see what is left for groceries. Look for the split in the listing, as the OLIXIS and DEMULLER pages provide."
  },
  {
    "criterion": "Defrosting method",
    "explanation": "Most mini fridges with freezers need manual defrosting, meaning you unplug and wait while ice melts. Ice buildup can steal storage and make the compressor work harder. Check the listing for manual defrost wording and consider whether you will tolerate doing this a few times a year."
  },
  {
    "criterion": "Noise and energy claims",
    "explanation": "Compressors cycle more when a freezer is included, so quiet and kWh claims matter more here. Stated numbers are the maker's own: EUHOMY lists 40 dB and 0.98 kWh per day, OLIXIS 41 dB and 0.8, and Midea 270 kWh per year. Compare like with like and note which listings give no number."
  },
  {
    "criterion": "Standing time before use",
    "explanation": "Compressor oil settles during shipping, so several listings ask you to let the fridge stand upright before plugging in, from 4 hours for OLIXIS to 24 hours for other models. Skipping this can shorten the compressor's life. Read the note in the listing and plan setup around it."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Freezer documentation",
    "description": "We looked for stated freezer temperatures and separate doors, since vague freezer wording tells you little."
  },
  {
    "title": "Usable fresh space",
    "description": "Freezer volume was subtracted from total capacity where the listing gave a split."
  },
  {
    "title": "Noise and energy claims",
    "description": "Stated decibels, daily or yearly kWh and certifications were compared as seller claims."
  },
  {
    "title": "Footprint and layout",
    "description": "Dimensions, door type and shelf design were weighed for small rooms."
  },
  {
    "title": "Price for the claims made",
    "description": "Prices were compared against what each listing actually documents."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Freezer Use",
    "intro": "How you use the freezer sets the right pick.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Frozen meals and ice cream, firmly frozen",
          "EUHOMY 3.2 Cu Ft Two Door Mini Fridge"
        ],
        [
          "Documented fridge and freezer ranges",
          "Midea 3.1 Cu Ft Energy Star Fridge with Freezer"
        ],
        [
          "Ice cubes and a few frozen items",
          "Igloo 3.2 Cu Ft Single Door Fridge with Freezer"
        ],
        [
          "One person, small freezer door",
          "DEMULLER 45L Double Door Mini Fridge"
        ],
        [
          "More fridge space than freezer",
          "Frigidaire 4.5 Cu Ft Compact Refrigerator"
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
          "Under $100",
          "DEMULLER 45L Double Door Mini Fridge"
        ],
        [
          "$100 to $150",
          "OLIXIS 3.2 Cu Ft Double Door Mini Fridge"
        ],
        [
          "$150 to $190",
          "Igloo 3.2 Cu Ft Single Door Fridge with Freezer"
        ],
        [
          "$185 to $200",
          "Frigidaire 4.5 Cu Ft Compact Refrigerator"
        ],
        [
          "$200 to $210",
          "Midea 3.1 Cu Ft Energy Star Fridge with Freezer"
        ]
      ]
    }
  },
  {
    "subheading": "Double Door vs Single Door",
    "cards": [
      {
        "label": "Double door",
        "text": "A separate freezer door keeps frozen food colder and limits frost, but takes space from the fridge. Picks: EUHOMY, OLIXIS and DEMULLER 45L."
      },
      {
        "label": "Single door",
        "text": "One door gives more usable fresh space and a lower price, but the freezer is less reliable. Picks: Igloo, Midea and Frigidaire 4.5 Cu Ft."
      }
    ],
    "note": "Choose double door if you will store frozen meals, and single door if the freezer is mostly for ice."
  },
  {
    "subheading": "Efficiency and Noise",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Energy Star claim",
          "Midea 3.1 Cu Ft Energy Star Fridge with Freezer"
        ],
        [
          "Lowest listed kWh per day of two door picks",
          "OLIXIS 3.2 Cu Ft Double Door Mini Fridge"
        ],
        [
          "Lowest stated noise figure",
          "DEMULLER 45L Double Door Mini Fridge"
        ],
        [
          "Stated 40 dB and cold freezer",
          "EUHOMY 3.2 Cu Ft Two Door Mini Fridge"
        ]
      ]
    }
  },
  {
    "subheading": "For Small Apartments Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A narrow footprint, a reversible door that clears a wall, and a freezer that is real enough for a few meals."
      },
      {
        "label": "In this comparison",
        "text": "DEMULLER 45L Double Door Mini Fridge is the narrowest at 14.9 inches, and Frigidaire 4.5 Cu Ft Compact Refrigerator has a flush back for tight placement."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You will keep frozen meals or want a certified efficient unit. EUHOMY 3.2 Cu Ft Two Door Mini Fridge and Midea 3.1 Cu Ft Energy Star Fridge with Freezer document their freezers best."
      },
      {
        "label": "Save if",
        "text": "A few frozen items and ice are enough. DEMULLER 45L Double Door Mini Fridge and OLIXIS 3.2 Cu Ft Double Door Mini Fridge cost much less."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Can a mini fridge freezer hold ice cream?",
    "a": "Only if the freezer reaches about 0F or lower. Models like EUHOMY and OLIXIS state sub-zero figures, while single-door freezers often cannot hold it."
  },
  {
    "q": "Do I need to defrost a mini fridge with a freezer?",
    "a": "Usually yes. DEMULLER's listing mentions manual defrost. Unplug, empty the unit and let ice melt into towels."
  },
  {
    "q": "Is a double door fridge worth it over a single door?",
    "a": "If you store frozen meals, yes. A separate door keeps the freezer colder and reduces frost, at the cost of less fresh space."
  },
  {
    "q": "How long should I wait before plugging in a new one?",
    "a": "Follow the listing. OLIXIS asks for 4 hours upright, and some other models recommend 24 hours. This lets compressor oil settle."
  },
  {
    "q": "What temperature should I set the fridge to?",
    "a": "Aim for 40F or lower for the fresh section, following general food safety guidance. A middle setting is usually a good start, then adjust."
  },
  {
    "q": "Will it fit a dorm?",
    "a": "Check your school's size cap. Many dorm rules limit fridge size, so compare the cubic feet and footprint against the housing policy before ordering."
  }
];

export const relatedGuides = [
  {
    "href": "/guide/best-mini-fridges-for-dorm",
    "title": "Best Mini Fridges for Dorm Rooms"
  },
  {
    "href": "/guide/best-mini-fridges-for-office",
    "title": "Best Mini Fridges for the Office"
  },
  {
    "href": "/guide/best-mini-fridges-for-bedroom",
    "title": "Best Mini Fridges for Bedrooms"
  }
];
