export const guideSlug = "best-mini-fridges-under-100";
export const guideTitle = "7 Best Mini Fridges Under $100 in 2026";
export const metaTitle = "Best Mini Fridges Under $100 in 2026";
export const metaDescription = "Seven mini fridges priced at $100 or less, from a dual door compact model to portable 4L coolers, compared on cooling type, capacity and power options.";
export const mainKeyword = "mini fridge under 100";
export const introParagraphs = [
  "Under $100 the mini fridge market splits into two very different products, and the listing photos often hide it. A few models are true small refrigerators with a door-mounted thermostat dial and a freezer section. Most of the rest are 4 to 15 liter countertop boxes that use thermoelectric chips, hold a handful of cans, and can only cool so far below the room temperature.",
  "We kept both kinds because both show up in this price range, but we sorted them honestly: the first two picks are the closest to a real fridge, and the other five are personal coolers for drinks, snacks and skincare. Every price is $100 or under at the time of data pull. We compared them on listed capacity, cooling method, power cords and the details each listing actually states."
];
export const lastUpdated = "2026-10-21";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/4133rQvWcOL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-mini-fridges-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "TACOOL 2.4 Cu Ft Dual Door Mini Fridge",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4133rQvWcOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7WPRGM5?tag=deskfinds0d-20",
    "description": "TACOOL is the closest thing to a real apartment fridge at this price. It measures 14.96 by 14.57 by 30.8 inches, and the listing describes an independent dual-zone layout with separate freezing and refrigeration, about 1.6 cu ft of which is the fridge side. Temperature is set with a manual internal dial, and the seller suggests setting 5.\n\nCompared with the KRIB below, TACOOL gives you a believable footprint and a clearer description of how the two zones work, while KRIB advertises more cubic feet for less money with much thinner detail. Against the portable coolers further down, it is the only pick that is meant to hold real groceries.\n\nBest for a single student who wants a freezer and a fridge for under $100. The caveat is that it sits at the top of the budget at 99.99, plastic shelves are used, and the seller asks you to leave it upright for at least 24 hours before plugging it in.",
    "specs": [
      "2.4 cu ft, two doors",
      "14.96 x 14.57 x 30.8 inches",
      "Manual dial, 7 gear levels"
    ],
    "pros": [
      "Separate freezing and fridge zones",
      "Slim footprint for tight corners",
      "Manual dial, simple to use",
      "Real fridge capacity for the money"
    ],
    "cons": [
      "Plastic shelves",
      "Must stand upright 24 hours first"
    ],
    "bestFor": "A first real dorm fridge on a tight budget"
  },
  {
    "id": "best-mini-fridges-under-100-2",
    "rank": 2,
    "badge": "Biggest Listed Capacity",
    "name": "KRIB BLING 3.5 Cu Ft Top Freezer Mini Fridge",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Y-nBVHKyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQ2KW95K?tag=deskfinds0d-20",
    "description": "KRIB lists 3.5 cu ft in a top-freezer layout with two doors, seven adjustable temperature speeds, two removable glass shelves, a stainless steel handle, and an ice cube tray and spoon in the box. At $69.99 it is the cheapest true two-door model in this guide.\n\nThe tradeoff against TACOOL above is documentation: the listing gives no dimensions, no noise level and no temperature range, so you are buying more advertised space with less information. Compared with the little portable coolers below, it is a far more useful kitchen replacement if the claims hold up.\n\nBest for a buyer who wants the most room per dollar and is comfortable with a thinly documented listing. The caveat is that the missing dimensions mean you should measure your space against the product images or Q and A before ordering.",
    "specs": [
      "3.5 cu ft, top freezer",
      "7 temperature speeds",
      "Two glass shelves, ice tray"
    ],
    "pros": [
      "Lowest price for a two door",
      "Two removable glass shelves",
      "Ice tray and spoon included",
      "Steel handle feels durable"
    ],
    "cons": [
      "No dimensions or noise listed",
      "Little detail about the cooling system"
    ],
    "bestFor": "Most space for the least money"
  },
  {
    "id": "best-mini-fridges-under-100-3",
    "rank": 3,
    "badge": "Best Portable Cooler and Warmer",
    "name": "Cormix 15L Portable Cooler and Warmer",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41p8f5RItuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJZDVGB4?tag=deskfinds0d-20",
    "description": "Cormix is a 15 liter thermoelectric box that holds about 21 cans once the shelf and door basket are removed. It comes with both an AC cord and a 12V car cord, warms up to 149F, and the listing says it cools 59 to 68F below ambient, reaching as low as 41F.\n\nThat cooling claim is the key difference from the real fridges above: in a warm room it will not get as cold as a compressor model. Against the 4L coolers below, it holds roughly three times as much and is the better fit for lunches and drinks for one person.\n\nBest for a bedroom or office where you want chilled drinks, or a car trip. The caveat is that it relies on ambient temperature, so do not treat it as a safe home for raw meat or dairy in summer.",
    "specs": [
      "15 liters, about 21 cans",
      "Cools and warms to 149F",
      "AC and 12V car cords"
    ],
    "pros": [
      "Holds three times more than 4L boxes",
      "Also warms food to 149F",
      "Works at home and in a car",
      "Removable shelf and door basket"
    ],
    "cons": [
      "Cooling depends on room temperature"
    ],
    "bestFor": "Drinks and lunches for one person"
  },
  {
    "id": "best-mini-fridges-under-100-4",
    "rank": 4,
    "badge": "Best for Gaming Desks",
    "name": "VANZBON 4L Mini Fridge with Gaming Light",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eby4-yAwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCCLLY99?tag=deskfinds0d-20",
    "description": "VANZBON is a 4 liter, 6 can cooler and warmer with a mirrored door, 11 light modes plus a multicolor mode, and a listed noise level of 40 dB. It runs on a household cord or a 12V car cord, and the listing notes that you should shut it off and wait 5 to 10 minutes before changing between cooling and heating.\n\nCompared with BEICHEN just below, it adds the lighting and a stated decibel figure for $10 more, but cooling still follows the thermoelectric limit of 59 to 68F below the room. Against Cormix above, it holds a third of the volume.\n\nBest for a desk where looks matter and you only need a few cold cans or skincare items. The caveat is that the light is a styling feature, not a cooling one, and it will not replace a fridge.",
    "specs": [
      "4 liters, 6 cans",
      "11 light modes, 40 dB",
      "AC and 12V DC power"
    ],
    "pros": [
      "Mirrored door with adjustable lighting",
      "Listed noise is 40 dB",
      "Cooling and heating modes",
      "Works with car cord"
    ],
    "cons": [
      "Tiny 4L interior",
      "Wait 5 to 10 minutes when switching modes"
    ],
    "bestFor": "Gaming desk with a few drinks"
  },
  {
    "id": "best-mini-fridges-under-100-5",
    "rank": 5,
    "badge": "Best Budget 4L Cooler",
    "name": "BEICHEN 4L Portable Mini Fridge",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ZftWIshpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3LRTSMB?tag=deskfinds0d-20",
    "description": "BEICHEN is a 4 liter Peltier cooler that the listing says reaches 41F in good conditions. It holds 6 cans or a few skincare bottles, has a detachable divider, weighs 4.8 pounds, and comes with both AC and 12V DC cords.\n\nIt costs $10 less than VANZBON and drops the light show, which suits a plain desk better. The listing also tells you to leave 6 inches behind the fan for heat to escape, a ventilation rule worth following. Against the Frigidaire 6 can unit next to it, the price is the same, so pick it for the divider and fuller specs.\n\nBest for a buyer who wants a simple, small cooler. The caveat is that the listing, like any thermoelectric cooler, says results depend on room temperature.",
    "specs": [
      "4 liters, 6 cans",
      "4.8 pounds, detachable divider",
      "AC 100 to 120V and 12V DC"
    ],
    "pros": [
      "Light enough to carry easily",
      "Detachable divider adjusts space",
      "Lists a 6 inch rear clearance",
      "Costs under $40"
    ],
    "cons": [
      "Small capacity",
      "Cooling depends on room temperature"
    ],
    "bestFor": "A simple cooler for a few cans"
  },
  {
    "id": "best-mini-fridges-under-100-6",
    "rank": 6,
    "badge": "Best Brand-Name Cooler",
    "name": "Frigidaire 6 Can Mini Fridge Cooler",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41M0pXLN58L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGYK6SVQ?tag=deskfinds0d-20",
    "description": "This Frigidaire is a 4 liter countertop cooler that holds 6 cans and has a door with LED lights. The listing also mentions a carrying handle, a weight of about 3 pounds, and both car and home power cords.\n\nIt is priced the same as BEICHEN, so the choice comes down to brand and the lighted door versus BEICHEN's divider and clearer ventilation notes. Compared with the next pick, the EFMIS171, it adds the LED door and a skincare use, but it does not state a noise figure.\n\nBest for a shopper who prefers a familiar brand for a small gift or desk cooler. The caveat is the same as any thermoelectric box: it cools only a limited number of degrees below the room.",
    "specs": [
      "4 liters, 6 cans",
      "LED light door, 3 pounds",
      "Home and car power cords"
    ],
    "pros": [
      "Familiar brand name",
      "Carry handle and light weight",
      "Works for skincare as well",
      "LED light on the door"
    ],
    "cons": [
      "No noise level listed",
      "Tiny interior"
    ],
    "bestFor": "Small gift or desk cooler"
  },
  {
    "id": "best-mini-fridges-under-100-7",
    "rank": 7,
    "badge": "Cheapest Pick",
    "name": "Frigidaire EFMIS171 Retro Personal Fridge",
    "price": "$35.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21s8HpA8kxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FTGGSL2S?tag=deskfinds0d-20",
    "description": "The EFMIS171 is a retro-styled thermoelectric mini fridge priced at $35. It measures 10 by 7 by 10.5 inches outside, has a 4 liter interior of 5 by 5 by 7.5 inches that chills six cans, weighs about 3 pounds, and has a flush back for placement against a wall.\n\nIt is the cheapest model here and the only one that lists interior dimensions, which helps you check whether a tall bottle will fit. Compared with the Frigidaire 6 can cooler above, it drops the LED lights but adds the retro look and clearer sizing.\n\nBest for a very small budget or a gift. The caveat is the tiny interior and thermoelectric cooling, so it suits drinks and snacks, not groceries.",
    "specs": [
      "4 liters, 6 cans",
      "Interior 5 x 5 x 7.5 inches",
      "Flush back, 3 pounds"
    ],
    "pros": [
      "Lowest price in this guide",
      "Interior dimensions are listed",
      "Flush back fits against a wall",
      "Retro styling"
    ],
    "cons": [
      "Smallest interior",
      "Thermoelectric cooling limits"
    ],
    "bestFor": "Very small budgets and gifts"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Real fridge or personal cooler",
    "explanation": "Under $100 there are two product types: small compressor-style refrigerators with a freezer, and thermoelectric coolers that run on a Peltier chip. A thermoelectric box such as Cormix lists cooling of 59 to 68F below the room, so in an 80F dorm it may not get cold enough for safe dairy or leftovers. Look at the title and bullets for words like freezer, dual door and thermostat dial for a real fridge, and cooler and warmer or 12V DC for a personal cooler."
  },
  {
    "criterion": "Capacity in liters, cans and cu ft",
    "explanation": "Listings quote capacity in three different units, and they do not convert neatly. A 4 liter box holds six cans, a 15 liter box about 21 cans with the shelves removed, and a 2.4 cu ft fridge is about 68 liters. Decide what you actually need to store, then compare using the same unit across listings."
  },
  {
    "criterion": "Rear clearance and ventilation",
    "explanation": "Every cooling unit sheds heat, and the fan side needs open air. BEICHEN's listing asks for 6 inches of space behind the fan, which is easy to ignore if you wedge the cooler against a wall or under a monitor. Blocked airflow reduces cooling and can shorten the life of the unit, so read the placement note before choosing a spot."
  },
  {
    "criterion": "Power cords and mode switching",
    "explanation": "Portable coolers often include an AC cord and a 12V car cord, but the cooling and heating modes may not switch instantly. VANZBON advises turning it off and waiting 5 to 10 minutes before changing modes, because rapid switching can stress the chip. Check the listing for both cords and any switching rules, especially if you plan to move it between a car and a room."
  },
  {
    "criterion": "Documented specs versus claims",
    "explanation": "At low prices some listings give you nothing but a size and a photo. KRIB advertises 3.5 cu ft but lists no dimensions, noise or temperature range, while TACOOL gives exact outside measurements. Prefer a listing that states dimensions, so you can confirm it fits your space, and check Q and A for the missing numbers."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Cooling type",
    "description": "We sorted picks into real two-zone fridges and thermoelectric coolers, because that decides whether food can be stored safely in a warm room."
  },
  {
    "title": "Capacity for the price",
    "description": "Listed liters, cans and cubic feet were compared against price, with extra credit for a freezer section."
  },
  {
    "title": "Listing transparency",
    "description": "Dimensions, noise levels, temperature ranges and cord details were counted, since a thin listing hides risk."
  },
  {
    "title": "Power and placement",
    "description": "AC and 12V cords, clearance needs and mode switching rules were noted for each pick."
  },
  {
    "title": "Price ceiling",
    "description": "Only items priced at $100 or less were kept, and accessories like fridge locks were removed."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By What You Store",
    "intro": "Match the product type to the food before you look at style.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Groceries, leftovers and frozen food",
          "TACOOL 2.4 Cu Ft Dual Door Mini Fridge"
        ],
        [
          "Maximum space on a very tight budget",
          "KRIB BLING 3.5 Cu Ft Top Freezer Mini Fridge"
        ],
        [
          "Drinks and lunch for one, and a car trip",
          "Cormix 15L Portable Cooler and Warmer"
        ],
        [
          "A few cans on a gaming desk",
          "VANZBON 4L Mini Fridge with Gaming Light"
        ],
        [
          "A lunch box sized chill for a small gift",
          "Frigidaire EFMIS171 Retro Personal Fridge"
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
          "$35 to $40",
          "Frigidaire 6 Can Mini Fridge Cooler"
        ],
        [
          "Under $40",
          "BEICHEN 4L Portable Mini Fridge"
        ],
        [
          "About $50",
          "VANZBON 4L Mini Fridge with Gaming Light"
        ],
        [
          "$70",
          "KRIB BLING 3.5 Cu Ft Top Freezer Mini Fridge"
        ],
        [
          "$90 to $100",
          "TACOOL 2.4 Cu Ft Dual Door Mini Fridge"
        ]
      ]
    }
  },
  {
    "subheading": "Thermoelectric Box vs Two Door Fridge",
    "cards": [
      {
        "label": "Thermoelectric box",
        "text": "A Peltier chip moves heat out of a small sealed box and cools a limited amount below room temperature, so it is great for drinks and skincare but weak in a hot room. Picks here: Cormix 15L Portable Cooler and Warmer, VANZBON, BEICHEN and both Frigidaire coolers."
      },
      {
        "label": "Two door fridge",
        "text": "A refrigerant cycle with a thermostat dial holds a set temperature and offers a freezer, but it is larger and needs upright rest before use. Picks here: TACOOL 2.4 Cu Ft Dual Door Mini Fridge and KRIB BLING 3.5 Cu Ft Top Freezer Mini Fridge."
      }
    ],
    "note": "If you will store anything perishable, go with a two door model; otherwise a small cooler is enough."
  },
  {
    "subheading": "By Portability",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest to carry",
          "Frigidaire EFMIS171 Retro Personal Fridge"
        ],
        [
          "Carry handle plus LED door",
          "Frigidaire 6 Can Mini Fridge Cooler"
        ],
        [
          "Detachable divider, 4.8 pounds",
          "BEICHEN 4L Portable Mini Fridge"
        ],
        [
          "Larger volume for road trips",
          "Cormix 15L Portable Cooler and Warmer"
        ]
      ]
    }
  },
  {
    "subheading": "For Skincare Storage Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A small interior, a quiet running figure and the ability to set up on a shelf in a bedroom. Check that a tall serum bottle fits, using listed interior size when given."
      },
      {
        "label": "In this comparison",
        "text": "Frigidaire EFMIS171 Retro Personal Fridge lists a 5 by 5 by 7.5 inch interior, and Frigidaire 6 Can Mini Fridge Cooler explicitly mentions skincare. VANZBON 4L Mini Fridge with Gaming Light adds a mirror door and a 40 dB listed noise."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want to store dairy or leftovers, or you live in a warm room. TACOOL 2.4 Cu Ft Dual Door Mini Fridge is the pick, and moving up to a $120 or higher compressor fridge would be better still."
      },
      {
        "label": "Save if",
        "text": "You only need cold cans or a few skincare items. BEICHEN 4L Portable Mini Fridge and Frigidaire EFMIS171 Retro Personal Fridge are both under $40."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Can a mini fridge under $100 hold food safely?",
    "a": "A two door model with a thermostat dial is the safer bet. Thermoelectric coolers, which dominate this price band, list cooling of only about 59 to 68F below the room, so they may not keep dairy or meat cold in a warm room."
  },
  {
    "q": "Should I leave a new mini fridge standing before plugging in?",
    "a": "Yes for the compressor type. TACOOL's listing asks for at least 24 hours upright first. Thermoelectric coolers do not have this requirement."
  },
  {
    "q": "Is the KRIB 3.5 cu ft worth it over TACOOL?",
    "a": "You get more advertised space and a lower price, but far less information. TACOOL lists exact dimensions, so it is easier to be sure it fits, while KRIB buyers should check images and Q and A first."
  },
  {
    "q": "How much space should I leave around a portable cooler?",
    "a": "BEICHEN recommends about 6 inches behind the fan so heat can escape. Treat that as a general rule for any thermoelectric cooler, and do not push it hard against a wall or under a monitor."
  },
  {
    "q": "Can I switch cooling and warming modes back to back?",
    "a": "VANZBON's listing says to switch off and wait 5 to 10 minutes before changing modes. Follow the same pause for similar dual mode coolers."
  },
  {
    "q": "Are these fine for a dorm room?",
    "a": "Small coolers rarely run into appliance bans, but a two door fridge counts as a refrigerator under most housing rules. Check your school's size cap and plug directly into the wall."
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
