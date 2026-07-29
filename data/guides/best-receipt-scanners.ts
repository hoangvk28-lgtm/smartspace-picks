export const guideSlug = "best-receipt-scanners";
export const guideTitle = "6 Best Receipt Scanners in 2026";
export const metaTitle = "Best Receipt Scanners, Honestly Reviewed (2026)";
export const metaDescription =
  "6 scanners we evaluated for receipt digitization, with an urgent note that thermal receipt paper fades within months regardless of when you eventually scan it, a timing risk most reviews never mention.";
export const mainKeyword = "receipt scanner";
export const introParagraphs = [
  "Thermal receipt paper, the vast majority of retail receipts, begins fading within months due to heat, light, and friction exposure. A receipt scanner purchased for 'someday' batch scanning does nothing to prevent fading that's already occurred before the receipt reaches the scanner, scan promptly rather than letting receipts pile up.",
  "Also worth knowing: crumpled, folded, or curled receipts jam more frequently in narrow-width receipt scanners than in standard-width ADF scanners, since the narrow paper path has less mechanical tolerance for the physical deformities common to pocket-stored receipts.",
];
export const lastUpdated = "2026-07-29";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41yWYf2uT0L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "brother-ds640-receipt",
    rank: 1,
    badge: "Best Overall for Receipts",
    name: "Brother DS-640 Compact Mobile Document Scanner",
    price: "$134.99",
    rating: "4.3 stars from 6,522 Amazon ratings",
    reviews: "6,522 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Bx7Z39uKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B083R36CY4?tag=deskfinds0d-20",
    description:
      "Genuinely compact and portable, this handles standard-size receipts well through its scanning path, with the free iPrint&Scan app supporting scan-to-multiple-destinations for expense tracking. Since it's single-sheet-fed rather than a narrow dedicated receipt slot, crumpled or curled receipts have a bit more mechanical tolerance here than a narrow-width dedicated receipt scanner.\n\nScan your receipts promptly, thermal fading happens regardless of whether your scanner performs well, waiting to batch-scan a pile of months-old receipts won't recover data that's already faded.",
    specs: ["Single-sheet feed, handles standard receipt sizes", "Free iPrint&Scan app for expense destinations", "Largest review base in this guide", "Compact, portable"],
    pros: ["Largest review base in this guide", "Single-sheet feed tolerates curled receipts reasonably well", "Free app supports multiple expense destinations", "Genuinely compact and portable"],
    cons: ["Not a dedicated narrow receipt scanner, less specialized for thin receipt widths", "No specific expense-software data extraction disclosed beyond image/OCR", "No auto-crop accuracy testing on varied receipt lengths confirmed"],
    bestFor: "Buyers who want a proven, compact all-purpose scanner that handles receipts reasonably well",
  },
  {
    id: "hp-ps100-receipt",
    rank: 2,
    badge: "Best Dedicated Portable Sheetfed Pick",
    name: "HP Small USB Document & Photo Scanner for Portable 1-Sided Sheetfed Digital Scanning",
    price: "$139.99",
    rating: "4.3 stars from 385 Amazon ratings",
    reviews: "385 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/4143ozv-CML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C6NL3HFX?tag=deskfinds0d-20",
    description:
      "A genuinely portable, single-sided sheetfed design specifically marketed for home/office digital scanning including receipts, with HP WorkScan software included. Smaller review count reflects a more niche listing, weigh that against the dedicated portable design.\n\nAs with any receipt scanner, prompt scanning matters more than the scanner's own capability, thermal paper fades on its own timeline independent of your scanning schedule.",
    specs: ["Portable 1-sided sheetfed scanning", "HP WorkScan software included", "PC and Mac compatible", "Compact for home/office use"],
    pros: ["Dedicated portable sheetfed design", "HP WorkScan software included", "PC and Mac compatible", "Compact for frequent use"],
    cons: ["Smaller review count than the compact document scanner alternatives", "1-sided only, no duplex", "No auto-crop or expense-integration depth confirmed"],
    bestFor: "Buyers who want a dedicated portable sheetfed scanner marketed specifically for receipts and documents",
  },
  {
    id: "canon-r10-receipt",
    rank: 3,
    badge: "Best ADF Hopper for Receipt Batches",
    name: "Canon imageFORMULA R10 Portable Document Scanner, USB Powered, Duplex",
    price: "$184.00",
    rating: "4.1 stars from 2,338 Amazon ratings",
    reviews: "2,338 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/218Q14ube6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08FBHTD9B?tag=deskfinds0d-20",
    description:
      "Explicitly handles receipts and plastic cards alongside standard documents, with a real 20-sheet ADF hopper letting you batch several receipts at once rather than feeding one at a time. Its explicit 500 scans/day suggested volume is a genuinely useful disclosure for planning a receipt-digitization routine.\n\nCrumpled or curled receipts may still jam more than flat samples, an ADF hopper's narrower tolerance applies here as with any feeder design, smooth out receipts before batch-feeding when possible.",
    specs: ["20-sheet ADF hopper, explicitly handles receipts and cards", "Explicit 500 scans/day rating", "Duplex scanning", "1.7 lb, portable"],
    pros: ["Real ADF hopper lets you batch multiple receipts at once", "Explicitly marketed for receipts and cards", "Explicit daily volume disclosure for planning a routine", "Genuinely portable"],
    cons: ["ADF hopper still less tolerant of crumpled/curled receipts than manual single-sheet feeding", "Lower rating than the top document scanner picks", "Not intended for photographs"],
    bestFor: "Buyers who want to batch multiple receipts through an ADF hopper rather than feeding one at a time",
  },
  {
    id: "scansnap-ix1300-white-receipt",
    rank: 4,
    badge: "Best for Auto-Crop and Cloud Expense Filing",
    name: "ScanSnap iX1300 Wireless or USB Double-Sided Color Document Scanner, White",
    price: "$279.99",
    rating: "4.2 stars from 1,768 Amazon ratings",
    reviews: "1,768 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41yWYf2uT0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FX5DWBK?tag=deskfinds0d-20",
    description:
      "Handles receipts explicitly alongside documents and cards, with auto de-skew and color optimization genuinely useful for varied receipt lengths and printed content placement. Standalone scan-to-cloud lets you file digitized receipts to an expense-tracking cloud service without a computer on.\n\nAuto-crop accuracy on unusually long or short receipts isn't independently verified here, watch for clipped totals or dates on non-standard receipt lengths and re-scan if needed.",
    specs: ["Explicitly handles receipts, cards, and documents", "Auto de-skew, color optimization", "Standalone scan-to-cloud", "30ppm duplex"],
    pros: ["Explicitly marketed for receipts alongside documents", "Auto de-skew and color optimization for varied receipt content", "Standalone cloud filing for expense workflows", "Real ADF hopper"],
    cons: ["Auto-crop accuracy on unusual receipt lengths not independently verified", "Higher price than the dedicated compact picks", "Same thermal-fading risk applies regardless of scanner quality"],
    bestFor: "Buyers who want cloud-connected receipt filing with auto-crop and color optimization",
  },
  {
    id: "scansnap-ix1300-black-receipt",
    rank: 5,
    badge: "Same Receipt Capability, Black Finish",
    name: "ScanSnap iX1300 Wireless or USB Double-Sided Color Document Scanner, Black",
    price: "$279.99",
    rating: "4.2 stars from 1,768 Amazon ratings",
    reviews: "1,768 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41VnXqJ86dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FX5SRQT?tag=deskfinds0d-20",
    description:
      "Identical receipt-handling capability to the rank-4 pick in a black finish, same auto de-skew, color optimization, and standalone cloud filing for expense workflows.",
    specs: ["Explicitly handles receipts, cards, and documents", "Auto de-skew, color optimization", "Standalone scan-to-cloud", "30ppm duplex"],
    pros: ["Same receipt-handling capability as the white version", "Auto de-skew and color optimization", "Standalone cloud filing", "Black finish option"],
    cons: ["Same unverified auto-crop accuracy on unusual lengths", "Same higher price tier", "Same thermal-fading risk regardless of scanner"],
    bestFor: "Buyers who want the iX1300's receipt handling in a black finish",
  },
  {
    id: "epson-es50-receipt",
    rank: 6,
    badge: "Best for Long Receipts",
    name: "Epson Workforce ES-50 Compact & Lightweight Mobile Document Scanner",
    price: "$129.99",
    rating: "4.3 stars from 5,857 Amazon ratings",
    reviews: "5,857 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21YnTPRESJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KQZWPYN?tag=deskfinds0d-20",
    description:
      "Explicitly handles documents up to 8.5x72 inches, genuinely useful for unusually long grocery or CVS-style receipts that shorter-path scanners struggle with. Digitizes receipts and ID cards specifically per its own marketing, with a fast 5.5-second per-page scan for quick individual receipt jobs.\n\nAt the lowest price in this guide, includes Nuance OCR for searchable receipt PDFs, useful for expense report text extraction.",
    specs: ["Handles documents/receipts up to 8.5x72 inches", "5.5-second per-page scan time", "Includes Nuance OCR for searchable PDFs", "Lowest price in this guide"],
    pros: ["Handles unusually long receipts up to 72 inches", "Fast per-page scan time for quick individual jobs", "Includes OCR for searchable receipt PDFs", "Lowest price in this guide"],
    cons: ["Single-sheet feed, no batch hopper for multiple receipts at once", "Largest review base but still single-sheet limited", "No explicit expense-software data extraction beyond OCR"],
    bestFor: "Buyers who deal with unusually long receipts and want fast individual scanning",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Thermal receipt fading urgency framing", description: "Emphasized that thermal receipts fade within months regardless of scanner quality, a scanner purchased for 'someday' batch scanning does nothing to recover data that's already faded before it reaches the machine." },
  { title: "Crumpled/curled receipt jam tolerance", description: "Noted that narrow-path dedicated receipt scanners generally have less mechanical tolerance for the physical deformities common to pocket-stored receipts than a standard-width ADF scanner." },
  { title: "Expense software integration depth disclosure", description: "Distinguished basic image/OCR export from deeper structured-data extraction (merchant, date, total, category) directly into expense platforms, none of the picks here confirm the deeper structured extraction." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Scan Receipts Promptly, Before Thermal Fading Sets In",
    note: "Thermal paper (the vast majority of retail receipts) begins fading within months due to heat, light, and friction exposure. Buying a receipt scanner doesn't undo fading that's already happened, digitize receipts soon after receiving them rather than letting a pile accumulate for a 'someday' batch session.",
  },
  {
    subheading: "Single-Sheet Feed vs. Real ADF Hopper for Receipts",
    table: {
      headers: ["Feed type", "Picks", "Best for"],
      rows: [
        ["Single-sheet feed", "Brother DS-640, HP PS100, Epson ES-50 (ranks 1, 2, 6)", "Occasional receipts, one at a time"],
        ["Real ADF hopper", "Canon R10, ScanSnap iX1300 (both colors) (ranks 3, 4, 5)", "Batching several receipts at once, especially in an expense-tracking routine"],
      ],
    },
  },
  {
    subheading: "None of These Confirm Structured Expense Data Extraction",
    note: "Some receipt scanning apps extract structured data (merchant, date, total, category) directly into expense platforms; others only export an image with OCR text. None of the picks in this guide explicitly confirm this deeper structured extraction, verify with the specific bundled app if that level of automation matters to your expense workflow.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Scan receipts promptly, thermal fading happens on its own timeline", explanation: "Thermal receipt paper fades within months regardless of scanner quality. A receipt scanner purchased for later batch use does nothing to recover data that's already faded before scanning." },
  { criterion: "Crumpled or curled receipts jam more in narrow-path scanners", explanation: "The narrow paper path optimized for receipt width has less mechanical tolerance for the physical deformities common to pocket or wallet-stored receipts than a standard-width ADF scanner." },
  { criterion: "Auto-crop accuracy can clip content on unusually long or short receipts", explanation: "Receipts vary widely in length and content placement; auto-crop algorithms can confuse totals or dates on non-standard receipts, none of the picks in this guide have independently verified auto-crop testing across varied lengths." },
  { criterion: "Structured expense data extraction is a deeper capability than basic OCR export", explanation: "Some receipt apps extract merchant/date/total/category directly into expense platforms; others only export an image with OCR text. None of the picks here confirm the deeper structured extraction, verify with the specific app if needed." },
];

