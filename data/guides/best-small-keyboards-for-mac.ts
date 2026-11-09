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
    "title": "Mac key layout and legends",
    "description": "A Mac keyboard needs Command and Option in the right order and Mac-labelled function keys. Apple Magic Keyboard, ProtoArc K90-A and Logitech MX Mechanical Mini for Mac are Mac-native, while NuPhy Air75 V2 may ship Windows-first legends, so we checked how each listing handles that."
  },
  {
    "title": "Function row and shortcut keys",
    "description": "Macally's two boards list 13 shortcut keys for brightness, volume and media, and ProtoArc keeps Mac legends on a compact layout. We checked whether F1 through F12 map to Mac controls out of the box, since a Windows-first board needs a remap before brightness works."
  },
  {
    "title": "Bluetooth pairing and device switching",
    "description": "ProtoArc lists 3 Bluetooth channels, NuPhy adds 2.4GHz and Bluetooth 5.1, and Logitech works across several devices. We favored boards that switch between a Mac and an iPad in one keypress, over single-device pairing that needs repeating."
  },
  {
    "title": "Battery and charging port",
    "description": "Apple and Macally Bluetooth charge over USB-C or a rechargeable cell, and Macally lists an 800mAh battery for up to 2 months. We counted USB-C as a plus for a Mac that already uses that cable, and noted that NuPhy's RGB drains battery faster."
  },
  {
    "title": "Typing feel at this size",
    "description": "Apple and Macally use scissor switches with short travel, while NuPhy Air75 V2 and Logitech MX Mechanical Mini are low-profile mechanical boards. We compared them on feel and noise, since a shallow scissor key and a tactile low-profile switch suit different typists."
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
    "subheading": "By Typing Feel",
    "intro": "Mac typists split between shallow scissor keys and a mechanical bump.",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Shallow, quiet, native Mac layout",
          "Apple Magic Keyboard, with auto-pairing and USB-C."
        ],
        [
          "Mechanical feel, quiet switches, Mac keys",
          "Logitech MX Mechanical Mini for Mac, with Tactile Quiet switches."
        ],
        [
          "Mechanical feel with remapping",
          "NuPhy Air75 V2, a 75% aluminum low-profile board with QMK/VIA."
        ],
        [
          "Backlit scissor-style, Mac legends",
          "ProtoArc K90-A, with a 3-level white backlight."
        ],
        [
          "Plain scissor keys",
          "Macally Wireless Bluetooth Keyboard for Mac, 78 keys."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Spend by what you need to keep, not by brand.",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "$25 to $50, simple compact",
          "ProtoArc K90-A, Macally Bluetooth or Macally USB Wired."
        ],
        [
          "$50 to $75, mechanical",
          "NuPhy Air75 V2, the only low-profile mechanical in this band."
        ],
        [
          "$75 to $100, native Apple",
          "Apple Magic Keyboard."
        ],
        [
          "$100 to $150, quiet mechanical",
          "Logitech MX Mechanical Mini for Mac."
        ]
      ]
    }
  },
  {
    "subheading": "Wired vs Bluetooth",
    "intro": "Reliability against desk neatness.",
    "cards": [
      {
        "label": "Wired",
        "text": "No battery, no pairing, and no lag. Macally Small USB Wired is plug and play with a 4 ft 7 in cable, but the cord ties it to the Mac or a dongle."
      },
      {
        "label": "Bluetooth",
        "text": "A clean desk and easy device switching. Apple, ProtoArc, Macally Bluetooth and NuPhy all use it, but they need charging."
      }
    ],
    "note": "Choose wired Macally for a fixed desk and Bluetooth such as ProtoArc K90-A for a Mac plus iPad."
  },
  {
    "subheading": "By Connection Need",
    "intro": "Match the board to the devices you switch between.",
    "table": {
      "headers": [
        "Need",
        "Recommended pick"
      ],
      "rows": [
        [
          "One Mac only",
          "Apple Magic Keyboard."
        ],
        [
          "Mac plus iPad and phone",
          "ProtoArc K90-A, with 3 Bluetooth channels."
        ],
        [
          "Mac, PC and tablet",
          "Logitech MX Mechanical Mini for Mac, multi-device."
        ],
        [
          "Lowest latency",
          "NuPhy Air75 V2 on 2.4GHz."
        ]
      ]
    }
  },
  {
    "subheading": "For Small Desks and Laptops Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "No number pad, a thin body that fits a laptop bag and a layout that keeps arrow keys."
      },
      {
        "label": "In this comparison",
        "text": "Apple Magic Keyboard and ProtoArc K90-A skip the numpad, and NuPhy Air75 V2 is a 75% board that keeps a function row."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You type for hours. Logitech MX Mechanical Mini for Mac and NuPhy Air75 V2 sit above the $50 band for their switches."
      },
      {
        "label": "Save if",
        "text": "You only need basic typing. ProtoArc K90-A, Macally Wired and Bluetooth stay $25 to $50."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Mac modifier layout",
    "explanation": "Mac keyboards put Control, Option and Command in a specific order, and the Windows order differs. Wrong order makes shortcuts feel off until you remap. Look for 'Mac layout' or printed Command and Option, and check that Windows boards include a toggle. On a Mac, Command sits beside the spacebar, and Windows boards that put Alt there make shortcuts like copy and paste awkward until remapped."
  },
  {
    "criterion": "Function row and shortcut keys",
    "explanation": "Mac function keys control brightness, Mission Control, Spotlight and dictation. A Windows-first board may not map these properly. Check the listing for shortcut keys such as 13 Mac shortcuts or for the number of dedicated keys. A board with dedicated brightness and media keys, such as the Macally pair's 13 shortcuts, avoids opening settings for common tasks."
  },
  {
    "criterion": "Bluetooth pairing and multi-device",
    "explanation": "Mac keyboards generally pair over Bluetooth, and boards with several channels let you switch between a Mac, an iPad and a phone. Check the number of devices and whether the listing mentions auto-detection of the operating system. If you also use an iPad or phone, a 3-slot board such as ProtoArc K90-A saves re-pairing each time you switch."
  },
  {
    "criterion": "Battery and charging port",
    "explanation": "USB-C charging matches current Macs and removes a separate cable. Rated life ranges from a month to six months depending on lighting and use. Look for the battery capacity and USB-C, not micro-USB. A battery quoted in months, like Macally's 800mAh up to 2 months, beats one that lists only a capacity with no runtime."
  },
  {
    "criterion": "Mechanical versus scissor feel",
    "explanation": "Scissor keys are shallow and match the MacBook's feel, while low-profile mechanical keys give more feedback. If you use a Mac laptop all day, shallow keys feel familiar, but heavy typists often prefer a mechanical board. Check for the switch type in the title or bullets. Scissor keys feel shallow and quiet, while a low-profile mechanical like Logitech's gives a tactile bump, so try the feel if you can before committing."
  }
];

