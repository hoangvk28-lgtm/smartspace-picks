export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatarUrl?: string;
  expertise: string[];
  credentials: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

export const authors: Author[] = [
  {
    slug: "deskfinds-editorial-team",
    name: "DeskFinds Editorial Team",
    role: "Product Researchers & Editors",
    avatarUrl: "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/authors/deskfinds-editorial-team/avatar.png",
    bio: "We research and compare Amazon products specifically for small spaces — dorm rooms, compact desks, and budget home offices. Every guide is built on product specs, verified buyer data, and structured scoring, not sponsored placement.",
    longBio:
      "DeskFinds was built for people who live and work in tight spaces: studio apartments, college dorms, and compact home offices where every square inch counts. Our editorial team evaluates products across five weighted criteria — small-space fit, build quality, ease of use, value for money, and buyer feedback — and publishes structured buying guides that show the trade-offs clearly.\n\nWe do not accept payment for placement. Affiliate commissions from Amazon help keep the site running, but they do not influence which products we recommend or how we rank them. If a product scores poorly on our rubric, it does not appear in our top picks — regardless of commission rate.",
    expertise: [
      "Desk Setup & Organization",
      "Dorm Room Essentials",
      "Small Room Storage",
      "Compact Home Office",
    ],
    credentials: [
      { label: "Guides published", value: "13+" },
      { label: "Products evaluated", value: "80+" },
      { label: "Scoring criteria", value: "5 weighted dimensions" },
      { label: "Update frequency", value: "Reviewed every 6 months" },
    ],
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/deskfinds",
        label: "DeskFinds on LinkedIn",
      },
    ],
    editorial: {
      process:
        "Each guide starts with keyword and buyer-intent research to identify what people actually need. We then collect product specs, cross-reference verified Amazon buyer reviews, and score each product on our five-dimension rubric. Guides are updated when new products launch or when buyer feedback patterns shift significantly.",
      independence:
        "No brand pays for inclusion or ranking position. Affiliate links generate commissions that fund the site — but our scoring rubric applies equally to all products, and low-scoring products are excluded regardless of commission rate.",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
