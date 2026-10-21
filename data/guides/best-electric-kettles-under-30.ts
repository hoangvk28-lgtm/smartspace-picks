export const guideSlug = "best-electric-kettles-under-30";
export const guideTitle = "7 Best Electric Kettles Under $30 in 2026";
export const metaTitle = "Best Electric Kettles Under $30 in 2026";
export const metaDescription = "Seven electric kettles priced at $30 or less, from full-size 1.7L models to foldable travel units, compared on wattage, materials and shutoff safety.";
export const mainKeyword = "electric kettle under $30";
export const introParagraphs = [
  "Thirty dollars is enough for a kettle that does the one job well, which is boiling water and switching itself off. Where cheap kettles go wrong is in the details: plastic inside the lid, no boil-dry protection, or a wattage claim that does not match the pot size.",
  "Every pick below is priced at $29.99 or less, and the price sets the order within each tier of size. We compared listed specs: capacity, wattage, interior material, protective shutoffs and footprint, and we left out anything that looked too thin to evaluate honestly. Expect a plainer feature set than the $50 tier, with temperature control mostly out of reach."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31A4i9qIzLL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-electric-kettles-under-30-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Tuehakny 1.0L Triple-Wall Electric Kettle 1000W",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31A4i9qIzLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6FJ73SG?tag=deskfinds0d-20",
    "description": "Tuehakny is a 1.0L, 1000W kettle with a 304 stainless steel interior and a triple-wall insulated shell. It shuts off automatically at a rolling boil and uses a one-touch switch.\n\nIt sits at the top of the price range here, but the triple wall gives a cooler exterior than the Comfee below. The tradeoff is capacity, since Comfee holds 1.7L for less money.\n\nBest for a desk or dorm shelf where an exterior that stays cool matters. The caveat is that it is the priciest pick here and the listing does not name boil-dry protection separately.",
    "specs": [
      "1000W, 1.0L",
      "Triple-wall insulated shell",
      "304 stainless interior"
    ],
    "pros": [
      "Cool-touch triple-wall body",
      "Stainless steel interior",
      "Auto shut-off at boil",
      "Right size for one or two"
    ],
    "cons": [
      "Costs the most in this guide",
      "No boil-dry protection named"
    ],
    "bestFor": "A cool-touch kettle on a crowded desk"
  },
  {
    "id": "best-electric-kettles-under-30-2",
    "rank": 2,
    "badge": "Best Large Capacity",
    "name": "Comfee 1.7L Stainless Steel Electric Kettle 1500W",
    "price": "$22.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EQ7SJPmlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08CDTN15F?tag=deskfinds0d-20",
    "description": "Comfee is a 1.7L kettle at 1500W, with a 304 stainless steel inner pot and base and a concealed heating element. A wide mouth makes filling and cleaning easy, and the lid pops up with a release button.\n\nCompared with Tuehakny above, it holds nearly twice as much water and costs less, but it is a bigger, higher-draw appliance. Against Aigostar below, it is faster and steel-lined.\n\nPick it for a shared kitchen or office where several people want hot water. The caveat is 1500W, which will not fit strict dorm wattage caps.",
    "specs": [
      "1500W, 1.7L",
      "Concealed heating element",
      "Wide mouth lid"
    ],
    "pros": [
      "Biggest pot under $30",
      "Concealed element, easy to clean",
      "Stainless steel pot and base",
      "Overheat shutoff via thermostat"
    ],
    "cons": [
      "1500W exceeds many dorm caps",
      "Large for small desks"
    ],
    "bestFor": "Shared offices and kitchens"
  },
  {
    "id": "best-electric-kettles-under-30-3",
    "rank": 3,
    "badge": "Best Plastic Body Budget",
    "name": "Aigostar 1L Small Electric Kettle 1100W",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pBMhWZN4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07F8M58GK?tag=deskfinds0d-20",
    "description": "Aigostar is a 1L kettle at 1100W with a plastic body, which the listing describes as BPA-free food-grade plastic. It has a folding wide lid and cord storage, and it is aimed at one to three people.\n\nCompared with Comfee above, it is smaller and plastic rather than steel, but it costs a few dollars less. Against Tuehakny, it lacks insulation.\n\nBest for a tight budget where plastic contact is acceptable. The caveat is that it is not a plastic-free kettle, so skip it if that matters.",
    "specs": [
      "1100W, 1L",
      "BPA-free plastic body",
      "Cord wrap storage"
    ],
    "pros": [
      "Low price",
      "Compact 1 liter size",
      "Fold-out wide lid",
      "Cord wraps for storage"
    ],
    "cons": [
      "Plastic water contact",
      "No double wall insulation"
    ],
    "bestFor": "Shoppers who accept plastic to save money"
  },
  {
    "id": "best-electric-kettles-under-30-4",
    "rank": 4,
    "badge": "Best Temperature Modes",
    "name": "JEKABA Portable Kettle with 4 Temperature Modes",
    "price": "$25.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51LCd3jwSjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DG5ZLPS7?tag=deskfinds0d-20",
    "description": "JEKABA is a small travel kettle with four temperature presets, 212, 176, 131 and 113F, a touch LCD showing live temperature and a 304 stainless steel inner. The listing says it boils a large mug of about 16 oz.\n\nIt is the only pick here with temperature control, so it can handle green tea where the others cannot. The tradeoff versus Comfee is capacity: this serves a mug or two.\n\nBest for a tea drinker with a small desk. The caveat is the PP outer housing and small volume, plus the wattage not being clear in the listing.",
    "specs": [
      "4 temperature presets",
      "LCD with live temperature",
      "16 oz mug capacity"
    ],
    "pros": [
      "Only temperature control under $30",
      "Live temperature display",
      "Stainless steel inner",
      "Compact for travel"
    ],
    "cons": [
      "Tiny capacity",
      "Wattage not clearly listed"
    ],
    "bestFor": "Green tea drinkers on a budget"
  },
  {
    "id": "best-electric-kettles-under-30-5",
    "rank": 5,
    "badge": "Best Foldable Travel Kettle",
    "name": "DCIGNA Foldable Dual Voltage Travel Kettle",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nct9aYVpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DNHS7FXN?tag=deskfinds0d-20",
    "description": "DCIGNA folds to 5.9 by 5.5 by 1.9 inches and weighs 0.94 lb. Its heating plate and lid are 304 stainless steel, the body is food-grade protective material, and the cord and handle detach.\n\nCompared with JEKABA above, it packs much flatter but lacks temperature modes. Against resgitiati below, it adds dual voltage and a keep-warm function per the listing.\n\nBest for frequent travelers. The caveat is that foldable bodies are not as durable as steel and are slower per cup.",
    "specs": [
      "Folds to 1.9 inches thick",
      "Dual voltage",
      "0.94 lb weight"
    ],
    "pros": [
      "Folds nearly flat",
      "Dual voltage for travel",
      "Detachable cord and handle",
      "Stainless plate and lid"
    ],
    "cons": [
      "Less sturdy than steel",
      "Small boil volume"
    ],
    "bestFor": "Travelers who pack light"
  },
  {
    "id": "best-electric-kettles-under-30-6",
    "rank": 6,
    "badge": "Best 600W Pick",
    "name": "Wdcme 0.8L 600W Travel Kettle",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uYv0wJwOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQ62474Q?tag=deskfinds0d-20",
    "description": "Wdcme is a 0.8L kettle at 600W with a double-layer body and stainless steel inner, claiming a roughly 5 minute boil. It is small enough for a suitcase.\n\nCompared with DCIGNA above, it is a rigid steel body rather than foldable. Against Tuehakny, it draws far less power and is slower.\n\nBest for strict dorm wattage caps. The caveat is the 5 minute wait.",
    "specs": [
      "600W, 0.8L",
      "Double-layer body",
      "Stainless steel inner"
    ],
    "pros": [
      "Low 600W draw",
      "Rigid stainless build",
      "Low price",
      "Suitcase size"
    ],
    "cons": [
      "About 5 minute boil",
      "Generic brand"
    ],
    "bestFor": "Low-wattage dorm rooms"
  },
  {
    "id": "best-electric-kettles-under-30-7",
    "rank": 7,
    "badge": "Cheapest Collapsible",
    "name": "resgitiati Collapsible Silicone Travel Kettle",
    "price": "$15.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xV9Wdt-fL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRMRPRN4?tag=deskfinds0d-20",
    "description": "This collapsible kettle uses food-grade silicone with 304 stainless steel, with auto shut-off, a one-button switch, anti-spill spout and detachable cord.\n\nCompared with DCIGNA above, it costs less but gives fewer details. Silicone also means water touches silicone, which some buyers prefer to avoid.\n\nBest for occasional travel or camping. The caveat is that capacity and wattage are not clear in the listing.",
    "specs": [
      "Silicone and 304 steel",
      "Collapsible body",
      "Detachable cord"
    ],
    "pros": [
      "Lowest price in this guide",
      "Collapses for packing",
      "One-button operation",
      "Auto shut-off"
    ],
    "cons": [
      "Wattage not clearly stated",
      "Silicone water contact"
    ],
    "bestFor": "Occasional trips and camping"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Water-contact materials at low price",
    "explanation": "Cheap kettles often use plastic for the lid, spout or whole body, and BPA-free only means a specific chemical is absent. It matters because hot water sits against that surface every day. Look for 304 stainless steel named for the interior and lid, and read the photos of the open lid."
  },
  {
    "criterion": "Wattage against dorm rules",
    "explanation": "A 1500W kettle boils fast but may break a residence hall cap, while 600W units are slower yet safer to bring. Rules differ by school and some ban kettles. Find the wattage in the title or bullets, and check your housing list before ordering."
  },
  {
    "criterion": "Capacity for how you drink",
    "explanation": "Capacity is how much water fits, and it ranges from about 16 oz travel mugs to 1.7L. Too small and you refill constantly, too large and you heat more than you need. Match liters to cups: roughly 0.25L per mug."
  },
  {
    "criterion": "Boil-dry protection",
    "explanation": "Boil-dry protection cuts power when there is no water, which is separate from auto shut-off at boil. At this price it is where some listings cut corners, and a forgotten empty switch-on can ruin the unit. Look for both terms named explicitly."
  },
  {
    "criterion": "Concealed element and cleaning",
    "explanation": "A concealed element is a flat plate under the water instead of an exposed coil, which is easier to clean and often required in dorms. Exposed coils collect scale that is harder to remove. Check the listing for the phrase or a flat stainless base."
  },
  {
    "criterion": "Return and warranty terms",
    "explanation": "Budget kettles come from many small brands, so the warranty is the real quality signal. A clear return window protects you from leaks or early failure. Read the listing for a stated period and who handles claims."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Price ceiling",
    "description": "Every pick had to list at $29.99 or less at the time of our research, so no tier-stretching."
  },
  {
    "title": "Materials and safety",
    "description": "We compared stainless steel contact surfaces and the shutoff protections named in each listing."
  },
  {
    "title": "Capacity and wattage",
    "description": "Listed liters and watts were weighed against realistic dorm, desk and office use."
  },
  {
    "title": "Portability",
    "description": "Dimensions, folding designs and voltage support mattered for travel picks."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By How Many People",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Just me, one mug",
          "JEKABA Portable Kettle with 4 Temperature Modes"
        ],
        [
          "Me and a roommate",
          "Tuehakny 1.0L Triple-Wall Electric Kettle 1000W"
        ],
        [
          "A shared office kitchen",
          "Comfee 1.7L Stainless Steel Electric Kettle 1500W"
        ],
        [
          "Travel only",
          "DCIGNA Foldable Dual Voltage Travel Kettle"
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
          "Under $16",
          "resgitiati Collapsible Silicone Travel Kettle"
        ],
        [
          "$16 to $20",
          "Wdcme 0.8L 600W Travel Kettle"
        ],
        [
          "$20 to $23",
          "Aigostar 1L Small Electric Kettle 1100W"
        ],
        [
          "$23 to $27",
          "Comfee 1.7L Stainless Steel Electric Kettle 1500W"
        ],
        [
          "$27 to $30",
          "Tuehakny 1.0L Triple-Wall Electric Kettle 1000W"
        ]
      ]
    }
  },
  {
    "subheading": "Steel vs Plastic Body",
    "cards": [
      {
        "label": "Stainless steel",
        "text": "Steel contact surfaces avoid plastic taste and heat exposure on the lid, though bodies can get hot without insulation. Tuehakny 1.0L Triple-Wall Electric Kettle 1000W, Comfee 1.7L Stainless Steel Electric Kettle 1500W and Wdcme 0.8L 600W Travel Kettle fall here."
      },
      {
        "label": "Plastic body",
        "text": "A plastic body is lighter and cheaper but puts plastic near hot water. Aigostar 1L Small Electric Kettle 1100W is the one in this guide, and JEKABA Portable Kettle with 4 Temperature Modes has a PP outer housing."
      }
    ],
    "note": "Choose steel unless budget is the only factor, and read the lid description either way."
  },
  {
    "subheading": "Tea Temperature and Travel Needs",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Delicate tea at 176F",
          "JEKABA Portable Kettle with 4 Temperature Modes"
        ],
        [
          "International outlets",
          "DCIGNA Foldable Dual Voltage Travel Kettle"
        ],
        [
          "Minimum wattage",
          "Wdcme 0.8L 600W Travel Kettle"
        ],
        [
          "Camping or occasional use",
          "resgitiati Collapsible Silicone Travel Kettle"
        ]
      ]
    }
  },
  {
    "subheading": "For Dorm Rooms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A wattage low enough for your school's cap, a concealed or stainless base and a footprint that suits a shelf."
      },
      {
        "label": "In this comparison",
        "text": "Wdcme 0.8L 600W Travel Kettle is the lowest draw, and Tuehakny 1.0L Triple-Wall Electric Kettle 1000W is a middle option if your cap allows 1000W."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want cool-touch insulation or several people to share it. Tuehakny 1.0L Triple-Wall Electric Kettle 1000W and Comfee 1.7L Stainless Steel Electric Kettle 1500W justify a few dollars more."
      },
      {
        "label": "Save if",
        "text": "You travel rarely. Wdcme 0.8L 600W Travel Kettle and resgitiati Collapsible Silicone Travel Kettle cover the basics."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Are cheap electric kettles safe?",
    "a": "They can be, if they have auto shut-off and boil-dry protection named in the listing. Choose a seller with a clear return policy and never run one empty."
  },
  {
    "q": "Is a $30 kettle worth it over a $50 one?",
    "a": "For plain boiling, yes. The extra money buys temperature control, keep-warm or a better build, which only matter if you brew green tea or pour-over."
  },
  {
    "q": "Can I use a 1500W kettle in a dorm?",
    "a": "Only if your school allows it. Many residence halls cap appliances lower or ban kettles, so check first. Comfee 1.7L is 1500W."
  },
  {
    "q": "How do I clean a budget kettle?",
    "a": "Boil water with white vinegar or citric acid, let it sit, rinse and boil fresh water once. Do not submerge the base."
  },
  {
    "q": "Does a plastic kettle affect taste?",
    "a": "It can, especially when new. Rinse and boil a first batch to discard. Steel interiors avoid the problem."
  },
  {
    "q": "Are collapsible kettles durable?",
    "a": "They suit occasional travel, but silicone bodies wear faster than steel. For everyday use, a rigid kettle is the better buy."
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
