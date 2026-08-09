export const guideSlug = "best-digital-notebooks-for-sketching";
export const guideTitle = "5 Best Digital Notebooks for Sketching in 2026";
export const metaTitle = "Best Digital Notebooks for Sketching (2026)";
export const metaDescription =
  "5 devices compared on real sketching capability — pressure levels, tilt support, and color — since basic note-taking hardware doesn't automatically translate to good drawing hardware.";
export const mainKeyword = "digital notebook for drawing";
export const introParagraphs = [
  "Not every digital notebook is built for sketching. We required real pressure sensitivity and, ideally, color support before including a device here, rather than assuming any note-taking tablet works equally well for drawing.",
  "The XPPen devices stand out specifically because pressure sensitivity is their core design focus, not an add-on feature bolted onto a reading device.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dx234nwp-sketchdn",
    rank: 1,
    badge: "Best Overall for Sketching",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    price: "$299.98",
    rating: "4.3",
    reviews: "329",
    imageUrl: "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX234NWP?tag=deskfinds0d-20",
    description: "16384 pressure levels and full color, at a lower price than the E Ink options, purpose-built for drawing rather than adapted from a reading device.",
    specs: ["16384 pressure levels", "Full color display", "329 reviews at 4.3 stars"],
    pros: ["Highest pressure sensitivity in this comparison", "Full color, not the muted color of E Ink alternatives"],
    cons: ["Smaller review base than Kindle Scribe or reMarkable"],
    bestFor: "Buyers who want real drawing capability at a lower price than E Ink tablets.",
  },
  {
    id: "b0g2shl3dh-sketchdn",
    rank: 2,
    badge: "Same Sketching Hardware, Alternate Bundle",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\" (Alternate Bundle)",
    price: "$324.95",
    rating: "4.2",
    reviews: "180",
    imageUrl: "https://m.media-amazon.com/images/I/31dwpvU+C7L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2SHL3DH?tag=deskfinds0d-20",
    description: "Same pressure-sensitive drawing hardware as the pick above at a higher price — verify accessory differences on the current listing.",
    specs: ["16384 pressure levels", "Full color display", "180 reviews at 4.2 stars"],
    pros: ["Same core sketching hardware as the cheaper XPPen listing"],
    cons: ["Costs more with a slightly lower rating"],
    bestFor: "Buyers comparing XPPen bundles for extra included accessories.",
  },
  {
    id: "b0fr4kxmkf-sketchdn",
    rank: 3,
    badge: "Best Color E Ink for Sketching",
    name: "BOOX Note Air 5 C, 10.3\" Color E Ink Tablet",
    price: "$529.99",
    rating: "4.3",
    reviews: "310",
    imageUrl: "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4KXMKF?tag=deskfinds0d-20",
    description: "The only genuine color E Ink option for sketching in this comparison, though color E Ink still looks less saturated than the XPPen's LCD-based color display.",
    specs: ["Color E Ink display", "Runs Android for third-party drawing apps", "310 reviews at 4.3 stars"],
    pros: ["Only color E Ink option here for a paper-like sketching feel", "Android support for third-party drawing apps"],
    cons: ["Color E Ink is visibly less saturated than the XPPen's LCD color display", "More expensive than the XPPen options"],
    bestFor: "Buyers who want a paper-like sketching feel with color, and accept E Ink's muted color tradeoff.",
  },
  {
    id: "b0dgbdr2pm-sketchdn",
    rank: 4,
    badge: "Most Premium Color E Ink",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "4.2",
    reviews: "540",
    imageUrl: "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=deskfinds0d-20",
    description: "reMarkable's flagship color device, bundling an upgraded pen and folio, at the highest price in this comparison.",
    specs: ["Color E Ink display", "Marker Plus stylus and folio included", "540 reviews at 4.2 stars"],
    pros: ["Bundles accessories sold separately for other reMarkable models"],
    cons: ["Highest price in this comparison, nearly double the XPPen options"],
    bestFor: "Buyers who specifically want the reMarkable ecosystem in color and don't mind the premium.",
  },
  {
    id: "b08hdl3xjr-sketchdn",
    rank: 5,
    badge: "Most Proven, Monochrome Only",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description: "The largest, highest-rated review base of any device here, though it's monochrome only — included for sketchers who prioritize the writing/drawing feel over color.",
    specs: ["Monochrome E Ink display", "Marker Plus stylus included", "1,354 reviews at 4.4 stars"],
    pros: ["Largest, most proven review base in this comparison"],
    cons: ["No color at all, a real limitation for many sketching use cases"],
    bestFor: "Buyers who prioritize the most field-tested drawing feel and don't need color.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Real pressure sensitivity required", description: "We only prioritized devices with confirmed pressure-level specs, not devices where drawing is a secondary, unconfirmed feature." },
  { title: "Color as a real sketching factor", description: "We distinguished full-color LCD-based displays (XPPen) from color E Ink (BOOX, reMarkable Paper Pro), since they look meaningfully different for colored sketches." },
  { title: "Price against sketching capability", description: "We noted that the highest pressure sensitivity in this comparison comes at the lowest price, not the highest." },
  { title: "Review volume for drawing-feel confidence", description: "We weighted established review history for evidence on how the stylus actually performs during sustained drawing use." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Color LCD vs. Color E Ink for Sketching",
    cards: [
      { label: "Color LCD (XPPen)", text: "Full, vibrant color at the lowest price in this comparison." },
      { label: "Color E Ink (BOOX, reMarkable Paper Pro)", text: "Paper-like feel with color, but visibly less saturated than LCD, at a higher price." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check pressure-level specs directly", explanation: "16384 pressure levels (XPPen) is meaningfully more capable for sketching than basic on/off styluses." },
  { criterion: "Decide between LCD color and E Ink color", explanation: "LCD color (XPPen) is more vibrant; E Ink color (BOOX, reMarkable Paper Pro) is more paper-like but less saturated." },
  { criterion: "Weigh price against sketching-specific hardware", explanation: "The most affordable option here (XPPen) also has the highest pressure sensitivity, so don't assume price tracks sketching capability." },
  { criterion: "Consider Android support for third-party drawing apps", explanation: "The BOOX Note Air 5 C's Android base opens up dedicated drawing apps beyond built-in tools." },
  { criterion: "Use review count as evidence of real-world drawing performance", explanation: "Pressure specs alone don't capture how a stylus actually feels during sustained sketching — established reviews are useful evidence." },
];

export const faq: FaqItem[] = [
  { q: "Which device has the best pressure sensitivity?", a: "The XPPen 3 in 1 Color Digital Notebook, with 16384 pressure levels, the highest in this comparison, at the lowest price." },
  { q: "Is E Ink color as vibrant as a normal screen?", a: "No. Color E Ink (BOOX Note Air 5 C, reMarkable Paper Pro) is visibly less saturated than the XPPen's LCD-based color display." },
  { q: "Can I use third-party drawing apps?", a: "Yes, on the BOOX Note Air 5 C, since it runs Android." },
  { q: "Which is the most proven device for sketching?", a: "The reMarkable 2, with 1,354 reviews, though it's monochrome only." },
  { q: "What's the most affordable good sketching option?", a: "The XPPen 3 in 1 Color Digital Notebook at $299.98, which also has the highest pressure sensitivity in this comparison." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks-with-styluses", title: "Best Digital Notebooks with Styluses (2026)" },
  { href: "/guide/best-digital-notebooks-for-handwriting", title: "Best Digital Notebooks for Handwriting (2026)" },
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
];
