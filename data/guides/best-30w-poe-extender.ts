export const guideSlug = "best-30w-poe-extender";
export const guideTitle = "4 Best 30W PoE Extenders in 2026";
export const metaTitle = "Best 30W PoE Extenders";
export const metaDescription = "We compared 30W PoE extenders by real output wattage, since a 30W input rating doesn't always mean a full 30W actually reaches your connected device.";
export const mainKeyword = "best 30w poe extender";
export const introParagraphs = [
  "A 30W PoE extender is sized specifically for IEEE 802.3at (PoE+) devices like PTZ cameras and higher-power access points that exceed the older 802.3af standard's 15.4W ceiling, but a 30W input rating doesn't always translate to a full 30W actually delivered to your connected device.",
  "We compared this lineup on real output-versus-input wattage, since one listing specifically discloses 30W input but only 24W total output, a genuine 6W gap worth knowing before assuming your device gets the full rated power."
];
export const lastUpdated = "2026-09-16";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31GK+AcsDUL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-30w-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "Tliffpaco 2-Port Gigabit PoE Extender/Switch",
    price: "$13.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31GK+AcsDUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GS3NHTQK?tag=deskfinds0d-20",
    description: "This extender's listing specifically discloses 30W input power intelligently allocated between two output ports at up to 25.5W per port, a transparent power-sharing disclosure rather than implying each port independently gets the full 30W. Its 2-level cascade support reaches up to 300 meters total distance while maintaining full Gigabit 1000Mbps speed.\n\nCompared to the Davuaz picks below, this one's intelligent power allocation between Port 1 and Port 2 specifically adjusts based on connected device needs, a more sophisticated power management approach at the lowest price in this comparison.\n\nBest for buyers who want intelligent power allocation across two devices at full Gigabit speed and the lowest price.",
    specs: ["30W input, 25.5W max per port, intelligent allocation", "Gigabit 1000Mbps, 2-level cascade to 300m", "IEEE 802.3af/at, no local power required"],
    pros: ["Lowest price in this comparison at under $15", "Intelligent power allocation adjusts to connected device needs", "Maintains full Gigabit speed unlike the 100Mbps picks in this comparison"],
    cons: ["Only 2 output ports, fewer than the Davuaz picks' 3 ports", "25.5W max per port is slightly below the full 30W input rating"],
    bestFor: "buyers who want intelligent power allocation across two devices at full Gigabit speed",
  },
  {
    id: "best-30w-poe-extender-2",
    rank: 2,
    badge: "Best for Extended Range",
    name: "Davuaz Outdoor PoE Extender (100Mbps, 250m mode)",
    price: "$13.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21cVExFNmpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGV1JP7D?tag=deskfinds0d-20",
    description: "This extender's listing specifically states a switch to enter extension mode, reaching 250 meters at a reduced 10Mbps, versus 100 meters at the standard 100Mbps rate, giving genuine flexibility to trade speed for distance on the same physical unit. Its 1-in-3-out design powers three PoE devices simultaneously from a single 30W input, with IP66 waterproof housing for outdoor use.\n\nCompared to the Tliffpaco pick above, this one's specifically stated 24-hour worry-free guarantee with a hassle-free refund or replacement offers a concrete support commitment at a similarly low price.\n\nBest for buyers who want switchable extended range up to 250m at the same low price as the standard picks.",
    specs: ["30W input, powers 3 devices, switchable extend mode", "100m at 100Mbps or 250m at 10Mbps", "IP66 waterproof, 24-hour guarantee"],
    pros: ["Switchable extend mode reaches 250m when needed", "Powers three devices from a single 30W input", "24-hour worry-free guarantee with hassle-free refund or replacement"],
    cons: ["100Mbps speed only, not Gigabit like the Tliffpaco pick", "Extended mode reduces speed to just 10Mbps"],
    bestFor: "buyers who want switchable extended range up to 250m at a low price",
  },
  {
    id: "best-30w-poe-extender-3",
    rank: 3,
    badge: "Best Value Gigabit",
    name: "Davuaz Outdoor PoE Gigabit Extender (30W in, 24W out)",
    price: "$16.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21Nx7FbyCBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGV2PB4H?tag=deskfinds0d-20",
    description: "This extender's listing specifically discloses 30W power input but a total output of up to 24W, an honest 6W gap disclosure rather than implying the full input wattage reaches connected devices, while maintaining full 1000Mbps Gigabit speed across its 1-in-3-out design. Its IP66 waterproof housing extends the network up to 330ft for outdoor installations.\n\nCompared to the 100Mbps Davuaz pick above, this one trades the switchable extended-range mode for full Gigabit speed at all times, a better fit for bandwidth-sensitive devices like modern IP cameras.\n\nBest for buyers who want full Gigabit speed across three devices with honest input-versus-output wattage disclosure.",
    specs: ["30W input, 24W total output (disclosed gap)", "Full Gigabit 1000Mbps, powers 3 devices", "IP66 waterproof, 330ft (100m) extension"],
    pros: ["Honest disclosure of the input-versus-output wattage gap", "Full Gigabit speed maintained across all three output ports", "24-hour worry-free guarantee with hassle-free refund or replacement"],
    cons: ["No switchable extended-range mode unlike its 100Mbps sibling", "24W total output is shared across three ports, not independent"],
    bestFor: "buyers who want full Gigabit speed across three devices with honest wattage disclosure",
  },
  {
    id: "best-30w-poe-extender-4",
    rank: 4,
    badge: "Best Build Quality",
    name: "WAVLINK IP67 Outdoor Gigabit PoE Extender",
    price: "$39.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/318IrvcWbHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H73SW869?tag=deskfinds0d-20",
    description: "This extender's listing specifically states a rugged, industrial-grade metal housing where all cable ports are enclosed and protected with waterproof caps, a more robust IP67-rated build than the plastic-housed picks in this comparison. Its 30W IEEE 802.3af/at output specifically supports high-power devices like wireless access points, base stations, and network cameras.\n\nCompared to the Tliffpaco and Davuaz picks above, this one's daisy-chain support for up to 2 units reaching 600 meters total, combined with metal construction, targets buyers prioritizing build quality and outdoor durability over the lowest possible price.\n\nBest for buyers who want a metal housing with IP67 waterproofing for a single high-power device at extended distance.",
    specs: ["30W IEEE 802.3af/at, metal IP67 housing", "1-in-1-out, daisy chain to 600m total", "Waterproof caps on all cable ports, wall and pole mount"],
    pros: ["Metal IP67 housing is more durable than the plastic-cased picks", "Daisy-chain support reaches 600m total distance", "Waterproof caps specifically protect cable connection points"],
    cons: ["Highest price in this comparison at under $40", "Single output port only, doesn't power multiple devices like the Davuaz picks"],
    bestFor: "buyers who want a metal housing with IP67 waterproofing for a single high-power device",
  }
];

