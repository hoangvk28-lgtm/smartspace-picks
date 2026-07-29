export const guideSlug = "best-compact-document-scanners";
export const guideTitle = "8 Best Compact Document Scanners in 2026";
export const metaTitle = "Best Compact Document Scanners, Honestly Reviewed (2026)";
export const metaDescription =
  "8 scanners we evaluated for genuine desk-space savings, with an honest note that compact form factor almost always means reduced ADF capacity, not just a smaller footprint.";
export const mainKeyword = "compact document scanner";
export const introParagraphs = [
  "Compact form factor almost always means reduced ADF capacity, 10-20 sheets versus 50-100 on full-size desktop scanners, a real workflow tradeoff most 'space-saving' marketing doesn't disclose alongside the footprint claim. We call out each pick's actual feeder capacity directly.",
  "Also worth knowing: some compact designs achieve their small footprint with a vertical paper path, meaning they need clearance above the unit (under a shelf, for instance), not just desk-surface space, a placement detail worth checking before buying.",
];
export const lastUpdated = "2026-07-29";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Bx7Z39uKL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "brother-ds640-compact",
    rank: 1,
    badge: "Best Overall Compact Pick",
    name: "Brother DS-640 Compact Mobile Document Scanner",
    price: "$134.99",
    rating: "4.3 stars from 6,522 Amazon ratings",
    reviews: "6,522 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Bx7Z39uKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B083R36CY4?tag=deskfinds0d-20",
    description:
      "At under a foot long and 1.5 lb, this is genuinely compact, but that footprint savings comes with a real ADF-capacity tradeoff versus a full-size desktop scanner, this is a single-sheet-fed design, not a multi-sheet hopper. Color scans run at the same speed as black-and-white, a genuine plus.\n\nMicro USB 3.0 powered with no external adapter needed, and broad Windows/Mac/Linux driver support via TWAIN/WIA/ICA/SANE, a real compatibility plus for this size class.",
    specs: ["Single-sheet feed, under 1 ft long, 1.5 lb", "Micro USB 3.0 powered, no external adapter", "Color scan speed matches black-and-white", "TWAIN/WIA/ICA/SANE drivers"],
    pros: ["Largest review base among compact picks in this guide", "USB-powered, no external adapter needed", "Color scans at full black-and-white speed", "Broad OS driver support"],
    cons: ["Single-sheet feed, not a multi-sheet hopper", "No duplex on this specific model", "Reduced capacity is the real tradeoff for the compact size"],
    bestFor: "Buyers who want the most proven, genuinely portable single-sheet compact scanner",
  },
  {
    id: "brother-ds740d-compact",
    rank: 2,
    badge: "Best Compact Duplex Pick",
    name: "Brother DS-740D Duplex Compact Mobile Document Scanner",
    price: "$169.99",
    rating: "4.3 stars from 2,294 Amazon ratings",
    reviews: "2,294 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/415ddFXTF8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B083R3XYQN?tag=deskfinds0d-20",
    description:
      "The duplex version of the rank-1 pick, scanning both sides in one pass, with an explicit Desk Saving Design claimed to reduce desk footprint by roughly 11 inches versus a standard placement, a genuinely disclosed space-saving figure rather than a vague marketing claim.\n\nSame single-sheet feed limitation as its simplex sibling, this trades multi-sheet hopper capacity for the compact form factor, expect to feed documents individually rather than loading a stack.",
    specs: ["Duplex, single-sheet feed, ~11 inches less desk space claimed", "Micro USB 3.0 powered", "Color scan speed matches black-and-white", "TWAIN/WIA/ICA/SANE drivers"],
    pros: ["Explicit desk-space-savings figure disclosed (11 inches)", "Duplex scanning in a single pass", "Color scans at full black-and-white speed", "Broad OS driver support"],
    cons: ["Single-sheet feed, no multi-sheet hopper", "Smaller review base than the simplex DS-640", "Higher price than the simplex sibling"],
    bestFor: "Buyers who want duplex scanning in the smallest footprint with a disclosed space-savings figure",
  },
  {
    id: "scansnap-ix1300-white-compact",
    rank: 3,
    badge: "Best Compact with a Real ADF Hopper",
    name: "ScanSnap iX1300 Wireless or USB Double-Sided Color Document Scanner, White",
    price: "$279.99",
    rating: "4.2 stars from 1,768 Amazon ratings",
    reviews: "1,768 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41yWYf2uT0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FX5DWBK?tag=deskfinds0d-20",
    description:
      "This is a genuinely space-saving design that still keeps a real ADF hopper (not single-sheet feed), a meaningful step up in unattended batch capacity over the Brother compact picks above, at a real price premium. Up to 30ppm duplex with a single touch to start.\n\nHandles thick items and plastic cards alongside standard paper, and connects via USB or Wi-Fi, though as with any wireless scanner, sustained high-DPI color batches are safer over the wired connection.",
    specs: ["Space-saving ADF hopper design, up to 30ppm duplex", "USB or Wi-Fi, works without a computer via cloud", "Auto de-skew, color optimization, blank-page removal", "Handles thick items and plastic cards"],
    pros: ["Real ADF hopper, not single-sheet feed", "30ppm duplex is genuinely fast for this size class", "Handles thick items and cards", "Works standalone without a computer via cloud"],
    cons: ["Highest price among the compact picks in this guide", "Lower rating than the Brother compact picks", "Still a reduced hopper capacity versus full desktop scanners"],
    bestFor: "Buyers who want compact space savings without giving up a real ADF hopper",
  },
  {
    id: "scansnap-ix1300-black-compact",
    rank: 4,
    badge: "Same Spec, Black Finish",
    name: "ScanSnap iX1300 Wireless or USB Double-Sided Color Document Scanner, Black",
    price: "$279.99",
    rating: "4.2 stars from 1,768 Amazon ratings",
    reviews: "1,768 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41VnXqJ86dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FX5SRQT?tag=deskfinds0d-20",
    description:
      "Identical specs to the rank-3 pick in a black finish, the same space-saving ADF hopper design with up to 30ppm duplex scanning and USB/Wi-Fi connectivity. Choose based on finish preference, the underlying hardware and tradeoffs are the same.",
    specs: ["Space-saving ADF hopper design, up to 30ppm duplex", "USB or Wi-Fi, works without a computer via cloud", "Auto de-skew, color optimization, blank-page removal", "Handles thick items and plastic cards"],
    pros: ["Same real ADF hopper as the white version", "30ppm duplex speed", "Black finish option", "Works standalone via cloud"],
    cons: ["Same price premium as the white version", "Same rating as the white version", "Reduced capacity versus full desktop scanners"],
    bestFor: "Buyers who want the iX1300's capability in a black finish",
  },
  {
    id: "canon-r10-compact",
    rank: 5,
    badge: "Best Portable USB-Powered Pick",
    name: "Canon imageFORMULA R10 Portable Document Scanner, USB Powered, Duplex",
    price: "$184.00",
    rating: "4.1 stars from 2,338 Amazon ratings",
    reviews: "2,338 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/218Q14ube6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08FBHTD9B?tag=deskfinds0d-20",
    description:
      "A genuine 20-sheet ADF (a real hopper, larger than the single-sheet Brother picks) in a lightweight, USB-powered body, with an explicit 500 scans/day suggested daily volume, a rare and useful disclosure at this size class. Duplex scanning and built-in software round out a well-equipped compact pick.\n\nAt 1.7 lb this is genuinely take-anywhere portable, a real plus for home offices, classrooms, and remote work.",
    specs: ["20-sheet ADF hopper, duplex, USB-powered", "Explicit 500 scans/day suggested daily volume", "Built-in software, no installation needed", "1.7 lb, portable"],
    pros: ["20-sheet ADF hopper, a real step up from single-sheet feed", "Explicit daily volume disclosure", "USB-powered, no external adapter", "Duplex scanning"],
    cons: ["Lower rating than the ScanSnap picks", "20 sheets is still modest versus full desktop capacity", "Not intended for scanning photographs"],
    bestFor: "Buyers who want a real 20-sheet ADF hopper in a genuinely portable, USB-powered body",
  },
  {
    id: "epson-es50-compact",
    rank: 6,
    badge: "Fastest First-Page-Out",
    name: "Epson Workforce ES-50 Compact & Lightweight Mobile Document Scanner",
    price: "$129.99",
    rating: "4.3 stars from 5,857 Amazon ratings",
    reviews: "5,857 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21YnTPRESJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KQZWPYN?tag=deskfinds0d-20",
    description:
      "Marketed as the fastest and lightest mobile single-sheet-fed scanner in its class, with a genuinely quick single-page scan time of 5.5 seconds, useful for repeated small jobs throughout a day rather than one large batch. Handles documents up to 8.5x72 inches, useful for long receipts.\n\nUSB-powered with no external adapter, and includes Nuance OCR for searchable PDFs, a genuinely complete package at the lowest price in this guide.",
    specs: ["Single-sheet feed, 5.5-second per-page scan time", "Handles documents up to 8.5x72 inches", "USB-powered, no adapter needed", "Includes Nuance OCR for searchable PDFs"],
    pros: ["Lowest price in this guide", "Fast first-page-out time for repeated small jobs", "Handles unusually long documents up to 72 inches", "Includes OCR for searchable PDFs"],
    cons: ["Single-sheet feed, no multi-sheet hopper", "Not built for large sustained batches", "Largest review base but still single-sheet limited"],
    bestFor: "Buyers who do frequent small jobs throughout the day rather than large batches",
  },
  {
    id: "canoscan-lide300-compact",
    rank: 7,
    badge: "Cheapest, Flatbed Not ADF",
    name: "Canon Canoscan Lide 300 Scanner",
    price: "$69.99",
    rating: "4.2 stars from 7,159 Amazon ratings",
    reviews: "7,159 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31PFgs9o70S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07G5XZVLQ?tag=deskfinds0d-20",
    description:
      "This is a flatbed scanner, not an ADF-fed document scanner, included here as the honest budget alternative for buyers whose real need is occasional single-page scanning rather than batch document digitization. Auto Scan Mode detects what you're scanning automatically.\n\nGenuinely compact and the cheapest pick in this guide, but don't buy this expecting ADF batch capability, feed one page at a time on the glass.",
    specs: ["Flatbed scanner, not ADF-fed", "Auto Scan Mode detects content type", "USB connectivity", "Largest review base in this guide"],
    pros: ["Cheapest pick in this guide", "Largest review base here", "Genuinely compact flatbed footprint", "Simple USB plug-and-play"],
    cons: ["Flatbed only, not an ADF document scanner", "No batch feeding capability at all", "Best for single pages, photos, or books, not document stacks"],
    bestFor: "Buyers who mainly need occasional single-page or photo scanning, not document batches",
  },
  {
    id: "scansnap-ix2500-compact",
    rank: 8,
    badge: "Largest Feeder in This Guide, Least Compact",
    name: "ScanSnap iX2500 Wireless or USB High-Speed Document Scanner",
    price: "Check current price",
    rating: "4.4 stars from 326 Amazon ratings",
    reviews: "326 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41wHhR2WCpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F9B1H5VN?tag=deskfinds0d-20",
    description:
      "Included as the honest large-capacity reference point: this 100-sheet-feeder model is not genuinely compact, it's a high-speed desktop scanner. If your priority shifted from footprint to capacity while reading this guide, this is the pick to consider instead of the true compact options above.\n\nA touchscreen and Wi-Fi 6 plus USB-C round out a well-equipped, but decidedly non-compact, alternative.",
    specs: ["100-sheet feeder, up to 45 ppm rated", "Wi-Fi 6 + USB-C, touchscreen", "Not a genuinely compact design", "Multi-feed sensor, brake roller system"],
    pros: ["Highest rating in this guide", "Largest feeder capacity by far", "Touchscreen with customizable profiles", "High-speed rated for large batches"],
    cons: ["Not genuinely compact, this is a full desktop-class scanner", "Smallest review base among the picks here", "Included only as an honest capacity-tradeoff reference"],
    bestFor: "Buyers who realize they actually need capacity over footprint and are open to a larger unit",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "ADF hopper vs. single-sheet feed as the primary compact-size tradeoff", description: "Distinguished picks with a real multi-sheet ADF hopper from single-sheet-fed designs, since compact footprint marketing rarely discloses this capacity reduction directly." },
  { title: "Vertical vs. horizontal paper path clearance", description: "Noted where a compact design's space savings comes from a vertical feed path requiring clearance above the unit, a placement factor distinct from pure desk-surface footprint." },
  { title: "Genuine footprint disclosure vs. vague 'space-saving' marketing", description: "Prioritized listings with a specific disclosed footprint reduction (like the Brother DS-740D's 11-inch claim) over generic space-saving language." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Single-Sheet Feed vs. Real ADF Hopper at This Size Class",
    table: {
      headers: ["Feed type", "Picks", "What this means"],
      rows: [
        ["Single-sheet feed", "Brother DS-640, DS-740D, Epson ES-50 (ranks 1, 2, 6)", "Feed one page at a time, no unattended batch capability"],
        ["Real ADF hopper (reduced capacity)", "ScanSnap iX1300 (both colors), Canon R10 (ranks 3, 4, 5)", "20-30 sheets loaded and fed automatically, still smaller than full desktop hoppers"],
        ["Flatbed only", "Canoscan Lide 300 (rank 7)", "No document feeding at all, one page or photo at a time on the glass"],
      ],
    },
  },
  {
    subheading: "Vertical Paper Path Needs Clearance Above the Unit",
    note: "Some compact scanners achieve their small footprint with a vertical feed path rather than a horizontal one, meaning they need clearance above the unit (not placing it directly under a shelf) rather than just desk-surface space. Check the paper path direction before assuming any compact scanner fits your exact placement.",
  },
  {
    subheading: "If You Actually Need Capacity, Consider Stepping Up",
    note: "The ScanSnap iX2500 (rank 8) is included specifically as a reference point: if reading this guide made you realize your real priority is batch capacity rather than footprint, its 100-sheet hopper is a better fit than any genuinely compact pick here.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Compact form factor almost always means reduced ADF capacity", explanation: "Most compact scanners hold 10-20 sheets (or feed single sheets) versus 50-100 on full-size desktop scanners, a real workflow limitation for unattended batch scanning beyond a handful of pages." },
  { criterion: "Vertical paper-path designs need clearance above the unit", explanation: "Some compact scanners feed paper vertically to save desk footprint, meaning they need clearance above (not under a shelf), a placement consideration horizontal-path scanners don't share." },
  { criterion: "Single-sheet feed and ADF hopper are meaningfully different capability tiers", explanation: "A single-sheet-fed compact scanner requires manually feeding each page; an ADF hopper, even a reduced one, allows loading multiple sheets for unattended batch scanning." },
  { criterion: "Compact scanners sometimes bundle simpler software than full-size business scanners", explanation: "Full-size business scanners frequently include more robust scan-workflow software (network-folder profiles, one-touch destinations); compact consumer-oriented models sometimes ship with pared-down apps lacking these features." },
];

