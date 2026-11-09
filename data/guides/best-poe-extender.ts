export const guideSlug = "best-poe-extender";
export const guideTitle = "4 Best PoE Extenders in 2026";
export const metaTitle = "Best PoE Extenders in 2026";
export const metaDescription = "We compared PoE extenders by real power at daisy-chained distance, since one listing documents wattage dropping from 24.6W to 8.6W across five units.";
export const mainKeyword = "best poe extender";
export const introParagraphs = [
  "A PoE extender solves a simple but common networking problem: pushing Power over Ethernet and data beyond the standard 328ft (100m) Ethernet limit to reach a camera, access point, or other device mounted farther away than a direct cable run allows.",
  "We compared this lineup on documented power output at daisy-chained distance, brand warranty and support commitment, and outdoor durability, since one listing specifically breaks down power delivery across five chained units, from 24.6W at 656ft down to just 8.6W at 1968ft."
];
export const lastUpdated = "2026-09-15";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41lhN5lv6aL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "Intellinet Gigabit PoE+ Extender, 1-Port",
    price: "$59.59",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41lhN5lv6aL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00UZZITC6?tag=deskfinds0d-20",
    description: "This extender's listing specifically breaks down available power at each daisy-chain length: 24.6W at 656ft with one unit, down to just 8.6W at 1968ft with five units chained together, a genuinely detailed disclosure of the real power-versus-distance tradeoff most competing extenders don't document this precisely. Its fanless metal housing runs silently while drawing power directly from the incoming PoE line.\n\nCompared to the TRENDnet and WAVLINK picks below, this one's support for up to five daisy-chained units reaching a total of 1968ft gives it the longest documented maximum distance in this comparison, with power output clearly specified at every step along the way.\n\nBest for buyers who want the most detailed power-at-distance documentation with the longest total daisy-chain support.",
    specs: ["Up to 5-unit daisy chain, 1968ft total distance", "24.6W (656ft) down to 8.6W (1968ft) documented per chain length", "IEEE 802.3af/at, fanless metal housing"],
    pros: ["Most detailed power-at-distance documentation in this comparison", "Longest total daisy-chain distance at up to 1968ft", "Fanless design runs completely silently"],
    cons: ["Higher price than the TRENDnet or WAVLINK picks in this comparison", "Indoor-oriented design, not outdoor waterproof rated"],
    bestFor: "buyers who want the most detailed power-at-distance documentation with the longest daisy-chain support",
  },
  {
    id: "best-poe-extender-2",
    rank: 2,
    badge: "Best Warranty",
    name: "TRENDnet Gigabit PoE+ Extender (TPE-E100)",
    price: "$38.01",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41GFMHoRuTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00SDFF6S0?tag=deskfinds0d-20",
    description: "This extender's listing specifically states 3 years of TRENDnet Manufacturer Protection, a meaningfully longer warranty than the typical 1-year coverage seen on many competing PoE extenders. Its NDAA compliance specifically enables use in government networking deployments in the US and Canada, a distinct requirement some institutional buyers must meet.\n\nCompared to the Intellinet pick above, this one's auto-sensing technology delivers the correct wattage for either PoE (15.4W) or PoE+ (30W) devices automatically, and its 3-unit daisy chain reaches a total of 1312ft.\n\nBest for buyers who want the longest warranty in this comparison, or who specifically need NDAA-compliant hardware.",
    specs: ["3-year TRENDnet Manufacturer Protection", "Auto-sensing 15.4W (PoE) or 30W (PoE+) delivery", "3-unit daisy chain, up to 1312ft total, NDAA compliant"],
    pros: ["Longest warranty in this comparison at 3 years", "NDAA compliance meets government procurement requirements", "Auto-sensing technology matches wattage to device automatically"],
    cons: ["Shorter maximum daisy-chain distance than the Intellinet pick", "No outdoor waterproof rating unlike the WAVLINK pick"],
    bestFor: "buyers who want the longest warranty, or who specifically need NDAA-compliant hardware",
  },
  {
    id: "best-poe-extender-3",
    rank: 3,
    badge: "Best for Outdoor Use",
    name: "WAVLINK IP67 Outdoor Gigabit PoE Extender",
    price: "$39.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/318IrvcWbHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H73SW869?tag=deskfinds0d-20",
    description: "This extender's listing specifically states an IP67 outdoor weatherproof rating with a rugged, industrial-grade metal housing and waterproof caps enclosing all cable ports, built for genuinely harsh outdoor conditions as well as warehouses, server rooms, and attics. Its 2-unit daisy chain extends coverage up to 600 meters total, a distance that specifically includes the initial 200 meters from the PoE switch.\n\nCompared to the Intellinet and TRENDnet picks above, this one's IP67 rating and compact metal case supporting both wall and pole mounting make it the most outdoor-installation-ready pick in this comparison.\n\nBest for buyers installing an extender in a genuinely outdoor or industrial environment.",
    specs: ["IP67 outdoor weatherproof, industrial metal housing", "2-unit daisy chain, up to 600m total distance", "IEEE 802.3af/at 30W, wall and pole mounting"],
    pros: ["IP67 rating with fully enclosed, waterproof-capped cable ports", "Supports both wall and pole mounting for outdoor flexibility", "No additional power adapter needed, powered directly through PoE"],
    cons: ["Shorter warranty coverage than the TRENDnet pick", "2-unit daisy chain covers less total distance than the Intellinet pick's 5-unit support"],
    bestFor: "buyers installing an extender in a genuinely outdoor or industrial environment",
  },
  {
    id: "best-poe-extender-4",
    rank: 4,
    badge: "Best Value",
    name: "YuanLey 4 Port PoE Extender Gigabit",
    price: "$26.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31vGyUPsb6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVR3C92S?tag=deskfinds0d-20",
    description: "This extender's listing specifically states it powers up to three separate PoE devices from a single input, with VLAN isolation on all four ports to prevent data leakage between connected devices, a genuinely useful multi-device and security feature at this price point. Its 3-level cascade support reaches up to 1312ft total distance while requiring no local power supply.\n\nCompared to the Intellinet, TRENDnet, and WAVLINK picks above, this one's ability to power three devices from one unit, rather than just one, delivers meaningfully more value per dollar for a typical small installation with multiple nearby devices.\n\nBest for buyers who want to power multiple devices from one extender at the lowest price in this comparison.",
    specs: ["1 in 3 out, powers 3 separate devices", "VLAN isolation, 3-level cascade to 1312ft", "IEEE 802.3af/at, no local power required"],
    pros: ["Lowest price in this comparison at under $30", "Powers three separate devices from a single extender unit", "VLAN isolation on all ports improves network security"],
    cons: ["No outdoor waterproof rating unlike the WAVLINK pick", "Standard 1-year warranty, shorter than the TRENDnet pick's 3-year coverage"],
    bestFor: "buyers who want to power multiple devices from one extender at the lowest price",
  }
];

