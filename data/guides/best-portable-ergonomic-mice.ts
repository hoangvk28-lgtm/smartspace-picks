export const guideSlug = "best-portable-ergonomic-mice";
export const guideTitle = "5 Best Portable Ergonomic Mice in 2026";
export const metaTitle = "Best Portable Ergonomic Mice in 2026";
export const metaDescription = "Five compact ergonomic mice for laptop bags compared by size, battery life, connection type and hand fit, from a $9 side-grip mouse to Logitech models.";
export const mainKeyword = "portable ergonomic mouse";
export const introParagraphs = [
  "A laptop touchpad is fine for a few minutes, but long sessions at cafes, hotel desks and classrooms call for a real mouse that still fits in a bag side pocket. The trade-off is that shrinking a mouse usually cuts palm support, so the most portable options are not always the most comfortable.",
  "These five picks run from a $9 side-grip model to Logitech compact designs and a gaming mouse that doubles as a travel mouse. We weighed the published specs, namely dimensions, weight, battery type and life, connection method and who each one fits best. None is vertical, so the comfort gains come from contoured shells rather than a handshake angle."
];
export const lastUpdated = "2026-10-21";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31O+6OxqSBL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-ergonomic-mice-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Logitech MX Anywhere 2S Bluetooth Mouse",
    "price": "$46.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31O+6OxqSBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJXQVMHL?tag=deskfinds0d-20",
    "description": "MX Anywhere 2S is a compact wireless mouse with darkfield tracking and 4000 DPI that the listing describes as working on any surface. It connects over Bluetooth with a stated 33 foot range.\n\nIt costs more than every other pick except the G305, and the listing is sparse on battery and weight, which is a gap compared with the M196. In return you get a more refined build from a major brand.\n\nPick it if you travel for work and want a mouse that tracks on awkward surfaces. The caveat is that the listing gives little detail, so check the product page for battery details.",
    "specs": [
      "4000 DPI darkfield tracking",
      "Bluetooth, 33 ft range",
      "Compact wireless body"
    ],
    "pros": [
      "Tracks on varied surfaces",
      "Compact travel-bag size",
      "Bluetooth, no dongle to lose",
      "Established brand build"
    ],
    "cons": [
      "Pricey for a small mouse",
      "Few details in the listing"
    ],
    "bestFor": "Frequent travelers on awkward desks"
  },
  {
    "id": "best-portable-ergonomic-mice-2",
    "rank": 2,
    "badge": "Best Lightweight Pick",
    "name": "Logitech G305 Lightspeed Wireless Mouse",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zy93Vq31L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CMS5Q6P?tag=deskfinds0d-20",
    "description": "Though sold as a gaming mouse, the G305 is described as a great portable desktop and laptop mouse. It weighs 3.4 oz, has 6 programmable buttons, a 12,000 DPI HERO sensor and a built-in nano receiver storage slot.\n\nCompared with the MX Anywhere 2S above, it is lighter in a different way and far cheaper, and the listing claims up to 250 hours from one AA battery. It uses a USB receiver rather than Bluetooth, unlike the MX.\n\nBest for users who want a light mouse with precise tracking and long battery life. The caveat is that it is not an ergonomic contour first, so wrist comfort is not a stated feature.",
    "specs": [
      "3.4 oz, 12,000 DPI",
      "Up to 250 hours on 1 AA",
      "Nano receiver stores inside"
    ],
    "pros": [
      "Very light at 3.4 oz",
      "Long listed battery life",
      "Receiver stores in the mouse",
      "6 programmable buttons"
    ],
    "cons": [
      "Needs a USB-A port",
      "Not designed around wrist posture"
    ],
    "bestFor": "Light carry plus long battery"
  },
  {
    "id": "best-portable-ergonomic-mice-3",
    "rank": 3,
    "badge": "Best Ambidextrous",
    "name": "Logitech M185 Compact Wireless Mouse",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31U-r5U5hoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004YAVF8I?tag=deskfinds0d-20",
    "description": "M185 is a small ambidextrous wireless mouse with a contoured shape for either hand, a plug-and-play nano receiver and up to one year of battery life. The listing says it suits small to medium hands.\n\nIt is cheaper than the G305 and simpler: line-by-line scrolling, a smart sleep mode and no Bluetooth. Versus the M196 below, it uses a USB receiver instead of Bluetooth.\n\nA solid pick for left-handers or anyone switching hands. The caveat is the USB-A receiver, which will not plug into most thin laptops without an adapter.",
    "specs": [
      "Ambidextrous contoured shape",
      "2.4GHz nano receiver",
      "Up to 1 year battery"
    ],
    "pros": [
      "Comfortable in either hand",
      "Plug and play, no software",
      "Works on Windows, Mac, Chrome OS",
      "Small and bag-friendly"
    ],
    "cons": [
      "USB-A receiver only",
      "Basic features"
    ],
    "bestFor": "Left-handers on a budget"
  },
  {
    "id": "best-portable-ergonomic-mice-4",
    "rank": 4,
    "badge": "Best Bluetooth Budget",
    "name": "Logitech M196 Bluetooth Compact Mouse",
    "price": "$10.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21fRZHodY+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9N5WX8L?tag=deskfinds0d-20",
    "description": "M196 is a compact ambidextrous Bluetooth mouse with no USB receiver, a 12 month battery life and a plastic body that includes recycled material. A 1 AA battery is included, and the listing mentions use across laptops and tablets.\n\nIt is the cheapest of the Logitech picks and the one to choose if your laptop lacks USB-A, since it pairs directly. Compared with the M185 it gains Bluetooth but loses the nano receiver option.\n\nBest for tablets and thin laptops where a dongle is a nuisance. The caveat is basic scrolling and no stated DPI levels in the highlights.",
    "specs": [
      "Bluetooth, no receiver",
      "12 month battery, 1 AA included",
      "Ambidextrous contoured shape"
    ],
    "pros": [
      "No USB port needed",
      "Battery included in box",
      "Contains recycled plastic",
      "Low price"
    ],
    "cons": [
      "Basic feature set",
      "Simple optical tracking"
    ],
    "bestFor": "Thin laptops and tablets"
  },
  {
    "id": "best-portable-ergonomic-mice-5",
    "rank": 5,
    "badge": "Best Side-Grip Mouse",
    "name": "TECKNET Compact Ergonomic Wireless Mouse, 2600 DPI",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IOWpQr2ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B015NBTAOW?tag=deskfinds0d-20",
    "description": "TECKNET is a compact mouse at about 4.09 x 2.68 x 1.49 inches with side grips and 5 DPI levels up to 2600. It uses a USB-A mini receiver stored in the back and the listing claims 24 months of battery.\n\nIt is the cheapest option here, and the only one that mentions side grips for comfort. AAA batteries are not included, and the listing warns the side button is not compatible with macOS.\n\nBest for students who want an ergonomic feel at a very low price. The caveat is that DPI tops out at 2600 and the side buttons skip Mac.",
    "specs": [
      "4.09 x 2.68 x 1.49 in body",
      "5 DPI levels, 800 to 2600",
      "Up to 24 months battery"
    ],
    "pros": [
      "Lowest price of the five",
      "Side grips for hold",
      "Receiver stores on the back",
      "On/off switch saves battery"
    ],
    "cons": [
      "AAA batteries not included",
      "Side button skips macOS"
    ],
    "bestFor": "Students on a tight budget"
  }
];

