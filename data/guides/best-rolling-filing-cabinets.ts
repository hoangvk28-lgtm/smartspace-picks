const BASE = "/images/guides/best-rolling-filing-cabinets";

export const guideSlug = "best-rolling-filing-cabinets";
export const guideTitle = "8 Best Rolling Filing Cabinets in 2026";
export const metaTitle = "Best Rolling Filing Cabinets 2026 – Caster & Stability Picks";
export const metaDescription =
  "Best rolling filing cabinets in 2026, ranked by caster material, caster count, and real stability, with honest notes on which models actually ship with wheels.";
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
    id: "letaya-3-drawer-mobile-rolling",
    rank: 1,
    badge: "Best Overall Rolling Pick",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock",
    price: "$99.99",
    rating: "4.5 stars from 1,373 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/letaya-3-drawer-mobile.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=deskfinds0d-20",
    description: "Letaya labels this a mobile cabinet and it ships with caster wheels, letting you roll it away from a desk for full drawer access and back again when you're done. Three lockable drawers give solid capacity for a rolling design, and it arrives fully assembled.\n\nThe casters here are the standard small plastic type, which move smoothly on hardwood or tile but can feel less stable on thick carpet or rug edges. For carpet-heavy rooms, check the caster stability guidance below before relying on it as your primary storage on soft flooring.",
    specs: ["3 drawers", "Locking", "Rolling casters", "Fully assembled"],
    pros: ["Genuinely rolls, ships with casters", "3 drawers of capacity", "Locking", "Fully assembled"],
    cons: ["Standard casters less stable on thick carpet", "No stated 5-caster stability upgrade", "Loaded weight makes rolling on carpet harder"],
    bestFor: "Buyers on hard flooring who want a proven rolling cabinet with real drawer capacity.",
  },
  {
    id: "devaise-2-drawer-metal-stationary",
    rank: 2,
    badge: "Best Stationary Alternative",
    name: "DEVAISE 2 Drawer Metal File Cabinet, Under Desk",
    price: "$129.99",
    rating: "4.5 stars from 1,681 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/devaise-2-drawer-metal.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B08G53L8B5?tag=deskfinds0d-20",
    description: "Being upfront here: this DEVAISE cabinet's listing does not mention casters or a mobile design, so unlike most other picks in this guide it should be treated as a stationary cabinet rather than a genuinely rolling one. We're including it because it's a strong under-desk pick that pairs well with an add-on caster kit if mobility matters to you.\n\nIf you do want to make it mobile, look for a universal furniture caster kit rated for the cabinet's loaded weight, roughly 60 to 100 lbs for a filled 2-drawer cabinet, and confirm the base has a flat mounting surface before buying casters separately.",
    specs: ["2 drawers", "Locking", "Fully assembled", "No stated casters"],
    pros: ["Solid metal build", "Fully assembled", "Locking drawers", "Fits under-desk clearance"],
    cons: ["Not shipped with casters, stationary as listed", "Would need an aftermarket caster kit for mobility", "Heavier to reposition without wheels"],
    bestFor: "Buyers who want DEVAISE build quality and don't mind adding their own casters for mobility.",
  },
  {
    id: "gyiiyuo-2-drawer-desktop-rolling",
    rank: 3,
    badge: "Best with Printer Stand Top",
    name: "GYIIYUO 2 Drawer File Cabinet with 24-inch Extended Desktop",
    price: "$56.99",
    rating: "4.2 stars from 1,425 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/gyiiyuo-2-drawer-desktop.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=deskfinds0d-20",
    description: "GYIIYUO explicitly markets this as a rolling file cabinet, and the lighter fabric-drawer construction actually makes it easier to roll than heavier all-metal cabinets once loaded. The included 24-inch top doubles as a printer stand next to a small desk.\n\nBecause the frame is lighter and the drawers are fabric rather than metal, this isn't the cabinet to load down with the heaviest legal-size document volume; it's better suited to lighter daily files where rolling ease matters more than maximum capacity.",
    specs: ["2 drawers", "Rolling casters", "24 in extended desktop", "Fabric drawers"],
    pros: ["Genuinely rolls, lighter frame moves easily", "Doubles as printer stand", "Included side storage bag", "Budget price"],
    cons: ["Fabric drawers less durable under heavy loads", "No lock", "Lower weight capacity than steel cabinets"],
    bestFor: "Light document storage that needs to roll easily and double as printer stand space.",
  },
  {
    id: "letaya-2-drawer-lateral-stationary",
    rank: 4,
    badge: "Best Stationary Lateral Alternative",
    name: "Letaya 2 Drawer Lateral File Cabinet with Lock",
    price: "$99.99",
    rating: "4.2 stars from 1,671 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/letaya-2-drawer-lateral.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=deskfinds0d-20",
    description: "Flagging this honestly: this Letaya lateral model's listing describes it as a fixed cabinet, not a mobile one, unlike the Letaya 3 Drawer pick above. It earns a spot here as a stationary alternative for buyers who want the lateral, side-opening layout and don't need to roll it around.\n\nIf mobility matters more than the lateral layout, the 3 Drawer Mobile pick from the same brand is the better choice. This cabinet locks and opens sideways, which some buyers prefer for narrow-depth rooms regardless of caster availability.",
    specs: ["2 drawers", "Lateral opening", "Locking", "No stated casters"],
    pros: ["Locking lateral design", "Compact depth", "Solid review count"],
    cons: ["Not shipped with casters, stationary as listed", "Requires an add-on caster kit for mobility", "Side-to-side file orientation only"],
    bestFor: "Buyers who want a lateral, locking cabinet and are fine with it staying in place.",
  },
  {
    id: "devaise-3-drawer-mobile-lateral-rolling",
    rank: 5,
    badge: "Best Rolling Capacity",
    name: "DEVAISE 3-Drawer Mobile Lateral File Cabinet",
    price: "$94.99",
    rating: "4.2 stars from 2,444 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/devaise-3-drawer-mobile-lateral.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=deskfinds0d-20",
    description: "DEVAISE explicitly labels this a mobile lateral cabinet, and it carries the most storage capacity among the genuinely rolling picks in this guide. The tradeoff of a rolling 3-drawer cabinet is weight: a fully loaded unit like this commonly reaches 80 to 100 lbs, which puts real strain on standard casters.\n\nBecause of that loaded weight, this is the pick where caster quality matters most. On carpet especially, plan to roll it into position before fully loading the drawers rather than trying to move it once it's full.",
    specs: ["3 drawers", "Rolling casters", "Lateral", "Rustic brown finish"],
    pros: ["Most capacity among the rolling picks here", "Genuinely mobile design", "Distinct finish option", "Strong review count"],
    cons: ["Loaded weight strains standard casters", "Best moved before fully loading", "No stated lock"],
    bestFor: "Buyers who need maximum rolling capacity and are willing to manage the loaded-weight tradeoff.",
  },
  {
    id: "vasagle-custos-small-rolling-caster-pick",
    rank: 6,
    badge: "Best Caster Stability",
    name: "VASAGLE CUSTOS Small Rolling Filing Cabinet",
    price: "$52.99",
    rating: "4.1 stars from 7,901 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/vasagle-custos-small-rolling.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0BQJ5WL24?tag=deskfinds0d-20",
    description: "VASAGLE's small rolling cabinet has the highest verified review count of any rolling pick in this guide, which gives more confidence in real-world caster durability than newer or lower-volume listings. Its lighter, more compact build also means less loaded weight riding on the wheels compared to a full 3-drawer cabinet.\n\nAt 15.7 x 16.5 x 27.6 inches it's easy to roll one-handed even loaded, and its small size makes it a natural fit next to a desk where it needs to move in and out of a tight gap regularly.",
    specs: ["2 drawers", "Rolling casters", "15.7 x 16.5 x 27.6 in", "Matte black"],
    pros: ["Highest review count among rolling picks", "Light enough to roll easily loaded", "Compact footprint", "Doubles as printer stand"],
    cons: ["Smaller capacity than 3-drawer options", "Lighter build than all-steel cabinets", "Basic caster hardware, not upgraded 5-wheel"],
    bestFor: "Buyers who want a well-proven rolling cabinet that stays easy to move even when loaded.",
  },
  {
    id: "bynsoe-2-drawer-vertical-stationary",
    rank: 7,
    badge: "Best Stationary Budget Alternative",
    name: "BYNSOE 2 Drawer Vertical File Cabinet with Lock",
    price: "$64.99",
    rating: "4.0 stars from 1,303 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/bynsoe-2-drawer-vertical.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=deskfinds0d-20",
    description: "To be transparent: BYNSOE's listing describes assembly requirements and a steel body but does not mention casters, so this is a stationary cabinet, not a rolling one. It's included here as a budget-priced backup for buyers who decide a fixed cabinet is fine after all, or who plan to add their own caster kit.\n\nIf mobility is a firm requirement, choose one of the confirmed rolling picks above instead, such as the VASAGLE CUSTOS or Letaya 3 Drawer Mobile cabinet.",
    specs: ["2 drawers", "Locking", "Steel", "No stated casters", "Assembly required"],
    pros: ["Budget price", "Locking drawers", "Steel construction"],
    cons: ["Not shipped with casters, stationary as listed", "Assembly required", "Lower drawer capacity"],
    bestFor: "Budget buyers open to adding their own caster kit, or fine with a fixed cabinet.",
  },
  {
    id: "fluted-mobile-oak-rolling",
    rank: 8,
    badge: "Best Wood-Finish Rolling Pick",
    name: "3 Drawers Fluted Mobile File Cabinet with Lock, Oak Finish",
    price: "$109.99",
    rating: "4.1 stars from 66 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/fluted-mobile-oak.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GJZPVMG8?tag=deskfinds0d-20",
    description: "This is the only wood-finish rolling cabinet in this guide, explicitly listed as a mobile file cabinet with a printer stand top, giving it a different look than the black and brown metal options above. The fluted front panel and oak finish suit a home office that wants furniture styling over a purely industrial look.\n\nWith a smaller review count than the more established picks, it's worth checking the current listing for recent buyer feedback on caster durability before committing, especially if you expect to move it frequently.",
    specs: ["3 drawers", "Rolling casters", "Locking", "Oak finish", "Printer stand top"],
    pros: ["Genuinely mobile design", "Distinct oak wood finish", "Locking drawers", "Doubles as printer stand"],
    cons: ["Smaller review count than other picks", "Wood finish may show wear differently than metal", "Higher price than similar metal options"],
    bestFor: "Buyers who want a rolling cabinet that matches wood office furniture instead of metal.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Caster material vs. your floor type", explanation: "Nylon casters can scratch hardwood floors and tend to be noisy on tile, while rubber or polyurethane casters roll quietly and are safer for hardwood, though they wear faster under heavy load. Match caster material to your flooring before buying, since this detail is rarely specified clearly in listings." },
  { criterion: "5-caster vs. 4-caster stability", explanation: "A 5-caster base, with one wheel centered underneath, resists tipping on uneven floors or rug edges better than a standard 4-caster layout. If the cabinet will be loaded and moved regularly, a 5-caster design is the safer choice, though most budget cabinets use 4 casters." },
  { criterion: "Caster weight rating vs. cabinet body rating", explanation: "A cabinet's overall weight capacity doesn't guarantee its individual casters are rated to match. Casters are often the first point of failure on a heavily loaded rolling cabinet, since each wheel bears only a fraction of the total load and lower-cost hardware can be under-rated for it." },
  { criterion: "Verify the listing actually says 'mobile' or 'rolling'", explanation: "Titles can be misleading. Some cabinets marketed alongside rolling options in a product line don't actually ship with casters themselves. Check the listing specifically for the word 'mobile,' 'rolling,' or 'casters' rather than assuming a filing cabinet in a filing cabinet guide automatically has wheels." },
  { criterion: "Top surface load capacity if used as a stand", explanation: "Many rolling cabinets double as a printer stand or extra surface. Top load capacity on these cabinets commonly ranges from 50 to 150 lbs; a heavy all-in-one printer combined with anything else on top can exceed a budget cabinet's rated limit." },
  { criterion: "Lock quality is separate from rolling ability", explanation: "A cam lock included on a rolling cabinet is a privacy deterrent, not real security, and is unrelated to how well the cabinet rolls or how stable its casters are. Don't assume a locking rolling cabinet is more secure than a locking stationary one; the lock hardware is the same either way." },
];

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Confirmed mobility", description: "We checked each listing's title and description for explicit 'mobile,' 'rolling,' or 'caster' language rather than assuming all filing cabinets in this category ship with wheels, and flagged any that did not." },
  { title: "Caster material and floor compatibility", description: "Where stated, caster material was weighed against hardwood, tile, and carpet compatibility." },
  { title: "Loaded weight vs. caster durability", description: "We factored typical loaded cabinet weight (60-100+ lbs for a full 2-3 drawer cabinet) against the practicality of rolling it once loaded." },
  { title: "Build and lock quality", description: "Metal vs. fabric drawer construction and lock presence were compared across verified buyer feedback." },
  { title: "Value for confirmed rolling capability", description: "Price was weighed specifically against confirmed mobility rather than against filing capacity alone." },
];

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Floor Type",
    intro: "Caster material has a real effect on your floor, not just how smoothly the cabinet rolls.",
    table: {
      headers: ["Floor type", "Caster consideration", "Recommended pick"],
      rows: [
        ["Hardwood", "Avoid hard nylon casters; rubber or polyurethane preferred", "VASAGLE CUSTOS Small Rolling Filing Cabinet"],
        ["Tile", "Nylon casters can be noisy", "Letaya 3 Drawer Mobile File Cabinet with Lock"],
        ["Carpet", "Larger diameter casters roll more smoothly under load", "DEVAISE 3-Drawer Mobile Lateral File Cabinet"],
      ],
    },
  },
  {
    subheading: "Confirmed Rolling vs. Add-Your-Own-Casters",
    intro: "Not every cabinet that appears in a rolling filing cabinet search actually ships with wheels. Here's the honest breakdown of this guide's picks.",
    table: {
      headers: ["Product", "Ships with casters?", "Note"],
      rows: [
        ["Letaya 3 Drawer Mobile", "Yes", "Confirmed rolling, standard casters"],
        ["DEVAISE 2 Drawer Under Desk", "No", "Stationary as listed, add a caster kit if needed"],
        ["GYIIYUO 2 Drawer with Desktop", "Yes", "Confirmed rolling, lighter frame"],
        ["Letaya 2 Drawer Lateral", "No", "Stationary as listed, fixed lateral design"],
        ["DEVAISE 3-Drawer Mobile Lateral", "Yes", "Confirmed rolling, highest capacity"],
        ["VASAGLE CUSTOS Small Rolling", "Yes", "Confirmed rolling, most reviewed"],
        ["BYNSOE 2 Drawer Vertical", "No", "Stationary as listed, budget backup"],
        ["Fluted Mobile Oak Cabinet", "Yes", "Confirmed rolling, wood finish"],
      ],
    },
    note: "If a rolling cabinet is a firm requirement, choose from the confirmed-rolling rows only. The stationary picks are included as honest alternatives, not as rolling substitutes.",
  },
  {
    subheading: "By Loaded Weight Expectations",
    cards: [
      { label: "Light document load, moved often", text: "The VASAGLE CUSTOS or GYIIYUO 2 Drawer stay easy to roll even loaded since their frames are lighter." },
      { label: "Heavy document load, occasional moves", text: "The DEVAISE 3-Drawer Mobile Lateral holds the most files but is best rolled into position before fully loading." },
      { label: "Uneven or rug-edge floors", text: "Favor a cabinet you can roll slowly and check for tipping resistance rather than pushing quickly across a transition." },
    ],
  },
  {
    subheading: "Using the Top as a Printer Stand",
    intro: "Several rolling cabinets double as a printer stand. Confirm top load capacity before stacking heavy equipment on it.",
    table: {
      headers: ["Use case", "Recommendation"],
      rows: [
        ["Standard inkjet or small laser printer", "Any rolling pick in this guide comfortably supports it"],
        ["Heavy all-in-one printer plus a monitor arm base", "Check the specific listing's top load rating before stacking both"],
      ],
    },
  },
  {
    subheading: "When a Stationary Cabinet Is Actually the Better Choice",
    note: "If the cabinet is going into a permanent spot against a wall and will never need to move, a stationary model like the BYNSOE or Letaya 2 Drawer Lateral often costs less than a comparable rolling cabinet, since you're not paying for hardware you won't use.",
  },
];

