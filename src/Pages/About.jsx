import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import Section from "../Components/About/WeProvider";
import FAQ from "../Components/About/FAQ";
import FAQSkin from "../Components/About/FAQSkin";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Helmet>
        <title>GroHair & GloSkin – Advanced Hair & Skin Care in Kanchipuram</title>
        <meta
          name="description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="GroHair & GloSkin – Advanced Hair & Skin Care in Kanchipuram" />
        <meta
          property="og:description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta property="og:image" content="%PUBLIC_URL%/image.jpg" />
        <meta property="og:url" content="https://adgrohairgloskinkanchipuram.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adgrohairgloskinkanchipuram.in" />
        <meta property="twitter:url" content="https://adgrohairgloskinkanchipuram.in/" />
        <meta
          name="twitter:title"
          content="GroHair & GloSkin – Advanced Hair & Skin Care in Kanchipuram"
        />
        <meta
          name="twitter:description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/image.jpg" />
      </Helmet>

      <Header />
      <Section />
      <FAQ />
      <FAQSkin />
      <Footer />
    </div>
  );
}

export default About;
