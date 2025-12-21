import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link } from '@mui/material';
import {
  Instagram,
  WhatsApp,
  Phone,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box id="contact" sx={{ py: 6, bgcolor: '#212529', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 3, pb: 1, borderBottom: '2px solid', borderColor: 'primary.main' }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              infogrowmoredigitals@gmail.com
            </Typography>
            <Typography variant="body1">
              Purshottam Agarwal Marg, Bicholi Mardana, Indore, Madhya Pradesh 452016
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 3, pb: 1, borderBottom: '2px solid', borderColor: 'primary.main' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                component={Link}
                href="https://www.instagram.com/growmore_digital01"
                target="_blank"
                aria-label="Instagram"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    color: '#E4405F',
                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                    transform: 'scale(1.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Instagram />
              </IconButton>
              
              <IconButton
                component={Link}
                href="https://wa.me/919691213327?text=Hey%20can%20I%20get%20more%20information%3F"
                target="_blank"
                aria-label="WhatsApp"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    color: '#25D366',
                    backgroundColor: 'rgba(37, 211, 102, 0.1)',
                    transform: 'scale(1.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <WhatsApp />
              </IconButton>
              
              <IconButton
                onClick={() => alert('📞 Call us at: +91-9691213327')}
                aria-label="Call"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    color: '#4285F4',
                    backgroundColor: 'rgba(66, 133, 244, 0.1)',
                    transform: 'scale(1.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Phone />
              </IconButton>
              
              <IconButton
                component={Link}
                href="mailto:infogrowmoredigitals@gmail.com"
                aria-label="Mail"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    color: '#EA4335',
                    backgroundColor: 'rgba(234, 67, 53, 0.1)',
                    transform: 'scale(1.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid #444', textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} GrowMore Digital. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;