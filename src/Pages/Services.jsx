import React from "react";
import Header from "../Components/Header";
import OurServicesSection from "../Components/Services/SeviceSection";
import Skinsection from "../Components/Services/Skin";
import HairSection from "../Components/Home/Hair";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <div>
      <Helmet>
        <title>Our Services - GroHair & GloSkin</title>
        <meta
          name="description"
          content="Explore the range of services offered by GroHair & GloSkin, the leading hair and skin care clinic in Kanchipuram."
        />
      </Helmet>
      <Header />
      <OurServicesSection />
      <Skinsection />
      <HairSection />
      <Footer />
    </div>
  );
}

export default Services;
