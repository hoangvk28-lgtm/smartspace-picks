const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-office-chair-under-100";

export const guideTitle = "Top 6 Best Office Chair Under $100: Picked for Desks, Dorms, and Long Study Sessions";
export const guideDescription =
  "The budget office chair market in 2026 has enough legitimate options -- mesh backs, lumbar support, adjustable armrests -- that you do not need to spend $300 to sit comfortably. This guide cuts through identical-looking listings to find what actually fits your setup.";
export const metaTitle = "Best Office Chair Under $100 (2026)";
export const metaDescription =
  "6 office chairs under $100 for desks, dorms, and long study sessions -- covers ergonomic features that matter, height matching, small desk compatibility.";
export const lastUpdated = "2026-06-04";
export const readTime = "12 min";
export const heroImage = `${BASE}/07-hero-best-office-chair-under-100.webp`;

export interface BudgetChair {
  id: string;
  rank: number;
  badge: string;
  name: string;
  brand: string;
  bestFor: string;
  price: string;
  priceRange: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWins: string;
  bodyParagraph: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  bestForDetail: string;
}

export const products: BudgetChair[] = [
  {
    id: "best-overall",
    rank: 1,
    badge: "Best Overall",
    name: "CLATINA Ergonomic High-Back Mesh Chair",
    brand: "CLATINA",
    bestFor: "Daily desk work, most adjustments",
    price: "~$80-95",
    priceRange: "~$80--95",
    imageUrl: `${BASE}/01-best-overall-clatina-ergonomic-high-back.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07QK6ZPFB?tag=deskfinds0d-20",
    whyItWins: "The CLATINA stands out in this price range for one specific reason: independent lumbar support -- the lumbar cushion adjusts separately from the backrest, letting you position it precisely at your lower back rather than accepting wherever the chair puts it. Most chairs under $100 have a fixed lumbar bump that may or may not line up with your anatomy.",
    bodyParagraph: "The 3D adjustable armrests (height, angle, and width) are rare at this price. Combined with the thick molded seat cushion and breathable mesh back, this chair covers the most bases for a full day of desk use.",
    specs: [
      { label: "Back", value: "High-back breathable mesh" },
      { label: "Lumbar", value: "Independent adjustable lumbar support cushion" },
      { label: "Armrests", value: "3D adjustable (height, angle, pivot)" },
      { label: "Seat height", value: "Adjustable (standard pneumatic)" },
      { label: "Seat", value: "Thick foam cushion" },
      { label: "Weight capacity", value: "~275 lbs" },
    ],
    pros: ["Independent lumbar adjusts to your back, not fixed", "3D armrests -- most flexibility in this roundup", "Thick padded seat stays comfortable longer", "Clean all-black professional look"],
    cons: ["Assembly takes 20--30 minutes", "Mesh durability unverified over 2+ years", "Not ideal for users under 5'4\" -- seat height may be too high at minimum"],
    bestForDetail: "Anyone who sits 4+ hours daily at a desk and needs lumbar support that actually fits.",
  },
  {
    id: "best-mesh",
    rank: 2,
    badge: "Best Mesh",
    name: "Flysky Ergonomic Desk Chair",
    brand: "Flysky",
    bestFor: "Hot rooms, long sessions",
    price: "~$70-90",
    priceRange: "~$70--90",
    imageUrl: `${BASE}/02-best-mesh-flysky-ergonomic-mesh-chair.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0B54GPKGS?tag=deskfinds0d-20",
    whyItWins: "If your workspace gets warm -- a dorm room with poor ventilation, a home office that heats up in summer -- a fully mesh chair is meaningfully more comfortable than padded leather or foam alternatives. The Flysky uses breathable mesh on both the back and partial seat, which allows airflow that padded chairs block entirely.",
    bodyParagraph: "The flip-up armrests are the practical standout: when you need to push the chair fully under the desk to save space, flip the arms up and the chair slides in flat. On a small desk in a dorm or apartment, this matters daily.",
    specs: [
      { label: "Back", value: "Full breathable mesh" },
      { label: "Lumbar", value: "Built-in lumbar support curve" },
      { label: "Armrests", value: "Flip-up (fold flat when not in use)" },
      { label: "Seat", value: "Mesh and foam composite" },
      { label: "Seat height", value: "Adjustable" },
      { label: "Weight capacity", value: "~250 lbs" },
    ],
    pros: ["Mesh back and seat -- best airflow in this roundup", "Flip-up arms -- slides fully under small desks", "Lower price than CLATINA", "Lighter weight -- easier to move"],
    cons: ["Lumbar support is fixed curve, not adjustable", "Less padding than CLATINA -- harder surfaces for longer sits", "Arms flip up but do not adjust height"],
    bestForDetail: "Warm environments, small rooms, or anyone who values airflow over maximum padding.",
  },
  {
    id: "best-ergonomic",
    rank: 3,
    badge: "Best Ergonomic Support",
    name: "Sytas Home Office Chair",
    brand: "Sytas",
    bestFor: "Back support focus",
    price: "~$75-95",
    priceRange: "~$75--95",
    imageUrl: `${BASE}/03-best-ergonomic-sytas-home-office-chair.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09BB6LZNK?tag=deskfinds0d-20",
    whyItWins: "The Sytas is the most popular chair in this roundup by review count -- and the reviews consistently cite back support as the reason. The lumbar support system is designed as a separate component that aligns with the natural S-curve of the spine, rather than a fixed bump or detachable pillow that shifts around.",
    bodyParagraph: "The mesh back has enough tension to push back gently as you lean, which reduces the effort needed to maintain upright posture during long sessions. If you have lower back issues or tend to slouch, this is the pick to consider.",
    specs: [
      { label: "Back", value: "High-back breathable mesh with ergonomic S-curve" },
      { label: "Lumbar", value: "Built-in ergonomic lumbar support" },
      { label: "Armrests", value: "Adjustable (height)" },
      { label: "Seat", value: "Padded foam seat cushion" },
      { label: "Seat height", value: "Adjustable pneumatic" },
    ],
    pros: ["Most-reviewed pick -- large sample of real-world feedback", "S-curve back design promotes natural spine alignment", "Consistent positive feedback on lumbar support", "Mid-range price"],
    cons: ["Armrests adjust only in height (not 3D)", "Seat cushion is standard foam -- may compress over months of heavy use"],
    bestForDetail: "People who sit 6+ hours daily and prioritize spine alignment over armrest flexibility.",
  },
  {
    id: "best-dorms",
    rank: 4,
    badge: "Best for Dorms",
    name: "Amazon Basics Office Task Chair with Adjustable Height",
    brand: "Amazon Basics",
    bestFor: "Compact, small space",
    price: "~$70-85",
    priceRange: "~$70--85",
    imageUrl: `${BASE}/04-best-for-dorms-amazon-basics-office-task-chair.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00IFHPVEU?tag=deskfinds0d-20",
    whyItWins: "Dorm rooms have two constraints that most office chair reviews ignore: limited floor space and low desk clearance (dorm desks are often fixed-height and lower than standard office desks). The Amazon Basics Office Task Chair is compact enough to fit under standard dorm desks, and the trusted brand means you know what you are getting without surprises on build quality.",
    bodyParagraph: "The pneumatic adjustable height, padded back and seat, and 360° swivel cover the essentials without the bulk of executive chairs. For a dorm room where the chair is one of many items competing for floor space, the compact footprint makes a real difference.",
    specs: [
      { label: "Back", value: "Padded back with armrests" },
      { label: "Lumbar", value: "Back contour provides basic lumbar" },
      { label: "Armrests", value: "Fixed padded armrests" },
      { label: "Seat", value: "Padded seat cushion" },
      { label: "Seat height", value: "Adjustable pneumatic" },
      { label: "Brand", value: "Amazon Basics -- reliable build quality" },
    ],
    pros: ["Amazon Basics reliability -- consistent build quality", "Compact dimensions -- good for small dorm and apartment spaces", "Pneumatic height adjustment for any desk height", "Easy assembly, ships quickly"],
    cons: ["Fixed armrests -- no adjustability", "Less lumbar support than CLATINA or Sytas", "Not designed for 8+ hour sessions"],
    bestForDetail: "Dorm rooms, small apartments, or anyone who needs a compact reliable chair from a trusted brand.",
  },
  {
    id: "best-leather",
    rank: 5,
    badge: "Best Clean Aesthetic",
    name: "Sweetcrispy Heavy-Duty Task Chair",
    brand: "Sweetcrispy",
    bestFor: "Clean aesthetic, home office",
    price: "~$75-90",
    priceRange: "~$75--90",
    imageUrl: `${BASE}/05-best-leather-look-sweetcrispy-heavy-duty-task.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CDGKQSQ3?tag=deskfinds0d-20",
    whyItWins: "Most mesh office chairs look like office chairs -- clearly utilitarian, clearly out of place in a bedroom or aesthetic-forward desk setup. The Sweetcrispy takes a different approach with a PU leather seat and back, clean lines, and flip-up arms -- looking closer to a home office chair than a standard task chair.",
    bodyParagraph: "The heavy-duty build (rated for more weight than most competitors) and the flip-up arm design make it practical: the arms fold flat for storage or when the chair needs to slide fully under the desk.",
    specs: [
      { label: "Back", value: "PU leather high-back with stitched panels" },
      { label: "Lumbar", value: "Built-in lumbar curve in backrest" },
      { label: "Armrests", value: "Flip-up" },
      { label: "Seat", value: "PU leather padded seat, heavy-duty foam" },
      { label: "Seat height", value: "Adjustable" },
      { label: "Weight capacity", value: "280+ lbs -- higher than mesh competitors" },
    ],
    pros: ["Leather-look aesthetic -- fits bedroom desk setups better than mesh", "Higher weight capacity than most in this range", "Flip-up arms for compact storage", "Padded seat comfortable for shorter sessions"],
    cons: ["PU leather runs hotter than mesh -- less airflow", "Lumbar is fixed curve, not adjustable", "PU leather may crack at seams over 2--3 years of daily use"],
    bestForDetail: "Desk setups where the chair is visible and aesthetic matters -- bedroom desks, home office setups where the chair is in frame on video calls.",
  },
  {
    id: "best-budget",
    rank: 6,
    badge: "Best Budget Under $65",
    name: "FDW High-Back Office Chair",
    brand: "FDW",
    bestFor: "Under $60, basic needs",
    price: "~$50-65",
    priceRange: "~$50--65",
    imageUrl: `${BASE}/06-best-budget-fdw-high-back-office-chair.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08JGGJZY2?tag=deskfinds0d-20",
    whyItWins: "Below $65, the options thin out fast. The FDW delivers a functional chair at a price point where most competitors are uncomfortable or fall apart quickly. PU leather high-back, basic lumbar cushion, height adjustment, and smooth-rolling casters -- it covers the essentials without pretending to be ergonomic.",
    bodyParagraph: "For a secondary chair, a chair for occasional use, or a first chair while saving for something better, the FDW provides adequate seating without a significant financial commitment.",
    specs: [
      { label: "Back", value: "PU leather high-back" },
      { label: "Lumbar", value: "Basic lumbar pillow (fixed)" },
      { label: "Armrests", value: "Fixed (not adjustable)" },
      { label: "Seat", value: "PU leather padded" },
      { label: "Seat height", value: "Adjustable" },
    ],
    pros: ["Lowest price in this roundup (~$50--65)", "Functional for moderate daily use", "Classic executive look", "Easy assembly"],
    cons: ["Fixed armrests -- no adjustability", "Basic fixed lumbar -- may not align with your back", "PU leather quality lower than higher-priced picks", "Not suitable for 8+ hours of daily use"],
    bestForDetail: "Budget-first buyers, occasional use, or a secondary workspace chair.",
  },
];

