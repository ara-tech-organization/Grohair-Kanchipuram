import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Collapse,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqs = [
  {
    question: 'What does a GloSkin facial session cover?',
    answer: 'Our facials include deep cleansing, exfoliation, hydration, and rejuvenating treatments designed to boost skin glow and clarity',
  },
  {
    question: 'Do your treatments work on sensitive skin?',
    answer: 'Yes! We tailor every service to your skin type—whether its sensitive, oily, dry, or acne-prone—for safe and effective results.',
  },
  {
    question: 'Can you treat acne, pigmentation, or uneven tone?',
    answer: 'Definitely. Our solutions include chemical peels, HydraFacials, and laser therapy to target acne, dark spots, and dull skin',
  },
  {
    question: 'Is laser hair removal available in Dindigul?',
    answer: 'Yes! Our FDA-approved laser tech is safe for all skin types and delivers long-term hair reduction results.',
  },
  {
    question: 'How many sessions do I need for laser hair removal?',
    answer: 'On average, 6 to 8 sessions are needed based on your skin tone, hair texture, and treatment area.',
  },
  {
    question: 'What anti-aging options do you offer?',
    answer: 'We offer collagen induction, RF facials, wrinkle relaxers, and more to firm, lift, and revitalize mature skin.',
  },
  {
    question: 'How frequently should I get a facial at GloSkin?',
    answer: 'For radiant, clear skin, we recommend a facial every 3–4 weeks to manage concerns like breakouts, dryness, or dullness.',
  },
  {
    question: 'How do I get started at GloSkin Dindigul?',
    answer: 'Simply drop by our Dindigul center or reach out online to book a custom skin consultation. Let’s glow!',
  },
];

const FAQSkin = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box  data-aos="fade-up" sx={{ px: 4, py: 10, bgcolor: '#f9f9f9', mb: 4,width:{xs:'85%',lg:'100%',sm:'95%'} }}>
      <Typography fontSize={{XS:'1.1rem',sm:'1.5rem'}} align="center" fontWeight={700} gutterBottom color="#000000ff">
        FREQUENTLY ASKED QUESTION  <Box component="span" color="#ff0000ff">
                        SKIN TREATMENT
                      </Box>
      </Typography>

      <br /><br />

      <Grid container spacing={3} justifyContent="center">
        {faqs.map((faq, index) => (
          <Grid
            item
            key={index}
            xs={2}
            sm={6}
            md={index >= 6 ? 6 : 4}
            data-aos="flip-up"
          >
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                maxWidth: 360,
                margin: 'auto',
                transition: '0.3s',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                onClick={() => toggleIndex(index)}
                sx={{ cursor: 'pointer' }}
              >
                <Box display="flex" alignItems="center" height={50}>
                  <ChevronRightIcon
                    sx={{
                      color: '#e3242b',
                      transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                      mr: 1,
                    }}
                  />
                  <Typography fontWeight={700}>
                    {faq.question}
                  </Typography>
                </Box>
              </Box>
              <Collapse in={openIndex === index}>
                <Typography mt={2} color="text.secondary">
                  {faq.answer}
                </Typography>
              </Collapse>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQSkin;