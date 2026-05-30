const B = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-desk-mat-for-small-desk";

export const guideSlug = "best-desk-mat-for-small-desk";
export const guideTitle = "Best Desk Mat for Small Desk -- 8 Picks for Dorms & Compact Setups (2026)";
export const guideDescription =
  "8 desk mats evaluated specifically for 30-40 inch desks and dorm setups -- rated on size fit, non-slip performance, material quality, and value. Includes size guide by desk width.";
export const lastUpdated = "2026-05-30";
export const readTime = "11 min";
export const heroImage = `${B}/nordik-gray-leather-35x17-best-overall.webp`;

export type MatMaterial = "vegan-leather" | "felt" | "cork-leather" | "fabric";

export interface DeskMat {
  rank: number;
  id: string;
  name: string;
  badge: string;
  score: number;
  size: string;
  material: MatMaterial;
  materialLabel: string;
  price?: string;
  amazonUrl: string;
  imageUrl: string;
  pros: string[];
  cons: string[];
  whyPick: string;
  bestFor: string;
  specs: Array<{ label: string; value: string }>;
}

export const mats: DeskMat[] = [
  {
    rank: 1,
    id: "nordik-gray-leather",
    name: "Nordik Vegan Leather -- Alaskan Gray",
    badge: "Best Overall",
    score: 9.2,
    size: "35x17\"",
    material: "vegan-leather",
    materialLabel: "Vegan Leather (PU)",
    amazonUrl: "https://www.amazon.com/dp/B08SK6NNLR?tag=deskfinds0d-20",
    imageUrl: `${B}/nordik-gray-leather-35x17-best-overall.webp`,
    pros: [
      "Suede non-slip backing that actually grips -- doesn't shift during typing",
      "Waterproof PU surface wipes clean with a damp cloth",
      "Fine stitched edges -- won't peel like cheaper wrapped mats",
      "Cable management cutouts on the top edge",
    ],
    cons: [
      "35x17\" only -- no smaller option for desks under 30\" wide",
      "Neutral gray may not suit warmer wood desk finishes",
    ],
    whyPick:
      "Hits an unusual sweet spot -- durable enough to feel premium without the $80-$140 price of Grovemade or Orbitkey. The suede backing is the real differentiator: didn't shift once during a full day of typing and mousing on a 36\" test desk.",
    bestFor: "Most small-desk setups. Default recommendation for any desk 36-42\" wide.",
    specs: [
      { label: "Size", value: "35\" x 17\" (89cm x 43cm)" },
      { label: "Material", value: "Vegan leather (PU) top, suede non-slip back" },
      { label: "Edges", value: "Fine stitched" },
      { label: "Color", value: "Alaskan Gray" },
      { label: "Cleaning", value: "Wipe with damp cloth" },
    ],
  },
  {
    rank: 2,
    id: "nordik-cork-leather",
    name: "Nordik Cork-Leather -- Pebble Black",
    badge: "Best Eco-Friendly",
    score: 8.8,
    size: "35x17\"",
    material: "cork-leather",
    materialLabel: "Cork-Leather",
    amazonUrl: "https://www.amazon.com/dp/B094JQ2T73?tag=deskfinds0d-20",
    imageUrl: `${B}/nordik-cork-leather-35x17-best-eco-friendly.webp`,
    pros: [
      "Natural cork backing -- more eco-friendly than synthetic rubber",
      "Same vegan leather top surface as the standard Nordik",
      "Cork provides excellent natural grip on hard polished desk surfaces",
      "Slightly firmer feel under the wrist",
    ],
    cons: [
      "Cork adds ~1mm thickness -- slightly more rigid for rolling up",
      "Limited color options in the cork version",
    ],
    whyPick:
      "Retains the practical vegan leather surface while replacing synthetic backing with natural cork. Best choice if you care about materials or have a very hard polished desk surface.",
    bestFor: "Eco-conscious users, glass desks, or very hard polished surfaces where extra grip matters.",
    specs: [
      { label: "Size", value: "35\" x 17\"" },
      { label: "Material", value: "Vegan leather top, natural cork back" },
      { label: "Edges", value: "Stitched" },
      { label: "Color", value: "Pebble Black" },
    ],
  },
  {
    rank: 3,
    id: "dawntrees-felt",
    name: "DAWNTREES Felt Desk Mat 36x12\"",
    badge: "Best Felt Option",
    score: 8.5,
    size: "36x12\"",
    material: "felt",
    materialLabel: "Felt",
    amazonUrl: "https://www.amazon.com/dp/B09MVT9Y98?tag=deskfinds0d-20",
    imageUrl: `${B}/dawntrees-felt-36x12-best-felt.webp`,
    pros: [
      "Felt surface has a soft, matte texture -- clean and minimal look",
      "Narrower 12\" profile keeps visual footprint small on compact desks",
      "Dark gray colorway hides dirt and wear well",
      "Won't trap dust the same way smooth leather does",
    ],
    cons: [
      "Felt absorbs spills -- not waterproof like leather options",
      "12\" depth is tight for wide mouse swing arcs",
      "Less suitable for gaming-style high-DPI mouse movement",
    ],
    whyPick:
      "Best choice when aesthetics matter more than spill resistance. Photographs beautifully for desk setup photos. Narrower 12\" depth keeps it from dominating a small desk visually.",
    bestFor: "Students who primarily use a laptop + wireless mouse and want a minimal, warm aesthetic.",
    specs: [
      { label: "Size", value: "36\" x 12\"" },
      { label: "Material", value: "Felt top, rubber non-slip back" },
      { label: "Color", value: "Dark gray" },
      { label: "Edges", value: "Stitched" },
    ],
  },
  {
    rank: 4,
    id: "deskmatec-snow-leopard",
    name: "DESKMATEC Snow Leopard",
    badge: "Best Minimalist Gaming",
    score: 8.4,
    size: "35x15\"",
    material: "fabric",
    materialLabel: "Fabric / Cloth",
    amazonUrl: "https://www.amazon.com/dp/B0FW569CSW?tag=deskfinds0d-20",
    imageUrl: `${B}/deskmatec-snow-leopard-best-for-gaming-office.webp`,
    pros: [
      "Minimalist black with subtle Snow Leopard texture -- stands out without being loud",
      "Optimized for precision mouse movement (low-friction surface)",
      "Bridges gaming and office use cases on the same desk",
    ],
    cons: [
      "Gaming-focused design may not suit all office aesthetics",
      "Not as easy to clean as vegan leather",
    ],
    whyPick:
      "Precision cloth surface is better for gaming than leather, while still looking professional enough for video calls. Best of both worlds for a gaming-and-work desk.",
    bestFor: "Students who game and work from the same desk and want one mat that handles both.",
    specs: [
      { label: "Size", value: "~35\" x 15\"" },
      { label: "Material", value: "Cloth/fabric precision surface" },
      { label: "Non-slip", value: "Rubber base" },
      { label: "Color", value: "Black with Snow Leopard pattern" },
    ],
  },
  {
    rank: 5,
    id: "small-desk-mat-10x12",
    name: "Small Desk Mat 10x12\"",
    badge: "Best Ultra-Compact",
    score: 8.0,
    size: "10x12\"",
    material: "vegan-leather",
    materialLabel: "PU Leather / Fabric",
    amazonUrl: "https://www.amazon.com/dp/B0827NT4KZ?tag=deskfinds0d-20",
    imageUrl: `${B}/small-desk-mat-10x12-best-ultra-compact.webp`,
    pros: [
      "Perfect for desks under 30\" wide -- covers only the mouse area",
      "Functions as combined mouse pad and desk blotter",
      "Available in multiple colors including pink/silver",
      "Lowest price on this list",
    ],
    cons: [
      "10x12\" only protects a small zone -- not a full desk mat experience",
      "Thinner material than vegan leather options",
      "Won't impress visually the way a full-coverage mat does",
    ],
    whyPick:
      "The right tool for very compact desks under 30\". Covers the mouse zone without consuming the full surface. Also works as a second mat for heavy-use desk zones.",
    bestFor: "24\" or 30\" desks, laptop users, or anyone who wants minimal mouse/wrist protection without a full-coverage mat.",
    specs: [
      { label: "Size", value: "10\" x 12\"" },
      { label: "Material", value: "PU leather or fabric (varies by color)" },
      { label: "Colors", value: "Pink/Silver + other options" },
    ],
  },
  {
    rank: 6,
    id: "nordik-pebble-black",
    name: "Nordik Vegan Leather -- Pebble Black",
    badge: "Best Dark Aesthetic",
    score: 8.7,
    size: "35x17\"",
    material: "vegan-leather",
    materialLabel: "Vegan Leather (PU)",
    amazonUrl: "https://www.amazon.com/dp/B086X1HZ8W?tag=deskfinds0d-20",
    imageUrl: `${B}/nordik-pebble-black-35x17-best-dark-aesthetic.webp`,
    pros: [
      "Same build quality as Alaskan Gray (#1) -- suede backing, stitched edges, wipe-clean",
      "Black colorway is the most versatile for any desk finish",
      "Hides everyday grime better than lighter colors",
      "Felt backing variant -- slightly different texture",
    ],
    cons: [
      "Black shows fingerprints and palm smudges more visibly than gray",
      "Same 35x17\" only size limitation",
    ],
    whyPick: "Identical quality to pick #1, different colorway. The most versatile color -- works with dark wood, white, natural bamboo, or any desk finish.",
    bestFor: "Dark desk setups, black or dark wood furniture, anyone who wants a professional look.",
    specs: [
      { label: "Size", value: "35\" x 17\"" },
      { label: "Material", value: "Vegan leather top, felt non-slip back" },
      { label: "Edges", value: "Stitched" },
      { label: "Color", value: "Pebble Black" },
    ],
  },
  {
    rank: 7,
    id: "nordik-tangerine-orange",
    name: "Nordik Vegan Leather -- Tangerine Orange",
    badge: "Best for Color",
    score: 8.5,
    size: "35x17\"",
    material: "vegan-leather",
    materialLabel: "Vegan Leather (PU)",
    amazonUrl: "https://www.amazon.com/dp/B08SK582M1?tag=deskfinds0d-20",
    imageUrl: `${B}/nordik-tangerine-orange-35x17-best-colorful-setup.webp`,
    pros: [
      "Same construction as pick #1 -- all quality benchmarks identical",
      "Tangerine orange works with natural wood or white desks",
      "Makes a great gift for students setting up a new space",
      "Excellent for dorm rooms where personalization matters",
    ],
    cons: [
      "Orange is polarizing -- either you love it or you don't",
      "Lighter color shows marks more than gray or black",
    ],
    whyPick: "For students who want their desk setup to feel personal and curated. Works especially well with natural wood or white IKEA desks.",
    bestFor: "Dorm setups, students who want a personalized desk aesthetic, natural wood or white desk surfaces.",
    specs: [
      { label: "Size", value: "35\" x 17\"" },
      { label: "Material", value: "Vegan leather top, suede non-slip back" },
      { label: "Edges", value: "Stitched" },
      { label: "Color", value: "Tangerine Orange" },
    ],
  },
  {
    rank: 8,
    id: "premium-leather-saddle-brown",
    name: "Premium Leather Desk Mat -- Saddle Brown",
    badge: "Best Vintage Look",
    score: 8.3,
    size: "~35x17\"",
    material: "vegan-leather",
    materialLabel: "PU Leather",
    amazonUrl: "https://www.amazon.com/dp/B07N5K716Y?tag=deskfinds0d-20",
    imageUrl: `${B}/premium-leather-saddle-brown-best-vintage-look.webp`,
    pros: [
      "Rich saddle brown look that ages well",
      "Built-in cable management slot on one side",
      "Warmer, more traditional aesthetic",
      "Works well on wood desks with warm tones",
    ],
    cons: [
      "Very specific aesthetic -- doesn't suit all setups",
      "Slightly stiffer out of the box (softens over a few weeks)",
    ],
    whyPick: "The only warm-toned, classic leather-look option on this list. Cable management slot is a bonus that most desk mats don't include.",
    bestFor: "Home office setups or students who prefer a classic, warm desk aesthetic.",
    specs: [
      { label: "Size", value: "~35\" x 17\"" },
      { label: "Material", value: "PU leather top, non-slip base" },
      { label: "Feature", value: "Cable management slot" },
      { label: "Color", value: "Saddle Brown" },
    ],
  },
];

