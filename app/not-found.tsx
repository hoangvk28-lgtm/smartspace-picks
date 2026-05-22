import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container narrow className="py-24 text-center">
      <p className="text-8xl font-bold text-border mb-6" aria-hidden="true">404</p>
      <h1 className="text-3xl font-bold text-ink mb-4">Page Not Found</h1>
      <p className="text-ink-secondary mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Try browsing our buying guides instead.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="px-5 py-2.5 bg-brand text-white font-semibold rounded-btn hover:bg-brand-dark transition-colors text-sm">
          Go Home
        </Link>
        <Link href="/best" className="px-5 py-2.5 bg-white border border-border text-ink font-semibold rounded-btn hover:border-brand hover:text-brand transition-colors text-sm">
          Browse Guides
        </Link>
      </div>
    </Container>
  );
}
