export const guideSlug = "best-printers-under-100";
export const guideTitle = "5 Best Printers Under $100 in 2026";
export const metaTitle = "Best Printers Under $100 in 2026 (Verified Prices)";
export const metaDescription =
  "5 best printers under $100 in 2026, all verified current pricing. Compare true first-year cost, feature cuts, and honest lifespan expectations at this price tier.";
export const mainKeyword = "printers under $100";
export const introParagraphs = [
  "A printer under $100 can absolutely handle everyday home or light office printing, but the price tag hides a real tradeoff most listings never explain: the sticker price is rarely the true first-year cost once ink is factored in, and features like duplex printing or an automatic document feeder are often cut entirely to hit this price point.",
  "Below are 5 printers we evaluated that genuinely sell under $100, ranked on true running cost, honest feature disclosure, and realistic lifespan expectations rather than sticker price alone.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "hp-deskjet-4355-wireless-aio",
    rank: 1,
    badge: "Best Overall",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "The DeskJet 4355 covers print, scan, and copy in one compact unit at under $70, with a 3-month Instant Ink trial included to soften the early cartridge cost that hits every budget inkjet eventually. Wireless setup connects it to a home network without extra cabling.\n\nAt this price, expect a single combined color cartridge design common to entry printers, meaning printing any single color still draws down the whole cartridge. It's a solid fit for light home printing but plan for standard cartridge pricing once the trial ends.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "Compact home-office footprint",
      "AI-capable printing features",
    ],
    pros: [
      "Lowest-priced all-in-one in this list with scan and copy",
      "Instant Ink trial offsets early ink cost",
      "Simple wireless setup",
      "Compact enough for a small desk",
    ],
    cons: [
      "Combined color cartridge raises cost once any single color runs low",
      "No automatic duplex printing",
      "Cartridge cost rises after the Instant Ink trial ends",
    ],
    bestFor: "Light home printing where budget matters more than advanced features",
  },
  {
    id: "canon-pixma-ts4320-duplex",
    rank: 2,
    badge: "Best for Double-Sided Printing",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=deskfinds0d-20",
    description:
      "The PIXMA TS4320 is the cheapest printer in this list that still includes automatic duplex printing, a feature many sub-$100 printers cut entirely to hit their price point. That alone cuts paper use roughly in half for anyone regularly printing multi-page documents.\n\nScan and copy round out the feature set in a compact design built for easy home setup. Expect the typical entry-tier lifespan of 2 to 3 years of steady use rather than the 5-plus years a mid-tier model can offer, a fair tradeoff at this price.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex (2-sided) printing",
      "Wireless printing",
      "Compact design",
      "Easy setup process",
    ],
    pros: [
      "Automatic duplex printing at the lowest price in this list",
      "Full print, scan, copy function set",
      "Simple setup for first-time buyers",
      "1-year limited warranty included",
    ],
    cons: [
      "Entry-tier build quality, expect 2-3 years of steady use",
      "Combined color cartridge design",
      "No automatic document feeder",
    ],
    bestFor: "Home users who print double-sided documents regularly on a tight budget",
  },
  {
    id: "canon-pixma-tr4720-fax-adf",
    rank: 3,
    badge: "Best for Document Feeding and Fax",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXKNB9?tag=deskfinds0d-20",
    description:
      "The PIXMA TR4720 is the rare sub-$100 printer that keeps an automatic document feeder and built-in fax, two features most budget printers cut first. That makes it useful for anyone who still needs to scan or fax multi-page documents without paying for a mid-tier multifunction unit.\n\nMobile printing rounds out a feature set that punches above its price, though as with any entry-tier printer, expect the tradeoffs common at this cost: a combined color cartridge and a shorter realistic lifespan than a $150-plus model.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder (ADF)",
      "Mobile printing support",
      "Wireless connectivity",
      "Compact home-office design",
    ],
    pros: [
      "Includes ADF and fax, rare at this price",
      "Full document workflow support for home offices",
      "Wireless and mobile printing",
      "Competitive price for the feature set",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Entry-tier build, expect 2-3 years of reliable use",
    ],
    bestFor: "Home offices that still need fax and document feeding on a budget",
  },
  {
    id: "canon-imageclass-lbp6030w-mono-laser",
    rank: 4,
    badge: "Best for Low Cost Per Page",
    name: "Canon imageCLASS LBP6030w Compact Wireless Laser Printer",
    price: "$87.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GFXE7NdOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00K5UZO0Q?tag=deskfinds0d-20",
    description:
      "This is the only laser printer in this list, and it changes the true first-year cost math significantly since toner costs less per page than inkjet cartridges over time. It prints monochrome only, at up to 19 pages per minute, making it the fastest text printer here.\n\nIt skips scan and copy entirely, print only, which is the tradeoff for staying under $100 with laser toner economics. For anyone printing mostly text documents rather than color images, the higher upfront price relative to the inkjets here can still work out cheaper by the end of year one.",
    specs: [
      "Monochrome laser engine, up to 19 PPM",
      "Print only, no scan or copy",
      "Wireless connectivity",
      "Compact footprint",
      "1-year limited warranty",
    ],
    pros: [
      "Lowest true cost per page in this list thanks to toner",
      "Fastest print speed here for text documents",
      "Compact for a laser printer",
      "Toner doesn't dry out like idle inkjet cartridges",
    ],
    cons: [
      "No scan or copy functions",
      "No color output",
      "Highest upfront price in this list, though often cheaper over a year of use",
    ],
    bestFor: "Text-heavy home printing where first-year total cost matters most",
  },
  {
    id: "canon-pixma-ts6520-oled-display",
    rank: 5,
    badge: "Best Display and Controls",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=deskfinds0d-20",
    description:
      "The TS6520 adds a 1.42-inch OLED display and a more intuitive control panel than the other inkjets in this list, useful for anyone who finds tiny budget-printer screens frustrating to navigate. Duplex printing is included alongside scan and copy in a compact design.\n\nThis is a well-rounded pick for home use that balances usability against the usual sub-$100 tradeoffs, a combined color cartridge and a shorter expected lifespan than mid-tier models, but the clearer display genuinely improves day-to-day use.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex printing",
      "1.42-inch OLED display",
      "Intuitive control panel",
      "Compact design",
    ],
    pros: [
      "Clearest, most intuitive display in this list",
      "Duplex printing included",
      "Full print, scan, copy function set",
      "Compact footprint for a home desk",
    ],
    cons: [
      "Combined color cartridge design",
      "Entry-tier lifespan expectation, 2-3 years of steady use",
      "No fax or document feeder",
    ],
    bestFor: "Home users who want an easier-to-navigate control panel on a budget",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "True first-year cost, not just sticker price",
    description: "Weighed ink or toner cartridge cost against the purchase price, since a cheap sub-$100 printer can cost more over a year of use than a pricier ink-tank alternative.",
  },
  {
    title: "Honest feature-cut disclosure",
    description: "Checked which common features, duplex printing, ADF, fax, are cut at this price tier so buyers know exactly what they're giving up before purchase, not after.",
  },
  {
    title: "Realistic lifespan expectations",
    description: "Set expectations around the typical 2-3 year lifespan of an entry-tier printer at this price versus the 5-plus years a mid-tier model can offer.",
  },
  {
    title: "Verified current pricing under $100",
    description: "Confirmed each pick's actual listed price stays genuinely under the $100 ceiling this guide promises, rather than assuming a printer belongs on price alone.",
  },
  {
    title: "Fit for light-to-moderate home use",
    description: "Assessed each pick against realistic home printing volume, occasional documents and photos, rather than sustained business-level output this price tier isn't built for.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Calculate the true first-year cost, not just the price tag",
    explanation:
      "A $70 inkjet with combined color cartridges can cost more over a year of moderate use than a $150 ink-tank printer, once replacement cartridges are factored in. If you print more than a few dozen pages a month, run the ink cost math before assuming the cheapest sticker price wins.",
  },
  {
    criterion: "Expect feature cuts at this price tier",
    explanation:
      "Sub-$100 printers commonly skip automatic duplex printing, an automatic document feeder, or use a single combined color cartridge instead of separate cyan, magenta, and yellow tanks. Check the spec sheet for these specific cuts before buying if any of them matter to your workflow.",
  },
  {
    criterion: "Set a realistic lifespan expectation",
    explanation:
      "An entry-tier printer at this price commonly lasts 2 to 3 years of steady use, compared to 5 or more years for a mid-tier model. That's a fair tradeoff for the lower price, but budget for eventual replacement rather than assuming it will last indefinitely.",
  },
  {
    criterion: "Laser changes the cost math for text-heavy printing",
    explanation:
      "If you print mostly black-and-white text, a monochrome laser like the imageCLASS LBP6030w often costs less per page in toner than an inkjet cartridge, even though its upfront price is the highest in this list. The math favors laser once your monthly volume climbs past light occasional use.",
  },
  {
    criterion: "A combined color cartridge raises cost sooner",
    explanation:
      "Several picks in this list use one cartridge for all three colors instead of separate tanks, meaning printing heavy magenta content, for example, drains cyan and yellow ink too. This raises the effective cost per color page compared to a separate-tank design.",
  },
  {
    criterion: "Confirm the printer actually stays under your budget ceiling",
    explanation:
      "Printer prices shift often, and a model advertised as budget-friendly can drift above $100 during a promotion lapse. Check the live listed price on Amazon before purchasing rather than relying on a guide's snapshot price alone.",
  },
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
    subheading: "By What You Print Most",
    cards: [
      {
        label: "Mostly text documents",
        text: "The Canon imageCLASS LBP6030w laser printer has the lowest true cost per page for text-heavy printing, despite the highest upfront price in this list.",
      },
      {
        label: "Occasional photos and color documents",
        text: "The HP DeskJet 4355 covers light color printing with an Instant Ink trial to soften early ink cost.",
      },
      {
        label: "Double-sided documents regularly",
        text: "The Canon PIXMA TS4320 is the cheapest pick here with automatic duplex printing built in.",
      },
      {
        label: "Multi-page scanning or occasional faxing",
        text: "The Canon PIXMA TR4720 is the only pick under $100 in this list with an automatic document feeder and fax.",
      },
    ],
  },
  {
    subheading: "First-Year True Cost, Sticker Price vs Ink Cost",
    intro: "The cheapest printer up front is not always the cheapest printer over a year of ownership.",
    table: {
      headers: ["Pick", "Sticker price", "First-year cost driver"],
      rows: [
        ["Canon imageCLASS LBP6030w", "$87.99", "Lowest ongoing cost per page thanks to toner"],
        ["HP DeskJet 4355", "$69.99", "Instant Ink trial softens early cost, standard cartridge pricing after"],
        ["Canon PIXMA TS4320", "$64.00", "Combined color cartridge raises cost with heavy color use"],
        ["Canon PIXMA TR4720", "$69.00", "Combined color cartridge, but ADF and fax add real utility"],
        ["Canon PIXMA TS6520", "$74.00", "Combined color cartridge, best display for everyday use"],
      ],
    },
    note: "If you print more than roughly 100 pages a month, the ink cost usually outweighs the sticker price difference within the first year, run the math before deciding.",
  },
  {
    subheading: "Feature Cuts to Expect Under $100",
    table: {
      headers: ["Feature", "Common at this tier?", "Which picks include it"],
      rows: [
        ["Automatic duplex printing", "Often cut", "Canon PIXMA TS4320, TS6520"],
        ["Automatic document feeder", "Rare", "Canon PIXMA TR4720"],
        ["Fax", "Rare", "Canon PIXMA TR4720"],
        ["Separate color cartridges", "Uncommon", "None of these picks, all use combined color cartridges except the mono laser"],
      ],
    },
  },
  {
    subheading: "When to Spend More Than $100",
    cards: [
      {
        label: "You print more than 100 pages a month",
        text: "An ink-tank printer in the $150-plus range will usually cost less over a year than any sub-$100 cartridge printer at that volume.",
      },
      {
        label: "You need duplex, ADF, and fax together",
        text: "No single pick in this list has all three, a mid-tier multifunction printer around $150-200 typically bundles them.",
      },
    ],
    note: "A sub-$100 printer is the right call for genuinely light, occasional home printing, not for anyone printing daily at volume.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "Is a printer under $100 worth buying, or should I spend more?",
    a: "It depends on your print volume. For light, occasional home printing, a sub-$100 printer like the ones in this list is a fine choice. If you regularly print more than 100 pages a month, a pricier ink-tank printer often costs less over a full year once ink is factored in.",
  },
  {
    q: "What features do budget printers under $100 usually cut?",
    a: "Automatic duplex printing, an automatic document feeder, and fax are the most commonly cut features at this price tier, and most budget inkjets use a single combined color cartridge instead of separate color tanks, which raises cost per color page.",
  },
  {
    q: "How long does a printer under $100 typically last?",
    a: "Expect roughly 2 to 3 years of steady use from an entry-tier printer at this price, compared to 5 or more years for a mid-tier model. That's a reasonable tradeoff for the lower cost as long as you budget for eventual replacement.",
  },
  {
    q: "Is a laser printer worth it under $100?",
    a: "Yes, if you print mostly text. The Canon imageCLASS LBP6030w has the highest upfront price in this list but the lowest cost per page thanks to toner, which can make it cheaper than an inkjet over a year of steady text printing.",
  },
  {
    q: "Why do so many budget printers use one combined color cartridge?",
    a: "It's a common cost-cutting design at this price tier. A combined cartridge holds cyan, magenta, and yellow in one unit, so printing heavy amounts of a single color drains the whole cartridge faster than a separate-tank design would.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-under-150", title: "Best Printers Under $150 (2026)" },
  { href: "/guide/best-printers-under-200", title: "Best Printers Under $200 (2026)" },
  { href: "/guide/best-budget-laser-printers", title: "Best Budget Laser Printers (2026)" },
  { href: "/guide/best-printers-for-home-use", title: "Best Printers for Home Use (2026)" },
];
