export const guideSlug = "best-portable-digital-notebooks";
export const guideTitle = "6 Best Portable Digital Notebooks in 2026";
export const metaTitle = "Best Portable Digital Notebooks (2026)";
export const metaDescription =
  "6 genuinely compact and lightweight digital notebooks we evaluated, from pocket-size reusable notepads to slim smart pen sets, for on-the-go note taking.";
export const mainKeyword = "portable digital notebook";
export const introParagraphs = [
  "Portability means something different across the three digital notebook types: a paper-based notepad can be genuinely pocket-sized, an e-ink tablet's portability depends on screen size and weight, and a smart pen set's bulk usually comes down to the companion notebook rather than the pen itself.",
  "We prioritized the most compact, lightweight option within each type here rather than assuming bigger names are automatically more portable.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "rb-mini-black-port",
    rank: 1,
    badge: "Most Pocket-Sized Reusable Notepad",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Black",
    price: "$14.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JFY1Q?tag=deskfinds0d-20",
    description:
      "The Rocketbook Mini in black is genuinely pocket-sized at 3.5x5.5 inches, the most compact reusable paper notebook in this guide. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt still functions like the larger Rocketbook models, scanning to the cloud through the app, just in a smaller, more portable footprint. The tradeoff is less writing space per page than a full letter-size notebook, appropriate for quick notes rather than long-form writing.",
    specs: ["Reusable paper notebook, Type 1", "3.5x5.5 inch mini size", "Dotted pages, wipe clean and reuse", "App-connected scanning"],
    pros: ["Genuinely pocket-sized at 3.5x5.5 inches", "App-connected scanning like larger Rocketbook models", "Budget-friendly, one of the cheapest picks here", "Wipes clean and reuses"],
    cons: ["Small writing area limits longer notes", "Requires a compatible erasable pen", "No on-device digital storage"],
    bestFor: "Buyers who want the smallest possible reusable paper notebook for quick notes on the go.",
  },
  {
    id: "rb-mini-navy-port",
    rank: 2,
    badge: "Most Pocket-Sized Reusable Notepad, Navy",
    name: "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Navy Blue",
    price: "$14.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41TPpwMWTXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP3JGGJ9?tag=deskfinds0d-20",
    description:
      "This is the same pocket-sized Rocketbook Mini format in navy blue, offering an identical compact 3.5x5.5 inch footprint for on-the-go notes. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt shares the same app-connected scanning workflow as the larger Rocketbook notebooks, just easier to carry in a bag or pocket. A genuinely lightweight option since there's no battery or screen, just coated paper.",
    specs: ["Reusable paper notebook, Type 1", "3.5x5.5 inch mini size", "Dotted pages, wipe clean and reuse", "App-connected scanning"],
    pros: ["Genuinely pocket-sized footprint", "No battery weight, just lightweight coated paper", "App-connected scanning", "Budget-friendly price"],
    cons: ["Small writing area limits longer notes", "Requires a compatible erasable pen", "No on-device digital storage"],
    bestFor: "Buyers wanting the lightest possible portable notebook with a color choice.",
  },
  {
    id: "remarkable2-port",
    rank: 3,
    badge: "Most Portable E-Ink Tablet",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description:
      "The reMarkable 2 is noticeably thinner and lighter than the Paper Pro, making it the more portable choice among standalone e-ink tablets when you need an actual screen on the go. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nIts long e-ink battery life also means less need to carry a charger, a genuine portability advantage over a typical LCD tablet. It's still meaningfully bulkier and heavier than a paper notepad, so it suits buyers who specifically need a digital screen while traveling.",
    specs: ["E-ink digital notebook device, Type 2", "Thinner and lighter than the Pro model", "Marker Plus included", "Weeks of battery life"],
    pros: ["Thinner and lighter than the Paper Pro", "Long battery life reduces charger dependence", "Marker Plus included", "Genuine digital screen for on-the-go note taking"],
    cons: ["Heavier and bulkier than any paper-based option", "Higher price than portable paper notebooks", "Black and white display only"],
    bestFor: "Buyers who need a genuine digital screen while traveling and want the lightest e-ink option.",
  },
  {
    id: "syncpen-port",
    rank: 4,
    badge: "Most Compact Smart Pen Set",
    name: "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    price: "$79.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5P2186C?tag=deskfinds0d-20",
    description:
      "SyncPen's pen itself is slim and pocket-friendly, and the companion notebook is not much bulkier than a standard paper notepad. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nReal-time sync means you don't need to carry a phone out to scan pages later, the app updates as you write. It's one of the more travel-friendly smart pen sets in terms of both size and price.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Compact Bluetooth pen", "Real-time sync from paper to app", "Budget price point"],
    pros: ["Slim, pocket-friendly pen design", "Real-time sync while writing, no separate scanning step", "Budget-friendly for a smart pen set", "OCR and audio recording included"],
    cons: ["Pen requires periodic charging", "Still bulkier overall than a paper-only notepad", "OCR accuracy should be verified through current reviews"],
    bestFor: "Buyers wanting a compact real-time smart pen for travel.",
  },
  {
    id: "ophayapen-port",
    rank: 5,
    badge: "Most Compact Mid-Range Smart Pen Set",
    name: "Ophayapen Smart Pen and Smart Digital Notebook, Real-time Mobile Sync",
    price: "$99.13",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/411Fba5TlmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FM3WLT2H?tag=deskfinds0d-20",
    description:
      "The Ophayapen set pairs a compact pen with a modestly sized notebook, keeping the whole kit reasonably travel-friendly. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nReal-time mobile sync means notes are captured and backed up as you write, without needing to scan pages after the fact. It sits at a mid-range price point between the cheapest smart pens and the bulkier premium e-ink hardware.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Real-time mobile sync", "Compact pen and notebook set", "Mid-range price"],
    pros: ["Compact pen and notebook combination", "Real-time mobile sync while writing", "Mid-range price for the feature set", "Still writes on real paper"],
    cons: ["Pen requires periodic charging", "Bulkier overall than a paper-only notepad", "Smaller brand, verify current reviews"],
    bestFor: "Buyers wanting a compact real-time smart pen set at a mid-range price.",
  },
  {
    id: "rb-core-port",
    rank: 6,
    badge: "Best Full-Size Notebook That Still Packs Flat",
    name: "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B071Y3MSRK?tag=deskfinds0d-20",
    description:
      "The Rocketbook Core is a full letter-size notebook, but since it's just coated paper with no battery or screen, it still packs flat and light in a bag compared to any electronic tablet. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nIt offers considerably more writing space than the Mini format while remaining far more portable by weight than an e-ink device. A reasonable middle ground if you want portability without sacrificing writing area.",
    specs: ["Reusable paper notebook, Type 1", "Letter size 8.5x11, dotted pages", "Wipe clean and reuse", "Packs flat in a bag"],
    pros: ["Packs flat and light despite full letter size", "No battery weight at all", "More writing space than the Mini format", "App-connected scanning"],
    cons: ["Bulkier than the Mini notepad format", "Requires a compatible erasable pen", "No on-device digital storage"],
    bestFor: "Buyers wanting full-size writing space in a still genuinely lightweight package.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Actual size and weight compared within each type", description: "Compared stated dimensions and weight against other products in the same category rather than assuming brand reputation implies portability." },
  { title: "Battery weight and charging dependence considered", description: "Weighed how battery life affects real-world portability, e-ink's long battery life reduces the need to carry a charger while traveling." },
  { title: "Writing area tradeoff against compactness noted", description: "Flagged where a more portable format, like the Rocketbook Mini, sacrifices writing space compared to a full letter-size option." },
  { title: "Pen and notebook bulk assessed together for smart pen sets", description: "Considered the companion notebook size alongside the pen itself, since a compact pen paired with a bulky notebook is not genuinely portable overall." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Portability Looks Different Across the Three Types",
    note: "A paper notepad's portability comes down to page size and whether it packs flat, with zero battery weight involved. An e-ink tablet's portability depends on screen size, thickness, and battery life, since a heavier device with a short battery life is a genuine travel burden. A smart pen set's bulk usually comes from the companion notebook rather than the pen, check both together.",
  },
  {
    subheading: "When Full-Size Writing Space Is Worth the Extra Bulk",
    note: "If you're only jotting quick notes, a mini notepad or compact pen set genuinely disappears into a bag or pocket. If you need to write full pages of notes regularly, a full letter-size notebook or a screen-based tablet is worth the added bulk despite being less pocketable.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Smallest possible paper notebook", "Rocketbook Mini (Black or Navy Blue)"],
        ["Lightest genuine digital screen for travel", "reMarkable 2 with Marker Plus"],
        ["Most compact real-time smart pen, budget", "SyncPen Digital Notebook Smart Pen Set"],
        ["Compact smart pen, mid-range", "Ophayapen Smart Pen and Smart Digital Notebook"],
        ["Full writing space that still packs flat", "Rocketbook Core"]
      ],
    },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check actual dimensions, not just the product category", explanation: "A \"portable\" e-ink tablet can still be heavier than a stack of paper notepads, compare actual stated dimensions and weight." },
  { criterion: "Factor in battery weight and charger dependence for electronics", explanation: "A device with long e-ink battery life reduces how often you need to carry a charger while traveling." },
  { criterion: "Weigh writing area against compactness", explanation: "A pocket-sized mini notepad has meaningfully less writing space than a full letter-size notebook, decide which matters more for your use case." },
  { criterion: "For smart pen sets, check the notebook size too", explanation: "A compact pen paired with a bulky companion notebook isn't genuinely portable overall, look at both pieces together." },
];

export const faq: FaqItem[] = [
  { q: "What is the most portable type of digital notebook?", a: "A mini reusable paper notepad is generally the lightest and most pocket-friendly since it has no battery or screen, though it offers the least writing space." },
  { q: "Are e-ink tablets portable for travel?", a: "Yes, especially models like the reMarkable 2 which are thinner and lighter than premium color alternatives, and their long battery life reduces the need to pack a charger." },
  { q: "Are smart pen sets bulky to carry?", a: "The pen itself is usually slim, but check the companion notebook size too, since a bulky notebook offsets a compact pen's portability." },
  { q: "Do I sacrifice writing space with a portable notebook?", a: "Generally yes, mini formats trade writing area for compactness, a full letter-size notebook offers more space but is bulkier to carry." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-for-students", title: "Best Digital Notebooks for Students (2026)" },
  { href: "/guide/best-budget-digital-notebooks", title: "Best Budget Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
