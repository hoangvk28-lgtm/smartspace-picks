export const guideSlug = "best-digital-notebooks-that-feel-like-paper";
export const guideTitle = "5 Best Digital Notebooks That Feel Like Paper in 2026";
export const metaTitle = "Best Digital Notebooks That Feel Like Paper (2026)";
export const metaDescription =
  "5 E Ink writing tablets compared on their actual textured-screen technology rather than marketing language, since \"feels like paper\" depends on specific display and stylus hardware.";
export const mainKeyword = "digital notebook that feels like paper";
export const introParagraphs = [
  "This is a real, distinct product category from reusable paper notebooks: every product here is an E Ink tablet with a textured display and a friction-tip stylus, engineered specifically to replicate the drag and resistance of pen on paper rather than the frictionless glass of a normal touchscreen.",
  "The five products span a genuine price range from $299 to $779, and the price difference tracks real hardware differences: screen size, color E Ink versus monochrome, pressure-sensitivity levels, and whether the pen or a protective folio is bundled in.",
];
export const lastUpdated = "2026-08-08";
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
    id: "b0cz9vfqp-feelpaper",
    rank: 1,
    badge: "Best Overall Value",
    name: "Amazon Kindle Scribe (16GB)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=deskfinds0d-20",
    description:
      "Kindle Scribe combines the textured E Ink display with Amazon's e-reader ecosystem, so it's the pick for anyone who wants to read books and annotate PDFs on the same device they take notes on. At $399.99 it undercuts the comparable reMarkable Paper Pure at the same price point while adding e-book library access reMarkable doesn't have.",
    specs: ["16GB storage", "E Ink display with textured writing surface", "Includes Premium Pen (check current listing)", "Kindle e-reader ecosystem built in"],
    pros: ["Doubles as a full Kindle e-reader, not just a notebook", "Competitively priced against similarly specced competitors", "Integrates with Amazon's existing content library"],
    cons: ["Tied to Amazon's ecosystem for book purchases", "Verify current pen bundle on the live listing before ordering"],
    bestFor: "Buyers who already read on Kindle and want note-taking on the same device.",
  },
  {
    id: "b0gvkbljk2-feelpaper",
    rank: 2,
    badge: "Most Paper-Focused Design",
    name: "reMarkable Paper Pure with Marker",
    price: "$399.00",
    rating: "4.1",
    reviews: "18",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GVKBLJK2?tag=deskfinds0d-20",
    description:
      "reMarkable built its whole product line around the paper-feel promise and doesn't sell e-books or run distracting apps, which keeps the device singularly focused on writing and reading documents. At the same $399 price as the Kindle Scribe, the tradeoff is a smaller review base at time of writing, since this is a newer entry in the lineup.",
    specs: ["Marker stylus included", "No backlight on this model — check current specs", "Distraction-free interface, no app store", "reMarkable cloud subscription available for extra features"],
    pros: ["Purpose-built for a paper-like writing feel, not a repurposed e-reader", "No app-store distractions"],
    cons: ["Smaller review count than more established models in this lineup", "Some features require a paid reMarkable Connect subscription"],
    bestFor: "Buyers who want a distraction-free writing device without e-reader or app features pulling focus.",
  },
  {
    id: "b08hdl3xjr-feelpaper",
    rank: 3,
    badge: "Most Proven Track Record",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=deskfinds0d-20",
    description:
      "reMarkable 2 has by far the largest review base of any paper-feel device in this comparison at 1,354 reviews and a 4.4 rating, which matters when you're evaluating a claim as subjective as \"feels like paper\" — this is the model most buyers have actually tested against their expectations.",
    specs: ["Marker Plus stylus included", "10.3 inch textured E Ink display", "1,354 reviews at 4.4 stars", "reMarkable cloud subscription optional"],
    pros: ["Largest, highest-rated review base in this entire comparison", "Marker Plus stylus included at this price, not sold separately"],
    cons: ["No backlight, so it's not usable in low light without an external light source", "Some advanced features are behind a subscription"],
    bestFor: "Buyers who want the most field-tested paper-feel device with the most independent verification of the writing experience.",
  },
  {
    id: "b0fr4kxmkf-feelpaper",
    rank: 4,
    badge: "Best Color E Ink Option",
    name: "BOOX Note Air 5 C, 10.3\" 6GB/64GB E Ink Tablet",
    price: "$529.99",
    rating: "4.3",
    reviews: "310",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4KXMKF?tag=deskfinds0d-20",
    description:
      "This is the only genuinely color E Ink display in this comparison — the reMarkable and base Kindle Scribe are monochrome. Color E Ink still has visibly lower saturation and contrast than an LCD, which is a real tradeoff to understand before paying the premium, but it's the honest option if color matters for your notes or PDFs.",
    specs: ["6GB RAM / 64GB storage", "10.3 inch color E Ink display", "Runs Android, supports third-party apps", "310 reviews at 4.3 stars"],
    pros: ["Only true color E Ink display in this comparison", "Runs Android apps, unlike the closed reMarkable and Kindle ecosystems"],
    cons: ["Color E Ink has noticeably less vibrant color than an LCD screen", "Android app support adds complexity most single-purpose notebooks don't have"],
    bestFor: "Buyers who specifically need color note-taking or PDF annotation and accept the tradeoffs of color E Ink.",
  },
  {
    id: "b0dgbdr2pm-feelpaper",
    rank: 5,
    badge: "Most Premium, Highest Cost",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "4.2",
    reviews: "540",
    imageUrl: "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=deskfinds0d-20",
    description:
      "At $779 this is nearly double the price of the base reMarkable 2, bundling color display, the upgraded Marker Plus stylus, and a physical folio. It's the flagship of the lineup, but the price jump is real and buyers should confirm the color and larger screen actually matter to them before paying the premium over the reMarkable 2.",
    specs: ["Color display", "Marker Plus stylus included", "Basalt Book Folio included", "540 reviews at 4.2 stars"],
    pros: ["Bundles accessories (folio, upgraded pen) that are sold separately for other models", "Color display without the Android app complexity of the BOOX"],
    cons: ["Significantly more expensive than the reMarkable 2 for a color upgrade", "Rating is slightly lower than the established reMarkable 2, worth weighing against the price premium"],
    bestFor: "Buyers who want the top-of-line reMarkable experience with color and don't mind the price premium.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine textured E Ink hardware, not just marketing claims", description: "We only included devices with an actual friction-tip stylus and textured E Ink screen, the two hardware features that produce a paper-like writing feel, rather than glass-touchscreen devices that describe themselves as paper-like." },
  { title: "Color vs. monochrome tradeoff, stated plainly", description: "Only the BOOX and the top-tier reMarkable Paper Pro offer color E Ink, and we noted that color E Ink still looks visibly less saturated than an LCD rather than implying it matches a normal tablet screen." },
  { title: "Review volume as evidence for a subjective claim", description: "\"Feels like paper\" is inherently subjective, so we weighted review count and rating heavily since a large base of independent testers is the best available evidence for a tactile claim." },
  { title: "Ecosystem lock-in and subscription dependence", description: "We flagged where advanced features require a paid cloud subscription (reMarkable Connect) versus what works fully offline out of the box." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Best value, reads e-books too", "Amazon Kindle Scribe (16GB)"],
        ["Distraction-free writing, no app store", "reMarkable Paper Pure with Marker"],
        ["Most proven track record", "reMarkable 2 with Marker Plus"],
        ["Need actual color notes/PDFs", "BOOX Note Air 5 C"],
        ["Want the flagship experience, budget allows", "reMarkable Paper Pro with Marker Plus and Basalt Folio"],
      ],
    },
  },
  {
    subheading: "Color E Ink Is a Real Tradeoff, Not a Free Upgrade",
    note: "Color E Ink (BOOX Note Air 5 C, reMarkable Paper Pro) still looks noticeably less saturated than an LCD screen. If color isn't essential to your notes, the monochrome reMarkable 2 or Kindle Scribe give you the same core writing feel for meaningfully less money.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the device has a textured E Ink screen and friction-tip stylus", explanation: "These two hardware features, not software, are what actually produce a paper-like feel. All five picks here have them; a glass-screen tablet marketed as \"paper-like\" typically doesn't." },
  { criterion: "Decide if you need color", explanation: "Only the BOOX Note Air 5 C and reMarkable Paper Pro offer color E Ink, and it's visibly less saturated than an LCD. Don't pay the premium unless color genuinely matters for your use case." },
  { criterion: "Check whether advanced features need a subscription", explanation: "reMarkable's cloud sync and some AI features sit behind a paid Connect subscription. Kindle Scribe and BOOX have different ecosystem tradeoffs — verify what's free before buying." },
  { criterion: "Weigh review volume for a subjective claim", explanation: "\"Feels like paper\" is inherently a matter of feel. The reMarkable 2, with the largest review base here, has the most independent verification of that specific claim." },
  { criterion: "Decide if e-reader or app features matter", explanation: "Kindle Scribe adds a full e-book library; BOOX runs Android apps; reMarkable stays deliberately distraction-free. Pick based on whether you want a single-purpose writing device or a multi-function tablet." },
];

