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
  title: {
    default: "Metalogue Studio - Creative Production House | Islamabad, Pakistan",
    template: "%s | Metalogue Studio"
  },
  description: "Leading creative production house in Islamabad, Pakistan. Specializing in professional photography, videography, branding, digital marketing, and social media management. We create compelling visual narratives that elevate brands through innovative storytelling and cutting-edge creative solutions.",
  keywords: [
    "creative agency",
    "production house",
    "photography",
    "videography", 
    "branding",
    "logo design",
    "digital marketing",
    "social media management",
    "UGC content",
    "advertising",
    "creative direction",
    "visual storytelling",
    "brand identity",
    "marketing campaigns",
    "product photography",
    "fashion photography",
    "commercial photography",
    "video production",
    "content creation",
    "social media content",
    "brand strategy",
    "marketing strategy",
    "creative services",
    "Islamabad",
    "Pakistan"
  ],
  authors: [{ name: "Metalogue Studio", url: "https://metalogue.studio" }],
  creator: "Metalogue Studio",
  publisher: "Metalogue Studio",
  category: "Creative Agency",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metalogue.studio"),
  alternates: {
    canonical: "https://metalogue.studio",
  },
  openGraph: {
    title: "Metalogue Studio - Creative Production House | Islamabad, Pakistan",
    description: "Leading creative production house in Islamabad, Pakistan. Professional photography, videography, branding, and digital marketing services that elevate brands through innovative storytelling.",
    url: "https://metalogue.studio",
    siteName: "Metalogue Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/Best Work of Metalogue/Branding/MATALOGUE.png",
        width: 1200,
        height: 630,
        alt: "Metalogue Studio - Creative Production House",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metalogue Studio - Creative Production House | Islamabad, Pakistan",
    description: "Leading creative production house in Islamabad, Pakistan. Professional photography, videography, branding, and digital marketing services.",
    images: ["/assets/Best Work of Metalogue/Branding/MATALOGUE.png"],
    creator: "@metalogue_",
    site: "@metalogue_",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  other: {
    "theme-color": "#dc2626",
    "color-scheme": "dark",
    "msapplication-TileColor": "#dc2626",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Metalogue Studio",
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
