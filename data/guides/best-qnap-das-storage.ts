export const guideSlug = "best-qnap-das-storage";
export const guideTitle = "4 Best QNAP DAS Storage Options";
export const metaTitle = "Best QNAP DAS Storage in 2026";
export const metaDescription = "QNAP's TR and TL series cover hardware RAID and JBOD expansion respectively. We separated the two families before ranking.";
export const mainKeyword = "qnap das storage";
export const introParagraphs = [
  "QNAP explicitly markets two distinct DAS families: TR-series units with genuine hardware RAID, and TL-series units built for JBOD/host-managed expansion, both usable as standalone external storage or QNAP NAS backup expansion.",
  "We separated these two families clearly, since TR-004 and TL-D810TC4-US look similar in bay count but solve fundamentally different problems, RAID redundancy versus raw capacity expansion with software-level drive-health monitoring."
];
export const lastUpdated = "2026-08-14";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/310l7keevAS._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-qnap-das-storage-1",
    rank: 1,
    badge: "Best Hardware RAID (TR-004)",
    name: "QNAP TR-004 4-Bay USB-C DAS with Hardware RAID (Diskless)",
    price: "$219.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/310l7keevAS._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07K4RC7X9?tag=deskfinds0d-20",
    description: "The TR-004 is a genuine hardware-RAID DAS, supporting RAID 0, 1, 5, JBOD, and individual disks across 4 x 3.5-inch SATA bays, connected via USB Type-C for use as either standalone external storage or QNAP NAS backup expansion.\n\nQNAP is explicit about a real limitation: the TR-004's storage pool cannot be combined into a connected NAS's own pool, and drives can only migrate between TR-004 units, not to a different NAS model, a genuine gotcha worth knowing before buying it purely as NAS expansion.",
    specs: ["4x 3.5in bays, hardware RAID 0/1/5/JBOD","USB Type-C","Lockable drive bays"],
    pros: ["True hardware RAID controller, not host software RAID","Doubles as standalone DAS or NAS backup expansion","Lockable bays for physical security"],
    cons: ["Storage pool cannot merge into a connected NAS's own pool","Drive migration limited to other TR-004 units only"],
    bestFor: "buyers prioritizing 4x 3.5in bays, hardware raid 0/1/5/jbod",
  },
  {
    id: "best-qnap-das-storage-2",
    rank: 2,
    badge: "Best Compact Hardware RAID (TR-002-A)",
    name: "QNAP TR-002-A-US 2-Bay USB-C DAS with Hardware RAID (Diskless)",
    price: "$179.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31EpCloBGuS._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVCXFMDH?tag=deskfinds0d-20",
    description: "The compact TR-002-A-US supports 2 x 2.5/3.5-inch SATA drives with hardware RAID 0, 1, JBOD, or individual disk modes, positioned as either standalone external storage or QNAP NAS backup expansion over a USB Type-C connection.\n\nLockable drive bays add physical security, and the included USB Type-C to Type-A cable covers both modern and older host ports out of the box, a genuinely compact 2-bay entry point into QNAP's DAS ecosystem.",
    specs: ["2-bay hardware RAID 0/1/JBOD","USB Type-C, lockable bays","2.5in/3.5in drive support"],
    pros: ["Genuine hardware RAID in a compact 2-bay footprint","Lockable bays for physical security","Includes both USB-C and USB-A cable options"],
    cons: ["Only 2 bays limits RAID options to mirroring, not parity","Same NAS-pool-separation limitation as QNAP's TR-004"],
    bestFor: "buyers prioritizing 2-bay hardware raid 0/1/jbod",
  },
  {
    id: "best-qnap-das-storage-3",
    rank: 3,
    badge: "Best JBOD Expansion (TL-D810TC4)",
    name: "QNAP TL-D810TC4-US 8-Bay Desktop DAS/JBOD Expansion",
    price: "$799.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31tqzxU-VlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H3VYZDFH?tag=deskfinds0d-20",
    description: "QNAP's TL-D810TC4-US delivers up to 10Gbps over USB 3.2 Gen 2 Type-C across 8 bays of 3.5/2.5-inch SATA 6Gb/s drives, positioned as plug-and-play DAS expansion for QNAP NAS units as well as Windows, macOS, and Ubuntu/Linux workstations.\n\nThe free QNAP JBOD Manager utility (or QTS/QuTS hero's Storage & Snapshots app when attached to a QNAP NAS) monitors drive health and manages JBOD configurations, giving genuine software-level visibility that generic third-party enclosures lack.",
    specs: ["8-bay desktop, up to 10Gbps","QNAP JBOD Manager software support","3.5in/2.5in SATA 6Gb/s"],
    pros: ["QNAP JBOD Manager gives real drive-health monitoring software","Works across QNAP NAS, Windows, macOS, and Linux workstations","Genuine QNAP build quality at 8-bay density"],
    cons: ["JBOD/DAS expansion only, not hardware RAID","Best software experience requires a QNAP NAS host"],
    bestFor: "buyers prioritizing 8-bay desktop, up to 10gbps",
  },
  {
    id: "best-qnap-das-storage-4",
    rank: 4,
    badge: "Best Rackmount JBOD (TL-R1200C-RP)",
    name: "QNAP TL-R1200C-RP 12-Bay Rackmount JBOD Enclosure",
    price: "$899.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/218PLPWYmML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B086WCRH3C?tag=deskfinds0d-20",
    description: "The TL-R1200C-RP is genuine rackmount enterprise-adjacent DAS: 12 x 3.5-inch SATA 6Gb/s bays over a single 10Gbps USB 3.2 Gen 2 Type-C port, backed by a 250W redundant power supply unit for real uptime protection against a single PSU failure.\n\nIt's built for storage expansion of QNAP NAS units, Windows computers, and servers, a rack-scale JBOD option that bridges the gap between desktop DAS enclosures and full enterprise SAS disk shelves.",
    specs: ["12-bay rackmount, 250W redundant PSU","10Gbps USB 3.2 Gen 2 Type-C","3.5in SATA 6Gb/s"],
    pros: ["Redundant 250W PSU protects against single power-supply failure","12-bay rackmount density bridges desktop DAS and enterprise SAS","Single USB-C connection simplifies host cabling versus SAS HBA setups"],
    cons: ["USB connection, not multipath SAS, for genuine enterprise redundancy","Requires rack space and 250W-class power infrastructure"],
    bestFor: "buyers prioritizing 12-bay rackmount, 250w redundant psu",
  }
];

