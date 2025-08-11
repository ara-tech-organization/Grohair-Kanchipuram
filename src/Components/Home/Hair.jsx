import React, { useState, useRef } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const cardRefs = useRef([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#fefdfdff", py: 10, px: { xs: 2, md: 8, lg: 1 } }}>
      <Typography
        fontSize={{ lg: "2rem", xs: "1.7rem", sm: "2rem" }}
        fontWeight="bold"
        textAlign="center"
        fontFamily="Poppins"
        mt={{ lg: 9, md: 10, sm: 6, xs: 5 }}
        mb={{ xs: 5, sm: 6, md: -5, lg: 1 }}
        ml={{ lg: 5 }}
         data-aos="flip-up"
      >
        HAIR{" "}
        <Box component="span" color="#ff0000ff">
          TREATMENT
        </Box>
      </Typography>

      {isMobile ? (
        // ✅ Mobile Swiper with dynamic description below
        <Box mt={5}>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            style={{ "--swiper-navigation-color": "red" }}
            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
          >
            {specialties.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
                <Typography
                  mt={3}
                  fontWeight={700}
                  sx={{ textAlign: "center" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  mt={2}
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  {item.description}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>

       
        </Box>
      ) : (
        // Desktop Layout (unchanged)
        <Grid container spacing={4} alignItems="center">
          {/* Right Section - Text + Cards */}
          <Grid
            size={{ lg: 6, xs: !2 }}
            order={{ xs: 1, sm: 1, md: 1, lg: 1 }}
            mt={{ lg: 5, xs: -1, sm: 5 }}
              data-aos="fade-down"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              height="100%"
              mt={1}
            >
              <Typography variant="h6" color="text.secondary" mb={1}>
                Top Hair Solutions at GloSkin Kanchipuram
              </Typography>

              <Typography
                fontSize={{ lg: "1.8rem", xs: "1.8rem" }}
                fontWeight="bold"
                color="red"
                fontFamily="Poppins"
                mb={3}
              >
                Top Hair Solutions at GroHair Kanchipuram
              </Typography>

              <Typography
                fontSize={{ sm: "1.3rem" }}
                color="black"
                mb={5}
                ml={{ lg: 3 }}
              >
                Combat hair thinning, bald spots, and hair fall with proven,
                personalized treatments tailored to your scalp and hair type.
                Experience visible transformation with expert dermatologists.
              </Typography>

              {/* Card Layout */}
              <Box
                ref={scrollRef}
                sx={{
                  display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
                  flexWrap: { md: "wrap", lg: "nowrap" },
                  justifyContent: { md: "center", lg: "flex-start" },
                  overflow: {
                    xs: "hidden",
                    sm: "hidden",
                    md: "hidden",
                    lg: "auto",
                  },
                  gap: 1,
                  pb: 1,
                  borderRadius: 10,
                  scrollSnapType: { xs: "none", lg: "x mandatory" },
                  width: "100%",
                  height: "90%",
                  ml: { lg: 10, md: -7, xs: 0 },
                }}
              >
                {specialties.map((item, index) => (
                  <Paper
                    key={item.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    onClick={() => {
                      setSelectedIndex(index);
                      cardRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        inline: "center",
                        block: "nearest",
                      });
                    }}
                    sx={{
                      py: 5,
                      px: 3,
                      ml: { xs: 4, lg: 2, sm: 6 },
                      width: { xs: "70%", sm: "80%", md: "35%", lg: 250 },
                      flexShrink: 0,
                      scrollSnapAlign: "start",
                      backgroundColor: "white",
                      color: "black",
                      cursor: "pointer",
                      transition:
                        "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                      mb: { xs: 2, sm: 2, md: 2, lg: 0 },
                      "&:hover": {
                        backgroundColor: "#fefcf9",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      fontSize={{ lg: "1.2rem", sm: "1.2rem", xs: "1rem" }}
                      sx={{ color: "black" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize={{ sm: "1rem" }}
                      sx={{
                        mt: 2,
                        ml: { lg: 1.5, sm: 10, md: 4, xs: 2 },
                        width: {
                          lg: "220px",
                          xs: "90%",
                          sm: "460px",
                          md: "250px",
                        },
                        color: "text.secondary",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Left Section - Image */}
          <Grid
            size={{ lg: 5, xs: 15, mt: 8 }}
            order={{ xs: 2, sm: 2, md: 2, lg: 0 }}
              data-aos="fade-up"
          >
            <Box
              component="img"
              src={selected.image}
              alt={selected.title}
              sx={{
                width: { lg: "90%", sm: "70%", xs: "80%" },
                height: { lg: 450, md: 350, sm: 350, xs: 270 },
                borderRadius: 3,
                objectFit: "cover",
                ml: { lg: 7, sm: 15, md: 17, xs: 5 },
                mt: { lg: 5 },
              }}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default SpecialtySlider;
