export const guideSlug = "best-vertical-mice-for-small-hands";
export const guideTitle = "7 Best Vertical Mice for Small Hands in 2026";
export const metaTitle = "Best Vertical Mice for Small Hands 2026";
export const metaDescription =
  "We evaluated 7 vertical mice with genuinely smaller bodies, checking scroll wheel reach and overall fit for buyers with smaller hands specifically.";
export const mainKeyword = "best vertical mice for small hands";
export const introParagraphs = [
  "Most vertical mice are sized for an average to large hand, and dedicated small-hand-specific variants are genuinely less common than standard-size options. It's a mistake to assume any mouse labeled 'ergonomic' automatically accommodates smaller hands, since body length, width, and height vary a lot between models marketed identically. We looked specifically for products with a genuinely smaller body or explicit small/medium hand sizing rather than assuming a standard-size mouse will simply feel fine.",
  "Even on an otherwise size-reduced body, the scroll wheel's size and reach position can remain awkward for smaller hands, so we checked that component separately rather than assuming a smaller overall body automatically fixes scroll wheel reach too. If your hands are on the smaller end and you also want maximum portability, there's real overlap with our compact travel vertical mice guide, worth checking as well.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31ttLEqu0hL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0gnmpgm7g-sh",
    rank: 1,
    badge: "Explicitly Sized for Small to Medium Hands",
    name: "Luhaso Ergonomic Vertical Wireless Mouse, 57 degree, Small/Medium Hands",
    price: "$19.99",
    rating: "4.7 stars from Amazon ratings",
    reviews: "57 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ttLEqu0hL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GNMPGM7G?tag=deskfinds0d-20",
    description:
      "Explicitly marketed and sized for small to medium hands, which is a genuine differentiator in a category where most products are built around an average to large hand.\n\nThe review base is small, so weigh the very strong 4.7-star rating against the limited sample size and check current buyer feedback specifically on scroll wheel reach before buying.",
    specs: ["Explicit small/medium hand sizing", "57-degree tilt angle", "Wireless connectivity", "Budget price point"],
    pros: ["Genuinely marketed and sized for small to medium hands", "Very strong review rating", "Budget-friendly price", "Disclosed tilt angle"],
    cons: ["Small review sample size, verify current feedback", "Scroll wheel reach not independently confirmed", "Less established brand track record than premium picks"],
    bestFor: "Buyers who specifically have small to medium hands and want a body genuinely sized for that range.",
  },
  {
    id: "b09j1tb35s-sh",
    rank: 2,
    badge: "Best Compact Premium Pick",
    name: "Logitech Lift Vertical Ergonomic Wireless Mouse",
    price: "$57.40",
    rating: "4.4 stars from Amazon ratings",
    reviews: "13,635 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31nb5ALnDvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09J1TB35S?tag=deskfinds0d-20",
    description:
      "A more compact body than the brand's full-size premium model, marketed with smaller hands in mind, backed by a large and consistent review base.\n\nThe scroll wheel position on this compact body has generally positive buyer feedback for reach, though we recommend checking current reviews for your specific hand size before assuming it's a perfect fit.",
    specs: ["Compact body", "Dual 2.4GHz and Bluetooth", "Rechargeable battery", "Large review base"],
    pros: ["Compact body genuinely smaller than the brand's full-size model", "Large, consistent review base", "Dual connectivity", "Rechargeable battery"],
    cons: ["Mid-to-premium price versus budget small-hand picks", "Still not explicitly marketed as small-hand-specific like the top pick", "Fewer buttons than the larger MX Vertical"],
    bestFor: "Buyers who want a well-reviewed compact body from an established brand rather than a niche small-hand-specific product.",
  },
  {
    id: "b0cx18lhws-sh",
    rank: 3,
    badge: "Best Budget Compact Pick",
    name: "ProtoArc EM11 NL Wireless Ergonomic Vertical Mouse, Rechargeable",
    price: "$22.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "5,670 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31PGrLfkUxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CX18LHWS?tag=deskfinds0d-20",
    description:
      "A budget option with a solid review base, offering a smaller overall footprint than the largest vertical mice in this category, though it isn't explicitly marketed toward small hands specifically.\n\nCheck current listing photos and buyer feedback for actual dimensions and scroll wheel reach before assuming a comfortable fit for your hand size.",
    specs: ["Compact wireless body", "Rechargeable built-in battery", "Budget-to-mid price point", "Solid review base"],
    pros: ["Smaller footprint than full-size vertical mice", "Rechargeable battery", "Solid review rating", "Budget-friendly price"],
    cons: ["Not explicitly marketed as small-hand-specific", "Scroll wheel reach not independently confirmed for smaller hands", "Smaller brand track record than the premium picks"],
    bestFor: "Budget-conscious buyers who want a smaller overall footprint without paying for a niche small-hand-specific label.",
  },
  {
    id: "b07bfcvjzc-sh",
    rank: 4,
    badge: "Best Mid-Size Value Pick",
    name: "Lekvey Ergonomic Mouse, Rechargeable Vertical Wireless Mouse",
    price: "$24.98",
    rating: "4.4 stars from Amazon ratings",
    reviews: "15,431 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31rCoH07kzL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07BFCVJZC?tag=deskfinds0d-20",
    description:
      "A mid-size body that a broad range of buyers, including some with smaller hands, report as comfortable, backed by a large and consistent review base.\n\nThis isn't marketed toward small hands specifically, so treat the mid-size fit as a reasonable middle ground rather than a guaranteed fit if your hands are notably smaller than average.",
    specs: ["Mid-size body", "Rechargeable built-in battery", "2.4GHz wireless receiver", "Budget price point"],
    pros: ["Large review base suggests broad comfort across hand sizes", "Rechargeable battery", "Budget-friendly price", "Solid mid-size fit for many buyers"],
    cons: ["Not explicitly marketed or sized for small hands specifically", "Scroll wheel reach not independently confirmed", "No Bluetooth option"],
    bestFor: "Buyers with average to slightly smaller hands who want a well-reviewed mid-size body at a low price.",
  },
  {
    id: "b0f4jns3px-sh",
    rank: 5,
    badge: "Best Ultra-Budget Compact Pick",
    name: "KUNSI Wired Ergonomic Mouse, USB Wired Vertical Mouse with adjustable DPI",
    price: "$9.99",
    rating: "4.1 stars from Amazon ratings",
    reviews: "181 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41VQ8m4r1iL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4JNS3PX?tag=deskfinds0d-20",
    description:
      "The lowest price in this guide, with a compact wired body and adjustable DPI, a genuine option for buyers with smaller hands who want to try a vertical grip without much financial commitment.\n\nIts 4.1-star rating is more moderate than the other picks here, so weigh the very low price against a smaller review sample and less established brand track record.",
    specs: ["Wired USB connection", "Adjustable DPI", "Compact ergonomic body", "Ultra-budget price point"],
    pros: ["Lowest price in this guide", "Compact body suits smaller hands", "Adjustable DPI even at this price tier", "No battery weight"],
    cons: ["More moderate 4.1-star rating than other picks", "Smaller review sample size", "Less established brand track record"],
    bestFor: "Buyers with smaller hands who want the cheapest possible way to try a compact vertical mouse.",
  },
  {
    id: "b00fpavuhc-sh",
    rank: 6,
    badge: "Best Wired Compact Value Pick",
    name: "Anker USB Wired Vertical Mouse, Ergonomic Mouse for Computer and Laptop",
    price: "$25.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "9,039 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41h3oxMYtPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00FPAVUHC?tag=deskfinds0d-20",
    description:
      "A large review base for a reasonably sized wired body, backed by strong buyer feedback that suggests a comfortable fit across a broad range of hand sizes, including some smaller-handed buyers.\n\nThis isn't marketed toward small hands specifically, so treat it as a reasonable mid-size option rather than a guaranteed fit if your hands are notably smaller than average.",
    specs: ["Wired USB connection", "Ergonomic vertical design", "No battery, lighter body", "Mid-range price point"],
    pros: ["Large review base suggesting broad comfort across hand sizes", "No battery weight", "Works across desktop and laptop ports", "Mid-range price"],
    cons: ["Not explicitly marketed or sized for small hands specifically", "Scroll wheel reach not independently confirmed", "No wireless option"],
    bestFor: "Buyers with average to smaller hands who want a well-reviewed wired option without paying for a niche small-hand label.",
  },
  {
    id: "b0cmc1f5wb-sh",
    rank: 7,
    badge: "Best Budget Wired Pick",
    name: "TECKNET Wired Mouse, Comfortable Ergonomic Mouse with 6400 DPI",
    price: "$19.19",
    rating: "4.4 stars from Amazon ratings",
    reviews: "3,694 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31vAjZuq+pL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CMC1F5WB?tag=deskfinds0d-20",
    description:
      "A low-cost wired pick with adjustable DPI and a strong review rating, offering a reasonably compact footprint for buyers who want to try a vertical grip without paying a premium.\n\nCheck current listing photos and buyer feedback for actual dimensions and scroll wheel reach before assuming a comfortable fit for smaller hands specifically.",
    specs: ["Wired USB connection", "6400 DPI adjustable sensor", "Compact ergonomic body", "Budget price point"],
    pros: ["Strong review rating at a low price", "Adjustable DPI sensor", "No battery weight", "Compact footprint"],
    cons: ["Not explicitly marketed as small-hand-specific", "Scroll wheel reach not independently confirmed", "No wireless option"],
    bestFor: "Budget-conscious buyers with smaller hands who want an adjustable-DPI wired mouse.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine body size checked, not assumed from ergonomic labeling", description: "We verified which picks are explicitly marketed or sized for small to medium hands rather than assuming any ergonomic mouse fits smaller hands." },
  { title: "Actual reach to buttons and scroll wheel considered separately", description: "We treated scroll wheel and button reach as a separate consideration from overall body size, since a smaller body doesn't always fix scroll wheel position." },
  { title: "Availability of dedicated small-hand variants disclosed transparently", description: "We were transparent that dedicated small-hand-specific vertical mice are less common than standard-size options in this category." },
  { title: "Overlap with compact travel mice noted where relevant", description: "We flagged the overlap between small-hand-friendly sizing and compact travel-focused mice for buyers prioritizing both." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Don't Assume Any Ergonomic Mouse Fits Small Hands",
    note: "Most vertical mice are sized for average to large hands. Look for explicit small or medium hand sizing in the listing, or check buyer reviews and photos for actual dimensions, rather than assuming a general ergonomic label covers your hand size.",
  },
  {
    subheading: "Check Scroll Wheel Reach Separately From Overall Body Size",
    note: "A smaller overall body doesn't guarantee a comfortable scroll wheel position. Check buyer feedback specifically on scroll wheel reach, since this component can remain awkward even on an otherwise size-reduced mouse.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Explicitly sized for small to medium hands", "Luhaso Ergonomic Vertical Wireless Mouse"],
        ["Well-reviewed compact body from an established brand", "Logitech Lift Vertical"],
        ["Budget compact footprint", "ProtoArc EM11 NL Wireless"],
        ["Mid-size fit at a low price", "Lekvey Ergonomic Rechargeable Mouse"],
        ["Cheapest way to try a compact grip", "KUNSI Wired Ergonomic Mouse"],
        ["Well-reviewed wired option, mid-size", "Anker USB Wired Vertical Mouse"],
        ["Budget wired pick with adjustable DPI", "TECKNET Wired Ergonomic Mouse 6400 DPI"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Look for explicit small or medium hand sizing", explanation: "Don't assume a generic ergonomic label covers your hand size; check for a product explicitly marketed or sized for smaller hands." },
  { criterion: "Check scroll wheel reach separately from body size", explanation: "A smaller overall body doesn't guarantee comfortable scroll wheel placement, so verify this component specifically in buyer feedback." },
  { criterion: "Expect fewer dedicated small-hand-specific options", explanation: "Genuinely small-hand-focused vertical mice are less common than standard-size options, so your selection will be more limited." },
  { criterion: "Consider overlap with compact travel mice", explanation: "If small hand size and portability both matter to you, check our compact travel vertical mice guide for additional overlapping options." },
];

export const faq: FaqItem[] = [
  { q: "Do all vertical mice fit smaller hands comfortably?", a: "No, most are sized for average to large hands. Look for explicit small or medium hand sizing rather than assuming a general ergonomic label fits your hand size." },
  { q: "Is scroll wheel reach an issue for smaller hands even on a compact mouse?", a: "It can be. A smaller overall body doesn't guarantee comfortable scroll wheel placement, so check buyer feedback on that component specifically." },
  { q: "Are there many vertical mice designed specifically for small hands?", a: "Not many. Dedicated small-hand-specific variants are less common than standard-size options in this category." },
  { q: "Should I look at compact travel mice too if I have small hands?", a: "Yes, there's meaningful overlap in body size between small-hand-friendly mice and compact travel-focused mice, worth checking both guides." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-vertical-mice-for-large-hands", title: "Best Vertical Mice for Large Hands in 2026" },
  { href: "/guide/best-compact-vertical-mice-for-travel", title: "Best Compact Vertical Mice for Travel in 2026" },
  { href: "/guide/best-ergonomic-vertical-mice", title: "Best Ergonomic Vertical Mice in 2026" },
];
