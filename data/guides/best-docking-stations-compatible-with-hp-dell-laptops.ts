export const guideSlug = "best-docking-stations-compatible-with-hp-dell-laptops";
export const guideTitle = "8 Best Docking Stations Compatible with HP & Dell Laptops in 2026";
export const metaTitle = "Best Docking Stations for HP & Dell Laptops (2026)";
export const metaDescription =
  "8 best docking stations for HP and Dell business laptops in 2026, from official G-series and WD docks to renewed bundles. Compare ports, power, and IT-fleet fit.";
export const mainKeyword = "docking station for hp laptop";
export const introParagraphs = [
  "Docking stations for HP and Dell laptops come with naming conventions that trip up a lot of buyers. Dell's \"WD\" prefix marks its dock line, WD19, WD22TB4, and so on, with the number roughly indicating the era and \"TB4\" specifically denoting Thunderbolt 4 support versus older USB-C-only WD docks. HP splits its lineup into business-tier G-series docks, built for EliteBook, ZBook, and ProBook laptops, versus generic consumer USB-C hubs, and the G-series docks in this guide are that stricter business tier.\n\nBelow are 8 docking stations we evaluated on official HP and Dell compatibility, business-tier durability, power delivery, and IT-fleet relevance, ranging from a $62.17 renewed HP dock to a 180W Dell Thunderbolt 4 dock built for Precision workstation laptops.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31RkQ3P6p3L._SL500_.jpg";

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

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "hp-usb-c-dock-g5-11-in-1",
    rank: 1,
    badge: "Best HP Business Pick",
    name: "HP USB-C Dock G5 11-in-1",
    price: "$97.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31RkQ3P6p3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08TQPTPCK?tag=deskfinds0d-20",
    description:
      "The HP USB-C Dock G5 is part of HP's business-tier G-series lineup, built and validated specifically for EliteBook, ZBook, and ProBook business laptops rather than HP's generic consumer USB-C hubs. That business tier generally means stricter enterprise durability and compatibility testing than a no-name USB-C hub.\n\nWith 11 ports covering displays, data, and networking, it's a solid daily-use dock for a single HP business laptop, and its business-tier validation makes it a safer choice for buyers replacing a dock in an office IT-managed fleet.",
    specs: [
      "11-in-1 port configuration",
      "Business-tier G-series HP dock",
      "Built for EliteBook/ZBook/ProBook",
      "USB-C connection",
      "Multiple display outputs",
    ],
    pros: [
      "Official HP business-tier validation",
      "Built specifically for HP business laptop lines",
      "Solid 11-port configuration",
      "Good fit for IT-managed office fleets",
    ],
    cons: [
      "Lower charging wattage than the newer G6 dock",
      "Not Thunderbolt certified",
      "Best suited to HP-branded business laptops specifically",
    ],
    bestFor: "HP business laptop owners who want official G-series validation",
  },
  {
    id: "hp-usb-c-100w-g6-dock",
    rank: 2,
    badge: "Best HP 100W Pick",
    name: "HP USB-C 100W G6 Dock",
    price: "$195.04",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31hvjotuUPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GGTQ2KDQ?tag=deskfinds0d-20",
    description:
      "HP's current-generation G6 business dock steps up to 100W PD, HP's higher-power option for business laptops with more demanding charging needs than the G5 covers. Like the G5, it's built and validated for HP's EliteBook, ZBook, and ProBook lines rather than as a generic consumer hub.\n\nBuyers with an HP ZBook workstation or another higher-draw HP business laptop should still remember that a dock rated for 100W typically delivers about 10-15W less to the laptop after the dock's own circuitry draws power, so real charging speed will land a bit under the rated number.",
    specs: [
      "100W PD",
      "Current-generation HP business dock",
      "Built for EliteBook/ZBook/ProBook",
      "USB-C connection",
      "Multiple display and data ports",
    ],
    pros: [
      "Higher 100W PD rating than the G5",
      "Official HP business-tier validation",
      "Current-generation dock",
      "Suited to higher-power HP business laptops",
    ],
    cons: [
      "Pricier than the G5 and Essential dock",
      "Real charging output runs below the rated 100W",
      "Not Thunderbolt certified",
    ],
    bestFor: "HP business laptop owners needing higher wattage charging through their dock",
  },
  {
    id: "hp-usb-c-dock-g5-charging-bundle-renewed",
    rank: 3,
    badge: "Best Value HP Renewed Bundle",
    name: "HP USB-C Dock G5 and Charging Bundle (Renewed)",
    price: "$134.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41+CN2EIkwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D437YLL5?tag=deskfinds0d-20",
    description:
      "This renewed HP G5 dock ships bundled with a charging accessory, an official HP business-tier dock at a lower price point than buying new, with the added convenience of the bundled charger included in one purchase.\n\nAs with any renewed official dock, buyers should confirm the listing includes the dock's original power adapter rather than a third-party replacement, which tends to be the most common complaint with used official business docks.",
    specs: [
      "Official HP G5 dock, renewed",
      "Includes bundled charging accessory",
      "Business-tier HP validation",
      "USB-C connection",
      "Renewed/refurbished condition",
    ],
    pros: [
      "Bundled charging accessory adds value",
      "Official HP business-tier dock at a renewed price",
      "Good savings over buying new",
      "Business-tier durability standards",
    ],
    cons: [
      "Renewed condition may show light cosmetic wear",
      "Confirm original power adapter is included",
      "Not Thunderbolt certified",
    ],
    bestFor: "Buyers who want an official HP dock plus charger bundled at a lower price",
  },
  {
    id: "hp-usb-c-dock-g5-renewed",
    rank: 4,
    badge: "Cheapest HP Renewed Option",
    name: "HP USB-C Dock G5 (Renewed)",
    price: "$62.17",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21WpIpdzFCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08669458L?tag=deskfinds0d-20",
    description:
      "This is the cheapest HP dock in this entire guide, a renewed G5 unit without the bundled charger accessory. It's still an official HP business-tier dock, just at the lowest price point available here.\n\nFor buyers on a tight budget who still want HP's official business validation over a generic third-party hub, this renewed unit is the most affordable route in, provided the listing includes the original power adapter.",
    specs: [
      "Official HP G5 dock, renewed",
      "Business-tier HP validation",
      "USB-C connection",
      "11-port configuration",
      "Renewed/refurbished condition",
    ],
    pros: [
      "Cheapest HP dock in this guide",
      "Still official HP business-tier hardware",
      "Good entry point for budget-conscious buyers",
      "Business-tier durability standards",
    ],
    cons: [
      "No bundled charging accessory included",
      "Renewed condition, confirm original power adapter is included",
      "Not Thunderbolt certified",
    ],
    bestFor: "Budget-conscious HP business laptop owners who still want official hardware",
  },
  {
    id: "hp-usb-c-g5-essential-dock",
    rank: 5,
    badge: "Best HP Essential Dock",
    name: "HP USB-C G5 Essential Dock",
    price: "$106.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21ZtzxphnAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BL8MXCQ8?tag=deskfinds0d-20",
    description:
      "The G5 Essential Dock trims down to HP's essential-tier business feature set, still official HP hardware validated for EliteBook, ZBook, and ProBook laptops, but positioned as a lighter, more affordable step within the G-series lineup than the full G5 or G6 docks.\n\nIt's a solid pick for a straightforward single-laptop desk setup that doesn't need every port the full G5 offers, while still keeping HP's business-tier durability standard over a generic consumer hub.",
    specs: [
      "Official HP G5 Essential business dock",
      "Built for EliteBook/ZBook/ProBook",
      "USB-C connection",
      "Streamlined essential port set",
      "Business-tier durability standard",
    ],
    pros: [
      "Official HP business-tier validation",
      "Simpler, more affordable G-series option",
      "Good fit for straightforward desk setups",
      "Consistent with HP's enterprise durability testing",
    ],
    cons: [
      "Fewer ports than the full G5 11-in-1",
      "Not Thunderbolt certified",
      "Lower charging wattage than the G6",
    ],
    bestFor: "HP business laptop owners who want a simpler essential-tier official dock",
  },
  {
    id: "dell-thunderbolt-wd22tb4-dock-130w",
    rank: 6,
    badge: "Best Dell Value Pick",
    name: "Dell Thunderbolt WD22TB4 Dock 130W",
    price: "$184.70",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31HeDuEyhoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B13Y2QVW?tag=deskfinds0d-20",
    description:
      "Dell's naming convention is worth decoding here: the \"WD\" prefix marks Dell's dock line, the number after roughly indicates the generation, and \"TB4\" in the name specifically denotes Thunderbolt 4 support versus older USB-C-only WD docks. This WD22TB4 model delivers genuine Thunderbolt 4 with 130W charging.\n\nAs with any Dell dock, match the exact model number to your Dell laptop's supported dock list on Dell's own compatibility page rather than assuming any \"Dell dock\" works with any \"Dell laptop,\" since Dell has released multiple WD-series generations that aren't all interchangeable.",
    specs: [
      "Official Dell Thunderbolt 4 dock (WD22TB4)",
      "130W charging",
      "Genuine Thunderbolt 4 support",
      "USB-C/Thunderbolt connection",
      "Multiple display outputs",
    ],
    pros: [
      "Genuine Thunderbolt 4 certification",
      "Strong 130W charging for most Dell laptops",
      "Good value relative to the higher-wattage WD22TB4 variants",
      "Official Dell compatibility validation",
    ],
    cons: [
      "Must match the exact WD22TB4 model to your Dell laptop's supported list",
      "Lower wattage than the 180W variant for workstation-class laptops",
      "Pricier than HP's essential-tier docks",
    ],
    bestFor: "Dell laptop owners who want certified Thunderbolt 4 at a moderate price",
  },
  {
    id: "dell-wd22tb4-thunderbolt-4-dock-180w-new",
    rank: 7,
    badge: "Best Dell New-Condition Pick",
    name: "Dell WD22TB4 Thunderbolt 4 Dock 180W (New)",
    price: "$254.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41LLHUKQeSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FSRNYYMH?tag=deskfinds0d-20",
    description:
      "This is the higher-power 180W tier of Dell's WD22TB4 Thunderbolt 4 dock, sold new, aimed at Dell Precision workstation laptops and other higher-draw Dell models that need more charging headroom than the 130W variant provides.\n\nEven at 180W rated output, remember a dock typically delivers about 10-15W less to the laptop once its own circuitry draws its share, which matters most for Precision workstations needing 100-170W under load, since a lower-rated dock might not charge them at full speed.",
    specs: [
      "Official Dell Thunderbolt 4 dock (WD22TB4), new condition",
      "180W charging, higher tier than the 130W model",
      "Genuine Thunderbolt 4 support",
      "Built for Dell Precision workstation laptops",
      "Multiple display outputs",
    ],
    pros: [
      "Highest charging wattage among the Dell docks in this guide",
      "New condition, not renewed",
      "Genuine Thunderbolt 4 certification",
      "Built for demanding Precision workstation laptops",
    ],
    cons: [
      "Most expensive pick in this entire guide",
      "Overkill for standard Dell laptops that don't need 180W",
      "Still loses some wattage to the dock's own circuitry",
    ],
    bestFor: "Dell Precision workstation owners needing maximum charging headroom",
  },
  {
    id: "wd22tb4-dell-thunderbolt-4-dock-40gbps",
    rank: 8,
    badge: "Best Dell Thunderbolt 4 Pick",
    name: "WD22TB4 Dell Thunderbolt 4 Dock 40Gbps",
    price: "$244.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41XAK-LIfpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CK7L7M6S?tag=deskfinds0d-20",
    description:
      "This WD22TB4 variant emphasizes full 40Gbps Thunderbolt 4 bandwidth, the top overall Thunderbolt pick for Dell laptop owners in this guide who want maximum data throughput alongside official Dell compatibility validation.\n\nOfficial Dell Thunderbolt docks like this one are commonly deployed in corporate IT fleets because they support features like network boot (PXE) and sit on Dell's official vendor-approved hardware compatibility lists, a detail relevant to anyone buying on behalf of a workplace IT department rather than for personal use.",
    specs: [
      "Official Dell Thunderbolt 4 dock (WD22TB4)",
      "Full 40Gbps Thunderbolt bandwidth",
      "Supports network boot (PXE) for IT fleets",
      "On Dell's official vendor-approved hardware list",
      "Multiple display outputs",
    ],
    pros: [
      "Full 40Gbps Thunderbolt 4 bandwidth",
      "On Dell's official vendor-approved compatibility list",
      "Supports PXE network boot for IT deployments",
      "Genuine Thunderbolt 4 certification",
    ],
    cons: [
      "Premium price similar to the 180W variant",
      "Must still match the exact model to your Dell laptop's supported list",
      "Overkill for buyers who don't need max Thunderbolt bandwidth",
    ],
    bestFor: "Dell laptop owners and IT buyers who want maximum Thunderbolt bandwidth and fleet compatibility",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "HP business-tier vs consumer-hub validation",
    description: "Confirmed each HP dock sits in the business-tier G-series lineup, built and validated for EliteBook/ZBook/ProBook laptops, rather than treating it as a generic consumer USB-C hub.",
  },
  {
    title: "Dell WD naming and generation matching",
    description: "Decoded each Dell dock's WD model number and TB4 designation to confirm real Thunderbolt 4 support versus older USB-C-only WD generations, and checked wattage tier against workstation power needs.",
  },
  {
    title: "Renewed dock value and risk",
    description: "Evaluated renewed HP docks specifically on price savings versus the risk of a missing original power adapter, the most common complaint with used official business docks.",
  },
  {
    title: "Power delivery realism for business laptops",
    description: "Compared each dock's rated wattage against the roughly 10-15W typically lost to the dock's own circuitry, especially for HP ZBook and Dell Precision workstations needing 100-170W under load.",
  },
  {
    title: "IT-fleet and corporate deployment fit",
    description: "Checked whether each official Dell and HP dock supports enterprise features like network boot (PXE) and sits on the vendor's official approved hardware compatibility list, relevant for IT-managed office fleets.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Decode Dell's WD naming before buying",
    explanation:
      "The \"WD\" prefix marks Dell's dock line, the number roughly indicates the generation, and \"TB4\" specifically denotes Thunderbolt 4 support versus older USB-C-only WD docks. Match the exact model number to your Dell laptop's supported dock list on Dell's own compatibility page rather than assuming any \"Dell dock\" works with any \"Dell laptop.\"",
  },
  {
    criterion: "HP's G-series is business-tier, not a generic consumer hub",
    explanation:
      "HP splits its dock lineup into business-tier G-series docks, sold and validated specifically for EliteBook, ZBook, and ProBook business laptops, versus consumer-facing generic USB-C hubs. The G-series docks in this guide are built to stricter enterprise durability and compatibility testing standards, which matters when replacing a dock in an IT-managed office fleet.",
  },
  {
    criterion: "Confirm a renewed dock includes the original power adapter",
    explanation:
      "Renewed official HP and Dell docks are a legitimate way to save money over buying new, but a missing original power adapter, replaced with a third-party one, is the most common complaint with used official business docks. Check the listing before buying.",
  },
  {
    criterion: "Account for real power delivery, not the rated wattage",
    explanation:
      "A dock rated for a given wattage typically delivers about 10-15W less to the laptop once the dock's own circuitry draws its share. This matters most for HP ZBook and Dell Precision workstations needing 100-170W under load, which may not charge at full speed from a dock rated lower than that real requirement.",
  },
  {
    criterion: "IT-managed fleets should check the vendor's approved hardware list",
    explanation:
      "Both Dell and HP business docks are commonly deployed in corporate IT fleets specifically because they support features like network boot (PXE) and sit on official vendor-approved hardware compatibility lists. A generic third-party dock might be technically compatible but not approved by IT policy for a company-owned laptop.",
  },
  {
    criterion: "Check for firmware updates before assuming a dock is faulty",
    explanation:
      "HP and Dell both regularly release dock firmware fixing display flicker and USB dropouts. Checking for a firmware update is a genuinely useful first troubleshooting step most buying guides never mention.",
  },
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Brand and Model Match",
    intro:
      "Matching the exact model number to your laptop's supported dock list matters more with HP and Dell than the brand name alone.",
    table: {
      headers: ["Laptop", "What to check", "Best pick"],
      rows: [
        ["HP EliteBook/ZBook/ProBook", "G-series business-tier validation", "HP USB-C Dock G5 11-in-1, HP USB-C 100W G6 Dock"],
        ["Dell laptop with Thunderbolt port", "WD model number, confirm \"TB4\" in the name", "Dell Thunderbolt WD22TB4 Dock 130W"],
        ["Dell Precision workstation", "Higher wattage WD22TB4 tier", "Dell WD22TB4 Thunderbolt 4 Dock 180W (New)"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Budget", "Best pick", "Why"],
      rows: [
        ["Under $70", "HP USB-C Dock G5 (Renewed)", "Cheapest official HP dock in this guide"],
        ["$95-$135", "HP USB-C Dock G5 11-in-1, HP G5 Essential Dock, HP G5 Renewed Bundle", "Solid official HP business-tier options"],
        ["$180-$255", "Dell Thunderbolt WD22TB4 130W, Dell WD22TB4 180W (New), WD22TB4 40Gbps", "Certified Thunderbolt 4 Dell docks"],
      ],
    },
  },
  {
    subheading: "By Power Needs",
    intro:
      "Higher-draw business laptops need a dock that gets close to their real charging requirement, not just a high rated number.",
    table: {
      headers: ["Laptop type", "Typical power need", "Best pick"],
      rows: [
        ["Standard HP EliteBook/ProBook", "45-65W", "HP USB-C Dock G5 11-in-1, HP G5 Essential Dock"],
        ["HP ZBook workstation", "90-135W", "HP USB-C 100W G6 Dock"],
        ["Dell Precision workstation", "100-170W", "Dell WD22TB4 Thunderbolt 4 Dock 180W (New)"],
      ],
    },
    note: "Remember every dock here delivers roughly 10-15W less than its rated output once the dock's own circuitry draws power, so a Precision workstation needing 170W will still rely partly on its own charger during the heaviest workloads.",
  },
  {
    subheading: "By Renewed vs New Condition",
    cards: [
      {
        label: "Want the lowest price and don't mind renewed",
        text: "HP USB-C Dock G5 (Renewed) is the cheapest pick in this guide, just confirm the original power adapter is included.",
      },
      {
        label: "Want a renewed dock plus a bundled charger",
        text: "HP USB-C Dock G5 and Charging Bundle (Renewed) adds a charging accessory to the same renewed G5 dock.",
      },
      {
        label: "Want guaranteed new condition",
        text: "Dell WD22TB4 Thunderbolt 4 Dock 180W (New) and every other Dell pick in this guide ship new, not renewed.",
      },
    ],
  },
  {
    subheading: "By Corporate IT Fleet Deployment",
    intro:
      "Buyers purchasing on behalf of a workplace should weigh official vendor approval more heavily than price alone.",
    table: {
      headers: ["Need", "Best pick"],
      rows: [
        ["PXE network boot support for IT deployment", "WD22TB4 Dell Thunderbolt 4 Dock 40Gbps"],
        ["Official HP business-tier fleet replacement", "HP USB-C Dock G5 11-in-1"],
        ["Official Dell fleet replacement with Thunderbolt", "Dell Thunderbolt WD22TB4 Dock 130W"],
      ],
    },
    note: "A generic third-party dock might be technically compatible with a company laptop but not appear on the vendor's official approved hardware list, which can matter for IT policy compliance even if it works fine technically.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What does the \"WD\" and \"TB4\" mean in Dell dock names?",
    a: "The \"WD\" prefix marks Dell's dock product line, and the number after it roughly indicates the generation or era. \"TB4\" specifically denotes Thunderbolt 4 support, distinguishing it from older USB-C-only WD docks. Always match the exact model number to your Dell laptop's supported dock list on Dell's own compatibility page rather than assuming any \"Dell dock\" works with any \"Dell laptop.\"",
  },
  {
    q: "What's the difference between HP's G-series docks and a generic USB-C hub?",
    a: "HP's G-series docks, like the G5 and G6 in this guide, are business-tier hardware sold and validated specifically for HP EliteBook, ZBook, and ProBook laptops. They're generally built to stricter enterprise durability and compatibility testing standards than a generic no-name USB-C hub, which matters for buyers replacing a dock in an office IT-managed fleet.",
  },
  {
    q: "Is it safe to buy a renewed HP or Dell docking station?",
    a: "Renewed official docks are a legitimate way to get business-tier hardware at a lower price. The main thing to confirm before buying is whether the listing includes the dock's original power adapter, since a third-party replacement adapter is the most common complaint with used official docks.",
  },
  {
    q: "Why isn't my HP or Dell laptop charging at full speed through the dock?",
    a: "A dock rated for a given wattage typically delivers about 10-15W less to the laptop once its own circuitry draws its share. This matters most for HP ZBook and Dell Precision workstation laptops needing 100-170W under load, which may not charge at full speed from a dock rated lower than that real requirement.",
  },
  {
    q: "Do I need a Thunderbolt-certified dock, or will USB4 work with my Dell or HP laptop?",
    a: "USB4 docks are broadly \"should work\" compatible with Thunderbolt devices, but they lack the strict Intel certification that guarantees Thunderbolt 4 or 5 compatibility. If your laptop has a genuine Thunderbolt port, a certified pick like the Dell WD22TB4 series removes that layer of guesswork.",
  },
  {
    q: "Why does my company IT department require a specific dock model?",
    a: "Official Dell and HP business docks are commonly deployed in corporate IT fleets because they support features like network boot (PXE) and sit on the vendor's official approved hardware compatibility lists. A generic third-party dock might be technically compatible but isn't necessarily approved by IT policy for a company-owned laptop.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-docking-stations-compatible-with-lenovo-laptops", title: "Best Docking Stations for Lenovo Laptops (2026)" },
  { href: "/guide/best-docking-stations-for-surface-pro-laptop", title: "Best Docking Stations for Surface Pro & Surface Laptop (2026)" },
  { href: "/guide/best-docking-station-for-laptop", title: "Best Docking Stations for Laptops (2026)" },
];
