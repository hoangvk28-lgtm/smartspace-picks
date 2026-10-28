export const guideSlug = "best-small-keyboards-under-100";
export const guideTitle = "7 Best Small Keyboards Under $100 in 2026";
export const metaTitle = "Best Small Keyboards Under $100 (2026)";
export const metaDescription = "Seven compact keyboards under $100 compared, from a thin low-profile 75% to gasket TKLs, with wireless, QMK and Mac-friendly picks for small desks.";
export const mainKeyword = "small keyboards under $100";
export const introParagraphs = [
  "Spending up to a hundred dollars on a compact keyboard moves you out of the budget bracket and into boards with real design choices: aluminum frames, QMK programming, low-profile switches and multi-device pairing. That extra money is only worth it if it buys something your desk actually uses, such as a Mac layout, a thinner body or a steadier wireless link.",
  "This guide covers seven 75% and TKL boards that reach into the upper half of the range, with one cheaper pick kept as a yardstick. We evaluated them from listing specs and buyer feedback rather than bench tests, and the aim is to show which extras matter for a small desk and which are marketing."
];
export const lastUpdated = "2026-10-28";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41oj0eixvOL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-small-keyboards-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AULA F75",
    "price": "$60 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oj0eixvOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQ53BKWT?tag=deskfinds0d-20",
    "description": "The AULA F75 is an 81-key 75% with tri-mode connectivity (Bluetooth 5.0, 2.4GHz and USB) and room for five paired devices at once. A silicone pad and single-key slotted PCB give it a padded sound, and the hot-swap base takes 3-pin or 5-pin switches with pre-lubed Reaper switches fitted.\n\nWithin this $100 group, AULA F75 ranks first for an 81-key 75% that connects to five devices over Bluetooth or a 2.4GHz dongle. Keychron K3 V2 runs a close second and counters with a 75% low-profile board with Mac keycaps and QMK remapping over Bluetooth 5.1.\n\nAULA F75 is aimed at people who want one 75% board paired with several devices at once. Heavy RGB drains the battery quickly, so keep the USB-C cable on hand.",
    "specs": [
      "81-key 75% layout",
      "Bluetooth, 2.4GHz and USB-C, five devices",
      "Hot-swap base, padded structure"
    ],
    "pros": [
      "Pairs with five devices",
      "Hot-swap sockets",
      "Thocky padded sound",
      "Dongle for low latency"
    ],
    "cons": [
      "RGB cuts battery life",
      "Lighting effects add little for office use"
    ],
    "bestFor": "people who want one 75% board paired with several devices at once"
  },
  {
    "id": "best-small-keyboards-under-100-2",
    "rank": 2,
    "badge": "Best for Mac and Windows",
    "name": "Keychron K3 V2",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41k46NzwzHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08LSBTTQX?tag=deskfinds0d-20",
    "description": "The K3 Version 2 is a 75% low-profile board with a reinforced aluminum body and a plastic bottom, ultra-thin by mechanical standards and light enough to carry. It pairs with up to three devices over Bluetooth 5.1, ships with a Mac layout plus extra keycaps for Windows, and uses open-source QMK firmware so you can remap through the Keychron Launcher web app.\n\nCompared with AULA F75, which sits one place higher, the Keychron K3 V2 is stronger on a 75% low-profile board with Mac keycaps and QMK remapping over Bluetooth 5.1 but it gives up a 2.4GHz dongle.\n\nBluetooth 5.1 is its only wireless mode, so there is no dongle for lower latency. Otherwise the Keychron K3 V2 suits MacBook users who also touch a Windows machine and want proven support.",
    "specs": [
      "75% low-profile aluminum body",
      "Bluetooth 5.1 for three devices",
      "QMK remapping, Mac and Windows keycaps"
    ],
    "pros": [
      "Mac layout with Windows keycaps",
      "QMK remapping in a browser",
      "Thin and light",
      "Established brand"
    ],
    "cons": [
      "No 2.4GHz dongle",
      "Low-profile switches limit swap options"
    ],
    "bestFor": "MacBook users who also touch a Windows machine and want proven support"
  },
  {
    "id": "best-small-keyboards-under-100-3",
    "rank": 3,
    "badge": "Best Slim Low-Profile",
    "name": "Razer Joro",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ggO+iNH3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5FPG64M?tag=deskfinds0d-20",
    "description": "The Razer Joro fits a function row and full-size arrow keys into a 374g body that is only 16.5mm thin, with an aluminum frame and ultra low profile switches. It connects over Bluetooth 5.0 or USB-C, and the listing rates the battery at 1800 hours, which is far longer than typical RGB-first boards.\n\nThe Razer Joro sits between Keychron K3 V2 and Keychron V3 8K. It stands out for a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery, whereas Keychron V3 8K brings an 80% layout with QMK programming, a knob and an 8000 Hz polling rate.\n\nRazer Joro is aimed at people who want a thin, light 75% they can carry around and type on quietly. Low-profile keys cannot be swapped like standard sockets, so the feel you buy is the feel you keep.",
    "specs": [
      "75% layout, 16.5mm thin",
      "Bluetooth 5.0 and USB-C",
      "Aluminum frame, 374g"
    ],
    "pros": [
      "Very thin and light",
      "Long rated battery life",
      "Quiet low-profile keys",
      "Aluminum frame"
    ],
    "cons": [
      "Low-profile switches are not swappable like MX sockets",
      "No 2.4GHz dongle option"
    ],
    "bestFor": "people who want a thin, light 75% they can carry around and type on quietly"
  },
  {
    "id": "best-small-keyboards-under-100-4",
    "rank": 4,
    "badge": "Best Customizable TKL",
    "name": "Keychron V3 8K",
    "price": "$60 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412lJhufA4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJ63Y85X?tag=deskfinds0d-20",
    "description": "The V3 8K is an 80% TKL with a programmable knob, QMK firmware, a hot-swap PCB for 3-pin and 5-pin switches and tactile Brown switches in this version. In wired mode it reports at 8000 Hz, and a hardware toggle plus extra keycaps cover macOS, Windows and Linux layouts.\n\nWhere Razer Joro leads with a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery, the Keychron V3 8K answers with an 80% layout with QMK programming, a knob and an 8000 Hz polling rate, and it gives up wireless.\n\nIt is wired only and sits near the top of the budget, so a wireless buyer should look elsewhere. Otherwise the Keychron V3 8K suits enthusiasts who want a programmable, hot-swap TKL with a volume knob.",
    "specs": [
      "80% TKL with knob",
      "QMK/VIA programmable, hot-swap",
      "8000 Hz wired polling"
    ],
    "pros": [
      "Full QMK remapping",
      "Hot-swap PCB",
      "System toggle for Mac and Windows",
      "Programmable knob"
    ],
    "cons": [
      "Wired only",
      "Costs more than the 75% options"
    ],
    "bestFor": "enthusiasts who want a programmable, hot-swap TKL with a volume knob"
  },
  {
    "id": "best-small-keyboards-under-100-5",
    "rank": 5,
    "badge": "Best Value TKL",
    "name": "Keychron C3 Pro",
    "price": "$50 to $60",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JHnxYHN+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F47NZ6DM?tag=deskfinds0d-20",
    "description": "The C3 Pro 8K is an 80% TKL with a gasket mount, acoustic foam, hot-swappable Keychron Apex switches and shine-through PBT keycaps. QMK and VIA firmware let you remap every key from a browser, and the 8000 Hz wired polling rate is selectable down to 1000 Hz.\n\nWhat separates the Keychron C3 Pro from Keychron V3 8K above it is focus: a gasket-mounted wired TKL with QMK, hot-swap and shine-through PBT keycaps at a mid price, and it gives up wireless to get there.\n\nKeychron C3 Pro is aimed at wired-desk typists who want gasket feel and QMK programming under the $100 line. There is no Bluetooth or dongle option, so it stays tethered to one machine.",
    "specs": [
      "80% TKL, gasket mount",
      "QMK/VIA, hot-swap Apex switches",
      "8000 Hz polling, PBT keycaps"
    ],
    "pros": [
      "Gasket mount with foam",
      "Full key remapping",
      "Hot-swap switches",
      "Shine-through PBT keycaps"
    ],
    "cons": [
      "Wired only",
      "No knob on this model"
    ],
    "bestFor": "wired-desk typists who want gasket feel and QMK programming under the $100 line"
  },
  {
    "id": "best-small-keyboards-under-100-6",
    "rank": 6,
    "badge": "Best Metal TKL",
    "name": "HyperX Alloy Origins Core",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gY5K-zKQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YMHGP86?tag=deskfinds0d-20",
    "description": "The Alloy Origins Core is a tenkeyless board with a full aircraft-grade aluminum body, HyperX mechanical switches rated for 80 million keystrokes and a detachable cable. Lighting and macros are handled by HyperX Ngenuity software, and the compact body means more mouse room on a narrow desk.\n\nCompared with Keychron C3 Pro, which sits one place higher, the HyperX Alloy Origins Core is stronger on an aircraft-grade aluminum TKL with a detachable cable and HyperX switches but it gives up wireless and hot-swap sockets.\n\nIt is wired only and does not advertise swappable switches, so the switch you pick is the one you keep. Otherwise the HyperX Alloy Origins Core suits wired-desk typists who want a sturdy 87-key board that survives travel.",
    "specs": [
      "87-key tenkeyless",
      "Aluminum body, detachable cable",
      "HyperX switches rated 80M keystrokes"
    ],
    "pros": [
      "Rigid all-metal case",
      "Detachable cable",
      "Compact TKL width",
      "Software lighting and macros"
    ],
    "cons": [
      "Wired only",
      "No hot-swap sockets listed"
    ],
    "bestFor": "wired-desk typists who want a sturdy 87-key board that survives travel"
  },
  {
    "id": "best-small-keyboards-under-100-7",
    "rank": 7,
    "badge": "Best Gasket Feel",
    "name": "LTC Nimbleback NB832",
    "price": "$40 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dl85o5CYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9237RVM?tag=deskfinds0d-20",
    "description": "The Nimbleback NB832 packs 82 keys into a gasket-mounted 75% body with a volume knob, and it connects over Bluetooth 5.0, 2.4GHz or a USB-C cable. The listing describes five layers of internal padding, including four sound-dampening mats and a PET sheet, which is where its softer, more cushioned keystroke comes from.\n\nThe LTC Nimbleback NB832 closes the list. Next to HyperX Alloy Origins Core it gives up the tiniest possible width, in return for an 82-key 75% layout with a gasket mount and five layers of padding.\n\nLTC Nimbleback NB832 is aimed at typists who want the arrow cluster and function row kept without paying flagship money. It is a lesser-known brand, so check the return window and warranty wording on the listing before you commit.",
    "specs": [
      "82-key 75% gasket mount",
      "Bluetooth, 2.4GHz and USB-C",
      "Hot-swap with pre-lubed linear switches"
    ],
    "pros": [
      "Five-layer sound padding",
      "Arrow keys and function row kept",
      "Hot-swap PCB, no soldering",
      "Volume knob included"
    ],
    "cons": [
      "Lesser-known brand",
      "RGB use shortens battery runtime"
    ],
    "bestFor": "typists who want the arrow cluster and function row kept without paying flagship money"
  }
];

