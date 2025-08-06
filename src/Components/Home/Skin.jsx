import React, { useState } from "react";
import { Box, Typography, IconButton, Paper, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Hair treatment data
const treatments = [
  {
    title: "Microblading",
    desc: "A semi-permanent eyebrow enhancement technique that creates natural-looking brows through precise pigment strokes.",
    image: require("../Images/H1.jpeg"),
  },
  {
    title: "Skin Brightening Treatment",
    desc: "A strong treatment targeting day-to-day aches and chronic pain.",
    image: require("../Images/H2.jpeg"),
  },
  {
    title: "Q-Switch Laser",
    desc: "Advanced laser treatment that targets deep pigmentation, melasma, and stubborn dark spots. Safe for all skin types with minimal downtime.",
    image: require("../Images/H3.jpeg"),
  },
  {
    title: "HydraFacial",
    desc: "A multi-step facial that cleanses, exfoliates, and deeply hydrates the skin. Ideal for improving texture, tone, and overall clarity.",
    image: require("../Images/H4.jpeg"),
  },
  {
    title: "Laser Hair Removal",
    desc: "A permanent hair reduction solution using FDA-approved laser technology. Safe for all body areas and suitable for both men and women.",
    image: require("../Images/H5.jpeg"),
  },
];

const HairSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = treatments[selectedIndex]; // ✅ fixed name
  const scrollRef = React.useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: "#fefdfdff", py: 10, px: { xs: 2, md: 8, lg: 10 } }}>
      {/* TITLE OUTSIDE THE SECTION */}
      <Typography
        fontSize={{ lg: "2rem", xs: "1.7rem", sm: "2rem" }}
        fontWeight="bold"
        textAlign="center"
        fontFamily="Poppins"
        mt={{ lg: 9, md: 10, sm: 6, xs: 5 }}
        mb={{ xs: 5, sm: 6, md: 2, lg: 10}}
        ml={{lg:4}}
      >
        SKIN{" "}
        <Box component="span" color="#ff0000ff">
          TREATMENT
        </Box>
      </Typography>

      <Grid container spacing={4}>
        {/* Left Image */}
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box
            component="img"
            src={selected.image}
            alt={selected.title}
            sx={{
              width: { lg: "95%", sm: "50%", xs: "90%" },
              height: { lg: 450, md: 350, xs: 250 },
              borderRadius: 3,
              objectFit: "cover",
              ml: { lg: 2, sm: 22, md: 25, xs: 3 },
            }}
          />
        </Grid>

        {/* Right Section */}
        <Grid size={{ lg: 6, xs: 12 }} ml={2} mt={-3} order={{ xs: 2, md: 1 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            height="100%"
            fontFamily="Poppins"
          >
            <Typography variant="h6" color="text.secondary" mb={1}>
              Top Skin Solutions at GroHair Dindigul
            </Typography>

            <Typography
              fontSize={{ lg: "1.8rem", xs: "1.8rem" }}
              fontWeight="bold"
              color="red"
              fontFamily="Poppins"
              mb={3}
            >
              Our Most Popular Skin Treatments
            </Typography>

            <Typography
              fontSize={{ xs: "1rem", lg: "1.2rem",sm:'1.2rem' }}
              color="black"
              mb={5}
            >
              Our most popular skin treatments are crafted for issues like
              pigmentation, acne, dullness, and aging. Each session is designed
              by certified dermatologists to deliver healthy, radiant skin.
            </Typography>

            {/* Card Slider */}
                      <Box
              ref={scrollRef}
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "flex",
                  lg: "flex",
                },
                flexWrap: {
                  md: "wrap",
                  lg: "nowrap",
                },
                justifyContent: {
                  md: "center", 
                  lg:'flex-start' // ✅ fixes last box centering
                },
                overflow: {
                  xs: "hidden",
                  sm: "hidden",
                  md: "hidden",
                  lg: "auto",
                },
                gap: 2,
                pb: 1,
                scrollSnapType: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "x mandatory",
                },
                width: "100%",
                height: "90%",
                ml: { lg: 10, md: -5 ,xs:10,md:4},
              }}
            >
              {treatments.map((item, index) => (
                <Paper
                  key={index}
                  elevation={selectedIndex === index ? 4 : 1}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    py: 5,
                    ml: { sm: 5, sx: 0 },
                    width: {
                      xs: "80%",
                      sm: "80%",
                      md: "42%", // ✅ two boxes per row on md
                      lg: 250,
                    },
                    maxWidth: { lg: 280 },
                    borderRadius: 3,
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    border:
                      selectedIndex === index
                        ? "2px solid #ff3647ff"
                        : "1px solid transparent",
                    cursor: "pointer",
                    transition: "0.3s",
                    mb: {
                      xs: 2,
                      sm: 2,
                      md: 2,
                      lg: 0,
                    },
                    "&:hover": {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, fontSize: "0.8rem" }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              ))}
            </Box>


            {/* Navigation Buttons
            <Box
              mt={3}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={2}
            >
              <IconButton
                onClick={scrollLeft}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#E2231A",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                onClick={scrollRight}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#E2231A",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HairSection;
