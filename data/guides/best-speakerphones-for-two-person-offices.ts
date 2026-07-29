export const guideSlug = "best-speakerphones-for-two-person-offices";
export const guideTitle = "5 Best Speakerphones for Two-Person Offices in 2026";
export const metaTitle = "Best Speakerphones for Two-Person Offices, Honestly Reviewed (2026)";
export const metaDescription =
  "5 speakerphones we evaluated for two-person offices, where a 6-mic conference-room design is genuinely overkill, a compact 1-2 mic speakerphone handles close-range calls just as well for a fraction of the price.";
export const mainKeyword = "speakerphone for two person office";
export const introParagraphs = [
  "A 6-mic conference-room speakerphone is genuinely overkill for a two-person office where both people sit within a few feet of the device, a compact design with fewer mics handles this close-range use case just as well, often for a fraction of the price.",
  "Portability matters more in a small shared office than a dedicated meeting room, a device that's easy to move between two people's desks or hand-off during a call is a real practical advantage this use case has that larger rooms don't.",
];
export const lastUpdated = "2026-07-30";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41W4B0kTNoL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "anker-powerconf-s330-twoperson",
    rank: 1,
    badge: "Best Compact Pick for Two-Person Offices",
    name: "Anker PowerConf S330 USB Speakerphone for Home Office, Plug and Play",
    price: "$71.99",
    rating: "4.4 stars from 1,837 Amazon ratings",
    reviews: "1,837 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41W4B0kTNoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FJ7LWX4?tag=deskfinds0d-20",
    description:
      "Explicitly marketed for home office use, genuinely right-sized for a two-person space rather than a full conference room, no need to pay for a 6-mic design when both people sit within a few feet of the device. Simple USB plug-and-play setup with no configuration needed.\n\nSolid, well-established review base from Anker, a brand with a strong general track record in this category.",
    specs: ["USB plug-and-play, home office focused", "Compact single-device design", "No configuration needed", "Anker build quality"],
    pros: ["Right-sized for a two-person office rather than overkill conference gear", "Simple USB plug-and-play setup", "Solid, well-established review base", "Reasonable price for close-range use"],
    cons: ["Not designed for a larger table or room", "No specific platform certification listed", "Fewer mics than dedicated conference-room picks, appropriately so"],
    bestFor: "Two-person offices that want a simple, right-sized USB speakerphone",
  },
  {
    id: "emeet-m1a-twoperson",
    rank: 2,
    badge: "Best Budget Two-Person Pick",
    name: "EMEET M1A USB Speakerphone, Built-in Mics, 360° Voice Pickup, Plug&Play",
    price: "$63.99",
    rating: "4.4 stars from 435 Amazon ratings",
    reviews: "435 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51Iv2SVmQfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09WWYKP42?tag=deskfinds0d-20",
    description:
      "A genuinely simple, affordable USB plug-and-play design, more than adequate for two people talking at close range to a video call. 360° pickup easily covers a small shared desk without needing a larger conference-room mic array.\n\nSolid rating base for the price, a sensible choice if you don't want to overspend on conference-room features you won't use.",
    specs: ["USB plug-and-play, 360° voice pickup", "Built-in microphones", "Compact design", "Budget-friendly"],
    pros: ["Very affordable for two-person close-range use", "Solid rating base for the price", "Simple plug-and-play setup", "Compact, easy to move between desks"],
    cons: ["No specific platform certification", "Fewer premium features than higher-priced picks", "Not designed for a larger room"],
    bestFor: "Budget-conscious two-person offices that want simple, reliable close-range audio",
  },
  {
    id: "emeet-m0plus-twoperson",
    rank: 3,
    badge: "Best 4-Mic Pick for a Slightly Larger Two-Person Space",
    name: "EMEET M0 Plus Conference Speaker and Microphone, 4 Mics 360° Voice Pickup",
    price: "$52.23",
    rating: "4.3 stars from 1,596 Amazon ratings",
    reviews: "1,596 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51zfICZQrEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVZLS5GZ?tag=deskfinds0d-20",
    description:
      "4 mics offer a bit more headroom than a single-mic design, useful if your two-person office is a bit larger or the desks are spaced further apart than a truly compact shared space. Still well below the cost of a full 6-mic conference-room unit.\n\nSolid review base for the price, a reasonable middle ground between the most compact picks and full conference-room designs.",
    specs: ["4 mics, 360° voice pickup", "USB and Bluetooth connectivity", "Compact design", "Budget-friendly"],
    pros: ["4 mics offer more headroom than single-mic designs", "Still well below conference-room pricing", "Solid review base", "360° pickup covers a small-to-medium shared office"],
    cons: ["More mics than a truly compact two-person space needs", "No specific platform certification", "360° pickup less directional for a narrow desk layout"],
    bestFor: "Two-person offices with desks spaced a bit further apart than a fully compact setup",
  },
  {
    id: "jabra-speak510-2025-twoperson",
    rank: 4,
    badge: "Best Portable Two-Person Pick",
    name: "Jabra Speak 510 (2025 Edition) Portable USB Bluetooth Speaker, Black",
    price: "$97.79",
    rating: "4.7 stars from 164 Amazon ratings",
    reviews: "164 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/413BTmTk1LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC3XV5DK?tag=deskfinds0d-20",
    description:
      "The highest rating of any pick in this guide, genuinely portable design that's easy to move between two people's desks or hand off during a call, a real practical advantage a shared small office has over a fixed conference room setup.\n\nModest review count as a newer release, but the strong rating and Jabra's established reputation make this a solid portable option.",
    specs: ["Portable USB Bluetooth speaker, 2025 edition", "Background noise reduction", "Compact, travel-friendly", "USB and Bluetooth connectivity"],
    pros: ["Highest rating of any pick in this guide", "Genuinely portable, easy to hand off between desks", "Established Jabra audio quality", "Both USB and Bluetooth connectivity"],
    cons: ["Modest review count as a newer release", "Higher price than the most budget-focused picks", "No specific platform certification listed"],
    bestFor: "Two-person offices that want to move the speakerphone between desks or take it elsewhere",
  },
  {
    id: "yealink-sp92-twoperson",
    rank: 5,
    badge: "Most Affordable Two-Person Pick",
    name: "Yealink SP92 Conference Speaker and Microphone with AI Noise Cancellation, 20H Call Time, 13ft Pick-up, 360 Omni Mic 50mm Full-Duplex Speaker, Bluetooth 5.3 USB Speakerphone for Teams",
    price: "$60.20",
    rating: "4.2 stars from 127 Amazon ratings",
    reviews: "127 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F28HTJP3?tag=deskfinds0d-20",
    description:
      "AI noise cancellation and full-duplex audio at a genuinely affordable price, more capability than a two-person office strictly needs, but a solid value pick if you want the extra call-clarity features without paying for a full conference-room design.\n\n20H call time is more relevant to portable use than fixed desk use, a nice-to-have rather than essential for this use case.",
    specs: ["AI noise cancellation, full-duplex", "13ft pickup radius, more than a two-person office needs", "20H call time, Bluetooth 5.3", "Budget-friendly"],
    pros: ["AI noise cancellation and full-duplex audio at a low price", "More capability than strictly needed, genuine value", "Long call time if used portably", "Affordable"],
    cons: ["13ft pickup radius is overkill for a two-person space", "Smaller review base than Anker/Jabra alternatives", "Marketed primarily toward Teams rather than general use"],
    bestFor: "Two-person offices that want extra call-clarity features at a low price",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Right-sizing mic count to close-range, two-person use", description: "Prioritized compact 1-4 mic designs genuinely suited to two people sitting near the device, rather than recommending 6-mic conference-room hardware that's overkill for this use case." },
  { title: "Portability as a real practical advantage for shared small offices", description: "Weighed how easily each pick moves between two people's desks or gets handed off during a call, a genuine advantage a shared small office has over a fixed conference room." },
  { title: "Value at close range over premium conference-room features", description: "Ranked picks by value for close-range use specifically, since premium conference-room features like Zoom Rooms certification or 6-mic arrays don't add real benefit at this scale." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "A 6-Mic Conference Speakerphone Is Overkill Here",
    note: "A 6-mic conference-room design is built to isolate voices across a large table, genuinely unnecessary when both people in a two-person office sit within a few feet of the device. A compact 1-4 mic speakerphone handles this close-range use case just as well, often for a fraction of the price.",
  },
  {
    subheading: "Portability Is a Real Advantage for Small Shared Offices",
    note: "A device that's easy to move between two people's desks or hand off during a call is a genuine practical advantage a shared small office has that a dedicated conference room doesn't need. If your setup involves moving the speakerphone around, prioritize a portable pick.",
  },
  {
    subheading: "Matching Picks to Two-Person Office Layout",
    table: {
      headers: ["Layout", "Pick"],
      rows: [
        ["Very close desks, want the simplest setup", "Anker PowerConf S330 (rank 1) or EMEET M1A (rank 2)"],
        ["Desks spaced a bit further apart", "EMEET M0 Plus (rank 3)"],
        ["Want to move the device between spaces", "Jabra Speak 510 2025 (rank 4)"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "A 6-mic conference-room design is genuine overkill for two people", explanation: "Multi-mic conference speakerphones are built to isolate voices across a large table, a compact 1-4 mic design handles two people sitting near the device just as well, at a much lower price." },
  { criterion: "Portability is a real advantage in a small shared office", explanation: "A device that's easy to move between desks or hand off during a call is a genuine practical benefit a two-person office has over a fixed conference room, prioritize this if you move the speakerphone around." },
  { criterion: "Don't pay for pickup radius you don't need", explanation: "A 13ft pickup radius spec is meant for a conference table, largely unnecessary when both people sit within a few feet of the device in a small shared office." },
  { criterion: "Platform certification matters less at close range", explanation: "General USB/Bluetooth compatibility is usually sufficient for close-range two-person calls, formal platform certification matters more for larger rooms where audio pickup is more challenging." },
];

export const faq: FaqItem[] = [
  { q: "Do I need a 6-mic conference speakerphone for a two-person office?", a: "No, that's genuine overkill. A 6-mic design is built to isolate voices across a large conference table, a compact 1-4 mic speakerphone handles two people sitting near the device just as well, for a fraction of the price." },
  { q: "Is portability important for a two-person office speakerphone?", a: "It can be a real advantage if you move the device between desks or take it to another space. A genuinely portable pick like the Jabra Speak 510 makes this easy, though it's not essential if the device stays in one fixed spot." },
  { q: "What's the most affordable speakerphone option for a small shared office?", a: "The EMEET M1A and Yealink SP92 are the most budget-friendly options in this guide, both offer more than adequate audio quality for close-range two-person calls without conference-room pricing." },
  { q: "Do I need platform certification for a two-person office speakerphone?", a: "Usually not essential. General USB/Bluetooth compatibility is typically sufficient for close-range calls between two people, formal platform certification matters more in larger rooms where audio pickup is more challenging." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-speakerphones-for-small-meeting-rooms", title: "Best Speakerphones for Small Meeting Rooms (2026)" },
  { href: "/guide/best-noise-canceling-speakerphones", title: "Best Noise-Canceling Speakerphones (2026)" },
  { href: "/guide/best-desk-privacy-panels-clamp-on", title: "Best Clamp-On Desk Privacy Panels (2026)" },
];
