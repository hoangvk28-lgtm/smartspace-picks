export const guideSlug = "best-poe-splitter-for-raspberry-pi";
export const guideTitle = "4 Best PoE Splitters for Raspberry Pi in 2026";
export const metaTitle = "Best PoE Splitters for Raspberry Pi";
export const metaDescription = "We compared PoE HATs for Raspberry Pi by real isolation rating, since one listing reaches 3KV galvanic isolation versus standard, non-isolated designs.";
export const mainKeyword = "best poe splitter for raspberry pi";
export const introParagraphs = [
  "For Raspberry Pi specifically, a PoE HAT that mounts directly onto the board's GPIO header is the more common solution than a separate splitter box and cable, delivering power directly without an external adapter cluttering your setup, but the isolation rating and power budget vary enough to matter for reliability and multi-board deployments.",
  "We compared this lineup on real isolation rating and power budget, since one listing specifically reaches 3KV galvanic isolation designed to exceed the official Raspberry Pi PoE HAT's power delivery standards, built specifically for cluster deployments running many boards from one PoE switch."
];
export const lastUpdated = "2026-09-16";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41dwyh3OFxL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-poe-splitter-for-raspberry-pi-1",
    rank: 1,
    badge: "Best Overall",
    name: "waveshare Power Over Ethernet (PoE) HAT",
    price: "$24.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41dwyh3OFxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0928ZD7QQ?tag=deskfinds0d-20",
    description: "This HAT's listing specifically states an onboard high-speed active cooling fan combined with 5V USB-A and 12V header outputs, letting it power additional external devices beyond just the Raspberry Pi itself, a genuinely more versatile output configuration than a single-output HAT. Its fully isolated switch mode power supply (SMPS) with an MP8676 buck chip provides real electrical isolation.\n\nCompared to the UCTRONICS and LoveRPi picks below, this one's dual output design specifically supporting both USB-A and 12V header connections gives it flexibility to power a fan, display, or other accessory alongside the Pi.\n\nBest for buyers who want to power additional external accessories alongside the Raspberry Pi from the same HAT.",
    specs: ["802.3af/at compliant, isolated SMPS", "5V USB-A + 12V header dual outputs", "Onboard active cooling fan, MP8676 buck chip"],
    pros: ["Dual output design powers additional accessories beyond the Pi", "Onboard active cooling fan improves heat dissipation", "Supports both 802.3af and higher-power 802.3at standards"],
    cons: ["Highest price in this comparison at under $25", "Larger footprint than the compact UCTRONICS pick"],
    bestFor: "buyers who want to power additional external accessories alongside the Raspberry Pi",
  },
  {
    id: "best-poe-splitter-for-raspberry-pi-2",
    rank: 2,
    badge: "Best Compact Design",
    name: "UCTRONICS PoE HAT for Raspberry Pi 4B/3B+",
    price: "$18.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Mx4-8ByUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B082ZLDMZ6?tag=deskfinds0d-20",
    description: "This HAT's listing specifically states a compact 65mm by 44mm by 13mm size, nearly half the official Raspberry Pi PoE HAT's dimensions, saving genuine space for other hardware inside a Pi case. Its update to compatibility with 48V non-standard switches broadens support beyond strictly IEEE-compliant PoE sources.\n\nCompared to the waveshare pick above, this one's smaller footprint fits inside more Raspberry Pi cases without modification, though its listing specifically recommends adequate air circulation since it can run hot without the waveshare's onboard fan.\n\nBest for buyers who need the smallest HAT footprint to fit inside a compact Raspberry Pi case.",
    specs: ["65x44x13mm, nearly half the official HAT's size", "5V/2.5A output, 12.5W total power budget", "IEEE 802.3af compliant, 48V non-standard switch support"],
    pros: ["Nearly half the size of the official Raspberry Pi PoE HAT", "Compatible with 48V non-standard switches for broader support", "Lower price than the waveshare pick above"],
    cons: ["No onboard cooling fan, requires adequate ventilation", "Lower 12.5W power budget than the LoveRPi cluster-oriented pick"],
    bestFor: "buyers who need the smallest HAT footprint to fit inside a compact Raspberry Pi case",
  },
  {
    id: "best-poe-splitter-for-raspberry-pi-3",
    rank: 3,
    badge: "Best for Cluster Deployments",
    name: "LoveRPi Power-Over-Ethernet (PoE) HAT, 3KV Isolated",
    price: "$15.01",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Q1t9q0pPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07XB5PR9J?tag=deskfinds0d-20",
    description: "This HAT's listing specifically states galvanic isolation up to 3KV, designed for IEEE 802.3af, 802.3at, and passive DC 48V network switches, a notably higher isolation rating built specifically for applications with non-compliant switches lacking their own PSE-side isolation. Its listing specifically frames the product around powering five, ten, or twenty Raspberry Pi boards through a single PoE switch for cluster node deployments.\n\nCompared to the waveshare and UCTRONICS picks above, this one's explicit cluster-computing framing and 3KV isolation target buyers building an on-premise Pi cluster rather than a single standalone board.\n\nBest for buyers building a multi-board Raspberry Pi cluster who need higher isolation and simplified cable management.",
    specs: ["3KV galvanic isolation, 802.3af/at/passive DC 48V", "Built for multi-board cluster deployments", "Lowest price in this comparison"],
    pros: ["Lowest price in this comparison at under $20", "3KV isolation rating exceeds standard HAT designs", "Specifically designed and marketed for multi-board cluster deployments"],
    cons: ["Requires removing non-essential heatsinks before installation", "Explicitly needs a ventilated case with active cooling fan"],
    bestFor: "buyers building a multi-board Raspberry Pi cluster who need higher isolation",
  },
  {
    id: "best-poe-splitter-for-raspberry-pi-4",
    rank: 4,
    badge: "Best for Raspberry Pi Zero",
    name: "Waveshare PoE Ethernet USB HUB HAT for Raspberry Pi Zero",
    price: "$33.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41W9cwDwbIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09PZY3HGV?tag=deskfinds0d-20",
    description: "This HAT's listing specifically states compatibility with the Raspberry Pi Zero, Zero W, and Zero 2 W boards, a genuinely different Pi form factor than the Pi 4B/3B+ HATs in this comparison, since the compact Zero series has no native Ethernet or PoE support of its own. Its integrated RTL8152B Ethernet chip adds a 10/100M RJ45 port alongside 3 extended USB 2.0/1.1 ports.\n\nCompared to the Pi 4/3B+ HATs above, this one includes a quality ABS case with two interchangeable lids, adding both PoE power and genuinely new Ethernet and USB connectivity that the Zero series doesn't natively have.\n\nBest for Raspberry Pi Zero owners who need to add both PoE power and Ethernet connectivity in one HAT.",
    specs: ["For Raspberry Pi Zero/Zero W/2 W", "Adds RJ45 Ethernet + 3 USB 2.0/1.1 ports", "802.3af compliant, includes ABS case with 2 lids"],
    pros: ["Specifically designed for the Pi Zero series, which lacks native Ethernet", "Adds both PoE power and new Ethernet/USB connectivity in one HAT", "Includes a case with interchangeable lids"],
    cons: ["Highest price in this comparison at under $35", "Not compatible with Pi 4B/3B+ boards, only the Zero series"],
    bestFor: "Raspberry Pi Zero owners who need to add both PoE power and Ethernet connectivity",
  }
];