export const faq: { q: string; a: string }[] = [
  { q: "Do all filing cabinets marketed for home offices actually roll?", a: "No. Not every cabinet that shows up in a rolling filing cabinet search ships with casters. Check the specific listing for the words 'mobile,' 'rolling,' or 'casters' rather than assuming. In this guide, several strong picks are stationary and included as honest alternatives, not substitutes for a genuinely rolling cabinet." },
  { q: "What caster material is best for hardwood floors?", a: "Rubber or polyurethane casters are generally safer for hardwood since they roll quietly and are less likely to scratch the finish. Hard nylon casters can mark hardwood and tend to be noisier on hard flooring, though they hold up well under load on carpet or tile." },
  { q: "Is a 5-caster base actually more stable than 4 casters?", a: "Generally yes. A 5-caster layout, with one wheel centered underneath the cabinet, resists tipping better on uneven floors or rug edges than a standard 4-caster arrangement. Most budget rolling cabinets use 4 casters, so a 5-caster design is worth prioritizing if the cabinet will be moved often." },
  { q: "Can a filing cabinet's casters fail before the cabinet itself wears out?", a: "Yes. A cabinet's stated overall weight capacity doesn't guarantee each individual caster is rated to match. Casters bear only a fraction of the total load each, and on a heavily loaded cabinet they're often the first component to fail, especially under-rated budget hardware." },
  { q: "Does a lock on a rolling filing cabinet make it more secure than a stationary one?", a: "No. Lock security is unrelated to whether a cabinet has casters. A basic cam lock included on either a rolling or stationary cabinet functions the same way and mainly deters casual access rather than providing real security. Don't factor rolling ability into your security expectations." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-filing-cabinets-for-small-spaces", title: "Best Filing Cabinets for Small Spaces (2026)" },
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
  { href: "/guide/best-lateral-filing-cabinets", title: "Best Lateral Filing Cabinets (2026)" },
];
