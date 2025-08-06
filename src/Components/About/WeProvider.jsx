import React, { useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AboutImg from "../Images/2.jpeg"; // make sure it's a girl image
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: {lg:"95%",xs:'90%'},
        Height: "100vh",
        px: { xs: 2, md: 0,lg:8 },
        py: 6,
        gap: 6,
        backgroundColor: "#fff",
        position: "relative",
        mb: { md: 10 },
        ml: { sm: 7, lg: 1 },
        mt: 10,
       
      }}
    >
      {/* Left Side - Text */}
      <Box
        data-aos="fade-up"
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          ml: { sm: -5, lg: 2,md:2 },
        }}
      >
        <Typography
          sx={{
            color: "#000000ff",
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },
          }}
        >
          We Provide
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            color: "#E2231A",
            fontSize: {
              xs: "1.3rem",
              sm: "1.8rem",
              md: "2.5rem",
              lg: "2.8rem",
              xl:'2rem'
            },
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          Welcome to GroHair & GloSkin <br /> Dindigul
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* First Box */}
            <Box
              data-aos="zoom-in"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                maxWidth: {lg:500,md:600,sm:550},
                height: {lg:280,md:400,xs:200,sm:100},
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.90rem", sm: "1.3rem", md: "1.05rem" },
                  mt: 2,
                }}
              >
                GroHair and GloSkin combine their deep expertise in hair and skin
                wellness with the serene pace of Dindigul. Our clinic blends
                clinical precision with a luxurious experience, delivered by
                trained professionals in a safe, sterile setting.
              </Typography>
            </Box>

            {/* Second Box */}
            <Box
              data-aos="zoom-in"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                maxWidth: 550,
                 height: {lg:280,md:400,xs:200,sm:100},
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.95rem", sm: "1.3rem", md: "1.05rem" },
                }}
              >
                At our Dindigul center, you’ll find the best of science,
                technology, and personalized care. Whether it’s hair thinning,
                pigmentation issues, premature aging, or any other concern—you’ll
                find solutions tailored just for you, backed by trusted
                professionals.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Image */}
      <Box
        data-aos="fade-up"
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          mr: {lg:10,xs:2,sm:15,md:2},
          maxWidth: 500,
          height: { xs: "300px", sm: "400px", md: "600px" },
        }}
      >
        <Box
          component="img"
          src={AboutImg}
          alt="About Girl"
          sx={{
            width: "90%",
            height: "100%",
            mt: -0.5,
            objectFit: "cover",
            ml: 6,
            position: "relative",
          }}
        />
      </Box>
    </Box>
  );
};

export default Section;