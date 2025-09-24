import React from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";

=======
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336
import Header from "../Components/Header";
import OurServicesSection from "../Components/Services/SeviceSection";
import Skinsection from "../Components/Services/Skin";
import HairSection from "../Components/Home/Hair";
import Footer from "../Components/Footer";
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336

function Services() {
  return (
    <div>
      <Helmet>
<<<<<<< HEAD
        <title>Our Services – GroHair & GloSkin</title>
        <meta
          name="description"
          content="Explore hair and skin care treatments offered at GroHair & GloSkin in Kanchipuram. Book expert consultations for healthy hair and glowing skin."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Our Services – GroHair & GloSkin" />
        <meta
          property="og:description"
          content="Explore hair and skin care treatments offered at GroHair & GloSkin in Kanchipuram. Book expert consultations for healthy hair and glowing skin."
        />
        <meta property="og:image" content="%PUBLIC_URL%/image.jpg" />
        <meta property="og:url" content="https://adgrohairgloskinkanchipuram.in/services" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adgrohairgloskinkanchipuram.in" />
        <meta property="twitter:url" content="https://adgrohairgloskinkanchipuram.in/services" />
        <meta name="twitter:title" content="Our Services – GroHair & GloSkin" />
        <meta
          name="twitter:description"
          content="Explore hair and skin care treatments offered at GroHair & GloSkin in Kanchipuram. Book expert consultations for healthy hair and glowing skin."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/image.jpg" />
      </Helmet>

=======
        <title>Our Services - GroHair & GloSkin</title>
        <meta
          name="description"
          content="Explore the range of services offered by GroHair & GloSkin, the leading hair and skin care clinic in Kanchipuram."
        />
      </Helmet>
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336
      <Header />
      <OurServicesSection />
      <Skinsection />
      <HairSection />
      <Footer />
    </div>
  );
}

export default Services;
