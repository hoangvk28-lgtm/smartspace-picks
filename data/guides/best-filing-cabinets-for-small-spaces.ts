const BASE = "/images/guides/best-filing-cabinets-for-small-spaces";

export const guideSlug = "best-filing-cabinets-for-small-spaces";
export const guideTitle = "8 Best Filing Cabinets for Small Spaces in 2026";
export const metaTitle = "Best Filing Cabinets for Small Spaces 2026 – Compact Picks";
export const metaDescription =
  "Best filing cabinets for small spaces in 2026, ranked by footprint, access clearance, and standing-desk compatibility, not just drawer count.";
export const lastUpdated = "2026-07-25";
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

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const products: GuideProduct[] = [
  {
    id: "letaya-3-drawer-mobile",
    rank: 1,
    badge: "Best Overall",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock",
    price: "$99.99",
    rating: "4.5 stars from 1,373 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/letaya-3-drawer-mobile.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=deskfinds0d-20",
    description: "The Letaya 3 Drawer ships fully assembled and is sized to slide directly under a standard desk, which matters most in a small room where floor space cannot be given up to a freestanding cabinet. Three lockable drawers cover letters, legal, and A4 sizes, and the narrow body keeps the footprint close to a typical desk pedestal.\n\nThe main tradeoff in tight rooms is drawer swing. A fully extended top drawer needs close to three feet of clearance in front of the cabinet, so placement against a wall opposite a walking path works better than wedging it into a corner. It rolls on casters, so nudging it out for access is easy even in a cramped office.",
    specs: ["3 drawers", "Locking", "Letter/Legal/A4", "Fully assembled", "Rolling casters"],
    pros: ["Slides under most desks", "Fully assembled out of the box", "Locking drawers", "Rolls for easy repositioning"],
    cons: ["Needs nearly 3 ft of front clearance when open", "Casters are small, less ideal on thick carpet", "Black finish only"],
    bestFor: "Small home offices that need under-desk storage without sacrificing lock security.",
  },
  {
    id: "devaise-2-drawer-under-desk",
    rank: 2,
    badge: "Best Under-Desk Fit",
    name: "DEVAISE 2 Drawer Metal File Cabinet, Under Desk",
    price: "$129.99",
    rating: "4.5 stars from 1,681 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/devaise-2-drawer-under-desk.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B08G53L8B5?tag=deskfinds0d-20",
    description: "DEVAISE built this 2 drawer cabinet specifically to sitting-height desk clearance, which typically runs 23 to 28 inches. It arrives fully assembled and locks, and its shorter height means it fits under desks where a 3-drawer model would bump the underside of the desktop.\n\nBecause it is a vertical two-drawer body rather than lateral, it needs less width but slightly more front-to-back reach when a drawer opens fully. If your desk sits on a standing-desk frame, measure your sitting-height clearance before ordering since 2-drawer pedestal height can run close to the low end of that range.",
    specs: ["2 drawers", "Locking", "Fully assembled", "Under-desk height", "Letter/Legal/A4"],
    pros: ["Sized for sitting-height desk clearance", "Fully assembled", "Locking drawers", "Solid metal build"],
    cons: ["Only 2 drawers limits capacity", "May not clear a standing desk at its lowest sit position", "Higher price for the size"],
    bestFor: "Buyers whose desk clearance is tight and can't accommodate a taller 3-drawer cabinet.",
  },
  {
    id: "letaya-2-drawer-lateral",
    rank: 3,
    badge: "Best Lateral for Narrow Rooms",
    name: "Letaya 2 Drawer Lateral File Cabinet",
    price: "$99.99",
    rating: "4.2 stars from 1,671 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/letaya-2-drawer-lateral.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=deskfinds0d-20",
    description: "This lateral cabinet opens sideways rather than pulling straight out, which is the better choice for a small room where you have wall width to spare but not much depth to give up. At roughly 28 inches wide and under 16 inches deep, it sits flush against a wall without eating into the walking path in front of it.\n\nHanging letter and legal files load side-to-side in this design, so check that your existing folders are rated for lateral hanging rails before switching from a vertical cabinet. The lock covers both drawers from one keyed point.",
    specs: ["2 drawers", "Lateral opening", "Locking", "Letter/Legal/A4", "H27.95 x W28.35 x D15.74 in"],
    pros: ["Shallow depth suits narrow rooms", "Opens sideways, not into the walkway", "Locking", "Compact footprint at 15.74 in deep"],
    cons: ["Needs more wall width than a vertical cabinet", "Side-to-side file orientation only", "Mid-pack rating vs. top pick"],
    bestFor: "Rooms with limited depth but a free wall stretch, such as a dorm alcove or closet office.",
  },
  {
    id: "gyiiyuo-2-drawer-desktop",
    rank: 4,
    badge: "Best with Extra Desktop",
    name: "GYIIYUO 2 Drawer File Cabinet with 24-inch Extended Desktop",
    price: "$56.99",
    rating: "4.2 stars from 1,425 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/gyiiyuo-2-drawer-desktop.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=deskfinds0d-20",
    description: "GYIIYUO adds a 24-inch flat top and a side storage bag to a rolling 2-drawer cabinet, which doubles as a printer stand next to a small desk instead of taking up a second piece of furniture. The fabric drawer fronts keep the overall weight lower than an all-metal cabinet, which helps when you need to move it for cleaning.\n\nAt this price, expect the fabric drawers and lighter frame to feel less rigid than the metal DEVAISE or Letaya picks above. It is best treated as a printer stand with file storage underneath rather than a heavy-duty document archive.",
    specs: ["2 drawers", "24 in extended desktop", "Side storage bag", "Fabric drawers", "A4/Letter"],
    pros: ["Doubles as a printer stand", "Included side storage bag", "Lightweight, easy to move", "Budget price"],
    cons: ["Fabric drawers less durable than metal", "No lock", "Lower weight capacity than steel cabinets"],
    bestFor: "Buyers who want one piece of furniture to hold both a printer and files next to a small desk.",
  },
  {
    id: "devaise-3-drawer-mobile",
    rank: 5,
    badge: "Best 3-Drawer Capacity",
    name: "DEVAISE 3-Drawer Mobile Lateral File Cabinet",
    price: "$94.99",
    rating: "4.2 stars from 2,444 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/devaise-3-drawer-mobile.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=deskfinds0d-20",
    description: "This is the highest-capacity cabinet in this roundup at a similar footprint to the 2-drawer options, which makes sense if you need more storage but still only have a single small-desk-sized gap to place it in. The lateral layout means the width is the main space commitment rather than the depth.\n\nWith three drawers loaded, a filled cabinet like this can reach 80 to 100 lbs, so plan its final position before loading it since repositioning a fully loaded lateral cabinet on carpet is a two-person job even with casters.",
    specs: ["3 drawers", "Lateral, mobile", "Rustic brown finish", "Letter/Legal/A4"],
    pros: ["Most storage per footprint here", "Mobile casters included", "Distinct rustic brown finish option", "Strong review count"],
    cons: ["Loaded weight makes repositioning harder", "Wider footprint than 2-drawer options", "No stated lock"],
    bestFor: "Small offices that need maximum document storage without adding a second cabinet.",
  },
  {
    id: "vasagle-custos-small-rolling",
    rank: 6,
    badge: "Best Compact Footprint",
    name: "VASAGLE CUSTOS Small Rolling Filing Cabinet",
    price: "$52.99",
    rating: "4.1 stars from 7,901 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/vasagle-custos-small-rolling.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0BQJ5WL24?tag=deskfinds0d-20",
    description: "At 15.7 x 16.5 x 27.6 inches, this is one of the smallest true footprints in this guide, and VASAGLE markets it explicitly as a printer stand alternative, which fits the small-space brief well. The narrow width means it slots into gaps beside a desk that a wider lateral cabinet cannot use.\n\nBecause the cabinet is narrow and tops out at 27.6 inches tall, it clears most sitting-height desk aprons, but check your specific desk's under-surface clearance since a few standing desks sit lower than this at their minimum height.",
    specs: ["2 drawers", "15.7 x 16.5 x 27.6 in", "Matte black", "A4/Letter", "Rolling casters"],
    pros: ["One of the smallest footprints in this guide", "Doubles as printer stand", "Very high review count for the price", "Rolling casters"],
    cons: ["Small drawer capacity", "Lightweight build vs. all-steel options", "May not clear the lowest standing-desk heights"],
    bestFor: "The tightest spaces, such as a nook beside a small desk with no room to spare.",
  },
  {
    id: "bynsoe-2-drawer-vertical",
    rank: 7,
    badge: "Best Budget Vertical",
    name: "BYNSOE 2 Drawer Vertical File Cabinet with Lock",
    price: "$64.99",
    rating: "4.0 stars from 1,303 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/bynsoe-2-drawer-vertical.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=deskfinds0d-20",
    description: "BYNSOE's vertical layout keeps the footprint narrow front-to-back, which suits a small room where you want the cabinet flush against a wall rather than jutting into the room. It locks and is priced below most of the metal options here.\n\nThis one requires assembly rather than arriving ready to use, which is worth factoring into your setup time. It has no listed casters, so plan its position as fairly permanent rather than something you'll frequently slide around.",
    specs: ["2 drawers", "Vertical", "Locking", "Steel", "Assembly required"],
    pros: ["Narrow vertical footprint", "Locking drawers", "Budget price", "Steel construction"],
    cons: ["Assembly required", "No casters for repositioning", "Lower drawer capacity"],
    bestFor: "Tight budgets that still need a lockable, narrow-footprint cabinet against a wall.",
  },
  {
    id: "steeloong-2-drawer",
    rank: 8,
    badge: "Best Simple Steel Pick",
    name: "SteeLoong 2 Drawer Metal File Cabinet with Lock",
    price: "$64.99",
    rating: "4.0 stars from 382 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/steeloong-2-drawer.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0D2QSQZ1X?tag=deskfinds0d-20",
    description: "SteeLoong keeps this cabinet simple: two locking metal drawers in a compact black frame at a similar price point to the BYNSOE pick. It is a reasonable stand-in if that model is out of stock, with a comparable narrow footprint suited to small rooms.\n\nWith a smaller review count than most other picks here, treat this as a solid budget alternative rather than a top recommendation. Confirm current listing details before buying since specs on lower-volume listings change more often.",
    specs: ["2 drawers", "Locking", "Metal", "Compact footprint"],
    pros: ["Compact metal frame", "Locking drawers", "Competitive budget price"],
    cons: ["Smaller review base than other picks", "No stated casters", "Basic feature set"],
    bestFor: "A budget backup pick with a similarly narrow footprint to the BYNSOE cabinet.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Footprint vs. access clearance", explanation: "A compact 2-drawer vertical cabinet may measure only 15x20 inches closed, but a fully open top drawer needs roughly 38 to 40 inches of clear floor in front of it. Lateral cabinets open sideways instead, trading floor depth for wall width. Measure the open-drawer clearance, not just the box dimensions, before placing one in a small room." },
  { criterion: "Standing-desk sitting clearance", explanation: "If the cabinet needs to slide under a sit-stand desk, check your desk's clearance at its lowest sitting height, typically 23 to 28 inches. Rolling pedestal cabinets often run 24 to 28 inches tall themselves, which can be too tall to clear a desk set near the bottom of its range." },
  { criterion: "Mobile vs. fixed pedestal stability", explanation: "Cabinets with a single non-locking caster set can tip forward when rolled onto a rug edge or uneven floor transition. Look for locking front casters or a 5-caster layout if the cabinet will be moved regularly, and lock the wheels once it's in its final spot." },
  { criterion: "Hanging file orientation", explanation: "Some compact cabinets only accept front-to-back hanging files, not the side-to-side rail layout most legal and letter hanging folders use. Check the product listing for hanging rail specifications before assuming any 'letter/legal' cabinet supports your existing folders." },
  { criterion: "Loaded weight and caster size", explanation: "A fully loaded 2-drawer cabinet commonly weighs 60 to 100 lbs. On carpet, casters smaller than about 2.5 inches in diameter struggle to roll smoothly under that load. If your floor is carpeted, prioritize a cabinet with larger casters over a marginally cheaper one." },
  { criterion: "Assembly and finish", explanation: "Fully assembled cabinets save setup time but usually cost slightly more. Confirm whether the listing says 'fully assembled' or 'assembly required' before ordering, since a small-space cabinet that requires tools and floor space to build can be its own logistical headache in a cramped room." },
];

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Footprint efficiency", description: "We compared closed and open-drawer footprints against typical small-room and under-desk constraints, prioritizing cabinets that don't require excessive front clearance to use." },
  { title: "Desk and standing-desk compatibility", description: "For cabinets marketed as under-desk, we checked stated height against common sitting-height desk clearance ranges (23 to 28 in)." },
  { title: "Mobility and stability", description: "Cabinets with casters were assessed for caster count, locking ability, and reported tipping issues in buyer feedback." },
  { title: "Build and lock quality", description: "We weighed metal vs. fabric drawer construction, lock presence, and reported durability across verified buyer feedback." },
  { title: "Value for the footprint", description: "Price was assessed relative to storage capacity per square foot of floor space used, not price alone." },
];

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Available Floor Depth",
    intro: "Small rooms usually run short on either depth or width, not both. Match the cabinet's opening direction to whichever dimension you actually have.",
    table: {
      headers: ["Your constraint", "Best opening style", "Recommended pick"],
      rows: [
        ["Less than 3 ft of depth in front of the spot", "Lateral (opens sideways)", "Letaya 2 Drawer Lateral File Cabinet"],
        ["Depth is fine, width is the limit", "Vertical (opens forward), narrow body", "VASAGLE CUSTOS Small Rolling Filing Cabinet"],
        ["Need the smallest footprint possible", "Compact vertical, 2-drawer", "VASAGLE CUSTOS Small Rolling Filing Cabinet"],
        ["Need max capacity, width is available", "Lateral, 3-drawer", "DEVAISE 3-Drawer Mobile Lateral File Cabinet"],
      ],
    },
  },
  {
    subheading: "Standing-Desk Sitting Clearance Check",
    intro: "If the cabinet needs to slide fully under your desk while you're seated, measure the clearance at your desk's lowest sitting height before ordering.",
    table: {
      headers: ["Desk sitting clearance", "Fits under desk?", "Recommended pick"],
      rows: [
        ["Under 24 in", "Tight — measure exact cabinet height first", "VASAGLE CUSTOS Small Rolling Filing Cabinet (27.6 in tall)"],
        ["24-26 in", "Fits shorter under-desk cabinets", "DEVAISE 2 Drawer Metal File Cabinet, Under Desk"],
        ["27-28 in and up", "Most 2-drawer cabinets fit", "Letaya 3 Drawer Mobile File Cabinet with Lock"],
      ],
    },
    note: "Manufacturer height specs vary by an inch or two between listings — always confirm the exact number on the current Amazon listing before buying.",
  },
  {
    subheading: "By Room Type",
    cards: [
      { label: "Dorm room or studio alcove", text: "Go narrow and light. The VASAGLE CUSTOS or GYIIYUO 2 Drawer with desktop keep the footprint minimal and double as extra surface space." },
      { label: "Home office with a standing desk", text: "Prioritize the DEVAISE 2 Drawer Under Desk pick, sized specifically for sitting-height clearance under a sit-stand frame." },
      { label: "Shared workspace needing lock security", text: "The Letaya 3 Drawer or BYNSOE 2 Drawer both lock and keep a compact vertical footprint." },
      { label: "Small office needing max document storage", text: "The DEVAISE 3-Drawer Mobile Lateral fits the most files without doubling the footprint of a 2-drawer cabinet." },
    ],
  },
  {
    subheading: "Mobile vs. Fixed Placement",
    intro: "Decide up front whether the cabinet needs to move regularly or will sit in one spot permanently.",
    table: {
      headers: ["Use case", "Recommendation", "Pick"],
      rows: [
        ["Rolled out often for drawer access in a tight room", "Rolling casters, ideally locking", "Letaya 3 Drawer Mobile File Cabinet with Lock"],
        ["Stays in one place against a wall", "Fixed pedestal is fine, often cheaper", "BYNSOE 2 Drawer Vertical File Cabinet"],
        ["On carpet and needs to roll smoothly", "Look for 2.5 in+ diameter casters", "DEVAISE 3-Drawer Mobile Lateral File Cabinet"],
      ],
    },
  },
  {
    subheading: "When to Size Up Instead",
    note: "If you're consistently filling a 2-drawer cabinet within a year, a 3-drawer lateral like the DEVAISE 3-Drawer costs less per drawer of capacity than buying a second small cabinet later and gives you one footprint to plan around instead of two.",
  },
];

