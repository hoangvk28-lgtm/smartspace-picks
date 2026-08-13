export const guideSlug = "best-mini-ups-for-two-routers";
export const guideTitle = "6 Best Mini UPS for Two Routers in 2026";
export const metaTitle = "Best Mini UPS for Two Routers 2026";
export const metaDescription = "Two routers on one UPS needs real simultaneous outputs, not just a splitter cable. We compared units with genuine dual-output support.";
export const mainKeyword = "mini ups for two routers";
export const introParagraphs = [
  "Running two routers off a single mini UPS is possible, but only if the unit provides genuinely independent simultaneous outputs at sufficient combined wattage, a splitter cable on a single rail doesn't guarantee either router gets the current it needs, especially if both routers draw current near the rail's maximum rating.",
  "We prioritized units with either two separate 12V rails or documented headroom well above what a single router needs, since that's what actually determines whether two routers can share one UPS safely."
];
export const lastUpdated = "2026-08-13";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/312p5-wC-LL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-mini-ups-for-two-routers-1",
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
    bestFor: "two independent 12V rails, each with its own current budget",
  },
  {
    id: "best-mini-ups-for-two-routers-2",
    rank: 2,
    badge: "Best with AVR",
    name: "SKE DC20000 Plus Altair Mini DC UPS",
    price: "$73.69",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41CH0ulmnKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CQR5GMN4?tag=deskfinds0d-20",
    description: "20,000mAh with 5V, 9V, and 12V DC outputs plus USB and Type-C charging ports, and it's one of the few in this cluster that specifically calls out AVR (automatic voltage regulation) to keep output stable rather than just listing raw capacity.\n\nThe LED battery indicator shows remaining charge at a glance, useful during an extended outage when you're deciding whether to keep the router running or conserve the pack for a security camera instead. SKE markets this as a home-or-travel unit given its slim form factor, but doesn't publish a hard output-wattage ceiling the way TalentCell or CHINTE do.",
    specs: ["20,000mAh with AVR regulation","5V/9V/12V DC + USB + Type-C","LED battery indicator"],
    pros: ["Built-in AVR for stable output voltage","5V/9V/12V plus USB and Type-C charging in one unit","LED indicator makes remaining charge easy to check at a glance","Slim form factor fits tight spaces"],
    cons: ["No published maximum wattage ceiling","LED indicator only, no detailed status display","No PoE output for camera setups"],
    bestFor: "regulated output helps when two devices draw simultaneously",
  },
  {
    id: "best-mini-ups-for-two-routers-3",
    rank: 3,
    badge: "Highest Combined Headroom",
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
    bestFor: "four 12V ports under a 37W ceiling",
  },
  {
    id: "best-mini-ups-for-two-routers-4",
    rank: 4,
    badge: "Best with Mixed Voltage",
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
    bestFor: "two routers on different voltages (9V + 12V)",
  },
  {
    id: "best-mini-ups-for-two-routers-5",
    rank: 5,
    badge: "Best for Router + PoE Router",
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
    bestFor: "one standard router plus one PoE-powered router",
  },
  {
    id: "best-mini-ups-for-two-routers-6",
    rank: 6,
    badge: "Budget Two-Router Pick",
    name: "VISLONE Mini UPS Battery Backup 13500mAh",
    price: "$31.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/317XD3klVpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2QWNVCK?tag=deskfinds0d-20",
    description: "A straightforward 13,500mAh pack with 12V, 9V, and 5V DC output ports and a power-indicator LED for checking remaining charge without connecting to an app or display. VISLONE markets it across routers, cameras, switches, ONU, and modems without a stated wattage ceiling in the listing.\n\nThe compact, lightweight build is aimed as much at portable/travel charging as at fixed router backup, so buyers who need a documented maximum continuous output for load planning should look at CHINTE or TalentCell instead, which both publish explicit wattage caps.",
    specs: ["13,500mAh battery","12V / 9V / 5V DC output ports","LED power indicator"],
    pros: ["Simple 12V/9V/5V layout covers most routers without extra research","Compact and portable enough for travel use","Power indicator LED shows remaining charge at a glance","13,500mAh is a solid mid-tier capacity"],
    cons: ["No stated wattage ceiling for load planning","LED indicator only, no detailed charge percentage","No PoE output"],
    bestFor: "a lower-cost option for two low-draw routers",
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

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "Simultaneous Output Reality Check",
    "intro": "Before assuming two routers can share a UPS, confirm the unit documents simultaneous multi-port output at full current, not just a total wattage figure that assumes only one port is active at a time.",
    "table": {
      "headers": [
        "Two-router scenario",
        "Best pick"
      ],
      "rows": [
        [
          "Both routers 12V",
          "Mini UPS Battery Backup 20000mAh 74Wh (dual 12V, 5A shared)"
        ],
        [
          "One 12V, one 9V",
          "CHINTE Mini UPS 16000mAh"
        ],
        [
          "High combined current draw",
          "TalentCell 27000mAh (4x 12V ports, 37W ceiling)"
        ]
      ]
    }
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
    "q": "Can I just use a DC splitter cable to power two routers from one port?",
    "a": "You can, but a splitter divides one rail's current between two devices rather than giving each router its own independent supply. If either router draws current close to the rail's rated maximum, splitting it can leave both routers underpowered. A unit with two genuinely separate rails is safer."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-mini-ups-for-routers-and-modems","title":"7 Best Mini UPS for Routers and Modems in 2026"},{"href":"/guide/best-mini-ups-for-routers-and-onus","title":"6 Best Mini UPS for Routers and ONUs in 2026"},{"href":"/guide/best-12v-mini-ups-for-routers","title":"6 Best 12V Mini UPS for Routers in 2026"}];
