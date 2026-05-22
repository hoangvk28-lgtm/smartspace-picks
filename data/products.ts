import { buildAmazonUrl } from "@/lib/affiliate";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProductScore {
  overall: number;       // 1–10  weighted aggregate
  smallSpaceFit: number; // how well it works in a tight/dorm space
  buildQuality: number;  // materials, finish, sturdiness
  easeOfUse: number;     // setup time, daily usability
  valueForMoney: number; // price vs. performance vs. competition
  buyerFeedback: number; // derived from verified Amazon review patterns
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  image: string;
  amazonUrl: string;
  priceRange: string;   // display string, e.g. "$25–$30"
  badge?: string;       // single primary editorial badge
  shortDescription: string;
  bestFor: string[];
  notIdealFor: string[];
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  scores: ProductScore;
  reviewSummary: string;
  alternatives: string[];      // sibling product IDs
  relatedGuideSlugs: string[]; // guides that feature this product
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const products: Product[] = [

  // ── Desk Lamps ─────────────────────────────────────────────────────────────

  {
    id: "compact-led-lamp-usb",
    slug: "compact-led-desk-lamp-with-usb-port",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-lamps",
    image: "/images/products/compact-led-lamp.jpg",
    amazonUrl: buildAmazonUrl("B06W9FM5T6"),
    priceRange: "$35–$45",
    badge: "Best Budget",
    name: "Compact LED Desk Lamp with USB Port",
    shortDescription: "Seven brightness levels, five color modes, and a USB-A charging port for under $40.",
    bestFor: [
      "Students who want dimmable, multi-color lighting on a budget",
      "Dorm desks where outlet access is limited",
      "Night reading without disturbing a roommate",
    ],
    notIdealFor: [
      "Large desk surfaces that need wide-area illumination",
      "Users who want a clamp mount to free up desk space",
    ],
    specs: {
      "Color Modes": "5 (2700K–6500K)",
      "Brightness Levels": "7",
      "Wattage": "12W",
      "USB Charging Port": "5V / 1A USB-A",
      "Mount Type": "Weighted base",
      "Flicker": "Flicker-free LED",
      "Memory Function": "Yes — restores last setting",
      "Arm": "Flexible single-arm with 180° rotation",
    },
    pros: [
      "Five color temperatures from warm 2700K to cool 6500K",
      "Touch-sensitive controls are responsive and clean",
      "USB-A port charges phones and small devices",
      "Memory function restores your preferred setting at startup",
      "Slim base leaves most desk surface free",
    ],
    cons: [
      "Arm rotation is limited compared to a full gooseneck design",
      "Touch panel can activate by brushing against it accidentally",
      "USB port is 1A only — too slow for tablet charging",
    ],
    scores: {
      overall: 8.8,
      smallSpaceFit: 9.2,
      buildQuality: 8.0,
      easeOfUse: 9.0,
      valueForMoney: 9.5,
      buyerFeedback: 8.4,
    },
    reviewSummary:
      "The best budget desk lamp we evaluated for students. It trades some build quality for a very competitive price and includes features — five color temperatures, a USB port, and a memory function — that often cost twice as much on competing models. The slim base keeps most desk space clear, which matters on a typical 48-inch dorm or bedroom desk.",
    alternatives: ["wide-angle-study-lamp"],
    relatedGuideSlugs: ["desk-lamps-small-desks"],
  },

  {
    id: "wide-angle-study-lamp",
    slug: "wide-angle-study-lamp-auto-dimming",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-lamps",
    image: "/images/products/wide-angle-study-lamp.jpg",
    amazonUrl: buildAmazonUrl("B00R7ECFMQ"),
    priceRange: "$100–$115",
    badge: "Best Overall",
    name: "Wide-Angle Study Lamp with Auto-Dimming",
    shortDescription: "Engineered for study: wide shadow-free spread, ambient sensor, and zero flicker — worth the price for long desk sessions.",
    bestFor: [
      "Students or remote workers who log 4+ hours at a desk daily",
      "Anyone who has experienced eye strain from cheap desk lighting",
      "Setups where the lamp clamps to the back edge, freeing the desk surface entirely",
    ],
    notIdealFor: [
      "Budget-conscious shoppers — this sits at the premium end",
      "Desks with edges thicker than 2.75 inches (clamp limit)",
    ],
    specs: {
      "Color Temperature": "4000K neutral white",
      "Light Spread": "90cm arc — full desk coverage",
      "Lux at 40cm": "≥ 1,000 lux",
      "Mount Type": "Clamp (fits edges up to 2.75\")",
      "Wattage": "14W",
      "USB Charging Port": "5V / 1A USB-A",
      "Auto-Dimming": "Yes — ambient light sensor",
      "Flicker": "Zero-flicker certified",
    },
    pros: [
      "Wide 90cm light arc covers the full desk surface evenly",
      "Ambient sensor adjusts brightness automatically as room light changes",
      "Zero-flicker certification — clinically better for extended study",
      "Clamp mount frees up 100% of desk surface",
      "Built-in USB port for device charging",
    ],
    cons: [
      "Premium price ($100+) is a stretch for casual users",
      "Only one fixed color temperature (4000K) — no warm light option",
      "Clamp arm is large; visible on smaller desks",
    ],
    scores: {
      overall: 9.3,
      smallSpaceFit: 9.0,
      buildQuality: 9.5,
      easeOfUse: 8.8,
      valueForMoney: 7.8,
      buyerFeedback: 9.2,
    },
    reviewSummary:
      "The top-rated option for serious desk users. Its wide illumination arc, ambient auto-dimming, and zero-flicker design address every major complaint seen in reviews of cheaper lamps. The clamp mount is genuinely transformative for small desks — it gives you back the footprint of a full lamp base. The premium price is justified for daily users; budget buyers should look at the Compact LED Lamp instead.",
    alternatives: ["compact-led-lamp-usb"],
    relatedGuideSlugs: ["desk-lamps-small-desks"],
  },

  // ── Monitor Stands ─────────────────────────────────────────────────────────

  {
    id: "adjustable-monitor-riser",
    slug: "adjustable-monitor-riser-storage-shelf",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "/images/products/monitor-riser-storage.jpg",
    amazonUrl: buildAmazonUrl("B000O80EKS"),
    priceRange: "$30–$40",
    badge: "Best Overall",
    name: "Adjustable Monitor Riser with Storage Shelf",
    shortDescription: "Raises your monitor to eye level and creates a full-width storage shelf — the most practical riser for small desks.",
    bestFor: [
      "Single-monitor setups on any desk size",
      "Users who want under-screen storage without drilling",
      "Students who want a clean, minimal desk look",
    ],
    notIdealFor: [
      "Dual-monitor setups (use a monitor arm instead)",
      "Users who need to frequently reposition their screen angle",
    ],
    specs: {
      "Platform Size": "15.5\" × 9.5\"",
      "Height": "3 inches",
      "Max Load": "55 lbs",
      "Material": "Steel with rubberized feet",
      "Compatibility": "Most monitors up to 30 inches",
      "Assembly": "None required",
    },
    pros: [
      "Creates a full-width under-screen storage shelf for keyboard, notebook, or items",
      "Supports up to 55 lbs — handles large monitors without flex",
      "No-assembly, open-box ready",
      "Clean minimal design works with any desk aesthetic",
      "Large platform fits ultrawide monitors",
    ],
    cons: [
      "Fixed height — cannot adjust elevation",
      "No cable routing channels",
    ],
    scores: {
      overall: 8.8,
      smallSpaceFit: 9.2,
      buildQuality: 9.0,
      easeOfUse: 9.8,
      valueForMoney: 9.0,
      buyerFeedback: 8.5,
    },
    reviewSummary:
      "The simplest high-quality monitor riser we evaluated. No assembly, generous load capacity, and a storage shelf that effectively adds a layer of usable desk space under your screen. The fixed 3-inch height works for most seated desk positions; users who need higher elevation should choose a monitor arm.",
    alternatives: ["dual-monitor-arm-mount"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "dual-monitor-arm-mount",
    slug: "dual-monitor-articulating-arm-mount",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "/images/products/dual-monitor-arm.jpg",
    amazonUrl: buildAmazonUrl("B009S750LA"),
    priceRange: "$38–$50",
    badge: "Best for Dual Monitors",
    name: "Dual Monitor Articulating Arm Mount",
    shortDescription: "Clears your entire desk surface by mounting two monitors on adjustable arms — the right choice for dual-screen compact setups.",
    bestFor: [
      "Remote workers with dual-monitor setups in a small space",
      "Users who frequently switch between work positions or screen orientations",
      "Anyone whose desk surface is perpetually cluttered with monitor bases",
    ],
    notIdealFor: [
      "Monitors without VESA mount holes",
      "Very lightweight desks prone to wobble under arm leverage",
      "Users who want a quick no-tools install",
    ],
    specs: {
      "Max Screen Size": "27 inches per arm",
      "Max Weight per Arm": "22 lbs",
      "VESA Compatibility": "75×75mm and 100×100mm",
      "Mount Options": "C-clamp or grommet",
      "Max Desk Thickness": "3.15 inches",
      "Range of Motion": "Full tilt, swivel, and rotation",
      "Cable Management": "Built-in routing channels",
    },
    pros: [
      "Clears 100% of desk surface under both monitors",
      "Full range of motion: tilt, swivel, and portrait rotation",
      "Integrated cable management channels keep wires hidden",
      "Gas spring provides smooth, one-hand screen adjustment",
      "Supports screens up to 27 inches each",
    ],
    cons: [
      "Installation takes 30–45 minutes",
      "Wobble on desks under 20 lbs or with thin tops",
      "Monitors must have VESA mount holes",
    ],
    scores: {
      overall: 8.7,
      smallSpaceFit: 9.5,
      buildQuality: 8.2,
      easeOfUse: 7.0,
      valueForMoney: 8.8,
      buyerFeedback: 8.4,
    },
    reviewSummary:
      "The best option for dual-monitor users who want to reclaim their desk surface. Once installed, both screens float freely above the desk, completely eliminating monitor bases. The one-time 30–45 minute setup is worth it for anyone who will benefit from this daily. Single-monitor users and those on lightweight desks are better served by a simple riser.",
    alternatives: ["adjustable-monitor-riser"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  // ── Laptop Stands ──────────────────────────────────────────────────────────

  {
    id: "foldable-aluminum-laptop-riser",
    slug: "foldable-aluminum-laptop-stand",
    categorySlug: "desk-setup",
    subcategorySlug: "laptop-stands",
    image: "/images/products/aluminum-laptop-stand.jpg",
    amazonUrl: buildAmazonUrl("B076HCCQZQ"),
    priceRange: "$25–$32",
    badge: "Best Overall",
    name: "Foldable Aluminum Laptop Riser",
    shortDescription: "Six adjustable heights, folds completely flat, and supports up to 15.6-inch laptops — the most reliable under-$30 stand.",
    bestFor: [
      "Students who commute between campus and home with their laptop",
      "Remote workers who want a clean ergonomic lift without a large base",
      "Anyone on a desk smaller than 48 inches",
    ],
    notIdealFor: [
      "Laptops larger than 15.6 inches",
      "Users who want built-in cable routing",
    ],
    specs: {
      "Compatible Laptop Sizes": "10–15.6 inches",
      "Material": "Aluminum alloy",
      "Height Levels": "6 adjustable positions",
      "Max Load": "22 lbs",
      "Weight": "1.1 lbs",
      "Folded Thickness": "Under 1 inch",
      "Non-slip Pads": "Silicone on all contact points",
    },
    pros: [
      "Adjustable to 6 height levels for different postures and use cases",
      "Folds flat in seconds — easy to pack or store",
      "Aluminum build is lighter and more durable than plastic alternatives",
      "Silicone pads protect both laptop and desk",
      "Under $30 — excellent price-to-quality ratio",
    ],
    cons: [
      "No built-in cable management",
      "Width is fixed — won't fit 17-inch laptops",
    ],
    scores: {
      overall: 9.1,
      smallSpaceFit: 9.5,
      buildQuality: 8.8,
      easeOfUse: 9.5,
      valueForMoney: 9.3,
      buyerFeedback: 9.0,
    },
    reviewSummary:
      "Our top laptop stand for students and commuters. The combination of genuine aluminum construction, six height levels, and sub-1-inch folded thickness makes it the most portable full-featured stand in its price range. It consistently earns top marks among small-desk users because it doesn't fight for surface space when folded down.",
    alternatives: ["adjustable-portable-laptop-stand"],
    relatedGuideSlugs: ["laptop-stands-small-desks"],
  },

  {
    id: "adjustable-portable-laptop-stand",
    slug: "adjustable-multi-angle-portable-laptop-stand",
    categorySlug: "desk-setup",
    subcategorySlug: "laptop-stands",
    image: "/images/products/portable-laptop-stand.jpg",
    amazonUrl: buildAmazonUrl("B08FBCZ5TM"),
    priceRange: "$14–$20",
    badge: "Best Budget",
    name: "Adjustable Multi-Angle Portable Laptop Stand",
    shortDescription: "Ultra-lightweight, folds flatter than a notebook, and covers 11–17-inch laptops — the best under-$20 stand.",
    bestFor: [
      "Budget-conscious students who need a stand for occasional use",
      "Travelers and commuters who want something nearly weightless in a bag",
      "Anyone whose laptop is larger than 15.6 inches",
    ],
    notIdealFor: [
      "Heavy typing sessions — the lighter plastic build can flex under force",
      "Users who need precise, repeatable height adjustments",
    ],
    specs: {
      "Compatible Laptop Sizes": "11–17 inches",
      "Material": "ABS plastic with silicone pads",
      "Height Levels": "Continuous adjustment",
      "Max Load": "11 lbs",
      "Weight": "0.4 lbs",
      "Folded Thickness": "Under 0.5 inches",
    },
    pros: [
      "Ultra-light at 0.4 lbs — barely noticeable in a bag",
      "Fits laptops up to 17 inches — wider compatibility than most",
      "Continuous angle adjustment (not fixed steps)",
      "Under $20 — lowest cost pick in this guide",
    ],
    cons: [
      "Plastic build flexes under heavy typing force",
      "Adjustment mechanism lacks precise detents — can slip slightly",
      "Not suitable for 17-inch laptops heavier than 8 lbs",
    ],
    scores: {
      overall: 8.0,
      smallSpaceFit: 9.3,
      buildQuality: 7.0,
      easeOfUse: 8.8,
      valueForMoney: 9.6,
      buyerFeedback: 8.0,
    },
    reviewSummary:
      "The best budget entry in this category and the only stand we evaluated that comfortably fits 17-inch laptops. Build quality is the trade-off at this price — it works well for light use but flexes under sustained heavy typing. For casual use, travel, or a secondary stand, it represents extraordinary value.",
    alternatives: ["foldable-aluminum-laptop-riser"],
    relatedGuideSlugs: ["laptop-stands-small-desks"],
  },

  // ── Cable Management ───────────────────────────────────────────────────────

  {
    id: "desk-cable-organizer-kit",
    slug: "desk-cable-management-organizer-kit",
    categorySlug: "dorm-essentials",
    subcategorySlug: "cable-management",
    image: "/images/products/cable-organizer-kit.jpg",
    amazonUrl: buildAmazonUrl("B076HZQZQ0"),
    priceRange: "$10–$14",
    badge: "Best Overall",
    name: "26-Piece Desk Cable Organizer Kit",
    shortDescription: "Everything needed to tame a messy desk setup: clips, velcro ties, and cable sleeves — all in one under-$12 kit.",
    bestFor: [
      "Dorm rooms where cable clutter behind a desk is the biggest visual problem",
      "Students setting up a new workspace from scratch",
      "Anyone managing 3–6 cables at a desk (phone, laptop, lamp, monitors)",
    ],
    notIdealFor: [
      "Textured or rough desk surfaces (adhesive clips don't hold reliably)",
      "Complex cable runs of 10+ cables that need a structured tray",
    ],
    specs: {
      "Total Pieces": "26",
      "Included Items": "Adhesive cable clips (3 sizes), reusable velcro ties, cable sleeve",
      "Adhesive Type": "Self-adhesive, heat-removable",
      "Cable Diameter Compatibility": "Up to 0.5 inches",
      "Clip Surfaces": "Wood, glass, laminate, plastic",
    },
    pros: [
      "26-piece kit covers a complete desk setup in one purchase",
      "Velcro ties are fully reusable — no scissors needed to adjust",
      "Three clip sizes handle different cable thicknesses",
      "Adhesive releases cleanly with heat — no damage to dorm surfaces",
      "Under $12 — easy to add to any back-to-school order",
    ],
    cons: [
      "Adhesive clips do not stick to rough, textured, or fabric surfaces",
      "Cable sleeve included is short (12 inches) — may need more for desk-to-floor runs",
    ],
    scores: {
      overall: 8.9,
      smallSpaceFit: 9.5,
      buildQuality: 7.8,
      easeOfUse: 9.2,
      valueForMoney: 9.7,
      buyerFeedback: 8.8,
    },
    reviewSummary:
      "The most practical cable management kit for dorm rooms. At under $12, it includes every type of accessory needed for a clean desk setup, and the heat-removable adhesive is specifically valuable for students in temporary housing. The velcro ties alone are worth the purchase price for anyone who currently uses zip ties on their cables.",
    alternatives: ["under-desk-cable-tray"],
    relatedGuideSlugs: ["cable-management-dorm"],
  },

  {
    id: "under-desk-cable-tray",
    slug: "under-desk-cable-management-tray",
    categorySlug: "dorm-essentials",
    subcategorySlug: "cable-management",
    image: "/images/products/cable-tray.jpg",
    amazonUrl: buildAmazonUrl("B07GFRB81Q"),
    priceRange: "$18–$26",
    badge: undefined,
    name: "Under-Desk Cable Management Tray",
    shortDescription: "Hides a full power strip and all its cables in a mounting tray under your desk — the cleanest solution for eliminating floor clutter.",
    bestFor: [
      "Anyone whose floor under their desk is a tangle of power strip cables",
      "Home office users who want a permanent, professional cable solution",
      "Setups with 4+ powered devices at the desk",
    ],
    notIdealFor: [
      "Dorm rooms where drilling or adhesive trays may violate housing rules",
      "Very shallow desks (under 14 inches deep) with no under-desk clearance",
    ],
    specs: {
      "Tray Dimensions": "16\" × 4\" × 3\"",
      "Max Cable Diameter": "1.2 inches (fits most power strips)",
      "Mount Options": "Screw mount or 3M adhesive strips (included)",
      "Material": "ABS plastic with metal brackets",
      "Color": "Black / white",
    },
    pros: [
      "Hides a complete power strip and all cables completely out of sight",
      "Both screw and adhesive mounting options included",
      "Open cable-entry slots on both sides for flexible routing",
      "Large enough for most standard 6-outlet power strips",
    ],
    cons: [
      "Adhesive mount may not hold on undersides of particleboard desks long-term",
      "Installation is more involved than clip-based solutions",
    ],
    scores: {
      overall: 8.4,
      smallSpaceFit: 8.8,
      buildQuality: 8.5,
      easeOfUse: 7.5,
      valueForMoney: 8.5,
      buyerFeedback: 8.2,
    },
    reviewSummary:
      "The best option for eliminating floor-level cable clutter permanently. Where adhesive clips manage individual cables, this tray manages the entire power strip and all connected cables at once — making it the more complete solution for home office users. Students in dorm rooms should confirm their housing rules allow adhesive mounting before purchasing.",
    alternatives: ["desk-cable-organizer-kit"],
    relatedGuideSlugs: ["cable-management-dorm"],
  },

  // ── Bedside Caddies ────────────────────────────────────────────────────────

  {
    id: "hanging-bedside-caddy",
    slug: "hanging-bedside-organizer-caddy",
    categorySlug: "dorm-essentials",
    subcategorySlug: "bedside-caddies",
    image: "/images/products/bedside-caddy.jpg",
    amazonUrl: buildAmazonUrl("B08GKZJVXJ"),
    priceRange: "$13–$17",
    badge: "Best Overall",
    name: "Hanging Bedside Organizer Caddy",
    shortDescription: "Eight organized pockets that hang from any mattress edge — keeps phone, charger, headphones, and snacks within reach without a bedside table.",
    bestFor: [
      "Dorm rooms with no room for a bedside table",
      "Students in lofted beds who need essentials within arm's reach",
      "Anyone who keeps losing their phone charger in the sheets",
    ],
    notIdealFor: [
      "Mattresses thicker than 14 inches (attachment may not seat securely)",
      "Users who need rigid structure — this is a soft fabric organizer",
    ],
    specs: {
      "Pockets": "8 (including 1 large center pocket for tablet/book)",
      "Material": "600D Oxford fabric",
      "Attachment": "Slides under mattress — no hardware needed",
      "Mattress Compatibility": "Up to 14 inches thick",
      "Bottle Holder": "Bungee cord side pocket",
      "Washable": "Hand wash recommended",
    },
    pros: [
      "No installation — slides under mattress in 10 seconds",
      "8 pockets fits phone, charger, remote, book, headphones, snacks, and more",
      "Large center pocket holds 10-inch tablets",
      "Bungee-cord bottle pocket keeps water bottles secure",
      "Under $15 — a practical addition to any dorm setup",
    ],
    cons: [
      "Can slide out of position on very smooth fitted sheet materials",
      "Fabric is not rigid — items settle and shift inside soft pockets",
    ],
    scores: {
      overall: 9.0,
      smallSpaceFit: 9.8,
      buildQuality: 8.0,
      easeOfUse: 9.8,
      valueForMoney: 9.6,
      buyerFeedback: 8.8,
    },
    reviewSummary:
      "The most-reviewed item in this category and it earns the reputation. The no-installation design, large pocket count, and sub-$15 price make it an automatic addition to any dorm room setup. The main complaint in negative reviews — sliding on smooth sheets — is easily fixed by tucking more material under the mattress. Works equally well on lofted and standard dorm beds.",
    alternatives: ["over-mattress-pocket-organizer"],
    relatedGuideSlugs: ["bedside-caddies-students"],
  },

  {
    id: "over-mattress-pocket-organizer",
    slug: "over-mattress-storage-pocket-organizer",
    categorySlug: "dorm-essentials",
    subcategorySlug: "bedside-caddies",
    image: "/images/products/mattress-organizer.jpg",
    amazonUrl: buildAmazonUrl("B07KXKQ8QJ"),
    priceRange: "$9–$13",
    badge: "Best Budget",
    name: "Over-Mattress Storage Pocket Organizer",
    shortDescription: "A slim 4-pocket organizer that sits on top of the mattress — simpler and lighter than a full caddy, and under $10.",
    bestFor: [
      "Budget-conscious students who just need phone, charger, and book accessible",
      "Very thick mattresses (16+ inches) where hanging caddies don't reach",
      "Users who want a lighter, more minimal solution",
    ],
    notIdealFor: [
      "Users who need more than 4 pockets",
      "Anyone with an active sleeper partner — it shifts easily",
    ],
    specs: {
      "Pockets": "4 slim external pockets",
      "Material": "Polyester canvas",
      "Attachment": "Lays flat over mattress edge",
      "Size": "12\" × 8\"",
      "Max Item Size": "Small phone, charger, small book",
    },
    pros: [
      "Under $10 — the lowest-cost bedside solution we evaluated",
      "Works with any mattress thickness",
      "Very lightweight and easy to move or remove for laundry",
    ],
    cons: [
      "Only 4 pockets — significantly less storage than a full caddy",
      "Pockets are narrow — doesn't fit larger phones with thick cases",
      "No bottle holder",
    ],
    scores: {
      overall: 7.8,
      smallSpaceFit: 9.0,
      buildQuality: 7.0,
      easeOfUse: 9.5,
      valueForMoney: 9.5,
      buyerFeedback: 7.5,
    },
    reviewSummary:
      "An honest budget pick for users who only need a few pockets within reach. The trade-off is clear: fewer pockets, simpler design, lower price. Students who need to store more than 3–4 items will quickly outgrow it and wish they had bought the hanging caddy. But as a minimal solution for phone and charger access, it works reliably.",
    alternatives: ["hanging-bedside-caddy"],
    relatedGuideSlugs: ["bedside-caddies-students"],
  },

  // ── Under-Bed Storage ──────────────────────────────────────────────────────

  {
    id: "zippered-underbed-bags",
    slug: "zippered-fabric-underbed-storage-bags",
    categorySlug: "small-room-storage",
    subcategorySlug: "under-bed-storage",
    image: "/images/products/underbed-storage-bags.jpg",
    amazonUrl: buildAmazonUrl("B082JDKG24"),
    priceRange: "$20–$26",
    badge: "Best Overall",
    name: "Zippered Fabric Under-Bed Storage Bags (Set of 2)",
    shortDescription: "Two large breathable bags with clear windows and full zipper seals — the most popular under-bed storage for dorms and small bedrooms.",
    bestFor: [
      "Storing seasonal clothing, extra bedding, and dorm extras",
      "Bed frames with 6–9 inches of clearance (standard dorm and apartment beds)",
      "Anyone who wants visual confirmation of contents without opening bags",
    ],
    notIdealFor: [
      "Very low platform beds with under 5 inches of clearance",
      "Items that need rigid structure to prevent wrinkling (formal clothing)",
    ],
    specs: {
      "Dimensions": "43\" × 20\" × 6.5\" each",
      "Material": "Non-woven breathable fabric",
      "Closure": "Full perimeter zipper",
      "Handles": "Reinforced pull handles on both sides",
      "Visibility": "Clear vinyl window on top panel",
      "Quantity": "2 bags included",
      "Min. Clearance": "7 inches recommended",
    },
    pros: [
      "Set of 2 provides excellent cost-per-unit value",
      "Breathable fabric prevents moisture and mildew in clothing",
      "Full-perimeter zipper seals completely against dust",
      "Clear window shows contents without opening",
      "Reinforced handles make sliding in/out easy",
    ],
    cons: [
      "Soft structure can wrinkle clothing without a folding board",
      "Items shift inside without internal dividers",
    ],
    scores: {
      overall: 9.0,
      smallSpaceFit: 9.3,
      buildQuality: 8.5,
      easeOfUse: 9.2,
      valueForMoney: 9.5,
      buyerFeedback: 9.0,
    },
    reviewSummary:
      "The most-reviewed and consistently top-rated under-bed storage option for small rooms. The set-of-2 format is practical — most users immediately separate by category (summer clothing vs. winter bedding). The breathable non-woven fabric is the right material for clothing; avoid storing shoes or hard items, which can misshape the bags over time.",
    alternatives: ["rolling-underbed-container"],
    relatedGuideSlugs: ["under-bed-storage-small-rooms"],
  },

  {
    id: "rolling-underbed-container",
    slug: "rolling-underbed-storage-container-with-lid",
    categorySlug: "small-room-storage",
    subcategorySlug: "under-bed-storage",
    image: "/images/products/rolling-underbed-container.jpg",
    amazonUrl: buildAmazonUrl("B07CQMGXNT"),
    priceRange: "$28–$38",
    badge: undefined,
    name: "Rolling Under-Bed Storage Container with Lid",
    shortDescription: "A rigid-lid rolling container that slides smoothly on any floor — best for shoes, accessories, and items you access frequently.",
    bestFor: [
      "Shoes, accessories, and frequently-accessed items",
      "Hard floors where a rolling container glides smoothly",
      "Users who want to pull storage out and push it back easily",
    ],
    notIdealFor: [
      "Platform beds with very low clearance (needs 7.5+ inches)",
      "Carpet floors — wheels snag and roll poorly on thick pile",
      "Bulky or oddly-shaped items that don't pack flat",
    ],
    specs: {
      "Dimensions": "28\" × 18\" × 6.5\"",
      "Material": "Polypropylene plastic with wheeled base",
      "Lid": "Snap-on clear lid",
      "Wheels": "4 directional casters",
      "Min. Clearance": "7.5 inches",
      "Max Load": "40 lbs",
    },
    pros: [
      "Rolls out smoothly on hardwood and tile floors",
      "Clear lid shows contents from above",
      "Rigid sides keep items organized and prevent crushing",
      "Handles on both ends for lifting out completely",
    ],
    cons: [
      "Wheels do not work on thick carpet",
      "Rigid plastic takes up more vertical clearance than fabric bags",
      "Single unit — less capacity than the 2-bag fabric set at a higher price",
    ],
    scores: {
      overall: 8.2,
      smallSpaceFit: 8.5,
      buildQuality: 8.8,
      easeOfUse: 8.5,
      valueForMoney: 7.8,
      buyerFeedback: 8.0,
    },
    reviewSummary:
      "The best choice for items you access regularly — shoes, gym clothes, accessories — where the rolling feature genuinely pays off. The rigid lid keeps contents organized and prevents the shape distortion that affects fabric bags. However, it requires smooth floors and more bed clearance than fabric alternatives, making it a secondary recommendation behind the zippered bags for most dorm and small bedroom use cases.",
    alternatives: ["zippered-underbed-bags"],
    relatedGuideSlugs: ["under-bed-storage-small-rooms"],
  },

  // ── Slim Storage Carts ─────────────────────────────────────────────────────

  {
    id: "narrow-rolling-storage-cart",
    slug: "narrow-rolling-storage-cart-with-drawers",
    categorySlug: "small-room-storage",
    subcategorySlug: "storage-carts",
    image: "/images/products/rolling-storage-cart.jpg",
    amazonUrl: buildAmazonUrl("B074YXCK9H"),
    priceRange: "$35–$50",
    badge: "Best Overall",
    name: "Narrow Rolling Storage Cart with Drawers",
    shortDescription: "A slim 3-drawer rolling cart that fits between furniture gaps — the most versatile small-room storage upgrade under $50.",
    bestFor: [
      "The gap between a desk and a wall or beside a dresser",
      "Dorm rooms that need drawer organization without a full dresser",
      "Bathrooms, kitchens, and laundry areas in small apartments",
    ],
    notIdealFor: [
      "Very rough or uneven floors — casters may rattle or catch",
      "Gaps narrower than 10 inches",
    ],
    specs: {
      "Dimensions": "13.7\" W × 10.2\" D × 24.4\" H",
      "Drawers": "3 removable drawers",
      "Material": "Polypropylene plastic frame and drawers",
      "Wheels": "4 locking casters",
      "Max Load per Drawer": "6.6 lbs",
      "Assembly": "Required (~15 minutes)",
    },
    pros: [
      "Narrow 13.7-inch width fits gaps beside desks, dressers, or between appliances",
      "Locking casters keep it stationary when parked",
      "Removable drawers make deep cleaning easy",
      "Available in multiple colors to match room aesthetics",
      "Handles on each drawer for smooth pull-out",
    ],
    cons: [
      "Drawers have no internal dividers (can be added separately)",
      "Plastic construction won't survive heavy loads beyond spec",
      "Assembly required — instructions are basic",
    ],
    scores: {
      overall: 9.0,
      smallSpaceFit: 9.8,
      buildQuality: 8.2,
      easeOfUse: 8.5,
      valueForMoney: 9.0,
      buyerFeedback: 9.0,
    },
    reviewSummary:
      "The single most-versatile storage addition for small rooms. The narrow width is the key feature — it turns otherwise wasted gap space beside furniture into organized drawer storage. Students frequently report using one beside a dorm desk for school supplies, beside a bed for personal items, and taking it home for bathroom storage between semesters. The locking wheels are essential; make sure to engage them when parked to prevent unwanted rolling.",
    alternatives: ["compact-3tier-storage-tower"],
    relatedGuideSlugs: [],
  },

  {
    id: "compact-3tier-storage-tower",
    slug: "compact-3-tier-desk-storage-tower",
    categorySlug: "small-room-storage",
    subcategorySlug: "storage-carts",
    image: "/images/products/storage-tower.jpg",
    amazonUrl: buildAmazonUrl("B079B3GK3S"),
    priceRange: "$22–$32",
    badge: "Best Budget",
    name: "Compact 3-Tier Storage Tower",
    shortDescription: "A lightweight stackable tower that adds vertical storage without eating floor space — under $30 and assembles in minutes.",
    bestFor: [
      "Desk corners for office supplies and small electronics",
      "Bathroom countertops in shared dorm bathrooms",
      "Users who want vertical open-shelf storage rather than drawers",
    ],
    notIdealFor: [
      "Items that need to be hidden or dust-protected (open shelves)",
      "Heavy items — open tiers are less stable than enclosed drawers under load",
    ],
    specs: {
      "Dimensions": "9.1\" W × 6.3\" D × 19.1\" H",
      "Tiers": "3 open shelves",
      "Material": "ABS plastic",
      "Max Load per Shelf": "3.3 lbs",
      "Assembly": "Snap-together, no tools",
      "Base": "Non-slip feet (no wheels)",
    },
    pros: [
      "Snap-together assembly — no tools, under 5 minutes",
      "Footprint is under 10 inches wide — fits on desk corners",
      "Open design makes contents visible and accessible at a glance",
      "Very lightweight — easy to move when rearranging",
    ],
    cons: [
      "Open shelves accumulate dust — not ideal for items needing protection",
      "Lighter weight means it can tip if top shelf is overloaded",
      "No wheels — moving requires lifting",
    ],
    scores: {
      overall: 8.0,
      smallSpaceFit: 9.2,
      buildQuality: 7.5,
      easeOfUse: 9.5,
      valueForMoney: 9.3,
      buyerFeedback: 7.8,
    },
    reviewSummary:
      "A compact, zero-tool storage tower best suited for lightweight items like stationery, toiletries, or small accessories. The snap-together design and under-10-inch footprint make it one of the easiest storage additions to add to a dorm desk corner or shared bathroom. For items requiring more organization or protection, the rolling cart with drawers is the better choice.",
    alternatives: ["narrow-rolling-storage-cart"],
    relatedGuideSlugs: [],
  },
];

// ─── Type exports ─────────────────────────────────────────────────────────────

export type ProductSubcategory =
  | "desk-lamps"
  | "monitor-stands"
  | "laptop-stands"
  | "cable-management"
  | "bedside-caddies"
  | "under-bed-storage"
  | "storage-carts";
