export const guideSlug = "best-compact-ergonomic-keyboards";
export const guideTitle = "4 Best Compact Ergonomic Keyboards in 2026";
export const metaTitle = "Best Compact Ergonomic Keyboards (2026)";
export const metaDescription =
  "4 compact ergonomic keyboards we evaluated for whether they retain genuine split benefit and how much you actually lose without a number pad or nav cluster.";
export const mainKeyword = "compact ergonomic keyboard";
export const introParagraphs = [
  "Compact ergonomic keyboards face the same core tension as portable ones, shrinking the footprint sometimes means sacrificing the split or tenting features that provide real ergonomic benefit, worth verifying whether a specific compact model retains genuine split design or is simply a smaller one-piece board. It's also worth separating two different tradeoffs, the functional loss of a number pad or navigation cluster is a distinct issue from any ergonomic design compromise, you may lose specific functionality in addition to, not instead of, ergonomic tradeoffs.",
  "Arrow key cluster size and placement usability is worth checking too, distinct from whether a number pad exists at all, and Fn-layer remapped functions like Home, End, Page Up, and Page Down vary a lot in how usable they feel from one compact keyboard to the next.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "logitech-wave-keys-graphite-compact",
    rank: 1,
    badge: "Best Overall Compact Pick",
    name: "Logitech Wave Keys Wireless Ergonomic Keyboard - Graphite",
    price: "$59.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "2,972 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTNY72VD?tag=deskfinds0d-20",
    description:
      "A one-piece wave keyboard with a more compact footprint than a fully split design, though it sacrifices the split's larger ergonomic benefit since the frame can't be positioned shoulder-width apart. It carries the largest verified review base among compact picks in this guide.\n\nCheck the current listing for its number pad and navigation cluster inclusion versus omission separately from its ergonomic tradeoff, since these are two distinct considerations for a small-desk buyer.",
    specs: ["One-piece wave frame, compact footprint", "Cushioned attached palm rest", "Bluetooth or USB receiver", "Largest verified review base here"],
    pros: ["Largest verified review base in this guide", "More compact than a fully split design", "Minimal adjustment period", "Reliable multi-device wireless"],
    cons: ["Less ergonomic benefit than a true split for the compactness gained", "Verify number pad/nav cluster inclusion on current listing", "Cannot be positioned shoulder-width apart"],
    bestFor: "Small-desk buyers who want the most reviewed compact ergonomic keyboard",
  },
  {
    id: "logitech-wave-keys-rose-compact",
    rank: 2,
    badge: "Best Color Alternative Compact Pick",
    name: "Logitech Wave Keys Wireless Ergonomic Keyboard - Rose",
    price: "$59.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "2,972 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/418t+cQnsOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BTNZWYT5?tag=deskfinds0d-20",
    description:
      "The identical Wave Keys hardware as the Graphite pick above, in a Rose colorway for buyers who want the same compact footprint in a different finish. The same tradeoffs apply, compact one-piece design over full split ergonomic benefit.\n\nSame functional considerations as the Graphite version regarding number pad and navigation cluster, verify the current listing before assuming inclusion.",
    specs: ["One-piece wave frame, compact footprint", "Rose colorway", "Cushioned attached palm rest", "Bluetooth or USB receiver"],
    pros: ["Same compact footprint as the Graphite version", "Distinct Rose colorway option", "Minimal adjustment period", "Solid review base"],
    cons: ["Less ergonomic benefit than a true split for the compactness gained", "Verify number pad/nav cluster inclusion on current listing", "Cannot be positioned shoulder-width apart"],
    bestFor: "Buyers who want the same compact Wave Keys design in a different colorway",
  },
  {
    id: "arteck-split-2-4g-compact",
    rank: 3,
    badge: "Best Compact Split Pick",
    name: "Arteck Split Ergonomic Keyboard with Palm Rest, 2.4G USB Wireless",
    price: "$54.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "1,624 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BKKYRQ31?tag=deskfinds0d-20",
    description:
      "A genuinely split keyboard that still keeps a relatively compact combined footprint compared to full-size split alternatives, retaining more real ergonomic benefit than the one-piece wave picks above. Its built-in cushioned palm rest avoids a separate accessory purchase.\n\nVerify current listings for arrow key cluster size and Fn-layer remapped function usability, since these vary independently of whether the keyboard has a full number pad.",
    specs: ["Split, angled key layout, compact combined footprint", "Built-in cushioned palm rest", "2.4G USB wireless receiver", "Retains genuine split ergonomic benefit"],
    pros: ["True split layout retains stronger ergonomic benefit", "Built-in palm rest, no extra purchase", "Stable 2.4G connection", "Mid-range price for the design"],
    cons: ["Larger combined footprint than a one-piece compact design", "Fixed split angle, not tenting-adjustable", "Verify arrow key and Fn-layer usability on current listing"],
    bestFor: "Buyers who want genuine split ergonomic benefit while still keeping a relatively compact footprint",
  },
  {
    id: "perixx-periduo-606ii-compact",
    rank: 4,
    badge: "Best 2-in-1 Compact Pick",
    name: "Perixx PERIDUO-606II 2-in-1 Wireless Compact Ergonomic Keyboard",
    price: "$69.99",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/3120zwwhcDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GMQMKVKF?tag=deskfinds0d-20",
    description:
      "A 2-in-1 compact keyboard design, high-rated though with a smaller review count, worth weighing that sample size against the larger-review picks above. Its compact footprint is purpose-built for small-desk use, verify the current listing for exactly what's integrated into the 2-in-1 design.\n\nAs with the other compact picks, check number pad and navigation cluster presence separately from ergonomic layout, since a 2-in-1 design may make different tradeoffs than a standard compact keyboard.",
    specs: ["2-in-1 compact ergonomic design", "Highest rating among compact picks here", "Wireless connectivity", "Purpose-built small-desk footprint"],
    pros: ["Highest rating of any pick in this guide", "Purpose-built compact footprint", "2-in-1 design consolidates functionality", "Distinctive small-desk-focused product"],
    cons: ["Smaller review sample size, verify current feedback", "Verify exact 2-in-1 functionality on current listing", "Higher price than some compact alternatives"],
    bestFor: "Small-desk buyers wanting a purpose-built 2-in-1 compact design, comfortable with a smaller review sample",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine split retention vs. simple compactness", description: "Verified whether each compact keyboard retains real split or tenting benefit or is simply a smaller one-piece board, the same tension as the portability guide." },
  { title: "Functional loss separate from ergonomic tradeoff", description: "Addressed the functional loss of a number pad or navigation cluster as a distinct consideration from any ergonomic design compromise, since buyers may lose both." },
  { title: "Arrow key cluster usability", description: "Considered arrow key cluster size and placement usability separately from whether a number pad exists at all." },
  { title: "Fn-layer remapped function usability", description: "Noted that Home, End, Page Up, and Page Down usability via the Fn layer varies meaningfully across compact implementations." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Compactness Often Costs Some Ergonomic Benefit",
    note: "The same tension that affects portable keyboards applies to compact ones, shrinking the footprint can mean sacrificing split or tenting features. Verify whether a specific compact model retains genuine split design or is simply a smaller one-piece board before assuming equal ergonomic benefit.",
  },
  {
    subheading: "Functional Loss Is a Separate Issue from Ergonomic Tradeoff",
    note: "Losing a number pad or navigation cluster is a distinct functional tradeoff from any ergonomic design compromise, you may lose specific functionality in addition to ergonomic tradeoffs, not instead of them. Check both independently before buying.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most reviewed compact one-piece option", "Logitech Wave Keys Graphite"],
        ["Same design, different colorway", "Logitech Wave Keys Rose"],
        ["Genuine split benefit in a compact footprint", "Arteck Split Ergonomic 2.4G"],
        ["Purpose-built 2-in-1 small-desk design", "Perixx PERIDUO-606II"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify whether compactness sacrifices genuine split benefit", explanation: "A smaller footprint sometimes means losing the split or tenting features that provide real ergonomic benefit, check which type of compact keyboard you're buying." },
  { criterion: "Separate functional loss from ergonomic tradeoff", explanation: "Losing a number pad or nav cluster is a distinct issue from any ergonomic compromise, you may face both, not one instead of the other." },
  { criterion: "Check arrow key cluster usability specifically", explanation: "Arrow key size and placement varies independently of whether a number pad exists, worth checking if you rely on arrow key navigation." },
  { criterion: "Verify Fn-layer remapped function usability", explanation: "Home, End, Page Up, and Page Down usability through the Fn layer varies a lot between compact implementations, check current buyer feedback before assuming smooth remapping." },
];

export const faq: FaqItem[] = [
  { q: "Do compact ergonomic keyboards sacrifice ergonomic benefit?", a: "Sometimes, shrinking the footprint can mean losing the split or tenting features that provide real ergonomic benefit, verify whether a specific model retains genuine split design." },
  { q: "Will I lose my number pad with a compact ergonomic keyboard?", a: "Often yes, this is a separate functional tradeoff from any ergonomic design compromise, check both independently on the current listing." },
  { q: "Are arrow keys usable on a compact ergonomic keyboard?", a: "It varies, arrow key cluster size and placement is a separate consideration from number pad presence, worth checking specifically if you rely on arrow key navigation." },
  { q: "Do Fn-layer shortcuts work well on compact keyboards?", a: "Usability varies a lot by implementation, check current buyer feedback on Home, End, Page Up, and Page Down remapping before assuming a smooth experience." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ergonomic-keyboards", title: "Best Portable Ergonomic Keyboards (2026)" },
  { href: "/guide/best-ergonomic-keyboards-for-small-hands", title: "Best Ergonomic Keyboards for Small Hands (2026)" },
  { href: "/guide/best-tkl-ergonomic-keyboards", title: "Best TKL Ergonomic Keyboards (2026)" },
];
