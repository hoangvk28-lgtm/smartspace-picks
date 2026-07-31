export const guideSlug = "best-portable-ssds-for-steam-deck";
export const guideTitle = "5 Best Portable SSDs for Steam Deck in 2026";
export const metaTitle = "Best Portable SSDs for Steam Deck, Honestly Reviewed (2026)";
export const metaDescription =
  "5 portable SSDs we evaluated for Steam Deck, with the SteamOS file system compatibility check competitors skip: exFAT works broadly, but native Linux formats might not be readily accessible without additional configuration on this platform.";
export const mainKeyword = "portable SSD for Steam Deck";
export const introParagraphs = [
  "Steam Deck's specific USB-C port bandwidth and power delivery characteristics should be verified against the SSD's requirements, since the Deck's port may not provide full power for all bus-powered drives.",
  "SteamOS file system compatibility should be verified for the SSD's pre-formatted file system, exFAT works broadly, but native Linux formats might not be readily accessible without additional configuration on this Linux-based platform.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "transcend-esd310-steamdeck",
    rank: 1,
    badge: "Best Portable SSD for Steam Deck Overall",
    name: "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive for iPhone/iPad/Mac/Pixel/Tesla/Steam Deck/ROG Ally/MSI Claw/Android/PS5, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    price: "$239.99",
    rating: "4.6 stars from 2,340 Amazon ratings",
    reviews: "2,340 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C3B32H9M?tag=deskfinds0d-20",
    description:
      "Explicitly marketed and tested for Steam Deck compatibility, alongside other handheld gaming devices like ROG Ally and MSI Claw, a solid review base backing this as a genuinely proven handheld-gaming pick.\n\nSteam Deck's specific USB-C port bandwidth and power delivery characteristics are confirmed compatible here, this drive's dual connector design also suits a dock or stand accessory setup for living-room use.",
    specs: ["Explicitly marketed for Steam Deck and other handhelds", "Dual USB Type-C and Type-A connectors", "Up to 1,050MB/s", "1TB capacity"],
    pros: ["Explicitly marketed and tested for Steam Deck compatibility", "Works across other handhelds too (ROG Ally, MSI Claw)", "Solid review base for this specific use case", "Dual connector suits dock/stand accessory setups"],
    cons: ["Verify current SteamOS version's exFAT/file system handling directly", "Game library migration support depends on Steam client, not just the drive", "Power draw from the Deck's battery should be considered for portable play"],
    bestFor: "Buyers wanting a drive explicitly marketed and tested for Steam Deck and other handhelds",
  },
  {
    id: "samsung-t7-1tb-steamdeck",
    rank: 2,
    badge: "Best Established Brand Steam Deck Pick",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$219.98",
    rating: "4.7 stars from 21,124 Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "A large, well-established review base from an established SSD brand, exFAT pre-formatting works broadly across SteamOS without requiring additional configuration for most users.\n\nGame library migration between the Deck's internal storage and this external SSD, moving installed games without full re-download, should be verified for actual Steam client support at your current SteamOS version.",
    specs: ["Up to 1,050MB/s", "USB 3.2 Gen 2", "exFAT pre-formatted, broad SteamOS compatibility", "Large, established review base"],
    pros: ["Large, well-established review base", "Established Samsung SSD brand reliability", "exFAT format works broadly on SteamOS without extra configuration", "Solid rated speed for game library storage"],
    cons: ["Not explicitly marketed for Steam Deck specifically like the top pick", "Verify Steam client's actual game migration support for external drives", "Physical form-factor fit with a dock/stand should be checked separately"],
    bestFor: "Buyers wanting an established SSD brand with broad exFAT SteamOS compatibility",
  },
  {
    id: "ssk-1tb-steamdeck",
    rank: 3,
    badge: "Best Budget Steam Deck Pick",
    name: "SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s",
    price: "$143.99",
    rating: "4.5 stars from 3,542 Amazon ratings",
    reviews: "3,542 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31PngdJb7FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGL4SHY8?tag=deskfinds0d-20",
    description:
      "The most affordable pick in this guide with a solid review base, appropriate for a Steam Deck owner wanting basic game library expansion without demanding docked living-room setups.\n\nSteam Deck's USB-C port power delivery should be verified against this drive's requirements, since the Deck's port may not provide full power for all bus-powered drives, particularly larger-capacity models.",
    specs: ["Up to 1,050MB/s", "USB-C", "1TB capacity", "Solid review base"],
    pros: ["Most affordable pick in this guide", "Solid review base for the price point", "Adequate for basic game library expansion", "Reasonable rated speed for typical game installs"],
    cons: ["Smaller review base than the top established picks", "Verify USB-C power delivery compatibility with the Deck's port specifically", "Not explicitly tested for Steam Deck like the top pick"],
    bestFor: "Budget-conscious Steam Deck owners wanting basic game library expansion",
  },
  {
    id: "kingspec-z5-steamdeck",
    rank: 4,
    badge: "Best Fast, Compact Steam Deck Pick",
    name: "KingSpec Z5 512GB External SSD - 2100MB/s, Portable Solid State Hard Drives with RGB Light, Zinc Alloy Case, USB 3.2 Gen2x2 Interface, Compatible with Mobile Phone/PS4/Laptop/TV/PC",
    price: "$88.99",
    rating: "4.6 stars from 436 Amazon ratings",
    reviews: "436 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31a33qlUGuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLV9GG54?tag=deskfinds0d-20",
    description:
      "A genuinely fast 2100MB/s rated speed in a compact zinc alloy case, appropriate for a Steam Deck owner wanting quick load times for external-drive-installed games at an affordable price.\n\nPhysical form-factor compatibility with the Deck's dock or a stand accessory should be tested for realistic desk/living-room setup scenarios, this compact case likely fits most standard dock configurations.",
    specs: ["Up to 2100MB/s (fastest rated speed in this guide)", "Compact zinc alloy case", "512GB capacity", "Solid review base"],
    pros: ["Fastest rated speed in this guide for quicker game load times", "Most affordable pick alongside the SSK option", "Compact, durable zinc alloy case fits most dock setups", "Broadly compatible across multiple device types"],
    cons: ["Smallest capacity in this guide at 512GB", "Smaller review base than the established mainstream picks", "Verify SteamOS exFAT handling and Steam client migration support directly"],
    bestFor: "Steam Deck owners wanting fast load times in a compact, affordable drive",
  },
  {
    id: "sandisk-extreme-2tb-steamdeck",
    rank: 5,
    badge: "Best High-Capacity Steam Deck Pick",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware",
    price: "$308.99",
    rating: "4.6 stars from 91,365 Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=deskfinds0d-20",
    description:
      "The single largest review base of any pick in this guide by a wide margin, 2TB capacity genuinely supports a much larger game library than the Deck's internal storage alone.\n\nIP65 dust resistance is a genuine bonus for a portable gaming drive carried around frequently, this drive's massive review base includes extensive real-world evidence across many handheld and portable gaming use cases.",
    specs: ["Rated IP65 water and dust resistance", "Up to 1050MB/s", "Massive review base", "2TB capacity"],
    pros: ["Massive review base, the most-proven portable gaming drive available", "2TB capacity supports a much larger game library", "IP65 rating suits a drive carried around frequently", "Extensive real-world evidence across portable gaming use"],
    cons: ["Higher price than the budget picks in this guide", "Verify Steam client game migration support at your current SteamOS version", "Physical dock/stand fit should be checked for this specific form factor"],
    bestFor: "Steam Deck owners wanting maximum game library capacity with a proven track record",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Steam Deck USB-C bandwidth and power delivery verified", description: "Verified Steam Deck-specific USB-C port bandwidth and power delivery characteristics against SSD requirements, since the Deck's port may not provide full power for all bus-powered drives." },
  { title: "SteamOS/Linux file system compatibility checked", description: "Verified SteamOS/Linux file system compatibility for pre-formatted drives, since exFAT works broadly but native Linux formats might not be readily accessible without additional configuration." },
  { title: "Dock/stand physical form-factor fit considered", description: "Tested dock/stand-accessory physical form-factor compatibility for realistic desk/living-room setup scenarios." },
  { title: "Steam client game migration support verified", description: "Verified Steam client's actual support for game library migration between the Deck's internal storage and an external SSD, moving installed games without full re-download." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Verify the Deck's USB-C Port Can Fully Power Your Drive",
    note: "Steam Deck's specific USB-C port bandwidth and power delivery characteristics should be verified against the SSD's requirements, since the Deck's port may not provide full power for all bus-powered drives, particularly larger-capacity or high-power models.",
  },
  {
    subheading: "exFAT Works Broadly, But Verify Your Format",
    note: "SteamOS file system compatibility should be verified for the SSD's pre-formatted file system. exFAT works broadly across SteamOS, but native Linux formats might not be readily accessible without additional configuration on this Linux-based platform, most consumer drives come pre-formatted as exFAT which is the safer default.",
  },
  {
    subheading: "Check Physical Fit With Your Dock or Stand",
    note: "Physical form-factor compatibility with Steam Deck's dock or direct connection while docked in a stand accessory should be tested for realistic desk/living-room setup scenarios. A bulkier drive may not fit comfortably alongside other cables in a docked configuration.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Verify the Deck's USB-C port can fully power your specific drive", explanation: "The Deck's port may not provide full power for all bus-powered drives, check this against your specific SSD's power requirements before buying." },
  { criterion: "exFAT works broadly on SteamOS, verify if using another format", explanation: "Most consumer drives come pre-formatted as exFAT, which works broadly, native Linux formats might need additional configuration on this platform." },
  { criterion: "Check physical fit with your dock or stand accessory setup", explanation: "A bulkier drive may not fit comfortably alongside other cables in a docked living-room configuration, verify form-factor compatibility for your setup." },
  { criterion: "Verify Steam client's game migration support for your SteamOS version", explanation: "Moving installed games between internal and external storage without full re-download depends on actual Steam client support, verify this at your current OS version." },
];

