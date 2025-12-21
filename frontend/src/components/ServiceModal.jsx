import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const serviceData = {
  GMB: {
    title: 'Google My Business (GMB) Optimization 🚀',
    detail: 'Dominate local searches! We set up, verify, and fully optimize your GMB profile, manage reviews, and post engaging content to ensure your business appears first when customers search nearby.'
  },
  SEO: {
    title: 'SEO & Website Development 🌐',
    detail: 'Get found online. Our service includes technical SEO audits, keyword research, on-page/off-page strategies, and building high-performance, mobile-responsive websites that rank high on Google.'
  },
  GRAPHICS: {
    title: 'Creative Graphics Designing 🎨',
    detail: 'Visual appeal that converts. We design stunning logos, social media creatives, brochures, and marketing materials that align with your brand identity and capture your audience\'s attention.'
  },
  SOCIAL: {
    title: 'Social Media Marketing (SMM) ✨',
    detail: 'Build a vibrant community. We manage your social platforms (Instagram, Facebook, etc.), create engaging content calendars, run targeted ad campaigns, and analyze performance for maximum reach and engagement.'
  },
  INFLUENCER: {
    title: 'Targeted Influencer Marketing 🤝',
    detail: 'Amplify your reach through trusted voices. We identify, vet, and manage collaborations with key influencers whose audience matches your target market, ensuring authentic endorsements and high-impact campaigns.'
  }
};

const ServiceModal = ({ open, serviceType, onClose }) => {
  const service = serviceData[serviceType];

  if (!service) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          animation: 'pop-up-slide 0.5s ease-out',
          '@keyframes pop-up-slide': {
            from: { transform: 'translateY(-50px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 },
          },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {service.title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
              '&:hover': {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 3, pt: 1 }}>
        <DialogContentText sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.primary' }}>
          {service.detail}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;