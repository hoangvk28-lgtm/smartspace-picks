export const guideSlug = "best-small-keyboards-for-mac";
export const guideTitle = "6 Best Small Keyboards for Mac in 2026";
export const metaTitle = "Best Small Keyboards for Mac (2026)";
export const metaDescription = "Six compact keyboards with Mac-friendly layouts for MacBook, iMac and Mac mini desks, from Apple's own to wireless, wired and mechanical alternatives.";
export const mainKeyword = "small keyboards for mac";
export const introParagraphs = [
  "A Mac keyboard is not just a PC keyboard with a different logo. Command and Option sit in different places from Windows and Alt, the top row carries Mission Control, Spotlight and dictation keys, and a Windows-first board can leave you remapping modifiers in System Settings before you type a sentence. For a compact Mac desk, those details matter more than the brand.",
  "We selected six small boards that treat macOS as a first-class system, from Apple's own Magic Keyboard to a mechanical option and affordable wireless and wired boards. Each is compared on Mac key mapping, connection type and how much room it leaves for a mouse."
];
export const lastUpdated = "2026-10-28";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41F1+7Ee2hL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-small-keyboards-for-mac-1",
    "rank": 1,
    "badge": "Best Native Mac Fit",
    "name": "Apple Magic Keyboard",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F1+7Ee2hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DL6LV7Q6?tag=deskfinds0d-20",
    "description": "The Apple Magic Keyboard is wireless and rechargeable, with an internal battery that the listing says lasts about a month or more between charges. It pairs automatically with a Mac and has a USB-C port and a woven USB-C cable for pairing and charging.\n\nIt has no number pad, so it is already compact, though it is plain compared with mechanical options. Against the Macally boards it costs more but needs no mapping and no learning curve on a Mac.\n\nChoose it if you want the system to work exactly as intended with no extra settings. If you want mechanical switches or backlight options, look at the Nuphy or Logitech picks.",
    "specs": [
      "Wireless, rechargeable, USB-C",
      "No number pad",
      "Pairs automatically with a Mac"
    ],
    "pros": [
      "Native Mac key layout",
      "Auto-pairs with a Mac",
      "Month-long battery rating",
      "USB-C charge cable included"
    ],
    "cons": [
      "Costs more than basic boards",
      "No backlight on the listing"
    ],
    "bestFor": "people who want a keyboard that just works with their Mac"
  },
  {
    "id": "best-small-keyboards-for-mac-2",
    "rank": 2,
    "badge": "Best Mechanical for Mac",
    "name": "NuPhy Air75 V2",
    "price": "$50 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EjoZwu9AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CMZ5VD9D?tag=deskfinds0d-20",
    "description": "The NuPhy Air75 V2 is a 75% low-profile mechanical keyboard with an aluminum frame, Bluetooth 5.1, 2.4GHz and USB-C connections, more than 21 RGB effects and QMK/VIA support. It works with Mac, Windows, Linux, Android and iOS.\n\nIt is the one pick here that gives you a mechanical typing feel on a slim board. Against the Logitech MX Mechanical Mini for Mac it costs much less and is more customizable, though less polished on software.\n\nPick it for a Mac that sees heavy typing and a desk that is short on space. The tradeoff is that key layout is Windows-first, so check the mode switch for macOS.",
    "specs": [
      "75% low-profile mechanical",
      "Bluetooth 5.1, 2.4GHz, USB-C",
      "Aluminum frame, QMK/VIA"
    ],
    "pros": [
      "Mechanical feel in a slim body",
      "Three connection modes",
      "QMK/VIA remapping",
      "Works across Mac, Windows and Linux"
    ],
    "cons": [
      "Legends may be Windows-first",
      "RGB drains battery"
    ],
    "bestFor": "heavy typists who want mechanical keys on a Mac"
  },
  {
    "id": "best-small-keyboards-for-mac-3",
    "rank": 3,
    "badge": "Best Backlit Mac Board",
    "name": "ProtoArc K90-A",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WSpibsmwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH6W6V4P?tag=deskfinds0d-20",
    "description": "The ProtoArc K90-A is a compact Bluetooth keyboard made only for Mac and iPad, with backlit Mac keys, a metallic plate, three Bluetooth channels and three soft white backlight levels. The listing warns that it is Mac only and does not work with Windows.\n\nThat narrow focus is the point: the key legends and shortcuts match macOS, and the board is cheaper than Apple's. Compared with the Macally wireless board it offers backlighting.\n\nChoose it if you use only Macs and iPads and type in dim light. Do not buy it if you ever share it with a PC.",
    "specs": [
      "Compact, no numeric keypad",
      "3 Bluetooth channels",
      "3-level white backlight, Mac keys"
    ],
    "pros": [
      "Mac-specific key legends",
      "Backlit keys",
      "Three device slots",
      "Metal plate"
    ],
    "cons": [
      "Mac and iPad only",
      "Bluetooth only"
    ],
    "bestFor": "Mac and iPad users who type in low light"
  },
  {
    "id": "best-small-keyboards-for-mac-4",
    "rank": 4,
    "badge": "Best Value Wireless",
    "name": "Macally Wireless Bluetooth Keyboard for Mac",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415AUiTINfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCK1DYQQ?tag=deskfinds0d-20",
    "description": "The Macally wireless keyboard for Mac has 78 keys and 13 shortcut keys, uses Bluetooth with auto OS detection, and has an 800mAh rechargeable battery that the listing rates for up to two months. It works with Mac, PC, iOS and iPad and carries a warranty of up to two years.\n\nIt is the only pick with auto OS detection and a long warranty. Against the ProtoArc K90-A it is not backlit but works with Windows, and against the Apple Magic Keyboard it costs less.\n\nPick it as a flexible compact board for a Mac with a PC sometimes in the mix. If you want backlit keys, step to the ProtoArc.",
    "specs": [
      "78 keys, 13 shortcut keys",
      "Bluetooth, auto OS detection",
      "800mAh battery, up to 2 months"
    ],
    "pros": [
      "Auto-detects the operating system",
      "Up to two-year warranty",
      "Rechargeable battery",
      "Works with Mac, PC and iPad"
    ],
    "cons": [
      "No backlight",
      "Layout not as tight as mini boards"
    ],
    "bestFor": "a Mac desk that sometimes connects to a PC"
  },
  {
    "id": "best-small-keyboards-for-mac-5",
    "rank": 5,
    "badge": "Best Wired Pick",
    "name": "Macally Small USB Wired Keyboard",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OSEr8XJVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WHHZ1H3?tag=deskfinds0d-20",
    "description": "The Macally Small USB Wired Keyboard has 78 scissor-switch keys and 13 shortcut keys for cut, copy, paste and iTunes on a Mac, and multimedia hotkeys on Windows. It uses a 4 foot 7 inch cable and is plug and play.\n\nIt is the simplest option: no battery, no pairing, and no software. Against the wireless Macally it costs less to own over time but is tethered.\n\nIt suits a fixed Mac desk where reliability matters. If you want to move the keyboard, pick a wireless one.",
    "specs": [
      "78 scissor-switch keys",
      "13 shortcut keys, 4 ft 7 in cable",
      "Mac and Windows compatible"
    ],
    "pros": [
      "Plug and play",
      "No battery to charge",
      "Shortcut keys for Mac",
      "Compact 78-key layout"
    ],
    "cons": [
      "Wired only",
      "Plain design"
    ],
    "bestFor": "a fixed Mac desk where reliability matters"
  },
  {
    "id": "best-small-keyboards-for-mac-6",
    "rank": 6,
    "badge": "Best Premium",
    "name": "Logitech MX Mechanical Mini for Mac",
    "price": "$100 to $150",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aQEgCoeRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LK63PKB?tag=deskfinds0d-20",
    "description": "The MX Mechanical Mini for Mac is a low-profile wireless keyboard with a Mac key layout, Tactile Quiet switches and smart backlighting that lights keys as hands approach. It is described as compact with a minimalist form and can connect to multiple devices through Logi Options+.\n\nIt is the most expensive pick and the quietest of the mechanical options. Compared with the NuPhy Air75 V2, it gives up customization for polish and Mac-native keys.\n\nChoose it if you want a premium mechanical feel in a Mac-first design. If budget is tight, the NuPhy is cheaper.",
    "specs": [
      "Mac layout, low-profile mechanical",
      "Tactile Quiet switches",
      "Smart illumination, multi-device"
    ],
    "pros": [
      "Mac-native key layout",
      "Quiet tactile switches",
      "Backlight adapts to hands",
      "Low-profile body"
    ],
    "cons": [
      "Costs the most of this group",
      "Limited switch choices"
    ],
    "bestFor": "a premium quiet mechanical board for a Mac"
  }
];

