const BASE = "/images/guides/best-under-desk-footrests";

export const guideSlug = "best-under-desk-footrests";
export const guideTitle = "8 Best Under-Desk Footrests (2026)";
export const metaTitle = "Best Under-Desk Footrests 2026";
export const metaDescription =
  "Best under-desk footrests in 2026. Memory foam, rocker, bamboo, and mesh models ranked by Amazon rating and verified buyer review count to help you pick the right footrest for your desk setup.";
export const lastUpdated = "2026-07-08";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "everlasting-comfort",
    rank: 1,
    badge: "Best Overall",
    name: "Everlasting Comfort Foot Rest Cushion",
    price: "$29.99",
    rating: "4.5 stars",
    reviews: "22,247 reviews",
    imageUrl: `${BASE}/everlasting-comfort.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07D9ZC5ZG?tag=deskfinds0d-20",
    description:
      "The Everlasting Comfort footrest combines premium memory foam with a non-slip base and washable velvet cover, providing consistent support without flattening under sustained use. The high-density foam maintains its shape better than standard pillow foam alternatives.\n\nAt $29.99 it is the top foam pick for most users. The pure memory foam design suits users who prioritize comfort for extended sessions over active rocking motion.",
    specs: ["Pure memory foam", "Non-slip bottom", "Washable velvet cover", "Ergonomic angle"],
    pros: ["Washable velvet cover included", "Pure memory foam comfort", "Non-slip base", "Ergonomic angle"],
    cons: ["No height adjustment", "No rocking motion", "Foam compresses over months"],
    bestFor: "Users who want a premium memory foam footrest with washable cover for all-day desk comfort",
  },
  {
    id: "comfilife",
    rank: 2,
    badge: "Best Foam Wedge",
    name: "ComfiLife Foot Rest Under Desk",
    price: "$24.99",
    rating: "4.5 stars",
    reviews: "16,083 reviews",
    imageUrl: `${BASE}/comfilife.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08M8ZB9YV?tag=deskfinds0d-20",
    description:
      "The ComfiLife foot rest uses a high-density memory foam wedge design with a removable cover and anti-slip bottom. The wedge angle promotes natural foot positioning and has earned over 16,000 verified Amazon reviews.\n\nAt $24.99 it is the more affordable premium foam option. Users who prefer a wedge-angled surface rather than a flat foam pad will find the ComfiLife design more supportive for the natural foot angle.",
    specs: ["Memory foam wedge", "Removable cover", "Anti-slip bottom", "Ergonomic wedge angle"],
    pros: ["16,083 reviews", "Wedge angle for natural foot position", "Removable cover", "Under $25"],
    cons: ["No height adjustment", "No rocking motion", "Fixed wedge angle"],
    bestFor: "Users who want a premium memory foam wedge footrest at a lower price than the top pick",
  },
  {
    id: "huanuo-adjustable",
    rank: 3,
    badge: "Best Adjustable Height",
    name: "HUANUO Under Desk Footrest",
    price: "$34.99",
    rating: "4.4 stars",
    reviews: "10,825 reviews",
    imageUrl: `${BASE}/huanuo-adjustable.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07Q35Z4BL?tag=deskfinds0d-20",
    description:
      "The HUANUO under-desk footrest provides two height settings and an angle-adjustable platform with a massage-ball surface for improved circulation. The dual height settings accommodate both standard desk chairs and higher drafting chairs.\n\nAt $34.99 it is the standard reference pick for adjustable footrests. Users who switch between different chair heights benefit most from the height adjustment and massage surface combination.",
    specs: ["2 height settings", "Angle adjustable", "Massage ball surface", "Non-slip"],
    pros: ["10,825 reviews", "Two height settings", "Massage surface", "Angle adjustable"],
    cons: ["$34.99 higher than foam picks", "Massage balls may be uncomfortable", "Plastic construction"],
    bestFor: "Users who need height adjustment and massage surface for circulation during long desk sessions",
  },
  {
    id: "ergofoam-xl",
    rank: 4,
    badge: "Best XL Size",
    name: "ErgoFoam Adjustable Foot Rest Under Desk XL",
    price: "$39.99",
    rating: "4.4 stars",
    reviews: "4,234 reviews",
    imageUrl: `${BASE}/ergofoam-xl.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08H4JJ6MB?tag=deskfinds0d-20",
    description:
      "The ErgoFoam XL provides the largest foam footrest surface area in this roundup, featuring two height settings and a plush knit cover over memory foam. The XL dimensions accommodate larger feet and users who need more surface coverage than standard footrests.\n\nAt $39.99 the ErgoFoam XL is the premium-sized foam pick for users with larger footprints or who prefer spreading feet wider when working.",
    specs: ["XL size larger surface", "Memory foam", "2 height settings", "Plush knit cover"],
    pros: ["Largest surface area", "Two height settings", "Memory foam comfort", "Plush cover"],
    cons: ["$39.99 higher price", "4,234 reviews fewer than budget options", "No rocking"],
    bestFor: "Users with larger feet or those who want the widest possible foam footrest surface",
  },
  {
    id: "strongtek-wood",
    rank: 5,
    badge: "Best Wood Rocker",
    name: "StrongTek Ergonomic Wood Foot Rest",
    price: "$39.99",
    rating: "4.7 stars",
    reviews: "3,135 reviews",
    imageUrl: `${BASE}/strongtek-wood.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07N1QCJGZ?tag=deskfinds0d-20",
    description:
      "The StrongTek cherry wood footrest is the highest-rated footrest in this roundup at 4.7 stars, featuring a rocker balance board design for active movement while sitting. The cherry wood construction provides durability that foam alternatives cannot match.\n\nFor users who prefer a wood footrest with active balance board movement, the StrongTek is the established market leader in this sub-category.",
    specs: ["Cherry wood", "Rocker balance board", "350 lb capacity", "18 inches wide"],
    pros: ["4.7 stars highest in roundup", "Active rocking motion", "Cherry wood durability", "No assembly"],
    cons: ["No foam cushioning", "Hard surface for bare feet", "Fixed height"],
    bestFor: "Users who want an active balance-board wood footrest with the highest rating in the category",
  },
  {
    id: "blistrends",
    rank: 6,
    badge: "Best Budget",
    name: "BLISTRENDS Foot Rest Under Desk",
    price: "$18.99",
    rating: "4.3 stars",
    reviews: "2,141 reviews",
    imageUrl: `${BASE}/blistrends.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BGS4C3T9?tag=deskfinds0d-20",
    description:
      "The BLISTRENDS foot rest provides memory foam support with a washable cover at the lowest price in this roundup. At $18.99 it is the entry-level foam footrest for users who want basic memory foam comfort without spending on premium brands.\n\nWith over 2,100 reviews and a 4.3-star rating, it demonstrates strong value despite the budget price point. Users who are unsure if they need a footrest can test one at minimal investment.",
    specs: ["Memory foam", "Washable cover", "Anti-slip base", "Ergonomic design"],
    pros: ["Under $20", "Memory foam included", "Washable cover", "Entry-level pick"],
    cons: ["4.3 stars lowest in foam category", "2,141 reviews fewer than top models", "Budget foam density"],
    bestFor: "Users who want to try an under-desk footrest at the lowest price before committing to a premium model",
  },
  {
    id: "casazenith",
    rank: 7,
    badge: "Best Rocking Foam",
    name: "CasaZenith Foot Rest Under Desk Rocking",
    price: "$32.99",
    rating: "4.4 stars",
    reviews: "1,427 reviews",
    imageUrl: `${BASE}/casazenith.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0B6B1DRMY?tag=deskfinds0d-20",
    description:
      "The CasaZenith rocking footrest combines memory foam cushioning with a curved rocker base, providing the comfort of foam alongside the active movement of a rocker design. The combination is less common in this category and suits users who want both features without switching between products.\n\nAt $32.99 it is priced between budget foam and premium adjustable picks. For users who want active foot movement with foam softness, the CasaZenith is the direct option.",
    specs: ["Memory foam on rocker base", "Non-slip strips", "Removable cover", "Rocking + static modes"],
    pros: ["Foam comfort with rocking motion", "Removable cover", "Unique combination", "Mid-range price"],
    cons: ["1,427 reviews smaller sample", "Rocking on hard floors may slide", "4.4 stars"],
    bestFor: "Users who want memory foam cushioning and active rocking motion in a single under-desk footrest",
  },
  {
    id: "ergofoam-standard",
    rank: 8,
    badge: "Best Mesh Top",
    name: "ErgoFoam Foot Rest Under Desk Standard",
    price: "$27.99",
    rating: "4.4 stars",
    reviews: "4,234 reviews",
    imageUrl: `${BASE}/ergofoam-standard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07P8YJFZL?tag=deskfinds0d-20",
    description:
      "The ErgoFoam standard model features a breathable mesh top surface rather than velvet or knit, which is the main differentiation from other foam footrests. For users in warmer environments or who prefer mesh over fabric, the breathable surface is a meaningful practical difference.\n\nAt $27.99 it sits between budget and premium in price, offering the specific benefit of a breathable mesh surface over memory foam.",
    specs: ["Memory foam", "Mesh top surface", "Non-slip base", "Two height positions"],
    pros: ["Breathable mesh top", "Memory foam comfort", "Two height positions", "4,234 reviews"],
    cons: ["Mesh may feel less cushioned", "4.4 stars vs 4.5 for top picks", "Mid-range price"],
    bestFor: "Users in warm environments who want a breathable mesh surface on a memory foam footrest",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What height should an under-desk footrest be?",
    a: "The ideal footrest height places your feet flat while your knees sit at or below hip level. For most standard desk chairs, a footrest between 3 and 5 inches supports the natural seated posture. Taller users or users on drafting chairs may need 6 to 9 inches.",
  },
  {
    q: "Is a rocking footrest or flat footrest better?",
    a: "Rocking footrests encourage subtle active movement that improves circulation during long sitting sessions. Flat foam footrests provide consistent cushioned support with no movement. Users who fidget or have circulation issues often prefer rocking. Users who want stable support without movement prefer flat foam.",
  },
  {
    q: "Do under-desk footrests actually help with back pain?",
    a: "Footrests that bring your feet to a comfortable flat position can reduce lower back strain by supporting proper posture alignment. When feet dangle without support, the hip angle changes and increases lumbar pressure. A footrest is not a cure for back pain but it removes one common ergonomic stressor.",
  },
  {
    q: "How do I keep an under-desk footrest from sliding?",
    a: "Look for footrests with non-slip rubber bases or anti-slip strips on the bottom. On smooth hard floors, foam footrests with rubber bases hold better than wood rockers. If sliding remains a problem, placing a desk mat under both your chair and footrest creates a unified non-slip zone.",
  },
  {
    q: "How long does a memory foam footrest last?",
    a: "Memory foam footrests typically maintain their shape for 12 to 24 months with daily use before noticeable compression occurs. Premium high-density foam lasts longer than budget foam. Rotating the footrest periodically extends useful life by distributing compression across the surface.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests (2026)" },
  { href: "/guide/best-rocking-footrests-under-desk", title: "Best Rocking Footrests Under Desk (2026)" },
  { href: "/guide/best-wooden-footrests-for-desk", title: "Best Wooden Footrests for Desk (2026)" },
  { href: "/guide/best-under-desk-footrests-for-short-people", title: "Best Under-Desk Footrests for Short People (2026)" },
];
