export const guideSlug = "best-digital-notebooks";
export const guideTitle = "7 Best Digital Notebooks in 2026";
export const metaTitle = "Best Digital Notebooks (2026)";
export const metaDescription =
  "7 digital notebooks we evaluated across three genuinely different product types, so you can pick the right category before comparing specific picks.";
export const mainKeyword = "digital notebook";
export const introParagraphs = [
  "\"Digital notebook\" is one of the more confusing searches in this category because it actually covers three genuinely different kinds of products: reusable paper notebooks you scan with a phone app, standalone e-ink hardware devices you write on directly, and smart pen sets that digitize your handwriting in real time. Buying the wrong type for your habits is the single most common mistake in this niche.",
  "Below we group picks by type first, price second, so you can identify which category fits how you actually want to write before comparing specific models. We evaluated pricing, stated features, and confirmed product details rather than claiming any hands-on testing.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "rb-core-letter",
    rank: 1,
    badge: "Best Reusable Paper Notebook",
    name: "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B071Y3MSRK?tag=deskfinds0d-20",
    description:
      "The Rocketbook Core is the most recognizable entry point into the reusable paper notebook category, letter sized with dotted pages that scan cleanly into the companion app. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt genuinely replaces a stack of paper notebooks rather than functioning as electronic hardware, since there is no screen or battery involved. Pages wipe clean with a damp cloth for reuse, though it requires a compatible pen (commonly a Pilot Frixion) since a standard ballpoint will not erase.",
    specs: ["Reusable paper notebook, Type 1", "Letter size 8.5x11, dotted pages", "Wipe clean and reuse after scanning", "App-connected cloud scanning"],
    pros: ["Genuinely reusable, wipes clean for repeated use", "Budget-friendly entry point into the category", "App-connected scanning to common cloud services", "Feels like writing on real paper"],
    cons: ["Requires a specific erasable pen, not any pen", "No digital storage on the notebook itself, phone is required to scan", "Not a screen-based device despite being called digital"],
    bestFor: "Buyers who want to keep writing on real paper but digitize and organize the result.",
  },
  {
    id: "remarkable2-pillar",
    rank: 2,
    badge: "Best True E-Ink Digital Notebook",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description:
      "The reMarkable 2 is a standalone hardware device with an e-paper screen, meaning you write directly on the glass with the included Marker Plus rather than on physical paper. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nBecause it is genuine electronic hardware, files live on the device and sync digitally rather than requiring a phone camera scan. Battery life is measured in weeks rather than hours since e-ink only draws power when the screen changes, though verify current cloud subscription requirements before buying.",
    specs: ["E-ink digital notebook device, Type 2", "Includes Marker Plus stylus", "Writes directly on the e-paper screen", "Files stored and synced digitally"],
    pros: ["Genuine e-ink hardware with a paper-like writing feel", "Marker Plus stylus included in the box", "Long battery life measured in weeks", "Distraction-free single-purpose device"],
    cons: ["Meaningfully more expensive than paper-based notebooks", "Verify current cloud subscription requirements for full features", "Black and white display only, not color"],
    bestFor: "Buyers who want a genuinely digital writing surface rather than paper-based scanning.",
  },
  {
    id: "remarkable-pro-pillar",
    rank: 3,
    badge: "Best Premium Color E-Ink Notebook",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=deskfinds0d-20",
    description:
      "The reMarkable Paper Pro is the color, larger-screen step up in the same standalone e-ink hardware category, bundled with a folio case and the Marker Plus stylus. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs genuine hardware rather than a paper product, it stores notes digitally on the device and syncs them, with the color display a meaningful upgrade for anyone marking up documents with highlights. It is a significant investment relative to the rest of this category, so it suits buyers who will use it heavily rather than occasionally.",
    specs: ["E-ink digital notebook device, Type 2", "Color e-paper display", "Includes Marker Plus and Basalt Book Folio", "Premium price point"],
    pros: ["Color e-paper display, a genuine upgrade over black-and-white e-ink", "Marker Plus stylus and folio included", "Long e-ink battery life", "Larger writing surface than the standard model"],
    cons: ["The most expensive pick in this guide", "Verify current cloud subscription requirements", "Overkill for buyers who only need basic note capture"],
    bestFor: "Buyers who want the most capable standalone e-ink hardware and will use it daily.",
  },
  {
    id: "noteorius-pillar",
    rank: 4,
    badge: "Best Smart Pen and Paper Set",
    name: "Noteorius Smart Notebook with Pen and Folio, Reusable Digital Writing Pad",
    price: "$199.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+UCf2-LrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FM4K63P3?tag=deskfinds0d-20",
    description:
      "The Noteorius set pairs a sensor pen with special notebook paper, capturing your handwriting in real time as you write rather than requiring a scan afterward like a Rocketbook-style notebook. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nIt bridges the gap between paper and hardware categories, since you are still writing on real paper but the digitizing happens live through the pen rather than after the fact. It costs more than a reusable paper notebook but less than most standalone e-ink hardware, a reasonable middle position for this feature set.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Real-time sync as you write", "Includes pen and folio", "App sync with cloud storage"],
    pros: ["Real-time digitization while writing, not after-the-fact scanning", "Still writes on real paper with a normal-feeling pen", "App sync and cloud storage included", "Mid-range price between paper notebooks and e-ink hardware"],
    cons: ["Requires the specific paired pen to function, not a universal pen", "Battery life on the pen itself is a factor to check", "Smaller company than Rocketbook or reMarkable, verify current support"],
    bestFor: "Buyers who want live digitization without giving up the feel of writing on paper.",
  },
  {
    id: "syncpen-pillar",
    rank: 5,
    badge: "Best Budget Smart Pen Set",
    name: "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    price: "$79.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5P2186C?tag=deskfinds0d-20",
    description:
      "SyncPen is a lower-priced entry into the smart pen category, syncing handwriting from paper to the companion app in real time and including OCR and audio recording features. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nLike the Noteorius set, this is a paper-and-pen product with live digitization rather than a screen-based device or an after-the-fact scanning notebook. OCR accuracy on any smart pen varies and improves through software updates, so it is worth checking current reviews for handwriting-to-text performance rather than relying on marketing claims.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Real-time sync from paper to app", "OCR and audio recording", "Budget price point"],
    pros: ["Genuinely budget-friendly for the smart pen category", "Real-time sync plus OCR and audio recording", "Still writes on physical paper", "Bluetooth connectivity to the app"],
    cons: ["OCR accuracy should be verified against current reviews", "Requires the specific paired pen, not a universal one", "Smaller ecosystem than Rocketbook or reMarkable"],
    bestFor: "Buyers who want to try real-time handwriting digitization at the lowest entry price.",
  },
  {
    id: "kindle-scribe-pillar",
    rank: 6,
    badge: "Best E-Ink Notebook with Reading Built In",
    name: "Amazon Kindle Scribe Colorsoft 64GB, 11 inch paper-like color display with front light, Pen included, Graphite",
    price: "$679.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description:
      "The Kindle Scribe Colorsoft is a standalone e-ink hardware device that combines note-taking with Amazon's e-reader ecosystem, useful if you also want to read and annotate books and documents on the same screen. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs genuine hardware with a stated color paper-like display, it stores and syncs notebooks digitally rather than requiring any scanning step. It suits buyers already invested in Kindle books more than someone who only wants a plain note-taking surface.",
    specs: ["E-ink digital notebook device, Type 2", "11 inch color paper-like display", "Pen included", "Combines notebook and e-reader"],
    pros: ["Color paper-like display stated on the listing", "Pen included in the box", "Combines note-taking with a full e-reader library", "Large 11 inch writing surface"],
    cons: ["Premium price similar to the reMarkable Paper Pro", "Best suited to buyers already using the Kindle ecosystem", "Verify current handwriting conversion accuracy through recent reviews"],
    bestFor: "Buyers who want a single device for both reading e-books and taking notes.",
  },
  {
    id: "rb-flip-pillar",
    rank: 7,
    badge: "Best Compact Reusable Notepad",
    name: "Rocketbook Flip Smart Notepad, Teal Cover, Lined/Dot Grid Rule, 8.5x11, 16 Sheets",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31PNIC3U3AL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B33BQL8X?tag=deskfinds0d-20",
    description:
      "The Rocketbook Flip is a compact, spiral-bound reusable notepad offering both lined and dot grid pages, a flexible pick within the reusable paper category. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nLike the Core, it is genuinely paper-based with no screen or battery, requiring a compatible erasable pen and a phone camera to digitize pages. Its smaller notepad format makes it a lighter-weight option than a full letter-size notebook for buyers who just need quick notes.",
    specs: ["Reusable paper notebook, Type 1", "Flip notepad format, lined and dot grid", "Wipe clean and reuse", "App-connected scanning"],
    pros: ["Flexible lined and dot grid page combination", "Compact, lighter-weight notepad format", "Budget-friendly reusable paper option", "Wipes clean for repeated use"],
    cons: ["Requires a specific erasable pen to work correctly", "No on-device storage, relies on phone scanning", "Smaller writing area than a full letter-size notebook"],
    bestFor: "Buyers who want a lightweight, flexible reusable notepad rather than a full notebook.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Product type identified before comparing features", description: "Every pick was categorized as a reusable paper notebook, an e-ink hardware device, or a smart pen set before comparing price or features, since comparing across types directly is misleading." },
  { title: "Stated features weighed against category norms", description: "Features like cloud sync, color display, or handwriting conversion were only credited when explicitly stated in the product listing for that specific item." },
  { title: "Price weighed against total cost of ownership", description: "Considered required accessories, such as a specific erasable pen for paper notebooks or a cloud subscription for some e-ink devices, not just the sticker price." },
  { title: "Battery and power model considered where relevant", description: "Noted which products have no battery at all (paper notebooks), which have e-ink batteries lasting weeks, and which rely on a rechargeable pen." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Understand the Three Product Types First",
    note: "Reusable paper notebooks (like Rocketbook) use a real pen on real paper, then you scan pages with your phone afterward, and the pages wipe clean for reuse. True e-ink digital notebook devices (like reMarkable or BOOX) are standalone hardware with a screen you write on directly with a stylus, storing files digitally with no scanning step. Smart pen sets (like Noteorius or SyncPen) use a sensor pen on special paper that syncs your handwriting to an app in real time as you write, without an after-the-fact scan. These are not interchangeable, and picking the wrong type for your habits is the most common mistake buyers make in this category.",
  },
  {
    subheading: "The Erasable Pen Gotcha",
    note: "Rocketbook-style notebooks require a specific pen, most commonly a Pilot Frixion, to work with the erasable page coating. Using a regular ballpoint pen can permanently mark the page instead of wiping clean, a genuine and non-obvious gotcha worth knowing before you start writing.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Cheapest way to digitize handwritten notes", "Rocketbook Core"],
        ["A true digital screen you write on directly", "reMarkable 2"],
        ["The most capable e-ink hardware, color included", "reMarkable Paper Pro"],
        ["Real-time sync while still writing on paper", "Noteorius Smart Notebook"],
        ["Cheapest real-time smart pen option", "SyncPen Digital Notebook Smart Pen Set"],
        ["One device for reading books and taking notes", "Kindle Scribe Colorsoft"]
      ],
    },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Identify which of the three product types you actually want", explanation: "Reusable paper, e-ink hardware, and smart pen sets solve different problems, decide whether you want to keep writing on paper, want a digital screen, or want real-time sync before comparing prices." },
  { criterion: "Check what pen the product requires", explanation: "Reusable paper notebooks need a specific erasable pen like a Pilot Frixion, a regular pen can permanently mark the pages." },
  { criterion: "Weigh total cost including subscriptions", explanation: "Some premium e-ink devices have historically required a subscription for full cloud features, verify current requirements before budgeting." },
  { criterion: "Consider battery life and power needs", explanation: "Paper notebooks need no battery at all, e-ink hardware lasts weeks per charge, smart pens need periodic charging, factor this into how you'll actually use the device." },
  { criterion: "Verify color display and handwriting conversion claims", explanation: "Only trust a color display or accurate handwriting-to-text conversion if it is explicitly stated on that specific listing, these features vary widely across the category." },
];

