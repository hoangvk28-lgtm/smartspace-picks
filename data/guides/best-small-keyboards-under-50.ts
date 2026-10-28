export const guideSlug = "best-small-keyboards-under-50";
export const guideTitle = "7 Best Small Keyboards Under $50 in 2026";
export const metaTitle = "Best Small Keyboards Under $50 (2026)";
export const metaDescription = "Seven compact keyboards under $50, from 60% to TKL, with wired and wireless picks, hot-swap options and the trade-offs you accept at this price.";
export const mainKeyword = "small keyboards under $50";
export const introParagraphs = [
  "Fifty dollars is where compact keyboards stop being compromises and start offering real features: gasket mounts, hot-swap sockets and tri-mode wireless all show up in this band. The harder question is which size you actually need, because a 60% board saves the most desk space but moves the arrow keys, while a 75% or TKL keeps them at a cost of width.",
  "We evaluated seven boards that really are compact, spanning 60%, 65%, 75% and tenkeyless layouts, and sorted them by what each keeps and what it drops. Descriptions rely on listing specs rather than hands-on use, and the spread runs from the cheapest wired pick to the priciest wireless one under the ceiling."
];
export const lastUpdated = "2026-10-28";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41dl85o5CYL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-small-keyboards-under-50-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "LTC Nimbleback NB832",
    "price": "$40 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dl85o5CYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9237RVM?tag=deskfinds0d-20",
    "description": "The Nimbleback NB832 packs 82 keys into a gasket-mounted 75% body with a volume knob, and it connects over Bluetooth 5.0, 2.4GHz or a USB-C cable. The listing describes five layers of internal padding, including four sound-dampening mats and a PET sheet, which is where its softer, more cushioned keystroke comes from.\n\nLTC Nimbleback NB832 takes the top spot thanks to an 82-key 75% layout with a gasket mount and five layers of padding. Its closest challenger, womier L65, leans on a 66-key layout that keeps separate arrow keys and adds a volume knob, so weigh your own priorities there.\n\nLTC Nimbleback NB832 is aimed at typists who want the arrow cluster and function row kept without paying flagship money. It is a lesser-known brand, so check the return window and warranty wording on the listing before you commit.",
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
  },
  {
    "id": "best-small-keyboards-under-50-2",
    "rank": 2,
    "badge": "Best 60% With Arrows",
    "name": "womier L65",
    "price": "$30 to $40",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RMOpq75tL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGGWGLMM?tag=deskfinds0d-20",
    "description": "The womier L65 is a gasket-mounted 66-key board that keeps a standalone arrow cluster and adds a rotary knob, which is the main reason it feels easier to live with than a strict 61-key layout. It runs on a 4000mAh battery across USB-C, 2.4GHz and Bluetooth 5.0 and uses a hot-swap socket with a pre-lubed linear switch.\n\nWhere LTC Nimbleback NB832 leads with an 82-key 75% layout with a gasket mount and five layers of padding, the womier L65 answers with a 66-key layout that keeps separate arrow keys and adds a volume knob, and it gives up the function row.\n\nThe function row is missing, so media keys and F-keys sit on layers. Otherwise the womier L65 suits buyers who want the 60% footprint but refuse to lose the arrow keys.",
    "specs": [
      "66-key 60% with arrow cluster",
      "4000mAh battery, tri-mode",
      "Hot-swap, gasket mount, knob"
    ],
    "pros": [
      "Arrow keys kept on the main layer",
      "Large 4000mAh battery",
      "Hot-swap sockets",
      "Volume knob built in"
    ],
    "cons": [
      "No dedicated function row",
      "Gaming-style RGB styling"
    ],
    "bestFor": "buyers who want the 60% footprint but refuse to lose the arrow keys"
  },
  {
    "id": "best-small-keyboards-under-50-3",
    "rank": 3,
    "badge": "Best Quiet Office TKL",
    "name": "Keychron B33",
    "price": "$30 to $40",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KDB39F8-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRRXFWCR?tag=deskfinds0d-20",
    "description": "The Keychron B33 is a 16mm-thin TKL with 87 keys, pre-lubed scissor switches and tri-mode wireless: 2.4GHz, Bluetooth 5.2 and USB-C, with up to three paired devices. The listing rates the battery at 320 hours, and a browser-based Launcher app handles remapping and macros without any install.\n\nWhat separates the Keychron B33 from womier L65 above it is focus: an ultra-slim scissor-switch TKL with a battery rated at 320 hours, and it gives up the tactile snap of a mechanical switch to get there.\n\nKeychron B33 is aimed at office and shared-room workers who want a slim, quiet 87-key board. Scissor switches feel shallow, so anyone chasing a mechanical thock will find it flat.",
    "specs": [
      "87-key TKL, 16mm thin",
      "2.4GHz, Bluetooth 5.2, USB-C",
      "Scissor switches, 320-hour battery rating"
    ],
    "pros": [
      "Very quiet scissor keys",
      "Long rated battery life",
      "Remap keys in a browser",
      "Full function row and arrows"
    ],
    "cons": [
      "Shallow, non-mechanical key feel",
      "Wider than 60% and 65% boards"
    ],
    "bestFor": "office and shared-room workers who want a slim, quiet 87-key board"
  },
  {
    "id": "best-small-keyboards-under-50-4",
    "rank": 4,
    "badge": "Best Tiny Wireless",
    "name": "RK ROYAL KLUDGE RK61",
    "price": "$40 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31jhy4kRL1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQHDN1PT?tag=deskfinds0d-20",
    "description": "The RK61 is a 61-key 60% board that connects through Bluetooth 5.0, a 2.4GHz dongle or a USB-C cable and remembers up to three devices. It uses a hot-swap board that accepts 3-pin and 5-pin switches, and the double-shot PBT keycaps and two layers of foam are there to give a lower, less hollow sound than a plain plastic shell.\n\nCompared with Keychron B33, which sits one place higher, the RK ROYAL KLUDGE RK61 is stronger on a true 61-key 60% footprint that still pairs over Bluetooth, 2.4GHz or USB-C but it gives up dedicated arrow keys and a function row.\n\nWith no arrow keys on the main layer, editing long documents takes a few days of adjustment. Otherwise the RK ROYAL KLUDGE RK61 suits people who want the smallest footprint and are happy to reach arrows through a shortcut layer.",
    "specs": [
      "61-key 60% layout",
      "Bluetooth 5.0, 2.4GHz, USB-C",
      "Hot-swap 3-pin and 5-pin switches"
    ],
    "pros": [
      "Smallest footprint in this guide",
      "Three connection modes",
      "Swap switches without soldering",
      "PBT keycaps resist shine"
    ],
    "cons": [
      "No dedicated arrow keys",
      "No function row without a layer key"
    ],
    "bestFor": "people who want the smallest footprint and are happy to reach arrows through a shortcut layer"
  },
  {
    "id": "best-small-keyboards-under-50-5",
    "rank": 5,
    "badge": "Best Wired 65% Value",
    "name": "FANTECH Maxfit67",
    "price": "$25 to $30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41h+BEIl0gL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PH679QQ?tag=deskfinds0d-20",
    "description": "The Maxfit67 is a wired 65% keyboard with hot-swap Gateron-style sockets, Kailh Box White switches, dye-sublimated PBT keycaps and pre-lubed stabilizers. A programmable aluminum knob sits in the corner, and two layers of dampening foam are included to take the edge off the clicky switches.\n\nThe FANTECH Maxfit67 sits between RK ROYAL KLUDGE RK61 and Ranked G65 Guardian. It stands out for a hot-swap 65% board with an aluminum macro knob and Kailh Box White switches, whereas Ranked G65 Guardian brings a full aluminum frame and low-profile hot-swap switches in a 68-key body.\n\nFANTECH Maxfit67 is aimed at wired-desk typists who want a clicky, customizable 65% board without paying for wireless. The software is not compatible with Mac, so remapping needs a Windows machine.",
    "specs": [
      "65% layout with aluminum knob",
      "Hot-swap, Kailh Box White switches",
      "PBT keycaps, pre-lubed stabilizers"
    ],
    "pros": [
      "Hot-swap sockets at a low cost",
      "Clicky switches with clear feedback",
      "PBT keycaps",
      "Programmable knob"
    ],
    "cons": [
      "Wired only",
      "Software is Windows only"
    ],
    "bestFor": "wired-desk typists who want a clicky, customizable 65% board without paying for wireless"
  },
  {
    "id": "best-small-keyboards-under-50-6",
    "rank": 6,
    "badge": "Best Slim Aluminum",
    "name": "Ranked G65 Guardian",
    "price": "$25 to $30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pkkheCo4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09YY673F4?tag=deskfinds0d-20",
    "description": "The Ranked G65 uses a matte aluminum case around a 68-key 65% layout and ships with Gateron low-profile red switches that sit in hot-swap sockets. Pre-lubed stabilizers cut down wire rattle, and five RGB patterns are controlled through the included software.\n\nWhere FANTECH Maxfit67 leads with a hot-swap 65% board with an aluminum macro knob and Kailh Box White switches, the Ranked G65 Guardian answers with a full aluminum frame and low-profile hot-swap switches in a 68-key body, and it gives up wireless and a volume knob.\n\nLow-profile switches limit your keycap and switch choices compared with standard MX sockets. Otherwise the Ranked G65 Guardian suits people who prefer short-travel keys and a sturdy metal case on a fixed desk.",
    "specs": [
      "68-key 65% aluminum frame",
      "Gateron low-profile hot-swap switches",
      "Pre-lubed stabilizers, RGB"
    ],
    "pros": [
      "Full aluminum case",
      "Low-profile, short-travel keys",
      "Hot-swap switches",
      "Pre-lubed stabilizers"
    ],
    "cons": [
      "Low-profile parts narrow switch choices",
      "Wired only"
    ],
    "bestFor": "people who prefer short-travel keys and a sturdy metal case on a fixed desk"
  },
  {
    "id": "best-small-keyboards-under-50-7",
    "rank": 7,
    "badge": "Lowest Cost 75%",
    "name": "SbocKeeb 75% Gasket",
    "price": "$20 to $25",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415HsyVoTKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D86XNS6C?tag=deskfinds0d-20",
    "description": "The SbocKeeb is a wired 82-key 75% board with a gasket mount, sound-absorbing pads, hot-swap sockets and PBT keycaps. It keeps the function row and arrow cluster in a body noticeably narrower than a full-size board, and full-key anti-ghosting means fast typing or gaming presses all register.\n\nThe SbocKeeb 75% Gasket closes the list. Next to Ranked G65 Guardian it gives up wireless and a premium finish, in return for an 82-key gasket-mounted 75% board with sound-absorbing pads at the lowest cost here.\n\nSbocKeeb 75% Gasket is aimed at budget buyers who want a quiet-ish 75% layout and a cable is fine. The listing is light on detail about the pads, so expect a good-for-the-price build, not a flagship one.",
    "specs": [
      "82-key 75% gasket mount",
      "Hot-swap sockets, PBT keycaps",
      "Full-key anti-ghosting, RGB"
    ],
    "pros": [
      "Gasket mount with sound pads",
      "Function row and arrows kept",
      "Hot-swap sockets",
      "PBT keycaps"
    ],
    "cons": [
      "Wired only",
      "Sparse listing detail"
    ],
    "bestFor": "budget buyers who want a quiet-ish 75% layout and a cable is fine"
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
    "description": "Features gained per price bucket were compared, with extra weight on what you lose when you spend less on a compact board. Every pick here lists below $50, and SbocKeeb 75% Gasket to LTC Nimbleback NB832 marks the spread."
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
          "Types for hours and wants a softer, quieter keystroke",
          "LTC Nimbleback NB832: an 82-key 75% layout with a gasket mount and five layers of padding"
        ],
        [
          "Wants arrows without growing past 65%",
          "womier L65: a 66-key layout that keeps separate arrow keys and adds a volume knob"
        ],
        [
          "Shares a room and wants near-silent keys",
          "Keychron B33: an ultra-slim scissor-switch TKL with a battery rated at 320 hours"
        ],
        [
          "Wants the smallest wireless board for a cramped desk",
          "RK ROYAL KLUDGE RK61: a true 61-key 60% footprint that still pairs over Bluetooth, 2.4GHz or USB-C"
        ],
        [
          "Fixed desk, wants a crisp clicky 65% on a budget",
          "FANTECH Maxfit67: a hot-swap 65% board with an aluminum macro knob and Kailh Box White switches"
        ],
        [
          "Wants a metal board that sits low and looks tidy",
          "Ranked G65 Guardian: a full aluminum frame and low-profile hot-swap switches in a 68-key body"
        ],
        [
          "Wants the 75% layout at the smallest outlay",
          "SbocKeeb 75% Gasket: an 82-key gasket-mounted 75% board with sound-absorbing pads at the lowest cost here"
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
          "Under $30",
          "FANTECH Maxfit67 (Best Wired 65% Value); Ranked G65 Guardian (Best Slim Aluminum); SbocKeeb 75% Gasket (Lowest Cost 75%)"
        ],
        [
          "Up to $40",
          "womier L65 (Best 60% With Arrows); Keychron B33 (Best Quiet Office TKL)"
        ],
        [
          "Up to $50",
          "LTC Nimbleback NB832 (Best Gasket Feel); RK ROYAL KLUDGE RK61 (Best Tiny Wireless)"
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
        "text": "A cable never needs charging, has the lowest latency and is the simplest connection, which suits a desk that does not move. In this guide: FANTECH Maxfit67, Ranked G65 Guardian, SbocKeeb 75% Gasket."
      },
      {
        "label": "Wireless",
        "text": "Wireless lets one board move between a laptop, tablet and desktop and keeps the desk free of cords, at the cost of a battery that RGB lighting drains faster. In this guide: LTC Nimbleback NB832, womier L65, Keychron B33, RK ROYAL KLUDGE RK61."
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
          "Wants a big battery in a small board",
          "womier L65 (Best 60% With Arrows): gives up the function row"
        ],
        [
          "Wants a real TKL with a function row and arrows",
          "Keychron B33 (Best Quiet Office TKL): gives up the tactile snap of a mechanical switch"
        ],
        [
          "Carries one board between a laptop and a tablet",
          "RK ROYAL KLUDGE RK61 (Best Tiny Wireless): gives up dedicated arrow keys and a function row"
        ],
        [
          "Wants to experiment with switches cheaply",
          "FANTECH Maxfit67 (Best Wired 65% Value): gives up wireless connectivity"
        ],
        [
          "Types fast on short-travel keys",
          "Ranked G65 Guardian (Best Slim Aluminum): gives up wireless and a volume knob"
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
        "text": "RK ROYAL KLUDGE RK61 is the closest match here: a true 61-key 60% footprint that still pairs over Bluetooth, 2.4GHz or USB-C."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want wireless pairing, a known support record or a Mac-first key set. Here, LTC Nimbleback NB832 is the example, with an 82-key 75% layout with a gasket mount and five layers of padding."
      },
      {
        "label": "Save if",
        "text": "You only need a tidy compact board and a cable is fine. Here, SbocKeeb 75% Gasket is the example, with an 82-key gasket-mounted 75% board with sound-absorbing pads at the lowest cost here."
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
    "criterion": "What the $50 ceiling buys",
    "explanation": "The cheapest pick here, SbocKeeb 75% Gasket, is built around an 82-key gasket-mounted 75% board with sound-absorbing pads at the lowest cost here, while the priciest, LTC Nimbleback NB832, is built around an 82-key 75% layout with a gasket mount and five layers of padding. Paying for the larger layout or the wireless board makes sense only if you edit documents or move between machines most days. Hold the two listings side by side and ask which difference you would notice after a month at the desk."
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
    "q": "What do I give up by staying under $50?",
    "a": "Going to the low end, SbocKeeb 75% Gasket keeps an 82-key gasket-mounted 75% board with sound-absorbing pads at the lowest cost here but gives up wireless and a premium finish. LTC Nimbleback NB832 adds an 82-key 75% layout with a gasket mount and five layers of padding, while giving up the tiniest possible width. If that compromise suits your desk, the cheaper board will do the job."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-small-keyboards-under-30","title":"Best Small Keyboards Under $30"},{"href":"/guide/best-small-keyboards-under-100","title":"Best Small Keyboards Under $100"},{"href":"/guide/best-compact-keyboard-under-50","title":"best-compact-keyboard-under-50"},{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards (2026): Compact Picks for Desk, Dorm Room and Travel"},{"href":"/guide/keyboard-size-chart","title":"keyboard-size-chart"}];