export const faq = [
  {
    "q": "Will a Windows keyboard work on a Mac?",
    "a": "It will connect, but the keys may be in the wrong places. Windows boards put Alt and Windows where a Mac expects Option and Command, and brightness keys may not work. Boards such as ProtoArc K90-A and Logitech MX Mechanical Mini for Mac print Mac legends."
  },
  {
    "q": "Does the Apple Magic Keyboard work with an iPad?",
    "a": "It pairs over Bluetooth with iPads as well as Macs, but it is a single-device board that you re-pair when switching. If you move between a Mac and an iPad often, ProtoArc K90-A with 3 Bluetooth channels is easier to switch."
  },
  {
    "q": "Is NuPhy Air75 V2 worth choosing over Apple Magic Keyboard?",
    "a": "For typing feel and customization, yes. NuPhy is a 75% low-profile mechanical board with QMK/VIA remapping and three connection modes, but its legends can be Windows-first. Apple wins on native layout and automatic pairing, so choose by what you value."
  },
  {
    "q": "Is a wired Macally keyboard better than a Bluetooth one?",
    "a": "For simplicity, yes. Macally Small USB Wired has a 4 ft 7 in cable, 78 scissor keys and no battery to charge, so it works instantly. The Bluetooth Macally adds auto OS detection and 2 months of battery but needs pairing."
  },
  {
    "q": "How do I remap keys on a Mac with a non-Mac keyboard?",
    "a": "Use System Settings under Keyboard, then Modifier Keys, to swap Option and Command. For NuPhy Air75 V2 or Logitech, QMK/VIA or Logi software can do the same on the board. Remapping fixes position, but not mismatched printed legends."
  },
  {
    "q": "Will a small Mac keyboard drain my laptop battery over Bluetooth?",
    "a": "Barely. Bluetooth keyboards draw a tiny amount, and Apple Magic Keyboard is rated for about a month on a charge. The bigger drain is NuPhy's RGB backlight, so turn the lighting down if you want its battery to last."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards"},{"href":"/guide/best-mechanical-keyboards-for-mac","title":"Best Mechanical Keyboards for Mac"},{"href":"/guide/keyboard-size-chart","title":"Keyboard Size Chart"},{"href":"/guide/best-small-wireless-keyboards","title":"Best Small Wireless Keyboards"}];
