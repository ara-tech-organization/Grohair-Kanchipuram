import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "../Components/Header";
import Touch from "../Components/Contact/Touch";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact – GroHair & GloSkin</title>
        <meta
          name="description"
          content="Get in touch with GroHair & GloSkin in Kanchipuram for hair and skin treatments. Book consultations or ask questions about our services."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact – GroHair & GloSkin" />
        <meta
          property="og:description"
          content="Get in touch with GroHair & GloSkin in Kanchipuram for hair and skin treatments. Book consultations or ask questions about our services."
        />
        <meta property="og:image" content="%PUBLIC_URL%/image.jpg" />
        <meta
          property="og:url"
          content="https://adgrohairgloskinkanchipuram.in/contact"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="adgrohairgloskinkanchipuram.in"
        />
        <meta
          property="twitter:url"
          content="https://adgrohairgloskinkanchipuram.in/contact"
        />
        <meta name="twitter:title" content="Contact – GroHair & GloSkin" />
        <meta
          name="twitter:description"
          content="Get in touch with GroHair & GloSkin in Kanchipuram for hair and skin treatments. Book consultations or ask questions about our services."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/image.jpg" />
      </Helmet>

      <Header />
      <Touch />
      <Footer />
    </div>
  );
}