export const atAGlanceItems = products.map((p) => ({
  rank: p.rank,
  badge: p.badge,
  name: p.name,
  brand: p.brand,
  imageUrl: p.imageUrl,
  affiliateUrl: p.amazonUrl,
  price: p.price,
  anchorId: p.id,
  pros: p.pros.slice(0, 3).map((text) => ({ text })),
  cons: [{ text: p.cons[0], severity: "minor" as const }],
}));

export const sittingDurationRows = [
  { duration: "< 2 hours", minimum: "Basic height adjustment", pick: "FDW", id: "best-budget" },
  { duration: "2--4 hours", minimum: "Lumbar support, adjustable arms", pick: "Flysky, Amazon Basics", id: "best-mesh" },
  { duration: "4--8 hours", minimum: "Independent lumbar, padded seat", pick: "CLATINA, Sytas", id: "best-overall" },
  { duration: "8+ hours", minimum: "Consider upgrading budget to $150+", pick: "-- Budget too low --", id: "best-overall" },
];

export const heightMatchRows = [
  { height: "Under 5'3\" (160 cm)", seatHeight: "16--17\" (40--43 cm)", picks: "Flysky, Amazon Basics (lower minimums)" },
  { height: "5'3\"--5'7\" (160--170 cm)", seatHeight: "17--19\" (43--48 cm)", picks: "All picks in this guide" },
  { height: "5'7\"--6'0\" (170--183 cm)", seatHeight: "19--21\" (48--53 cm)", picks: "CLATINA, Sytas, Sweetcrispy" },
  { height: "Over 6'0\" (183 cm+)", seatHeight: "21\"+ (53 cm+)", picks: "FDW max height, or consider $150+ chairs" },
];

