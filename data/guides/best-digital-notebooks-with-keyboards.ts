export const guideSlug = "best-digital-notebooks-with-keyboards";
export const guideTitle = "5 Best Digital Notebooks with Keyboards in 2026";
export const metaTitle = "Best Digital Notebooks with Keyboards (2026)";
export const metaDescription =
  "Honest finding: no current E Ink notebook in our research ships with a first-party keyboard. We ranked the 5 devices by whether their operating system actually supports a Bluetooth keyboard at all.";
export const mainKeyword = "digital notebook with keyboard";
export const introParagraphs = [
  "We need to be upfront about what we found: none of the current leading E Ink notebooks — Kindle Scribe, reMarkable, XPPen — ship with a first-party keyboard or official keyboard folio at time of writing. \"Digital notebook with keyboard\" searches don't currently have a clean, purpose-built hardware match.",
  "What we could honestly evaluate is whether each device's operating system supports pairing a separate Bluetooth keyboard at all, since that's the realistic path to typing on any of these. Closed ecosystems (Kindle Scribe, reMarkable) generally don't support this the way an open Android-based device does.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dx234nwp-keyboarddn",
    rank: 1,
    badge: "Most Likely to Support a Bluetooth Keyboard",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    price: "$299.98",
    rating: "4.3",
    reviews: "329",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX234NWP?tag=deskfinds0d-20",
    description: "This is not sold with a keyboard, but XPPen's note-taking tablets are more likely to run an open enough OS to support a paired Bluetooth keyboard than the closed Kindle Scribe or reMarkable ecosystems — verify current OS/app support before assuming typing works as expected.",
    specs: ["10.95 inch color display", "16384 pressure levels", "329 reviews at 4.3 stars"],
    pros: ["Lowest price in this comparison", "More open software ecosystem than Kindle or reMarkable"],
    cons: ["No official keyboard accessory currently bundled or sold", "Bluetooth keyboard support should be verified on the current listing before buying for that purpose"],
    bestFor: "Buyers who want the best odds of pairing a keyboard, understanding it's not an official supported accessory.",
  },
  {
    id: "b0g2shl3dh-keyboarddn",
    rank: 2,
    badge: "Same Hardware, Alternate Bundle",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\" (Alternate Bundle)",
    price: "$324.95",
    rating: "4.2",
    reviews: "180",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2SHL3DH?tag=deskfinds0d-20",
    description: "Same core hardware as the pick above at a slightly higher price. Neither XPPen listing includes a keyboard; check the current listing for exact accessory bundle differences.",
    specs: ["10.95 inch color display", "16384 pressure levels", "180 reviews at 4.2 stars"],
    pros: ["Same underlying hardware as the lower-priced XPPen option"],
    cons: ["Costs more with a lower rating than the other XPPen listing", "No official keyboard bundled"],
    bestFor: "Buyers comparing XPPen bundle options — check current inclusions before paying more here.",
  },
  {
    id: "b0fc1vjjfp-keyboarddn",
    rank: 3,
    badge: "Best If You Only Need Occasional Typing",
    name: "Amazon Kindle Scribe Colorsoft 64GB",
    price: "$679.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=deskfinds0d-20",
    description: "Kindle's closed ecosystem does not support a general Bluetooth keyboard for note-taking the way an Android-based device might. Included here as the honest \"no\" case: if you need real typing, this is not the device, regardless of its other strengths.",
    specs: ["64GB storage", "Color E Ink display", "Closed Amazon ecosystem, no general Bluetooth keyboard support"],
    pros: ["Excellent note and reading device on its own merits"],
    cons: ["No keyboard support of any kind for note-taking"],
    bestFor: "Buyers who want AI notes and color E Ink and don't need keyboard input at all.",
  },
  {
    id: "b0cz9vfqp-keyboarddn",
    rank: 4,
    badge: "Same Ecosystem Limitation, Lower Price",
    name: "Amazon Kindle Scribe (16GB)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description: "Same closed ecosystem and lack of keyboard support as the Colorsoft above, at a lower price without color display or extra storage.",
    specs: ["16GB storage", "Monochrome E Ink display", "Closed Amazon ecosystem, no general Bluetooth keyboard support"],
    pros: ["Lower cost entry into the Kindle Scribe lineup"],
    cons: ["No keyboard support, same as the Colorsoft model"],
    bestFor: "Buyers who've already decided keyboard support doesn't matter and want the cheaper Kindle Scribe.",
  },
  {
    id: "b08hdl3xjr-keyboarddn",
    rank: 5,
    badge: "Most Proven, Same Keyboard Limitation",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "reMarkable's Type Folio keyboard accessory exists for other models in their lineup, but check the current listing to confirm compatibility with this specific reMarkable 2 configuration before assuming it will work.",
    specs: ["Marker Plus stylus included", "reMarkable Type Folio may be compatible — verify current model support", "1,354 reviews at 4.4 stars"],
    pros: ["reMarkable does sell an official keyboard folio accessory for some models in its lineup", "Largest, highest-rated review base in this comparison"],
    cons: ["Keyboard folio compatibility varies by specific reMarkable model — confirm before buying", "Keyboard accessory sold separately, not bundled"],
    bestFor: "Buyers considering the reMarkable ecosystem who should specifically verify Type Folio compatibility before assuming keyboard support.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest disclosure of missing keyboard hardware", description: "We did not find a current E Ink notebook that ships with a bundled first-party keyboard, and said so directly rather than forcing a false top-5 keyboard-notebook narrative." },
  { title: "OS openness to a paired keyboard", description: "We distinguished closed ecosystems (Kindle, reMarkable's core OS) from more open ones (XPPen), since that determines whether typing is realistically possible at all." },
  { title: "Official accessory availability, verified per model", description: "Where a brand (reMarkable) sells an official keyboard folio for some models, we flagged that compatibility needs confirming for the specific model rather than assuming it applies across the whole lineup." },
  { title: "Review volume where relevant", description: "We still weighted established review history for overall device quality, even though it doesn't speak directly to keyboard support." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "If You Genuinely Need Typing, Consider a Different Device Category",
    note: "None of the E Ink notebooks in this comparison ship with a bundled keyboard, and the ones that support keyboard accessories at all require verifying compatibility with your specific model. If typing is a hard requirement, a lightweight tablet with a keyboard case may serve you better than an E Ink notebook.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Don't assume any E Ink notebook ships with a keyboard", explanation: "None of the current top devices bundle a first-party keyboard. Verify this directly on the current listing before assuming otherwise." },
  { criterion: "Check whether the OS supports a Bluetooth keyboard at all", explanation: "Open, Android-based devices (like XPPen) are more likely to support a paired keyboard than closed ecosystems (Kindle Scribe, reMarkable's core OS)." },
  { criterion: "Verify official keyboard accessory compatibility per exact model", explanation: "Where a brand sells a keyboard folio for some models (reMarkable's Type Folio), confirm it's compatible with the specific configuration you're buying." },
  { criterion: "Consider whether you actually need real typing", explanation: "If typing is essential, a lightweight standard tablet with a keyboard case may be a better fit than an E Ink notebook built primarily for handwriting." },
  { criterion: "Don't pay a premium expecting keyboard support that isn't confirmed", explanation: "Verify keyboard compatibility before choosing a more expensive model on the assumption it includes typing support." },
];

export const faq: FaqItem[] = [
  { q: "Does any current E Ink notebook come with a keyboard?", a: "No. None of the leading options — Kindle Scribe, reMarkable, XPPen — currently ship with a bundled first-party keyboard." },
  { q: "Can I pair a Bluetooth keyboard with any of these?", a: "More realistic on open, Android-based devices like the XPPen. Closed ecosystems like Kindle Scribe don't support general Bluetooth keyboard pairing for notes." },
  { q: "Does reMarkable sell a keyboard accessory?", a: "reMarkable sells a Type Folio keyboard for some models in its lineup, but compatibility varies — confirm it works with the specific reMarkable model you're buying." },
  { q: "Should I buy one of these expecting to type on it regularly?", a: "Not recommended as your primary plan. If regular typing is essential, a standard tablet with a keyboard case is likely a better fit than an E Ink notebook." },
  { q: "Why include Kindle Scribe if it has no keyboard support?", a: "To give an honest, complete picture — buyers should know explicitly that this device has no keyboard path, not just see it omitted without explanation." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-digital-notebooks-for-handwriting", title: "Best Digital Notebooks for Handwriting (2026)" },
];
