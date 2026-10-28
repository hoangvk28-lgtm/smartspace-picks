export const guideSlug = "best-60-percent-keyboards";
export const guideTitle = "6 Best 60% Keyboards for Tiny Desks in 2026";
export const metaTitle = "Best 60% Keyboards for Tiny Desks (2026)";
export const metaDescription = "Six 60% keyboards of about 61 keys compared for tiny desks and travel, from a budget membrane board to wireless and magnetic-switch options for gamers.";
export const mainKeyword = "60% keyboards";
export const introParagraphs = [
  "A 60% keyboard is the smallest layout most people can type on all day. It drops the arrows, the function row and the number pad, leaving about 61 keys in a board that can slide into a backpack. The price of that size is an Fn layer: arrows, F-keys and navigation sit behind a modifier, and you need to be ready for that before you buy.",
  "We looked for real 60% boards and put them in order of how well they handle the trade-off: wired and wireless options, switch type, and how much the listing documents. One pick, the DIERYA DK63, adds arrows to a 60% footprint, and we call that out so you know exactly what you are getting."
];
export const lastUpdated = "2026-10-28";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41EckzKo9lL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-60-percent-keyboards-1",
    "rank": 1,
    "badge": "Best Overall Value",
    "name": "Redragon K617",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EckzKo9lL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09BVCVTBC?tag=deskfinds0d-20",
    "description": "The Redragon K617 is a wired 61-key board with a hot-swappable socket that accepts almost any 3-pin or 5-pin switch, stock red linear switches rated for 50 million keypresses, and up to 20 lighting modes. Software lets you design lighting and set macros, and the white and grey colorway stands out from the usual black.\n\nAgainst the Razer Huntsman Mini it is much cheaper and gives you hot-swap sockets that the Razer does not. Against the wireless RK61 it has no battery to charge, which keeps the desk cleaner and the board lighter.\n\nIt is the pick for a first 60% mechanical board where the buyer wants room to experiment with switches. If you need to pair with a phone or tablet, look at the RK61.",
    "specs": [
      "61 keys, hot-swap sockets",
      "Red linear switches, 50M keypress rating",
      "20 lighting modes, macro software"
    ],
    "pros": [
      "Hot-swap at a low cost",
      "Quiet red linear switches",
      "Macro and lighting software",
      "No battery to manage"
    ],
    "cons": [
      "Wired only",
      "No arrow keys without the Fn layer"
    ],
    "bestFor": "first-time 60% buyers who want to experiment with switches"
  },
  {
    "id": "best-60-percent-keyboards-2",
    "rank": 2,
    "badge": "Best Wireless",
    "name": "RK ROYAL KLUDGE RK61",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xvIy3YcnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PBC15N8?tag=deskfinds0d-20",
    "description": "The RK61 is a 61-key board with three modes: 2.4GHz wireless, Bluetooth and USB wired. It uses a hot-swappable red linear switch, has 18 RGB effects plus 8 single-color modes, and comes with an extra 4.7-foot coiled cable. An 8-degree tilt is built into the case.\n\nCompared with the Redragon K617 it adds wireless and a coiled cable for a similar price tier, so the trade is battery management in exchange for freedom to move. Against the DIERYA DK63 it has fewer keys but a stricter 60% footprint.\n\nPick this if you want a true 60% board that can also pair with a tablet or laptop. The honest caution is that battery life depends heavily on RGB use, so plan to charge it weekly if you leave lighting on.",
    "specs": [
      "61 keys, 3 connection modes",
      "Hot-swap red linear switches",
      "Includes coiled USB cable"
    ],
    "pros": [
      "Three connection modes",
      "Hot-swap sockets",
      "Extra coiled cable in the box",
      "Many lighting effects"
    ],
    "cons": [
      "Battery drains with RGB",
      "No arrow keys without the Fn layer"
    ],
    "bestFor": "a wireless 60% board for desk and travel"
  },
  {
    "id": "best-60-percent-keyboards-3",
    "rank": 3,
    "badge": "Best with Arrow Keys",
    "name": "DIERYA DK63",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Jca-fjDNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CP5SZ2JB?tag=deskfinds0d-20",
    "description": "The DIERYA DK63 is a compact board that keeps the 60% footprint but adds dedicated arrow keys, giving 63 keys in total. It connects over 2.4GHz, Bluetooth 5.0 or wired USB, uses a custom 45g linear red switch quoted at about 40dB, and has a 3000mAh battery that the listing rates at roughly 8 hours with maximum backlight.\n\nThis is the pick that most directly addresses the biggest 60% complaint, because you do not have to reach for an Fn layer to move the cursor. The trade against a strict 60% is that two extra key columns make the board slightly wider.\n\nChoose it if you want the compact footprint but you edit text or spreadsheets, where arrows matter. A strict 61-key purist would prefer the RK61.",
    "specs": [
      "63 keys with dedicated arrows",
      "2.4GHz, Bluetooth 5.0 and USB",
      "3000mAh battery, 45g linear switch"
    ],
    "pros": [
      "Dedicated arrow keys",
      "Low-noise linear switch",
      "Three connection modes",
      "18 RGB lighting modes"
    ],
    "cons": [
      "Slightly larger than a strict 61-key board",
      "Battery life depends on lighting"
    ],
    "bestFor": "editing text and spreadsheets without an Fn layer for arrows"
  },
  {
    "id": "best-60-percent-keyboards-4",
    "rank": 4,
    "badge": "Best Premium Build",
    "name": "Razer Huntsman Mini",
    "price": "$50 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41m8BNuVVXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFJDH7GM?tag=deskfinds0d-20",
    "description": "The Razer Huntsman Mini is a wired 60% board with Razer Linear Optical switches, which register keypresses with a beam of light and have an actuation distance 15 to 30 percent shorter than other mechanical switches, according to the listing. It has an aluminum top frame, oil-resistant double-shot PBT keycaps and per-key Chroma RGB.\n\nIt costs noticeably more than the Redragon K617 and does not offer hot-swap sockets, so the money goes to materials, optical switches and the Hypershift remapping system. It also has no wireless.\n\nIt suits a competitive gamer or anyone who wants a sturdy, premium-feeling board and will not change switches. Budget buyers can get the same layout for much less.",
    "specs": [
      "60% layout, optical linear switches",
      "Aluminum top frame, PBT keycaps",
      "Razer Hypershift remapping"
    ],
    "pros": [
      "Fast optical switches",
      "Aluminum top frame",
      "Double-shot PBT keycaps",
      "Per-key lighting that syncs with games"
    ],
    "cons": [
      "Wired only, no hot-swap",
      "Costs more than similar boards"
    ],
    "bestFor": "gamers who value fast actuation and a solid frame"
  },
  {
    "id": "best-60-percent-keyboards-5",
    "rank": 5,
    "badge": "Best for FPS Gaming",
    "name": "AULA WIN60 HE",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415-dsKafPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSMWJD6M?tag=deskfinds0d-20",
    "description": "The AULA WIN60 HE uses Hall Effect magnetic switches with adjustable actuation, which means you set how far a key travels before it registers. Its rapid-trigger step is listed as 0.02mm, a feature that lets a key reset almost immediately, popular in games such as Valorant and CS2.\n\nIt is a wired 60% board with RGB, PBT keycaps and hot-swappable magnetic switches. Compared with the Redragon K617 it is aimed at competitive play rather than typing comfort, and a magnetic switch can feel different from a normal mechanical one.\n\nChoose it if rapid response in shooters is the main goal and you want adjustability. Skip it if you want an ordinary typing board or wireless.",
    "specs": [
      "Hall Effect magnetic switches",
      "Rapid trigger, 0.02mm step",
      "60% layout, wired, hot-swap"
    ],
    "pros": [
      "Adjustable actuation point",
      "Rapid trigger for FPS games",
      "Compact 60% footprint",
      "PBT keycaps"
    ],
    "cons": [
      "Wired only",
      "Aimed at gaming, not typing comfort"
    ],
    "bestFor": "competitive FPS players who want an adjustable switch"
  },
  {
    "id": "best-60-percent-keyboards-6",
    "rank": 6,
    "badge": "Best Under $25",
    "name": "DGG K60",
    "price": "Under $25",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wBzm8rD2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08DM3G9R1?tag=deskfinds0d-20",
    "description": "The DGG K60 is a 61-key wired board that uses a membrane design with silicone beneath the keycaps, giving a soft feel that the listing describes as close to a mechanical one. It has five backlight effects, adjustable brightness and speed, and plug-and-play compatibility with Windows and macOS.\n\nThis is not a mechanical board, which is the key difference from the other five. Against the Redragon K617 you give up switch quality and hot-swap in exchange for a much lower price and a quieter touch.\n\nIt is a sensible test of the 60% layout, or a travel spare you will not mind losing. Anyone who expects a clicky feel should look elsewhere.",
    "specs": [
      "61 keys, membrane design",
      "5 backlight effects",
      "Windows and macOS compatible"
    ],
    "pros": [
      "Lowest cost here",
      "Quiet keystrokes",
      "Plug and play",
      "Compact for travel"
    ],
    "cons": [
      "Not mechanical",
      "Feels mushy next to switch boards"
    ],
    "bestFor": "trying the 60% size cheaply or carrying a spare"
  }
];

