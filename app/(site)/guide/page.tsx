import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { getPublicGuides } from "@/lib/public-guides";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "All Buying Guides – Best Small Space Products",
  description:
    "All our buying guides for small rooms, dorm setups, compact desks, and home offices. Top picks for students and small-space dwellers.",
  path: "/guide",
});

export default async function BuyingGuidesIndexPage() {
  const guides = await getPublicGuides();
  return (
    <Container className="py-14">
      <div className="mb-10 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Guides</span>
        <h1 className="text-4xl font-bold text-ink mt-3 mb-4 tracking-tight">All Buying Guides</h1>
        <p className="text-lg text-ink-secondary leading-relaxed">
          Every guide we&apos;ve published for small rooms, dorms, compact desks, and home offices. Updated regularly as better products appear.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="group flex flex-col gap-3 p-5 bg-white rounded-card border border-border hover:shadow-card-hover hover:border-brand/20 transition-all"
          >
            {/* Category + meta */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                {guide.subcategorySlug.replace(/-/g, " ")}
              </span>
              <span className="text-xs text-ink-muted">{guide.readTime}</span>
            </div>

            <h2 className="font-bold text-ink leading-snug group-hover:text-brand transition-colors text-base">
              {guide.title}
            </h2>

            <p className="text-sm text-ink-secondary leading-relaxed line-clamp-2 flex-1">
              {guide.description}
            </p>

            {/* Footer row */}
            <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
              <span className="text-xs text-ink-muted">
                {guide.recommendedProductIds.length} picks Â· Updated {formatDate(guide.lastUpdated)}
              </span>
              <span className="text-xs font-semibold text-brand group-hover:text-brand-dark transition-colors flex items-center gap-0.5">
                Read guide
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

