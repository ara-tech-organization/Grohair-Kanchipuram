import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import quote from '../Images/quotation.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Sneha Raj',
    text: "Never thought I'd love my skin this much. Every session was pure magic. The glow is real!",
    rating: 5,
  },
  {
    name: 'Bhavik Kumar',
    text: "Professional, clean, and deeply caring.Dindigul needed a place like this. Blessings!",
    rating: 5,
  },
  {
    name: 'Meera Laxmi',
    text: "Doctor explained every detail with patience. My acne is gone and confidence is back.",
    rating: 5,
  },
  {
    name: 'Harish V',
    text: "From bald spots to full locks—what a transformation! Truly life-changing care.",
    rating: 5,
  },
  {
    name: 'Lavanya Devi',
    text: "Super hygienic, welcoming staff, and great follow-up. I'm beyond satisfied.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const scrollRef = useRef();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#fff',
        ml: { sm: -10, xs: 1,md:-15 ,lg:-3},
      }}
    >
      <Typography
        fontSize={{ xs: '1.5rem', lg: '2rem', sm: '2rem' }}
        align="center"
        fontWeight={700}
        color="#fa1212ff"
        ml={{ sm: 8 }}
        mb={5}
        data-aos="fade-up"
      >
        What Our Clients Say
      </Typography>

      <Box position="relative" sx={{ px: 2 }}>
        <Box data-aos="fade-up"
          ref={scrollRef}
          sx={{
            display: isMdUp ? 'flex' : 'grid',
            overflowX: isMdUp ? 'auto' : 'visible',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            gap: 2,
            ml: { sm: 20,lg:4 ,md:20,xs:1
            },
            p: 1,
            gridTemplateColumns: isXs
              ? '1fr'
              : isSm
              ? 'repeat(1, 1fr)'
              : 'none',
            justifyContent: isMdUp ? 'flex-start' : 'center',
          }}
        >
          {testimonials.map((item, index) => (
            <Paper
              key={index}
              data-aos="fade-up"
              onClick={() =>
                setClickedIndex(index === clickedIndex ? null : index)
              }
              sx={{
                width: '80%',
                ml: { xs: 2, lg: 0 },
                height: isMdUp ? 390 : 'auto',
                borderRadius: '20px',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                
              }}
            >
              {/* Quote Icon */}
              <Box
                component="img"
                src={quote}
                alt="quote"
                sx={{
                  width: 70,
                  height: 90,
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  opacity: 2
                }}
              />

              {/* Content */}
              <Box mt={12}>
                <Typography
                  sx={{ fontSize: { lg: '1.5rem', xs: '1.2rem' } }}
                  fontWeight={700}
                  gutterBottom
                >
                  {item.name}
                </Typography>
                <Typography
                  fontSize={{ lg: 20, xs: '1rem' }}
                  color="text.secondary"
                >
                  {item.text}
                </Typography>
              </Box>

              {/* Stars */}
              <Box mt={2}>
                {Array.from({ length: item.rating }, (_, i) => (
                  <StarIcon key={i} sx={{ color: '#FFC107', fontSize: 20 }} />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsCarousel;