export const guideSlug = "best-printers-under-150";
export const guideTitle = "6 Best Printers Under $150 in 2026";
export const metaTitle = "Best Printers Under $150 in 2026 (Verified Prices)";
export const metaDescription =
  "6 best printers under $150 in 2026, all verified current pricing. Compare ink-tank break-even math, feature sets, and which pick fits your print volume.";
export const mainKeyword = "printers under $150";
export const introParagraphs = [
  "At the $150 ceiling, you get real choice: full-featured inkjet all-in-ones with duplex printing and document feeders, a genuine monochrome laser, and enough room to think seriously about whether an ink-tank system's math works for your household or office before committing.",
  "Below are 6 printers we evaluated at this price tier, all verified to genuinely fall under $150, ranked on true cost per page, feature completeness, and fit for different print volumes.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg";

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
    id: "brother-hl-l2405w-mono-laser",
    rank: 1,
    badge: "Best for Text Volume",
    name: "Brother HL-L2405W Wireless Compact Monochrome Laser Printer",
    price: "$139.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPL7HRQN?tag=deskfinds0d-20",
    description:
      "The HL-L2405W is the only laser printer at this price tier in our lineup, and it changes the running-cost math meaningfully for anyone printing mostly black-and-white text. Toner costs less per page than inkjet cartridges over time, and toner doesn't dry out the way idle ink cartridges can.\n\nIt skips scan and copy to keep the price under $150, so pair it with a separate scanner if you need one. Mobile printing and wireless setup make it easy to add to a home network without extra cabling.",
    specs: [
      "Monochrome laser engine",
      "Print only, no scan or copy",
      "Wireless and mobile printing",
      "Works with Alexa",
      "Compact footprint",
    ],
    pros: [
      "Lowest cost per page for text-heavy printing in this list",
      "Toner doesn't dry out during slow weeks",
      "Compact for a laser printer",
      "Reliable wireless setup",
    ],
    cons: [
      "No scan or copy functions",
      "No color output",
      "Higher upfront cost than the inkjets in this list",
    ],
    bestFor: "Home offices printing mostly black-and-white text documents",
  },
  {
    id: "canon-imageclass-lbp6030w-under150",
    rank: 2,
    badge: "Best Budget Laser",
    name: "Canon imageCLASS LBP6030w Compact Wireless Laser Printer",
    price: "$87.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GFXE7NdOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00K5UZO0Q?tag=deskfinds0d-20",
    description:
      "This compact laser undercuts the Brother laser above on price while offering the same core toner economics, up to 19 pages per minute of monochrome output with a lower cost per page than any inkjet in this list. It's print-only, which keeps both the price and the footprint small.\n\nFor anyone deciding between the two laser picks here, this is the better fit if budget matters more than the small speed and build differences the pricier Brother offers.",
    specs: [
      "Monochrome laser engine, up to 19 PPM",
      "Print only",
      "Wireless connectivity",
      "Compact footprint",
      "1-year limited warranty",
    ],
    pros: [
      "Lowest price laser option in this list",
      "Low true cost per page for text printing",
      "Compact footprint",
      "Fast for monochrome text output",
    ],
    cons: [
      "No scan or copy",
      "No color",
      "Fewer connectivity options than the pricier Brother laser",
    ],
    bestFor: "Budget-conscious buyers who want laser economics without the higher Brother price",
  },
  {
    id: "canon-pixma-ts6520-under150",
    rank: 3,
    badge: "Best Display and Controls",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=deskfinds0d-20",
    description:
      "The TS6520 brings a 1.42-inch OLED display and clearer controls than most inkjets at this tier, with automatic duplex printing plus scan and copy included. It's a well-rounded home printer that balances usability against ongoing ink cost.\n\nColor output still runs on a combined cartridge design common at this price, so heavy single-color printing draws down the whole cartridge faster than a separate-tank system would. For general home use it remains one of the easiest printers in this list to live with day to day.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex printing",
      "1.42-inch OLED display",
      "Intuitive control panel",
      "Compact design",
    ],
    pros: [
      "Clearest display and controls in this list",
      "Duplex printing included",
      "Full print, scan, copy function set",
      "Comfortably under budget",
    ],
    cons: [
      "Combined color cartridge design",
      "No fax or document feeder",
      "Cartridge cost rises with heavy printing",
    ],
    bestFor: "Home users who want the easiest day-to-day control panel experience",
  },
  {
    id: "canon-pixma-tr4720-under150",
    rank: 4,
    badge: "Best for Fax and Document Feeding",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXKNB9?tag=deskfinds0d-20",
    description:
      "The PIXMA TR4720 keeps an automatic document feeder and built-in fax, features many printers drop well before this price ceiling. That makes it a fit for a home office that still occasionally needs to scan or fax multi-page paperwork.\n\nAt $69, it leaves plenty of budget headroom under the $150 ceiling for anyone deciding whether to spend more elsewhere, like an ink-tank system, once monthly volume is factored in.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder (ADF)",
      "Mobile printing support",
      "Wireless connectivity",
      "Compact design",
    ],
    pros: [
      "Includes ADF and fax at a low price point",
      "Full document workflow support",
      "Wireless and mobile printing",
      "Leaves budget room under the $150 ceiling",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Entry-tier build quality",
    ],
    bestFor: "Home offices needing fax and document feeding without spending near the full budget",
  },
  {
    id: "hp-deskjet-4355-under150",
    rank: 5,
    badge: "Best for Light Use",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "The DeskJet 4355 covers print, scan, and copy at the lowest price in this list, with a 3-month Instant Ink trial to soften early cartridge cost. It's wireless and simple to set up, a solid entry point for light home printing needs.\n\nIf your household prints only occasionally, this frees up the most budget headroom of any pick here to put toward paper, extra ink, or another desk accessory instead.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "Compact footprint",
      "AI-capable printing features",
    ],
    pros: [
      "Lowest price in this list",
      "Instant Ink trial offsets early ink cost",
      "Simple wireless setup",
      "Frees up budget for accessories or paper",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Best suited to light, occasional printing",
    ],
    bestFor: "Light home printing where saving budget matters most",
  },
  {
    id: "canon-pixma-ts4320-under150",
    rank: 6,
    badge: "Best for Double-Sided Printing",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=deskfinds0d-20",
    description:
      "The PIXMA TS4320 is the least expensive pick in this list that still includes automatic duplex printing, a genuinely useful feature for anyone printing multi-page documents regularly. Scan and copy are included in a compact, easy-to-set-up design.\n\nAt $64 it leaves the most budget room under the $150 ceiling of any pick here, which is worth considering if you'd rather put the savings toward extra ink or a printer stand instead.",
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
      "Simple setup",
      "1-year limited warranty included",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic document feeder",
      "Entry-tier build quality",
    ],
    bestFor: "Buyers who want duplex printing while spending the least under $150",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Ink-tank versus cartridge break-even math",
    description: "Weighed whether a cartridge printer at this tier or stretching toward an ink-tank system pays off faster, based on realistic monthly print volume.",
  },
  {
    title: "Verified current pricing under $150",
    description: "Confirmed each pick's actual listed price stays genuinely under the $150 ceiling this guide promises, dropping any option that exceeded it.",
  },
  {
    title: "Feature completeness at this tier",
    description: "Checked which picks include duplex printing, an automatic document feeder, or fax, features that become more common but still aren't universal at $150.",
  },
  {
    title: "Laser versus inkjet cost per page",
    description: "Compared toner and cartridge running costs directly, since two genuine laser options exist at this tier alongside the inkjets.",
  },
  {
    title: "Budget headroom for different needs",
    description: "Considered how much of the $150 ceiling each pick actually uses, since a $64 pick leaves more room to spend on paper, ink, or accessories than a $140 one.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Consider whether ink-tank crosses the break-even point for you",
    explanation:
      "An ink-tank printer typically costs more upfront than any pick in this list, but the ink-tank refill economics break even against cartridge costs after roughly a few hundred pages of printing for most households. If you print more than about 100 pages a month, it's worth pricing an ink-tank model even if it pushes past $150.",
  },
  {
    criterion: "Laser wins on cost per page for text at this tier",
    explanation:
      "Both laser picks in this list, the Brother HL-L2405W and Canon imageCLASS LBP6030w, cost less per printed page than any inkjet here once toner is factored in. Choose laser if your printing is mostly black-and-white text rather than color images.",
  },
  {
    criterion: "Refurbished or open-box can stretch your $150 further",
    explanation:
      "A refurbished or open-box printer at this price tier is sometimes the same model that sells new for $250 or more, a legitimate way to get more features for your budget. Buy only from a seller offering a return window or warranty on the refurbished unit.",
  },
  {
    criterion: "Duplex printing isn't universal even at $150",
    explanation:
      "Not every printer at this tier includes automatic duplex printing, check the spec sheet directly rather than assuming it's included once you're spending more than $100. Three of the six picks in this list include it, three don't.",
  },
  {
    criterion: "A combined color cartridge still raises cost at this tier",
    explanation:
      "Most inkjets under $150 still use one cartridge for all three colors instead of separate tanks, so heavy single-color printing depletes the whole cartridge faster. This matters more the higher your color print volume climbs.",
  },
  {
    criterion: "Match feature completeness to what you'll actually use",
    explanation:
      "Fax and an automatic document feeder are genuinely useful for some home offices and dead weight for others. Don't pay for features you won't use when a simpler, cheaper pick in this list covers the same core printing need.",
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
        label: "Mostly black-and-white text",
        text: "The Brother HL-L2405W or Canon imageCLASS LBP6030w laser printers have the lowest cost per page in this list.",
      },
      {
        label: "Regular double-sided documents",
        text: "The Canon PIXMA TS4320 is the cheapest pick here with automatic duplex printing included.",
      },
      {
        label: "Occasional fax or multi-page scanning",
        text: "The Canon PIXMA TR4720 is the only pick in this list with both an ADF and fax.",
      },
      {
        label: "Light, occasional home printing",
        text: "The HP DeskJet 4355 covers the basics at the lowest price in this list.",
      },
    ],
  },
  {
    subheading: "Ink-Tank Break-Even at This Price Tier",
    intro: "The core decision at $150 is whether to stay with a cartridge printer or stretch toward an ink-tank system.",
    table: {
      headers: ["Monthly print volume", "Better economics", "Recommendation"],
      rows: [
        ["Under 50 pages/month", "Cartridge inkjet", "Any inkjet pick in this list, HP DeskJet 4355 saves the most upfront"],
        ["50-150 pages/month, mostly text", "Laser toner", "Brother HL-L2405W or Canon imageCLASS LBP6030w"],
        ["150+ pages/month, mixed color", "Ink-tank system", "Worth pricing an ink-tank model above this $150 ceiling"],
      ],
    },
    note: "Ink-tank refill bottles typically cost a fraction of cartridge replacements per page, the upfront price premium usually pays back within months at consistent volume rather than years.",
  },
  {
    subheading: "Refurbished and Open-Box Guidance",
    cards: [
      {
        label: "Look for a stated return window",
        text: "A refurbished listing without at least a 30-day return window carries more risk, prioritize sellers who offer one.",
      },
      {
        label: "Check for a manufacturer or seller warranty",
        text: "Genuine refurbished units often still carry a shortened warranty, confirm this before buying instead of assuming none exists.",
      },
    ],
    note: "A refurbished $150 unit that sold new for $250 can outperform every new pick in this list on features, but only buy from a seller with clear return and warranty terms.",
  },
  {
    subheading: "Feature Checklist Against the $150 Ceiling",
    table: {
      headers: ["Feature", "Included in this list?", "Which picks"],
      rows: [
        ["Automatic duplex printing", "Yes, partially", "Canon PIXMA TS6520, TS4320"],
        ["Automatic document feeder", "Yes, one pick", "Canon PIXMA TR4720"],
        ["Fax", "Yes, one pick", "Canon PIXMA TR4720"],
        ["Laser toner economics", "Yes, two picks", "Brother HL-L2405W, Canon imageCLASS LBP6030w"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Should I buy an ink-tank printer instead of staying under $150?",
    a: "It depends on volume. If you print more than roughly 150 pages a month with a mix of color content, an ink-tank printer above this price tier usually pays back its higher upfront cost within months through cheaper refill bottles. Below that volume, a cartridge printer in this list is the more practical choice.",
  },
  {
    q: "Is a laser printer worth it at the $150 tier?",
    a: "Yes, if you print mostly text. Both laser picks in this list, the Brother HL-L2405W and Canon imageCLASS LBP6030w, cost less per page in toner than any inkjet here, though neither includes scan or copy.",
  },
  {
    q: "Is buying a refurbished printer a good way to get more features under $150?",
    a: "It can be. A refurbished or open-box unit at this price sometimes matches a model that sells new for $250 or more. Only buy from a seller offering a clear return window and some form of warranty on the refurbished unit.",
  },
  {
    q: "Which pick includes the most features under $150?",
    a: "The Canon PIXMA TR4720 includes an automatic document feeder and fax, features most printers at this tier skip, while still leaving significant budget room under the $150 ceiling.",
  },
  {
    q: "Do all printers under $150 include duplex printing?",
    a: "No. In this list, only the Canon PIXMA TS4320 and TS6520 include automatic duplex printing. Check the spec sheet directly rather than assuming it's standard once you're spending near $150.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-under-100", title: "Best Printers Under $100 (2026)" },
  { href: "/guide/best-printers-under-200", title: "Best Printers Under $200 (2026)" },
  { href: "/guide/best-budget-laser-printers", title: "Best Budget Laser Printers (2026)" },
  { href: "/guide/best-printers-for-home-offices", title: "Best Printers for Home Offices (2026)" },
];
