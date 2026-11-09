export const guideSlug = "best-1-port-poe-extender";
export const guideTitle = "4 Best 1-Port PoE Extenders in 2026";
export const metaTitle = "Best 1-Port PoE Extenders";
export const metaDescription = "We compared 1-port PoE extenders by real wattage and cascade distance, since a single-device extender's simple design still varies widely in power output.";
export const mainKeyword = "best 1 port poe extender";
export const introParagraphs = [
  "A single-port PoE extender is the simplest way to push power and data to one remote device, like an outdoor camera or access point, but the exact wattage delivered and how far you can cascade multiple units still varies meaningfully between otherwise similar-looking single-port designs.",
  "We compared this lineup on real wattage output, cascade distance, and outdoor durability, since one listing specifically states three units can be daisy-chained for 300m at full Gigabit speed or 750m in a reduced-speed long-range mode."
];
export const lastUpdated = "2026-09-16";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31lkTOajMBL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-1-port-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "Gigabit PoE Extender Outdoor Waterproof, 1-Port PoE+",
    price: "$18.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31lkTOajMBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H8254RZ2?tag=deskfinds0d-20",
    description: "This extender's listing specifically states true Gigabit 1000Mbps speed combined with 30W of IEEE 802.3af/at power output, delivered through an IP66-rated waterproof and dustproof housing rated from -20C to 60C for genuinely harsh outdoor placement. Its multi-level cascade support reaches a maximum of 1640ft for outdoor IP cameras and high-bandwidth devices.\n\nCompared to the Revotech and Intellinet picks below, this one's specifically stated 2KV lightning and surge protection, combined with broad compatibility claims covering Reolink, Hikvision, Dahua, and UniFi camera brands, gives it a genuinely comprehensive feature set at the lowest price in this comparison.\n\nBest for buyers who want full Gigabit speed with 30W power and IP66 outdoor durability at the lowest price in this comparison.",
    specs: ["Gigabit 1000Mbps, 30W IEEE 802.3af/at output", "IP66 waterproof, -20C to 60C operating range", "2KV surge protection, cascade to 1640ft"],
    pros: ["Lowest price in this comparison at under $20", "Full Gigabit speed maintained alongside 30W power output", "2KV surge protection with broad camera brand compatibility"],
    cons: ["Does not support 24V passive PoE, only standard 48V-57V", "Output port must connect only to a PoE-powered device, not non-PoE equipment"],
    bestFor: "buyers who want full Gigabit speed with 30W power and IP66 outdoor durability at the lowest price",
  },
  {
    id: "best-1-port-poe-extender-2",
    rank: 2,
    badge: "Best Value",
    name: "Revotech 1 Port POE Extender (POE5002)",
    price: "$15.69",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/419F0J-bDwS._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09XK6YFKC?tag=deskfinds0d-20",
    description: "This extender's listing specifically states support for up to 6-piece cascading to reach 700m total distance, a genuinely long multi-unit chain for a single-port extender at this price point. Its automatic detection and protection feature safeguards connected PoE equipment from damage due to incorrect installation.\n\nCompared to the Gigabit pick above, this one delivers standard IEEE 802.3af power up to 15.4W at 10/100Mbps speeds rather than Gigabit, a real tradeoff that keeps its price the lowest in this comparison for buyers whose single device doesn't need Gigabit throughput.\n\nBest for buyers who want the lowest price and don't need Gigabit speed for their single connected device.",
    specs: ["1 port, up to 15.4W IEEE 802.3af power", "10/100Mbps, cascade up to 6 units for 700m", "Automatic detection and installation protection"],
    pros: ["Lowest price in this comparison at under $20", "Supports up to 6-unit cascading for 700m total distance", "Automatic protection against incorrect installation damage"],
    cons: ["10/100Mbps speed only, not Gigabit like the other picks", "15.4W power ceiling is lower than the 25-30W picks in this comparison"],
    bestFor: "buyers who want the lowest price and don't need Gigabit speed for their single device",
  },
  {
    id: "best-1-port-poe-extender-3",
    rank: 3,
    badge: "Best for Long-Range Mode",
    name: "Cudy Gigabit PoE+ Extender (POE10)",
    price: "$39.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31wOP-jtA-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B082M7HTL8?tag=deskfinds0d-20",
    description: "This extender's listing specifically states a DIP switch lets you choose between 100m at Gigabit speed or 250m at 10Mbps, and daisy-chaining three units reaches 300m total at Gigabit or 750m total in the reduced-speed Long-Range mode. Its IEC Level 3 ESD protection (6kV contact, 8kV air) plus 2kV surge protection is a genuinely detailed electrical safety specification.\n\nCompared to the outdoor picks in this comparison, this one's compact 80.1mm by 48.9mm by 31.9mm wall-mount casing at just 58.4g is specifically designed for reliable indoor deployment without added cooling, operating from 0C to 40C.\n\nBest for buyers who want a switchable speed-versus-distance mode with detailed ESD and surge protection specifications.",
    specs: ["Switchable 100m Gigabit or 250m at 10Mbps via DIP switch", "3-unit daisy chain for 300m (Gigabit) or 750m (Long-Range)", "IEC Level 3 ESD protection, 2kV surge protection"],
    pros: ["DIP switch lets you choose speed or distance as needed", "Detailed IEC Level 3 ESD protection specification", "Compact, lightweight design suited to indoor wall mounting"],
    cons: ["Higher price than the other picks in this comparison", "Rated for 0C to 40C indoor use, not outdoor-rated like other picks"],
    bestFor: "buyers who want a switchable speed-versus-distance mode with detailed electrical protection specs",
  },
  {
    id: "best-1-port-poe-extender-4",
    rank: 4,
    badge: "Best Build Quality",
    name: "Intellinet Outdoor Gigabit PoE+ Extender, IP65",
    price: "$92.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/410hz-ngYXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B076CCPRXL?tag=deskfinds0d-20",
    description: "This extender's listing specifically states shielded RJ45 connectors that help reduce electromagnetic interference in electrically noisy installations, a build detail not commonly disclosed on competing single-port extenders. Its IP65-rated metal housing, rather than plastic, operates from -40F to 167F and supports daisy-chaining up to four additional units to reach 1640ft.\n\nCompared to the other picks in this comparison, this one's fanless metal construction and shielded connector design target electrically demanding industrial or commercial installations where interference and long-term durability matter more than upfront price.\n\nBest for buyers who want a metal housing with shielded connectors for electrically noisy or demanding installations.",
    specs: ["IP65 metal housing, shielded RJ45 connectors", "25W IEEE 802.3af/at, -40F to 167F operating range", "4-unit daisy chain for up to 1640ft total"],
    pros: ["Metal housing with shielded connectors reduces electromagnetic interference", "Wide -40F to 167F operating range suits extreme climates", "Fanless design supports silent operation"],
    cons: ["Highest price in this comparison by a significant margin", "25W power ceiling is lower than the Gigabit pick's 30W"],
    bestFor: "buyers who want a metal housing with shielded connectors for electrically demanding installations",
  }
];

