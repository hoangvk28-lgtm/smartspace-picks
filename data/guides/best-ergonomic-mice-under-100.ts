export const guideSlug = "best-ergonomic-mice-under-100";
export const guideTitle = "7 Best Ergonomic Mice Under $100 in 2026";
export const metaTitle = "Best Ergonomic Mice Under $100 in 2026";
export const metaDescription = "Seven ergonomic mice priced under $100 compared by adjustable shape, hand size, battery claims and button count, from Logitech MX Master to gaming shapes.";
export const mainKeyword = "ergonomic mouse under $100";
export const introParagraphs = [
  "Once the budget stretches toward one hundred dollars, an ergonomic mouse stops being a cheap shell with a gimmick and starts being a considered shape with real software, longer battery claims and sturdier build. The tricky part is that two very different categories compete here: productivity mice and gaming mice sculpted for larger hands.",
  "This list has seven picks, from a $46 flat mouse with metal wheels to the $99 Contour Unimouse with an adjustable tilt. The deciding factors were how the shape adapts to the hand, sensor and DPI ranges, button count, battery claims and connection options. Because the prices span a wide range, the real question is which extra you will use rather than which model is most expensive."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31sRedU3E1L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-ergonomic-mice-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Logitech MX Master 3S Bluetooth Mouse",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31sRedU3E1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FB21526X?tag=deskfinds0d-20",
    "description": "MX Master 3S is a Bluetooth-only mouse (no USB receiver in the box) with 8K DPI tracking that the listing says works on any surface, even glass. It has quiet clicks claimed as 90% quieter, MagSpeed scrolling and a silhouette shaped for a more natural wrist posture.\n\nIt costs less than Contour Unimouse and more than the gaming shapes below, and it adds app-specific profiles through Logitech software. Versus the Razer Basilisk, it is built for work rather than games.\n\nBest for people who want the most refined productivity mouse here. The caveat is that it is a full-size shape that needs a medium to large hand, and it is Bluetooth only.",
    "specs": [
      "8K DPI, any-surface tracking",
      "Quiet Clicks, MagSpeed scrolling",
      "Bluetooth, no receiver"
    ],
    "pros": [
      "Tracks even on glass",
      "Quiet clicks claimed 90% less noise",
      "App-specific button profiles",
      "Shape built for natural wrist posture"
    ],
    "cons": [
      "No USB receiver included",
      "Large for small hands"
    ],
    "bestFor": "Productivity users on any surface"
  },
  {
    "id": "best-ergonomic-mice-under-100-2",
    "rank": 2,
    "badge": "Best Adjustable Vertical",
    "name": "Contour Unimouse Wireless Vertical Mouse",
    "price": "$99.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-HLWJhx5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2593YZ2?tag=deskfinds0d-20",
    "description": "Contour Unimouse is a right-handed wireless vertical mouse whose tilt can be set anywhere from 35 to 70 degrees. It also has an adjustable thumb rest, six programmable buttons and a scroll wheel.\n\nIt is the most expensive here at $99, but it is the only one that lets you change the angle, unlike the fixed shape of the MX Master 3S. Against the Corsair and Razer it trades gaming speed for posture adjustment.\n\nBest for people who want to find their own angle and thumb position. The caveat is that it is right-handed only, and the price sits right at the ceiling.",
    "specs": [
      "35 to 70 degree adjustable tilt",
      "Adjustable thumb rest",
      "6 programmable buttons"
    ],
    "pros": [
      "Tilt adjusts from 35 to 70 degrees",
      "Adjustable thumb support",
      "Six programmable buttons",
      "Wireless right-hand design"
    ],
    "cons": [
      "Right-handed only",
      "Most expensive pick here"
    ],
    "bestFor": "Fine-tuning vertical posture"
  },
  {
    "id": "best-ergonomic-mice-under-100-3",
    "rank": 3,
    "badge": "Best Gaming-Style Value",
    "name": "Razer Basilisk V3 X HyperSpeed Wireless Mouse",
    "price": "$49.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lZPsdb8SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BXBC26X8?tag=deskfinds0d-20",
    "description": "Razer Basilisk V3 X has an ergonomic form with 9 customizable controls, HyperSpeed wireless and Bluetooth, and an 18K optical sensor. The listing claims up to 285 hours on HyperSpeed and 535 hours on Bluetooth, and it uses mechanical switches.\n\nIt costs about half the MX Master 3S and nearly $20 less than the Corsair Ironclaw, while giving 9 controls. Chroma lighting is part of the package.\n\nBest for users who game and work on the same mouse. The caveat is that it has a sculpted gaming shape rather than a handshake angle.",
    "specs": [
      "9 customizable controls",
      "18K sensor, mechanical switches",
      "285 hours HyperSpeed battery"
    ],
    "pros": [
      "Nine customizable controls",
      "Long listed battery life",
      "Wireless and Bluetooth",
      "Cheaper than premium mice"
    ],
    "cons": [
      "RGB lighting adds nothing for work",
      "Not a vertical shape"
    ],
    "bestFor": "Gaming and work on one mouse"
  },
  {
    "id": "best-ergonomic-mice-under-100-4",
    "rank": 4,
    "badge": "Best for Larger Hands",
    "name": "Corsair IRONCLAW Wireless SE Mouse",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Oczbb4kkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G1CPTN1F?tag=deskfinds0d-20",
    "description": "Corsair IRONCLAW Wireless SE has an asymmetric shape designed for larger right hands, 10 programmable buttons and a 26K DPI sensor. The listing claims up to 285 hours on 2.4GHz and up to 532 hours on Bluetooth.\n\nIt costs about $20 more than the Razer and adds a larger shell and an extra button. Its listing is the most button-rich of the group.\n\nBest for big hands that want a lot of programmable buttons. The caveat is right-handed only and RGB lighting.",
    "specs": [
      "Asymmetric shape for larger hands",
      "10 programmable buttons",
      "285 hours on 2.4GHz"
    ],
    "pros": [
      "Sculpted for larger hands",
      "Ten programmable buttons",
      "Very long battery claim",
      "Wireless and Bluetooth"
    ],
    "cons": [
      "Right-handed only",
      "Too big for small hands"
    ],
    "bestFor": "Large right hands"
  },
  {
    "id": "best-ergonomic-mice-under-100-5",
    "rank": 5,
    "badge": "Best Side Scroll Pick",
    "name": "INFINMIND L910 Pro+ Ergonomic Bluetooth Mouse",
    "price": "$46.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311FhfwcYzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GT2YHTNV?tag=deskfinds0d-20",
    "description": "INFINMIND L910 Pro+ has metal scroll wheels on both front and side, 6 programmable buttons, 5 DPI levels from 1000 to 4800 and 3-device pairing over Bluetooth and 2.4GHz. Its silent click is part of the listing.\n\nIt costs about $33 less than the MX Master 3S and has a smaller shell. It is a contoured shape rather than a vertical angle.\n\nBest for spreadsheet users who want a side wheel and remapping. The caveat is a less proven brand.",
    "specs": [
      "Front and side metal wheels",
      "6 programmable buttons",
      "3 devices via Bluetooth and 2.4G"
    ],
    "pros": [
      "Side wheel for horizontal scroll",
      "Programmable buttons",
      "Silent click",
      "Multi-device pairing"
    ],
    "cons": [
      "Software required to remap",
      "Less established brand"
    ],
    "bestFor": "Spreadsheet users"
  },
  {
    "id": "best-ergonomic-mice-under-100-6",
    "rank": 6,
    "badge": "Best Budget Productivity",
    "name": "CITLLA Ergonomic Bluetooth Mouse, Horizontal Wheel",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aNHfbJBEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FC2GSVYG?tag=deskfinds0d-20",
    "description": "CITLLA has a fast scroll wheel and a horizontal thumb wheel, 5 DPI levels up to 4800, near-silent clicks and 3-device switching with dual Bluetooth and 2.4G. It is rechargeable.\n\nIt is the lowest price here and gives a thumb wheel the Razer and Corsair lack. It costs $1 less than INFINMIND.\n\nBest for productivity on a budget. The caveat is limited detail about shape and size.",
    "specs": [
      "Fast scroll plus thumb wheel",
      "5 DPI levels, up to 4800",
      "Rechargeable, 3 devices"
    ],
    "pros": [
      "Lowest price in this list",
      "Horizontal thumb wheel",
      "Near-silent clicks",
      "Rechargeable"
    ],
    "cons": [
      "Little detail on size",
      "Fewer programmable buttons"
    ],
    "bestFor": "Budget productivity"
  },
  {
    "id": "best-ergonomic-mice-under-100-7",
    "rank": 7,
    "badge": "Lightest Pick",
    "name": "ASUS ROG Gladius III Wireless AimPoint Mouse",
    "price": "$90.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/219k6uLGQ1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCZQTF73?tag=deskfinds0d-20",
    "description": "ASUS ROG Gladius III Wireless weighs 79 grams, has tri-mode connectivity and a 36K AimPoint sensor, and the listing claims up to 119 hours on 2.4GHz. It is a right-handed ergonomic shape.\n\nIt is the lightest here and costs $91, more than the Razer and Corsair for fewer stated features. Versus INFINMIND it targets games.\n\nBest for users who value low weight. The caveat is that the price is high for what a work user needs.",
    "specs": [
      "79 g, right-handed shape",
      "Tri-mode connectivity",
      "36K DPI sensor"
    ],
    "pros": [
      "Light at 79 grams",
      "Tri-mode connection",
      "Tracking sensor",
      "Right-hand ergonomic shape"
    ],
    "cons": [
      "High price",
      "Gaming-focused"
    ],
    "bestFor": "Light gaming and work"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Fixed shape versus adjustable shape",
    "explanation": "Most mice have a fixed shell, but a few let you change the tilt or thumb rest. An adjustable mouse lets you find the angle that fits your wrist instead of accepting the maker's guess. Look for the degree range in the listing, as with a 35 to 70 degree tilt, and a note about the thumb rest."
  },
  {
    "criterion": "Hand size and grip style",
    "explanation": "A palm grip needs a long shell, a claw grip a shorter one. Some mice here target large hands and others medium. Measure your hand and compare it with the dimensions in the listing."
  },
  {
    "criterion": "Programmable buttons and software",
    "explanation": "A programmable button can be reassigned to a shortcut such as copy, paste or switch app, while a fixed button cannot. Extra buttons only help if you will actually use them, and most remapping happens in maker software that must run on your computer. Count only the buttons the listing says are programmable, and check that the software supports your operating system."
  },
  {
    "criterion": "Sensor and DPI headroom",
    "explanation": "High DPI numbers like 26K or 36K are mostly useful for gaming on big monitors. For office work, 4000 DPI is already plenty. Do not pay extra for sensor figures you will not use."
  },
  {
    "criterion": "Battery claims",
    "explanation": "Listed hours vary widely, from 119 to 535 hours depending on connection mode. Bluetooth usually lasts longer than a 2.4GHz dongle. Check which mode the figure refers to."
  },
  {
    "criterion": "Bluetooth-only versus receiver",
    "explanation": "Some premium mice ship without a USB receiver. That is fine for laptops with Bluetooth but not for a desktop without it. Check the listing for the words no receiver."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Shape adaptability",
    "description": "We compared fixed and adjustable shells and stated hand sizes."
  },
  {
    "title": "Features",
    "description": "We compared button count, scroll type and connection modes."
  },
  {
    "title": "Battery and sensor",
    "description": "We compared listed battery claims and sensor figures."
  },
  {
    "title": "Value",
    "description": "We weighed features against price under $100."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Hand and Grip",
    "intro": "Match the shell to your grip.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Medium to large hand, productivity",
          "Logitech MX Master 3S Bluetooth Mouse"
        ],
        [
          "Wants adjustable tilt",
          "Contour Unimouse Wireless Vertical Mouse"
        ],
        [
          "Large right hand, many buttons",
          "Corsair IRONCLAW Wireless SE Mouse"
        ],
        [
          "Claw grip, gaming and work",
          "Razer Basilisk V3 X HyperSpeed Wireless Mouse"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Real prices from this comparison.",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $46",
          "CITLLA Ergonomic Bluetooth Mouse, Horizontal Wheel"
        ],
        [
          "$46 to $47",
          "INFINMIND L910 Pro+ Ergonomic Bluetooth Mouse"
        ],
        [
          "$49 to $50",
          "Razer Basilisk V3 X HyperSpeed Wireless Mouse"
        ],
        [
          "$69 to $70",
          "Corsair IRONCLAW Wireless SE Mouse"
        ],
        [
          "$79 to $80",
          "Logitech MX Master 3S Bluetooth Mouse"
        ],
        [
          "$99",
          "Contour Unimouse Wireless Vertical Mouse"
        ]
      ]
    }
  },
  {
    "subheading": "Productivity vs Gaming Shape",
    "cards": [
      {
        "label": "Productivity",
        "text": "Built around scroll speed, quiet clicks and profiles. MX Master 3S, INFINMIND and CITLLA fall here."
      },
      {
        "label": "Gaming-style",
        "text": "Built around sensors, buttons and light weight. Razer Basilisk, Corsair Ironclaw and ASUS Gladius III fall here."
      }
    ],
    "note": "Choose productivity for office work, gaming-style only if you also game."
  },
  {
    "subheading": "By Battery Priority",
    "intro": "Battery needs differ.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Longest listed battery life",
          "Corsair IRONCLAW Wireless SE Mouse"
        ],
        [
          "Bluetooth with long life",
          "Razer Basilisk V3 X HyperSpeed Wireless Mouse"
        ],
        [
          "Light weight with decent battery",
          "ASUS ROG Gladius III Wireless AimPoint Mouse"
        ],
        [
          "Quiet and rechargeable",
          "CITLLA Ergonomic Bluetooth Mouse, Horizontal Wheel"
        ]
      ]
    }
  },
  {
    "subheading": "For Wrist-Strain Prevention Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An adjustable angle, an adjustable thumb rest and a shell that fits your hand."
      },
      {
        "label": "In this comparison",
        "text": "Contour Unimouse Wireless Vertical Mouse is the only one with adjustable tilt and thumb support."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want to tune angle and thumb position (Contour Unimouse Wireless Vertical Mouse)."
      },
      {
        "label": "Save if",
        "text": "You only want a productivity mouse for less, where CITLLA Ergonomic Bluetooth Mouse, Horizontal Wheel is enough."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Do I need a receiver for the MX Master 3S?",
    "a": "This edition is Bluetooth only and ships without a USB receiver, so your computer needs Bluetooth. Most current laptops have it, but older desktops may need an adapter. Check this before ordering."
  },
  {
    "q": "Are gaming mice actually ergonomic?",
    "a": "Some, like the Corsair Ironclaw and Razer Basilisk, have shapes sculpted for larger or palm-grip hands. They are designed around sensor speed and buttons rather than a neutral wrist angle. If forearm strain is your concern, the vertical Contour Unimouse is a more deliberate choice."
  },
  {
    "q": "Is the Contour Unimouse worth it over a cheaper vertical mouse?",
    "a": "Its 35 to 70 degree adjustable tilt and adjustable thumb rest let you tune the fit instead of accepting a fixed shape. That matters most if cheaper vertical mice have felt too steep or too small. These are comfort products, so see a doctor or ergonomist if pain persists."
  },
  {
    "q": "How do I set up button profiles?",
    "a": "Install the maker's software, such as Logi Options+ for Logitech, and pick a profile for each app. Then assign the buttons you use most to shortcuts. Test each profile in the app before relying on it."
  },
  {
    "q": "Will a light mouse tire my hand less?",
    "a": "Light mice reduce the effort of moving the pointer, which some people notice over a long day. Others prefer a heavier mouse for stability. The ASUS Gladius III lists 79 grams if low weight matters to you."
  },
  {
    "q": "How should I charge the mouse?",
    "a": "Plug the USB cable into the mouse and a USB power source and wait for the indicator. Most of these list battery claims of 100 hours or more, so you may only charge them every few weeks. Using Bluetooth instead of a 2.4GHz dongle often extends the listed battery life."
  }
];

export const relatedGuides = [
  {
    "href": "/guide/best-ergonomic-mice",
    "title": "Best Ergonomic Mice"
  },
  {
    "href": "/guide/best-ergonomic-mice-for-small-hands",
    "title": "Best Ergonomic Mice for Small Hands"
  },
  {
    "href": "/guide/best-ergonomic-mice-for-large-hands",
    "title": "Best Ergonomic Mice for Large Hands"
  }
];
