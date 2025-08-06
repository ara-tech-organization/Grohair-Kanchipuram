import { Box } from "@mui/material"; // ✅

import Herosection from "../Components/Home/Herosection";
import Header from "../Components/Header";
import Clients from '../Components/Home/Clients'


import Trust from "../Components/Home/Trust";

import Footer from '../Components/Footer'

import HairSection from "../Components/Home/Hair";
// import Skinsection from "../Components/Home/Skin";
import Section from "../Components/Home/WeProvider";
import HighlightSection from "../Components/Home/Leading";
// import SpecialtySlide from '../Components/Home/Skin';
import TreatmentSlider from "../Components/Home/Skin";
function Home() {
  return (
    <Box>
      <Header />
      <Herosection />
      <Section />
      <HighlightSection />
      <HairSection />
      <TreatmentSlider />
      <Trust />
      <Clients />
      <Footer/>
    </Box>
  );
}

export default Home;
