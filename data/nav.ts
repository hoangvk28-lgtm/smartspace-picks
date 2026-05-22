export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: "Reviews",
    href: "/reviews",
    children: [
      { label: "Desk Setup", href: "/categories/desk-setup", description: "Lamps, stands & cable management" },
      { label: "Dorm Essentials", href: "/categories/dorm-essentials", description: "Space-saving dorm picks" },
      { label: "Small Room Storage", href: "/categories/small-room-storage", description: "Under-bed & rolling storage" },
      { label: "Compact Home Office", href: "/categories/compact-home-office", description: "Small WFH setups" },
      { label: "Budget Finds", href: "/categories/budget-finds", description: "Best value under $30–$50" },
    ],
  },
  {
    label: "Buying Guides",
    href: "/best",
    children: [
      { label: "Best Desk Lamps", href: "/best/desk-lamps-small-desks", description: "Top picks for small desks" },
      { label: "Best Monitor Stands", href: "/best/monitor-stands-small-desks", description: "Save desk space" },
      { label: "Best Laptop Stands", href: "/best/laptop-stands-small-desks", description: "Comfort & portability" },
      { label: "Best Cable Organizers", href: "/best/cable-management-dorm", description: "Dorm-room approved" },
      { label: "Best Bedside Caddies", href: "/best/bedside-caddies-students", description: "College essentials" },
      { label: "Best Under-Bed Storage", href: "/best/under-bed-storage-small-rooms", description: "Double your floor space" },
    ],
  },
  { label: "Compare", href: "/compare" },
  { label: "Deals", href: "/deals" },
  { label: "How We Review", href: "/how-we-review" },
];

export const footerNav = {
  categories: [
    { label: "Desk Setup", href: "/categories/desk-setup" },
    { label: "Dorm Essentials", href: "/categories/dorm-essentials" },
    { label: "Small Room Storage", href: "/categories/small-room-storage" },
    { label: "Compact Home Office", href: "/categories/compact-home-office" },
    { label: "Budget Finds", href: "/categories/budget-finds" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How We Review", href: "/how-we-review" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
