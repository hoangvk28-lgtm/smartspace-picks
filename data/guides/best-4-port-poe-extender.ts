export const guideSlug = "best-4-port-poe-extender";
export const guideTitle = "4 Best 4-Port PoE Extenders in 2026";
export const metaTitle = "Best 4-Port PoE Extenders";
export const metaDescription = "We compared 4-port PoE extenders by per-port wattage and total power budget, since a 90W input doesn't mean each of the 4 output ports gets full power.";
export const mainKeyword = "best 4 port poe extender";
export const introParagraphs = [
  "A 4-port PoE extender lets you power three or four separate devices from a single upstream PoE source, but the total power budget available across those ports, and how it's split between them, varies enough between listings that a device needing more than a fair share could end up underpowered.",
  "We compared this lineup on real per-port wattage against total input budget, industrial durability, and surge protection, since one listing specifically states a rugged IP40-rated enclosure operating from -40F to 167F for genuinely harsh industrial environments."
];
export const lastUpdated = "2026-09-15";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/213mNm11-tL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-4-port-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "LINOVISION 4 Ports Gigabit PoE Passthrough Switch",
    price: "$59.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/213mNm11-tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C7CLT4P2?tag=deskfinds0d-20",
    description: "This extender's listing specifically states it adopts a hardware IEEE 802.3af/at/bt PoE chipset following a PD Detection, Classification Type, and Power On procedure to prevent standard PD devices from damage, a more rigorous approach than software-emulated PoE found on some cheaper extenders. Its 90W BT-rated input splits into an 80W total output budget across 4 Gigabit ports.\n\nCompared to the MokerLink and VIMIN picks below, this one's specifically stated 6KV surge protection and lifetime 24/7 US local and global technical support give it the most comprehensive protection and support package in this comparison.\n\nBest for buyers who want hardware-based PoE chip safety with surge protection and lifetime technical support.",
    specs: ["4 Gigabit ports, 90W PoE++ input, 80W output budget", "Hardware IEEE 802.3af/at/bt chipset with PD detection", "6KV surge protection, lifetime 24/7 support"],
    pros: ["Hardware PoE chipset with device detection prevents damage to connected PDs", "6KV surge protection guards against electrical damage", "Lifetime 24/7 US local and global technical support included"],
    cons: ["Highest price in this comparison at under $60", "80W total output budget is shared across all 4 ports, not independent"],
    bestFor: "buyers who want hardware-based PoE chip safety with surge protection and lifetime support",
  },
  {
    id: "best-4-port-poe-extender-2",
    rank: 2,
    badge: "Best for Industrial Environments",
    name: "PoE Extender Industrial 4 Port Gigabit Ethernet",
    price: "$48.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31Swq+LVvSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FCLCBTQ2?tag=deskfinds0d-20",
    description: "This extender's listing specifically states a rugged IP40-rated enclosure operating across a wide -40F to 167F temperature range, built for genuinely harsh industrial environments beyond typical indoor or moderate outdoor conditions. Its 90W BT input splits across 4 ports at up to 30W each, with 3-level cascade support reaching 1312ft total.\n\nCompared to the LINOVISION pick above, this one's specifically stated 6KV surge protection matches that level of electrical safeguarding at a meaningfully lower price, though without the same lifetime support commitment.\n\nBest for buyers who need genuine industrial-grade temperature tolerance and surge protection at a lower price than the top pick.",
    specs: ["IP40-rated, -40F to 167F operating range", "90W BT input, up to 30W per port (4 ports)", "6KV surge protection, 3-level cascade to 1312ft"],
    pros: ["Wide -40F to 167F operating range suits genuinely harsh environments", "6KV surge protection at a lower price than the top pick", "3-level cascade support extends total coverage to 1312ft"],
    cons: ["Lifetime support is less comprehensive than the LINOVISION pick's stated commitment", "IP40 rating is lower than a dedicated outdoor IP66/67 extender"],
    bestFor: "buyers who need genuine industrial-grade temperature tolerance and surge protection at a lower price",
  },
  {
    id: "best-4-port-poe-extender-3",
    rank: 3,
    badge: "Best for Outdoor Use",
    name: "VIMIN 4-Port Outdoor PoE Gigabit Extender",
    price: "$21.59",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31yPZm7aJfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX3G8SQS?tag=deskfinds0d-20",
    description: "This extender's listing specifically states an IP65 waterproof rating alongside full Gigabit 1000Mbps speed, powering three devices from a single input at up to 30W max, a genuinely outdoor-capable 4-port option at a meaningfully lower price than the industrial-grade picks above. Its compact, durable construction is built to withstand tight installation spaces.\n\nCompared to the LINOVISION and industrial picks above, this one trades surge protection and extreme temperature tolerance for a much lower price while still offering real outdoor water resistance and full Gigabit throughput.\n\nBest for buyers who want genuine outdoor waterproofing and Gigabit speed at a budget-friendly price.",
    specs: ["IP65 waterproof, full Gigabit 1000Mbps", "1 in 3 out, 30W max, VLAN support", "100m (328ft) extension, plug-and-play"],
    pros: ["Lowest price in this comparison at under $25", "IP65 waterproof rating suits outdoor installation", "Maintains full Gigabit speed unlike some budget alternatives"],
    cons: ["No surge protection disclosed unlike the LINOVISION or industrial picks", "Lower temperature tolerance than the industrial-rated pick above"],
    bestFor: "buyers who want genuine outdoor waterproofing and Gigabit speed at a budget-friendly price",
  },
  {
    id: "best-4-port-poe-extender-4",
    rank: 4,
    badge: "Best Value",
    name: "MokerLink 4 Port PoE Extender",
    price: "$16.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31YMZnLyzhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B5QWT3R1?tag=deskfinds0d-20",
    description: "This extender's listing specifically states an unmanaged plug-and-play design with automatic power detection, requiring no configuration and no additional power adapter since it draws entirely from the PoE network. Its 3-level cascading support increases PoE coverage at a genuinely low cost for a basic multi-device installation.\n\nCompared to the LINOVISION, industrial, and VIMIN picks above, this one's lowest price in this comparison makes it the most accessible entry point for a simple indoor 4-port PoE extension need without industrial or outdoor requirements.\n\nBest for buyers who want the lowest possible price for a basic indoor 4-port PoE extension.",
    specs: ["1 PoE in, 3 PoE out, 100Mbps speed", "IEEE 802.3af/at, average 8W per port", "3-level cascading, wall and DIN-rail mount"],
    pros: ["Lowest price in this comparison at under $20", "No local power adapter needed, powered entirely by PoE network", "3-level cascading increases coverage at low cost"],
    cons: ["100Mbps speed is lower than the Gigabit-rated picks in this comparison", "No outdoor waterproofing or industrial temperature rating"],
    bestFor: "buyers who want the lowest possible price for a basic indoor 4-port PoE extension",
  }
];