export const howWeEvaluated = [
  {
    "title": "Power left after each hop",
    "description": "We checked whether the listing documents how many watts reach the far end, because every extender takes its own share and each hop shrinks the budget. Intellinet's table, from 24.6W at 656ft down to 8.6W at 1968ft, was the only one giving a real answer, which matters for any camera that needs more than 12W. Add up every downstream load before choosing."
  },
  {
    "title": "Daisy-chain distance versus failure points",
    "description": "We compared the maximum chain length, from WAVLINK's 2 units to Intellinet's 5 units over 1968ft. Each extender is another point that can fail, so we treated a longer chain as a convenience and not a reason to chain more units than needed."
  },
  {
    "title": "Outdoor and housing rating",
    "description": "We separated outdoor-rated units from indoor ones. WAVLINK lists IP67 with wall and pole mounting, while Intellinet is indoor oriented and YuanLey lists no IP rating, so pole or eave installs need the WAVLINK or a weatherproof box."
  },
  {
    "title": "Warranty and compliance",
    "description": "We weighed written coverage and procurement status. TRENDnet offers a 3-year warranty and NDAA compliance, which matters to schools and government buyers, while the lowest-priced YuanLey carries a standard 1-year warranty."
  },
  {
    "title": "Outputs and network security",
    "description": "We counted what each extender feeds. YuanLey's 1 in 3 out powers three devices and isolates ports with VLAN, while the single-output units feed one device only. For a camera cluster, port count and isolation both change how many extenders you buy."
  }
];