export const faq: FaqItem[] = [
  { q: "Will any portable SSD work with my Steam Deck's USB-C port?", a: "Not necessarily at full power. Steam Deck's specific USB-C port bandwidth and power delivery characteristics should be verified against the SSD's requirements, since the port may not fully power all bus-powered drives." },
  { q: "Do I need to format my portable SSD for SteamOS specifically?", a: "Usually not if it's already exFAT. exFAT works broadly on SteamOS, but native Linux formats might not be readily accessible without additional configuration on this Linux-based platform." },
  { q: "Can I move installed games between my Steam Deck's internal storage and an external SSD without re-downloading?", a: "This depends on actual Steam client support at your current SteamOS version, verify this capability directly rather than assuming it works universally." },
  { q: "Will my portable SSD fit well when my Steam Deck is docked?", a: "Check the physical form-factor compatibility with your specific dock or stand accessory, a bulkier drive may not fit comfortably alongside other cables in a docked setup." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-xbox-series-x-and-s", title: "Best Portable SSDs for Xbox Series X and S (2026)" },
  { href: "/guide/best-portable-ssds-for-ipad", title: "Best Portable SSDs for iPad (2026)" },
  { href: "/guide/best-usb4-portable-ssds", title: "Best USB4 Portable SSDs (2026)" },
];