export const howWeEvaluated = [
  {
    "title": "Strict 60% layout",
    "description": "Boards were checked against the 61-key standard, and the one board with added arrows is labeled so you can compare it fairly."
  },
  {
    "title": "Fn-layer usability",
    "description": "We noted how each board handles arrows and F-keys, including whether software remapping is available."
  },
  {
    "title": "Switch technology",
    "description": "Linear, membrane, optical and magnetic switches were compared on feel, noise and replaceability."
  },
  {
    "title": "Portability",
    "description": "Weight, wireless options and cable design were weighed for bag use."
  },
  {
    "title": "Price tier fit",
    "description": "Each pick was judged on what it gives you relative to its price bucket, with less weight on lighting extras."
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
    "subheading": "By Main Use",
    "table": {
      "headers": [
        "Your situation",
        "Pick from this guide"
      ],
      "rows": [
        [
          "First 60% board, want to experiment",
          "Redragon K617: hot-swap sockets at a low cost"
        ],
        [
          "Desk plus tablet or laptop",
          "RK ROYAL KLUDGE RK61: 2.4GHz and Bluetooth"
        ],
        [
          "Need arrow keys",
          "DIERYA DK63: 63 keys with arrows"
        ],
        [
          "Competitive FPS play",
          "AULA WIN60 HE: rapid trigger"
        ],
        [
          "Premium build, wired",
          "Razer Huntsman Mini"
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
          "Under $25",
          "DGG K60: membrane, quiet"
        ],
        [
          "$25 to $50",
          "Redragon K617 for wired, RK61 or DIERYA DK63 for wireless, AULA WIN60 HE for gaming"
        ],
        [
          "$50 to $75",
          "Razer Huntsman Mini: aluminum frame and optical switches"
        ]
      ]
    }
  },
  {
    "subheading": "Membrane vs Mechanical vs Magnetic",
    "intro": "The switch technology matters more than the 60% label for how the board feels day to day.",
    "cards": [
      {
        "label": "Mechanical or optical",
        "text": "Gives distinct key feedback and lasts longer. The Redragon K617, RK61, DIERYA DK63 and Razer Huntsman Mini use mechanical or optical switches; the first three are hot-swap or user-friendly choices."
      },
      {
        "label": "Membrane or magnetic",
        "text": "The DGG K60 is membrane for a soft, quiet feel at a low price, while the AULA WIN60 HE uses magnetic Hall Effect switches for adjustable actuation, best for gamers."
      }
    ],
    "note": "Most buyers who type a lot should pick mechanical; choose magnetic only if you will use the rapid-trigger settings."
  },
  {
    "subheading": "By Arrow Key Needs",
    "table": {
      "headers": [
        "Need",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Arrow keys always visible",
          "DIERYA DK63"
        ],
        [
          "Happy with an Fn layer",
          "Redragon K617 or RK ROYAL KLUDGE RK61"
        ],
        [
          "Remap arrows to a custom layer",
          "Razer Huntsman Mini with Hypershift"
        ],
        [
          "Gaming only, WASD focus",
          "AULA WIN60 HE"
        ]
      ]
    }
  },
  {
    "subheading": "For Travel and Bag Carry Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A wireless mode, a detachable cable, and a plain case that can take a few knocks in a backpack."
      },
      {
        "label": "In this comparison",
        "text": "The RK ROYAL KLUDGE RK61 ships with an extra coiled cable and three connection modes, and the DGG K60 is cheap enough that damage is not painful."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a sturdy case and fast actuation: the Razer Huntsman Mini has an aluminum top frame and optical switches."
      },
      {
        "label": "Save if",
        "text": "You are still deciding on 60%: the DGG K60 or Redragon K617 give you the layout for far less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fn-layer arrows and shortcuts",
    "explanation": "A strict 60% board has no arrow keys, no function row and no navigation keys, so arrows live on an Fn layer, commonly under I, J, K and L or the bottom row. This matters because moving the cursor can feel slow until you learn it. Check the product photos for the legends printed on the front or side of the keycaps, and confirm whether the software lets you remap them."
  },
  {
    "criterion": "Switch type and replaceability",
    "explanation": "Mechanical switches can be linear, tactile or clicky, optical switches use light, and magnetic switches measure travel with a sensor. Hot-swap boards let you change switches without soldering. Look for 'hot-swappable' on the listing and, for magnetic boards, whether actuation can be set in software."
  },
  {
    "criterion": "Wireless modes and battery",
    "explanation": "A 60% board is the easiest layout to carry, so wireless is useful, but a small case holds a small battery. Quoted battery life is usually measured with lighting low. One pick here states about 8 hours at maximum backlight, a useful number to compare."
  },
  {
    "criterion": "True 60% versus near-60% layouts",
    "explanation": "Some listings call 63-key and 68-key boards 60%, which changes whether arrows exist. This matters because the wrong layout can leave you without the keys you need. Count the keys: a strict 60% board has about 61, and a 65% board has about 66 to 68."
  },
  {
    "criterion": "Case material and typing angle",
    "explanation": "A small case can flex, which changes the sound. Aluminum or thick plastic stays quieter. Some boards include a tilt, such as 8 degrees, and adjustable feet can help if your wrists dislike a flat surface. Look for a stated material and for kickstand legs in the images."
  }
];

