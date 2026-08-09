export const guideSlug = "best-digital-notebooks-for-pdfs";
export const guideTitle = "5 Best Digital Notebooks for PDFs in 2026";
export const metaTitle = "Best Digital Notebooks for PDFs (2026)";
export const metaDescription =
  "5 E Ink devices compared for PDF reading and annotation, including storage capacity for large document libraries and screen size for document readability.";
export const mainKeyword = "digital notebook for PDF reading and annotation";
export const introParagraphs = [
  "PDF reading and annotation puts different demands on a device than plain note-taking: screen size for readability, storage for a real document library, and annotation tools that actually mark up the PDF rather than just floating notes on top of it.",
  "We weighted storage capacity more heavily here than in our general notebook guides, since a document-heavy workflow fills storage faster than handwritten notes alone.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0fc1vjjfp-pdfdn",
    rank: 1,
    badge: "Best Overall",
    name: "Amazon Kindle Scribe Colorsoft 64GB",
    price: "$679.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description: "64GB of storage for a large PDF library, color display for reviewing marked-up documents, and PDF annotation tools built into Amazon's reading ecosystem.",
    specs: ["64GB storage", "Color E Ink display", "PDF annotation tools included"],
    pros: ["Largest storage capacity of any device in this comparison", "Color display for reviewing highlighted documents"],
    cons: ["Highest price in this comparison"],
    bestFor: "Buyers with a large PDF library who want ample storage and color annotation review.",
  },
  {
    id: "b0cz9vfqp-pdfdn",
    rank: 2,
    badge: "Best Value",
    name: "Amazon Kindle Scribe (16GB)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description: "Same PDF annotation toolset as the Colorsoft without color or the larger storage tier, at a significantly lower price for buyers with a smaller document library.",
    specs: ["16GB storage", "PDF annotation tools included", "Monochrome E Ink display"],
    pros: ["Lower price than the Colorsoft for the same annotation tools"],
    cons: ["16GB fills up faster than the Colorsoft's 64GB with a large PDF library"],
    bestFor: "Buyers with a moderate PDF library who don't need color or maximum storage.",
  },
  {
    id: "b08hdl3xjr-pdfdn",
    rank: 3,
    badge: "Most Proven PDF Annotation",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "The largest, highest-rated review base of any device here, with strong PDF annotation tools, though cloud-based document organization requires the paid Connect subscription.",
    specs: ["Marker Plus stylus included", "PDF annotation tools", "1,354 reviews at 4.4 stars"],
    pros: ["Largest, most proven review base in this comparison"],
    cons: ["Full cloud document organization requires reMarkable Connect subscription"],
    bestFor: "Buyers who want the most field-tested PDF annotation experience.",
  },
  {
    id: "b0dx234nwp-pdfdn",
    rank: 4,
    badge: "Best Budget PDF Option",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    price: "$299.98",
    rating: "4.3",
    reviews: "329",
    imageUrl: "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX234NWP?tag=deskfinds0d-20",
    description: "The cheapest option here with full-color PDF viewing and annotation via its 10.95 inch display, though verify current PDF app support before buying if that's your primary use case.",
    specs: ["10.95 inch color display", "PDF viewing and annotation", "329 reviews at 4.3 stars"],
    pros: ["Lowest price in this comparison", "Full color for reviewing marked-up documents"],
    cons: ["Smaller review base specifically for PDF workflows than Kindle Scribe or reMarkable"],
    bestFor: "Budget-focused buyers who want color PDF annotation at the lowest cost.",
  },
  {
    id: "b0fr4kxmkf-pdfdn",
    rank: 5,
    badge: "Most Flexible via Android",
    name: "BOOX Note Air 5 C, 10.3\" Color E Ink Tablet",
    price: "$529.99",
    rating: "4.3",
    reviews: "310",
    imageUrl: "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4KXMKF?tag=deskfinds0d-20",
    description: "Running Android means you can install dedicated third-party PDF readers with advanced organization tools beyond the built-in options on closed ecosystems.",
    specs: ["Color E Ink display", "Runs Android for third-party PDF apps", "310 reviews at 4.3 stars"],
    pros: ["Access to dedicated third-party PDF apps via Android", "Color E Ink for annotation review"],
    cons: ["More expensive than the base Kindle Scribe or XPPen options"],
    bestFor: "Buyers who want the flexibility of choosing their own PDF app rather than a built-in tool.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Storage capacity for real document libraries", description: "We weighted storage more heavily than in general note-taking guides, since PDFs consume storage much faster than handwritten notes alone." },
  { title: "Confirmed PDF annotation, not just viewing", description: "We required actual markup tools, not just the ability to display a PDF file." },
  { title: "Screen size and color for document readability", description: "We noted where color display genuinely helps for reviewing highlighted or annotated documents." },
  { title: "Third-party app flexibility on open platforms", description: "We flagged where an Android-based device opens up dedicated third-party PDF readers beyond built-in tools." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Large document library, color review", "Kindle Scribe Colorsoft 64GB"],
        ["Moderate library, lower cost", "Kindle Scribe 16GB"],
        ["Most proven annotation tools", "reMarkable 2 with Marker Plus"],
        ["Lowest cost, color display", "XPPen 3 in 1 Color Digital Notebook"],
        ["Want to choose your own PDF app", "BOOX Note Air 5 C"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Match storage to your actual document library size", explanation: "PDFs consume storage much faster than handwritten notes. 16GB may be tight for a large library; 64GB gives real headroom." },
  { criterion: "Confirm real annotation tools, not just PDF viewing", explanation: "Verify the device can actually mark up a PDF, not merely display it as a static file." },
  { criterion: "Weigh color against price", explanation: "Color helps for reviewing highlighted documents but adds real cost — the Kindle Scribe Colorsoft costs significantly more than the base model." },
  { criterion: "Consider Android for third-party PDF app flexibility", explanation: "The BOOX Note Air 5 C lets you install a dedicated PDF reader of your choice rather than relying on built-in tools alone." },
  { criterion: "Check cloud organization subscription requirements", explanation: "reMarkable's advanced cloud document organization requires the paid Connect subscription." },
];

export const faq: FaqItem[] = [
  { q: "Which device has the most storage for a large PDF library?", a: "The Kindle Scribe Colorsoft, with 64GB, the largest in this comparison." },
  { q: "Do I need color for PDF annotation?", a: "Only if you specifically review highlighted or color-coded documents. The monochrome Kindle Scribe and reMarkable 2 handle plain annotation well at a lower cost." },
  { q: "Can I install my own PDF reader app?", a: "Yes, on the BOOX Note Air 5 C, since it runs Android and supports third-party apps." },
  { q: "What's the cheapest option for PDF work?", a: "The XPPen 3 in 1 Color Digital Notebook at $299.98." },
  { q: "Which has the most proven annotation tools?", a: "The reMarkable 2, with 1,354 reviews at 4.4 stars." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-with-expandable-storage", title: "Best Digital Notebooks with Expandable Storage (2026)" },
  { href: "/guide/best-digital-notebooks-that-sync-with-onenote", title: "Best Digital Notebooks That Sync with OneNote (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