export const faq: FaqItem[] = [
  { q: "Do all compact document scanners have an ADF hopper?", a: "No. Several genuinely compact picks in this guide (Brother DS-640, DS-740D, Epson ES-50) are single-sheet-fed, requiring you to feed each page manually rather than loading a stack." },
  { q: "Why does a compact scanner need clearance above it?", a: "Some compact designs achieve their small desk footprint using a vertical paper path rather than horizontal, meaning the scanner needs open space above it (not tucked directly under a shelf) to feed paper properly." },
  { q: "Is a flatbed scanner the same as a compact document scanner?", a: "No. A flatbed scanner like the Canoscan Lide 300 in this guide has no document feeder at all, you scan one page or photo at a time on the glass, a different capability than any ADF-fed compact scanner." },
  { q: "Should I buy compact or full-size if I scan large batches regularly?", a: "Full-size, generally. Compact scanners trade ADF capacity for footprint. If you regularly scan more than a handful of pages unattended, a full-size scanner with a 50-100 sheet hopper will serve you better." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-high-speed-document-scanners", title: "Best High-Speed Document Scanners (2026)" },
  { href: "/guide/best-document-scanners-for-computers", title: "Best Document Scanners for Computers (2026)" },
  { href: "/guide/best-wireless-document-scanners", title: "Best Wireless Document Scanners (2026)" },
];
