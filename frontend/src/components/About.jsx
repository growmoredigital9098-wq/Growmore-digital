import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          data-aos="fade-up"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          About Us
        </Typography>
        
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Typography
            variant="body1"
            data-aos="fade-right"
            data-aos-delay="200"
            sx={{ mb: 4, fontSize: '1.1rem' }}
          >
            We are providing <strong>best digital marketing services</strong> designed to elevate your brand. Our mission is to partner with businesses like yours to navigate the complexities of the digital world and achieve remarkable results.
          </Typography>
          
          <Typography
            variant="body1"
            data-aos="fade-left"
            data-aos-delay="400"
            sx={{ fontSize: '1.1rem' }}
          >
            <strong>Digital marketing</strong> encompasses all marketing efforts that use an electronic device or the internet. It includes search engine optimization (SEO), social media marketing (SMM), email marketing, and content creation. We ensure a unified strategy across all these channels, focusing on <strong>ROI</strong> and sustainable growth. Our experts craft personalized strategies to not just reach, but <strong>convert</strong> your audience into loyal customers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;