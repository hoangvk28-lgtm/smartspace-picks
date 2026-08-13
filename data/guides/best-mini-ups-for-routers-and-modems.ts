export const guideSlug = "best-mini-ups-for-routers-and-modems";
export const guideTitle = "7 Best Mini UPS for Routers and Modems in 2026";
export const metaTitle = "Best Mini UPS for Routers & Modems 2026";
export const metaDescription = "Backing up a router and a modem needs two output rails, not one. We compared mini UPS units that can power both devices simultaneously.";
export const mainKeyword = "mini ups for routers and modems";
export const introParagraphs = [
  "Backing up a router alone is a one-rail problem. Backing up a router and a modem together means the UPS needs either two independent output rails at the right voltages, or one rail with enough headroom to power both through a splitter, and most single-output mini UPS units simply aren't built for that.",
  "We looked specifically at which units in this cluster publish a genuine multi-output design (not just a single high-wattage port shared through a splitter) and how much current is actually available per rail once both devices are drawing power."
];
export const lastUpdated = "2026-08-13";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/312p5-wC-LL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-mini-ups-for-routers-and-modems-1",
    rank: 1,
    badge: "Best Overall",
    name: "Mini UPS Battery Backup 20000mAh 74Wh",
    price: "$84.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/312p5-wC-LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FF9QS7LK?tag=deskfinds0d-20",
    description: "A larger-capacity sibling to the 10,000mAh aluminum-housed model in this lineup, this one packs 20,000mAh (74Wh) into the same aluminum-alloy shell and same five-rail layout: 5V USB, 5V DC, 9V DC, and two separate 12V DC outputs, rated for a combined 60W.\n\nHaving two independent 12V DC rails (each sharing a 5A budget) is the practical differentiator here, it's built to run a router and a modem off the same unit simultaneously rather than forcing a choice between one 12V device and the 9V rail. Like its sibling, the battery isn't sold as a standalone spare.",
    specs: ["20,000mAh / 74Wh built-in","Dual 12V DC rails + 9V + 5V USB","60W max combined output"],
    pros: ["Two independent 12V DC rails for router + modem","74Wh is a genuine step up from the 37Wh entry model","Same aluminum-alloy build quality as the smaller sibling","Five-layer protection circuitry included"],
    cons: ["Same 60W combined ceiling as the smaller sibling despite more capacity","Battery isn't sold as a standalone replacement part","No PoE output"],
    bestFor: "routers and modems that both need a 12V connection",
  },
  {
    id: "best-mini-ups-for-routers-and-modems-2",
    rank: 2,
    badge: "Best with PoE Option",
    name: "CHINTE Mini UPS 16000mAh with Passive PoE",
    price: "$53.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31pHhSDy6PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GWC8GVGZ?tag=deskfinds0d-20",
    description: "Built around a 16,000mAh LiFePO4 cell (a longer-cycle-life chemistry than the lithium-ion packs most competitors use) with a 36W output ceiling across DC 12V-2A, 9V-2A, 5V-2A, USB-A, USB-C, and passive PoE at 15V-1A or 24V-0.6A. The PoE output can carry both power and data over a single Ethernet run for supported gear.\n\nCHINTE is explicit that total draw must stay under 36W (voltage times current), so a 12V device pulling near 2A leaves little headroom for a second load on another rail. It backs the unit with a 12-month warranty and lists a compact 6.22 x 3.2 x 2.7in footprint meant for a desk, shelf, or cabinet.",
    specs: ["16,000mAh LiFePO4 battery","Passive PoE 15V/24V + DC rails","36W max, 12-month warranty"],
    pros: ["LiFePO4 chemistry rated for longer cycle life than lithium-ion","Passive PoE (15V/24V) plus full DC rail lineup","12-month warranty with lifetime technical support","Compact 6.22 x 3.2 x 2.7in footprint"],
    cons: ["36W ceiling is tighter than the TalentCell or 74Wh sibling","Passive PoE only, incompatible with active 802.3af/at gear"],
    bestFor: "setups where the modem is PoE-powered",
  },
  {
    id: "best-mini-ups-for-routers-and-modems-3",
    rank: 3,
    badge: "Best for ONU + Router",
    name: "ALFOINE 48Wh UPS with Passive PoE 24V/48V",
    price: "$48.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21xJ+03Si1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GJBWXM66?tag=deskfinds0d-20",
    description: "A 48Wh (9.6V/5000mAh) pack purpose-built around passive PoE at both 24V and 48V (1000Mbps) alongside the usual DC 12V/2A, 9V/1.5A, 5V/2A, and USB-A/USB-C rails, with a 30W combined ceiling. ALFOINE is explicit that this is passive PoE only, it does not support 802.3af/at active PoE, so confirm your ONT/ONU or CPE uses passive injection before buying.\n\nIt ships with a 12V/3A adapter, a DC5521 cable, and eight interchangeable DC connector tips, which covers most US router/ONU barrel sizes without a separate purchase. At 6.1 x 4.3 x 1.4in and 1.01lb, it's the most compact multi-rail unit in this cluster.",
    specs: ["48Wh (9.6V/5000mAh) battery","Passive PoE 24V & 48V (1000Mbps)","30W max, ships with 8 DC tips"],
    pros: ["Only unit here with both 24V and 48V passive PoE output","Ships with 8 DC connector tips covering most router/ONU barrels","Compact 6.1 x 4.3 x 1.4in and just 1.01lb","Overcharge, over-discharge, and short-circuit protection built in"],
    cons: ["30W ceiling is the lowest among the PoE-capable units","Passive PoE only, not compatible with active PoE cameras/switches"],
    bestFor: "fiber setups with a separate ONU and router",
  },
  {
    id: "best-mini-ups-for-routers-and-modems-4",
    rank: 4,
    badge: "Budget Two-Device Pick",
    name: "Mini UPS Battery Backup for Router, Modem, Security Camera",
    price: "$54.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31v-kzYIP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C1YRSBMN?tag=deskfinds0d-20",
    description: "Runs on a 10,000mAh/37Wh built-in cell inside an aluminum-alloy shell, with four simultaneous output rails: 5V USB at 2A, 5V DC at 2A, 9V DC at 2A, and 12V DC at 2A, for a combined 60W ceiling. That's enough rails to run a router and a separate 9V or 12V device off the same unit without an adapter.\n\nAmazon doesn't list a nominal wattage badge, and the seller is explicit that no standalone lithium batteries ship separately from the unit, so factor shipping restrictions into timing if you're ordering close to an outage. The five-layer protection stack (short circuit, voltage fluctuation, overcharge, over-discharge, temperature) is standard for this category rather than a differentiator.",
    specs: ["10,000mAh / 37Wh built-in","4 rails: 5V USB, 5V/9V/12V DC","60W max combined output"],
    pros: ["Four output rails (5V USB, 5V DC, 9V DC, 12V DC) on one compact unit","Five-layer protection circuitry is standard across the line","Built-in 10,000mAh cell also works as a standalone power bank via USB","Aluminum-alloy housing is more durable than plastic competitors"],
    cons: ["No published Wh figure, only 10,000mAh and an implied 37Wh","60W ceiling is shared across all rails combined","No PoE output for camera-only setups"],
    bestFor: "a lower-cost option for two low-draw devices",
  },
  {
    id: "best-mini-ups-for-routers-and-modems-5",
    rank: 5,
    badge: "Highest Combined Wattage",
    name: "TalentCell Mini UPS 27000mAh 97.2Wh",
    price: "$64.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31yaJir8URL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07WLD32RP?tag=deskfinds0d-20",
    description: "The largest battery in this roundup by a wide margin: a 12-cell 11.1V/8800mAh pack rated at 97.2Wh, wired to four DC 12V ports, one DC 9V port, and two USB ports (one with 18W PD). TalentCell caps continuous draw at 37W and is explicit that pushing past it will drain the pack fast rather than protect the load.\n\nThe DC ports use a 5.5x2.1mm barrel, which fits most routers but not all; TalentCell tells buyers up front to check their device's port size before ordering since a mismatched connector needs a separate cable. It ships with two DC 5.5x2.1mm male-to-male cables and a 12.6V/2A charger, no USB-C PD cable included despite the USB-C port.",
    specs: ["27,000mAh / 97.2Wh (12-cell)","4x DC 12V, 1x DC 9V, 2x USB","37W continuous ceiling"],
    pros: ["Highest capacity in this cluster at 97.2Wh","Four separate 12V ports for multi-device setups","18W USB-C PD port charges phones and small electronics too","Ships with two DC cables and a charger in the box"],
    cons: ["37W continuous limit is lower than its capacity might suggest","5.5x2.1mm barrel only, other connector sizes need a separate cable","No PoE output"],
    bestFor: "setups that need the most headroom under one 37W ceiling",
  },
  {
    id: "best-mini-ups-for-routers-and-modems-6",
    rank: 6,
    badge: "Best with PoE Modem Support",
    name: "Yuuki Power Mini UPS 10400mAh",
    price: "$54.44",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31zzzW2SW3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FCV2Q8TB?tag=deskfinds0d-20",
    description: "10,400mAh (rated 38Wh by Yuuki) with USB-A at 5V/3.6A, DC 9V/2A, DC 12V/2A, and notably for this cluster, passive PoE at 15V/1.3A or 24V/0.8A for CCTV gear, all under a 24W total ceiling. It's one of only three products here with PoE output alongside standard DC rails.\n\nThe LCD status screen is a real differentiator versus the LED-indicator competitors, it shows real-time status rather than just a rough charge level. Yuuki also designs the battery to be user-replaceable and ships an assortment of DC barrel adapters plus a 12V/3A charger in the box.",
    specs: ["10,400mAh / 38Wh battery","PoE 15V/24V + DC 9V/12V + USB","LCD real-time status screen"],
    pros: ["Only unit in this price range with an LCD status screen","Passive PoE output alongside full DC rail lineup","User-replaceable battery extends the unit's useful life","Ships with an assortment of DC barrel adapters"],
    cons: ["24W ceiling is among the lowest here","PoE voltage (15V/24V) may not match every camera's requirement"],
    bestFor: "modems that use passive PoE instead of a standard DC barrel",
  },
  {
    id: "best-mini-ups-for-routers-and-modems-7",
    rank: 7,
    badge: "Fastest Switchover Claim",
    name: "RGTTOTG POE04 Mini UPS 8800mAh",
    price: "$48.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31CNQauTYFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CP693BWD?tag=deskfinds0d-20",
    description: "An 8000mAh/29.6Wh pack with PoE 24V, DC 12V, DC 9V, and one USB 5V/2.5A port, positioned by RGTTOTG as its newest revision as of late 2024. The standout claim is a 0-second switchover, the listing states the connected device doesn't need to restart when mains power drops, unlike UPS designs with a brief relay-switching gap.\n\nAt 159 x 77 x 27.5mm and about 275g, it's one of the smallest units here, which trades against total capacity, 29.6Wh is on the lower end of this cluster's range. Treat the zero-second-switchover claim as manufacturer-stated rather than independently verified.",
    specs: ["8,000mAh / 29.6Wh battery","PoE 24V + DC 12V/9V + USB 5V","Claimed 0-second switchover"],
    pros: ["Claimed 0-second switchover avoids device reboots","Smallest, lightest footprint in this cluster","PoE 24V output alongside standard DC rails","Four built-in protection functions"],
    cons: ["29.6Wh capacity is on the low end for the price","Switchover claim is manufacturer-stated, not independently verified","No USB-C charging port"],
    bestFor: "buyers most concerned about the modem staying connected without a reboot",
  }
];