export const faq: FaqItem[] = [
  { q: "What is the difference between a Rocketbook and a reMarkable?", a: "A Rocketbook is a reusable paper notebook you write on with a real pen and scan with your phone, while a reMarkable is standalone e-ink hardware with a screen you write on directly, no scanning needed." },
  { q: "Do I need a special pen for a digital notebook?", a: "Only for reusable paper notebooks like Rocketbook, which typically require an erasable pen such as a Pilot Frixion. E-ink devices and smart pen sets include their own dedicated pen or stylus." },
  { q: "Are digital notebooks worth it compared to a regular notebook?", a: "It depends on the type: reusable paper notebooks are close in price to regular notebooks with the added benefit of cloud scanning, while e-ink hardware is a bigger investment better suited to heavy daily use." },
  { q: "Do digital notebooks require a subscription?", a: "Some premium e-ink devices have historically required a subscription for full cloud features, verify current subscription requirements on the specific product page before buying." },
  { q: "Which type has the longest battery life?", a: "Paper notebooks need no battery. Among electronic options, e-ink hardware devices typically last weeks per charge since the screen only draws power when it changes." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebook-tablets", title: "Best Digital Notebook Tablets (2026)" },
  { href: "/guide/best-digital-notebooks-with-pens", title: "Best Digital Notebooks with Pens (2026)" },
  { href: "/guide/best-budget-digital-notebooks", title: "Best Budget Digital Notebooks (2026)" },
];
