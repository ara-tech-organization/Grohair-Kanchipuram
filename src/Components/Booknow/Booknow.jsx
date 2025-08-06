import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../Images/1.png";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputLabel-root": {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& svg": {
    color: "white",
  },
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
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      date: date.format("YYYY-MM-DD"),
      time: timeSlot,
      treatment: treatment,
    };

    try {
      const res = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/naturalsAppoinment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) {
        alert("Appointment booked successfully!");
      } else {
        alert("Failed to book appointment.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 5,
        width: { lg: "100%", sm: "92%", md: "103%" },
      }}
    >
      <Box
        sx={{
          width: { lg: "45%", xs: "60%", sm: "70%" },
          bgcolor: "rgba(0,0,0,0.75)",
          p: 6,
          borderRadius: 3,
          mt: { sm: 10, xs: 10, md: 2, lg: 10 },
        }}
        data-aos="fade-up"
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="#ffffff"
          mb={4}
          data-aos="zoom-in"
        >
          Book Your Appointment
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2} ml={{ lg: 10, md: 10, sm: 4 }}>
            {/* Row 1 */}
            <Grid size={{xs:12,sm:6,lg:6}}  data-aos="fade-up" width={{ lg: 250, sm: 200 }}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{xs:12,sm:6,lg:6}}  data-aos="fade-down" width={{ lg: 250, sm: 200 }}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>

            {/* Row 2 */}
            <Grid size={{xs:12,sm:6,lg:6}}  data-aos="fade-down" width={{ lg: 250, sm: 200 }}>
              <TextField
                fullWidth
                name="email"
                label="Your Email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{xs:12,sm:6,lg:6}}  data-aos="fade-down" width={{ lg: 250, sm: 200 }}>
              <TextField
                fullWidth
                name="mobile"
                label="Your Phone Number"
                value={formData.mobile}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>

            {/* Row 3 */}
            <Grid size={{xs:12,sm:6,lg:6}}  data-aos="fade-up" width={{ lg: 250, sm: 200 }}>
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

            <Grid size={{xs:12,sm:6,lg:6}}  data-aos="fade-up" width={{ lg: 250, sm: 200,xs: 200}}>
              <TextField
                select
                label="Select time slot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                fullWidth
                variant="outlined"
                sx={inputStyles}
                SelectProps={{ displayEmpty: true }}
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

            {/* Row 4 */}
            <Grid item xs={12} lg={12} data-aos="fade-up" width={{ lg: 520, xs: 200, sm: 420, md: 620 }}>
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

            {/* Button */}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              data-aos="zoom-in-up"
              mt={2}
              ml={{ lg: 15, sm: 15, md: 25 }}
            >
              <Button
                onClick={handleSubmit}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#f93949",
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: { lg: "16px", xs: "10px" },
                  borderRadius: "8px",
                  "&:hover": {
                    bgcolor: "#d72b3b",
                  },
                }}
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default BookAppointment;
