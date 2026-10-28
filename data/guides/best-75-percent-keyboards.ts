export const guideSlug = "best-75-percent-keyboards";
export const guideTitle = "6 Best 75% Keyboards for Small Desks in 2026";
export const metaTitle = "Best 75% Keyboards for Small Desks (2026)";
export const metaDescription = "Six 75% keyboards compared for small desks, with 80 to 85 keys, arrows and a function row kept. Wired and wireless picks for typing, coding and gaming.";
export const mainKeyword = "75% keyboards";
export const introParagraphs = [
  "A 75% keyboard is the layout most people land on after outgrowing a 60% board: it drops the number pad and squeezes the arrow keys and Delete cluster beside the main block, but it keeps the F1 to F12 row. That is why it suits spreadsheets, code editors and shortcut-heavy work on a desk that cannot spare a full 18 inches of width.",
  "We evaluated six boards that genuinely use the 75% footprint (roughly 81 to 85 keys) and sorted them by connection options, typing feel, and how much each one asks you to give up at its price. Everything here is judged on listing specs and buyer feedback, since actual key count and switch type vary by model and are easy to misread from a product title."
];
export const lastUpdated = "2026-10-28";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-75-percent-keyboards-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AULA F75 Pro",
    "price": "$50 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14N2QZF?tag=deskfinds0d-20",
    "description": "The AULA F75 Pro is an 81-key 75% board with a volume knob, a hot-swappable switch socket and three ways to connect: Bluetooth 5.0 (up to five devices), a 2.4GHz dongle and USB-C. It sits on a gasket-style structure with a silicone pad and slotted PCB, which is the reason it sounds softer than a plain bolted-down plastic board.\n\nAgainst the Kisnt KN85 below it, the F75 Pro trades a couple of extra keys for more device slots and the better-known software ecosystem. Against the wired RK ROYAL KLUDGE R75 it adds wireless, which matters more on a small desk where one fewer cable changes how tidy things look.\n\nIt is the pick for most people who want one board to cover laptop, desktop and tablet. The caveat is that RGB and heavy lighting effects drain the battery quickly, so expect to keep the cable nearby if you leave the glow on.",
    "specs": [
      "81-key 75% layout with knob",
      "Bluetooth 5.0, 2.4GHz and USB-C",
      "Hot-swap 3-pin and 5-pin sockets"
    ],
    "pros": [
      "Pairs with up to five devices",
      "Hot-swap sockets, no soldering",
      "Padded gasket-style typing feel",
      "Volume knob on the top row"
    ],
    "cons": [
      "RGB use cuts battery life",
      "Battery needs a charge every few days with RGB on"
    ],
    "bestFor": "buyers who want one wireless board for several devices"
  },
  {
    "id": "best-75-percent-keyboards-2",
    "rank": 2,
    "badge": "Best Typing Feel",
    "name": "Kisnt KN85",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZdZ-xPxiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBZGH5XM?tag=deskfinds0d-20",
    "description": "The Kisnt KN85 is an 85-key board that measures about 13.7 inches wide and 5.5 inches deep, so it frees up roughly a quarter of the desk compared with a full-size layout. It connects over USB-C, 2.4GHz or Bluetooth 5.0 with three channels, and the listing quotes latency of 2ms on USB, 5ms on 2.4GHz and 11ms on Bluetooth.\n\nIts gasket mount and pre-lubed linear switches (45 to 50gf actuation) aim at a soft, low-pitched sound. Compared with the F75 Pro it costs less and has fewer Bluetooth slots, which is the real trade: you pay less and manage fewer devices.\n\nChoose it if you type most of the day and care about sound more than about pairing five gadgets. The honest caveat is that a brand with a short track record means you should check the warranty terms on the listing before buying.",
    "specs": [
      "85 keys, 13.68 x 5.51 inch footprint",
      "Gasket mount, pre-lubed linear switches",
      "Tri-mode: USB-C, 2.4GHz, Bluetooth"
    ],
    "pros": [
      "Low latency over 2.4GHz and USB",
      "Hot-swap switch sockets",
      "Soft, muted keystroke sound",
      "Compact 13.7 inch width"
    ],
    "cons": [
      "Only three Bluetooth channels",
      "Newer brand, thinner support record"
    ],
    "bestFor": "heavy typists who want a quiet, cushioned board without paying for extra device slots"
  },
  {
    "id": "best-75-percent-keyboards-3",
    "rank": 3,
    "badge": "Best for Mac and Windows",
    "name": "Keychron K2",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mHkpUzF5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7FT4Y4P?tag=deskfinds0d-20",
    "description": "The Keychron K2 is an 84-key wireless board that ships with a Mac layout and includes extra keycaps for both Windows and macOS, so the modifier keys match whichever system you use. Bluetooth 5.1 links up to three devices, and a 4000mAh battery is rated up to 72 hours of typing with the listing's own conditions.\n\nIt costs more than the AULA and Kisnt, and the extra money mostly buys a longer track record, a Mac-first key set and a hot-swappable board that works with common 3-pin and 5-pin switches. It does not add a 2.4GHz dongle, which the two cheaper boards have.\n\nIt is the right buy if you switch between a MacBook and a Windows desktop, or you simply prefer a brand with established support. If your priority is raw value, the AULA is the better spend.",
    "specs": [
      "84 keys, Mac and Windows keycaps",
      "Bluetooth 5.1, 3 devices, USB-C wired",
      "4000mAh battery, hot-swap PCB"
    ],
    "pros": [
      "Mac layout with Windows keycaps included",
      "Large battery for its size",
      "Hot-swap with Super Brown switches",
      "Established brand"
    ],
    "cons": [
      "No 2.4GHz dongle option",
      "Costs the most of this group"
    ],
    "bestFor": "people who split their day between a Mac and a Windows PC"
  },
  {
    "id": "best-75-percent-keyboards-4",
    "rank": 4,
    "badge": "Best Wired Hot-Swap",
    "name": "RK ROYAL KLUDGE R75",
    "price": "$50 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SjHi-XNiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJ2PW7CP?tag=deskfinds0d-20",
    "description": "The RK ROYAL KLUDGE R75 is a wired 75% board with a volume roller, a detachable USB-C cable and a hot-swappable socket that accepts 3-pin or 5-pin switches. It uses three layers of absorbing material (poron cotton, an IXPE pad and case foam) around a gasket-style mount, and ships with brown switches that are tactile without being loud.\n\nBecause it has no wireless, it skips battery and pairing problems entirely, which is what some desk workers actually want. Next to the Kisnt KN85 it gives up wireless in exchange for a tactile switch out of the box instead of a linear one.\n\nPick it for a fixed desk where the cable is not a nuisance and you want a tactile bump while typing. If you ever plan to move it between rooms, one of the wireless boards above fits better.",
    "specs": [
      "75% layout with volume roller",
      "Detachable USB-C cable",
      "Hot-swap with tactile brown switches"
    ],
    "pros": [
      "No battery to charge",
      "Tactile switches, moderate noise",
      "Triple-layer sound dampening",
      "Detachable cable"
    ],
    "cons": [
      "Wired only",
      "No wireless option for tablets"
    ],
    "bestFor": "a fixed desk where you want a tactile typing feel and no pairing"
  },
  {
    "id": "best-75-percent-keyboards-5",
    "rank": 5,
    "badge": "Best Budget Wireless",
    "name": "Klymra DK75",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RWnlYURWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXTPK562?tag=deskfinds0d-20",
    "description": "The Klymra DK75 is a 75% wireless board with Bluetooth 5.0, a 2.4GHz dongle and a USB-C wired mode, plus a small screen that shows battery and connection status and a rotary knob. The important detail is in the listing: it uses silent membrane switches, not hot-swappable mechanical ones.\n\nThat makes it a different kind of pick from the other five. It costs far less and is quieter, but you cannot swap switches and the feel is cushioned rather than crisp. Mechanical enthusiasts will find it soft; shared-room users may find that exactly right.\n\nChoose it for a bedroom or shared office where noise is the main complaint and you want the 75% footprint cheaply. Skip it if you want to change switches later.",
    "specs": [
      "75% membrane layout, silent keys",
      "Bluetooth 5.0, 2.4GHz, USB-C",
      "Status screen and rotary knob"
    ],
    "pros": [
      "Very quiet keystrokes",
      "Three connection modes",
      "Battery shown on the screen",
      "Lowest cost of the group"
    ],
    "cons": [
      "Membrane, not hot-swappable",
      "Typing feel is soft and mushy"
    ],
    "bestFor": "shared rooms where keystroke noise matters more than switch feel"
  },
  {
    "id": "best-75-percent-keyboards-6",
    "rank": 6,
    "badge": "Best Wired Value",
    "name": "AJAZZ AK820",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41L2CSHB53L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQM9BCP8?tag=deskfinds0d-20",
    "description": "The AJAZZ AK820 packs 82 keys into a gasket-mounted, hot-swappable wired board with a CNC aluminum media knob and five layers of dampening foam (EVA, IXPE, a PET sound pad, filler cotton and silicone). It ships with pre-lubed linear red switches and a white backlight with 20 effects.\n\nIts listing calls it a TKL, but the 82-key count and arrow cluster show it is a 75% layout, which is a good reminder to count keys rather than trust the label. Compared with the RK R75 it costs less and uses linear switches instead of tactile ones.\n\nIt is the pick if you want the sound-dampened, hot-swappable experience on a tight budget and you are happy with a cable. The trade is simpler lighting and no wireless.",
    "specs": [
      "82 keys, gasket mount",
      "Hot-swap, pre-lubed linear switches",
      "Aluminum media knob, USB-C"
    ],
    "pros": [
      "Five-layer sound dampening",
      "Hot-swap at a low cost",
      "Metal volume knob",
      "Pre-lubed stabilizers"
    ],
    "cons": [
      "Wired only",
      "White-only backlight"
    ],
    "bestFor": "budget buyers who want hot-swap sockets and a quiet board"
  }
];

