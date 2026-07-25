export const guideSlug = "best-budget-printers-for-home-offices";
export const guideTitle = "7 Best Budget Printers for Home Offices in 2026";
export const metaTitle = "Best Budget Printers for Home Offices in 2026";
export const metaDescription =
  "7 best budget printers for home offices in 2026, segmented by what you actually need. Compare 2-year total cost, not just sticker price, across inkjet and laser.";
export const mainKeyword = "budget printer for home office";
export const introParagraphs = [
  "Budget shouldn't mean one blanket list, a home office that prints the occasional document has very different needs than one that scans and copies regularly, and the right cheap printer for each situation isn't the same model. Lumping every sub-$200 printer together ignores that some are optimized for low upfront cost while others are optimized for low cost over the next 2 years.",
  "Below are 7 printers we researched across inkjet, ink-tank, and monochrome laser categories, from a $64 basic inkjet to a $199 ink-tank model, segmented by the kind of home office task each one actually fits best.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
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
    badge: "Best Overall Budget Value",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=deskfinds0d-20",
    description:
      "At $64, the PIXMA TS4320 is the cheapest pick in this list while still including automatic duplex printing, a copier, and a scanner, a genuinely full feature set for the price. Its compact single-tray design keeps daily operation simple for occasional document printing.\n\nThis is a good fit for a home office that prints intermittently rather than daily, since cartridge ink can dry out with long gaps between print jobs. If your home office prints only occasionally, that's actually an advantage over an ink-tank system that costs more upfront to justify.",
    specs: [
      "Color inkjet, duplex printing",
      "Copier and scanner built in",
      "Compact single-tray design",
      "Easy setup, 1-year limited warranty",
      "Mobile app printing support",
    ],
    pros: [
      "Lowest price in this list",
      "Automatic duplex printing included",
      "Full print, scan, copy feature set",
      "Compact footprint",
    ],
    cons: [
      "No automatic document feeder",
      "Cartridge ink costs more per page at higher volume",
      "Ink can dry out with long gaps between prints",
    ],
    bestFor: "Home offices that print occasionally and want the lowest upfront cost with a full feature set",
  },
  {
    id: "canon-pixma-tr4720",
    rank: 2,
    badge: "Best Auto Document Feeder Budget Pick",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXKNB9?tag=deskfinds0d-20",
    description:
      "The PIXMA TR4720's automatic document feeder is the standout feature at this price, letting you scan or copy multi-page documents without repositioning each page on the glass individually. That single feature matters a lot for a home office that regularly scans receipts, contracts, or multi-page forms.\n\nBuilt-in fax is a legacy feature most home offices won't use, but it doesn't add friction to daily operation. Mobile printing setup follows a short guided process, making it a reasonable pick for a household with mixed devices.",
    specs: [
      "Color inkjet all-in-one with auto document feeder",
      "Mobile printing support",
      "Built-in fax (legacy feature)",
      "Wireless connectivity",
      "Compact home printer design",
    ],
    pros: [
      "Automatic document feeder for multi-page scanning",
      "Guided mobile printing setup",
      "Affordable price",
      "Simple daily operation",
    ],
    cons: [
      "Cartridge-based ink costs more at higher volume",
      "Fax feature adds an unused menu option for most",
      "Not built for sustained high-volume printing",
    ],
    bestFor: "Home offices that regularly scan or copy multi-page documents",
  },
  {
    id: "hp-deskjet-4355-budget",
    rank: 3,
    badge: "Best for First-Time Buyers",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=deskfinds0d-20",
    description:
      "HP's straightforward wireless setup flow and simple print, scan, copy layout make the DeskJet 4355 a reasonable choice for a home office being set up for the first time. The included 3-month Instant Ink trial gives new buyers a low-pressure way to try automatic ink reordering before deciding whether to keep it.\n\nAI-capable printing features are available but optional, they don't complicate the basic experience of getting a document printed. As with any cartridge-based budget inkjet, plan for cartridge costs returning to standard pricing once the trial ends.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Simple wireless setup flow",
      "AI-capable printing features (optional)",
      "Compact, budget-friendly design",
    ],
    pros: [
      "Simple setup suited to first-time home office buyers",
      "Low price with a full feature set",
      "Instant Ink trial simplifies early ink purchasing",
      "Compact design",
    ],
    cons: [
      "Not built for high daily volume",
      "Cartridge costs return to normal after the trial",
      "No automatic document feeder",
    ],
    bestFor: "Home offices being set up for the first time that want the simplest onboarding",
  },
  {
    id: "canon-pixma-ts6520-budget",
    rank: 4,
    badge: "Best Budget Pick for Troubleshooting",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=deskfinds0d-20",
    description:
      "A 1.42-inch OLED display sets the TS6520 apart from other budget printers in this list, showing plain status messages rather than a blinking light code when something goes wrong. That's worth paying a few extra dollars for in a home office where you're the only one around to troubleshoot a jam or low-ink warning.\n\nDuplex printing and a built-in scanner and copier round out the feature set at a price still under $75, and the intuitive control panel keeps routine tasks a button press away rather than buried in a menu.",
    specs: [
      "Color inkjet, duplex printing",
      "Built-in copier and scanner",
      "1.42-inch OLED display",
      "Intuitive control panel",
      "Compact design",
    ],
    pros: [
      "OLED display gives clear error messages",
      "Duplex printing included",
      "Full print, scan, copy feature set",
      "Compact footprint",
    ],
    cons: [
      "Cartridge ink costs more at high volume",
      "No automatic document feeder",
      "Ink can dry out with infrequent use",
    ],
    bestFor: "Home offices that want clear on-screen guidance when something goes wrong",
  },
  {
    id: "canon-lbp6030w-budget",
    rank: 5,
    badge: "Best Budget Laser for Text Documents",
    name: "Canon imageCLASS LBP6030w Monochrome Laser Printer",
    price: "$87.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GFXE7NdOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00K5UZO0Q?tag=deskfinds0d-20",
    description:
      "For a home office that mostly prints text, contracts, invoices, or forms rather than photos, the LBP6030w's monochrome laser engine delivers crisp text at a lower cost per page than any inkjet in this list. Its 19 PPM rated speed keeps routine document printing fast.\n\nThis is a print-only device with no scan, copy, or duplex, a genuine trade-off for the lower per-page cost. Pair it with a phone-based scanning app if you occasionally need to digitize a document, rather than relying on a dedicated scanner.",
    specs: [
      "Monochrome laser, print only",
      "19 PPM rated speed",
      "Compact wireless design",
      "1-year limited warranty",
      "No scan, copy, or duplex",
    ],
    pros: [
      "Lowest cost per page for text documents in this list",
      "Fast, crisp monochrome output",
      "Toner doesn't dry out during infrequent use",
      "Compact footprint",
    ],
    cons: [
      "Print only, no scan or copy",
      "No automatic duplex",
      "Not suited to photo or color printing",
    ],
    bestFor: "Home offices that mostly print text documents and want the lowest per-page cost",
  },
  {
    id: "brother-hl-l2405w-budget",
    rank: 6,
    badge: "Best Wireless Laser Budget Pick",
    name: "Brother HL-L2405W Wireless Compact Monochrome Laser Printer",
    price: "$139.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPL7HRQN?tag=deskfinds0d-20",
    description:
      "The HL-L2405W adds wireless printing, mobile app support, and Alexa compatibility to a compact monochrome laser body, a step up in convenience over the LBP6030w for a home office that wants more flexible printer placement away from a desktop computer. The included Refresh Subscription trial lets you test automatic toner reordering.\n\nLike any budget laser printer, expect a starter toner cartridge with a lower page yield than the standard replacement, and build for a realistic 2 to 3 year comfortable lifespan under moderate home office use rather than treating it as a decade-long investment.",
    specs: [
      "Monochrome laser, print only",
      "Wireless and mobile printing",
      "Works with Alexa voice commands",
      "Includes Refresh Subscription trial",
      "Compact desktop footprint",
    ],
    pros: [
      "Reliable wireless setup with Alexa support",
      "Low cost per page for text documents",
      "Compact size for tight desk space",
      "Refresh Subscription trial available",
    ],
    cons: [
      "No scan or copy functions",
      "No automatic duplex printing",
      "Higher upfront price than the inkjet picks in this list",
    ],
    bestFor: "Home offices that want wireless monochrome laser printing without a wired connection",
  },
  {
    id: "epson-ecotank-et-2800",
    rank: 7,
    badge: "Best Long-Term Value (Ink Tank)",
    name: "Epson EcoTank ET-2800 Wireless Color All-in-One Cartridge-Free Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=deskfinds0d-20",
    description:
      "At $199.99, the ET-2800 has the highest upfront price in this list, but its cartridge-free ink-tank system is the clearest path to the lowest 2-year total cost for a home office that prints regularly. Refill bottles cost a fraction of equivalent cartridge ink over the life of the printer.\n\nScan and copy are built in alongside color printing, making it a genuine all-in-one rather than a print-focused laser. The break-even point against a cheaper cartridge inkjet typically arrives within the first year or two of regular home office volume, after which the ink-tank system keeps costing less.",
    specs: [
      "Color inkjet all-in-one, cartridge-free ink tank",
      "Scan and copy built in",
      "Wireless connectivity",
      "Refillable ink bottles instead of cartridges",
      "Compact ink-tank design",
    ],
    pros: [
      "Lowest per-page ink cost over 2 years among these 7 picks",
      "Full print, scan, copy feature set",
      "Ink doesn't dry out as fast between refills",
      "Cartridge-free means no recurring cartridge purchases",
    ],
    cons: [
      "Highest upfront price in this list",
      "Ink refills take longer than a cartridge swap",
      "Not the best fit for very light, occasional use",
    ],
    bestFor: "Home offices that print regularly enough to benefit from the lowest 2-year ink cost",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "2-year total cost of ownership",
    description: "Weighed sticker price against ink or toner system type, since a cheaper printer with expensive cartridges can cost more than a pricier ink-tank model within 2 years.",
  },
  {
    title: "Task fit for home office needs",
    description: "Segmented picks by whether a home office needs occasional document printing versus regular scanning and copying, rather than ranking every budget printer on one blanket scale.",
  },
  {
    title: "Feature completeness at the price",
    description: "Checked whether duplex, auto document feeder, and scan or copy are included at each price point, since these features aren't consistent across the budget tier.",
  },
  {
    title: "Ink and toner reliability for light use",
    description: "Considered how well each ink or toner system tolerates gaps between print jobs, cartridge inkjets can dry out, while laser toner and ink-tank systems handle infrequent use better.",
  },
  {
    title: "Setup and daily use simplicity",
    description: "Factored in wireless setup friction and daily control panel clarity, since a home office buyer often sets up and troubleshoots the printer without IT support.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Segment your needs before comparing prices",
    explanation:
      "A home office that prints a document once a week needs a different printer than one that scans and copies daily, comparing every sub-$200 printer on one list ignores this. Decide first whether you need occasional printing, regular scanning, or high-volume text output, then compare within that segment.",
  },
  {
    criterion: "Compare 2-year total cost, not just sticker price",
    explanation:
      "A $64 cartridge inkjet and a $199 ink-tank printer can end up costing about the same over 2 years of regular home office use, once you factor in cartridge replacement costs against refill bottle costs. Calculate your expected monthly page volume and multiply it out before assuming the cheaper sticker price wins.",
  },
  {
    criterion: "Monochrome laser wins on per-page cost for text-only offices",
    explanation:
      "If your home office rarely prints color, a monochrome laser like the Canon LBP6030w or Brother HL-L2405W will have a meaningfully lower cost per page than any inkjet in this list, even though the laser's upfront price is often higher.",
  },
  {
    criterion: "Auto document feeder matters more than most budget shoppers realize",
    explanation:
      "Scanning or copying a multi-page document one page at a time on a flatbed scanner is slow and easy to mess up. If your home office regularly deals with multi-page forms, contracts, or receipts, an auto document feeder like the one on the Canon PIXMA TR4720 saves real time every week.",
  },
  {
    criterion: "Infrequent printing favors laser or ink-tank over cartridge inkjet",
    explanation:
      "Cartridge-based inkjet printers can have ink dry out in the print head after weeks without use, which shows up as streaky or missing colors on the next print job. If your home office prints sporadically, a laser printer's toner or an ink-tank system tolerates the gaps better.",
  },
  {
    criterion: "The starter ink or toner cartridge isn't the real cost",
    explanation:
      "Both inkjet and laser budget printers commonly ship with a lower-yield starter cartridge, not the full-yield version used for the advertised cost-per-page figure. Budget for a first replacement purchase sooner than the box implies, especially on the cheapest picks in this list.",
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
    subheading: "By What Your Home Office Actually Needs",
    intro:
      "Segment first by task, occasional documents, regular scan and copy, or high-volume text, then pick within that segment.",
    table: {
      headers: ["Your home office does mostly", "Best pick", "Why"],
      rows: [
        ["Occasional documents, low volume", "Canon PIXMA TS4320", "Lowest upfront cost with a full feature set"],
        ["Regular multi-page scanning or copying", "Canon PIXMA TR4720", "Auto document feeder saves real time weekly"],
        ["Mostly text, invoices, forms", "Canon imageCLASS LBP6030w", "Lowest cost per page for monochrome text"],
        ["Regular printing at meaningful volume", "Epson EcoTank ET-2800", "Lowest 2-year total cost among these 7 picks"],
        ["First home office setup, want simplicity", "HP DeskJet 4355", "Straightforward setup, low pressure"],
      ],
    },
  },
  {
    subheading: "2-Year Total Cost of Ownership Comparison",
    intro:
      "Sticker price alone is misleading, here's how the category-level cost pattern plays out for a home office printing a moderate, regular volume over 2 years.",
    table: {
      headers: ["Printer type", "Upfront cost pattern", "2-year cost pattern"],
      rows: [
        ["Cartridge inkjet (TS4320, TR4720, DeskJet 4355, TS6520)", "Lowest, $64 to $74", "Rises fastest with regular volume due to cartridge replacement frequency"],
        ["Monochrome laser (LBP6030w, HL-L2405W)", "Moderate, $88 to $140", "Lowest cost per page for text-only printing"],
        ["Ink-tank (EcoTank ET-2800)", "Highest, $199.99", "Lowest overall cost once volume is regular enough to reach the break-even point"],
      ],
    },
    note: "If you're not sure how much you'll print, start with a cartridge inkjet like the TS4320, the low upfront cost limits your downside if your usage stays light.",
  },
  {
    subheading: "Ink-Tank vs Cartridge Break-Even",
    cards: [
      {
        label: "Light, occasional printing",
        text: "A cartridge inkjet like the Canon PIXMA TS4320 keeps upfront cost lowest, the ink-tank premium isn't worth it if you're not printing enough to reach the break-even point.",
      },
      {
        label: "Regular weekly or daily printing",
        text: "The Epson EcoTank ET-2800's higher upfront price is offset within a year or two of regular volume by its much lower cost per page from refill bottles versus cartridges.",
      },
    ],
  },
  {
    subheading: "Feature Checklist by Price Point",
    intro:
      "Duplex, auto document feeder, and scan or copy aren't consistent across this price tier, check the specific model rather than assuming a feature is included.",
    table: {
      headers: ["Feature", "Included on", "Missing on"],
      rows: [
        ["Automatic duplex printing", "Canon PIXMA TS4320, TS6520, EcoTank ET-2800", "TR4720, LBP6030w, HL-L2405W, DeskJet 4355"],
        ["Auto document feeder", "Canon PIXMA TR4720", "All other picks in this list"],
        ["Scan and copy", "TS4320, TR4720, DeskJet 4355, TS6520, EcoTank ET-2800", "LBP6030w, HL-L2405W (print only)"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "What's the single best budget printer for a home office?",
    a: "There isn't one universal answer, it depends on what your home office actually does. The Canon PIXMA TS4320 is the best overall low-cost value for occasional printing, the Canon PIXMA TR4720 wins for regular multi-page scanning, and the Epson EcoTank ET-2800 wins on 2-year total cost for regular volume printing.",
  },
  {
    q: "Is it cheaper to buy an ink-tank printer or a cartridge inkjet for a home office?",
    a: "It depends on volume. A cartridge inkjet like the Canon PIXMA TS4320 has a lower upfront price and can be cheaper overall if you print lightly and occasionally. An ink-tank printer like the Epson EcoTank ET-2800 costs more upfront but typically becomes cheaper overall within the first year or two of regular home office volume.",
  },
  {
    q: "Should a home office get a laser or inkjet printer on a budget?",
    a: "If you mostly print text documents, invoices, or forms, a monochrome laser like the Canon imageCLASS LBP6030w has the lowest cost per page. If you need color printing, scanning, or copying, an inkjet or ink-tank all-in-one is the better fit since budget laser printers in this list are print-only.",
  },
  {
    q: "How do I calculate the real 2-year cost of a budget printer?",
    a: "Estimate your monthly page volume, then multiply by the per-page ink or toner cost of the replacement cartridge or refill bottles, not the starter cartridge included in the box. Add that to the upfront purchase price for a rough 2-year total, and compare that total across the printers you're considering rather than comparing sticker prices alone.",
  },
  {
    q: "Do I need an automatic document feeder for a home office?",
    a: "Only if you regularly scan or copy documents longer than one page. Without an auto document feeder, like on most picks in this list except the Canon PIXMA TR4720, you have to reposition each page manually on the scanner glass, which is fine for occasional single-page scans but slow for multi-page documents.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-budget-laser-printers", title: "Best Budget Laser Printers (2026)" },
  { href: "/guide/best-printers-for-home-offices", title: "Best Printers for Home Offices (2026)" },
  { href: "/guide/best-easy-to-use-printers", title: "Best Easy-to-Use Printers (2026)" },
  { href: "/guide/best-printers-for-remote-workers", title: "Best Printers for Remote Workers (2026)" },
];