export const howWeEvaluated = [
  {
    "title": "Mac key mapping",
    "description": "We checked for Command and Option labels, Mac shortcut keys and macOS compatibility stated on each listing."
  },
  {
    "title": "Compact footprint",
    "description": "Boards without a number pad were prioritized, and dimensions were noted where given."
  },
  {
    "title": "Connection and battery",
    "description": "Bluetooth, dongle and wired options were compared, along with rated battery life."
  },
  {
    "title": "Typing feel",
    "description": "Scissor, low-profile mechanical and standard mechanical switches were compared as described."
  },
  {
    "title": "Value and support",
    "description": "Price bucket, warranty terms and brand track record were weighed together."
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
    "subheading": "By System Setup",
    "table": {
      "headers": [
        "Your setup",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Mac only, want it to just work",
          "Apple Magic Keyboard"
        ],
        [
          "Mac and iPad only, backlit",
          "ProtoArc K90-A"
        ],
        [
          "Mac plus occasional PC",
          "Macally Wireless Bluetooth Keyboard for Mac"
        ],
        [
          "Fixed Mac desk, wired",
          "Macally Small USB Wired Keyboard"
        ],
        [
          "Mechanical typing",
          "NuPhy Air75 V2 or Logitech MX Mechanical Mini for Mac"
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
          "$25 to $50",
          "ProtoArc K90-A, Macally Wireless Bluetooth Keyboard for Mac or Macally Small USB Wired Keyboard"
        ],
        [
          "$50 to $75",
          "NuPhy Air75 V2"
        ],
        [
          "$75 to $100",
          "Apple Magic Keyboard"
        ],
        [
          "$100 to $150",
          "Logitech MX Mechanical Mini for Mac"
        ]
      ]
    }
  },
  {
    "subheading": "Scissor vs Mechanical Keys",
    "intro": "Scissor keys are shallow and quiet, mechanical keys offer feedback and options.",
    "cards": [
      {
        "label": "Scissor",
        "text": "Matches the feel of a MacBook. The Apple Magic Keyboard, Macally boards and ProtoArc K90-A are scissor-style and are good for quiet shared rooms."
      },
      {
        "label": "Mechanical",
        "text": "Gives key feedback and a longer life. The NuPhy Air75 V2 and Logitech MX Mechanical Mini for Mac are low-profile mechanical boards."
      }
    ],
    "note": "Most Mac users should choose scissor unless they type for hours."
  },
  {
    "subheading": "By Warranty and Support",
    "table": {
      "headers": [
        "Need",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Up to two-year warranty",
          "Macally Wireless Bluetooth Keyboard for Mac"
        ],
        [
          "Known platform maker",
          "Apple Magic Keyboard"
        ],
        [
          "Software support",
          "Logitech MX Mechanical Mini for Mac via Logi Options+"
        ],
        [
          "Open firmware",
          "NuPhy Air75 V2: QMK/VIA"
        ]
      ]
    }
  },
  {
    "subheading": "For MacBook Docking Setups Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A keyboard that pairs quickly, charges over USB-C, and matches the MacBook's key layout so muscle memory transfers."
      },
      {
        "label": "In this comparison",
        "text": "The Apple Magic Keyboard charges over USB-C and pairs automatically, and the ProtoArc K90-A copies the Mac layout with backlighting."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You type a lot and want a quiet mechanical feel: the Logitech MX Mechanical Mini for Mac is the most polished pick."
      },
      {
        "label": "Save if",
        "text": "You want a simple compact board: the Macally Small USB Wired Keyboard or Macally Wireless Bluetooth Keyboard for Mac are cheaper."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Mac modifier layout",
    "explanation": "Mac keyboards put Control, Option and Command in a specific order, and the Windows order differs. Wrong order makes shortcuts feel off until you remap. Look for 'Mac layout' or printed Command and Option, and check that Windows boards include a toggle."
  },
  {
    "criterion": "Function row and shortcut keys",
    "explanation": "Mac function keys control brightness, Mission Control, Spotlight and dictation. A Windows-first board may not map these properly. Check the listing for shortcut keys such as 13 Mac shortcuts or for the number of dedicated keys."
  },
  {
    "criterion": "Bluetooth pairing and multi-device",
    "explanation": "Mac keyboards generally pair over Bluetooth, and boards with several channels let you switch between a Mac, an iPad and a phone. Check the number of devices and whether the listing mentions auto-detection of the operating system."
  },
  {
    "criterion": "Battery and charging port",
    "explanation": "USB-C charging matches current Macs and removes a separate cable. Rated life ranges from a month to six months depending on lighting and use. Look for the battery capacity and USB-C, not micro-USB."
  },
  {
    "criterion": "Mechanical versus scissor feel",
    "explanation": "Scissor keys are shallow and match the MacBook's feel, while low-profile mechanical keys give more feedback. If you use a Mac laptop all day, shallow keys feel familiar, but heavy typists often prefer a mechanical board. Check for the switch type in the title or bullets."
  }
];