export const howWeEvaluated = [
  {
    "title": "Total PoE budget vs port count",
    "description": "Four ports share one input, so we divided each listing's budget by its outputs. The LINOVISION offers an 80W output budget from a 90W input and the Industrial unit allows 30W per port, while the MokerLink averages 8W per port. A four-camera install fails when the sum of the draws exceeds the budget, so this axis led."
  },
  {
    "title": "Link speed at the far end",
    "description": "We checked whether each unit keeps Gigabit or caps at 100Mbps. The MokerLink is listed at 100Mbps, which is acceptable for four 1080p cameras but a bottleneck for 4K cameras or APs. The VIMIN and LINOVISION hold 1000Mbps, so they scored higher for modern gear."
  },
  {
    "title": "Surge protection and housing",
    "description": "Outdoor and industrial installs get hit by lightning-induced surges, so we compared protection ratings: 6KV on both the LINOVISION and the Industrial unit, and IP65 on the VIMIN. We weighted a stated surge figure above a generic 'protected' claim. A bare number was not enough, so we read how each listing describes the voltage withstand."
  },
  {
    "title": "PoE standard handling",
    "description": "We looked at whether the box detects the upstream source. The LINOVISION uses a hardware 802.3af/at/bt chipset with PD detection, which means it negotiates power rather than assuming it. We treated a negotiating chipset as safer than a passive relay for expensive cameras."
  },
  {
    "title": "Cascade depth",
    "description": "The Industrial and MokerLink list 3-level cascading. Each extra level lowers the available budget, so we gave extra credit to units that state the power left at the far end rather than just a distance. That matters at four ports, where a hop that looks fine for one camera can starve the fourth device on a long run."
  }
];

