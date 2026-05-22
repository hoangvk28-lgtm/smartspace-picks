import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo";
import { scoreToColor } from "@/lib/utils";
import { getPublicProducts } from "@/lib/public-products";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Product Reviews — Small Space Products",
  description:
    "Individual product reviews for small room setups, desk accessories, dorm essentials, and storage solutions.",
  path: "/reviews",
});

export default async function ReviewsIndexPage() {
  const products = await getPublicProducts();

  return (
    <Container className="py-14">
      <div className="mb-10 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Reviews</span>
        <h1 className="text-4xl font-bold text-ink mt-3 mb-4 tracking-tight">All Product Reviews</h1>
        <p className="text-lg text-ink-secondary leading-relaxed">
          Individual evaluations for every product we&apos;ve assessed, with scores, pros and cons, full specs, and direct Amazon links.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col bg-white rounded-card border border-border hover:shadow-card-hover hover:border-brand/20 transition-all overflow-hidden"
          >
            {/* Top meta bar */}
            <div className="flex items-center justify-between px-5 pt-4 pb-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                {product.subcategorySlug.replace(/-/g, " ")}
              </span>
              {product.badge && <Badge>{product.badge}</Badge>}
            </div>

            {/* Main content */}
            <div className="flex flex-col gap-2.5 p-5 flex-1">
              <Link href={`/reviews/${product.slug}`}>
                <h2 className="font-bold text-ink group-hover:text-brand transition-colors text-base leading-snug">
                  {product.name}
                </h2>
              </Link>

              <p className="text-sm text-ink-secondary leading-relaxed line-clamp-2 flex-1">
                {product.shortDescription}
              </p>

              {/* Key "best for" item */}
              {product.bestFor?.[0] && (
                <div className="flex items-start gap-1.5">
                  <svg className="w-3.5 h-3.5 text-cta shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-xs text-ink-secondary line-clamp-1">{product.bestFor[0]}</span>
                </div>
              )}

              {/* Score + price + CTA */}
              <div className="pt-3 border-t border-border mt-auto space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold tabular-nums ${scoreToColor(product.scores.overall)}`}>
                      {product.scores.overall.toFixed(1)}
                    </span>
                    <span className="text-xs text-ink-muted">/10</span>
                  </div>
                  <span className="font-bold text-ink text-base">{product.priceRange}</span>
                </div>
                <Link
                  href={`/reviews/${product.slug}`}
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-brand/30 bg-brand-light text-brand text-sm font-semibold hover:bg-brand hover:text-white transition-all"
                >
                  Read review
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
