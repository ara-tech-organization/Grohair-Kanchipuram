import React, { useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CountUp from "react-countup";
import TrustImage from "../Images/3.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyTrustSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { label: "Happy Clients", value: 283 },
    { label: "Experienced Specialists", value: 25 },
    { label: "Advanced Technologies", value: 30 },
  ];

  return (
    <Box
      sx={{
        width: '100%' ,
        backgroundColor: "#f4f3f2ff",
        py: { xs: 4, sm: 8, md: -5 ,lg:10},
        mt:{md:-10,lg:15}
      }}
    >
      <Grid container spacing={6} alignItems="center" >
        {/* ✅ Left Text Content */}
        <Grid
          size={{xs:12,lg:6}}
          
          display="flex"
          justifyContent="center"
          data-aos="fade-up"
        >
          <Box
            sx={{
              maxWidth: 500,
              textAlign: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: { xs: "22px", sm: "30px", md: "30px" },
                mb: 2,
              }}
            >
              Why Dindigul Clients Trust Us
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#5f5f5f",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                mb: 4,
              }}
            >
              At GroHair & GloSkin Dindigul, we combine advanced equipment,
              certified specialists, and a client–first mindset. That’s why
              we’re known for our consistent results and top-tier service.
            </Typography>

            {/* ✅ Stats */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 4 },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {stats.map((item, idx) => (
                <Box
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 200}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    p: 2,
                    width:"100px" ,
                    height: "100px" ,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#a97c50"
                    sx={{
                      fontSize: { xs: "18px", sm: "20px", md: "22px" },
                      mt: idx === 0 ? -1 : 0,
                    }}
                  >
                    <CountUp end={item.value} duration={2} suffix="+" />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "14px", sm: "15px" },
                      color: "#333",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* ✅ Right Image */}
        <Grid
         size={{lg:6,xs:12}}
          
          display="flex"
          justifyContent={{ xs: "center", lg: "flex-end" }}
          data-aos="fade-up"
        >
          <Box
            sx={{
             
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={TrustImage}
              alt="Trust Section"
              sx={{
                width: "80%",
                height: "80%",
                objectFit: "cover",
                borderRadius: { xs: "20px", lg: "0 100px 0 100px" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyTrustSection;
