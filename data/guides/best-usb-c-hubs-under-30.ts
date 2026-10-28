export const guideSlug = "best-usb-c-hubs-under-30";
export const guideTitle = "7 Best USB-C Hubs Under $30 in 2026";
export const metaTitle = "Best USB-C Hubs Under $30 (2026)";
export const metaDescription = "Seven USB-C hubs under $30 compared by HDMI refresh rate, port speeds and charging pass-through, from 5-in-1 travel hubs to a 9-in-1 desktop aluminum hub.";
export const mainKeyword = "usb c hubs under 30";
export const introParagraphs = [
  "For under $30 a USB-C hub can add HDMI, USB-A ports, an SD reader and laptop charging through one cable, but the gap between hubs is in the small print. The main questions are whether the HDMI runs at 60Hz, how much of the charger wattage reaches the laptop and whether the USB ports are fast or slow.",
  "We evaluated seven hubs from the listings and sorted them by video support, charging, port speeds and build. Check your laptop's USB-C video support first, because without it the HDMI port will not work."
];
export const lastUpdated = "2026-10-28";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ERQbW6o-L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-usb-c-hubs-under-30-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Anker 7-in-1 USB-C Hub",
    "price": "$20 to $30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ERQbW6o-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXJQT19B?tag=deskfinds0d-20",
    "description": "The Anker 7-in-1 hub has a 4K@60Hz HDMI port, two USB-A 3.0 ports and a USB-C data port at 5Gbps, with 85W max pass-through charging and an 18-month warranty.\n\nIt has 4K@60Hz, which the Anker 5-in-1 below it lacks, at a modest price step. The 10Gbps hubs like the Acer and UGREEN are faster for data.\n\nChoose it for a dependable hub. If you move big files, look at the 10Gbps picks.",
    "specs": [
      "4K@60Hz HDMI, 2 USB-A 3.0, USB-C data",
      "85W max pass-through charging",
      "18-month warranty"
    ],
    "pros": [
      "4K@60Hz HDMI",
      "85W pass-through",
      "18-month warranty",
      "Established brand"
    ],
    "cons": [
      "No Ethernet",
      "Plastic or metal shell not specified"
    ],
    "bestFor": "most laptop users wanting a reliable all-rounder"
  },
  {
    "id": "best-usb-c-hubs-under-30-2",
    "rank": 2,
    "badge": "Best 10Gbps Data",
    "name": "Acer 6-in-1 10Gbps Hub",
    "price": "$20 to $30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AXXy7lDML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFN1Q3YW?tag=deskfinds0d-20",
    "description": "The Acer 6-in-1 hub offers 4K@60Hz HDMI, two USB-C 3.2 ports and one USB-A at 10Gbps, one USB-A at 480Mbps, and 100W input with up to 90W charging for the laptop.\n\nIts 10Gbps ports make it faster than the Anker 7-in-1 for storage. It lacks a card reader.\n\nChoose it for SSD work.",
    "specs": [
      "4K@60Hz HDMI, 2 USB-C and 1 USB-A at 10Gbps",
      "100W input, up to 90W charging",
      "One USB-A at 480Mbps"
    ],
    "pros": [
      "Three 10Gbps ports",
      "4K@60Hz HDMI",
      "Up to 90W charging",
      "Two USB-C ports"
    ],
    "cons": [
      "One slow USB-A port",
      "Needs DP Alt Mode"
    ],
    "bestFor": "people moving files from fast SSDs"
  },
  {
    "id": "best-usb-c-hubs-under-30-3",
    "rank": 3,
    "badge": "Best Value 10Gbps",
    "name": "UGREEN Revodok Pro 6-in-1",
    "price": "$10 to $20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31yzD0Bok6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1XLNWP2?tag=deskfinds0d-20",
    "description": "The UGREEN Revodok Pro 6-in-1 has four 10Gbps ports, 4K@60Hz HDMI, up to 85W pass-through charging and an aluminum alloy body.\n\nIt is the cheapest high-speed hub here.\n\nChoose it for value.",
    "specs": [
      "Four 10Gbps ports, 4K@60Hz",
      "85W pass-through",
      "Aluminum alloy"
    ],
    "pros": [
      "Four 10Gbps ports",
      "4K@60Hz HDMI",
      "Aluminum body",
      "Very low price"
    ],
    "cons": [
      "No card reader",
      "85W pass-through"
    ],
    "bestFor": "people on a tight budget who want speed"
  },
  {
    "id": "best-usb-c-hubs-under-30-4",
    "rank": 4,
    "badge": "Best Desktop",
    "name": "intpw 9-in-1 Aluminum",
    "price": "$20 to $30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hEhvsFqKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C61LYRY5?tag=deskfinds0d-20",
    "description": "The intpw 9-in-1 hub is a 28 degree ergonomic aluminum hub with 4K@60Hz HDMI, PD 100W and three USB 3.0 ports.\n\nIt is a desktop hub.\n\nChoose it for a fixed desk.",
    "specs": [
      "28 degree angled aluminum",
      "4K@60Hz HDMI, PD 100W",
      "3 USB 3.0 ports"
    ],
    "pros": [
      "Angled aluminum body",
      "4K@60Hz",
      "100W PD",
      "Nine ports"
    ],
    "cons": [
      "Larger than a dongle",
      "5Gbps ports"
    ],
    "bestFor": "desk use"
  },
  {
    "id": "best-usb-c-hubs-under-30-5",
    "rank": 5,
    "badge": "Best Compact",
    "name": "Anker 5-in-1",
    "price": "$10 to $20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Qtwt9h6yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKT8BB4M?tag=deskfinds0d-20",
    "description": "The Anker 5-in-1 hub has 4K HDMI at 30Hz, a USB-A 3.0 port and two USB-A 2.0 ports with 90W pass-through.\n\nIt is smaller.\n\nChoose it for light use.",
    "specs": [
      "4K HDMI at 30Hz",
      "90W pass-through",
      "USB-A 3.0 and two USB-A 2.0"
    ],
    "pros": [
      "Compact 5-in-1",
      "90W pass-through",
      "Anker warranty",
      "Low price"
    ],
    "cons": [
      "4K at 30Hz only",
      "Two slow USB 2.0 ports"
    ],
    "bestFor": "travel"
  },
  {
    "id": "best-usb-c-hubs-under-30-6",
    "rank": 6,
    "badge": "Best Card Readers",
    "name": "BENFEI 7-in-1",
    "price": "$10 to $20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MQdGdnDqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08F7NWJY5?tag=deskfinds0d-20",
    "description": "The BENFEI 7-in-1 hub has 4K@60Hz HDMI, SD and microSD slots, three USB 3.0 ports and 100W PD with an 18-month warranty.\n\nIt is cheap.\n\nChoose it for SD cards.",
    "specs": [
      "4K@60Hz HDMI, SD and microSD",
      "3 USB 3.0, 100W PD",
      "18-month warranty"
    ],
    "pros": [
      "SD and microSD slots",
      "4K@60Hz",
      "100W PD",
      "Low price"
    ],
    "cons": [
      "5Gbps ports",
      "Small"
    ],
    "bestFor": "photographers"
  },
  {
    "id": "best-usb-c-hubs-under-30-7",
    "rank": 7,
    "badge": "Best Data-Only",
    "name": "Sabrent 5-in-1",
    "price": "$10 to $20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZU3cHdEcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07KLBX1NX?tag=deskfinds0d-20",
    "description": "The Sabrent 5-in-1 hub has three USB 3.0 ports at 5Gbps and a dual SD and TF card reader, with no video port.\n\nIt is data-only.\n\nChoose it for ports.",
    "specs": [
      "3 USB 3.0, SD and TF reader",
      "5Gbps",
      "No video"
    ],
    "pros": [
      "Card reader",
      "Three USB 3.0",
      "Plug and play",
      "No drivers"
    ],
    "cons": [
      "No HDMI",
      "No charging"
    ],
    "bestFor": "people who only need ports"
  }
];

