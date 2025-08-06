import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import BgImage from "../Images/1.png";

// Oval image styling
const OvalImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "620px",
  height: "500px",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    height: "auto",
  },
}));

// Gradient background
const GradientBox = styled(Box)({
  padding: "2rem 2rem",
  // minHeight: "80vh",
});

const HeroDesign = () => {
  return (
    <GradientBox>
      <Grid
// height={'50vh'}

        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        py={{ xs: 2, md: 6 }}
        mt={{ xs: 4, md: 10 }}
      >
        {/* LEFT IMAGE */}
        <Grid
         size={{xs:12,lg:6}}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 0, md: -9 },
          }}
        >
          <OvalImage src={BgImage} alt="Skincare" />
        </Grid>

        {/* RIGHT TEXT */}
        <Grid
          size={{xs:12,lg:6}}
          sx={{
            mt: { xs: 2, md: -1},
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "22px", sm: "26px", md: "32px" },
                lineHeight: 1.4,
                mb: 4,
                color: "#ec2828ff",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Hair & Skin Wellness in Dindigul – Tailored to Your Lifestyle
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "16px" },
                color: "#444",
                mb: 6,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              GroHair and GloSkin proudly bring expert care in hair restoration and skin health to Dindigul.
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
