export const guideSlug = "best-tv-stand-on-wheels";
export const guideTitle = "8 Best TV Stands on Wheels in 2026";
export const metaTitle = "Best TV Stands on Wheels 2026 – Rolling TV Carts Ranked";
export const metaDescription =
  "Best TV stands on wheels in 2026. Rolling TV carts with locking casters ranked by weight capacity, height range, and stability for classrooms, offices, and homes.";
export const lastUpdated = "2026-07-16";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41tyVrrRjsL._SL500_.jpg";

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

export const products: GuideProduct[] = [
  {
    id: "mobile-tv-stand-upgraded-wheels-32-75",
    rank: 1,
    badge: "Best Overall",
    name: "Mobile TV Stand with Upgraded Wheels for 32-75 Inch TVs",
    price: "$59.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/41tyVrrRjsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B091B19G5X?tag=deskfinds0d-20",
    description: "This rolling stand fits 32 to 75 inch flat and curved TVs up to 88 lbs, with a commercial-grade steel base designed to sit flush into corners or non-parallel walls. Four swivel wheels handle movement, and the front pair locks with a foot tap so you can dock the cart in place without bending down. Height adjusts from 44 to 56 inches.\n\nA middle metal shelf holds a streaming box, game console, or DVR, and built-in cable management keeps cords from tangling as the stand rolls. At under $60 it undercuts most rolling TV carts in this roundup while still supporting VESA patterns from 100x100mm to 400x400mm.",
    specs: ["32-75\" TVs, up to 88 lbs", "44\"-56\" height adjustable", "Front wheels lock", "VESA 100x100mm to 400x400mm", "Middle AV shelf", "Cable management"],
    pros: ["Lowest price in this roundup", "Locking front wheels", "Fits tight corners and non-parallel walls", "Cable management included"],
    cons: ["Only front two wheels lock, not all four", "88 lb capacity is on the lower end", "56\" max height limits standing presentations"],
    bestFor: "Buyers who want a reliable, budget rolling TV stand for a living room or bedroom that occasionally needs to move between rooms.",
  },
  {
    id: "mobile-tv-stand-lockable-wheels-32-83",
    rank: 2,
    badge: "Best Budget Classroom Pick",
    name: "Mobile TV Stand Rolling TV Cart with Lockable Wheels, 32-83 Inch",
    price: "$99.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/31eL3emkqXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FCY8TGJB?tag=deskfinds0d-20",
    description: "This cart supports TVs up to 83 inches and 110 lbs with 15 steps of height adjustment from 44 to 64 inches, more granular than most single-range competitors. Two of the four heavy-duty swivel casters include a brake, so the cart can be pushed freely down a hallway and locked in place once positioned in a classroom or conference room.\n\nA middle metal shelf holds A/V gear like a cable box or laptop, and the base is designed to tuck behind a cabinet, at the end of a bed, or into a corner without wasting floor space. Assembly ships with labeled parts, which speeds up setup when a school or office needs several units at once.",
    specs: ["32-83\" TVs, up to 110 lbs", "44\"-64\" height, 15 adjustment steps", "2 of 4 casters have brakes", "VESA 100x100mm to 600x400mm", "Middle A/V shelf", "Space-saving base"],
    pros: ["110 lb capacity at under $100", "15-step height adjustment", "Fits behind furniture or in corners", "Labeled parts speed up multi-unit assembly"],
    cons: ["Only 2 of 4 wheels have brakes, not all locking", "83\" max TV size may not fit largest screens", "Middle shelf capacity not separately rated"],
    bestFor: "Schools, offices, or households buying more than one cart that need fast, repeatable assembly.",
  },
  {
    id: "mount-it-tall-mobile-tv-cart",
    rank: 3,
    badge: "Best for Presentations",
    name: "Mount-It! Tall Mobile TV Cart for 37-70 Inch TVs with Camera Tray",
    price: "$136.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/41xa0jkstiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01D3VEFUS?tag=deskfinds0d-20",
    description: "This tall cart is built for standing presentations, video conferencing, and classrooms rather than living rooms. It supports 37 to 70 inch TVs up to 110 lbs and tilts plus or minus 10 degrees to cut glare from overhead lights. Two of the four heavy-duty casters lock firmly for stability while presenting or gaming.\n\nA dual-shelf design separates a 22 lb mid-level A/V shelf from a dedicated upper webcam tray, which most single-shelf carts do not offer. Mount-It backs the frame with a lifetime warranty, longer than most competitors in this category, and setup takes 30 to 45 minutes with labeled hardware and video instructions.",
    specs: ["37-70\" TVs, up to 110 lbs", "Tilts ±10°", "2 locking casters", "Dual shelf + webcam tray", "VESA up to 600x400mm", "Lifetime warranty"],
    pros: ["Dedicated webcam tray plus A/V shelf", "Lifetime frame warranty", "Tilt reduces glare during presentations", "Rolls on hardwood, tile, and outdoor surfaces"],
    cons: ["$136.99 is mid-range pricing", "Only half the casters lock", "70\" max TV size, smaller than some rivals"],
    bestFor: "Conference rooms, classrooms, and home offices running frequent video calls or presentations.",
  },
  {
    id: "tvon-heavy-duty-power-outlet",
    rank: 4,
    badge: "Best with Built-in Power Outlet",
    name: "TVON Heavy Duty Rolling TV Stand with Power Outlet, 32-83 Inch",
    price: "$89.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/41KUdr0zR1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08XQKM9B2?tag=deskfinds0d-20",
    description: "The TVON cart includes a built-in power strip with 4 AC outlets and a 12A-rated copper cord, so a streaming box, soundbar, and game console can all plug in without a separate power strip trailing across the floor. A master switch cuts power to everything at once when the cart is not in use, which matters in homes with kids or pets nearby.\n\nHeight adjusts from 44 to 65 inches and the frame supports TVs up to 83 inches and 110 lbs. All four wheels are 360-degree lockable casters built into an upgraded steel frame, and the space-saving footprint fits behind a cabinet or at the foot of a bed.",
    specs: ["32-83\" TVs, up to 110 lbs", "44\"-65\" height adjustable", "Built-in 4-outlet power strip, 12A", "All 4 wheels lockable", "VESA 100x100mm to 600x400mm", "Cable management"],
    pros: ["Built-in power strip with master switch", "All four wheels lock, not just two", "110 lb capacity", "Space-saving footprint"],
    cons: ["Power strip adds a cord to manage separately", "No dedicated webcam or camera tray", "Middle shelf weight limit not listed"],
    bestFor: "Households that want to eliminate a separate power strip while keeping every wheel lockable for safety around kids and pets.",
  },
  {
    id: "perlesmith-rolling-tv-stand-tilt",
    rank: 5,
    badge: "Best Wide Compatibility",
    name: "PERLESMITH Rolling TV Stand with Wheels for 32-85 Inch TVs",
    price: "$189.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/41mgU0aERVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07T1HQBPM?tag=deskfinds0d-20",
    description: "PERLESMITH's cart covers the widest TV size range in this roundup, 32 to 85 inches, though weight capacity tops out at 100 lbs, slightly below the 110 lb carts at similar price points. Hollow vertical tubes route cables internally instead of leaving them exposed, and the mount tilts -10 to +5 degrees for glare control.\n\nLockable caster wheels keep the cart stationary once positioned, and height adjusts from about 39 to 59 inches. A camera shelf sits above the main A/V shelf for a webcam or small conferencing device. No wall drilling is required, making this a straightforward option for renters who still want a large-screen setup.",
    specs: ["32-85\" TVs, up to 100 lbs", "39.37\"-59.06\" height", "Lockable caster wheels", "Tilts -10°/+5°", "Internal cable routing", "Camera shelf + A/V shelf"],
    pros: ["Widest TV size range, up to 85 inches", "Internal cable routing hides cords", "No wall drilling needed", "Separate camera shelf"],
    cons: ["$189.99, the priciest pick here", "100 lb capacity lower than similarly priced rivals", "Base width not listed for stability comparison"],
    bestFor: "Buyers with a large-screen TV who want the widest documented size compatibility in a rolling stand.",
  },
  {
    id: "heavy-duty-large-tv-cart-250lbs",
    rank: 6,
    badge: "Best Heavy-Duty Capacity",
    name: "Heavy Duty Mobile TV Cart for 55-120 Inch TVs, Holds Up to 250 lbs",
    price: "$249.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/41oM8EUupjL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MQG4BTL?tag=deskfinds0d-20",
    description: "This is the heavy-duty option in the roundup, built from heavy-gauge welded steel with a wide base to support TVs from 55 up to 120 inches and as much as 250 lbs, more than double the capacity of most rolling stands here. VESA compatibility extends to 800x600mm, covering large commercial and home theater displays that smaller carts cannot mount.\n\nThe wheels are upgraded, 360-degree swivel casters with a lock feature that prevents side-to-side drift, important given how much more mass this cart moves compared to a standard 32 to 75 inch stand. A height-adjustable shelf holds up to 44 lbs of components, and the price reflects the larger frame and higher-grade steel.",
    specs: ["55-120\" TVs, up to 250 lbs", "VESA up to 800x600mm", "Locking swivel casters", "Height-adjustable 44 lb shelf", "Heavy-gauge welded steel", "Wide stability base"],
    pros: ["250 lb capacity, highest in this roundup", "Fits screens up to 120 inches", "Wide base improves tip-over resistance", "Locking casters prevent drift under heavy load"],
    cons: ["$249.99, most expensive pick here", "Overkill for a single 55 inch TV", "Larger footprint needs more floor clearance"],
    bestFor: "Large-screen or commercial displays where standard rolling stands do not have enough rated capacity.",
  },
  {
    id: "perlegear-rolling-tv-stand-heavy-base",
    rank: 7,
    badge: "Best Base Stability",
    name: "Perlegear Rolling TV Stand for 32-84 Inch TV, Heavy-Duty Base",
    price: "$139.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/41MsXXPOJ0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08YN9BW51?tag=deskfinds0d-20",
    description: "Perlegear's cart is built around an extra-wide, heavy-duty base measuring 29.34 inches front to back and 23.14 inches side to side, wider than most competitors in this roundup, which improves resistance to tipping when the TV is at full height. Large rubber wheels roll smoothly on both hardwood and carpet.\n\nHeight adjusts across 11 levels from 39.37 to 59.06 inches for the TV plate, with a separate 11.81 to 33.46 inch range for the A/V shelf. The frame uses cold-rolled steel rated for 100 lbs, and a safety screw adds a second point of attachment beyond the standard bracket, a detail aimed at reducing the risk of the TV sliding loose during transport.",
    specs: ["32-84\" TVs, up to 100 lbs", "11 height adjustment levels", "29.34\" x 23.14\" wide base", "Cold-rolled steel frame", "Safety screw backup attachment", "Rubber wheels for hardwood + carpet"],
    pros: ["Wider base than most rivals improves stability", "11 height levels for fine adjustment", "Safety screw adds backup TV attachment", "Rolls smoothly on carpet and hardwood"],
    cons: ["100 lb capacity is mid-pack, not the highest", "84\" max TV size slightly below some rivals", "No built-in power outlet"],
    bestFor: "Households worried about tip-over risk who want the widest, most stable base in this roundup.",
  },
  {
    id: "fitueyes-rotating-tv-stand",
    rank: 8,
    badge: "Best Rotating Design",
    name: "FITUEYES Rolling TV Stand with Landscape to Portrait Rotation",
    price: "$139.99",
    rating: "Check current rating on Amazon",
    reviews: "Live figures on Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/413B+PzFGwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CL46CXF6?tag=deskfinds0d-20",
    description: "FITUEYES is the only cart in this roundup that rotates the TV from landscape to portrait orientation and swivels 40 degrees left or right, useful for digital signage, social media streaming, or gaming in portrait mode. It fits 32 to 75 inch TVs up to 88 lbs and uses an iron base rather than a glass or tubular base to reduce breakage risk.\n\nAll wheels lock, and cable management routes cords along the back of the center pole to keep them out of sight while the stand rotates or swivels. The tradeoff for the rotating mechanism is a lower 88 lb weight limit compared to fixed-orientation carts in the same price range.",
    specs: ["32-75\" TVs, up to 88 lbs", "Landscape to portrait rotation", "40° swivel", "All wheels lock", "Iron base, not glass or tubular", "Rear cable management"],
    pros: ["Only pick here with landscape-to-portrait rotation", "All wheels lock", "Iron base reduces breakage risk vs glass", "40° swivel for flexible viewing angles"],
    cons: ["88 lb capacity, lower than fixed-orientation rivals at this price", "75\" max TV size is smaller than several competitors", "Rotating mechanism adds a moving part that can wear over time"],
    bestFor: "Content creators, gamers, or retail displays that need portrait-mode rotation, not just side-to-side rolling.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Not all locking casters lock on all four wheels", explanation: "Marketing copy for rolling TV stands often says \"locking wheels\" without clarifying how many. Several carts in this roundup only lock 2 of 4 casters, which still allows the cart to pivot or drift sideways on an uneven floor. If kids or pets are around the stand, prioritize a model where all four wheels lock, not just the front or back pair." },
  { criterion: "Wheeled stands carry less weight than fixed stands", explanation: "A fixed TV console can rate its top surface for 150 lbs or more because the load sits directly on a rigid frame. A rolling stand routes that same weight through wheel mounts and a vertical pole, which are the weak point in the structure. Most rolling stands here top out at 88 to 110 lbs, with only the heavy-duty 250 lb pick breaking that pattern. Check your TV's actual weight, not just its screen size, before assuming a rolling stand can hold it." },
  { criterion: "Base footprint determines tip-over risk, not just weight rating", explanation: "A narrow base can meet its stated weight capacity on paper while still tipping if the TV is pushed off-center or the cart rolls over an uneven threshold. Look for a documented base width, ideally close to or wider than the TV's diagonal size at full height. Perlegear's 29.34 by 23.14 inch base is an example of a documented wide footprint; many budget listings omit this measurement entirely." },
  { criterion: "Height range vs your actual use case", explanation: "A cart topping out at 56 to 65 inches suits seated viewing in a bedroom or living room, but falls short for standing presentations, classrooms, or a cart pushed behind a tall counter. The Mount-It tall cart and similar presentation-focused models reach higher and add tilt, which matters more than raw height for glare control during video calls." },
  { criterion: "Wheels on carpet vs hardwood behave differently", explanation: "Small hard plastic casters can dig into carpet pile and become difficult to roll, while smooth hardwood floors make locking mechanisms more important since the cart can drift on its own. If your room has thick carpet, check for large rubber wheels rather than narrow plastic ones, since narrow wheels are more likely to catch and tip the stand." },
  { criterion: "VESA pattern compatibility still applies to rolling mounts", explanation: "A rolling TV stand does not bypass VESA mounting requirements. Confirm your TV's hole pattern, commonly listed in a range like 100x100mm to 600x400mm, matches the cart's supported range before ordering. A TV with a pattern outside that range will not mount even if the weight and size otherwise fit." },
  { criterion: "Cable management matters more on a mobile stand", explanation: "Cables that are fine on a stationary console can catch, stretch, or pull loose every time a rolling stand moves between rooms. Favor stands with internal or hollow-pole cable routing over exposed clip-on management, since internal routing keeps slack from building up as the cart rolls back and forth." },
];

