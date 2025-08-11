import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Open popup when page loads
    setOpen(true);

    // ✅ Google Ads Conversion Tracking
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16777025590/dwI5CO7ah4QbELaw9L8-",
        value: 500.0,
        currency: "INR",
      });
    } else {
      console.warn("gtag not found — ensure it's loaded in index.html");
    }
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent sx={{ textAlign: "center", p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="green" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your submission has been received.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "green",
            "&:hover": { bgcolor: "darkgreen" },
          }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYou;
