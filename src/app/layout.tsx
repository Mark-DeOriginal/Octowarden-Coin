import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Octowarden Coin – Guarding the Future of Finance",
  description:
    "Octowarden Coin is here to reshape digital finance with innovation, security, and long-term growth.",
  openGraph: {
    title: "Octowarden Coin – Guarding the Future of Finance",
    description:
      "Explore the Octowarden ecosystem, built for resilient communities who believe in secure and sustainable DeFi.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 1200,
        alt: "Octowarden Coin Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octowarden Coin – Guarding the Future of Finance",
    description:
      "Octowarden Coin empowers a community focused on innovation, security, and sustainable upside.",
    images: ["/opengraph-twitter.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.jpg" />
        <link rel="canonical" href="https://octowarden.online/" />
        <meta property="og:image" content="/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Octowarden Coin cover art" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/opengraph-twitter.jpg" />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          {children}
          <Analytics />
        </ClientBody>
      </body>
    </html>
  );
}
