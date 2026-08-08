export const guideSlug = "best-vesa-mini-pc-mounts";
export const guideTitle = "8 Best VESA Mini PC Mounts in 2026";
export const metaTitle = "Best VESA Mini PC Mounts (2026)";
export const metaDescription =
  "8 VESA Mini PC mounts we compared for 75x75 vs 100x100mm compatibility, combined load ratings, and cable access behind the monitor.";
export const mainKeyword = "VESA mini PC mounts";
export const introParagraphs = [
  "Our broader Best Mini PC Mounts guide covers behind-monitor, under-desk, and wall mounting as three separate use cases. This guide narrows to one of those three: aftermarket hardware that attaches a Mini PC specifically to a VESA mounting point, whether that is a monitor's own VESA holes or a VESA-compatible monitor arm.",
  "VESA hardware brings its own compatibility questions that a generic mount comparison glosses over. The 75x75mm and 100x100mm patterns are not interchangeable unless a bracket's holes accommodate both, and a Mini PC piggybacking on a monitor's VESA point adds its weight to whatever that monitor arm or stand is already rated to carry, not just the Mini PC's own weight in isolation.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41nWvL8pqlL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07ky3lhvg-vmpm",
    rank: 1,
    badge: "Best Overall Pick",
    name: "HumanCentric Thin Client Mount Bracket Mini PC VESA Monitor Arm",
    price: "$26.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41nWvL8pqlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KY3LHVG?tag=deskfinds0d-20",
    description:
      "This bracket supports both 75x75mm and 100x100mm VESA patterns and fits devices 0.65 to 2.55 inches deep, covering most NUC-style and Mac mini form factors. It is rated for 11 pounds of device weight alone, or 18 pounds combined if the same VESA point also carries a monitor.\n\nThat combined rating is the detail worth paying attention to, since a monitor's VESA point may already be carrying its full rated load before a Mini PC gets added on top. Silicone scratch strips and a full hardware kit are included, and the listing backs the purchase with a no-questions-asked return policy.",
    specs: ["VESA 75x75 and 100x100mm compatible", "Fits 0.65\" to 2.55\" device depth", "11 lb device rating, 18 lb combined with monitor", "Silicone scratch strips included", "Hardware for wall, under-desk, or pole mounting also included"],
    pros: ["Publishes both a device-only and a combined weight rating", "Dual VESA pattern support in one bracket", "Silicone strips protect the Mini PC's housing", "No-questions-asked return policy"],
    cons: ["Higher price than several other VESA options here", "Combined rating still needs cross-checking against your monitor arm's own limit", "Side power button requirement excludes some NUC models"],
    bestFor: "Buyers piggybacking a Mini PC on a monitor's VESA point who want a bracket that actually accounts for combined weight.",
  },
  {
    id: "b0fkwp592f-vmpm",
    rank: 2,
    badge: "Best for Dell OptiPlex Micro",
    name: "VIVO Behind Monitor Mini PC VESA Mount for Dell OptiPlex Micro",
    price: "$24.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41Eo1z7YlBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FKWP592F?tag=deskfinds0d-20",
    description:
      "Built specifically for Dell OptiPlex Micro form factor computers, this mount installs between a monitor stand's VESA plate (100x100mm) and the screen itself, or to the back of a freestanding monitor using either the 75x75 or 100x100mm pattern. Because it targets one chassis shape exactly, it holds the OptiPlex more rigidly than a generic width-adjustable bracket would.\n\nOpen mount structure is stated to increase airflow to the Mini PC and keep ports and cables reachable from underneath. Desk and wall mounting options are also included, though the VESA behind-monitor mode is the primary use case this listing is built around.",
    specs: ["Purpose-built for Dell OptiPlex Micro", "VESA 75x75 and 100x100mm", "Behind-monitor, desk, and wall mounting", "Ventilated open mount structure", "Mounting hardware for wood studs and concrete included"],
    pros: ["Precise fit for Dell OptiPlex Micro rather than a generic bracket", "Open structure keeps ports and cables accessible", "Covers behind-monitor, desk, and wall mounting", "Includes hardware for both stud and concrete walls"],
    cons: ["Only fits Dell OptiPlex Micro, not other Mini PC brands", "No stated weight capacity figure in the listing", "Behind-monitor mode uses the monitor's own VESA holes, so it competes with a monitor arm for that same point"],
    bestFor: "Dell OptiPlex Micro owners who want a VESA mount engineered specifically for their exact chassis.",
  },
  {
    id: "b07kb4ywqs-vmpm",
    rank: 3,
    badge: "Best for Intel NUC (Extension Plate)",
    name: "HumanCentric Mounting Bracket for Intel NUC Mini PC VESA Monitor Arm 75x75",
    price: "$14.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41TsuHcXczL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KB4YWQS?tag=deskfinds0d-20",
    description:
      "This is a VESA extension plate for Intel NUC, not a complete standalone mount, and the listing is explicit about that distinction. It supports 75x75mm and 100x100mm VESA patterns and lets you attach your NUC to a monitor arm or wall mount, but only once combined with the mounting bracket that already came in the box with your NUC.\n\nAt this price it is the cheapest way to add VESA compatibility to a NUC that already has its own mounting bracket, and installation takes minutes with a screwdriver. It explicitly does not fit Hades Canyon, Skull Canyon, or other non-standard NUC form factors, so confirm your NUC generation before buying.",
    specs: ["VESA extension plate only, not a full mount kit", "VESA 75x75 and 100x100mm", "Requires the NUC's original mounting bracket", "Fast screwdriver installation", "Not compatible with Hades Canyon or Skull Canyon NUCs"],
    pros: ["Lowest price in this guide", "Fast, simple installation", "Purpose-built for standard Intel NUC form factors", "Supports both common VESA patterns"],
    cons: ["Not a complete mount by itself, requires your NUC's original bracket", "Does not fit several specific NUC form factors", "No weight rating published separately from the NUC bracket it pairs with"],
    bestFor: "Intel NUC owners who already have their stock mounting bracket and just need a VESA adapter plate to go with it.",
  },
  {
    id: "b0cb2cpvrc-vmpm",
    rank: 4,
    badge: "Best for Lenovo ThinkCentre Tiny",
    name: "Mini PC Mount for Lenovo ThinkCentre Wall VESA and Under Desk Mount",
    price: "$23.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41PIBhYD0hL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CB2CPVRC?tag=deskfinds0d-20",
    description:
      "This mount is built specifically for Lenovo ThinkCentre Tiny desktops across a long list of named models, and the listing warns explicitly that unlisted models are not supported. VESA mounting uses the standard 75x75 or 100x100mm hole pattern to attach directly to the back of a monitor.\n\nAn anti-scratch rubber mat protects the ThinkCentre chassis, and Velcro straps secure the power adapter to the top of the bracket to keep cables organized. The listing also flags an important limitation: if you mount to the back of your monitor via VESA, you give up the option to also use that same VESA point for a monitor arm.",
    specs: ["Purpose-built for named Lenovo ThinkCentre Tiny models", "VESA 75x75 and 100x100mm", "Wall or under-desk mounting also supported", "Anti-scratch rubber mat", "Velcro power adapter straps"],
    pros: ["Precise fit for a specific, named list of ThinkCentre models", "Rubber mat protects the chassis from scratches", "Power adapter strap keeps cabling tidy", "Also supports wall and under-desk as alternatives to VESA"],
    cons: ["Only fits listed Lenovo ThinkCentre Tiny models", "Using the monitor's VESA point for this mount means giving up a monitor arm on that same point", "No stated weight capacity in the listing"],
    bestFor: "Lenovo ThinkCentre Tiny owners on a supported model who want a purpose-fit VESA mount rather than a universal bracket.",
  },
  {
    id: "b0c9svtqhg-vmpm",
    rank: 5,
    badge: "Best for Dell OptiPlex Micro (Under-Desk Alternative)",
    name: "Mini PC Mount for Dell Micro Mount, Wall VESA and Under Desk Mount",
    price: "$23.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41X2PrniDzL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C9SVTQHG?tag=deskfinds0d-20",
    description:
      "This mount targets a long list of named Dell OptiPlex Micro Form Factor models, explicitly excluding OptiPlex tower, small form factor, and Wyse models. It uses the standard 75x75 or 100x100mm VESA pattern to attach behind a monitor, in addition to wall and under-desk mounting options.\n\nVelcro straps secure the OptiPlex's power adapter to the bracket, and the listing carries the same important caveat as the ThinkCentre mount above: mounting to your monitor's VESA holes means you cannot simultaneously use that VESA point for a monitor arm. Confirm your exact OptiPlex model against the compatible list before ordering.",
    specs: ["Purpose-built for named Dell OptiPlex Micro models", "VESA 75x75 and 100x100mm", "Wall or under-desk mounting also supported", "Power adapter Velcro straps", "1.4\" x 7\" x 7.2\" device size fit"],
    pros: ["Precise fit for a long, named list of Dell OptiPlex Micro models", "Power adapter straps keep cabling organized", "Also usable as a wall or under-desk mount", "Clear compatibility list in the product listing"],
    cons: ["Explicitly excludes OptiPlex tower, small form factor, and Wyse models", "Using monitor VESA holes conflicts with also using a monitor arm on the same point", "No stated weight capacity"],
    bestFor: "Dell OptiPlex Micro owners on a supported model who want VESA mounting with the option to switch to wall or under-desk later.",
  },
  {
    id: "b0dxdvs61f-vmpm",
    rank: 6,
    badge: "Best Universal VESA Fit",
    name: "Adjustable Thin Client Mini PC VESA Mount to Wall, Under Desk, Monitor Arm",
    price: "$22.79",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/4122QnwgXPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DXDVS61F?tag=deskfinds0d-20",
    description:
      "This bracket adjusts to fit device widths from 0.63 to 2.8 inches and lists a wide range of compatible Mini PC brands by name, including HP, Dell, Lenovo, NUC, and several newer mini gaming PC models. It supports up to 12 pounds and can mount under the desk, behind the monitor, on a wall, or clamped to a stand pole.\n\nBuilt-in cable management and a small pen holder round out a practical, general-purpose VESA solution when your Mini PC is not one of the specific named-model mounts elsewhere in this guide. The metal open-frame construction is stated to improve airflow versus a solid plastic backing.",
    specs: ["Metal, open-frame construction", "0.63\" to 2.8\" adjustable device width", "12 lb weight capacity", "Wall, under-desk, behind-monitor, and pole mounting", "Cable management and pen holder included"],
    pros: ["Wide named-brand compatibility list beyond just Mac mini and NUC", "12 lb capacity is above average for this category", "Cable management is a genuinely useful extra", "Open-frame metal build supports airflow"],
    cons: ["Not a device-specific fit, so it holds less rigidly than a purpose-built bracket", "Pole clamp diameter range will not fit every monitor arm pole", "No published combined weight rating for VESA piggyback setups"],
    bestFor: "Buyers with a Mini PC brand not covered by a device-specific bracket who still want reliable VESA compatibility.",
  },
  {
    id: "b082fmhw2q-vmpm",
    rank: 7,
    badge: "Best Warranty",
    name: "VIVO Adjustable Thin Client Mini PC Mount Bracket, CPU VESA",
    price: "$19.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/419hWbxp-bL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B082FMHW2Q?tag=deskfinds0d-20",
    description:
      "This steel bracket adjusts from 1.8 to 7.1 centimeters of width and supports both the 75x75 and 100x100mm VESA patterns, rated for up to 5 kilograms, or about 11 pounds. A powder coated, rust-resistant finish and a 3-year manufacturer warranty back the build quality claim.\n\nBeyond VESA mounting, the same bracket clamps to a monitor arm pole or installs under the desk, giving flexibility if you later change how your setup is arranged. Rubber pads and adjustable straps keep the mounted device from sliding once installed.",
    specs: ["Solid steel, powder coated finish", "VESA 75x75 and 100x100mm", "1.8cm to 7.1cm adjustable width", "5kg (about 11 lb) weight capacity", "3-year manufacturer warranty"],
    pros: ["Longest warranty period in this guide", "Dual VESA pattern support", "Open-frame design for airflow and port access", "Rust-resistant steel build"],
    cons: ["11 lb capacity is average, not class-leading", "Pole clamp diameter range is limited", "No combined weight rating stated for monitor piggyback setups"],
    bestFor: "Buyers who want dependable VESA compatibility backed by the longest warranty in this guide.",
  },
  {
    id: "b0db5rqh7v-vmpm",
    rank: 8,
    badge: "Best for Cable Management",
    name: "Adjustable Thin Client Mini PC Mount Bracket, VESA Mount",
    price: "$18.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41d9ePK-7vL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DB5RQH7V?tag=deskfinds0d-20",
    description:
      "This bracket fits device widths from 0.63 to 2.8 inches and supports up to 12 pounds, with VESA mounting via a monitor arm alongside wall and under-desk options. A built-in cable management channel and small pen holder are aimed squarely at buyers who want the VESA mount to also tidy up the desk around it.\n\nThe listing notes the open design avoids covering the ports or vents of the mounted Mini PC even when bundled with cabling. At this price it is the most affordable option in this guide that still supports a monitor arm attachment point.",
    specs: ["Metal construction", "Fits 0.63\" to 2.8\" device width", "12 lb weight capacity", "Wall, under-desk, and monitor arm mounting", "Cable management and pen holder included"],
    pros: ["Lowest price among the monitor arm-compatible mounts here", "12 lb capacity is above average", "Cable management keeps a VESA setup tidy", "Open design avoids blocking vents or ports"],
    cons: ["Not device-specific, so fit is less rigid than a purpose-built bracket", "No stated combined weight rating for monitor piggyback use", "VESA pattern support not explicitly split out for 75x75 vs 100x100 in the listing"],
    bestFor: "Budget-conscious buyers who want VESA and monitor arm compatibility along with built-in cable management.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "VESA pattern compatibility", description: "We checked whether each bracket supports 75x75mm, 100x100mm, or both, since the two patterns are not interchangeable unless the hardware explicitly accommodates both hole spacings." },
  { title: "Combined load honesty", description: "We looked at whether a listing published a combined weight rating that accounts for a Mini PC piggybacking on a monitor's own VESA point, not just a device-only figure that ignores the monitor already using that same mount." },
  { title: "Device-specific vs universal fit", description: "We separated brackets built for one named chassis, like Dell OptiPlex Micro or Lenovo ThinkCentre Tiny, from universal adjustable brackets, since the tradeoffs between rigid fit and broad compatibility are genuinely different." },
  { title: "Cable and port access behind the monitor", description: "We evaluated whether the mounted position still leaves ports and cable routing reachable, since a VESA mount that looks clean from the front but traps cabling behind the monitor creates a real hassle later." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Your Mini PC Brand",
    table: {
      headers: ["Your Mini PC", "Recommended pick"],
      rows: [
        ["Dell OptiPlex Micro (named models)", "VIVO Behind Monitor Mini PC VESA Mount for Dell OptiPlex Micro"],
        ["Lenovo ThinkCentre Tiny (named models)", "Mini PC Mount for Lenovo ThinkCentre Wall VESA and Under Desk Mount"],
        ["Intel NUC, already has its stock bracket", "HumanCentric Mounting Bracket for Intel NUC VESA 75x75"],
        ["Any other brand or unlisted model", "Adjustable Thin Client Mini PC VESA Mount to Wall, Under Desk, Monitor Arm"],
      ],
    },
  },
  {
    subheading: "Check Your VESA Pattern",
    intro: "75x75mm and 100x100mm are the two standard patterns, and mixing them up means the holes simply will not line up.",
    table: {
      headers: ["Your monitor's VESA holes", "What to buy"],
      rows: [
        ["75x75mm only", "Any bracket in this guide, all support 75x75mm"],
        ["100x100mm only", "Any bracket in this guide, all support 100x100mm"],
        ["Not sure / no VESA holes at all", "Skip VESA hardware and use an under-desk or wall mount from our broader mounts guide instead"],
      ],
    },
  },
  {
    subheading: "Combined VESA Load, Not Just Device Weight",
    intro: "A monitor's VESA point has its own rated capacity, and a piggybacked Mini PC adds to that total rather than being weighed in isolation.",
    cards: [
      { label: "Light monitor, light Mini PC", text: "Most combinations well under 5 lbs total are safe on nearly any VESA arm rated for a standard monitor." },
      { label: "Heavier monitor near its arm's rated limit", text: "Adding even a light Mini PC and mount can push a monitor arm past its comfortable margin. Check the arm's own rating, not just the Mini PC bracket's rating, before mounting." },
    ],
    note: "The HumanCentric bracket in this guide is the only one here that explicitly publishes a combined device-plus-monitor weight figure, which makes it the safer default when you are unsure.",
  },
  {
    subheading: "The VESA Point Conflict",
    intro: "A monitor's VESA holes can typically be used for one attachment at a time, not both a monitor arm and a piggybacked Mini PC mount simultaneously.",
    table: {
      headers: ["What you want", "What to know"],
      rows: [
        ["Monitor arm AND a mounted Mini PC", "Usually not possible on the same VESA point without a VESA extension or dual-mount adapter not covered in this guide"],
        ["Mounted Mini PC, monitor stays on its stock stand", "Works fine, this is the standard use case for every mount here"],
        ["Monitor arm only, Mini PC mounted elsewhere", "Use an under-desk or wall mount from our broader mounts guide instead"],
      ],
    },
  },
  {
    subheading: "Cable Routing Behind the Monitor",
    table: {
      headers: ["Setup complexity", "What to check"],
      rows: [
        ["Just power and one video cable", "Any bracket here handles this fine"],
        ["Multiple peripherals routed through the Mini PC", "Favor a mount with built-in cable management, like the Adjustable Thin Client bracket"],
        ["Frequent cable swaps", "Favor an open-frame bracket over a device-specific enclosed one for easier access"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "75x75mm vs 100x100mm VESA compatibility", explanation: "These two hole patterns are not interchangeable unless the bracket explicitly supports both. Measure your monitor's actual VESA hole spacing before ordering rather than assuming any 'VESA compatible' listing will fit." },
  { criterion: "Combined VESA load, not device weight alone", explanation: "A monitor's VESA point has its own rated weight capacity, and a piggybacked Mini PC and its mount add to that total. Look for a listing that states a combined weight figure rather than only a device-only rating." },
  { criterion: "Device-specific brackets fit more rigidly", explanation: "A bracket built for a named model, like the Dell OptiPlex Micro or Lenovo ThinkCentre Tiny mounts in this guide, holds the chassis more securely than a generic adjustable bracket, but only if your exact model is on the compatibility list." },
  { criterion: "Cable routing access behind the monitor", explanation: "A VESA mount that looks clean from the front can still trap cabling in an awkward spot behind the screen. Check for built-in cable management if your setup routes more than power and one video cable through the Mini PC." },
  { criterion: "The VESA point conflict", explanation: "Most monitors offer one VESA attachment point, so a piggybacked Mini PC mount usually competes with a monitor arm for that same spot. Decide upfront whether you need the monitor arm or the Mini PC mount more, since combining both on one point is not standard with the hardware in this guide." },
];

export const faq: FaqItem[] = [
  { q: "How is this different from the broader Best Mini PC Mounts guide?", a: "Our broader mounts guide compares behind-monitor, under-desk, and wall mounting as three different methods. This guide narrows specifically to VESA-attached hardware, the subset of mounts that use the 75x75 or 100x100mm hole pattern." },
  { q: "Can I use a VESA Mini PC mount and a monitor arm on the same monitor?", a: "Usually not on the same VESA point at the same time, since most monitors have one set of VESA holes. If you need both, plan for the Mini PC to mount elsewhere, like under the desk, using our broader mounts guide." },
  { q: "Does a higher weight rating on the Mini PC bracket cover my whole VESA setup?", a: "Not by itself. Check your monitor arm or stand's own rated capacity too, since the Mini PC and its mount add weight to whatever the arm already carries." },
  { q: "Is a device-specific VESA mount worth it over a universal one?", a: "If your exact model is on the compatibility list, yes, it typically holds more rigidly. If your model is not listed, a universal adjustable bracket is the safer, still solid choice." },
  { q: "What if my monitor doesn't have VESA holes at all?", a: "VESA hardware will not work without them. In that case an under-desk or wall mount from our broader Best Mini PC Mounts guide is the better route." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pc-mounts", title: "Best Mini PC Mounts (2026)" },
  { href: "/guide/best-mini-pc-monitor-mounts", title: "Best Mini PC Monitor Mounts (2026)" },
  { href: "/guide/best-universal-mini-pc-mounts", title: "Best Universal Mini PC Mounts (2026)" },
];
