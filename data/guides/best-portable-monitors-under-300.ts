export const guideSlug = "best-portable-monitors-under-300";
export const guideTitle = "7 Best Portable Monitors Under $300 in 2026";
export const metaTitle = "Best Portable Monitors Under $300 (2026)";
export const metaDescription = "Seven portable monitors under $300 compared, including OLED, 4K and touch panels, a stylus screen and a 17.3 inch model, for creatives and frequent travelers.";
export const mainKeyword = "portable monitors under 300";
export const introParagraphs = [
  "Once you pass $150, a portable monitor is no longer a cheaper copy of a regular screen: the extra money buys OLED panels, 4K resolution on a 15 inch body, touch and stylus input. That makes this tier about choosing a specialty rather than just a bigger screen, so the question is what you want the second display to do that a basic one cannot.",
  "We evaluated seven monitors from their listings and ordered them by how well the extra spend translates into everyday use. A few picks lean toward creative work, others toward travel, and every price figure here is an approximate band because Amazon prices move."
];
export const lastUpdated = "2026-10-28";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41OaPMSz-EL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-monitors-under-300-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ASUS ZenScreen MB16AHG",
    "price": "$150 to $200",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OaPMSz-EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQPRLP1T?tag=deskfinds0d-20",
    "description": "The ASUS ZenScreen MB16AHG is a 15.6 inch 1080p IPS panel with a 144Hz refresh rate and FreeSync Premium, two USB-C ports (DP Alt Mode) and a mini HDMI input. The fold-out kickstand supports both landscape and portrait positions, and the listing mentions a three-month Adobe Creative Cloud offer.\n\nAmong the panels here it is the least exotic, with no OLED, 4K or touch, but it is also the most balanced: high refresh, solid brand, and no weight penalty from touch layers. The AOC OLED beats it on contrast and colour, and the EVICIV beats it on sharpness.\n\nIt is the default recommendation when you want something dependable without paying for a specialty feature. The caveat is that at this price some buyers will want more than 1080p, in which case look to the two panels below it.",
    "specs": [
      "15.6 inch 1080p IPS, 144Hz",
      "FreeSync Premium, two USB-C and mini HDMI",
      "Kickstand, landscape and portrait"
    ],
    "pros": [
      "144Hz with FreeSync Premium",
      "Two USB-C ports with DP Alt Mode",
      "Stands in landscape or portrait",
      "Established brand with a software bundle"
    ],
    "cons": [
      "1080p only",
      "Not the sharpest in this price band"
    ],
    "bestFor": "most buyers who want a dependable fast screen from a known brand"
  },
  {
    "id": "best-portable-monitors-under-300-2",
    "rank": 2,
    "badge": "Best OLED Value",
    "name": "AOC 16T40D OLED",
    "price": "$150 to $200",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412gknlKP6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H814RGHQ?tag=deskfinds0d-20",
    "description": "The AOC 16T40D is a 16 inch OLED panel at 1920x1200 with a 16:10 shape, 95% DCI-P3 colour and a built-in 0 to 180 degree smart kickstand. It has dual USB-C ports and mini HDMI, two 1W speakers, a low blue mode and a listed weight of 1.12 pounds.\n\nIt is the lowest-priced OLED in this guide and the lightest, which is why it ranks second. Compared with the Junebox it drops touch and the 120Hz refresh, and compared with the ZenScreen it swaps refresh rate for dramatically deeper blacks.\n\nPick it for movies, photo review and design work where contrast matters more than speed. Two cautions: a 60Hz panel will not suit gaming, and OLED can show burn-in if one window stays static for months.",
    "specs": [
      "16 inch OLED 1920x1200, 16:10",
      "95% DCI-P3, 75mm VESA mount",
      "1.12 lb with 0 to 180 degree kickstand"
    ],
    "pros": [
      "OLED contrast at a mid price",
      "Light at 1.12 lb",
      "75mm VESA compatible",
      "Dual USB-C plus mini HDMI"
    ],
    "cons": [
      "60Hz refresh",
      "Resolution below 2K"
    ],
    "bestFor": "buyers who want OLED colour and contrast without a premium price"
  },
  {
    "id": "best-portable-monitors-under-300-3",
    "rank": 3,
    "badge": "Best 4K",
    "name": "EVICIV 15.6-inch 4K Touch",
    "price": "$150 to $200",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413T-jpS1ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1QPK435?tag=deskfinds0d-20",
    "description": "The EVICIV is a 15.6 inch 4K UHD touch monitor with 125% sRGB colour, a peak of 450 nits and 10-point capacitive touch. It is 0.27 inch thin and about 1.8 pounds, connecting through USB-C or mini HDMI without drivers.\n\nOn a 15.6 inch screen 3840x2160 is extremely dense, so text and images look much cleaner than on the ASUS. The trade-off is a heavier power draw and a driver load that older laptops may struggle to push, and it costs about the same as the AOC OLED.\n\nChoose it when sharpness is the priority and you also want to tap or swipe on the screen. The caveat is that at 4K on a small panel you will scale text up in the operating system to read comfortably.",
    "specs": [
      "15.6 inch 3840x2160, 125% sRGB",
      "10-point capacitive touch",
      "0.27 inch thin, 1.8 lb"
    ],
    "pros": [
      "True 4K sharpness on a small screen",
      "10-point touch",
      "Rich 125% sRGB colour",
      "Only 0.27 inch thick"
    ],
    "cons": [
      "Touch adds cost",
      "4K draws more laptop power"
    ],
    "bestFor": "people who want maximum sharpness for documents and photos"
  },
  {
    "id": "best-portable-monitors-under-300-4",
    "rank": 4,
    "badge": "Best for Drawing",
    "name": "DAMRAPT 14-inch 4K OLED Stylus",
    "price": "$200 to $300",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418ee5+DHgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6NV41FH?tag=deskfinds0d-20",
    "description": "The DAMRAPT is a 14 inch 4K OLED panel at 3840x2400 with 100% DCI-P3 colour, 10-point touch and an active MPP stylus. The aluminum shell weighs about 1.3 pounds and measures 0.5 inch thick, and it has two USB-C ports plus HDMI.\n\nIt is the only pen-enabled screen in this guide, so it competes with small drawing displays more than with the other monitors. Against the EVICIV it is smaller, lighter and OLED, and against the Intehill it adds pen support and a much higher resolution.\n\nPick it if you sketch, mark up PDFs or take handwritten notes and want the display to double as a travel tablet. Confirm your drawing app supports MPP pens before buying.",
    "specs": [
      "14 inch OLED 3840x2400, 100% DCI-P3",
      "10-point touch plus MPP stylus",
      "1.3 lb aluminum shell"
    ],
    "pros": [
      "Active MPP stylus included",
      "Very high pixel density",
      "Aluminum shell at 1.3 lb",
      "OLED blacks for drawing apps"
    ],
    "cons": [
      "Costs more than most picks",
      "Stylus support depends on app and OS"
    ],
    "bestFor": "artists and note-takers who want pen input on a travel screen"
  },
  {
    "id": "best-portable-monitors-under-300-5",
    "rank": 5,
    "badge": "Best Touch OLED",
    "name": "JUNEBOX 16-inch OLED Touch",
    "price": "$200 to $300",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Mv9M4xKML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8R4PQDD?tag=deskfinds0d-20",
    "description": "The Junebox is a 16 inch OLED touch monitor at 2048x1280 with a 120Hz refresh rate, a 550 nit peak brightness and 100000:1 contrast. It weighs 1.5 pounds, is just 0.13 inch thin, and includes a sleeve, dual speakers, VESA mounting and a kickstand.\n\nIt combines the AOC's OLED contrast with the EVICIV's touch layer and adds a 120Hz refresh, which is why it sits at the top of the price band. It is also the only model here that lists a stated peak of 550 nits, helpful near a window.\n\nChoose it for hybrid work and play on the move. The caveat is the brand's short track record, so check the warranty terms on the listing.",
    "specs": [
      "16 inch OLED 2048x1280, 120Hz",
      "550 nits peak, 10-point touch",
      "1.5 lb, 0.13 inch thin"
    ],
    "pros": [
      "Smoothest OLED panel here at 120Hz",
      "Thin 0.13 inch body",
      "Sleeve case, speakers and VESA included",
      "Bright 550 nits peak"
    ],
    "cons": [
      "Little-known brand",
      "Premium price for the tier"
    ],
    "bestFor": "travelers who want OLED, touch and 120Hz in one screen"
  },
  {
    "id": "best-portable-monitors-under-300-6",
    "rank": 6,
    "badge": "Best Small Touch",
    "name": "Intehill Q14ZT 2.5K Touch",
    "price": "$150 to $200",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51DkzlN1m5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GK5JFCLT?tag=deskfinds0d-20",
    "description": "The Intehill Q14ZT is a 14 inch 2.5K touch monitor at 2560x1600 with 100% sRGB colour and a full-laminated tempered glass panel that reduces reflections. It has dual USB-C and HDMI ports, an adjustable stand and measures roughly 0.4 inch thick.\n\nIt is cheaper than the other touch models here and smaller than the EVICIV, so it makes sense as the lowest-cost route to a sharp touchscreen. The trade-off is a fixed 60Hz rate and a less proven brand.\n\nIt suits students and consultants who want a small, sharp second screen that doubles as a touch panel. If you want OLED or pen input, spend more on the DAMRAPT or Junebox.",
    "specs": [
      "14 inch 2560x1600, 100% sRGB",
      "Full-laminated tempered glass touch",
      "Dual USB-C and HDMI"
    ],
    "pros": [
      "2.5K sharpness on a 14 inch screen",
      "Full-laminated glass for lower reflections",
      "Dual USB-C and HDMI",
      "About 0.4 inch thin"
    ],
    "cons": [
      "60Hz only",
      "Lesser-known brand"
    ],
    "bestFor": "light travelers who still want touch and a sharp picture"
  },
  {
    "id": "best-portable-monitors-under-300-7",
    "rank": 7,
    "badge": "Best Big Screen",
    "name": "kksmart 17.3-inch 1080p",
    "price": "$150 to $200",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ilFwfoInL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09WQK97HQ?tag=deskfinds0d-20",
    "description": "The kksmart is a 17.3 inch 1080p monitor with 100% sRGB colour, 400 cd/m2 brightness and a 1500:1 contrast ratio. It weighs 1.75 pounds, is 0.2 inch thin and comes with four cables, a 30W wall charger and a scratch-proof magnetic smart cover.\n\nIt is the most complete kit in this tier, but the plain 1080p resolution over 17.3 inches is noticeably softer than the 2.5K and 4K options above. It stays in the guide as the big-screen pick for people who prize size and ready-to-use accessories.\n\nChoose it if you want the largest display and do not mind a lower pixel density. If detail matters, the Intehill or EVICIV offer more for the money.",
    "specs": [
      "17.3 inch 1080p, 100% sRGB, 400 cd/m2",
      "1.75 lb and 0.2 inch thin",
      "Four cables and a 30W charger in the box"
    ],
    "pros": [
      "Large screen with 100% sRGB",
      "Cables and wall charger included",
      "Magnetic smart cover",
      "Very thin at 0.2 inch"
    ],
    "cons": [
      "60Hz and 1080p at a high price",
      "Stretches pixels on 17.3 inches"
    ],
    "bestFor": "desk workers who want size and a complete kit in the box"
  }
];

