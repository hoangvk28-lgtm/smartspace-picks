export const guideSlug = "best-small-mechanical-keyboards";
export const guideTitle = "6 Best Small Mechanical Keyboards for Desks and Dorms in 2026";
export const metaTitle = "Best Small Mechanical Keyboards (2026)";
export const metaDescription = "Six small mechanical keyboards in 75% and TKL sizes compared for dorm and compact desks, from low-profile quiet boards to hot-swap and budget picks.";
export const mainKeyword = "small mechanical keyboards";
export const introParagraphs = [
  "A small mechanical keyboard has to answer a harder question than a plain compact board: how much do you give up for a tidy footprint? Dropping the number pad is easy. Dropping the function row, the arrows or the sound are the real decisions, and different buyers want different answers.",
  "This guide stays with 75% and tenkeyless (TKL) boards, the two sizes that keep most keys, and leaves the tiny 60% and 65% layouts to their own guides. We sorted six mechanical picks by switch character, connectivity and how well each listing documents what you are buying."
];
export const lastUpdated = "2026-10-28";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41AM7gHt6aL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-small-mechanical-keyboards-1",
    "rank": 1,
    "badge": "Best for Quiet Offices",
    "name": "Logitech MX Mechanical Mini",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AM7gHt6aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B983RL2W?tag=deskfinds0d-20",
    "description": "The MX Mechanical Mini is a compact wireless keyboard with low-profile mechanical switches, offered with Tactile Quiet switches that give a bump you can feel with less noise. Keys light up as your hands approach and adjust to room light, and Logi Options+ lets you set Fn keys and use Flow to control multiple computers.\n\nCompared with the Keychron K3, it is quieter and polished but has a less customizable switch scheme. Against the gaming-oriented boards, it is designed for office typing.\n\nPick it for a shared office or a quiet home desk where you want mechanical feel at low volume. The price is high for what is a compact, mostly stock board.",
    "specs": [
      "Low-profile mechanical, Tactile Quiet switches",
      "Smart illumination backlight",
      "Multi-device with Logi Options+ and Flow"
    ],
    "pros": [
      "Quieter than most mechanical boards",
      "Backlight adapts to hand and room light",
      "Multi-computer control with Flow",
      "Slim low-profile keys"
    ],
    "cons": [
      "Costs more than comparable boards",
      "Not hot-swappable"
    ],
    "bestFor": "quiet offices where mechanical feel matters"
  },
  {
    "id": "best-small-mechanical-keyboards-2",
    "rank": 2,
    "badge": "Best Low-Profile 75%",
    "name": "Keychron K3 Version 2",
    "price": "$75 to $100",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41k46NzwzHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08LSJ4RHH?tag=deskfinds0d-20",
    "description": "The Keychron K3 Version 2 is an ultra-slim 75% wireless board with low-profile switches, Bluetooth 5.1 for three devices and open-source QMK firmware that you configure through the Keychron Launcher web app. It ships with a Mac layout and extra Windows keycaps.\n\nCompared with the Logitech MX Mechanical Mini it is less polished on the software side but far more customizable, and it keeps the F-row and arrows in a 75% shape. It is the better choice if you want to remap keys.\n\nChoose it if you like the shallow, laptop-like travel of low-profile mechanical keys and want a Mac-friendly board. If you want taller switches, look at the Redragon K673 PRO.",
    "specs": [
      "75% layout, low-profile switches",
      "Bluetooth 5.1, 3 devices",
      "QMK firmware via web app"
    ],
    "pros": [
      "Slim body that rests flat",
      "QMK remapping",
      "Mac layout plus Windows keycaps",
      "Three-device Bluetooth"
    ],
    "cons": [
      "No 2.4GHz dongle",
      "Shallow travel not for everyone"
    ],
    "bestFor": "laptop-style typing on a mechanical board"
  },
  {
    "id": "best-small-mechanical-keyboards-3",
    "rank": 3,
    "badge": "Best Value Wireless",
    "name": "Redragon K673 PRO",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bWjX9agqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CDX5XGLK?tag=deskfinds0d-20",
    "description": "The Redragon K673 PRO is an 81-key wireless board with tri-mode connectivity (USB-C, Bluetooth and 2.4GHz), a gasket-mounted body with five layers of noise dampening, and an upgraded socket that accepts hot-swappable switches. A single knob controls backlight brightness and media.\n\nIt is the cheapest wireless, gasket-mounted option here, and it is set apart from the Keychron K3 by taller switches and a plusher sound. Compared with the RK84 it adds wireless and gives up the USB pass-through ports.\n\nIt fits a first wireless mechanical board for a dorm. The caveat is a gaming-style look, with lighting that is more eye-catching than office-friendly.",
    "specs": [
      "81 keys, gasket mount",
      "USB-C, Bluetooth and 2.4GHz",
      "Hot-swap sockets, scroll knob"
    ],
    "pros": [
      "Five-layer noise dampening",
      "Three connection modes",
      "Hot-swap switches",
      "One knob for volume and light"
    ],
    "cons": [
      "Gaming-style lighting",
      "Newer model with less history"
    ],
    "bestFor": "a first wireless mechanical board at a low cost"
  },
  {
    "id": "best-small-mechanical-keyboards-4",
    "rank": 4,
    "badge": "Best with USB Pass-Through",
    "name": "RK ROYAL KLUDGE RK84",
    "price": "$50 to $75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41M7FUG5G1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C3GDTYNJ?tag=deskfinds0d-20",
    "description": "The RK84 is a wired 84-key 75% board with a hot-swappable PCB for 3-pin or 5-pin switches, and a hub design that includes two USB pass-through ports and a Type-C port. Software allows key assignment and backlight settings.\n\nThe hub is the thing that makes it unusual: on a small desk, one cable to the PC can power a mouse or a flash drive. It lacks wireless, which sets it against the Redragon K673 PRO.\n\nIt suits a desk where you want fewer cables and a tidy layout. If you want to move the keyboard around, choose a wireless board.",
    "specs": [
      "84 keys, 75% layout",
      "Hot-swap PCB",
      "2 USB pass-through ports plus Type-C"
    ],
    "pros": [
      "Built-in USB pass-through",
      "Hot-swap sockets",
      "F-row and arrows kept",
      "Software remapping"
    ],
    "cons": [
      "Wired only",
      "Basic backlight"
    ],
    "bestFor": "a fixed desk where you want fewer cables"
  },
  {
    "id": "best-small-mechanical-keyboards-5",
    "rank": 5,
    "badge": "Best Wireless TKL",
    "name": "RK ROYAL KLUDGE RK87",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41syziHZiyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08GX7WLCF?tag=deskfinds0d-20",
    "description": "The RK87 Sink87G is an 87-key TKL board that works wired or with a 2.4GHz nano USB receiver, selected with a switch on the bottom. It uses RGB lighting with 20 effects and adjustable speed and has a compact tenkeyless layout that drops only the number pad.\n\nTKL is a size step up from 75%, so it takes a little more space, but keeps all the navigation keys on a separate cluster. It does not list Bluetooth, which sets it against the Redragon K673 PRO.\n\nChoose it if you want a familiar layout with a dongle and do not need to pair with phones. If you need Bluetooth, pick another board.",
    "specs": [
      "87-key tenkeyless layout",
      "2.4GHz receiver or wired",
      "RGB, 20 effects"
    ],
    "pros": [
      "Standard TKL layout with separate nav keys",
      "Wireless with a dongle",
      "Low cost",
      "Wired fallback"
    ],
    "cons": [
      "No Bluetooth",
      "Slightly wider than 75% boards"
    ],
    "bestFor": "people who want a familiar TKL layout with a dongle"
  },
  {
    "id": "best-small-mechanical-keyboards-6",
    "rank": 6,
    "badge": "Best Budget TKL",
    "name": "Redragon K552",
    "price": "$25 to $50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LSGymHc7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B016MAK38U?tag=deskfinds0d-20",
    "description": "The Redragon K552 is a wired 87-key TKL board with red linear switches, a metal frame and six rainbow lighting modes, with a software driver for key remapping. Its compact layout keeps the arrow cluster and navigation keys while leaving out the number pad.\n\nIt is the long-standing budget standard for a first mechanical keyboard. Compared with the RK87 it has no wireless but a metal frame, and compared with the 75% picks it is wider.\n\nIt is a good pick for a first mechanical board at a low cost. Do not expect hot-swap sockets or a gasket feel.",
    "specs": [
      "87-key TKL layout",
      "Red linear switches, metal frame",
      "Software driver for remapping"
    ],
    "pros": [
      "Metal frame",
      "Low price for a mechanical board",
      "Software remapping",
      "Familiar TKL layout"
    ],
    "cons": [
      "Wired only",
      "Hot-swap not listed"
    ],
    "bestFor": "a first mechanical board on a tight budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Layout size and what you lose",
    "description": "A 75% board such as Keychron K3 or RK84 keeps arrows and an F-row in about 80 to 85 keys, while TKL boards like RK87 and Redragon K552 have 87 keys with a separate navigation block. We checked which keys each size drops, since a missing F-row matters for shortcuts."
  },
  {
    "title": "Switch profile and noise",
    "description": "Low-profile switches are shorter and typically quieter. Logitech MX Mechanical Mini lists Tactile Quiet switches, Keychron K3 uses low-profile switches, and Redragon K552 uses red linear switches, so we compared how each profile suits an office or a shared room. Roommates and shared offices make this the spec buyers notice first."
  },
  {
    "title": "Hot-swap sockets",
    "description": "Redragon K673 PRO and RK84 list hot-swap, which lets you change switches without soldering, while Redragon K552 does not list it. Hot-swap matters if you want to try a different feel later without replacing the board. Only two of the six listings state it, so the rest were treated as soldered."
  },
  {
    "title": "Wireless options",
    "description": "Redragon K673 PRO offers USB-C, Bluetooth and 2.4GHz, Keychron K3 Bluetooth 5.1 for three devices, and RK87 only 2.4GHz or wired, with RK84 and K552 wired only. We scored by whether the connection suits your desk and devices. A wireless board that needs a dongle takes a USB port."
  },
  {
    "title": "Case build and dampening",
    "description": "Redragon K673 PRO uses a gasket mount with five-layer dampening, and Redragon K552 uses a metal frame. We compared case weight and dampening as the reason a board sounds solid, and noted which listings state it. Listings with no mounting detail earned no credit for it."
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
    "subheading": "By Layout",
    "intro": "Each size trades a few keys for desk space.",
    "table": {
      "headers": [
        "Situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Smallest board that keeps arrows and F-row",
          "Keychron K3 Version 2, a 75% low-profile board."
        ],
        [
          "75% with USB pass-through ports",
          "RK ROYAL KLUDGE RK84, with 84 keys and 2 USB pass-through ports."
        ],
        [
          "81 keys, wireless, hot-swap",
          "Redragon K673 PRO, with a scroll knob and gasket mount."
        ],
        [
          "Standard TKL with a nav cluster",
          "RK ROYAL KLUDGE RK87, wireless dongle."
        ],
        [
          "Wired TKL on a tight budget",
          "Redragon K552, with a metal frame."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Price buys wireless, hot-swap and quiet switches.",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "$25 to $50, wireless",
          "Redragon K673 PRO."
        ],
        [
          "$25 to $50, dongle TKL",
          "RK ROYAL KLUDGE RK87."
        ],
        [
          "$25 to $50, wired TKL",
          "Redragon K552."
        ],
        [
          "$50 to $75, hub and hot-swap",
          "RK ROYAL KLUDGE RK84."
        ],
        [
          "$75 to $100, premium",
          "Logitech MX Mechanical Mini or Keychron K3 Version 2."
        ]
      ]
    }
  },
  {
    "subheading": "Low-Profile vs Standard Height Switches",
    "intro": "Typing feel and noise differ more than the spec sheet suggests.",
    "cards": [
      {
        "label": "Low-profile",
        "text": "Shorter travel and a flat body that suits a laptop-height desk. Logitech MX Mechanical Mini and Keychron K3 use them, but the shallow feel is not for everyone."
      },
      {
        "label": "Standard height",
        "text": "Deeper travel and more switch choices. Redragon K552 and the hot-swap boards use standard switches, and the case is usually taller."
      }
    ],
    "note": "Pick low-profile Keychron K3 for a flat desk and standard-height Redragon for deeper key travel."
  },
  {
    "subheading": "By Connection",
    "intro": "Wireless adds convenience, but not all boards have it.",
    "table": {
      "headers": [
        "Need",
        "Recommended pick"
      ],
      "rows": [
        [
          "Three connection modes",
          "Redragon K673 PRO, with USB-C, Bluetooth and 2.4GHz."
        ],
        [
          "Bluetooth for three devices",
          "Keychron K3 Version 2."
        ],
        [
          "Dongle only",
          "RK ROYAL KLUDGE RK87."
        ],
        [
          "Wired only, no pairing",
          "Redragon K552 or RK84."
        ]
      ]
    }
  },
  {
    "subheading": "For Mac and Windows Users Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A Mac layout or both keycap sets, and software to remap keys."
      },
      {
        "label": "In this comparison",
        "text": "Keychron K3 Version 2 ships Mac layout plus Windows keycaps, and Logitech MX Mechanical Mini supports multiple devices."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want quiet switches or multi-device control. Logitech MX Mechanical Mini and Keychron K3 sit in the $75 to $100 band."
      },
      {
        "label": "Save if",
        "text": "You only need a compact mechanical board. Redragon K552 and RK87 remain in the $25 to $50 band."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Size: 75% versus TKL",
    "explanation": "A 75% board has 80 to 85 keys with arrows beside the main block, while a TKL has 87 keys with separate navigation. The 75% is narrower, while TKL is easier for muscle memory. Compare the stated dimensions with your free desk width. If you use the numpad rarely, 75% drops the numpad block entirely, which frees room for a mouse beside the board on a narrow desk."
  },
  {
    "criterion": "Switch profile and noise",
    "explanation": "Low-profile switches have a shallow stroke like a laptop, and standard switches have more travel. Linear is smooth, tactile has a bump, and clicky is loud. Look for 'tactile quiet' or a decibel rating if noise matters. Linear switches such as red are smooth but silent only in feel, so read buyer comments on noise if a roommate sleeps nearby."
  },
  {
    "criterion": "Hot-swap sockets",
    "explanation": "A hot-swap board lets you replace switches without soldering. This matters because switch feel is personal. Look for 'hot-swappable' and '3-pin and 5-pin' in the listing; if it is absent, assume soldered. Check that the listing says hot-swap and names the socket type, since a board with soldered switches cannot be changed later."
  },
  {
    "criterion": "Wireless approach",
    "explanation": "Bluetooth works with phones and tablets, a dongle gives lower latency, and a wired connection never needs charging. One TKL pick here uses only a dongle. Check which modes are listed before buying. A 2.4GHz dongle has lower latency than Bluetooth, and a board with both, like Redragon K673 PRO, covers a PC and a phone."
  },
  {
    "criterion": "Case, dampening and weight",
    "explanation": "A gasket mount with foam layers gives a softer sound, while a metal frame adds rigidity. If you carry the board, a light plastic case is easier. Look for the number of dampening layers or the case material. A heavier case with foam dampening is quieter and sits still, while a thin plastic case can ring on each keystroke."
  }
];

