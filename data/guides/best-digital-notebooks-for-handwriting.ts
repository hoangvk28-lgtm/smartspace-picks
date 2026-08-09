export const guideSlug = "best-digital-notebooks-for-handwriting";
export const guideTitle = "5 Best Digital Notebooks for Handwriting in 2026";
export const metaTitle = "Best Digital Notebooks for Handwriting (2026)";
export const metaDescription =
  "5 E Ink notebooks compared for handwriting recognition and conversion to text, distinguishing devices with real recognition features from those without.";
export const mainKeyword = "digital notebook for handwriting";
export const introParagraphs = [
  "Every device here supports handwriting as its core input method, but they differ in whether handwriting is converted to searchable text automatically, and how well recognition performs across cursive versus print.",
  "We prioritized devices with confirmed handwriting-to-text conversion and noted where that feature requires a subscription rather than being included.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0cz9vfqp-handwritedn",
    rank: 1,
    badge: "Best Overall",
    name: "Amazon Kindle Scribe (16GB)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description: "Handwriting-to-text conversion included without a separate subscription, at a competitive price against the reMarkable lineup.",
    specs: ["16GB storage", "Handwriting-to-text conversion included", "Textured E Ink display"],
    pros: ["Handwriting conversion included in the purchase price", "Competitively priced against the reMarkable lineup"],
    cons: ["Verify current firmware for exact handwriting-recognition accuracy"],
    bestFor: "Buyers who want handwriting conversion without a subscription requirement.",
  },
  {
    id: "b08hdl3xjr-handwritedn",
    rank: 2,
    badge: "Most Proven Writing Feel",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "The largest, highest-rated review base of any device here, with handwriting conversion available though full features require the paid Connect subscription.",
    specs: ["Marker Plus stylus included", "Handwriting conversion available", "1,354 reviews at 4.4 stars"],
    pros: ["Largest, most proven review base in this comparison"],
    cons: ["Full handwriting conversion features require reMarkable Connect subscription"],
    bestFor: "Buyers who want the most field-tested writing feel and don't mind a subscription for full conversion features.",
  },
  {
    id: "b0dx234nwp-handwritedn",
    rank: 3,
    badge: "Best Budget Handwriting Option",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    price: "$299.98",
    rating: "4.3",
    reviews: "329",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX234NWP?tag=deskfinds0d-20",
    description: "Handwriting recognition included at the lowest price in this comparison, with 16384 pressure levels for a smoother writing feel across varying pen pressure.",
    specs: ["16384 pressure levels", "Handwriting-to-text conversion included", "329 reviews at 4.3 stars"],
    pros: ["Lowest price with handwriting conversion included", "High pressure sensitivity for a smoother writing feel"],
    cons: ["Smaller review base than Kindle Scribe or reMarkable"],
    bestFor: "Budget-focused buyers who want handwriting conversion without a subscription.",
  },
  {
    id: "b0gvkbljk2-handwritedn",
    rank: 4,
    badge: "Most Distraction-Free",
    name: "reMarkable Paper Pure with Marker",
    price: "$399.00",
    rating: "4.1",
    reviews: "18",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GVKBLJK2?tag=deskfinds0d-20",
    description: "Same handwriting conversion capability as the reMarkable 2 in a distraction-free, newer device with a smaller review base.",
    specs: ["Marker stylus included", "Handwriting conversion available", "18 reviews at 4.1 stars"],
    pros: ["Distraction-free design, no app-store clutter"],
    cons: ["Much smaller review base than the reMarkable 2"],
    bestFor: "Buyers who want a focused writing device without app distractions.",
  },
  {
    id: "b0fr4kxmkf-handwritedn",
    rank: 5,
    badge: "Best Android-Based Handwriting",
    name: "BOOX Note Air 5 C, 10.3\" Color E Ink Tablet",
    price: "$529.99",
    rating: "4.3",
    reviews: "310",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4KXMKF?tag=deskfinds0d-20",
    description: "Runs Android, so it supports third-party handwriting-recognition apps beyond the built-in tools, and offers a genuine color display for reviewing notes.",
    specs: ["Color E Ink display", "Runs Android, supports third-party apps", "310 reviews at 4.3 stars"],
    pros: ["Access to third-party handwriting apps via Android", "Only true color E Ink display in this comparison"],
    cons: ["More expensive than the base Kindle Scribe or XPPen options"],
    bestFor: "Buyers who want the flexibility of third-party handwriting apps and color notes.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Confirmed handwriting-to-text conversion", description: "We verified each device actually offers handwriting recognition rather than assuming it based on category." },
  { title: "Subscription dependence", description: "We flagged where full conversion features require a paid plan (reMarkable Connect) versus what's included at purchase (Kindle Scribe, XPPen)." },
  { title: "Writing surface feel", description: "We noted textured E Ink displays and stylus friction as factors in the actual writing experience, not just the conversion feature." },
  { title: "Review volume for recognition-accuracy confidence", description: "Since recognition accuracy is hard to verify from specs, we weighted established review history for real-world evidence." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Included vs. Subscription-Gated Handwriting Conversion",
    cards: [
      { label: "Included (Kindle Scribe, XPPen)", text: "Handwriting-to-text conversion works without a separate subscription." },
      { label: "Subscription-gated (reMarkable)", text: "Full conversion features require the paid Connect plan." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm handwriting conversion is included, not subscription-gated", explanation: "Kindle Scribe and XPPen include this at purchase; reMarkable requires the paid Connect subscription for full features." },
  { criterion: "Weigh price against pressure sensitivity", explanation: "The XPPen's 16384 pressure levels offer a smoother, more responsive writing feel at the lowest price in this comparison." },
  { criterion: "Consider Android for third-party handwriting apps", explanation: "The BOOX Note Air 5 C's Android base opens up handwriting apps beyond the built-in tools, at a higher price." },
  { criterion: "Use review count for recognition-accuracy confidence", explanation: "Since accuracy is hard to verify from a spec sheet, an established review base is the best available evidence." },
  { criterion: "Check current firmware for exact recognition capability", explanation: "Handwriting recognition quality can change with software updates — verify current performance on the listing before buying." },
];

export const faq: FaqItem[] = [
  { q: "Which devices include handwriting-to-text conversion without a subscription?", a: "Kindle Scribe and XPPen include this in the purchase price. reMarkable requires the paid Connect subscription for full conversion features." },
  { q: "Which has the best writing feel?", a: "The reMarkable 2 has the largest, most established review base specifically speaking to writing feel, though the XPPen's higher pressure sensitivity is a real advantage for varied pressure." },
  { q: "Can I use third-party handwriting apps?", a: "Yes, on the BOOX Note Air 5 C, since it runs Android and supports third-party apps beyond the built-in tools." },
  { q: "What's the cheapest option with handwriting conversion included?", a: "The XPPen 3 in 1 Color Digital Notebook at $299.98." },
  { q: "Does recognition work for cursive as well as print?", a: "Varies by device and firmware — check the current listing and recent reviews for specifics on your particular handwriting style." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-ai-digital-notebooks", title: "Best AI Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
