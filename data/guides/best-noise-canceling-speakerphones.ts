export const guideSlug = "best-noise-canceling-speakerphones";
export const guideTitle = "6 Best Noise-Canceling Speakerphones in 2026";
export const metaTitle = "Best Noise-Canceling Speakerphones, Honestly Reviewed (2026)";
export const metaDescription =
  "6 speakerphones we evaluated for noise cancellation, with the distinction competitors blur: AI noise cancellation filters out background sound from what the mic picks up, it doesn't reduce echo or room reverb, a separate problem entirely.";
export const mainKeyword = "noise canceling speakerphone";
export const introParagraphs = [
  "AI noise cancellation filters background sound (typing, HVAC hum, street noise) out of what the microphone picks up, it's a separate feature from echo cancellation, which prevents your own speaker output from feeding back into the mic, competitors often conflate the two under one 'noise canceling' label.",
  "The number of physical microphones and their pickup radius matters more for real conference-room performance than a single 'AI noise canceling' marketing claim, more mics generally means better voice isolation across a larger table.",
];
export const lastUpdated = "2026-07-30";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "yealink-sp92-noisecancel",
    rank: 1,
    badge: "Best AI Noise Cancellation",
    name: "Yealink SP92 Conference Speaker and Microphone with AI Noise Cancellation, 20H Call Time, 13ft Pick-up, 360 Omni Mic 50mm Full-Duplex Speaker, Bluetooth 5.3 USB Speakerphone for Teams",
    price: "$60.20",
    rating: "4.2 stars from 127 Amazon ratings",
    reviews: "127 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F28HTJP3?tag=deskfinds0d-20",
    description:
      "Explicit AI noise cancellation filters background sound like typing or HVAC hum from your mic pickup, separate from the full-duplex echo cancellation that keeps your own speaker output from feeding back in. 13ft pickup radius and 360 omni mic genuinely cover a small meeting table.\n\nA genuinely affordable price for the feature set, though the review base is still modest compared to established Jabra and Anker alternatives.",
    specs: ["AI noise cancellation, full-duplex", "13ft mic pickup radius, 360° omni mic", "20H call time, Bluetooth 5.3", "USB and Bluetooth connectivity"],
    pros: ["Explicit AI noise cancellation distinct from echo cancellation", "Long 20H call time", "Good pickup radius for a small table", "Very competitive price"],
    cons: ["Smaller review base than Jabra/Anker alternatives", "Not certified for a specific platform like Zoom or Teams beyond general compatibility", "360° omni pickup may capture more room noise on an open floor plan"],
    bestFor: "Buyers who want explicit AI noise cancellation at a budget-friendly price",
  },
  {
    id: "anker-powerconf-noisecancel",
    rank: 2,
    badge: "Best Zoom-Certified Noise Cancellation",
    name: "Anker PowerConf Speakerphone, Zoom Certified Conference Speaker with 6 Mics",
    price: "$149.99",
    rating: "4.4 stars from 5,801 Amazon ratings",
    reviews: "5,801 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41x468UYHLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08CV6MGJH?tag=deskfinds0d-20",
    description:
      "6 physical microphones genuinely improve voice isolation across a table compared to a single-mic design, the real driver of noise-canceling performance in a real conference room, not just a marketing claim. Zoom certification confirms tested compatibility with that specific platform.\n\nLarge, well-established review base gives real-world confidence this holds up across many meeting environments.",
    specs: ["6 microphones, Zoom certified", "Echo cancellation, background noise reduction", "Bluetooth and USB connectivity", "Compact design"],
    pros: ["6 mics genuinely improve voice isolation over single-mic designs", "Zoom certified for confirmed platform compatibility", "Large, well-established review base", "Both echo and background noise handling"],
    cons: ["Higher price than the Yealink budget option", "Not explicitly certified for other platforms like Teams", "Bluetooth range may be limited in a larger room"],
    bestFor: "Buyers who want the most physical mics for real-world voice isolation, Zoom certified",
  },
  {
    id: "jabra-speak2-55-noisecancel",
    rank: 3,
    badge: "Best Premium Noise-Canceling Pick",
    name: "Jabra Speak2 55 Wireless Bluetooth Speakerphone (2025 Edition), Dark Grey",
    price: "$174.99",
    rating: "4.5 stars from 67 Amazon ratings",
    reviews: "67 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31EhqapD3KL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4GCS5WG?tag=deskfinds0d-20",
    description:
      "Jabra's 2025 edition brings genuinely refined noise and echo handling from a company with a long track record in professional audio conferencing, worth the premium if call clarity is the priority over price.\n\nStill a newer release with a modest review count so far, weigh that against the strong early rating and Jabra's established reputation.",
    specs: ["Wireless Bluetooth, 2025 edition", "Background noise and echo cancellation", "Premium build quality", "Compact wireless design"],
    pros: ["Refined noise and echo handling from an established audio brand", "Strong early rating", "Premium build quality", "Wireless flexibility"],
    cons: ["Highest price in this guide", "Modest review count as a newer release", "No explicit platform certification listed"],
    bestFor: "Buyers who prioritize refined call clarity from an established audio brand",
  },
  {
    id: "jabra-speak2-40-noisecancel",
    rank: 4,
    badge: "Best 4-Mic Noise-Canceling Pick",
    name: "Jabra Speak2 40 Portable Speakerphone - 4 Noise-Cancelling Mics, Full-Range 50mm Portable Speaker, Wideband Audio and USB-A and USB-C Connections - Certified for Zoom and Google Meet - Dark Grey",
    price: "$146.99",
    rating: "4.3 stars from 68 Amazon ratings",
    reviews: "68 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31oHJerSTwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BWKTR73Y?tag=deskfinds0d-20",
    description:
      "4 noise-cancelling mics with certification for both Zoom and Google Meet specifically, genuinely useful if your team switches between platforms rather than standardizing on one. USB-A and USB-C connections cover most laptop setups.\n\nA smaller review base than the top Anker pick, but dual-platform certification is a real differentiator most single-platform-certified competitors don't offer.",
    specs: ["4 noise-cancelling mics", "Certified for Zoom and Google Meet", "USB-A and USB-C connections", "Wideband audio"],
    pros: ["Certified for both Zoom and Google Meet specifically", "4 dedicated noise-cancelling mics", "Both USB-A and USB-C included", "Portable form factor"],
    cons: ["Smaller review base than the top Anker pick", "Fewer mics than the 6-mic Anker option", "Higher price than the Yealink budget pick"],
    bestFor: "Buyers who switch between Zoom and Google Meet and want certified compatibility with both",
  },
  {
    id: "emeet-m0plus-noisecancel",
    rank: 5,
    badge: "Best Budget 4-Mic Noise-Canceling Pick",
    name: "EMEET M0 Plus Conference Speaker and Microphone, 4 Mics 360° Voice Pickup",
    price: "$52.23",
    rating: "4.3 stars from 1,596 Amazon ratings",
    reviews: "1,596 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51zfICZQrEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVZLS5GZ?tag=deskfinds0d-20",
    description:
      "4 mics with 360° voice pickup at a genuinely affordable price, a solid review base gives real-world confidence at this budget tier. 360° pickup means it's designed for a small round table rather than a directional setup.\n\nNo specific platform certification listed, but works over standard USB/Bluetooth with any video conferencing software.",
    specs: ["4 mics, 360° voice pickup", "USB and Bluetooth connectivity", "Compact design", "Budget-friendly"],
    pros: ["Very affordable for a 4-mic design", "Solid review base for the price", "360° pickup suits a small round table", "Compatible with any standard video conferencing software"],
    cons: ["No specific platform certification", "Fewer premium features than Jabra/Anker options", "360° pickup less directional for narrow rectangular tables"],
    bestFor: "Budget-conscious buyers who want a solid 4-mic noise-canceling option",
  },
  {
    id: "jabra-speak510-2025-noisecancel",
    rank: 6,
    badge: "Best Portable Noise-Canceling Pick",
    name: "Jabra Speak 510 (2025 Edition) Portable USB Bluetooth Speaker, Black",
    price: "$97.79",
    rating: "4.7 stars from 164 Amazon ratings",
    reviews: "164 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/413BTmTk1LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC3XV5DK?tag=deskfinds0d-20",
    description:
      "The highest rating of any pick in this guide, genuine evidence of strong call quality and noise handling from Jabra's refreshed 2025 edition. Portable USB and Bluetooth design suits moving between a desk and a small meeting room.\n\nModest review count as a newer release, but the high rating and Jabra's track record make this a strong portable option.",
    specs: ["Portable USB Bluetooth speaker, 2025 edition", "Background noise reduction", "Compact, travel-friendly", "USB and Bluetooth connectivity"],
    pros: ["Highest rating of any pick in this guide", "Genuinely portable for moving between spaces", "Established Jabra audio quality", "Both USB and Bluetooth connectivity"],
    cons: ["Modest review count as a newer release", "Fewer mics than the dedicated conference-room picks", "No specific platform certification listed"],
    bestFor: "Buyers who need a portable noise-canceling speakerphone for a desk that doubles as a meeting spot",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Noise cancellation vs. echo cancellation, treated as separate features", description: "Distinguished AI noise cancellation, which filters background sound from the mic pickup, from echo cancellation, which prevents speaker output from feeding back in, since competitors often blur these under one label." },
  { title: "Physical mic count as the real driver of voice isolation", description: "Weighed the number of physical microphones and pickup radius more heavily than marketing claims alone, since more mics genuinely improve voice isolation across a real conference table." },
  { title: "Platform certification as confirmed, not assumed, compatibility", description: "Noted which picks carry explicit Zoom, Google Meet, or Teams certification versus general USB/Bluetooth compatibility, since certified compatibility reflects real platform testing." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Noise Cancellation and Echo Cancellation Are Different Problems",
    note: "AI noise cancellation filters background sound (typing, HVAC hum, street noise) out of what the microphone picks up. Echo cancellation is a separate feature that prevents your own speaker output from feeding back into the mic. A speakerphone can have one without the other, check both specifically rather than assuming a single 'noise canceling' label covers everything.",
  },
  {
    subheading: "Mic Count Matters More Than the Marketing Label",
    table: {
      headers: ["Mic count", "Best for", "Pick"],
      rows: [
        ["6 mics", "Larger table, best voice isolation", "Anker PowerConf (rank 2)"],
        ["4 mics", "Small-to-medium table", "Jabra Speak2 40 (rank 4) or EMEET M0 Plus (rank 5)"],
        ["Portable single/dual mic", "Desk that doubles as meeting spot", "Jabra Speak 510 (rank 6)"],
      ],
    },
  },
  {
    subheading: "Certified Platform Compatibility",
    note: "If your team standardizes on one video platform, look for explicit certification (Zoom, Google Meet, Teams) rather than assuming general USB/Bluetooth compatibility performs identically. Certified devices have been specifically tested against that platform's audio pipeline.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Noise cancellation and echo cancellation are separate features", explanation: "AI noise cancellation filters background sound from the mic pickup, echo cancellation prevents speaker feedback, a speakerphone can have strong performance in one without the other, check both specifically." },
  { criterion: "Physical mic count drives real voice isolation more than marketing claims", explanation: "More physical microphones with a wider pickup radius genuinely improve voice isolation across a real conference table, prioritize this over a generic 'AI noise canceling' label." },
  { criterion: "Platform certification confirms tested compatibility", explanation: "Explicit Zoom, Google Meet, or Teams certification reflects real platform-specific testing, general USB/Bluetooth compatibility works but isn't the same guarantee." },
  { criterion: "360° pickup suits round tables, directional designs suit rectangular ones", explanation: "A 360° omni mic design works best for a small round table, while a more directional pickup pattern can perform better across a narrow rectangular table, match pickup pattern to your actual room shape." },
];