export const howWeEvaluated = [
  {
    "title": "Power ceiling at the output",
    "description": "We compared the wattage each unit can pass on, from Revotech's 15.4W af ceiling to Gigabit extender's 30W and Intellinet's 25W. A camera with a heater or pan-tilt motor can draw more than 15W, so the number sets which devices are safe. Check your camera's rated wattage first."
  },
  {
    "title": "Distance mode and daisy chain",
    "description": "We read the distance claims. Cudy offers 100m Gigabit or 250m at 10Mbps by DIP switch, Revotech reaches 700m across 6 units, and Intellinet reaches 1640ft in 4 units. We weighted claims that state the speed trade-off. Pick the distance mode before wiring a long run."
  },
  {
    "title": "Weather and temperature rating",
    "description": "We checked housing ratings. The Gigabit outdoor unit lists IP66 and -20C to 60C, Intellinet's IP65 metal housing covers -40F to 167F, and Cudy is rated 0C to 40C indoors only, so they suit different mounts. A wall under an eave needs a different rating than a bare pole."
  },
  {
    "title": "Surge and ESD protection",
    "description": "We compared the protection listed, such as Cudy's IEC Level 3 ESD and 2kV surge or the outdoor unit's 2KV surge. An extender on a long exterior run takes the hits that the switch indoors does not. Outdoor cable runs invite lightning-induced surges."
  },
  {
    "title": "Speed and compatibility limits",
    "description": "We noted the gaps. Revotech is 10/100Mbps only, and the Gigabit outdoor unit excludes 24V passive PoE and non-PoE output devices, so a buyer with passive cameras or a plain Ethernet device would need a different unit. Passive 24V cameras will not work on the outdoor unit."
  }
];

