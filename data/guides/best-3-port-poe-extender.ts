export const guideSlug = "best-3-port-poe-extender";
export const guideTitle = "4 Best 3 Port PoE Extenders in 2026";
export const metaTitle = "Best 3 Port PoE Extenders";
export const metaDescription = "We compared 3-port PoE extenders by real power source flexibility, since one listing switches between PoE extender, network extender, and PoE switch modes.";
export const mainKeyword = "best 3 port poe extender";
export const introParagraphs = [
  "A 3-port PoE extender, typically one PoE input splitting to two outputs, sits between a simple 2-port unit and a larger 4-port model, giving a middle-ground option for powering two nearby devices while keeping a dedicated port free for other network needs.",
  "We compared this lineup on power source flexibility, per-port wattage, and warranty support, since one listing specifically functions as three different device types (a PoE extender, a network extender, or a PoE switch) depending entirely on what power source you connect to it."
];
export const lastUpdated = "2026-09-15";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/311lDEFB-KL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-3-port-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "NICGIGA 1 in 3 Out Gigabit PoE Extender",
    price: "$26.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/311lDEFB-KL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJBXM9LK?tag=deskfinds0d-20",
    description: "This extender's listing specifically states a 1-year warranty backed by lifetime technical support and an unconditional 30-day return policy, a more comprehensive support commitment than the other picks in this comparison at a similarly accessible price. Its full 1000Mbps Gigabit transmission avoids the lag and latency of a Fast Ethernet-only alternative.\n\nCompared to the BV-Tech and MokerLink picks below, this one's 2-3 unit cascade support extends coverage while maintaining Gigabit speed, and its specific note that only 48V PoE devices are supported is an honest compatibility disclosure.\n\nBest for buyers who want the strongest warranty and support commitment with full Gigabit speed.",
    specs: ["1 in 3 out (2 PoE devices), Gigabit 1000Mbps", "2-3 unit cascade support, auto-detection", "1-year warranty, lifetime support, 30-day returns"],
    pros: ["Strongest warranty and support commitment in this comparison", "Full Gigabit speed avoids lag and latency", "Unconditional 30-day return policy reduces purchase risk"],
    cons: ["Explicitly limited to 48V PoE devices, not a broader voltage range", "No outdoor waterproof rating for exposed installations"],
    bestFor: "buyers who want the strongest warranty and support commitment with full Gigabit speed",
  },
  {
    id: "best-3-port-poe-extender-2",
    rank: 2,
    badge: "Best for Small Business",
    name: "BV-Tech 3-Port PoE Extender",
    price: "$21.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51Oej9JQUOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5P5Z9B5?tag=deskfinds0d-20",
    description: "This extender's listing specifically describes a 3-port architecture configured as 1 dedicated uplink port and 2 PoE ports sharing a 30W total power budget, a genuinely business-oriented design aimed at small business or workgroup environments. Its full-rate Gigabit throughput is specifically stated to hold across the entire 100-meter extended distance without dropping to a lower speed.\n\nCompared to the NICGIGA pick above, this one's Universal PoE+ compliance and space-saving wall-mountable design are specifically marketed toward deploying IP surveillance cameras, wireless access points, and IP phones in a small business setting.\n\nBest for buyers deploying surveillance cameras or access points in a small business or workgroup environment.",
    specs: ["1 uplink port + 2 PoE ports, 30W shared budget", "Full Gigabit speed maintained at 100m extension", "IEEE 802.3af/at compliant, wall-mountable"],
    pros: ["Full Gigabit speed maintained across the entire extended distance", "Dedicated uplink port architecture suits small business deployments", "Auto-sensing technology protects hardware from incorrect installation"],
    cons: ["30W total budget is shared across both PoE ports, not independent", "No stated warranty length or ongoing support commitment"],
    bestFor: "buyers deploying surveillance cameras or access points in a small business environment",
  },
  {
    id: "best-3-port-poe-extender-3",
    rank: 3,
    badge: "Best for Flexible Power Modes",
    name: "MokerLink 3 Ports Gigabit PoE Passthrough Switch",
    price: "$29.78",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41vLdQ2Wb0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BJK63FDM?tag=deskfinds0d-20",
    description: "This switch's listing specifically describes a genuinely three-in-one design: it functions as a PoE extender, a network extender, or a PoE switch depending entirely on what power source you connect, DC 12V for network extension, DC 37-57V for PoE switch mode, or standard PoE input for extension. Its 12Gbps switching bandwidth and full Gigabit auto-adaptive speed across all ports outpace some competing extenders.\n\nCompared to the NICGIGA and BV-Tech picks above, this one's port isolation dial switch and genuine multi-mode flexibility make it the most adaptable pick in this comparison for changing network needs over time.\n\nBest for buyers who want a single device that can adapt between PoE extension, network extension, and PoE switch roles.",
    specs: ["Three-in-one: PoE extender, network extender, or PoE switch", "12Gbps bandwidth, full Gigabit auto-adaptive", "Port isolation dial switch, metal case with LED indicator"],
    pros: ["Genuinely adapts between three different device roles based on power source", "12Gbps switching bandwidth is higher than the other picks in this comparison", "Port isolation dial switch improves network security when needed"],
    cons: ["Highest price in this comparison at under $30", "Power supply is not included, requiring a separate purchase for non-PoE modes"],
    bestFor: "buyers who want a single device that can adapt between PoE extension, network extension, and PoE switch roles",
  },
  {
    id: "best-3-port-poe-extender-4",
    rank: 4,
    badge: "Best Value",
    name: "Ztyuav 3 Port Gigabit PoE Extender",
    price: "$13.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31ew-MrvwRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H32QFSBZ?tag=deskfinds0d-20",
    description: "This extender's listing specifically states a One Key VLAN mode controlled by a dipswitch, letting its two output ports isolate from each other to improve network security when enabled, a genuinely useful toggle feature at the lowest price in this comparison. Its LED port status display helps with quick troubleshooting during installation.\n\nCompared to the NICGIGA, BV-Tech, and MokerLink picks above, this one's ABS polymer casing is specifically described as durable and dustproof for desktop indoor use, and its lowest price makes it the most accessible entry point for a basic two-device PoE extension.\n\nBest for buyers who want the lowest price with an optional VLAN isolation toggle for basic network security.",
    specs: ["1 in 2 out, 30W input, 24W max output", "One Key VLAN mode via dipswitch", "LED port status display, ABS polymer casing"],
    pros: ["Lowest price in this comparison at under $15", "Optional VLAN isolation toggle improves security when needed", "LED port status display simplifies installation troubleshooting"],
    cons: ["No stated warranty length or ongoing support commitment", "Casing is designed for indoor desktop use, not outdoor exposure"],
    bestFor: "buyers who want the lowest price with an optional VLAN isolation toggle",
  }
];