export const howWeEvaluated = [
  {
    "title": "Pi model compatibility",
    "description": "We checked which boards each HAT supports. UCTRONICS and LoveRPi target the Pi 4B and 3B+, while Waveshare's USB hub HAT is built for Pi Zero models, which have no Ethernet port. Fitting the wrong board is the most common mistake we looked for. A HAT meant for a 4B will not seat on a Zero."
  },
  {
    "title": "Power budget for the Pi",
    "description": "We compared output ratings, such as UCTRONICS's 5V at 2.5A and 12.5W total, against what a Pi with a USB SSD or camera draws. A HAT with a thin power budget causes random reboots under load. A Pi with an SSD and a camera needs the larger budget."
  },
  {
    "title": "Cooling and case fit",
    "description": "We read cooling notes. Waveshare's HAT includes an onboard fan, UCTRONICS has none and needs ventilation, and LoveRPi requires a ventilated case with an active fan, so we noted who must plan airflow before closing the case. Plan airflow before the case is closed, not after the first reboot."
  },
  {
    "title": "Isolation and safety rating",
    "description": "We compared isolation levels, such as LoveRPi's 3KV galvanic isolation, since a PoE HAT connects 48V on the cable side to a computer you may touch. Isolated designs protect the Pi from surges. Isolation gives a Pi some protection from cable-side surges."
  },
  {
    "title": "Extra outputs and footprint",
    "description": "We weighed extras and size. Waveshare adds a 12V header and USB-A output, while UCTRONICS is 65x44x13mm, nearly half the official HAT. Space matters in small enclosures and cluster racks. Cluster racks make every millimeter of height count."
  }
];

