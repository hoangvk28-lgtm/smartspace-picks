export const guideSlug = "best-nas-for-automatic-computer-backup";
export const guideTitle = "8 Best NAS for Automatic Computer Backup in 2026";
export const metaTitle = "Best NAS for Automatic Computer Backup in 2026 (Set-and-Forget Picks)";
export const metaDescription =
  "8 best NAS devices for automatic computer backup in 2026, from a $199 diskless 2-bay to a 5-core 4-bay for multiple PCs. Compare quotas, RAID, and setup time.";
export const mainKeyword = "nas for computer backup";
export const introParagraphs = [
  "A NAS built for automatic computer backup needs to run scheduled jobs without babysitting, which means the real differentiators are RAM headroom for background backup software, RAID support so one failed drive doesn't take your only copy with it, and a quota system that stops a single laptop's backup history from silently filling the whole array. Scheduling the backup is the easy part; keeping it running unattended for years is what separates a good pick from a frustrating one.",
  "Below are 8 NAS devices we evaluated on backup software support, RAID and drive-bay flexibility, RAM for running Active Backup or similar tools alongside other services, and total cost once drives are factored in, ranging from a $199.99 diskless 2-bay for a single home PC to a $619.99 five-core 4-bay built for backing up several computers at once.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/21VvdqtKHoL._SL500_.jpg";

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
    id: "synology-ds223-backup-hub",
    rank: 1,
    badge: "Best for Synology Active Backup",
    name: "Synology DS223 Home & Office Backup Hub",
    price: "$284.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21VvdqtKHoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BRNBVTJK?tag=deskfinds0d-20",
    description:
      "The Synology DS223 is built around Active Backup for Business, Synology's free tool that backs up full PC and Mac images with deduplication, which makes it the strongest pick here for anyone backing up more than one computer from a single box. DSM's scheduler handles versioned, incremental backups without any third-party software.\n\nAs a 2-bay diskless unit it needs its own drives and a RAID 1 mirror before it holds any real redundancy, and its soldered RAM means the backup workload should stay its main job rather than one of several apps running at once. For a household backing up 2 to 3 computers on autopilot, it is the most complete option in this list.",
    specs: [
      "2-bay diskless NAS",
      "Active Backup for Business (free, full PC/Mac image backup)",
      "RAID 1 support",
      "DSM scheduler for versioned backups",
      "Fixed RAM, not user-upgradeable",
    ],
    pros: [
      "Active Backup for Business handles multiple computers with deduplication",
      "DSM's backup scheduling is the most mature in this list",
      "RAID 1 protects against a single drive failure",
      "Well-documented setup process for backup specifically",
    ],
    cons: [
      "Diskless, needs 2 drives purchased separately",
      "Soldered RAM limits running backup alongside heavy extra apps",
      "2024+ DSM shows compatibility warnings for non-Synology drives",
    ],
    bestFor: "Households backing up 2-3 computers who want Synology's dedicated backup software",
  },
  {
    id: "ugreen-dxp2800-content-creator",
    rank: 2,
    badge: "Best for Large Backup Sets",
    name: "UGREEN NAS DXP2800",
    price: "$369.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ccz6M7cCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D22HBFK1?tag=deskfinds0d-20",
    description:
      "The DXP2800 is positioned for content creators, which in backup terms means it has the horsepower to handle large incremental backup sets, such as a video editor's project drives, without stalling. UGREEN OS supports scheduled rsync and cloud-sync backup jobs alongside its own snapshot tool.\n\nIt costs more than the entry-level 2-bay picks here, which only pays off if your backup source is large media files or multiple high-capacity drives rather than a single laptop's documents folder. For lighter backup needs, a cheaper 2-bay in this list gets the same core job done.",
    specs: [
      "2-bay NAS, content-creator tier hardware",
      "Scheduled rsync and cloud-sync backup jobs",
      "Snapshot-based versioning",
      "Higher-performance CPU for large file sets",
      "UGREEN OS app ecosystem",
    ],
    pros: [
      "Handles large incremental backups without stalling",
      "Snapshot versioning protects against ransomware and mistakes",
      "Multiple backup job types beyond just PC image backup",
      "Strong CPU headroom for concurrent tasks",
    ],
    cons: [
      "Priciest 2-bay pick in this list",
      "Overkill for backing up a single lightweight laptop",
      "Newer OS ecosystem with less community documentation than DSM",
    ],
    bestFor: "Buyers backing up large media or project files, not just documents",
  },
  {
    id: "ugreen-dh2300-desktop",
    rank: 3,
    badge: "Best Budget Pick",
    name: "UGREEN NAS DH2300",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ACKzpdVoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FNWHSPXF?tag=deskfinds0d-20",
    description:
      "The DH2300 is the cheapest diskless 2-bay in this list at $199.99, and it still supports up to 64TB of total capacity for buyers who want room to grow without upgrading the enclosure itself. It runs scheduled backup jobs from a connected PC through UGREEN's standard OS tools.\n\nAt this price the CPU and RAM are the most modest here, so it is best kept focused on backup duty rather than layered with Plex, surveillance, or other always-on services. For a single computer's automatic backup on a budget, it covers the basics without unnecessary extras.",
    specs: [
      "2-bay diskless NAS",
      "Up to 64TB total supported capacity",
      "Scheduled backup jobs via UGREEN OS",
      "Entry-level CPU and RAM tier",
      "Budget-friendly diskless enclosure",
    ],
    pros: [
      "Cheapest diskless 2-bay in this list",
      "Supports high total capacity for its price",
      "Simple setup focused on core backup function",
      "Good starting point for a first NAS backup setup",
    ],
    cons: [
      "Entry-level CPU limits running multiple simultaneous services",
      "Diskless, needs drives purchased separately",
      "Fewer advanced backup features than the Synology or QNAP picks",
    ],
    bestFor: "Budget buyers backing up a single computer who don't need extra NAS apps",
  },
  {
    id: "qnap-ts216g-25gbe",
    rank: 4,
    badge: "Best Network Speed",
    name: "QNAP TS-216G-US 2-Bay 2.5GbE Desktop NAS",
    price: "$299.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21lrHwmtuBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GN3YJN2F?tag=deskfinds0d-20",
    description:
      "The TS-216G is built around a 2.5GbE port, which matters for backup speed once your PC or laptop also has a 2.5GbE adapter, since the first full backup of a modern SSD-heavy laptop can otherwise take most of a day over standard gigabit. QNAP's Hybrid Backup Sync app handles scheduled local and cloud jobs.\n\nThat 2.5GbE advantage only shows up if your router or switch also supports 2.5GbE; on a standard gigabit network it behaves like any other 2-bay NAS. It is the pick for buyers who already have or plan to upgrade their home network alongside the NAS.",
    specs: [
      "2-bay desktop NAS",
      "2.5GbE network port",
      "Hybrid Backup Sync for scheduled local/cloud jobs",
      "QNAP QTS operating system",
      "Standard 2-bay RAID support",
    ],
    pros: [
      "2.5GbE port meaningfully speeds up large backups on a matching network",
      "Hybrid Backup Sync covers both local and cloud backup destinations",
      "QNAP's app store adds flexibility beyond pure backup",
      "Reasonable price for a 2.5GbE-equipped 2-bay",
    ],
    cons: [
      "2.5GbE benefit requires a 2.5GbE router or switch, an extra cost",
      "On a standard gigabit network, speed matches non-2.5GbE picks",
      "Diskless, drives sold separately",
    ],
    bestFor: "Buyers with (or planning) a 2.5GbE home network who want faster first backups",
  },
  {
    id: "asustor-drivestor2-gen2",
    rank: 5,
    badge: "Best Entry-Level Value",
    name: "Asustor Drivestor 2 Gen 2 AS1202T",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/319qh9SJhIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FTFSGBB1?tag=deskfinds0d-20",
    description:
      "The Drivestor 2 Gen 2 pairs a quad-core 1.7GHz CPU with 2.5GbE networking at the same $199.99 price as the UGREEN DH2300, giving it a faster network port without a price jump. Asustor's ADM OS includes scheduled backup apps for both Windows and Mac clients.\n\nIts 1GB of DDR4 RAM is on the lighter side, which is fine for a single backup job running on schedule but will feel tight if you also want file sync or a media app running at the same time. As a first NAS focused mainly on automatic backup, it is a well-balanced budget option.",
    specs: [
      "2-bay NAS, quad-core 1.7GHz CPU",
      "2.5GbE networking",
      "1GB DDR4 RAM",
      "ADM OS backup apps for Windows and Mac",
      "4K media server support",
    ],
    pros: [
      "2.5GbE networking at entry-level pricing",
      "Quad-core CPU handles scheduled backup jobs smoothly",
      "Backup apps cover both Windows and Mac clients",
      "Good value against similarly priced 2-bay options",
    ],
    cons: [
      "1GB RAM limits running much beyond backup and light file sharing",
      "Smaller app ecosystem than Synology or QNAP",
      "Diskless, drives sold separately",
    ],
    bestFor: "First-time NAS buyers who want 2.5GbE speed without paying more than the budget tier",
  },
  {
    id: "terramaster-f2-425-intel",
    rank: 6,
    badge: "Best CPU for Multitasking",
    name: "TERRAMASTER F2-425",
    price: "$239.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ejB5cFDGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FHVZ53RN?tag=deskfinds0d-20",
    description:
      "The F2-425 runs on an Intel x86 quad-core CPU with 4GB of RAM, noticeably more headroom than the ARM-based budget picks in this list, which means scheduled backup jobs can run alongside file sharing or a lightweight media app without the whole system bogging down. It also includes 2.5GbE networking.\n\nTERRAMASTER's TOS software covers standard scheduled backup, though its app ecosystem and community documentation are smaller than Synology's or QNAP's. For buyers who want an Intel-class CPU and real RAM without paying 4-bay prices, it is a strong middle-tier choice.",
    specs: [
      "2-bay NAS, Intel x86 quad-core CPU",
      "4GB RAM",
      "2.5GbE LAN",
      "TOS scheduled backup support",
      "Diskless enclosure",
    ],
    pros: [
      "Intel x86 CPU and 4GB RAM outclass ARM-based budget rivals",
      "2.5GbE networking included",
      "Handles backup plus light extra services comfortably",
      "Competitive price for the hardware tier",
    ],
    cons: [
      "Smaller software ecosystem than Synology or QNAP",
      "Diskless, drives sold separately",
      "Less brand-name community support for troubleshooting",
    ],
    bestFor: "Buyers who want Intel-class CPU headroom for backup plus other light services",
  },
  {
    id: "qnap-ts264-8g",
    rank: 7,
    badge: "Best RAM for Heavy Backup Loads",
    name: "QNAP TS-264-8G-US 2-Bay Desktop NAS",
    price: "$489.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21+Y7Nr2xAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTWWJK9V?tag=deskfinds0d-20",
    description:
      "The TS-264 ships with 8GB of RAM out of the box, the most of any 2-bay in this list, which matters if you plan to run scheduled backup for several computers plus Hybrid Backup Sync's cloud replication at the same time without either job slowing down. It is a genuinely more capable machine than a budget 2-bay, at a matching price.\n\nAt $489 it costs more than double most other 2-bay picks here, so it makes sense mainly for buyers who know they will push it with concurrent backup jobs or additional QNAP apps, not for a single lightly used laptop. Treat the price as an investment in headroom rather than a backup-only purchase.",
    specs: [
      "2-bay desktop NAS",
      "8GB RAM (highest in this list for a 2-bay)",
      "2.5GbE networking",
      "Hybrid Backup Sync for local + cloud jobs",
      "QNAP QTS with full app store",
    ],
    pros: [
      "8GB RAM handles multiple concurrent backup jobs without slowdown",
      "Strong headroom for cloud replication alongside local backup",
      "Full QNAP app ecosystem for future expansion",
      "2.5GbE networking included",
    ],
    cons: [
      "Most expensive 2-bay pick in this list",
      "Overkill if you're only backing up one computer",
      "Diskless, drives add to total cost",
    ],
    bestFor: "Buyers who want to run several concurrent backup and cloud-sync jobs without a bottleneck",
  },
  {
    id: "ugreen-dxp4800-plus-5core",
    rank: 8,
    badge: "Best for Multiple Computers",
    name: "UGREEN NAS DXP4800 Plus",
    price: "$619.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31vNev8kUwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D22JRHZB?tag=deskfinds0d-20",
    description:
      "The DXP4800 Plus is the only 4-bay in this list, built around an Intel Pentium Gold 8505 5-core CPU that can comfortably run scheduled backup jobs for several computers at once alongside RAID rebuilds and other services. Four bays also mean more RAID configuration flexibility than any 2-bay option here allows.\n\nIt is the most expensive pick in this list before drives are even factored in, and a 4-bay setup with 4 matching drives adds real cost on top of the enclosure. For a household or small office backing up 3 or more computers automatically, the extra bays and CPU headroom are what justify the price.",
    specs: [
      "4-bay diskless NAS",
      "Intel Pentium Gold 8505 5-core CPU",
      "Supports RAID 5/6/10 configurations",
      "Handles multiple simultaneous backup jobs",
      "Highest total capacity ceiling in this list",
    ],
    pros: [
      "5-core Intel CPU handles multiple simultaneous backup jobs easily",
      "4 bays allow RAID 5/6/10 for better redundancy than a 2-bay",
      "Highest total capacity ceiling in this list",
      "Room to add other services without impacting backup performance",
    ],
    cons: [
      "Most expensive enclosure in this list",
      "Needs 4 matching drives, a significant added cost",
      "More setup complexity than a simple 2-bay for a single computer",
    ],
    bestFor: "Households or small offices backing up 3+ computers who want RAID flexibility",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Backup software maturity",
    description: "Compared each platform's scheduled backup tools, Synology Active Backup, QNAP Hybrid Backup Sync, UGREEN and Asustor's native apps, for versioning, deduplication, and cloud-destination support.",
  },
  {
    title: "RAM headroom for unattended jobs",
    description: "Weighed RAM against whether backup can run alongside other always-on services without slowing down or requiring the NAS's sole attention.",
  },
  {
    title: "RAID and drive-bay flexibility",
    description: "Scored 2-bay vs 4-bay configurations on redundancy options and how much usable capacity survives after RAID overhead.",
  },
  {
    title: "Network speed for backup windows",
    description: "Compared standard gigabit against 2.5GbE ports, since network speed directly determines how long a first full backup takes.",
  },
  {
    title: "True total cost including drives",
    description: "Factored diskless enclosure price against the real drive cost needed to make each pick fully operational, not just the sticker price.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "AFP is being retired, verify SMB3 support before buying",
    explanation:
      "macOS is removing AFP (Apple Filing Protocol) support in macOS 27 and later, and any NAS still relying on AFP for backup will silently fail to connect after that update. Before buying, confirm the NAS firmware supports SMB3 with Bonjour/mDNS advertising enabled, which is the protocol combination that keeps automatic backup working long term.",
  },
  {
    criterion: "Set a backup quota or one computer can fill the whole NAS",
    explanation:
      "Backup software defaults to using all available space unless you set a per-computer quota in the NAS admin panel. Without one, a single laptop's growing backup history can silently consume the entire array, leaving no room for a second computer's backups.",
  },
  {
    criterion: "RAID 1 gives you half your total drive capacity, not all of it",
    explanation:
      "Two 4TB drives in RAID 1 give you 4TB of usable, protected space, not 8TB, since the second drive exists purely as a mirror. Buyers expecting the full combined capacity are often surprised after setup; plan your drive purchase around usable, not raw, capacity.",
  },
  {
    criterion: "Backups need to be verified, not just scheduled",
    explanation:
      "Scheduling a nightly backup job is only half the task. A backup can appear to run successfully for months while silently failing to restore due to RAID errors or file corruption, so plan on a periodic test restore, at least once a quarter, to confirm the backup is actually usable.",
  },
  {
    criterion: "A NAS is one leg of the 3-2-1 backup rule, not the whole rule",
    explanation:
      "A NAS gives you a local backup copy, but the 3-2-1 rule calls for 3 copies of your data across 2 different media with 1 copy stored offsite. A NAS alone does not protect against fire, theft, or a ransomware attack that reaches your local network, so pair it with a cloud backup destination for anything irreplaceable.",
  },
  {
    criterion: "Soldered RAM limits what you can add later",
    explanation:
      "Value-tier NAS models with soldered, non-upgradeable RAM work fine for backup alone but create an early ceiling if you later want to add Plex, surveillance, or multi-user file sharing on the same box. If you expect to grow into more use cases, prioritize a model with user-upgradeable RAM even if it costs more upfront.",
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
    subheading: "By Number of Computers You're Backing Up",
    intro:
      "The right NAS scales with how many machines it needs to back up on schedule, since RAM, CPU, and bay count all determine how many concurrent jobs run smoothly.",
    table: {
      headers: ["Computers to back up", "What matters most", "Best pick"],
      rows: [
        ["1 computer, documents and photos", "Low cost, simple setup", "UGREEN DH2300 or Asustor Drivestor 2 Gen 2"],
        ["1 computer, large media/project files", "CPU headroom for big incrementals", "UGREEN DXP2800"],
        ["2-3 computers, mixed use", "Dedicated backup software with quotas", "Synology DS223"],
        ["3+ computers or a small office", "RAID flexibility, multi-job RAM", "UGREEN DXP4800 Plus, QNAP TS-264-8G"],
      ],
    },
  },
  {
    subheading: "By Operating System Being Backed Up",
    cards: [
      {
        label: "Mostly Windows PCs",
        text: "QNAP's Hybrid Backup Sync and Synology's Active Backup for Business both handle full Windows PC image backup with versioning and deduplication.",
      },
      {
        label: "Mac with Time Machine",
        text: "Confirm SMB3 support before buying, since AFP is being phased out of macOS. All 8 picks here support SMB3, but always verify current firmware before purchase.",
      },
      {
        label: "Mixed Windows and Mac household",
        text: "The Synology DS223 or QNAP TS-264-8G handle mixed-OS backup cleanly, since both platforms support separate scheduled jobs per device with their own quotas.",
      },
    ],
  },
  {
    subheading: "First Backup Speed: Network Matters More Than You'd Think",
    intro:
      "A first full backup of a modern SSD laptop can take 8-24 hours over a standard gigabit connection, so network speed changes how painful day one actually is.",
    table: {
      headers: ["Network setup", "First backup speed", "Best pick"],
      rows: [
        ["Standard gigabit network", "Fine for incremental backups after day one", "Any pick, no 2.5GbE needed"],
        ["2.5GbE router/switch already installed", "Meaningfully faster first full backup", "QNAP TS-216G-US, Asustor Drivestor 2 Gen 2, TERRAMASTER F2-425"],
        ["Planning to upgrade network later", "2.5GbE port pays off once switch is upgraded", "QNAP TS-216G-US"],
      ],
    },
    note: "Run the very first full backup over Ethernet rather than Wi-Fi regardless of which NAS you choose; incremental backups after that are fine wirelessly.",
  },
  {
    subheading: "Budget vs. Headroom",
    intro:
      "It's easy to underspend on RAM and CPU if you're only thinking about today's single laptop, but backup needs tend to grow.",
    table: {
      headers: ["Budget tier", "Trade-off", "Best pick"],
      rows: [
        ["Under $250, single computer", "Lean RAM, focused on backup only", "UGREEN DH2300, Asustor Drivestor 2 Gen 2"],
        ["$250-$400, some multitasking headroom", "Intel CPU or larger RAM buffer", "TERRAMASTER F2-425, UGREEN DXP2800"],
        ["$450+, heavy concurrent jobs", "8GB+ RAM or 4-bay RAID flexibility", "QNAP TS-264-8G, UGREEN DXP4800 Plus"],
      ],
    },
  },
];

