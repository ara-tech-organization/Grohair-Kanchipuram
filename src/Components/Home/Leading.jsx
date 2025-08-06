import React from "react";
import { Box, Typography, Grid, Avatar, useTheme, useMediaQuery } from "@mui/material";

// ✅ Import MUI icons
import FaceIcon from "@mui/icons-material/FaceRetouchingNatural";
import SpaIcon from "@mui/icons-material/Spa";
import HealingIcon from "@mui/icons-material/Healing";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// ✅ Features array with icon components
const iconData = [
  { icon: <FaceIcon fontSize="large" />, label: "Hair Care" },
  { icon: <SpaIcon fontSize="large" />, label: "Skin Treatments" },
  { icon: <HealingIcon fontSize="large" />, label: "Laser Therapies" },
  { icon: <EmojiEmotionsIcon fontSize="large" />, label: "Cosmetic Procedures" },
  { icon: <AutoAwesomeIcon fontSize="large" />, label: "Anti-Aging" },
];

const Leading = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4, md: 12 }, textAlign: "center", backgroundColor: "#fefcf9",mt:-5 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#e61928",
          mb: 3,
          fontSize: { xs: "24px", sm: "32px", md: "30px" },
        }}
      >
        Leading Hair & Skin Treatments at GroHair & GloSkin – Chidambaram
      </Typography>

      <Typography
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: { xs: "15px", sm: "17px",lg:'1.2rem' },
          color: "#555",
        }}
      >
        At GroHair & GloSkin Chidambaram, we use proven hair restoration techniques and modern dermatological skincare.
        Our team pairs advanced tech with clinical expertise for results that are not just visible, but long-lasting.
      </Typography>

      <Typography
        sx={{
          mt: 2,
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: { xs: "15px", sm: "17px",lg:'1.2rem' },
          color: "#555",
        }}
      >
        Whatever your goal—restoring hair volume, achieving clearer skin, or exploring cosmetic treatments—our
        Chidambaram clinic is equipped to meet it.
      </Typography>

      {/* ✅ Icons row */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 5 }}>
        {iconData.map((item, index) => (
          <Grid size={{xs:6,sm:4,lg:2}}  key={index} sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                width: 70,
                height: 70,
                mx: "auto",
                mb: 1,
                backgroundColor: index === 0 ? "#e61928" : "#fff",
                color: index === 0 ? "#fff" : "#e61928",
              }}
            >
              {item.icon}
            </Avatar>
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.75rem" },
                mt: 0.5,
                fontWeight: 500,
              }}
            >
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Leading;