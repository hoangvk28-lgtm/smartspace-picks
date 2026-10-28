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
    "title": "Size and layout",
    "description": "75% and TKL boards were compared on how much space each frees and which keys they keep."
  },
  {
    "title": "Switch character",
    "description": "Low-profile, tactile, quiet and linear switches were compared for feel and noise."
  },
  {
    "title": "Connectivity",
    "description": "Wired, Bluetooth, 2.4GHz and pass-through features were scored for desk flexibility."
  },
  {
    "title": "Build and sound",
    "description": "Case materials and dampening layers were compared as reported on the listings."
  },
  {
    "title": "Value",
    "description": "Features were weighed against price bucket, with a note where a spec is not documented."
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
    "subheading": "By Noise Level",
    "table": {
      "headers": [
        "Your environment",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Shared office, quiet needed",
          "Logitech MX Mechanical Mini: Tactile Quiet switches"
        ],
        [
          "Dorm at night",
          "Redragon K673 PRO: five-layer dampening"
        ],
        [
          "Laptop-like feel",
          "Keychron K3 Version 2: low-profile switches"
        ],
        [
          "Does not matter",
          "Redragon K552: linear red"
        ],
        [
          "Fewer cables",
          "RK ROYAL KLUDGE RK84: USB pass-through"
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
          "Redragon K673 PRO for wireless, RK87 for a dongle TKL, Redragon K552 for wired TKL"
        ],
        [
          "$50 to $75",
          "RK ROYAL KLUDGE RK84: hub and hot-swap"
        ],
        [
          "$75 to $100",
          "Logitech MX Mechanical Mini or Keychron K3 Version 2"
        ]
      ]
    }
  },
  {
    "subheading": "75% vs TKL",
    "intro": "Both sizes drop the number pad, but a TKL keeps separate navigation keys and is wider.",
    "cards": [
      {
        "label": "75%",
        "text": "Compresses arrows and navigation beside the main block for a narrower footprint. The Keychron K3 Version 2, Redragon K673 PRO and RK ROYAL KLUDGE RK84 use this layout."
      },
      {
        "label": "TKL",
        "text": "Gives separate arrow and navigation clusters with a gap, which is easier for touch typists. The RK87 and Redragon K552 are TKL and take a bit more width."
      }
    ],
    "note": "Choose 75% if desk width is tight, TKL if you want an easier-to-learn layout."
  },
  {
    "subheading": "By Customization Interest",
    "table": {
      "headers": [
        "Interest",
        "Pick from this guide"
      ],
      "rows": [
        [
          "Remap with firmware",
          "Keychron K3 Version 2: QMK"
        ],
        [
          "Swap switches",
          "Redragon K673 PRO or RK ROYAL KLUDGE RK84"
        ],
        [
          "Do not care",
          "Redragon K552 or Logitech MX Mechanical Mini"
        ],
        [
          "Software macros",
          "Redragon K552: software driver"
        ]
      ]
    }
  },
  {
    "subheading": "For Dorm Rooms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Low noise, wireless connectivity so you can type from a bed, and a hot-swap option so you can change switches."
      },
      {
        "label": "In this comparison",
        "text": "The Redragon K673 PRO combines five-layer dampening, three connection modes and hot-swap sockets at a low cost."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You work in a quiet office or want multi-computer control: the Logitech MX Mechanical Mini has quiet switches and Flow."
      },
      {
        "label": "Save if",
        "text": "You are new to mechanical keyboards: the Redragon K552 and K673 PRO give you the real thing for less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Size: 75% versus TKL",
    "explanation": "A 75% board has 80 to 85 keys with arrows beside the main block, while a TKL has 87 keys with separate navigation. The 75% is narrower, while TKL is easier for muscle memory. Compare the stated dimensions with your free desk width."
  },
  {
    "criterion": "Switch profile and noise",
    "explanation": "Low-profile switches have a shallow stroke like a laptop, and standard switches have more travel. Linear is smooth, tactile has a bump, and clicky is loud. Look for 'tactile quiet' or a decibel rating if noise matters."
  },
  {
    "criterion": "Hot-swap sockets",
    "explanation": "A hot-swap board lets you replace switches without soldering. This matters because switch feel is personal. Look for 'hot-swappable' and '3-pin and 5-pin' in the listing; if it is absent, assume soldered."
  },
  {
    "criterion": "Wireless approach",
    "explanation": "Bluetooth works with phones and tablets, a dongle gives lower latency, and a wired connection never needs charging. One TKL pick here uses only a dongle. Check which modes are listed before buying."
  },
  {
    "criterion": "Case, dampening and weight",
    "explanation": "A gasket mount with foam layers gives a softer sound, while a metal frame adds rigidity. If you carry the board, a light plastic case is easier. Look for the number of dampening layers or the case material."
  }
];

export const faq = [
  {
    "q": "What is the best size for a small mechanical keyboard?",
    "a": "A 75% board is a common sweet spot because it keeps the function row and arrows in a narrower body. A TKL is wider but easier to learn, and a 65% or 60% is smaller but removes more keys."
  },
  {
    "q": "Are small mechanical keyboards loud?",
    "a": "It depends on the switch. Linear and tactile switches are quieter than clicky ones, and foam dampening lowers noise further. A Tactile Quiet switch, like the Logitech MX Mechanical Mini, is designed for offices."
  },
  {
    "q": "Is low-profile worth it?",
    "a": "Low-profile keys have a shallow travel and sit flat, which is nicer for wrist comfort on a flat desk. They are limited in switch choices compared with standard hot-swap boards."
  },
  {
    "q": "Can I use a mechanical keyboard on a Mac?",
    "a": "Yes, most work with macOS. The Keychron K3 Version 2 ships with Mac keycaps, and others may require remapping the Command and Option keys."
  },
  {
    "q": "How do I choose between wireless and wired?",
    "a": "Choose wired for a fixed desk, wireless to move the board between devices. The RK84 shows a wired board can still reduce desk clutter with pass-through ports."
  },
  {
    "q": "Do I need to lube or modify these boards?",
    "a": "No. Boards with gasket mounts and foam are ready to use, and the hot-swap ones let you try other switches later if you want."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-small-keyboards","title":"Best Small Keyboards"},{"href":"/guide/best-wireless-mechanical-keyboards","title":"Best Wireless Mechanical Keyboards"},{"href":"/guide/keyboard-size-chart","title":"Keyboard Size Chart"},{"href":"/guide/best-75-percent-keyboards","title":"Best 75% Keyboards"},{"href":"/guide/tkl-vs-full-size-keyboard","title":"TKL vs Full-Size Keyboard"}];