export const faq: { q: string; a: string }[] = [
  { q: "Do all rolling TV stands have locking wheels?", a: "Most listed here have some form of locking wheel, but not all four wheels lock on every model. Several carts only lock the front two or back two casters. If safety around kids or pets is a priority, check the specific listing for how many of the four wheels include a locking or brake mechanism before buying." },
  { q: "Can a TV stand on wheels hold as much weight as a fixed TV stand?", a: "Generally no. Fixed consoles route weight through a rigid frame and can rate their top surface for 150 lbs or more. Rolling stands route weight through wheel mounts and a vertical pole, which are structurally weaker, so most rolling stands cap out around 88 to 110 lbs. Only heavy-duty models built with reinforced steel and a wide base reach higher, up to 250 lbs in this roundup." },
  { q: "Will a rolling TV stand tip over?", a: "It can, especially with a narrow base, an off-center TV, or rolling over an uneven threshold like a door strip. Choose a stand with a documented wide base footprint and stay within the rated weight capacity. Locking the wheels once the cart is positioned also reduces drift that can contribute to tipping." },
  { q: "Do rolling TV stands work on carpet?", a: "Most will, but wheel size and material matter. Large rubber wheels roll over carpet pile more easily than small hard plastic casters, which can catch and make the cart harder to push in a straight line. If your room is fully carpeted, favor a model with larger wheels rather than the smallest, lightest casters." },
  { q: "What is the difference between a rolling TV stand and a fixed TV cart for presentations?", a: "Presentation-focused rolling carts, like the Mount-It Tall Mobile TV Cart in this guide, typically add tilt adjustment, a taller height range, and a dedicated webcam or camera tray on top of the standard A/V shelf. A basic living-room rolling stand usually skips the tilt and camera tray in favor of a lower price and shorter height range." },
  { q: "Can I mount any TV on a rolling stand?", a: "Only if your TV's VESA hole pattern falls within the stand's supported range, commonly 100x100mm up to 600x400mm on the models in this guide, and your TV's actual weight is under the stand's rated capacity. Screen size alone does not guarantee compatibility, since VESA pattern and weight vary by TV model even at the same screen size." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-for-55-inch-tv", title: "Best TV Stands for 55 Inch TVs (2026)" },
  { href: "/guide/best-cable-management-boxes-for-desks", title: "Best Cable Management Boxes for Desks (2026)" },
  { href: "/guide/best-under-desk-storage-drawers", title: "Best Under Desk Storage Drawers (2026)" },
];
