import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import quote from '../Images/quotation.png';
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: " -Ezhil Arasan",
    text: "I had an OLT and consultation for my hair treatment at the clinic. So far, the experience has been nice. The staff were polite, professional, and made me feel comfortable throughout. Looking forward to continuing my treatment here!",
    rating: 5,
  },
  {
    name: "-Mohan",
    text: "Hey ,I had a great experience with the ADVANCED GRO HAIR CLINIC in kanchipuram. The results were amazing . Specially need to mention Manager and Doctor's and also to the technician....😌👍",
    rating: 5,
  },
  {
    name: "-Chitra Salvarasu",
    text: `I visited advanced gro hair & glo skin Kanchipuram 
    I was facing more dandruff so one of my friends referred me to the visited clinic meet with
    Dr.Bharathi they suggested to me oxygen laser therapy I took the session.I got a very good result thank you`,
    rating: 5,
  },
  {
    name: "-Akash",
    text: "I have personally got good results, doctors give clear explanations to our doubts, I have good hair growth and The staff nurse treats clients with kindness and can go here for them",
    rating: 5,
  },
  {
    name: "-Gautham Karthik",
    text: "This clinic is always clean and the staff are respectful They make us feel good and always want us to be good.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const scrollRef = useRef();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#fff",
        ml: { sm: -10, xs: 1, md: -15, lg: -3 },
      }}
    >
      <Typography
        fontSize={{ xs: "1.5rem", lg: "2rem", sm: "2rem" }}
        align="center"
        fontWeight={700}
        color="#fa1212ff"
        ml={{ sm: 9 }}
        mb={5}
        data-aos="fade-up"
      >
        What Our Clients Say
      </Typography>

      <Box position="relative" sx={{ px: 2 }}>
        <Box
          data-aos="fade-up"
          ref={scrollRef}
          sx={{
            display: isMdUp ? "flex" : "grid",
            overflowX: isMdUp ? "auto" : "visible",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            gap: 2,
            // ✅ Remove unwanted left margin on xs/sm
            ml: { xs: 0, sm: 10, md: 15, lg: 4 },
            p: 1,
            gridTemplateColumns: isMdUp ? "none" : "1fr",
            justifyContent: isMdUp ? "flex-start" : "center", // ✅ center on xs/sm
            alignItems: "stretch",
            gridAutoRows: "1fr",
          }}
        >
          {testimonials.map((item, index) => (
            <Paper
              key={index}
              data-aos="fade-up"
              onClick={() =>
                setClickedIndex(index === clickedIndex ? null : index)
              }
              sx={{
                flex: 1,
                borderRadius: "20px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Align top
                alignItems: "flex-start", // Align left for all text/stars
                position: "relative",
                width: {
                  xs: "90%",
                  sm: "70%",
                  md: "320px",
                  lg: "30%",
                },
                height: { xs: "auto", sm: "auto", md: 250, lg: 330 }, // ✅ Equal height for md+ screens
                mx: "auto",
              }}
            >
              {/* Stars */}
              <Box mb={1}>
                {Array.from({ length: item.rating }, (_, i) => (
                  <StarIcon key={i} sx={{ color: "#FFC107", fontSize: 20 }} />
                ))}
              </Box>

              {/* Name */}
              <Typography
                sx={{ fontSize: { lg: "1.2rem", xs: "1.2rem" } }}
                fontWeight={700}
                mt={1}
              >
                {item.name}
              </Typography>

              {/* Description */}
              <Typography
                fontSize={{ lg: "0.90rem", xs: "1rem" }}
                mt={2}
                color="text.secondary"
              >
                {item.text}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsCarousel;