export const howWeEvaluated = [
  {
    "title": "Output count vs shared wattage",
    "description": "A 3-port extender usually has one uplink and two PoE outputs, so the shared budget decides what it can run. The BV-Tech lists a 30W shared budget and the Ztyuav 24W max output. We scored how clearly each listing disclosed that gap instead of promising three powered devices."
  },
  {
    "title": "Gigabit and switching behavior",
    "description": "We checked whether each unit holds full Gigabit and how it behaves as a switch. The MokerLink lists 12Gbps switching with auto-adaptive Gigabit, and the Ztyuav offers a dipswitch VLAN mode. Features that isolate a port got credit only when the listing explained the use."
  },
  {
    "title": "Cascade and reach",
    "description": "We compared stated cascade support: NICGIGA lists 2-3 units, and the BV-Tech maintains Gigabit at a 100m hop. At this port count a second extender is common, so the chain limit was weighted over peak speed, and any claim without a stated power at the far end was discounted."
  },
  {
    "title": "Fault visibility",
    "description": "We looked for status LEDs, port isolation diagnostics, and any auto-detect. The Ztyuav has LED port indicators and the MokerLink has isolation diagnostics, both of which cut the guesswork when a camera goes dark at night and you are standing on a ladder trying to work out which port failed."
  },
  {
    "title": "Return and support terms",
    "description": "We compared the written policies. NICGIGA lists a 1-year warranty, lifetime support, and a 30-day return, which counted for a lot on a mid-run box that is hard to swap once mounted. Written terms beat vague promises of good service every time we compared them."
  }
];

