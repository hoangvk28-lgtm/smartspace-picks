export const guideSlug = "best-small-printers-for-home-offices";
export const guideTitle = "8 Best Small Printers for Home Offices in 2026";
export const metaTitle = "Best Small Printers for Home Offices in 2026";
export const metaDescription =
  "8 best small printers for home offices in 2026, split between laser and inkjet so you can match toner cost, energy use, and sharing needs to your setup.";
export const mainKeyword = "small printer for home office";
export const introParagraphs = [
  "A small printer for a home office is really two different products wearing the same marketing label. A small monochrome laser printer is fast and cheap to run per page but prints text only, while a small color inkjet all-in-one can scan and print photos but costs more per page and can dry out between print jobs. Picking the wrong category for your actual workload is the most common mistake home-office buyers make.",
  "Below are 8 small printers we evaluated on this laser-vs-inkjet fit, single-user versus small-team reliability, replacement supply availability, and standby energy draw, ranging from a $69.99 basic inkjet AIO to a $209.99 duplex laser multi-function printer.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg";

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
    id: "canon-pixma-ts6520-home-office",
    rank: 1,
    badge: "Best Overall for a Single Home Office",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=deskfinds0d-20",
    description:
      "The PIXMA TS6520 covers the full range of what a single-person home office needs: color printing, scanning, copying, and auto duplex, all with a 1.42-inch OLED screen for quick status checks without opening a phone app. Its small footprint suits a desk corner rather than a dedicated office nook.\n\nAs a cartridge-based inkjet, standby power draw is on the lower end of what small printers use, typically 1-2 watts, and ink levels are visible right on the screen. It's built for one person's workflow rather than a shared office queue, so a busy 2-3 person setup may find its speed limiting.",
    specs: [
      "Compact color inkjet all-in-one",
      "1.42\" OLED display",
      "Auto duplex printing",
      "Low standby power draw (inkjet)",
      "Single-user oriented speed and queue handling",
    ],
    pros: [
      "OLED display for at-a-glance status",
      "Full print, scan, copy functionality",
      "Auto duplex printing included",
      "Lower standby energy draw than laser alternatives",
    ],
    cons: [
      "Not built for a multi-person print queue",
      "Ink cartridges can dry out with infrequent use",
      "Cost per page higher than a laser or ink-tank printer",
    ],
    bestFor: "A single person working from home who wants full AIO function in a small body",
  },
  {
    id: "canon-pixma-ts4320-home-office",
    rank: 2,
    badge: "Best Budget Inkjet AIO",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=deskfinds0d-20",
    description:
      "The PIXMA TS4320 delivers the same core inkjet AIO functions as its pricier sibling, print, copy, scan, and duplex printing, without the OLED display, at the lowest price in this list. For a light home-office workload of occasional letters, forms, and the odd scanned document, the missing screen is not a real loss.\n\nInk cartridges for this model are widely available at retail stores, not just online, which matters if you run out unexpectedly and need same-day replacement. Standby draw stays in typical inkjet territory, lower than the laser picks in this list.",
    specs: [
      "Compact color inkjet all-in-one",
      "Auto duplex printing",
      "No display screen",
      "Widely available retail ink cartridges",
      "Low standby power draw",
    ],
    pros: [
      "Lowest price in this list",
      "Retail-available ink cartridges, not online-only",
      "Auto duplex printing built in",
      "Low standby energy draw",
    ],
    cons: [
      "No status display screen",
      "Small paper tray needs frequent refills",
      "Not suited to a shared multi-person queue",
    ],
    bestFor: "Budget-conscious single-user home offices with light, occasional printing",
  },
  {
    id: "hp-deskjet-4355-home-office",
    rank: 3,
    badge: "Best Starter Ink Trial",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "HP's DeskJet 4355 bundles a 3-month HP Instant Ink trial with its compact color inkjet AIO body, which softens the cost of the first few months of ownership. After the trial, HP Instant Ink cartridge replacements ship automatically based on usage, though that convenience comes with an ongoing subscription cost worth comparing against buying cartridges outright.\n\nLike the other cartridge-based inkjets in this list, standby power draw is modest, and setup runs through the HP Smart app. It's a reasonable single-user pick if the ink subscription model appeals to you.",
    specs: [
      "Compact color inkjet all-in-one",
      "3-month HP Instant Ink trial included",
      "Subscription-based ink replacement after trial",
      "HP Smart app setup",
      "Low standby power draw",
    ],
    pros: [
      "Free 3-month Instant Ink trial reduces early cost",
      "Automatic cartridge replacement shipping",
      "Compact, single-user-friendly footprint",
      "Full print, scan, copy function",
    ],
    cons: [
      "Instant Ink subscription cost after the trial",
      "Small tray typical of compact inkjets",
      "HP Smart app setup can be an extra step for non-tech users",
    ],
    bestFor: "Buyers who want a low-cost trial period before committing to an ink plan",
  },
  {
    id: "canon-pixma-tr4720-home-office",
    rank: 4,
    badge: "Best for Occasional Multi-Page Scans",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31nVDhGd67L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXC13T?tag=deskfinds0d-20",
    description:
      "The PIXMA TR4720 adds an auto document feeder and built-in fax to the standard compact inkjet AIO formula, both genuinely useful for a home office that occasionally needs to scan multi-page contracts or send a fax without lifting the scanner lid page by page.\n\nIt remains a single-user-oriented device rather than a shared-office printer, and its inkjet cartridges carry the same idle-drying risk as other inkjets in this list if print jobs are infrequent. The ADF is the clear reason to choose this over the plainer TS4320 or TS3720.",
    specs: [
      "Auto document feeder (ADF)",
      "Built-in fax",
      "Compact color inkjet all-in-one",
      "Canon PRINT app setup",
      "Single-user oriented",
    ],
    pros: [
      "ADF handles multi-page scans without manual page flipping",
      "Built-in fax for occasional home-office needs",
      "Still a compact footprint despite the added hardware",
      "Wireless mobile printing supported",
    ],
    cons: [
      "Fax is rarely used by most 2026 home offices",
      "Cartridges can dry out with infrequent printing",
      "Not built for a shared multi-person print queue",
    ],
    bestFor: "A home office that occasionally scans or faxes multi-page documents",
  },
  {
    id: "brother-dcp-l2640dw",
    rank: 5,
    badge: "Best Small Laser for a Shared Home Office",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser Multi-Function",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=deskfinds0d-20",
    description:
      "The DCP-L2640DW is the pick in this list built for more than one person relying on the same printer, a mono laser multi-function with duplex printing, copy, and scan that handles a steadier print queue than the inkjet AIOs here. Laser output is also faster page-to-page, which matters when 2-3 people are sending jobs to the same device.\n\nToner cartridges don't dry out between uses the way ink does, a real advantage for a home office where print jobs come in bursts rather than daily. Standby draw runs higher than the inkjets in this list, typically 3-5 watts versus 1-2 watts, worth factoring in if the printer stays plugged in around the clock.",
    specs: [
      "Compact monochrome laser multi-function",
      "Duplex printing, copy, scan",
      "Faster page output than inkjet AIOs",
      "Toner does not dry out between uses",
      "Higher standby power draw (laser)",
    ],
    pros: [
      "Handles a multi-person print queue better than inkjet AIOs",
      "Toner never dries out from bursty usage patterns",
      "Faster print speed for repeated jobs",
      "Duplex printing plus scan and copy",
    ],
    cons: [
      "Highest price in this list",
      "Monochrome only, no color printing",
      "Higher standby energy draw than inkjet picks",
    ],
    bestFor: "A home office shared by 2-3 people who need reliable, faster mono output",
  },
  {
    id: "brother-hl-l2405w-home-office",
    rank: 6,
    badge: "Best Print-Only Laser",
    name: "Brother HL-L2405W Wireless Compact Monochrome Laser Printer",
    price: "$139.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPL7HRQN?tag=deskfinds0d-20",
    description:
      "If your home office doesn't need scanning or copying, the HL-L2405W delivers small-laser speed and toner economics without paying for a multi-function body. It's genuinely smaller than most compact inkjet AIOs since it skips the scanner bed entirely, and it works with Alexa for voice-triggered printing.\n\nBrother toner cartridges for this model are generally available at retail office-supply stores as well as online, which matters if you run low and need same-day replacement rather than waiting on shipping. Standby draw sits in typical small-laser range, higher than the inkjets here but with no idle drying risk.",
    specs: [
      "Compact monochrome laser, print-only",
      "Alexa compatible",
      "Retail-available toner cartridges",
      "No scan or copy function",
      "Toner does not dry out between uses",
    ],
    pros: [
      "Smaller footprint than most compact inkjet AIOs",
      "Toner never dries out from infrequent printing",
      "Retail-available replacement toner",
      "Faster mono print speed than inkjet",
    ],
    cons: [
      "No scan or copy capability",
      "Monochrome only",
      "Higher standby power draw than inkjet picks",
    ],
    bestFor: "A home office that only needs fast, reliable text printing without scanning",
  },
  {
    id: "epson-ecotank-et-2400-home-office",
    rank: 7,
    badge: "Best for Lowest Cost Per Page",
    name: "Epson EcoTank ET-2400 Wireless Color All-in-One Printer",
    price: "$189.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31TonwUym9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BM9BFLMX?tag=deskfinds0d-20",
    description:
      "The EcoTank ET-2400 uses refillable ink tanks instead of cartridges, which meaningfully lowers cost per page for anyone printing regularly rather than occasionally, and tanks hold enough ink to last months without needing refill. It supports color printing, scan, and copy, unlike the mono laser picks in this list.\n\nStandby energy draw for ink-tank printers runs closer to typical inkjet levels than laser, but the tank housing adds bulk to the printer body. This is the pick if your home office wants color capability alongside laser-like resistance to ink drying out.",
    specs: [
      "Cartridge-free ink supertank system",
      "Color print, scan, copy",
      "Larger body than cartridge-based inkjets",
      "Tanks last months without refill",
      "Low ongoing cost per page",
    ],
    pros: [
      "Lowest cost per page among the color picks here",
      "Ink tanks resist drying out better than cartridges",
      "Full color print, scan, copy",
      "Tanks last months between refills",
    ],
    cons: [
      "Higher upfront price than cartridge-based inkjets",
      "Larger footprint due to tank housing",
      "Refilling tanks takes longer than a cartridge swap",
    ],
    bestFor: "A home office that prints regularly and wants color without high per-page ink cost",
  },
  {
    id: "epson-workforce-wf-2930",
    rank: 8,
    badge: "Best for Occasional Fax Needs",
    name: "Epson Workforce WF-2930 Wireless All-in-One Printer",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31H9Yu3i01L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BDD46HFV?tag=deskfinds0d-20",
    description:
      "The Workforce WF-2930 rounds out its scan, copy, and fax feature set with an auto document feeder and automatic 2-sided printing, plus a 1.4-inch color display for quick status checks. It's positioned as a workhorse for a home office that still occasionally needs to send or receive a fax, a shrinking but not extinct requirement.\n\nAs a cartridge-based inkjet, it carries the same standby draw and idle-drying considerations as the other inkjets in this list. The combination of ADF, duplex, and fax makes it a reasonable single-device pick if you want most home-office document features without stepping up to laser pricing.",
    specs: [
      "Auto document feeder, duplex printing",
      "Fax, scan, copy",
      "1.4\" color display",
      "Cartridge-based color inkjet",
      "Mid-range price for feature set",
    ],
    pros: [
      "ADF plus duplex plus fax in one mid-priced device",
      "Color display for status checks",
      "Full scan, copy, fax feature set",
      "Reasonable price for the included features",
    ],
    cons: [
      "Ink cartridges can dry out with infrequent use",
      "Not built for a busy multi-person queue",
      "Fax capability goes unused by many buyers",
    ],
    bestFor: "A single-user home office that wants ADF, duplex, and fax without laser pricing",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Laser vs. inkjet fit for the workload",
    description: "Weighed whether each printer's technology, fast/cheap-toner mono laser versus color/scan-capable inkjet, actually matches typical home-office printing needs rather than treating all small printers as equivalent.",
  },
  {
    title: "Single-user vs. multi-person reliability",
    description: "Considered print speed and queue handling for a home office used by one person versus 2-3 people sharing the same device.",
  },
  {
    title: "Replacement supply availability",
    description: "Checked whether ink or toner for each model is available at retail office-supply stores or requires online-only ordering with shipping delays.",
  },
  {
    title: "Standby and active energy draw",
    description: "Compared typical standby power draw by technology, roughly 1-2 watts for inkjet versus 3-5 watts for laser, relevant for a printer left plugged in throughout the workday.",
  },
  {
    title: "Value for price",
    description: "Weighed upfront cost against included features like ADF, duplex, fax, and display screen to judge which picks earn their price premium.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Decide laser or inkjet before you compare models",
    explanation:
      "A small mono laser printer is fast and cheap per page but text-only with no scan or copy, while a small color inkjet all-in-one handles photos, scanning, and copying but costs more to run and can dry out if left idle. Pick the category based on whether you need color and scanning at all, not just on price or size.",
  },
  {
    criterion: "Size the printer to how many people will actually use it",
    explanation:
      "A single-user inkjet AIO can bottleneck quickly if 2-3 people in a household are sending jobs to it throughout the day. For a shared home office, a small laser multi-function printer handles a steadier queue and prints faster page to page.",
  },
  {
    criterion: "Check toner or ink availability before you need it urgently",
    explanation:
      "Some small laser toner cartridges are only easy to find online, meaning a 2-3 day wait if you run out mid-project, while others are stocked at retail office-supply stores for same-day replacement. Check availability for your specific model before you're stuck waiting on shipping.",
  },
  {
    criterion: "Factor in standby energy draw if the printer stays plugged in",
    explanation:
      "Laser printers typically draw 3-5 watts on standby versus roughly 1-2 watts for inkjet, which adds up over 8+ hours a day of standby time across a year. It's a small cost individually, but worth knowing if you're comparing otherwise similar printers on total cost of ownership.",
  },
  {
    criterion: "Ink-tank printers make sense only at real print volume",
    explanation:
      "Refillable ink tanks like the Epson EcoTank line lower cost per page significantly, but the higher upfront price only pays off if you're printing regularly rather than occasionally. For light, occasional home-office printing, a cartridge-based inkjet or small laser is usually the more sensible upfront cost.",
  },
  {
    criterion: "Don't pay for fax if you won't use it",
    explanation:
      "Fax is still marketed as a selling point on several small all-in-ones despite being a feature almost no 2026 home office actually uses. If a model's price premium is mostly buying you fax capability, a fax-free alternative at a lower price often covers your real needs just as well.",
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
    subheading: "Laser or Inkjet: Which Fits Your Home Office?",
    intro:
      "This is the single most important decision, and it depends entirely on whether you need color, scanning, and how often you print.",
    table: {
      headers: ["Your need", "Category", "Best pick"],
      rows: [
        ["Fast, cheap text printing only", "Mono laser, print-only", "Brother HL-L2405W"],
        ["Text printing plus scan and copy, shared use", "Mono laser multi-function", "Brother DCP-L2640DW"],
        ["Color, photos, scanning, occasional use", "Cartridge-based color inkjet AIO", "Canon PIXMA TS6520 or TS4320"],
        ["Color, scanning, frequent/high-volume use", "Ink-tank color AIO", "Epson EcoTank ET-2400"],
      ],
    },
  },
  {
    subheading: "By Number of People Using It",
    cards: [
      {
        label: "Just you",
        text: "Any of the Canon PIXMA inkjet AIOs (TS6520, TS4320, TR4720) comfortably handle single-user, occasional-to-moderate printing.",
      },
      {
        label: "2-3 people sharing one printer",
        text: "The Brother DCP-L2640DW's laser speed and duplex printing keep up with a shared queue far better than a single-user inkjet AIO.",
      },
      {
        label: "One person, high volume",
        text: "The Epson EcoTank ET-2400 or ET-2800 keep cost per page low even at heavier individual print volume.",
      },
    ],
  },
  {
    subheading: "Replacement Supply Availability",
    intro:
      "Running out of ink or toner mid-project is more common than most buyers plan for, check availability before you need it.",
    table: {
      headers: ["Printer", "Supply type", "Availability"],
      rows: [
        ["Canon PIXMA models", "Ink cartridges", "Widely stocked at retail stores"],
        ["Brother HL-L2405W / DCP-L2640DW", "Toner cartridges", "Retail office-supply availability"],
        ["HP DeskJet 4355", "Instant Ink subscription cartridges", "Ships automatically, less urgent to restock manually"],
        ["Epson EcoTank models", "Ink tank refill bottles", "Check retail stock before running low, refills take longer than a cartridge swap"],
      ],
    },
  },
  {
    subheading: "Standby Energy Draw by Technology",
    intro:
      "If your printer stays plugged in all day, the technology type meaningfully affects standby energy cost over a year.",
    table: {
      headers: ["Technology", "Typical standby draw", "Picks in this list"],
      rows: [
        ["Inkjet (cartridge-based)", "~1-2 watts", "Canon PIXMA models, HP DeskJet 4355, Epson WF-2930"],
        ["Inkjet (ink-tank)", "~1-2 watts", "Epson EcoTank ET-2400"],
        ["Mono laser", "~3-5 watts", "Brother HL-L2405W, Brother DCP-L2640DW"],
      ],
    },
    note: "The difference is small per day but adds up over 8+ hours of standby time across a full year, worth a glance if you're otherwise choosing between two similar picks.",
  },
  {
    subheading: "When to Skip Fax Entirely",
    intro:
      "Several picks in this list include fax capability, but it's worth an honest gut check before paying for it.",
    cards: [
      {
        label: "You've never sent a fax in the past year",
        text: "Skip fax-inclusive models like the Canon PIXMA TR4720 or Epson WF-2930 and save the price difference on a fax-free pick like the Canon PIXMA TS6520.",
      },
      {
        label: "You occasionally need to fax signed documents",
        text: "The Canon PIXMA TR4720 or Epson WF-2930 cover this without needing a separate fax service.",
      },
    ],
  },
];

