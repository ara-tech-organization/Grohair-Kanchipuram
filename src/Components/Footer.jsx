import React, { useEffect } from "react";
import { Box, Grid, Typography, Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./Images/logo1.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000", pt: 3, color: "#fff", width: "100%" }}>
      <Grid
        container
        spacing={4}
        justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
        alignItems="center"
        textAlign={{ xs: "center", sm: "center", md: "left" }}
        px={{ xs: 2, sm: 4, md: 5 }}
        pb={3}
        mt={{ xs: 3 }}
      >
        {/* Logo & Tagline */}
        <Grid
          size={{ xs: 12, sm: 10, md: 2, lg: 3 }}
          data-aos="fade-down"
          display="flex"
          flexDirection="column"
          mt={2}
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Box>
            <Box
              component="img"
              src={logo}
              alt="GroHair Logo"
              sx={{ width: { xs: 200, sm: 250, md: 280 }, mb: -1, mt: -10 }}
            />
            <Typography fontSize={{ xs: 10, md: 17 }}>
              Restore your confidence today with our expert hair <br />
              restoration solutions. Book your consultation now!
            </Typography>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid
          size={{ xs: 12, sm: 10, md: 3 }}
          ml={{ lg: 0, md: 11 }}
          data-aos="fade-up"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Contact
          </Typography>

          <Typography fontSize={{ xs: 15, md: 17 }} lineHeight={1.6}>
            1st Floor, KTS Towers, Nellukara St,above Federal Bank, Kanchipuram,
            Tamil Nadu 631502
          </Typography>

          <Box display="flex" alignItems="center" mt={2}>
            <PhoneIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography fontSize={{ xs: 15, md: 17 }}>
              +91 97510 56789
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={1.5}>
            <EmailIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography fontSize={{ xs: 15, md: 17 }}>
              Kanchipuram@adgrohair.com
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={1.5}>
            <InstagramIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography
              fontSize={{ xs: 15, md: 17 }}
              component="a"
              href="https://www.instagram.com/adgrohairandgloskinkanchipuram/?hl=en/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Instagram
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={1.5}>
            <FacebookIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography
              fontSize={{ xs: 15, md: 17 }}
              component="a"
              href="https://www.facebook.com/adgrohairandgloskinkanchipuram/videos/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Facebook
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid
          size={{ xs: 12, sm: 10, md: 1, lg: 1 }}
          data-aos="zoom-in"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
          mt={{ lg: -16, sm: 0, md: -22 }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Links
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "2fr 1fr", sm: "1fr 1fr", md: "1fr" }}
            gap={1}
            ml={{ xs: -3, sm: 1 }}
            textAlign={{ xs: "center", sm: "center", md: "left" }}
          >
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((link, i) => (
              <MUILink
                key={i}
                component={RouterLink}
                to={link.path}
                underline="hover"
                color="inherit"
                fontSize={{ xs: 15, md: 16 }}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    fontWeight: "bold",
                    textDecoration: "underline",
                    color: "#e3242b",
                  },
                }}
              >
                {link.label}
              </MUILink>
            ))}
          </Box>
        </Grid>

        {/* Location Map */}
        <Grid
          size={{ xs: 12, sm: 10, md: 3 }}
          data-aos="fade-down"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
          mt={{ lg: -8, md: -15 }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Locations
          </Typography>

          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              overflow: "hidden",
              width: { lg: "100%", md: "100%" },
              height: { xs: 200, sm: 200, md: 180 },
              ml: { sm: 2, lg: -1, md: 0 },
              mr: { md: 0, lg: 0 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0980272400466!2d79.70000458885497!3d12.836941699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c30d834e7333%3A0xf1c8e3638d1aebe9!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Kanchipuram!5e0!3m2!1sen!2sin!4v1754631939220!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              title="GroHair Location"
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          py: 2,
          backgroundColor: "#e3242b",
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography fontSize={{ lg: "1rem", xs: "0.9rem", md: "0.8rem" }}>
          © GroHair & GloSkin. All rights reserved. Website created by{" "}
          <strong>
            ARA Discover Technologies – A unit of ARA Discoveries Pvt. Ltd.
          </strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
