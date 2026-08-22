export const guideSlug = "best-small-surge-protectors-for-travel";
export const guideTitle = "5 Best Small Surge Protectors for Travel in 2026";
export const metaTitle = "Best Small Surge Protectors for Travel, Honestly Reviewed (2026)";
export const metaDescription =
  "5 compact travel surge protectors we evaluated, with the scope limitation competitors skip: a 120V US-market travel surge protector is often only genuinely applicable to domestic travel, not international trips.";
export const mainKeyword = "small surge protector";
export const introParagraphs = [
  "International power infrastructure quality varies significantly, and a traveler most needs reliable surge protection specifically in regions or buildings with less consistent grid power, yet a 120V-only US surge protector provides zero protection value internationally since it can't be safely used on a 230V circuit without a separate voltage converter.",
  "Ultra-compact travel surge protectors are especially likely to cut joule rating to save size and weight, precisely in the use case, unfamiliar electrical infrastructure, where protection arguably matters most.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31ovehM96AL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "spikecube-600j-traveloverall",
    rank: 1,
    badge: "Best Small Surge Protector for Travel Overall",
    name: "Eaton Tripp Lite SPIKECUBE Single Outlet Surge Protector Power Strip, 600 Joule Rating, Diagnostic LEDs, Portable Direct Plug-in Outlet Extender, Lifetime Manufacturer's Guarantee & $5,000 Insurance",
    price: "$15.53",
    rating: "4.7 stars from 6,466 Amazon ratings",
    reviews: "6,466 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ovehM96AL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00006B81E?tag=deskfinds0d-20",
    description:
      "Explicitly compact at just 2.5 inches tall, genuinely designed for suitcase or laptop bag packing, with 600 joules of disclosed surge protection and diagnostic LEDs. Includes lifetime guarantee and a competitive price connected equipment insurance.\\\n\\\nThis is a 120V US-market design, it is not a voltage converter, verify voltage compatibility separately before international travel. It leads this comparison on the strength of its balance of disclosed joule rating, outlet count, and review base, worth weighing directly against the [ETL Listed] Cable Matters 1350J Single Outlet Surge Protector. Worth knowing before you decide: 600 joules with diagnostic LEDs for status visibility. On the other side, 120V-only, not usable internationally without a separate converter. That's the main tradeoff to weigh against your own equipment and outlet needs.",
    specs: ["Single outlet, 600 joules","2.5in tall, portable direct-plug design","Diagnostic LEDs","Lifetime guarantee, $5,000 insurance"],
    pros: ["Genuinely compact for suitcase or laptop bag packing","600 joules with diagnostic LEDs for status visibility","Lifetime guarantee and connected equipment insurance","Large, well-established review base"],
    cons: ["120V-only, not usable internationally without a separate converter","Single outlet only","400/500/500 clamping voltage not the lowest available"],
    bestFor: "Domestic US travelers who want a compact, well-insured single-outlet surge protector",
  },
  {
    id: "cablematters-1350j-travelalt",
    rank: 2,
    badge: "Best High-Joule Compact Travel Pick",
    name: "[ETL Listed] Cable Matters 1350J Single Outlet Surge Protector, White",
    price: "$9.99",
    rating: "4.7 stars from 2,241 Amazon ratings",
    reviews: "2,241 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e0JpMEJvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09NP7VSNK?tag=deskfinds0d-20",
    description:
      "1350 joules in a genuinely compact single-outlet design, more capacity than the typical ultra-compact travel surge protector without significantly larger size. ETL listed.\\n\\nThis higher joule rating for its size directly addresses the common tradeoff where compact travel units cut protection to save space.\n\nSet against the Eaton Tripp Lite SPIKECUBE Single Outlet Surge Protector Power Strip, the tradeoff here comes down to price versus disclosed joule rating and outlet count, not a straightforward upgrade or downgrade either way.\n\nWorth knowing before you decide: ETL listed for verified safety. On the other side, 120V-only, not for international use. That's the main tradeoff to weigh against your own equipment and outlet needs.",
    specs: ["Single outlet, 1350 joules","ETL listed","Compact design","Affordable"],
    pros: ["Higher joule rating than typical for this compact size","ETL listed for verified safety","Very affordable","Solid rating base"],
    cons: ["120V-only, not for international use","Single outlet only","Smaller review base than the top pick"],
    bestFor: "Buyers who want above-average joule capacity in a genuinely compact travel design",
  },
  {
    id: "cablematters-2pack-travelalt2",
    rank: 3,
    badge: "Best 2-Pack Travel Pick",
    name: "[ETL Listed] Cable Matters 2-Pack 1350J Single Outlet Surge Protector",
    price: "$17.99",
    rating: "4.7 stars from 2,241 Amazon ratings",
    reviews: "2,241 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/314n2Zz2FhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BNW64BPF?tag=deskfinds0d-20",
    description:
      "A 2-pack of the same 1350 joule compact design, genuinely useful if you travel with a companion or want a spare for two separate outlets. ETL listed.\\n\\nSame domestic-only scope applies to both units, verify voltage compatibility before any international trip.\n\nRelative to the [ETL Listed] Cable Matters 1350J Single Outlet Surge Protector, this pick leans toward a different priority, whether that's a lower price, more outlets, or a form factor suited to a different install situation.\n\nWorth knowing before you decide: Higher joule rating than typical for this compact size. On the other side, 120V-only, not for international use. That's the main tradeoff to weigh against your own equipment and outlet needs.",
    specs: ["2 single-outlet units, 1350 joules each","ETL listed","Compact design","2-pack value"],
    pros: ["2-pack for two separate travel outlet needs","Higher joule rating than typical for this compact size","ETL listed","Good value per unit"],
    cons: ["120V-only, not for international use","Single outlet per unit","Same smaller review base as the single-pack"],
    bestFor: "Buyers who travel with a companion or want a backup unit",
  },
  {
    id: "single-4pack-travelbudget",
    rank: 4,
    badge: "Best Budget Multi-Pack Travel Pick",
    name: "Single Surge Protector Plug, Grounded Outlet Wall Tap Adapter with Indicator Light, 1 Outlet,245J/125V, ETL, White, 4Pack",
    price: "$11.69",
    rating: "4.6 stars from 5,166 Amazon ratings",
    reviews: "5,166 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wknFuDByL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Q3DJL3W?tag=deskfinds0d-20",
    description:
      "A genuinely affordable 4-pack for buyers who want multiple compact travel surge protectors, though the 245 joule rating is notably lower than the other picks in this guide. ETL listed with an indicator light.\\n\\nAt this lower joule rating, this is best for basic electronics rather than valuable devices, consider a higher-joule pick if protecting an expensive laptop specifically.\n\nCompared with the [ETL Listed] Cable Matters 2 above, this pick trades some of that pick's proven track record for a different balance of price and joule rating, worth weighing against your own equipment.\n\nWorth knowing before you decide: ETL listed with indicator light. On the other side, Lowest joule rating in this guide, best for basic electronics. That's the main tradeoff to weigh against your own equipment and outlet needs.",
    specs: ["1 outlet each, 245J/125V, 4-pack","ETL listed, indicator light","Grounded outlet wall tap design","Most affordable per-unit price"],
    pros: ["4-pack offers the most units for the price","ETL listed with indicator light","Very affordable per unit","Solid rating base"],
    cons: ["Lowest joule rating in this guide, best for basic electronics","120V-only","Single outlet per unit"],
    bestFor: "Budget-conscious buyers who want multiple compact units for basic electronics",
  },
  {
    id: "tessan-single-1050j-travelalt3",
    rank: 5,
    badge: "Best Single-Outlet High-Joule Travel Pick",
    name: "TESSAN Single Outlet Wall Surge Protector with 1050J Surge Protector, Grey",
    price: "$9.99",
    rating: "4.7 stars from 208 Amazon ratings",
    reviews: "208 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21sqvh28s1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F1T9R63P?tag=deskfinds0d-20",
    description:
      "1050 joules in a genuinely compact single-outlet design at an affordable price, a solid middle ground between the ultra-budget and premium picks in this guide.\\n\\nSmaller review base as a newer listing, weigh that against the genuinely strong joule rating for this compact form factor.\n\nSet against the Single Surge Protector Plug, the tradeoff here comes down to price versus disclosed joule rating and outlet count, not a straightforward upgrade or downgrade either way.\n\nWorth knowing before you decide: Very affordable. On the other side, Smaller review base as a newer product. That's the main tradeoff to weigh against your own equipment and outlet needs.",
    specs: ["Single outlet, 1050 joules","Compact wall design","Affordable","Solid joule rating for the size"],
    pros: ["1050 joules, solid rating for a compact single-outlet design","Very affordable","Compact for travel packing","Good middle-ground option"],
    cons: ["Smaller review base as a newer product","120V-only, not for international use","Single outlet only"],
    bestFor: "Buyers who want a solid joule rating in a compact, affordable single-outlet design",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Domestic-only scope limitation stated clearly for every pick", description: "Explicitly noted that every pick in this guide is a 120V US-market design, not a voltage converter, correcting the assumption that a travel surge protector solves international electrical protection universally." },
  { title: "Joule rating verified against typical compact-travel-unit cost-cutting", description: "Flagged that ultra-compact travel surge protectors are especially likely to cut joule rating to save size and weight, precisely the use case where protection matters most given unfamiliar electrical infrastructure." },
  { title: "MOV physical-shock sensitivity considered for suitcase-packing stress", description: "Noted that a physically stressed MOV component could degrade performance in a less obvious, partial way than a basic power strip's simple conductor, a durability nuance specific to this surge-protection subcategory under travel packing stress." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Disclosed Joule Rating",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around 1350 joules",
          "[ETL Listed] Cable Matters 1350J Single Outlet Surge Protector"
        ],
        [
          "Around 1350 joules",
          "[ETL Listed] Cable Matters 2"
        ],
        [
          "Around 1050 joules",
          "TESSAN Single Outlet Wall Surge Protector with 1050J Surge Protector"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $10",
          "[ETL Listed] Cable Matters 1350J Single Outlet Surge Protector"
        ],
        [
          "Up to $18",
          "[ETL Listed] Cable Matters 2"
        ]
      ]
    }
  },
  {
    "subheading": "Joule Rating vs Price",
    "cards": [
      {
        "label": "[ETL Listed] Cable Matters 1350J Single Outlet Surge Protector",
        "text": "The lower-priced option in this comparison, worth checking its disclosed joule rating against your equipment's value."
      },
      {
        "label": "[ETL Listed] Cable Matters 2",
        "text": "The higher-priced option, worth it if it offers real protection headroom above the cheaper pick's rating."
      }
    ],
    "note": "Default to [ETL Listed] Cable Matters 1350J Single Outlet Surge Protector unless your equipment's value genuinely calls for more protection."
  },
  {
    "subheading": "By Outlet Count",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "1 outlets",
          "Single Surge Protector Plug"
        ]
      ]
    }
  },
  {
    "subheading": "For a Home Office Setup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A disclosed joule rating of at least 1000-2000 with UL 1449 certification, plus enough spaced outlets for a monitor, dock, and peripherals."
      },
      {
        "label": "In this comparison",
        "text": "[ETL Listed] Cable Matters 1350J Single Outlet Surge Protector discloses the highest joule rating at 1350 joules."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your equipment is expensive or sensitive, where [ETL Listed] Cable Matters 2's higher price buys real protection headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You're protecting lower-value, easily replaceable electronics, where [ETL Listed] Cable Matters 1350J Single Outlet Surge Protector covers the same basic job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Check the disclosed joule rating, not just the word \"surge protector\"",
    "explanation": "A joule rating measures how much total surge energy a device can absorb before it needs replacing, and plenty of products marketed simply as a \"power strip\" or \"surge protector\" either omit this number entirely or bury it deep in the specs.\n\nThis matters because a device with no real joule rating, or a very low one under 600, may offer only minimal protection, essentially a glorified extension cord with a marketing label, while a legitimate surge protector for computer or home-office equipment typically starts around 1000 to 2000 joules or higher.\n\nLook for the specific joule number stated in the listing title or bullet points, and treat any listing that only says \"surge protection\" with no number attached as a red flag."
  },
  {
    "criterion": "Match outlet count and spacing to what you're actually plugging in",
    "explanation": "The number of outlets on the spec sheet doesn't tell the whole story, spacing between outlets matters just as much, since bulky wall adapters or power bricks for a monitor, printer, or charger can block adjacent outlets even on a strip that technically has enough slots.\n\nThis is a common real-world frustration where a 6-outlet strip effectively becomes a 3 or 4-outlet strip once actual devices are plugged in.\n\nCheck product photos and reviews for outlet spacing specifically, and count how many bulky adapters you'll actually need to plug in side by side before assuming the listed outlet count covers your setup."
  },
  {
    "criterion": "Verify UL listing, since surge protection claims aren't self-certifying",
    "explanation": "UL (Underwriters Laboratories) certification is an independent third-party safety and performance verification, not a marketing claim a manufacturer can just assert on its own.\n\nA genuine surge protector should carry UL 1449 certification specifically, the standard for surge protective devices, distinct from a basic UL listing that only covers general electrical safety without verifying surge performance. This matters because an uncertified device may not actually clamp voltage spikes as claimed, leaving connected equipment exposed despite the \"surge protector\" label.\n\nCheck the listing or product photos for a UL 1449 mark specifically, not just a generic UL logo."
  },
  {
    "criterion": "Consider USB ports and their combined wattage, not just port count",
    "explanation": "A strip listing 4 USB ports doesn't guarantee those ports can charge 4 devices at full speed simultaneously, the ports typically share a combined wattage budget, so charging speed can drop noticeably when multiple devices draw power at once.\n\nThis matters more if you regularly charge a phone, tablet, and other device all at the same time from the same strip, versus occasional single-device charging.\n\nCheck the listing for total USB output in watts, not just the port count, and compare that figure against your devices' actual charging requirements if fast charging matters to you."
  },
  {
    "criterion": "Check the warranty and connected-equipment protection guarantee",
    "explanation": "Many legitimate surge protectors back their protection with a manufacturer's connected-equipment warranty, a dollar-amount guarantee to cover damage to plugged-in devices if the surge protector fails to do its job.\n\nThis is a meaningfully stronger signal of manufacturer confidence than a basic product warranty covering only the strip itself, since it puts real money behind the surge-protection claim.\n\nCheck the listing for a specific connected-equipment warranty amount and duration, and treat the absence of one as a sign the surge protection claim may be more marketing than substance."
  }
];

export const faq: FaqItem[] = [
  { q: "Can I use a US travel surge protector internationally?", a: "Generally no, most are 120V-only and not voltage converters, using one on a 230V circuit abroad, even via a simple plug-shape adapter, can damage the unit or your electronics." },
  { q: "Do compact travel surge protectors have weaker protection than full-size ones?", a: "Often yes, ultra-compact designs are especially likely to cut joule rating to save size and weight, though some picks in this guide offer above-average joule capacity for their compact size, worth seeking out specifically." },
  { q: "What should international travelers use for surge protection?", a: "Either a dedicated voltage-converting device with its own surge protection rating, or accept that a US-market travel surge protector is domestic-travel-only, don't assume one product solves both needs." },
  { q: "Does suitcase packing damage a travel surge protector's MOV components?", a: "It can, in a less obvious way than a basic power strip. A physically stressed MOV component from repeated packing and impact can degrade performance partially rather than simply working or not working." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-travel-power-strips", title: "Best Travel Power Strips (2026)" },
  { href: "/guide/best-single-outlet-surge-protectors", title: "Best Single-Outlet Surge Protectors (2026)" },
  { href: "/guide/best-cruise-approved-power-strips", title: "Best Cruise-Approved Power Strips (2026)" },
];
