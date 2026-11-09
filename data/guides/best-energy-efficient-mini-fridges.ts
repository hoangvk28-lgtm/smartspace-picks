export const guideSlug = "best-energy-efficient-mini-fridges";
export const guideTitle = "6 Best Energy Efficient Mini Fridges in 2026";
export const metaTitle = "Best Energy Efficient Mini Fridges in 2026";
export const metaDescription = "Six compressor mini fridges from 1.7 to 4.5 cu ft compared on Energy Star status, listed daily kWh, temperature range and noise for dorms and offices.";
export const mainKeyword = "energy efficient mini fridge";
export const introParagraphs = [
  "A mini fridge runs around the clock, so even a small efficiency gap shows up on a bill over a school year. The tricky part is that listings quote efficiency in very different ways: an Energy Star badge on one, a kWh per day on another, and 'energy saving' with no number on a third.",
  "The six picks below are all compressor fridges, which hold a set temperature even in a warm room. We compared them on the efficiency figures each listing actually gives, plus capacity, listed temperature range, noise and price. Daily kWh numbers are the sellers' own claims, so we treat them as a guide rather than a measured result."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Gwarm6qdL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-energy-efficient-mini-fridges-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Midea 2.7 Cu Ft Energy Star Mini Fridge",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Gwarm6qdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G445JQ42?tag=deskfinds0d-20",
    "description": "Midea is a 2.7 cu ft Energy Star certified fridge with a listed 255 kWh per year, a 33.8F to 50F temperature range, a door shelf that holds a 2 liter bottle and a rack for 6 cans. It is described as low noise for offices.\n\nIt is the only pick here that pairs the Energy Star label with a stated annual kWh, which makes it easy to compare. Against BLACK+DECKER below, it holds more but costs under $25 more.\n\nBest for a bedroom or office where it runs all year. The caveat is that the listing does not mention a freezer.",
    "specs": [
      "2.7 cu ft, Energy Star",
      "255 kWh per year",
      "33.8F to 50F range"
    ],
    "pros": [
      "Energy Star with stated annual kWh",
      "Fits a 2 liter bottle",
      "Low-noise positioning",
      "Wide temperature range"
    ],
    "cons": [
      "Costs under $200",
      "No freezer compartment"
    ],
    "bestFor": "Year-round bedroom or office use"
  },
  {
    "id": "best-energy-efficient-mini-fridges-2",
    "rank": 2,
    "badge": "Best Compact Energy Star",
    "name": "BLACK+DECKER 1.7 Cu Ft Compact Refrigerator",
    "price": "$148.35",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31iY5H9DhIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01DZQI6YW?tag=deskfinds0d-20",
    "description": "BLACK+DECKER is a 1.7 cu ft Energy Star compact fridge in black, stainless or white, with a removable glass shelf, a full and half-width door bin, a reversible door and leveling legs.\n\nCompared with Midea above, it is smaller and cheaper, and the listing does not give a kWh number. Against Upstreman below, it is Energy Star rated but pricier.\n\nBest for a small dorm that needs a certified fridge. The caveat is limited capacity.",
    "specs": [
      "1.7 cu ft, Energy Star",
      "Reversible door",
      "Removable glass shelf"
    ],
    "pros": [
      "Energy Star certified",
      "Reversible door",
      "Three color options",
      "Glass shelf adjusts"
    ],
    "cons": [
      "Small 1.7 cu ft interior",
      "No kWh figure in listing"
    ],
    "bestFor": "Small dorms needing a certified fridge"
  },
  {
    "id": "best-energy-efficient-mini-fridges-3",
    "rank": 3,
    "badge": "Best Quiet Compact",
    "name": "Upstreman 1.7 Cu Ft Mini Fridge with Freezer",
    "price": "$116.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fisLh5zBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09W9KSQBL?tag=deskfinds0d-20",
    "description": "Upstreman is a 1.7 cu ft fridge with freezer measuring 18.9 by 17.7 by 19.3 inches, rated at 38 dB, with five temperature settings from 33.8F to 46.4F and a claimed 0.5 kWh per day. The listing notes it is not for storing ice cream.\n\nCompared with BLACK+DECKER above, it adds a freezer box and a noise figure and costs less, but no Energy Star label is stated. Against Frestec below, it is smaller.\n\nBest for a desk-height fridge by a bed. The caveat is that the freezer is a small box, not a true freezer.",
    "specs": [
      "1.7 cu ft, 38 dB",
      "0.5 kWh per day claimed",
      "33.8F to 46.4F range"
    ],
    "pros": [
      "Lowest claimed daily kWh",
      "Stated 38 dB noise",
      "Desk-friendly 19.3 inch height",
      "Lower price"
    ],
    "cons": [
      "No Energy Star label stated",
      "Freezer cannot hold ice cream"
    ],
    "bestFor": "Quiet corners near a bed"
  },
  {
    "id": "best-energy-efficient-mini-fridges-4",
    "rank": 4,
    "badge": "Best Budget Pick",
    "name": "Frestec 3.2 Cu Ft Mini Fridge with Freezer",
    "price": "$112.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lK1+pqghL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWB3KL5D?tag=deskfinds0d-20",
    "description": "Frestec is a 3.2 cu ft fridge with freezer measuring 17.83 by 16.73 by 33.27 inches, with a claimed 0.55 kWh per day, six thermostat settings and a one-touch defrost.\n\nIt is the lowest-priced pick here and holds nearly twice the volume of the 1.7 cu ft models. Versus Frostorm below, it is slightly cheaper with a lower daily kWh claim.\n\nBest for budget buyers who need space. The caveat is no Energy Star mark in the listing.",
    "specs": [
      "3.2 cu ft with freezer",
      "0.55 kWh per day claimed",
      "One-touch defrost"
    ],
    "pros": [
      "Large capacity for the price",
      "Six temperature settings",
      "One-touch defrost",
      "Low kWh claim"
    ],
    "cons": [
      "No Energy Star label stated",
      "Taller than desk height"
    ],
    "bestFor": "Budget buyers needing space"
  },
  {
    "id": "best-energy-efficient-mini-fridges-5",
    "rank": 5,
    "badge": "Best Reversible Door",
    "name": "Frostorm 3.2 Cu Ft Mini Fridge with Freezer",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51aJI8yc+EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FPX6N2MW?tag=deskfinds0d-20",
    "description": "Frostorm is a 3.2 cu ft single-door fridge with a 0.35 cu ft freezer compartment, a reversible door and adjustable shelves, claiming about 0.6 kWh per day.\n\nCompared with Frestec above, it costs under $30 more with a slightly higher kWh claim. Against Electactic below, it is a far lower price and a simpler layout.\n\nBest for flexible placement. The caveat is that its 0.35 cu ft freezer is small.",
    "specs": [
      "3.2 cu ft, 0.35 cu ft freezer",
      "0.6 kWh per day claimed",
      "Reversible door"
    ],
    "pros": [
      "Reversible door",
      "Adjustable shelves",
      "Moderate price",
      "Door bins included"
    ],
    "cons": [
      "Higher kWh claim than rivals",
      "Tiny freezer box"
    ],
    "bestFor": "Awkward door-swing spaces"
  },
  {
    "id": "best-energy-efficient-mini-fridges-6",
    "rank": 6,
    "badge": "Best Separate Freezer",
    "name": "Electactic 4.5 Cu Ft Two-Door Mini Fridge",
    "price": "$269.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ZvwxlwglL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZDKBQ7G?tag=deskfinds0d-20",
    "description": "Electactic is a two-door unit with a 3.64 cu ft refrigerator and a separate freezer, three temperature settings, removable glass shelves and a clear crisper. The listing describes a high-efficiency, low-energy compressor but gives no kWh figure.\n\nIt is the largest and most expensive pick by far, at under $300. Compared with Frostorm, it has a real separate freezer.\n\nBest for a shared room needing real freezer space. The caveat is that without a stated kWh we cannot say it is efficient.",
    "specs": [
      "3.64 cu ft fridge, separate freezer",
      "3 temperature settings",
      "Glass shelves, crisper"
    ],
    "pros": [
      "Separate freezer door",
      "Largest capacity here",
      "Glass shelves and crisper",
      "Compressor cooling"
    ],
    "cons": [
      "Nearly $270",
      "No kWh figure given"
    ],
    "bestFor": "Shared rooms needing a freezer"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Energy Star versus claimed kWh",
    "explanation": "Energy Star is a certification with a published annual kWh figure, while a claimed daily kWh is a number the seller supplies. The Midea lists Energy Star and 255 kWh per year, whereas the Upstreman claims 0.5 kWh a day, which works out to roughly 183 kWh a year if accurate. Compare annual figures on the same basis, and check whether the listing shows the yellow Energy Guide label."
  },
  {
    "criterion": "Compressor versus thermoelectric",
    "explanation": "A compressor fridge cools to a set temperature regardless of the room and costs more to buy but less to run per cubic foot, while a thermoelectric cooler only cools relative to the room and runs constantly. Every pick here is compressor based. Check that the listing states compressor or a freezer compartment, which signals a real refrigeration cycle rather than a cooler."
  },
  {
    "criterion": "Capacity versus usable space",
    "explanation": "A 3.2 cu ft model with a freezer loses space to the freezer box, so the Frostorm's 0.35 cu ft freezer leaves less fridge volume. A bigger fridge costs more to run, so choose the size you will fill. Look for the cu ft number and the freezer size, then picture whether your groceries fit on the shelves."
  },
  {
    "criterion": "Dorm size caps",
    "explanation": "Many dorms cap fridges at about 4.0 cu ft and a set wattage, so a 4.5 cu ft model like the Electactic may be banned. The 1.7 and 2.7 cu ft models here are safe in most halls. Check your housing rules for a size or an outlet draw limit before buying a larger model."
  },
  {
    "criterion": "Noise level and placement",
    "explanation": "A compressor cycles on and off, and a bedroom fridge at 38 dB, as the Upstreman lists, is similar to a quiet library, while others list no number. Place it with a few inches of space behind and at the sides so heat can leave, and keep it level, since a tilt makes it louder. Look for a stated dB value."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Verified versus claimed energy use",
    "description": "We separated certified numbers from seller claims. The Midea lists Energy Star and 255 kWh per year, the BLACK+DECKER lists Energy Star with no kWh, and the Upstreman, Frestec and Frostorm claim 0.5, 0.55 and 0.6 kWh per day, which we treated as unverified without a label, because a seller figure measured under unknown conditions cannot be compared with a certified annual number."
  },
  {
    "title": "Energy per cubic foot",
    "description": "A small fridge can look efficient and still waste energy per cubic foot of storage. We compared daily claims against capacity, noting that the Frestec's 3.2 cu ft at 0.55 kWh per day is more efficient per cubic foot than the Upstreman's 1.7 cu ft at 0.5, which matters because small fridges lose proportionally more heat through their walls."
  },
  {
    "title": "Temperature range and control",
    "description": "We looked at how cold and how steady each fridge can run. The Midea lists 33.8F to 50F and the Upstreman 33.8F to 46.4F, while the Frestec lists six settings. A narrower range with a lower floor gives safer storage for dairy and leftovers, while a range that tops out near 50F suits drinks only."
  },
  {
    "title": "Dorm and desk fit",
    "description": "Many halls cap fridges by size, so we checked footprints, such as the Upstreman's 19.3 inch height that fits under a desk, and noted the Electactic's 4.5 cu ft may exceed a cap. Reversible doors on the BLACK+DECKER and Frostorm also helped fit corners."
  },
  {
    "title": "Noise and daily annoyance",
    "description": "A fridge that hums all night is a poor bedroom roommate. We credited the Upstreman's listed 38 dB and the Midea's low-noise positioning, and noted that most picks name no decibel figure, which is a gap in a category sold on being quiet, so a stated 38 dB earned real credit for a bedroom buyer."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Room Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Tiny dorm with a size cap",
          "BLACK+DECKER 1.7 Cu Ft Compact Refrigerator"
        ],
        [
          "Bedside or desk corner",
          "Upstreman 1.7 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "Studio apartment or office",
          "Midea 2.7 Cu Ft Energy Star Mini Fridge"
        ],
        [
          "Shared room needing a freezer",
          "Electactic 4.5 Cu Ft Two-Door Mini Fridge"
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
          "Under $115",
          "Frestec 3.2 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "$115 to $120",
          "Upstreman 1.7 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "$140 to $150",
          "BLACK+DECKER 1.7 Cu Ft Compact Refrigerator"
        ],
        [
          "$140 to $170",
          "Frostorm 3.2 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "$170 to $270",
          "Midea 2.7 Cu Ft Energy Star Mini Fridge"
        ]
      ]
    }
  },
  {
    "subheading": "Energy Star vs Claimed kWh",
    "cards": [
      {
        "label": "Energy Star",
        "text": "An outside label for compact fridges, shown on the listing. Midea 2.7 Cu Ft Energy Star Mini Fridge and BLACK+DECKER 1.7 Cu Ft Compact Refrigerator fall here."
      },
      {
        "label": "Seller kWh claim",
        "text": "A number from the seller, useful for comparing but not independently confirmed. Upstreman 1.7 Cu Ft Mini Fridge with Freezer, Frestec 3.2 Cu Ft Mini Fridge with Freezer and Frostorm 3.2 Cu Ft Mini Fridge with Freezer fall here."
      }
    ],
    "note": "Pick Energy Star when you can, and a kWh claim only as a tiebreaker."
  },
  {
    "subheading": "Freezer Needs",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "No freezer needed",
          "Midea 2.7 Cu Ft Energy Star Mini Fridge"
        ],
        [
          "Ice cubes only",
          "Frestec 3.2 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "A small freezer box",
          "Frostorm 3.2 Cu Ft Mini Fridge with Freezer"
        ],
        [
          "Real frozen food",
          "Electactic 4.5 Cu Ft Two-Door Mini Fridge"
        ]
      ]
    }
  },
  {
    "subheading": "For Dorm Rooms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A cubic-foot size within your school's cap, a compressor, and a quiet running figure."
      },
      {
        "label": "In this comparison",
        "text": "BLACK+DECKER 1.7 Cu Ft Compact Refrigerator and Upstreman 1.7 Cu Ft Mini Fridge with Freezer are the smallest options and fit most caps."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want Energy Star proof or a real freezer. Midea 2.7 Cu Ft Energy Star Mini Fridge and Electactic 4.5 Cu Ft Two-Door Mini Fridge cover those."
      },
      {
        "label": "Save if",
        "text": "You need space for drinks and snacks. Frestec 3.2 Cu Ft Mini Fridge with Freezer and Upstreman 1.7 Cu Ft Mini Fridge with Freezer cost far less."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Is an Energy Star mini fridge really cheaper to run?",
    "a": "Usually yes, since Energy Star models must beat the federal standard by a stated margin. The Midea lists 255 kWh per year, which at typical rates costs roughly $40 to $60 a year. A non-certified model may cost more, so compare the yearly kWh on the Energy Guide label."
  },
  {
    "q": "Are those daily kWh claims reliable?",
    "a": "Treat them cautiously. The Upstreman claims 0.5 kWh per day, the Frestec 0.55, and the Frostorm 0.6, but none shows an Energy Star label in the listing. A seller figure is not a lab figure, so compare it only with other seller claims and be skeptical of very low numbers."
  },
  {
    "q": "Is the Midea worth the premium over the Frestec?",
    "a": "If you want a verified number, yes. The Midea lists Energy Star and 255 kWh per year in 2.7 cu ft, while the Frestec lists 3.2 cu ft with a freezer and a claimed 0.55 kWh per day for much less money. The Frestec is bigger for the price, but unverified."
  },
  {
    "q": "Can I put a 4.5 cu ft fridge in a dorm?",
    "a": "Check your rules. Many halls cap size near 4 cu ft, and the Electactic lists 3.64 cu ft of fridge plus a freezer, totalling 4.5. A 1.7 cu ft model like the BLACK+DECKER or Upstreman is safe almost everywhere and uses less power."
  },
  {
    "q": "How much space does a mini fridge need behind it?",
    "a": "Leave a few inches at the back and sides so warm air can escape, and do not push it flush into a closet. Poor airflow makes the compressor work harder and increases both noise and the yearly kWh. Keep it out of direct sun, and level on a flat floor."
  },
  {
    "q": "How do I defrost a fridge with a small freezer?",
    "a": "Unplug it, remove the food, and let the ice melt into a towel or tray. The Frestec lists one-touch defrost, which simplifies the job. Do not chip ice with a knife, because a punctured evaporator ruins the unit. Wipe dry before restarting."
  }
];

export const relatedGuides = [
  {
    "href": "/guide/best-heated-blankets-for-dorm-rooms",
    "title": "Best Heated Blankets for Dorm Rooms"
  },
  {
    "href": "/guide/best-electric-kettles-for-office",
    "title": "Best Electric Kettles for the Office"
  },
  {
    "href": "/guide/best-electric-kettles-for-dorm",
    "title": "Best Electric Kettles for Dorm Rooms"
  }
];