export const howToChoose = [
  {
    "subheading": "By Raspberry Pi Model",
    "intro": "The wrong HAT will not fit the header or the Ethernet port.",
    "table": {
      "headers": [
        "Your board",
        "Recommended pick"
      ],
      "rows": [
        [
          "Raspberry Pi 4B with extra accessories to power",
          "waveshare Power Over Ethernet (PoE) HAT, which adds 5V USB-A and a 12V header"
        ],
        [
          "Raspberry Pi 4B or 3B+ in a tight case",
          "UCTRONICS PoE HAT for Raspberry Pi 4B/3B+, at 65x44x13mm"
        ],
        [
          "Several Pi boards in a rack or cluster",
          "LoveRPi Power-Over-Ethernet (PoE) HAT, with 3KV galvanic isolation"
        ],
        [
          "Raspberry Pi Zero, Zero W or Zero 2 W without Ethernet",
          "Waveshare PoE Ethernet USB HUB HAT for Raspberry Pi Zero, which adds RJ45 and three USB ports"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "These HATs are small purchases, but the cheapest is not the simplest.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "The lowest price in this roundup, under $20",
          "LoveRPi Power-Over-Ethernet (PoE) HAT, if you can plan for a ventilated case"
        ],
        [
          "A mid-range spend for a compact board",
          "UCTRONICS PoE HAT for Raspberry Pi 4B/3B+, which costs less than the waveshare"
        ],
        [
          "Up to the under $25 range for a fan and a 12V output",
          "waveshare Power Over Ethernet (PoE) HAT, the best overall"
        ],
        [
          "The highest price, under $35, for a Zero-series Ethernet adapter",
          "Waveshare PoE Ethernet USB HUB HAT for Raspberry Pi Zero, with a case included"
        ]
      ]
    }
  },
  {
    "subheading": "Fan-Cooled HAT vs Passive HAT",
    "intro": "Pi boards run warm under load, and PoE HATs add their own heat.",
    "cards": [
      {
        "label": "Fan-cooled (waveshare)",
        "text": "The onboard fan helps heat dissipation on a busy Pi 4B. It adds noise and a moving part, but suits a Pi that runs hot in a closed enclosure."
      },
      {
        "label": "Passive (UCTRONICS, LoveRPi)",
        "text": "UCTRONICS has no fan and relies on airflow, and LoveRPi requires a ventilated case and fan. These are quieter in an open rack but need good airflow."
      }
    ],
    "note": "Default to the waveshare fan unless the Pi lives in a quiet room with open ventilation."
  },
  {
    "subheading": "By Project Type",
    "intro": "What the Pi does decides how much power it draws.",
    "table": {
      "headers": [
        "Your project",
        "Recommended pick"
      ],
      "rows": [
        [
          "A Pi-hole or home server with a USB SSD attached",
          "waveshare Power Over Ethernet (PoE) HAT, whose 5V USB-A output helps with accessories"
        ],
        [
          "A small sensor node or camera in a tight enclosure",
          "UCTRONICS PoE HAT for Raspberry Pi 4B/3B+, with a 12.5W power budget"
        ],
        [
          "A Kubernetes or k3s cluster with many boards",
          "LoveRPi Power-Over-Ethernet (PoE) HAT, built for multi-board deployments"
        ],
        [
          "A tiny Zero project that needs Ethernet and USB ports",
          "Waveshare PoE Ethernet USB HUB HAT for Raspberry Pi Zero, with an ABS case and two lids"
        ]
      ]
    }
  },
  {
    "subheading": "For Cluster Builders Specifically",
    "intro": "Many Pi boards on one switch multiply every small mistake.",
    "cards": [
      {
        "label": "Look for",
        "text": "Galvanic isolation, a documented power budget per board, and a case design that keeps airflow between boards."
      },
      {
        "label": "In this comparison",
        "text": "LoveRPi Power-Over-Ethernet (PoE) HAT lists 3KV isolation and a cluster focus, but it asks you to remove non-essential heatsinks and use a ventilated case."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "A few dollars more buy cooling and outputs.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a fan plus a 12V header, where waveshare Power Over Ethernet (PoE) HAT under $25 is the best overall."
      },
      {
        "label": "Save if",
        "text": "You run a cluster in a ventilated case, where LoveRPi Power-Over-Ethernet (PoE) HAT under $20 is the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A PoE HAT's Isolation Rating Determines Its Safety Margin With Non-Compliant or Passive PoE Sources",
    "explanation": "The LoveRPi pick specifically states 3KV galvanic isolation designed for switches and power sourcing equipment that don't provide their own PSE-side isolation, a notably higher protection margin than a standard isolated SMPS design without a specifically stated isolation voltage. This matters significantly if you're using a passive DC 48V injector or a non-IEEE-compliant PoE source that doesn't handle isolation on its own end, and matters less if you're using a fully compliant, high-quality 802.3af/at switch with its own proper isolation. Check a PoE HAT's specifically stated isolation voltage rating if your PoE source is passive or non-standard, rather than assuming any 'isolated' claim provides equivalent protection."
  },
  {
    "criterion": "A HAT's Physical Size Directly Affects Whether It Fits Inside Your Specific Raspberry Pi Case",
    "explanation": "The UCTRONICS pick specifically states a 65mm by 44mm by 13mm footprint, nearly half the size of the official Raspberry Pi PoE HAT, a real space consideration if you're using a compact case that the larger official HAT or the similarly-sized waveshare pick wouldn't fit inside without modification. This matters if you've already selected a specific compact case for your Pi project, and matters less if you're using an open frame or a case specifically designed to accommodate the official HAT's larger dimensions. Measure your specific case's internal clearance against a HAT's stated dimensions before assuming any PoE HAT fits your particular enclosure."
  },
  {
    "criterion": "Additional Output Ports on a PoE HAT Can Power Accessories Beyond Just the Raspberry Pi Itself",
    "explanation": "The waveshare pick specifically includes both 5V USB-A and 12V header outputs beyond just powering the Pi, letting you connect and power an additional external device like a fan, sensor, or display from the same HAT without a separate power source. This matters if your project includes accessories that need their own power beyond what the Pi itself draws, and matters less if your setup only needs to power the bare Raspberry Pi board. Check whether a PoE HAT offers additional output ports if your specific project includes accessories requiring separate power delivery."
  },
  {
    "criterion": "The Raspberry Pi Zero Series Requires a Fundamentally Different HAT Than the Pi 4B or 3B+ Due to No Native Ethernet",
    "explanation": "The Waveshare PoE Ethernet USB HUB HAT is specifically designed for the Pi Zero, Zero W, and Zero 2 W boards, which have no native Ethernet port at all, meaning this HAT must add both Ethernet connectivity and PoE power simultaneously, a fundamentally different requirement than the Pi 4B/3B+ HATs that only need to add power since those boards already have built-in Ethernet. This matters significantly since a standard Pi 4B/3B+ PoE HAT physically won't work with the Zero series' different GPIO layout and lack of Ethernet hardware. Verify your specific Raspberry Pi model (Zero series versus 4B/3B+) before purchasing a PoE HAT, since these two HAT categories are not interchangeable."
  },
  {
    "criterion": "Active Cooling Fans on a PoE HAT Address Real Heat Generation That Passive Designs Require External Ventilation to Manage",
    "explanation": "The waveshare pick specifically includes an onboard active cooling fan for better heat dissipation, while the UCTRONICS pick explicitly recommends ensuring adequate air circulation since it becomes hot during normal operation without its own fan, a real difference in thermal management approach between the two HATs. This matters if you're installing the Pi in an enclosed case with limited airflow, where an onboard fan provides more reliable cooling, and matters less if your Pi sits in an open, well-ventilated location where passive cooling is adequate. Check whether a HAT includes active cooling or relies on your case providing adequate passive airflow before finalizing your case and cooling setup together."
  }
];

export const faq = [
  { "q": "Do I need a PoE HAT or a separate PoE splitter box for my Raspberry Pi?", "a": "A PoE HAT mounts directly onto the Pi's GPIO header without a separate box, the more common and integrated solution for Pi 4B/3B+ specifically, while a separate splitter with a USB-C or Micro USB cable is a more universal option that also works with non-Pi devices." },
  { "q": "What's the most common mistake buyers make when choosing a PoE HAT for Raspberry Pi?", "a": "Assuming any PoE HAT fits any Raspberry Pi model, when the Pi Zero series requires a fundamentally different HAT design that adds both Ethernet and power, incompatible with the standard Pi 4B/3B+ HATs in this comparison." },
  { "q": "Is the LoveRPi HAT worth it for just a single Raspberry Pi, not a cluster?", "a": "The LoveRPi's cluster-oriented design and 3KV isolation work fine for a single Pi too, and its lower price makes it a reasonable choice even for non-cluster use, though the waveshare or UCTRONICS picks may better suit specific single-board needs like accessory power or compact size." },
  { "q": "Can I use these PoE HATs with a passive PoE injector instead of a standard switch?", "a": "The LoveRPi pick specifically states compatibility with passive DC 48V power sourcing equipment in addition to standard IEEE 802.3af/at switches, making it the most flexible choice in this comparison for passive PoE sources." },
  { "q": "Does a PoE HAT need active cooling to work reliably?", "a": "The waveshare pick includes an onboard fan for active cooling, while the UCTRONICS and LoveRPi picks specifically recommend ensuring adequate case ventilation since they can run hot without their own fan, so checking your case's airflow before installation is worth doing." },
  { "q": "Will a Raspberry Pi 4B PoE HAT work with my Raspberry Pi Zero?", "a": "No, the Pi Zero series has a different form factor and no native Ethernet port, requiring a specifically designed HAT like the Waveshare PoE Ethernet USB HUB HAT rather than a standard Pi 4B/3B+ PoE HAT." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-splitter", "title": "Best PoE Splitters" },
  { "href": "/guide/best-5v-poe-splitter", "title": "Best 5V USB PoE Splitters" },
  { "href": "/guide/best-usb-c-poe-splitter", "title": "Best USB-C PoE Splitters" },
  { "href": "/guide/best-gigabit-poe-splitter", "title": "Best Gigabit PoE Splitters" }
];
