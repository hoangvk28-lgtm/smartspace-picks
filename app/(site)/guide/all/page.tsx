import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { getPublicGuides } from "@/lib/public-guides";
import { formatDate } from "@/lib/utils";
import { categories } from "@/data/categories";

export const revalidate = 86400;

export const metadata: Metadata = buildMetadata({
  title: "All Buying Guides – Complete List",
  description:
    "Browse all our buying guides for small desks, dorm rooms, and compact home offices. Every category, every pick.",
  path: "/guide/all",
});

export default async function AllGuidesPage() {
  const guides = await getPublicGuides();

  const guidesByCategory = categories
    .map((cat) => ({
      category: cat,
      guides: guides.filter((g) => g.categorySlug === cat.slug),
    }))
    .filter((c) => c.guides.length > 0);

  const knownSlugs = new Set(categories.map((c) => c.slug));
  const uncategorised = guides.filter((g) => !knownSlugs.has(g.categorySlug));

  return (
    <Container className="py-14">
      <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-8">
        <Link href="/" className="hover:text-brand transition-colors">Home</Link>
        <span>/</span>
        <Link href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link>
        <span>/</span>
        <span className="text-ink">All Guides</span>
      </nav>

      <div className="mb-10 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Complete List</span>
        <h1 className="text-4xl font-bold text-ink mt-3 mb-4 tracking-tight">All Buying Guides</h1>
        <p className="text-lg text-ink-secondary leading-relaxed">
          Every guide we&apos;ve published — {guides.length} guides across all categories. Organized by use case below.
        </p>
      </div>

      {/* Category jump links */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-border">
        {guidesByCategory.map(({ category }) => (
          <a
            key={category.slug}
            href={`#cat-${category.slug}`}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-border text-ink-secondary hover:text-brand hover:border-brand transition-colors"
          >
            {category.name}
          </a>
        ))}
      </div>

      <div className="space-y-14">
        {guidesByCategory.map(({ category, guides: catGuides }) => (
          <section key={category.slug} id={`cat-${category.slug}`} aria-labelledby={`h-${category.slug}`} className="scroll-mt-20">
            <div className="mb-6">
              <h2 id={`h-${category.slug}`} className="text-2xl font-bold text-ink tracking-tight mb-1">
                {category.name}
              </h2>
              <p className="text-sm text-ink-secondary max-w-2xl">{category.shortDescription}</p>
              <p className="text-xs text-ink-muted mt-1">{catGuides.length} guides</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catGuides.map((guide) => {
                const thumb = guide.thumbnailImage || guide.heroImage;
                return (
                  <Link
                    key={guide.slug}
                    href={`/guide/${guide.slug}`}
                    className="group flex flex-col bg-white rounded-card border border-border hover:shadow-card-hover hover:border-brand/20 transition-all overflow-hidden"
                  >
                    {thumb ? (
                      <div className="relative w-full h-40 bg-bg overflow-hidden">
                        <Image
                          src={thumb}
                          alt={guide.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                          unoptimized
                        />
                        <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-widest text-white bg-brand px-2 py-0.5 rounded-full">
                          {guide.subcategorySlug.replace(/-/g, " ")}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-40 bg-brand-muted flex items-center justify-center relative">
                        <svg className="w-8 h-8 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5 p-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-ink-muted">{guide.readTime}</span>
                        <span className="text-xs text-ink-muted">{formatDate(guide.lastUpdated)}</span>
                      </div>
                      <h3 className="font-bold text-ink leading-snug group-hover:text-brand transition-colors text-sm">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2 flex-1">
                        {guide.description}
                      </p>
                      <span className="text-xs font-semibold text-brand mt-1 flex items-center gap-0.5">
                        Read guide
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {uncategorised.length > 0 && (
          <section id="cat-other" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-ink tracking-tight mb-6">More Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {uncategorised.map((guide) => {
                const thumb = guide.thumbnailImage || guide.heroImage;
                return (
                  <Link key={guide.slug} href={`/guide/${guide.slug}`}
                    className="group flex flex-col bg-white rounded-card border border-border hover:shadow-card-hover hover:border-brand/20 transition-all overflow-hidden">
                    {thumb && (
                      <div className="relative w-full h-40 bg-bg overflow-hidden">
                        <Image src={thumb} alt={guide.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-300" unoptimized />
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5 p-3 flex-1">
                      <h3 className="font-bold text-ink leading-snug group-hover:text-brand transition-colors text-sm">{guide.title}</h3>
                      <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">{guide.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="pt-6 border-t border-border text-center">
          <Link href="/guide" className="text-sm font-semibold text-brand hover:underline">
            ← Back to Buying Guides
          </Link>
        </div>
      </div>
    </Container>
  );
}