export interface BuyingCriterion { criterion: string; explanation: string; }
export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Dimensions and weight",
    "explanation": "A portable mouse is small enough to fit in a laptop sleeve pocket, but too small a shell cramps the hand. Weight matters too, since a mouse around 3 to 4 oz is easy to carry. Look for the dimensions in inches or millimeters, and compare with your hand length."
  },
  {
    "criterion": "Bluetooth versus USB receiver",
    "explanation": "Bluetooth pairs directly, which is useful on a tablet or a laptop without USB-A. A USB receiver gives more stable connection but can be lost on the road. Look for a receiver storage slot in the listing, or choose Bluetooth if your laptop has no USB-A."
  },
  {
    "criterion": "Battery type and listed life",
    "explanation": "Replaceable AA and AAA batteries cost little and can be swapped in a cafe. Listed battery claims range from 12 months to 250 hours of play. Check whether the battery is included and whether a power switch is present."
  },
  {
    "criterion": "Ergonomic features on a small shell",
    "explanation": "Compact mice can still have contoured sides or thumb grips, but few offer vertical angles. A shell that fits your hand length reduces strain better than any grip label. Look for the words contoured, side grips or ambidextrous."
  },
  {
    "criterion": "Surface tracking quality",
    "explanation": "Optical sensors struggle on glass or glossy surfaces. A darkfield sensor, as listed on the MX Anywhere 2S, is described as working on varied surfaces. Look for any-surface language when you work in cafes or on shared tables."
  },
  {
    "criterion": "Operating system compatibility",
    "explanation": "Extra buttons sometimes do not work on macOS, and a few listings state this directly. Check the compatibility list and any note about side buttons before you buy. This matters most if you plan to use the mouse with both a Windows laptop and a Mac."
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    "title": "Size and weight",
    "description": "We compared listed dimensions and weight so the mouse suits a bag pocket."
  },
  {
    "title": "Comfort features",
    "description": "We looked for contoured shells, side grips and ambidextrous design rather than treating all compact mice as equal."
  },
  {
    "title": "Connection and battery",
    "description": "We compared Bluetooth versus receivers and listed battery life."
  },
  {
    "title": "Value for price",
    "description": "We weighed features against price, from about $9 to $47."
  }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Travel Style",
    "intro": "Match how you carry and use the mouse.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Weekly business travel on varied surfaces",
          "Logitech MX Anywhere 2S Bluetooth Mouse"
        ],
        [
          "Light bag, long battery",
          "Logitech G305 Lightspeed Wireless Mouse"
        ],
        [
          "Left-handed or switches hands",
          "Logitech M185 Compact Wireless Mouse"
        ],
        [
          "Tablet or laptop with no USB-A",
          "Logitech M196 Bluetooth Compact Mouse"
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
          "Under $10",
          "TECKNET Compact Ergonomic Wireless Mouse, 2600 DPI"
        ],
        [
          "$10 to $14",
          "Logitech M196 Bluetooth Compact Mouse"
        ],
        [
          "$25 to $35",
          "Logitech G305 Lightspeed Wireless Mouse"
        ],
        [
          "Above $40",
          "Logitech MX Anywhere 2S Bluetooth Mouse"
        ]
      ]
    },
    "note": "The Logitech M-series models are the cheapest from a major brand here."
  },
  {
    "subheading": "Bluetooth vs USB Receiver",
    "cards": [
      {
        "label": "Bluetooth",
        "text": "Pairs directly with no port needed, so it suits thin laptops and tablets. Covers MX Anywhere 2S and M196."
      },
      {
        "label": "USB receiver",
        "text": "Plugs into a USB-A port and stores in the mouse, which is easy but can be lost. Covers G305, M185 and TECKNET."
      }
    ],
    "note": "Pick Bluetooth if your laptop lacks USB-A, otherwise a receiver is usually fine."
  },
  {
    "subheading": "By Hand Orientation",
    "intro": "Which hand you use decides which mice are viable.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Right hand, gripping with side grips",
          "TECKNET Compact Ergonomic Wireless Mouse, 2600 DPI"
        ],
        [
          "Either hand, USB-A laptop",
          "Logitech M185 Compact Wireless Mouse"
        ],
        [
          "Either hand, Bluetooth only",
          "Logitech M196 Bluetooth Compact Mouse"
        ],
        [
          "Right-handed, gaming-style grip",
          "Logitech G305 Lightspeed Wireless Mouse"
        ]
      ]
    }
  },
  {
    "subheading": "For Students and Dorm Desks Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Low cost, a battery that lasts months, a size that stores in a backpack and compatibility with whatever laptop you have."
      },
      {
        "label": "In this comparison",
        "text": "Logitech M185 Compact Wireless Mouse is the all-rounder at a low price, while Logitech M196 Bluetooth Compact Mouse suits laptops without USB-A."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You travel weekly and need a mouse that tracks on glass-like surfaces (Logitech MX Anywhere 2S Bluetooth Mouse)."
      },
      {
        "label": "Save if",
        "text": "You only need a basic compact mouse, which Logitech M185 Compact Wireless Mouse delivers at a much lower price."
      }
    ]
  }
];