export const howToChoose = [
  {
    "subheading": "By Use Case",
    "intro": "The third port changes how you connect devices, so start from the layout you need.",
    "table": {
      "headers": [
        "Your layout",
        "Recommended pick"
      ],
      "rows": [
        [
          "Two cameras plus a local laptop jack at the far end",
          "NICGIGA 1 in 3 Out, which pairs two PoE ports with a data port"
        ],
        [
          "A far-end shed with two cameras and a shared 30W budget",
          "BV-Tech 3-Port, which keeps Gigabit across a 100m hop"
        ],
        [
          "A flexible switch that can also act as a plain extender",
          "MokerLink 3 Ports Passthrough Switch, with three-in-one modes"
        ],
        [
          "Separating camera traffic from the main network on a budget",
          "Ztyuav 3 Port, using the dipswitch VLAN mode"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Prices cluster under $30, so features decide.",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $15",
          "Ztyuav 3 Port, the cheapest of the four with an LED status display"
        ],
        [
          "Under $25",
          "BV-Tech 3-Port, with a stated 30W shared budget"
        ],
        [
          "Under $30",
          "NICGIGA 1 in 3 Out, which adds lifetime support and a 30-day return"
        ],
        [
          "Just under $30",
          "MokerLink 3 Ports Passthrough Switch, the most flexible of the four"
        ]
      ]
    }
  },
  {
    "subheading": "Extender Mode vs Switch Mode",
    "intro": "The three-in-one MokerLink makes this choice explicit, but it applies to all.",
    "cards": [
      {
        "label": "Extender mode",
        "text": "This relays the upstream link and power to downstream devices over a long hop. It is the right mode for the NICGIGA and BV-Tech, where the whole point is distance."
      },
      {
        "label": "Switch mode",
        "text": "The MokerLink 3 Ports can act as a normal PoE switch when the run is short. It also helps to isolate ports so a flaky camera does not take down the other one."
      }
    ],
    "note": "If you only need distance, any of the four works; if you want one box that might later become a switch, the MokerLink is the safer buy."
  },
  {
    "subheading": "By Shared Budget",
    "intro": "A 30W input feeds the extender and both outputs, so the headroom is smaller than a 3-port label suggests.",
    "table": {
      "headers": [
        "Your loads",
        "Recommended pick"
      ],
      "rows": [
        [
          "Two cameras drawing 8W to 10W each",
          "BV-Tech 3-Port, as its 30W shared budget covers two modest loads"
        ],
        [
          "One camera at 12W and one low-draw sensor",
          "Ztyuav 3 Port, at 24W max output"
        ],
        [
          "A single heavier device and a spare port",
          "NICGIGA 1 in 3 Out, which runs two PoE devices on its listed power"
        ]
      ]
    }
  },
  {
    "subheading": "For a Backyard Office Run Specifically",
    "intro": "A backyard office usually needs a camera outside and an AP inside the shed.",
    "cards": [
      {
        "label": "Look for",
        "text": "Two PoE outputs with a clear total budget, plus a Gigabit uplink for the AP. Outdoor protection matters if the unit lives on the wall."
      },
      {
        "label": "In this comparison",
        "text": "The BV-Tech pairs Gigabit with two PoE ports for a camera and AP, and the NICGIGA adds lifetime support for a hard-to-reach mount."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "None of these exceeds 30W, so spending more buys features, not power.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want port isolation and switching modes. The MokerLink 3 Ports costs the most here and is the only one with diagnostics; the 4-port guide offers more ports."
      },
      {
        "label": "Save if",
        "text": "You only need distance. The NICGIGA and Ztyuav extend a Gigabit link with the least spend."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A Multi-Mode Device's Actual Function Depends Entirely on Which Power Source You Connect to It",
    "explanation": "The MokerLink pick specifically functions as a PoE extender, a network extender, or a PoE switch depending on whether you supply standard PoE input, DC 12V, or DC 37-57V power, meaning the same physical device serves genuinely different roles based purely on its power source rather than a software or hardware configuration change. This matters if you want one device that can adapt to different roles as your network setup changes over time, and matters less if your PoE extension need is fixed and unlikely to change. Understand that a multi-mode device's listed capabilities require the correct matching power source for each specific mode, and factor in whether you already have or need to purchase that power source separately."
  },
  {
    "criterion": "A Shared Power Budget Across Two PoE Ports Means Combined Device Draw Matters More Than Each Port's Individual Rating",
    "explanation": "The BV-Tech pick specifically states its 2 PoE ports share a 30W total power budget rather than each port independently supporting up to 30W simultaneously, meaning the combined draw of both connected devices must stay within that shared 30W ceiling. This matters significantly if you're connecting two devices that each draw close to 15W or more, since exceeding the shared budget could result in one or both devices not receiving adequate power. Check whether a 3-port extender's power budget is shared across its outputs or independently allocated to each, and confirm your two devices' combined wattage stays within that actual shared limit."
  },
  {
    "criterion": "A Dedicated Uplink Port Architecture Is Specifically Designed for Small Business Network Topology, Not Just Extra Connectivity",
    "explanation": "The BV-Tech pick's specifically described 1 dedicated uplink port plus 2 PoE ports architecture is built around a small business or workgroup network topology where the uplink connects back to a main switch or router while the PoE ports serve local devices, a more purposeful design than a generic port arrangement. This matters if you're deploying in a small business setting with an existing network topology this architecture matches, and matters less for a simple home installation where any port arrangement would work equally well. Consider whether a 3-port extender's specific port architecture (uplink plus PoE outputs, versus a simple 1-in-2-out repeater) matches your actual network topology before choosing based on port count alone."
  },
  {
    "criterion": "An Optional VLAN Isolation Toggle Provides Security Flexibility Without Forcing It as a Default Setting",
    "explanation": "The Ztyuav pick's specifically named One Key VLAN mode, controlled by a dipswitch, lets you enable port isolation only when you actually need that network security feature, rather than a fixed VLAN configuration that's always on or always off regardless of your specific installation's needs. This matters if your network security needs vary between different installations or change over time, and matters less if you have a consistent, unchanging security requirement across all your PoE extender deployments. Check whether a 3-port extender's VLAN or isolation feature is a fixed setting or a toggleable option if flexibility to enable or disable it as needed matters for your use case."
  },
  {
    "criterion": "A Longer Stated Warranty and Documented Support Commitment Provide Real Recourse for a Device Serving Two Connected Devices",
    "explanation": "The NICGIGA pick's specifically stated 1-year warranty, lifetime technical support, and unconditional 30-day return policy provide more comprehensive backing than a bare-minimum or unstated warranty on a similarly priced 3-port extender, which matters more here than on a single-port device since a failure affects two connected devices simultaneously rather than just one. This matters if you want assurance beyond the purchase price for a device supporting two devices' connectivity, and matters less if you're comfortable simply replacing an inexpensive unit without pursuing warranty support. Check a 3-port extender's specific warranty and support terms, especially since it affects two connected devices rather than one, before assuming any similarly priced unit offers the same backing."
  }
];

export const faq = [
  {
    "q": "Does a 3-port PoE extender really power three devices?",
    "a": "Usually it powers two. The BV-Tech lists one uplink plus two PoE ports, and NICGIGA's 1 in 3 out powers two PoE devices. The third port is typically data only, so count PoE outputs rather than the port total on the box."
  },
  {
    "q": "What mistake do buyers make with 30W extenders?",
    "a": "They split 30W evenly and assume two 15W cameras are fine. The extender itself uses some power, and the Ztyuav lists 24W max output, so two cameras near 12W each leave very little headroom for infrared at night."
  },
  {
    "q": "Is the MokerLink worth more than the NICGIGA?",
    "a": "If you want switch mode, port isolation, and 12Gbps switching, yes. The NICGIGA wins on cost and support terms, but it is only an extender. A simple camera and AP run rarely needs the extra features."
  },
  {
    "q": "How do I set up the Ztyuav's VLAN mode?",
    "a": "Flip the dipswitch on the unit to enable its One Key VLAN mode, which separates the downstream ports from each other. Confirm each port's LED lights before mounting, and note the setting on a label, since the switch is easy to forget later."
  },
  {
    "q": "Can I cascade two 3-port extenders?",
    "a": "NICGIGA lists 2-3 unit cascade support. Each hop uses part of the input power, so a second unit leaves less for the far devices. Plan the last unit's loads at no more than the lowest budget in the chain."
  },
  {
    "q": "Why does my camera reboot at night on an extender?",
    "a": "Infrared illuminators raise power draw after dark. A 30W shared budget can dip, so cameras that look fine in daylight reboot at night. Check the camera's maximum draw with IR on, and size the extender for that number."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" },
  { "href": "/guide/best-4-port-poe-extender", "title": "Best 4-Port PoE Extenders" },
  { "href": "/guide/best-gigabit-poe-extender", "title": "Best Gigabit PoE Extenders" }
];
