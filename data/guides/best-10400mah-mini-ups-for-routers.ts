export const guideSlug = "best-10400mah-mini-ups-for-routers";
export const guideTitle = "5 Best 10,400mAh Mini UPS for Routers in 2026";
export const metaTitle = "Best 10,400mAh Mini UPS for Routers";
export const metaDescription = "10,400mAh is a common WGP-style tier, but real watt-hours vary between products carrying the same label. We compared the current lineup.";
export const mainKeyword = "10400mah mini ups for routers";
export const introParagraphs = [
  "10,400mAh is one of the most common capacity labels in this category, largely because it's the tier WGP popularized for router-plus-ONU backup. But not every 10,400mAh-labeled product carries the same real energy, we found products under this exact label ranging from 18Wh to 38Wh.",
  "We ranked this cluster primarily by verified watt-hours rather than the shared mAh headline, since two units with the identical capacity claim can differ in real runtime by more than double."
];
export const lastUpdated = "2026-08-13";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/31zzzW2SW3L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-10400mah-mini-ups-for-routers-1",
    rank: 1,
    badge: "Best Overall (38Wh)",
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
    bestFor: "the highest verified energy in this capacity tier",
  },
  {
    id: "best-10400mah-mini-ups-for-routers-2",
    rank: 2,
    badge: "Strong Alternative",
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
    bestFor: "multi-rail output with a larger overall pack",
  },
  {
    id: "best-10400mah-mini-ups-for-routers-3",
    rank: 3,
    badge: "Best Budget 18Wh Pick",
    name: "Luqeeg 10400mAh Mini UPS Battery Backup",
    price: "$27.61",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Visb--KDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLVSQY5S?tag=deskfinds0d-20",
    description: "10,400mAh/18Wh with dual DC inputs at 9V and 12V plus a USB 5V/2A output, aimed at routers, modems, security cameras, and fingerprint recorders. Luqeeg's listing is unusually specific about behavior during a blackout: the unit switches to battery mode automatically and keeps network gear live long enough for in-progress transfers to finish before shutting down.\n\nIts compact housing is designed to sit unobtrusively on a shelf or in a network cabinet rather than compete on raw capacity, at 18Wh it sits in the same energy tier as the other 10,400mAh-labeled units here, reinforcing that this capacity class tops out around 5-6 hours of light-router runtime rather than a full workday of backup.",
    specs: ["10,400mAh / 18Wh battery","Dual DC input: 9V and 12V","Automatic switchover on outage"],
    pros: ["Automatic switchover keeps network devices live during outages","Compact housing for discreet desk or cabinet placement","Dual DC input (9V and 12V) adds charging flexibility","Multiple protection circuits guard against voltage irregularities"],
    cons: ["18Wh capacity limits runtime to short-to-moderate outages","Dual DC input only, no USB-C charging"],
    bestFor: "dual DC input at a lower price",
  },
  {
    id: "best-10400mah-mini-ups-for-routers-4",
    rank: 4,
    badge: "Alternate 18Wh Pick",
    name: "Mini UPS Battery Backup 10400mAh 18Wh",
    price: "$35.13",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41WA0ITbrVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGVZBCKH?tag=deskfinds0d-20",
    description: "A 10,400mAh/18Wh pack with the same dual-input design as its sibling in this lineup, 9V/12V DC (faster charging) or 5V/2A USB (slower), plus USB 5V/2A, DC 9V/2A, and DC 12V/2A outputs, each rated up to 2A.\n\nThe 18Wh figure is lower than the 38Wh some 10,400mAh-labeled competitors claim, illustrating exactly why raw mAh numbers can't be compared directly across products without knowing the pack voltage, two units with the same headline capacity can differ in real energy by more than 2x depending on cell configuration.",
    specs: ["10,400mAh / 18Wh battery","Dual input: 9V/12V DC or 5V USB","USB 5V/2A, DC 9V/2A, DC 12V/2A"],
    pros: ["Dual charging input flexibility","Compact design for shelf or cabinet placement","Multiple intelligent protection circuits","Can double as a standard USB charging bank"],
    cons: ["18Wh actual energy is lower than some same-mAh competitors","No PoE or AVR features","No USB-C charging"],
    bestFor: "same energy tier, different physical design",
  },
  {
    id: "best-10400mah-mini-ups-for-routers-5",
    rank: 5,
    badge: "Dual-Input Budget Pick",
    name: "Mini UPS Battery Backup 10400mAh (Dual Input)",
    price: "Check price",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41WA0ITbrVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CGHGVG3L?tag=deskfinds0d-20",
    description: "10,400mAh with two charging input paths, 9V/12V DC via adapter, or 5V/2A via USB, and three output rails: USB 5V/2A, DC 9V/2A, DC 12V/2A. The dual-input design means you can recharge it with whichever adapter you already have on hand rather than being locked to one charger type.\n\nAll outputs are capped at 2A, which the listing states explicitly rather than leaving buyers to infer from a total-wattage figure. That makes per-port headroom easy to check against a router's power label, though the unit doesn't publish a combined simultaneous-output ceiling.",
    specs: ["10,400mAh, dual charging input","USB 5V/2A, DC 9V/2A, DC 12V/2A","9V/12V DC or 5V USB input"],
    pros: ["Dual charging input (9V/12V DC or 5V USB)","Clear per-port 2A current rating","Doubles as a standard charging power bank","Compact, simple design"],
    cons: ["No stated combined output ceiling","10,400mAh label without a disclosed Wh figure","No PoE output"],
    bestFor: "flexible charging via USB or DC adapter",
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
    "subheading": "Same Label, Different Energy",
    "intro": "The Yuuki Power unit publishes 38Wh at 10,400mAh, while the Luqeeg and two similarly-labeled competitors publish 18Wh at the same mAh figure, more than double the real energy difference under an identical headline number.",
    "table": {
      "headers": [
        "Product",
        "Labeled capacity",
        "Verified Wh"
      ],
      "rows": [
        [
          "Yuuki Power Mini UPS",
          "10,400mAh",
          "38Wh"
        ],
        [
          "Luqeeg Mini UPS",
          "10,400mAh",
          "18Wh"
        ],
        [
          "Mini UPS Battery Backup (CGVZBCKH)",
          "10,400mAh",
          "18Wh"
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
    "q": "Why do two 10,400mAh mini UPS units have different watt-hours?",
    "a": "Watt-hours depend on both the mAh rating and the battery's cell voltage. A 10,400mAh pack built from cells at a higher nominal voltage stores more real energy than a 10,400mAh pack built from lower-voltage cells, even though the mAh label is identical."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-8800mah-mini-ups-for-routers","title":"Best 8,800mAh Mini UPS for Routers in 2026"},{"href":"/guide/best-20000mah-mini-ups-for-wifi-routers","title":"3 Best 20,000mAh Mini UPS for Wi-Fi Routers"},{"href":"/guide/best-wgp-mini-ups-for-routers","title":"5 Best WGP Mini UPS for Routers in 2026"}];
