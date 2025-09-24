<<<<<<< HEAD
import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
=======
import { Box } from "@mui/material"; // ✅
import { Helmet } from "react-helmet-async";
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336

import Header from "../Components/Header";
import Herosection from "../Components/Home/Herosection";
import Section from "../Components/Home/WeProvider";
import HighlightSection from "../Components/Home/Leading";
import HairSection from "../Components/Home/Hair";
import TreatmentSlider from "../Components/Home/Skin";
import Trust from "../Components/Home/Trust";
import Clients from "../Components/Home/Clients";
import Footer from "../Components/Footer";

function Home() {
  return (
    <Box>
      <Helmet>
<<<<<<< HEAD
        <title>GroHair & GloSkin – Best Hair & Skin Care in Kanchipuram</title>
        <meta
          name="description"
          content="GroHair & GloSkin provides expert hair regrowth and skin treatments in Kanchipuram. Book a consultation for advanced hair and skin care solutions."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="GroHair & GloSkin – Best Hair & Skin Care in Kanchipuram" />
        <meta
          property="og:description"
          content="GroHair & GloSkin provides expert hair regrowth and skin treatments in Kanchipuram. Book a consultation for advanced hair and skin care solutions."
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
          content="GroHair & GloSkin – Best Hair & Skin Care in Kanchipuram"
        />
        <meta
          name="twitter:description"
          content="GroHair & GloSkin provides expert hair regrowth and skin treatments in Kanchipuram. Book a consultation for advanced hair and skin care solutions."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/image.jpg" />
      </Helmet>

=======
        <title>Home - GroHair & GloSkin</title>
        <meta name="description" content="Welcome to GroHair & GloSkin, your destination for premium hair and skin care in Kanchipuram." />
      </Helmet>
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336
      <Header />
      <Herosection />
      <Section />
      <HighlightSection />
      <HairSection />
      <TreatmentSlider />
      <Trust />
      <Clients />
      <Footer />
    </Box>
  );
}

export default Home;
