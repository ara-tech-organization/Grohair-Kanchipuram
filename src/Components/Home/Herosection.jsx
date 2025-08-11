import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { borderRadius, styled } from "@mui/system";
import BgImage from "../Images/1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// Oval image styling
const OvalImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "620px",
  height: "500px",
   borderRadius:10,
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    height: "auto",
   
  },
}));

// Gradient background
const GradientBox = styled(Box)({
  padding: "4rem 1rem",
  // minHeight: "80vh",
});

const HeroDesign = () => {
  return (
    <GradientBox  bgcolor={'#f4eae6ff'}
         >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        py={{ xs: 5, md: 6 }}
        mt={{ xs: 4, md: 10 }}
       
        
      >
        {/* LEFT IMAGE - will be at bottom on xs/md */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 0, md: -9,lg:-3 },
          
          }}
          data-aos="fade-up"
        >
          <OvalImage src={BgImage} alt="Skincare" />
        </Grid>

        {/* RIGHT TEXT - will be at top on xs/md */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
          sx={{
            mt: { xs: 2, md: -1 },
            px: { xs: 2, sm: 4, md: 6},
            
          }}
          data-aos="fade-down"
        >
          <Box>
            <Typography
             
              fontWeight="bold"
              sx={{
                fontSize: { xs: "22px", sm: "26px", md: "2.3rem" },
                lineHeight: 1.4,
                mb: 4,
                color: "#ec2828ff",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Hair & Skin Wellness in Kanchipuram – Tailored to Your Lifestyle
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "16px",md:'1.4rem',lg:'1.1rem' },
                color: "#444",
                mb: 6,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              GroHair and GloSkin proudly bring expert care in hair restoration and skin health to Kanchipuram.
              Our certified trichologists and skincare professionals deliver customized treatments focused on
              effective, lasting results.
              <br />
              <br />
              Trusted by countless clients for life-changing transformations and clinical excellence.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </GradientBox>
  );
};

export default HeroDesign;
