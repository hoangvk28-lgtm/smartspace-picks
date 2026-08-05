export const guideSlug = "best-digital-notebooks-with-pens";
export const guideTitle = "7 Best Digital Notebooks with a Pen Included in 2026";
export const metaTitle = "Best Digital Notebooks with Pens (2026)";
export const metaDescription =
  "7 digital notebooks that genuinely include a pen or stylus in the box, spanning e-ink devices, smart pen sets, and pen-bundled paper notebooks.";
export const mainKeyword = "digital notebook with pen";
export const introParagraphs = [
  "Not every digital notebook listing that mentions a pen actually includes one in the box, and the pen itself means something different depending on the product type: an e-ink device bundles a stylus, a smart pen set includes the sensor pen that makes the whole product work, and some Rocketbook-style notebooks bundle a Pilot Frixion pen while others sell it separately.",
  "We only included picks here where the listing explicitly states a pen, marker, or stylus is included, so you are not caught buying a notebook and discovering you need to order a compatible pen separately.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "remarkable2-pen",
    rank: 1,
    badge: "Best E-Ink Notebook with Pen Included",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description:
      "The reMarkable 2 ships with the Marker Plus stylus included, no separate purchase needed to start writing on the device. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs standalone e-ink hardware, the pen writes directly on the glass screen and the notes sync digitally. Verify current cloud subscription requirements if you plan to use the full sync and backup feature set.",
    specs: ["E-ink digital notebook device, Type 2", "Marker Plus stylus included", "Writes directly on the screen", "Weeks of battery life"],
    pros: ["Marker Plus stylus included in the box", "No batteries needed in the pen itself", "Genuine e-ink writing feel", "Long device battery life"],
    cons: ["Higher price than paper-based options", "Verify subscription requirements for full cloud sync", "Black and white display only"],
    bestFor: "Buyers who want a complete e-ink writing kit out of the box.",
  },
  {
    id: "remarkable-pro-pen",
    rank: 2,
    badge: "Best Premium Notebook with Pen Included",
    name: "reMarkable Paper Pro with Marker Plus",
    price: "$679.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/412wtt+9l5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DG9ZXWMK?tag=deskfinds0d-20",
    description:
      "The reMarkable Paper Pro includes the Marker Plus stylus alongside its color e-paper display, a complete premium writing kit in one box. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nBeing genuine standalone hardware, the pen is required for input since there is no touch keyboard substitute for handwriting. This is the most expensive pen-included pick here, appropriate for buyers who will use it daily.",
    specs: ["E-ink digital notebook device, Type 2", "Marker Plus included", "Color e-paper display", "Larger writing surface"],
    pros: ["Marker Plus stylus included", "Color e-paper display included", "No separate pen purchase required", "Larger screen than the standard reMarkable 2"],
    cons: ["Premium price point", "Verify current cloud subscription requirements", "Overkill if you only need basic notes"],
    bestFor: "Buyers wanting the most complete premium e-ink and pen bundle.",
  },
  {
    id: "kindle-scribe-pen",
    rank: 3,
    badge: "Best E-Reader Notebook with Pen Included",
    name: "Amazon Kindle Scribe Colorsoft 64GB, 11 inch paper-like color display with front light, Pen included, Graphite",
    price: "$679.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description:
      "The Kindle Scribe Colorsoft includes a pen in the box, letting you write and annotate immediately on its stated color paper-like display. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nAs genuine e-ink hardware, the included pen is the primary input method, there is no need to hunt for a compatible stylus separately. It suits buyers who also want an e-reader, since the notebook function shares the device with Amazon's Kindle library.",
    specs: ["E-ink digital notebook device, Type 2", "Pen included", "Color paper-like display", "Combines reading and notes"],
    pros: ["Pen included, no separate purchase", "Color display stated on the listing", "Doubles as a full e-reader", "Large 11 inch writing surface"],
    cons: ["Premium price similar to reMarkable Paper Pro", "Best value for buyers already in the Kindle ecosystem", "Verify current handwriting conversion accuracy"],
    bestFor: "Buyers who want one pen-included device for both books and notes.",
  },
  {
    id: "noteorius-pen2",
    rank: 4,
    badge: "Best Smart Pen Set with Folio Included",
    name: "Noteorius Smart Notebook with Pen and Folio, Reusable Digital Writing Pad",
    price: "$199.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+UCf2-LrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FM4K63P3?tag=deskfinds0d-20",
    description:
      "The Noteorius set includes both the sensor pen and a folio in the box, a complete real-time digitizing kit for paper-based writing. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nThe pen itself is not optional here, it is the mechanism that captures your handwriting live and syncs it to the app as you write. It costs more than a basic Rocketbook but includes the pen as standard, unlike some paper notebooks that sell the pen separately.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Pen and folio included", "Real-time sync as you write", "App sync with cloud storage"],
    pros: ["Pen and folio included as standard", "Real-time sync while writing on real paper", "App sync with cloud storage", "Mid-range price for a complete kit"],
    cons: ["Pen requires charging periodically", "Smaller brand than Rocketbook or reMarkable", "Verify current app compatibility"],
    bestFor: "Buyers who want a complete paper-and-pen digitizing kit in one purchase.",
  },
  {
    id: "syncpen-pen2",
    rank: 5,
    badge: "Best Budget Smart Pen Set with Pen Included",
    name: "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    price: "$79.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F5P2186C?tag=deskfinds0d-20",
    description:
      "SyncPen includes its Bluetooth sensor pen as part of the set, the lowest-priced pen-included option in this guide. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nThe pen is the core of the product, syncing your handwriting from paper to the app in real time as you write, with OCR and audio recording included. Verify current OCR accuracy through recent reviews since handwriting recognition improves through software updates over time.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Bluetooth pen included", "OCR and audio recording", "Budget price point"],
    pros: ["Pen included at the lowest price point here", "Real-time sync plus OCR and audio recording", "Still writes on real paper", "Bluetooth connectivity"],
    cons: ["OCR accuracy should be verified through current reviews", "Smaller ecosystem than larger brands", "Pen requires periodic charging"],
    bestFor: "Budget-conscious buyers who still want a pen included in the box.",
  },
  {
    id: "ophayapen-pen2",
    rank: 6,
    badge: "Best Mid-Range Smart Pen with Handwriting Sync",
    name: "Ophayapen Smart Pen for Note Taking with Digital Smart Notebook and Writing",
    price: "$108.75",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/414TCBsOXsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CCV6XVX6?tag=deskfinds0d-20",
    description:
      "The Ophayapen set includes both the sensor pen and a companion notebook, with the listing specifically stating real-time handwriting conversion to text. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nThe included pen is what enables the live sync, writing on the special paper and syncing to the paired smartphone app as you go. Mid-range pricing sits between the cheapest smart pen sets and the premium e-ink hardware devices.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Pen and notebook included", "Real-time sync, converts to text", "Sharing via app on Android and iOS"],
    pros: ["Pen and notebook included together", "States real-time conversion to text", "Compatible with Android and iOS", "Mid-range price for the feature set"],
    cons: ["Verify current text-conversion accuracy through reviews", "Requires the specific paired notebook paper", "Smaller brand, verify current support"],
    bestFor: "Buyers wanting a complete pen-and-paper kit with app-based text conversion.",
  },
  {
    id: "yuan-pen2",
    rank: 7,
    badge: "Best Compact Smart Pen and Notebook Set",
    name: "Yuan Digital Sync Pen with Notebook, Smart Writing Set for Note Taking",
    price: "$79.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/4114LI7TXAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DR2PZ5LC?tag=deskfinds0d-20",
    description:
      "The Yuan set bundles the sync pen with a matching notebook, a compact real-time digitizing kit at a budget-friendly price. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nLike other smart pen sets, the included pen is essential to the product working, capturing handwriting live as you write on the special paper. It is a reasonable lower-cost alternative to the pricier smart pen kits in this guide.",
    specs: ["Smart pen and paper digitizer set, Type 3", "Pen and notebook included", "Real-time sync for note taking", "Budget-friendly price"],
    pros: ["Pen and notebook included together", "Budget-friendly for the smart pen category", "Real-time sync while writing", "Compact set, easy to carry"],
    cons: ["Smaller brand, verify current app support", "OCR and text conversion accuracy should be verified", "Pen requires periodic charging"],
    bestFor: "Buyers wanting an affordable complete smart pen and notebook kit.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Pen inclusion confirmed from the listing", description: "Only included products where the listing explicitly states a pen, marker, or stylus ships in the box, not products where a compatible pen must be purchased separately." },
  { title: "Pen's role in the product understood per type", description: "Distinguished between an e-ink stylus (an accessory to a screen device), a smart pen (the core mechanism of the product), and a bundled Rocketbook pen (a nice-to-have paired with an erasable notebook)." },
  { title: "Total kit value assessed, not just the base price", description: "Weighed whether the included pen adds meaningful value versus a listing that bundles a low-cost accessory to justify a higher price." },
  { title: "Sync method verified against the pen type", description: "Confirmed whether the pen enables real-time sync (smart pen sets) or is simply a writing instrument for a screen (e-ink devices)." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Why the Pen Means Something Different Per Product Type",
    note: "On an e-ink device, the included pen or stylus is an input accessory for the screen. On a smart pen set, the pen is the entire product, without it there is no digitizing at all. On a Rocketbook-style notebook, an included pen is a bonus since the notebook itself works with any compatible erasable pen you already own. Know which role the pen plays before comparing price.",
  },
  {
    subheading: "Real-Time Sync vs Scan-After-Writing",
    note: "Smart pen sets sync your handwriting to an app as you write, in real time. Reusable paper notebooks require you to finish writing, then scan the page with your phone afterward. Neither is strictly better, but they are genuinely different workflows worth matching to your habits.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Best complete e-ink and pen kit", "reMarkable 2 with Marker Plus"],
        ["Premium color e-ink and pen kit", "reMarkable Paper Pro with Marker Plus"],
        ["Pen included plus a full e-reader library", "Kindle Scribe Colorsoft"],
        ["Real-time sync with a folio included", "Noteorius Smart Notebook with Pen and Folio"],
        ["Cheapest complete pen-included kit", "SyncPen Digital Notebook Smart Pen Set"],
        ["Text conversion stated on the listing", "Ophayapen Smart Pen for Note Taking"]
      ],
    },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the pen is actually included, not sold separately", explanation: "Some digital notebook listings show a pen in the product photo but sell it as an add-on, read the included-items section carefully." },
  { criterion: "Understand whether the pen is essential or an accessory", explanation: "On smart pen sets the pen is required for the product to function at all, on e-ink devices it is an input accessory to an already-functional screen." },
  { criterion: "Check whether the pen needs charging", explanation: "Smart pens with electronics inside typically need periodic charging, plain styluses for e-ink screens generally do not." },
  { criterion: "Verify handwriting-to-text claims independently", explanation: "OCR and text conversion accuracy is a software feature that changes over time, check current reviews rather than trusting the original listing copy." },
];

export const faq: FaqItem[] = [
  { q: "Does every digital notebook come with a pen?", a: "No, some reusable paper notebooks sell the notebook and pen separately, always check the included-items section of the specific listing." },
  { q: "Do I need to charge the pen?", a: "Smart pens used in real-time digitizing sets typically need charging, while plain styluses for e-ink screens usually do not." },
  { q: "What pen works with a Rocketbook notebook?", a: "Rocketbook-style notebooks generally require a specific erasable pen, most commonly a Pilot Frixion, a regular ballpoint can permanently mark the page." },
  { q: "Is the pen included with the reMarkable?", a: "The reMarkable 2 and reMarkable Paper Pro listings referenced here include the Marker Plus stylus as part of the bundle." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebook-tablets", title: "Best Digital Notebook Tablets (2026)" },
  { href: "/guide/best-digital-notebooks-with-handwriting-conversion", title: "Best Digital Notebooks with Handwriting Conversion (2026)" },
];
