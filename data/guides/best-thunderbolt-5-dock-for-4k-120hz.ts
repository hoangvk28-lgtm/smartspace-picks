export const guideSlug = "best-thunderbolt-5-dock-for-4k-120hz";
export const guideTitle = "4 Best Thunderbolt 5 Docks for 4K 120Hz and 240Hz in 2026";
export const metaTitle = "Best TB5 Docks for 4K 120Hz/240Hz";
export const metaDescription = "We compared Thunderbolt 5 docks by their stated refresh rate ceilings per display count, since 120Hz and 240Hz support often depends on monitor count.";
export const mainKeyword = "best thunderbolt 5 dock for 4k 120hz";
export const introParagraphs = [
  "A Thunderbolt 5 dock's headline 4K@120Hz or 4K@240Hz spec usually applies only under a specific display count and host chip combination, so the same dock can drop to a lower refresh rate the moment a second or third monitor joins the setup.",
  "We compared this lineup on exactly how each listing documents its refresh rate ceiling per display count, since one listing specifically states dual 4K@240Hz drops to triple 4K@144Hz once a third display is added, a real tradeoff worth understanding before buying."
];
export const lastUpdated = "2026-09-15";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31UQfIgM7DL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-thunderbolt-5-dock-for-4k-120hz-1",
    rank: 1,
    badge: "Best Overall",
    name: "Lenovo ThinkPad Thunderbolt 5 Smart Dock 7500",
    price: "$368.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31UQfIgM7DL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FZFPC9TL?tag=deskfinds0d-20",
    description: "This dock's listing specifically states it can drive up to three 8K@60Hz displays or four monitors in configurations including two 4K@240Hz and two 4K@120Hz simultaneously, a genuinely granular breakdown of exactly which refresh rate and display count combinations are supported. Its 180W Power Delivery via PD 3.1 charges a demanding laptop while running that display load, and 120Gbps data speeds come through its Thunderbolt 5 connection.\n\nCompared to the CalDigit and Brydge picks below, this one's Intelligent Management via Lenovo's Accessories Fleet Manager, a cloud-based tool powered by AWS, lets IT managers remotely configure, update, and diagnose fleets of docks from anywhere, a genuinely enterprise-oriented feature the other picks in this comparison lack.\n\nBest for buyers who want the most granular documented refresh rate breakdown across four simultaneous displays with enterprise-grade remote fleet management.",
    specs: ["Up to 3x 8K@60Hz or 4 displays incl. 2x 4K@240Hz + 2x 4K@120Hz", "180W PD 3.1, 120Gbps Thunderbolt 5", "2.5Gbps Ethernet, Lenovo Fleet Manager"],
    pros: ["Most granular documented refresh rate breakdown per display count", "180W charging covers demanding workstation laptops", "Cloud-based fleet management for IT-managed deployments"],
    cons: ["Higher price than the CalDigit E5 pick below", "Enterprise fleet management features are irrelevant for a single home user"],
    bestFor: "buyers who want the most granular documented refresh rate breakdown across four simultaneous displays",
  },
  {
    id: "best-thunderbolt-5-dock-for-4k-120hz-2",
    rank: 2,
    badge: "Best Value",
    name: "CalDigit E5 Thunderbolt 5 Element 5 Hub",
    price: "$249.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31QKkkmqqhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX8FS8KC?tag=deskfinds0d-20",
    description: "This dock's listing specifically discloses that Windows Thunderbolt 5 hosts can drive three 4K@144Hz displays, while Mac hosts are limited to two 6K@60Hz or 8K@60Hz displays, or dual 4K@240Hz specifically on Macs that support these resolutions, a transparent platform-specific breakdown rather than a single blended spec. Its Bandwidth Boost feature shifts up to 120Gb/s toward displays when ultra high-refresh monitors are connected.\n\nCompared to the Lenovo pick above, this one's 90W sustained power delivery across all 9 connected devices simultaneously, backed by a 180W power supply and Offline Charging that works even when not connected to a host, is a genuinely differentiated feature for shared desk setups.\n\nBest for buyers who want the lowest price in this comparison with transparent platform-specific refresh rate documentation.",
    specs: ["3x 4K@144Hz (Windows) or dual 4K@240Hz (Mac)", "80Gb/s base, up to 120Gb/s Bandwidth Boost", "90W sustained PD across 9 ports, Offline Charging"],
    pros: ["Lowest price in this comparison at under $250", "Transparent platform-specific refresh rate documentation for Windows vs Mac", "Offline Charging works even without a connected host"],
    cons: ["Triple display support is Windows-only, not available on macOS", "Base M1 to M3 Macs do not support dual displays at all"],
    bestFor: "buyers who want the lowest price with transparent platform-specific refresh rate documentation",
  },
  {
    id: "best-thunderbolt-5-dock-for-4k-120hz-3",
    rank: 3,
    badge: "Best for MacBook Pro",
    name: "Brydge ProDock Trio TB5 MacBook Docking Station",
    price: "$399.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31ICct2OHNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H89326CQ?tag=deskfinds0d-20",
    description: "This dock's listing specifically states triple 4K displays at 144Hz or dual 8K displays at 60Hz, with the explicit caveat that display count and refresh rate depend on your exact MacBook chip and Apple's own display limits, an honest disclosure rather than an overstated blanket claim. Its vertical aluminum stand holds a MacBook Pro upright in a space black finish, reducing desk footprint while keeping airflow open around the laptop.\n\nCompared to the Lenovo and CalDigit picks above, this one is purpose-built specifically for MacBook Pro 16-inch models with M1 Max through M5 Max chips, shipping with a precision-fit sleeve, a vertical stand, and a Thunderbolt 5 cable in the box, a more complete out-of-box package than a standalone dock.\n\nBest for MacBook Pro owners who want a vertical desk-saving design with an honest per-chip display disclosure.",
    specs: ["Triple 4K@144Hz or dual 8K@60Hz (chip-dependent)", "140W PD, vertical aluminum stand design", "11 ports, precision-fit MacBook sleeve included"],
    pros: ["Vertical design saves real desk footprint versus a flat dock", "Honest disclosure that display specs depend on exact MacBook chip", "Ships complete with sleeve, stand, and Thunderbolt 5 cable included"],
    cons: ["Purpose-built only for MacBook Pro 16-inch, not a general-purpose dock", "Reduced bandwidth and display support on Thunderbolt 4 Macs"],
    bestFor: "MacBook Pro 16-inch owners who want a vertical, desk-saving docking design",
  },
  {
    id: "best-thunderbolt-5-dock-for-4k-120hz-4",
    rank: 4,
    badge: "Best Modular Design",
    name: "Dell SD25TB5 Pro Thunderbolt 5 Smart Dock",
    price: "$445.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41b3ZqoNnJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GSGXWGRR?tag=deskfinds0d-20",
    description: "This dock's listing specifically highlights a modular dock design with swappable module capability, letting you upgrade the dock's capabilities over time rather than replacing the entire unit when your needs change, a genuinely distinct approach among the picks in this comparison. Its SuperBoost technology delivers fast charging and data transfer at up to 40GB/s, and its port mix includes 2x DisplayPort 2.1, 1x HDMI 2.1, and 2x Thunderbolt 5.\n\nCompared to the CalDigit pick above, this one's 180W power adapter and broader OS compatibility spanning macOS, Windows 10, Windows 11, and Ubuntu OS makes it a more platform-agnostic choice for a mixed-device household or office.\n\nBest for buyers who want a future-upgradeable modular dock design with the broadest listed OS compatibility.",
    specs: ["2x DP2.1, 1x HDMI 2.1, 2x Thunderbolt 5 ports", "180W power adapter, modular swappable design", "macOS, Windows 10/11, Ubuntu OS compatible"],
    pros: ["Modular swappable design allows future upgrades without full replacement", "Broadest listed OS compatibility including Ubuntu", "SuperBoost technology delivers fast 40GB/s data transfer"],
    cons: ["Highest price in this comparison at under $450", "Listing does not specify an exact 120Hz or 240Hz refresh rate ceiling"],
    bestFor: "buyers who want a future-upgradeable modular dock with the broadest OS compatibility",
  }
];

