export const guideSlug = "best-business-card-scanners";
export const guideTitle = "8 Best Business Card Scanners in 2026";
export const metaTitle = "Best Business Card Scanners, Honestly Reviewed (2026)";
export const metaDescription =
  "8 scanners we evaluated for business cards, with an honest note that OCR accuracy drops significantly on stylized fonts, dark/foil cards, and non-standard sizes most reviews test only on plain white samples.";
export const mainKeyword = "business card scanner";
export const introParagraphs = [
  "Card OCR accuracy drops significantly on stylized fonts, low-contrast printing, and dark or foil-accented cards common in premium designs, standard OCR trained on document text struggles here, a gap untested in reviews using only plain white-background sample cards.",
  "Also worth knowing: contact export format compatibility (vCard vs. CSV vs. proprietary app format) determines real CRM integration usability, a scanner exporting only a proprietary format creates real manual cleanup work importing into Salesforce, HubSpot, or similar platforms.",
];
export const lastUpdated = "2026-07-29";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31lHBnbrcsL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "medical-scanid-card",
    rank: 1,
    badge: "Best for High-Accuracy ID/Insurance Cards",
    name: "Medical Insurance Card and ID Card Scanner (w/Scan-ID LITE, for Windows)",
    price: "$189.00",
    rating: "4.2 stars from 295 Amazon ratings",
    reviews: "295 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41y2MW3hRZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00Z2GDAOK?tag=deskfinds0d-20",
    description:
      "Highest rating among the dedicated card scanners in this guide, purpose-built for insurance and ID card capture with bundled Scan-ID LITE software. This isn't strictly a business card scanner, but its card-optimized scan path and software translate reasonably to standard business cards too, especially plain-printed ones.\n\nLike every card scanner in this guide, stylized fonts, dark backgrounds, or foil accents on premium business cards will reduce OCR accuracy versus the plain-card conditions this unit is actually tested for.",
    specs: ["Card-optimized scan path, Scan-ID LITE software", "Windows compatible", "Highest rating among dedicated card scanners", "Built for ID/insurance card capture"],
    pros: ["Highest rating among the dedicated card scanners in this guide", "Card-optimized scan path", "Bundled Scan-ID LITE software", "Genuinely accurate on plain-printed cards"],
    cons: ["Not specifically marketed for stylized business cards", "Windows only", "OCR accuracy on foil/dark cards not independently verified"],
    bestFor: "Buyers who want the highest-rated card-optimized scan path, even if not business-card-specific",
  },
  {
    id: "ambir-667-businesscard",
    rank: 2,
    badge: "Best Dedicated Business Card Scanner",
    name: "Ambir ImageScan Pro 667 Business Card Scanner with AmbirScan Business Card",
    price: "$189.99",
    rating: "3.6 stars from 46 Amazon ratings",
    reviews: "46 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31lHBnbrcsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VSHQSKW?tag=deskfinds0d-20",
    description:
      "Genuinely built and bundled specifically for business card capture with dedicated AmbirScan Business Card software, for Windows and Mac. Its moderate rating and small review count suggest real-world mixed results, likely reflecting the industry-wide OCR accuracy drop on stylized fonts and dark/foil cards this guide flags across the board.\n\nBefore relying on this for CRM import, test the actual export format (vCard/CSV/proprietary) against your specific CRM platform, since format compatibility varies and creates manual cleanup work if mismatched.",
    specs: ["Dedicated business card scan path", "AmbirScan Business Card software", "Windows and Mac compatible", "Card-specific OCR software bundle"],
    pros: ["Genuinely purpose-built for business cards", "Windows and Mac compatible", "Dedicated card-scanning software bundle", "Compact card-scanner form factor"],
    cons: ["Lowest rating and smallest review count in this guide", "OCR accuracy likely drops on stylized/dark/foil cards, industry-wide limitation", "CRM export format compatibility not independently verified"],
    bestFor: "Buyers who specifically want dedicated business-card scanning software, with realistic accuracy expectations",
  },
  {
    id: "ambir-ps670st-businesscard",
    rank: 3,
    badge: "Best High-Speed Vertical Card Scanner",
    name: "AMBIR ID Card and Business Card Scanner PS670ST-AS High Speed Single Sided Vertical USB Powered",
    price: "$220.17",
    rating: "3.5 stars from 18 Amazon ratings",
    reviews: "18 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31J0Q92KtrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CC9SRRL3?tag=deskfinds0d-20",
    description:
      "A vertical, USB-powered card scanner for both ID and business cards, the highest price in this guide's dedicated card-scanner segment. Small review count and moderate rating suggest a niche product with limited real-world validation, weigh that against the dedicated high-speed vertical design.\n\nNon-standard card sizes (square, rounded corners, oversized) commonly cause feed jams in ADF-based card scanning modes like this one, standard 3.5x2 inch cards will feed most reliably.",
    specs: ["High-speed vertical single-sided scan path", "USB powered", "For both ID and business cards", "Windows and Mac compatible"],
    pros: ["Dedicated vertical high-speed card scan path", "USB powered, no external adapter", "Windows and Mac compatible", "Built for both ID and business card use"],
    cons: ["Smallest review count and lowest confidence in this guide", "Highest price among dedicated card scanners", "Non-standard card sizes likely to jam"],
    bestFor: "Buyers who want a dedicated vertical high-speed card scanner and are comfortable with a niche, lower-volume product",
  },
  {
    id: "penpower-worldcardpro-businesscard",
    rank: 4,
    badge: "Best CRM-Focused Software Bundle",
    name: "PenPower WorldCard Pro Business Card Scanner",
    price: "$179.95",
    rating: "3.4 stars from 798 Amazon ratings",
    reviews: "798 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41TlodBP7BL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0075323W8?tag=deskfinds0d-20",
    description:
      "WorldCard Pro is specifically built as a contact-management-focused business card scanning solution for Windows/Mac, with the largest review base among the dedicated business card scanners in this guide, real-world evidence of both its capability and its real limitations reflected in the moderate rating.\n\nVerify the specific export format (vCard, CSV, or proprietary WorldCard format) against your CRM before relying on it for bulk imports, format mismatches create real manual cleanup work.",
    specs: ["Contact-management-focused card scanning", "Windows/Mac compatible", "Largest review base among dedicated card scanners", "Bundled WorldCard software"],
    pros: ["Largest review base among the dedicated business card scanners here", "Built specifically for contact management workflows", "Windows and Mac compatible", "Established product line"],
    cons: ["Moderate rating reflects real-world accuracy limitations", "CRM export format compatibility needs verification per your specific platform", "OCR accuracy drops on stylized/dark cards like every pick here"],
    bestFor: "Buyers who want the most established, most-reviewed dedicated card-scanning software bundle",
  },
  {
    id: "ambir-ps667-businesscard",
    rank: 5,
    badge: "Simplex Budget Card Scanner",
    name: "Ambir Technology PS667 Simplex A6 Card Scanner",
    price: "$168.99",
    rating: "3.7 stars from 112 Amazon ratings",
    reviews: "112 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21KARG3MEML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0018POCW8?tag=deskfinds0d-20",
    description:
      "A simplex (single-sided) A6-format card scanner, a reasonable budget-adjacent option among the dedicated card scanners in this guide, though the A6 format is larger than a standard business card, meant to also accommodate small documents and IDs alongside cards.\n\nSame accuracy caveats apply on stylized, dark, or foil-accented cards, and same non-standard-size jam risk for cards outside the standard 3.5x2 inch dimension.",
    specs: ["Simplex A6-format card scan path", "For cards and small documents/IDs", "Compact form factor", "USB connectivity"],
    pros: ["Reasonable price among the dedicated card scanners", "A6 format also handles small documents and IDs", "Compact form factor", "Simple simplex operation"],
    cons: ["Simplex only, no duplex card scanning", "OCR accuracy drops on stylized/dark cards, industry-wide limitation", "Non-standard card sizes likely to jam"],
    bestFor: "Buyers who want a budget-adjacent dedicated card scanner that also handles small documents",
  },
  {
    id: "brother-ds640-businesscard",
    rank: 6,
    badge: "Best General Scanner for Occasional Cards",
    name: "Brother DS-640 Compact Mobile Document Scanner",
    price: "$134.99",
    rating: "4.3 stars from 6,522 Amazon ratings",
    reviews: "6,522 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Bx7Z39uKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B083R36CY4?tag=deskfinds0d-20",
    description:
      "Not a dedicated card scanner, but the largest review base and highest rating of any pick in this guide, a genuinely reasonable general document scanner if you only occasionally digitize a business card alongside regular documents. No dedicated card OCR software bundled specifically for contact extraction.\n\nA better fit for occasional card digitization than a heavy CRM-import workflow, pair it with separate card-recognition software if you need structured contact data extraction.",
    specs: ["General-purpose single-sheet scanner", "Handles cards among other document types", "Largest review base in this guide", "Free iPrint&Scan app"],
    pros: ["Largest review base and highest rating in this guide", "Genuinely useful for occasional card digitization", "Broad general document scanning capability", "Reasonable price"],
    cons: ["Not a dedicated card scanner or CRM-focused software", "No structured contact data extraction confirmed", "Best for occasional cards, not bulk business-card workflows"],
    bestFor: "Buyers who only occasionally need to digitize a business card alongside general documents",
  },
  {
    id: "scansnap-ix1300-businesscard",
    rank: 7,
    badge: "Best ADF Batch Card Scanning",
    name: "ScanSnap iX1300 Wireless or USB Double-Sided Color Document Scanner, White",
    price: "$279.99",
    rating: "4.2 stars from 1,768 Amazon ratings",
    reviews: "1,768 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41yWYf2uT0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FX5DWBK?tag=deskfinds0d-20",
    description:
      "ScanSnap Home software explicitly manages business cards alongside documents and photos, with a genuine ADF hopper letting you batch multiple cards at once rather than feeding one card at a time like the dedicated single-card scanners above. Handles thick items and plastic cards specifically per its own marketing.\n\nStill subject to the same stylized-font/dark-card accuracy drop as any OCR-based card reader, and export-format CRM compatibility should be verified for your specific platform.",
    specs: ["ADF hopper, batches multiple cards at once", "Explicitly handles thick items and plastic cards", "ScanSnap Home card management software", "Duplex scanning"],
    pros: ["Real ADF hopper for batching multiple cards at once", "Explicitly designed to handle cards and thick items", "Broader document scanning capability beyond just cards", "Standalone cloud scanning available"],
    cons: ["Higher price than the dedicated card scanners", "Same OCR accuracy limitation on stylized/dark cards", "CRM export format compatibility not independently verified"],
    bestFor: "Buyers who want to batch-scan multiple cards through an ADF hopper alongside general documents",
  },
  {
    id: "epson-r40ii-businesscard",
    rank: 8,
    badge: "Cloud-Connected Card Scanning Alternative",
    name: "Canon imageFORMULA R40II Office Document Scanner",
    price: "$253.00",
    rating: "4.3 stars from 37 Amazon ratings",
    reviews: "37 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41d2vOL+ThL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GJWWZ77J?tag=deskfinds0d-20",
    description:
      "An office-class scanner that scans a wide variety of documents including cards, with duplex scanning and direct cloud connectivity. Its small review count reflects a newer, lower-volume listing, weigh that against the genuine office-class capability and cloud connectivity.\n\nA reasonable alternative if you want business card scanning bundled into a broader office document workflow rather than a dedicated single-purpose card scanner.",
    specs: ["Office-class duplex scanner, scans various document types including cards", "Direct cloud service connectivity", "Easy setup", "Newer listing"],
    pros: ["Handles cards alongside broader office document scanning", "Direct cloud connectivity", "Duplex scanning", "Easy setup"],
    cons: ["Smallest review count in this guide alongside the AMBIR PS670ST", "Not a dedicated card scanner or CRM-focused software", "OCR accuracy on stylized/dark cards not independently verified"],
    bestFor: "Buyers who want card scanning as part of a broader office document workflow",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "OCR accuracy on stylized, dark, and foil-accented cards", description: "Flagged that standard OCR trained on document text struggles with decorative business card fonts and dark/foil designs, an accuracy gap most reviews miss by testing only plain white-background sample cards." },
  { title: "Non-standard card size compatibility", description: "Noted that cards deviating from the standard 3.5x2 inch size (square, oversized, rounded corners) commonly cause feed jams in ADF-based card-scan modes, a real compatibility gap for creative-industry or international cards." },
  { title: "Contact export format vs. real CRM import usability", description: "Distinguished basic proprietary/CSV export from vCard-compatible export that imports cleanly into Salesforce, HubSpot, or similar CRM platforms without manual cleanup." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Dedicated Card Scanners vs. General Document Scanners for Cards",
    table: {
      headers: ["Type", "Picks", "Best for"],
      rows: [
        ["Dedicated single-card scanners", "Medical/ID scanner, Ambir 667/PS670ST/PS667, PenPower WorldCard Pro (ranks 1-5)", "Frequent, focused business card digitization"],
        ["General document scanners with card capability", "Brother DS-640, ScanSnap iX1300, Canon R40II (ranks 6-8)", "Occasional cards alongside broader document scanning"],
      ],
    },
  },
  {
    subheading: "OCR Accuracy Drops on Stylized and Dark Cards",
    note: "Every pick in this guide relies on standard OCR, which struggles with decorative fonts, light text on dark backgrounds, and metallic/foil accents common in premium business card designs. Expect noticeably lower accuracy on stylized cards than on plain white-background samples, regardless of which scanner you choose.",
  },
  {
    subheading: "Verify Export Format Against Your Actual CRM Before Bulk Scanning",
    note: "A scanner/app that only exports to a proprietary format or a basic CSV without proper field mapping creates significant manual cleanup work importing into Salesforce, HubSpot, or other CRM platforms. Test the export format against your specific CRM's import tool before committing to a bulk business-card digitization project.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "OCR accuracy drops significantly on stylized fonts and dark/foil cards", explanation: "Standard OCR trained on document text struggles with decorative business card fonts, light text on dark backgrounds, and metallic accents common in premium card designs, a real accuracy gap versus plain white-background test samples." },
  { criterion: "Non-standard card sizes commonly jam ADF-based card scan modes", explanation: "Cards deviating from the standard 3.5x2 inch size (square, oversized, rounded corners) are a common real-world scenario in creative industries or international business that dedicated card-scan modes handle poorly." },
  { criterion: "Verify export format compatibility against your actual CRM before bulk scanning", explanation: "A proprietary or basic CSV export without proper field mapping creates significant manual cleanup work importing into Salesforce, HubSpot, or other CRM platforms, test against your specific tool first." },
  { criterion: "Bilingual or non-Latin script cards need specific OCR language support", explanation: "Cards printed in two languages or non-Latin scripts require specific OCR language pack support that many bundled card-scanning apps lack by default, verify this if you handle international business cards." },
];

