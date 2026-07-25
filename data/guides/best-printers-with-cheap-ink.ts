export const guideSlug = "best-printers-with-cheap-ink";
export const guideTitle = "8 Best Printers with Cheap Ink in 2026";
export const metaTitle = "Best Printers with Cheap Ink in 2026 (Lowest Cost Per Page)";
export const metaDescription =
  "8 best printers with cheap ink in 2026, all ink-tank models with the lowest real-world cost per page. Compare bottle pricing, coverage, and payback time.";
export const mainKeyword = "printer with cheap ink";
export const introParagraphs = [
  "Manufacturer cost-per-page figures are based on an ISO standard of roughly 5 percent page coverage, plain text with wide margins, while real home printing, forms, graphs, colorful worksheets, often runs 10 to 20 percent coverage. That means actual cost per page can run 2 to 4 times higher than the number printed on the box, which is exactly why ink-tank printers pull so far ahead of cartridge models once real usage is factored in.",
  "Below are 8 printers we evaluated on real-world cost per page rather than advertised figures, all ink-tank models from Epson, Canon, and HP, ranging from a $169.89 compact refillable printer to a $457.00 model built for sustained office volume.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg";

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
    id: "epson-ecotank-et-2800-black",
    rank: 1,
    badge: "Best Overall Value",
    name: "Epson EcoTank ET-2800 Wireless Cartridge-Free Supertank Printer (Black)",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=deskfinds0d-20",
    description:
      "The ET-2800 pairs a reasonable upfront price with EcoTank's refillable ink system, which is where the real cost-per-page savings come from over time. Scan and copy are included, covering the essentials without added bulk.\n\nAt real-world coverage levels rather than the ISO 5 percent test standard, bottled ink here still comes out well ahead of cartridge printers on a per-page basis, especially for anyone printing forms or graphics with heavier ink coverage than plain text.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Includes ink bottles for setup",
      "Compact all-in-one design",
    ],
    pros: [
      "Strong balance of upfront price and ongoing ink cost",
      "Bottled ink holds its cost advantage even at heavy coverage",
      "Simple setup",
      "Scan and copy included",
    ],
    cons: [
      "No automatic document feeder",
      "Higher upfront cost than a basic cartridge inkjet",
      "Integrated printhead limits long-term repairability",
    ],
    bestFor: "Households wanting the best balance of upfront cost and ongoing ink savings",
  },
  {
    id: "epson-ecotank-et-2800-white",
    rank: 2,
    badge: "Best Budget Alternative Color",
    name: "Epson EcoTank ET-2800 Wireless Cartridge-Free Supertank Printer (White)",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31Yt+pSHuGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8CNBZ?tag=deskfinds0d-20",
    description:
      "This is the same ET-2800 hardware and ink economics as the black model above, just in a white finish for a lighter desk setup. Cost per page, tank capacity, and print quality are identical between the two colors.\n\nPick this one purely on aesthetic preference rather than expecting a different cost-per-page outcome, both share the same refill bottle pricing and coverage.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "White finish",
      "Compact all-in-one design",
    ],
    pros: [
      "Same cheap ink economics as the black ET-2800",
      "White finish suits a lighter desk aesthetic",
      "Simple setup",
      "Scan and copy included",
    ],
    cons: [
      "No automatic document feeder",
      "Higher upfront cost than a basic cartridge inkjet",
      "No functional difference from the cheaper-looking black version",
    ],
    bestFor: "Buyers who want EcoTank ink economics with a lighter-colored finish",
  },
  {
    id: "epson-ecotank-et-2400",
    rank: 3,
    badge: "Cheapest Ink-Tank Entry Point",
    name: "Epson EcoTank ET-2400 Wireless Cartridge-Free Supertank Printer",
    price: "$189.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31TonwUym9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BM9BFLMX?tag=deskfinds0d-20",
    description:
      "The ET-2400 is the lowest-priced ink-tank printer in this list, built for everyday home printing. Even with a modest upfront cost, it carries the same bottled-refill ink system as pricier EcoTank models, keeping cost per page low.\n\nAt light-to-moderate real-world volume, this typically pays back its price difference over a basic cartridge inkjet within roughly a year, faster if your printing skews toward graphics or forms with heavier coverage.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Built for everyday home printing",
      "Compact design",
    ],
    pros: [
      "Lowest price of any ink-tank pick in this list",
      "Cheap ink cost per page even at this entry price",
      "Simple setup and controls",
      "Scan and copy included",
    ],
    cons: [
      "No automatic document feeder",
      "Not built for sustained high-volume office printing",
      "Integrated printhead limits repairability",
    ],
    bestFor: "Budget buyers who still want ink-tank cost-per-page savings",
  },
  {
    id: "epson-ecotank-et-4800",
    rank: 4,
    badge: "Best for Office Documents",
    name: "Epson EcoTank ET-4800 Wireless Cartridge-Free Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31G4p897b8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09P45LR5T?tag=deskfinds0d-20",
    description:
      "The ET-4800 adds an automatic document feeder, fax, and Ethernet on top of EcoTank's cheap-ink system, at essentially the same price as the entry-level ET-2400. That makes it the strongest value pick here if you need those extra features.\n\nEthernet gives a more stable connection in offices with wifi interference, and the document feeder speeds up scanning multi-page paperwork without extra cost per page over the simpler models.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Automatic document feeder",
      "Fax and Ethernet",
      "Scanner and copier",
      "Wireless and wired connectivity",
    ],
    pros: [
      "More features than the ET-2400 at nearly the same price",
      "Automatic document feeder included",
      "Ethernet option for stable networking",
      "Same cheap ink cost per page as smaller EcoTank models",
    ],
    cons: [
      "Larger footprint than the entry EcoTank models",
      "Fax is unnecessary for most households",
      "Not the cheapest upfront option in this list",
    ],
    bestFor: "Home offices wanting document feeding and Ethernet without paying more for ink",
  },
  {
    id: "hp-smart-tank-5101",
    rank: 5,
    badge: "Cheapest Upfront Ink-Tank Price",
    name: "HP Smart Tank 5101 Wireless All-in-One Refillable Printer",
    price: "$169.89",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41xOh51IRUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BL466Y41?tag=deskfinds0d-20",
    description:
      "The Smart Tank 5101 undercuts every EcoTank model here on upfront price while including 2 years of ink, a real head start on the cost-per-page math for a new household. Print, scan, and copy cover the essentials.\n\nHP has previously blocked non-HP ink through firmware updates on some models, worth knowing if you were planning to save further with third-party refill bottles rather than sticking with HP's own ink.",
    specs: [
      "Refillable ink tank system with 2 years of ink included",
      "Print, scan, and copy",
      "Wireless printing (2.4GHz only)",
      "Compact footprint versus larger ink-tank models",
      "No automatic document feeder",
    ],
    pros: [
      "Lowest upfront price of any pick in this list",
      "2 years of included ink offsets early cost-per-page math",
      "Compact footprint",
      "Ink-tank economics for high-volume printing",
    ],
    cons: [
      "2.4GHz-only wireless can complicate setup on some routers",
      "No automatic document feeder",
      "HP has a history of restricting non-HP ink via firmware",
    ],
    bestFor: "Buyers who want the cheapest possible entry into ink-tank printing",
  },
  {
    id: "canon-pixma-g620-megatank",
    rank: 6,
    badge: "Best for Photo and Document Mix",
    name: "Canon PIXMA G620 Wireless MegaTank Photo All-in-One Printer",
    price: "$299.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31W+8GDKNLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08XZQVWZW?tag=deskfinds0d-20",
    description:
      "Canon's MegaTank system competes directly with Epson EcoTank on cost per page, with the added strength of better photo output than most ink-tank printers in this list. Print, copy, and scan are included with Alexa voice support.\n\nCanon and Epson ink bottles aren't interchangeable, so factor local retail availability into your decision if you're prioritizing quick access to refills over online-only ordering.",
    specs: [
      "Cartridge-free MegaTank refillable ink system",
      "Photo-focused color output",
      "Print, copy, scan",
      "Works with Alexa",
      "Wireless connectivity",
    ],
    pros: [
      "Cheap ink cost comparable to Epson EcoTank",
      "Stronger photo quality than most ink-tank AIOs",
      "Alexa voice command support",
      "Mid-range price for the feature set",
    ],
    cons: [
      "No automatic document feeder",
      "Canon-specific ink bottles, not interchangeable with Epson",
      "Pricier upfront than the HP Smart Tank 5101",
    ],
    bestFor: "Buyers who want cheap ink alongside stronger photo output",
  },
  {
    id: "epson-ecotank-et-4950",
    rank: 7,
    badge: "Best for High-Coverage Printing",
    name: "Epson EcoTank ET-4950 Wireless Cartridge-Free Supertank Printer",
    price: "$425.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31JMZ0fsKTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC5KYF71?tag=deskfinds0d-20",
    description:
      "The ET-4950 is built for higher volume and higher-coverage printing, forms, graphics, colorful documents, where the gap between advertised and real-world cost per page matters most. A 2.4-inch touchscreen and automatic document feeder round out the package.\n\nAt up to 3 years of rated ink refills, this is the pick in this list best suited to someone who wants to think about ink cost as little as possible over a multi-year stretch.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Automatic document feeder",
      "2.4-inch color touchscreen",
      "Up to 3 years of ink refills rated",
      "18 ppm print speed",
    ],
    pros: [
      "Best cost-per-page performance at high, heavy-coverage volume",
      "Touchscreen simplifies status and troubleshooting",
      "Automatic document feeder included",
      "Long-rated ink refill window",
    ],
    cons: [
      "Highest upfront price among the Epson picks besides the ET-4850",
      "Larger footprint",
      "More printer than a light user needs",
    ],
    bestFor: "Households or offices with heavy, high-coverage printing needs",
  },
  {
    id: "epson-ecotank-et-4850",
    rank: 8,
    badge: "Best for Small Office Cost Control",
    name: "Epson EcoTank ET-4850 Wireless Cartridge-Free Supertank Printer",
    price: "$457.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31r7o2eQ5TL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N9JMXF?tag=deskfinds0d-20",
    description:
      "The ET-4850 rounds out the EcoTank lineup here with fax and Ethernet added to the automatic document feeder and cheap-ink base. It's aimed at a small office replacing an aging printer that still needs those legacy connections.\n\nAt the highest price in this list, it makes sense mainly for offices where predictable, low cost-per-page printing across hundreds of pages a month justifies the upfront spend.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Fax and Ethernet included",
      "Automatic document feeder",
      "Scanner and copier",
      "White finish, office-oriented design",
    ],
    pros: [
      "Predictable low cost per page at sustained office volume",
      "Fax and Ethernet cover legacy small-office needs",
      "Automatic document feeder for multi-page scans",
      "Stable wired networking option",
    ],
    cons: [
      "Highest price in this list",
      "Fax is unnecessary for most households",
      "Large footprint needs real desk or cabinet space",
    ],
    bestFor: "Small offices prioritizing predictable low ink cost over years of use",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Real-world cost per page over ISO test figures",
    description: "Weighed how each model's ink cost holds up at realistic 10 to 20 percent page coverage rather than relying on the ISO 5 percent test standard printed on the box.",
  },
  {
    title: "Bottle pricing and refill frequency",
    description: "Compared ink bottle cost and rated page yield to estimate how often, and how much, a typical household would spend on refills.",
  },
  {
    title: "Upfront price versus long-term payback",
    description: "Weighed purchase price against projected ink savings over a 1 to 2 year window to identify which models pay for themselves fastest.",
  },
  {
    title: "Third-party ink and warranty risk",
    description: "Noted each brand's documented stance on non-OEM ink compatibility, since firmware restrictions can eliminate expected savings from generic refills.",
  },
  {
    title: "Feature fit relative to price",
    description: "Checked whether added features like automatic document feeders, fax, and Ethernet were priced fairly relative to the base cheap-ink models in the same lineup.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "The 5 percent ISO coverage standard understates real cost",
    explanation:
      "Manufacturer cost-per-page figures assume roughly 5 percent page coverage, plain text with wide margins. Real home printing, forms, graphs, colorful worksheets, often runs 10 to 20 percent coverage, meaning actual cost per page can run 2 to 4 times higher than advertised. Judge printers by real-world coverage, not the box number.",
  },
  {
    criterion: "HP Instant Ink has real risks alongside the benefits",
    explanation:
      "Subscription ink plans can lower cost per page, but canceling can remotely disable cartridges, and printing beyond your plan's page allowance triggers overage fees. Read the specific plan terms before subscribing, especially if your monthly volume varies a lot.",
  },
  {
    criterion: "Third-party ink compatibility varies sharply by brand",
    explanation:
      "HP has a documented history of blocking non-HP ink through firmware updates, while Brother and Canon tend to be more tolerant of third-party cartridges and ink. Factor this into your decision if third-party ink savings are part of your cost plan.",
  },
  {
    criterion: "Standard versus high-yield cartridges trade upfront cost for per-page savings",
    explanation:
      "High-yield or XL cartridges cost more to buy but meaningfully less per page than standard cartridges. For cartridge-based printers not covered in this ink-tank list, always compare cost per page rather than sticker price when choosing between standard and XL options.",
  },
  {
    criterion: "Local retail availability affects real convenience",
    explanation:
      "Major brands' ink bottles are typically available same-day at Walmart, Target, or Staples, while some generic or off-brand ink is online-only with a 2 to 3 day wait. Factor this in if running out of ink mid-project would be a real problem for you.",
  },
  {
    criterion: "Match tank size to your actual monthly volume",
    explanation:
      "A small entry-level ink-tank printer like the ET-2400 or HP Smart Tank 5101 is fine for light home use, but heavier volume, several hundred pages a month, justifies a higher-capacity model like the ET-4950 for lower effective cost per page.",
  },
  {
    criterion: "Ink bottle color-mixing can permanently damage a tank",
    explanation:
      "Pouring the wrong color ink into the wrong tank during a refill is a real risk, most manufacturers color-code bottles and tank openings specifically to prevent this, but a moment of inattention can cross-contaminate a tank and require a costly repair.",
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
    subheading: "Real-World Cost Per Page by Coverage Level",
    intro: "Advertised cost per page assumes light 5 percent coverage. Here's a rough adjustment for real usage.",
    table: {
      headers: ["Print type", "Approx. coverage", "Real cost vs. advertised", "Best pick"],
      rows: [
        ["Plain text letters", "~5%", "Close to advertised figure", "HP Smart Tank 5101"],
        ["Forms, worksheets with graphics", "~10-15%", "1.5-2x advertised figure", "Epson EcoTank ET-2800 or ET-4800"],
        ["Photos, colorful flyers, charts", "~15-20%+", "2-4x advertised figure", "Canon PIXMA G620 or EcoTank ET-4950"],
      ],
    },
  },
  {
    subheading: "By Upfront Budget",
    table: {
      headers: ["Budget", "Best pick"],
      rows: [
        ["Under $180", "HP Smart Tank 5101"],
        ["$190-300", "Epson EcoTank ET-2400, ET-2800, or ET-4800"],
        ["$300+", "Canon PIXMA G620, EcoTank ET-4950, or ET-4850"],
      ],
    },
  },
  {
    subheading: "HP Instant Ink: When It Backfires",
    cards: [
      {
        label: "Good fit",
        text: "Steady, predictable monthly volume that matches a plan tier closely, minimal risk of overage fees.",
      },
      {
        label: "Bad fit",
        text: "Highly variable printing months, risk of hitting overage fees some months and paying for unused allowance in others.",
      },
      {
        label: "Cancellation risk",
        text: "Canceling an Instant Ink subscription can remotely disable the cartridges tied to it, an unwelcome surprise if you switch back to buying ink outright.",
      },
      {
        label: "Better alternative",
        text: "For most households, an outright ink-tank printer like those in this list avoids subscription risk entirely with lower long-run cost.",
      },
    ],
  },
  {
    subheading: "Third-Party Ink Compatibility by Brand",
    table: {
      headers: ["Brand", "Third-party ink tolerance"],
      rows: [
        ["HP", "History of firmware-blocking non-HP ink, subject of a documented class action"],
        ["Canon", "Mixed tolerance, varies by model"],
        ["Brother", "Generally more tolerant of third-party cartridges"],
        ["Epson", "Tank refills are typically OEM-bottle-based across this list, third-party risk is lower relevance for EcoTank"],
      ],
    },
    note: "This list is EcoTank- and MegaTank-heavy, where the ink system itself already delivers most of the savings third-party cartridges would offer for a standard inkjet.",
  },
  {
    subheading: "By Print Volume and Payback Time",
    table: {
      headers: ["Monthly volume", "Recommended pick", "Approx. payback vs. cartridge printer"],
      rows: [
        ["Under 100 pages", "HP Smart Tank 5101", "6-12 months"],
        ["100-400 pages", "Epson EcoTank ET-2800 or ET-4800", "3-6 months"],
        ["400+ pages, high coverage", "Epson EcoTank ET-4950 or ET-4850", "Under 3 months"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Why does my printer's real ink cost feel higher than advertised?",
    a: "Manufacturer cost-per-page figures use an ISO test standard of roughly 5 percent page coverage, essentially plain text with wide margins. Real home printing, forms, graphs, and colorful worksheets often runs 10 to 20 percent coverage, so actual cost per page can run 2 to 4 times higher than the number on the box.",
  },
  {
    q: "Is HP Instant Ink worth it for cheap ink?",
    a: "It depends on how predictable your volume is. Instant Ink can lower cost per page for steady, matched usage, but canceling the subscription can remotely disable your cartridges, and printing beyond your plan's allowance triggers overage fees. For variable or unpredictable printing habits, an outright ink-tank printer avoids these risks.",
  },
  {
    q: "Can I safely use third-party ink to save even more?",
    a: "It depends on the brand. HP has a documented history of blocking non-HP ink through firmware updates, while Brother and Canon tend to be more tolerant. For the ink-tank printers in this list, most of the savings already come from the tank system itself, so third-party ink matters less here than for a standard cartridge printer.",
  },
  {
    q: "Should I buy standard or high-yield XL cartridges?",
    a: "High-yield XL cartridges cost more upfront but meaningfully less per page than standard cartridges, so they typically pay back the price difference within a few refill cycles for anyone printing regularly. For the printers in this guide specifically, ink-tank refills already undercut both options.",
  },
  {
    q: "How fast do ink-tank printers pay back their higher upfront price?",
    a: "It depends on volume and coverage. At light use (under 100 pages a month), payback against a comparable cartridge printer typically takes 6 to 12 months. At 400 or more pages a month with heavier ink coverage, payback often happens in under 3 months.",
  },
  {
    q: "Are Epson EcoTank and Canon MegaTank ink bottles interchangeable?",
    a: "No. Each brand uses its own bottle design and tank layout, so you can't substitute one brand's ink bottles for the other's printer. Factor local retail availability of your specific brand's ink into your decision if convenient restocking matters to you.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-cartridge-free-printers", title: "Best Cartridge-Free Printers (2026)" },
  { href: "/guide/best-printers-for-high-volume-printing", title: "Best Printers for High-Volume Printing (2026)" },
  { href: "/guide/best-printers-for-home-use", title: "Best All-in-One Printers for Home Use (2026)" },
  { href: "/guide/best-printers-for-homeschooling", title: "Best Printers for Homeschooling (2026)" },
];
