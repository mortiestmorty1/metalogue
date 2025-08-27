'use client';

import React from 'react';
import Head from 'next/head';

const SEOHead: React.FC = () => {
  return (
    <Head>
      {/* Favicon Configuration */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Viewport and Theme */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#dc2626" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Metalogue Studio" />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="author" content="Metalogue Studio" />
      <meta name="copyright" content="Metalogue Studio" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="F10 Markaz" />
      <meta name="business:contact_data:locality" content="Islamabad" />
      <meta name="business:contact_data:country_name" content="Pakistan" />
      <meta name="business:contact_data:phone_number" content="+92 335 833 3027" />
      <meta name="business:contact_data:email" content="Zulqafilammer@gmail.com" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:site_name" content="Metalogue Studio" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ur_PK" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:site" content="@metalogue_" />
      <meta name="twitter:creator" content="@metalogue_" />
      <meta name="twitter:app:country" content="PK" />
      
      {/* Mobile Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Metalogue Studio" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/assets/Best Work of Metalogue/Branding/MATALOGUE.png" as="image" />
      <link rel="preload" href="/assets/Best Work of Metalogue/Fashion Shoot/5 wallpaper.jpg" as="image" />
      
      {/* DNS Prefetch for External Domains */}
      <link rel="dns-prefetch" href="//www.youtube.com" />
      <link rel="dns-prefetch" href="//img.youtube.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      <meta name="msapplication-TileImage" content="/favicon.png" />
      
      {/* Theme Colors */}
      <meta name="theme-color" content="#dc2626" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Local Business Schema Hints */}
      <meta name="geo.region" content="PK-IS" />
      <meta name="geo.placename" content="Islamabad" />
      <meta name="geo.position" content="33.6844;73.0479" />
      <meta name="ICBM" content="33.6844, 73.0479" />
      
      {/* Service Area */}
      <meta name="service-area" content="Pakistan, UAE, Saudi Arabia, UK, USA" />
      <meta name="service-type" content="Creative Agency, Photography, Videography, Branding, Digital Marketing" />
      
      {/* Business Hours */}
      <meta name="business:hours:day" content="Monday" />
      <meta name="business:hours:start" content="09:00" />
      <meta name="business:hours:end" content="18:00" />
      <meta name="business:hours:day" content="Tuesday" />
      <meta name="business:hours:day" content="Wednesday" />
      <meta name="business:hours:day" content="Thursday" />
      <meta name="business:hours:day" content="Friday" />
    </Head>
  );
};

export default SEOHead;
