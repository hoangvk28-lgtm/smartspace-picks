import Image from "next/image";
import { AMAZON_TAG } from "@/lib/affiliate";
import { clsx } from "@/lib/utils";

type BountyVariant = "prime" | "primeYoungAdults" | "haul";

interface AmazonBountyBannerProps {
  variant?: BountyVariant;
  className?: string;
}

const VARIANTS: Record<
  BountyVariant,
  {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    href: string;
  }
> = {
  prime: {
    eyebrow: "Amazon Prime",
    heading: "New to Amazon Prime?",
    body: "Get fast, free shipping on every pick in this guide, plus Prime Video and exclusive deals.",
    cta: "Try Prime Free",
    href: `https://www.amazon.com/amazonprime?tag=${AMAZON_TAG}`,
  },
  primeYoungAdults: {
    eyebrow: "Prime for Young Adults",
    heading: "Student or 18-24? Save more.",
    body: "Get Prime free for 6 months, then 50% off, plus 5% cash back on electronics and more.",
    cta: "Check Eligibility",
    href: `https://www.amazon.com/primeyoungadult?tag=${AMAZON_TAG}`,
  },
  haul: {
    eyebrow: "Amazon Haul",
    heading: "Want it even cheaper?",
    body: "Browse budget-friendly finds starting at just $2.99 on Amazon Haul.",
    cta: "Shop Amazon Haul",
    href: `https://www.amazon.com/haul?tag=${AMAZON_TAG}`,
  },
};

export function AmazonBountyBanner({ variant = "prime", className }: AmazonBountyBannerProps) {
  const v = VARIANTS[variant];

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-border mb-10 aspect-[4/1] min-h-[180px] sm:min-h-0",
        className
      )}
    >
      <Image
        src="/images/banners/banner-deskfinds-v2.webp"
        alt="DeskFinds desk setup with docking station"
        fill
        priority={false}
        sizes="(max-width: 640px) 100vw, 900px"
        className="object-cover"
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-3/5 bg-gradient-to-r from-white via-white/85 to-transparent"
        aria-hidden="true"
      />

      <div className="relative h-full flex flex-col justify-center gap-2 p-5 sm:p-7 max-w-[90%] sm:max-w-[55%]">
        <span className="inline-block w-fit text-[11px] font-bold uppercase tracking-widest text-accent-dark">
          {v.eyebrow}
        </span>
        <h3 className="text-base sm:text-xl font-bold leading-snug text-ink">{v.heading}</h3>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-md">{v.body}</p>

        <a
          href={v.href}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-btn bg-accent text-white font-semibold text-sm px-5 py-3 min-h-[44px] hover:bg-accent-dark active:scale-[0.98] transition-all shadow-sm hover:shadow whitespace-nowrap w-fit"
        >
          {v.cta}
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}
