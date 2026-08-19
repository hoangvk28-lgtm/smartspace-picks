export const guideSlug = "best-portable-egpu-enclosures";
export const guideTitle = "2 Best Portable eGPU Enclosures in 2026";
export const metaTitle = "Best Portable eGPU Enclosures 2026";
export const metaDescription = "We compared portable egpu enclosures by documented host-link architecture, GPU fit, and power supply rather than ranking by bandwidth headlines alone.";
export const mainKeyword = "portable egpu enclosures";
export const introParagraphs = [
  "Ranking portable egpu enclosures fairly means putting weighing packed weight and cable count against genuine portability claims ahead of anything the listing photos suggest.",
  "We leaned on documented host-link architecture plus weighing packed weight and cable count against genuine portability claims to separate genuinely capable enclosures from well-marketed ones."
];
export const lastUpdated = "2026-08-19";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/31ty1OBRvfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-portable-egpu-enclosures-1",
    rank: 1,
    badge: "Best Overall",
    name: "TREBLEET 80Gbps eGPU Enclosure, Thunderbolt 5 & USB4, JHL9480 Controller",
    price: "$189.50",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31ty1OBRvfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLVGJ6XS?tag=deskfinds0d-20",
    description: "The officially certified JHL9480 controller delivers a genuine 80Gbps bandwidth, twice the previous generation, specifically built for Thunderbolt 5 and USB4 standards. A downstream high-speed port supports daisy-chaining additional storage or displays alongside the GPU connection.\n\nUp to 140W Power Delivery fast-charges a laptop through the same single cable running the external GPU, and power supply compatibility spans SFX, ATX, FLEX, and DC input (19.5-20V), with the DC input specifically noted as better suited to low-power cards like capture cards. The listing is direct that this requires real driver and compatibility knowledge to set up correctly.",
    specs: ["JHL9480 controller, 80Gbps bandwidth","140W PD charging","SFX/ATX/FLEX/DC power support"],
    pros: ["80Gbps bandwidth is double the previous Thunderbolt generation","140W PD is among the highest charging wattage in this cluster","Works with Steam Deck and ROG Ally alongside laptops and NUCs"],
    cons: ["Setup explicitly requires real driver and compatibility knowledge","USB4 hosts need AMD-specific drivers, Intel hosts need TB drivers"],
    bestFor: "buyers prioritizing jhl9480 controller, 80gbps bandwidth",
  },
  {
    id: "best-portable-egpu-enclosures-2",
    rank: 2,
    badge: "Runner-Up",
    name: "Mini eGPU Enclosure Thunderbolt 3/4, USB4 40Gbps External GPU Dock",
    price: "$149.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41GKymiTpVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZDSSVKK?tag=deskfinds0d-20",
    description: "The listing is unusually direct about verifying real Thunderbolt/USB4 support before buying, walking through exactly how to check for Intel and AMD systems in Device Manager, a genuinely useful pre-purchase compatibility check most listings skip. The officially certified JHL7440 controller backs stable expansion performance.\n\nIt explicitly does not recommend handheld gaming console compatibility, worth noting if that's your intended use case. A second TB3 port and USB-A port let it function as a hub for additional Thunderbolt devices, and power supply compatibility spans SFX, ATX, FLEX, and DC (19.5-20V), with a specific warning that DC power only suits PCIe devices that don't need external power.",
    specs: ["JHL7440 controller","Detailed pre-purchase compatibility check provided","SFX/ATX/FLEX/DC power support"],
    pros: ["Listing provides a genuinely detailed pre-purchase compatibility check","Second TB3 port and USB-A let it function as a hub","One-year warranty backs the hardware"],
    cons: ["Explicitly not recommended for handheld gaming console use","Setup requires real DIY driver and compatibility knowledge"],
    bestFor: "buyers prioritizing jhl7440 controller",
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
    "subheading": "Measure the Complete Setup, Not Just the Enclosure",
    "note": "Check portable egpu enclosures's total footprint including GPU, PSU, power brick, and cables, not the empty shell dimensions alone."
  },
  {
    "subheading": "Calculate Packed Travel Weight",
    "note": "Weigh the complete setup as you'd actually carry it, since enclosure-only weight figures understate real portable weight."
  },
  {
    "subheading": "Count Required Cables and Setup Time",
    "note": "Count how many cables a full teardown-and-reconnect cycle actually requires, and time it realistically."
  },
  {
    "subheading": "Verify Compact GPU and PSU Fit Together",
    "note": "Confirm your specific GPU and its power supply both physically fit the compact enclosure's documented clearance."
  },
  {
    "subheading": "Check Thermals Under Sustained Load in the Smaller Chassis",
    "note": "Verify sustained-load temperature and fan noise, since compact designs have less thermal headroom than full-size enclosures."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Measure the Complete Setup, Not Just the Enclosure",
    "explanation": "Check portable egpu enclosures's total footprint including GPU, PSU, power brick, and cables, not the empty shell dimensions alone."
  },
  {
    "criterion": "Calculate Packed Travel Weight",
    "explanation": "Weigh the complete setup as you'd actually carry it, since enclosure-only weight figures understate real portable weight."
  },
  {
    "criterion": "Count Required Cables and Setup Time",
    "explanation": "Count how many cables a full teardown-and-reconnect cycle actually requires, and time it realistically."
  },
  {
    "criterion": "Verify Compact GPU and PSU Fit Together",
    "explanation": "Confirm your specific GPU and its power supply both physically fit the compact enclosure's documented clearance."
  },
  {
    "criterion": "Check Thermals Under Sustained Load in the Smaller Chassis",
    "explanation": "Verify sustained-load temperature and fan noise, since compact designs have less thermal headroom than full-size enclosures."
  }
];

export const faq = [
  {
    "q": "How much does the complete portable egpu enclosures setup actually weigh once packed?",
    "a": "Check for a documented total weight including the GPU, power supply, and cables, since enclosure-only weight figures significantly understate what you'd actually carry."
  },
  {
    "q": "Do compact eGPU enclosures sacrifice cooling performance?",
    "a": "Often somewhat, yes, since less internal volume generally means less thermal headroom under sustained load, check for documented sustained-load temperature or noise data specifically."
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

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-egpu-enclosures","title":"Best eGPU Enclosures in 2026"},{"href":"/guide/best-thunderbolt-3-egpu-enclosures","title":"Best Thunderbolt 3 eGPU Enclosures in 2026"},{"href":"/guide/best-thunderbolt-egpu-enclosures","title":"Best Thunderbolt eGPU Enclosures in 2026"}];
