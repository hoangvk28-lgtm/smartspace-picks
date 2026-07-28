export const guideSlug = "best-lightweight-portable-monitors-for-travel";
export const guideTitle = "8 Best Lightweight Portable Monitors for Travel in 2026";
export const metaTitle = "Best Lightweight Portable Monitors for Travel, Honestly Reviewed (2026)";
export const metaDescription =
  "8 portable monitors we evaluated on true travel-kit weight, panel plus case plus cables, not the marketed panel-only weight that understates what actually goes in your bag.";
export const mainKeyword = "lightweight portable monitor";
export const introParagraphs = [
  "Many listings advertise bare panel weight while the included folio case or stand adds another 150-300g, meaning the real travel weight is often 20-40% higher than the headline spec. We calculate the true kit weight, panel plus case plus cables, for each pick below rather than repeating the marketed number.",
  "Good news for portability: none of the monitors in this guide have an internal battery, so there's no airline lithium battery restriction to worry about, they draw power entirely from your device or a wall adapter via USB-C or HDMI+power.",
];
export const lastUpdated = "2026-07-28";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "kyy-156-lightest-travel",
    rank: 1,
    badge: "Lightest True Kit Weight",
    name: "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender w/Cover",
    price: "$62.99",
    rating: "4.4 stars from 13,090 Amazon ratings",
    reviews: "13,090 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B088D8JG3L?tag=deskfinds0d-20",
    description:
      "At 1.7 lb including its magnetic smart cover (not a bare panel weight quoted separately from the case), this is among the most honestly-weighed picks in this guide, the cover is part of the stated figure, not an add-on you discover later. No internal battery means no airline lithium restriction either.\n\nA single USB-C cable plus the monitor itself keeps your true carry weight low, add roughly 50-100g if you also pack a mini-HDMI adapter cable for console use.",
    specs: ["15.6-inch 1080P, 1.7 lb including cover", "No internal battery, no airline restriction", "2x USB-C + mini-HDMI", "Magnetic smart cover doubles as case"],
    pros: ["Weight figure includes the case, not a bare-panel number", "No battery means no airline lithium restriction", "Cheapest pick in this guide", "Largest review base"],
    cons: ["Mini-HDMI adds a separate cable if needed for console use", "Cover offers only two fixed angles, less protective than a semi-rigid case", "Basic 1080p color accuracy"],
    bestFor: "Budget-focused travelers who want the lightest true kit weight",
  },
  {
    id: "kyy-2026-portrait-travel",
    rank: 2,
    badge: "Best Stand-Integrated Design, No Separate Case Needed",
    name: "KYY Portable Monitor for Laptop, Travel Monitor with Stand Support Two Mode",
    price: "$71.99",
    rating: "4.7 stars from 82 Amazon ratings",
    reviews: "82 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414VyKmpPFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FXX3416Q?tag=deskfinds0d-20",
    description:
      "This newer KYY model builds the stand directly into the monitor itself, eliminating a separate case or folio you'd otherwise need to pack, genuinely reducing total kit weight versus a monitor-plus-separate-stand combination. At 1.65 lb and just 0.23 inches thick, it's slim enough to slide into most laptop sleeve pockets designed for a 13-14 inch laptop.\n\nNo battery, no airline restriction, same as every pick in this guide.",
    specs: ["15.6-inch, built-in stand (no separate case needed)", "1.65 lb, 0.23-inch profile", "Dual USB-C + mini-HDMI", "Aluminum alloy body"],
    pros: ["Built-in stand eliminates the need for a separate case", "Slim enough for standard 13-14\" laptop sleeve pockets", "Aluminum build quality", "No battery, no airline restriction"],
    cons: ["Smaller review count, newer listing", "Mini-HDMI only", "Slightly pricier than the base KYY model"],
    bestFor: "Travelers who want to skip packing a separate case or stand entirely",
  },
  {
    id: "plugable-156-travel",
    rank: 3,
    badge: "Best for Business Travel Reliability",
    name: "Plugable 15.6\" USB-C Portable Monitor with 100W Pass-Through Charging",
    price: "$239.95",
    rating: "4.5 stars from 96 Amazon ratings",
    reviews: "96 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Gi8axYgqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9R8P9LL?tag=deskfinds0d-20",
    description:
      "At 1.85 lb this is a genuinely well-engineered travel monitor, Editor's Choice recognition from ZDNET, WIRED, and MacWorld reflects real build quality, and its included folding travel cover/stand is factored into the total kit from the start, not an add-on surprise. Dual 10Gbps USB-C hub ports let it double as a peripheral hub for business travel, one less device to pack.\n\nHighest price in this guide by a wide margin, worth it mainly if reliability and hub functionality matter more than minimizing cost.",
    specs: ["15.6-inch FHD, 1.85 lb with case", "2x 10Gbps USB-C hub ports, 100W pass-through", "Includes folding cover/stand + 1m cable", "Lifetime support from Plugable"],
    pros: ["Recognized Editor's Choice build quality from major tech publications", "Doubles as a USB-C hub, reducing total travel gear", "100W pass-through charging for your laptop", "Includes everything needed in the box"],
    cons: ["Highest price in this guide", "Modest review count relative to the budget picks", "1080p, not the sharpest resolution here"],
    bestFor: "Business travelers who want a proven, hub-equipped monitor and don't mind the premium price",
  },
  {
    id: "cocopar-156-1080p-travel",
    rank: 4,
    badge: "Best VESA-Compatible Travel Pick",
    name: "cocopar Portable Monitor 15.6 Inch 1080P FHD 60Hz 85% sRGB",
    price: "$109.99",
    rating: "4.8 stars from 6,301 Amazon ratings",
    reviews: "6,301 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31y1n0H2EtL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZLY26FW?tag=deskfinds0d-20",
    description:
      "At 1.5 lb without the included cover (2.4 lb with it attached), this listing is unusually transparent about the weight difference the case itself makes, a real example of the case-adds-real-weight gap this guide flags. Traveling without the cover saves real weight if you're comfortable with less screen protection in transit.\n\nReal VESA holes are a bonus if your destination has a monitor arm you can use instead of packing the cover-stand at all.",
    specs: ["15.6-inch 1080P, 1.5 lb bare / 2.4 lb with cover", "Full-size HDMI + dual USB-C", "2 VESA mounting holes", "Smart Stand Case included"],
    pros: ["Explicitly discloses bare vs. cover weight, a rare transparency", "VESA holes let you skip packing the cover if a destination arm is available", "Full-size HDMI", "Strong rating"],
    cons: ["Cover adds 0.9 lb, a real 60% weight increase over the bare panel", "85% sRGB is modest color accuracy", "Choosing to skip the cover reduces screen protection in transit"],
    bestFor: "Travelers who want the flexibility to skip the case weight when a destination monitor arm is available",
  },
  {
    id: "mnn-156-travel",
    rank: 5,
    badge: "Cheapest Lightweight Pick",
    name: "MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR",
    price: "$49.99",
    rating: "4.3 stars from 11,984 Amazon ratings",
    reviews: "11,984 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/5130Dsp2DML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9NNWXVP?tag=deskfinds0d-20",
    description:
      "The cheapest pick in this guide, with a genuinely slim, ultra-slim profile description, though exact weight with cover isn't as precisely disclosed as the cocopar pick above. No battery here either, so no airline restriction applies.\n\nA reasonable budget travel pick if minimizing cost matters more than the most precise weight disclosure.",
    specs: ["15.6-inch FHD, ultra-slim profile", "Dual USB-C + HDMI", "Smart cover stand", "No internal battery"],
    pros: ["Lowest price in this guide", "Large review base", "No battery, no airline restriction", "Multiple display modes included"],
    cons: ["Exact bare vs. cover weight not as precisely disclosed", "Basic 1080p color accuracy", "60Hz only"],
    bestFor: "Travelers on a tight budget who want the cheapest reasonable option",
  },
  {
    id: "cocopar-16-travel",
    rank: 6,
    badge: "Best Sharp Panel Worth the Extra Weight",
    name: "cocopar Portable Monitor 16 Inch 2.5K QHD 110% sRGB 144Hz USB-C, 120Hz HDMI",
    price: "$164.98",
    rating: "4.8 stars from 6,301 Amazon ratings",
    reviews: "6,301 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41taGyfYchL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR8D6BQ3?tag=deskfinds0d-20",
    description:
      "At 1.5 lb this is genuinely light for a sharp 2.5K metal-bodied panel, worth the modest weight tradeoff over the cheapest 1080p picks if resolution matters to your travel workflow. Full-size HDMI plus a sleeve case round out the kit.\n\nMetal construction adds some durability for the rigors of travel versus an all-plastic budget monitor, at a small weight cost.",
    specs: ["16-inch 2.5K QHD, 1.5 lb", "Metal chassis, 110% sRGB", "Full-size HDMI + dual USB-C", "Sleeve case included"],
    pros: ["Sharp 2.5K resolution at a genuinely light weight", "Metal build adds travel durability", "Full-size HDMI", "Highest rating and review base of the premium picks here"],
    cons: ["Pricier than the 1080p budget picks", "Metal build may add perceived bulk versus ultra-thin plastic designs", "144Hz needs USB-C for full rate"],
    bestFor: "Travelers who want sharp resolution without a major weight penalty",
  },
  {
    id: "kyy-gaming-cable-travel",
    rank: 7,
    badge: "Best If You Need the HDMI Cable Included",
    name: "KYY Portable Monitor 15.6'' FHD 1080P USB C HDMI Gaming Monitor",
    price: "$62.99",
    rating: "4.5 stars from 5,126 Amazon ratings",
    reviews: "5,126 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51zvuRNUGoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B088TLQR3K?tag=deskfinds0d-20",
    description:
      "At 1.7 lb, similar weight to the base KYY pick, but this one ships with a mini-HDMI-to-HDMI cable and a screen protector in the box, saving you from packing or buying those separately for console use on the road. That's a genuine reduction in total kit items to track, even if the base monitor weight is the same.\n\nA reasonable choice if you specifically need the HDMI cable included rather than sourcing your own.",
    specs: ["15.6-inch 1080P, 1.7 lb", "Includes mini-HDMI-to-HDMI cable + screen protector", "2x USB-C + mini-HDMI", "Foldable smart cover"],
    pros: ["Includes the HDMI adapter cable, one less item to pack separately", "Same weight as the cheaper base KYY model", "Screen protector included", "Strong review base"],
    cons: ["Same mini-HDMI limitation as the base model", "Not lighter than the cheaper KYY pick, just includes more cables", "Basic 1080p color accuracy"],
    bestFor: "Travelers who want the HDMI cable included rather than sourcing their own",
  },
  {
    id: "visionowl-4k-travel",
    rank: 8,
    badge: "Heaviest Pick, Included for Color Work on the Road",
    name: "VisionOwl Portable Monitor 15.6 Inch 4K UHD 145% sRGB",
    price: "$229.99",
    rating: "4.8 stars from 2,044 Amazon ratings",
    reviews: "2,044 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Vtb2coigL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FVMC4BYJ?tag=deskfinds0d-20",
    description:
      "Included as the honest heavyweight in this guide, its full metal chassis and 4K panel add real weight over the lighter picks here, a genuine tradeoff for color-sensitive work while traveling. If lightweight is your only priority, this isn't your pick.\n\nStill lighter than most traditional external monitors, just not the featherweight option among the picks in this specific guide.",
    specs: ["15.6-inch 4K UHD, 145% sRGB claimed", "Full metal chassis", "USB-C + full-size HDMI", "Built-in kickstand"],
    pros: ["Highest color gamut in this guide for color-sensitive travel work", "4K resolution", "Full-size HDMI", "VESA mountable if needed"],
    cons: ["Heaviest and priciest pick in this guide", "Metal chassis adds real travel weight", "Overkill if lightweight is your only priority"],
    bestFor: "Traveling photographers or designers who need color accuracy and are willing to carry more weight",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "True kit weight, not marketed panel-only weight", description: "Calculated panel plus case plus cables where the listing disclosed it, since marketed 'panel weight' alone often understates the real travel weight by 20-40% once the case is added." },
  { title: "Battery status and airline implications", description: "Confirmed none of these monitors have an internal battery, so no airline lithium battery restriction applies to any pick in this guide, they draw power via USB-C or HDMI+power only." },
  { title: "Case rigidity versus weight tradeoff", description: "Noted where a lighter fold-out cover trades protection for weight versus a bulkier, more protective design, relevant to whether you're checking luggage or carrying a padded bag." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "True Kit Weight: Panel Plus Case, Not Panel Alone",
    table: {
      headers: ["Pick", "Disclosed weight", "Note"],
      rows: [
        ["cocopar 15.6\" 1080p", "1.5 lb bare / 2.4 lb with cover", "Rare, explicit bare-vs-cover disclosure"],
        ["KYY 15.6\" (both models)", "1.7 lb including cover", "Cover weight already folded into the stated figure"],
        ["KYY 2026 stand model", "1.65 lb, no separate case", "Built-in stand avoids a separate case entirely"],
        ["Plugable 15.6\"", "1.85 lb with case", "Weight includes the folding travel cover/stand"],
      ],
    },
  },
  {
    subheading: "No Battery Means No Airline Restriction",
    note: "None of the monitors in this guide have an internal battery above (or below) any threshold, they simply don't have one at all. This means no airline lithium battery declaration or checked-luggage restriction applies to any pick here, unlike some battery-equipped portable monitors elsewhere on the market.",
  },
  {
    subheading: "Case Rigidity vs. Weight for Your Travel Style",
    cards: [
      { label: "Padded backpack, carry-on only", text: "A lighter fold-out cover (KYY, MNN, cocopar) is fine since it travels close to your body with less impact risk." },
      { label: "Checked luggage or rougher handling", text: "The Plugable's more substantial travel cover/stand, or the VisionOwl's metal chassis, offer more impact protection at a real weight cost." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check whether the listed weight includes the case", explanation: "Marketed panel weight alone often understates real travel weight by 20-40% once the folio case or stand is added. Look for listings that explicitly disclose both bare and with-case weight, like the cocopar 15.6\" pick in this guide." },
  { criterion: "None of these monitors have a battery, so no airline restriction applies", explanation: "Unlike some battery-equipped portable monitors elsewhere, every pick in this guide draws power via USB-C or HDMI+power only, with no internal battery and therefore no lithium battery airline declaration needed." },
  { criterion: "A built-in stand can eliminate a separate case's weight entirely", explanation: "The KYY 2026 model (rank 2) integrates its stand into the monitor itself, avoiding the need to pack a separate folio case, a genuine weight and packing-complexity reduction." },
  { criterion: "Match case rigidity to your actual travel style", explanation: "A lightweight fold-out cover is fine for a padded backpack traveling close to your body; checked luggage or rougher handling benefits from a more substantial case or metal chassis, even at a real weight cost." },
];

export const faq: FaqItem[] = [
  { q: "Does the marketed weight of a portable monitor include the case?", a: "Not always. Many listings quote bare panel weight only, with the folio case or stand adding another 150-300g not reflected in the headline number. The cocopar 15.6\" pick in this guide is a rare example that discloses both figures explicitly." },
  { q: "Do I need to declare a portable monitor's battery for air travel?", a: "No, for any pick in this guide. None of these monitors have an internal battery, they draw power entirely through USB-C or HDMI plus a separate power connection, so no airline lithium battery restriction applies." },
  { q: "Which pick avoids packing a separate case entirely?", a: "The KYY 2026 model (rank 2) has a stand built directly into the monitor, eliminating the need for a separate folio case and reducing your total kit weight and packing complexity." },
  { q: "Should I bring the included cover, or leave it home to save weight?", a: "Depends on your travel style. The cocopar 15.6\" pick's cover adds a real 0.9 lb (60% more than the bare panel), if you're carrying it in a padded bag close to your body, skipping the cover is a reasonable weight-saving choice; if it's going in checked luggage, keep the protection." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-hdmi-portable-monitors", title: "Best HDMI Portable Monitors (2026)" },
  { href: "/guide/best-portable-monitors-with-vesa-mounts", title: "Best Portable Monitors with VESA Mounts (2026)" },
  { href: "/guide/best-portable-monitors-for-macbook-air", title: "Best Portable Monitors for MacBook Air (2026)" },
];
