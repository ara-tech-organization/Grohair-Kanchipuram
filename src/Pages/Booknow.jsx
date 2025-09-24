<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import BookAppointment from "../Components/Booknow/Booknow";
import Footer from "../Components/Footer";
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import BookAppointment from '../Components/Booknow/Booknow'
import Footer from '../Components/Footer'
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336

function Booknow() {
  return (
    <div>
      <Helmet>
<<<<<<< HEAD
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
=======
        <title>Book Appointment - GroHair & GloSkin</title>
        <meta name="description" content="Schedule your appointment with GroHair & GloSkin, the leading hair and skin care clinic in Kanchipuram." />
      </Helmet>
>>>>>>> 636cf233fbe5a233388b628873eb7623eb391336
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default Booknow;