export const howWeEvaluated = [
  {
    "title": "Connection & Drive Architecture",
    "description": "Verified whether each product is genuinely direct-attached storage (USB, Thunderbolt, or SAS to one host) and whether drives mount individually, in JBOD, or under real hardware RAID, rather than assuming any multi-bay box works the same way."
  },
  {
    "title": "Real Interface Speed",
    "description": "Checked the documented USB generation, Thunderbolt generation, or SAS link speed against real sustained throughput figures where manufacturers publish them, rather than repeating theoretical link-rate marketing numbers."
  },
  {
    "title": "RAID/JBOD Implementation",
    "description": "Distinguished hardware-controller RAID from host-software RAID from plain JBOD/individual-disk presentation, since these have very different failure, portability, and rebuild behavior."
  },
  {
    "title": "Build, Cooling & Serviceability",
    "description": "Weighed tool-free tray design, hot-swap support, fan noise where documented, and daisy-chain or expansion options against the product's likely desk, closet, or rack environment."
  },
  {
    "title": "Total Ownership Cost",
    "description": "Considered that most DAS enclosures ship diskless, factoring in drive cost, cables, and RAID software where relevant rather than judging price on the empty enclosure alone."
  }
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
    "subheading": "TR Series vs TL Series",
    "table": {
      "headers": [
        "Family",
        "RAID",
        "Best for"
      ],
      "rows": [
        [
          "TR-series",
          "Hardware RAID 0/1/5/JBOD",
          "Redundant backup or standalone RAID storage"
        ],
        [
          "TL-series",
          "JBOD only, software-managed via QNAP app",
          "Raw capacity expansion, drive-health monitoring"
        ]
      ]
    }
  },
  {
    "subheading": "NAS Expansion Limitation",
    "note": "QNAP is explicit that a TR-series unit's storage pool cannot be merged into a connected NAS's own storage pool, it remains a separate pool/volume. Confirm this limitation matches your workflow before buying a TR unit purely as NAS capacity expansion."
  }
];