export const howWeEvaluated = [
  {
    "title": "Panel and resolution",
    "description": "Each pick was compared on screen size, listed resolution and panel type, then weighed against what that combination does for text sharpness at laptop distance."
  },
  {
    "title": "Connection and power",
    "description": "We checked the listed ports (USB-C with video, mini HDMI) and how much each monitor depends on laptop power versus a wall charger."
  },
  {
    "title": "Portability",
    "description": "Thickness, listed weight and the cover or stand design were judged for how easily the screen travels with a laptop bag."
  },
  {
    "title": "Features that change daily use",
    "description": "Speakers, touch, refresh rate and any mounting holes were weighed by whether a typical remote worker or student would notice them."
  },
  {
    "title": "Value at this price",
    "description": "Price was weighed against the specialty each pick offers (OLED, 4K, touch, stylus or size), so a model only ranks high when the extra money buys something an entry screen cannot."
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
    "subheading": "By Primary Use",
    "intro": "At this price each pick specialises, so match the specialty to your work.",
    "table": {
      "headers": [
        "Your situation",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Reliable all-rounder with high refresh",
          "ASUS ZenScreen MB16AHG"
        ],
        [
          "Movies, photos and design contrast",
          "AOC 16T40D OLED: OLED at a lower price"
        ],
        [
          "Sharpest text and images",
          "EVICIV 15.6-inch 4K Touch: 4K at 15.6 inches"
        ],
        [
          "Handwritten notes and sketches",
          "DAMRAPT 14-inch 4K OLED Stylus: stylus plus touch"
        ],
        [
          "OLED, touch and 120Hz",
          "JUNEBOX 16-inch OLED Touch"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Pick from this guide"
      ],
      "rows": [
        [
          "$150 to $175",
          "ASUS ZenScreen MB16AHG or Intehill Q14ZT 2.5K Touch"
        ],
        [
          "$175 to $200",
          "AOC 16T40D OLED for OLED, EVICIV 15.6-inch 4K Touch for 4K, kksmart 17.3-inch 1080p for size and a full accessory kit"
        ],
        [
          "$200 to $300",
          "DAMRAPT 14-inch 4K OLED Stylus or JUNEBOX 16-inch OLED Touch for the premium panels"
        ]
      ]
    }
  },
  {
    "subheading": "OLED vs IPS",
    "intro": "The panel type changes contrast, brightness and long-term care.",
    "cards": [
      {
        "label": "OLED",
        "text": "Deep blacks and strong contrast, best in dim rooms and for video or photos. AOC 16T40D OLED, DAMRAPT 14-inch 4K OLED Stylus and JUNEBOX 16-inch OLED Touch use OLED, and static windows can eventually cause burn-in."
      },
      {
        "label": "IPS",
        "text": "Steady brightness and no burn-in concern, a safer choice for all-day office work. ASUS ZenScreen MB16AHG, EVICIV 15.6-inch 4K Touch, Intehill Q14ZT 2.5K Touch and kksmart 17.3-inch 1080p use IPS panels."
      }
    ],
    "note": "Default to IPS for long static windows and pick OLED when contrast matters more."
  },
  {
    "subheading": "By Touch and Pen Support",
    "table": {
      "headers": [
        "Input you need",
        "Pick from this guide"
      ],
      "rows": [
        [
          "No touch needed",
          "ASUS ZenScreen MB16AHG or AOC 16T40D OLED"
        ],
        [
          "Touch only",
          "EVICIV 15.6-inch 4K Touch, JUNEBOX 16-inch OLED Touch or Intehill Q14ZT 2.5K Touch"
        ],
        [
          "Touch plus a stylus",
          "DAMRAPT 14-inch 4K OLED Stylus"
        ]
      ]
    }
  },
  {
    "subheading": "For a Frequent Flyer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A weight near 1.5 lb or lower, a slim body under about 0.5 inch, a sleeve or cover in the box and a panel bright enough for a window seat."
      },
      {
        "label": "In this comparison",
        "text": "AOC 16T40D OLED is the lightest at 1.12 lb, while JUNEBOX 16-inch OLED Touch adds a sleeve and 550 nit peak brightness at 1.5 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a specialty panel: AOC 16T40D OLED for OLED, EVICIV 15.6-inch 4K Touch for 4K, or DAMRAPT 14-inch 4K OLED Stylus for pen work."
      },
      {
        "label": "Save if",
        "text": "You only need a fast second screen: ASUS ZenScreen MB16AHG covers it without a premium panel."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Does your laptop output video over USB-C",
    "explanation": "A portable monitor with a USB-C jack only shows a picture when the laptop port behind it supports DisplayPort Alternate Mode, and some charge-only or data-only ports do not. The result is a black screen that looks like a dead monitor when the real cause is the port. Check the laptop spec sheet for a DisplayPort or video-output icon beside the port, and use the cable from the monitor box, because many look-alike USB-C cables carry power but no video."
  },
  {
    "criterion": "Resolution relative to screen size",
    "explanation": "Pixel density is resolution divided by screen size, and it decides whether text looks crisp or soft at arm's length. A 15.6 inch 1080p panel is already fine for documents, while a 16 inch 2560x1600 panel packs about 60 percent more pixels per inch and shows smaller text cleanly, at the cost of more power and a pricier panel. Compare the listed resolution with the diagonal, and check that your laptop can drive the higher mode at the refresh rate you want."
  },
  {
    "criterion": "Sustained brightness, not peak claims",
    "explanation": "Brightness is measured in nits, and a headline figure may be a short peak that the panel cannot hold on one cable. Standard portable panels sit near 250 to 400 nits, which suits a desk but washes out near a sunny window or on a train seat. Look for a stated typical brightness, treat a much larger peak number as a best case, and remember that OLED panels reach full contrast in dark rooms but still need decent brightness in daylight."
  },
  {
    "criterion": "IPS, OLED and touch trade-offs",
    "explanation": "IPS panels are the safe choice with wide viewing angles and steady brightness, while OLED panels give deep blacks and strong contrast but can show burn-in if a static window sits for months. Touch adds a glass layer and a little extra weight, and it only helps if your operating system supports it on the second screen. Decide whether you will draw, annotate or just read, because that settles which of the three is worth the extra spend."
  },
  {
    "criterion": "Size, weight and the laptop sleeve",
    "explanation": "A 14 inch panel slips into most bags next to a laptop, while 17 inch and larger panels often do not fit a standard 16 inch laptop sleeve and weigh around 1.7 pounds or more. Extra weight matters when you carry both screens daily. Compare the listed thickness and weight, measure your bag compartment, and remember a protective cover adds a little more bulk on top."
  }
];

