export const guideSlug = "best-mini-pc-rack-mounts";
export const guideTitle = "4 Best Mini PC Rack Mounts in 2026";
export const metaTitle = "Best Mini PC Rack Mounts (2026)";
export const metaDescription =
  "4 genuine 19-inch and 10-inch rack mounts for Mini PCs, honestly narrowed from a wider pool since true rack hardware is a small category.";
export const mainKeyword = "mini PC rack mounts";
export const introParagraphs = [
  "Rack mounting is a specialized use case, most common for home server setups and small IT deployments, and it is genuinely different from the under-desk and wall mounting covered in our other Mini PC mount guides. A rack mount has to fit a standard rack unit (U) height, work inside a 19-inch or 10-inch cabinet, and hold up under the kind of continuous workload and denser cabling a home server or small server closet involves.",
  "We started from a wider pool of candidate ASINs for this guide and cut it down honestly. Two products initially considered here, marketed as under-desk mounts, do not fit a 19-inch rack cabinet at all and were removed rather than stretched to fill out the list. That leaves four genuine rack-mount products, a narrower count than our other Mini PC mount guides, but every pick here is an actual rack-format product, not a relabeled desk mount.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/31PMZH3SC3L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0gyd33wj5-mprm",
    rank: 1,
    badge: "Best Overall Pick",
    name: "19in 1U Mini PC Rack Mount for 2 Units, Dell Micro Lenovo Tiny HP",
    price: "$59.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31PMZH3SC3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GYD33WJ5?tag=deskfinds0d-20",
    description:
      "This is the highest-density option here, fitting two Mini PCs side by side in a single 1U rack space, with compatibility for Dell OptiPlex Micro, Lenovo ThinkCentre, and HP Desktop Mini form factors up to 7.8 by 7.8 by 1.7 inches. A hinged design on both sides gives access to network connections, ports, and cables without removing the whole tray from the rack.\n\nThe listing states up to 75 pounds of load capacity, which comfortably covers two Mini PCs and their power supplies with real margin, and includes a depth extender adjustable from 11 to 26 inches to fit standard network cabinets. High-strength steel construction with a perforated base is meant to keep airflow moving even with two devices densely packed into one rack unit.",
    specs: ["19\" wide, 1U rack height", "Fits 2 Mini PCs simultaneously", "Compatible with Dell Micro, Lenovo Tiny, HP Mini form factors up to 7.8\"x7.8\"x1.7\"", "75 lb load capacity", "Adjustable depth extender, 11\" to 26\""],
    pros: ["Highest rack density in this guide, two units in one 1U space", "75 lb capacity is well above what two Mini PCs and power supplies need", "Hinged both sides for easy rear access", "Adjustable depth fits standard network cabinets"],
    cons: ["Highest price in this guide", "Two Mini PCs in one U means more cable density to manage carefully", "Perforated base helps airflow but a densely packed rack still needs its own overall ventilation plan"],
    bestFor: "Home server or small IT setups running two Mini PCs and wanting to conserve rack space with genuine dual-unit density.",
  },
  {
    id: "b0dlgjnqm1m-mprm",
    rank: 2,
    badge: "Best for HP Mini PC",
    name: "JINGCHENGMEI 1U Hinged Mini Rack Mount for HP Mini PC",
    price: "$42.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31hra2kFzxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DLGJNQ1M?tag=deskfinds0d-20",
    description:
      "Built specifically for HP Desktop Mini, ProDesk, and EliteDesk models, this 1U rack mount fits snugly in a standard 19-inch network cabinet or server rack at 19 by 6.53 by 1.75 inches. A hinged design on both sides allows convenient access to the ports and connections at the rear of the mounted Mini PC, useful in a rack where reaching around the back is otherwise awkward.\n\nThe ventilated housing has no top panel, promoting airflow to keep the compact system cool in a rack environment where multiple devices may be stacked nearby. Sturdy steel construction with a mounting bracket and included zip ties for the power supply round out a tray built for a single HP Mini PC done right.",
    specs: ["19\" wide x 6.53\" deep x 1.75\" high, 1U space", "Purpose-built for named HP Mini PC models", "Hinged both sides for rear access", "Ventilated, no top panel", "Includes zip ties for power supply management"],
    pros: ["Precise fit for named HP Mini PC models", "Hinged design simplifies rear cable access in a rack", "Ventilated housing supports airflow", "Includes cable management zip ties"],
    cons: ["Only fits HP Mini PC models, not other brands", "Single-unit density, less space-efficient than the 2-unit pick above", "No stated weight capacity in the listing"],
    bestFor: "HP Mini PC owners building a home server rack who want a precise single-unit tray with easy rear access.",
  },
  {
    id: "b0g4czgrt7-mprm",
    rank: 3,
    badge: "Best for Lenovo ThinkCentre",
    name: "Freejia Mini PC Rack Mount Compatible with Lenovo ThinkCentre",
    price: "$32.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yI9HWDsDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G4CZGRT7?tag=deskfinds0d-20",
    description:
      "This rack mount is precision-engineered at 1U high by 19 inches wide by 6.6 inches deep for a named list of Lenovo ThinkCentre Tiny desktop models. Dual-sided hinged access lets you flip it open for network connections, ports, and cables, simplifying maintenance in a 19-inch rack without pulling the whole tray.\n\nHigh-strength steel construction, not 3D-printed plastic as the listing is careful to note, backs the build quality claim, and a perforated base design promotes air circulation to prevent overheating. Tool-less hand-twist screws secure the ThinkCentre without needing a separate screwdriver, which is a genuinely practical touch for a rack you expect to service repeatedly.",
    specs: ["19\" wide x 6.6\" deep, 1U rack height", "Purpose-built for named Lenovo ThinkCentre Tiny models", "Dual-sided hinged access", "High-strength steel, perforated base", "Tool-less hand-twist screw locking"],
    pros: ["Precise fit for named Lenovo ThinkCentre Tiny models", "Tool-less screws simplify repeated servicing", "Steel construction, not plastic, for long-term reliability", "Perforated base supports airflow"],
    cons: ["Only fits listed Lenovo ThinkCentre models", "Single-unit density", "No stated weight capacity"],
    bestFor: "Lenovo ThinkCentre Tiny owners who want a precision single-unit rack tray with tool-less servicing.",
  },
  {
    id: "b0gz655gdq-mprm",
    rank: 4,
    badge: "Best for 10-Inch Racks with Front Cable Passthrough",
    name: "2-Pack 10inch 1U Mini PC Rack Mount Shelf with RJ45 and HDMI Port",
    price: "$39.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51qDsdbI1bL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GZ655GDQ?tag=deskfinds0d-20",
    description:
      "This is the only pick in this guide built for compact 10-inch racks rather than a full 19-inch cabinet, which matters for a smaller home lab setup that does not need full-size rack hardware. It comes as a 2-pack, fitting Dell Micro OptiPlex, Lenovo ThinkCentre, and HP Desktop Mini form factors up to 7.8 by 7.8 by 1.7 inches, with a 20 pound load capacity per shelf.\n\nA front-panel RJ45 keystone jack and HDMI receptacle relocate the Mini PC's built-in Ethernet and video ports to the front of the rack, a genuinely useful feature for dense cable management since you avoid reaching around the back for every connection. Premium cold-rolled steel with a powder-coated finish backs the build for corrosion resistance in a server closet environment.",
    specs: ["10\" wide, 1U rack height (non-19\" racks)", "2-pack, fits Dell Micro, Lenovo Tiny, HP Mini up to 7.8\"x7.8\"x1.7\"", "20 lb load capacity per shelf", "Front-panel RJ45 and HDMI passthrough", "Cold-rolled steel, powder-coated finish"],
    pros: ["Only 10-inch rack option in this guide, fits smaller home lab setups", "2-pack value for a dual-Mini-PC home server", "Front RJ45 and HDMI passthrough genuinely simplifies dense-rack cabling", "Corrosion-resistant steel construction"],
    cons: ["Does not fit a standard 19-inch rack cabinet", "20 lb capacity is lower than the 19-inch dual-unit pick in this guide", "Passthrough ports only cover Ethernet and HDMI, other cables still route normally"],
    bestFor: "Home lab builders using a compact 10-inch rack who want front-accessible Ethernet and HDMI without reaching behind the shelf.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Genuine rack-format verification", description: "We checked each candidate against actual 19-inch or 10-inch rack dimensions and rack unit (U) height, and removed two initially considered under-desk mounts that do not fit a rack cabinet at all rather than stretch the list with a mismatch." },
  { title: "Rack unit height and cabinet compatibility", description: "We compared stated U height and cabinet width against standard 19-inch and 10-inch rack specs, since a mount that does not match those dimensions simply will not install." },
  { title: "Home-server workload fit", description: "We evaluated whether each tray's ventilation and cabling design suits a continuous home-server workload with more persistent cabling than a desk PC typically carries." },
  { title: "Rack density and dense-cable management", description: "We looked at how many Mini PCs fit per rack unit and whether front-panel port passthrough or hinged rear access genuinely simplifies cabling in a densely packed rack." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Your Mini PC Brand",
    table: {
      headers: ["Your Mini PC", "Recommended pick"],
      rows: [
        ["HP Desktop Mini, ProDesk, or EliteDesk", "JINGCHENGMEI 1U Hinged Mini Rack Mount for HP Mini PC"],
        ["Lenovo ThinkCentre Tiny (named models)", "Freejia Mini PC Rack Mount for Lenovo ThinkCentre"],
        ["Running two Mini PCs, mixed brands", "19in 1U Mini PC Rack Mount for 2 Units"],
        ["Compact 10-inch home lab rack", "2-Pack 10inch 1U Mini PC Rack Mount Shelf"],
      ],
    },
  },
  {
    subheading: "Confirm Your Rack Size Before Buying",
    intro: "A 19-inch rack mount will not fit a 10-inch rack, and vice versa. This is the single most common mismatch in this category.",
    table: {
      headers: ["Your rack cabinet", "What to buy"],
      rows: [
        ["Standard 19-inch network or server rack", "Any of the three 19-inch picks in this guide"],
        ["Compact 10-inch home lab rack", "2-Pack 10inch 1U Mini PC Rack Mount Shelf"],
        ["No rack yet, just researching", "Measure your intended cabinet's rail width before ordering any of these"],
      ],
    },
  },
  {
    subheading: "Rack Density: One Unit vs Two Per U",
    cards: [
      { label: "Single Mini PC per rack unit", text: "The HP and Lenovo device-specific trays here hold one Mini PC each, with a more rigid, precise fit for that exact chassis." },
      { label: "Two Mini PCs per rack unit", text: "The 19in dual-unit mount conserves rack space when you are running more than one Mini PC, at the cost of denser cabling in that same U." },
    ],
  },
  {
    subheading: "Airflow in a Densely Packed Rack",
    table: {
      headers: ["Rack density", "What to check"],
      rows: [
        ["One Mini PC, plenty of rack space around it", "Any pick here provides adequate ventilation"],
        ["Multiple Mini PCs stacked in adjacent rack units", "Favor a perforated, open-base design and leave a gap between units where possible"],
        ["Fully populated rack, minimal empty space", "Consider active rack fan panels separately, none of these trays include their own fan"],
      ],
    },
  },
  {
    subheading: "Dense-Rack Cable Management",
    table: {
      headers: ["Cabling need", "What to look for"],
      rows: [
        ["Frequent access to Ethernet and video ports", "The 10-inch pick's front-panel RJ45 and HDMI passthrough avoids reaching behind the rack"],
        ["Standard rear cabling, infrequent access", "Hinged designs on the HP and Lenovo trays still simplify occasional rear access"],
        ["Two Mini PCs sharing one U", "Budget extra time for cable dressing since two units' cabling shares tighter space"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Genuine rack format, not a relabeled desk mount", explanation: "Confirm a listing states actual 19-inch or 10-inch rack dimensions and a rack unit (U) height, not just a generic 'mount' claim. We removed two under-desk mounts from our original candidate list for this exact reason, since they do not fit a rack cabinet at all." },
  { criterion: "Rack unit (U) height compatibility", explanation: "Every pick in this guide is 1U, the standard height for a single Mini PC tray. Confirm your rack has an available 1U slot before buying, and double-check overall cabinet depth against the product's stated depth or depth extender range." },
  { criterion: "Home-server workload context", explanation: "A rack-mounted Mini PC often runs continuously with more persistent cabling than a desk PC. Favor a tray with genuine ventilation, like a perforated or open-base design, over a fully enclosed shelf." },
  { criterion: "Rack density needs", explanation: "If you are running just one Mini PC, a device-specific single-unit tray gives the most rigid, precise fit. If you are running two or more, a dual-unit 1U mount conserves rack space, at the cost of denser cabling to manage in that same U." },
  { criterion: "Dense-rack airflow and cable management", explanation: "A rack with multiple devices stacked closely needs more attention to airflow between units than a single Mini PC in an otherwise empty rack. Front-panel port passthrough, where available, meaningfully reduces how often you need to reach behind a densely packed rack." },
];

export const faq: FaqItem[] = [
  { q: "Can I use an under-desk Mini PC mount in a 19-inch rack instead?", a: "No. Under-desk mounts do not match rack rail dimensions or rack unit (U) height, and will not install in a standard 19-inch or 10-inch rack cabinet. We removed two such products from our original candidate list for this guide for exactly that reason." },
  { q: "How many Mini PCs fit in one rack unit?", a: "Most trays in this guide hold one Mini PC per 1U slot. The 19in 1U Mini PC Rack Mount for 2 Units is the exception, fitting two Mini PCs side by side in a single rack unit." },
  { q: "Do these mounts fit any Mini PC brand?", a: "Two picks here are brand-specific, built for named HP or Lenovo ThinkCentre models. The other two support a wider named list including Dell OptiPlex Micro, Lenovo ThinkCentre, and HP Desktop Mini within a stated size range." },
  { q: "Is a 10-inch rack the same as a 19-inch rack, just smaller?", a: "No, they use different rail widths and hardware is not interchangeable between them. Confirm your cabinet's actual rail width before ordering any rack mount, including the picks in this guide." },
  { q: "Why does this guide only have 4 picks compared to your other Mini PC mount guides?", a: "Genuine rack-mount hardware for Mini PCs is a narrow, specialized category compared to under-desk or wall mounting. We would rather show four verified rack-format products than pad the list with under-desk mounts that do not actually fit a rack." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pc-mounts", title: "Best Mini PC Mounts (2026)" },
  { href: "/guide/best-mini-pc-wall-mounts", title: "Best Mini PC Wall Mounts (2026)" },
  { href: "/guide/best-mini-pc-cooling-stands", title: "Best Mini PC Cooling Stands (2026)" },
];