export interface FaqItem { q: string; a: string; }
export const faq: FaqItem[] = [
  {
    "q": "Are compact mice bad for wrists?",
    "a": "Small shells can force the fingers into a tight claw, which some people find tiring. Choose one that matches your hand length. If you have persistent pain, a vertical mouse or a doctor or ergonomist may help."
  },
  {
    "q": "Can I use these mice on a MacBook?",
    "a": "Bluetooth models pair directly with a Mac. USB-A receiver models need an adapter on newer MacBooks, and the TECKNET listing notes its side button does not work on macOS."
  },
  {
    "q": "Is the G305 really a travel mouse?",
    "a": "The listing calls it a great laptop travel companion thanks to its weight and receiver storage. It is designed as a gaming mouse, so ergonomics are secondary."
  },
  {
    "q": "How do I pair a Bluetooth mouse?",
    "a": "Turn it on, hold the pairing button until the light flashes and select it in the Bluetooth settings of your device. The process is similar on Windows, macOS and tablets."
  },
  {
    "q": "Is a ten dollar mouse worth it over a Logitech?",
    "a": "The TECKNET model gives you comparable basics at a lower price, but Logitech offers more refined sensors and Bluetooth options. If you only need occasional use, the cheaper pick is fine."
  },
  {
    "q": "How do I extend battery life?",
    "a": "Switch the power off when you pack the mouse and let sleep mode do its work at the desk. Carry a spare AA or AAA cell in your bag for the models that take replaceable batteries. If the pointer starts to stutter, replace the battery before it fully dies."
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