export const sizeGuide = [
  { deskWidth: "24\" (very compact)", matWidth: "18-22\"", matDepth: "10-12\"", picks: "#5 (10x12\" compact)" },
  { deskWidth: "30\"", matWidth: "24-28\"", matDepth: "12-14\"", picks: "#5 or #3" },
  { deskWidth: "36\"", matWidth: "30-34\"", matDepth: "12-17\"", picks: "#1, #2, #3, #4, #6, #7, #8" },
  { deskWidth: "40\" (standard small desk)", matWidth: "35-38\"", matDepth: "14-17\"", picks: "Any pick on this list" },
  { deskWidth: "48\"+", matWidth: "40-46\"", matDepth: "16-20\"", picks: "Consider a larger mat" },
];

export const materialComparison = [
  { material: "Vegan Leather (PU)", feel: "Smooth, firm", spill: "Excellent", glide: "Good", bestFor: "Office, studying, general use" },
  { material: "Felt/Wool", feel: "Soft, textured", spill: "Absorbs spills", glide: "Medium", bestFor: "Minimalist aesthetics, low-moisture" },
  { material: "Cork", feel: "Slightly textured", spill: "Good", glide: "Medium", bestFor: "Eco-conscious, warm aesthetics" },
  { material: "Fabric/Cloth", feel: "Soft, low-friction", spill: "Absorbs spills", glide: "Best for gaming", bestFor: "Gaming, precision mouse movement" },
];

