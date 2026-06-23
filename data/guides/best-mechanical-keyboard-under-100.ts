const BASE_IMAGES = "/images/guides/best-mechanical-keyboard-under-100";

export const guideSlug = "best-mechanical-keyboard-under-100";
export const guideTitle =
  "6 Best Mechanical Keyboards Under $100 for Home Office and Gaming (2026)";
export const metaTitle = "6 Best Mechanical Keyboards Under $100 in 2026";
export const metaDescription =
  "Best mechanical keyboards under $100: Keychron V1 and C3 Pro, RK84, Epomaker TH80 Pro. Layout vs desk size, switch types for home office, hot-swap, and gasket mount explained.";
export const lastUpdated = "2026-06-23";
export const readTime = "15 min";
export const heroImage = `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-hero.webp`;

export interface MechKeyboard100 {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  layout: string;
  wireless: string;
  switchType: string;
  hotSwap: string;
  mount: string;
  keycaps: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: MechKeyboard100[] = [
  {
    id: "redragon-k552",
    rank: 1,
    badge: "Best Budget Under $35",
    name: "Redragon K552",
    price: "~$28-35",
    layout: "TKL 87-key",
    wireless: "No (USB)",
    switchType: "Outemu Red or Blue",
    hotSwap: "No",
    mount: "Tray mount",
    keycaps: "ABS",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-redragon-k552.webp`,
    amazonUrl: "https://www.amazon.com/dp/B016MAK38U?tag=deskfinds0d-20",
    whyItWorks:
      "The Redragon K552 has been the standard entry-level mechanical keyboard on Amazon since 2015. Tens of thousands of verified reviews. Metal top frame adds rigidity unusual at this price. Outemu switches are Cherry MX-compatible - keycap replacements work without modification. For a first mechanical keyboard under $35 with a proven track record, no competing option has more documented reliability.",
    tradeoffs: [
      "Tray mount - each keystroke vibrates directly into the case, louder and harsher feel than gasket",
      "Non-hot-swap - switch replacement requires soldering",
      "ABS keycaps develop sheen with extended use",
      "No RGB, single-color LED only on many variants",
    ],
    skipIf:
      "Budget allows $40-50. The Keychron C3 Pro adds gasket mount, hot-swap 3/5-pin, QMK/VIA, and RGB for $12 more - the feature gap is significant.",
    pros: [
      "Under $35 - lowest price in guide",
      "Proven since 2015 - tens of thousands of reviews",
      "Metal top frame for rigidity",
      "Cherry MX-compatible switches and keycaps",
      "Best first mechanical keyboard at this price",
    ],
    cons: [
      "Tray mount - harsh feel and louder",
      "No hot-swap - soldering required to change switches",
      "ABS keycaps shine over time",
      "Limited features vs $40+ options",
    ],
  },
  {
    id: "keychron-c3-pro",
    rank: 2,
    badge: "Best Value Wired Under $50",
    name: "Keychron C3 Pro",
    price: "~$40-50",
    layout: "TKL 87-key",
    wireless: "No (USB-C)",
    switchType: "K Pro Red/Brown/Blue (hot-swap)",
    hotSwap: "Yes (3/5-pin)",
    mount: "Gasket mount",
    keycaps: "ABS double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-keychron-c3-pro.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CRDKQNQ5?tag=deskfinds0d-20",
    whyItWorks:
      "Gasket mount, QMK/VIA programmability, and hot-swap 3/5-pin socket at $40 - a feature set that cost $120+ three years ago. QMK/VIA lets you remap any key using a free browser interface in under 5 minutes - changes persist on the keyboard. Hot-swap means switching from Blue to Brown costs $15-25 in replacement switches and 15 minutes, no soldering. The benchmark for budget mechanical keyboards in 2026.",
    tradeoffs: [
      "ABS keycaps - develop shiny surface in 6-12 months with heavy use",
      "TKL layout only - no compact 75% option in C3 Pro line",
      "Wired only - no wireless option in C3 Pro",
    ],
    skipIf:
      "You need wireless. The RK Royal Kludge RK84 at $60-70 adds triple-mode wireless (BT 5.0 + 2.4GHz + USB-C) for $20 more.",
    pros: [
      "Gasket mount at $40 - softer typing feel",
      "QMK/VIA programmable - remap any key in browser",
      "Hot-swap 3/5-pin at $40 - switch changes without soldering",
      "USB-C detachable cable",
      "Keychron brand reliability",
    ],
    cons: [
      "ABS keycaps - shines over time",
      "Wired only",
      "TKL 87% only - no 75% option",
    ],
  },
  {
    id: "akko-3087-horizon-ds",
    rank: 3,
    badge: "Best TKL with PBT Keycaps",
    name: "Akko 3087 Horizon DS",
    price: "~$55-70",
    layout: "TKL 87-key",
    wireless: "No (USB-C detachable)",
    switchType: "Akko CS Cream Blue or others",
    hotSwap: "No (soldered)",
    mount: "Tray mount",
    keycaps: "PBT double-shot dye-sub",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-akko-3087-horizon-ds.webp`,
    amazonUrl: "https://www.amazon.com/dp/B099F3DPBZ?tag=deskfinds0d-20",
    whyItWorks:
      "Cherry-profile PBT double-shot keycaps ship with the board - aftermarket equivalents cost $40-60 separately. Akko CS switches come factory pre-lubed, delivering a smoother feel than the Outemu switches found in most boards at this price. Detachable USB-C cable means a damaged cable is a $5 replacement rather than a repair. The Horizon colorway (blue gradient) is a distinctive aesthetic option.",
    tradeoffs: [
      "Tray mount - harsher feel than gasket",
      "No hot-swap - soldering required for switch changes",
      "Higher price than C3 Pro without adding hot-swap or wireless",
    ],
    skipIf:
      "Hot-swap compatibility is important. The Keychron V1 at $69-84 adds gasket mount and QMK/VIA to PBT keycaps for $15-30 more.",
    pros: [
      "PBT double-shot keycaps included - legends never fade",
      "Pre-lubed Akko CS switches - smoother factory feel",
      "Detachable USB-C cable",
      "Distinctive Horizon colorway",
      "Cherry-profile legends",
    ],
    cons: [
      "Tray mount",
      "No hot-swap",
      "Higher price than C3 Pro without wireless or hot-swap",
    ],
  },
  {
    id: "rk-royal-kludge-rk84",
    rank: 4,
    badge: "Best Wireless Mechanical Keyboard",
    name: "RK Royal Kludge RK84",
    price: "~$60-70",
    layout: "75% 84-key",
    wireless: "Yes (BT 5.0 / 2.4GHz / USB-C)",
    switchType: "RK Red/Brown/Blue (hot-swap)",
    hotSwap: "Yes (3/5-pin)",
    mount: "Tray mount",
    keycaps: "ABS double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-rk-royal-kludge-rk84.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08M3KPXV5?tag=deskfinds0d-20",
    whyItWorks:
      "Triple-mode wireless (BT 5.0, 2.4GHz, and USB-C) with Bluetooth pairing for 3 devices simultaneously. 4000mAh battery provides 3-6 months of daily use with backlight off, or 1-3 weeks with RGB. The 75% layout retains the F-row and dedicated arrow keys while being 1.5 inches narrower than TKL - the best office compromise for cable-free desks. Hot-swap on a wireless board at this price is uncommon.",
    tradeoffs: [
      "Tray mount - harsher feel than gasket",
      "ABS keycaps - shines over time",
      "No QMK/VIA - proprietary remapping software only",
      "2.4GHz dongle required for fastest wireless response",
    ],
    skipIf:
      "Wired is acceptable and gasket mount or QMK/VIA matters most. The Keychron C3 Pro at $40-50 or V1 at $69-84 are better for typed-feel and programmability.",
    pros: [
      "Triple wireless (BT 5.0 + 2.4GHz + USB-C) with 3-device BT pairing",
      "4000mAh battery - months of use without backlight",
      "75% layout - compact but keeps F-row and arrows",
      "Hot-swap 3/5-pin on wireless board at $60-70",
      "Clean desk - no cable required",
    ],
    cons: [
      "Tray mount",
      "ABS keycaps shine over time",
      "No QMK/VIA",
      "Needs 2.4GHz dongle for lowest latency",
    ],
  },
  {
    id: "keychron-v1",
    rank: 5,
    badge: "Best Overall Wired Under $100",
    name: "Keychron V1",
    price: "~$69-84",
    layout: "75% 84-key",
    wireless: "No (USB-C)",
    switchType: "K Pro Red/Brown hot-swap",
    hotSwap: "Yes (3/5-pin)",
    mount: "Double-gasket mount",
    keycaps: "PBT double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-keychron-v1.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09NLWG6X1?tag=deskfinds0d-20",
    whyItWorks:
      "Double-gasket mount, PBT double-shot keycaps, QMK/VIA programmability, and hot-swap 3/5-pin sockets in a 75% form factor. Double-gasket is two layers of silicone dampening - softer and bouncier typing feel than single-gasket designs. The difference is most apparent during 1-2+ hour typing sessions. PBT double-shot legends are a second layer of plastic, not ink or dye - they cannot fade. Most recommended wired mechanical keyboard under $100 for home office daily use.",
    tradeoffs: [
      "Wired only - V1 Max adds wireless at ~$109",
      "Highest price wired option in guide at $69-84",
      "Red/Brown switches only in standard V1 (Blue in separate V1 Blue variant)",
    ],
    skipIf:
      "You need wireless. The Epomaker TH80 Pro at $75-90 or RK Royal Kludge RK84 at $60-70 add triple-mode wireless.",
    pros: [
      "Double-gasket mount - softest typing feel in guide",
      "PBT double-shot - legends never fade",
      "QMK/VIA programmable - best key customization",
      "Hot-swap 3/5-pin",
      "75% layout - compact with full F-row and arrows",
    ],
    cons: [
      "Wired only (V1 Max ~$109 for wireless)",
      "Highest wired price at $69-84",
      "Red/Brown switch options only in V1 (Blue is separate model)",
    ],
  },
  {
    id: "epomaker-th80-pro",
    rank: 6,
    badge: "Best Wireless with Premium Features",
    name: "Epomaker TH80 Pro",
    price: "~$75-90",
    layout: "75% 80-key",
    wireless: "Yes (BT 5.0 / 2.4GHz / USB-C)",
    switchType: "Gateron Pro Red or others (hot-swap)",
    hotSwap: "Yes (3/5-pin)",
    mount: "PCB-mount with silicone foam",
    keycaps: "PBT double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-hero.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BML2S3PQ?tag=deskfinds0d-20",
    whyItWorks:
      "Adds three features the RK84 lacks: PBT double-shot keycaps, a physical volume knob, and south-facing RGB LEDs. South-facing LEDs shine through the front of keycaps rather than directly into the user's eyes - more visible legends under the light. Silicone dampening foam reduces hollow resonance. Gateron Pro switches are factory pre-lubed. For wireless buyers who want PBT keycaps plus volume knob plus best feature set under $100, this is the pick.",
    tradeoffs: [
      "Not a true gasket mount - PCB + silicone foam is softer than tray but not as soft as double-gasket",
      "Higher price at $75-90 than RK84",
      "No QMK/VIA - proprietary remapping only",
      "Slightly less hot-swap compatible switch brand variety than Keychron",
    ],
    skipIf:
      "Wired use only and QMK/VIA matters. The Keychron V1 at $69-84 has better typing feel and full QMK/VIA without wireless premium.",
    pros: [
      "PBT double-shot + wireless - rare combination under $100",
      "Physical volume knob",
      "South-facing RGB - better keycap illumination",
      "Silicone foam dampening",
      "Gateron Pro pre-lubed switches",
    ],
    cons: [
      "Not true gasket mount",
      "No QMK/VIA",
      "Higher price than RK84",
      "Limited Gateron Pro hot-swap variety",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  layout: string;
  wireless: string;
  switchType: string;
  price: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  layout: p.layout,
  wireless: p.wireless,
  switchType: p.switchType,
  price: p.price,
}));

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "What is the best mechanical keyboard under $100 for home office work?",
    a: "Keychron V1 ($69-84) for wired use - double-gasket mount, PBT keycaps, QMK/VIA, and hot-swap make it the most complete wired option. For wireless, the RK Royal Kludge RK84 ($60-70) is the most complete triple-mode wireless pick, or the Epomaker TH80 Pro ($75-90) adds PBT keycaps and a volume knob.",
  },
  {
    q: "What mechanical keyboard should I buy under $50?",
    a: "Keychron C3 Pro ($40-50). Gasket mount, QMK/VIA programmability, hot-swap 3/5-pin, and USB-C detachable cable at $40. The only trade-off is ABS keycaps that will develop a sheen over 6-12 months. No other keyboard at $50 or under offers this combination of features.",
  },
  {
    q: "Is the Redragon K552 still worth buying in 2026?",
    a: "For a first mechanical keyboard under $35, yes - it has the longest track record at this price and metal construction. For $12 more, the Keychron C3 Pro adds gasket mount, hot-swap, QMK/VIA, and RGB. If the budget is hard-capped at $35, the K552 is a solid choice. If $40-50 is possible, the C3 Pro is a more capable keyboard.",
  },
  {
    q: "Are Blue switches good for home office use?",
    a: "Blue switches produce an audible click on every keystroke - clearly audible to other participants on video calls even with noise suppression active. Brown (tactile bump, no click) or Red (smooth linear, no click) are more appropriate for home office and shared spaces. Blue switches are designed for typing satisfaction, not office environments.",
  },
  {
    q: "What is QMK/VIA and do I need it?",
    a: "QMK is open-source keyboard firmware. VIA is a browser-based graphical interface to remap any key without programming. Common uses: Caps Lock to Escape, media controls on an Fn layer, macro keys. Takes 5 minutes, changes persist on the keyboard through battery cycles and USB reconnects. Keychron C3 Pro and V1 include QMK/VIA. RK84 and Epomaker TH80 Pro use proprietary remapping software only.",
  },
];

export const relatedGuides = [
  {
    href: "/guide/best-standing-desk-under-200",
    title: "Best Standing Desk Under $200",
  },
  {
    href: "/guide/best-monitor-arm-under-100",
    title: "Best Monitor Arm Under $100",
  },
  {
    href: "/guide/standard-desk-height",
    title: "Standard Desk Height Guide",
  },
  {
    href: "/guide/ultrawide-vs-dual-monitor",
    title: "Ultrawide vs Dual Monitor",
  },
];
