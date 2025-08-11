import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
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

// Treatments data
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

const SkinSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = treatments[selectedIndex];
  const scrollRef = useRef();
  const cardRefs = useRef([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#fefdfdff", py: 10, px: { xs: 2, md: 8, lg: 10 } }}>
      {/* Title */}
      <Typography
        fontSize={{ lg: "2rem", xs: "1.7rem", sm: "2rem" }}
        fontWeight="bold"
        textAlign="center"
        fontFamily="Poppins"
        mt={{ lg: 9, md: 10, sm: 6, xs: -5 }}
        mb={{ xs: 5, sm: 6, md: 4, lg: 10 }}
        ml={{ lg: 4 }}
        data-aos="flip-up"
      >
        SKIN{" "}
        <Box component="span" color="#ff0000ff">
          TREATMENT
        </Box>
      </Typography>

      {isMobile ? (
        // ✅ Mobile slider
        <Box mt={5}>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            style={{
              "--swiper-navigation-color": "red",
            }}
            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
          >
            {treatments.map((item, index) => (
              <SwiperSlide key={index}>
                <Paper>
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
                    {item.desc}
                  </Typography>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        // ✅ Desktop/Tablet Layout
        <Grid container spacing={4}>
          {/* Content Section */}
          <Grid
            size={{ lg: 6, xs: 12 }}
            ml={2}
            mt={-3}
            order={{ xs: 1, sm: 1, md: 1, lg: 0 }}
            data-aos="fade-up"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              height="100%"
              width={"100%"}
              fontFamily="Poppins"
            >
              <Typography variant="h6" color="text.secondary" mb={1}>
                Top Skin Solutions at GroHair Kanchipuram
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
                fontSize={{ xs: "1.2rem", lg: "1.2rem", sm: "1.3rem" }}
                color="black"
                mb={5}
              >
                Our most popular skin treatments are crafted for issues like
                pigmentation, acne, dullness, and aging. Each session is
                designed by certified dermatologists to deliver healthy, radiant
                skin.
              </Typography>

              {/* Card Slider */}
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
                  gap: -1,
                  pb: 1,
                  scrollSnapType: { xs: "none", lg: "x mandatory" },
                  width: "105%",
                  height: "90%",
                  ml: { lg: 1, md: -7, xs: 0 },
                }}
              >
                {treatments.map((item, index) => (
                  <Paper
                    key={index}
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
                      px: 2,
                      ml: { xs: 4, lg: 2, sm: 7 },
                      width: { xs: "70%", sm: "80%", md: "35%", lg: "40%" },
                      flexShrink: 0,
                      scrollSnapAlign: "start",
                      backgroundColor: "white",
                      color: "black",
                      cursor: "pointer",
                      borderRadius: 3,
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
                      fontSize={{
                        lg: "1.2rem",
                        md: "1.3rem",
                        sm: "1.2rem",
                        xs: "1.2rem",
                      }}
                      sx={{
                        color: "black",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2,
                        ml: { lg: 2, sm: 10, md: 4, xs: 2 },
                        fontSize: "1rem",
                        width: {
                          lg: "220px",
                          xs: "90%",
                          sm: "460px",
                          md: "250px",
                        },
                        color: "text.secondary",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid
            size={{ lg: 5, xs: 12 }}
            order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
            data-aos="fade-down"
            borderRadius={"40px"}
          >
            <Box
              component="img"
              src={selected.image}
              alt={selected.title}
              sx={{
                width: { lg: "100%", sm: "70%", xs: "90%" },
                height: { lg: 450, md: 370, xs: 250 },
                borderRadius: 3,
                objectFit: "cover",
                ml: { lg: 10, sm: 14, md: 17, xs: 3 },
              }}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default SkinSection;