export const faq = [
  {
    "q": "Is a 75% keyboard better than a TKL for a small desk?",
    "a": "Usually yes. Keychron K3 and RK84 at 75% shrink the footprint while keeping arrows and an F-row, while RK87 and Redragon K552 at 87 keys are slightly wider with a separate navigation cluster. If you want the smallest board, pick 75%."
  },
  {
    "q": "What does hot-swap mean and do I need it?",
    "a": "Hot-swap sockets let you pull a switch and push in another without a soldering iron. Redragon K673 PRO and RK84 list it. You need it only if you may change switches later, and Redragon K552 does not list it."
  },
  {
    "q": "Is Logitech MX Mechanical Mini worth the premium over Keychron K3?",
    "a": "If noise and multi-device control matter. Logitech uses Tactile Quiet switches and smart illumination, while Keychron K3 is a 75% board with QMK remapping and three-device Bluetooth. Keychron is more customizable, Logitech is quieter and costs more."
  },
  {
    "q": "Are low-profile switches comfortable for long typing?",
    "a": "Many people find them gentle, because travel is shorter. Keychron K3 lists shallow travel that is not for everyone, so if you like deep keys a standard-height board such as Redragon K552 may suit better. Try both if you can."
  },
  {
    "q": "How do I keep a wireless mechanical keyboard from dropping out?",
    "a": "Place the 2.4GHz dongle in a front USB port with a short extension, away from other wireless devices. Redragon K673 PRO and RK87 ship with a dongle, and Bluetooth boards like Keychron K3 can drop through walls or metal desks."
  },
  {
    "q": "Can I use a Windows mechanical keyboard on a Mac?",
    "a": "Yes, with caveats. Keychron K3 ships Mac layout and Windows keycaps, so it handles both, while a Windows-only board such as Redragon K552 needs remapping of Alt and Windows keys. Brightness and media keys may not work without software."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards"},{"href":"/guide/best-wireless-mechanical-keyboards","title":"Best Wireless Mechanical Keyboards"},{"href":"/guide/keyboard-size-chart","title":"Keyboard Size Chart"},{"href":"/guide/best-75-percent-keyboards","title":"Best 75% Keyboards"},{"href":"/guide/tkl-vs-full-size-keyboard","title":"TKL vs Full-Size Keyboard"}];
