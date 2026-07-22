export const guideSlug = "best-docking-stations-for-4k-120hz-monitors";
export const guideTitle = "8 Best Docking Stations for 4K 120Hz Monitors in 2026";
export const metaTitle = "Best Docking Stations for 4K 120Hz Monitors in 2026";
export const metaDescription =
  "8 best docking stations for 4K 120Hz monitors in 2026, covering Thunderbolt 4 with DSC, DisplayLink multi-monitor docks, and KVM switch docks. Compare bandwidth and cable needs.";
export const mainKeyword = "docking station 4k 120hz";
export const introParagraphs = [
  "Getting a genuine 4K@120Hz signal out of a docking station depends on more than the dock's marketing spec sheet. Thunderbolt 4's 40Gbps bandwidth cannot carry uncompressed 4K@120Hz on its own, docks that hit that refresh rate rely on Display Stream Compression (DSC), which needs support on both the dock and the monitor to actually work, while DisplayLink docks take a different compression path that has its own platform limits.",
  "Below are 8 docking stations we evaluated for their ability to actually drive 4K at high refresh rates, from Thunderbolt docks built for MacBook and Windows laptops to DisplayLink hubs and KVM switch docks for multi-computer desks. Each entry notes exactly what refresh rate and compression path it uses, since a dock rated for 4K@120Hz on one connection type often can't reach that same number on another.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41gtl-pSU5L._SL500_.jpg";

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
    id: "tobenone-dl7400-5-monitor-dock",
    rank: 1,
    badge: "Best for 5-Monitor 4K@120Hz Setups",
    name: "TobenONE 18-in-1 DisplayLink Docking Station (DL7400)",
    price: "$329.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41gtl-pSU5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GXVK3G7S?tag=deskfinds0d-20",
    description:
      "The TobenONE DL7400 drives up to 5 monitors including a quad 4K@120Hz configuration through DisplayLink rather than native Thunderbolt video, using 5 HDMI outputs plus a built-in cooling fan to manage the heat that much video processing generates. A 2.5GbE port and 45W of charging round out an 18-in-1 port count aimed at Thunderbolt-equipped MacBooks and Windows laptops.\n\nBecause it uses DisplayLink compression, Mac users should note that DisplayLink output tops out at 4K@60Hz on macOS regardless of dock capability, so the 4K@120Hz claim applies specifically to supported Windows configurations. A high-bandwidth HDMI 2.1 cable is required to actually reach 120Hz on any connected display.",
    specs: [
      "18-in-1 DisplayLink dock, up to 5 monitors",
      "Quad 4K@120Hz support (Windows, driver required)",
      "5x HDMI outputs with cooling fan",
      "45W fast charging, 2.5GbE Ethernet",
      "Driver installation required",
    ],
    pros: [
      "Highest monitor count in this list at up to 5 displays",
      "Cooling fan helps sustain performance under heavy multi-display load",
      "2.5GbE Ethernet outpaces standard Gigabit ports",
      "45W charging keeps the laptop topped up while docked",
    ],
    cons: [
      "4K@120Hz via DisplayLink is a Windows-only ceiling, Mac tops out at 4K@60Hz",
      "Requires driver installation, not plug-and-play",
      "Needs certified HDMI 2.1 cables to actually reach 120Hz",
    ],
    bestFor: "Windows users running 5 monitors who need the highest display count at 4K@120Hz",
  },
  {
    id: "tobenone-quad-4k60-20-in-1",
    rank: 2,
    badge: "Best for Quad 4-Monitor Setups",
    name: "TobenONE 20-in-1 DisplayLink Docking Station, Quad 4K@60Hz",
    price: "$260.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41OTlEa81fL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FD38VQMJ?tag=deskfinds0d-20",
    description:
      "This TobenONE dock supports quad 4K displays at 60Hz through a 150W power supply built for Thunderbolt 5, 4, and 3 laptops as well as USB-C Windows, Chrome OS, and MacBook systems. It's positioned for buyers who value 4 simultaneous 4K displays over chasing 120Hz on fewer screens, a real productivity vs. performance trade-off worth weighing before buying.\n\nFor home office work that's mostly static content, 4K@60Hz across 4 screens is often visually superior in practice to fewer screens running higher refresh rates, since desktop productivity rarely benefits from 120Hz the way gaming does.",
    specs: [
      "20-in-1 dock, quad 4K@60Hz displays",
      "150W power supply",
      "Compatible with Thunderbolt 5/4/3 and USB-C",
      "6 USB ports, Ethernet, SD/Micro SD",
      "Works with Windows, Chrome OS, and MacBook",
    ],
    pros: [
      "Quad 4K@60Hz across 4 simultaneous displays",
      "150W power supply supports demanding laptop charging",
      "Broad OS compatibility including Chrome OS",
      "Strong port count for a single dock",
    ],
    cons: [
      "Capped at 60Hz, not a 120Hz solution",
      "Bulkier footprint given the 150W power brick",
      "DisplayLink driver required on most systems",
    ],
    bestFor: "Buyers who want 4 simultaneous 4K displays for productivity rather than chasing 120Hz",
  },
  {
    id: "usb-c-dock-144hz-dual-monitor",
    rank: 3,
    badge: "Best Budget 144Hz Dual Monitor Dock",
    name: "USB C Docking Station, Dual Monitor 4K@144Hz",
    price: "$98.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41kwTA+BkXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HLZ4X8Q?tag=deskfinds0d-20",
    description:
      "This budget dock supports dual monitors at up to 4K@144Hz through 2 HDMI and DisplayPort outputs, making it a lower-cost path to high refresh rate output for buyers running 2 screens rather than 3 or more. A 150W DC power input, Ethernet, and card readers round out the port list for a compact price point.\n\nHitting 144Hz in practice still depends on the display cable used, an older HDMI cable will cap the connection well below 144Hz even if both the dock and monitor support it, so budget for a certified high-bandwidth cable alongside this dock.",
    specs: [
      "Dual monitor support, up to 4K@144Hz",
      "2x HDMI, 2x DisplayPort outputs",
      "USB-A 2.0/3.0, USB-C 3.1 10Gbps",
      "150W DC power input",
      "Ethernet, microSD/SD card readers",
    ],
    pros: [
      "Lowest price in this list for genuine high-refresh dual-monitor output",
      "144Hz ceiling suits both productivity and light gaming use",
      "Broad Dell/Lenovo/HP compatibility",
      "Solid port selection for the price",
    ],
    cons: [
      "Only 2 monitor outputs, not suited to 3+ screen setups",
      "Reaching 144Hz requires a certified high-bandwidth cable, not included",
      "Fewer USB-C ports than higher-priced docks in this list",
    ],
    bestFor: "Buyers on a budget who need 2 monitors at high refresh rate rather than 4-5 displays",
  },
  {
    id: "av-access-8k-kvm-switch-dock",
    rank: 4,
    badge: "Best KVM Switch Dock",
    name: "AV Access 8K KVM Switch Dock, 2 Monitors 2 Computers",
    price: "$212.78",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41yf74dFdZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F6MTC9LR?tag=deskfinds0d-20",
    description:
      "The AV Access dock is built specifically for buyers running 2 computers into the same dual-monitor setup, with 8K output ceiling and Gigabit Ethernet, switching displays and peripherals between a laptop and desktop without unplugging cables. This solves a different problem than a pure single-laptop docking station, sharing 2 monitors across 2 machines cleanly.\n\nIf your workflow involves a work laptop and a personal desktop sharing the same monitors, this KVM switch approach is worth considering over a standard dock, though it comes with its own EDID emulation quirks worth testing with your specific displays.",
    specs: [
      "KVM switch dock, 2 monitors, 2 computers",
      "8K resolution ceiling",
      "Gigabit Ethernet",
      "EDID emulation for consistent display detection",
      "Switches both displays and peripherals together",
    ],
    pros: [
      "Purpose-built for sharing 2 monitors across 2 computers",
      "8K ceiling gives headroom well above 4K@120Hz needs",
      "Gigabit Ethernet included",
      "Avoids constantly re-plugging cables between machines",
    ],
    cons: [
      "Solves a KVM-specific problem, overkill if you only use 1 computer",
      "EDID emulation behavior varies by monitor model",
      "Different use case than a standard single-laptop dock",
    ],
    bestFor: "Buyers who switch the same 2 monitors between a laptop and a separate desktop computer",
  },
  {
    id: "plugable-thunderbolt-4-dock-tbt-udm",
    rank: 5,
    badge: "Best Thunderbolt 4 Dock for MacBook",
    name: "Plugable Thunderbolt 4 Dock for M4/M5 MacBook (TBT-UDM)",
    price: "$199.95",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31mqa4FsYcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FGFW5FVD?tag=deskfinds0d-20",
    description:
      "Plugable's Thunderbolt 4 dock is Thunderbolt Certified and driverless, using native Thunderbolt video output rather than DisplayLink compression, which matters for Mac users since DisplayLink docks are capped at 4K@60Hz on macOS regardless of dock spec. Reaching 4K@120Hz on a MacBook requires this kind of native Thunderbolt output on a higher-tier Pro or Max chip, not a DisplayLink adapter.\n\nIt supports 4K dual monitor output or a single 6K display, and its 100W charging keeps even power-hungry MacBook Pro models fed while docked, with 6 USB ports, SD, and Ethernet rounding out the connectivity.",
    specs: [
      "Thunderbolt 4 Certified, driverless",
      "4K dual monitor or single 6K display",
      "100W charging for M4/M5 MacBook Air & Pro",
      "6x USB, SD card reader, Ethernet",
      "Native Thunderbolt video, not DisplayLink",
    ],
    pros: [
      "Native Thunderbolt output avoids the DisplayLink 4K@60Hz Mac ceiling",
      "Driverless, true plug-and-play on Mac",
      "100W charging suits power-hungry MacBook Pro chips",
      "Thunderbolt Certified for verified compatibility",
    ],
    cons: [
      "4K@120Hz still requires a higher-tier Pro/Max chip for native output",
      "Dual 4K rather than a true quad-monitor configuration",
      "Mac-focused positioning, less relevant for Windows-only buyers",
    ],
    bestFor: "MacBook Pro/Air M4/M5 users who want native Thunderbolt video instead of a DisplayLink adapter",
  },
  {
    id: "wavlink-13-in-1-displaylink-dock",
    rank: 6,
    badge: "Best Dual 4K Budget DisplayLink Dock",
    name: "WAVLINK USB C Docking Station, Dual 5K/4K@60Hz DisplayLink",
    price: "$165.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Gpx+DZnSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FFS34WRY?tag=deskfinds0d-20",
    description:
      "The WAVLINK 13-in-1 supports dual 5K or 4K@60Hz displays across M1 through M4 Mac and Windows systems, positioned as a mid-price DisplayLink option for buyers who need dual high-resolution output without chasing 120Hz. Its 2x HDMI and 2x DisplayPort outputs give flexibility in how the 2 displays connect.\n\n130W power delivery, Gigabit Ethernet, and 5 USB ports round out the connectivity, making this a solid general-purpose dual-monitor dock for home office use where 60Hz is genuinely sufficient for the work being done.",
    specs: [
      "13-in-1 dock, dual 5K/4K@60Hz",
      "2x HDMI, 2x DisplayPort",
      "130W power delivery",
      "Gigabit Ethernet, 5x USB, audio",
      "Compatible with M1-M4 Mac and Windows",
    ],
    pros: [
      "Supports up to 5K resolution on one display",
      "Good port variety across HDMI and DisplayPort",
      "130W power delivery covers most laptop charging needs",
      "Broad Mac and Windows compatibility",
    ],
    cons: [
      "60Hz ceiling, not built for high refresh rate gaming or 120Hz work",
      "DisplayLink driver required",
      "Dual-monitor only, no path to 3+ displays",
    ],
    bestFor: "Buyers who want dual high-resolution displays at 60Hz without paying for 120Hz capability",
  },
  {
    id: "anker-prime-docking-station-14-port",
    rank: 7,
    badge: "Best Overall Build Quality",
    name: "Anker Prime Docking Station, 14-Port with 160W Max Output",
    price: "$169.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ptzq7E2JL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CW9249DK?tag=deskfinds0d-20",
    description:
      "Anker's Prime Docking Station packs 14 ports and up to 160W of output into a single unit supporting dual 4K displays, backed by Anker's Real-Time Smart Interface that shows live power draw across connected devices. Its 10Gbps data transfer rate stands out for buyers who move large files frequently alongside driving displays.\n\nIt's a strong general-purpose pick for Dell, HP, and Lenovo laptops that want dual 4K output plus fast data transfer and reliable build quality, even though it doesn't chase the 120Hz ceiling the way the DisplayLink-focused docks in this list do.",
    specs: [
      "14-port docking station, up to 160W output",
      "Dual 4K display support",
      "10Gbps fast data transfer",
      "Real-Time Smart Interface for power monitoring",
      "Audio and Ethernet ports included",
    ],
    pros: [
      "160W max output covers demanding laptop charging needs",
      "10Gbps data transfer is faster than most docks in this list",
      "Real-time power draw monitoring is a useful diagnostic feature",
      "Strong reputation for build quality",
    ],
    cons: [
      "Dual 4K only, not built for 120Hz or 5-monitor setups",
      "No explicit 120Hz spec, better suited to standard 60Hz productivity",
      "Fewer video outputs than the DisplayLink-focused docks here",
    ],
    bestFor: "Dell, HP, and Lenovo laptop users who prioritize fast data transfer and build quality over chasing 120Hz",
  },
  {
    id: "kvm-switch-4k120hz-13-in-1-dock",
    rank: 8,
    badge: "Best KVM Dock with Native 4K@120Hz",
    name: "KVM Switch 2 Monitors 2 Computers Docking Station, 4K60Hz/4K120Hz",
    price: "$159.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41zZDSI+zhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMQVLGX3?tag=deskfinds0d-20",
    description:
      "This 13-in-1 aluminum KVM switch dock explicitly supports both 4K@60Hz and 4K@120Hz output, combining USB-C and HDMI/DP inputs so 2 computers can share 2 monitors with a genuine path to 120Hz rather than being capped at 60Hz like most KVM-focused docks. A 100W PD budget per connected PC keeps both machines charged while docked.\n\nReaching 120Hz still depends on using a certified high-bandwidth HDMI or DisplayPort cable and confirming both the monitor and the active input support DSC where the connection needs compression to fit within available bandwidth, the same caveat that applies to any 4K@120Hz claim regardless of dock brand.",
    specs: [
      "13-in-1 KVM switch dock, 2 monitors, 2 computers",
      "4K60Hz/4K120Hz supported",
      "100W PD per connected PC",
      "1G Ethernet",
      "Aluminum case, plug and play",
    ],
    pros: [
      "Rare combination of KVM switching with a real 4K@120Hz path",
      "100W PD per PC keeps both machines charged",
      "Aluminum build feels more durable than plastic competitors",
      "Plug and play without extra driver installation for most functions",
    ],
    cons: [
      "120Hz still requires a certified high-bandwidth cable to actually reach",
      "KVM switching adds complexity most single-computer users don't need",
      "Fewer total ports than the larger DisplayLink hubs in this list",
    ],
    bestFor: "Buyers who need both KVM switching between 2 computers and a genuine 4K@120Hz display path",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Actual refresh rate ceiling by connection type",
    description: "Checked whether each dock's 4K@120Hz claim applies via native Thunderbolt output, DisplayLink compression, or DSC, since these paths carry very different real-world limitations.",
  },
  {
    title: "Bandwidth and compression requirements",
    description: "Weighed Thunderbolt 4's 40Gbps ceiling against what uncompressed 4K@120Hz actually requires, and noted where DSC support was necessary on both dock and monitor.",
  },
  {
    title: "Platform-specific limits (Mac vs. Windows)",
    description: "Verified DisplayLink's 4K@60Hz macOS ceiling against Windows-side 4K@120Hz claims, since the same dock can behave differently depending on the connected operating system.",
  },
  {
    title: "Monitor count vs. refresh rate trade-off",
    description: "Compared docks supporting more monitors at lower refresh rates against docks supporting fewer monitors at higher refresh rates, since no dock in this list does both at maximum simultaneously.",
  },
  {
    title: "Port variety and charging wattage",
    description: "Scored USB, Ethernet, SD card, and audio port counts alongside charging wattage, since a high-refresh display dock still needs to function as the laptop's primary port hub.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Thunderbolt 4 cannot do uncompressed 4K@120Hz on its own",
    explanation:
      "Thunderbolt 4's 40Gbps bandwidth ceiling is not enough to carry an uncompressed 4K@120Hz signal. Docks that advertise 4K@120Hz over TB4 rely on Display Stream Compression (DSC), a visually lossless compression method, to fit the signal within available bandwidth. DSC only works if both the dock and the connected monitor support it, so check your monitor's DSC support before assuming a TB4 dock will hit 120Hz.",
  },
  {
    criterion: "Only Thunderbolt 5 reaches 4K@120Hz uncompressed",
    explanation:
      "Thunderbolt 5's higher bandwidth ceiling is enough to carry 4K@120Hz without needing DSC compression at all. TB5 laptops and docks remain more limited and pricier than TB4 options as of 2026, so weigh whether uncompressed output is worth the premium versus a DSC-compressed TB4 connection that most users can't visually tell apart from uncompressed anyway.",
  },
  {
    criterion: "Your display cable can silently cap the refresh rate",
    explanation:
      "An older HDMI cable simply cannot carry a 4K@120Hz signal, and will lock the connection at 4K@60Hz even when both the dock and the monitor fully support 120Hz. Always pair a 4K@120Hz-capable dock with a certified high-bandwidth HDMI 2.1 or DisplayPort cable, this is one of the most common reasons buyers think a dock is defective when the cable is the actual bottleneck.",
  },
  {
    criterion: "4K@120Hz vs. 1440p@144Hz is a real productivity vs. performance trade-off",
    explanation:
      "4K@120Hz demands more GPU power and bandwidth than 1440p@144Hz. For static home office productivity work, 4K@60Hz is often visually superior to 1440p@144Hz simply from the resolution increase. For gaming on a mid-range GPU, 1440p@144Hz can actually deliver smoother real-world performance than a 4K@120Hz target the GPU struggles to sustain.",
  },
  {
    criterion: "MacBook cannot hit 4K@120Hz through a DisplayLink dock",
    explanation:
      "DisplayLink's compression technology caps output at 4K@60Hz on macOS regardless of what the dock's spec sheet claims for Windows. Mac users who specifically need 4K@120Hz must use a dock with native Thunderbolt video output, and even then only higher-tier Pro or Max chip MacBooks support that output at 120Hz.",
  },
  {
    criterion: "KVM switch docks solve a different problem than pure display docks",
    explanation:
      "A KVM switch dock lets 2 computers share the same monitors and peripherals without re-plugging cables, which is valuable if you regularly switch between a work laptop and a personal desktop. If you only ever use one computer, this adds unnecessary complexity, a standard docking station without KVM switching is simpler and often cheaper for the same display performance.",
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
    subheading: "By Laptop Connection Type",
    intro:
      "The dock category that actually works for you depends heavily on whether your laptop has Thunderbolt or standard USB-C, and whether it's a Mac or Windows machine.",
    table: {
      headers: ["Your laptop", "What to look for", "Best pick"],
      rows: [
        ["MacBook Pro/Air M4/M5 (Thunderbolt)", "Native Thunderbolt video, not DisplayLink", "Plugable Thunderbolt 4 Dock (TBT-UDM)"],
        ["Windows laptop with Thunderbolt 5/4/3", "DisplayLink dock for multi-monitor 4K@120Hz", "TobenONE 20-in-1 or DL7400"],
        ["Any USB-C laptop, budget dual-monitor need", "144Hz-capable dual output at low cost", "USB C Dock, Dual Monitor 4K@144Hz"],
        ["Dell/HP/Lenovo with heavy data transfer needs", "10Gbps data plus dual 4K", "Anker Prime 14-Port Docking Station"],
      ],
    },
  },
  {
    subheading: "By Monitor Count vs. Refresh Rate",
    cards: [
      {
        label: "Want the most monitors possible at 120Hz",
        text: "The TobenONE DL7400 supports up to 5 monitors including quad 4K@120Hz, the highest monitor count in this list at that refresh rate.",
      },
      {
        label: "Want fewer monitors but guaranteed 120Hz",
        text: "The 13-in-1 KVM dock explicitly supports 4K@120Hz on its 2-monitor configuration with a clear cable requirement.",
      },
      {
        label: "Want 4 monitors and don't need 120Hz",
        text: "The TobenONE 20-in-1 covers quad 4K@60Hz, prioritizing display count over refresh rate for productivity work.",
      },
      {
        label: "Want dual monitors on a tight budget",
        text: "The USB C dual-monitor dock at $98.99 hits 4K@144Hz for the lowest price in this list.",
      },
    ],
  },
  {
    subheading: "By Whether You Share a Setup Between 2 Computers",
    intro:
      "KVM switch docks solve a specific problem that standard docks don't address at all.",
    table: {
      headers: ["Situation", "Recommendation", "Best pick"],
      rows: [
        ["Single laptop, single dock", "Standard dock, no KVM needed", "Plugable Thunderbolt 4 Dock or Anker Prime"],
        ["Laptop and desktop sharing 2 monitors, 60Hz fine", "8K KVM switch dock", "AV Access 8K KVM Switch Dock"],
        ["Laptop and desktop sharing 2 monitors, need 120Hz", "KVM dock with native 4K@120Hz support", "13-in-1 KVM Switch Dock (4K60Hz/4K120Hz)"],
      ],
    },
  },
  {
    subheading: "Mac vs. Windows Display Ceiling",
    note: "On macOS, any DisplayLink-based dock is capped at 4K@60Hz regardless of the dock's advertised 120Hz spec for Windows. Mac users chasing 4K@120Hz need a dock with native Thunderbolt video output, like the Plugable TBT-UDM, and even then only Pro/Max chip MacBooks support that ceiling.",
  },
  {
    subheading: "Cable Requirements to Actually Reach 120Hz",
    intro:
      "None of the docks in this list can hit their advertised refresh rate with an underspecified cable.",
    table: {
      headers: ["Target refresh rate", "Required cable", "What happens with an older cable"],
      rows: [
        ["4K@60Hz", "Standard HDMI 2.0 or DisplayPort 1.4", "Works fine at 60Hz"],
        ["4K@120Hz (compressed via DSC)", "Certified HDMI 2.1 or DisplayPort 1.4/2.0", "Signal silently drops to 60Hz"],
        ["4K@120Hz (uncompressed, TB5)", "Certified high-bandwidth Thunderbolt/DP cable", "Signal fails to reach 120Hz or drops connection"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Can Thunderbolt 4 actually run a 4K@120Hz monitor?",
    a: "Thunderbolt 4's 40Gbps bandwidth is not enough to carry an uncompressed 4K@120Hz signal. Docks that reach 4K@120Hz over TB4 do it through Display Stream Compression (DSC), a visually lossless method that fits the signal within TB4's bandwidth. DSC requires support on both the dock and the connected monitor, so check your monitor's spec sheet for DSC support before assuming a TB4 dock will hit 120Hz.",
  },
  {
    q: "Does Thunderbolt 5 make a difference for 4K@120Hz?",
    a: "Yes, Thunderbolt 5 has enough bandwidth to carry 4K@120Hz uncompressed, without relying on DSC at all. As of 2026, TB5 laptops are still less common and TB5 docks tend to cost more, so most buyers are choosing between a DSC-compressed TB4 connection, which most people can't visually distinguish from uncompressed, or paying the TB5 premium.",
  },
  {
    q: "Why is my monitor stuck at 60Hz even though my dock supports 120Hz?",
    a: "The most common cause is the display cable, an older HDMI cable simply cannot carry a 4K@120Hz signal and will silently cap the connection at 4K@60Hz even if the dock and monitor both support 120Hz. Confirm you're using a certified high-bandwidth HDMI 2.1 or DisplayPort cable, and also check that your specific monitor input supports DSC if the dock relies on it.",
  },
  {
    q: "Should I choose 4K@120Hz or 1440p@144Hz for my setup?",
    a: "It depends on your use case. For home office productivity work with mostly static content, 4K@60Hz is often visually superior to 1440p@144Hz simply due to the resolution jump. For gaming on a mid-range GPU, 1440p@144Hz can deliver smoother real gameplay than a 4K@120Hz target the GPU can't consistently sustain, so match the choice to whether you're optimizing for clarity or frame rate.",
  },
  {
    q: "Can a MacBook run a dock at 4K@120Hz?",
    a: "Not through a DisplayLink-based dock, DisplayLink's compression caps macOS output at 4K@60Hz regardless of what the dock advertises for Windows. Reaching 4K@120Hz on a MacBook requires a dock with native Thunderbolt video output, and even then only higher-tier Pro or Max chip MacBooks support that output at 120Hz.",
  },
  {
    q: "What's the point of a KVM switch dock versus a regular docking station?",
    a: "A KVM switch dock lets 2 separate computers, like a work laptop and a personal desktop, share the same monitors and peripherals without physically re-plugging cables each time you switch machines. If you only ever connect one computer, a standard dock without KVM switching is simpler and typically cheaper for equivalent display performance.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-usb-c-docking-stations", title: "8 Best USB-C Docking Stations in 2026" },
  { href: "/guide/best-docking-stations-for-laptop-and-desktop", title: "Best Docking Stations for Laptop and Desktop Setups" },
  { href: "/guide/best-docking-stations-for-desk-setup", title: "Best Docking Stations for Desk Setup" },
];