export const howWeEvaluated = [
  {
    "title": "Layout accuracy",
    "description": "We counted keys against the 75% definition (roughly 80 to 85) and checked that the function row and arrow keys survive, since some listings use the label loosely."
  },
  {
    "title": "Connectivity range",
    "description": "Each board was scored on wired, 2.4GHz and Bluetooth options, number of pairing slots, and stated latency where the listing gives it."
  },
  {
    "title": "Switch and sound design",
    "description": "We compared switch type, hot-swap support, and the dampening layers claimed, since these set the keystroke sound and feel."
  },
  {
    "title": "Desk footprint",
    "description": "Stated dimensions and the presence of a knob or screen were weighed against how much desk each board needs."
  },
  {
    "title": "Value for the price tier",
    "description": "Features gained per price bucket were compared, with extra weight on what you lose when you spend less."
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
    "intro": "A 75% layout covers most uses, so the deciding factor is what you do with the keys.",
    "table": {
      "headers": [
        "Your situation",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Many devices on one desk",
          "AULA F75 Pro: five Bluetooth slots plus a dongle"
        ],
        [
          "Long typing sessions, quiet preferred",
          "Kisnt KN85: gasket mount with pre-lubed linear switches"
        ],
        [
          "Mac and Windows both",
          "Keychron K2: Mac layout with Windows keycaps included"
        ],
        [
          "Fixed desk, tactile switches",
          "RK ROYAL KLUDGE R75: brown tactile switches, detachable cable"
        ],
        [
          "Shared room, near silence",
          "Klymra DK75: silent membrane keys"
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
          "Under $50, wireless",
          "Kisnt KN85 for mechanical, Klymra DK75 for silent"
        ],
        [
          "Under $50, wired",
          "AJAZZ AK820: hot-swap and five-layer foam"
        ],
        [
          "$50 to $75",
          "AULA F75 Pro for wireless, RK ROYAL KLUDGE R75 for wired"
        ],
        [
          "$75 to $100",
          "Keychron K2: spend here for the Mac-first key set and support"
        ]
      ]
    }
  },
  {
    "subheading": "Wireless vs Wired",
    "intro": "Wireless is convenient, but it adds a battery and a pairing step that a fixed desk may never use.",
    "cards": [
      {
        "label": "Wireless",
        "text": "Lets you move between laptop, tablet and desktop and keeps the desk free of cables. In this guide the AULA F75 Pro, Kisnt KN85, Keychron K2 and Klymra DK75 are wireless; the AULA, Kisnt and Klymra also offer a 2.4GHz dongle for lower latency than Bluetooth."
      },
      {
        "label": "Wired",
        "text": "Never needs charging and has the simplest connection. The RK ROYAL KLUDGE R75 and AJAZZ AK820 are wired only, and both use a detachable or standard USB-C cable so replacing it is easy."
      }
    ],
    "note": "Most buyers should default to wireless with a dongle unless the board never leaves one desk."
  },
  {
    "subheading": "By Typing Sound Preference",
    "table": {
      "headers": [
        "Preference",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Soft, low thock",
          "Kisnt KN85 or AJAZZ AK820"
        ],
        [
          "Quiet tactile bump",
          "RK ROYAL KLUDGE R75"
        ],
        [
          "As quiet as possible",
          "Klymra DK75"
        ],
        [
          "Standard crisp mechanical",
          "Keychron K2"
        ]
      ]
    }
  },
  {
    "subheading": "For Small Dorm Desks Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A footprint near 13.7 inches wide, a battery that survives a week of use, and a wireless option so you can type from a bed or a lap tray."
      },
      {
        "label": "In this comparison",
        "text": "The Kisnt KN85 lists a 13.68 by 5.51 inch body and a 2.4GHz dongle, which makes it the easiest to place on a narrow dorm shelf."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You use a Mac regularly or want a longer support record: the Keychron K2 includes both Mac and Windows keycaps and a 4000mAh battery."
      },
      {
        "label": "Save if",
        "text": "You only need a tidy compact board: the AJAZZ AK820 and Klymra DK75 give you the 75% footprint at the lowest cost here."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Actual key count and labels",
    "explanation": "A 75% keyboard usually has 80 to 85 keys, but the label is applied loosely, and one board here is listed as a TKL despite having 82 keys. This matters because a true 87-key TKL is wider and a 68-key board loses the function row. Count the keys in the title or specification list and look at the product photo to confirm the F1 to F12 row sits above the numbers."
  },
  {
    "criterion": "Switch type and hot-swap sockets",
    "explanation": "Mechanical boards use linear, tactile or clicky switches, while membrane boards use a rubber dome that feels softer. Hot-swap sockets let you replace switches without soldering, so a switch you dislike is a two-minute fix instead of a lost purchase. Look for the words 'hot-swappable' and 'supports 3-pin and 5-pin switches' on the listing, not only a vague 'customizable' claim."
  },
  {
    "criterion": "Connection modes and latency",
    "explanation": "Bluetooth is convenient but adds noticeable delay, while a 2.4GHz dongle or USB cable is much faster. For typing the difference is small, but for gaming it can matter. Check whether the listing names all three modes and, if it gives numbers, compare them: one board here quotes 2ms on USB, 5ms on 2.4GHz and 11ms on Bluetooth."
  },
  {
    "criterion": "Footprint and where the keys sit",
    "explanation": "On a 75% board the arrows and Delete cluster are pushed right against the main block, which saves width but makes the right Shift and arrow keys easy to hit by mistake at first. Measure your usable desk depth and compare against the stated dimensions. Expect about two weeks of adjustment if you are coming from a keyboard with a gap before the arrows."
  },
  {
    "criterion": "Battery behavior with lighting on",
    "explanation": "Quoted battery life is nearly always measured with the backlight off or low, and RGB lighting can cut it by more than half. A larger cell, such as the 4000mAh unit in one pick here, tolerates more lighting but still needs charging. Read whether the listing separates 'with backlight' from 'without' and keep a USB-C cable in the drawer."
  },
  {
    "criterion": "Mac and Windows key mapping",
    "explanation": "Windows keyboards print Ctrl, Win and Alt, while Mac keyboards print Control, Option and Command, and the order differs. Boards with both keycap sets or a Mac toggle save you from remapping. Look for 'Mac layout' or 'includes extra keycaps for Windows and Mac' and confirm the switch toggle in the manual if you use both."
  }
];

