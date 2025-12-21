import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
} from '@mui/material';
import { submitConsultation } from '../utils/api';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await submitConsultation(formData);
      setMessage('Congratulations! Our experts will reach out to you soon!! 🎉');
      setFormData({ name: '', contact: '', email: '' });
      
      // Auto-hide message after 5 seconds
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } catch (err) {
      setError(err || 'Failed to submit. Please try again.');
    }
  };

  return (
    <Box id="consultation" sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            backgroundColor: 'white',
            color: 'text.primary',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Free Consultation 📞
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
            Book a call with our experts to discuss your business growth plan.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Contact Number"
              name="contact"
              type="tel"
              value={formData.contact}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              Submit
            </Button>
          </form>

          {message && (
            <Alert
              severity="success"
              sx={{ mt: 3 }}
              onClose={() => setMessage('')}
            >
              {message}
            </Alert>
          )}

          {error && (
            <Alert
              severity="error"
              sx={{ mt: 3 }}
              onClose={() => setError('')}
            >
              {error}
            </Alert>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Consultation;