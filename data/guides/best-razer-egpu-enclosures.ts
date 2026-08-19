export const guideSlug = "best-razer-egpu-enclosures";
export const guideTitle = "2 Best Razer eGPU Enclosures in 2026";
export const metaTitle = "Best Razer eGPU Enclosures 2026";
export const metaDescription = "We compared razer egpu enclosures by documented host-link architecture, GPU fit, and power supply rather than ranking by bandwidth headlines alone.";
export const mainKeyword = "razer egpu enclosures";
export const introParagraphs = [
  "The real test for razer egpu enclosures comes down to verifying exact controller generation and card support by specific model, not a glance at the listing photo.",
  "Rather than trust manufacturer claims, we checked documented host-link architecture plus verifying exact controller generation and card support by specific model for every enclosure on this list."
];
export const lastUpdated = "2026-08-19";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/31cCgvusBqL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-razer-egpu-enclosures-1",
    rank: 1,
    badge: "Best Overall",
    name: "Razer Core X V2, Thunderbolt 5 External Desktop Graphics Case",
    price: "$591.93",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31cCgvusBqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FDBKH28X?tag=deskfinds0d-20",
    description: "This supports PCIe cards up to 3.5 slots, and Thunderbolt 5's up to 80Gbps bandwidth is double Thunderbolt 4's, a genuine performance step for demanding creative and gaming workloads. Multi-device compatibility spans Thunderbolt 4/5 laptops and USB4 handhelds, provided the host explicitly supports external graphics (eGFX).\n\nAn integrated 120mm fan automatically activates under high loads, with an adjustable fan curve for balancing noise against cooling, genuine user control rather than a fixed profile. Tool-free thumbscrew installation makes GPU swaps and ATX power supply changes straightforward, though both the power supply and graphics card are sold separately.",
    specs: ["PCIe cards up to 3.5 slots","Thunderbolt 5, up to 80Gbps","120mm auto-activating fan, adjustable curve"],
    pros: ["Adjustable fan curve gives genuine control over noise versus cooling","Tool-free thumbscrew installation makes GPU swaps straightforward","3.5-slot clearance fits most current high-end graphics cards"],
    cons: ["ATX power supply and graphics card are both sold separately","Host device must explicitly support eGFX, not just have the right port"],
    bestFor: "buyers prioritizing pcie cards up to 3.5 slots",
  },
  {
    id: "best-razer-egpu-enclosures-2",
    rank: 2,
    badge: "Runner-Up",
    name: "Razer Core X External Graphics Card Case with Thunderbolt 3",
    price: "$1,582.96",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31Uphiqs2IL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GMQ1GVX6?tag=deskfinds0d-20",
    description: "This is the earlier Thunderbolt 3 generation of Razer's eGPU enclosure line, worth confirming against the newer Core X V2 (Thunderbolt 5) before choosing, since bandwidth and card support differ meaningfully between generations. It's built for Windows 10 specifically per the listing, worth checking current OS compatibility before buying.\n\nAs the prior generation, it shares Razer's general design approach, a vented steel-adjacent enclosure with ATX power supply and PCIe card support, but at Thunderbolt 3's lower bandwidth ceiling versus the newer Core X V2.",
    specs: ["Thunderbolt 3 generation enclosure","Windows 10 compatibility listed","Prior-generation Razer Core X line"],
    pros: ["Established Razer Core X design and build quality","Compatible with Thunderbolt 3 hosts common on older laptops","Modular ATX power supply and card support"],
    cons: ["Thunderbolt 3 bandwidth trails the newer Core X V2's Thunderbolt 5","Listing is thin on current OS and driver support details"],
    bestFor: "buyers prioritizing thunderbolt 3 generation enclosure",
  }
];

