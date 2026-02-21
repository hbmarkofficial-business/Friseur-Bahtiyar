import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bochum | Friseur Bahtiyar</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Friseur Bahtiyar in Bochum für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum"
        />
        <link rel="canonical" href="https://friseur-bahtiyar.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Friseur Bahtiyar | Premium Barbershop Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bochum bei Friseur Bahtiyar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://friseur-bahtiyar.de" />
        <meta property="og:image" content="https://friseur-bahtiyar.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseur Bahtiyar | Premium Barbershop Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman bei Friseur Bahtiyar."
        />
        <meta name="twitter:image" content="https://friseur-bahtiyar.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Friseur Bahtiyar",
            "image": "https://friseur-bahtiyar.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Alleestraße 127",
              "addressLocality": "Bochum",
              "postalCode": "44793",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4818",
              "longitude": "7.2162"
            },
            "url": "https://friseur-bahtiyar.de",
            "telephone": "+49 173 2903543",
            "openingHours": "Mo-Fr 09:00-18:30, Sa 08:30-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/friseurbahtiyar",
              "https://www.instagram.com/friseurbahtiyar"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