export const howWeEvaluated = [
  {
    "title": "Input vs usable output",
    "description": "A 30W input is not 30W for your devices. We compared output claims: the Tliffpaco allows 25.5W per port, while the Davuaz Gigabit explicitly discloses a 24W total output. Listings that admit the gap scored above those that imply the full 30W is available."
  },
  {
    "title": "Speed and distance tradeoff",
    "description": "The Davuaz 100Mbps model offers 100m at 100Mbps or 250m at 10Mbps, while the Tliffpaco holds Gigabit through a 2-level cascade to 300m. At this wattage the speed you keep after the hop mattered more than headline distance. We also noted that 10Mbps suits only a basic single camera stream, so extended range counted as a niche feature at this tier."
  },
  {
    "title": "Daisy chain limits",
    "description": "The WAVLINK lists a chain to 600m total, the Tliffpaco to 300m. Chaining on a 30W input leaves less at each hop, so we only rewarded long chains with the stated device count to match. A 600m claim on a 30W input leaves little for the far device, so a chain only counted when a usable output power at the last hop was plausible."
  },
  {
    "title": "Weather rating",
    "description": "We read IP66 on both Davuaz units and IP67 on the WAVLINK with caps on all cable ports. Outdoor 30W extenders are mostly mounted on poles, so a rating without waterproof caps did not count. Moisture is the main killer of cheap extenders, and a rating alone does not seal a loose cable gland."
  },
  {
    "title": "Fit for 802.3af vs 802.3at sources",
    "description": "We compared which sources the listings accept. The WAVLINK and Tliffpaco state 802.3af/at support, so they can sit behind either type of switch. A 30W input needs an at-class source to deliver anything near its limit. We also checked that at-class sources are common on modern small-business switches."
  }
];