export const faq: FaqItem[] = [
  {
    q: "Will my Mac backups stop working because of AFP being removed?",
    a: "If your NAS firmware only advertises AFP for Time Machine, yes, backups will silently stop working once your Mac updates past macOS 27. Before buying or updating, confirm the NAS is configured for SMB3 with Bonjour/mDNS advertising the Time Machine service, which is the protocol combination Apple is standardizing on.",
  },
  {
    q: "How much usable storage do I actually get in RAID 1?",
    a: "RAID 1 mirrors your data across two drives, so two 4TB drives give you 4TB of usable, protected space rather than the combined 8TB. If you need more usable capacity with redundancy, a 4-bay NAS in RAID 5 gives you roughly 75% of total raw capacity instead of 50%.",
  },
  {
    q: "Should I use Active Backup for Business or Time Machine on a Synology NAS?",
    a: "Active Backup for Business is the better choice for backing up multiple PCs and Macs with full-image, deduplicated backups, and it's the stronger option for IT-style management. Time Machine on the NAS is simpler and more tightly integrated for a single home Mac user who just wants the native macOS backup experience.",
  },
  {
    q: "Do I still need cloud backup if I have a NAS?",
    a: "Yes. A NAS covers the local backup leg of the 3-2-1 rule, 3 copies of your data across 2 media types with 1 copy offsite, but it doesn't protect against fire, theft, or a ransomware attack that reaches your home network. Pair local NAS backup with a cloud destination for anything you can't afford to lose.",
  },
  {
    q: "How do I know if my backup is actually working, not just scheduled?",
    a: "A scheduled job can run for months while quietly failing to produce a restorable backup due to RAID errors or file corruption. Periodically, at least quarterly, restore a real file or folder from the backup to confirm it's actually usable, rather than trusting the scheduler's success notification alone.",
  },
  {
    q: "Is a 2-bay NAS enough for backing up 2 computers?",
    a: "Yes, for 2 computers with typical document and photo backup needs, a 2-bay NAS like the Synology DS223 works well as long as you set a quota per computer so one machine's backup history doesn't consume the whole array. For 3 or more computers, or heavier media backup, a 4-bay with more RAM handles concurrent jobs more comfortably.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-nas-for-mac-and-time-machine-backup", title: "Best NAS for Mac and Time Machine Backup (2026)" },
  { href: "/guide/best-nas-for-plex-media-servers", title: "Best NAS for Plex Media Servers (2026)" },
  { href: "/guide/best-nas-storage-for-home-office", title: "Best NAS Storage for Home Office (2026)" },
];
