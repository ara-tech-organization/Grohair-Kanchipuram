import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

// Images
import Scalp from "../Images/s1.png";
import Eyebrow from "../Images/s2.png";
import Stemx from "../Images/s3.jpeg";
import Meso from "../Images/s4.jpeg";
import Oxygen from "../Images/s5.jpeg";
import Brightening from "../Images/H2.jpeg";
import QSwitch from "../Images/H3.jpeg";
import Hydra from "../Images/H4.jpeg";
import Laser from "../Images/H5.jpeg";
import RF from "../Images/H2.jpeg";
import Botox from "../Images/s3.jpeg";
import Microblading from "../Images/H1.jpeg";
import Wart from "../Images/s5.jpeg";

// Image map
const ServiceImages = {
  "Scalp MicroPigmentation": Scalp,
  "Eyebrow Transplantation": Eyebrow,
  "Stem X Pro": Stemx,
  "Meso Therapy": Meso,
  "Oxygen Laser Therapy": Oxygen,
  "Skin Brightening Treatment": Brightening,
  "Q-Switch": QSwitch,
  "Hydra Facial": Hydra,
  "Laser Hair Removal": Laser,
  "RF Anti Aging Facial": RF,
  "Botox": Botox,
  "Microblading": Microblading,
  "Wart Removal": Wart,
};

// Services data
const services = [
  { name: "Scalp MicroPigmentation", points: ["Non-invasive solution to restore the appearance of hair follicles.", "Creates a natural-looking hairline using micro-dots.", "Ideal for bald spots or thinning areas."] },
  { name: "Eyebrow Transplantation", points: ["Surgical method to restore thinning or lost eyebrow hair.", "Uses your own hair for a natural result.", "Long-lasting and precise reshaping of brows."] },
  { name: "Stem X Pro", points: ["Next-gen therapy with stem cell extracts to energize follicles.", "Triggers new hair growth naturally.", "Recommended for early-stage thinning and scalp restoration."] },
  { name: "Meso Therapy", points: ["Micro-injections deliver nutrients into the scalp.", "Boosts blood flow and revitalizes hair at the root level.", "Helps reduce hair fall and improve scalp health."] },
  { name: "Oxygen Laser Therapy", points: ["Combines oxygen infusion with laser stimulation.", "Promotes cell regeneration and strengthens hair roots.", "Improves scalp oxygenation and hair density."] },
  { name: "Skin Brightening Treatment", points: ["Targets uneven skin tone and pigmentation.", "Uses safe serums and light-based technologies.", "Leaves skin visibly brighter and radiant."] },
  { name: "Q-Switch", points: ["Laser to target pigmentation, melasma, and sun damage.", "Safe for tattoo removal too.", "Brightens tone and improves skin texture."] },
  { name: "Hydra Facial", points: ["3-step cleansing, exfoliation, and hydration.", "Unclogs pores and reduces fine lines.", "Leaves skin refreshed and radiant."] },
  { name: "Laser Hair Removal", points: ["Painless and permanent hair reduction.", "Safe for all skin types.", "Reduces ingrown hairs and smoothens skin."] },
  { name: "RF Anti Aging Facial", points: ["Radio frequency tech tightens skin naturally.", "Boosts collagen and smooths wrinkles.", "Non-surgical solution to younger skin."] },
  { name: "Botox", points: ["Reduces wrinkles and expression lines.", "Targets crow’s feet, forehead creases, etc.", "Minimal downtime, instant youthful look."] },
  { name: "Microblading", points: ["Semi-permanent shaping of eyebrows using fine strokes.", "Creates realistic arches and volume.", "Perfect for sparse or uneven brows."] },
  { name: "Wart Removal", points: ["Removes warts, tags, and minor skin growths.", "Laser/cryo for precise, scar-free results.", "Quick healing and outpatient-friendly."] },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Box sx={{ py: 10, px: { xs: 2, sm: 4, md: 6, xl: 12 }, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        marginTop={7}
        sx={{ fontSize: { xs: "28px", sm: "34px", lg: "38px" }, mb: 3 }}
        data-aos="fade-up"
      >
        Our Services
      </Typography>

      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{
          maxWidth: "1000px",
          margin: "0 auto",
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          color: "#444",
          lineHeight: 1.8,
          px: { xs: 1, sm: 2 },
        }}
      >
        Unlock expert care in hair restoration and skincare at GroHair & GloSkin Chidambaram. From cutting-edge hair loss treatments to rejuvenating skin therapies, we deliver results-focused solutions that enhance beauty, restore confidence, and support long-term wellness.
      </Typography>

      {/* Chips with individual zoom-in */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          rowGap: 3,
          maxWidth: "1200px",
          mx: "auto",
          mt: 5,
        }}
      >
        {services.map((service, index) => (
          <Box key={service.name} data-aos="zoom-in" data-aos-delay={index * 100}>
            <Chip
              label={service.name}
              onClick={() => setActiveService(service)}
              sx={{
                px: 4,
                py: 2,
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
                borderRadius: "24px",
                height: "55px",
                backgroundColor: activeService.name === service.name ? "#f60000ff" : "#f1f1f1",
                color: activeService.name === service.name ? "#fff" : "#222",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: activeService.name === service.name
                  ? "0px 4px 12px rgba(0,0,0,0.2)"
                  : "none",
                "&:hover": {
                  backgroundColor: activeService.name === service.name
                    ? "#ff0000ff"
                    : "#e0e0e0",
                },
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Zoom-in box with image and text */}
      <Paper
      data-aos="zoom-in"
      data-aos-delay="200"
      elevation={0}
      sx={{
        mt: 10,
        maxWidth: "1000px",
        mx: "auto",
        p: { xs: 3, sm: 4, lg: 5 ,md:2},
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 3, sm: 4, md: 6 },
        borderRadius: "24px",
        backgroundColor: "#fff",
        ml:{md:6,lg:13},
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={ServiceImages[activeService.name]}
        alt={activeService.name}
        sx={{
          width: { xs: "100%", sm: "280px", md: "50%" },
          height: { xs: "auto", sm: "280px", md: "300px" },
          objectFit: "cover",
          borderRadius: "16px",
        }}
      />

      {/* Text Content */}
      <Box
        textAlign={{ xs: "center", sm: "left" }}
        sx={{ maxWidth: { xs: "100%", sm: "calc(100% - 300px)" } }}
      >
        <Typography
          fontSize={{ xs: "20px", sm: "24px", md: "28px" }}
          fontWeight={800}
          mb={2}
        >
          {activeService.name}
        </Typography>

        {activeService.points.map((point, idx) => (
          <Typography
            key={idx}
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "17px" },
              color: "#444",
              mb: 2,
            }}
          >
            • {point}
          </Typography>
        ))}
      </Box>
    </Paper>
    </Box>
  );
};

export default ServicesSection;