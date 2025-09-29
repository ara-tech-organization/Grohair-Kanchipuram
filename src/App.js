import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BookNow from "./Pages/Booknow";
import ThankYou from "./Components/Booknow/Thankyou";
import Hairtransplant from "./Pages/Hairtransplant";

function App() {
  return (
    <>
      
      {/* HelmetProvider for SEO-friendly head tags */}
      <HelmetProvider>
        <Routes>
          {/* Home routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/hairtransplant" element={<Hairtransplant />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
