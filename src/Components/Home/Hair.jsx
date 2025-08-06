import React, { useState, useRef } from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const specialties = [
  {
    id: 1,
    title: "Scalp Micropigmentation (SMP)",
    description: "Creates the look of denser hair with precision pigmentation.",
    image: require("../Images/s1.png"),
  },
  {
    id: 2,
    title: "Eyebrow Transplantation",
    description: "Redefine your natural look with expert eyebrow restoration.",
    image: require("../Images/s2.png"),
  },
  {
    id: 3,
    title: "Stem X Pro Therapy",
    description: "Hair rejuvenation using stem cell growth factors.",
    image: require("../Images/s3.jpeg"),
  },
  {
    id: 4,
    title: "Meso Therapy",
    description:
      "Nutrient-rich serums injected into the scalp to strengthen roots and regrow hair.",
    image: require("../Images/s4.jpeg"),
  },
  {
    id: 5,
    title: "Oxygen Laser Therapy",
    description:
      "Laser technique + oxygen infusion to nourish the scalp and boost circulation.",
    image: require("../Images/s5.jpeg"),
  },
];

const SpecialtySlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = specialties[selectedIndex];
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: "#fefdfdff", py: 10, px: { xs: 2, md: 8, lg: 1 } }}>
      <Typography
        fontSize={{ lg: "2rem", xs: "1.7rem", sm: "2rem" }}
        fontWeight="bold"
        textAlign="center"
        fontFamily="Poppins"
        mt={{ lg: 9, md: 10, sm: 6, xs: 5 }}
        mb={{ xs: 5, sm: 6, md: 2, lg: 1 }}
        
      >
        HAIR{" "}
        <Box component="span" color="#ff0000ff">
          TREATMENT
        </Box>
      </Typography>

      <Grid container spacing={4}>
        {/* Left Image */}
        <Grid size={{ lg: 5, xs: 12 }} mt={8}>
          <Box
            component="img"
            src={selected.image}
            alt={selected.title}
            sx={{
              width: { lg: "95%", sm: "50%", xs: "90%" },
              height: { lg: 450, md: 350, sm: 350 },
              borderRadius: 3,
              objectFit: "cover",
              ml: { lg: 2, sm: 27, md: 30, xs: 3 },
            }}
          />
        </Grid>

        {/* Right Section */}
        <Grid size={{ lg: 6, xs: 12 }} ml={2} order={{ xs: 2, md: 1 }} mt={5}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            height="100%"
            mt={1}
          >
            <Typography variant="h6" color="text.secondary" mb={1}>
              Top Hair Solutions at GloSkin Dindigul
            </Typography>

            <Typography
              fontSize={{ lg: "1.8rem", xs: "1.8rem" }}
              fontWeight="bold"
              color="red"
              fontFamily="Poppins"
              mb={3}
            >
              Top Hair Solutions at GroHair Dindigul
            </Typography>

            <Typography variant="h6" color="black" mb={5}>
              Combat hair thinning, bald spots, and hair fall with proven,
              personalized treatments tailored to your scalp and hair type.
              Experience visible transformation with expert dermatologists.
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
                   lg:'flex-start' // ✅ left align cards on md
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
              {specialties.map((item, index) => (
                <Paper
                  key={item.id}
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
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpecialtySlider;
