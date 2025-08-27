import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeAgency",
    "name": "Metalogue Studio",
    "description": "Leading creative production house in Islamabad, Pakistan. Specializing in professional photography, videography, branding, digital marketing, and social media management.",
    "url": "https://metalogue.studio",
    "logo": "https://metalogue.studio/assets/Best Work of Metalogue/Branding/MATALOGUE.png",
    "image": "https://metalogue.studio/assets/Best Work of Metalogue/Branding/MATALOGUE.png",
    "telephone": "+92 335 833 3027",
    "email": "Zulqafilammer@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F10 Markaz",
      "addressLocality": "Islamabad",
      "addressCountry": "Pakistan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6844",
      "longitude": "73.0479"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "PKR, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": ["Pakistan", "United Arab Emirates", "Saudi Arabia", "United Kingdom", "United States"],
    "serviceType": [
      "Photography",
      "Videography", 
      "Branding",
      "Digital Marketing",
      "Social Media Management",
      "Content Creation",
      "Advertising"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity & Logo Design",
            "description": "Professional branding and logo design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photography & Videography",
            "description": "High-quality photography and video production"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing solutions"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/metalogue_/",
      "https://www.facebook.com/profile.php?id=61564221756891"
    ],
    "foundingDate": "2019",
    "numberOfEmployees": "10-50",
    "award": [
      "Awwwards Winner",
      "CSS Design Awards",
      "Design Excellence"
    ]
  };

  return (
    <>
      <SEOHead />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-brand-black">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
