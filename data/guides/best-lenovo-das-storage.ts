export const guideSlug = "best-lenovo-das-storage";
export const guideTitle = "Best Lenovo DAS Storage in 2026";
export const metaTitle = "Best Lenovo DAS Storage in 2026";
export const metaDescription = "Lenovo's ThinkSystem D4390 is current enterprise DAS. We covered current-vs-legacy status alongside desktop DAS alternatives.";
export const mainKeyword = "lenovo das storage";
export const introParagraphs = [
  "Lenovo's current ThinkSystem D4390 direct-attached storage enclosure uses newer 24Gb SAS connectivity, while older D1212/D1224 configurations are flagged by Lenovo as withdrawn from marketing in some regions, a real current-vs-legacy distinction worth checking before buying.",
  "Since Lenovo's DAS lineup targets enterprise server environments with specific SAS HBA/controller requirements, we're covering desktop DAS alternatives for buyers who don't already run compatible Lenovo server infrastructure."
];
export const lastUpdated = "2026-08-14";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41rmuqxnscL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-lenovo-das-storage-1",
    rank: 1,
    badge: "Best Desktop Alternative",
    name: "Sabrent 4-Bay USB-C 10Gbps Hard Drive Enclosure (DS-SC4B)",
    price: "$229.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41rmuqxnscL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Y3WDHLD?tag=deskfinds0d-20",
    description: "Sabrent's 4-bay dock gives every drive its own dedicated ASMedia ASM1351 controller rather than sharing one bridge chip, so each of the four 3.5-inch SATA bays gets a stable, independent connection up to 80TB total (4x20TB) over a single 10Gbps USB-C port.\n\nDrives ship empty and mount individually, JBOD-style, not hardware RAID. Tool-free trays, a locking key, a Kensington slot, and a 92mm active-cooling fan round out a build meant for 24/7 desk use, backed by a 1-year warranty extendable to 2 years.",
    specs: ["4x 3.5in bays, 10Gbps USB-C","Dedicated ASM1351 controller per bay","JBOD only, no RAID"],
    pros: ["Independent controller per bay avoids one bad drive taking down the bus","Tool-free trayless hot-swap with lockable bays","92mm active cooling for sustained 24/7 use"],
    cons: ["No RAID, individual disks only","Drives not included"],
    bestFor: "buyers prioritizing 4x 3.5in bays, 10gbps usb-c",
  },
  {
    id: "best-lenovo-das-storage-2",
    rank: 2,
    badge: "Best Value Desktop Alternative",
    name: "TerraMaster D4-320 4-Bay USB DAS Enclosure (Diskless)",
    price: "$151.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21z94zz6wGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CTTL9R7Z?tag=deskfinds0d-20",
    description: "The D4-320 hits up to 1,016MB/s combined read/write with four 8TB SATA HDDs installed, or 510MB/s with a single SATA SSD, over USB 3.2 Gen 2's 10Gbps link, and supports drives up to 30TB each for 120TB total.\n\nIt's explicitly 4 individual disks with no RAID function, using TerraMaster's tool-free Push-Lock tray design and hot-swap support. An intelligent temperature-controlled fan plus sound-absorbing panels cut noise up to 50% versus the prior generation, dropping under 21dB(A) in standby.",
    specs: ["4-bay, up to 1,016MB/s combined","USB 3.2 Gen 2, 30TB/drive max","No RAID, individual disks only"],
    pros: ["Documented real-world throughput, not just link-rate marketing","Under 21dB(A) standby noise is genuinely quiet","Push-Lock tray design prevents accidental drive ejection"],
    cons: ["No RAID function despite 4 bays","Diskless, drives sold separately"],
    bestFor: "buyers prioritizing 4-bay, up to 1,016mb/s combined",
  },
  {
    id: "best-lenovo-das-storage-3",
    rank: 3,
    badge: "Best RAID Desktop Alternative",
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
    id: "best-lenovo-das-storage-4",
    rank: 4,
    badge: "Budget Desktop Alternative",
    name: "CENMATE Aluminum 4-Bay Hard Drive Enclosure (5Gbps)",
    price: "$119.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41VaMoSo3VL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DD3GSSCX?tag=deskfinds0d-20",
    description: "CENMATE's 4-bay aluminum enclosure supports 2.5/3.5-inch HDD/SSD up to 80TB total (20TB per drive), using a JMS-class chip over USB A/C 3.0 at up to 5Gbps under UASP, with hot-swap and tool-free tray installation.\n\nThe company is upfront that its 2-inch cooling fan runs around 40-50 decibels, a real noise consideration for a desk setup, and this is explicitly a DAS unit with no RAID or NAS function, drives mount individually with a stable DC 12V power adapter.",
    specs: ["4-bay, 2.5/3.5in, up to 80TB total","USB A/C 3.0, 5Gbps under UASP","No RAID/NAS, individual disks"],
    pros: ["Hot-swap and tool-free tray design","Stable dedicated DC power adapter for multi-drive reliability","Honest fan noise disclosure (40-50dB) upfront"],
    cons: ["Fan noise may bother sound-sensitive desk setups","No RAID despite 4 bays"],
    bestFor: "buyers prioritizing 4-bay, 2.5/3.5in, up to 80tb total",
  },
  {
    id: "best-lenovo-das-storage-5",
    rank: 5,
    badge: "Best RAID + eSATA Alternative",
    name: "CENMATE Aluminum 4-Bay Hardware RAID Enclosure (eSATA+USB)",
    price: "$129.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41kWVoXPWgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CXPD9J6X?tag=deskfinds0d-20",
    description: "Unlike CENMATE's non-RAID 4-bay model, this version adds a genuine hardware RAID controller (JMS567+JMB393 chip) supporting 8 modes: RAID 0/1/3/5/10, CLONE, LARGE, and NORMAL, switched via a physical toggle and reset-button sequence rather than software.\n\nIt supports up to 80TB total (20TB per drive) over USB A/C 3.0 plus an eSATA output for an alternate connection path, at up to 5Gbps. CENMATE notes macOS has no RAID software support for this unit and warns that switching RAID modes can cause data loss, back up first.",
    specs: ["4-bay hardware RAID, 8 modes, up to 80TB","USB 3.0 + eSATA, 5Gbps","Physical DIP-switch RAID mode selection"],
    pros: ["Genuine hardware RAID controller with 8 selectable modes","Dual USB/eSATA connectivity options","150W-class stable power design for multi-drive RAID"],
    cons: ["No macOS RAID software support","RAID mode switching risks data loss if not backed up first"],
    bestFor: "buyers prioritizing 4-bay hardware raid, 8 modes, up to 80tb",
  },
  {
    id: "best-lenovo-das-storage-6",
    rank: 6,
    badge: "Best High-Capacity Alternative",
    name: "TerraMaster D6-320 6-Bay USB DAS Enclosure (Diskless)",
    price: "$239.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31ONkXRfq7L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BZHSK29B?tag=deskfinds0d-20",
    description: "The D6-320 scales TerraMaster's DAS line to 6 bays with up to 132TB total capacity (22TB per drive), hitting 1,030MB/s combined read/write with six 8TB HDDs installed, or 510MB/s with a single SATA SSD, over a 10Gbps USB 3.2 Gen 2 connection.\n\nTerraMaster explicitly notes the D6-320 does not support RAID arrays, working only with individual disks. It carries the same hot-swap, tool-free tray, and intelligent temperature-controlled cooling as the rest of the D-series, with USB Type-C compatible with USB 3.0/3.1/3.2, Thunderbolt 3, and Thunderbolt 4 hosts.",
    specs: ["6-bay, up to 132TB total","1,030MB/s combined (6x HDD)","No RAID, individual disks only"],
    pros: ["Broad host compatibility across USB and Thunderbolt generations","Documented sustained throughput with all 6 bays populated","Hot-swap without powering down the enclosure"],
    cons: ["No RAID function despite 6 bays","Diskless, drives sold separately"],
    bestFor: "buyers prioritizing 6-bay, up to 132tb total",
  },
  {
    id: "best-lenovo-das-storage-7",
    rank: 7,
    badge: "Best Compact RAID Alternative",
    name: "TerraMaster D2-320 2-Bay USB RAID Enclosure (Diskless)",
    price: "$103.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21z8JFkg6dL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C8GCZP5K?tag=deskfinds0d-20",
    description: "The D2-320 is a genuine hardware RAID enclosure supporting RAID 0, RAID 1, JBOD, and Single mode across 2 bays, hitting up to 521MB/s in RAID 0 with two 8TB HDDs, or 1,075MB/s with two SATA SSDs in RAID 0, over a 10Gbps USB 3.2 Gen 2 link.\n\nIn RAID 1, a damaged drive can be replaced directly and data rebuilds automatically, a real mirrored-backup workflow rather than just individual disk exposure. The tool-free Push-Lock tray and intelligent temperature-controlled fan carry over from TerraMaster's larger D-series enclosures.",
    specs: ["2-bay, hardware RAID 0/1/JBOD/Single","Up to 1,075MB/s (SSD RAID 0)","10Gbps USB 3.2 Gen 2"],
    pros: ["Genuine hardware RAID 1 with automatic rebuild on drive replacement","Documented real throughput figures for both HDD and SSD RAID 0","Compact 2-bay footprint for a mirrored backup setup"],
    cons: ["Max 44TB total (22TB x 2) capacity ceiling","Diskless, drives sold separately"],
    bestFor: "buyers prioritizing 2-bay, hardware raid 0/1/jbod/single",
  },
  {
    id: "best-lenovo-das-storage-8",
    rank: 8,
    badge: "Budget RAID Alternative",
    name: "ORICO 4-Bay RAID Hard Drive Enclosure (88TB, Aluminum)",
    price: "$179.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51wHCBQoDhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4QJZL6X?tag=deskfinds0d-20",
    description: "ORICO's 4-bay RAID enclosure supports the same 8 RAID modes as its 5-bay sibling (0/1/3/5/10/JBOD/CLONE/CLEAR) for up to 88TB total (22TB per drive), reaching 235MB/s over a USB 3.0 interface matched to SATA 6Gbps drives.\n\nA built-in 150W power supply avoids a bulky external adapter even with 4 high-consumption mechanical drives running simultaneously, and an 80mm silent cooling fan with front/rear vents handles sustained heat load. A tray-less design with an independent safety lock secures drives against accidental ejection.",
    specs: ["4-bay RAID, 8 modes, up to 88TB","235MB/s, built-in 150W power supply","80mm cooling fan, tray-less lock design"],
    pros: ["Built-in 150W power supply eliminates a bulky external brick","8 RAID modes cover backup, capacity, and redundancy use cases","Independent safety lock prevents accidental drive ejection"],
    cons: ["235MB/s ceiling is modest for a RAID-capable 4-bay unit","22TB per-drive limit caps total capacity below newer competitors"],
    bestFor: "buyers prioritizing 4-bay raid, 8 modes, up to 88tb",
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
    "subheading": "Current vs Legacy Lenovo DAS",
    "note": "Verify whether a specific Lenovo D-series configuration is current-orderable or withdrawn from marketing before planning a deployment around it, and confirm exact SAS generation and supported HBA/controller by model rather than assuming brand-wide compatibility."
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
    "q": "Can I mix Lenovo D4390 and older D1212/D1224 enclosures in one chain?",
    "a": "Not necessarily. Different Lenovo D-series enclosure families can have incompatible daisy-chain interoperability. Check Lenovo's current storage interoperability documentation before mixing enclosure generations in one deployment."
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

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-hpe-das-storage","title":"Best HPE DAS Storage in 2026"},{"href":"/guide/best-dell-das-storage","title":"Best Dell DAS Storage in 2026"},{"href":"/guide/best-sas-das-storage","title":"6 Best SAS DAS Storage Solutions"}];
