import React from "react";
import { Helmet } from "react-helmet-async";
import FAQ from "../Components/About/FAQ";

import Header from "../Components/Header";
import Section from "../Components/About/WeProvider";
import Footer from "../Components/Footer";
import FAQSkin from "../Components/About/FAQSkin";

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - GroHair & GloSkin</title>
        <meta name="description" content="Learn more about GroHair & GloSkin, the leading hair and skin care clinic in Kanchipuram." />
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
