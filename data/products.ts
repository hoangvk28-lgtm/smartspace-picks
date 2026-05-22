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

  // ── Desk Organizers ────────────────────────────────────────────────────────

  {
    id: "desktop-organizer-with-drawers",
    slug: "desktop-organizer-with-drawers-pen-holder",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-organizers",
    image: "/images/products/desktop-organizer-drawers.jpg",
    amazonUrl: buildAmazonUrl("B07CQZF3KZ"),
    priceRange: "$22–$30",
    badge: "Best Overall",
    name: "Desktop Organizer with Drawers and Pen Holder",
    shortDescription: "A two-drawer desktop organizer with a front pen-and-pencil compartment — consolidates desk clutter into a single vertical footprint.",
    bestFor: [
      "Students who want pens, scissors, sticky notes, and small supplies in one spot",
      "Small desks where surface clutter is the biggest problem",
      "Anyone who uses the same 10–15 supplies every day and wants them instantly accessible",
    ],
    notIdealFor: [
      "Users who need to store large notebooks or A4/letter paper flat",
      "Very narrow desks under 24 inches where even a small organizer competes for room",
    ],
    specs: {
      "Dimensions": "5.1\" W × 9.5\" D × 9.5\" H",
      "Drawers": "2 pull-out drawers",
      "Pen Compartments": "Multiple slots in front tray",
      "Material": "ABS plastic",
      "Drawer Depth": "3.5 inches each",
      "Color Options": "Black / white / wood-tone",
      "Assembly": "None required",
    },
    pros: [
      "Two deep drawers hide small clutter out of sight while keeping it accessible",
      "Front pen holder keeps writing tools upright and separate from drawer contents",
      "Vertical design adds minimal footprint on a small desk surface",
      "No assembly required — unbox and place",
      "Clean aesthetic works with both minimalist and traditional desk styles",
    ],
    cons: [
      "Drawers have no internal dividers — items mix together without additional inserts",
      "ABS plastic feels lightweight; heavier ceramic or wood alternatives feel more premium",
      "Pen holder section doesn't accommodate large-barrelled markers or paintbrushes",
    ],
    scores: {
      overall: 8.7,
      smallSpaceFit: 9.2,
      buildQuality: 7.8,
      easeOfUse: 9.5,
      valueForMoney: 9.0,
      buyerFeedback: 8.5,
    },
    reviewSummary:
      "The most practical single-unit desk organizer for students who want their daily supplies consolidated in one place. The combination of open pen slots and enclosed drawers means frequently-used tools are immediately visible while the inevitable small clutter (eraser bits, USB drives, paperclips) stays out of sight. The plastic construction is lighter than premium alternatives, but for the price and the footprint, it's the strongest value in this category.",
    alternatives: ["desk-drawer-organizer-tray-set", "stackable-acrylic-desk-organizer"],
    relatedGuideSlugs: ["desk-organizers-small-desks"],
  },

  {
    id: "personal-foldable-whiteboard",
    slug: "small-personal-foldable-whiteboard-desk",
    categorySlug: "dorm-essentials",
    subcategorySlug: "study-tools",
    image: "/images/products/personal-foldable-whiteboard.jpg",
    amazonUrl: buildAmazonUrl("B08N3QXMWZ"),
    priceRange: "$18–$26",
    badge: "Best for Students",
    name: "Small Personal Foldable Desk Whiteboard",
    shortDescription: "A double-sided foldable whiteboard designed for desk use — perfect for to-do lists, equations, and daily planning without leaving your setup.",
    bestFor: [
      "STEM students who work through equations and diagrams while studying",
      "Anyone who uses sticky notes or scratch paper constantly and wants a reusable surface",
      "Dorm room setups where wall mounting a large whiteboard isn't permitted",
    ],
    notIdealFor: [
      "Collaborative group-study sessions where multiple people need to see the board simultaneously",
      "Users who want a wall-mounted surface for displaying long-term notes",
    ],
    specs: {
      "Open Dimensions": "17.3\" × 11.8\"",
      "Folded Dimensions": "11.8\" × 8.9\"",
      "Sides": "Double-sided dry-erase surface",
      "Stand": "Built-in foldout kickstand",
      "Markers": "2 dry-erase markers included",
      "Eraser": "Felt eraser included",
      "Surface": "Lacquered whiteboard material",
    },
    pros: [
      "Folds flat for storage or transport — fits in a laptop bag",
      "Double-sided surface doubles working area",
      "Integrated kickstand props it up hands-free at desk level",
      "Erases cleanly without ghosting after repeated use",
      "Starter markers and eraser included — usable out of the box",
    ],
    cons: [
      "Smaller surface than a wall-mounted board — not ideal for drawing large diagrams",
      "Kickstand doesn't allow angle adjustment; fixed upright position only",
      "Included markers are thin-tip; fine for notes but slow for large writing",
    ],
    scores: {
      overall: 8.5,
      smallSpaceFit: 9.5,
      buildQuality: 8.0,
      easeOfUse: 9.0,
      valueForMoney: 8.8,
      buyerFeedback: 8.3,
    },
    reviewSummary:
      "The most underrated study tool for dorm rooms. Sticky notes and scratch paper are inefficient — this foldable whiteboard gives you an always-ready reusable surface for to-do lists, problem-solving, and quick diagrams that doesn't generate waste. Its foldable design solves the dorm-room constraint of no available wall space. STEM students in particular find it indispensable within a week of purchase.",
    alternatives: [],
    relatedGuideSlugs: ["dorm-room-shower-essentials"],
  },

  {
    id: "slim-wireless-charging-pad",
    slug: "slim-wireless-charging-pad-multi-device",
    categorySlug: "desk-setup",
    subcategorySlug: "wireless-charging",
    image: "/images/products/slim-wireless-charger.jpg",
    amazonUrl: buildAmazonUrl("B07THHQMHM"),
    priceRange: "$14–$22",
    badge: "Best Budget",
    name: "Slim 10W Wireless Charging Pad",
    shortDescription: "A flat, small-footprint Qi charging pad — charges iPhone and Android at full speed and takes virtually no desk space.",
    bestFor: [
      "Anyone who is tired of plugging and unplugging a charging cable multiple times a day",
      "Desk setups where a dedicated phone spot keeps devices out of the way while charging",
      "Students with Qi-compatible phones (iPhone 8 or later, most Android from 2019+)",
    ],
    notIdealFor: [
      "Users with phone cases thicker than 5mm — wireless charging efficiency drops significantly",
      "Charging iPads, AirPods Pro (Gen 1), or devices requiring 15W MagSafe speeds",
    ],
    specs: {
      "Max Output": "10W (Samsung), 7.5W (iPhone), 5W (standard Qi)",
      "Diameter": "3.9 inches",
      "Thickness": "0.28 inches (7mm)",
      "Input": "USB-C (cable included)",
      "LED Indicator": "Subtle charging light (auto-dims)",
      "Foreign Object Detection": "Yes",
      "Certifications": "Qi certified",
    },
    pros: [
      "3.9-inch diameter takes almost no desk real estate",
      "7mm thin — sits flush with desk surface without creating a bump",
      "USB-C input is compatible with modern laptops and adapters",
      "Charging indicator light is subtle — doesn't distract in a dark room",
      "Under $20 — easily the most cost-effective wireless charging option",
    ],
    cons: [
      "Does not support MagSafe 15W speeds for iPhone 12 and later",
      "Requires phone to be precisely placed — easy to miss the sweet spot",
      "USB-C adapter not included — need an existing 5V/2A or higher adapter",
    ],
    scores: {
      overall: 8.6,
      smallSpaceFit: 9.8,
      buildQuality: 8.0,
      easeOfUse: 8.5,
      valueForMoney: 9.4,
      buyerFeedback: 8.4,
    },
    reviewSummary:
      "The cleanest desk accessory upgrade for anyone still using a wired charging cable for their phone. At 3.9 inches wide and 7mm thin, it disappears on a small desk — just set your phone on it and it charges. The 10W output covers the vast majority of modern phones at full speed. The one real limitation is MagSafe: iPhone users who want 15W speeds need to spend more for a MagSafe-specific pad. For everyone else, this is the obvious pick.",
    alternatives: ["bed-risers-with-outlets-usb"],
    relatedGuideSlugs: ["dorm-room-power-essentials"],
  },

  {
    id: "compact-bluetooth-keyboard",
    slug: "compact-bluetooth-keyboard-multi-device",
    categorySlug: "desk-setup",
    subcategorySlug: "keyboards",
    image: "/images/products/compact-bluetooth-keyboard.jpg",
    amazonUrl: buildAmazonUrl("B07FFLNHVN"),
    priceRange: "$28–$40",
    badge: "Best Overall",
    name: "Compact Bluetooth Keyboard — 75% Layout, Multi-Device",
    shortDescription: "A 75% layout Bluetooth keyboard that pairs with three devices simultaneously — the ideal companion for a laptop stand setup.",
    bestFor: [
      "Laptop stand users who need a flat external keyboard at desk level",
      "Students who switch between a laptop, tablet, and phone regularly",
      "Small desks where a full-size keyboard eats too much surface space",
    ],
    notIdealFor: [
      "Users who rely heavily on a number pad for accounting, finance, or data entry",
      "Gamers who need a mechanical tactile switch feel",
    ],
    specs: {
      "Layout": "75% compact (no numpad)",
      "Connectivity": "Bluetooth 5.0 (3 device pairing slots)",
      "Battery": "2000mAh rechargeable — up to 6 months on a charge",
      "Key Travel": "1.5mm scissor-switch",
      "OS Compatibility": "Windows, macOS, iOS, Android",
      "Dimensions": "12.2\" × 4.5\" × 0.3\"",
      "Weight": "0.8 lbs",
    },
    pros: [
      "75% layout saves approximately 4 inches of desk width vs. full-size keyboards",
      "Three Bluetooth channels switch between devices instantly",
      "USB-C rechargeable — no AA batteries to replace",
      "Low-profile scissor switches are quiet and comfortable for typing",
      "Dedicated function row retained despite compact size",
    ],
    cons: [
      "No number pad — data-entry-heavy users will miss it",
      "Scissor switches feel flat compared to mechanical keyboards",
      "No RGB or backlight on the budget end of the price range",
    ],
    scores: {
      overall: 9.0,
      smallSpaceFit: 9.4,
      buildQuality: 8.5,
      easeOfUse: 9.0,
      valueForMoney: 9.1,
      buyerFeedback: 8.9,
    },
    reviewSummary:
      "The most recommended keyboard upgrade for students using a laptop stand. The 75% layout shaves meaningful width off a standard keyboard without removing the function row, making it proportionally perfect for desks under 48 inches. The three-device Bluetooth switching is legitimately useful for students who move between laptop, tablet, and phone throughout a study session. USB-C charging and 6-month battery life eliminate any maintenance hassle.",
    alternatives: [],
    relatedGuideSlugs: ["desk-organizers-small-desks"],
  },

  // ── Door & Closet Organizers ───────────────────────────────────────────────

  {
    id: "over-door-pocket-organizer",
    slug: "over-door-pocket-organizer-multi-use",
    categorySlug: "small-room-storage",
    subcategorySlug: "door-organizers",
    image: "/images/products/over-door-pocket-organizer.jpg",
    amazonUrl: buildAmazonUrl("B07GK7RVYB"),
    priceRange: "$16–$24",
    badge: "Best Overall",
    name: "Over-Door Pocket Organizer — 24 Pockets",
    shortDescription: "24 clear-front pockets that hang over any standard door — stores shoes, school supplies, toiletries, and small items without using floor or wall space.",
    bestFor: [
      "Dorm rooms where floor and closet space is critically limited",
      "Storing shoes on the back of a closet door (holds 12 pairs in 24 pockets)",
      "Students who need a visible, instantly-accessible home for toiletries or supplies",
    ],
    notIdealFor: [
      "Storing items heavier than 2 lbs per pocket — the over-door hook can stress door hinges",
      "Doors with recessed panels wider than 1.5 inches (hook may not hang flat)",
    ],
    specs: {
      "Pockets": "24 individual clear-front pockets",
      "Dimensions": "18\" W × 64\" L",
      "Pocket Size": "6\" W × 5\" H each",
      "Material": "PEVA clear pockets, fabric back panel",
      "Mount": "Over-door hook — no hardware",
      "Door Compatibility": "Standard interior doors up to 1.75\" thick",
      "Max Load": "1.5 lbs per pocket",
    },
    pros: [
      "Hangs in 10 seconds — no screws, no damage to door or wall",
      "Clear fronts let you see contents without opening pockets",
      "24 pockets is enough to organize an entire shoe collection or full toiletry kit",
      "64-inch length reaches from door top to below mid-height",
      "Multipurpose: works as shoe organizer, pantry organizer, cleaning supply holder, or school supply station",
    ],
    cons: [
      "Pockets are fixed size — won't accommodate items wider than 6 inches",
      "Over-door hook adds about 0.75 inches of door clearance needed",
      "Fabric back panel can snag if the door is opened against a rough door frame",
    ],
    scores: {
      overall: 8.9,
      smallSpaceFit: 9.7,
      buildQuality: 7.5,
      easeOfUse: 9.8,
      valueForMoney: 9.3,
      buyerFeedback: 8.7,
    },
    reviewSummary:
      "The highest-impact low-cost storage upgrade for a dorm room — it converts a blank door back panel into 24 usable storage slots without a single nail or screw. Students use it in three main configurations: shoe storage on the closet door, toiletry and personal care organization on the bathroom door, and school supply storage on the room door. The clear pockets prevent the 'out of sight, out of mind' problem that plagues opaque organizers. At under $20, it's one of the best value-per-square-inch storage products available.",
    alternatives: ["collapsible-storage-cubes"],
    relatedGuideSlugs: ["small-room-closet-storage"],
  },

  {
    id: "collapsible-storage-cubes",
    slug: "collapsible-fabric-storage-cubes-set-of-6",
    categorySlug: "small-room-storage",
    subcategorySlug: "storage-bins",
    image: "/images/products/collapsible-storage-cubes.jpg",
    amazonUrl: buildAmazonUrl("B01M4MBBP7"),
    priceRange: "$22–$32",
    badge: "Best Value Set",
    name: "Collapsible Fabric Storage Cubes — Set of 6",
    shortDescription: "Six fold-flat fabric cubes that fit any cube shelf unit — stores clothes, linens, and accessories while hiding contents for a clean look.",
    bestFor: [
      "Cube bookshelf owners who want to add closed storage to open cubbies",
      "Storing folded clothes, extra linens, or bulky items in a closet",
      "Students who want storage that collapses completely flat when moving in/out",
    ],
    notIdealFor: [
      "Freestanding use — these need a shelf or cube unit to maintain their shape",
      "Heavy items over 15 lbs per cube (fabric sides will bow outward)",
    ],
    specs: {
      "Dimensions (open)": "11\" × 11\" × 11\"",
      "Fits": "Standard 12-inch cube shelf units",
      "Material": "Non-woven fabric with cardboard base insert",
      "Handle": "Dual fabric handles on each cube",
      "Folded": "Collapses flat — under 1 inch thick",
      "Quantity": "6 cubes per set",
      "Colors": "Multiple solid colors and two-tone patterns",
    },
    pros: [
      "Set of 6 provides enough cubes to fill a standard 6-cube or 8-cube bookshelf unit",
      "Collapses completely flat — easy to store or transport between semesters",
      "Dual handles let you pull cubes out of a shelf like a drawer",
      "Hides contents for a neat, uniform shelf appearance",
      "Wide color variety lets you color-code by category",
    ],
    cons: [
      "Cardboard base insert softens with humidity over time",
      "Not freestanding — requires a shelf unit or they collapse",
      "Non-woven fabric shows scuffs and marks with heavy use",
    ],
    scores: {
      overall: 8.8,
      smallSpaceFit: 9.0,
      buildQuality: 7.5,
      easeOfUse: 9.4,
      valueForMoney: 9.5,
      buyerFeedback: 8.6,
    },
    reviewSummary:
      "An essential buy for anyone with a cube bookshelf unit. Without cubes, an open cube shelf shows everything stored in it and looks perpetually messy. These fabric bins turn each cubby into a closed drawer-like compartment that can be pulled out completely. The set-of-6 value is strong — comparable single cubes cost $6–$8 each. The main practical limitation is the cardboard base: in humid environments or if stored with wet items, it softens. Replace the insert with a thin plastic cutting board if longevity is a concern.",
    alternatives: ["over-door-pocket-organizer", "vacuum-storage-bags"],
    relatedGuideSlugs: ["small-room-closet-storage"],
  },

  // ── Dorm Essentials ────────────────────────────────────────────────────────

  {
    id: "dorm-shower-caddy",
    slug: "hanging-dorm-shower-caddy-portable",
    categorySlug: "dorm-essentials",
    subcategorySlug: "shower-caddies",
    image: "/images/products/dorm-shower-caddy.jpg",
    amazonUrl: buildAmazonUrl("B08CXSLCMC"),
    priceRange: "$16–$24",
    badge: "Best Overall",
    name: "Portable Hanging Dorm Shower Caddy — Rust-Proof",
    shortDescription: "A rust-proof steel hanging caddy with removable divided shelves — designed specifically for the walk to and from shared dorm showers.",
    bestFor: [
      "Dorm residents using communal bathrooms who need to carry and hang supplies",
      "Students who want compartmentalized toiletry organization (shampoo separated from razors)",
      "Anyone whose current caddy has rusted or collapsed after a semester",
    ],
    notIdealFor: [
      "Private bathrooms where a suction-cup wall caddy is more practical",
      "Students with a very large product collection (6+ shampoo/conditioner bottles) needing extra capacity",
    ],
    specs: {
      "Material": "Rust-resistant coated steel mesh",
      "Shelves": "2 removable mesh shelves + top hanging hook",
      "Capacity per Shelf": "Fits 3–4 standard bottles",
      "Hanging Mechanism": "Stainless steel S-hook included",
      "Drain Holes": "Full mesh — drains completely",
      "Handle": "Reinforced carry handle at top",
      "Dimensions": "10.6\" W × 5.5\" D × 11\" H",
    },
    pros: [
      "Rust-resistant coating holds up to daily shower use and humidity",
      "Removable shelves allow interior configuration for tall or short bottles",
      "Full mesh design drains water immediately — no pooling at the bottom",
      "Hanging S-hook goes over any shower rod or hook",
      "Sturdy carry handle for the walk from dorm room to shower",
    ],
    cons: [
      "Only 2 shelves — if you have 5+ bottles, this fills quickly",
      "Steel is heavier than plastic alternatives — noticeable when carrying fully loaded",
      "Mesh can snag small items like razor heads if not placed carefully",
    ],
    scores: {
      overall: 9.1,
      smallSpaceFit: 9.0,
      buildQuality: 9.3,
      easeOfUse: 9.2,
      valueForMoney: 8.9,
      buyerFeedback: 9.0,
    },
    reviewSummary:
      "The most durable shower caddy in this category. The rust-resistant coated steel outlasts the plastic caddies that deform, crack, or develop orange rust streaks within a semester. The removable shelf design is underappreciated: you can configure the interior to fit your specific bottles rather than working around fixed dividers. The S-hook provides a hands-free hang in the shower, and the carry handle is solid enough to trust fully loaded. The one honest limitation is capacity — heavy product users should look at a two-caddy system rather than overloading a single one.",
    alternatives: [],
    relatedGuideSlugs: ["dorm-room-shower-essentials"],
  },

  {
    id: "desk-drawer-organizer-tray-set",
    slug: "desk-drawer-organizer-tray-set",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-organizers",
    image: "/images/products/drawer-organizer-trays.jpg",
    amazonUrl: buildAmazonUrl("B07B9YQNMR"),
    priceRange: "$12–$18",
    badge: undefined,
    name: "Desk Drawer Organizer Tray Set — 8 Piece",
    shortDescription: "Eight interlocking plastic trays that tile inside any desk drawer — transforms a cluttered junk drawer into a sorted, efficient workspace.",
    bestFor: [
      "Anyone with a desk that has at least one drawer currently used as a junk drawer",
      "Students who want pens, USB cables, and stationery sorted and instantly findable",
      "People who have tried loose organizers and find they shift around inside drawers",
    ],
    notIdealFor: [
      "Drawers under 12 inches wide where full tray configurations don't fit",
      "Users who don't have desk drawers — these require a drawer to work",
    ],
    specs: {
      "Pieces": "8 trays in 3 sizes",
      "Small Tray": "2.0\" × 4.0\" (×4)",
      "Medium Tray": "2.5\" × 8.0\" (×2)",
      "Large Tray": "4.0\" × 8.0\" (×2)",
      "Material": "BPA-free polypropylene",
      "Height": "1.75 inches — standard drawer-depth fit",
      "Interlocking": "Yes — snap together to prevent sliding",
    },
    pros: [
      "Interlocking design keeps all trays from shifting when the drawer is opened",
      "Three sizes allow a custom layout matched to your specific items",
      "Transparent plastic makes all contents visible from above",
      "BPA-free material — safe for food items in a kitchen drawer too",
      "Under $15 — among the most affordable drawer organization options",
    ],
    cons: [
      "No configuration covers all drawer sizes — you may have unfilled corners in very wide drawers",
      "Tray walls are thin; flex slightly when pressed hard",
      "Color options are limited — mostly clear or white",
    ],
    scores: {
      overall: 8.6,
      smallSpaceFit: 8.5,
      buildQuality: 7.8,
      easeOfUse: 9.3,
      valueForMoney: 9.4,
      buyerFeedback: 8.4,
    },
    reviewSummary:
      "A simple product that delivers consistently above its price point. The interlocking tabs are the differentiating feature — unlike loose trays that drift to one end of the drawer within a week, these stay in the configuration you set. The three-size system covers desk supplies well: small trays for erasers, staples, and SIM cards; medium trays for pens and markers; large trays for scissors, tape, and adapters. Measure your drawer width before purchasing to ensure the 8-piece set fills it adequately.",
    alternatives: ["desktop-organizer-with-drawers", "stackable-acrylic-desk-organizer"],
    relatedGuideSlugs: ["desk-organizers-small-desks"],
  },

  {
    id: "stackable-acrylic-desk-organizer",
    slug: "stackable-clear-acrylic-desk-organizer",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-organizers",
    image: "/images/products/acrylic-desk-organizer.jpg",
    amazonUrl: buildAmazonUrl("B07CK1TK2Y"),
    priceRange: "$24–$34",
    badge: "Best Premium",
    name: "Stackable Clear Acrylic Desk Organizer — 4 Compartment",
    shortDescription: "Crystal-clear acrylic construction in a 4-compartment stackable design — the most visually clean organizer for a minimal desk aesthetic.",
    bestFor: [
      "Students or professionals who want a premium, aesthetic desk setup",
      "Organizing makeup and beauty tools as well as desk supplies",
      "Anyone who values seeing all their supplies at a glance without opening drawers",
    ],
    notIdealFor: [
      "Rough-use environments — acrylic scratches more easily than ABS plastic",
      "Budget-conscious buyers: costs 2× the plastic alternatives for similar function",
    ],
    specs: {
      "Material": "Premium PMMA acrylic (not cheap PS plastic)",
      "Compartments": "4 open-top sections",
      "Dimensions": "9.5\" W × 7.5\" D × 3.5\" H",
      "Stackable": "Yes — designed to stack 2 units high",
      "Clarity": "Crystal clear — no yellowing from UV",
      "Edge Finish": "Polished smooth edges",
    },
    pros: [
      "Premium PMMA acrylic doesn't yellow over time the way budget alternatives do",
      "Polished edges are safe to handle without sharp burrs",
      "Stackable design doubles capacity without increasing desk footprint",
      "Crystal clarity makes all contents visible from any angle",
      "Works equally well for desk supplies, cosmetics, or craft supplies",
    ],
    cons: [
      "Scratches more easily than ABS plastic — avoid abrasive cleaning",
      "2× the price of comparable ABS organizers",
      "Open top means dust accumulates in compartments",
    ],
    scores: {
      overall: 8.4,
      smallSpaceFit: 8.8,
      buildQuality: 9.0,
      easeOfUse: 9.0,
      valueForMoney: 7.5,
      buyerFeedback: 8.3,
    },
    reviewSummary:
      "The aesthetically superior choice in desk organization. If the way your desk looks matters to you as much as the function, acrylic beats plastic alternatives hands down — the crystal clarity and polished finish make it look like a purposeful design choice rather than a utility purchase. The stacking feature is genuinely useful: buy one to start and add a second if needed without changing your desk footprint. The trade-offs are real: it scratches more easily and costs more. For budget-focused buyers, the ABS plastic organizer or tray set is the smarter pick.",
    alternatives: ["desktop-organizer-with-drawers", "desk-drawer-organizer-tray-set"],
    relatedGuideSlugs: ["desk-organizers-small-desks"],
  },

  {
    id: "bed-risers-with-outlets-usb",
    slug: "bed-risers-with-power-outlets-and-usb-ports",
    categorySlug: "dorm-essentials",
    subcategorySlug: "bed-risers",
    image: "/images/products/bed-risers-power-outlets.jpg",
    amazonUrl: buildAmazonUrl("B07MCNXJMB"),
    priceRange: "$38–$50",
    badge: "Best Overall",
    name: "Bed Risers with Power Outlets and USB Ports",
    shortDescription: "Raises your bed 5 inches to create under-bed storage AND adds two power outlets and two USB ports at bed height — the most useful dorm upgrade available.",
    bestFor: [
      "Dorm students whose bed sits too low for under-bed storage bags",
      "Anyone whose nearest wall outlet is inconveniently far from their bed",
      "Shared rooms where outlet access is limited and devices need overnight charging at bed level",
    ],
    notIdealFor: [
      "Adjustable beds, platform beds with solid bases, or beds with wheels",
      "Students in dorm rooms where the resident agreement prohibits electrical modifications",
    ],
    specs: {
      "Height Added": "5 inches",
      "Power Outlets": "2 three-prong AC outlets per riser",
      "USB Ports": "2 USB-A ports per riser (total 4 USB-A across full set)",
      "Max Load": "1,300 lbs per riser",
      "Leg Compatibility": "Round and square legs up to 2.75\" diameter",
      "Surge Protection": "Built-in",
      "Cord Length": "6-foot power cord",
      "Set Includes": "4 risers",
    },
    pros: [
      "5-inch lift creates meaningful under-bed clearance for standard storage bags",
      "Built-in outlets and USB ports add charging access right at bed level",
      "Surge protection protects devices from power fluctuations in older dorm buildings",
      "1,300 lb weight capacity — handles any dorm mattress and frame combination",
      "Fits both round and square bed legs with included adapters",
    ],
    cons: [
      "More expensive than basic risers — you're paying for the electrical integration",
      "The 6-foot cord needs to reach a wall outlet — plan placement accordingly",
      "USB-A only, no USB-C — fast-charging newer iPhones and Android phones requires an adapter",
    ],
    scores: {
      overall: 9.2,
      smallSpaceFit: 9.5,
      buildQuality: 9.0,
      easeOfUse: 8.5,
      valueForMoney: 8.8,
      buyerFeedback: 9.1,
    },
    reviewSummary:
      "Arguably the highest-value single purchase for a dorm room. Bed risers alone sell for $15–$20 and solve the under-bed clearance problem. These solve that problem AND add four USB ports and two AC outlets at exactly the height where you want them: next to your pillow for overnight phone charging, at bed level for a desk lamp, or for a laptop charger that isn't stretching across the floor. The USB-A-only limitation is real in 2026, but the included outlets accept any USB-C brick you own. Confirm your dorm's electrical policy before purchasing.",
    alternatives: ["slim-wireless-charging-pad", "compact-power-strip-usb"],
    relatedGuideSlugs: ["dorm-room-power-essentials"],
  },

  // ── Storage — Vacuum Bags & Power ─────────────────────────────────────────

  {
    id: "vacuum-storage-bags",
    slug: "vacuum-storage-bags-space-saver-set",
    categorySlug: "small-room-storage",
    subcategorySlug: "vacuum-bags",
    image: "/images/products/vacuum-storage-bags.jpg",
    amazonUrl: buildAmazonUrl("B07DZ75TZX"),
    priceRange: "$18–$26",
    badge: "Best for Clothing",
    name: "Vacuum Storage Bags — Space Saver Set of 8",
    shortDescription: "Eight vacuum-seal bags in three sizes that compress bulky clothing and bedding to 80% less volume — the best solution for closet overflow.",
    bestFor: [
      "Storing seasonal clothing (winter coats, sweaters) that takes up excessive closet space",
      "Compressing extra bedding sets that don't fit in a dorm closet otherwise",
      "Students who ship items home during semester breaks and need to compress volume",
    ],
    notIdealFor: [
      "Delicate fabrics (silk, cashmere, heavily structured garments) that shouldn't be compressed",
      "Items with down filling — compression permanently damages down loft",
    ],
    specs: {
      "Quantities": "8 bags total: 2 jumbo (31\"×40\"), 3 large (23\"×28\"), 3 medium (15\"×23\")",
      "Seal Type": "Double-zip + vacuum valve",
      "Vacuum Method": "Standard vacuum cleaner nozzle",
      "Re-sealable": "Yes — reusable indefinitely",
      "Material": "PA+PE laminated barrier film",
      "Compression": "Up to 80% volume reduction",
    },
    pros: [
      "Set of 8 covers a full dorm room clothing/bedding inventory",
      "Three sizes allow matching bag to item — no wasted space",
      "Double-zip seal maintains vacuum for months without re-pumping",
      "Compatible with any household vacuum cleaner",
      "PA+PE material is significantly more puncture-resistant than single-layer PE bags",
    ],
    cons: [
      "Down items (comforters, puffy jackets) should not be stored long-term in vacuum bags",
      "Fine knitwear and wrinkle-prone clothing will need steaming after compression",
      "Seal can lose vacuum if folded sharply at the zipper edge during storage",
    ],
    scores: {
      overall: 8.9,
      smallSpaceFit: 9.8,
      buildQuality: 8.5,
      easeOfUse: 8.0,
      valueForMoney: 9.3,
      buyerFeedback: 8.7,
    },
    reviewSummary:
      "The single most effective intervention for a closet that doesn't have enough space. Compressing a full winter wardrobe into vacuum bags at the start of spring semester or before summer storage can reclaim 60–70% of closet volume. The set-of-8 format with three sizes is the right purchasing unit — one jumbo bag for a comforter, two large bags for sweaters and jeans, and three medium bags for tees and light layers. Avoid using these for down items or structured pieces, and you'll get multiple semesters of use from a single set.",
    alternatives: ["collapsible-storage-cubes", "over-door-pocket-organizer"],
    relatedGuideSlugs: ["small-room-closet-storage"],
  },

  {
    id: "compact-power-strip-usb",
    slug: "compact-surge-protector-power-strip-usb-ports",
    categorySlug: "dorm-essentials",
    subcategorySlug: "power-strips",
    image: "/images/products/compact-power-strip-usb.jpg",
    amazonUrl: buildAmazonUrl("B01KUTRGS4"),
    priceRange: "$22–$32",
    badge: "Best Overall",
    name: "Compact Surge Protector Power Strip with 4 USB Ports",
    shortDescription: "A slim surge-protected power strip with 3 AC outlets and 4 USB-A ports — designed to sit flat on a small desk without the bulk of standard power strips.",
    bestFor: [
      "Dorm rooms where wall outlets are limited to 1–2 per side of the room",
      "Desk setups with multiple devices (laptop, monitor, lamp, phone, tablet) needing simultaneous power",
      "Students who want USB charging without occupying AC outlets",
    ],
    notIdealFor: [
      "High-draw appliances like space heaters, kettles, or mini fridges — these need a dedicated outlet",
      "Dorm rooms that prohibit power strips without surge protection (this one is surge-protected, so it qualifies)",
    ],
    specs: {
      "AC Outlets": "3 (spaced to accommodate large adapters)",
      "USB-A Ports": "4 ports at 2.4A each",
      "Total USB Output": "5A shared across 4 ports",
      "Surge Protection": "1080 joules",
      "Cord Length": "5 feet",
      "Dimensions": "8.0\" × 2.3\" × 1.3\"",
      "Certifications": "ETL listed",
    },
    pros: [
      "Slim 1.3-inch profile sits flat on a desk surface without rolling",
      "AC outlets are spaced generously — accommodates wall adapters side by side",
      "4 USB-A ports eliminate the need for separate USB charging hubs",
      "1,080-joule surge protection — adequate for laptops and monitors in older buildings",
      "ETL certification verifies electrical safety standards",
    ],
    cons: [
      "No USB-C ports — fast-charging modern smartphones requires a USB-C to USB-A adapter",
      "5-foot cord is sufficient for most desk setups but short for beds far from wall outlets",
      "Shared USB amperage means charging speed drops if all 4 ports are in use simultaneously",
    ],
    scores: {
      overall: 9.1,
      smallSpaceFit: 9.3,
      buildQuality: 8.8,
      easeOfUse: 9.5,
      valueForMoney: 9.2,
      buyerFeedback: 9.0,
    },
    reviewSummary:
      "The most practical desk accessory for dorm room setup. Older dorm buildings often have only one usable outlet per desk area — this power strip multiplies that into 3 AC outlets and 4 USB ports, which is enough for a fully equipped student desk setup. The slim profile means it can sit on the desk surface or be tucked against the wall without the clunky footprint of traditional power strips. The absence of USB-C is the most notable limitation in 2026, but an inexpensive USB-C to USB-A adapter solves this for devices that need it. ETL certification is important — confirm your dorm allows surge-protected strips (most do).",
    alternatives: ["bed-risers-with-outlets-usb"],
    relatedGuideSlugs: ["dorm-room-power-essentials"],
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
  | "storage-carts"
  | "desk-organizers"
  | "study-tools"
  | "wireless-charging"
  | "keyboards"
  | "door-organizers"
  | "storage-bins"
  | "shower-caddies"
  | "bed-risers"
  | "vacuum-bags"
  | "power-strips";
