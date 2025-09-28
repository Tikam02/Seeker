import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seeker - India's Zero Commission Service Marketplace",
  description: "Connect directly with verified professionals. Helpers keep 100% of their earnings. No hidden fees, no commissions. Find trusted help for home repairs, tech support, and more.",
  keywords: "service marketplace, zero commission, home services, verified professionals, direct payments, India",
  authors: [{ name: "Seeker Team" }],
  openGraph: {
    title: "Seeker - India's Zero Commission Service Marketplace",
    description: "Connect directly with verified professionals. No commissions, no hidden fees.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