export const faq = [
  {
    "q": "Is a 60% keyboard good for typing?",
    "a": "Yes, once you learn the Fn layer for arrows and navigation. The main keys are the same size as on a full-size board, so touch typing is unaffected. If you edit text all day, a 65% or 63-key board may be less frustrating."
  },
  {
    "q": "How many keys does a 60% keyboard have?",
    "a": "A strict 60% board has about 61 keys. Some versions add arrows and reach 63, and 65% boards reach 66 to 68. Always count before ordering."
  },
  {
    "q": "Are 60% keyboards good for gaming?",
    "a": "They are popular for gaming because they leave more room for a mouse and bring WASD nearer the center of the desk. If your game uses a lot of function keys, you will need the Fn layer or a different layout."
  },
  {
    "q": "Can I use a 60% keyboard with a Mac?",
    "a": "Yes, most 60% keyboards work on macOS, though some features may require software on Windows. Check that the Command and Option keys are mapped as you expect, or use a remapping utility."
  },
  {
    "q": "Should I choose a wired or wireless 60% keyboard?",
    "a": "Wired is simpler and never needs charging, while wireless frees the desk and can pair with a tablet. Two boards here, the RK61 and DIERYA DK63, offer both, so you can switch based on the situation."
  },
  {
    "q": "What is a magnetic-switch keyboard?",
    "a": "It uses sensors to measure key travel, so you can set where the key actuates and enable rapid trigger. It is mostly useful for competitive shooters and less for office typing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/keycap-size-chart", title: "Keycap Size Chart: 1u and Spacebar Sizes" },{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards"},{"href":"/guide/keyboard-size-chart","title":"Keyboard Size Chart"},{"href":"/guide/60-vs-65-vs-75-keyboard","title":"60% vs 65% vs 75% Keyboard"},{"href":"/guide/best-65-percent-keyboards","title":"Best 65% Keyboards"}];