export const faq = [
  {
    "q": "Do I need a Mac-specific keyboard?",
    "a": "Not strictly, since most Bluetooth keyboards work on macOS. A Mac-specific layout saves remapping and gives you the correct shortcut keys, which makes it more comfortable."
  },
  {
    "q": "How do I remap a Windows keyboard for Mac?",
    "a": "In System Settings under Keyboard, choose Modifier Keys and swap Option and Command. Some keyboards also have a hardware toggle to switch layouts."
  },
  {
    "q": "Will a small keyboard work with my iPad?",
    "a": "Yes, most Bluetooth keyboards do, and models such as the ProtoArc K90-A and Macally wireless board list iPad compatibility."
  },
  {
    "q": "Is the Apple Magic Keyboard worth the price?",
    "a": "It is worth it if you want a native layout, auto-pairing and a month-long battery. If you prefer mechanical keys or backlighting, other picks offer more."
  },
  {
    "q": "Are mechanical keyboards good for Mac?",
    "a": "Yes. Boards like the NuPhy Air75 V2 and Logitech MX Mechanical Mini for Mac work well, but check that the legends and modifier keys match macOS."
  },
  {
    "q": "How long do wireless Mac keyboards last between charges?",
    "a": "It depends on the model: Apple lists about a month, while the Macally wireless board lists up to two months. Backlit boards use more power."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards"},{"href":"/guide/best-mechanical-keyboards-for-mac","title":"Best Mechanical Keyboards for Mac"},{"href":"/guide/keyboard-size-chart","title":"Keyboard Size Chart"},{"href":"/guide/best-small-wireless-keyboards","title":"Best Small Wireless Keyboards"}];