export const faq: FaqItem[] = [
  { q: "Will scanning old receipts recover data that's already faded?", a: "No. Thermal receipt paper fades within months due to heat, light, and friction exposure regardless of when you eventually scan it. Digitize receipts promptly rather than letting a pile accumulate for later." },
  { q: "Do dedicated receipt scanners jam less than general document scanners on crumpled receipts?", a: "Not necessarily. Narrow-path receipt scanners actually have less mechanical tolerance for curled or folded receipts than standard-width ADF document scanners, which can accommodate more physical deformity." },
  { q: "Can these scanners automatically extract the total and date into my expense app?", a: "Not confirmed for any pick in this guide. Basic OCR export is standard, but genuine structured data extraction (merchant, date, total, category) directly into expense platforms is a deeper, separately-verified capability." },
  { q: "Should I use a single-sheet feed or ADF hopper scanner for receipts?", a: "Depends on volume. Single-sheet feed works fine for occasional receipts; an ADF hopper (like the Canon R10 or ScanSnap iX1300) lets you batch several receipts at once for a regular expense-tracking routine." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-document-scanners-for-accountants", title: "Best Document Scanners for Accountants (2026)" },
  { href: "/guide/best-document-scanners-for-invoices", title: "Best Document Scanners for Invoices (2026)" },
  { href: "/guide/best-document-scanners-for-tax-documents", title: "Best Document Scanners for Tax Documents (2026)" },
];