export const faq: FaqItem[] = [
  { q: "Is noise cancellation the same as echo cancellation on a speakerphone?", a: "No. AI noise cancellation filters background sound like typing or HVAC hum out of what the mic picks up. Echo cancellation is a separate feature that prevents your own speaker output from feeding back into the mic. Check both specifically." },
  { q: "Does more microphones mean better noise cancellation?", a: "Generally yes for real-world voice isolation across a table. More physical mics with a wider pickup radius genuinely improve how well a speakerphone isolates voices in a real conference room, more so than a single marketing claim." },
  { q: "Do I need a platform-certified speakerphone?", a: "If your team standardizes on Zoom, Google Meet, or Teams, a certified device has been specifically tested against that platform's audio pipeline. General USB/Bluetooth compatibility works with most software but isn't the same tested guarantee." },
  { q: "What's the difference between 360° and directional mic pickup?", a: "A 360° omni mic design works best for a small round table with people seated all around. A more directional pickup pattern can perform better across a narrow rectangular table where voices come from a more limited range of angles." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-speakerphones-for-zoom", title: "Best Speakerphones for Zoom (2026)" },
  { href: "/guide/best-speakerphones-for-small-meeting-rooms", title: "Best Speakerphones for Small Meeting Rooms (2026)" },
  { href: "/guide/best-speakerphones-for-google-meet", title: "Best Speakerphones for Google Meet (2026)" },
];
