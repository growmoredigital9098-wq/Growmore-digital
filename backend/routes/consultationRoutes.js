const express = require('express');
const router = express.Router();
const {
  submitConsultation,
  getConsultations,
} = require('../controllers/consultationController');

// Submit consultation form
router.post('/consultation', submitConsultation);

// Get all consultations (optional - for admin dashboard)
router.get('/consultations', getConsultations);

module.exports = router;