export const guideSlug = "best-mini-ups-for-routers-and-cctv-cameras";
export const guideTitle = "8 Best Mini UPS for Routers and CCTV Cameras in 2026";
export const metaTitle = "Best Mini UPS for Routers & CCTV 2026";
export const metaDescription = "Router plus CCTV camera backup means two different voltage classes and, often, PoE. We compared units built to handle both loads.";
export const mainKeyword = "mini ups for routers and cctv cameras";
export const introParagraphs = [
  "Backing up a router and a CCTV camera together is a genuinely different problem than backing up a router alone: camera load scales with count and infrared night-mode draw, and many cameras run on PoE rather than a simple DC barrel jack, which most router-only mini UPS units don't output.",
  "We prioritized units in this cluster that publish both DC and PoE output options, since that combination is what actually lets one unit cover a router and a PoE camera without a second backup device."
];
export const lastUpdated = "2026-08-13";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/31pHhSDy6PL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-1",
    rank: 1,
    badge: "Best Overall",
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
    bestFor: "PoE 15V/24V plus DC rails cover router and camera in one unit",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-2",
    rank: 2,
    badge: "Best PoE + LCD",
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
    bestFor: "buyers who want live status during a surveillance-critical outage",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-3",
    rank: 3,
    badge: "Highest PoE Voltage",
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
    bestFor: "cameras or NVRs that need 24V or 48V passive PoE",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-4",
    rank: 4,
    badge: "Budget Router + Camera Pick",
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
    bestFor: "single low-draw camera plus router",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-5",
    rank: 5,
    badge: "Best for Non-PoE Camera",
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
    bestFor: "cameras that use a standard 12V DC connection instead of PoE",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-6",
    rank: 6,
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
    bestFor: "minimizing recording gaps during a power transfer",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-7",
    rank: 7,
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
    bestFor: "stable regulated output for router plus camera together",
  },
  {
    id: "best-mini-ups-for-routers-and-cctv-cameras-8",
    rank: 8,
    badge: "Simple 3-Rail Pick",
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
    bestFor: "straightforward multi-camera households on a budget",
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
    "subheading": "Define What You're Actually Backing Up",
    "cards": [
      {
        "label": "Router only",
        "text": "Any single-rail unit in this list works; skip the PoE-specific models."
      },
      {
        "label": "Router + one PoE camera",
        "text": "The CHINTE or ALFOINE cover both a router's DC rail and a camera's passive PoE input from one unit."
      },
      {
        "label": "Router + NVR + multiple cameras",
        "text": "Model your combined wattage carefully, camera count and infrared night mode can push total draw well past what any single mini UPS in this cluster supports; consider a dedicated CCTV UPS instead."
      }
    ]
  },
  {
    "subheading": "Night Mode Changes the Math",
    "intro": "Infrared LEDs on budget cameras can meaningfully increase power draw after dark, which is exactly when a power outage is most likely to also knock out your porch lights. Size backup capacity to your camera's peak (night) draw, not its daytime average."
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
    "q": "Will a router-and-camera mini UPS keep my NVR recording during an outage?",
    "a": "Only if the NVR and any PoE switch feeding the cameras are also connected to the backup power, not just the router. Check whether your setup needs to keep three devices powered (router, NVR, camera/switch) rather than assuming router backup alone preserves video recording."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-mini-ups-for-routers","title":"8 Best Mini UPS for Routers in 2026"},{"href":"/guide/best-mini-ups-for-fiber-routers","title":"7 Best Mini UPS for Fiber Routers in 2026"},{"href":"/guide/best-12v-mini-ups-for-routers","title":"6 Best 12V Mini UPS for Routers in 2026"}];