export const faq: { q: string; a: string }[] = [
  { q: "How much clearance does a filing cabinet actually need in a small room?", a: "Don't just measure the closed cabinet. A 2-drawer vertical cabinet needs roughly 38 to 40 inches of clear floor in front of it for the top drawer to fully extend. Lateral cabinets, which open sideways, need less depth but more width along the wall. Measure both the box and the swing space before committing to a spot." },
  { q: "Will a filing cabinet fit under my standing desk?", a: "It depends on your desk's clearance at its lowest sitting height, typically 23 to 28 inches, and the cabinet's stated height, commonly 24 to 28 inches for rolling pedestals. Measure your desk's minimum sitting clearance first, then compare it against the cabinet's exact listed height rather than assuming any 'under desk' cabinet will fit." },
  { q: "Are rolling filing cabinets stable, or do they tip over?", a: "Stability depends on the caster setup. Cabinets with a single small caster set can tip forward when rolled onto a rug edge or floor transition. Locking front casters or a 5-caster arrangement reduce that risk. Once positioned, lock the wheels if the cabinet has that option." },
  { q: "Do all small filing cabinets support standard hanging file folders?", a: "No. Some compact cabinets only accept front-to-back hanging files rather than the side-to-side rail most standard hanging folders use. Check the listing's hanging rail specification before assuming a cabinet marked 'letter/legal' works with your existing folders." },
  { q: "What's the difference between vertical and lateral cabinets for small spaces?", a: "Vertical cabinets open forward and need more floor depth in front of them but take up less wall width. Lateral cabinets open sideways, trading depth requirements for wall width. Choose based on which dimension is actually scarce in your room." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
  { href: "/guide/best-rolling-filing-cabinets", title: "Best Rolling Filing Cabinets (2026)" },
  { href: "/guide/best-lateral-filing-cabinets", title: "Best Lateral Filing Cabinets (2026)" },
  { href: "/guide/best-office-chairs-for-small-spaces", title: "Best Office Chairs for Small Spaces (2026)" },
];