export const howWeEvaluated = [
  {
    "title": "Video and display support",
    "description": "Each hub was compared on its HDMI or display outputs, listed refresh rate at 4K and any note about Mac or Windows limits."
  },
  {
    "title": "Power pass-through",
    "description": "Listed charging wattage and how much the hub reserves for itself were weighed against typical laptop chargers."
  },
  {
    "title": "Ports and speeds",
    "description": "Port count, USB-A and USB-C mix and the listed data speeds were compared."
  },
  {
    "title": "Build and layout",
    "description": "Materials, cable design and port spacing were considered as signs of daily-use quality."
  },
  {
    "title": "Value at this price",
    "description": "Price was weighed against video refresh rate, port speed and pass-through wattage, with extra weight on what a very low price leaves out."
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
    "subheading": "By Use",
    "intro": "Pick the job.",
    "table": {
      "headers": [
        "Your situation",
        "Pick from this guide"
      ],
      "rows": [
        [
          "All-round office",
          "Anker 7-in-1 USB-C Hub"
        ],
        [
          "Fast SSD transfers",
          "Acer 6-in-1 10Gbps Hub or UGREEN Revodok Pro 6-in-1"
        ],
        [
          "Desk hub",
          "intpw 9-in-1 Aluminum"
        ],
        [
          "Photographers",
          "BENFEI 7-in-1"
        ],
        [
          "Ports only",
          "Sabrent 5-in-1"
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
          "Under $15",
          "BENFEI 7-in-1 or UGREEN Revodok Pro 6-in-1"
        ],
        [
          "$15 to $25",
          "Anker 5-in-1, Sabrent 5-in-1, Anker 7-in-1 USB-C Hub or Acer 6-in-1 10Gbps Hub"
        ],
        [
          "$25 to $30",
          "intpw 9-in-1 Aluminum"
        ]
      ]
    }
  },
  {
    "subheading": "4K@60Hz vs 4K@30Hz",
    "intro": "The refresh rate on the HDMI port is the difference you feel every day.",
    "cards": [
      {
        "label": "4K@60Hz",
        "text": "Moves the mouse and scrolls smoothly, the way a normal monitor does, and needs HDMI 2.0 or better on the hub. Anker 7-in-1 USB-C Hub, Acer 6-in-1 10Gbps Hub, UGREEN Revodok Pro 6-in-1, intpw 9-in-1 Aluminum and BENFEI 7-in-1 list 60Hz."
      },
      {
        "label": "4K@30Hz",
        "text": "Fine for slides and documents, but the cursor feels laggy and video looks choppy because the screen refreshes only 30 times a second. Anker 5-in-1 is limited to 30Hz."
      }
    ],
    "note": "Most people should default to a 60Hz hub."
  },
  {
    "subheading": "By Charging Need",
    "table": {
      "headers": [
        "Charger",
        "Pick from this guide"
      ],
      "rows": [
        [
          "65W laptop",
          "Anker 7-in-1 USB-C Hub"
        ],
        [
          "100W laptop",
          "Acer 6-in-1 10Gbps Hub or intpw 9-in-1 Aluminum"
        ]
      ]
    }
  },
  {
    "subheading": "For a MacBook Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An HDMI port that lists 4K@60Hz and a USB-C input rated high enough for your laptop charger."
      },
      {
        "label": "In this comparison",
        "text": "Anker 7-in-1 USB-C Hub lists 4K@60Hz and up to 85W pass-through, which suits a MacBook Air or a similar laptop."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You move big files: Acer 6-in-1 10Gbps Hub and UGREEN Revodok Pro 6-in-1 provide 10Gbps ports."
      },
      {
        "label": "Save if",
        "text": "You only need an extra port or two: Anker 5-in-1 costs less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Video output, HDMI version and refresh rate",
    "explanation": "A hub's HDMI port only works if your laptop's USB-C port supports DisplayPort Alternate Mode, and the HDMI version decides the picture: 4K@30Hz feels laggy for mouse movement, while 4K@60Hz is smooth. Many budget hubs still use older HDMI 1.4 and cap out at 30Hz. Check the laptop spec for video output, then read the hub listing for the exact refresh rate at 4K, not just the word 4K."
  },
  {
    "criterion": "Power delivery pass-through is not the full wattage",
    "explanation": "A hub that lists 100W power delivery usually keeps part of that for itself, so a 100W charger might leave about 85W for the laptop. A 90W laptop on a 65W charger through the hub will throttle under load. Add up your laptop's charger wattage, subtract roughly 10 to 15W for the hub, and make sure the pass-through figure still covers your needs."
  },
  {
    "criterion": "USB-A or USB-C ports and their speeds",
    "explanation": "Ports differ in speed: older USB 3.0 runs at 5Gbps, newer USB 3.2 Gen 2 reaches 10Gbps, and a USB 2.0 port tops out at 480Mbps. A fast external SSD on a slow port transfers files far slower than it should. Count the ports you use daily, check the speed beside each one in the listing and match fast drives to the 10Gbps ones."
  },
  {
    "criterion": "Heat, aluminum and port spacing",
    "explanation": "Hubs that carry video and charging warm up, and an aluminum shell sheds heat better than plastic. Tight port spacing can also block neighbouring ports when you plug in a thick drive or a chunky adapter. Look for an aluminum body and read photos for port layout, particularly if you plan to use a USB drive next to an SD card."
  },
  {
    "criterion": "Card readers and Ethernet ports",
    "explanation": "SD and microSD slots save a separate reader for cameras, and an Ethernet jack gives a steady wired connection for calls and large downloads. Both are only useful if you use them, and card readers often share bandwidth with other ports. Check which extras you need and whether the listing says they work at the same time as video."
  }
];

export const faq = [
  {
    "q": "Why does my hub show no picture?",
    "a": "Your laptop port may lack video output."
  },
  {
    "q": "Will a hub charge my laptop?",
    "a": "Yes within its wattage."
  },
  {
    "q": "Is 4K@30Hz bad?",
    "a": "It is choppier."
  },
  {
    "q": "Do hubs get hot?",
    "a": "They warm up."
  },
  {
    "q": "Are USB 2.0 ports slow?",
    "a": "Yes."
  },
  {
    "q": "Do I need a card reader?",
    "a": "Only if you use SD cards."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-usb-hub-for-desk","title":"Best USB Hub for Desk"},{"href":"/guide/best-usb-c-hubs-under-50","title":"Best USB-C Hubs Under $50"},{"href":"/guide/usb-c-hub-vs-docking-station","title":"USB-C Hub vs Docking Station"},{"href":"/guide/best-usb-c-docking-stations","title":"Best USB-C Docking Stations"}];
