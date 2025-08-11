// src/Components/Touch.jsx
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  MenuItem,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Touch = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [timeSlot, setTimeSlot] = useState("");
  const [treatment, setTreatment] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      date: selectedDate.format("YYYY-MM-DD"),
      time: timeSlot,
      treatment: treatment,
    };

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/naturalsAppoinment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 123`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Appointment submitted successfully!");
        setFormData({ firstName: "", lastName: "", email: "", mobile: "" });
        setTimeSlot("");
        setTreatment("");
        setSelectedDate(dayjs());
      } else {
        const errorData = await response.json();
        alert("Failed to submit: " + errorData.message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form.");
    }
  };

  const fieldStyle = {
    width: "90%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#888", // grey border
      },
      "&:hover fieldset": {
        borderColor: "#888",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#888",
      },
    },
    "& input::placeholder": {
      color: "#000",
      opacity: 1,
    },
    "& .MuiSelect-select": {
      color: "#000",
    },
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiInputLabel-root": {
      color: "#000",
    },
    "& .Mui-focused": {
      color: "#000",
    },
  };

  const labelProps = {
    shrink: true,
    sx: {
      color: "#000",
      "&.Mui-focused": {
        color: "#000",
      },
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8, lg: 10 },
        py: 6,
        bgcolor: "#fff",
        mt: 10,
        ml: { md: 17, lg: 0 },
      }}
    >
      <Grid container spacing={4} data-aos="fade-up">
        <Grid size={{ xs: 12, lg: 4 }} width={{ lg: "50%", xs: "100%" ,md:'80%'}}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight="bold" align="center">
              Get in{" "}
              <Box component="span" color="#ff0000ff">
                Touch
              </Box>
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate mt={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <TextField
                  placeholder="Enter your first name"
                  required
                  sx={fieldStyle}
                  InputLabelProps={labelProps}
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                />
                <TextField
                  placeholder="Enter your last name"
                  required
                  sx={fieldStyle}
                  InputLabelProps={labelProps}
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                />
                <TextField
                  type="email"
                  placeholder="Enter your email"
                  required
                  sx={fieldStyle}
                  InputLabelProps={labelProps}
                  value={formData.email}
                  onChange={handleChange("email")}
                />
                <TextField
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  sx={fieldStyle}
                  InputLabelProps={labelProps}
                  value={formData.mobile}
                  onChange={handleChange("mobile")}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        sx: {
                          ...fieldStyle,
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#000000 !important",
                            },
                            "&:hover fieldset": {
                              borderColor: "#000000 !important",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#000000 !important",
                            },
                          },
                          "& .MuiInputAdornment-root svg": {
                            color: "#000000 !important",
                          },
                        },
                        InputLabelProps: labelProps,
                      },
                    }}
                  />
                </LocalizationProvider>

                <TextField
                  select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  fullWidth
                  sx={fieldStyle}
                  InputLabelProps={labelProps}
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
                <TextField
                  select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  fullWidth
                  sx={fieldStyle}
                  InputLabelProps={labelProps}
                  SelectProps={{ displayEmpty: true }}
                >
                  <MenuItem value="" disabled>
                    Select treatment
                  </MenuItem>
                  {["Facial", "Hair Treatment", "Skin Peel"].map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, bgcolor: "#ef0030ff", width: "90%" }}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>

            <Grid container spacing={2} mt={4} alignItems="center">
              <Grid size={{ xs:8, sm: 4 }}  >
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  ml={{ lg: 4 ,md:1,sm:3,xs:2}}
                >
                  <PhoneIcon fontSize="small" />
                  <Box>
                    <Typography variant="body2">PHONE</Typography>
                    <Typography fontSize={{xs:'0.80rem'}} fontWeight="bold">
                      097510 56789

                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 2, sm: 4 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={{md:5,lg:3,xs:3,sm:6}}
                  ml={{ xs: -1, md:1,lg:1 }}
                >
                  <Link
                    href="https://www.instagram.com/yourusername"
                    target="_blank"
                    color="inherit"
                    underline="none"
                  >
                    <InstagramIcon fontSize="medium" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/adgrohairclinicdindigul"
                    target="_blank"
                    color="inherit"
                    underline="none"
                  >
                    <FacebookIcon fontSize="medium" />
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  ml={{ lg: -10, xs: 2 ,md:-5,sm:-5}}
                >
                  <EmailIcon fontSize="small" />
                  <Box>
                    <Typography variant="body2">EMAIL</Typography>
                    <Typography fontSize={{xs:'0.70rem',sm:'0.80'}} fontWeight="bold" color="#000">
                     adgrokanchipuram@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 ,lg:5}}>
          <Box
            sx={{
              width: { lg: "120%", xs: "90%", sm: "90%", md: "150%" },
              height: "90%",
              minHeight: 400,
              borderRadius: 2,
              overflow: "hidden",
              mt: 5,
              ml: { xs: 2, md: 3,sm:5 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0980272400466!2d79.70000458885497!3d12.836941699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c30d834e7333%3A0xf1c8e3638d1aebe9!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Kanchipuram!5e0!3m2!1sen!2sin!4v1754631939220!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Touch;
