/** @format */

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Awesome Landing Page",
  description: "A catchy description of your landing page.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Your Awesome Landing Page",
    description: "A catchy description of your landing page.",
    url: "https://your-domain.com", // Replace with your domain
    siteName: "Your Site Name",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Awesome Landing Page",
    description: "A catchy description of your landing page.",
    images: ["https://your-domain.com/twitter-image.png"], // Replace with your Twitter image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
