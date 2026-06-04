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
  // Product Library fields (Phase 2)
  asin?: string;           // Amazon ASIN (auto-builds amazonUrl if set)
  priceLabel?: "Budget" | "Mid-range" | "Premium" | "Check Amazon";
  useCase?: string;        // one-line use-case summary for editors
  sourceNotes?: string;    // internal verification notes — not rendered publicly
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const products: Product[] = [

  // ── Desk Lamps ─────────────────────────────────────────────────────────────

  {
    id: "compact-led-lamp-usb",
    slug: "compact-led-desk-lamp-with-usb-port",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-lamps",
    image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=600&q=80",
    amazonUrl: buildAmazonUrl("B08WQCZGPK"),
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
      "Memory Function": "Yes - restores last setting",
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
      "USB port is 1A only - too slow for tablet charging",
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
      "The best budget desk lamp we evaluated for students. It trades some build quality for a very competitive price and includes features - five color temperatures, a USB port, and a memory function - that often cost twice as much on competing models. The slim base keeps most desk space clear, which matters on a typical 48-inch dorm or bedroom desk.",
    alternatives: ["wide-angle-study-lamp"],
    relatedGuideSlugs: ["desk-lamps-small-desks"],
  },

  {
    id: "wide-angle-study-lamp",
    slug: "wide-angle-study-lamp-auto-dimming",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-lamps",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80",
    amazonUrl: buildAmazonUrl("B09XK8H2FQ"),
    priceRange: "$100–$115",
    badge: "Best Overall",
    name: "Wide-Angle Study Lamp with Auto-Dimming",
    shortDescription: "Engineered for study: wide shadow-free spread, ambient sensor, and zero flicker - worth the price for long desk sessions.",
    bestFor: [
      "Students or remote workers who log 4+ hours at a desk daily",
      "Anyone who has experienced eye strain from cheap desk lighting",
      "Setups where the lamp clamps to the back edge, freeing the desk surface entirely",
    ],
    notIdealFor: [
      "Budget-conscious shoppers - this sits at the premium end",
      "Desks with edges thicker than 2.75 inches (clamp limit)",
    ],
    specs: {
      "Color Temperature": "4000K neutral white",
      "Light Spread": "90cm arc - full desk coverage",
      "Lux at 40cm": "≥ 1,000 lux",
      "Mount Type": "Clamp (fits edges up to 2.75\")",
      "Wattage": "14W",
      "USB Charging Port": "5V / 1A USB-A",
      "Auto-Dimming": "Yes - ambient light sensor",
      "Flicker": "Zero-flicker certified",
    },
    pros: [
      "Wide 90cm light arc covers the full desk surface evenly",
      "Ambient sensor adjusts brightness automatically as room light changes",
      "Zero-flicker certification - clinically better for extended study",
      "Clamp mount frees up 100% of desk surface",
      "Built-in USB port for device charging",
    ],
    cons: [
      "Premium price ($100+) is a stretch for casual users",
      "Only one fixed color temperature (4000K) - no warm light option",
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
      "The top-rated option for serious desk users. Its wide illumination arc, ambient auto-dimming, and zero-flicker design address every major complaint seen in reviews of cheaper lamps. The clamp mount is genuinely transformative for small desks - it gives you back the footprint of a full lamp base. The premium price is justified for daily users; budget buyers should look at the Compact LED Lamp instead.",
    alternatives: ["compact-led-lamp-usb"],
    relatedGuideSlugs: ["desk-lamps-small-desks"],
  },

  // ── Monitor Stands ─────────────────────────────────────────────────────────

  {
    id: "adjustable-monitor-riser",
    slug: "adjustable-monitor-riser-storage-shelf",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80",
    amazonUrl: buildAmazonUrl("B073VKC134"),
    priceRange: "$30–$40",
    badge: "Best Overall",
    name: "Adjustable Monitor Riser with Storage Shelf",
    shortDescription: "Raises your monitor to eye level and creates a full-width storage shelf - the most practical riser for small desks.",
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
      "Supports up to 55 lbs - handles large monitors without flex",
      "No-assembly, open-box ready",
      "Clean minimal design works with any desk aesthetic",
      "Large platform fits ultrawide monitors",
    ],
    cons: [
      "Fixed height - cannot adjust elevation",
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
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&q=80",
    amazonUrl: buildAmazonUrl("B01N2YFO5Z"),
    priceRange: "$38–$50",
    badge: "Best for Dual Monitors",
    name: "Dual Monitor Articulating Arm Mount",
    shortDescription: "Clears your entire desk surface by mounting two monitors on adjustable arms - the right choice for dual-screen compact setups.",
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

  {
    id: "wali-stt003-riser",
    slug: "wali-stt003-monitor-stand",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/51kULJHh4BL._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/4uzjWfm",
    priceRange: "$20–$28",
    badge: "Best Budget",
    name: "WALI Computer Monitor Stand for Desk, 3 Height Adjustable (STT003)",
    shortDescription: "WALI's STT003 raises your screen to one of three ergonomic heights and creates a full-width storage shelf underneath - reliable vented steel with push-button height adjustment.",
    bestFor: [
      "Budget buyers who want a proven steel riser under $28",
      "Single-monitor setups in dorm rooms or home offices",
      "Anyone who wants to store a keyboard under their screen",
    ],
    notIdealFor: [
      "Users who need continuously variable height (only 3 preset levels)",
      "Monitors heavier than 44 lbs",
    ],
    specs: {
      "Platform Size": "14.6\" x 9.3\"",
      "Height Options": "3.9\", 4.7\", or 5.5\"",
      "Max Load": "44 lbs",
      "Material": "Vented metal platform, steel legs",
      "Height Adjustment": "Push-button release on leg",
      "Non-slip Feet": "Rubber pads on all contact points",
      "Ventilation": "Perforated platform for airflow",
    },
    pros: [
      "Three preset height levels cover most seated eye-level positions",
      "Push-button leg release makes height changes quick without tools",
      "Vented platform prevents heat buildup under the monitor",
      "Generous under-screen space fits a full-size keyboard or notebooks",
      "Rubber feet protect desk surface and prevent shifting",
    ],
    cons: [
      "Only 3 fixed heights - no stepless adjustment",
      "No USB ports or cable management",
      "Available in black only",
    ],
    scores: {
      overall: 8.3,
      smallSpaceFit: 8.8,
      buildQuality: 8.5,
      easeOfUse: 9.2,
      valueForMoney: 9.3,
      buyerFeedback: 8.2,
    },
    reviewSummary:
      "WALI's STT003 is a no-nonsense steel riser under $28. Three sensible height settings, a vented platform, and a wide enough base for most 24-27 inch monitors. The push-button height adjustment is a practical detail most competitors at this price omit. Under-screen storage fits a standard keyboard. The pick for anyone who wants a reliable metal riser without paying extra for features they don't need.",
    alternatives: ["huanuo-monitor-riser", "gianotter-monitor-stand"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "huanuo-monitor-riser",
    slug: "huanuo-monitor-riser-desk",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/71DQzk+qMDL._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/3PYZdCx",
    priceRange: "$28–$38",
    badge: "Best with Drawer",
    name: "HUANUO Monitor Riser for Desk, with 2 Drawers",
    shortDescription: "A vented steel riser with two pull-out drawers that tuck neatly under the monitor platform, giving small desks hidden storage without any extra footprint.",
    bestFor: [
      "Students and home-office users who need hidden under-screen storage",
      "Desks where open shelves look cluttered and a clean surface matters",
      "Anyone upgrading from a basic riser who wants built-in organization",
    ],
    notIdealFor: [
      "Users who need USB ports integrated into the stand",
      "Setups with monitors heavier than 44 lbs",
    ],
    specs: {
      "Platform Size": "14.57\" x 9.25\"",
      "Raised Height": "3.94 inches",
      "Max Load": "44 lbs",
      "Drawers": "2 pull-out drawers",
      "Material": "Vented steel with powder coat finish",
      "Ventilation": "Perforated top platform",
      "Assembly": "Minimal, hardware included",
    },
    pros: [
      "Two drawers keep small accessories completely out of sight",
      "Vented steel platform prevents heat buildup under the screen",
      "44 lb capacity handles large monitors up to 27 inches comfortably",
      "Perforated top surface adds airflow for items stored underneath",
      "Sturdy steel construction does not flex under load",
    ],
    cons: [
      "No USB ports or cable management channels",
      "3.94 inch height is on the lower end for taller users",
      "Drawers are compact - best for small accessories, not notebooks",
    ],
    scores: {
      overall: 8.5,
      smallSpaceFit: 8.8,
      buildQuality: 8.6,
      easeOfUse: 9.0,
      valueForMoney: 8.4,
      buyerFeedback: 8.7,
    },
    reviewSummary:
      "A practical upgrade over a plain riser for anyone who needs desk storage without adding footprint. The two drawers are sized for exactly the items that accumulate on small desks: charging cables, sticky notes, pens, earbuds. Vented steel construction means it will not trap heat under the monitor, and the 44 lb capacity covers nearly all consumer monitors. The best choice when hidden storage is the priority.",
    alternatives: ["wali-stt003-riser", "gianotter-monitor-stand"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "gianotter-monitor-stand",
    slug: "gianotter-monitor-stand-riser",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/81I5-fruwhL._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/49ovr0F",
    priceRange: "$25–$35",
    badge: "Best Adjustable",
    name: "gianotter Monitor Stand Riser, with Drawer",
    shortDescription: "A vented steel monitor riser with an integrated pull-out drawer and adjustable height settings, purpose-built to organize a small desk without adding bulk.",
    bestFor: [
      "Small desk setups where every inch of surface space counts",
      "Users who want both height flexibility and under-screen storage in one piece",
      "Dorm rooms and shared workspaces with limited desk depth",
    ],
    notIdealFor: [
      "Monitors wider than 32 inches on very narrow desks",
      "Users who need USB ports or cable routing built in",
    ],
    specs: {
      "Platform Size": "15.7\" x 9.3\"",
      "Raised Height": "Adjustable",
      "Max Load": "44 lbs",
      "Drawer": "1 pull-out storage drawer",
      "Material": "Vented steel with powder coat finish",
      "Ventilation": "Open grid platform",
      "Assembly": "Tool-free, clips together",
    },
    pros: [
      "Pull-out drawer hides cables, chargers, and desk accessories out of sight",
      "Adjustable height dial fits different monitor sizes and seated positions",
      "Open vented platform keeps airflow under the screen",
      "Solid steel build supports monitors and heavy speakers without flex",
      "Clips together without tools for fast setup",
    ],
    cons: [
      "Drawer storage is compact - best suited to small items",
      "No USB hub or powered connectivity",
      "Adjusting height requires lifting the monitor momentarily",
    ],
    scores: {
      overall: 8.4,
      smallSpaceFit: 8.9,
      buildQuality: 8.5,
      easeOfUse: 8.7,
      valueForMoney: 8.8,
      buyerFeedback: 8.4,
    },
    reviewSummary:
      "A smart combination of height adjustment and drawer storage at an accessible price. The vented grid platform and pull-out drawer make it one of the more functional fixed-riser options in this roundup. It works particularly well in compact dorm setups or small home offices where a separate desk organizer is not practical. Best for users who want a single organized unit rather than a bare riser plus a separate storage box.",
    alternatives: ["huanuo-monitor-riser", "wali-stt003-riser"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "bontec-dual-riser-black",
    slug: "bontec-monitor-stand-riser-black",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/81VYepdKQ4L._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/4dyHY3WW",
    priceRange: "$38–$52",
    badge: "Best Wide Stand",
    name: "BONTEC Monitor Stand Riser for 2 Monitors, Dual Wide Stand (Black)",
    shortDescription: "A wide MDF platform riser designed to hold two monitors side by side on a single desk surface, with adjustable height and a storage shelf underneath.",
    bestFor: [
      "Dual-monitor users who want a simple riser instead of a monitor arm",
      "Small desks where both monitors need to sit at the same consistent height",
      "Home office setups that prefer a no-clamp, no-installation solution",
    ],
    notIdealFor: [
      "Desks under 40 inches wide where a 43-inch platform may not fit",
      "Users who need cable routing or USB ports built in",
    ],
    specs: {
      "Platform Size": "43\" x 9.3\"",
      "Height Options": "4.1\" fixed (adjustable model available)",
      "Max Load": "44 lbs",
      "Material": "MDF board with black finish",
      "Under-Screen Clearance": "4.1 inches",
      "Adjustable Range": "31.5\"–42.5\" width configurations",
      "Assembly": "Simple, hardware included",
    },
    pros: [
      "43-inch platform accommodates two monitors on a single stable surface",
      "Clean black MDF finish blends with dark or black desk setups",
      "44 lb capacity is sufficient for most 27-inch dual-monitor configurations",
      "No clamping required - sits directly on the desk surface",
      "Large shelf underneath stores keyboards, notebooks, and accessories",
    ],
    cons: [
      "43-inch width requires a desk at least that wide",
      "MDF is less durable than steel if exposed to moisture",
      "No USB hub or cable management features",
    ],
    scores: {
      overall: 8.3,
      smallSpaceFit: 7.8,
      buildQuality: 8.1,
      easeOfUse: 9.2,
      valueForMoney: 8.5,
      buyerFeedback: 8.3,
    },
    reviewSummary:
      "A straightforward solution for dual-monitor users who want both screens at the same height without installing a monitor arm. The 43-inch platform is wide enough to support two standard 24-27 inch monitors comfortably. The under-platform shelf adds practical storage space for keyboards or accessories when monitors are elevated. Best suited for desks that can accommodate the full width and users who prefer a zero-installation setup.",
    alternatives: ["bontec-dual-riser", "simplehouseware-dual-drawer"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "huanuo-ht05b-stand",
    slug: "huanuo-ht05b-monitor-stand",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/51bk2mEcD7L._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/4f99eY6",
    priceRange: "$65–$85",
    badge: "Best VESA Stand",
    name: "HUANUO Adjustable Monitor Stand with VESA Mount (HT05B-001)",
    shortDescription: "A height-adjustable monitor stand with VESA mount support, 360-degree swivel, and 5 preset height positions - for users who want arm-like adjustability without desk clamping.",
    bestFor: [
      "Users whose monitors have VESA holes but who prefer a freestanding base over a clamp arm",
      "Setups that need precise height and angle control for ergonomic positioning",
      "Single monitors from 13 to 32 inches that benefit from swivel and height flexibility",
    ],
    notIdealFor: [
      "Monitors without VESA mount holes on the back panel",
      "Users who want to avoid any installation or hardware attachment",
    ],
    specs: {
      "Screen Size Range": "13–32 inches",
      "VESA Compatibility": "75x75mm and 100x100mm",
      "Max Load": "77 lbs",
      "Height Positions": "5 adjustable presets",
      "Swivel": "360 degrees",
      "Tilt": "Adjustable tilt angle",
      "Model": "HT05B-001",
    },
    pros: [
      "VESA mount provides direct, stable attachment to the monitor panel",
      "360-degree swivel allows sharing the screen or adjusting view angle easily",
      "77 lb capacity covers virtually any consumer monitor on the market",
      "5 height presets dial in ergonomic positioning without guesswork",
      "Freestanding base requires no desk clamping or grommet drilling",
    ],
    cons: [
      "Requires VESA holes on monitor (not all budget monitors include them)",
      "Higher price than basic fixed-height risers",
      "Changing height requires adjusting the preset rather than a smooth glide",
    ],
    scores: {
      overall: 8.7,
      smallSpaceFit: 8.4,
      buildQuality: 9.0,
      easeOfUse: 8.3,
      valueForMoney: 8.0,
      buyerFeedback: 8.8,
    },
    reviewSummary:
      "The best option for users who want monitor arm flexibility but prefer a stable freestanding base over a desk clamp. The VESA mount holds the monitor directly and securely rather than resting it on a platform shelf. The 360-degree swivel is genuinely useful for shared workspaces or presentations. At 77 lbs capacity it handles even large professional monitors. The main tradeoff versus a standard arm is the fixed base footprint - it does not fully free your desk surface the way a clamp arm does.",
    alternatives: ["ergear-monitor-arm", "bontec-dual-riser-black"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "bontec-dual-riser",
    slug: "bontec-monitor-stand-riser-white",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/81VYepdKQ4L._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/4dyHY3W",
    priceRange: "$38–$52",
    badge: "Best for Dual Monitors",
    name: "BONTEC Monitor Stand Riser for 2 Monitors, Dual Wide Stand (White)",
    shortDescription: "The white colorway of the BONTEC dual-monitor wide riser - same 43-inch platform and 44 lb capacity, in a bright finish that suits white and light-toned desk setups.",
    bestFor: [
      "Dual-monitor setups on white or light-colored desks",
      "Minimalist all-white desk builds where product color consistency matters",
      "Home office users who want both monitors at the same stable height",
    ],
    notIdealFor: [
      "Desks under 40 inches wide where a 43-inch platform does not fit",
      "Users who need a monitor arm with full swivel and height range",
    ],
    specs: {
      "Platform Size": "43\" x 9.3\"",
      "Height Options": "4.1\" fixed",
      "Max Load": "44 lbs",
      "Material": "MDF board with white finish",
      "Under-Screen Clearance": "4.1 inches",
      "Adjustable Range": "31.5\"–42.5\" width configurations",
      "Assembly": "Simple, hardware included",
    },
    pros: [
      "White finish matches white desks and light-toned room aesthetics cleanly",
      "43-inch platform holds two standard 24-27 inch monitors side by side",
      "44 lb capacity covers most dual-monitor setups",
      "No clamping required - freestanding base is zero-installation",
      "Storage shelf underneath keeps keyboard and accessories tidy",
    ],
    cons: [
      "White MDF can show scratches and marks more visibly than darker finishes",
      "43-inch width requires sufficient desk width to fit comfortably",
      "Fixed height offers less flexibility than an adjustable monitor arm",
    ],
    scores: {
      overall: 8.3,
      smallSpaceFit: 7.8,
      buildQuality: 8.1,
      easeOfUse: 9.2,
      valueForMoney: 8.5,
      buyerFeedback: 8.4,
    },
    reviewSummary:
      "Identical in function to the black BONTEC dual riser but in a white finish that works noticeably better on light-toned or white desks. The 43-inch platform comfortably supports two monitors without the gap or height mismatch that comes from using two separate risers. Under-platform storage reclaims desk space that the monitor bases would otherwise occupy. The right choice for dual-monitor users on white desk setups who want a clean, coordinated look.",
    alternatives: ["bontec-dual-riser-black", "simplehouseware-dual-drawer"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "simplehouseware-dual-drawer",
    slug: "simplehouseware-dual-monitor-riser",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/91Q5V3J+X2L._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/4f9nIXP",
    priceRange: "$35–$48",
    badge: "Best with Storage",
    name: "Simple Houseware Dual Monitor Stand Riser with Drawer and Side Caddies",
    shortDescription: "A wide dual-monitor riser with a full-width front drawer and two side caddies, available in a rustic brown finish - built for users who want the most storage built into their monitor stand.",
    bestFor: [
      "Dual-monitor home office setups that need built-in desk organization",
      "Rustic, farmhouse, or warm wood-tone desk aesthetics",
      "Users who want front-facing drawer access alongside side storage in one piece",
    ],
    notIdealFor: [
      "Minimalist or all-black desk builds where rustic brown stands out",
      "Users who need a stand narrower than 33 inches",
    ],
    specs: {
      "Platform Width": "33.3\"–45\" (dual monitor width)",
      "Raised Height": "5 inches",
      "Drawer": "1 full-width front drawer",
      "Side Caddies": "2 removable side organizer caddies",
      "Material": "MDF with rustic brown finish",
      "Max Load": "44 lbs",
      "Assembly": "Hardware included",
    },
    pros: [
      "Full-width front drawer stores papers, cables, and accessories out of sight",
      "Two side caddies add additional storage for phones, pens, and small items",
      "Rustic brown finish adds warm visual character to a desk setup",
      "5-inch height is taller than most fixed risers in this category",
      "Wide 33-45 inch platform supports two monitors side by side",
    ],
    cons: [
      "Rustic brown finish limits compatibility with dark or all-black setups",
      "Total footprint with side caddies requires a wide desk",
      "MDF is less moisture-resistant than steel",
    ],
    scores: {
      overall: 8.2,
      smallSpaceFit: 7.9,
      buildQuality: 8.0,
      easeOfUse: 8.8,
      valueForMoney: 8.6,
      buyerFeedback: 8.1,
    },
    reviewSummary:
      "The most storage-packed riser in this roundup. A full-width front drawer plus two side caddies gives this stand more organized storage capacity than any other option at this price. The rustic brown finish is distinctive and suits warm-tone or farmhouse desk builds well. Best suited for dual-monitor setups on desks at least 40 inches wide where the full storage footprint can be used without crowding.",
    alternatives: ["bontec-dual-riser", "bontec-dual-riser-black"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  {
    id: "ergear-monitor-arm",
    slug: "ergear-single-monitor-arm",
    categorySlug: "desk-setup",
    subcategorySlug: "monitor-stands",
    image: "https://m.media-amazon.com/images/I/61oPmBDjQEL._AC_SL1500_.jpg",
    amazonUrl: "https://amzn.to/4fIT4EV",
    priceRange: "$35–$50",
    badge: "Best Monitor Arm",
    name: "ErGear Single Monitor Arm, Desk Monitor Mount Stand",
    shortDescription: "A single monitor arm with tool-free VESA attachment that supports 13-34 inch screens up to 19.8 lbs, with 17.5 inches of height range and built-in cable management.",
    bestFor: [
      "Single-monitor users who want to free their full desk surface",
      "Anyone with a 13-34 inch monitor looking for a budget-accessible arm",
      "Setups where tool-free VESA installation is preferred over socket-and-wrench assembly",
    ],
    notIdealFor: [
      "Monitors without VESA holes (75x75 or 100x100mm)",
      "Screens heavier than 19.8 lbs or wider than 34 inches",
    ],
    specs: {
      "Screen Size Range": "13–34 inches",
      "VESA Compatibility": "75x75mm and 100x100mm (tool-free)",
      "Max Weight Capacity": "19.8 lbs",
      "Height Range": "Up to 17.5 inches above desk",
      "Mount Type": "C-clamp",
      "Cable Management": "Built-in routing channels",
      "Tilt / Swivel": "Full tilt and swivel adjustment",
    },
    pros: [
      "Tool-free VESA quick-release makes monitor removal and reinstallation fast",
      "17.5 inch height range covers seated and standing desk use",
      "19.8 lb capacity handles most 24-34 inch monitors on the market",
      "Fully clears the desk surface - zero footprint under the monitor",
      "Cable management channels route display and power cables cleanly along the arm",
    ],
    cons: [
      "Requires VESA holes on the monitor back panel",
      "C-clamp requires a desk edge thick enough to clamp securely",
      "Not suitable for monitors larger than 34 inches",
    ],
    scores: {
      overall: 8.8,
      smallSpaceFit: 9.5,
      buildQuality: 8.6,
      easeOfUse: 8.4,
      valueForMoney: 8.9,
      buyerFeedback: 8.7,
    },
    reviewSummary:
      "The best option for small desk users who want to eliminate the monitor footprint entirely without spending on a premium arm. The tool-free VESA quick-release is a practical feature that makes swapping monitors or moving the setup much faster than standard VESA screws. At 17.5 inches of height range it works for both sitting and standing desk configurations. The 34-inch screen support and 19.8 lb capacity cover nearly all single-monitor setups found on compact desks.",
    alternatives: ["huanuo-ht05b-stand", "wali-stt003-riser"],
    relatedGuideSlugs: ["monitor-stands-small-desks"],
  },

  // ── Laptop Stands ──────────────────────────────────────────────────────────

  {
    id: "foldable-aluminum-laptop-riser",
    slug: "foldable-aluminum-laptop-stand",
    categorySlug: "desk-setup",
    subcategorySlug: "laptop-stands",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    amazonUrl: buildAmazonUrl("B08M94BTYC"),
    priceRange: "$25–$32",
    badge: "Best Overall",
    name: "Foldable Aluminum Laptop Riser",
    shortDescription: "Six adjustable heights, folds completely flat, and supports up to 15.6-inch laptops - the most reliable under-$30 stand.",
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
      "Folds flat in seconds - easy to pack or store",
      "Aluminum build is lighter and more durable than plastic alternatives",
      "Silicone pads protect both laptop and desk",
      "Under $30 - excellent price-to-quality ratio",
    ],
    cons: [
      "No built-in cable management",
      "Width is fixed - won't fit 17-inch laptops",
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
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    amazonUrl: buildAmazonUrl("B089JY2QNM"),
    priceRange: "$14–$20",
    badge: "Best Budget",
    name: "Adjustable Multi-Angle Portable Laptop Stand",
    shortDescription: "Ultra-lightweight, folds flatter than a notebook, and covers 11–17-inch laptops - the best under-$20 stand.",
    bestFor: [
      "Budget-conscious students who need a stand for occasional use",
      "Travelers and commuters who want something nearly weightless in a bag",
      "Anyone whose laptop is larger than 15.6 inches",
    ],
    notIdealFor: [
      "Heavy typing sessions - the lighter plastic build can flex under force",
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
      "Ultra-light at 0.4 lbs - barely noticeable in a bag",
      "Fits laptops up to 17 inches - wider compatibility than most",
      "Continuous angle adjustment (not fixed steps)",
      "Under $20 - lowest cost pick in this guide",
    ],
    cons: [
      "Plastic build flexes under heavy typing force",
      "Adjustment mechanism lacks precise detents - can slip slightly",
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
      "The best budget entry in this category and the only stand we evaluated that comfortably fits 17-inch laptops. Build quality is the trade-off at this price - it works well for light use but flexes under sustained heavy typing. For casual use, travel, or a secondary stand, it represents extraordinary value.",
    alternatives: ["foldable-aluminum-laptop-riser"],
    relatedGuideSlugs: ["laptop-stands-small-desks"],
  },

  // ── Cable Management ───────────────────────────────────────────────────────

  {
    id: "desk-cable-organizer-kit",
    slug: "desk-cable-management-organizer-kit",
    categorySlug: "dorm-essentials",
    subcategorySlug: "cable-management",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
    amazonUrl: buildAmazonUrl("B08P5VH157"),
    priceRange: "$10–$14",
    badge: "Best Overall",
    name: "26-Piece Desk Cable Organizer Kit",
    shortDescription: "Everything needed to tame a messy desk setup: clips, velcro ties, and cable sleeves - all in one under-$12 kit.",
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
      "Velcro ties are fully reusable - no scissors needed to adjust",
      "Three clip sizes handle different cable thicknesses",
      "Adhesive releases cleanly with heat - no damage to dorm surfaces",
      "Under $12 - easy to add to any back-to-school order",
    ],
    cons: [
      "Adhesive clips do not stick to rough, textured, or fabric surfaces",
      "Cable sleeve included is short (12 inches) - may need more for desk-to-floor runs",
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
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
    amazonUrl: buildAmazonUrl("B0CN6YDG6V"),
    priceRange: "$18–$26",
    badge: undefined,
    name: "Under-Desk Cable Management Tray",
    shortDescription: "Hides a full power strip and all its cables in a mounting tray under your desk - the cleanest solution for eliminating floor clutter.",
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
      "The best option for eliminating floor-level cable clutter permanently. Where adhesive clips manage individual cables, this tray manages the entire power strip and all connected cables at once - making it the more complete solution for home office users. Students in dorm rooms should confirm their housing rules allow adhesive mounting before purchasing.",
    alternatives: ["desk-cable-organizer-kit"],
    relatedGuideSlugs: ["cable-management-dorm"],
  },

  // ── Bedside Caddies ────────────────────────────────────────────────────────

  {
    id: "hanging-bedside-caddy",
    slug: "hanging-bedside-organizer-caddy",
    categorySlug: "dorm-essentials",
    subcategorySlug: "bedside-caddies",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    amazonUrl: buildAmazonUrl("B07M6BQGXF"),
    priceRange: "$13–$17",
    badge: "Best Overall",
    name: "Hanging Bedside Organizer Caddy",
    shortDescription: "Eight organized pockets that hang from any mattress edge - keeps phone, charger, headphones, and snacks within reach without a bedside table.",
    bestFor: [
      "Dorm rooms with no room for a bedside table",
      "Students in lofted beds who need essentials within arm's reach",
      "Anyone who keeps losing their phone charger in the sheets",
    ],
    notIdealFor: [
      "Mattresses thicker than 14 inches (attachment may not seat securely)",
      "Users who need rigid structure - this is a soft fabric organizer",
    ],
    specs: {
      "Pockets": "8 (including 1 large center pocket for tablet/book)",
      "Material": "600D Oxford fabric",
      "Attachment": "Slides under mattress - no hardware needed",
      "Mattress Compatibility": "Up to 14 inches thick",
      "Bottle Holder": "Bungee cord side pocket",
      "Washable": "Hand wash recommended",
    },
    pros: [
      "No installation - slides under mattress in 10 seconds",
      "8 pockets fits phone, charger, remote, book, headphones, snacks, and more",
      "Large center pocket holds 10-inch tablets",
      "Bungee-cord bottle pocket keeps water bottles secure",
      "Under $15 - a practical addition to any dorm setup",
    ],
    cons: [
      "Can slide out of position on very smooth fitted sheet materials",
      "Fabric is not rigid - items settle and shift inside soft pockets",
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
      "The most-reviewed item in this category and it earns the reputation. The no-installation design, large pocket count, and sub-$15 price make it an automatic addition to any dorm room setup. The main complaint in negative reviews - sliding on smooth sheets - is easily fixed by tucking more material under the mattress. Works equally well on lofted and standard dorm beds.",
    alternatives: ["over-mattress-pocket-organizer"],
    relatedGuideSlugs: ["bedside-caddies-students"],
  },

  {
    id: "over-mattress-pocket-organizer",
    slug: "over-mattress-storage-pocket-organizer",
    categorySlug: "dorm-essentials",
    subcategorySlug: "bedside-caddies",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    amazonUrl: buildAmazonUrl("B018WLP4EK"),
    priceRange: "$9–$13",
    badge: "Best Budget",
    name: "Over-Mattress Storage Pocket Organizer",
    shortDescription: "A slim 4-pocket organizer that sits on top of the mattress - simpler and lighter than a full caddy, and under $10.",
    bestFor: [
      "Budget-conscious students who just need phone, charger, and book accessible",
      "Very thick mattresses (16+ inches) where hanging caddies don't reach",
      "Users who want a lighter, more minimal solution",
    ],
    notIdealFor: [
      "Users who need more than 4 pockets",
      "Anyone with an active sleeper partner - it shifts easily",
    ],
    specs: {
      "Pockets": "4 slim external pockets",
      "Material": "Polyester canvas",
      "Attachment": "Lays flat over mattress edge",
      "Size": "12\" × 8\"",
      "Max Item Size": "Small phone, charger, small book",
    },
    pros: [
      "Under $10 - the lowest-cost bedside solution we evaluated",
      "Works with any mattress thickness",
      "Very lightweight and easy to move or remove for laundry",
    ],
    cons: [
      "Only 4 pockets - significantly less storage than a full caddy",
      "Pockets are narrow - doesn't fit larger phones with thick cases",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    amazonUrl: buildAmazonUrl("B07JJFF9Z9"),
    priceRange: "$20–$26",
    badge: "Best Overall",
    name: "Zippered Fabric Under-Bed Storage Bags (Set of 2)",
    shortDescription: "Two large breathable bags with clear windows and full zipper seals - the most popular under-bed storage for dorms and small bedrooms.",
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
      "The most-reviewed and consistently top-rated under-bed storage option for small rooms. The set-of-2 format is practical - most users immediately separate by category (summer clothing vs. winter bedding). The breathable non-woven fabric is the right material for clothing; avoid storing shoes or hard items, which can misshape the bags over time.",
    alternatives: ["rolling-underbed-container"],
    relatedGuideSlugs: ["under-bed-storage-small-rooms"],
  },

  {
    id: "rolling-underbed-container",
    slug: "rolling-underbed-storage-container-with-lid",
    categorySlug: "small-room-storage",
    subcategorySlug: "under-bed-storage",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80",
    amazonUrl: buildAmazonUrl("B07MTLKFXN"),
    priceRange: "$28–$38",
    badge: undefined,
    name: "Rolling Under-Bed Storage Container with Lid",
    shortDescription: "A rigid-lid rolling container that slides smoothly on any floor - best for shoes, accessories, and items you access frequently.",
    bestFor: [
      "Shoes, accessories, and frequently-accessed items",
      "Hard floors where a rolling container glides smoothly",
      "Users who want to pull storage out and push it back easily",
    ],
    notIdealFor: [
      "Platform beds with very low clearance (needs 7.5+ inches)",
      "Carpet floors - wheels snag and roll poorly on thick pile",
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
      "Single unit - less capacity than the 2-bag fabric set at a higher price",
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
      "The best choice for items you access regularly - shoes, gym clothes, accessories - where the rolling feature genuinely pays off. The rigid lid keeps contents organized and prevents the shape distortion that affects fabric bags. However, it requires smooth floors and more bed clearance than fabric alternatives, making it a secondary recommendation behind the zippered bags for most dorm and small bedroom use cases.",
    alternatives: ["zippered-underbed-bags"],
    relatedGuideSlugs: ["under-bed-storage-small-rooms"],
  },

  // ── Desk Organizers ────────────────────────────────────────────────────────

  {
    id: "desktop-organizer-with-drawers",
    slug: "desktop-organizer-with-drawers-pen-holder",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-organizers",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    amazonUrl: buildAmazonUrl("B0BYDGF8DT"),
    priceRange: "$22–$30",
    badge: "Best Overall",
    name: "Desktop Organizer with Drawers and Pen Holder",
    shortDescription: "A two-drawer desktop organizer with a front pen-and-pencil compartment - consolidates desk clutter into a single vertical footprint.",
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
      "No assembly required - unbox and place",
      "Clean aesthetic works with both minimalist and traditional desk styles",
    ],
    cons: [
      "Drawers have no internal dividers - items mix together without additional inserts",
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
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    amazonUrl: buildAmazonUrl("B083QW26LW"),
    priceRange: "$18–$26",
    badge: "Best for Students",
    name: "Small Personal Foldable Desk Whiteboard",
    shortDescription: "A double-sided foldable whiteboard designed for desk use - perfect for to-do lists, equations, and daily planning without leaving your setup.",
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
      "Folds flat for storage or transport - fits in a laptop bag",
      "Double-sided surface doubles working area",
      "Integrated kickstand props it up hands-free at desk level",
      "Erases cleanly without ghosting after repeated use",
      "Starter markers and eraser included - usable out of the box",
    ],
    cons: [
      "Smaller surface than a wall-mounted board - not ideal for drawing large diagrams",
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
      "The most underrated study tool for dorm rooms. Sticky notes and scratch paper are inefficient - this foldable whiteboard gives you an always-ready reusable surface for to-do lists, problem-solving, and quick diagrams that doesn't generate waste. Its foldable design solves the dorm-room constraint of no available wall space. STEM students in particular find it indispensable within a week of purchase.",
    alternatives: [],
    relatedGuideSlugs: ["dorm-room-shower-essentials"],
  },

  {
    id: "slim-wireless-charging-pad",
    slug: "slim-wireless-charging-pad-multi-device",
    categorySlug: "desk-setup",
    subcategorySlug: "wireless-charging",
    image: "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?w=600&q=80",
    amazonUrl: buildAmazonUrl("B07Q1DJDGK"),
    priceRange: "$14–$22",
    badge: "Best Budget",
    name: "Slim 10W Wireless Charging Pad",
    shortDescription: "A flat, small-footprint Qi charging pad - charges iPhone and Android at full speed and takes virtually no desk space.",
    bestFor: [
      "Anyone who is tired of plugging and unplugging a charging cable multiple times a day",
      "Desk setups where a dedicated phone spot keeps devices out of the way while charging",
      "Students with Qi-compatible phones (iPhone 8 or later, most Android from 2019+)",
    ],
    notIdealFor: [
      "Users with phone cases thicker than 5mm - wireless charging efficiency drops significantly",
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
      "7mm thin - sits flush with desk surface without creating a bump",
      "USB-C input is compatible with modern laptops and adapters",
      "Charging indicator light is subtle - doesn't distract in a dark room",
      "Under $20 - easily the most cost-effective wireless charging option",
    ],
    cons: [
      "Does not support MagSafe 15W speeds for iPhone 12 and later",
      "Requires phone to be precisely placed - easy to miss the sweet spot",
      "USB-C adapter not included - need an existing 5V/2A or higher adapter",
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
      "The cleanest desk accessory upgrade for anyone still using a wired charging cable for their phone. At 3.9 inches wide and 7mm thin, it disappears on a small desk - just set your phone on it and it charges. The 10W output covers the vast majority of modern phones at full speed. The one real limitation is MagSafe: iPhone users who want 15W speeds need to spend more for a MagSafe-specific pad. For everyone else, this is the obvious pick.",
    alternatives: ["bed-risers-with-outlets-usb"],
    relatedGuideSlugs: ["dorm-room-power-essentials"],
  },

  {
    id: "compact-bluetooth-keyboard",
    slug: "compact-bluetooth-keyboard-multi-device",
    categorySlug: "desk-setup",
    subcategorySlug: "keyboards",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    amazonUrl: buildAmazonUrl("B00MUTWLW4"),
    priceRange: "$28–$40",
    badge: "Best Overall",
    name: "Compact Bluetooth Keyboard - 75% Layout, Multi-Device",
    shortDescription: "A 75% layout Bluetooth keyboard that pairs with three devices simultaneously - the ideal companion for a laptop stand setup.",
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
      "Battery": "2000mAh rechargeable - up to 6 months on a charge",
      "Key Travel": "1.5mm scissor-switch",
      "OS Compatibility": "Windows, macOS, iOS, Android",
      "Dimensions": "12.2\" × 4.5\" × 0.3\"",
      "Weight": "0.8 lbs",
    },
    pros: [
      "75% layout saves approximately 4 inches of desk width vs. full-size keyboards",
      "Three Bluetooth channels switch between devices instantly",
      "USB-C rechargeable - no AA batteries to replace",
      "Low-profile scissor switches are quiet and comfortable for typing",
      "Dedicated function row retained despite compact size",
    ],
    cons: [
      "No number pad - data-entry-heavy users will miss it",
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
    image: "https://images.unsplash.com/photo-1534237099520-491c840e80c4?w=600&q=80",
    amazonUrl: buildAmazonUrl("B01D58DRVC"),
    priceRange: "$16–$24",
    badge: "Best Overall",
    name: "Over-Door Pocket Organizer - 24 Pockets",
    shortDescription: "24 clear-front pockets that hang over any standard door - stores shoes, school supplies, toiletries, and small items without using floor or wall space.",
    bestFor: [
      "Dorm rooms where floor and closet space is critically limited",
      "Storing shoes on the back of a closet door (holds 12 pairs in 24 pockets)",
      "Students who need a visible, instantly-accessible home for toiletries or supplies",
    ],
    notIdealFor: [
      "Storing items heavier than 2 lbs per pocket - the over-door hook can stress door hinges",
      "Doors with recessed panels wider than 1.5 inches (hook may not hang flat)",
    ],
    specs: {
      "Pockets": "24 individual clear-front pockets",
      "Dimensions": "18\" W × 64\" L",
      "Pocket Size": "6\" W × 5\" H each",
      "Material": "PEVA clear pockets, fabric back panel",
      "Mount": "Over-door hook - no hardware",
      "Door Compatibility": "Standard interior doors up to 1.75\" thick",
      "Max Load": "1.5 lbs per pocket",
    },
    pros: [
      "Hangs in 10 seconds - no screws, no damage to door or wall",
      "Clear fronts let you see contents without opening pockets",
      "24 pockets is enough to organize an entire shoe collection or full toiletry kit",
      "64-inch length reaches from door top to below mid-height",
      "Multipurpose: works as shoe organizer, pantry organizer, cleaning supply holder, or school supply station",
    ],
    cons: [
      "Pockets are fixed size - won't accommodate items wider than 6 inches",
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
      "The highest-impact low-cost storage upgrade for a dorm room - it converts a blank door back panel into 24 usable storage slots without a single nail or screw. Students use it in three main configurations: shoe storage on the closet door, toiletry and personal care organization on the bathroom door, and school supply storage on the room door. The clear pockets prevent the 'out of sight, out of mind' problem that plagues opaque organizers. At under $20, it's one of the best value-per-square-inch storage products available.",
    alternatives: ["collapsible-storage-cubes"],
    relatedGuideSlugs: ["small-room-closet-storage"],
  },

  {
    id: "collapsible-storage-cubes",
    slug: "collapsible-fabric-storage-cubes-set-of-6",
    categorySlug: "small-room-storage",
    subcategorySlug: "storage-bins",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    amazonUrl: buildAmazonUrl("B071225BBS"),
    priceRange: "$22–$32",
    badge: "Best Value Set",
    name: "Collapsible Fabric Storage Cubes - Set of 6",
    shortDescription: "Six fold-flat fabric cubes that fit any cube shelf unit - stores clothes, linens, and accessories while hiding contents for a clean look.",
    bestFor: [
      "Cube bookshelf owners who want to add closed storage to open cubbies",
      "Storing folded clothes, extra linens, or bulky items in a closet",
      "Students who want storage that collapses completely flat when moving in/out",
    ],
    notIdealFor: [
      "Freestanding use - these need a shelf or cube unit to maintain their shape",
      "Heavy items over 15 lbs per cube (fabric sides will bow outward)",
    ],
    specs: {
      "Dimensions (open)": "11\" × 11\" × 11\"",
      "Fits": "Standard 12-inch cube shelf units",
      "Material": "Non-woven fabric with cardboard base insert",
      "Handle": "Dual fabric handles on each cube",
      "Folded": "Collapses flat - under 1 inch thick",
      "Quantity": "6 cubes per set",
      "Colors": "Multiple solid colors and two-tone patterns",
    },
    pros: [
      "Set of 6 provides enough cubes to fill a standard 6-cube or 8-cube bookshelf unit",
      "Collapses completely flat - easy to store or transport between semesters",
      "Dual handles let you pull cubes out of a shelf like a drawer",
      "Hides contents for a neat, uniform shelf appearance",
      "Wide color variety lets you color-code by category",
    ],
    cons: [
      "Cardboard base insert softens with humidity over time",
      "Not freestanding - requires a shelf unit or they collapse",
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
      "An essential buy for anyone with a cube bookshelf unit. Without cubes, an open cube shelf shows everything stored in it and looks perpetually messy. These fabric bins turn each cubby into a closed drawer-like compartment that can be pulled out completely. The set-of-6 value is strong - comparable single cubes cost $6–$8 each. The main practical limitation is the cardboard base: in humid environments or if stored with wet items, it softens. Replace the insert with a thin plastic cutting board if longevity is a concern.",
    alternatives: ["over-door-pocket-organizer", "vacuum-storage-bags"],
    relatedGuideSlugs: ["small-room-closet-storage"],
  },

  // ── Dorm Essentials ────────────────────────────────────────────────────────

  {
    id: "dorm-shower-caddy",
    slug: "hanging-dorm-shower-caddy-portable",
    categorySlug: "dorm-essentials",
    subcategorySlug: "shower-caddies",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    amazonUrl: buildAmazonUrl("B0BQPSRLH5"),
    priceRange: "$16–$24",
    badge: "Best Overall",
    name: "Portable Hanging Dorm Shower Caddy - Rust-Proof",
    shortDescription: "A rust-proof steel hanging caddy with removable divided shelves - designed specifically for the walk to and from shared dorm showers.",
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
      "Drain Holes": "Full mesh - drains completely",
      "Handle": "Reinforced carry handle at top",
      "Dimensions": "10.6\" W × 5.5\" D × 11\" H",
    },
    pros: [
      "Rust-resistant coating holds up to daily shower use and humidity",
      "Removable shelves allow interior configuration for tall or short bottles",
      "Full mesh design drains water immediately - no pooling at the bottom",
      "Hanging S-hook goes over any shower rod or hook",
      "Sturdy carry handle for the walk from dorm room to shower",
    ],
    cons: [
      "Only 2 shelves - if you have 5+ bottles, this fills quickly",
      "Steel is heavier than plastic alternatives - noticeable when carrying fully loaded",
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
      "The most durable shower caddy in this category. The rust-resistant coated steel outlasts the plastic caddies that deform, crack, or develop orange rust streaks within a semester. The removable shelf design is underappreciated: you can configure the interior to fit your specific bottles rather than working around fixed dividers. The S-hook provides a hands-free hang in the shower, and the carry handle is solid enough to trust fully loaded. The one honest limitation is capacity - heavy product users should look at a two-caddy system rather than overloading a single one.",
    alternatives: [],
    relatedGuideSlugs: ["dorm-room-shower-essentials"],
  },

  {
    id: "desk-drawer-organizer-tray-set",
    slug: "desk-drawer-organizer-tray-set",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-organizers",
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=600&q=80",
    amazonUrl: buildAmazonUrl("B002RL9CYK"),
    priceRange: "$12–$18",
    badge: undefined,
    name: "Desk Drawer Organizer Tray Set - 8 Piece",
    shortDescription: "Eight interlocking plastic trays that tile inside any desk drawer - transforms a cluttered junk drawer into a sorted, efficient workspace.",
    bestFor: [
      "Anyone with a desk that has at least one drawer currently used as a junk drawer",
      "Students who want pens, USB cables, and stationery sorted and instantly findable",
      "People who have tried loose organizers and find they shift around inside drawers",
    ],
    notIdealFor: [
      "Drawers under 12 inches wide where full tray configurations don't fit",
      "Users who don't have desk drawers - these require a drawer to work",
    ],
    specs: {
      "Pieces": "8 trays in 3 sizes",
      "Small Tray": "2.0\" × 4.0\" (×4)",
      "Medium Tray": "2.5\" × 8.0\" (×2)",
      "Large Tray": "4.0\" × 8.0\" (×2)",
      "Material": "BPA-free polypropylene",
      "Height": "1.75 inches - standard drawer-depth fit",
      "Interlocking": "Yes - snap together to prevent sliding",
    },
    pros: [
      "Interlocking design keeps all trays from shifting when the drawer is opened",
      "Three sizes allow a custom layout matched to your specific items",
      "Transparent plastic makes all contents visible from above",
      "BPA-free material - safe for food items in a kitchen drawer too",
      "Under $15 - among the most affordable drawer organization options",
    ],
    cons: [
      "No configuration covers all drawer sizes - you may have unfilled corners in very wide drawers",
      "Tray walls are thin; flex slightly when pressed hard",
      "Color options are limited - mostly clear or white",
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
      "A simple product that delivers consistently above its price point. The interlocking tabs are the differentiating feature - unlike loose trays that drift to one end of the drawer within a week, these stay in the configuration you set. The three-size system covers desk supplies well: small trays for erasers, staples, and SIM cards; medium trays for pens and markers; large trays for scissors, tape, and adapters. Measure your drawer width before purchasing to ensure the 8-piece set fills it adequately.",
    alternatives: ["desktop-organizer-with-drawers", "stackable-acrylic-desk-organizer"],
    relatedGuideSlugs: ["desk-organizers-small-desks"],
  },

  {
    id: "stackable-acrylic-desk-organizer",
    slug: "stackable-clear-acrylic-desk-organizer",
    categorySlug: "desk-setup",
    subcategorySlug: "desk-organizers",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    amazonUrl: buildAmazonUrl("B09V1D2B36"),
    priceRange: "$24–$34",
    badge: "Best Premium",
    name: "Stackable Clear Acrylic Desk Organizer - 4 Compartment",
    shortDescription: "Crystal-clear acrylic construction in a 4-compartment stackable design - the most visually clean organizer for a minimal desk aesthetic.",
    bestFor: [
      "Students or professionals who want a premium, aesthetic desk setup",
      "Organizing makeup and beauty tools as well as desk supplies",
      "Anyone who values seeing all their supplies at a glance without opening drawers",
    ],
    notIdealFor: [
      "Rough-use environments - acrylic scratches more easily than ABS plastic",
      "Budget-conscious buyers: costs 2× the plastic alternatives for similar function",
    ],
    specs: {
      "Material": "Premium PMMA acrylic (not cheap PS plastic)",
      "Compartments": "4 open-top sections",
      "Dimensions": "9.5\" W × 7.5\" D × 3.5\" H",
      "Stackable": "Yes - designed to stack 2 units high",
      "Clarity": "Crystal clear - no yellowing from UV",
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
      "Scratches more easily than ABS plastic - avoid abrasive cleaning",
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
      "The aesthetically superior choice in desk organization. If the way your desk looks matters to you as much as the function, acrylic beats plastic alternatives hands down - the crystal clarity and polished finish make it look like a purposeful design choice rather than a utility purchase. The stacking feature is genuinely useful: buy one to start and add a second if needed without changing your desk footprint. The trade-offs are real: it scratches more easily and costs more. For budget-focused buyers, the ABS plastic organizer or tray set is the smarter pick.",
    alternatives: ["desktop-organizer-with-drawers", "desk-drawer-organizer-tray-set"],
    relatedGuideSlugs: ["desk-organizers-small-desks"],
  },

  {
    id: "bed-risers-with-outlets-usb",
    slug: "bed-risers-with-power-outlets-and-usb-ports",
    categorySlug: "dorm-essentials",
    subcategorySlug: "bed-risers",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    amazonUrl: buildAmazonUrl("B08KZNFSTY"),
    priceRange: "$38–$50",
    badge: "Best Overall",
    name: "Bed Risers with Power Outlets and USB Ports",
    shortDescription: "Raises your bed 5 inches to create under-bed storage AND adds two power outlets and two USB ports at bed height - the most useful dorm upgrade available.",
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
      "1,300 lb weight capacity - handles any dorm mattress and frame combination",
      "Fits both round and square bed legs with included adapters",
    ],
    cons: [
      "More expensive than basic risers - you're paying for the electrical integration",
      "The 6-foot cord needs to reach a wall outlet - plan placement accordingly",
      "USB-A only, no USB-C - fast-charging newer iPhones and Android phones requires an adapter",
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

  // ── Storage - Vacuum Bags & Power ─────────────────────────────────────────

  {
    id: "vacuum-storage-bags",
    slug: "vacuum-storage-bags-space-saver-set",
    categorySlug: "small-room-storage",
    subcategorySlug: "vacuum-bags",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    amazonUrl: buildAmazonUrl("B07RMV89JD"),
    priceRange: "$18–$26",
    badge: "Best for Clothing",
    name: "Vacuum Storage Bags - Space Saver Set of 8",
    shortDescription: "Eight vacuum-seal bags in three sizes that compress bulky clothing and bedding to 80% less volume - the best solution for closet overflow.",
    bestFor: [
      "Storing seasonal clothing (winter coats, sweaters) that takes up excessive closet space",
      "Compressing extra bedding sets that don't fit in a dorm closet otherwise",
      "Students who ship items home during semester breaks and need to compress volume",
    ],
    notIdealFor: [
      "Delicate fabrics (silk, cashmere, heavily structured garments) that shouldn't be compressed",
      "Items with down filling - compression permanently damages down loft",
    ],
    specs: {
      "Quantities": "8 bags total: 2 jumbo (31\"×40\"), 3 large (23\"×28\"), 3 medium (15\"×23\")",
      "Seal Type": "Double-zip + vacuum valve",
      "Vacuum Method": "Standard vacuum cleaner nozzle",
      "Re-sealable": "Yes - reusable indefinitely",
      "Material": "PA+PE laminated barrier film",
      "Compression": "Up to 80% volume reduction",
    },
    pros: [
      "Set of 8 covers a full dorm room clothing/bedding inventory",
      "Three sizes allow matching bag to item - no wasted space",
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
      "The single most effective intervention for a closet that doesn't have enough space. Compressing a full winter wardrobe into vacuum bags at the start of spring semester or before summer storage can reclaim 60–70% of closet volume. The set-of-8 format with three sizes is the right purchasing unit - one jumbo bag for a comforter, two large bags for sweaters and jeans, and three medium bags for tees and light layers. Avoid using these for down items or structured pieces, and you'll get multiple semesters of use from a single set.",
    alternatives: ["collapsible-storage-cubes", "over-door-pocket-organizer"],
    relatedGuideSlugs: ["small-room-closet-storage"],
  },

  {
    id: "compact-power-strip-usb",
    slug: "compact-surge-protector-power-strip-usb-ports",
    categorySlug: "dorm-essentials",
    subcategorySlug: "power-strips",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    amazonUrl: buildAmazonUrl("B0B1DKN9HG"),
    priceRange: "$22–$32",
    badge: "Best Overall",
    name: "Compact Surge Protector Power Strip with 4 USB Ports",
    shortDescription: "A slim surge-protected power strip with 3 AC outlets and 4 USB-A ports - designed to sit flat on a small desk without the bulk of standard power strips.",
    bestFor: [
      "Dorm rooms where wall outlets are limited to 1–2 per side of the room",
      "Desk setups with multiple devices (laptop, monitor, lamp, phone, tablet) needing simultaneous power",
      "Students who want USB charging without occupying AC outlets",
    ],
    notIdealFor: [
      "High-draw appliances like space heaters, kettles, or mini fridges - these need a dedicated outlet",
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
      "AC outlets are spaced generously - accommodates wall adapters side by side",
      "4 USB-A ports eliminate the need for separate USB charging hubs",
      "1,080-joule surge protection - adequate for laptops and monitors in older buildings",
      "ETL certification verifies electrical safety standards",
    ],
    cons: [
      "No USB-C ports - fast-charging modern smartphones requires a USB-C to USB-A adapter",
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
      "The most practical desk accessory for dorm room setup. Older dorm buildings often have only one usable outlet per desk area - this power strip multiplies that into 3 AC outlets and 4 USB ports, which is enough for a fully equipped student desk setup. The slim profile means it can sit on the desk surface or be tucked against the wall without the clunky footprint of traditional power strips. The absence of USB-C is the most notable limitation in 2026, but an inexpensive USB-C to USB-A adapter solves this for devices that need it. ETL certification is important - confirm your dorm allows surge-protected strips (most do).",
    alternatives: ["bed-risers-with-outlets-usb"],
    relatedGuideSlugs: ["dorm-room-power-essentials"],
  },

  // ── Slim Storage Carts ─────────────────────────────────────────────────────

  {
    id: "narrow-rolling-storage-cart",
    slug: "narrow-rolling-storage-cart-with-drawers",
    categorySlug: "small-room-storage",
    subcategorySlug: "storage-carts",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop",
    amazonUrl: buildAmazonUrl("B07D1M5DQD"),
    priceRange: "$35–$50",
    badge: "Best Overall",
    name: "Narrow Rolling Storage Cart with Drawers",
    shortDescription: "A slim 3-drawer rolling cart that fits between furniture gaps - the most versatile small-room storage upgrade under $50.",
    bestFor: [
      "The gap between a desk and a wall or beside a dresser",
      "Dorm rooms that need drawer organization without a full dresser",
      "Bathrooms, kitchens, and laundry areas in small apartments",
    ],
    notIdealFor: [
      "Very rough or uneven floors - casters may rattle or catch",
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
      "Assembly required - instructions are basic",
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
      "The single most-versatile storage addition for small rooms. The narrow width is the key feature - it turns otherwise wasted gap space beside furniture into organized drawer storage. Students frequently report using one beside a dorm desk for school supplies, beside a bed for personal items, and taking it home for bathroom storage between semesters. The locking wheels are essential; make sure to engage them when parked to prevent unwanted rolling.",
    alternatives: ["compact-3tier-storage-tower"],
    relatedGuideSlugs: [],
  },

  {
    id: "compact-3tier-storage-tower",
    slug: "compact-3-tier-desk-storage-tower",
    categorySlug: "small-room-storage",
    subcategorySlug: "storage-carts",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80&fit=crop",
    amazonUrl: buildAmazonUrl("B08ML2RSTS"),
    priceRange: "$22–$32",
    badge: "Best Budget",
    name: "Compact 3-Tier Storage Tower",
    shortDescription: "A lightweight stackable tower that adds vertical storage without eating floor space - under $30 and assembles in minutes.",
    bestFor: [
      "Desk corners for office supplies and small electronics",
      "Bathroom countertops in shared dorm bathrooms",
      "Users who want vertical open-shelf storage rather than drawers",
    ],
    notIdealFor: [
      "Items that need to be hidden or dust-protected (open shelves)",
      "Heavy items - open tiers are less stable than enclosed drawers under load",
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
      "Snap-together assembly - no tools, under 5 minutes",
      "Footprint is under 10 inches wide - fits on desk corners",
      "Open design makes contents visible and accessible at a glance",
      "Very lightweight - easy to move when rearranging",
    ],
    cons: [
      "Open shelves accumulate dust - not ideal for items needing protection",
      "Lighter weight means it can tip if top shelf is overloaded",
      "No wheels - moving requires lifting",
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
