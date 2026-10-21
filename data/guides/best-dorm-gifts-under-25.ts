export const guideSlug = "best-dorm-gifts-under-25";
export const guideTitle = "6 Best Dorm Gifts Under $25 in 2026";
export const metaTitle = "Best Dorm Gifts Under $25 in 2026";
export const metaDescription = "Six dorm gift ideas that cost $25 or less, from a bedside wall shelf to a neck reading light, picked for tiny rooms, shared space and housing rules.";
export const mainKeyword = "dorm gifts under $25";
export const introParagraphs = [
  "A $25 ceiling sounds limiting until you remember what a dorm room actually lacks: surfaces, wall space and a way to read without waking a roommate. The gifts that get used past the first week solve one of those problems, and most of them cost well under the cap.",
  "This list covers six very different products, from a no-drill bedside shelf to a joke notepad. We compared them on listed specs and the way each one fits a small shared room: power source, adhesive or mounting method, size, and whether it could clash with common residence hall rules. Prices shift often, so treat the dollar figures as a snapshot and recheck before buying."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ekFYkgPpL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-dorm-gifts-under-25-1",
    "rank": 1,
    "badge": "Best Overall Gift",
    "name": "WallShelfie Damage-Free Bedside Wall Organizer",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ekFYkgPpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZ14KSF9?tag=deskfinds0d-20",
    "description": "This bedside organizer is a small wall shelf meant for the spot beside a bed, holding a phone, remote, glasses or makeup. The listing stresses damage-free removal with no tools or holes, which matters in a room where the wall belongs to the school.\n\nIt is the priciest pick here, right at the ceiling, and it earns the top spot because it fixes a daily annoyance for good, unlike the EastPin light below, which solves one narrower job. Compared with the cheaper decor vines at the bottom, it adds function instead of only looks.\n\nChoose it for a first-year student who ends up piling things on the floor beside a bunk or loft. One caveat: adhesive shelves are only as good as the wall paint and surface they stick to, so remind the recipient to follow the placement instructions and weight limit on the listing.",
    "specs": [
      "Damage-free adhesive removal",
      "Bedside phone and remote shelf",
      "Black finish"
    ],
    "pros": [
      "Fixes cluttered bedside space",
      "No drilling, school friendly",
      "Works for phones, remotes, glasses",
      "Helps in beds with no nightstand"
    ],
    "cons": [
      "Priciest pick here",
      "Sticks only to suitable wall surfaces"
    ],
    "bestFor": "Students with no nightstand"
  },
  {
    "id": "best-dorm-gifts-under-25-2",
    "rank": 2,
    "badge": "Best Tech Gift",
    "name": "EastPin Rechargeable Neck Book Light",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vyQ1gLOJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HDTL92DY?tag=deskfinds0d-20",
    "description": "EastPin's neck light hangs around your shoulders and shines a rectangular floodlight onto a page or craft project. It is rechargeable, with brightness that dims from 100% down to 1% and three color modes, plus a separate spot mode.\n\nAgainst the WallShelfie above it gives a different kind of help: it is light, not storage, but it solves the shared-room problem of reading after a roommate sleeps. It costs a little less than the shelf and is more personal than the sunset lamp, which lights the room rather than the page.\n\nBest for a night reader or a student who studies in bed while a roommate sleeps. The caveat is battery life: the listing does not give a runtime per charge in the features we reviewed, so a gift card for a spare charging cable is a nice add-on.",
    "specs": [
      "Rechargeable, 3 color modes",
      "Dims from 100% to 1%"
    ],
    "pros": [
      "Lights the page, not the room",
      "Adjustable brightness for night use",
      "Rechargeable, no spare batteries",
      "Hands-free around the neck"
    ],
    "cons": [
      "Runtime per charge not clear",
      "Neck wear may feel bulky"
    ],
    "bestFor": "Reading in bed without waking others"
  },
  {
    "id": "best-dorm-gifts-under-25-3",
    "rank": 3,
    "badge": "Best Mood Lighting Gift",
    "name": "Tsrarey Sunset Projection Lamp",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Dk3WMBdCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0925LXDSG?tag=deskfinds0d-20",
    "description": "Tsrarey's lamp projects a sunset glow onto a wall, with a head that rotates 180 degrees. It is a small plug-in projector designed as a night light and a photo backdrop.\n\nIt costs less than the book light and shelf above, and it is purely mood: the other two picks serve a task. Compared with the socks below, it has a bigger visual payoff on opening, though it does need an outlet or power source near the bed.\n\nA good pick for the student who wants to make a cold room feel personal. The caveat is that the listing describes it as a decorative projector, so it is not a reading light, and some halls limit lamps with exposed bulbs or heat sources, so confirm the housing list.",
    "specs": [
      "180 degree rotating head",
      "Sunset projection glow",
      "LED night light"
    ],
    "pros": [
      "Low cost for the visual effect",
      "Rotates to aim at wall or ceiling",
      "Doubles as a photo backdrop",
      "Small enough for a shelf"
    ],
    "cons": [
      "Too dim for real reading",
      "Needs a nearby power source"
    ],
    "bestFor": "Cheap mood lighting"
  },
  {
    "id": "best-dorm-gifts-under-25-4",
    "rank": 4,
    "badge": "Best Cozy Under $10",
    "name": "Unboxme Gifts Cloud Sleep Socks",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MFxPlc+ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B4F45C6Y?tag=deskfinds0d-20",
    "description": "These are mid-calf slouch socks made from a stretchy knit, with a loose top that has no elastic cuff to dig in. The listing pitches them for sleeping and lounging, and they carry a cloud-style plush look.\n\nThey cost about a third of the shelf and far less than the light, which makes them the easy add-on to pair with a larger gift. Unlike the shelf, they need no space at all, and unlike the sunset lamp they never run into a housing rule.\n\nPerfect for anyone with cold tile floors or a drafty first-floor room. The caveat is simplicity: they are a nice small gift and not a standalone present, and sizing is one-size-fits-most per the listing, so very large feet may find them snug.",
    "specs": [
      "Mid-calf slouch fit",
      "No elastic cuff",
      "Plush stretchy knit"
    ],
    "pros": [
      "Costs under $10",
      "No cuff to dig into legs",
      "Plush feel for sleeping",
      "Fits in any care package"
    ],
    "cons": [
      "Not a standalone gift",
      "One size only"
    ],
    "bestFor": "A stocking stuffer for cold floors"
  },
  {
    "id": "best-dorm-gifts-under-25-5",
    "rank": 5,
    "badge": "Best Funny Pick",
    "name": "Peter Pauper Press Adulting Note Pad",
    "price": "$7.41",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OgULBjQiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/1441322698?tag=deskfinds0d-20",
    "description": "This is a to-do notepad in a joking voice, with sections like errands you can no longer ignore and boxes for checking off small wins. It also has a spot to note your mood and how you adulted that day.\n\nAt roughly $7 it sits between the socks and the vines. It is the only pick here aimed at planning, so it pairs well with the bedside shelf or the neck light as a second gift.\n\nBest for a student who likes humor and keeps lists. The caveat is that it is paper, so a student who tracks tasks on a phone may not use it, and the jokes lean on adult life more than campus life.",
    "specs": [
      "Humorous to-do pages",
      "Mood and tasks tracker"
    ],
    "pros": [
      "Cheap and easy to wrap",
      "Turns planning into a joke",
      "Flat, fits any desk drawer",
      "Works as a care package filler"
    ],
    "cons": [
      "Only useful for list writers",
      "Humor may not suit everyone"
    ],
    "bestFor": "List makers who like humor"
  },
  {
    "id": "best-dorm-gifts-under-25-6",
    "rank": 6,
    "badge": "Best Decor Under $5",
    "name": "ARTKAIKE Fake Ivy Vines 12 Pack",
    "price": "$4.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/61teqbGyXJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BY8Z72BJ?tag=deskfinds0d-20",
    "description": "ARTKAIKE sells 12 faux ivy strands, each about 7 feet long, for 84 feet total. The leaves are silk and the stems are plastic, with leaf diameters of about 1.5 to 1.8 inches.\n\nIt is the lowest priced pick here and the most flexible for decorating, since you can drape it over a headboard or along a shelf. Unlike the sunset lamp it adds no light, and unlike the shelf it holds nothing, but it covers a lot of wall for the money.\n\nChoose this for a student who wants a leafy, aesthetic look without real plants, which many rooms lack the light to keep alive. The caveat is that the listing does not state a fire rating or hanging method, so keep the vines away from lamps and use removable hooks.",
    "specs": [
      "12 strands, 84 feet total",
      "Silk leaves, plastic stems"
    ],
    "pros": [
      "Very low price per foot",
      "Covers a lot of wall",
      "No watering needed",
      "Easy to cut and reshape"
    ],
    "cons": [
      "No stated hanging method",
      "Keep away from heat and lamps"
    ],
    "bestFor": "Cheap wall decor"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Housing rules before gift",
    "explanation": "Every college posts a list of prohibited items, and many ban candles, extension cords, halogen lamps and open-element appliances. A gift that violates the list can be confiscated at room checks, which wastes your money and embarrasses the student. Search the school's residence life page for the prohibited items list and compare it to anything that plugs in or heats up."
  },
  {
    "criterion": "Damage-free mounting",
    "explanation": "Dorm walls are usually cinder block or painted drywall that the school expects back unmarked, so nails and screws are out. Adhesive strips and removable hooks work only when their listed weight limits and surface types match the wall. Look for the phrase damage-free removal and a stated weight capacity in the bullets, not just a vague claim."
  },
  {
    "criterion": "Size versus a tiny room",
    "explanation": "A typical dorm desk and bed leave very little floor, so a gift that arrives in a big box can become a burden. Look at the product dimensions, not the photo, and ask whether it hangs on the wall, sits on a shelf or needs floor space. Wall mounted and flat items almost always win in a double room."
  },
  {
    "criterion": "Power source and cords",
    "explanation": "Battery and USB gifts are easiest, while mains plug-in items compete for the one or two outlets near the bed. A rechargeable item like a book light avoids that fight entirely. Check whether the product lists a rechargeable battery, a USB cable or a wall plug, and whether the cable is included."
  },
  {
    "criterion": "Noise and light for roommates",
    "explanation": "In a shared room your gift can land on someone else's sleep. Bright lamps, speakers and buzzing gadgets are unwelcome after midnight. Pick items with dimming, a low setting or no sound, and read the listing for brightness steps instead of a single on-off mode."
  },
  {
    "criterion": "Price tier and add-on value",
    "explanation": "Under $25 you are choosing between one mid-priced item and several small ones. A pair of small items often beats one filler gift because the student gets a utility item and a comfort item. Compare prices on the day you buy, since the Amazon prices listed here move often."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Fit for a small room",
    "description": "We compared dimensions, mounting method and footprint for each product, favoring wall and shelf friendly items over floor hogs."
  },
  {
    "title": "Housing rule risk",
    "description": "Items likely to run into common prohibited lists, such as open flame, heat or exposed bulbs, were noted and ranked lower."
  },
  {
    "title": "Daily usefulness",
    "description": "We weighed whether a student would reach for the gift every day rather than once, based on listed features and typical dorm needs."
  },
  {
    "title": "Price at or under $25",
    "description": "Every pick was priced at or below $25 when the data was gathered, and we judged value against what the listing actually documents."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Recipient Type",
    "intro": "Match the gift to the student's biggest daily frustration.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Messy bedside, nowhere for a phone",
          "WallShelfie Damage-Free Bedside Wall Organizer"
        ],
        [
          "Stays up late reading",
          "EastPin Rechargeable Neck Book Light"
        ],
        [
          "Wants a cozy, personal room",
          "Tsrarey Sunset Projection Lamp"
        ],
        [
          "Always has cold feet",
          "Unboxme Gifts Cloud Sleep Socks"
        ],
        [
          "Loves lists and dry humor",
          "Peter Pauper Press Adulting Note Pad"
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
          "Under $5",
          "ARTKAIKE Fake Ivy Vines 12 Pack"
        ],
        [
          "$7 to $10",
          "Unboxme Gifts Cloud Sleep Socks"
        ],
        [
          "$7 to $8",
          "Peter Pauper Press Adulting Note Pad"
        ],
        [
          "$13 to $14",
          "Tsrarey Sunset Projection Lamp"
        ],
        [
          "$19 to $20",
          "EastPin Rechargeable Neck Book Light"
        ],
        [
          "$24 to $25",
          "WallShelfie Damage-Free Bedside Wall Organizer"
        ]
      ]
    }
  },
  {
    "subheading": "Useful vs Decorative",
    "cards": [
      {
        "label": "Useful gifts",
        "text": "These solve a problem every day and are what most students keep. In this guide that is WallShelfie Damage-Free Bedside Wall Organizer and EastPin Rechargeable Neck Book Light."
      },
      {
        "label": "Decorative gifts",
        "text": "These change how a room feels but do no work, so they land best as a second gift. That covers Tsrarey Sunset Projection Lamp and ARTKAIKE Fake Ivy Vines 12 Pack."
      }
    ],
    "note": "If you only buy one thing, make it useful and add a decorative item on top."
  },
  {
    "subheading": "Gift Giving Occasion",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Move-in day care package",
          "WallShelfie Damage-Free Bedside Wall Organizer"
        ],
        [
          "Finals week encouragement",
          "EastPin Rechargeable Neck Book Light"
        ],
        [
          "Birthday stocking stuffer",
          "Unboxme Gifts Cloud Sleep Socks"
        ],
        [
          "Graduation or milestone joke gift",
          "Peter Pauper Press Adulting Note Pad"
        ]
      ]
    }
  },
  {
    "subheading": "For Shared Rooms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Quiet, low-light and low-power items that do not need a wall outlet or loud features. Wall mounting that leaves no marks is also valuable."
      },
      {
        "label": "In this comparison",
        "text": "EastPin Rechargeable Neck Book Light and WallShelfie Damage-Free Bedside Wall Organizer fit best: one is rechargeable and dimmable, the other mounts without tools."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "The student shares a room or sleeps on a loft where space is scarce. WallShelfie Damage-Free Bedside Wall Organizer is the top-priced pick and fixes a real storage gap."
      },
      {
        "label": "Save if",
        "text": "You want a small treat to pair with another gift. Unboxme Gifts Cloud Sleep Socks and Peter Pauper Press Adulting Note Pad cost under $10 and still feel thoughtful."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Are battery or USB gifts safer for dorms than plug-in ones?",
    "a": "Usually yes, because they do not tie up outlets and rarely appear on prohibited lists. Rechargeable items like a neck light also avoid the extension cord problem that many halls forbid."
  },
  {
    "q": "Do adhesive shelves really come off walls cleanly?",
    "a": "Many are designed to, but results depend on the wall paint and how long the strip has been attached. Follow the listing's weight limit, press for the stated time and remove strips slowly as directed."
  },
  {
    "q": "Is a projector lamp worth it over a string of lights?",
    "a": "A projector gives a bigger visual change from one small device, while string lights can be limited by hall rules on how many strings are allowed. Check the housing list for both before choosing."
  },
  {
    "q": "How do I wrap or ship these for a care package?",
    "a": "Flat items like the notepad and socks fit in a padded envelope, while the shelf and vines need a small box. Avoid shipping rechargeable lights loose in a hot car."
  },
  {
    "q": "Can I gift something funny without it feeling cheap?",
    "a": "Yes, if it pairs with something useful. A joke notepad next to a bedside shelf reads as thoughtful instead of throwaway."
  },
  {
    "q": "Will faux vines be a fire hazard near lamps?",
    "a": "Artificial plants are not tested for heat resistance in this listing, so keep them off lamp shades and away from heaters. Hang them from removable hooks at a safe distance."
  }
];

export const relatedGuides = [
  {
    "href": "/guide/best-dorm-gifts-for-college-students",
    "title": "Best Dorm Gifts for College Students 2026"
  },
  {
    "href": "/guide/best-dorm-gifts-for-girls",
    "title": "Best Dorm Gifts for Girls"
  },
  {
    "href": "/guide/best-dorm-gifts-for-guys",
    "title": "Best Dorm Gifts for Guys"
  }
];
