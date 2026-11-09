export const guideSlug = "best-budget-poe-extender";
export const guideTitle = "4 Best Budget PoE Extenders in 2026";
export const metaTitle = "Best Budget PoE Extenders";
export const metaDescription = "We compared budget PoE extenders under $17 by real cascade distance and per-port count, since even the cheapest options differ meaningfully in total reach.";
export const mainKeyword = "best budget poe extender";
export const introParagraphs = [
  "A budget PoE extender under $17 can still deliver genuine IEEE 802.3af/at compliance and real cascade distance, but the cheapest option isn't automatically the best value once you account for how many devices it powers and how far it actually reaches.",
  "We compared this lineup on real per-port count, cascade distance, and daisy-chain support, since one listing specifically reaches 2296ft total when six units are cascaded together, a genuinely long distance for a budget-tier extender."
];
export const lastUpdated = "2026-09-16";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31g3ScsUWxL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-budget-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "DSLRKIT 2-Port Outdoor Gigabit PoE Passthrough Switch",
    price: "$13.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31g3ScsUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DFW4QR4Y?tag=deskfinds0d-20",
    description: "This extender's listing specifically states support for both standard IEEE 802.3af/at and DC48V-57V passive PoE switches and injectors, a genuinely broader compatibility range than the other budget picks in this comparison that support only standard active PoE. Its passthrough design requires no local power, drawing everything from the PoE input.\n\nCompared to the Revotech and CENTROPOWER picks below, this one's dual compatibility with both active and passive PoE sources gives it real flexibility for buyers unsure which type of PoE source they're working with.\n\nBest for buyers who want broad compatibility with both active and passive PoE sources at the lowest price in this comparison.",
    specs: ["2-port, supports active and passive PoE sources", "IEEE 802.3af/at plus DC48V-57V passive compatible", "100m (Cat5e/Cat6) distance, no local power required"],
    pros: ["Lowest price in this comparison at under $15", "Compatible with both active IEEE PoE and passive DC PoE sources", "No local power adapter required, draws entirely from PoE input"],
    cons: ["No stated cascade or daisy-chain distance beyond the standard 100m", "Only 2 ports, fewer devices than the CENTROPOWER pick's cascade options"],
    bestFor: "buyers who want broad compatibility with both active and passive PoE sources at the lowest price",
  },
  {
    id: "best-budget-poe-extender-2",
    rank: 2,
    badge: "Best for Extended Cascade",
    name: "Revotech 2 Port POE Extender (POE5003)",
    price: "$16.79",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/417l35BRn-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PVQ8F84?tag=deskfinds0d-20",
    description: "This extender's listing specifically states support for cascading up to 6 pieces to reach 2296ft (700 meters) total distance, the longest cascade capability among the budget picks in this comparison. Its 30W PoE input splits into two 15W output ports, powering two PoE IP devices from a single cable run.\n\nCompared to the DSLRKIT pick above, this one's automatic detection and protection feature safeguards connected PoE equipment from damage due to incorrect installation, backed by full IEEE 802.3af/at compliance for standard PoE sources.\n\nBest for buyers who need the longest possible cascade distance from a budget-tier extender.",
    specs: ["2-port, 30W input split into two 15W outputs", "IEEE 802.3af/at compliant, 10/100Mbps", "6-unit cascade for up to 2296ft (700m) total"],
    pros: ["Longest documented cascade distance in this comparison at 2296ft", "Automatic detection protects equipment from installation damage", "Powers two devices from a single cable run"],
    cons: ["10/100Mbps speed only, not Gigabit like the DSLRKIT pick", "15W per-port output is lower than a full 30W independent rating"],
    bestFor: "buyers who need the longest possible cascade distance from a budget-tier extender",
  },
  {
    id: "best-budget-poe-extender-3",
    rank: 3,
    badge: "Best for Single-Device Simplicity",
    name: "CENTROPOWER PoE Extender Ethernet Repeater, 1 Port",
    price: "$14.59",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41lz7zrQqGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07FMNHYP8?tag=deskfinds0d-20",
    description: "This extender's listing specifically states daisy-chain support with up to 4 units for a maximum distance of 400 meters, a solid single-port cascade option at a low price. Its explicit compatibility note clarifies it works only with standard PoE equipment like IP cameras, access points, and VoIP phones, not non-PoE devices like switches or laptops.\n\nCompared to the multi-port picks above, this one's single-port simplicity is specifically framed for situations where power lines are unavailable or far from outlets, suitable for hotels, schools, and other buildings needing straightforward single-device extension.\n\nBest for buyers who want a simple, no-frills single-device extender for a straightforward installation.",
    specs: ["1 port, IEEE 802.3af compliant, 100Mbps", "Daisy chain up to 4 units for 400m total", "Automatic detection and installation protection"],
    pros: ["Straightforward single-device design keeps installation simple", "Daisy chain reaches 400m total across 4 units", "Explicit compatibility guidance prevents misuse with non-PoE devices"],
    cons: ["100Mbps speed only, not Gigabit", "Single port only, doesn't power multiple devices from one unit"],
    bestFor: "buyers who want a simple, no-frills single-device extender for a straightforward installation",
  },
  {
    id: "best-budget-poe-extender-4",
    rank: 4,
    badge: "Best for Multiple Devices",
    name: "MokerLink 4 Port PoE Extender",
    price: "$16.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31YMZnLyzhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B5QWT3R1?tag=deskfinds0d-20",
    description: "This extender's listing specifically states an unmanaged plug-and-play design with automatic power detection, powering up to three PoE devices from a single input without requiring configuration or a local power adapter. Its 3-level cascading support increases PoE coverage at a genuinely low cost for a basic multi-device installation.\n\nCompared to the single and dual-port picks above, this one's ability to power three separate devices from one unit delivers meaningfully more value per dollar for a buyer needing to extend multiple nearby devices rather than just one or two.\n\nBest for buyers who need to power three separate devices at the lowest cost per device in this comparison.",
    specs: ["1 in 3 out, powers 3 separate devices", "IEEE 802.3af/at, average 8W per port", "3-level cascading, wall and DIN-rail mount"],
    pros: ["Powers three separate devices from a single unit at a low price", "No local power adapter needed, powered entirely by PoE network", "3-level cascading increases coverage at low cost"],
    cons: ["100Mbps speed only, not Gigabit", "8W average per port is lower wattage than the single-port picks"],
    bestFor: "buyers who need to power three separate devices at the lowest cost per device",
  }
];