export const howToChoose = [
  {
    "subheading": "By Distance to the Far Device",
    "intro": "Distance is the reason to buy an extender, so measure the run first.",
    "table": {
      "headers": [
        "Your run",
        "Recommended pick"
      ],
      "rows": [
        [
          "A camera about 1,000 to 2,000 feet away through several hops",
          "Intellinet Gigabit PoE+ Extender, with up to 5 units and 1968ft total"
        ],
        [
          "A device up to about 1,300 feet in three hops with a 3-year warranty",
          "TRENDnet Gigabit PoE+ Extender (TPE-E100), with up to 1312ft total"
        ],
        [
          "A single outdoor hop on a pole or wall, up to 600m with two units",
          "WAVLINK IP67 Outdoor Gigabit PoE Extender, which has a 2-unit chain"
        ],
        [
          "Three devices clustered at the end of one 328ft stretch",
          "YuanLey 4 Port PoE Extender Gigabit, with 1 in 3 out"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The extenders here range from under $30 to a premium Intellinet.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "The lowest price in this roundup, under $30",
          "YuanLey 4 Port PoE Extender Gigabit, which powers three devices"
        ],
        [
          "A mid-range spend for a 3-year warranty",
          "TRENDnet Gigabit PoE+ Extender (TPE-E100), with NDAA compliance"
        ],
        [
          "A mid-range spend for weatherproof hardware",
          "WAVLINK IP67 Outdoor Gigabit PoE Extender, with no power adapter needed"
        ],
        [
          "A higher spend for the longest chain and documented wattage",
          "Intellinet Gigabit PoE+ Extender, which costs more than TRENDnet or WAVLINK"
        ]
      ]
    }
  },
  {
    "subheading": "One Output vs Multiple Outputs",
    "intro": "Feeding three devices from one extender saves boxes but splits the same wattage.",
    "cards": [
      {
        "label": "One output (Intellinet, TRENDnet, WAVLINK)",
        "text": "These keep the full per-port power budget for a single camera or access point, with simple chaining and clear numbers at each hop."
      },
      {
        "label": "One in, three out (YuanLey)",
        "text": "YuanLey powers three separate devices with VLAN isolation, but the power budget has to cover all three, so low-draw cameras fit and a 30W device does not."
      }
    ],
    "note": "Choose one output for a single high-draw device and one in three out for several small cameras."
  },
  {
    "subheading": "By Power Source and Upstream Budget",
    "intro": "An extender cannot make power, so the upstream switch decides what you get.",
    "table": {
      "headers": [
        "Your upstream power",
        "Recommended pick"
      ],
      "rows": [
        [
          "A PoE+ switch with spare budget feeding one far camera",
          "Intellinet Gigabit PoE+ Extender, with auto-sensing af and at"
        ],
        [
          "A government or school network with procurement rules",
          "TRENDnet Gigabit PoE+ Extender (TPE-E100), which is NDAA compliant"
        ],
        [
          "A PoE+ port powering a pole-mounted access point",
          "WAVLINK IP67 Outdoor Gigabit PoE Extender, powered directly through PoE"
        ],
        [
          "A PoE+ port feeding several 5W to 8W cameras",
          "YuanLey 4 Port PoE Extender Gigabit, with VLAN isolation on every port"
        ]
      ]
    }
  },
  {
    "subheading": "For Backyard and Perimeter Cameras Specifically",
    "intro": "Outdoor runs expose every connector to weather and surge.",
    "cards": [
      {
        "label": "Look for",
        "text": "An IP rating for the housing, a documented power figure at your distance, and a mounting method that matches the surface."
      },
      {
        "label": "In this comparison",
        "text": "WAVLINK IP67 Outdoor Gigabit PoE Extender is the only IP67 unit with pole and wall mounts, and Intellinet is the choice for a long indoor-to-garage run."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Spend more where the budget table or the weather demands it.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You chain several units or need a documented power figure at each hop, where Intellinet Gigabit PoE+ Extender provides it."
      },
      {
        "label": "Save if",
        "text": "You power a few small cameras within one hop, where YuanLey 4 Port PoE Extender Gigabit under $30 is the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A PoE Extender's Available Power Drops at Every Additional Daisy-Chain Hop, Not Just at the Final Maximum Distance",
    "explanation": "The Intellinet pick specifically documents power dropping from 24.6W at 656ft with one unit down to 8.6W at 1968ft with five units chained together, a gradual and substantial reduction at every additional hop rather than a single cliff-edge drop only at the absolute maximum distance. This matters significantly if you're daisy-chaining multiple extenders to reach a device that needs a specific minimum wattage, since the power available partway through the chain, not just at the final unit, determines whether your device gets adequate power. Check a listing for power figures at each specific daisy-chain length relevant to your installation, not just its single best-case or worst-case number."
  },
  {
    "criterion": "NDAA Compliance Is a Real Procurement Requirement for Government and Some Institutional Buyers, Not a Generic Feature",
    "explanation": "The TRENDnet pick's specifically stated NDAA compliance means the hardware meets federal procurement rules that restrict networking equipment from certain manufacturers, a genuine legal requirement for many US and Canadian government and institutional purchases rather than a marketing checkbox. This matters significantly if you're purchasing on behalf of an organization subject to these procurement rules, and matters not at all for a typical home or small business installation with no such restriction. Verify whether your specific organization has an NDAA compliance requirement before assuming any networking hardware purchase needs to meet that standard."
  },
  {
    "criterion": "A Longer Manufacturer Warranty Reflects Real Confidence in Long-Term Hardware Reliability",
    "explanation": "The TRENDnet pick's specifically stated 3-year Manufacturer Protection meaningfully exceeds the roughly 1-year warranty typical of many competing PoE extenders, a real difference in how long you're covered if the hardware fails during years of continuous operation. This matters if you're installing an extender as permanent infrastructure you expect to run for several years without replacement, and matters less if you tend to upgrade or replace networking hardware more frequently regardless of warranty status. Compare warranty length specifically, not just price, when an extender will serve as long-term infrastructure rather than a short-term or temporary installation."
  },
  {
    "criterion": "An Extender That Powers Multiple Devices From One Unit Delivers More Value Per Dollar for a Multi-Device Installation",
    "explanation": "The YuanLey pick specifically powers up to three separate PoE devices from a single input unit, meaningfully more value per dollar than a single-port extender if your actual installation involves multiple nearby devices needing extension, since you'd otherwise need multiple single-port extenders to achieve the same coverage. This matters if you have two or three devices installed near each other but far from your PoE switch, and matters less if you only have one device that needs extending. Count your actual number of devices needing PoE extension before choosing between a single-port extender and a multi-port model, since the per-device cost can differ substantially."
  },
  {
    "criterion": "An IP67 Outdoor Rating Includes Fully Enclosed and Waterproof-Capped Cable Ports, Not Just a Sealed Housing",
    "explanation": "The WAVLINK pick specifically states its cable ports are enclosed and protected with waterproof caps as part of its IP67 rating, addressing the cable entry points, which are often the actual weak point for water intrusion, rather than just certifying the main housing body alone. This matters if you're installing in a genuinely outdoor location where cable connections are exposed to rain or moisture, and matters less for an indoor installation where port-level waterproofing provides no practical benefit. Check whether an outdoor-rated extender's waterproofing specifically extends to its cable ports and connectors, not just its main enclosure, for a genuinely weatherproof installation."
  }
];

export const faq = [
  { "q": "How far can I actually extend a PoE connection with these extenders?", "a": "It depends on the specific pick and configuration; the Intellinet extender documents up to 1968ft using a 5-unit daisy chain, while a single unit typically extends around 328ft to 656ft, so checking each listing's specific distance-and-power breakdown for your planned chain length is important." },
  { "q": "What's the most common mistake buyers make when choosing a PoE extender?", "a": "Assuming a daisy chain's maximum distance figure comes with the same power output as a single unit, when power specifically decreases at each additional hop in the chain, as documented on the Intellinet pick." },
  { "q": "Is the Intellinet extender worth the higher price over the TRENDnet pick?", "a": "If you need the most detailed power documentation and the longest total daisy-chain distance, the Intellinet's higher price is justified, but if warranty length or NDAA compliance matters more to you, the TRENDnet pick's 3-year coverage may be the better fit despite its lower price." },
  { "q": "Do I need an outdoor-rated extender if my device is mounted indoors?", "a": "No, an IP67 outdoor rating like the WAVLINK pick's provides no practical benefit for a fully indoor installation, so an indoor-oriented extender like the Intellinet or TRENDnet picks is a more cost-appropriate choice for that scenario." },
  { "q": "Can I power more than one device with a single PoE extender?", "a": "Yes, the YuanLey pick in this comparison specifically powers up to three separate devices from one input unit, a more cost-effective solution than using multiple single-port extenders if you have several nearby devices needing extension." },
  { "q": "Does NDAA compliance matter for a home network installation?", "a": "No, NDAA compliance is specifically a federal procurement requirement relevant to government and some institutional buyers in the US and Canada, and has no practical relevance for a typical home or small business network installation." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-outdoor-poe-extender", "title": "Best Outdoor and Waterproof PoE Extenders" },
  { "href": "/guide/best-long-range-poe-extender", "title": "Best Long-Range PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" },
  { "href": "/guide/best-poe-extender-without-power", "title": "Best PoE Extenders That Need No Local Power" }
];
