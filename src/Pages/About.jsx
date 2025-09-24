import React from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import Section from "../Components/About/WeProvider";
import FAQ from "../Components/About/FAQ";
import FAQSkin from "../Components/About/FAQSkin";
import Footer from "../Components/Footer";
=======
import { Helmet } from "react-helmet-async";
import FAQ from "../Components/About/FAQ";

import Header from "../Components/Header";
import Section from "../Components/About/WeProvider";
import Footer from "../Components/Footer";
import FAQSkin from "../Components/About/FAQSkin";
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336

function About() {
  return (
    <div>
      <Helmet>
<<<<<<< HEAD
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

=======
        <title>About Us - GroHair & GloSkin</title>
        <meta name="description" content="Learn more about GroHair & GloSkin, the leading hair and skin care clinic in Kanchipuram." />
      </Helmet>
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336
      <Header />
      <Section />
      <FAQ />
      <FAQSkin />
      <Footer />
    </div>
  );
}

export default About;