export const howToChoose = [
  {
    "subheading": "By Distance Mode",
    "intro": "Gigabit and long reach trade against each other on some units.",
    "table": {
      "headers": [
        "Your run",
        "Recommended pick"
      ],
      "rows": [
        [
          "A run under 100m with Gigabit and a second hop",
          "Gigabit PoE Extender Outdoor Waterproof, 1-Port PoE+, which cascades to 1640ft"
        ],
        [
          "A run you can stretch to 250m at 10Mbps for a basic camera",
          "Cudy Gigabit PoE+ Extender (POE10), with a DIP switch Long-Range mode"
        ],
        [
          "A very long chain of up to 6 units for 700m",
          "Revotech 1 Port POE Extender (POE5002), at 10/100Mbps"
        ],
        [
          "A run of up to 1640ft in four units for a gate or barn",
          "Intellinet Outdoor Gigabit PoE+ Extender, IP65"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Both low-cost units cost under $20, while Intellinet sits at the top.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "The lowest price in this roundup, under $20",
          "Gigabit PoE Extender Outdoor Waterproof, 1-Port PoE+, with 30W Gigabit"
        ],
        [
          "A similarly low price for a 15.4W camera",
          "Revotech 1 Port POE Extender (POE5002), at 10/100Mbps"
        ],
        [
          "A step up for a switchable long-range mode indoors",
          "Cudy Gigabit PoE+ Extender (POE10), higher than the other picks"
        ],
        [
          "The top of the range for a metal housing and shielded RJ45",
          "Intellinet Outdoor Gigabit PoE+ Extender, IP65"
        ]
      ]
    }
  },
  {
    "subheading": "Long-Range 10Mbps vs Gigabit",
    "intro": "Cudy's DIP switch is the clearest example of a trade you must choose.",
    "cards": [
      {
        "label": "Gigabit mode (100m)",
        "text": "Gigabit at 100m per hop suits 4K cameras and access points, with a 3-unit chain reaching 300m in this mode."
      },
      {
        "label": "Long-Range mode (250m)",
        "text": "The 10Mbps mode reaches 250m per hop and 750m over three units, which suits a low-bitrate camera or sensor but not video-heavy devices."
      }
    ],
    "note": "Default to Gigabit mode unless the distance is the only blocker."
  },
  {
    "subheading": "By Mounting Location",
    "intro": "Weather rating is the sharpest divider among these four.",
    "table": {
      "headers": [
        "Install spot",
        "Recommended pick"
      ],
      "rows": [
        [
          "Outside on a post or wall",
          "Gigabit PoE Extender Outdoor Waterproof, 1-Port PoE+, with IP66"
        ],
        [
          "Outside in extreme cold or heat",
          "Intellinet Outdoor Gigabit PoE+ Extender, with -40F to 167F"
        ],
        [
          "Indoors on a wall, such as an attic",
          "Cudy Gigabit PoE+ Extender (POE10), compact and lightweight"
        ],
        [
          "A mild indoor garage run for a basic camera",
          "Revotech 1 Port POE Extender (POE5002), with automatic installation protection"
        ]
      ]
    }
  },
  {
    "subheading": "For Single-Camera Garage Runs Specifically",
    "intro": "A single camera far from the router is the classic extender job.",
    "cards": [
      {
        "label": "Look for",
        "text": "A power ceiling above your camera's rated draw, a matching PoE standard, and outputs that connect only to PoE devices."
      },
      {
        "label": "In this comparison",
        "text": "Gigabit PoE Extender Outdoor Waterproof, 1-Port PoE+ gives 30W at Gigabit for under $20, but it needs 48V to 57V standard PoE, not 24V passive."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Higher price buys housing quality, not extra distance.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "The unit sees snow or direct sun, where Intellinet Outdoor Gigabit PoE+ Extender offers a metal body and a wide temperature range."
      },
      {
        "label": "Save if",
        "text": "The camera is a modest 1080p model, where Revotech 1 Port POE Extender (POE5002) under $20 handles 15.4W."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A Single-Port Extender's Wattage Output Varies Meaningfully Despite the Simple 1-in-1-out Design",
    "explanation": "The picks in this comparison range from 15.4W to 30W of power output, a real difference even though every single-port extender looks similarly simple, since a higher-wattage device like a PTZ camera with a heater could fail to receive adequate power from a lower-wattage extender. This matters significantly if your connected device has a specific minimum wattage requirement, and matters less for a basic low-power device like a standard IP phone. Check your specific device's power requirement against an extender's stated maximum wattage output before assuming any 1-port extender covers your needs."
  },
  {
    "criterion": "A Switchable DIP-Switch Mode Lets You Trade Speed for Distance on the Same Physical Unit",
    "explanation": "The Cudy pick specifically includes a DIP switch letting you choose between 100m at Gigabit speed or 250m at a reduced 10Mbps, giving genuine flexibility to prioritize either bandwidth or reach depending on your specific installation without buying a different product. This matters if your distance need varies between installations or you're not certain in advance which tradeoff you'll need, and matters less if you have a fixed, known distance requirement. Check whether an extender offers a switchable mode if you want that flexibility, rather than committing to a single fixed speed-versus-distance tradeoff."
  },
  {
    "criterion": "Cascade Distance Figures Require Purchasing and Chaining Multiple Units, Not Just One Extender",
    "explanation": "The Revotech pick's specifically stated 700m maximum distance requires cascading 6 separate units together, not a single extender's individual range, a distinction that matters when budgeting for a genuinely long-distance installation. This matters if you're comparing extenders based on their headline maximum distance figure, since the per-unit cost multiplies when multiple units are needed to reach that distance. Check whether a stated maximum distance is achievable from a single unit or requires purchasing and cascading several units before budgeting for your specific installation."
  },
  {
    "criterion": "Shielded RJ45 Connectors Reduce Electromagnetic Interference in Electrically Noisy Installations",
    "explanation": "The Intellinet pick specifically states shielded RJ45 connectors that help reduce electromagnetic interference, a real benefit in installations near heavy machinery, industrial equipment, or other sources of electrical noise that could otherwise degrade signal quality on unshielded connections. This matters if you're installing in a genuinely electrically noisy environment like a factory floor or near industrial equipment, and matters less in a typical home or office setting with minimal interference sources. Check whether an extender specifically states shielded connector construction if your installation environment has real electromagnetic interference concerns."
  },
  {
    "criterion": "A Metal Housing Provides Different Durability and Interference Characteristics Than a Plastic Enclosure",
    "explanation": "The Intellinet pick's metal housing, compared to the plastic casings on the Cudy and other picks in this comparison, offers both greater physical durability and can help with electromagnetic shielding, but typically comes at a higher price point reflecting the more expensive manufacturing material. This matters if physical durability and interference resistance are priorities for your specific installation, and matters less for a straightforward indoor installation where a plastic casing performs adequately at a lower cost. Weigh a metal housing's durability and shielding benefits against its typically higher price if your installation doesn't specifically require those characteristics."
  }
];

export const faq = [
  { "q": "Do I need Gigabit speed for a single security camera connected through a 1-port extender?", "a": "Modern 4K or high-resolution cameras benefit from Gigabit speed, while a basic or older lower-resolution camera works fine with the Revotech pick's 10/100Mbps Fast Ethernet speed at a lower price." },
  { "q": "What's the most common mistake buyers make when choosing a 1-port PoE extender?", "a": "Assuming any single-port extender delivers the same wattage, when power output specifically ranges from 15.4W to 30W across the picks in this comparison, which matters if your device has a higher power requirement." },
  { "q": "Is the Intellinet extender worth the much higher price over the budget picks?", "a": "If you're installing in an electrically noisy industrial environment and specifically need a metal housing with shielded connectors, the Intellinet's higher price is justified, but for a typical home or office installation, the lower-priced picks perform adequately." },
  { "q": "Can I use the Cudy extender's Long-Range mode and still get decent speed?", "a": "The Cudy's Long-Range mode specifically drops speed to 10Mbps in exchange for reaching 250m per unit or 750m when cascading three units, a real tradeoff worth considering only if your connected device doesn't need higher bandwidth." },
  { "q": "How many units can I cascade together to reach a very long distance?", "a": "It varies by product; the Revotech pick supports up to 6 units for 700m total, while the Intellinet pick supports 4 additional units for 1640ft, so checking each product's specific maximum cascade count is worth doing before planning a long-distance installation." },
  { "q": "Will these 1-port extenders work with a 24V passive PoE camera?", "a": "The Gigabit PoE Extender Outdoor Waterproof pick specifically states it does not support 24V passive PoE, only standard 48V-57V, so verifying your camera's exact PoE voltage standard against each extender's stated compatibility is important before buying." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" },
  { "href": "/guide/best-long-range-poe-extender", "title": "Best Long-Range PoE Extenders" },
  { "href": "/guide/best-outdoor-poe-extender", "title": "Best Outdoor and Waterproof PoE Extenders" }
];
