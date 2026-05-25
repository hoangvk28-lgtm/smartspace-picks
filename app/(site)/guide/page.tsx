import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { getPublicGuides } from "@/lib/public-guides";
import { formatDate } from "@/lib/utils";

export const revalidate = 86400;

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
        {guides.map((guide) => {
          const thumb = guide.thumbnailImage || guide.heroImage;
          return (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="group flex flex-col bg-white rounded-card border border-border hover:shadow-card-hover hover:border-brand/20 transition-all overflow-hidden"
            >
              {/* Thumbnail */}
              {thumb ? (
                <div className="relative w-full h-44 bg-bg overflow-hidden">
                  <Image
                    src={thumb}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    unoptimized
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest text-white bg-brand px-2 py-1 rounded-full">
                    {guide.subcategorySlug.replace(/-/g, " ")}
                  </span>
                </div>
              ) : (
                <div className="w-full h-44 bg-brand-muted flex items-center justify-center">
                  <svg className="w-10 h-10 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest text-brand bg-brand-muted px-2 py-1 rounded-full border border-brand/20">
                    {guide.subcategorySlug.replace(/-/g, " ")}
                  </span>
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-col gap-2 p-4 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ink-muted">{guide.readTime}</span>
                  <span className="text-xs text-ink-muted">Updated {formatDate(guide.lastUpdated)}</span>
                </div>

                <h2 className="font-bold text-ink leading-snug group-hover:text-brand transition-colors text-sm">
                  {guide.title}
                </h2>

                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2 flex-1">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                  <span className="text-xs text-ink-muted">
                    {guide.recommendedProductIds.length > 0 ? `${guide.recommendedProductIds.length} picks` : "Full guide"}
                  </span>
                  <span className="text-xs font-semibold text-brand group-hover:text-brand-dark transition-colors flex items-center gap-0.5">
                    Read guide
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}