export const faq = [
  {
    "q": "Is OLED worth it on a portable monitor?",
    "a": "If you watch video, review photos or work in dim rooms, yes, because contrast is far better than IPS. If you keep spreadsheets open all day, an IPS panel avoids any burn-in risk."
  },
  {
    "q": "Does 4K make sense on a 15 inch screen?",
    "a": "It gives extremely sharp text, but you will scale the interface up in settings to read it. The benefit is clearer fine detail in photos and small fonts."
  },
  {
    "q": "How do I know whether a portable monitor works with my laptop?",
    "a": "Check that the laptop's USB-C port supports DisplayPort Alt Mode, or use HDMI. A Thunderbolt or USB4 port always supports video."
  },
  {
    "q": "Can I use touch and a stylus on a Mac?",
    "a": "Touch support depends on the operating system, and macOS does not fully support touch on external screens. Windows and many Android devices do, so confirm before buying a touch model."
  },
  {
    "q": "How bright is bright enough?",
    "a": "Around 300 to 400 nits suits indoor desks, while sunny rooms and train windows reward panels near 500 nits or more. Look for a typical figure, not only a peak."
  },
  {
    "q": "How should I protect an OLED panel?",
    "a": "Avoid leaving a static window or toolbar on screen for hours, enable auto-dim or a screensaver and keep brightness below maximum for office use."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-portable-monitors-under-150","title":"Best Portable Monitors Under $150"},{"href":"/guide/best-oled-portable-monitors","title":"Best OLED Portable Monitors"},{"href":"/guide/best-touchscreen-portable-monitors","title":"Best Touchscreen Portable Monitors"},{"href":"/guide/best-2k-portable-monitors","title":"Best 2K Portable Monitors"}];