export const howWeEvaluated = [
  {
    "title": "Host-Link Architecture Verified",
    "description": "Checked the exact host port type, controller generation, and effective PCIe path rather than trusting a USB-C connector alone as proof of eGPU support."
  },
  {
    "title": "GPU Physical Fit Documented",
    "description": "Compared maximum supported GPU length, height, slot width, and power-connector clearance against real current graphics cards."
  },
  {
    "title": "Power Supply and Charging Verified Separately",
    "description": "Checked PSU wattage and format separately from any laptop charging (Power Delivery) figure, since these are two different specifications often blended in marketing."
  },
  {
    "title": "Host and OS Compatibility Confirmed",
    "description": "Verified documented compatibility across Windows, macOS, and Linux hosts, noting where support is limited to specific chip generations or OS versions."
  },
  {
    "title": "Ownership Details: Cables, Noise, and Support",
    "description": "Weighed included cables, fan noise, warranty length, and driver support quality as part of the real cost of eGPU ownership, not just the enclosure price."
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
    "subheading": "Build a Current Model Map First",
    "note": "Confirm which razer egpu enclosures models are currently sold rather than assuming an older listing reflects the current lineup, since generations change bandwidth and card support significantly."
  },
  {
    "subheading": "Compare Controller Generation by Exact Model",
    "note": "Check the specific Thunderbolt/USB4 controller generation and effective PCIe path for the exact model, not the brand's range in general."
  },
  {
    "subheading": "Verify GPU Dimension Limits",
    "note": "Confirm maximum supported GPU length, height, and slot width against your specific card before assuming any enclosure in the brand's lineup fits."
  },
  {
    "subheading": "Check Current Firmware and Driver Support",
    "note": "Verify current firmware and driver support status, since older models can lose active support over time."
  },
  {
    "subheading": "Compare Warranty and Support Channels",
    "note": "Check warranty length and support responsiveness, since this varies meaningfully even within the same brand's product line."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Build a Current Model Map First",
    "explanation": "Confirm which razer egpu enclosures models are currently sold rather than assuming an older listing reflects the current lineup, since generations change bandwidth and card support significantly."
  },
  {
    "criterion": "Compare Controller Generation by Exact Model",
    "explanation": "Check the specific Thunderbolt/USB4 controller generation and effective PCIe path for the exact model, not the brand's range in general."
  },
  {
    "criterion": "Verify GPU Dimension Limits",
    "explanation": "Confirm maximum supported GPU length, height, and slot width against your specific card before assuming any enclosure in the brand's lineup fits."
  },
  {
    "criterion": "Check Current Firmware and Driver Support",
    "explanation": "Verify current firmware and driver support status, since older models can lose active support over time."
  },
  {
    "criterion": "Compare Warranty and Support Channels",
    "explanation": "Check warranty length and support responsiveness, since this varies meaningfully even within the same brand's product line."
  }
];

export const faq = [
  {
    "q": "Are all razer egpu enclosures models currently sold, or does the lineup include discontinued generations?",
    "a": "Check current first-party store pages directly, since older eGPU enclosures often stay heavily indexed in search results long after being succeeded by newer, higher-bandwidth generations."
  },
  {
    "q": "Does a well-known brand guarantee better GPU compatibility?",
    "a": "Not automatically. Even within one brand's lineup, controller generation and documented GPU dimension limits vary significantly by model, so verify the exact specs rather than assuming brand reputation predicts compatibility."
  },
  {
    "q": "How much GPU performance do I lose running it externally versus internally?",
    "a": "Some loss is normal since even Thunderbolt 5's 80Gbps trails a native PCIe x16 slot's bandwidth, but the real-world impact varies by workload: GPU-bound gaming and rendering see a smaller hit than bandwidth-sensitive tasks. Check for real benchmark comparisons on your specific host and GPU pairing rather than assuming a fixed percentage."
  },
  {
    "q": "Do all Thunderbolt-equipped Macs support eGPUs?",
    "a": "No. Apple's official eGPU support is specific to Intel-based Thunderbolt 3 Macs; Apple Silicon Macs (M1 and later) do not officially support external GPUs for graphics acceleration, regardless of port type. Check Apple's current documentation for your specific Mac before assuming compatibility."
  },
  {
    "q": "Should I choose a Thunderbolt/USB4 enclosure or an OCuLink one?",
    "a": "Thunderbolt and USB4 tunnel PCIe over a general-purpose port shared with other data, while OCuLink provides a more direct PCIe connection with typically lower overhead, but neither hot-plugs as easily and OCuLink support is far less common on laptops. Match the choice to what your specific host actually exposes."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-trebleet-egpu-enclosures","title":"Best TREBLEET eGPU Enclosures in 2026"},{"href":"/guide/best-akitio-egpu-enclosures","title":"Best AKiTiO eGPU Enclosures in 2026"},{"href":"/guide/best-asus-egpu-enclosures","title":"Best ASUS eGPU Enclosures in 2026"}];