export const faq: FaqItem[] = [
  {
    q: "Should I buy a small laser or a small inkjet printer for my home office?",
    a: "It depends on whether you need color and scanning. A small mono laser printer is faster and cheaper per page for text-only printing, while a small color inkjet all-in-one adds scanning, copying, and color output at a higher cost per page. If your home office mostly prints text documents, a laser printer like the Brother HL-L2405W is the more economical long-term choice.",
  },
  {
    q: "Can one small printer handle a home office shared by multiple people?",
    a: "A single-user-oriented inkjet AIO can become a bottleneck if 2-3 people are sending print jobs throughout the day. A small laser multi-function printer like the Brother DCP-L2640DW handles a shared queue more reliably thanks to faster page output and no ink-drying risk between bursts of use.",
  },
  {
    q: "Is it hard to find replacement toner or ink for a small printer?",
    a: "It varies by brand and model. Canon ink cartridges and Brother toner cartridges are generally available at retail office-supply stores for same-day replacement, while some budget or subscription-based supplies are online-only and can mean a 2-3 day wait. Check availability for your specific model before you're in a bind.",
  },
  {
    q: "Do laser printers really use more standby power than inkjet printers?",
    a: "Yes, typically. Laser printers draw roughly 3-5 watts on standby compared to about 1-2 watts for inkjet printers, a difference that adds up if the printer stays plugged in for 8 or more hours a day. It's a minor factor individually but worth knowing if you're deciding between two otherwise similar picks.",
  },
  {
    q: "Are ink-tank printers worth it for a home office?",
    a: "Ink-tank printers like the Epson EcoTank ET-2400 lower cost per page significantly and resist drying out better than cartridges, but the higher upfront price only pays off with regular printing. For occasional home-office use, a cartridge-based inkjet or small laser printer is usually the more sensible upfront choice.",
  },
  {
    q: "Do I need a printer with fax for my home office in 2026?",
    a: "Most home offices no longer need fax, it remains a marketed feature on several all-in-ones despite very limited real-world use. If you haven't sent a fax in the past year, skip the fax-inclusive models and put that budget toward faster printing or a larger paper tray instead.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-printers-for-small-desks", title: "Best Compact Printers for Small Desks (2026)" },
  { href: "/guide/best-printers-for-home-offices", title: "Best Printers for Home Offices (2026)" },
  { href: "/guide/best-printers-for-remote-workers", title: "Best Printers for Remote Workers (2026)" },
];
