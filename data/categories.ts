export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    slug: "desk-setup",
    name: "Desk Setup",
    description:
      "Buying guides for small desks, study setups, and compact workspaces. Covers desk lamps, monitor stands, laptop risers, cable management, and every accessory that makes a tight desk more productive.",
    shortDescription: "Ergonomic and organized setups for small desks.",
    icon: "Monitor",
    color: "#2563eb",
    subcategories: ["desk-lamps", "monitor-stands", "laptop-stands", "cable-management"],
  },
  {
    slug: "dorm-essentials",
    name: "Dorm Essentials",
    description:
      "Space-saving Amazon finds for college dorm rooms and student living. Compact, affordable, and practical products every student needs - from bedside organizers to cable kits - that work within dorm restrictions.",
    shortDescription: "Space-saving picks for dorm life.",
    icon: "GraduationCap",
    color: "#7c3aed",
    subcategories: ["bedside-caddies", "cable-management", "desk-lamps"],
  },
  {
    slug: "small-room-storage",
    name: "Small Room Storage",
    description:
      "Storage solutions for bedrooms, apartments, and tiny spaces. Under-bed organizers, slim rolling carts, over-door racks, and stackable bins - solutions that use every available square inch.",
    shortDescription: "Maximize every inch with smart storage.",
    icon: "Archive",
    color: "#0891b2",
    subcategories: ["under-bed-storage", "storage-carts"],
  },
  {
    slug: "compact-home-office",
    name: "Compact Home Office",
    description:
      "Practical accessories for small work-from-home setups. Remote workers with limited space deserve a professional desk environment - these guides cover the best compact accessories for bedroom offices and studio apartments.",
    shortDescription: "Professional setups for small home offices.",
    icon: "Briefcase",
    color: "#16a34a",
    subcategories: ["monitor-stands", "laptop-stands", "desk-lamps", "cable-management"],
  },
  {
    slug: "budget-finds",
    name: "Budget Finds",
    description:
      "Affordable Amazon products that improve small-space living. The best small-space products don't have to break the bank. We surface the highest-value items under $30, $50, and $100.",
    shortDescription: "High-value picks under $30, $50, and $100.",
    icon: "Tag",
    color: "#f59e0b",
    subcategories: ["desk-lamps", "cable-management", "bedside-caddies", "under-bed-storage"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
