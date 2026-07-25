export const guideSlug = "best-compact-printers-for-small-desks";
export const guideTitle = "8 Best Compact Printers for Small Desks in 2026";
export const metaTitle = "Best Compact Printers for Small Desks in 2026";
export const metaDescription =
  "8 best compact printers for small desks in 2026, compared on real footprint, paper tray capacity, and setup ease so you know exactly what fits.";
export const mainKeyword = "compact printer";
export const introParagraphs = [
  "A compact printer for a small desk needs to solve a math problem most listings never show you: a printer footprint of roughly 17 inches wide can eat well over half of a 30-inch-wide desk before you even open the paper tray. Compact inkjets, all-in-ones, and mono laser printers all measure compact differently, and a printer marketed as small can still be the wrong fit once the tray extends forward or the scanner lid needs headroom.",
  "Below are 8 compact printers we evaluated on footprint against common small-desk widths, paper tray capacity, print technology, and how straightforward wireless setup actually is out of the box, ranging from a $53.97 inkless travel printer to a $199.99 ink-tank all-in-one.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg";

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
    id: "canon-pixma-ts4320",
    rank: 1,
    badge: "Best Overall Compact Pick",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=deskfinds0d-20",
    description:
      "The PIXMA TS4320 packs printing, copying, and scanning into a compact inkjet body that sits comfortably on a 30-inch desk without dominating it. Duplex printing is built in, so double-sided documents don't require manually flipping pages, and the setup process pairs with the Canon PRINT app over wifi in a few guided steps.\n\nLike most compact inkjet AIOs, its paper tray holds well under a standard 500-sheet ream, so frequent small-batch users will refill more often than they would with a full-size printer. Letter and A4 are supported, but legal and tabloid sizes are not, which is worth checking before buying if you occasionally print larger documents.",
    specs: [
      "Compact color inkjet all-in-one",
      "Auto duplex (2-sided) printing",
      "Wireless with Canon PRINT mobile app",
      "Print, copy, scan",
      "Letter/A4 only, no legal or tabloid",
    ],
    pros: [
      "Genuinely compact footprint for a full AIO",
      "Auto duplex printing built in",
      "Straightforward Canon PRINT app pairing",
      "Lowest price in this list",
    ],
    cons: [
      "Small paper tray needs frequent refills",
      "No legal or tabloid paper size support",
      "Inkjet cartridges can dry out with infrequent use",
    ],
    bestFor: "Buyers who want the smallest reasonable footprint for a full print/copy/scan AIO",
  },
  {
    id: "canon-pixma-ts6520",
    rank: 2,
    badge: "Best Display & Controls",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=deskfinds0d-20",
    description:
      "The TS6520 adds a 1.42-inch OLED display and a more intuitive control panel on top of the same compact-desk-friendly footprint as Canon's smaller PIXMA models. That screen makes checking ink levels, wifi status, and print settings possible without opening a phone app every time.\n\nIt keeps the same duplex printing and compact inkjet AIO formula, so the tradeoffs are similar: a modest paper tray relative to a full-size printer, and letter/A4-only paper support. The OLED panel is the clearest reason to pick this over the TS4320 if you'd rather glance at a small screen than pull out your phone.",
    specs: [
      "Compact color inkjet all-in-one",
      "1.42\" OLED display",
      "Auto duplex printing",
      "Wireless setup via Canon PRINT app",
      "Print, copy, scan",
    ],
    pros: [
      "Built-in OLED screen for quick status checks",
      "Intuitive control panel layout",
      "Auto duplex printing included",
      "Compact footprint suits a small desk",
    ],
    cons: [
      "Still a small tray relative to a full ream",
      "No legal or tabloid support",
      "Slightly pricier than the base PIXMA TS4320",
    ],
    bestFor: "Buyers who want on-printer status checks without opening a mobile app",
  },
  {
    id: "hp-deskjet-4355",
    rank: 3,
    badge: "Best for AI-Assisted Printing",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "HP's DeskJet 4355 is a compact all-in-one with print, scan, and copy in one small-footprint body, plus a 3-month HP Instant Ink trial that softens the early cost of cartridges. The AI-capable label refers to HP's smart printing features that help route mobile print jobs and manage settings through the HP Smart app.\n\nFirst-time setup runs through the HP Smart app, and like most compact inkjet AIOs it favors footprint over paper capacity, so plan on refilling more often than a business-class printer. It's a straightforward pick if you're already comfortable pairing devices through a phone app.",
    specs: [
      "Compact color inkjet all-in-one",
      "3-month HP Instant Ink trial included",
      "HP Smart app pairing",
      "Print, scan, copy",
      "AI-assisted print management features",
    ],
    pros: [
      "Includes a 3-month Instant Ink trial",
      "Compact body fits small desks easily",
      "HP Smart app guides first-time setup",
      "Competitive price for a full AIO",
    ],
    cons: [
      "Small paper tray by full-size printer standards",
      "Instant Ink subscription cost kicks in after the trial",
      "First-time app pairing can trip up non-tech users",
    ],
    bestFor: "Buyers who want a low upfront cost softened by a starter ink trial",
  },
  {
    id: "epson-ecotank-et-2800",
    rank: 4,
    badge: "Best for Low Cost-Per-Page (Larger Footprint)",
    name: "Epson EcoTank ET-2800 Wireless Color All-in-One Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=deskfinds0d-20",
    description:
      "The EcoTank ET-2800 trades a cartridge system for refillable ink tanks, which cuts cost per page dramatically for anyone printing more than an occasional page. Worth noting honestly: the ink tank housing on the side of the printer body makes the ET-2800 noticeably larger than the cartridge-based compact printers in this list, so it is not the most compact option here even though it is genuinely small-desk-workable.",
    specs: [
      "Cartridge-free ink supertank system",
      "Wireless print, scan, copy",
      "Larger footprint than cartridge-based compact printers",
      "Higher upfront cost, lower cost per page",
      "Letter/A4 support",
    ],
    pros: [
      "Cartridge-free ink tanks cut long-term ink cost",
      "No cartridges drying out from infrequent printing",
      "Full print/scan/copy functionality",
      "Tanks hold enough for months of typical home use",
    ],
    cons: [
      "Largest footprint among the picks in this list",
      "Highest upfront price in this list",
      "Ink tank refills take longer than a cartridge swap",
    ],
    bestFor: "Buyers who print often enough that ink-tank economics beat cartridge cost, and have desk room to spare",
  },
  {
    id: "canon-pixma-tr4720",
    rank: 5,
    badge: "Best with Auto Document Feeder",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31nVDhGd67L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXC13T?tag=deskfinds0d-20",
    description:
      "The PIXMA TR4720 is one of the few compact printers in this list with an auto document feeder, letting you scan or fax multi-page documents without lifting the lid and repositioning pages one at a time. Built-in fax support is included too, useful for home offices that still occasionally need it.\n\nIts footprint stays desk-friendly despite the added ADF hardware, and mobile printing setup follows the same Canon PRINT app pairing as the rest of the PIXMA line. If you rarely scan multi-page documents, the ADF is nice-to-have rather than essential, and the TS4320 covers the basics for less.",
    specs: [
      "Auto document feeder (ADF) included",
      "Built-in fax",
      "Wireless with Canon PRINT app",
      "Compact all-in-one body",
      "Mobile printing supported",
    ],
    pros: [
      "Rare compact pick with an auto document feeder",
      "Built-in fax for occasional home-office use",
      "Compact footprint despite the added ADF hardware",
      "Same easy Canon PRINT app setup as other PIXMA models",
    ],
    cons: [
      "ADF adds bulk versus the simplest flatbed-only models",
      "Fax is a feature few buyers actually use in 2026",
      "Small paper tray typical of compact inkjets",
    ],
    bestFor: "Buyers who regularly scan or fax multi-page documents",
  },
  {
    id: "canon-pixma-ts3720",
    rank: 6,
    badge: "Best Budget Basic Pick",
    name: "Canon PIXMA TS3720 Wireless All-in-One Printer",
    price: "$59.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31-ZgpCGxiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1DV6FV5?tag=deskfinds0d-20",
    description:
      "The PIXMA TS3720 strips things down to the basics: print, copy, scan, and wireless connectivity in a small, no-frills body built for basic home printing rather than heavier document workflows. It's the cheapest full all-in-one in this list, which makes it a sensible pick if you print occasionally and don't need an ADF, a screen, or duplex printing.\n\nBecause it skips the extra hardware found on pricier PIXMA models, it also has one of the smallest footprints here, a genuine advantage on a truly tight desk. Just budget for more frequent refills given its small tray, and expect basic single-sided printing rather than automatic duplex.",
    specs: [
      "Basic compact color all-in-one",
      "Print, copy, scan",
      "Wireless via Canon PRINT app",
      "No auto duplex printing",
      "Small, no-frills footprint",
    ],
    pros: [
      "Cheapest full all-in-one in this list",
      "One of the smallest footprints here",
      "Simple setup with no extra features to configure",
      "Covers the print/copy/scan basics reliably",
    ],
    cons: [
      "No automatic duplex printing",
      "No display screen for status checks",
      "Basic feature set won't suit heavier document needs",
    ],
    bestFor: "Buyers who print occasionally and want the lowest-cost, smallest-footprint AIO",
  },
  {
    id: "brother-hl-l2405w",
    rank: 7,
    badge: "Best Compact Mono Laser",
    name: "Brother HL-L2405W Wireless Compact Monochrome Laser Printer",
    price: "$139.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPL7HRQN?tag=deskfinds0d-20",
    description:
      "Mono laser printers like the HL-L2405W can actually have a smaller physical footprint than compact inkjet AIOs, since they skip the scanner bed and ink cartridge housing entirely, a distinction most compact-printer guides never draw. Toner also doesn't dry out the way inkjet cartridges do, which matters if the printer sits idle between print jobs on a small desk.\n\nThis is a print-only device with no scan or copy function, so it fits buyers who mainly need fast, no-fuss text output rather than a full AIO. Wireless setup and mobile printing are supported, and it works with Alexa for voice-triggered print commands.",
    specs: [
      "Compact monochrome laser, print-only",
      "Wireless with mobile printing",
      "Alexa compatible",
      "No scan or copy function",
      "Toner does not dry out between uses",
    ],
    pros: [
      "Smaller footprint than most compact inkjet AIOs",
      "Toner never dries out from infrequent printing",
      "Fast mono laser output for text documents",
      "Alexa voice print support",
    ],
    cons: [
      "No scanning or copying capability",
      "Monochrome only, no color printing",
      "Higher upfront price than the compact inkjets here",
    ],
    bestFor: "Buyers who mainly print text and want the smallest true footprint plus toner that never dries out",
  },
  {
    id: "inkless-portable-thermal-printer",
    rank: 8,
    badge: "Most Compact (Specialty Inkless Pick)",
    name: "Inkless Portable Bluetooth Thermal Printer (MT610Pro)",
    price: "$53.97",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/51zPjelEtML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZC56ZH4?tag=deskfinds0d-20",
    description:
      "This inkless thermal printer is the smallest and lightest device in this list by a wide margin, small enough to tuck in a drawer rather than occupy permanent desk space. It supports full 8.5 x 11-inch US Letter and A4 pages via 300 DPI thermal printing and pairs over Bluetooth with iOS, Android, and laptops.\n\nBecause it uses heat-sensitive thermal paper instead of ink or toner, print quality and longevity are not comparable to an inkjet or laser printer, and this is best framed honestly as a specialty travel and light-duty pick rather than a primary home-office printer. If your desk truly cannot spare any footprint, this is the pick, but a Canon PIXMA or Brother laser will serve better as a daily-use primary printer.",
    specs: [
      "Inkless thermal printing, 300 DPI",
      "Supports 8.5 x 11\" Letter and A4",
      "Bluetooth pairing with iOS/Android/laptop",
      "Smallest, lightest device in this list",
      "Requires special thermal paper, not standard copy paper",
    ],
    pros: [
      "By far the smallest footprint of any pick here",
      "Genuinely portable for travel or car use",
      "No ink or toner cartridges required",
      "Simple Bluetooth pairing",
    ],
    cons: [
      "Requires proprietary thermal paper, not standard copy paper",
      "Print quality trails inkjet or laser output",
      "Not a realistic primary printer for daily home-office volume",
    ],
    bestFor: "Buyers who need occasional printing in a space with zero room for a standard printer",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Footprint vs. small-desk width",
    description: "Compared each printer's stated dimensions against common small-desk widths of 24-36 inches to flag which picks realistically leave room for a keyboard and monitor.",
  },
  {
    title: "Paper tray capacity honesty",
    description: "Checked tray capacity against a standard 500-sheet ream rather than assuming compact means adequate, since most compact printers hold well under a full ream.",
  },
  {
    title: "Print technology fit",
    description: "Weighed inkjet AIO, ink-tank, mono laser, and thermal designs against real footprint and cost-per-page differences rather than treating all compact printers as interchangeable.",
  },
  {
    title: "Wireless setup difficulty",
    description: "Considered how each printer pairs over wifi or Bluetooth, since app-based pairing (Canon PRINT, HP Smart) is not always frictionless for first-time users.",
  },
  {
    title: "Value for price",
    description: "Weighed upfront price against paper size support, duplex printing, and added hardware like an ADF or display screen to judge whether the extra cost buys real function.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Measure your desk width against the real printer footprint",
    explanation:
      "A printer around 17 inches wide occupies well over half of a standard 30-inch-wide desk before you factor in paper tray extension. Measure your actual available desk width, not just the listed printer dimensions, and subtract space for a keyboard and mouse before assuming a printer will fit.",
  },
  {
    criterion: "Compact usually means a smaller paper tray, not just a smaller body",
    explanation:
      "Most compact printers trade paper tray capacity for a smaller footprint, often holding well under a standard 500-sheet ream. If you print in batches, plan on refilling the tray more often than you would with a full-size office printer rather than assuming compact means equally convenient.",
  },
  {
    criterion: "Compare footprint across print technology, not just within it",
    explanation:
      "A compact mono laser printer like the Brother HL-L2405W can have a smaller physical footprint than a compact inkjet all-in-one, since it skips the scanner bed and ink cartridge housing entirely. If scanning isn't a daily need, a laser-only printer may free up more desk space than a compact inkjet AIO.",
  },
  {
    criterion: "Budget real time for first-time mobile print setup",
    explanation:
      "Pairing a printer with the Canon PRINT or HP Smart app is rarely instant for first-time users, expect to create an account, connect to wifi, and confirm a test print before it's reliable. Budget 10-15 minutes for initial setup rather than assuming it's a 2-minute plug-and-play process.",
  },
  {
    criterion: "Check paper size support before buying",
    explanation:
      "Nearly every compact printer supports Letter and A4 only, with no legal or tabloid size option. If you occasionally need to print larger documents, confirm this limitation before buying rather than discovering it after the printer is already on your desk.",
  },
  {
    criterion: "Match ink or toner type to how often you actually print",
    explanation:
      "Inkjet cartridges can dry out after just 2-4 weeks of inactivity, wasting ink on cleaning cycles when you finally do print. If your printing is occasional rather than regular, a mono laser printer with toner that doesn't dry out, or an ink-tank model, avoids this hidden cost entirely.",
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
    subheading: "By Desk Width",
    intro:
      "A printer's real footprint, tray extended, is bigger than its boxed dimensions. Match your available desk width to the picks below rather than guessing.",
    table: {
      headers: ["Available desk width", "Recommended pick", "Why"],
      rows: [
        ["Under 24 inches, very tight", "Inkless Portable Thermal Printer", "Smallest device in this list by a wide margin"],
        ["24-30 inches, standard small desk", "Canon PIXMA TS3720 or Brother HL-L2405W", "Smallest footprints among full-function picks"],
        ["30-36 inches, some room to spare", "Canon PIXMA TS4320 or TS6520", "Compact AIO with duplex and full features"],
        ["36 inches+, footprint not a constraint", "Epson EcoTank ET-2800", "Largest footprint here but lowest long-term cost per page"],
      ],
    },
  },
  {
    subheading: "By Print Technology",
    cards: [
      {
        label: "Want the smallest true footprint",
        text: "The Brother HL-L2405W mono laser skips the scanner bed and ink housing, making it smaller than most compact inkjet AIOs, though it's print-only with no scan or copy.",
      },
      {
        label: "Want low cost per page and print often",
        text: "The Epson EcoTank ET-2800's refillable ink tanks cut cost per page significantly, worth the larger footprint if you print regularly rather than occasionally.",
      },
      {
        label: "Want full print, scan, and copy in one small unit",
        text: "The Canon PIXMA TS4320 or TR4720 cover the standard AIO functions in a genuinely compact inkjet body.",
      },
      {
        label: "Need something small enough to store in a drawer",
        text: "The inkless thermal printer is the only pick here you can realistically tuck away between uses rather than leaving on the desk permanently.",
      },
    ],
  },
  {
    subheading: "Paper Tray Capacity vs. Refill Frequency",
    intro:
      "Every compact printer in this list holds well under a standard 500-sheet ream, so refill frequency scales with how much you print in a sitting.",
    table: {
      headers: ["Typical print batch", "What to expect", "Best-suited pick"],
      rows: [
        ["A few pages at a time", "Tray refills rarely needed", "Any pick in this list"],
        ["20-50 pages in one sitting", "Refill roughly once a week for light compact trays", "Canon PIXMA TS4320 or TS6520"],
        ["Frequent multi-page print jobs", "Consider a larger-tray option outside this compact category if volume grows", "Epson EcoTank ET-2800 (larger tank capacity offsets some refill frequency)"],
      ],
    },
    note: "None of the picks here match a full-size office printer's tray capacity. If you consistently print more than a light home-office volume, a compact printer will mean refilling paper more often, plan for that rather than being surprised by it.",
  },
  {
    subheading: "First-Time Mobile Print Setup",
    intro:
      "Wireless pairing for compact printers routes through a manufacturer app, and it's rarely a 2-minute process the first time.",
    cards: [
      {
        label: "Canon PIXMA models (TS4320, TS6520, TR4720, TS3720)",
        text: "Download the Canon PRINT app, create an account if prompted, connect the printer to your wifi network, and run a test print. Budget about 10 minutes.",
      },
      {
        label: "HP DeskJet 4355",
        text: "Pairs through the HP Smart app with a similar wifi connection flow, plus an optional Instant Ink account setup if you want to activate the included trial.",
      },
      {
        label: "Brother HL-L2405W",
        text: "Supports wireless setup and Alexa pairing separately, both are straightforward but are two separate steps if you want voice printing.",
      },
      {
        label: "Inkless thermal printer",
        text: "Pairs over Bluetooth directly with a phone or laptop, generally the fastest setup of any pick here since it skips wifi network configuration entirely.",
      },
    ],
  },
  {
    subheading: "When Compact Isn't Actually the Right Category",
    intro:
      "A compact printer isn't always the right answer even on a small desk.",
    table: {
      headers: ["Situation", "Better fit than a compact printer", "Why"],
      rows: [
        ["Need legal or tabloid paper support", "A larger-format printer outside this list", "No compact pick here supports legal or tabloid sizes"],
        ["Print 500+ pages per month", "A higher-capacity office printer", "Compact trays require too-frequent refilling at that volume"],
        ["Need a document feeder for multi-page scans regularly", "Canon PIXMA TR4720", "The only pick here with an ADF"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "How do I know if a compact printer will actually fit my small desk?",
    a: "Measure your actual available desk width, not just the space between your keyboard and monitor, then compare it against the printer's listed width plus 2-4 inches for the paper tray or output tray extending forward. A printer around 17 inches wide, like most of the AIOs in this list, needs meaningfully more clearance than its boxed dimensions suggest once it's in use.",
  },
  {
    q: "Is a compact inkjet or a compact mono laser printer smaller?",
    a: "It depends on the model, but mono laser printers like the Brother HL-L2405W can actually have a smaller physical footprint than compact inkjet all-in-ones, since they skip the scanner bed and ink cartridge housing entirely. If you don't need scanning, a laser-only printer is worth comparing against a compact AIO on footprint alone, not just print quality.",
  },
  {
    q: "Why do compact printers need paper refills so often?",
    a: "Compact printers trade paper tray size for a smaller body, so most hold well under a standard 500-sheet ream, sometimes closer to 60-100 sheets. If you print in larger batches regularly, budget for more frequent refills as the tradeoff for the smaller footprint, or consider a printer with a larger tank like the Epson EcoTank ET-2800.",
  },
  {
    q: "Do compact printers support legal or tabloid-size paper?",
    a: "Generally no. Every pick in this list supports Letter and A4 paper sizes only, with no legal or tabloid support. If you occasionally need to print larger documents, plan to use a print shop or a different printer for those jobs rather than expecting a compact printer to cover it.",
  },
  {
    q: "Is first-time wireless setup difficult on these printers?",
    a: "It's rarely instant. Canon and HP models pair through their respective mobile apps (Canon PRINT, HP Smart), which typically involves creating an account, connecting to wifi, and running a test print, usually about 10 minutes for a first-time setup. The inkless thermal printer pairs over Bluetooth directly and tends to be the fastest to get running.",
  },
  {
    q: "Are ink-tank printers worth the larger footprint on a small desk?",
    a: "If you print regularly, yes, the Epson EcoTank ET-2800's refillable ink tanks meaningfully lower cost per page compared to cartridge-based printers, and tanks don't dry out the way idle cartridges can. But it is honestly the largest printer in this list due to the tank housing, so it's only the right tradeoff if you have a bit of extra desk width to spare.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-printers-for-home-offices", title: "Best Small Printers for Home Offices (2026)" },
  { href: "/guide/best-printers-for-small-spaces", title: "Best Printers for Small Spaces (2026)" },
  { href: "/guide/best-small-printer-stands", title: "Best Small Printer Stands (2026)" },
];
