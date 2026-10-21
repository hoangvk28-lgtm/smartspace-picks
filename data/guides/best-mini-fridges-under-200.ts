export const guideSlug = "best-mini-fridges-under-200";
export const guideTitle = "7 Best Mini Fridges Under $200 in 2026";
export const metaTitle = "Best Mini Fridges Under $200 in 2026";
export const metaDescription = "Seven compressor mini fridges at $200 or less compared on freezer layout, listed temperature range, noise and energy figures for dorms and small rooms.";
export const mainKeyword = "mini fridge under 200";
export const introParagraphs = [
  "Two hundred dollars is where mini fridges stop being coolers and start being proper compact refrigerators with a thermostat knob, a compressor and, in many cases, a second door for a real freezer. The spread inside this budget is still wide, though: a 1.3 cu ft single door at $130 and a 3.6 cu ft two door at $200 solve different problems.",
  "The seven picks here are all compressor models priced at $200 or under at the time of data pull, and we left out a glass-door wine and beverage cooler that would have padded the list. We compared them on how the freezer is built, the temperature ranges each listing states, quoted noise and energy numbers, and physical size. The figures are the sellers' claims, not independent measurements."
];
export const lastUpdated = "2026-10-21";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31eFn0XtUoL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-mini-fridges-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Tehanld 3.6 Cu Ft Two Door Mini Fridge",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eFn0XtUoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4JJ1419?tag=deskfinds0d-20",
    "description": "Tehanld packs 3.6 cu ft into a two-door layout with a separate freezer, a 7-level mechanical thermostat and an R600A compressor. The listing quotes about 0.48 kWh per day, includes an automatic LED light, and mentions reinforced corner guards and shock foam to protect it in shipping.\n\nIt is the largest model in this guide and sits at exactly $200, which makes it the top end of the budget. Against OLIXIS just below, you get about 0.4 cu ft more space and a lower stated daily energy figure, but OLIXIS lists a crisper drawer and a decibel level that Tehanld's summary does not.\n\nBest for a student or small apartment dweller who wants the most storage under $200. The caveat is the price sitting right at the ceiling and the 6-hour setup note, which is a reminder to let the compressor settle before use.",
    "specs": [
      "3.6 cu ft, two doors",
      "7 level mechanical thermostat",
      "R600A compressor, LED light"
    ],
    "pros": [
      "Largest capacity under $200",
      "Separate freezer door",
      "Low listed energy use",
      "Shock foam protects in transit"
    ],
    "cons": [
      "Priced right at the $200 cap",
      "Needs rest time before first use"
    ],
    "bestFor": "Maximum storage with a real freezer"
  },
  {
    "id": "best-mini-fridges-under-200-2",
    "rank": 2,
    "badge": "Best Mid Priced Two Door",
    "name": "OLIXIS 3.2 Cu Ft Two Door Mini Fridge",
    "price": "$152.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31kMpBQqsrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6WPNQMT?tag=deskfinds0d-20",
    "description": "OLIXIS splits 3.2 cu ft into a 0.75 cu ft independent freezer and a 1.85 cu ft fresh zone, with a 7-level knob, adjustable shelves, a crisper drawer and built-in LED lighting. The listing quotes a 41 dB or lower sound level, a 0.8 kWh per day energy figure and a refrigeration range of 21F to 54F.\n\nCompared with Tehanld above it is almost $47 cheaper and has a crisper, but it lists a higher daily kWh. Against BANGSON below, it offers a larger freezer and a stated noise level at a lower price.\n\nBest for a shopper who wants a two door fridge with a crisper without hitting the $200 ceiling. The caveat is the highest listed daily energy among the picks, and a requirement to stand it upright for 4 hours before plugging it in.",
    "specs": [
      "0.75 cu ft freezer, 1.85 cu ft fridge",
      "41 dB or less, listed",
      "Crisper drawer, LED light"
    ],
    "pros": [
      "Independent freezer with its own door",
      "Crisper drawer for produce",
      "Stated 41 dB noise level",
      "Costs about $47 less than Tehanld"
    ],
    "cons": [
      "Higher listed energy use",
      "Stand upright 4 hours before use"
    ],
    "bestFor": "Two door fridge without a $200 bill"
  },
  {
    "id": "best-mini-fridges-under-200-3",
    "rank": 3,
    "badge": "Best Compact Two Zone",
    "name": "BANGSON 2.6 Cu Ft Mini Fridge with Freezer",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31M9WHkKgzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7B1DSDP?tag=deskfinds0d-20",
    "description": "BANGSON measures 18 inches deep, 19 wide and 27 tall, with a 0.5 cu ft freezer and a 2.1 cu ft refrigerator section. The listing gives a freezer range of 28.4F to 46.4F and a fridge range of 32F to 50F, with reversible doors and leveling legs for uneven floors.\n\nVersus OLIXIS above, the freezer is smaller and the price is about $17 higher, but the listing is clear on both ranges and the 27 inch height keeps it lower. Compared with the DEMULLER slim model below, it is wider and shorter, so it suits a countertop or a low shelf better than a tight corner.\n\nBest for a space with limited height that still needs a freezer. The caveat is that the stated freezer range tops out at 46.4F, so it is a chilling compartment, not a deep freezer, and the listing offers no figures for noise or energy.",
    "specs": [
      "2.6 cu ft, 18 x 19 x 27 inches",
      "Fridge 32F to 50F",
      "Reversible doors, leveling legs"
    ],
    "pros": [
      "Low 27 inch height",
      "Clear temperature ranges listed",
      "Reversible doors",
      "Leveling legs for uneven floors"
    ],
    "cons": [
      "Small 0.5 cu ft freezer",
      "No noise or energy numbers listed"
    ],
    "bestFor": "Low shelves and short spaces"
  },
  {
    "id": "best-mini-fridges-under-200-4",
    "rank": 4,
    "badge": "Best Slim Two Door",
    "name": "DEMULLER 55L Slim Two Door Mini Fridge",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31q02-wYo+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN32LQQG?tag=deskfinds0d-20",
    "description": "DEMULLER's 55L model measures 14.8 by 14.9 by 34.9 inches, a narrow, tall format with a 0.8 cu ft freezer and 1.8 cu ft fridge section. It has a 7-speed knob across a range of about -0.4F to 50F, two removable shelves, door racks for bottles and a one-year warranty listed.\n\nAgainst BANGSON above, it is more than 4 inches narrower in width, which matters in a tight corner, but it is also much taller. Compared with the single door models below, you get a separate freezer for about $19 more than Electactic.\n\nBest for a narrow corner where floor space is the limit. The caveat is the height, and the listing says not to plug it in right away after delivery, so budget for a wait.",
    "specs": [
      "55L, 14.8 x 14.9 x 34.9 inches",
      "0.8 cu ft freezer, 1.8 cu ft fridge",
      "7 speed knob, 1 year warranty"
    ],
    "pros": [
      "Narrow 14.8 inch width",
      "Separate freezer door",
      "One year warranty listed",
      "Door racks for bottles"
    ],
    "cons": [
      "Tall at nearly 35 inches",
      "Must rest before plugging in"
    ],
    "bestFor": "Narrow corners and tight floor space"
  },
  {
    "id": "best-mini-fridges-under-200-5",
    "rank": 5,
    "badge": "Best Single Door Under Desk Size",
    "name": "Electactic 1.3 Cu Ft Single Door Mini Fridge",
    "price": "$140.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CLcXKn9hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HC78HQ9C?tag=deskfinds0d-20",
    "description": "Electactic is a 36 liter single-door fridge measuring 15.75 by 15.75 by 19.09 inches. The listing shows a rotary thermostat with 7 settings across 32F to 50F, a noise level of 38 dB or less and about 0.62 kWh per day, and it notes that ice cream is not recommended.\n\nAgainst Kismile just below, it costs about $11 more and adds stated noise and a more detailed temperature description, but gives up the freezer compartment. Compared with the larger two door picks above, it is far smaller, but at 19 inches tall it can slide under many desks.\n\nBest for a single user who wants drinks, fruit and snacks in a tiny package. The caveat is capacity: 1.3 cu ft fills up quickly, and there is no freezer.",
    "specs": [
      "1.3 cu ft, 36 liters",
      "32F to 50F, 7 settings",
      "38 dB or less, about 0.62 kWh per day"
    ],
    "pros": [
      "Fits under many desks",
      "Stated 38 dB noise",
      "Seven temperature settings",
      "Simple single door"
    ],
    "cons": [
      "No freezer section",
      "Small capacity"
    ],
    "bestFor": "Under desk drinks and snacks"
  },
  {
    "id": "best-mini-fridges-under-200-6",
    "rank": 6,
    "badge": "Best Budget Compact",
    "name": "Kismile 1.3 Cu Ft Mini Fridge with Freezer",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Wb3zNuJ5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHJJDNBS?tag=deskfinds0d-20",
    "description": "Kismile has the same 15.75 by 15.75 by 19.09 inch footprint as Electactic, with a rotary thermostat across 32F to 50F in 7 levels, a reversible door and multiple color options. The listing quotes a high-efficiency compressor and about 0.5 kWh per day.\n\nIt costs $11 less than Electactic and mentions a freezer in its title, but the listing gives no noise figure and no freezer size, so treat the freezer as a small chilling box. Compared with Frigidaire below, it gives more specs but less style.\n\nBest for a small budget and a small room. The caveat is the vague freezer description, so it is better for chilling than for storing frozen meals.",
    "specs": [
      "1.3 cu ft, 19.09 inches tall",
      "32F to 50F, 7 levels",
      "About 0.5 kWh per day"
    ],
    "pros": [
      "Lower price than Electactic",
      "Reversible door",
      "Low listed energy use",
      "Several color choices"
    ],
    "cons": [
      "No noise level listed",
      "Freezer size not stated"
    ],
    "bestFor": "Small rooms on a budget"
  },
  {
    "id": "best-mini-fridges-under-200-7",
    "rank": 7,
    "badge": "Best Retro Style",
    "name": "Frigidaire EFR176 Retro Bar Fridge",
    "price": "$118.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fk+JrTzvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B073S1GJW4?tag=deskfinds0d-20",
    "description": "The EFR176 is a retro fridge with a listed capacity of 1.55 cu ft, a wire shelf, a 2L door basket, a chiller compartment, a side-mounted bottle opener and a chrome pull handle. The door is reversible and the pink finish is one of several color options.\n\nCompared with Kismile above, it costs about $12 less and has more character, but the listing does not state a temperature range, noise or energy figures. Against Electactic, it trades the measured specs for style and a bottle opener.\n\nBest for a dorm or den where the fridge is on display. The caveat is the thin spec sheet, so check the product manual for noise and temperature details before relying on it in a bedroom.",
    "specs": [
      "1.55 cu ft, wire shelf",
      "2L door basket, chiller",
      "Side bottle opener, reversible door"
    ],
    "pros": [
      "Retro styling and colors",
      "Built-in side bottle opener",
      "Fits 2L bottles in the door",
      "Lowest price in this guide"
    ],
    "cons": [
      "No noise or energy figures",
      "Only a wire shelf"
    ],
    "bestFor": "Style first, specs second"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Separate freezer or chilling box",
    "explanation": "A two door fridge has an insulated freezer with its own door, while a single door model has only a small box that may not freeze. Electactic's listing says ice cream is not recommended in its box, which is a typical sign. Check the title for two door or double door, and look for a stated freezer temperature below 32F."
  },
  {
    "criterion": "Temperature range as listed",
    "explanation": "Refrigerated food should stay at or below 40F, so the lower end of the range matters more than the top. Tehanld, BANGSON and DEMULLER state numbers, while Frigidaire gives none. A clear range shows the maker stands behind the claim, so look for one and a note on the optimal dial setting."
  },
  {
    "criterion": "Daily energy and the running cost",
    "explanation": "Listings quote kWh per day, and the spread among these picks runs from about 0.48 for Tehanld to 0.8 for OLIXIS. Over a school year the gap is real money in a house with a shared meter, though these are the sellers' own figures. Look for a kWh number or an Energy Star mark, and be wary of a listing that gives only an adjective such as efficient."
  },
  {
    "criterion": "Footprint versus height",
    "explanation": "A fridge's footprint and height decide where it can live. DEMULLER is only 14.8 inches wide but nearly 35 inches tall, while BANGSON is 27 inches tall and 19 inches wide. Measure the spot, including the door swing, and compare it with the listed outside dimensions."
  },
  {
    "criterion": "Setup rest time",
    "explanation": "Compressor fridges need to stand upright after shipping so oil returns to the compressor. OLIXIS says 4 hours, DEMULLER warns not to plug in immediately, and Tehanld's listing mentions a 6-hour setup. Plan the first day around that wait, and do not skip it."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Freezer layout",
    "description": "We checked whether each model has a true separate freezer door and whether the listing states a freezer temperature."
  },
  {
    "title": "Stated cooling range",
    "description": "Listed minimum and maximum temperatures were compared, with credit for clear numbers over vague claims."
  },
  {
    "title": "Noise and energy",
    "description": "Decibel and kWh figures were noted where given, treated as manufacturer claims rather than independent measurements."
  },
  {
    "title": "Size and shape",
    "description": "Outside dimensions were compared against typical dorm shelves, corners and desk clearances."
  },
  {
    "title": "Price ceiling",
    "description": "Every pick is $200 or below, and a wine and beverage cooler was removed as off-topic."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Available Space",
    "intro": "Measure the spot first, then pick the fridge shape that fits it.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under a desk or on a low shelf",
          "Electactic 1.3 Cu Ft Single Door Mini Fridge"
        ],
        [
          "Shelf lower than 28 inches",
          "BANGSON 2.6 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "Narrow corner, floor space limited",
          "DEMULLER 55L Slim Two Door Mini Fridge"
        ],
        [
          "Open wall with room for a larger fridge",
          "Tehanld 3.6 Cu Ft Two Door Mini Fridge"
        ],
        [
          "Visible spot where looks matter",
          "Frigidaire EFR176 Retro Bar Fridge"
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
          "Under $125",
          "Frigidaire EFR176 Retro Bar Fridge"
        ],
        [
          "$125 to $145",
          "Kismile 1.3 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "$145 to $160",
          "OLIXIS 3.2 Cu Ft Two Door Mini Fridge"
        ],
        [
          "$160 to $175",
          "BANGSON 2.6 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "$175 to $200",
          "Tehanld 3.6 Cu Ft Two Door Mini Fridge"
        ]
      ]
    }
  },
  {
    "subheading": "Single Door vs Two Door",
    "cards": [
      {
        "label": "Single door",
        "text": "All the interior is one chilled space with a small freezer box at best, so you get more fridge room per dollar and a smaller body. Picks here: Electactic 1.3 Cu Ft Single Door Mini Fridge, Kismile 1.3 Cu Ft Mini Fridge with Freezer and Frigidaire EFR176 Retro Bar Fridge."
      },
      {
        "label": "Two door",
        "text": "A separate freezer with its own door can hold frozen meals, but the doors take up volume and push the price up. Picks here: Tehanld, OLIXIS, BANGSON and DEMULLER 55L Slim Two Door Mini Fridge."
      }
    ],
    "note": "Choose a single door if you only chill drinks and snacks, and a two door if you will store anything frozen."
  },
  {
    "subheading": "Noise and Energy Priorities",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest listed daily energy among two doors",
          "Tehanld 3.6 Cu Ft Two Door Mini Fridge"
        ],
        [
          "Stated 38 dB noise level",
          "Electactic 1.3 Cu Ft Single Door Mini Fridge"
        ],
        [
          "Stated noise plus a crisper drawer",
          "OLIXIS 3.2 Cu Ft Two Door Mini Fridge"
        ],
        [
          "Low energy at the smallest size",
          "Kismile 1.3 Cu Ft Mini Fridge with Freezer"
        ]
      ]
    }
  },
  {
    "subheading": "For Shared Dorm Rooms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A freezer with its own door, enough room for two people's food, and a size that meets your school's cap. Confirm the housing limit on cubic feet before ordering."
      },
      {
        "label": "In this comparison",
        "text": "Tehanld 3.6 Cu Ft Two Door Mini Fridge offers the most space, and OLIXIS 3.2 Cu Ft Two Door Mini Fridge brings a crisper drawer and a 0.75 cu ft freezer at a lower price."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need frozen storage or share the fridge. Tehanld 3.6 Cu Ft Two Door Mini Fridge and OLIXIS 3.2 Cu Ft Two Door Mini Fridge give more space and a real freezer."
      },
      {
        "label": "Save if",
        "text": "You chill drinks and snacks for one person. Kismile 1.3 Cu Ft Mini Fridge with Freezer and Frigidaire EFR176 Retro Bar Fridge cost $130 or less."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Is a two door mini fridge worth it over a single door?",
    "a": "Yes if you want to keep frozen food. The listed freezers in Tehanld, OLIXIS, BANGSON and DEMULLER have their own doors, while single door models such as Electactic say ice cream is not recommended."
  },
  {
    "q": "How long should I wait before plugging in a new fridge?",
    "a": "Follow the listing. OLIXIS asks for 4 hours upright, and Tehanld mentions a 6-hour setup. A few hours is a sensible minimum for any compressor fridge."
  },
  {
    "q": "Which of these fits under a desk?",
    "a": "Electactic and Kismile both measure about 19 inches tall with a 15.75 inch footprint, so they slide under many standard desks. Measure your clearance first, and leave room behind for ventilation."
  },
  {
    "q": "Are the energy numbers trustworthy?",
    "a": "They are the sellers' own estimates, quoted as kWh per day. They are useful for comparing within a guide, but they are not independent measurements, so look for an Energy Star label if running cost matters."
  },
  {
    "q": "Why does the freezer range on BANGSON top out at 46.4F?",
    "a": "The listing quotes a freezer range of 28.4F to 46.4F, which means it can chill but is not a deep freezer. Use it for ice cubes and short-term frozen items, not long storage."
  },
  {
    "q": "Can I put a retro fridge like the Frigidaire EFR176 in my bedroom?",
    "a": "Yes, but the listing gives no noise figure, so check the manual first if you are a light sleeper. For a stated decibel level, pick Electactic or OLIXIS."
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
