import Link from "next/link";
import { products as staticProducts } from "@/data/products";
import { getPublicHomepageSettings } from "@/lib/public-settings";
import type { HomepageSettings } from "@/lib/site-settings-store";

const defaultQuickLinks = [
  { label: "Desk Lamps", href: "/best/desk-lamps-small-desks" },
  { label: "Monitor Stands", href: "/best/monitor-stands-small-desks" },
  { label: "Laptop Stands", href: "/best/laptop-stands-small-desks" },
  { label: "Under-Bed Storage", href: "/best/under-bed-storage-small-rooms" },
  { label: "Cable Management", href: "/best/cable-management-dorm" },
  { label: "Bedside Caddies", href: "/best/bedside-caddies-students" },
];

interface Props {
  settings?: HomepageSettings;
}

export async function HeroSection({ settings: propSettings }: Props = {}) {
  const settings = propSettings ?? await getPublicHomepageSettings();
  const hero = settings.hero;

  // Top picks: use configured slugs if provided, else fallback to top 4 by overall score
  const top4 = hero.featuredProductSlugs.length > 0
    ? hero.featuredProductSlugs
        .map((slug) => staticProducts.find((p) => p.slug === slug))
        .filter(Boolean)
        .slice(0, 4) as typeof staticProducts
    : [...staticProducts].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, 4);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0c1525 0%, #162944 55%, #0c1525 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none" style={{ background: "#2563eb", opacity: 0.18 }} aria-hidden="true" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "#1d4ed8", opacity: 0.10 }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">

          {/* ── Left column ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-blue-400 rounded-full" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{hero.eyebrow}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight mb-5"
              style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
            >
              {hero.headline}{" "}
              <span style={{ background: "linear-gradient(90deg, #bfdbfe, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {hero.headlineAccent}
              </span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.88)" }}>
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href={hero.primaryCtaHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-btn text-sm transition-all"
                style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "#ffffff", boxShadow: "0 4px 20px rgba(59,130,246,0.50), 0 1px 3px rgba(0,0,0,0.3)" }}
              >
                {hero.primaryCtaText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              {hero.secondaryCtaText && (
                <Link
                  href={hero.secondaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-btn text-sm transition-all"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.28)" }}
                >
                  {hero.secondaryCtaText}
                </Link>
              )}
            </div>

            {hero.searchPlaceholder && (
              <Link
                href="/compare"
                className="flex items-center gap-3 px-4 py-3 rounded-xl max-w-md backdrop-blur-sm mb-10 transition-all hover:border-white/40"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.22)" }}
                aria-label="Browse and compare all products"
              >
                <svg className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.65)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{hero.searchPlaceholder}</span>
                <span className="ml-auto text-xs font-medium shrink-0" style={{ color: "rgba(255,255,255,0.50)" }}>Browse →</span>
              </Link>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs mr-1 shrink-0" style={{ color: "rgba(255,255,255,0.60)" }}>Browse:</span>
              {defaultQuickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs px-3 py-1.5 rounded-badge font-medium transition-all hover:bg-blue-500 hover:text-white hover:border-blue-500"
                  style={{ background: "rgba(255,255,255,0.11)", color: "rgba(255,255,255,0.82)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {hero.badgeText && (
              <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.48)" }}>{hero.badgeText}</p>
            )}
          </div>

          {/* ── Right column — Top Picks card ── */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            >
              <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.95)" }}>Our Top Picks</span>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>Scored 1–10</span>
              </div>

              {top4.map((p, i) => (
                <div key={p.id} className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.75)" }}>{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-1" style={{ color: "rgba(255,255,255,0.96)" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.62)" }}>{p.priceRange}</p>
                  </div>
                  <span className="text-sm font-bold tabular-nums shrink-0 px-2 py-0.5 rounded-md" style={{ color: "#ffffff", background: "rgba(59,130,246,0.35)", border: "1px solid rgba(59,130,246,0.50)" }}>
                    {p.scores.overall.toFixed(1)}
                  </span>
                </div>
              ))}

              <div className="px-5 py-3.5" style={{ background: "rgba(255,255,255,0.05)", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                <Link href="/compare" className="text-xs font-semibold flex items-center justify-between group transition-colors" style={{ color: "#93c5fd" }}>
                  Compare all {staticProducts.length} products
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-xs mt-3 text-center" style={{ color: "rgba(255,255,255,0.48)" }}>
              Scores based on specs, dimensions &amp; verified buyer feedback
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
