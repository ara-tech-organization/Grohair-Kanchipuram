import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import BookAppointment from "../Components/Booknow/Booknow";
import Footer from "../Components/Footer";

function Booknow() {
  return (
    <div>
      <Helmet>
        <title>Book an Appointment – GroHair & GloSkin</title>
        <meta
          name="description"
          content="Book your hair or skin treatment appointment at GroHair & GloSkin in Kanchipuram. Expert care for healthy, glowing results."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Book an Appointment – GroHair & GloSkin" />
        <meta
          property="og:description"
          content="Book your hair or skin treatment appointment at GroHair & GloSkin in Kanchipuram. Expert care for healthy, glowing results."
        />
        <meta property="og:image" content="%PUBLIC_URL%/image.jpg" />
        <meta property="og:url" content="https://adgrohairgloskinkanchipuram.in/booknow" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="adgrohairgloskinkanchipuram.in" />
        <meta property="twitter:url" content="https://adgrohairgloskinkanchipuram.in/booknow" />
        <meta name="twitter:title" content="Book an Appointment – GroHair & GloSkin" />
        <meta
          name="twitter:description"
          content="Book your hair or skin treatment appointment at GroHair & GloSkin in Kanchipuram. Expert care for healthy, glowing results."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/image.jpg" />
      </Helmet>

      <Header />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default Booknow;
