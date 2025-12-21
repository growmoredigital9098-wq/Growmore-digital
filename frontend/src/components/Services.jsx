import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Place as MapIcon,
  Language as GlobeIcon,
  Palette as PaletteIcon,
  Share as ShareIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    AOS.refresh();
  }, []);

  const services = [
    {
      id: 'GMB',
      icon: <MapIcon sx={{ fontSize: 50 }} />,
      title: 'Google My Business (GMB)',
      color: '#4285F4',
    },
    {
      id: 'SEO',
      icon: <GlobeIcon sx={{ fontSize: 50 }} />,
      title: 'SEO & Website',
      color: '#34A853',
    },
    {
      id: 'GRAPHICS',
      icon: <PaletteIcon sx={{ fontSize: 50 }} />,
      title: 'Graphics Designing',
      color: '#EA4335',
    },
    {
      id: 'SOCIAL',
      icon: <ShareIcon sx={{ fontSize: 50 }} />,
      title: 'Social Media Marketing',
      color: '#FBBC05',
    },
    {
      id: 'INFLUENCER',
      icon: <PeopleIcon sx={{ fontSize: 50 }} />,
      title: 'Influencer Marketing',
      color: '#8E44AD',
    },
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  return (
    <Box id="services" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          data-aos="fade-up"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Our Expert Services
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                data-aos="zoom-in-up"
                data-aos-delay={(index + 1) * 100}
                onClick={() => handleServiceClick(service.id)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px) scale(1.02)',
                    boxShadow: (theme) => `0 10px 30px ${service.color}4D`,
                    backgroundColor: service.color,
                    color: 'white',
                    '& .MuiSvgIcon-root': {
                      color: 'white',
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                    textAlign: 'center',
                  }}
                >
                  <IconButton
                    sx={{
                      mb: 2,
                      color: service.color,
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {service.icon}
                  </IconButton>
                  <Typography variant="h5" component="div" fontWeight={600}>
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ServiceModal
        open={modalOpen}
        serviceType={selectedService}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
};

export default Services;