export const smallDeskRows = [
  { chair: "Flysky", armType: "Flip-up", fits: "Yes -- flip arms up, slides fully under" },
  { chair: "Sweetcrispy", armType: "Flip-up", fits: "Yes -- same" },
  { chair: "Amazon Basics", armType: "Fixed", fits: "Partially -- compact body helps" },
  { chair: "CLATINA", armType: "3D adjustable", fits: "Partially -- can pivot inward" },
  { chair: "Sytas", armType: "Height-adjustable", fits: "Partially" },
  { chair: "FDW", armType: "Fixed", fits: "Cannot adjust -- may block small desk" },
];

export const warrantyRows = [
  { chair: "CLATINA B07QK6ZPFB", warranty: "1--2 years (check listing)", returnWindow: "30-day Amazon return" },
  { chair: "Flysky B0B54GPKGS", warranty: "1 year", returnWindow: "30-day Amazon return" },
  { chair: "Sytas B09BB6LZNK", warranty: "1 year", returnWindow: "30-day Amazon return" },
  { chair: "Amazon Basics B00IFHPVEU", warranty: "1 year", returnWindow: "30-day Amazon return" },
  { chair: "Sweetcrispy B0CDGKQSQ3", warranty: "1 year", returnWindow: "30-day Amazon return" },
  { chair: "FDW B08JGGJZY2", warranty: "1 year", returnWindow: "30-day Amazon return" },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What is the best office chair under $100 for studying?",
    answer: "The CLATINA handles study sessions of 4--6 hours well -- the independent lumbar support and 3D armrests give you more postural flexibility than any other pick in this roundup. For dorm-specific setups, the Amazon Basics Office Task Chair fits better in tight spaces with reliable build quality.",
  },
  {
    question: "Is a $100 office chair worth it vs a cheaper option?",
    answer: "Yes, compared to chairs under $50. The $70--100 range adds meaningful lumbar support and armrest adjustability that cheaper chairs lack. Below $50, you are effectively buying a basic stool with wheels.",
  },
  {
    question: "What is the most ergonomic office chair under $100?",
    answer: "'Ergonomic' at this price range means adjustable lumbar + adjustable armrests. The CLATINA offers the most adjustment options -- independent lumbar, 3D armrests, height adjustment. The Sytas is the best reviewed for actual back comfort.",
  },
  {
    question: "Can an office chair under $100 support good posture?",
    answer: "Partially. A chair with adjustable lumbar support helps maintain the lower back's natural curve. But posture depends on desk height, monitor position, and sitting habits as much as the chair. Pair the chair with a proper desk setup for best results.",
  },
  {
    question: "What should I look for in a budget office chair for a dorm?",
    answer: "Compact dimensions (fits under standard dorm desks), flip-up or removable armrests (allows the chair to slide fully under), and a lightweight design (easy to move in a small room). The Amazon Basics Office Task Chair covers the compact and reliable requirements. Flysky's flip-up arms are the best for desk clearance.",
  },
];
