import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: "@deskfinds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Google Analytics and Microsoft Clarity must only fire in production. Both scripts previously
  // loaded unconditionally, so any `npm run dev` session (including automated local testing)
  // reported real pageviews into the live production GA/Clarity properties, polluting analytics
  // with dev traffic that has nothing to do with real visitors. Gate both behind NODE_ENV.
  const isProd = process.env.NODE_ENV === "production";
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {isProd && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-NR734FVRW1" />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NR734FVRW1');
            `}} />
            <script dangerouslySetInnerHTML={{ __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xaiyksyeyk");
            `}} />
          </>
        )}
      </head>
      <body className="h-full antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