export const howWeEvaluated = [
  {
    "title": "Layout accuracy",
    "description": "Each board was checked against the layout it claims, by key count and by whether the function row and arrow keys survive, since listings use 60%, 65%, 75% and TKL loosely."
  },
  {
    "title": "Connection options",
    "description": "Wired, 2.4GHz and Bluetooth support was compared, along with the number of device slots and any latency figures the listing quotes."
  },
  {
    "title": "Switch and sound design",
    "description": "Each pick was scored on switch type, whether switches can be changed, and the foam or gasket layers behind its keystroke sound."
  },
  {
    "title": "Desk footprint",
    "description": "Stated width and depth were compared against how much room a board takes, including any knob or extra keys."
  },
  {
    "title": "Value inside the price ceiling",
    "description": "Features gained per price bucket were compared, with extra weight on what you lose when you spend less on a compact board. Every pick here lists below $100, and LTC Nimbleback NB832 to Razer Joro marks the spread."
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
    "subheading": "By Layout and Use",
    "intro": "The first question at this price is which layout you will keep, since each board below trades keys for width in a different way.",
    "table": {
      "headers": [
        "Layout and Use",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Juggles a laptop, a desktop and a tablet",
          "AULA F75: an 81-key 75% that connects to five devices over Bluetooth or a 2.4GHz dongle"
        ],
        [
          "Switches between a MacBook and a Windows PC",
          "Keychron K3 V2: a 75% low-profile board with Mac keycaps and QMK remapping over Bluetooth 5.1"
        ],
        [
          "Wants a laptop-like slim board on a modern desk",
          "Razer Joro: a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery"
        ],
        [
          "Wants a programmable TKL with a big-brand toolchain",
          "Keychron V3 8K: an 80% layout with QMK programming, a knob and an 8000 Hz polling rate"
        ],
        [
          "Wants a premium-feeling wired TKL without flagship cost",
          "Keychron C3 Pro: a gasket-mounted wired TKL with QMK, hot-swap and shine-through PBT keycaps at a mid price"
        ],
        [
          "Fixed desk, wants a rigid metal board for years",
          "HyperX Alloy Origins Core: an aircraft-grade aluminum TKL with a detachable cable and HyperX switches"
        ],
        [
          "Types for hours and wants a softer, quieter keystroke",
          "LTC Nimbleback NB832: an 82-key 75% layout with a gasket mount and five layers of padding"
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
          "Under $55",
          "Keychron C3 Pro (Best Value TKL); LTC Nimbleback NB832 (Best Gasket Feel)"
        ],
        [
          "Up to $80",
          "HyperX Alloy Origins Core (Best Metal TKL); Keychron V3 8K (Best Customizable TKL); AULA F75 (Best Multi-Device 75%)"
        ],
        [
          "Up to $100",
          "Razer Joro (Best Slim Low-Profile); Keychron K3 V2 (Best for Mac and Windows)"
        ]
      ]
    }
  },
  {
    "subheading": "Wired vs Wireless",
    "intro": "Wired against wireless is the one fork in this list that changes which boards make sense.",
    "cards": [
      {
        "label": "Wired",
        "text": "A cable never needs charging, has the lowest latency and is the simplest connection, which suits a desk that does not move. In this guide: Keychron V3 8K, Keychron C3 Pro, HyperX Alloy Origins Core."
      },
      {
        "label": "Wireless",
        "text": "Wireless lets one board move between a laptop, tablet and desktop and keeps the desk free of cords, at the cost of a battery that RGB lighting drains faster. In this guide: AULA F75, Keychron K3 V2, Razer Joro, LTC Nimbleback NB832."
      }
    ],
    "note": "Most buyers should default to wireless with a dongle unless the board never leaves one desk."
  },
  {
    "subheading": "By Second Priority",
    "table": {
      "headers": [
        "Second priority",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Wants to remap keys and build macros",
          "Keychron K3 V2 (Best for Mac and Windows): gives up a 2.4GHz dongle"
        ],
        [
          "Packs a board in a bag for work trips",
          "Razer Joro (Best Slim Low-Profile): gives up hot-swap switches"
        ],
        [
          "Fast-reaction gaming alongside work",
          "Keychron V3 8K (Best Customizable TKL): gives up wireless"
        ],
        [
          "Programs shortcuts for a spreadsheet-heavy desk",
          "Keychron C3 Pro (Best Value TKL): gives up wireless"
        ],
        [
          "Takes the board to LAN nights or the office",
          "HyperX Alloy Origins Core (Best Metal TKL): gives up wireless and hot-swap sockets"
        ]
      ]
    }
  },
  {
    "subheading": "For Narrow Desks Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A board near 13 to 14 inches wide so the mouse keeps room to travel, with arrows kept if you edit documents."
      },
      {
        "label": "In this comparison",
        "text": "Start with Razer Joro, which brings a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want wireless pairing, a known support record or a Mac-first key set. Here, Razer Joro is the example, with a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery."
      },
      {
        "label": "Save if",
        "text": "You only need a tidy compact board and a cable is fine. Here, LTC Nimbleback NB832 is the example, with an 82-key 75% layout with a gasket mount and five layers of padding."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Key count and layout label",
    "explanation": "Compact layouts are named loosely: a 60% board has about 61 keys and no arrows, a 65% adds arrows and a few navigation keys, a 75% keeps the F1 to F12 row, and a tenkeyless (TKL) board has 87 keys. This matters because two boards sold under the same label can differ by a whole row, and a missing function row or arrow cluster changes how you edit documents and spreadsheets. Count the keys in the title or specification list and look at the photo to confirm which rows exist before paying."
  },
  {
    "criterion": "Switch type and hot-swap sockets",
    "explanation": "Mechanical switches come as linear, tactile or clicky, while scissor and membrane boards use rubber or shallow mechanisms with a softer, quieter feel. Hot-swap sockets let you pull a switch out and push another in, so a switch you dislike is a five-minute fix instead of a lost purchase. Look for the words hot-swappable and 3-pin or 5-pin support on the listing; a phrase such as customizable alone does not promise it."
  },
  {
    "criterion": "Real desk footprint",
    "explanation": "A 75% board is about 13 to 14 inches wide, while a full-size board is roughly 17 to 18, and that gap decides how far your mouse can travel on a narrow desk. Compact boards also change where the arrow keys sit, which costs most people a week or two of mis-hits on Shift and Enter. Measure the free width to the right of the keyboard first and compare it against the stated dimensions, not the layout name."
  },
  {
    "criterion": "Sound and typing feel",
    "explanation": "Gasket mounts, foam layers and a padded plate lower the hollow ping that cheap plastic cases give, while clicky switches or bare metal plates raise it. For a shared room or video calls, a softer sound matters more than switch brand. Read whether the listing names foam or pad layers and how many, and treat vague words such as thocky as a hint, not a spec."
  },
  {
    "criterion": "Software, remapping and operating system support",
    "explanation": "Many compact boards rely on a layer key for arrows or media controls, so remapping matters more than on a full-size board. Some vendor software runs only on Windows, while browser-based tools such as QMK or VIA work on any system. Confirm the supported operating systems on the listing and whether remapping is stored on the keyboard itself."
  },
  {
    "criterion": "What the $100 ceiling buys",
    "explanation": "The cheapest pick here, LTC Nimbleback NB832, is built around an 82-key 75% layout with a gasket mount and five layers of padding, while the priciest, Razer Joro, is built around a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery. Paying for the larger layout or the wireless board makes sense only if you edit documents or move between machines most days. Hold the two listings side by side and ask which difference you would notice after a month at the desk."
  }
];

