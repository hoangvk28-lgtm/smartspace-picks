export const guideSlug = "best-20000mah-mini-ups-for-wifi-routers";
export const guideTitle = "3 Best 20,000mAh Mini UPS for Wi-Fi Routers";
export const metaTitle = "Best 20,000mAh Mini UPS for Routers";
export const metaDescription = "20,000mAh isn't directly comparable across brands without knowing pack voltage. We converted this tier to watt-hours before ranking.";
export const mainKeyword = "20000mah mini ups for wifi routers";
export const introParagraphs = [
  "20,000mAh is a common headline capacity in this category, but the number alone doesn't tell you how much real energy a unit stores, that depends on the battery's cell voltage, which varies by brand and isn't always disclosed on the product listing.",
  "Where official specs published a watt-hour figure alongside the mAh number, we used Wh to rank rather than the raw capacity claim, since two 20,000mAh-labeled units can differ meaningfully in actual stored energy."
];
export const lastUpdated = "2026-08-13";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41CH0ulmnKL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-20000mah-mini-ups-for-wifi-routers-1",
    rank: 1,
    badge: "Best Overall",
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
    bestFor: "AVR-regulated 20,000mAh output",
  },
  {
    id: "best-20000mah-mini-ups-for-wifi-routers-2",
    rank: 2,
    badge: "Highest Verified Wh (74Wh)",
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
    bestFor: "the most real energy per mAh in this tier",
  },
  {
    id: "best-20000mah-mini-ups-for-wifi-routers-3",
    rank: 3,
    badge: "Most Protection Circuits",
    name: "UPS Battery Backup Portable 20000mAh",
    price: "$54.25",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31H163wUTgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F2K1PL64?tag=deskfinds0d-20",
    description: "20,000mAh with six separate protection circuits (overcharge, over-discharge, overcurrent, overload, over-temperature, short-circuit) and a compatibility claim of over 95% with mainstream routers and optical modems. The listing leans on broad device compatibility rather than publishing per-rail current specs the way CHINTE or ALFOINE do.\n\nIt's built and marketed as dual-purpose, router backup at a fixed location and a portable charger for travel, which shows in the compact, bag-friendly form factor. Buyers who need documented per-port current limits for load planning should cross-check the seller listing directly before assuming any specific rail's headroom.",
    specs: ["20,000mAh battery","6 protection circuits",">95% router/modem compatibility claim"],
    pros: ["Six separate protection circuits","Claimed 95%+ compatibility with mainstream routers/modems","Dual-purpose design works as a travel charger too","20,000mAh capacity is competitive for the price"],
    cons: ["No published per-rail current specs","Marketed as dual-purpose travel charger, less optimized for fixed installs","No PoE output"],
    bestFor: "buyers who prioritize safety features over raw specs",
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
    "subheading": "Why the Same mAh Number Isn't the Same Battery",
    "intro": "The Mini UPS Battery Backup 20000mAh publishes a 74Wh rating, meaning its pack runs at a higher voltage per cell than a generic 20,000mAh power bank rated closer to 37Wh would. When a listing doesn't publish Wh, assume it sits closer to the lower end of this range rather than the higher one.",
    "note": "If a listing only advertises mAh with no Wh figure anywhere in the spec sheet, treat the capacity claim as unverified rather than directly comparable to units that do disclose Wh."
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
    "q": "Why do two 20,000mAh mini UPS units have different runtimes?",
    "a": "Battery energy is determined by mAh multiplied by cell voltage, not mAh alone. A pack built from higher-voltage cells stores more real energy (measured in watt-hours) than one with the same mAh rating built from lower-voltage cells. Always compare Wh when it's available rather than the raw mAh headline."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-mini-ups-for-routers","title":"8 Best Mini UPS for Routers in 2026"},{"href":"/guide/best-10400mah-mini-ups-for-routers","title":"5 Best 10,400mAh Mini UPS for Routers in 2026"},{"href":"/guide/best-8800mah-mini-ups-for-routers","title":"Best 8,800mAh Mini UPS for Routers in 2026"}];
