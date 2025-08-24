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
  title: "Metalogue Studio - Creative Production House",
  description: "Professional photography, videography, branding, and digital marketing services. We create compelling visual narratives that elevate brands through innovative storytelling.",
  keywords: ["photography", "videography", "branding", "digital marketing", "creative agency", "visual storytelling"],
  authors: [{ name: "Metalogue Studio" }],
  creator: "Metalogue Studio",
  publisher: "Metalogue Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metalogue.studio"),
  openGraph: {
    title: "Metalogue Studio - Creative Production House",
    description: "Professional photography, videography, branding, and digital marketing services.",
    url: "https://metalogue.studio",
    siteName: "Metalogue Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metalogue Studio - Creative Production House",
    description: "Professional photography, videography, branding, and digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