export const howWeEvaluated = [
  {
    "title": "Cost per usable port",
    "description": "We compared the price against the number of powered outputs. The CENTROPOWER has one port and the Revotech has two at 15W each, while the MokerLink delivers three outputs. At this level, paying for a port you cannot power is the main way to waste money. We also looked at how clearly each page admits its limits."
  },
  {
    "title": "Speed caps at low prices",
    "description": "Cheaper units often cap at 100Mbps. The Revotech and CENTROPOWER are 10/100, while DSLRKIT is Gigabit. We treated 100Mbps as fine for 1080p cameras but a real limit for APs, and marked it in each pick. If an old network is Fast Ethernet end to end, this limit barely matters, but a Gigabit switch upstream makes it the weak link in the chain."
  },
  {
    "title": "Source compatibility",
    "description": "The DSLRKIT accepts active 802.3af/at or 48-57V passive sources, which is rare at this tier. We credited flexible input, since many buyers have a mix of old injectors and switches. A cheap switch that accepts both source types spares you from replacing a drawer of injectors you already own."
  },
  {
    "title": "Cascade claims",
    "description": "The Revotech lists 6 units for 700m and the CENTROPOWER lists 4 units for 400m. These are the maximum, not the typical, so we discounted them when the power per unit was low. Hop count alone says nothing about the voltage left at the end of the run, so we discounted cascade claims on low-wattage inputs."
  },
  {
    "title": "Protection and support",
    "description": "We checked for auto-detection and protection features. The CENTROPOWER lists installation protection with automatic detection, and the DSLRKIT has an outdoor-rated case. These features reduce the chance of damage from a wrong connection. We treated those as small but real insurance on gear that will be cabled by a beginner."
  }
];