export const howToChoose = [
  {
    "subheading": "By Load Per Port",
    "intro": "The most useful number at a 30W input is what you can pull from each output.",
    "table": {
      "headers": [
        "Your device draw",
        "Recommended pick"
      ],
      "rows": [
        [
          "One camera at 12W to 25W on a short hop",
          "Tliffpaco 2-Port Gigabit, with 25.5W max per port"
        ],
        [
          "Three low-draw devices such as sensors or small cameras",
          "Davuaz Outdoor PoE Extender (100Mbps, powering three devices at 100Mbps"
        ],
        [
          "Two cameras with a total near 20W at Gigabit",
          "Davuaz Outdoor PoE Gigabit Gigabit Extender, with 24W total output"
        ],
        [
          "One device at the end of a long daisy chain",
          "WAVLINK IP67 Outdoor, using a 1-in-1-out chain to 600m"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The 30W class is cheap, with only the WAVLINK costing more.",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $15, 30W Gigabit",
          "Tliffpaco 2-Port Gigabit, with intelligent allocation"
        ],
        [
          "Under $15, 100Mbps with a long mode",
          "Davuaz Outdoor PoE Extender (100Mbps, with a 250m switch"
        ],
        [
          "Under $20, Gigabit outdoor",
          "Davuaz Outdoor PoE Gigabit Gigabit, with IP66"
        ],
        [
          "Under $40, IP67 and 600m",
          "WAVLINK IP67, with waterproof caps and a long chain"
        ]
      ]
    }
  },
  {
    "subheading": "Gigabit vs 100Mbps With Extended Mode",
    "intro": "The 30W class splits into two types of extender, and the question is how you will use the link.",
    "cards": [
      {
        "label": "Gigabit (Tliffpaco, Davuaz Outdoor PoE Gigabit, WAVLINK)",
        "text": "Full 1000Mbps works for 4K cameras and APs, and holds speed through the first hop. Pick this when the far end is a fast device."
      },
      {
        "label": "100Mbps with a 250m toggle (Davuaz Outdoor PoE Extender (100Mbps)",
        "text": "The switch gives 100m at 100Mbps or 250m at 10Mbps. At 10Mbps you get a basic camera stream only, so it only makes sense for a single modest device."
      }
    ],
    "note": "For most buyers, Gigabit wins; the toggle suits only a single basic camera at the edge of a property."
  },
  {
    "subheading": "By Placement",
    "intro": "Where the box mounts changes the rating you need.",
    "table": {
      "headers": [
        "Placement",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under a soffit or in a covered porch",
          "Tliffpaco 2-Port Gigabit, which has no stated weather rating"
        ],
        [
          "On an open pole or pergola",
          "WAVLINK IP67, with caps on all ports"
        ],
        [
          "On a wall with some rain exposure",
          "Davuaz Outdoor PoE Gigabit Gigabit, at IP66"
        ]
      ]
    }
  },
  {
    "subheading": "For a Driveway Camera Pair Specifically",
    "intro": "Driveway runs are typically long with two cameras at the far end.",
    "cards": [
      {
        "label": "Look for",
        "text": "An output of at least 12W per camera, Gigabit if the cameras are 4K, and an IP rating for the mount."
      },
      {
        "label": "In this comparison",
        "text": "The Davuaz Outdoor PoE Gigabit and the Tliffpaco each cover two modest cameras, and the WAVLINK adds a chain that reaches 600m."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The 30W class gives little room to spend.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need IP67 and a long chain. The WAVLINK costs the most and is the only pick with a 600m chain."
      },
      {
        "label": "Save if",
        "text": "You run one camera. The Tliffpaco and the Davuaz Outdoor PoE Extender (100Mbps cost the least here; the budget extender guide has lower-cost 15W options."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A 30W Input Rating Doesn't Guarantee a Full 30W Reaches Your Connected Device",
    "explanation": "The Davuaz Gigabit pick specifically discloses 30W power input but only up to 24W total output, an honest 6W gap that occurs because some power is consumed internally by the extender itself or lost in the power-sharing process across multiple ports. This matters significantly if your device specifically requires close to the full 30W IEEE 802.3at rating to function correctly, since a device expecting 30W might not receive adequate power from an extender that only outputs 24W total. Check a listing specifically for its output wattage figure, not just its input rating, before assuming your 30W-rated device will receive full power."
  },
  {
    "criterion": "Multi-Port Extenders Share Their Total Wattage Budget Rather Than Giving Each Port the Full Rated Power Independently",
    "explanation": "The Tliffpaco pick specifically states intelligent power allocation between its two ports up to 25.5W max each, meaning the two ports share and dynamically adjust within a combined budget rather than each independently supporting a full 30W simultaneously. This matters if you're connecting two devices that both draw close to the maximum rated wattage, since intelligent allocation might reduce power to one port when the other draws more. Check whether a multi-port extender specifically states independent full-power ports or shared/allocated power across ports before assuming every port can be maxed out at once."
  },
  {
    "criterion": "A Switchable Speed-Versus-Distance Mode Lets One Physical Unit Serve Two Different Installation Needs",
    "explanation": "The Davuaz 100Mbps pick specifically includes a switch to enter extension mode, reaching 250m at 10Mbps instead of the standard 100m at 100Mbps, letting the same physical unit handle either a standard-distance high-bandwidth need or an extended-distance lower-bandwidth need depending on the switch position. This matters if you're not certain in advance which tradeoff a specific installation will need, or if you want one product that can flexibly serve either scenario, and matters less if you have a fixed, known distance and bandwidth requirement. Check whether an extender offers a switchable mode if that flexibility could simplify your equipment planning across multiple installations."
  },
  {
    "criterion": "Metal Housing With Waterproof-Capped Cable Ports Provides Different Durability Than a Plastic Enclosure",
    "explanation": "The WAVLINK pick's rugged, industrial-grade metal housing with waterproof caps on all cable ports offers greater physical durability and more thorough water protection at the connection points than the plastic housings on the Tliffpaco and Davuaz picks, though at a meaningfully higher price. This matters if physical durability and thorough water protection are priorities for your specific outdoor installation, and matters less for a sheltered or lower-exposure location where a plastic housing performs adequately. Weigh a metal housing's durability and cable-port protection against its higher price if your installation doesn't specifically demand that level of build quality."
  },
  {
    "criterion": "A Stated Guarantee Timeframe Gives Concrete, Checkable Recourse Compared to Vague Support Language",
    "explanation": "Both Davuaz picks specifically state a 24-hour worry-free guarantee promising a hassle-free refund or replacement, a concrete timeframe commitment distinct from vague 'customer satisfaction' language that doesn't specify how quickly you can expect a resolution if a problem arises. This matters if you want assurance of a fast resolution timeline for a budget-priced device, and matters less if you're comfortable with a standard return window regardless of stated response speed. Check for a specific guarantee timeframe rather than general support language if quick resolution matters to your purchase decision."
  }
];

export const faq = [
  {
    "q": "Does a 30W PoE extender give my devices 30W?",
    "a": "No. The extender uses some power itself, and the Davuaz Gigabit explicitly discloses 24W total output. Plan for around 24W to 25W for your devices, and subtract about 20 percent for cable loss on a long run. Measure at the device if you can."
  },
  {
    "q": "What is the worst mistake with a 30W extender?",
    "a": "Pairing it with an 802.3af source. An af port supplies 15.4W at most, so the extender will not reach its 30W capacity. Use a 30W 802.3at source, and confirm the switch port allows it. Check the switch port's PoE class in its spec sheet or settings page."
  },
  {
    "q": "Is the WAVLINK worth paying more than the Tliffpaco?",
    "a": "If you need IP67 and a daisy chain to 600m, yes. The Tliffpaco costs far less, keeps Gigabit, and reaches 300m through a 2-level cascade, which is plenty for most yards. Pair it with Gigabit if the camera stream is high resolution."
  },
  {
    "q": "How do I use the Davuaz 250m mode?",
    "a": "Flip the switch to extended mode, then expect 10Mbps at 250m. Test the camera's frame rate before mounting, since a camera with a high bitrate will drop frames and look frozen. A bench test at the end saves a climb up a pole."
  },
  {
    "q": "Can a 30W extender power a PTZ camera?",
    "a": "Most PTZ cameras need more than 24W with heaters on. A 30W extender can run a small PTZ without heater, but check the camera's peak draw. For heaters or large PTZ units, choose a 60W class instead. Compare to the camera's spec sheet."
  },
  {
    "q": "Why does my camera disconnect in hot weather?",
    "a": "Heat raises the cable's resistance, so voltage drops more at the far end. A 30W extender with a long run may brown out. Use shorter or thicker cables, and avoid mounting the extender in direct sun. Shade helps too."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-4-port-outdoor-poe-extender", "title": "Best 4-Port Outdoor PoE Extenders" },
  { "href": "/guide/best-outdoor-poe-extender", "title": "Best Outdoor and Waterproof PoE Extenders" },
  { "href": "/guide/best-1-port-poe-extender", "title": "Best 1-Port PoE Extenders" }
];
