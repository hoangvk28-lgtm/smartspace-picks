export const guideSlug = "best-compact-vertical-mice-for-travel";
export const guideTitle = "6 Best Compact Vertical Mice for Travel in 2026";
export const metaTitle = "Best Compact Vertical Mice for Travel";
export const metaDescription =
  "We evaluated 6 compact vertical mice for travel, being honest that a smaller body may offer less ergonomic benefit than a full-size vertical mouse.";
export const mainKeyword = "best compact vertical mice for travel";
export const introParagraphs = [
  "There's an unavoidable design tension in this category worth naming directly: compactness reduces the very body size and angle that makes a vertical mouse ergonomically effective in the first place. A 'compact vertical mouse' may genuinely offer less ergonomic benefit than a full-size one, since a smaller body often means a shallower tilt and less room for your hand to rest naturally. We're honest here that this is a real compromise, not a solved problem, and picked products that manage that tradeoff reasonably rather than claiming a compact design with no downside.",
  "We also considered travel-specific durability, since a mouse that gets tossed into a bag repeatedly experiences different wear than one that sits on a desk permanently, and carried forward the same USB-A versus USB-C dongle adapter concern relevant to laptop use generally. Charging cable type is also a real travel-convenience factor: a USB-C charging cable is more likely to overlap with cables you're already packing for other devices than an older micro-USB cable would be.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31TnFhELhRL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07zwt3q2y-tr",
    rank: 1,
    badge: "Best Compact Travel Pick",
    name: "Bluetooth Wireless Arc Travel Mouse, Bluetooth 5.0/4.0 and 2.4G Tri-Mode",
    price: "$32.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "674 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31TnFhELhRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZWT3Q2Y?tag=deskfinds0d-20",
    description:
      "Explicitly designed as a travel mouse with tri-mode connectivity, giving genuine flexibility between Bluetooth and a 2.4GHz dongle depending on what your travel setup needs that day.\n\nBeing genuinely built for travel rather than adapted from a desk-first design, this manages the compact-versus-ergonomic tradeoff better than most, though its vertical angle is naturally shallower than a full-size dedicated ergonomic mouse.",
    specs: ["Tri-mode connectivity, Bluetooth and 2.4G", "Compact folding-style travel body", "Purpose-built for travel", "Mid-range price point"],
    pros: ["Genuinely purpose-built for travel with flexible connectivity", "Compact body designed for packing", "Solid review rating", "Tri-mode connectivity covers most travel scenarios"],
    cons: ["Shallower vertical angle than a full-size ergonomic mouse", "Charging cable type should be confirmed in the current listing", "Smaller ergonomic benefit than dedicated full-size picks"],
    bestFor: "Frequent travelers who want a purpose-built compact mouse with flexible connectivity, understanding the ergonomic tradeoff.",
  },
  {
    id: "b07ycfylvx-tr",
    rank: 2,
    badge: "Best Budget Folding Travel Pick",
    name: "TECKNET Folding Wireless Mouse, 2.4G Travel Mouse, 3 Adjustable DPI",
    price: "$13.29",
    rating: "4.4 stars from Amazon ratings",
    reviews: "1,689 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41HPNeaiKoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07YCFYLVX?tag=deskfinds0d-20",
    description:
      "A folding design specifically built to minimize bag space, at the lowest price in this guide, with a solid review base for a dedicated travel mouse.\n\nThe folding mechanism trades some vertical angle for genuine flat-pack portability, so buyers prioritizing maximum ergonomic benefit should weigh this against the full-size guides elsewhere in this cluster.",
    specs: ["Folding compact design", "2.4GHz wireless dongle", "3 adjustable DPI levels", "Budget price point"],
    pros: ["Lowest price in this guide", "Folding design genuinely minimizes bag space", "Strong review base for a travel-specific mouse", "Adjustable DPI"],
    cons: ["Folding mechanism reduces vertical angle versus non-folding designs", "AA or coin battery type should be confirmed for travel weight", "Smaller ergonomic benefit than a full-size vertical mouse"],
    bestFor: "Budget-conscious travelers who prioritize minimal bag space over maximum ergonomic angle.",
  },
  {
    id: "b0f9kfsy9g-tr",
    rank: 3,
    badge: "Best 2-in-1 Sliding Design",
    name: "DELUX Wireless Bluetooth Pocket Mouse, 2-in-1 Sliding Mouse",
    price: "$31.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "60 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Gy9aIft6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F9KFSY9G?tag=deskfinds0d-20",
    description:
      "A sliding 2-in-1 mechanism that expands from a pocket-sized form to a larger usable shape, a genuinely different approach to the compact-versus-ergonomic tension than a fixed-size compact mouse.\n\nThe review sample here is small, so weigh the strong 4.4-star rating against the limited number of reviews, and confirm current charging cable type before buying.",
    specs: ["2-in-1 sliding expandable design", "Bluetooth connectivity", "Pocket-sized when collapsed", "Mid-range price point"],
    pros: ["Sliding mechanism offers a larger usable shape than a fixed compact body", "Genuinely pocket-sized when collapsed", "Bluetooth connectivity", "Strong rating despite a small sample"],
    cons: ["Small review sample size, verify current feedback", "Sliding mechanism adds a moving part that could wear over time", "Vertical angle still shallower than a full-size ergonomic mouse"],
    bestFor: "Travelers who want a mouse that expands to a larger usable size from a genuinely pocket-sized collapsed form.",
  },
  {
    id: "b0cx18lhws-tr",
    rank: 4,
    badge: "Best Compact Pick With a More Pronounced Angle",
    name: "ProtoArc EM11 NL Wireless Ergonomic Vertical Mouse, Rechargeable",
    price: "$22.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "5,670 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31PGrLfkUxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CX18LHWS?tag=deskfinds0d-20",
    description:
      "Not purpose-built as a travel or folding mouse, but its smaller-than-full-size body and rechargeable USB-C-style charging make it a reasonable middle ground for buyers who want more ergonomic angle than the dedicated travel picks offer.\n\nConfirm current charging cable type and dongle storage before relying on this for frequent travel, since it's primarily marketed as a general compact ergonomic mouse rather than travel-specific.",
    specs: ["Compact rechargeable body", "More pronounced vertical angle than folding travel mice", "2.4GHz wireless dongle", "Budget-to-mid price point"],
    pros: ["More pronounced ergonomic angle than dedicated folding travel mice", "Rechargeable battery", "Solid review base", "Reasonably compact for occasional travel"],
    cons: ["Not purpose-built or marketed specifically for travel durability", "Confirm dongle storage before frequent travel use", "Bulkier than the dedicated folding or sliding travel picks"],
    bestFor: "Buyers who want more ergonomic angle than a dedicated travel mouse offers and only travel occasionally.",
  },
  {
    id: "b0gnmpgm7g-tr",
    rank: 5,
    badge: "Best Small-Hand Travel Pick",
    name: "Luhaso Ergonomic Vertical Wireless Mouse, 57 degree, Small/Medium Hands",
    price: "$19.99",
    rating: "4.7 stars from Amazon ratings",
    reviews: "57 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ttLEqu0hL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GNMPGM7G?tag=deskfinds0d-20",
    description:
      "Explicitly sized for small to medium hands, which naturally overlaps with the compact footprint travelers want, at a very strong review rating though on a small sample size.\n\nIt isn't purpose-built or marketed as a travel mouse specifically, so confirm dongle storage and current charging cable type on the listing before relying on this for frequent packing.",
    specs: ["Explicit small/medium hand sizing", "57-degree tilt angle", "Wireless connectivity", "Budget price point"],
    pros: ["Genuinely sized for small to medium hands, naturally compact", "Very strong review rating", "Budget-friendly price", "Disclosed tilt angle"],
    cons: ["Small review sample size, verify current feedback", "Not purpose-built or marketed specifically for travel durability", "Dongle storage should be confirmed for frequent packing"],
    bestFor: "Travelers with small to medium hands who want a compact, budget-friendly pick.",
  },
  {
    id: "b0f4jns3px-tr",
    rank: 6,
    badge: "Best Ultra-Budget Compact Pick",
    name: "KUNSI Wired Ergonomic Mouse, USB Wired Vertical Mouse with adjustable DPI",
    price: "$9.99",
    rating: "4.1 stars from Amazon ratings",
    reviews: "181 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41VQ8m4r1iL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4JNS3PX?tag=deskfinds0d-20",
    description:
      "The lowest price in this guide, a wired compact mouse with adjustable DPI, useful for travelers who don't mind packing a cable in exchange for zero dongle-loss risk and no charging to manage.\n\nIts 4.1-star rating is more moderate than the other picks here, and being wired rather than wireless is a real tradeoff against the freedom the other picks in this guide offer.",
    specs: ["Wired USB connection", "Adjustable DPI", "Compact ergonomic body", "Ultra-budget price point"],
    pros: ["Lowest price in this guide", "No dongle to lose or battery to charge while traveling", "Adjustable DPI even at this price tier", "Compact body"],
    cons: ["More moderate 4.1-star rating than other picks", "Wired only, no wireless freedom of movement", "Smaller review sample size"],
    bestFor: "Budget-conscious travelers who don't mind a cable in exchange for zero dongle-loss risk.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Compact-versus-ergonomic design tension named explicitly", description: "We were honest that a compact vertical mouse may offer meaningfully less ergonomic benefit than a full-size one, rather than claiming compactness with no tradeoff." },
  { title: "Genuine compactness verified against the standard-size picks", description: "We checked whether each pick is genuinely more compact than standard vertical mice, not just marginally smaller." },
  { title: "Travel-specific durability considered", description: "We considered how each design likely holds up to repeated packing and unpacking in a bag versus sitting permanently on a desk." },
  { title: "Charging cable type and dongle adapter needs disclosed", description: "We noted charging cable type where known and carried forward the USB-A to USB-C dongle adapter concern relevant to travel and laptop use." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Understand the Compact-Versus-Ergonomic Tradeoff Upfront",
    note: "A compact vertical mouse may offer meaningfully less ergonomic benefit than a full-size one, since compactness often means a shallower angle and less hand support. Decide whether minimal bag space or maximum ergonomic benefit matters more before choosing.",
  },
  {
    subheading: "Check Charging Cable Type for Travel Convenience",
    note: "A USB-C charging cable is more likely to overlap with cables you already pack for a phone or laptop than an older micro-USB cable. Confirm the current cable type in the listing before buying.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Purpose-built travel mouse with flexible connectivity", "Bluetooth Wireless Arc Travel Mouse"],
        ["Lowest price and maximum bag-space savings", "TECKNET Folding Wireless Mouse"],
        ["Expandable pocket-to-full-size design", "DELUX Wireless Bluetooth Pocket Mouse"],
        ["More ergonomic angle for occasional travel", "ProtoArc EM11 NL Wireless"],
        ["Small-hand-specific compact fit", "Luhaso Ergonomic Vertical Wireless Mouse"],
        ["Cheapest way to travel with zero dongle risk", "KUNSI Wired Ergonomic Mouse"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Accept that compactness reduces ergonomic benefit", explanation: "A compact vertical mouse may offer meaningfully less of the ergonomic advantage than a full-size one, since a smaller body usually means a shallower angle." },
  { criterion: "Verify genuine compactness, not marginal size reduction", explanation: "Check actual dimensions against standard-size vertical mice rather than assuming any product labeled 'travel' or 'compact' is significantly smaller." },
  { criterion: "Consider travel-specific durability", explanation: "A mouse that's repeatedly packed into a bag experiences different wear than one that sits permanently on a desk, so factor this into your choice." },
  { criterion: "Check charging cable type for travel convenience", explanation: "A USB-C charging cable is more likely to overlap with cables you already carry for other devices than an older micro-USB cable." },
  { criterion: "Confirm USB-A to USB-C dongle adapter needs", explanation: "If your laptop or tablet is USB-C only, a USB-A dongle mouse needs a separate adapter, which is one more small item to pack and potentially lose." },
];

export const faq: FaqItem[] = [
  { q: "Do compact vertical mice offer the same ergonomic benefit as full-size ones?", a: "Not always. Compactness often means a shallower angle and less hand support, so a compact vertical mouse may offer meaningfully less ergonomic benefit than a full-size one." },
  { q: "Are folding or sliding travel mice durable for frequent packing?", a: "Generally reasonable for occasional use, though moving parts like folding hinges or sliding mechanisms can wear over time with very frequent packing and unpacking." },
  { q: "Should I check the charging cable type before buying a travel mouse?", a: "Yes, a USB-C charging cable is more likely to overlap with cables you already pack for other devices than an older micro-USB cable, a real convenience factor." },
  { q: "Do I need an adapter for a USB-A travel mouse dongle on a USB-C laptop?", a: "Yes, unless the mouse uses Bluetooth or ships with a USB-C dongle, you'll need a separate USB-A to USB-C adapter." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-vertical-mice-for-laptops", title: "Best Vertical Mice for Laptops in 2026" },
  { href: "/guide/best-vertical-mice-for-small-hands", title: "Best Vertical Mice for Small Hands in 2026" },
  { href: "/guide/best-usb-c-vertical-mice", title: "Best USB-C Vertical Mice in 2026" },
];