export const howToChoose = [
  {
    "subheading": "By What You Actually Need",
    "intro": "On a tight budget, you choose between speed, port count, and weatherproofing.",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Gigabit speed and outdoor housing",
          "DSLRKIT 2-Port Outdoor Gigabit Passthrough Switch, at 1000Mbps"
        ],
        [
          "Two cameras at modest cost",
          "Revotech 2 Port (POE5003), at 15W per output"
        ],
        [
          "The simplest one-camera hop to 100m",
          "CENTROPOWER 1 Port Ethernet Repeater, at 100Mbps"
        ],
        [
          "Three devices from one 30W input",
          "MokerLink 4 Port Extender, at an 8W average per port"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "All four sit under $20, so each tier is a small difference.",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $15, Gigabit",
          "DSLRKIT, the cheapest gigabit pick"
        ],
        [
          "Under $15, single port",
          "CENTROPOWER, for one camera"
        ],
        [
          "Under $20, two outputs",
          "Revotech, with 6-unit cascade support"
        ],
        [
          "Under $20, three outputs",
          "MokerLink 4 Port, for a trio of low-draw devices"
        ]
      ]
    }
  },
  {
    "subheading": "Gigabit vs 100Mbps at the Low End",
    "intro": "Under $20, you rarely get both speed and ports.",
    "cards": [
      {
        "label": "Gigabit (DSLRKIT)",
        "text": "Only the DSLRKIT here reaches 1000Mbps. It keeps headroom for a 4K camera or AP."
      },
      {
        "label": "100Mbps (Revotech, CENTROPOWER, MokerLink 4 Port)",
        "text": "Enough for 1080p cameras, and sometimes even four of them. Not enough if the device later gets upgraded."
      }
    ],
    "note": "If the device is a camera, 100Mbps is fine; for an AP, buy the DSLRKIT."
  },
  {
    "subheading": "By Source You Already Own",
    "intro": "An extender is only as good as the source feeding it.",
    "table": {
      "headers": [
        "Your source",
        "Recommended pick"
      ],
      "rows": [
        [
          "A passive 48 to 57V injector",
          "DSLRKIT, as it accepts passive sources"
        ],
        [
          "A standard 802.3af switch",
          "CENTROPOWER, which is built for 802.3af"
        ],
        [
          "An 802.3at switch with 30W available",
          "Revotech, which splits 30W into two 15W outputs"
        ]
      ]
    }
  },
  {
    "subheading": "For a Rental Apartment Camera Specifically",
    "intro": "Renters want small, quick installs with no holes.",
    "cards": [
      {
        "label": "Look for",
        "text": "A single compact unit, a safe fallback if the source is unsuitable, and a clear power rating."
      },
      {
        "label": "In this comparison",
        "text": "The CENTROPOWER installs in minutes for a single hallway camera, while the MokerLink 4 Port handles three devices."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Since every pick is under $20, spending more means leaving this guide.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need 4 or more cameras or higher power. See the 30W and 2-port gigabit guides for better units."
      },
      {
        "label": "Save if",
        "text": "Your devices are basic. The CENTROPOWER and DSLRKIT cover most one or two device installs."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A Budget Extender's Real Value Depends on Price Per Device Powered, Not Just the Sticker Price Alone",
    "explanation": "The MokerLink pick's under $20 price powers three separate devices from one unit, working out to a lower true cost per device than the DSLRKIT pick's under $15 price for just two ports, even though the DSLRKIT has the lower headline price. This matters significantly if you need to extend multiple devices, since comparing extenders by device count divided by price reveals which option actually delivers better value for your specific need. Calculate the effective price per device powered, not just the sticker price, before assuming the cheapest-priced extender is automatically the best value for a multi-device installation."
  },
  {
    "criterion": "Support for Both Active and Passive PoE Sources Provides Real Flexibility if You're Unsure of Your Existing Equipment",
    "explanation": "The DSLRKIT pick specifically states compatibility with both standard IEEE 802.3af/at active PoE and DC48V-57V passive PoE sources, a broader compatibility range than extenders supporting only one type, which matters if you're not certain whether your existing PoE switch or injector uses active negotiation or passive power delivery. This matters significantly if you're retrofitting an extender onto existing equipment of uncertain PoE type, and matters less if you know your PoE source is a specific, verified standard. Check whether a budget extender specifically supports both active and passive PoE sources if you're uncertain about your existing PoE infrastructure's exact type."
  },
  {
    "criterion": "Cascade Distance Figures at the Budget Tier Still Require Purchasing Multiple Units to Reach the Maximum Stated Distance",
    "explanation": "The Revotech pick's specifically stated 2296ft maximum distance requires cascading 6 separate units together, not a single extender's individual range, meaning the real cost to reach that maximum distance is six times the single-unit price, not the headline per-unit price alone. This matters if you're budgeting for a genuinely long-distance installation using a budget extender, since the total cost for the full cascade chain adds up meaningfully even at a low per-unit price. Calculate the total cost across all units needed to reach your actual required distance before assuming a budget extender's low per-unit price reflects your total project cost."
  },
  {
    "criterion": "Automatic Device Detection and Installation Protection Reduce Risk for Less Experienced Installers",
    "explanation": "The Revotech and CENTROPOWER picks both specifically state automatic detection and protection features that safeguard connected PoE equipment from damage due to incorrect installation, a genuinely valuable safety net for buyers newer to PoE installations who might not know to verify compatibility before connecting. This matters if you're installing PoE equipment for the first time or delegating installation to someone less experienced, and matters less if you're an experienced installer who already carefully verifies compatibility before connecting any device. Check for a specifically named automatic protection feature if installation error risk is a real concern for your specific situation."
  },
  {
    "criterion": "A Single-Port Extender's Simplicity Can Be an Advantage, Not Just a Limitation, for a Basic One-Device Need",
    "explanation": "The CENTROPOWER 1-Port pick's straightforward single-device design, specifically framed for situations where power lines are unavailable, keeps installation simple and predictable for a buyer who genuinely only needs to extend one device, rather than paying for multi-port capability they won't use. This matters if your actual need is extending just one camera or access point, where a single-port extender's simplicity avoids unnecessary complexity, and matters less if you have multiple devices needing extension where a multi-port unit delivers better value. Match the extender's port count to your actual number of devices needing extension, rather than defaulting to a multi-port unit when a simpler single-port extender would serve your actual need just as well."
  }
];

export const faq = [
  {
    "q": "Can a budget PoE extender fry my camera?",
    "a": "Rarely, but a mismatch can. The DSLRKIT accepts both active and passive sources, so check the voltage. A 48V to 57V passive source into a 24V device is the usual cause of damage, so verify your camera's label. A wrong source voltage is the one mistake that can be expensive."
  },
  {
    "q": "What is the main mistake on a budget extender?",
    "a": "Counting ports instead of watts. The Revotech splits 30W into two 15W outputs, and the MokerLink averages 8W per port, so a camera with IR can exceed those limits. Check your camera's peak draw. Leave at least 20 percent of the budget spare."
  },
  {
    "q": "Is the DSLRKIT worth paying more than the CENTROPOWER?",
    "a": "Yes if you need Gigabit or outdoor use. The CENTROPOWER is 100Mbps with one port, so for a basic camera it is perfectly fine and saves a little money. Read the label on the camera or its power brick first."
  },
  {
    "q": "How do I cascade the Revotech?",
    "a": "Connect the second unit to the first's output. The listing supports 6 units to 700m, but each hop reduces the available power. Use a 30W source and test the last device at night with infrared on. Label each hop and its power so you can troubleshoot later."
  },
  {
    "q": "Do these extenders work with 24V passive PoE cameras?",
    "a": "Not by default. The listed standards are 802.3af/at, and the DSLRKIT's passive support is 48V to 57V. A 24V camera needs its own injector. Check the voltage before connecting anything. Check the connector wiring too."
  },
  {
    "q": "How should I weatherproof a budget extender?",
    "a": "If it is not rated, place it in a sealed weather box, add a drip loop, and use dielectric grease on connectors. The DSLRKIT lists an outdoor housing, but caps and drip loops are still worth adding. Recheck seals once a season."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-1-port-poe-extender", "title": "Best 1-Port PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" },
  { "href": "/guide/best-4-port-poe-extender", "title": "Best 4-Port PoE Extenders" }
];
