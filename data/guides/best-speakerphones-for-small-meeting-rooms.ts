export const guideSlug = "best-speakerphones-for-small-meeting-rooms";
export const guideTitle = "5 Best Speakerphones for Small Meeting Rooms in 2026";
export const metaTitle = "Best Speakerphones for Small Meeting Rooms, Honestly Reviewed (2026)";
export const metaDescription =
  "5 speakerphones we evaluated for small meeting rooms, with the pickup-radius math competitors skip: a device's stated pickup radius assumes ideal conditions, real rooms with hard surfaces need real margin.";
export const mainKeyword = "speakerphone for small meeting room";
export const introParagraphs = [
  "A speakerphone's stated pickup radius (e.g., 13ft) assumes close-to-ideal acoustic conditions, small meeting rooms with hard surfaces, glass walls, or minimal sound absorption will perform worse in practice, buy a device rated for more radius than your room's actual size to build in real margin.",
  "Mic count matters more than raw pickup radius for a small room with several people spread around a table, since isolating individual voices from each other is a different problem than simply hearing sound from further away.",
];
export const lastUpdated = "2026-07-30";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "anker-powerconf-smallroom",
    rank: 1,
    badge: "Best 6-Mic Pick for Small Meeting Rooms",
    name: "Anker PowerConf Speakerphone, Zoom Certified Conference Speaker with 6 Mics",
    price: "$149.99",
    rating: "4.4 stars from 5,801 Amazon ratings",
    reviews: "5,801 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41x468UYHLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08CV6MGJH?tag=deskfinds0d-20",
    description:
      "6 physical microphones genuinely handle voice isolation across a small meeting table with several people, a different challenge from simply picking up sound from a distance. Zoom certified and backed by a large, well-established review base.\n\nGenuinely well-suited to a small dedicated meeting room rather than an open desk, the mic array is built for a table setting.",
    specs: ["6 microphones, Zoom certified", "Echo cancellation, background noise reduction", "Bluetooth and USB connectivity", "Table-centered design"],
    pros: ["6 mics genuinely handle a small meeting table with several people", "Large, well-established review base", "Zoom certified", "Strong echo and noise handling"],
    cons: ["Higher price than budget alternatives", "Not certified for other platforms beyond Zoom", "Bluetooth range may need testing in rooms with interference"],
    bestFor: "Small meeting rooms hosting several people around a table",
  },
  {
    id: "yealink-sp92-smallroom",
    rank: 2,
    badge: "Best Pickup Radius for a Small Room",
    name: "Yealink SP92 Conference Speaker and Microphone with AI Noise Cancellation, 20H Call Time, 13ft Pick-up, 360 Omni Mic 50mm Full-Duplex Speaker, Bluetooth 5.3 USB Speakerphone for Teams",
    price: "$60.20",
    rating: "4.2 stars from 127 Amazon ratings",
    reviews: "127 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F28HTJP3?tag=deskfinds0d-20",
    description:
      "An explicit 13ft pickup radius spec, genuinely useful for planning around a small meeting room's actual dimensions, remember this assumes near-ideal conditions, so a room with hard surfaces or glass will perform somewhat below that stated figure.\n\n360° omni mic and full-duplex speaker at a genuinely affordable price for a dedicated small-room device.",
    specs: ["13ft pickup radius, 360° omni mic", "AI noise cancellation, full-duplex", "20H call time, Bluetooth 5.3", "Budget-friendly"],
    pros: ["Explicit pickup radius spec aids room-size planning", "Very affordable for a dedicated small-room device", "AI noise cancellation", "Long call time"],
    cons: ["Stated radius assumes near-ideal acoustic conditions, build in margin for hard-surface rooms", "Smaller review base than Anker/Jabra alternatives", "360° pickup may capture hallway noise near a door"],
    bestFor: "Buyers who want an explicit pickup-radius spec to plan around their room's actual size",
  },
  {
    id: "jabra-speak2-40-smallroom",
    rank: 3,
    badge: "Best Dual-Certified Small Room Pick",
    name: "Jabra Speak2 40 Portable Speakerphone - 4 Noise-Cancelling Mics, Full-Range 50mm Portable Speaker, Wideband Audio and USB-A and USB-C Connections - Certified for Zoom and Google Meet - Dark Grey",
    price: "$146.99",
    rating: "4.3 stars from 68 Amazon ratings",
    reviews: "68 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31oHJerSTwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BWKTR73Y?tag=deskfinds0d-20",
    description:
      "4 noise-cancelling mics genuinely suited to a small meeting room's table size, certified for both Zoom and Google Meet if your small room hosts calls on either platform. Full-range 50mm speaker for clear audio playback in an enclosed space.\n\nA smaller review base than the top Anker pick, but dual certification adds real flexibility for a shared small meeting room.",
    specs: ["4 noise-cancelling mics, certified for Zoom and Google Meet", "USB-A and USB-C connections", "Full-range 50mm speaker", "Portable design"],
    pros: ["4 mics genuinely fit a small meeting room's table size", "Dual platform certification for Zoom and Google Meet", "Full-range speaker for clear playback in an enclosed room", "Both USB-A and USB-C connections"],
    cons: ["Smaller review base than the top Anker pick", "Fewer mics than the 6-mic option", "Higher price relative to its review count"],
    bestFor: "Small meeting rooms that host both Zoom and Google Meet calls",
  },
  {
    id: "emeet-m0plus-smallroom",
    rank: 4,
    badge: "Best Budget Small Room Pick",
    name: "EMEET M0 Plus Conference Speaker and Microphone, 4 Mics 360° Voice Pickup",
    price: "$52.23",
    rating: "4.3 stars from 1,596 Amazon ratings",
    reviews: "1,596 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51zfICZQrEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVZLS5GZ?tag=deskfinds0d-20",
    description:
      "4 mics with 360° voice pickup at a genuinely affordable price for a small dedicated meeting room, solid review base gives real-world confidence at this budget tier without paying for premium certification.\n\n360° pickup pattern suits a small round table specifically, verify your room's table shape before buying.",
    specs: ["4 mics, 360° voice pickup", "USB and Bluetooth connectivity", "Compact design", "Budget-friendly"],
    pros: ["Very affordable for a 4-mic small-room design", "Solid review base for the price", "360° pickup suits a small round table", "Compact, unobtrusive design"],
    cons: ["No specific platform certification", "360° pickup less directional for narrow rectangular tables", "Fewer premium features than certified alternatives"],
    bestFor: "Budget-conscious small meeting rooms with a round table",
  },
  {
    id: "jabra-speak510uc-smallroom",
    rank: 5,
    badge: "Best Proven Track Record for Small Rooms",
    name: "Jabra Speak 510 UC Wireless Bluetooth Speakerphone – Outstanding Sound Quality, Portable Conference Speaker for Holding Meetings Anywhere - Certified for Zoom & Google Meet",
    price: "$119.49",
    rating: "4.7 stars from 5,905 Amazon ratings",
    reviews: "5,905 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Hwa9J+9XL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00AQUO5RI?tag=deskfinds0d-20",
    description:
      "The highest rating of any pick in this guide on a large, well-established review base, strong long-term evidence of reliable performance in small meeting room settings specifically. Portable wireless design if the room doubles for other uses.\n\nCertified for both Zoom and Google Meet, genuinely flexible for whatever platform your small room's calls run on.",
    specs: ["Wireless Bluetooth, certified for Zoom and Google Meet", "Portable conference speaker", "Established sound quality reputation", "Long track record"],
    pros: ["Highest rating of any pick in this guide", "Large, well-established review base", "Certified for both Zoom and Google Meet", "Portable if the room serves multiple purposes"],
    cons: ["Fewer physical mics than the 6-mic Anker pick", "Older design than 2025-edition alternatives", "Wireless-only, no wired USB fallback confirmed"],
    bestFor: "Small meeting rooms that want the most-proven, longest track record option",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Pickup radius as a planning spec, not a guarantee", description: "Noted that stated pickup radius figures assume near-ideal acoustic conditions, and recommended buying with real margin above your room's actual dimensions for rooms with hard surfaces or glass." },
  { title: "Mic count for voice isolation, distinct from raw pickup distance", description: "Weighed physical mic count for handling several people around a small table, a different challenge from simply hearing sound from further away, which pickup radius alone measures." },
  { title: "Platform certification for whichever software the room actually uses", description: "Checked which picks carry Zoom, Google Meet, or dual certification, relevant to matching a small meeting room's speakerphone to the platform it will actually run." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Buy More Pickup Radius Than Your Room's Actual Size",
    note: "A stated pickup radius (like 13ft) assumes near-ideal acoustic conditions. Small meeting rooms with hard surfaces, glass walls, or minimal sound absorption will perform somewhat below that stated figure in practice. Build in real margin, don't buy a device rated for exactly your room's dimensions.",
  },
  {
    subheading: "Mic Count vs. Pickup Radius, Different Problems",
    note: "Mic count drives how well a device isolates individual voices from each other around a table. Pickup radius measures how far away it can hear sound at all. A small room with several people needs both handled well, prioritize mic count for voice clarity, pickup radius for room coverage.",
  },
  {
    subheading: "Matching Picks to Room Setup",
    table: {
      headers: ["Room setup", "Pick"],
      rows: [
        ["Several people around a table", "Anker PowerConf (rank 1, 6 mics)"],
        ["Known room dimensions, want explicit radius spec", "Yealink SP92 (rank 2, 13ft radius)"],
        ["Small round table, budget-conscious", "EMEET M0 Plus (rank 4)"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Stated pickup radius assumes near-ideal acoustic conditions", explanation: "A room with hard surfaces, glass walls, or minimal sound absorption will perform below a device's stated pickup radius, buy with real margin above your room's actual size." },
  { criterion: "Mic count and pickup radius solve different problems", explanation: "Mic count drives voice isolation between multiple people at a table, pickup radius measures how far away sound can be heard at all, a small room needs both handled well." },
  { criterion: "360° pickup suits round tables, directional patterns suit rectangular rooms", explanation: "Match the mic's pickup pattern to your specific small room's table shape rather than assuming any pickup pattern works equally well everywhere." },
  { criterion: "Platform certification should match what the room actually runs", explanation: "If your small meeting room is dedicated to one video platform, prioritize that specific certification, if it hosts multiple platforms, a dual-certified pick offers more flexibility." },
];

export const faq: FaqItem[] = [
  { q: "How much pickup radius do I need for a small meeting room?", a: "Buy more than your room's actual dimensions suggest. Stated pickup radius figures assume near-ideal acoustic conditions, a room with hard surfaces or glass walls will perform somewhat below that stated figure in practice." },
  { q: "Does mic count matter more than pickup radius for a small room?", a: "They solve different problems. Mic count drives how well a device isolates individual voices from each other around a table, pickup radius measures how far away it can hear sound at all. A small room with several people needs both." },
  { q: "What pickup pattern works best for a small meeting room?", a: "360° omni pickup suits a small round table, while a more directional pickup pattern can perform better across a narrow rectangular table, match the pattern to your room's actual table shape." },
  { q: "Do I need a platform-certified speakerphone for a small meeting room?", a: "If the room is dedicated to one video platform, a certified device offers a stronger tested guarantee. If it hosts calls on multiple platforms, a dual-certified pick like the Jabra Speak2 40 offers more flexibility." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-speakerphones-for-two-person-offices", title: "Best Speakerphones for Two-Person Offices (2026)" },
  { href: "/guide/best-noise-canceling-speakerphones", title: "Best Noise-Canceling Speakerphones (2026)" },
  { href: "/guide/best-speakerphones-for-zoom", title: "Best Speakerphones for Zoom (2026)" },
];
