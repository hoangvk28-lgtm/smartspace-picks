export const guideSlug = "best-portable-ssds-for-gaming";
export const guideTitle = "4 Best Portable SSDs for PC Gaming in 2026";
export const metaTitle = "Best Portable SSDs for PC Gaming";
export const metaDescription = "4 portable SSDs we evaluated for PC gaming, covering Steam and Epic library migration, read speed for load times, and realistic capacity planning.";
export const mainKeyword = "best portable ssd for pc gaming";
export const introParagraphs = [
  "Most of a PC game's load-time benefit comes from read speed and random access, not the write-speed numbers heavily marketed elsewhere, worth weighing a drive's real-world read performance more heavily than a headline write speed figure when shopping specifically for gaming.",
  "Modern game library sizes with 100GB or larger titles now common mean capacity planning matters as much as speed, and checking whether your specific game platform's library migration tool can move installed games without a full reinstall is worth doing before you buy.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0874xn4d8-p1",
    rank: 1,
    badge: "Best Overall Pick for PC Gaming Libraries",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=deskfinds0d-20",
    description:
      "Samsung's T7 pairs reliable 1050MB/s speed with a slim, desk-friendly design, a solid all-around choice for PC gamers who want to offload part of a Steam or Epic library.\n\nSteam's library migration tool can move installed games between drives without a full reinstall, a real convenience worth using once this drive is set up alongside your main system drive.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Slim metal body"],
    pros: ["Solid read speed for real-world load-time improvement", "Slim design fits well in a PC gaming desk setup", "Reliable, widely reviewed platform", "Compatible with Steam's library migration tool"],
    cons: ["1050MB/s ceiling trails the fastest gaming-oriented drives", "No official IP rating", "1TB fills quickly with modern 100GB-plus game titles"],
    bestFor: "PC gamers wanting a reliable all-around library expansion drive",
  },
  {
    id: "b09vlk9w3s-p2",
    rank: 2,
    badge: "Best Rugged Pick for a Gaming Setup That Travels",
    name: "Samsung T7 Shield Portable SSD 1TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    price: "$286.88",
    rating: "4.7 stars from Amazon ratings",
    reviews: "16,380 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VLK9W3S?tag=deskfinds0d-20",
    description:
      "Samsung's T7 Shield adds rugged protection to the same reliable 1050MB/s speed, useful for PC gamers who bring a laptop and external drive to LAN events or a friend's setup.\n\nAs with the standard T7, Steam and Epic library migration tools handle moving installed games between drives without requiring a full reinstall.",
    specs: ["1TB capacity", "Up to 1050MB/s rated", "USB 3.2 Gen 2", "Rugged shield"],
    pros: ["Rugged shell suits PC gamers who travel with their setup", "Solid read speed for real-world load-time improvement", "Reliable, well-reviewed platform", "Compatible with Steam and Epic library migration tools"],
    cons: ["Bulkier than the non-shielded T7", "Premium price versus non-rugged alternatives", "1TB fills quickly with modern large game titles"],
    bestFor: "PC gamers who bring their setup to LAN events or travel",
  },
  {
    id: "b0c5jq68fy-p3",
    rank: 3,
    badge: "Best Budget Pick for Expanding a PC Game Library",
    name: "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    price: "$164.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "10,968 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JQ68FY?tag=deskfinds0d-20",
    description:
      "SanDisk's standard Portable SSD offers a budget-friendly way to expand a PC game library, rated up to 800MB/s, sufficient for most game read-speed needs even without top-tier numbers.\n\nWith modern titles regularly exceeding 100GB, this drive's 1TB capacity should be planned around a realistic number of installed large games rather than an unlimited library.",
    specs: ["1TB capacity", "Up to 800MB/s rated", "USB-C, USB 3.2 Gen 2", "Budget price"],
    pros: ["Budget-friendly way to expand a PC game library", "Sufficient read speed for real-world load-time needs", "Reliable brand with a large review base", "Good value per gigabyte for capacity planning"],
    cons: ["800MB/s ceiling trails the fastest picks here", "1TB capacity fills quickly with modern large titles", "No official IP rating"],
    bestFor: "Budget-conscious PC gamers expanding their library capacity",
  },
  {
    id: "b08y1q2ksz-p4",
    rank: 4,
    badge: "Best Large-Capacity Pick for Big PC Game Libraries",
    name: "Seagate 2TB Game Drive for Xbox, USB 3.0 (STKX2000400)",
    price: "$119.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "20,657 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31+UCQHBazL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Y1Q2KSZ?tag=deskfinds0d-20",
    description:
      "Seagate's 2TB Game Drive offers real headroom for a large PC game library made up of modern 100GB-plus titles, at a reasonable price for the added capacity.\n\nWhile marketed toward console gaming, it works identically as a PC external drive, and the larger capacity meaningfully reduces how often you will need to manage which games stay installed.",
    specs: ["2TB capacity", "USB 3.0", "Large capacity for big libraries", "Large review base"],
    pros: ["Real headroom for large modern PC game libraries", "Large, consistent review base", "Reduces how often you need to manage installed games", "Good value per gigabyte at 2TB"],
    cons: ["USB 3.0 caps read speed below newer USB 3.2 Gen 2 drives", "Bulkier design than slim ultraportables", "Best for capacity-first buyers over speed-first"],
    bestFor: "PC gamers with large modern libraries who prioritize capacity over peak speed",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Read speed and random access weighted for load times", description: "Prioritized real-world read speed and random access performance over marketed write-speed numbers, since read speed drives most of a game's load-time benefit." },
  { title: "Modern game library size planning", description: "Weighed capacity against realistic modern game sizes, with many current titles now exceeding 100GB each." },
  { title: "Steam and Epic library migration compatibility", description: "Confirmed each pick works with standard Steam and Epic library migration tools that move installed games without a full reinstall." },
  { title: "Price per gigabyte for library expansion", description: "Compared price per gigabyte specifically for the use case of expanding an existing PC game library rather than general file storage." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Read Speed Matters More Than Write Speed for Load Times",
    note: "Most of a game's load-time benefit from an SSD comes from read speed and random access, not the write-speed numbers often emphasized in marketing. When comparing gaming drives, weigh real-world read performance and reviews from other PC gamers more heavily.",
  },
  {
    subheading: "Plan Capacity Around Modern 100GB-Plus Titles",
    note: "Many current PC games now exceed 100GB installed. A 1TB drive realistically holds around 8 to 10 large modern titles alongside smaller games, plan your capacity choice around your actual library size, not an assumed smaller average game size.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: { headers: ["Your priority", "Recommended pick"], rows: [["Reliable all-around library expansion", "Samsung T7 1TB"], ["Rugged setup that travels to LAN events", "Samsung T7 Shield 1TB"], ["Budget-friendly library expansion", "SanDisk Portable SSD 1TB"], ["Large modern library, capacity-first", "Seagate 2TB Game Drive"]] },
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Weigh read speed over write speed for load times", explanation: "Most of the load-time benefit an SSD provides comes from read speed and random access, not the write-speed numbers often emphasized in marketing." },
  { criterion: "Plan capacity around realistic modern game sizes", explanation: "Many current PC titles exceed 100GB installed, budget your drive capacity around your actual library rather than an outdated assumption of smaller game sizes." },
  { criterion: "Confirm your platform's library migration tool works with external drives", explanation: "Steam and Epic both offer tools to move installed games between drives without a full reinstall, worth using rather than reinstalling from scratch." },
  { criterion: "Match interface speed to your motherboard or laptop port", explanation: "A drive's rated speed only matters if your PC's actual USB port supports that same tier." },
  { criterion: "Consider capacity over peak speed for large libraries", explanation: "For buyers with many large installed titles, prioritizing capacity over the fastest possible speed tier is often the better value tradeoff." }
];

export const faq: FaqItem[] = [
  { q: "Does write speed matter for gaming performance?", a: "Less than read speed. Most of a game's load-time benefit from an external SSD comes from read speed and random access, not write speed." },
  { q: "Can I move installed Steam games to an external SSD without reinstalling?", a: "Yes, Steam's library migration tool, along with Epic's equivalent, can move installed games between drives without a full reinstall." },
  { q: "How much capacity do I need for a PC game library?", a: "Plan around modern titles regularly exceeding 100GB each, a 1TB drive typically holds roughly 8 to 10 large modern games alongside smaller titles." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-ps5", title: "Best Portable SSDs for PS5 in 2026" },
  { href: "/guide/best-portable-ssds-for-xbox-series-x-and-s", title: "Best Portable SSDs for Xbox Series X and S" },
  { href: "/guide/best-portable-ssds-for-steam-deck", title: "Best Portable SSDs for Steam Deck" }
];