export const faq: FaqItem[] = [
  { q: "What actually makes a screen \"feel like paper\"?", a: "A textured E Ink display combined with a friction-tip stylus, which together replicate the drag of pen on paper. All five products here have both; a standard glass touchscreen device does not, regardless of marketing." },
  { q: "Is color E Ink worth the extra cost?", a: "Only if you specifically need color for your notes or PDF annotations. Color E Ink is still visibly less saturated than an LCD screen, so it's a real tradeoff, not a straightforward upgrade." },
  { q: "Do I need a subscription to use these?", a: "Core writing and reading works offline on all five without a subscription. Some advanced features, particularly on reMarkable, are behind a paid Connect plan — check the current listing for specifics." },
  { q: "Which has the most independent evidence the writing feel is good?", a: "The reMarkable 2, with 1,354 reviews at 4.4 stars, has by far the largest tested base of any product in this comparison." },
  { q: "Can these replace a Kindle for reading books?", a: "The Kindle Scribe can, since it runs Amazon's full e-reader ecosystem. The reMarkable and BOOX are built around notes and PDF documents rather than a book storefront." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-for-handwriting", title: "Best Digital Notebooks for Handwriting (2026)" },
  { href: "/guide/best-ai-digital-notebooks", title: "Best AI Digital Notebooks (2026)" },
];