export const buyingCriteria = [
  {
    "criterion": "DAS means direct host attachment, not RAID",
    "explanation": "USB, Thunderbolt, and enterprise SAS storage can all be DAS. The term describes how the storage connects to a host, not whether it has RAID, what drive type it uses, or how many bays it has. Check those separately."
  },
  {
    "criterion": "Bay count is not usable capacity",
    "explanation": "An 8-bay enclosure with 8x20TB drives does not give you 160TB of usable space in RAID 5 or RAID 6, parity drives eat real capacity. Calculate usable capacity under your intended RAID mode, not raw bay count times drive size."
  },
  {
    "criterion": "Hardware RAID and host software RAID are not interchangeable",
    "explanation": "Hardware/enclosure RAID keeps the array portable across hosts and survives an OS reinstall; host software RAID (or SoftRAID on Mac) ties the array to specific software but is often more flexible and doesn't depend on one controller chip surviving."
  },
  {
    "criterion": "The interface link rate is not your real transfer speed",
    "explanation": "A 10Gbps USB-C enclosure with 5 mechanical HDDs running simultaneously will bottleneck well below 10Gbps once you account for real sustained HDD throughput, typically 150-250MB/s per drive. Multi-drive aggregate speed matters more than the port's rated maximum."
  },
  {
    "criterion": "RAID is not backup",
    "explanation": "RAID 1 or RAID 5 protects against a single drive failure, not against accidental deletion, ransomware, fire, or theft. Keep a genuine separate backup copy of anything irreplaceable, regardless of how much RAID redundancy your DAS provides."
  },
  {
    "criterion": "Diskless enclosures need drives budgeted separately",
    "explanation": "Most multi-bay DAS enclosures ship completely empty. Factor in 2-8 hard drives or SSDs at your target capacity before comparing the enclosure's sticker price against a similarly-priced preconfigured external drive."
  }
];

export const faq = [
  {
    "q": "Can I move drives from a QNAP TR-004 to a different NAS model?",
    "a": "QNAP states drives can only migrate from one TR-004 to another TR-004, not to a different NAS model. Files and data on drives moved to or from a different device won't be recognized."
  },
  {
    "q": "Does RAID replace the need for a separate backup?",
    "a": "No. RAID protects against a single drive's hardware failure, but it does not protect against accidental deletion, ransomware, fire, theft, or a controller failure that affects the whole array at once. Keep a genuine separate backup copy of anything you can't afford to lose."
  },
  {
    "q": "Do DAS enclosures come with drives included?",
    "a": "Most multi-bay DAS enclosures in this category ship completely diskless, you supply your own 2.5in or 3.5in SATA HDDs/SSDs or M.2 NVMe SSDs depending on the model. Budget for drive cost separately when comparing total price against a preconfigured external drive."
  },
  {
    "q": "Will any USB-C or Thunderbolt cable give me full DAS speed?",
    "a": "No. Cable quality and rated bandwidth matter as much as the port. A basic charging-only USB-C cable can bottleneck a 10Gbps or faster enclosure well below its rated speed. Use the cable included with the enclosure, or one explicitly rated for the matching USB or Thunderbolt generation."
  },
  {
    "q": "Can I add or remove drives from a DAS enclosure without powering it down?",
    "a": "Only if the specific enclosure documents hot-swap support, which most tool-free tray designs in this category do. Always check your specific product's hot-swap capability before removing a drive live, since not every budget enclosure supports it, especially some fixed-RAID-mode units."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-raid-direct-attached-storage","title":"8 Best RAID Direct-Attached Storage"},{"href":"/guide/best-12-bay-direct-attached-storage","title":"5 Best 12-Bay Direct-Attached Storage"},{"href":"/guide/best-8-bay-das-storage","title":"6 Best 8-Bay DAS Storage Options"}];