export const howWeEvaluated = [
  {
    "title": "Refresh rate per display count",
    "description": "We read each listing for the exact refresh rate at each monitor count, because a dock that advertises 4K at 240Hz often drops to 144Hz or 120Hz when a second or third screen is added. Lenovo's tiered breakdown gave the clearest per-count answers. Cheaper docks that skip this table are the ones that surprise buyers later."
  },
  {
    "title": "Windows versus Mac ceilings",
    "description": "We checked whether the page separates platforms. CalDigit's E5 lists three 4K at 144Hz on Windows but dual 4K at 240Hz on Mac, a split that changes the right purchase for anyone with a high-refresh gaming or editing monitor. A buyer with a 240Hz monitor should treat that Mac and Windows split as the deciding spec."
  },
  {
    "title": "Bandwidth Boost dependence",
    "description": "High refresh at 4K needs the 120Gbps display boost, so we favored docks that state it. At 80Gbps base, two 4K 240Hz streams do not fit, which is why TB4 laptops disappoint on this exact feature. That is why a Thunderbolt 5 host is a hard requirement for this specific use case."
  },
  {
    "title": "Power delivery under refresh load",
    "description": "We compared upstream wattage, from 90W on the CalDigit E5 up to 180W on Lenovo and Dell, since a laptop driving several fast displays draws more power and slow charging shows up as a battery that falls during gaming. Dell and Lenovo's 180W adapters left the most room for a hungry laptop."
  },
  {
    "title": "Chip-dependent display disclosure",
    "description": "We gave credit to Brydge for admitting its triple 4K at 144Hz or dual 8K at 60Hz depends on the exact MacBook chip. At a 120Hz-and-up target, vague claims cost buyers a return. Brydge's honesty earned it a spot despite being limited to 16-inch MacBook Pro owners."
  }
];