export const faq = [
  {
    "q": "What is the difference between a 75% and a 65% keyboard?",
    "a": "A 75% board keeps the F1 to F12 function row and adds a short column of navigation keys, so it typically has 80 to 85 keys. A 65% board drops the function row and has around 66 to 68 keys, so it is a little narrower and shorter."
  },
  {
    "q": "Will a 75% keyboard fit on a small desk?",
    "a": "Yes. The Kisnt KN85 in this guide is about 13.7 inches wide and 5.5 inches deep, which is much narrower than a full-size board of roughly 17 to 18 inches. You still need a bit of room for a mouse, so measure the free width to the right of the keyboard."
  },
  {
    "q": "Is a hot-swappable keyboard worth paying for?",
    "a": "It is worth it if you are unsure which switch feel you like. Hot-swap sockets let you pull a switch out and replace it without a soldering iron, so a wrong choice costs a few dollars of switches rather than a new keyboard. If you will never change switches, a non-hot-swap board is perfectly fine."
  },
  {
    "q": "How do I connect a 2.4GHz keyboard?",
    "a": "Plug the small USB dongle into your computer, set the board's mode switch or Fn shortcut to 2.4G, and it should pair on its own. The dongle usually stores in the keyboard or a slot in its case, so keep it there when you travel."
  },
  {
    "q": "Why does my new keyboard feel wrong on the right side?",
    "a": "On a 75% layout the arrow keys sit directly under the right Shift key, so they are closer than on a full-size board. Most people adapt within a couple of weeks. If it keeps bothering you, a 65% board with a different arrow spacing or a TKL may feel better."
  },
  {
    "q": "How should I clean a 75% mechanical keyboard?",
    "a": "Unplug it or switch it off, turn it upside down and shake out loose crumbs, then brush between keycaps with a soft brush. On a hot-swap board you can pull the keycaps with the included puller to wipe the plate, but keep liquids away from the PCB."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/keycap-size-chart", title: "Keycap Size Chart: 1u and Spacebar Sizes" },{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards"},{"href":"/guide/keyboard-size-chart","title":"Keyboard Size Chart"},{"href":"/guide/60-vs-65-vs-75-keyboard","title":"60% vs 65% vs 75% Keyboard"},{"href":"/guide/best-65-percent-keyboards","title":"Best 65% Keyboards"}];