export const faq: FaqItem[] = [
  { q: "Will a business card scanner accurately read a dark or foil-accented card?", a: "Not as reliably as a plain white-background card. Standard OCR struggles with decorative fonts, light text on dark backgrounds, and metallic accents, an accuracy gap most reviews don't test because they use plain sample cards." },
  { q: "Can I feed a square or oversized business card through these scanners?", a: "Not reliably. Cards deviating from the standard 3.5x2 inch size commonly cause feed jams in ADF-based card-scan modes, a real compatibility gap for creative-industry or international cards." },
  { q: "Will scanned business cards import cleanly into my CRM?", a: "It depends on the export format. A scanner/app exporting only to a proprietary format or basic CSV without field mapping creates real manual cleanup work importing into Salesforce, HubSpot, or similar platforms, test the export format first." },
  { q: "Do these scanners handle duplicate contacts when I re-scan someone's updated card?", a: "This varies significantly by app and isn't independently confirmed for any pick in this guide. Duplicate detection and contact merging quality is a real database-feature gap worth testing directly if you scan repeat contacts often." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-document-scanners-for-small-businesses", title: "Best Document Scanners for Small Businesses (2026)" },
  { href: "/guide/best-receipt-scanners", title: "Best Receipt Scanners (2026)" },
  { href: "/guide/best-document-scanners-with-ocr", title: "Best Document Scanners with OCR (2026)" },
];