export const howToChoose = [
  {
    "subheading": "By Refresh Rate Target",
    "intro": "Refresh rate drops as you add monitors, so match the number to your real screen count.",
    "table": {
      "headers": [
        "Your target",
        "Recommended pick"
      ],
      "rows": [
        [
          "Four displays including two 4K at 240Hz and two at 120Hz",
          "Lenovo ThinkPad Thunderbolt 5 Smart Dock 7500, the only listing here with that breakdown"
        ],
        [
          "Dual 4K at 240Hz on a Mac with a high-refresh display",
          "CalDigit E5 Thunderbolt 5 Element 5 Hub, which documents dual 4K at 240Hz on Mac"
        ],
        [
          "Three 4K at 144Hz on a Windows laptop",
          "CalDigit E5 Thunderbolt 5 Element 5 Hub, since Windows is where its triple display claim applies"
        ],
        [
          "One or two 4K panels at 120Hz on a 16-inch MacBook Pro",
          "Brydge ProDock Trio TB5, which lists triple 4K at 144Hz depending on chip"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Price here tracks charging wattage and platform support more than refresh rate itself.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "The lowest price in this roundup, under $250",
          "CalDigit E5 Thunderbolt 5 Element 5 Hub, which still reaches 144Hz across three 4K screens on Windows"
        ],
        [
          "Mid-tier spend for a MacBook-only desk",
          "Brydge ProDock Trio TB5, with a sleeve and vertical stand included"
        ],
        [
          "Premium spend for a modular dock that can be upgraded later",
          "Dell SD25TB5 Pro Thunderbolt 5 Smart Dock, the top of the range at under $450"
        ],
        [
          "Enterprise-level spend for the most granular refresh table",
          "Lenovo ThinkPad Thunderbolt 5 Smart Dock 7500, which costs more than the CalDigit E5"
        ]
      ]
    }
  },
  {
    "subheading": "Windows Triple Display vs Mac Dual 240Hz",
    "intro": "The same hardware lets you choose width or speed depending on the platform.",
    "cards": [
      {
        "label": "Windows host (CalDigit E5)",
        "text": "Three 4K displays at 144Hz suit a trading or coding desk where screen count beats raw refresh. Windows lets the dock spread display streams across more outputs."
      },
      {
        "label": "Mac host (CalDigit E5)",
        "text": "Two 4K displays at up to 240Hz suit a gaming Mac or video editor where motion smoothness matters. The third output is not available on macOS, and base M1 to M3 Macs cannot drive two displays at all."
      }
    ],
    "note": "Default to the CalDigit E5 for either path unless you need four screens, in which case Lenovo is the only fit."
  },
  {
    "subheading": "By Power Needs",
    "intro": "Higher refresh and bigger panels pull more from the laptop, so charging wattage matters.",
    "table": {
      "headers": [
        "Laptop charger",
        "Recommended pick"
      ],
      "rows": [
        [
          "A 180W workstation laptop that throttles when under-charged",
          "Lenovo ThinkPad Thunderbolt 5 Smart Dock 7500, which delivers 180W over PD 3.1"
        ],
        [
          "A 140W laptop such as a 16-inch MacBook Pro",
          "Brydge ProDock Trio TB5, which supplies 140W PD"
        ],
        [
          "A thin 65W to 90W laptop",
          "CalDigit E5 Thunderbolt 5 Element 5 Hub, whose 90W sustained across nine ports is enough"
        ],
        [
          "A mixed Dell fleet where a swappable dock future-proofs ports",
          "Dell SD25TB5 Pro Thunderbolt 5 Smart Dock, with a 180W adapter and modular ports"
        ]
      ]
    }
  },
  {
    "subheading": "For Competitive Gamers Specifically",
    "intro": "Refresh rate is only useful if the laptop's GPU can feed it.",
    "cards": [
      {
        "label": "Look for",
        "text": "A listing that says Windows, names the refresh rate per display count, and does not rely on a Thunderbolt 4 host. Anything that omits the 240Hz condition is likely to fall to 144Hz."
      },
      {
        "label": "In this comparison",
        "text": "CalDigit E5 Thunderbolt 5 Element 5 Hub gives the clearest Windows numbers for high refresh at the lowest price, while Lenovo's 7500 covers a bigger four-screen rig."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Refresh rate pushes you up in price only when you add screens or fleet needs.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want two 4K at 240Hz plus two more screens at 120Hz from one cable, which only Lenovo ThinkPad Thunderbolt 5 Smart Dock 7500 documents."
      },
      {
        "label": "Save if",
        "text": "Your desk uses one or two monitors, where CalDigit E5 Thunderbolt 5 Element 5 Hub under $250 reaches the same 4K at 144Hz or 240Hz and saves the premium."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A Dock's Refresh Rate Ceiling Almost Always Depends on How Many Displays Are Active Simultaneously",
    "explanation": "The Lenovo pick specifically documents four different display configurations with different refresh rates depending on how many monitors are connected at once, from three 8K@60Hz down to a four-monitor mix including 4K@240Hz and 4K@120Hz, illustrating that a dock's single headline refresh rate figure is rarely the number you'll get once you add a second or third display. This matters significantly if you're planning a multi-monitor setup where every display needs to hit a specific refresh rate, and matters less if you only run one external display. Look for a listing that specifically breaks down refresh rate by exact display count, rather than quoting only its best-case single-display number, before assuming a dock will support your full multi-monitor setup at your target refresh rate."
  },
  {
    "criterion": "Windows and macOS Frequently Get Genuinely Different Display Capabilities From the Identical Dock Hardware",
    "explanation": "The CalDigit E5 pick specifically states Windows hosts can drive three 4K@144Hz displays while Mac hosts are capped at two 6K or 8K displays, or dual 4K@240Hz on supporting Macs, a real platform-level difference baked into the same physical dock rather than a minor footnote. This matters if you're choosing a dock for a specific operating system, since assuming Windows-quoted specs apply equally to macOS (or vice versa) can lead to a real letdown after purchase. Check whether a listing states its display specs separately for Windows and macOS, and read the platform-specific numbers that match your actual computer, not just the dock's single best-case headline claim."
  },
  {
    "criterion": "Sustained Power Delivery Under Full Multi-Display Load Is a Different Spec Than a Dock's Peak Charging Wattage",
    "explanation": "The CalDigit E5 pick specifically states its 90W power delivery is sustained across all 9 connected devices simultaneously, backed by a 180W power supply, distinguishing genuine sustained delivery from a peak wattage figure that might only apply with fewer devices connected. This matters if you're running a laptop plus several other powered peripherals off the same dock and need reliable charging throughout, and matters less if you only connect a laptop and one or two low-power accessories. Look for language specifically confirming sustained power delivery across the dock's full rated device count, not just a single peak wattage number that may not hold under real multi-device load."
  },
  {
    "criterion": "A Modular or Upgradeable Dock Design Can Extend a Dock's Useful Life as Display Standards Change",
    "explanation": "The Dell SD25TB5 Pro pick specifically advertises a modular dock design with swappable module capability, letting a buyer upgrade specific components of the dock over time rather than replacing the entire unit when a new display standard or port type emerges. This matters if you expect to keep a dock for many years through multiple monitor upgrades, and matters less if you plan to replace the whole setup within a couple of years anyway. Check whether a dock's listing specifically names swappable or upgradeable components, since this is a genuinely differentiating feature most competing docks in this price range don't offer at all."
  },
  {
    "criterion": "A Purpose-Built Laptop-Specific Dock Trades General-Purpose Flexibility for a More Complete Out-of-Box Package",
    "explanation": "The Brydge ProDock Trio pick is specifically built only for MacBook Pro 16-inch models, shipping with a precision-fit sleeve, a vertical stand, and a Thunderbolt 5 cable included in the box, a more complete package than a standalone universal dock that ships with just the dock itself. This matters if you own the exact laptop model a dock is purpose-built for and want the extras included, and matters less if you might switch laptop brands or models in the future and need a dock that works across different devices. Weigh a purpose-built dock's included accessories and tailored fit against a universal dock's broader future compatibility before deciding which tradeoff fits your situation."
  }
];

export const faq = [
  { "q": "Will any Thunderbolt 5 dock give me 4K@120Hz on three monitors at once?", "a": "It depends on your operating system and host chip: the Lenovo and CalDigit picks in this comparison both document Windows-specific high-refresh triple-display support, while Mac display counts and refresh rates are generally more limited on the same hardware." },
  { "q": "What's the most common mistake buyers make when shopping for a high-refresh Thunderbolt 5 dock?", "a": "Assuming a dock's single headline refresh rate figure applies no matter how many displays you connect, when most docks specifically document a lower refresh rate ceiling once a second or third display is added." },
  { "q": "Is the Dell SD25TB5 Pro worth the higher price over the CalDigit E5?", "a": "If you specifically want a modular, upgradeable dock design and the broadest listed OS compatibility including Ubuntu, the Dell's higher price is justified, but if you mainly need strong Windows or Mac high-refresh display support at a lower cost, the CalDigit E5 is the better value." },
  { "q": "Do I need a genuine Thunderbolt 5 laptop to get the high refresh rates advertised on these docks?", "a": "Yes, full 80Gb/s bandwidth and the highest advertised refresh rate and display count combinations specifically require a genuine Thunderbolt 5 host, with reduced bandwidth and display support on Thunderbolt 4 or earlier hosts." },
  { "q": "How do I know if my exact MacBook Pro chip supports triple 4K@144Hz on the Brydge dock?", "a": "The Brydge listing specifically states full bandwidth and triple-display output require a Thunderbolt 5 MacBook with an M4 Pro, M4 Max, M5 Pro, or M5 Max chip or newer, so checking your exact chip generation against that list before buying is the reliable way to confirm support." },
  { "q": "Can I use these docks for both a home office and IT-managed corporate deployment?", "a": "Any of these docks work fine in a home office, but if you specifically need remote fleet configuration and diagnostics across many desks, the Lenovo ThinkPad Smart Dock 7500's cloud-based fleet management feature is built specifically for that corporate IT use case." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-thunderbolt-5-dock", "title": "Best Thunderbolt 5 Docks" },
  { "href": "/guide/best-thunderbolt-5-dock-for-macbook-pro", "title": "Best Thunderbolt 5 Docks for MacBook Pro" },
  { "href": "/guide/best-thunderbolt-5-dock-for-windows-laptop", "title": "Best Thunderbolt 5 Docks for Windows Laptops" },
  { "href": "/guide/best-budget-thunderbolt-5-dock", "title": "Best Budget Thunderbolt 5 Docks" }
];
