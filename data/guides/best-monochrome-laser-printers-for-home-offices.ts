export const guideSlug = "best-monochrome-laser-printers-for-home-offices";
export const guideTitle = "8 Best Monochrome Laser Printers for Home Offices in 2026";
export const metaTitle = "Best Monochrome Laser Printers for Home Offices in 2026";
export const metaDescription =
  "Laser printers we evaluated for home offices, covering starter toner traps, drum vs toner cost, warm-up time, ozone in small rooms, and third-party toner compatibility.";
export const mainKeyword = "monochrome laser printer for home office";
export const introParagraphs = [
  "Laser technology solves a specific home-office problem that inkjet doesn't: toner doesn't dry out sitting idle, print speed and text sharpness hold up at real volume, and cost per page drops the more you print. That makes a laser printer the right call for a home office with genuine, regular document output, not just occasional printing.",
  "Only two printers in this list are true dedicated monochrome laser engines. We've included two color laser printers that deliver the same crisp toner-based text in B&W mode, since some home offices genuinely need color occasionally. We've also included several inkjet all-in-ones that surface in monochrome laser searches, and we're flagging those honestly as non-laser alternatives rather than mislabeling them, since the toner economics and text quality this guide focuses on simply don't apply to them.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg";

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
    id: "brother-dcp-l2640dw-mono-laser",
    rank: 1,
    badge: "Best Overall Monochrome Laser",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser Printer",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=deskfinds0d-20",
    description:
      "This is a true dedicated monochrome laser engine, and the strongest overall pick here for a home office with real, regular document volume. The drum and toner unit are separate consumables on this model rather than integrated, which keeps replacement costs lower over time since a worn drum doesn't force a full toner swap and vice versa.\n\nLike most laser printers, it ships with a starter toner cartridge rated for meaningfully fewer pages than a full-yield replacement, commonly in the 700-1,000 page range versus roughly 3,000 for a full cartridge, so budget for that first replacement sooner than the box implies. Third-party toner compatibility with Brother printers is generally good, giving you a lower-cost refill path once the starter runs out.",
    specs: [
      "Monochrome laser engine",
      "Separate drum and toner units",
      "Duplex printing",
      "Wireless + mobile printing",
      "Generally tolerant of third-party toner",
    ],
    pros: [
      "Separate drum and toner units lower long-term cost",
      "Good third-party toner compatibility",
      "No idle-toner drying risk",
      "Fast, consistent duplex printing",
    ],
    cons: [
      "Starter toner yields far fewer pages than a full cartridge",
      "Monochrome only, no color printing",
      "Highest upfront price among the true laser picks",
    ],
    bestFor: "A home office with regular, genuine document volume that wants the lowest long-term cost",
  },
  {
    id: "hp-laserjet-m209d",
    rank: 2,
    badge: "Best Budget Monochrome Laser",
    name: "HP LaserJet M209d Laser Printer, Black and White",
    price: "$159.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/316tpuWileL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D96T79YF?tag=deskfinds0d-20",
    description:
      "The lowest-priced true laser printer in this list, the LaserJet M209d is a wired-only monochrome laser with automatic duplex printing. HP has a documented history of restricting third-party and non-HP toner via firmware updates on some models, so budget for genuine HP toner or verify compatibility of any third-party cartridge before relying on it as a cost-saving plan.\n\nCold-start warm-up runs roughly 10-15 seconds, faster if it's only waking from sleep mode rather than a full cold start, a real time saver for a home office printing quick one-off pages throughout the day. Being wired-only removes wifi dropout as a failure point entirely, a tradeoff some home offices will prefer.",
    specs: [
      "Monochrome laser engine",
      "Automatic duplex printing",
      "Wired USB connection only",
      "10-15 second cold-start warm-up",
      "HP firmware may restrict third-party toner",
    ],
    pros: [
      "Lowest price among true laser picks in this list",
      "No wifi dropout risk, wired only",
      "Fast cold-start warm-up",
      "No idle-toner drying risk",
    ],
    cons: [
      "HP has restricted third-party toner via firmware on some models",
      "No wireless connectivity",
      "Monochrome only",
    ],
    bestFor: "Budget-conscious home offices that don't need wireless printing",
  },
  {
    id: "brother-hl-l3220cdw-color-laser",
    rank: 3,
    badge: "Best Color Laser for Mostly-Mono Use",
    name: "Brother HL-L3220CDW Wireless Color Laser Printer",
    price: "$284.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/311SOXNvLIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CFCYYZLM?tag=deskfinds0d-20",
    description:
      "Worth flagging clearly: this is a color laser printer, not a monochrome-only model, and it costs more to run than a true mono laser if you're printing mostly black and white, since it holds four toner cartridges instead of one. In B&W mode it still delivers the same crisp, fused-toner text quality as any laser in this list.\n\nBrother's third-party toner tolerance is generally good, which helps offset the higher cost of maintaining four toner colors instead of one. Choose this over the dedicated mono picks above only if you'll actually use the color capability with some regularity; otherwise the Brother DCP-L2640DW is the more cost-effective choice for a mostly-mono home office.",
    specs: [
      "Color laser engine, not mono-only",
      "19 ppm print speed",
      "250-sheet paper tray",
      "Duplex printing",
      "Generally tolerant of third-party toner",
    ],
    pros: [
      "Laser-sharp B&W text when set to mono mode",
      "Color available for occasional use",
      "Good third-party toner compatibility",
      "Large 250-sheet tray",
    ],
    cons: [
      "Not a true monochrome-only laser, costs more to run for mostly-B&W use",
      "Four toner cartridges to maintain instead of one",
      "No built-in scanner",
    ],
    bestFor: "A home office that's mostly B&W but genuinely needs color sometimes",
  },
  {
    id: "canon-color-imageclass-mf753cdw",
    rank: 4,
    badge: "Best Color Laser All-in-One",
    name: "Canon Color imageCLASS MF753Cdw II Wireless Duplex Laser Printer",
    price: "$491.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31d5wmSRcAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FP3LJ74G?tag=deskfinds0d-20",
    description:
      "Another color laser, not a monochrome-only model, and clearly the most expensive pick in this list, aimed at a home office with real all-in-one needs, an auto document feeder, fax, and 35ppm speed, alongside occasional color. Canon's third-party toner tolerance runs mixed rather than consistently good or bad, so check compatibility of any specific third-party cartridge before buying in bulk.\n\nThe drum unit and toner cartridges are handled separately on this model, which is the better long-term cost structure versus an integrated design where a worn drum forces a full replacement of everything. For a home office genuinely printing mostly black and white text, this is more machine and more cost than necessary; the Brother DCP-L2640DW does that specific job for less than half the price.",
    specs: [
      "Color laser engine, not mono-only",
      "Auto document feeder",
      "35 ppm print speed",
      "Separate drum and toner units",
      "Mixed third-party toner compatibility",
    ],
    pros: [
      "Fastest print speed in this list",
      "Full all-in-one feature set with ADF and fax",
      "Separate drum and toner units",
      "Laser-sharp B&W text in mono mode",
    ],
    cons: [
      "Highest price in this list by a wide margin",
      "Overkill and overpriced for mostly-B&W home office use",
      "Third-party toner compatibility is inconsistent",
    ],
    bestFor: "A home office needing a genuine all-in-one laser with occasional color, not budget-focused",
  },
  {
    id: "hp-officejet-pro-9135-aio",
    rank: 5,
    badge: "Non-Laser Alternative: Best Inkjet All-in-One",
    name: "HP OfficeJet Pro 9135 Wireless All-in-One Color Inkjet Printer",
    price: "$299.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41MCIwNDseL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GPFLM562?tag=deskfinds0d-20",
    description:
      "Flagging this honestly upfront: this is a color inkjet, not a laser printer, and none of this guide's laser-specific advice, on toner cost, drum life, or warm-up time, applies to it. It shows up in monochrome laser printer searches because of its Best-for-Office positioning and duplex printing, but it uses ink cartridges, not toner.\n\nIt's included as an alternative for a home office that wants an auto document feeder and fax alongside decent grayscale output, and doesn't need laser's cost-per-page advantage at their actual print volume. If your office prints text-heavy documents at real volume, a true laser pick above will beat this on both text sharpness and long-term cost.",
    specs: [
      "Color inkjet, not laser",
      "Auto document feeder",
      "Duplex print and scan",
      "3-month Instant Ink trial",
      "Best-for-Office rated",
    ],
    pros: [
      "Full scan, copy, fax, and ADF feature set",
      "No ozone emission concern, unlike laser",
      "Decent grayscale gradient handling",
      "Lower upfront price than the color laser picks",
    ],
    cons: [
      "Not a laser printer, none of this guide's toner-cost math applies",
      "Softer text edges than any true laser pick",
      "Standard idle-ink drying risk of any cartridge inkjet",
    ],
    bestFor: "A home office that wants ADF and fax but doesn't need laser's economics",
  },
  {
    id: "brother-mcfj5010dw-inkvestment",
    rank: 6,
    badge: "Non-Laser Alternative: High-Capacity Inkjet",
    name: "Brother INKvestment MCF-J5010DW Wireless Color Inkjet All-in-One",
    price: "$249.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41wQemMt6wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTN9ZGRS?tag=deskfinds0d-20",
    description:
      "Another honest flag: despite the Brother name and higher price point, this is a color inkjet with high-capacity INKvestment cartridges, not a laser printer, and it doesn't share the ozone, drum-unit, or toner-yield considerations this guide is built around. It uses ink, not toner.\n\nIt's a reasonable non-laser option for a home office that wants fewer cartridge replacements and a color touchscreen, without the upfront cost of a color laser. If your home office is specifically shopping for laser technology's toner economics and text quality, this isn't that; one of the true laser picks above will fit better.",
    specs: [
      "INKvestment high-capacity cartridges",
      "Automatic 2-sided copy and scan",
      "2.7-inch color touchscreen",
      "Wireless color inkjet, not laser",
      "No ozone emission",
    ],
    pros: [
      "High-capacity cartridges reduce replacement frequency",
      "Automatic duplex copy and scan",
      "No ozone emission concern",
      "Color touchscreen for multi-user offices",
    ],
    cons: [
      "Not a laser printer despite the price point",
      "Text softer than any true laser pick",
      "Idle-ink drying risk between uses",
    ],
    bestFor: "A home office that wants fewer cartridge changes but doesn't need laser technology",
  },
  {
    id: "canon-maxify-mb2720",
    rank: 7,
    badge: "Non-Laser Alternative: Budget Inkjet",
    name: "Canon MAXIFY MB2720 Wireless Color Photo Printer",
    price: "$116.15",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41qSvRweBuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01IIOMMRS?tag=deskfinds0d-20",
    description:
      "Clearly flagged as a non-laser alternative: this is a color inkjet, not a monochrome laser, and it's the lowest-priced pick in this list, with scan, copy, and fax included. It's a genuinely fine choice for a home office with light document needs that doesn't want to spend $150+ on a dedicated laser engine.\n\nIt does not have laser's toner-based text sharpness, drum longevity, or ozone-free small-room advantage, and idle cartridges can dry out between uses the way toner never does. If your home office is text-heavy and enclosed, one of the true laser picks in this list is the better long-term fit despite the higher sticker price.",
    specs: [
      "Color inkjet, not laser",
      "Scan, copy, fax built in",
      "Wireless connectivity",
      "Lowest price in this list",
      "No ozone emission",
    ],
    pros: [
      "Lowest price in this list by far",
      "Full scan, copy, fax feature set",
      "No ozone emission concern",
      "Reasonable for light home office document needs",
    ],
    cons: [
      "Not a laser printer, doesn't share this guide's core toner economics",
      "Text softer than any true laser pick",
      "Idle-ink drying risk between uses",
    ],
    bestFor: "A home office with light document needs on the smallest possible budget",
  },
  {
    id: "epson-xp-7100",
    rank: 8,
    badge: "Non-Laser Alternative: Best for Occasional Photo Printing",
    name: "Epson Expression Premium XP-7100 Wireless All-in-One Duplex Color Photo Printer",
    price: "$189.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/411M0mBMPwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07FN93WW7?tag=deskfinds0d-20",
    description:
      "The final honest flag in this list: this is a photo-focused color inkjet, not a laser printer, and it's the least aligned pick here with a monochrome laser search, included only because it appears in the same product searches. It uses ink cartridges and has no toner, drum unit, or ozone consideration at all.\n\nIt earns a spot only for a home office that occasionally needs photo-quality output alongside document printing and is comfortable stepping outside laser technology to get it. For a home office genuinely shopping for a monochrome laser, skip straight to the Brother DCP-L2640DW or HP LaserJet M209d above.",
    specs: [
      "Photo-focused color inkjet, not laser",
      "Duplex printing",
      "Compact design",
      "No ozone emission",
      "Not a monochrome laser despite appearing in related searches",
    ],
    pros: [
      "Strong photo and grayscale gradient quality",
      "No ozone emission concern",
      "Compact footprint",
      "Reasonable price for occasional photo needs",
    ],
    cons: [
      "Not a laser printer, doesn't fit this guide's core use case",
      "Text softer than any true laser pick here",
      "Idle-ink drying risk between uses",
    ],
    bestFor: "A home office that occasionally wants photo-quality output alongside documents",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Verified laser vs inkjet technology",
    description: "Confirmed each pick's actual print engine from the product listing before including it, and clearly flagged the inkjet models that surface in monochrome laser searches rather than mislabeling them.",
  },
  {
    title: "Starter toner real-world yield",
    description: "Checked whether the included starter toner cartridge matches a full-yield replacement or falls well short of it, since that gap drives real first-year cost.",
  },
  {
    title: "Drum vs toner unit structure",
    description: "Noted whether the drum and toner are separate consumables or integrated into one replacement part, since that changes long-term maintenance cost.",
  },
  {
    title: "Warm-up time",
    description: "Compared cold-start versus sleep-mode wake times across the true laser picks, relevant for a home office that prints quick one-off pages throughout the day.",
  },
  {
    title: "Third-party toner compatibility by brand",
    description: "Weighed each brand's track record on accepting third-party toner cartridges, since this materially affects long-term running cost.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Watch for the starter toner bait-and-switch",
    explanation:
      "Bundled starter toner cartridges commonly yield only 700-1,000 pages, well short of a full-yield replacement's roughly 3,000 pages. Budget for a $30-40 toner replacement within your first 1-2 months of real use, and factor that into the true first-year cost, not just the printer's sticker price.",
  },
  {
    criterion: "Check whether the drum and toner are separate or integrated",
    explanation:
      "Some laser printers use a separate drum unit and toner cartridge, replaced independently as each wears out. Others integrate the two, forcing a full, pricier replacement whenever either part fails. Separate units, like on the Brother picks in this list, generally cost less over 3 years of ownership.",
  },
  {
    criterion: "Warm-up time matters if the printer sleeps between jobs",
    explanation:
      "A cold start typically takes 10-15 seconds, while waking from sleep mode is faster, roughly 3-5 seconds. If your printer sits in energy-save sleep between infrequent print jobs, the practical wait time is usually the shorter sleep-wake figure, not the cold-start number on the spec sheet.",
  },
  {
    criterion: "Consider ozone emission in small, enclosed rooms",
    explanation:
      "Laser printers emit a small amount of ozone as part of the printing process, a real but usually minor consideration in a windowless closet or small enclosed home office. If your laser printer lives in a poorly ventilated space, occasional airing out is a reasonable precaution; it's a non-issue for the inkjet alternatives in this list.",
  },
  {
    criterion: "Third-party toner compatibility varies significantly by brand",
    explanation:
      "Brother printers are generally tolerant of third-party and refilled toner cartridges. HP has a documented history of restricting non-HP toner via firmware updates on some models. Canon falls in between, with compatibility that varies by specific model. Check this before assuming you can save money with off-brand toner long-term.",
  },
  {
    criterion: "Don't buy a color laser if you're printing 90%+ mono",
    explanation:
      "A color laser printer holds four toner cartridges instead of one, and costs more to maintain even when run mostly in black-and-white mode. If your home office rarely needs color, a dedicated mono laser like the Brother DCP-L2640DW or HP LaserJet M209d is the more cost-effective choice.",
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
    subheading: "True Laser vs Non-Laser Alternative",
    intro:
      "Only 4 of the 8 picks in this list are actual laser printers. Here's the honest breakdown.",
    table: {
      headers: ["Pick", "Technology", "Mono-only or color"],
      rows: [
        ["Brother DCP-L2640DW", "True laser", "Monochrome only"],
        ["HP LaserJet M209d", "True laser", "Monochrome only"],
        ["Brother HL-L3220CDW", "True laser", "Color laser"],
        ["Canon imageCLASS MF753Cdw II", "True laser", "Color laser"],
        ["HP OfficeJet Pro 9135", "Inkjet, not laser", "Color inkjet"],
        ["Brother INKvestment MCF-J5010DW", "Inkjet, not laser", "Color inkjet"],
        ["Canon MAXIFY MB2720", "Inkjet, not laser", "Color inkjet"],
        ["Epson XP-7100", "Inkjet, not laser", "Color inkjet"],
      ],
    },
    note: "If you specifically want laser technology, focus on the top 4 rows. The bottom 4 are honest non-laser alternatives included because they surface in the same product searches.",
  },
  {
    subheading: "Real First-Year Cost Including Starter Toner",
    intro:
      "The sticker price is not the real first-year cost once the starter toner runs out.",
    table: {
      headers: ["Printer", "Upfront price", "Starter toner reality"],
      rows: [
        ["HP LaserJet M209d", "$159.00", "Budget an early $30-40 full-yield toner purchase"],
        ["Brother DCP-L2640DW", "$209.99", "Separate drum/toner keeps replacement cost lower long-term"],
        ["Brother HL-L3220CDW", "$284.99", "Four toner colors to eventually replace, not just one"],
        ["Canon imageCLASS MF753Cdw II", "$491.00", "Highest upfront cost, mixed third-party toner support"],
      ],
    },
    note: "These are directional cost profiles based on stated specs and typical starter-toner yields, not measured lab results.",
  },
  {
    subheading: "Warm-Up Time: Cold Start vs Sleep Wake",
    cards: [
      {
        label: "Cold start",
        text: "Roughly 10-15 seconds from fully powered off, relevant the first time you print each day.",
      },
      {
        label: "Sleep-mode wake",
        text: "Roughly 3-5 seconds if the printer was in energy-save sleep rather than fully off, which is the more common scenario for a printer left plugged in.",
      },
      {
        label: "Practical takeaway",
        text: "If speed for quick one-off jobs matters, leave the printer in sleep mode rather than powering it fully off between uses.",
      },
    ],
  },
  {
    subheading: "Ozone Emission for Enclosed Home Offices",
    note: "Laser printing produces a small amount of ozone as a normal byproduct, worth a moment's consideration if your printer lives in a small, windowless room or closet with poor airflow. It's a minor factor for most setups, and it doesn't apply at all to the non-laser inkjet alternatives in this list, like the HP OfficeJet Pro 9135 or Epson XP-7100.",
  },
  {
    subheading: "Third-Party Toner Compatibility by Brand",
    table: {
      headers: ["Brand", "Third-party toner compatibility", "Picks in this list"],
      rows: [
        ["Brother", "Generally good compatibility", "Brother DCP-L2640DW, Brother HL-L3220CDW"],
        ["HP", "Has restricted non-HP toner via firmware on some models", "HP LaserJet M209d"],
        ["Canon", "Mixed, varies by specific model", "Canon imageCLASS MF753Cdw II"],
      ],
    },
    note: "If long-term toner cost is a priority, this compatibility difference is worth weighing as heavily as the printer's upfront price.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "Are all 8 printers in this list actually laser printers?",
    a: "No. Only 4 are true laser printers: the Brother DCP-L2640DW and HP LaserJet M209d are dedicated monochrome lasers, and the Brother HL-L3220CDW and Canon imageCLASS MF753Cdw II are color lasers. The remaining 4 are color inkjets that surface in monochrome laser searches, and we've flagged them honestly as non-laser alternatives.",
  },
  {
    q: "What is the starter toner trap?",
    a: "Laser printers commonly ship with a starter toner cartridge rated for only 700-1,000 pages, well short of a full-yield replacement's roughly 3,000 pages. Many buyers hit an unexpected $30-40 toner purchase within their first 1-2 months of real use, which should be factored into the printer's true first-year cost.",
  },
  {
    q: "Does third-party toner work in all laser printers?",
    a: "It varies significantly by brand. Brother printers generally accept third-party toner well. HP has a documented history of restricting non-HP toner via firmware updates on some models. Canon's compatibility is mixed and varies by specific model, so check before relying on off-brand toner as a long-term cost-saving plan.",
  },
  {
    q: "Is laser printing safe to use in a small, enclosed home office?",
    a: "Laser printing produces a small amount of ozone as a normal byproduct, a minor but real consideration in a windowless closet or poorly ventilated small room. It's not a significant health concern for typical home office use, but occasional airing out is a reasonable precaution in a genuinely enclosed space.",
  },
  {
    q: "Should I buy a color laser or a monochrome-only laser?",
    a: "If 90% or more of your printing is black-and-white, a dedicated mono laser like the Brother DCP-L2640DW or HP LaserJet M209d costs less to buy and less to maintain, since a color laser holds four toner cartridges instead of one. Only choose a color laser if you'll genuinely use color with some regularity.",
  },
  {
    q: "Why are inkjet printers included in a monochrome laser printer guide?",
    a: "They show up in the same product searches due to overlapping Best-for-Office marketing and duplex printing features, but they use ink cartridges, not toner, and don't share this guide's core laser-specific considerations like starter toner yield, drum life, or ozone emission. We've labeled each one clearly as a non-laser alternative rather than mislabeling it as a laser printer.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-for-black-and-white-documents", title: "Best Printers for Black-and-White Documents (2026)" },
  { href: "/guide/best-printers-for-documents", title: "Best Printers for Documents (2026)" },
  { href: "/guide/best-printers-for-home-offices", title: "Best Printers for Home Offices (2026)" },
];
