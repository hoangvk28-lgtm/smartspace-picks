import Link from "next/link";
import { DISCLOSURE_SHORT } from "@/lib/affiliate";
import { clsx } from "@/lib/utils";

interface AffiliateDisclosureBarProps {
  variant?: "inline" | "banner";
  className?: string;
  disclosureText?: string;
}

export function AffiliateDisclosureBar({
  variant = "inline",
  className,
  disclosureText,
}: AffiliateDisclosureBarProps) {
  const text = disclosureText ?? DISCLOSURE_SHORT;

  if (variant === "banner") {
    return (
      <div
        className={clsx(
          "flex items-center gap-2.5 px-4 py-2.5 bg-brand-light border border-brand-muted rounded-lg w-full",
          className
        )}
      >
        <svg
          className="w-4 h-4 text-brand shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-brand min-w-0">
          <strong className="font-semibold">Affiliate Disclosure:</strong>{" "}
          {text}{" "}
          <Link
            href="/affiliate-disclosure"
            className="underline underline-offset-2 hover:no-underline font-medium whitespace-nowrap"
          >
            Full disclosure →
          </Link>
        </p>
      </div>
    );
  }

  return (
    <p className={clsx("text-xs text-ink-muted", className)}>
      {text}{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline underline-offset-2 hover:text-brand transition-colors"
      >
        Learn more
      </Link>
    </p>
  );
}
