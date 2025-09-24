// src/Components/BookAppointment.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import bgImage from "../Images/1.jpg";
import emailjs from "@emailjs/browser";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputLabel-root": {
    color: "white",
    "&.Mui-focused": { color: "white" },
  },
  "& .MuiInputBase-input": { color: "white" },
  "& svg": { color: "white" },
};

const BookAppointment = () => {
  const [date, setDate] = useState(dayjs());
  const [timeSlot, setTimeSlot] = useState("");
  const [treatment, setTreatment] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    time: new Date().toLocaleString(),
  });

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOk = () => {
    setOpen(false);
    navigate("/thankyou");
  };

  // ✅ Using EmailJS instead of backend fetch
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mgzuppo", // Your Service ID
        "template_4049eny", // Your Template ID
        formRef.current,
        "VDlSCc2kgMbOtg_fj" // Your Public Key
      )
      .then(
        () => {
          setOpen(true);
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            time: new Date().toLocaleString(),
          });
          setTimeSlot("");
          setTreatment("");
          setDate(dayjs());
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to book appointment.");
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: { lg: "100vh", sm: "60vh" },
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 5,
        width: { lg: "100%", sm: "92%", md: "95%" },
      }}
    >
      <Box
        sx={{
          width: { lg: "45%", xs: "60%", sm: "70%" },
          bgcolor: "rgba(0,0,0,0.75)",
          p: 6,
          borderRadius: 3,
          mt: { sm: 8, xs: 10, md: 2, lg: 10 },
        }}
        data-aos="fade-up"
      >
        <Typography
          fontSize={{ xs: "1.5rem" }}
          align="center"
          fontWeight="bold"
          color="#ffffff"
          mb={4}
          data-aos="zoom-in"
        >
          Book Your Appointment
        </Typography>

        {/* ✅ EmailJS Form */}
        <Box component="form" ref={formRef} onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  sx={inputStyles}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  sx={inputStyles}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  label="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={inputStyles}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                <TextField
                  fullWidth
                  type="tel"
                  name="mobile"
                  label="Your Phone Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  variant="outlined"
                  sx={inputStyles}
                  required
                />
              </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <DatePicker
                value={date}
                onChange={(newDate) => setDate(newDate)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    InputLabelProps: {
                      shrink: true,
                      sx: {
                        color: "white",
                        "&.Mui-focused": { color: "white" },
                      },
                    },
                    InputProps: {
                      sx: {
                        color: "white",
                        "& input": {
                          color: "white",
                          caretColor: "white",
                        },
                        "& .MuiSvgIcon-root": { color: "white" },
                      },
                    },
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "transparent",
                        "& fieldset": { borderColor: "white" },
                        "&:hover fieldset": { borderColor: "white" },
                        "&.Mui-focused fieldset": { borderColor: "white" },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </Grid>

              <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                <TextField
                  select
                  name="timeSlot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  fullWidth
                  variant="outlined"
                  sx={inputStyles}
                  SelectProps={{ displayEmpty: true }}
                  required
                >
                  <MenuItem value="" disabled>
                    Select time slot
                  </MenuItem>
                  {[
                    "10.00 AM to 11:00 AM",
                    "11.00 AM to 12:00 PM",
                    "12.00 PM to 1:00 PM",
                    "1.00 PM to 2:00 PM",
                    "2.00 PM to 3:00 PM",
                    "3.00 PM to 4:00 PM",
                    "4.00 PM to 5:00 PM",
                    "5.00 PM to 6:00 PM",
                    "6.00 PM to 7:00 PM",
                    "7.00 PM to 8:00 PM",
                  ].map((slot) => (
                    <MenuItem key={slot} value={slot}>
                      {slot}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, lg: 12 }}>
              <FormControl fullWidth sx={inputStyles}>
                <InputLabel shrink htmlFor="treatment-select">
                  Select Treatment
                </InputLabel>
                <Select
                  id="treatment-select"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  label="Select Treatment"
                  displayEmpty
                  notched
                >
                  <MenuItem value="Facial">Facial</MenuItem>
                  <MenuItem value="Hair Treatment">Hair Treatment</MenuItem>
                  <MenuItem value="Skin Peel">Skin Peel</MenuItem>
                </Select>
              </FormControl>
            </Grid>

              {/* ✅ hidden field for current time */}
              <input type="hidden" name="time" value={formData.time} />

              <Grid
                size={{ xs: 12, sm: 12, lg: 12 }}
                display="flex"
                justifyContent="center"
                data-aos="zoom-in-up"
                mt={2}
                // ml={{ lg: 12, sm: 15, md: 20, xs: -1 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#f93949",
                    px: 5,
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: { lg: "16px", xs: "10px" },
                    borderRadius: "8px",
                    "&:hover": { bgcolor: "#d72b3b" },
                  }}
                >
                  Book Appointment
                </Button>

                {/* Success Dialog */}
                <Dialog open={open} onClose={handleOk}>
                  <DialogTitle>Booking Confirmed ✅</DialogTitle>
                  <DialogContent>
                    <Typography>
                      Your appointment has been booked successfully!
                    </Typography>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleOk}
                      sx={{ mt: 2 }}
                    >
                      OK
                    </Button>
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default BookAppointment;
