import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.clarity.ms; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' *.google-analytics.com *.supabase.co *.clarity.ms; style-src 'self' 'unsafe-inline'; frame-ancestors 'self';" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // non-www → www (301 permanent — tells Google which is canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "deskfinds.com" }],
        destination: "https://www.deskfinds.com/:path*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-deskfinds",
        permanent: true,
      },
      // Fix 404: broken guide URL → correct slug
      {
        source: "/guide/best-monitor-stand-for-small-desk",
        destination: "/guide/monitor-stands-small-desks",
        permanent: true,
      },
      // Fix 404: /author listing page → about page
      {
        source: "/author",
        destination: "/about-deskfinds",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // Type-checking already runs locally (`npx tsc --noEmit`) before every push per the
  // pre-commit gate. With 1600+ static guide pages, Next's in-build tsc pass was taking
  // long enough to hit the Vercel Hobby plan's ~45min build timeout, causing build errors
  // and backing up the deploy queue. Skip the redundant in-build check.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;
