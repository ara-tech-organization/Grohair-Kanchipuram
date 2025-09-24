import React from "react";
import { Helmet } from "react-helmet";

import GrohairLanding from "../Components/hairtransplant1/page1";
// import Footer from "../Components/Footer";

function Hairtransplant() {
  return (
    <div>
      <Helmet>
        <title>Hair Transplant – GroHair & GloSkin</title>
        <meta
          name="description"
          content="Experience expert hair transplant and hair regrowth treatments at GroHair & GloSkin in Kanchipuram. Book your consultation today."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Hair Transplant – GroHair & GloSkin" />
        <meta
          property="og:description"
          content="Experience expert hair transplant and hair regrowth treatments at GroHair & GloSkin in Kanchipuram. Book your consultation today."
        />
        <meta property="og:image" content="%PUBLIC_URL%/image.jpg" />
        <meta property="og:url" content="https://adgrohairgloskinkanchipuram.in/hairtransplant" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adgrohairgloskinkanchipuram.in" />
        <meta property="twitter:url" content="https://adgrohairgloskinkanchipuram.in/hairtransplant" />
        <meta name="twitter:title" content="Hair Transplant – GroHair & GloSkin" />
        <meta
          name="twitter:description"
          content="Experience expert hair transplant and hair regrowth treatments at GroHair & GloSkin in Kanchipuram. Book your consultation today."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/image.jpg" />
      </Helmet>

      <GrohairLanding />
      {/* <Footer /> */}
    </div>
  );
}

export default Hairtransplant;