export const faq = [
  {
    "q": "What is the difference between 60%, 65%, 75% and TKL?",
    "a": "A 60% board has about 61 keys and no arrow or function row. A 65% adds arrow keys, a 75% keeps the function row too, and a TKL (tenkeyless) has 87 keys and drops only the number pad. Each step up gains keys and costs width."
  },
  {
    "q": "Are cheap hot-swap keyboards actually good?",
    "a": "Hot-swap sockets are now common on low-cost boards, and they let you change switches without soldering. The build and stabilizer quality varies, so read what the listing says about foam, lubed stabilizers and keycap material."
  },
  {
    "q": "Will a compact keyboard slow me down?",
    "a": "Expect one to two weeks of adjustment on a 60% or 65% layout because arrows and F-keys sit on a layer or in a tighter cluster. Most people adapt, but spreadsheet-heavy users may prefer a 75% or TKL board."
  },
  {
    "q": "How do I connect a 2.4GHz keyboard?",
    "a": "Plug the small USB dongle into the computer, set the board to its 2.4G mode with the switch or the Fn shortcut, and it should link on its own. The dongle often stores inside the keyboard or case, so keep it there when you travel."
  },
  {
    "q": "How should I clean a compact mechanical keyboard?",
    "a": "Unplug it or switch it off, turn it upside down and shake out crumbs, then brush between keycaps. On a hot-swap board you can pull the keycaps with a puller to wipe the plate, but keep liquids away from the circuit board."
  },
  {
    "q": "What do I give up by staying under $100?",
    "a": "Going to the low end, LTC Nimbleback NB832 keeps an 82-key 75% layout with a gasket mount and five layers of padding but gives up the tiniest possible width. Razer Joro adds a 16.5mm low-profile 75% with an aluminum frame and a rated 1800-hour battery, while giving up hot-swap switches. If that compromise suits your desk, the cheaper board will do the job."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-small-keyboards-under-50","title":"Best Small Keyboards Under $50"},{"href":"/guide/best-small-keyboards-under-30","title":"Best Small Keyboards Under $30"},{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards (2026): Compact Picks for Desk, Dorm Room and Travel"},{"href":"/guide/best-75-percent-keyboards","title":"Best 75% Keyboards for Small Desks"},{"href":"/guide/keyboard-size-chart","title":"keyboard-size-chart"}];