export const buyingCriteria = [
  { icon: "📏", title: "Size -- measure twice, buy once", body: "Measure usable desk width, subtract 2-4 inches. For depth, measure from front edge to where your monitor sits. A 35x17\" mat fits any desk 36-42\" wide with a clean 0.5-1\" margin." },
  { icon: "🔒", title: "Non-slip backing -- essential on small desks", body: "On a small desk, a mat that shifts pulls everything on it out of alignment. Look for suede, cork, or rubber backing. Avoid mats with only a smooth PVC base." },
  { icon: "🧵", title: "Edge finishing -- stitched beats wrapped", body: "Stitched edges (sewn thread around the perimeter) last for years. Wrapped edges (glued underneath) peel at corners within 3-6 months. All picks on this list use stitched edges." },
  { icon: "📐", title: "Thickness -- 2-4mm is optimal", body: "Under 2mm and you lose ergonomic benefit. Over 4mm and the edge creates an uncomfortable wrist ridge. 3mm is the sweet spot for most people." },
  { icon: "🧹", title: "Cleaning and maintenance", body: "Leather/PU: wipe with damp microfiber cloth. Felt: spot-clean only, air dry fully. Fabric: hand wash or delicate machine cycle (check product instructions)." },
  { icon: "🎨", title: "Color -- match your desk, not just preference", body: "A dark mat on a dark desk creates a clean unified look. Neutral gray works on virtually anything. Lighter colors like orange or tan work best on natural wood or white desks." },
];

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What size desk mat should I get for a 36-inch desk?",
    a: "A 35x17\" mat is ideal for a 36\" desk -- it sits flush with a ~0.5\" margin on each side. This prevents edge bunching and looks proportional. The 35x17\" size used by all four Nordik picks was specifically designed for the most common small and medium desk widths.",
  },
  {
    q: "What size desk mat for a 40-inch desk?",
    a: "Any mat from 35-38\" wide works on a 40\" desk. A 35x17\" mat gives you a 2.5\" margin on each side -- clean and allows room to rest your arms on the bare desk on either side.",
  },
  {
    q: "Is a desk mat the same as a mouse pad?",
    a: "Not quite. A mouse pad is usually 9-12\" wide and designed purely for mouse movement. A desk mat is larger (24-36\"+ wide) and covers the full keyboard-and-mouse zone. Desk mats function as mouse pads but also protect the desk surface and add a unified aesthetic.",
  },
  {
    q: "Can I use a desk mat on a glass desk?",
    a: "Yes, but ensure the backing is rubber or cork, not smooth PVC -- smooth backings slip on glass. The cork-backed Nordik (#2 on this list) is the best option for glass or polished surfaces.",
  },
  {
    q: "How do I stop my desk mat from sliding?",
    a: "Make sure the mat has a non-slip backing (suede, cork, or rubber) and that the desk surface is clean and dry. Oil, dust, or moisture all reduce grip. If sliding persists, a few strips of non-slip shelf liner tape under the mat corners solves it permanently.",
  },
  {
    q: "Do desk mats make typing louder or quieter?",
    a: "Quieter. A 3-4mm desk mat absorbs keystroke impact and reduces the hollow resonance that bare desks amplify. If you type on a mechanical keyboard in a dorm room, a thick mat is one of the easiest ways to reduce noise bleed.",
  },
  {
    q: "Will a desk mat protect my desk from heat?",
    a: "Leather and PU mats provide moderate heat protection against warm coffee mugs. They are not designed for very hot objects. For laptops, a mat helps slightly with heat dissipation, but a dedicated laptop stand is better for airflow.",
  },
];