export const howToChoose = [
  {
    "subheading": "By Camera Count and Type",
    "intro": "Four outputs invite four cameras, but the budget decides whether that works.",
    "table": {
      "headers": [
        "What you plan to run",
        "Recommended pick"
      ],
      "rows": [
        [
          "Four standard 1080p cameras at 8W or less each",
          "MokerLink 4 Port Extender, with an average of 8W per port at 100Mbps"
        ],
        [
          "Four mixed cameras and one AP that need Gigabit",
          "VIMIN 4-Port Outdoor, in a 1-in-3-out layout with Gigabit and VLAN support"
        ],
        [
          "Four heavier cameras drawing up to 30W each with a high input",
          "PoE Extender Industrial 4 Port Gigabit Ethernet, with up to 30W per port from a 90W BT input"
        ],
        [
          "A hub for four devices that must negotiate PoE correctly",
          "LINOVISION 4 Ports Gigabit PoE Passthrough Switch, with PD detection and an 80W output budget"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "From a basic repeater to a surge-protected industrial box.",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20, the cheapest four-device hub",
          "MokerLink 4 Port Extender, at 100Mbps"
        ],
        [
          "Under $25, outdoor Gigabit",
          "VIMIN 4-Port Outdoor, as IP65 with 1000Mbps"
        ],
        [
          "Under $50, an industrial case",
          "PoE Extender Industrial 4 Port unit, rated IP40 with 6KV surge protection"
        ],
        [
          "Under $60, the full budget and chipset",
          "LINOVISION 4 Ports Passthrough Switch, with 90W input and PD detection"
        ]
      ]
    }
  },
  {
    "subheading": "100Mbps Budget vs Full Gigabit",
    "intro": "This is the practical split among 4-port extenders, and it is mostly about the camera, not the extender.",
    "cards": [
      {
        "label": "100Mbps units (MokerLink 4 Port)",
        "text": "Fast Ethernet moves at most 100Mbps in total across the link. Four 1080p cameras at a few Mbps each fit easily, so you save money without feeling it. The limit only shows up when a camera or AP wants more."
      },
      {
        "label": "Gigabit units (VIMIN 4-Port, LINOVISION 4 Ports, PoE Extender Industrial 4 Port)",
        "text": "Gigabit leaves headroom for 4K cameras, a Wi-Fi 6 AP, or later upgrades. It matters most when all four ports share one uplink, since four sharing the pipe adds up fast."
      }
    ],
    "note": "For four basic cameras, 100Mbps is fine; for anything with an AP or 4K, buy Gigabit."
  },
  {
    "subheading": "By Install Environment",
    "intro": "A 4-port extender is a larger box, so where it mounts matters.",
    "table": {
      "headers": [
        "Where it mounts",
        "Recommended pick"
      ],
      "rows": [
        [
          "A wall outdoors with rain exposure",
          "VIMIN 4-Port Outdoor, rated IP65"
        ],
        [
          "A DIN rail in a cabinet or utility closet",
          "PoE Extender Industrial 4 Port, listed for wall and rail mounting and a -40F to 167F range"
        ],
        [
          "A dry rack or shelf with lots of cable",
          "LINOVISION 4 Ports, with 6KV surge protection"
        ],
        [
          "Wall or rail mount in a mixed-use space",
          "MokerLink 4 Port, which supports both mounting types"
        ]
      ]
    }
  },
  {
    "subheading": "For a Four-Camera Warehouse Run Specifically",
    "intro": "Warehouse cameras sit on a long run and share one budget.",
    "cards": [
      {
        "label": "Look for",
        "text": "Per-port power above your heaviest camera, a stated cascade limit, and surge protection rated above 4KV because of long metal runs."
      },
      {
        "label": "In this comparison",
        "text": "The PoE Extender Industrial 4 Port gives 30W per port with 6KV protection, and the LINOVISION 4 Ports adds PD detection at a 90W input; the 8-port and 3-port extender guides cover other layouts."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The spread is wide here, so extra money buys power and protection.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You run PTZ cameras or APs. The LINOVISION 4 Ports and PoE Extender Industrial 4 Port are the only picks here with per-port power above 10W, so they justify their higher prices."
      },
      {
        "label": "Save if",
        "text": "You run basic cameras. The MokerLink 4 Port and VIMIN 4-Port cost the least and handle four low-draw devices without trouble."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A 4-Port Extender's Total Power Budget Is Shared Across All Ports, Not Independently Allocated to Each",
    "explanation": "The LINOVISION pick specifically states a 90W BT input splitting into an 80W total output budget across its 4 ports, meaning the combined draw of all connected devices must stay within that shared budget rather than each port independently supporting its own maximum rating simultaneously. This matters significantly if you're connecting four devices that each draw close to the port's maximum rated wattage, since the total combined draw could exceed what the extender's shared power budget can actually deliver. Check a 4-port extender's total output budget against the combined wattage of all devices you plan to connect simultaneously, not just each port's individual maximum rating."
  },
  {
    "criterion": "A Hardware PoE Chipset With PD Detection Provides More Reliable Device Protection Than Software-Emulated PoE",
    "explanation": "The LINOVISION pick specifically states it uses a hardware IEEE 802.3af/at/bt chipset following a PD Detection, Classification Type, and Power On sequence, a more rigorous device-safety procedure than some cheaper extenders that use software-emulated PoE detection, which can be less reliable at correctly identifying and safely powering connected devices. This matters if you're connecting expensive or sensitive PoE equipment where an incorrect power delivery could cause damage, and matters less for inexpensive, replaceable devices where the risk tolerance is lower. Check whether a listing specifically names a hardware-based PoE detection chipset if protecting valuable connected equipment is a priority."
  },
  {
    "criterion": "An IP40 Industrial Enclosure Rating Is Different From, and Generally Lower Than, an Outdoor IP65/67 Waterproof Rating",
    "explanation": "The Industrial pick's specifically stated IP40 rating protects against solid objects larger than 1mm but provides no specific water protection, a genuinely different (and in water-resistance terms, lower) standard than the VIMIN pick's IP65 rating, even though both are marketed toward demanding environments. This matters if your installation location has actual moisture or water exposure, where an IP40-rated unit would need additional protection despite its 'industrial' branding, and matters less in a dry industrial setting with only temperature and dust concerns. Check the specific IP rating number, not just the word 'industrial' or 'rugged' in a product's marketing, if water exposure is a real factor in your installation."
  },
  {
    "criterion": "6KV Surge Protection Is a Concrete, Checkable Specification Worth Comparing Directly Across Similarly Marketed Extenders",
    "explanation": "Both the LINOVISION and Industrial picks specifically state 6KV surge protection, a concrete rating that quantifies how much transient voltage spike the unit can absorb, distinct from a vague 'built-in protection' claim on a competing extender that doesn't specify an actual voltage rating. This matters if you're installing in a location with real electrical surge risk from storms or unstable power infrastructure, and matters less in a stable, surge-protected environment already served by a quality UPS or surge suppressor upstream. Compare the specific stated surge protection voltage rating across extenders, rather than assuming any 'protected' claim provides the same level of safeguarding."
  },
  {
    "criterion": "A Lifetime Technical Support Commitment Provides More Ongoing Value Than a Standard Warranty Alone for a Multi-Device Extender",
    "explanation": "The LINOVISION pick's specifically stated lifetime 24/7 US local and global technical support goes beyond a standard 1-year warranty period, offering ongoing troubleshooting help for a device that, once installed powering four separate connected devices, becomes more central to your network's reliability than a single-port extender. This matters if you want assurance of ongoing help diagnosing issues across a more complex multi-device setup, and matters less if you're comfortable troubleshooting connectivity issues independently. Check whether a 4-port extender's listing specifically names an ongoing support commitment beyond just its warranty period, if remote troubleshooting help matters for your installation's complexity."
  }
];

export const faq = [
  {
    "q": "Can a 4-port PoE extender really run four cameras?",
    "a": "Only if their total draw fits the input budget. The LINOVISION gives an 80W output from a 90W input, but the MokerLink averages 8W per port. Add up each camera's peak draw, including infrared, and leave about 20 percent spare."
  },
  {
    "q": "What do buyers get wrong about 3-level cascading?",
    "a": "They assume each level adds equal reach. Every level consumes power, so the far unit has less for its ports. The Industrial and MokerLink list 3-level chains, but you should confirm the power left at the final unit under peak load."
  },
  {
    "q": "Is the LINOVISION worth paying more than the VIMIN?",
    "a": "If you need a 90W input, PD detection, or 6KV surge protection, yes. The VIMIN is a 1-in-3-out unit capped at 30W, so for three cameras on a short run it costs far less and keeps full Gigabit speed. Check the camera's peak draw first."
  },
  {
    "q": "How do I connect the 4-port Industrial extender to a 90W source?",
    "a": "Use a 90W 802.3bt source for the input, then Cat5e or better to each camera. The listing states up to 30W per port, so confirm the source can supply the total before attaching the fourth device, or the last camera may fail."
  },
  {
    "q": "Does a 100Mbps 4-port extender hurt 4K cameras?",
    "a": "It can. A 4K stream may run well above 10Mbps, and four of them share one 100Mbps link. The MokerLink fits 1080p cameras; for 4K or AP use, the Gigabit models avoid the bottleneck. Test with all four streaming before mounting anything."
  },
  {
    "q": "How should I protect a 4-port extender from lightning?",
    "a": "Choose a unit with a stated surge rating such as the 6KV on the LINOVISION or Industrial model, ground the enclosure if the case allows, and keep outdoor cable runs short. Surge ratings reduce damage risk but never eliminate it."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-gigabit-poe-extender", "title": "Best Gigabit PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" },
  { "href": "/guide/best-outdoor-poe-extender", "title": "Best Outdoor and Waterproof PoE Extenders" }
];
