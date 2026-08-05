export const guideSlug = "best-color-digital-notebooks";
export const guideTitle = "5 Best Color Digital Notebooks in 2026";
export const metaTitle = "Best Color Digital Notebooks (2026)";
export const metaDescription =
  "5 digital notebooks we evaluated with a color display explicitly confirmed on the listing, excluding any black-and-white e-ink model from this specific guide.";
export const mainKeyword = "color digital notebook";
export const introParagraphs = [
  "We were strict here: every pick in this guide has a color display explicitly stated on its product listing. A widely known device like the reMarkable 2 is genuinely black and white and does not appear in this guide, even though it's an excellent e-ink notebook overall, because it doesn't meet this guide's specific color requirement.",
  "Color e-ink panels generally trade some contrast versus black-and-white e-ink, worth knowing before assuming color is a strictly better upgrade in every respect.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31EchKlKb3L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "boox-4c-color",
    rank: 1,
    badge: "Best Value Color E-Ink Notebook",
    name: "BOOX Tablet Note Air 4C, 6G 64G E Ink Tablet Color ePaper Notebook",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31EchKlKb3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT3Q52PN?tag=deskfinds0d-20",
    description:
      "The BOOX Note Air 4C states a color ePaper display directly on its listing, a genuine color e-ink panel rather than a standard LCD screen. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\n6GB RAM and 64GB storage support real multitasking alongside the color display, running on Android for broader app access. It's a mid-range entry point into color e-ink, priced below reMarkable's premium color device.",
    specs: ["E-ink digital notebook device, Type 2", "Color ePaper display", "6GB RAM, 64GB storage", "Android-based"],
    pros: ["Color ePaper display confirmed on the listing", "6GB RAM and 64GB storage for genuine multitasking", "Runs Android for app flexibility", "Mid-range price for color e-ink"],
    cons: ["Color e-ink panels trade some contrast versus black-and-white", "Verify current price on the listing", "Android interface has a learning curve"],
    bestFor: "Buyers wanting a confirmed color e-ink display at a mid-range price.",
  },
  {
    id: "boox-5c-color",
    rank: 2,
    badge: "Best Newer-Generation Color E-Ink Notebook",
    name: "BOOX Tablet 10.3in Note Air 5 C, 6G 64G E Ink Tablet Color ePaper Notebook",
    price: "$529.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4L5XMV?tag=deskfinds0d-20",
    description:
      "The BOOX Note Air 5 C is the newer generation of the same color ePaper line, with a larger 10.3 inch screen and matching 6GB RAM, 64GB storage. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs a later model, it typically ships with more refined software and processing over its predecessor, both confirmed to use a color panel. Priced above the entry BOOX color tablets but below reMarkable's premium color device.",
    specs: ["E-ink digital notebook device, Type 2", "10.3 inch color ePaper display", "6GB RAM, 64GB storage", "Android-based"],
    pros: ["Confirmed color ePaper display", "Newer-generation hardware and software refinement", "10.3 inch writing surface", "Mid-range price relative to premium color e-ink devices"],
    cons: ["Still a step below reMarkable Paper Pro in ecosystem polish", "Android interface adds some complexity", "Verify current battery life claims"],
    bestFor: "Buyers wanting the latest generation of confirmed color e-ink hardware.",
  },
  {
    id: "remarkable-pro-color",
    rank: 3,
    badge: "Best Premium Color E-Ink Notebook",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=deskfinds0d-20",
    description:
      "The reMarkable Paper Pro's color e-paper display is a confirmed step up from the brand's black-and-white reMarkable 2, bundled with a folio case and the Marker Plus stylus. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nIt stores notes digitally on the device and syncs them, with the color display genuinely useful for anyone marking up documents with highlights. The premium price reflects both the color panel and the larger writing surface.",
    specs: ["E-ink digital notebook device, Type 2", "Color e-paper display", "Marker Plus and folio included", "Premium price point"],
    pros: ["Confirmed color e-paper display", "Marker Plus stylus and folio included", "Larger writing surface than the standard model", "Long e-ink battery life"],
    cons: ["The most expensive pick in this guide", "Verify current cloud subscription requirements", "Color e-ink still trades some contrast versus black-and-white"],
    bestFor: "Buyers wanting the most capable confirmed color e-ink hardware.",
  },
  {
    id: "remarkable-pro-color2",
    rank: 4,
    badge: "Best Color E-Ink Notebook Without the Folio",
    name: "reMarkable Paper Pro with Marker Plus",
    price: "$679.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/412wtt+9l5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DG9ZXWMK?tag=deskfinds0d-20",
    description:
      "This is the same confirmed color e-paper display as the folio bundle, just without the included case, a lower-cost way into the same premium color hardware. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs genuine hardware rather than a paper product, it stores notes digitally and syncs them with the same color display quality as the bundled version. Still a premium price point reflecting the color panel and reMarkable's software ecosystem.",
    specs: ["E-ink digital notebook device, Type 2", "Color e-paper display", "Marker Plus included", "No folio bundled"],
    pros: ["Same confirmed color display as the folio bundle", "Lower cost than the folio-included version", "Marker Plus included", "Polished, focused interface"],
    cons: ["No case included, a separate purchase if needed", "Still a premium price overall", "Verify current cloud subscription requirements"],
    bestFor: "Buyers wanting confirmed color e-ink hardware without paying for a bundled case.",
  },
  {
    id: "kindle-scribe-color",
    rank: 5,
    badge: "Best Color Notebook That Doubles as an E-Reader",
    name: "Amazon Kindle Scribe Colorsoft 64GB, 11 inch paper-like color display with front light, Pen included, Graphite",
    price: "$679.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description:
      "The Kindle Scribe Colorsoft states its color display directly in the product name, a confirmed color paper-like screen with front light. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs genuine hardware, it stores and syncs notebooks digitally, with the color display useful for both reading and note annotation. It suits buyers already invested in Kindle books more than someone who only wants a plain note-taking surface.",
    specs: ["E-ink digital notebook device, Type 2", "11 inch Colorsoft display", "Pen included", "Combines notebook and e-reader"],
    pros: ["Color display confirmed directly in the product name", "Pen included in the box", "Combines note-taking with a full e-reader library", "Large 11 inch writing surface"],
    cons: ["Premium price similar to the reMarkable Paper Pro", "Best suited to buyers already using the Kindle ecosystem", "Verify current handwriting conversion accuracy"],
    bestFor: "Buyers wanting a confirmed color display that also serves as a full e-reader.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Color display confirmed explicitly on each listing", description: "Only included products where the listing directly states a color display, excluding any product where color is assumed, implied, or unconfirmed." },
  { title: "Black-and-white e-ink models intentionally excluded", description: "Deliberately left out well-known black-and-white e-ink devices like the reMarkable 2 from this specific guide, despite their overall quality, since they don't meet the color requirement here." },
  { title: "Color e-ink contrast tradeoffs weighed honestly", description: "Noted that color e-ink panels generally have less contrast than black-and-white e-ink, rather than presenting color as a strictly superior upgrade." },
  { title: "Price weighed against confirmed color capability", description: "Compared cost specifically against the color display feature, since color e-ink hardware costs meaningfully more than black-and-white equivalents." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Color E-Ink Is a Real Tradeoff, Not a Strict Upgrade",
    note: "Color e-ink panels generally sacrifice some contrast and sharpness compared to black-and-white e-ink, since the color layer sits on top of the base panel. If color-coding notes or markup genuinely matters to your workflow, it's worth it, but if you mostly take plain notes, a black-and-white e-ink device may actually look crisper.",
  },
  {
    subheading: "Why Some Well-Known Devices Aren't in This Guide",
    note: "The reMarkable 2 is a genuinely strong e-ink notebook, but it's black and white, so it doesn't appear here despite being covered in several of our other guides. This guide is strictly limited to products with a confirmed color display.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Best value confirmed color e-ink notebook", "BOOX Note Air 4C"],
        ["Latest-generation color e-ink hardware", "BOOX Note Air 5 C"],
        ["Most capable premium color e-ink notebook", "reMarkable Paper Pro with Marker Plus and Basalt Book Folio"],
        ["Same premium color hardware without a case", "reMarkable Paper Pro with Marker Plus"],
        ["Color notebook that also replaces an e-reader", "Kindle Scribe Colorsoft"]
      ],
    },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm color is explicitly stated on the specific listing", explanation: "Don't assume a device has a color display just because a similar model does, verify the exact listing you're buying states color explicitly." },
  { criterion: "Understand the contrast tradeoff of color e-ink", explanation: "Color e-ink panels generally have less contrast and sharpness than black-and-white e-ink, a real tradeoff worth weighing against your actual use case." },
  { criterion: "Decide if color genuinely matters for your workflow", explanation: "Color-coded notes and document markup benefit from color, plain note-taking may look crisper on a black-and-white panel at a lower price." },
  { criterion: "Factor color into the overall price premium", explanation: "Color e-ink hardware costs meaningfully more than black-and-white equivalents, budget accordingly if color isn't essential to your use case." },
];

export const faq: FaqItem[] = [
  { q: "Is the reMarkable 2 a color digital notebook?", a: "No, the reMarkable 2 has a black-and-white e-ink display, the color version is the separate reMarkable Paper Pro." },
  { q: "Do color e-ink screens look as sharp as black-and-white ones?", a: "Generally not quite, color e-ink panels trade some contrast and sharpness for the added color layer, worth knowing before assuming color is a strict upgrade." },
  { q: "Which color digital notebook is the most affordable?", a: "The BOOX Note Air 4C is generally the most budget-friendly confirmed color e-ink option among the picks in this guide." },
  { q: "Does the Kindle Scribe have a color screen?", a: "Yes, the Kindle Scribe Colorsoft states its color paper-like display directly in the product name." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebook-tablets", title: "Best Digital Notebook Tablets (2026)" },
  { href: "/guide/best-e-ink-digital-notebooks", title: "Best E-Ink Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-for-designers", title: "Best Digital Notebooks for Designers (2026)" },
];