export const howWeEvaluated = [
  {
    "title": "Output Voltage & Current Match",
    "description": "Checked each unit's published output rails against common router, modem, and ONU power requirements (5V, 9V, 12V) rather than assuming any DC barrel plug is interchangeable."
  },
  {
    "title": "Battery Energy (Wh, Not Just mAh)",
    "description": "Normalized battery capacity to watt-hours wherever the listing or official spec sheet provided pack voltage, since mAh alone is not comparable across products with different cell configurations."
  },
  {
    "title": "Combined Output Ceiling",
    "description": "Looked for an explicit maximum continuous wattage figure, since routers and secondary devices (modems, cameras) sharing one UPS need headroom under that ceiling, not just individually rated ports."
  },
  {
    "title": "Connector & Protection Documentation",
    "description": "Favored listings that specify exact connector size, polarity, and safety protections (short-circuit, overcharge, over-discharge, temperature) over listings that only market broad 'wide compatibility' claims."
  },
  {
    "title": "Real Feature Differentiators",
    "description": "Weighed genuine differentiators, PoE output, LCD status displays, dual charging inputs, LiFePO4 battery chemistry, over marketing language that repeats across nearly identical products."
  }
];

export const howToChoose = [
  {
    "subheading": "Two-Device Power Map",
    "intro": "Before buying, write down the voltage and current printed on both your router's and modem's original power adapters.",
    "table": {
      "headers": [
        "Device 1",
        "Device 2",
        "Best pick"
      ],
      "rows": [
        [
          "12V router",
          "12V modem",
          "Mini UPS Battery Backup 20000mAh 74Wh (dual 12V rails)"
        ],
        [
          "12V router",
          "9V modem",
          "CHINTE Mini UPS 16000mAh"
        ],
        [
          "Router",
          "PoE modem/ONT",
          "ALFOINE 48Wh UPS with Passive PoE"
        ]
      ]
    }
  },
  {
    "subheading": "Combined Wattage Check",
    "intro": "Add up both devices' rated wattage (volts x amps) and compare against the UPS's stated combined output ceiling, not each port's individual max.",
    "cards": [
      {
        "label": "Under 24W combined",
        "text": "Most units in this cluster, including the budget aluminum-housed models, have headroom."
      },
      {
        "label": "24-37W combined",
        "text": "Step up to the TalentCell 27000mAh or CHINTE 16000mAh, which both publish explicit combined ceilings."
      },
      {
        "label": "Over 37W combined",
        "text": "No unit in this cluster is rated for it; consider a conventional AC UPS instead."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match voltage before capacity",
    "explanation": "Check your router's power adapter label for its exact output voltage (usually 5V, 9V, or 12V) and current draw in amps before comparing battery capacity. A mini UPS with the wrong voltage can damage the router even if the plug physically fits."
  },
  {
    "criterion": "Convert mAh to Wh to compare fairly",
    "explanation": "A 20,000mAh unit built around a 3.7V cell and a 10,400mAh unit built around a higher-voltage pack can carry similar real energy. Look for a watt-hour (Wh) figure in the listing, or multiply mAh by pack voltage and divide by 1000, before ranking products by capacity alone."
  },
  {
    "criterion": "Confirm connector size and polarity",
    "explanation": "Most of these units use a 5.5mm x 2.1mm DC barrel connector, but not all do, and center-pin polarity (positive vs negative tip) varies by brand even at the same voltage. A mismatched polarity can damage the router on first use."
  },
  {
    "criterion": "Check the combined wattage ceiling, not just per-port ratings",
    "explanation": "Multi-output units rarely guarantee every port can deliver its maximum rating simultaneously. If you're powering a router and a modem or camera off the same UPS, add up both devices' wattage and compare it against the unit's stated total output ceiling, not the sum of each port's individual maximum."
  },
  {
    "criterion": "Don't trust advertised runtime hours at face value",
    "explanation": "Manufacturer runtime claims ('up to 5 hours') are usually measured against a specific, often low, wattage load. A router pulling 10-15W will drain a battery meaningfully faster than the manufacturer's test load. Treat published hours as a best case, not a guarantee."
  },
  {
    "criterion": "Passive PoE is not the same as active PoE",
    "explanation": "A handful of these units output passive PoE (a fixed voltage sent down unused Ethernet pairs) rather than IEEE 802.3af/at active PoE with negotiation. Passive PoE only works with equipment designed for it; plugging an active-PoE device into a passive-PoE mini UPS can damage the device."
  }
];

export const faq = [
  {
    "q": "Do I need two separate mini UPS units for a router and modem?",
    "a": "Not necessarily. Several units here, like the 20000mAh/74Wh model with dual 12V rails or the ALFOINE with mixed DC and PoE outputs, are built to power two devices from one unit as long as combined wattage stays under the rated ceiling."
  },
  {
    "q": "What happens if I use a splitter cable instead of a dual-rail unit?",
    "a": "A splitter divides the same rail's current between two devices rather than giving each device its own independent supply, which can starve both devices of current if either draws close to the rail's rated maximum. A genuine dual-rail unit is safer for two devices with different voltage or current needs."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-mini-ups-for-routers","title":"8 Best Mini UPS for Routers in 2026"},{"href":"/guide/best-mini-ups-for-routers-and-onus","title":"6 Best Mini UPS for Routers and ONUs in 2026"},{"href":"/guide/best-mini-ups-for-fiber-routers","title":"7 Best Mini UPS for Fiber Routers in 2026"}];
